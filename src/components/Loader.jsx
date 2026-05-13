import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null)
  const fillRef   = useRef(null)
  const emblemRef = useRef(null)
  const nameRef   = useRef(null)
  const subRef    = useRef(null)

  useEffect(() => {
    // Travar o scroll enquanto o loader está ativo
    document.body.style.overflow = 'hidden'
    if (window.__lenis) window.__lenis.stop()

    const tl = gsap.timeline()

    // Aparece o emblema com as ondas
    tl.fromTo(emblemRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }
    )
    tl.fromTo(nameRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    tl.fromTo(subRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.2'
    )

    // Barra de progresso — simula carregamento
    tl.to(fillRef.current,
      { width: '100%', duration: 2.0, ease: 'power1.inOut' },
      '-=0.1'
    )

    // Saída do loader
    tl.to(loaderRef.current,
      {
        opacity: 0, duration: 0.65, ease: 'power2.inOut',
        onComplete: () => {
          document.body.style.overflow = ''
          if (window.__lenis) window.__lenis.start()
          onComplete?.()
        }
      },
      '+=0.15'
    )
  }, [onComplete])

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__emblem" ref={emblemRef}>8</div>
      <div className="loader__name"   ref={nameRef}>Expresso da 8</div>
      <div className="loader__sub"    ref={subRef}>Plataforma 9¾ · Araraquara/SP</div>
      <div className="loader__track">
        <div className="loader__fill" ref={fillRef} />
      </div>
    </div>
  )
}
