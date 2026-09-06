import type { SkillCategory } from "../types/skills";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "lenguajes",
    title: "Lenguajes",
    description: "Lenguajes de programación y marcado fundamentales para el desarrollo de software y aplicaciones web.",
    skills: [
      { name: "HTML", description: "Estructura semántica y estándares web", icon: "html" },
      { name: "CSS", description: "Estilos modernos, Grid y Flexbox", icon: "css" },
      { name: "JavaScript", description: "ES6+, lógica asíncrona y APIs del navegador", icon: "javascript" },
      { name: "TypeScript", description: "Tipado estático y desarrollo escalable", icon: "typescript" },
      { name: "Python", description: "Scripting, automatización y backend", icon: "python" },
      { name: "SQL", description: "Consultas relacionales y modelado de datos", icon: "sql" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Librerías, frameworks y herramientas para el desarrollo de interfaces interactivas y reactivas.",
    skills: [
      { name: "React", description: "Arquitectura basada en componentes y hooks", icon: "react" },
      { name: "Angular", description: "Framework robusto y modular para SPAs", icon: "angular" },
      { name: "Redux", description: "Gestión global y predecible del estado", icon: "redux" },
      { name: "Zustand", description: "Gestión de estado ágil, simple y ligera", icon: "zustand" },
      { name: "Bootstrap", description: "Sistema de rejilla y componentes adaptables", icon: "bootstrap" },
      { name: "Tailwind", description: "Diseño con clases utilitarias y sistemas visuales", icon: "tailwind" },
      { name: "Sass", description: "Preprocesador CSS con mixins y variables", icon: "sass" },
      { name: "Less", description: "Extensión dinámica para estilos estructurados", icon: "less" },
    ],
  },
  {
    id: "backend-datos",
    title: "Backend & Datos",
    description: "Tecnologías del lado del servidor, diseño de arquitecturas de datos y servicios API.",
    skills: [
      { name: "Node.js", description: "Entorno de ejecución JavaScript en servidor", icon: "nodejs" },
      { name: "Express", description: "Framework minimalista para servicios web y APIs", icon: "express" },
      { name: "MongoDB", description: "Base de datos NoSQL orientada a documentos", icon: "mongodb" },
      { name: "MySQL", description: "Sistema de gestión de bases de datos relacionales", icon: "mysql" },
      { name: "REST API", description: "Diseño, integración y consumo de servicios REST", icon: "restapi" },
      { name: "JWT", description: "Autenticación segura mediante JSON Web Tokens", icon: "jwt" },
    ],
  },
  {
    id: "testing-buenas-practicas",
    title: "Testing & Buenas prácticas",
    description: "Estrategias de aseguramiento de calidad, testing y principios de código limpio.",
    skills: [
      { name: "Jest", description: "Testing unitario, aserciones y pruebas automatizadas", icon: "jest" },
      { name: "Testing", description: "Pruebas de integración, regresión y QA", icon: "testing" },
      { name: "SOLID", description: "Principios de diseño orientado a objetos y arquitectura limpia", icon: "solid" },
      { name: "Patrones de diseño", description: "Patrones arquitectónicos y soluciones de software reusables", icon: "designpatterns" },
    ],
  },
  {
    id: "cms-web",
    title: "CMS & Web",
    description: "Gestores de contenido, constructores visuales y estándares clave de accesibilidad y experiencia.",
    skills: [
      { name: "WordPress", description: "Creación de temas, personalización y plugins", icon: "wordpress" },
      { name: "Elementor", description: "Maquetación visual avanzada y diseño web", icon: "elementor" },
      { name: "Accesibilidad", description: "Estándares WCAG y accesibilidad universal (a11y)", icon: "accessibility" },
      { name: "Responsive", description: "Diseño adaptable y fluido en cualquier pantalla", icon: "responsive" },
    ],
  },
  {
    id: "herramientas-metodologias",
    title: "Herramientas & Metodologías",
    description: "Control de versiones, contenedores y marcos de trabajo colaborativos y ágiles.",
    skills: [
      { name: "Git", description: "Control de versiones distribuido y gestión de ramas", icon: "git" },
      { name: "GitHub", description: "Repositorios remotos, colaboración y flujos CI/CD", icon: "github" },
      { name: "Docker", description: "Contenedores, imágenes y despliegues reproducibles", icon: "docker" },
      { name: "Scrum", description: "Sprints, ceremonias y organización de equipo", icon: "scrum" },
      { name: "Agile", description: "Desarrollo iterativo, entregas continuas y mejora", icon: "agile" },
    ],
  },
];

