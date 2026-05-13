import { motion } from 'framer-motion'

const REVIEWS = [
  {
    stars: '★★★★★',
    text:  '"Melhor cafeteria de Araraquara. O Butterbeer é incrível e o ambiente te transporta para outro mundo. Já fui três vezes — cada visita é uma surpresa nova."',
    author: 'Ana Beatriz M.',
    source: 'Google · há 2 semanas',
  },
  {
    stars: '★★★★★',
    text:  '"O cappuccino chegou com um desenho do corvo lindo demais para beber. Mas bebi. Vale cada centavo e cada quilômetro rodado para chegar aqui."',
    author: 'Lucas R.',
    source: 'iFood · há 1 semana',
  },
  {
    stars: '★★★★★',
    text:  '"Trouxe minha filha de 8 anos, fã do Harry Potter. Saímos com os olhos brilhando. Ela já perguntou quando voltamos. Obrigada pela experiência mágica!"',
    author: 'Fernanda C.',
    source: 'Google · há 3 semanas',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Testimonials() {
  return (
    <section className="section section--center" id="depoimentos">

      <motion.div
        className="spell-label"
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Vox Populi
      </motion.div>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Mais de 4.800 avaliações{' '}
        <em>5 estrelas.</em>
      </motion.h2>

      <motion.p
        className="section__sub"
        style={{ margin: '0 auto 3rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Não porque pedimos. Porque as pessoas voltam.
      </motion.p>

      {/* Destaque da nota */}
      <motion.div
        className="rating-hero"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="rating-hero__num">4.9</div>
        <div className="rating-hero__stars">★★★★★</div>
        <div className="rating-hero__sub">Média no Google e iFood · Mais de 4.800 avaliações</div>
      </motion.div>

      {/* Cards de depoimento */}
      <div className="testimonials-grid">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.author}
            className="testimonial-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="testimonial-card__stars">{r.stars}</div>
            <p className="testimonial-card__text">{r.text}</p>
            <div className="testimonial-card__author">{r.author}</div>
            <div className="testimonial-card__platform">{r.source}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
