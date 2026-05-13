import { motion } from 'framer-motion'

const PRODUCTS = [
  {
    icon: '🍺', house: 'Lufa-Lufa · Especialidade', houseCss: '#c9960a',
    name: 'Poção Butterbeer',
    desc: 'Leite cremoso, caramelo artesanal e espuma de baunilha. Quente ou gelado. A favorita de Hogsmeade, feita para Araraquara.',
    price: 'R$ 29,90', badge: '⭐ Mais pedido',
    glow: 'radial-gradient(circle, rgba(212,168,0,.32), transparent 70%)',
  },
  {
    icon: '☕', house: 'Grifinória · Café Especial', houseCss: '#8B0000',
    name: 'Expresso do Grifinório',
    desc: 'Blend escuro com notas de caramelo e especiarias. Para quem enfrenta o dia com coragem — ou simplesmente precisa de mais um.',
    price: 'R$ 14,90', badge: 'Clássico',
    glow: 'radial-gradient(circle, rgba(100,15,5,.42), rgba(180,40,10,.12) 55%, transparent 70%)',
  },
  {
    icon: '🧋', house: 'Corvinal · Café com Leite', houseCss: '#003087',
    name: 'Cappuccino da Profecia',
    desc: 'Espuma aveludada com arte latte em estrelas. Cada xícara guarda uma mensagem — se você souber ler as folhas de chá.',
    price: 'R$ 18,90', badge: 'Instagramável',
    glow: 'radial-gradient(circle, rgba(0,48,135,.28), transparent 70%)',
  },
  {
    icon: '🫖', house: 'Sonserina · Chocolate', houseCss: '#1a4a2a',
    name: 'Poção da Floresta Proibida',
    desc: 'Chocolate 70% cacau, canela e pimenta-do-reino. Quente, denso e misterioso. Para beber lentamente com olhar perdido na névoa.',
    price: 'R$ 22,90', badge: 'Edição Especial',
    glow: 'radial-gradient(circle, rgba(20,55,30,.38), rgba(40,80,50,.18) 55%, transparent 70%)',
  },
  {
    icon: '🧁', house: 'Confeitaria · Assado do Dia', houseCss: '#C9922A',
    name: 'Bolinho de Manteiga',
    desc: 'Assado toda manhã. Manteiga artesanal, açúcar mascavo e flor de sal. Serve dois viajantes — ou um muito determinado.',
    price: 'R$ 12,90', badge: 'Forno do Dia',
    glow: 'radial-gradient(circle, rgba(180,130,55,.26), transparent 70%)',
  },
  {
    icon: '🧇', house: 'Segredo da Casa · Doce', houseCss: '#C9922A',
    name: 'Waffle da Câmara Secreta',
    desc: 'Massa artesanal, chantilly defumado, calda de maple. Escondido no cardápio — só quem sabe pede. Agora você sabe.',
    price: 'R$ 28,90', badge: 'Solene Juro',
    glow: 'radial-gradient(circle, rgba(201,146,42,.2), transparent 70%)',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Products() {
  return (
    <section className="section" id="cardapio">

      <div className="section__head">
        <motion.div
          className="spell-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Accio Cardápio
        </motion.div>

        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Cada poção tem<br />uma história.
        </motion.h2>

        <motion.p
          className="section__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Bebidas criadas por aprendizes de barista. Assados encantados
          toda manhã. Sobremesas que causam saudade permanente.
        </motion.p>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            className="product-card"
            style={{ '--house-clr': p.houseCss }}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -5 }}
          >
            <div className="product-card__visual">
              <div className="product-card__glow" style={{ background: p.glow }} />
              <div className="product-card__icon" style={{ '--gc': `${p.houseCss}55` }}>
                {p.icon}
              </div>
            </div>
            <div className="product-card__body">
              <div className="product-card__house" style={{ '--house-clr': p.houseCss }}>
                {p.house}
              </div>
              <div className="product-card__name">{p.name}</div>
              <div className="product-card__desc">{p.desc}</div>
              <div className="product-card__footer">
                <div className="product-card__price">{p.price}</div>
                <div className="product-card__badge">{p.badge}</div>
              </div>
            </div>
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
          href="https://www.ifood.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Ver Cardápio Completo no iFood →
        </a>
      </motion.div>
    </section>
  )
}
