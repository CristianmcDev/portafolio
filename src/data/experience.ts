import type { ExperienceItem, ComplementaryRole } from "../types/experience";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ascolar-web",
    role: "Desarrollador Web",
    companyOrContext: "ASCOLAR (Asociación de Laringectomizados de Córdoba)",
    period: "06/2026 – Actualidad",
    level: "standard",
    typeBadge: "Desarrollo Activo",
    description:
      "Desarrollo y mantenimiento de la web de la Asociación de Laringectomizados de Córdoba utilizando WordPress y Elementor. Actualmente trabajando también en una nueva versión (V2) de la web.",
    projectLink: {
      label: "Ver proyecto en portfolio",
      href: "#proyectos",
    },
  },
  {
    id: "xv-asamblea",
    role: "Desarrollador Web",
    companyOrContext: "Proyecto XV Asamblea Internacional de Laringectomizados",
    period: "2023 – 2024",
    duration: "5 meses",
    level: "standard",
    typeBadge: "Proyecto Asociativo",
    description:
      "Desarrollo altruista de la web de la XV Asamblea Internacional de Laringectomizados para la asociación.",
    secondaryNote:
      "Participación en la organización de la propia asamblea.",
    projectLink: {
      label: "Ver proyecto en portfolio",
      href: "#proyectos",
    },
  },
  {
    id: "cleverpy-fp-dual",
    role: "Desarrollador Frontend",
    companyOrContext: "FP Dual — Cleverpy",
    period: "2019 – 2020",
    duration: "8 meses",
    level: "featured",
    typeBadge: "Experiencia en Empresa · FP Dual",
    description:
      "Desarrollo frontend en entorno empresarial durante mi formación de FP Dual, participando activamente en la construcción de interfaces interactivas, componentes modulares y lógica de cliente.",
    details: [
      "Desarrollo de interfaces de usuario y arquitectura de componentes utilizando React y gestión del estado con Redux.",
      "Creación y maquetación de páginas y elementos visuales interactivos con JavaScript, HTML5 y CSS3.",
      "Implementación de pruebas unitarias con Jest para verificar el correcto funcionamiento de la interfaz.",
      "Tratamiento, integración y manipulación de datos estructurados en formatos XML y JSON.",
    ],
    },
  {
    id: "mantenimiento-electronico",
    role: "Técnico de mantenimiento de equipos electrónicos",
    companyOrContext: "Prácticas de Grado Medio",
    period: "2015",
    duration: "3 meses",
    level: "secondary",
    description:
      "Prácticas formativas realizadas durante el Grado Medio de Mantenimiento de Equipos Electrónicos.",
  },
];

export const COMPLEMENTARY_ROLE: ComplementaryRole = {
  role: "Secretario de asociación",
  organization: "Asociación de Laringectomizados de Córdoba",
  period: "2022 – Actualidad",
  approxDuration: "Aprox. 4 años",
  description:
    "Participación continua en la gestión, organización y desarrollo de proyectos reales en la entidad.",
  skillsHighlighted: [
    "Gestión y administración",
    "Organización y coordinación",
    "Responsabilidad en proyectos reales",
  ],
};
