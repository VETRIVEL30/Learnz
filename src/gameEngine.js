import { questionBank as _qb } from "../questions.js";
import { freshQuestions } from "./freshQuestions.js";

// Merge fresh (fresher-friendly) questions into the basic level of each domain
const questionBank = Object.fromEntries(
  Object.keys(_qb).map((domain) => [
    domain,
    {
      ..._qb[domain],
      basic: [
        ...(_qb[domain].basic || []),
        ...(freshQuestions[domain]?.basic || [])
      ]
    }
  ])
);

export const WORLDS = ["python", "oop", "sql", "api", "pandas", "aiml"];
export const LEVELS = ["basic", "intermediate", "advanced"];
export const LABELS = {
  python: "Python District",
  oop: "OOP Tower",
  sql: "SQL Subway",
  api: "API Bridge",
  pandas: "Pandas Plaza",
  aiml: "AI/ML Sector"
};
export const KING_DIALOGUES = {
  python:  "Spider-Man! Only those who master Python scripts can swing through this district.",
  oop:     "Your object-oriented thinking is weak. Prove inheritance and polymorphism — or fall.",
  sql:     "The subway runs on data. Query your way through or get left behind.",
  api:     "Every hero needs a good API. Handle auth, retries, and edge cases like a pro.",
  pandas:  "Data chaos threatens the plaza. Tame DataFrames and groupby to restore order.",
  aiml:    "The final sector. Bias, variance, precision — only the sharpest mind defeats me."
};

const PASS_PERCENT      = 70;
const SESSION_QUESTIONS = 12;
const TIMER_SECONDS     = 30;
const STORAGE_KEY       = "learnfunz-react-rpg-v1";

export function loadProfile() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { playerName: "", avatar: "🕷️", totalScore: 0, completed: {} };
  try {
    const parsed = JSON.parse(raw);
    return { playerName: "", avatar: "🕷️", totalScore: 0, completed: {}, ...parsed };
  } catch {
    return { playerName: "", avatar: "🕷️", totalScore: 0, completed: {} };
  }
}

export function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function isWorldUnlocked(profile, world) {
  return true;
}

export function isLevelUnlocked(profile, world, level) {
  if (!isWorldUnlocked(profile, world)) return false;
  if (level === "basic")        return true;
  if (level === "intermediate") return Boolean(profile.completed[`${world}.basic`]?.passed);
  return Boolean(profile.completed[`${world}.intermediate`]?.passed);
}

export function mapData(profile) {
  return WORLDS.map((world) => ({
    world,
    label: LABELS[world],
    unlocked: isWorldUnlocked(profile, world),
    forts: LEVELS.map((level) => Boolean(profile.completed[`${world}.${level}`]?.passed))
  }));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createSession(world, level) {
  const selected  = shuffle(questionBank[world][level]).slice(0, SESSION_QUESTIONS);
  const questions = selected.map((q) => {
    const pairs = q.options.map((opt, idx) => ({ opt, idx }));
    const mixed = shuffle(pairs);
    return {
      ...q,
      options: mixed.map((m) => m.opt),
      answer:  mixed.findIndex((m) => m.idx === q.answer)
    };
  });
  return { world, level, timer: TIMER_SECONDS, lives: 3, combo: 0, points: 0, correct: 0, index: 0, questions };
}

export function evaluate(session, optionIndex, timedOut = false) {
  const q       = session.questions[session.index];
  const correct = !timedOut && optionIndex === q.answer;
  const next    = { ...session };
  if (correct) {
    next.correct += 1;
    next.combo   += 1;
    next.points  += 100 + next.combo * 10;
  } else {
    next.lives -= 1;
    next.combo  = 0;
  }
  return { next, correct, correctIndex: q.answer };
}

export function advance(session) {
  const next = { ...session, index: session.index + 1, timer: TIMER_SECONDS };
  return { session: next, hasMore: next.index < next.questions.length };
}

export function finishSession(profile, session) {
  const percent = Math.round((session.correct / session.questions.length) * 100);
  const passed  = percent >= PASS_PERCENT && session.lives > 0;
  const key     = `${session.world}.${session.level}`;
  const updated = {
    ...profile,
    completed: {
      ...profile.completed,
      [key]: { passed, percent, score: session.points, at: new Date().toISOString() }
    },
    totalScore: profile.totalScore + (passed ? session.points : 0)
  };
  saveProfile(updated);
  return { profile: updated, result: { passed, percent, score: session.points, correct: session.correct, total: session.questions.length } };
}
