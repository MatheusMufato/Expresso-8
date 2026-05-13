import { useMemo } from 'react'

const COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 10

export default function Candles() {
  const candles = useMemo(() =>
    Array.from({ length: COUNT }, (_, i) => ({
      id:   i,
      left: 4  + Math.random() * 92,
      dur:  9  + Math.random() * 15,
      del: -Math.random() * 15,          // delay negativo = já começou
      rot: (Math.random() - 0.5) * 12,
    }))
  , [])

  return (
    <div className="candles-layer">
      {candles.map(c => (
        <div
          key={c.id}
          className="candle"
          style={{
            left:              `${c.left}%`,
            animationDuration: `${c.dur}s`,
            animationDelay:    `${c.del}s`,
            '--rot':           `${c.rot}deg`,
          }}
        >
          <div className="candle__flame" />
          <div className="candle__body"  />
        </div>
      ))}
    </div>
  )
}
