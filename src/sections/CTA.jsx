import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="cta-section" id="reserva">
      <div className="cta-section__glow" />

      <motion.div
        className="cta-frame"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Cantos decorativos */}
        <div className="cta-corner cta-corner--tl" />
        <div className="cta-corner cta-corner--tr" />
        <div className="cta-corner cta-corner--bl" />
        <div className="cta-corner cta-corner--br" />

        <motion.div
          className="cta__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Expecto Patronum · Reserve sua viagem
        </motion.div>

        <motion.h2
          className="cta__title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          O trem parte<br />de segunda a sábado.<br /><em>Você vem?</em>
        </motion.h2>

        <motion.p
          className="cta__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          viewport={{ once: true }}
        >
          O Expresso da 8 funciona de segunda a sábado.<br />
          As mesas se enchem como o Salão de Hogwarts em setembro.<br />
          O café não espera — e nem a magia.
        </motion.p>

        <motion.div
          className="cta__buttons"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5516999999999?text=Ol%C3%A1!%20Quero%20reservar%20uma%20mesa%20no%20Expresso%20da%208."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Reservar pelo WhatsApp
          </a>
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Pedir pelo iFood
          </a>
        </motion.div>

        <motion.div
          className="cta__meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta__meta-item">
            <span>Horário</span>
            <strong>Seg–Sex: 14h–19h</strong>
          </div>
          <div className="cta__meta-item">
            <span>Sábados e feriados</span>
            <strong>09h–12h | 14h–18h</strong>
            <div className="cta__meta-observation">* Somente com reservas!</div>
          </div>
          <div className="cta__meta-item">
            <span>Localização</span>
            <strong>Araraquara, SP</strong>
          </div>
          <div className="cta__meta-item">
            <span>Instagram</span>
            <strong>@expressoda8cafeeafins</strong>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
