/* ── Cartoon SVG Characters ─────────────────────────────────────────── */

export function SpiderManChar({ size = 110 }) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 110 148" style={{ overflow: "visible" }}>
      {/* Web line from raised hand */}
      <line x1="20" y1="42" x2="4" y2="4" stroke="rgba(220,220,255,0.85)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="4" x2="4" y2="0" stroke="rgba(220,220,255,0.85)" strokeWidth="1.5"/>

      {/* ── Head ── */}
      <ellipse cx="55" cy="26" rx="24" ry="26" fill="#CC0000"/>
      {/* web arc lines on head */}
      <g stroke="#990000" strokeWidth="0.7" fill="none" opacity="0.75">
        <ellipse cx="55" cy="26" rx="10" ry="10"/>
        <ellipse cx="55" cy="26" rx="18" ry="18"/>
        <line x1="55" y1="0" x2="55" y2="52"/>
        <line x1="31" y1="9" x2="79" y2="43"/>
        <line x1="31" y1="43" x2="79" y2="9"/>
        <line x1="31" y1="26" x2="79" y2="26"/>
      </g>
      {/* Eyes – large white angular lenses */}
      <path d="M32,20 Q42,12 46,22 Q42,28 32,24 Z" fill="white"/>
      <path d="M64,20 Q68,12 78,24 Q74,28 64,22 Z" fill="white"/>
      {/* Eye inner shine */}
      <ellipse cx="38" cy="19" rx="2" ry="1.5" fill="rgba(200,230,255,0.6)" transform="rotate(-10,38,19)"/>
      <ellipse cx="71" cy="19" rx="2" ry="1.5" fill="rgba(200,230,255,0.6)" transform="rotate(10,71,19)"/>

      {/* ── Neck ── */}
      <rect x="46" y="50" width="18" height="9" fill="#CC0000"/>

      {/* ── Torso (red) ── */}
      <path d="M24,58 Q20,80 24,100 L55,108 L86,100 Q90,80 86,58 Q70,54 55,54 Q40,54 24,58Z" fill="#CC0000"/>
      {/* Blue side panels */}
      <path d="M24,62 Q20,80 26,97 L38,100 L36,60Z" fill="#1565C0" opacity="0.85"/>
      <path d="M86,62 Q90,80 84,97 L72,100 L74,60Z" fill="#1565C0" opacity="0.85"/>
      {/* Chest spider symbol */}
      <g fill="black">
        <ellipse cx="55" cy="72" rx="8" ry="4"/>
        <ellipse cx="55" cy="80" rx="10" ry="5.5"/>
        <line x1="47" y1="76" x2="38" y2="69" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="47" y1="79" x2="37" y2="78" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="47" y1="82" x2="39" y2="87" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="63" y1="76" x2="72" y2="69" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="63" y1="79" x2="73" y2="78" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="63" y1="82" x2="71" y2="87" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* ── Left arm – raised/web-shooting ── */}
      <path d="M26,65 Q8,55 16,42" stroke="#CC0000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="42" r="7" fill="#1565C0"/>
      {/* web shooter detail */}
      <rect x="12" y="40" width="8" height="4" rx="2" fill="#CC0000"/>

      {/* ── Right arm ── */}
      <path d="M84,65 Q100,72 96,82" stroke="#CC0000" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <circle cx="96" cy="83" r="7" fill="#1565C0"/>

      {/* ── Belt ── */}
      <rect x="27" y="98" width="56" height="8" rx="4" fill="#1565C0"/>
      <rect x="49" y="97" width="12" height="10" rx="3" fill="#CC0000"/>
      <circle cx="55" cy="102" r="3" fill="#1565C0"/>

      {/* ── Legs ── */}
      <path d="M38,106 Q28,124 30,142" stroke="#1565C0" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M72,106 Q82,124 80,142" stroke="#1565C0" strokeWidth="16" strokeLinecap="round" fill="none"/>
      {/* Boots */}
      <ellipse cx="29" cy="141" rx="9" ry="6" fill="#CC0000"/>
      <ellipse cx="81" cy="141" rx="9" ry="6" fill="#CC0000"/>
    </svg>
  );
}

export function GoblinChar({ size = 110 }) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 110 148" style={{ overflow: "visible" }}>
      {/* Pumpkin bomb in hand */}
      <circle cx="94" cy="64" r="10" fill="#FF8C00"/>
      <path d="M91,58 Q94,54 97,58" stroke="#2d5a00" strokeWidth="2" fill="none"/>
      <path d="M89,62 Q90,60 92,62 Q94,60 96,62 Q98,60 100,62" stroke="black" strokeWidth="1" fill="none"/>
      <ellipse cx="94" cy="65" rx="3" ry="2.5" fill="rgba(0,0,0,0.3)"/>

      {/* ── Purple hood/hat ── */}
      <path d="M20,38 Q18,20 55,8 Q92,20 90,38Z" fill="#6A0DAD"/>
      <path d="M20,38 Q30,30 55,28 Q80,30 90,38" fill="#7B1FA2"/>
      {/* hat tip */}
      <path d="M48,8 Q55,0 62,8" fill="#6A0DAD"/>

      {/* ── Head (green) ── */}
      <ellipse cx="55" cy="52" rx="28" ry="26" fill="#2E7D32"/>
      {/* Face texture */}
      <ellipse cx="55" cy="52" rx="28" ry="26" fill="url(#goblinSkin)" opacity="0.3"/>
      {/* Brow ridge */}
      <path d="M27,44 Q55,36 83,44" stroke="#1B5E20" strokeWidth="3" fill="none"/>

      {/* ── Goggles/Eyes ── */}
      <ellipse cx="39" cy="46" rx="11" ry="9" fill="#FF8C00"/>
      <ellipse cx="71" cy="46" rx="11" ry="9" fill="#FF8C00"/>
      <ellipse cx="39" cy="46" rx="7" ry="6" fill="#FFEB3B"/>
      <ellipse cx="71" cy="46" rx="7" ry="6" fill="#FFEB3B"/>
      <circle cx="39" cy="46" r="4" fill="#E65100"/>
      <circle cx="71" cy="46" r="4" fill="#E65100"/>
      <circle cx="40" cy="45" r="1.5" fill="rgba(255,255,255,0.6)"/>
      <circle cx="72" cy="45" r="1.5" fill="rgba(255,255,255,0.6)"/>

      {/* ── Nose (pointy goblin nose) ── */}
      <path d="M50,56 Q55,62 60,56" fill="#1B5E20"/>
      <circle cx="51" cy="58" r="2.5" fill="#1B5E20"/>
      <circle cx="59" cy="58" r="2.5" fill="#1B5E20"/>

      {/* ── Evil grin ── */}
      <path d="M33,65 Q42,74 55,74 Q68,74 77,65" stroke="#1B5E20" strokeWidth="3" fill="none"/>
      {/* Teeth */}
      <rect x="38" y="67" width="6" height="7" rx="1" fill="white"/>
      <rect x="46" y="67" width="6" height="8" rx="1" fill="white"/>
      <rect x="54" y="67" width="5" height="7" rx="1" fill="white"/>
      <rect x="61" y="67" width="6" height="8" rx="1" fill="white"/>
      <rect x="69" y="67" width="5" height="7" rx="1" fill="white"/>

      {/* Ears – pointed */}
      <path d="M27,46 L18,36 L32,44Z" fill="#2E7D32"/>
      <path d="M83,46 L92,36 L78,44Z" fill="#2E7D32"/>

      {/* ── Body/tunic ── */}
      <path d="M20,78 Q16,102 22,122 L55,130 L88,122 Q94,102 90,78 Q72,72 55,72 Q38,72 20,78Z" fill="#6A0DAD"/>
      {/* Tunic stripes */}
      <path d="M28,78 Q22,100 26,118" stroke="#4A0080" strokeWidth="4" fill="none" opacity="0.7"/>
      <path d="M82,78 Q88,100 84,118" stroke="#4A0080" strokeWidth="4" fill="none" opacity="0.7"/>
      {/* Belt */}
      <rect x="24" y="104" width="62" height="8" rx="4" fill="#FF8C00"/>
      <circle cx="55" cy="108" r="5" fill="#FFEB3B"/>

      {/* ── Left arm ── */}
      <path d="M22,84 Q4,90 6,104" stroke="#6A0DAD" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <circle cx="6" cy="105" r="8" fill="#2E7D32"/>

      {/* ── Right arm (holding bomb) ── */}
      <path d="M88,84 Q100,76 96,64" stroke="#6A0DAD" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <circle cx="96" cy="63" r="8" fill="#2E7D32"/>

      {/* ── Legs ── */}
      <path d="M38,122 Q30,134 33,144" stroke="#6A0DAD" strokeWidth="15" strokeLinecap="round" fill="none"/>
      <path d="M72,122 Q80,134 77,144" stroke="#6A0DAD" strokeWidth="15" strokeLinecap="round" fill="none"/>
      <ellipse cx="32" cy="144" rx="9" ry="5" fill="#2E7D32"/>
      <ellipse cx="78" cy="144" rx="9" ry="5" fill="#2E7D32"/>
    </svg>
  );
}

export function DocOckChar({ size = 110 }) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 110 148" style={{ overflow: "visible" }}>
      {/* Tentacles – back pair */}
      <path d="M22,88 Q0,78 2,58 Q4,44 14,36" stroke="#607D8B" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <circle cx="14" cy="35" r="6" fill="#B0BEC5"/>
      <path d="M88,88 Q110,78 108,58 Q106,44 96,36" stroke="#607D8B" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <circle cx="96" cy="35" r="6" fill="#B0BEC5"/>

      {/* ── Head ── */}
      <ellipse cx="55" cy="32" rx="26" ry="28" fill="#FFCCBC"/>
      {/* Bald shine */}
      <ellipse cx="48" cy="18" rx="8" ry="5" fill="rgba(255,255,255,0.3)"/>

      {/* Hair – dark sides only (balding) */}
      <path d="M29,30 Q28,18 36,14" stroke="#4E342E" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M81,30 Q82,18 74,14" stroke="#4E342E" strokeWidth="6" strokeLinecap="round" fill="none"/>

      {/* ── Goggles/Glasses ── */}
      <rect x="28" y="28" width="22" height="14" rx="7" fill="#01579B"/>
      <rect x="60" y="28" width="22" height="14" rx="7" fill="#01579B"/>
      <rect x="50" y="32" width="10" height="4" rx="2" fill="#37474F"/>
      <ellipse cx="39" cy="35" rx="7" ry="5" fill="#0288D1"/>
      <ellipse cx="71" cy="35" rx="7" ry="5" fill="#0288D1"/>
      <circle cx="37" cy="33" r="2" fill="rgba(255,255,255,0.5)"/>
      <circle cx="69" cy="33" r="2" fill="rgba(255,255,255,0.5)"/>
      {/* Goggle straps */}
      <path d="M28,30 Q20,26 22,20" stroke="#263238" strokeWidth="2" fill="none"/>
      <path d="M82,30 Q90,26 88,20" stroke="#263238" strokeWidth="2" fill="none"/>

      {/* ── Nose & Mouth ── */}
      <path d="M50,44 Q55,48 60,44" stroke="#D7A49A" strokeWidth="2" fill="none"/>
      <path d="M41,52 Q55,60 69,52" stroke="#C62828" strokeWidth="2.5" fill="none"/>
      <path d="M42,52 Q44,56 48,55" fill="#C62828" opacity="0.4"/>
      <path d="M68,52 Q66,56 62,55" fill="#C62828" opacity="0.4"/>

      {/* ── Lab coat / body ── */}
      <path d="M18,62 Q12,86 16,112 L55,120 L94,112 Q98,86 92,62 Q74,56 55,56 Q36,56 18,62Z" fill="white"/>
      {/* Coat lapels */}
      <path d="M40,62 L44,90 L55,84 L66,90 L70,62" fill="#ECEFF1"/>
      <path d="M40,62 Q35,56 32,62" fill="#CFD8DC"/>
      <path d="M70,62 Q75,56 78,62" fill="#CFD8DC"/>
      {/* Dark undershirt */}
      <path d="M44,62 L48,84 L55,80 L62,84 L66,62" fill="#37474F"/>
      {/* Coat buttons */}
      <circle cx="55" cy="70" r="2" fill="#90A4AE"/>
      <circle cx="55" cy="80" r="2" fill="#90A4AE"/>
      <circle cx="55" cy="90" r="2" fill="#90A4AE"/>

      {/* ── Front tentacles ── */}
      <path d="M22,90 Q4,104 8,120" stroke="#607D8B" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="8" cy="121" r="7" fill="#B0BEC5"/>
      <path d="M88,90 Q106,104 102,120" stroke="#607D8B" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="102" cy="121" r="7" fill="#B0BEC5"/>

      {/* Tentacle claws */}
      <path d="M5,118 L2,112 M8,118 L8,112 M11,118 L14,112" stroke="#78909C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M99,118 L96,112 M102,118 L102,112 M105,118 L108,112" stroke="#78909C" strokeWidth="2" strokeLinecap="round"/>

      {/* ── Legs ── */}
      <path d="M36,112 Q28,128 30,142" stroke="#607D8B" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M74,112 Q82,128 80,142" stroke="#607D8B" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <ellipse cx="29" cy="142" rx="10" ry="5" fill="#455A64"/>
      <ellipse cx="81" cy="142" rx="10" ry="5" fill="#455A64"/>
    </svg>
  );
}

export function VenomChar({ size = 110 }) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 110 148" style={{ overflow: "visible" }}>
      {/* Symbiote tendrils in background */}
      <path d="M10,80 Q0,60 6,40" stroke="#1a1a2e" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8"/>
      <path d="M100,80 Q110,60 104,40" stroke="#1a1a2e" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8"/>
      <path d="M6,42 Q0,32 8,26" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8"/>
      <path d="M104,42 Q110,32 102,26" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8"/>

      {/* ── Head – elongated black ── */}
      <ellipse cx="55" cy="32" rx="28" ry="34" fill="#0d0d1a"/>
      {/* Head texture / highlights */}
      <ellipse cx="43" cy="20" rx="6" ry="8" fill="#1a1a2e" opacity="0.7"/>

      {/* ── Eyes – large white alien ── */}
      <path d="M24,28 Q32,16 46,22 Q40,34 24,32Z" fill="white"/>
      <path d="M86,28 Q78,16 64,22 Q70,34 86,32Z" fill="white"/>
      {/* Eye details */}
      <path d="M26,28 Q32,18 44,23 Q38,32 26,30Z" fill="rgba(220,240,255,0.9)"/>
      <path d="M84,28 Q78,18 66,23 Q72,32 84,30Z" fill="rgba(220,240,255,0.9)"/>

      {/* ── Mouth – massive grin ── */}
      <path d="M24,46 Q40,68 55,68 Q70,68 86,46" fill="#0d0d1a" stroke="#0d0d1a" strokeWidth="1"/>
      <path d="M24,46 Q40,64 55,64 Q70,64 86,46" fill="#CC0000"/>
      {/* Teeth – sharp */}
      <path d="M28,52 L33,64 M36,48 L40,64 M44,46 L46,64 M52,46 L52,64 M58,46 L60,64 M64,46 L66,64 M72,48 L68,64 M80,52 L75,64"
            stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Tongue */}
      <path d="M44,64 Q55,78 66,64" fill="#CC0000"/>
      <path d="M48,64 Q55,74 62,64 Q58,70 55,72 Q52,70 48,64Z" fill="#FF1744"/>

      {/* ── Neck ── */}
      <rect x="42" y="64" width="26" height="10" fill="#0d0d1a"/>

      {/* ── Body – massive black ── */}
      <path d="M16,74 Q10,100 14,124 L55,134 L96,124 Q100,100 94,74 Q74,68 55,68 Q36,68 16,74Z" fill="#0d0d1a"/>
      {/* Muscle definition */}
      <path d="M30,78 Q26,100 30,120" stroke="#1a1a2e" strokeWidth="3" fill="none"/>
      <path d="M80,78 Q84,100 80,120" stroke="#1a1a2e" strokeWidth="3" fill="none"/>
      <path d="M38,78 Q35,96 38,114" stroke="#1a1a2e" strokeWidth="2" fill="none"/>
      <path d="M72,78 Q75,96 72,114" stroke="#1a1a2e" strokeWidth="2" fill="none"/>

      {/* White spider on chest */}
      <ellipse cx="55" cy="90" rx="9" ry="5" fill="white"/>
      <ellipse cx="55" cy="100" rx="12" ry="6" fill="white"/>
      <g stroke="white" strokeWidth="3" strokeLinecap="round">
        <line x1="47" y1="95" x2="36" y2="86"/>
        <line x1="47" y1="98" x2="35" y2="96"/>
        <line x1="47" y1="101" x2="37" y2="108"/>
        <line x1="63" y1="95" x2="74" y2="86"/>
        <line x1="63" y1="98" x2="75" y2="96"/>
        <line x1="63" y1="101" x2="73" y2="108"/>
      </g>

      {/* ── Arms – huge black ── */}
      <path d="M18,80 Q2,86 4,98" stroke="#0d0d1a" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M0,98 Q-2,112 6,118" stroke="#0d0d1a" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <ellipse cx="7" cy="119" r="8" fill="#0d0d1a"/>
      {/* Claw fingers left */}
      <path d="M3,116 L-2,108 M7,118 L6,110 M11,116 L16,110" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round"/>

      <path d="M92,80 Q108,86 106,98" stroke="#0d0d1a" strokeWidth="16" strokeLinecap="round" fill="none"/>
      <path d="M110,98 Q112,112 104,118" stroke="#0d0d1a" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <ellipse cx="103" cy="119" r="8" fill="#0d0d1a"/>
      {/* Claw fingers right */}
      <path d="M107,116 L112,108 M103,118 L104,110 M99,116 L94,110" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round"/>

      {/* ── Legs ── */}
      <path d="M36,124 Q26,132 28,142" stroke="#0d0d1a" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M74,124 Q84,132 82,142" stroke="#0d0d1a" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Symbiote feet */}
      <ellipse cx="27" cy="142" rx="11" ry="6" fill="#0d0d1a"/>
      <ellipse cx="83" cy="142" rx="11" ry="6" fill="#0d0d1a"/>
      {/* Foot claws */}
      <path d="M20,140 L16,134 M27,142 L26,136 M34,140 L38,134" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M76,140 L72,134 M83,142 L84,136 M90,140 L94,134" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/* Boss character selector */
export function BossChar({ level, size }) {
  if (level === "basic")        return <GoblinChar size={size} />;
  if (level === "intermediate") return <DocOckChar size={size} />;
  return <VenomChar size={size} />;
}
