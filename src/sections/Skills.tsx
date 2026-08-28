import { SKILL_CATEGORIES } from "../data/skills";

function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "html5":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.743-8.158H8.531z" />
        </svg>
      );
    case "css3":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.743-8.158H8.531l-.232-2.718 10.059-.003.232-2.624z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className="h-6 w-6 shrink-0 rounded-[4px]" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M12.96 15.35c.34.61.81 1.05 1.6 1.05.77 0 1.25-.38 1.25-1.52v-5.94h2.24v5.99c0 2.27-1.33 3.28-3.4 3.28-1.84 0-2.95-.97-3.48-2.15l1.79-1.01zm-6.06.31c.42.74 1.15 1.34 2.29 1.34 1.23 0 2.02-.63 2.02-1.5 0-.93-.72-1.32-1.92-1.84l-.66-.28c-1.91-.81-3.17-1.84-3.17-4.04 0-2.02 1.54-3.55 3.96-3.55 1.74 0 2.99.61 3.82 2.06l-1.83 1.17c-.36-.66-.86-.92-1.74-.92-.81 0-1.36.42-1.36 1.05 0 .74.53 1.07 1.65 1.55l.66.29c2.25.97 3.49 1.99 3.49 4.39 0 2.5-1.97 3.73-4.41 3.73-2.45 0-3.99-1.2-4.66-2.58l1.86-1.16z"
          />
        </svg>
      );
    case "typescript":
      return (
        <svg className="h-6 w-6 shrink-0 rounded-[4px]" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            fill="#FFFFFF"
            d="M12.75 14.86c.39.69 1.07 1.25 2.13 1.25 1.14 0 1.88-.58 1.88-1.4 0-.87-.67-1.23-1.79-1.72l-.62-.27c-1.78-.76-2.95-1.71-2.95-3.77 0-1.88 1.44-3.3 3.69-3.3 1.62 0 2.78.57 3.56 1.92l-1.71 1.1c-.34-.62-.8-.86-1.62-.86-.76 0-1.27.4-1.27.98 0 .69.49 1 1.54 1.45l.62.27c2.1 1.01 3.25 1.86 3.25 4.1 0 2.33-1.84 3.48-4.11 3.48-2.28 0-3.72-1.12-4.35-2.41l1.75-1.07zM3.46 7.73H11.5v2.24H8.71v9.23H6.26V9.97H3.46V7.73z"
          />
        </svg>
      );
    case "react":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none" aria-hidden="true">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "wordpress":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#21759B"
            d="M12 0C5.373 0 0 5.373 0 12c0 4.975 3.027 9.243 7.332 11.047L2.469 8.683C3.606 5.86 6.559 3.86 10.024 3.86c1.171 0 2.278.232 3.284.654L9.805 15.65 6.772 7.026c.492-.023.94-.07 1.341-.115.344-.047.344-.735 0-.782-.642 0-1.652.07-2.318.07-.643 0-1.652-.07-2.295-.07-.344.047-.344.735 0 .782.38.045.803.092 1.25.115l3.878 10.973-5.362-15.54C1.94 4.545 1.104 8.167 1.104 12c0 5.405 3.96 9.887 9.176 10.724L3.682 9.074c.734-.047 1.399-.115 1.949-.184.344-.047.344-.735 0-.782-.643 0-1.653.07-2.318.07-.115 0-.275 0-.436-.023C4.843 3.654 8.188 1.104 12 1.104c3.344 0 6.324 1.536 8.293 3.929-.07.023-.138.07-.207.092-.895.047-1.537.115-2.065.184-.344.047-.344.735 0 .782.643 0 1.652-.07 2.295-.07.643 0 1.652.07 2.318.07.344-.047.344-.735 0-.782-.425-.046-.872-.093-1.354-.115l4.567 13.237C22.614 16.485 24 12 24 12c0-6.627-5.373-12-12-12zm-1.079 22.822c-2.479 0-4.73-.895-6.495-2.386l4.636-12.71 4.59 12.572c-.895.344-1.86.524-2.731.524zm9.479-3.717c.023-.115.023-.23.023-.344 0-1.607-.849-2.915-1.744-4.384-.712-1.125-1.399-2.341-1.399-3.924 0-.872.23-1.653.574-2.341l-4.407 13.007c2.754-.459 5.096-1.928 6.953-2.014z"
          />
        </svg>
      );
    case "headless":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#4F46E5" fill="#EEF2FF" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#4F46E5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="#0284C7" />
          <circle cx="12" cy="12" r="1.5" fill="#4F46E5" />
          <circle cx="12" cy="19" r="1.5" fill="#0284C7" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#95BF47" d="M18.8 3.5l-1.3-.4c-.1-.7-.6-1.3-1.4-1.3-.2 0-.4 0-.6.1L14 2.4C13.8 1.4 13 .6 12 .6c-.3 0-.6.1-.9.2L6.8 2.2C6 2.5 5.5 3.3 5.5 4.2l-.7 2.1H2.4c-.4 0-.8.4-.7.8l2.2 14.5c.1.7.7 1.2 1.4 1.2h13.4c.7 0 1.3-.5 1.4-1.2l2.2-14.5c.1-.4-.3-.8-.7-.8h-2.4l-.4-2.8zm-6.2-1.7c.5 0 .9.4 1 1l-2.1.8c.2-1 .7-1.8 1.1-1.8zm-4.7 1.8c.2-.5.7-.9 1.3-.9l1.6-.6c-.3.7-.4 1.5-.4 2.4L7.5 4.8l.4-1.2zm8.7 17.2H6.4L4.5 7.5h15l-1.9 13.3z" />
          <path fill="#5E8E3E" d="M14.6 9.4c-1.6 0-2.6.9-2.6 2.1 0 2.2 3.1 1.7 3.1 3.2 0 .6-.5.9-1.2.9-.9 0-1.6-.5-1.9-1.1l-1.2.8c.6 1.1 1.7 1.8 3.1 1.8 1.7 0 2.8-.9 2.8-2.3 0-2.4-3.1-1.9-3.1-3.2 0-.5.4-.8 1-.8.7 0 1.3.4 1.6.8l1.1-.9c-.6-.8-1.5-1.3-2.7-1.3z" />
        </svg>
      );
    case "git":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#F05032"
            d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.124 0L8.835 2.56l3.05 3.05a1.8 1.8 0 0 1 2.27 2.272l2.94 2.94a1.8 1.8 0 0 1 1.76.452 1.77 1.77 0 0 1 0 2.502 1.77 1.77 0 0 1-2.503 0 1.77 1.77 0 0 1-.444-1.826l-2.748-2.748v6.712a1.8 1.8 0 0 1 .494 1.258 1.77 1.77 0 0 1-1.77 1.77 1.77 1.77 0 0 1-1.77-1.77 1.79 1.79 0 0 1 .715-1.428V8.674a1.79 1.79 0 0 1-.715-1.428 1.78 1.78 0 0 1 .493-1.258L7.65 2.92.454 10.116a1.5 1.5 0 0 0 0 2.124L10.933 22.72a1.5 1.5 0 0 0 2.124 0l10.49-10.49a1.5 1.5 0 0 0 0-2.124z"
          />
        </svg>
      );
    case "vite":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21.84 4.31L12.83 21.6a1 1 0 0 1-1.66 0L2.16 4.31A1 1 0 0 1 3 3h18a1 1 0 0 1 .84 1.31z" fill="#646CFF" fillOpacity="0.85" />
          <path d="M14.5 2L5.5 13h5.5L8.5 22l9-11h-5.5L14.5 2z" fill="#FFD62E" stroke="#BD34FE" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      );
    case "figma":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#F24E1E" d="M7.5 0A4.5 4.5 0 0 0 3 4.5 4.5 4.5 0 0 0 7.5 9H12V0H7.5z" />
          <path fill="#FF7262" d="M16.5 0H12v9h4.5A4.5 4.5 0 0 0 21 4.5 4.5 4.5 0 0 0 16.5 0z" />
          <path fill="#A259FF" d="M7.5 7.5A4.5 4.5 0 0 0 3 12a4.5 4.5 0 0 0 4.5 4.5H12V7.5H7.5z" />
          <circle cx="16.5" cy="12" r="4.5" fill="#1ABCFE" />
          <path fill="#0ACF83" d="M7.5 15A4.5 4.5 0 0 0 3 19.5 4.5 4.5 0 0 0 7.5 24 4.5 4.5 0 0 0 12 19.5V15H7.5z" />
        </svg>
      );
    case "devtools":
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#F44B21" d="M12 0l-5.8 4.2 1.4 5.3h8.8l1.4-5.3L12 0zm-1.8 11.5L6.5 24h11l-3.7-12.5h-5.6z" />
          <circle cx="12" cy="7.5" r="2" fill="#FFB400" />
          <path d="M12 14v6" stroke="#0CCE6B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="w-full border-t border-slate-200 bg-white py-16 text-slate-900 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Tecnologías
            </span>
          </div>

          <h2
            id="skills-title"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Herramientas y tecnologías con las que trabajo
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-[#1D4ED8]" />
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Stack tecnológico enfocado en la construcción de interfaces limpias, accesibles, de alto rendimiento y fácil mantenimiento.
          </p>
        </div>

        {/* Categorías de Tecnologías */}
        <div className="mt-12 space-y-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8"
            >
              {/* Encabezado de la Categoría */}
              <div className="mb-6 flex flex-col gap-1 border-b border-slate-200/80 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {category.description}
                </p>
              </div>

              {/* Lista de Tecnologías en la Categoría */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                  >
                    {/* Contenedor del logotipo con icono vectorial oficial */}
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-slate-50 transition-all duration-200 group-hover:scale-105 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-xs"
                      aria-hidden="true"
                    >
                      <SkillIcon icon={skill.icon} />
                    </div>

                    {/* Texto informativo accesible */}
                    <div className="flex flex-col min-w-0">
                      <span className="truncate text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#1D4ED8]">
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="line-clamp-2 mt-0.5 text-xs text-slate-500">
                          {skill.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
