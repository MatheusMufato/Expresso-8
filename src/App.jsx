import { useState } from 'react'
import Loader     from './components/Loader'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Particles  from './components/Particles'
import MagicCursor from './components/MagicCursor'
import Candles    from './components/Candles'
import Narrative  from './sections/Narrative'
import Products   from './sections/Products'
import Ambiente   from './sections/Ambiente'
import Testimonials from './sections/Testimonials'
import Events     from './sections/Events'
import CTA        from './sections/CTA'
import Footer     from './sections/Footer'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)

  const handleLoaderComplete = () => {
    setLoaderDone(true)
    window.dispatchEvent(new Event('loaderComplete'))
  }

  return (
    <>
      {/* Layers fixos de fundo */}
      <Particles />
      <MagicCursor />
      <Candles />

      {/* Loader */}
      {!loaderDone && <Loader onComplete={handleLoaderComplete} />}

      {/* Conteúdo */}
      <Nav />
      <Hero />
      <Narrative />
      <Products />
      <Ambiente />
      <Testimonials />
      <Events />
      <CTA />
      <Footer />
    </>
  )
}
