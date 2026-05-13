import React from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import App from './App'
import './styles.css'

// ── Registrar plugins GSAP ────────────────────────────────
gsap.registerPlugin(ScrollTrigger)

// ── Inicializar Lenis (smooth scroll) ────────────────────
const lenis = new Lenis({
  duration: 1.35,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  wheelMultiplier: 1,
  touchMultiplier: 2,
})

// Conectar Lenis ao ticker do GSAP (evita double-RAF)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Conectar ScrollTrigger ao Lenis
lenis.on('scroll', ScrollTrigger.update)

// Expor lenis globalmente para componentes que precisam de .stop()/.start()
window.__lenis = lenis

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
