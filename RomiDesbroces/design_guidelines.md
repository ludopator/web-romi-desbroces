# ROMI DESBROCES - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by "Arctic Edge Snow Removal" aesthetic - clean, modern, professional service site with clear sections, large imagery, and prominent CTAs. Adapted for land clearing/terrain cleaning industry.

## Color Palette (Eco-Premium)
- **Primary**: Olive green (#6B7C4B or similar earth tone)
- **Secondary**: Natural beige (#F5F0E8 or similar warm neutral)
- **Accent**: Matte black (#2C2C2C) for typography and emphasis
- **Supporting**: White backgrounds for contrast sections

## Typography
- **Font Family**: Modern sans-serif (Google Fonts: Montserrat, Inter, or Poppins)
- **Hierarchy**: 
  - H1: Bold, 48-56px desktop / 32-40px mobile
  - H2: Semi-bold, 36-42px desktop / 28-32px mobile
  - Body: Regular, 16-18px with 1.6 line-height
  - Buttons: Semi-bold, 16-18px

## Layout System
- **Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, p-8, p-12, etc.)
- **Containers**: max-w-7xl for main content sections
- **Section Padding**: py-16 to py-24 desktop, py-12 mobile
- **Grid**: 2-3 columns desktop, single column mobile for service cards and benefits

## Page Structure & Components

### 1. Navigation
- Sticky header with logo left, navigation links right
- Mobile: Hamburger menu
- Links: Servicios, Proceso, Contacto
- CTA button in header

### 2. Hero Section (100vh)
- Full-width background image: Heavy machinery clearing terrain/forest
- Dark overlay (opacity 40-50%) for text readability
- Centered content with logo above headline
- **Content**:
  - Logo ROMI DESBROCES (180-220px width)
  - H1: "Desbroce profesional para fincas, parcelas y montes"
  - Subtitle: "Tu terreno limpio, seguro y listo para lo que venga"
  - Primary CTA button with blurred background: "Pide tu presupuesto gratis"

### 3. Benefits Section
- 2x3 grid (desktop) / stacked (mobile)
- Icon + Title + Brief description pattern
- **6 Benefit Cards**:
  - Evita sanciones municipales
  - Prevención de incendios
  - Maquinaria especializada y personal experto
  - Urgencias y rápida disponibilidad
  - Trabajamos en toda España
  - (Add 6th: Precios competitivos / Presupuesto sin compromiso)
- Icons from Heroicons (shield, fire, cog, clock, map, currency)
- Beige background alternating with white

### 4. Work Process Section
- 4-step horizontal timeline (desktop) / vertical (mobile)
- Each step: Large number + Icon + Title + Description
- Steps: Análisis del terreno → Desbroce mecanizado/manual → Retirada/trituración restos → Entrega limpia y segura
- White background with subtle connecting lines

### 5. Services Section
- 2x3 grid of service cards
- Each card: Image background + gradient overlay + content
- **6 Service Cards**:
  - Desbroce con tractor (desde 0,15€/m²)
  - Desbroce manual en pendientes
  - Limpieza de solares urbanos
  - Caminos rurales y cunetas
  - Tala y poda en altura
  - Mantenimiento periódico anual
- CTA button on each card
- Beige section background

### 6. Coverage Section
- Split layout: Text left, map/illustration right
- Headline: "Cobertura Nacional"
- Subtext: "Ciudad Real y toda España - Atención rápida y servicios de urgencia"
- Optional: Simple Spain map with Ciudad Real highlighted

### 7. Contact Section
- 2-column layout (desktop): Form left, Contact info right
- **Form fields**: Nombre, Teléfono, Mensaje (textarea)
- **Contact info**: Phone, Email, WhatsApp link
- Floating WhatsApp button (bottom-right, sticky)
- White background

### 8. Footer
- 3-column layout: Logo/about, Quick links, Contact info
- Social media icons row
- Copyright text
- Minimal legal links (Aviso Legal, Privacidad)
- Matte black background, light text

## Images Required
- **Hero**: Wide landscape showing heavy machinery clearing overgrown terrain/forest (1920x1080 minimum)
- **Service cards** (6): 
  - Tractor with clearing attachment
  - Manual clearing on steep terrain
  - Urban lot before/after cleaning
  - Rural road/path maintenance
  - Tree removal/pruning equipment
  - Maintained property landscape
- **Process icons**: Use Heroicons for visual consistency
- All images: Professional, high-quality, showing real equipment and results

## Interactive Elements
- Smooth scroll to sections
- Form validation with success/error states
- Hover effects on cards (subtle lift + shadow)
- WhatsApp button: Pulse animation to draw attention
- NO complex animations - focus on clean, professional UX

## Responsive Behavior
- Navigation: Full menu → Hamburger at md breakpoint
- Grids: 3-col → 2-col → 1-col responsive
- Hero text: Scale typography and spacing proportionally
- Form: Single column on mobile with full-width inputs

## SEO & Semantics
- HTML5 semantic tags (header, nav, main, section, footer)
- H1 only in hero, H2 for section titles
- Meta description: "ROMI DESBROCES – Empresa profesional de desbroce y limpieza de fincas en Ciudad Real y toda España"
- Alt text for all images describing machinery/service shown