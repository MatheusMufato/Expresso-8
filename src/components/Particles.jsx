import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS  = [0xC9922A, 0xF0B429, 0xF5E6C0, 0xFF8C38, 0xD4A017, 0xFFD060]
const COUNT   = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 200

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas   = canvasRef.current
    if (!canvas) return

    /* ── Renderer ──────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(window.innerWidth, window.innerHeight)

    /* ── Scene / Camera ─────────────────────────────────── */
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 600)
    camera.position.z = 28

    /* ── Geometria de partículas ─────────────────────────── */
    const positions = new Float32Array(COUNT * 3)
    const colors    = new Float32Array(COUNT * 3)
    const vel       = []
    const col       = new THREE.Color()

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3
      positions[i3]     = (Math.random() - 0.5) * 58
      positions[i3 + 1] = (Math.random() - 0.5) * 38
      positions[i3 + 2] = (Math.random() - 0.5) * 18

      col.setHex(COLORS[Math.floor(Math.random() * COLORS.length)])
      colors[i3] = col.r; colors[i3 + 1] = col.g; colors[i3 + 2] = col.b

      vel.push({
        x:  (Math.random() - 0.5) * 0.016,
        y:  Math.random() * 0.036 + 0.008,
        sw: Math.random() * 0.006 + 0.002,   // sway frequency
        sp: Math.random() * 0.55  + 0.65,    // speed scale
        ph: Math.random() * Math.PI * 2,     // sway phase
      })
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size:         0.32,
      vertexColors: true,
      transparent:  true,
      opacity:      0.55,
      blending:     THREE.AdditiveBlending,
      depthWrite:   false,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    /* ── Loop de animação ───────────────────────────────── */
    let frame      = 0
    let rafId      = null
    let isVisible  = true

    const tick = () => {
      rafId = requestAnimationFrame(tick)
      if (!isVisible) return
      frame++

      const pos = geo.attributes.position.array
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        const v  = vel[i]
        pos[i3]     += v.x + Math.sin(frame * v.sw + v.ph) * 0.003
        pos[i3 + 1] += v.y * v.sp
        if (pos[i3 + 1] > 22) {
          pos[i3 + 1] = -22
          pos[i3]     = (Math.random() - 0.5) * 58
        }
      }
      geo.attributes.position.needsUpdate = true
      points.rotation.y += 0.00022
      renderer.render(scene, camera)
    }
    tick()

    /* ── Resize ─────────────────────────────────────────── */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    /* ── Pausa quando a aba está oculta ─────────────────── */
    const onVisibility = () => { isVisible = !document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}
