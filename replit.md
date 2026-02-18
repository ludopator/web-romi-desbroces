# ROMI DESBROCES - Web Profesional

## Overview
Single-page website for ROMI DESBROCES, a road maintenance and clearing company based in Valdepeñas, Ciudad Real, Spain. Focused on two main service lines: road clearing (carreteras) and authorized herbicide treatments.

## Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Node.js + Express (minimal, mainly serves frontend)
- **Database:** PostgreSQL via Drizzle ORM (minimal usage)
- **Styling:** Tailwind CSS with custom CSS variables, Montserrat font

## Project Structure
```
RomiDesbroces/
├── client/src/
│   ├── pages/Home.tsx           # Main single-page layout
│   ├── components/
│   │   ├── Navigation.tsx       # Fixed top nav
│   │   ├── HeroSection.tsx      # Hero with dual CTA
│   │   ├── ServicesSection.tsx   # 3 cards (2 main + 1 secondary)
│   │   ├── MaquinariaSection.tsx # Equipment photos grid
│   │   ├── CertificacionesSection.tsx  # Certifications & guarantees
│   │   ├── CoverageSection.tsx  # Service zone (CLM)
│   │   ├── ContactSection.tsx   # Form + contact info
│   │   ├── Footer.tsx           # Address + links
│   │   └── WhatsAppButton.tsx   # Floating WhatsApp
│   └── assets/generated_images/ # AI-generated images
├── public/images/maquinaria/    # Equipment photos (replace with real)
│   ├── tractor.png
│   ├── furgoneta1.png
│   └── furgoneta2.png
└── server/                      # Express backend
```

## Key Info
- **Phone:** +34 644 49 46 17
- **Email:** proyectos@romidesbroces.com
- **Address:** Calle Francisco Mejía 14, 13300 Valdepeñas, Ciudad Real
- **Focus:** Road clearing (cunetas, arcenes, márgenes) + Herbicide treatments (certified applicators)

## Recent Changes (Feb 2026)
- Simplified page structure: removed BenefitsSection, PublicAdministrationSection, ProcessSection
- New HeroSection focused on carreteras + herbicidas with dual CTA
- ServicesSection reduced to 3 cards (2 principal + 1 secondary)
- Added MaquinariaSection with equipment photos (placeholder images, replace with real)
- Added CertificacionesSection (carné fitosanitarios, PRL, señalización, documentación)
- CoverageSection focused on Ciudad Real / CLM zone
- Footer updated with full Valdepeñas address
- Navigation simplified to match new sections

## User Preferences
- Spanish language throughout
- Simple, direct messaging
- Focus on carreteras + herbicidas as primary services
- Keep branding colors (green/olive tones)
