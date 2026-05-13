import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const STATS = [
  { n: '4.9★',  l: 'Google & iFood'  },
  { n: '+5mil', l: 'Viajantes'       },
  { n: '6+',    l: 'Anos de Magia'   },
  { n: '100%',  l: 'Artesanal'       },
]

export default function Narrative() {
  return (
    <section className="narrative" id="sobre">
      <motion.div
        className="ornament"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        ✦ ✦ ✦
      </motion.div>

      <motion.h2
        className="narrative__title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Bem-vindo ao lugar onde a magia<br />tem sabor de café.
      </motion.h2>

      <motion.p
        className="narrative__body"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Desde 2019, o Expresso da 8 é o portal entre o mundo comum e o
        universo mágico de Araraquara. Cada detalhe foi encantado — do
        vapor da xícara ao cheiro do pão recém-assado, das velas flutuantes
        às poções no balcão. Este é o lugar onde trouxas e bruxos se
        encontram toda manhã.
      </motion.p>

      <motion.div
        className="divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      />

      <motion.div
        className="stats"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {STATS.map(s => (
          <motion.div key={s.l} className="stat" variants={fadeUp}>
            <div className="stat__n">{s.n}</div>
            <div className="stat__l">{s.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
