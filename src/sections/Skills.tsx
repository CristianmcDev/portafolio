import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiAngular,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiLess,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiJest,
  SiWordpress,
  SiElementor,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import {
  TbDatabase,
  TbApi,
  TbFlask,
  TbLayersIntersect,
  TbPuzzle,
  TbRotate2,
  TbInfinity,
  TbPaw,
  TbCode,
} from "react-icons/tb";
import { MdAccessibilityNew, MdDevices } from "react-icons/md";
import { SKILL_CATEGORIES } from "../data/skills";

interface IconConfig {
  component: IconType;
  color?: string;
}

const SKILL_ICONS: Record<string, IconConfig> = {
  // Lenguajes
  html: { component: SiHtml5, color: "#E34F26" },
  html5: { component: SiHtml5, color: "#E34F26" },
  css: { component: SiCss, color: "#1572B6" },
  css3: { component: SiCss, color: "#1572B6" },
  javascript: { component: SiJavascript, color: "#F7DF1E" },
  js: { component: SiJavascript, color: "#F7DF1E" },
  typescript: { component: SiTypescript, color: "#3178C6" },
  ts: { component: SiTypescript, color: "#3178C6" },
  python: { component: SiPython, color: "#3776AB" },
  sql: { component: TbDatabase, color: "#0284C7" },

  // Frontend
  react: { component: SiReact, color: "#61DAFB" },
  angular: { component: SiAngular, color: "#DD0031" },
  redux: { component: SiRedux, color: "#764ABC" },
  zustand: { component: TbPaw, color: "#854D0E" },
  bootstrap: { component: SiBootstrap, color: "#7952B3" },
  tailwind: { component: SiTailwindcss, color: "#06B6D4" },
  sass: { component: SiSass, color: "#CC6699" },
  less: { component: SiLess, color: "#1D365D" },

  // Backend & Datos
  nodejs: { component: SiNodedotjs, color: "#5FA04E" },
  express: { component: SiExpress, color: "#111827" },
  mongodb: { component: SiMongodb, color: "#47A248" },
  mysql: { component: SiMysql, color: "#4479A1" },
  restapi: { component: TbApi, color: "#0284C7" },
  jwt: { component: SiJsonwebtokens, color: "#000000" },

  // Testing & Buenas prácticas
  jest: { component: SiJest, color: "#C21325" },
  testing: { component: TbFlask, color: "#059669" },
  solid: { component: TbLayersIntersect, color: "#4F46E5" },
  designpatterns: { component: TbPuzzle, color: "#7C3AED" },

  // CMS & Web
  wordpress: { component: SiWordpress, color: "#21759B" },
  elementor: { component: SiElementor, color: "#92003B" },
  accessibility: { component: MdAccessibilityNew, color: "#2563EB" },
  responsive: { component: MdDevices, color: "#1D4ED8" },

  // Herramientas & Metodologías
  git: { component: SiGit, color: "#F05032" },
  github: { component: SiGithub, color: "#181717" },
  docker: { component: SiDocker, color: "#2496ED" },
  scrum: { component: TbRotate2, color: "#D97706" },
  agile: { component: TbInfinity, color: "#059669" },
};

function SkillIcon({ icon }: { icon: string }) {
  const iconData = SKILL_ICONS[icon];

  if (iconData) {
    const IconComponent = iconData.component;
    return (
      <IconComponent
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        style={{ color: iconData.color }}
      />
    );
  }

  return <TbCode aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-500" />;
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="w-full border-t border-slate-200 bg-white py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Skills
            </span>
          </div>

          <h2
            id="skills-title"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Herramientas y tecnologías con las que trabajo
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-primary" />
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Stack técnico organizado por áreas de especialidad, enfocado en el desarrollo web moderno, calidad y accesibilidad.
          </p>
        </div>

        {/* Bloques Horizontales de Categorías */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 sm:p-6"
            >
              {/* Encabezado del Bloque */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {category.description}
                </p>
              </div>

              {/* Chips / Pills Horizontales Accesibles */}
              <ul
                className="flex flex-wrap gap-2 pt-1"
                aria-label={`Tecnologías de ${category.title}`}
              >
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs transition-all duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-primary hover:shadow-xs sm:px-3 sm:py-2 sm:text-sm"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-150 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <SkillIcon icon={skill.icon} />
                    </span>
                    <span className="select-none">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
