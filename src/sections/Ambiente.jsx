import { motion } from 'framer-motion'

const ITEMS = [
  { icon: '🏰', bg: 'linear-gradient(135deg,#0d0608,#1c0d08)', tag: 'Salão Principal',   cap: 'Inspirado no Grande Salão de Hogwarts', large: true  },
  { icon: '📚', bg: 'linear-gradient(135deg,#0a0812,#140a1e)', cap: 'Biblioteca dos Feitiços'                                                         },
  { icon: '🕯️', bg: 'linear-gradient(135deg,#0e0808,#1c1208)', cap: 'Cantinho das Velas Flutuantes'                                                   },
  { icon: '🔭', bg: 'linear-gradient(135deg,#08080f,#0e0d1a)', cap: 'Torre de Astronomia'                                                             },
  { icon: '🌿', bg: 'linear-gradient(135deg,#060e06,#0c1a0a)', cap: 'Ervas Mágicas & Poções'                                                         },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Ambiente() {
  return (
    <section className="section" id="ambiente">
      <div className="section__head">
        <motion.div
          className="spell-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Revelio Ambiente
        </motion.div>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          O lugar onde<br />a magia mora.
        </motion.h2>

        <motion.p
          className="section__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Madeira de carvalho, velas flutuantes, livros de feitiços e o
          aroma de café preenchendo cada canto. Não é decoração — é imersão total.
        </motion.p>
      </div>

      <div className="amb-grid">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.cap}
            className={`amb-item ${item.large ? 'amb-item--large' : ''}`}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="amb-item__visual" style={{ background: item.bg }}>
              {item.icon}
            </div>
            {item.tag && <div className="amb-item__tag">{item.tag}</div>}
            <div className="amb-item__caption">{item.cap}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
