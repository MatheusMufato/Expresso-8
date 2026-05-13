import { useEffect, useRef, useState } from 'react'

const SPARK_COLORS = ['#F0B429', '#C9922A', '#F5E6C0', '#FF9C50', '#FFE090']

/* Cria uma faísca em formato de estrela de 4 pontas */
function drawStar(ctx, x, y, size, rotation) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.beginPath()
  ctx.moveTo(0,         -size * 2.2)
  ctx.lineTo(size * 0.4, -size * 0.4)
  ctx.lineTo(size * 2.2,  0)
  ctx.lineTo(size * 0.4,  size * 0.4)
  ctx.lineTo(0,           size * 2.2)
  ctx.lineTo(-size * 0.4,  size * 0.4)
  ctx.lineTo(-size * 2.2,  0)
  ctx.lineTo(-size * 0.4, -size * 0.4)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

export default function MagicCursor() {
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)
  const canvasRef = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* Estado */
    let mx = 0, my = 0   // posição do mouse (para o ponto)
    let rx = 0, ry = 0   // posição suavizada (para o anel)
    let active  = false
    const sparks = []
    let rafId = null

    /* Movimento do mouse */
    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!active) return
      /* Adiciona 3-4 faíscas */
      const n = Math.floor(Math.random() * 2) + 3
      for (let i = 0; i < n; i++) {
        sparks.push({
          x:    mx + (Math.random() - 0.5) * 12,
          y:    my + (Math.random() - 0.5) * 12,
          vx:   (Math.random() - 0.5) * 3,
          vy:  -(Math.random() * 3 + 0.5),
          life: 1,
          size: Math.random() * 2.5 + 0.7,
          rot:  Math.random() * Math.PI * 2,
          color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        })
      }
    }

    const onEnter = () => { active = true }
    const onLeave = () => { active = false }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    /* Hover state para o anel */
    const hoverEls = () => document.querySelectorAll('a, button')
    const addHover = () => {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', () => setHover(true))
        el.addEventListener('mouseleave', () => setHover(false))
      })
    }
    addHover()

    /* RAF loop */
    const draw = () => {
      rafId = requestAnimationFrame(draw)

      /* Ponto — segue imediatamente */
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top  = `${my}px`
      }

      /* Anel — segue com inércia */
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top  = `${ry}px`
      }

      /* Faíscas */
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x   += s.vx
        s.y   += s.vy
        s.vy  += 0.09   // gravidade
        s.vx  *= 0.97
        s.life -= 0.038
        s.rot  += 0.06
        if (s.life <= 0) { sparks.splice(i, 1); continue }

        ctx.globalAlpha = s.life * 0.9
        ctx.fillStyle   = s.color
        drawStar(ctx, s.x, s.y, s.size * s.life, s.rot)
      }
      ctx.globalAlpha = 1
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hover ? 'cursor-ring--hover' : ''}`} />
      <canvas ref={canvasRef} className="magic-trail-canvas" />
    </>
  )
}
