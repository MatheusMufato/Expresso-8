export default function TrainSVG() {
  return (
    <svg
      className="hero__train-svg"
      viewBox="0 0 1460 258"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="rayGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(240,180,41,0.55)" />
          <stop offset="100%" stopColor="rgba(240,180,41,0)"    />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="rgba(201,146,42,0.65)" />
          <stop offset="100%" stopColor="rgba(201,146,42,0)"    />
        </radialGradient>
        <filter id="wglow"><feGaussianBlur stdDeviation="3" /></filter>
        <filter id="hglow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {/* ══ TRILHOS ══════════════════════════════════════════ */}
      <line x1="0" y1="210" x2="1460" y2="210" stroke="#2c1a0a" strokeWidth="3.5"/>
      <line x1="0" y1="221" x2="1460" y2="221" stroke="#2c1a0a" strokeWidth="3.5"/>
      {[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400].map(x => (
        <rect key={x} x={x} y="206" width="28" height="19" rx="2" fill="#1c1008" opacity=".92"/>
      ))}

      {/* ══ TENDER ═══════════════════════════════════════════ */}
      <rect x="490" y="106" width="162" height="106" rx="4" fill="#0f0608" stroke="#4a2c10" strokeWidth="1.5"/>
      <rect x="506" y="120" width="130" height="57" rx="2" fill="#0a0404" stroke="#2a1808"/>
      {/* Carvão */}
      {[532,555,575,598,615].map((cx,i) => (
        <circle key={i} cx={cx} cy={[138,132,141,136,143][i]} r={[6,4,5,3.5,5][i]} fill="#1a0a04" opacity=".7"/>
      ))}
      {/* Rodas do tender */}
      {[518,583,632].map((cx,i) => (
        <g key={i}>
          <circle cx={cx} cy="212" r={i<2?18:15} fill="#0c0506" stroke="#7a4818" strokeWidth="1.5"/>
          <circle cx={cx} cy="212" r={i<2?7:6}   fill="#7a4818" opacity=".4"/>
        </g>
      ))}
      {/* Acoplamento tender→caldeira */}
      <rect x="480" y="157" width="14" height="8" rx="2" fill="#5a3a18"/>

      {/* ══ CALDEIRA ═════════════════════════════════════════ */}
      <rect x="92" y="115" width="402" height="99" rx="50" fill="#130808" stroke="#C9922A" strokeWidth="2"/>
      <rect x="92" y="118" width="402" height="22" rx="11" fill="rgba(201,146,42,0.04)"/>
      {[178,240,305,368,432].map(x => (
        <line key={x} x1={x} y1="115" x2={x} y2="214" stroke="#4a2c10" strokeWidth="1.2"/>
      ))}

      {/* ══ CABINE ═══════════════════════════════════════════ */}
      <rect x="428" y="70" width="70" height="146" rx="4" fill="#100708" stroke="#C9922A" strokeWidth="1.8"/>
      {/* Janelas com luz dourada */}
      {[437, 468].map(x => (
        <g key={x}>
          <rect x={x} y="81" width="24" height="27" rx="2" fill="#1a0a04" stroke="#C9922A" strokeWidth="1.2"/>
          <rect x={x} y="81" width="24" height="27" rx="2" fill="rgba(201,146,42,0.26)"/>
          <rect x={x} y="81" width="24" height="27" rx="2" fill="url(#halo)" opacity=".55" filter="url(#wglow)"/>
          {/* Raio de luz para baixo */}
          <polygon
            points={`${x},108 ${x+24},108 ${x+33},214 ${x-9},214`}
            fill="url(#rayGrad)" opacity=".12"
          />
        </g>
      ))}
      <rect x="428" y="138" width="20" height="78" rx="2" fill="#180808" stroke="#C9922A" strokeWidth="1"/>

      {/* ══ CHAMINÉ ══════════════════════════════════════════ */}
      <rect x="148" y="58" width="36" height="61" rx="5" fill="#130808" stroke="#C9922A" strokeWidth="2"/>
      <rect x="138" y="51" width="56" height="16" rx="5" fill="#C9922A"/>
      <rect x="143" y="51" width="46" height="8"  rx="3" fill="#F0B429" opacity=".55"/>
      <rect x="154" y="62" width="24" height="11" rx="2" fill="#080408"/>
      {/* Vapor (animated by CSS) */}
      <circle id="st1" cx="166" cy="40" r="10" fill="rgba(175,155,125,0.12)" opacity="0"/>
      <circle id="st2" cx="156" cy="24" r="15" fill="rgba(175,155,125,0.09)" opacity="0"/>
      <circle id="st3" cx="170" cy="7"  r="20" fill="rgba(175,155,125,0.06)" opacity="0"/>
      {/* Brilho no topo da chaminé */}
      <ellipse cx="166" cy="51" rx="25" ry="8" fill="rgba(201,146,42,0.12)" filter="url(#wglow)"/>

      {/* ══ CÚPULA DE VAPOR ══════════════════════════════════ */}
      <ellipse cx="228" cy="117" rx="27" ry="18" fill="#180a0a" stroke="#C9922A" strokeWidth="1.8"/>
      <ellipse cx="228" cy="113" rx="22" ry="10" fill="rgba(201,146,42,0.06)"/>
      {/* Cúpula de areia */}
      <ellipse cx="300" cy="117" rx="20" ry="14" fill="#180a0a" stroke="#8B5520" strokeWidth="1.5"/>
      {/* Válvula de segurança */}
      <rect x="358" y="107" width="9" height="16" rx="3" fill="#C9922A" opacity=".8"/>
      <rect x="354" y="104" width="17" height="7" rx="2" fill="#C9922A" opacity=".9"/>
      {/* Sino */}
      <ellipse cx="195" cy="116" rx="12" ry="9" fill="#C9922A" opacity=".65"/>

      {/* ══ RODAS MOTRIZES (3 grandes) ═══════════════════════ */}
      {[177,275,373].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="212" r="34" fill="#0c0506" stroke="#C9922A" strokeWidth="2.2"/>
          <circle cx={cx} cy="212" r="14" fill="rgba(201,146,42,0.2)"/>
          <circle cx={cx} cy="212" r="5"  fill="#C9922A" opacity=".55"/>
          <line x1={cx} y1="178" x2={cx} y2="246" stroke="#C9922A" strokeWidth="1.8" opacity=".55"/>
          <line x1={cx-34} y1="212" x2={cx+34} y2="212" stroke="#C9922A" strokeWidth="1.8" opacity=".55"/>
          <line x1={cx-24} y1="188" x2={cx+24} y2="236" stroke="#C9922A" strokeWidth="1" opacity=".3"/>
        </g>
      ))}
      {/* Biela de conexão */}
      <rect x="177" y="203" width="197" height="10" rx="5" fill="#C9922A" opacity=".78"/>

      {/* Roda piloto dianteira */}
      <circle cx="112" cy="212" r="21" fill="#0c0506" stroke="#7a4818" strokeWidth="1.8"/>
      <circle cx="112" cy="212" r="8"  fill="#7a4818" opacity=".4"/>

      {/* Pistão */}
      <rect x="90" y="173" width="82" height="14" rx="4" fill="#180a08" stroke="#7a4818" strokeWidth="1.2"/>
      <rect x="80" y="173" width="16" height="14" rx="3" fill="#7a4818" opacity=".65"/>

      {/* Farol dianteiro */}
      <rect x="76"  y="166" width="22" height="50" rx="2" fill="#1a0808" stroke="#7a4818" strokeWidth="1.2"/>
      <circle cx="87" cy="155" r="14" fill="#1a0808" stroke="#C9922A" strokeWidth="2"/>
      <circle cx="87" cy="155" r="8"  fill="rgba(201,146,42,0.75)"/>
      <circle cx="87" cy="155" r="4"  fill="#F5E6C0" opacity=".92"/>
      {/* Feixe de luz */}
      <ellipse cx="46" cy="155" rx="58" ry="26" fill="rgba(201,146,42,0.07)" filter="url(#hglow)"/>
      <ellipse cx="28" cy="155" rx="32" ry="15" fill="rgba(201,146,42,0.04)"/>

      {/* ══ VAGÃO 1 ══════════════════════════════════════════ */}
      <rect x="654" y="157" width="42" height="8" rx="3" fill="#5a3a18"/>
      <rect x="695" y="110" width="378" height="105" rx="5" fill="#0f0608" stroke="#C9922A" strokeWidth="1.5"/>
      <rect x="697" y="112" width="374" height="101" rx="4" fill="#3d0a08"/>
      {/* Frisos dourados */}
      <rect x="697" y="112" width="374" height="7"   fill="#C9922A" opacity=".6"/>
      <rect x="697" y="206" width="374" height="6"   fill="#C9922A" opacity=".5"/>
      {/* Divisórias de compartimento */}
      {[767,837,907,977].map(x => (
        <line key={x} x1={x} y1="112" x2={x} y2="215" stroke="#C9922A" strokeWidth=".8" opacity=".35"/>
      ))}
      {/* Janelas do vagão 1 */}
      {[709,779,849,919,989].map((x,i) => (
        <g key={x}>
          <rect x={x} y="130" width="44" height="35" rx="3" fill="#1a0808" stroke="#C9922A" strokeWidth="1.2"/>
          <rect x={x} y="130" width="44" height="35" rx="3" fill={`rgba(201,146,42,${0.18 + (i%3)*0.05})`}/>
          <rect x={x} y="130" width="44" height="35" rx="3" fill="url(#halo)" opacity=".5" filter="url(#wglow)"/>
          <polygon points={`${x},165 ${x+44},165 ${x+54},214 ${x-10},214`} fill="url(#rayGrad)" opacity=".1"/>
        </g>
      ))}
      <rect x="1048" y="117" width="18" height="98" rx="2" fill="#2a0606" stroke="#C9922A" strokeWidth="1"/>
      {/* Rodas vagão 1 */}
      {[726,806,920,1050].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="215" r="18" fill="#0c0506" stroke="#7a4818" strokeWidth="1.5"/>
          <circle cx={cx} cy="215" r="7"  fill="#7a4818" opacity=".35"/>
        </g>
      ))}

      {/* ══ VAGÃO 2 ══════════════════════════════════════════ */}
      <rect x="1065" y="157" width="42" height="8" rx="3" fill="#5a3a18"/>
      <rect x="1107" y="110" width="353" height="105" rx="5" fill="#0f0608" stroke="#C9922A" strokeWidth="1.5"/>
      <rect x="1109" y="112" width="349" height="101" rx="4" fill="#3d0a08"/>
      <rect x="1109" y="112" width="349" height="7" fill="#C9922A" opacity=".55"/>
      <rect x="1109" y="206" width="349" height="6" fill="#C9922A" opacity=".45"/>
      {[1177,1247,1317,1387].map(x => (
        <line key={x} x1={x} y1="112" x2={x} y2="215" stroke="#C9922A" strokeWidth=".8" opacity=".3"/>
      ))}
      {/* Janelas do vagão 2 */}
      {[1119,1189,1259,1329,1399].map((x,i) => (
        <g key={x}>
          <rect x={x} y="130" width="42" height="35" rx="3" fill="#1a0808" stroke="#C9922A" strokeWidth="1.2"/>
          <rect x={x} y="130" width="42" height="35" rx="3" fill={`rgba(201,146,42,${0.18 + (i%3)*0.06})`}/>
          {i===1 && <rect x={x} y="130" width="42" height="35" rx="3" fill="url(#halo)" opacity=".55" filter="url(#wglow)"/>}
          <polygon points={`${x},165 ${x+42},165 ${x+52},214 ${x-10},214`} fill="url(#rayGrad)" opacity=".09"/>
        </g>
      ))}
      <rect x="1441" y="117" width="18" height="98" rx="2" fill="#2a0606" stroke="#C9922A" strokeWidth="1"/>
      {[1132,1220,1340,1435].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="215" r="18" fill="#0c0506" stroke="#7a4818" strokeWidth="1.5"/>
          <circle cx={cx} cy="215" r="7"  fill="#7a4818" opacity=".35"/>
        </g>
      ))}
    </svg>
  )
}
