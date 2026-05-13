import { useEffect, useRef, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TrainSVG  from './TrainSVG'
import CastleSVG from './CastleSVG'

/*PUTA MERDA*/

gsap.registerPlugin(ScrollTrigger)

/* ── Estrelas ──────────────────────── */
function Stars() {
  const stars = useMemo(() =>
    Array.from({ length: 90 }, (_, i) => ({
      id: i,
      size:  Math.random() * 2.5 + 0.8,
      top:   Math.random() * 65,
      left:  Math.random() * 100,
      dur:   (Math.random() * 4 + 2).toFixed(1),
      del:   (Math.random() * 7).toFixed(1),
      gold:  Math.random() > 0.75,
    }))
  , [])

  return (
    <div className="hero__stars hero__layer">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            width:  s.size,
            height: s.size,
            top:    `${s.top}%`,
            left:   `${s.left}%`,
            background: s.gold ? '#F0B429' : 'rgba(245,230,192,0.9)',
            '--dur': `${s.dur}s`,
            '--del': `${s.del}s`,
            boxShadow: s.gold ? `0 0 ${s.size * 3}px rgba(201,146,42,0.6)` : 'none',
          }}
        />
      ))}
    </div>
  )
}

/* ── Fumaça ───────────────────────── */
const SMOKE_PUFFS = [
  { w:65,h:65,l:'10.5%',b:'68%',dy:'-145px',dx:'8px',dur:'4.1s',del:'0s' },
  { w:50,h:50,l:'10%',b:'74%',dy:'-120px',dx:'-7px',dur:'3.5s',del:'1.1s' },
  { w:88,h:88,l:'11%',b:'71%',dy:'-175px',dx:'14px',dur:'5.2s',del:'2.2s' },
  { w:38,h:38,l:'9.5%',b:'77%',dy:'-100px',dx:'-5px',dur:'3.0s',del:'0.5s' },
  { w:55,h:55,l:'11.5%',b:'75%',dy:'-130px',dx:'10px',dur:'3.8s',del:'1.8s' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const trainRef   = useRef(null)
  const contentRef = useRef(null)
  const starsRef   = useRef(null)
  const moonRef    = useRef(null)
  const castleRef  = useRef(null)
  const smokeRef   = useRef(null)
  const hintRef    = useRef(null)

  const stRef = useRef(null)

useEffect(() => {
  let initialized = false

  const handleLoaderComplete = () => {
    if (initialized) return
    initialized = true

    requestAnimationFrame(() => {
      initHero()
    })
  }

  window.addEventListener(
    'loaderComplete',
    handleLoaderComplete
  )

  /* fallback caso loader já tenha terminado */
  setTimeout(() => {
    if (!initialized) {
      initialized = true
      initHero()
    }
  }, 1200)

  return () => {
    window.removeEventListener(
      'loaderComplete',
      handleLoaderComplete
    )

    stRef.current?.kill()
  }
}, [])

  const initHero = () => {
    const section = sectionRef.current
    const train   = trainRef.current
    const content = contentRef.current
    const stars   = starsRef.current
    const moon    = moonRef.current
    const castle  = castleRef.current
    const smoke   = smokeRef.current
    const hint    = hintRef.current

    if (!section || !train) return

    let entranceDone = false

    /* Estado inicial */
    gsap.set(train, { x: '115vw' })
    gsap.set(content, { opacity: 0, y: 25 })
    gsap.set(hint, { opacity: 0 })
    if (smoke) gsap.set(smoke, { opacity: 0 })


stRef.current = ScrollTrigger.create({
  trigger: section,
  pin: true,
  start: 'top top',

  end: () =>
    window.innerWidth <= 768
      ? '+=180%'
      : '+=280%',

  scrub: window.innerWidth <= 768 ? 1.1 : 1.8,
  anticipatePin: 1,
  invalidateOnRefresh: true,

  /* DESATIVADO até entrada concluir */
  enabled: false,

  onUpdate(self) {
    if (!entranceDone) return

    const isMobile = window.innerWidth <= 768
    const p = self.progress

    const t = Math.pow(
      p,
      isMobile ? 1.15 : 1.35
    )

    gsap.set(train, {
      x: isMobile
        ? `${-5 - t * 115}vw`
        : `${-5 - t * 160}vw`,
    })

    if (smoke) {
      gsap.set(smoke, {
        opacity: Math.max(
          0,
          1 - p * (isMobile ? 3.5 : 2.5)
        ),
      })
    }

    if (p > (isMobile ? 0.08 : 0.15)) {
      const fade = Math.min(
        1,
        (p - (isMobile ? 0.08 : 0.15)) /
          (isMobile ? 0.16 : 0.25)
      )

      gsap.set(content, {
        opacity: 1 - fade,
        y: fade * (isMobile ? -18 : -28),
      })

      gsap.set(hint, {
        opacity: Math.max(
          0,
          1 - fade * (isMobile ? 6 : 4)
        ),
      })
    }

    if (stars) {
      gsap.set(stars, {
        yPercent: p * (isMobile ? -12 : -22),
      })
    }

    if (moon) {
      gsap.set(moon, {
        yPercent: p * (isMobile ? -18 : -38),
      })
    }

    if (castle) {
      gsap.set(castle, {
        yPercent: p * (isMobile ? 4 : 7),
        opacity: Math.max(
          0,
          0.85 - p * (isMobile ? 0.85 : 0.55)
        ),
      })
    }
  },
})

/* ─────────────────────────────────────────────
   ENTRADA CORRIGIDA
──────────────────────────────────────────── */

const entrance = gsap.timeline({
  delay: window.innerWidth <= 768 ? 0.15 : 0.3,
})

entrance
  .to(train, {
    x: '-5vw',
    duration:
      window.innerWidth <= 768
        ? 1.45
        : 2.4,
    ease: 'power3.out',

    onUpdate: () => {
      if (smoke) {
        const prog = entrance.progress()

        gsap.set(smoke, {
          opacity: Math.min(
            1,
            prog * (window.innerWidth <= 768 ? 4 : 3)
          ),
        })
      }
    },
  })

  .to(
    content,
    {
      opacity: 1,
      y: 0,
      duration:
        window.innerWidth <= 768
          ? 0.55
          : 0.9,
      ease: 'power3.out',
    },
    '-=0.75'
  )

  .to(
    hint,
    {
      opacity: 1,
      duration:
        window.innerWidth <= 768
          ? 0.3
          : 0.5,
    },
    '-=0.2'
  )

  .call(() => {
    entranceDone = true

    /* ATIVA somente agora */
    stRef.current.enable()

    /* força recalculo correto */
    ScrollTrigger.refresh()

    /* garante visibilidade */
    gsap.set(section, {
      clearProps: 'transform',
    })
  })

}

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__layer hero__sky" />
      <Stars />

      <div className="hero__layer hero__moon-wrap" ref={moonRef}>
        <div className="hero__moon" />
      </div>

      <div className="hero__castle" ref={castleRef}>
        <CastleSVG />
      </div>

      <div className="hero__layer hero__horizon" />
      <div className="hero__layer hero__fog" />
      <div className="hero__layer hero__ground" />

      <div className="hero__train-scene" ref={trainRef}>
        <div className="hero__train-glow" />

        <div className="hero__smoke-wrap" ref={smokeRef}>
          {SMOKE_PUFFS.map((s, i) => (
            <div key={i} className="smoke-puff" style={{
              width:s.w,height:s.h,left:s.l,bottom:s.b,
              '--dy':s.dy,'--dx':s.dx,
              animationDuration:s.dur,
              animationDelay:s.del,
            }} />
          ))}
        </div>

        <TrainSVG />
      </div>

      <div className="hero__vignette" />

      <div className="hero__content" ref={contentRef}>
        <div className="platform-badge">✦ Plataforma 9¾</div>
        <p className="hero__eyebrow">Cafeteria Temática · Araraquara · São Paulo</p>
        <h1 className="hero__title">O trem<br />parte <em>às 14.</em></h1>
        <p className="hero__sub">Aqui, a magia começa às duas.</p>
        <a href="#cardapio" className="btn-gold">Embarcar Agora</a>
      </div>

      <div className="hero__scroll-hint" ref={hintRef}>
        <span>Role para embarcar</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}