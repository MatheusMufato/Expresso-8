# Expresso da 8 — Site Oficial

**Stack:** React 18 · Vite · GSAP 3 + ScrollTrigger · Lenis · Three.js · Framer Motion

---

## Pré-requisitos

- Node.js **18+**  
- npm 9+ ou pnpm 8+

---

## Instalação e execução

```bash
# 1. Entrar na pasta
cd expresso-da-8

# 2. Instalar dependências
npm install

# 3. Rodar em desenvolvimento
npm run dev
# Abre em http://localhost:3000

# 4. Build para produção
npm run build

# 5. Preview do build
npm run preview
```

---

## Estrutura do projeto

```
src/
├── main.jsx              # Bootstrap: React + GSAP + Lenis
├── App.jsx               # Orquestrador de seções
├── styles.css            # Design system completo (tokens, animações)
│
├── components/
│   ├── Loader.jsx        # Tela de carregamento (GSAP timeline)
│   ├── Nav.jsx           # Navegação fixa com scroll behavior
│   ├── Hero.jsx          # Seção principal — trem animado via ScrollTrigger
│   ├── TrainSVG.jsx      # SVG da locomotiva + 2 vagões
│   ├── CastleSVG.jsx     # Silhueta do castelo de Hogwarts
│   ├── Particles.jsx     # Sistema de partículas Three.js (brasas)
│   ├── MagicCursor.jsx   # Cursor customizado com trilha de faíscas
│   └── Candles.jsx       # Velas flutuantes CSS
│
└── sections/
    ├── Narrative.jsx     # "Bem-vindo" + estatísticas
    ├── Products.jsx      # Cardápio com cores das casas HP
    ├── Ambiente.jsx      # Galeria de fotos do espaço
    ├── Testimonials.jsx  # Avaliações 5 estrelas
    ├── Events.jsx        # Eventos e experiências temáticas
    ├── CTA.jsx           # Seção de reserva (Expecto Patronum)
    └── Footer.jsx        # Rodapé completo
```

---

## Animações implementadas

| Onde          | O que acontece                                                    | Tecnologia          |
|---------------|-------------------------------------------------------------------|---------------------|
| Loader        | Logo "8" pulsa com anéis concêntricos, barra de progresso        | GSAP timeline       |
| Hero          | Trem entra da direita (2.4s), parte para a esquerda no scroll    | GSAP + ScrollTrigger|
| Hero          | Castelo, lua e estrelas têm parallax independente no scroll       | GSAP onUpdate       |
| Hero          | Fumaça animada CSS em cima da chaminé                            | CSS keyframes       |
| Fundo         | 200 brasas/partículas douradas flutuando                         | Three.js            |
| Cursor        | Trilha de faíscas estreladas seguindo o mouse                    | Canvas 2D API       |
| Velas         | 10 velas flutuando verticalmente com chama tremulante            | CSS keyframes       |
| Todas seções  | Reveal com fadeUp ao entrar no viewport                          | Framer Motion       |
| Produtos      | Cards aparecem em stagger com delay escalonado                   | Framer Motion       |
| CTA           | Frame inteiro escala de 0.95→1 com opacidade                    | Framer Motion       |

---

## Personalizações rápidas

### Trocar número de WhatsApp
Buscar `5516999999999` em todos os arquivos e substituir pelo número real.

### Trocar link do iFood
Buscar `https://www.ifood.com.br` e substituir pela URL da loja.

### Adicionar fotos reais
Em `sections/Ambiente.jsx`, substituir os emojis por `<img>` tags.  
Em `sections/Products.jsx`, adicionar `<img>` nas visuais dos cards.

### Ajustar velocidade do trem
Em `components/Hero.jsx`, na função `initHero()`:
- `duration: 2.4` → velocidade de entrada (menor = mais rápido)
- `end: '+=280%'`  → distância de scroll para o trem sair (maior = mais lento)
- `Math.pow(p, 1.35)` → curva de aceleração (expoente maior = arranca mais devagar)

---

## Deploy (Vercel — recomendado)

```bash
npm install -g vercel
vercel --prod
```

O projeto é detectado automaticamente como Vite/React.

---

## Créditos

Desenvolvido como projeto de redesign cinematográfico.  
Temática inspirada no universo de Harry Potter (J.K. Rowling / Warner Bros.).  
Uso exclusivo para fins de marketing da cafeteria Expresso da 8.
