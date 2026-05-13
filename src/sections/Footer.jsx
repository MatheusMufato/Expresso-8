import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#cardapio',    label: 'Cardápio de Feitiços' },
  { href: '#ambiente',   label: 'O Ambiente'            },
  { href: '#eventos',    label: 'Eventos Mágicos'       },
  { href: '#depoimentos',label: 'Avaliações'            },
  { href: '#reserva',    label: 'Reservar Mesa'         },
]

const CONTACT_LINKS = [
  { href: 'https://wa.me/5516999999999',                        label: 'WhatsApp',   ext: true },
  { href: 'https://instagram.com/expressoda8cafeeafins',        label: 'Instagram',  ext: true },
  { href: 'https://www.ifood.com.br',                           label: 'iFood',      ext: true },
  { href: 'https://maps.google.com/?q=Expresso+da+8+Araraquara',label: 'Como Chegar',ext: true },
]

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer__grid">
        {/* Coluna 1 — Marca */}
        <div>
          <div className="footer__logo">Expresso da 8</div>
          <p className="footer__tagline">
            Uma cafeteria onde cada xícara é um feitiço e cada visita é
            uma nova jornada. O trem parte todos os dias — embarque conosco
            em Araraquara, SP.
          </p>
          <p className="footer__quote">
            "Felicidade pode ser encontrada mesmo nos momentos mais sombrios,
            se alguém se lembrar de acender a luz." — e servir um bom café.
          </p>
        </div>

        {/* Coluna 2 — Navegação */}
        <div>
          <div className="footer__heading">Navegação</div>
          <ul className="footer__links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — Contato */}
        <div>
          <div className="footer__heading">Plataforma 9¾</div>
          <ul className="footer__links">
            {CONTACT_LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href} target={l.ext ? '_blank' : undefined} rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer__bottom">
        <div className="footer__copy">
          © 2025 Expresso da 8 Cafeteria Temática · Araraquara/SP · Travessuras foram feitas.
        </div>
        <div className="footer__social">
          <a href="https://instagram.com/expressoda8cafeeafins" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/5516999999999"                 target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.ifood.com.br"                    target="_blank" rel="noopener noreferrer">iFood</a>
        </div>
      </div>
    </motion.footer>
  )
}
