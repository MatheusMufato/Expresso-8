export default function CastleSVG() {
  return (
    <svg
      className="castle-svg"
      viewBox="0 0 1200 315"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <filter id="cf"><feGaussianBlur stdDeviation="1.8"/></filter>
      </defs>

      {/* ── Fundo distante ───────────────────────────────── */}
      <rect x="1085" y="238" width="32"  height="77" fill="currentColor" opacity=".38" filter="url(#cf)"/>
      <polygon points="1101,207 1119,238 1083,238" fill="currentColor" opacity=".38" filter="url(#cf)"/>
      <rect x="1140" y="255" width="25"  height="60" fill="currentColor" opacity=".3"  filter="url(#cf)"/>
      <rect x="975"  y="244" width="28"  height="71" fill="currentColor" opacity=".35" filter="url(#cf)"/>
      <polygon points="989,213 1005,244 973,244"   fill="currentColor" opacity=".35" filter="url(#cf)"/>

      {/* ── Torre astronomia (direita) ───────────────────── */}
      <rect x="818" y="208" width="55" height="107" fill="currentColor" opacity=".6"/>
      <polygon points="845,167 876,208 814,208"     fill="currentColor" opacity=".6"/>
      <rect x="845" y="220" width="7"  height="7"  rx="1" fill="rgba(201,146,42,0.35)"/>
      <rect x="845" y="240" width="7"  height="7"  rx="1" fill="rgba(201,146,42,0.25)"/>

      {/* ── Muralha direita ──────────────────────────────── */}
      <rect x="668" y="244" width="160" height="71" fill="currentColor" opacity=".75"/>
      {[673,693,713,733,753,773,793,813].map(x => (
        <rect key={x} x={x} y="233" width="13" height="14" fill="currentColor" opacity=".75"/>
      ))}

      {/* ── Torre direita ────────────────────────────────── */}
      <rect x="634" y="150" width="52" height="167" fill="currentColor" opacity=".85"/>
      <polygon points="660,110 692,150 628,150"   fill="currentColor" opacity=".85"/>
      <polygon points="660,90  670,110 650,110"   fill="currentColor" opacity=".85"/>
      <rect x="646" y="182" width="17" height="24" rx="2" fill="rgba(201,146,42,0.55)"/>
      <rect x="669" y="182" width="17" height="24" rx="2" fill="rgba(201,146,42,0.55)"/>

      {/* ── Corpo central — Grande Salão ─────────────────── */}
      <rect x="346" y="172" width="296" height="143" fill="currentColor" opacity=".92"/>

      {/* ── Torre central (a mais alta) ─────────────────── */}
      <rect x="396" y="72" width="204" height="244" fill="currentColor" opacity=".95"/>
      <polygon points="498,8  562,72  434,72"  fill="currentColor" opacity=".95"/>
      <polygon points="498,-3 514,8   482,8"   fill="currentColor" opacity=".95"/>
      <line x1="498" y1="8" x2="498" y2="40" stroke="currentColor" strokeWidth="2" opacity=".95"/>

      {/* Janelas centrais com luz */}
      {[450,480,510,540].map(x => (
        <rect key={x} x={x} y="112" width="20" height="29" rx="2"
          fill={x===480 ? 'rgba(201,146,42,0.7)' : 'rgba(201,146,42,0.5)'}/>
      ))}
      <rect x="463" y="170" width="26" height="40" rx="3" fill="rgba(201,146,42,0.62)"/>
      <rect x="497" y="170" width="26" height="40" rx="3" fill="rgba(201,146,42,0.68)"/>

      {/* Arco da entrada */}
      <path
        d="M 462 315 L 462 255 Q 462 220 498 220 Q 534 220 534 255 L 534 315"
        fill="rgba(201,146,42,0.1)" stroke="currentColor" strokeWidth="1.2"
      />

      {/* Torres menores laterais */}
      <rect x="363" y="207" width="28" height="108" fill="currentColor" opacity=".88"/>
      <polygon points="377,177 395,207 359,207" fill="currentColor" opacity=".88"/>
      <rect x="598" y="212" width="28" height="103" fill="currentColor" opacity=".88"/>
      <polygon points="612,182 630,212 594,212" fill="currentColor" opacity=".88"/>

      {/* ── Muralha esquerda ─────────────────────────────── */}
      <rect x="178" y="244" width="182" height="71" fill="currentColor" opacity=".82"/>
      {[183,203,223,243,263,283,303,323,343].map(x => (
        <rect key={x} x={x} y="233" width="13" height="14" fill="currentColor" opacity=".82"/>
      ))}

      {/* ── Torre esquerda ───────────────────────────────── */}
      <rect x="140" y="148" width="52" height="170" fill="currentColor" opacity=".88"/>
      <polygon points="166,107 198,148 134,148" fill="currentColor" opacity=".88"/>
      <polygon points="166,87  176,107 156,107" fill="currentColor" opacity=".88"/>
      <rect x="149" y="180" width="17" height="24" rx="2" fill="rgba(201,146,42,0.55)"/>
      <rect x="171" y="180" width="17" height="24" rx="2" fill="rgba(201,146,42,0.5)"/>

      {/* ── Ala esquerda ─────────────────────────────────── */}
      <rect x="0"   y="250" width="155" height="65" fill="currentColor" opacity=".65"/>
      {[5,24,43,62,81,100,119].map(x => (
        <rect key={x} x={x} y="240" width="12" height="13" fill="currentColor" opacity=".65"/>
      ))}
      <rect x="0"   y="212" width="52"  height="105" fill="currentColor" opacity=".7"/>
      <polygon points="26,175 53,212 0,212" fill="currentColor" opacity=".7"/>

      {/* Janelas com brilho quente */}
      <rect x="8"   y="230" width="14" height="10" rx="1" fill="rgba(201,146,42,0.3)"/>
      <rect x="177" y="266" width="14" height="12" rx="1" fill="rgba(201,146,42,0.28)"/>
      <rect x="640" y="170" width="14" height="18" rx="1" fill="rgba(201,146,42,0.4)"/>
    </svg>
  )
}
