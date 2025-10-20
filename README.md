# Portafolio Personal - React Router

Este es un proyecto de portafolio personal desarrollado con React, TypeScript, React Router y Tailwind CSS, siguiendo la arquitectura atómica de componentes.

## Características

- **Arquitectura Atómica**: Componentes organizados en atoms, molecules, organisms y layouts
- **React Router**: Navegación entre páginas (Presentación y Contacto)
- **Diseño Responsivo**: Grid y Flexbox para adaptarse a diferentes dispositivos
- **Componente Dinámico**: Generador de citas inspiradoras aleatorias
- **TypeScript**: Tipado estático para mayor seguridad

## Escructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Card, Text)
│   ├── molecules/      # Combinación de atoms (SkillLevel, ContactItem, QuoteGenerator)
│   ├── organisms/      # Componentes complejos (ProfileCard, ContactInfo)
│   └── layouts/        # Layouts de página (MainLayout)
├── pages/              # Páginas de la aplicación
│   ├── Presentation.tsx
│   └── Contact.tsx
└── assets/             # Recursos estáticos
```

## Páginas

### Presentación (/)

- Foto de perfil
- Carta de presentación
- Nivel de conocimientos (barras de progreso)
- Certificaciones

### Contacto (/contacto)

- Información de contacto (email, teléfono, ubicación, LinkedIn, GitHub)
- Generador de citas inspiradoras

## Componente Dinámico

El componente `QuoteGenerator` demuestra el manejo de estado en React:

- Genera citas inspiradoras aleatorias al hacer click
- Muestra el autor de cada cita
- Utiliza hooks de React (useState)

## Tecnologías

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Vite
- Lucide React (iconos)

## Diseño Responsivo

El diseño utiliza:

- CSS Grid para layouts de 2 columnas en desktop
- Flexbox para componentes flexibles
- Breakpoints de Tailwind (md, lg)
- Diseño mobile-first

## Sistema de Diseño

- Paleta de colores moderna (morado/azul)
- Gradientes sutiles
- Sombras consistentes
- Animaciones suaves
- Tokens de diseño centralizados

## Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```
## Pruebas

```bash
# Realizar tests
npm run tests

# Ejecutar Coverage
npm run coverage

```

## 📝 Notas

Este proyecto fue desarrollado siguiendo las mejores prácticas de React:

- Componentes reutilizables
- Props tipadas con TypeScript
- Código limpio y mantenible
- Arquitectura escalable

---

Desarrollado para Fullstack 2 - 2025
