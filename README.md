# Portafolio Personal - React Router

Este es un proyecto de portafolio personal desarrollado con React, TypeScript, React Router y Tailwind CSS, siguiendo la arquitectura atómica de componentes.

## Características

- **Arquitectura Atómica**: Componentes organizados en atoms, molecules, organisms y layouts
- **React Router**: Navegación entre páginas (Presentación, Proyectos y Contacto)
- **Diseño Responsivo**: Grid y Flexbox para adaptarse a diferentes dispositivos
- **Componente Dinámico**: Generador de citas inspiradoras aleatorias
- **TypeScript**: Tipado estático para mayor seguridad

## Escructura del Proyecto

El proyecto está organizado para seguir buenas prácticas modernas de React y el principio de Atomic Design, facilitando la escalabilidad, mantenibilidad y la realización de pruebas unitarias.

src/assets
Contiene los recursos gráficos del portafolio, como la foto de perfil (profile-photo.jpg).

src/components

atoms
Componentes mínimos y reutilizables (por ejemplo: Button.tsx, Card.tsx, Text.tsx). Incluye subcarpeta __tests__ para pruebas de cada átomo individual.

layouts
Componentes de estructura general de las páginas, como MainLayout.tsx.

molecules
Combinaciones de átomos para crear piezas funcionales intermedias, como ContactItem.tsx, ProjectCard.tsx, QuoteGenerator.tsx y SkillLevel.tsx. Incluye carpeta __tests__.

organisms
Componentes de mayor complejidad que agrupan moléculas y átomos, por ejemplo: ProfileCard.tsx, ContactInfo.tsx, ProjectsGrid.tsx. También incluye carpeta de test específico.

ui
Componentes visuales reutilizables generales.

src/lib
Funciones auxiliares, utilidades técnicas y la configuración de testing (utils.ts, carpeta __tests__).

src/test
Archivos y configuración global para pruebas unitarias (setup.ts).

src/app

Subcarpetas para cada página principal: contact, notfound, presentation, projects, routes.

Cada página tiene un archivo principal (por ejemplo: presentation.tsx, projects.tsx) y sus tests asociados (Contact.test.tsx, Projects.test.tsx, etc.).

Carpeta routes para manejo y definición de navegaciones mediante React Router (home.tsx, contacto.tsx, notfound.tsx, proyectos.tsx).

Archivo general del layout para la app (root.tsx).

src/App.tsx, index.css, main.tsx, vite-env.d.ts
Archivos raíz para el manejo global del proyecto, estilos y configuración de entorno.


## Páginas

### Presentación (/)

- Foto de perfil
- Carta de presentación
- Áreas de conocimiento
- Certificaciones

###Proyectos (/proyectos)

- Listado visual de proyectos personales y profesionales en tarjetas.

- Cada tarjeta muestra:

    - Nombre del proyecto, tipo (web, backend, base de datos)

    - Descripción breve del proyecto

    - Iconos distintivos e integración con GitHub por cada proyecto

- Diseño organizado en grillas responsivas que se adaptan a diferentes pantallas.

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

- Paleta de colores moderna (morado y azul)
- Gradientes sutiles
- Sombras consistentes

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
npm run test

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

Desarrollado para Fullstack 2 Duoc UC - 2025
