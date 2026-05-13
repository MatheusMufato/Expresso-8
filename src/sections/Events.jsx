import { motion } from 'framer-motion'

const EVENTS = [
  {
    icon: '🎉',
    title: 'Festa de Aniversário Temática',
    desc:  'Pacotes com decoração, cardápio exclusivo, chapéu seletor e atividades mágicas. Para crianças e adultos que nunca cresceram.',
    detail: 'A partir de R$ 450 · Agendamento obrigatório',
  },
  {
    icon: '🎬',
    title: 'Noite de Maratona HP',
    desc:  'Quartas temáticas com trivia mágico em grupo, drinks especiais e sorteio de brindes encantados. Descubra sua casa.',
    detail: 'Quartas-feiras · 19h · Entrada gratuita',
  },
  {
    icon: '📸',
    title: 'Tarde de Fotos Mágicas',
    desc:  'Sessão guiada pelos melhores ângulos do espaço, com props exclusivos e figurinos. Memórias que a Penseira não apaga.',
    detail: 'Sábados · Por agendamento · Até 6 pessoas',
  },
  {
    icon: '🧪',
    title: 'Workshop de Poções',
    desc:  'Aprenda a preparar drinks temáticos com o barista da casa. Você sai com a receita e um diploma de aprendiz de feiticeiro.',
    detail: 'Domingos · 15h · R$ 89 por pessoa',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Events() {
  return (
    <section className="section" id="eventos">
      <div className="section__head">
        <motion.div
          className="spell-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Solene Juro que Farei Travessuras
        </motion.div>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A magia não<br />é só o café.
        </motion.h2>

        <motion.p
          className="section__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Eventos, festas temáticas e experiências exclusivas para grupos,
          aniversários e todos que nunca quiseram sair de Hogwarts.
        </motion.p>
      </div>

      <div className="events-grid">
        {EVENTS.map((ev, i) => (
          <motion.div
            key={ev.title}
            className="event-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="event-card__icon">{ev.icon}</div>
            <div className="event-card__title">{ev.title}</div>
            <p className="event-card__desc">{ev.desc}</p>
            <div className="event-card__detail">{ev.detail}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '3rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="https://wa.me/5516999999999?text=Ol%C3%A1!%20Quero%20saber%20sobre%20os%20eventos%20do%20Expresso%20da%208."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Quero Participar →
        </a>
      </motion.div>
    </section>
  )
}
