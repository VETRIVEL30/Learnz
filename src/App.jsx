import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpiderManChar, BossChar } from "./characters";
import {
  KING_DIALOGUES, LABELS, LEVELS,
  advance, createSession, evaluate, finishSession,
  isLevelUnlocked, loadProfile, mapData, saveProfile
} from "./gameEngine";

/* ── Spider-Man hero options ── */
const HEROES = [
  { id: "spidey",  label: "Spider-Man",   color: "#CC0000" },
  { id: "miles",   label: "Miles Morales", color: "#1a1a2e" },
  { id: "gwen",    label: "Spider-Gwen",  color: "#e8e8e8" },
  { id: "iron",    label: "Iron Spider",  color: "#b8860b" },
  { id: "punk",    label: "Spider-Punk",  color: "#7B1FA2" },
  { id: "2099",    label: "Spider-2099",  color: "#1565C0" },
];

const levelBoss = {
  basic:        { name: "Green Goblin",  line: "Heh heh heh! Let's test your fundamentals!", taunt: "No one escapes the Green Goblin!" },
  intermediate: { name: "Doctor Octopus", line: "My superior intellect will crush you!", taunt: "My tentacles predicted your every move!" },
  advanced:     { name: "Venom",          line: "WE are the last challenge. Face your doom.", taunt: "WE will CONSUME your knowledge!" },
};

/* ── Framer screen wrapper ── */
function Screen({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`screen ${className}`}
    >{children}</motion.section>
  );
}

/* ── World-map web SVG overlay ── */
function WebMapSVG({ worlds, onSelect }) {
  // 6 nodes in a honeycomb layout around a center
  const cx = 300, cy = 260, r = 170;
  const angles = [270, 330, 30, 90, 150, 210]; // degrees
  const nodes  = worlds.map((w, i) => {
    const rad = (angles[i] * Math.PI) / 180;
    return { ...w, x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  return (
    <svg viewBox="0 0 600 520" className="web-map-svg">
      {/* Radial web lines from center */}
      {nodes.map((n) => (
        <line key={`r-${n.world}`} x1={cx} y1={cy} x2={n.x} y2={n.y}
          stroke="rgba(200,200,255,0.18)" strokeWidth="1.5" strokeDasharray="6 4"/>
      ))}
      {/* Outer ring web lines */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <line key={`o-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke="rgba(200,200,255,0.12)" strokeWidth="1" strokeDasharray="5 5"/>
        );
      })}
      {/* Inner web arcs */}
      {nodes.map((n, i) => {
        const opp = nodes[(i + 3) % nodes.length];
        return (
          <line key={`d-${i}`} x1={n.x} y1={n.y} x2={opp.x} y2={opp.y}
            stroke="rgba(200,200,255,0.06)" strokeWidth="1"/>
        );
      })}

      {/* Center spider emblem */}
      <circle cx={cx} cy={cy} r="28" fill="#0d0d1a" stroke="#CC0000" strokeWidth="2"/>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="26" fill="#CC0000">🕷️</text>

      {/* District nodes */}
      {nodes.map((n) => (
        <g key={n.world} className={`map-node ${n.unlocked ? "map-node--on" : "map-node--off"}`}
          onClick={() => n.unlocked && onSelect(n.world)}
          style={{ cursor: n.unlocked ? "pointer" : "not-allowed" }}>
          {/* Glow ring for unlocked */}
          {n.unlocked && (
            <circle cx={n.x} cy={n.y} r="42" fill="none"
              stroke="#CC0000" strokeWidth="1.5" opacity="0.35" className="node-glow-ring"/>
          )}
          {/* Node circle */}
          <circle cx={n.x} cy={n.y} r="36"
            fill={n.unlocked ? "rgba(180,20,20,0.22)" : "rgba(50,50,60,0.4)"}
            stroke={n.unlocked ? "#CC0000" : "#555"}
            strokeWidth={n.unlocked ? "2" : "1"}/>
          {/* Fort dots */}
          {n.forts.map((cleared, fi) => (
            <circle key={fi} cx={n.x - 14 + fi * 14} cy={n.y + 22} r="4"
              fill={cleared ? "#FF9800" : "rgba(255,255,255,0.2)"}/>
          ))}
          {/* Label */}
          <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize="11"
            fill={n.unlocked ? "#fff" : "#888"} fontWeight="700">
            {n.label.split(" ")[0]}
          </text>
          <text x={n.x} y={n.y + 10} textAnchor="middle" fontSize="10"
            fill={n.unlocked ? "#ffaaaa" : "#666"}>
            {n.label.split(" ").slice(1).join(" ")}
          </text>
          {/* Lock icon */}
          {!n.unlocked && (
            <text x={n.x} y={n.y - 16} textAnchor="middle" fontSize="14" fill="#555">🔒</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════════════════ */
export default function App() {
  const [view,        setView]        = useState("welcome");
  const [profile,     setProfile]     = useState(() => loadProfile());
  const [heroName,    setHeroName]    = useState(profile.playerName || "");
  const [hero,        setHero]        = useState(profile.hero || HEROES[0]);
  const [world,       setWorld]       = useState(null);
  const [session,     setSession]     = useState(null);
  const [result,      setResult]      = useState(null);
  const [selected,    setSelected]    = useState(null);
  const [levelIntro,  setLevelIntro]  = useState(null);
  const [battleMeta,  setBattleMeta]  = useState(null);
  const [musicOn,     setMusicOn]     = useState(false);

  const audioCtxRef  = useRef(null);
  const musicStop    = useRef(false);
  const worlds       = useMemo(() => mapData(profile), [profile]);
  const currentQ     = session?.questions[session.index];

  /* ── Quiz timer ── */
  useEffect(() => {
    if (!session || view !== "quiz") return;
    const id = setInterval(() => {
      setSession((s) => {
        if (!s) return s;
        if (s.timer <= 1) { handleAnswer(-1, true); return s; }
        return { ...s, timer: s.timer - 1 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [session?.index, view]);

  /* ── Battle cinematic auto-advance ── */
  useEffect(() => {
    if (view !== "battle" || !battleMeta) return;
    const id = setTimeout(() => {
      setSession(createSession(world, battleMeta.level));
      setView("quiz");
    }, 3200);
    return () => clearTimeout(id);
  }, [view, battleMeta]);

  /* ── Music (fixed: AudioContext created synchronously on click) ── */
  function playNote(ctx, freq, when, dur) {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type   = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.06, when);
    gain.gain.exponentialRampToValueAtTime(0.001, when + dur);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(when); osc.stop(when + dur + 0.05);
  }

  function startMusicLoop(ctx) {
    const melody = [330, 294, 262, 294, 330, 330, 330, 294, 294, 294, 330, 392, 392];
    const beat   = 0.28;
    let t        = ctx.currentTime + 0.05;
    const schedule = () => {
      if (musicStop.current || ctx.state === "closed") return;
      melody.forEach((f, i) => playNote(ctx, f, t + i * beat, beat * 0.8));
      t += melody.length * beat;
      setTimeout(schedule, melody.length * beat * 900);
    };
    schedule();
  }

  function toggleMusic() {
    if (musicOn) {
      musicStop.current = true;
      setMusicOn(false);
      return;
    }
    try {
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      musicStop.current = false;
      audioCtxRef.current.resume().then(() => {
        startMusicLoop(audioCtxRef.current);
        setMusicOn(true);
      });
    } catch (e) {
      console.warn("Audio not available", e);
    }
  }

  /* ── Handlers ── */
  function startAdventure() {
    const next = { ...profile, playerName: heroName.trim() || "Spider-Hero", hero };
    saveProfile(next); setProfile(next); setView("map");
  }

  const handleAnswer = useCallback((index, timed = false) => {
    setSession((s) => {
      if (!s || selected !== null) return s;
      const { next, correct, correctIndex } = evaluate(s, index, timed);
      setSelected({ chosen: index, correctIndex, correct });
      setTimeout(() => {
        if (next.lives <= 0) { setView("gameover"); setSelected(null); return; }
        const moved = advance(next);
        if (moved.hasMore) {
          setSession(moved.session); setSelected(null);
        } else {
          setSession(null);
          setProfile((p) => {
            const final = finishSession(p, next);
            setResult(final.result);
            return final.profile;
          });
          setSelected(null);
          setView("result");
        }
      }, 700);
      return next;
    });
  }, [selected]);

  function onAnswer(index) { handleAnswer(index, false); }

  function startBattle(level) {
    setBattleMeta({ level, ...levelBoss[level] });
    setView("battle");
  }

  const timerPct = session ? (session.timer / 30) * 100 : 100;

  /* ════════════════════════ RENDER ════════════════════════ */
  return (
    <div className="app">
      {/* ── Background ── */}
      <div className="bg-sky"/>
      <div className="bg-stars"/>
      <div className="bg-city-back"/>
      <div className="bg-city-front"/>
      <div className="web-deco"/>

      <AnimatePresence mode="wait">

        {/* ──────────── WELCOME ──────────── */}
        {view === "welcome" && (
          <Screen key="welcome">
            <div className="welcome-wrap">
              {/* Left: hero character */}
              <div className="welcome-hero">
                <div className="welcome-char">
                  <SpiderManChar size={160}/>
                </div>
                <div className="web-line-deco"/>
              </div>

              {/* Right: form */}
              <div className="panel welcome-form">
                <h1 className="title">🕷️ LearnFunZ</h1>
                <p className="subtitle">Spider Edition — Beat villains by mastering tech skills</p>

                <label className="field-label">Hero Alias</label>
                <input
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  placeholder="Enter your hero name..."
                  onKeyDown={(e) => e.key === "Enter" && startAdventure()}
                />

                <label className="field-label" style={{ marginTop: 8 }}>Choose Your Spider</label>
                <div className="hero-grid">
                  {HEROES.map((h) => (
                    <button
                      key={h.id}
                      className={`hero-btn ${hero.id === h.id ? "hero-btn--active" : ""}`}
                      style={{ "--hc": h.color }}
                      onClick={() => setHero(h)}
                    >
                      <span className="hero-icon">🕷️</span>
                      <span className="hero-name">{h.label}</span>
                    </button>
                  ))}
                </div>

                <div className="btn-row" style={{ marginTop: 20 }}>
                  <button className="btn btn--primary" onClick={startAdventure}>
                    Swing Into Action! 🕸️
                  </button>
                  <button className="btn" onClick={toggleMusic}>
                    {musicOn ? "🔇 Mute" : "🎵 Music"}
                  </button>
                </div>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── MAP ──────────── */}
        {view === "map" && (
          <Screen key="map">
            <div className="map-header">
              <button className="btn btn--sm" onClick={() => setView("welcome")}>← Back</button>
              <div className="hero-tag">
                <span style={{ fontSize: "1.5rem" }}>🕷️</span>
                <strong>{profile.playerName}</strong>
                <span className="tag-badge">{profile.hero?.label || "Spider-Man"}</span>
              </div>
              <div className="score-tag">🏆 {profile.totalScore}</div>
            </div>

            <div className="panel map-panel">
              <h2 className="title-sm" style={{ textAlign: "center", marginBottom: 4 }}>New York City Realms</h2>
              <p className="subtitle" style={{ textAlign: "center", marginBottom: 0 }}>
                Tap a district to enter. Defeat all three villains to master it.
              </p>
              <WebMapSVG worlds={worlds} onSelect={(w) => { setWorld(w); setView("dialog"); }}/>

              {/* Legend */}
              <div className="map-legend">
                <span><span className="legend-dot legend-dot--on"/>Unlocked</span>
                <span><span className="legend-dot legend-dot--clear"/>Cleared</span>
                <span><span className="legend-dot legend-dot--lock"/>🔒 Locked</span>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── DIALOG ──────────── */}
        {view === "dialog" && (
          <Screen key="dialog">
            <div className="panel dialog-panel">
              <div className="duel-stage">
                <div className="duel-fighter">
                  <SpiderManChar size={120}/>
                  <div className="fighter-name">{profile.playerName}</div>
                </div>
                <div className="vs-badge">VS</div>
                <div className="duel-fighter">
                  <BossChar level="basic" size={120}/>
                  <div className="fighter-name villain-name">Villain King</div>
                </div>
              </div>
              <h2 className="title-sm" style={{ textAlign: "center" }}>{LABELS[world]}</h2>
              <blockquote className="dialogue">"{KING_DIALOGUES[world]}"</blockquote>
              <div className="btn-row">
                <button className="btn btn--primary" onClick={() => setView("levels")}>
                  Enter Realm 🕸️
                </button>
                <button className="btn" onClick={() => setView("map")}>← Map</button>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── LEVELS ──────────── */}
        {view === "levels" && (
          <Screen key="levels">
            <div className="panel">
              <div className="levels-header">
                <button className="btn btn--sm" onClick={() => setView("map")}>← Map</button>
                <h2 className="title-sm">{LABELS[world]}</h2>
                <div/>
              </div>
              <p className="subtitle" style={{ textAlign: "center" }}>
                Defeat each villain to unlock the next fortress
              </p>

              <div className="path-wrap">
                <div className="path-line"/>
                <div className="level-grid">
                  {LEVELS.map((level) => {
                    const open = isLevelUnlocked(profile, world, level);
                    const rec  = profile.completed[`${world}.${level}`];
                    return (
                      <button
                        key={level}
                        className={`level-card ${open ? "level-card--on" : "level-card--off"}`}
                        disabled={!open}
                        onClick={() => { setLevelIntro(level); setView("levelIntro"); }}
                      >
                        <div className="level-char">
                          <BossChar level={level} size={80}/>
                        </div>
                        <div className="level-info">
                          <strong className="level-tier">{level.toUpperCase()}</strong>
                          <span className="level-boss-name">{levelBoss[level].name}</span>
                          <span className="level-status">
                            {rec
                              ? (rec.passed
                                  ? `✅ ${rec.percent}% — Cleared!`
                                  : `❌ ${rec.percent}% — Retry`)
                              : "Not cleared yet"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── LEVEL INTRO ──────────── */}
        {view === "levelIntro" && levelIntro && (
          <Screen key="levelIntro">
            <div className="panel dialog-panel">
              <div className="duel-stage">
                <div className="duel-fighter">
                  <SpiderManChar size={130}/>
                  <div className="fighter-name">{profile.playerName}</div>
                </div>
                <div className="vs-badge">VS</div>
                <div className="duel-fighter">
                  <BossChar level={levelIntro} size={130}/>
                  <div className="fighter-name villain-name">{levelBoss[levelIntro].name}</div>
                </div>
              </div>
              <blockquote className="dialogue">"{levelBoss[levelIntro].line}"</blockquote>
              <div className="btn-row">
                <button className="btn btn--primary" onClick={() => startBattle(levelIntro)}>
                  Fight {levelBoss[levelIntro].name}! 💥
                </button>
                <button className="btn" onClick={() => setView("levels")}>← Back</button>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── BATTLE CINEMATIC ──────────── */}
        {view === "battle" && battleMeta && (
          <Screen key="battle">
            <div className="panel battle-panel">
              <h2 className="title-sm battle-title">⚡ Battle Start!</h2>

              <div className="clash-arena">
                <div className="clash-hero">
                  <SpiderManChar size={120}/>
                </div>
                <div className="clash-impact">
                  <span className="impact-boom">💥</span>
                  <span className="impact-stars">✨</span>
                </div>
                <div className="clash-villain">
                  <BossChar level={battleMeta.level} size={120}/>
                </div>
              </div>

              <div className="web-shoot-row">
                <div className="web-shoot-bar"/>
              </div>

              <blockquote className="battle-taunt">
                🎃 "{battleMeta.taunt}"
              </blockquote>

              <div className="countdown-wrap">
                <div className="countdown-fill"/>
                <span className="countdown-label">Quiz starts in 3 seconds…</span>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── QUIZ ──────────── */}
        {view === "quiz" && session && currentQ && (
          <Screen key="quiz">
            <div className="panel quiz-panel">
              {/* Top bar */}
              <div className="quiz-topbar">
                <button className="btn btn--sm" onClick={() => setView("levels")}>← Quit</button>
                <div className="quiz-loc">
                  {LABELS[session.world]} · {session.level.toUpperCase()}
                  · Q{session.index + 1}/{session.questions.length}
                </div>
                <div className={`timer-num ${session.timer <= 8 ? "timer-danger" : ""}`}>
                  ⏱ {session.timer}s
                </div>
              </div>

              {/* Timer bar */}
              <div className="timer-track">
                <div className="timer-fill" style={{ width: `${timerPct}%`,
                  background: timerPct < 30 ? "#ff5252" : timerPct < 60 ? "#FF9800" : "#CC0000" }}/>
              </div>

              {/* Fighter strip */}
              <div className="quiz-fighters">
                <div className="qf-player">
                  <SpiderManChar size={52}/>
                  <div className="qf-name">{profile.playerName}</div>
                  <div className="qf-lives">
                    {"❤️".repeat(Math.max(0, session.lives))}
                    {"🖤".repeat(Math.max(0, 3 - session.lives))}
                  </div>
                </div>
                <div className="qf-center">
                  <div className="combo-tag">🔥 ×{Math.max(1, session.combo)}</div>
                  <div className="pts-tag">🏆 {session.points}</div>
                </div>
                <div className="qf-boss">
                  <BossChar level={session.level} size={52}/>
                  <div className="qf-name qf-boss-name">{levelBoss[session.level].name}</div>
                </div>
              </div>

              {/* Question */}
              <div className="q-card">
                <span className="q-badge">{currentQ.type}</span>
                {currentQ.code && <pre className="q-code">{currentQ.code}</pre>}
                <p className="q-text">{currentQ.question}</p>
              </div>

              {/* Options */}
              <div className="opts">
                {currentQ.options.map((opt, idx) => {
                  let cls = "opt";
                  if (selected?.correctIndex === idx) cls += " opt--right";
                  if (selected?.chosen === idx && selected.correctIndex !== idx) cls += " opt--wrong";
                  return (
                    <button
                      key={idx} className={cls}
                      disabled={selected !== null}
                      onClick={() => onAnswer(idx)}
                    >
                      <span className="opt-letter">{["A", "B", "C", "D"][idx]}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── RESULT ──────────── */}
        {view === "result" && result && (
          <Screen key="result">
            <div className="panel result-panel">
              <div className="result-char">
                {result.passed ? <SpiderManChar size={150}/> : <BossChar level={levelIntro || "basic"} size={150}/>}
              </div>
              <h2 className={`result-title ${result.passed ? "result-win" : "result-lose"}`}>
                {result.passed ? "🎉 Villain Defeated!" : "💀 Spider-Man Down..."}
              </h2>
              <p className="result-sub">
                {result.passed
                  ? "New York is safe. The district is cleared!"
                  : "Need 70%+ accuracy with at least 1 life. You can do it!"}
              </p>
              <div className="result-stats">
                <div className="stat-box"><div className="stat-val">{result.score}</div><div className="stat-key">Points</div></div>
                <div className="stat-box"><div className="stat-val">{result.percent}%</div><div className="stat-key">Accuracy</div></div>
                <div className="stat-box"><div className="stat-val">{result.correct}/{result.total}</div><div className="stat-key">Correct</div></div>
              </div>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <button className="btn btn--primary" onClick={() => setView("map")}>🗺️ Map</button>
                <button className="btn" onClick={() => setView("levels")}>🔄 Try Again</button>
              </div>
            </div>
          </Screen>
        )}

        {/* ──────────── GAME OVER ──────────── */}
        {view === "gameover" && (
          <Screen key="gameover">
            <div className="panel result-panel">
              <div className="result-char">
                <BossChar level={session?.level || "advanced"} size={150}/>
              </div>
              <h2 className="result-title result-lose">💀 All Lives Lost!</h2>
              <p className="result-sub">
                {levelBoss[session?.level || "basic"].name} wins this round.
                But every hero gets back up!
              </p>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <button className="btn btn--primary" onClick={() => {
                  const lvl = session?.level || "basic";
                  setBattleMeta({ level: lvl, ...levelBoss[lvl] });
                  setView("battle");
                }}>
                  🕸️ Retry Battle
                </button>
                <button className="btn" onClick={() => setView("map")}>🗺️ Map</button>
              </div>
            </div>
          </Screen>
        )}

      </AnimatePresence>
    </div>
  );
}
