import type { SkillCategory } from "../types/skills";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description: "Tecnologías y lenguajes base para la creación de interfaces web modernas y accesibles.",
    skills: [
      { name: "HTML5 Semántico", description: "Estructura accesible y estándares WCAG", icon: "html5" },
      { name: "CSS3 / Tailwind CSS", description: "Diseño responsivo y sistemas de diseño", icon: "css3" },
      { name: "JavaScript (ES6+)", description: "Lógica moderna, APIs del navegador y asincronía", icon: "javascript" },
      { name: "TypeScript", description: "Tipado estático y código robusto", icon: "typescript" },
      { name: "React", description: "Desarrollo modular basado en componentes", icon: "react" },
    ],
  },
  {
    id: "cms-plataformas",
    title: "CMS y Plataformas",
    description: "Herramientas de gestión de contenido y plataformas de publicación web.",
    skills: [
      { name: "WordPress", description: "Desarrollo de temas a medida y bloques", icon: "wordpress" },
      { name: "Headless CMS", description: "Integración de contenido mediante APIs", icon: "headless" },
      { name: "Plataformas E-commerce", description: "Configuración y personalización de tiendas online", icon: "ecommerce" },
    ],
  },
  {
    id: "herramientas-flujo",
    title: "Herramientas y Entorno",
    description: "Utilidades para control de versiones, optimización y flujo de trabajo colaborativo.",
    skills: [
      { name: "Git & GitHub", description: "Control de versiones y trabajo colaborativo", icon: "git" },
      { name: "Vite / PNPM", description: "Entorno de desarrollo rápido y empaquetado", icon: "vite" },
      { name: "Figma", description: "Interpretación de diseño UI/UX y tokens", icon: "figma" },
      { name: "DevTools & Lighthouse", description: "Auditoría de rendimiento, SEO y accesibilidad", icon: "devtools" },
    ],
  },
];
