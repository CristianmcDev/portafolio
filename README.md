# Portfolio Web — Cristian Moreno

Portfolio personal desarrollado con **React 19**, **TypeScript**, **Vite** y **Tailwind CSS v4**, diseñado con foco en accesibilidad (WCAG 2.2 AA), diseño responsive, modo claro/oscuro y rendimiento.

🔗 **Web en producción:** [cristianmoreno.dev](https://cristianmoreno.dev/)

## Tecnologías principales

- **Frontend:** React 19, TypeScript, Tailwind CSS v4
- **Build & Tooling:** Vite, ESLint (con `eslint-plugin-jsx-a11y`), Prettier
- **Iconos:** `react-icons`
- **Formulario de contacto:** Formspree

## Características

- Navegación sticky con detección automática de sección activa (Scroll-Spy) y menú móvil accesible.
- Modo claro y modo oscuro con detección automática de preferencia del sistema y persistencia en `localStorage`.
- Secciones de presentación, sobre mí, stack técnico categorizado, proyectos destacados con visor modal de capturas, trayectoria profesional y contacto directo.
- Optimización SEO (metaetiquetas, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`) e imágenes en formato WebP.

## Desarrollo local

Requisitos: Node.js 20+ y `pnpm`.

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Comprobar linting
pnpm run lint

# Compilar para producción
pnpm run build

# Previsualizar compilación de producción
pnpm run preview
```

## Licencia

© Cristian Moreno. Todos los derechos reservados.
