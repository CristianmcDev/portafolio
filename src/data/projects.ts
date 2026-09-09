import type { Project } from "../types/projects";
import bonsaiArtImg from "../assets/BonsaiArt.webp";
import ascolarImg from "../assets/AscolarWeb.webp";
import xvAsambleaImg from "../assets/WebXVAsamblea.webp";
import calendarImg from "../assets/CalendarWeb.webp";
import tesloShopImg from "../assets/TesloShop.webp";
import portafolioImg from "../assets/WebPortafolio.webp";

export const PROJECTS: Project[] = [
  {
    id: "bonsaiart",
    title: "BonsaiArt",
    year: "2020",
    type: "Proyecto E-commerce",
    description:
      "Tienda web orientada a la venta de bonsáis. Resuelve la compra y gestión integral de pedidos con catálogo categorizado, carrito interactivo, autenticación de usuarios y API REST conectada a base de datos NoSQL.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Bootstrap"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CristianmcDev/BonsaiArt",
        type: "github",
        ariaLabel: "Repositorio de BonsaiArt en GitHub (se abre en una nueva pestaña)",
      },
    ],
    featured: true,
    highlightBadge: "Destacado",
    image: bonsaiArtImg,
    imagePlaceholderText: "Captura de BonsaiArt",
  },
  {
    id: "ascolar",
    title: "ASCOLAR",
    year: "2026",
    type: "Web asociativa",
    description:
      "Sitio web en producción para la Asociación de Laringectomizados de Córdoba. Proporciona visibilidad a la entidad, difusión de servicios de rehabilitación, apoyo integral a pacientes y canal directo para socios y contacto.",
    technologies: ["WordPress", "Elementor"],
    links: [
      {
        label: "Visitar Web",
        url: "https://www.ascolar.org",
        type: "web",
        ariaLabel: "Visitar sitio web oficial de ASCOLAR (se abre en una nueva pestaña)",
      },
    ],
    featured: true,
    highlightBadge: "En producción",
    image: ascolarImg,
    imagePlaceholderText: "Captura de ASCOLAR",
  },
  {
    id: "xv-asamblea",
    title: "XV Asamblea Internacional de Laringectomizados",
    year: "2024",
    type: "Aplicación web de evento",
    description:
      "Plataforma SPA para la difusión y gestión de la XV Asamblea Internacional en Córdoba. Centraliza el programa del evento y agiliza las inscripciones y consultas mediante integración directa de formularios con EmailJS.",
    technologies: ["React", "Vite", "Material UI", "React Router", "EmailJS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CristianmcDev/XV-Asamblea",
        type: "github",
        ariaLabel:
          "Repositorio de la XV Asamblea Internacional de Laringectomizados en GitHub (se abre en una nueva pestaña)",
      },
    ],
    featured: false,
    image: xvAsambleaImg,
    imagePlaceholderText: "Captura de XV Asamblea",
  },
  {
    id: "portfolio",
    title: "Portfolio Web",
    year: "2026",
    type: "Sitio web personal",
    description:
      "Portfolio personal desarrollado para presentar mi experiencia, proyectos y habilidades como Desarrollador Web, cuidando especialmente la accesibilidad, el responsive design, el rendimiento y la experiencia de usuario. La IA se ha utilizado como herramienta de apoyo, manteniendo el control sobre las decisiones técnicas y el código.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Formspree"],
    links: [
      {
        label: "Visitar Web",
        url: "#inicio",
        type: "web",
        target: "_self",
        ariaLabel: "Ir al inicio del portfolio (este sitio web)",
      },
      {
        label: "GitHub",
        url: "https://github.com/CristianmcDev/cristian-portafolio",
        type: "github",
        target: "_blank",
        ariaLabel: "Repositorio del Portfolio en GitHub (se abre en una nueva pestaña)",
      },
    ],
    featured: false,
    highlightBadge: "Sitio actual",
    image: portafolioImg,
    imagePlaceholderText: "Portfolio Web (Sitio actual)",
  },
  {
    id: "calendar",
    title: "Calendar",
    year: "2026",
    type: "Aplicación full-stack (Formación)",
    description:
      "Aplicación interactiva de agenda y planificación de eventos. Contiene la gestión de citas personales con operaciones CRUD en tiempo real, persistencia en MongoDB y autenticación segura con JWT bajo arquitectura desacoplada.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Bootstrap", "JWT"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/CristianmcDev/Calendar-FrontEnd",
        type: "github",
        ariaLabel: "Repositorio Frontend de Calendar en GitHub (se abre en una nueva pestaña)",
      },
      {
        label: "Backend",
        url: "https://github.com/CristianmcDev/Calendar-Backend",
        type: "github",
        ariaLabel: "Repositorio Backend de Calendar en GitHub (se abre en una nueva pestaña)",
      },
    ],
    featured: false,
    image: calendarImg,
    imagePlaceholderText: "Captura de Calendar",
  },
  {
    id: "teslo-shop",
    title: "Teslo Shop",
    year: "2026",
    type: "E-commerce full-stack (Formación)",
    description:
      "E-commerce moderno con frontend y backend desacoplados y backend en NestJS. Consiste en la exploración fluida de catálogo con filtros dinámicos por query params, paginación, carrito y autenticación JWT con estado reactivo optimizado.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "NestJS"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/CristianmcDev/teslo-shop-react-frontend",
        type: "github",
        ariaLabel: "Repositorio Frontend de Teslo Shop en GitHub (se abre en una nueva pestaña)",
      },
      {
        label: "Backend",
        url: "https://github.com/CristianmcDev/teslo-shop-react-backend",
        type: "github",
        ariaLabel: "Repositorio Backend de Teslo Shop en GitHub (se abre en una nueva pestaña)",
      },
    ],
    featured: false,
    image: tesloShopImg,
    imagePlaceholderText: "Captura de Teslo Shop",
  },
];
