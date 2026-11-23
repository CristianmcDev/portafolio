import type { ExperienceItem } from "../../types/experience";
import { TbBriefcase, TbCode, TbTool, TbCalendar, TbArrowUpRight } from "react-icons/tb";

interface ExperienceTimelineItemProps {
  experience: ExperienceItem;
  isLast?: boolean;
}

export default function ExperienceTimelineItem({
  experience,
  isLast = false,
}: ExperienceTimelineItemProps) {
  const isFeatured = experience.level === "featured";
  const isSecondary = experience.level === "secondary";

  // Icono según el tipo de experiencia
  const renderIcon = () => {
    if (isSecondary) {
      return <TbTool className="h-4 w-4 text-slate-500" aria-hidden="true" />;
    }
    if (isFeatured) {
      return <TbBriefcase className="h-4 w-4 text-primary" aria-hidden="true" />;
    }
    return <TbCode className="h-4 w-4 text-primary" aria-hidden="true" />;
  };

  return (
    <div className="relative flex items-start gap-4 sm:gap-6">
      {/* Columna de la línea de tiempo vertical y nodo */}
      <div className="flex flex-col items-center self-stretch">
        {/* Nodo indicador */}
        <div
          className={`relative z-10 flex items-center justify-center rounded-full border transition-transform duration-200 ${
            isFeatured
              ? "h-9 w-9 border-primary bg-primary/10 ring-4 ring-primary/10 shadow-xs"
              : isSecondary
                ? "h-7 w-7 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 mt-1"
                : "h-8 w-8 border-primary/60 bg-white dark:bg-slate-900 ring-2 ring-primary/10 shadow-2xs"
          }`}
          aria-hidden="true"
        >
          {renderIcon()}
        </div>

        {/* Línea conectora si no es el último elemento */}
        {!isLast && (
          <div
            className={`w-0.5 flex-1 ${
              isSecondary
                ? "bg-slate-200 dark:bg-slate-800"
                : "bg-gradient-to-b from-primary/30 to-slate-200 dark:from-primary/40 dark:to-slate-800"
            }`}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Tarjeta de contenido */}
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-8 sm:pb-10"}`}>
        <article
          className={`rounded-2xl transition-all duration-200 ${
            isFeatured
              ? "border-2 border-primary/30 dark:border-primary/40 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm hover:border-primary/50 hover:shadow-md"
              : isSecondary
                ? "border border-slate-200/70 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 p-4 sm:p-5 opacity-90 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700"
                : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
          }`}
          aria-labelledby={`exp-title-${experience.id}`}
        >
          {/* Fila superior: Rol, Badge de tipo y Fechas */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  id={`exp-title-${experience.id}`}
                  className={`font-bold tracking-tight text-slate-900 dark:text-white ${
                    isFeatured ? "text-lg sm:text-xl" : isSecondary ? "text-sm sm:text-base text-slate-700 dark:text-slate-300" : "text-base sm:text-lg"
                  }`}
                >
                  {experience.role}
                </h3>

                {experience.typeBadge && (
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      isFeatured
                        ? "border border-primary/20 dark:border-primary/30 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400"
                        : "border border-teal-600/20 dark:border-teal-400/30 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300"
                    }`}
                  >
                    {experience.typeBadge}
                  </span>
                )}
              </div>

              <p
                className={`font-medium ${
                  isFeatured
                    ? "text-sm sm:text-base text-slate-800 dark:text-slate-200"
                    : isSecondary
                      ? "text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                      : "text-sm text-slate-700 dark:text-slate-300"
                }`}
              >
                {experience.companyOrContext}
              </p>
            </div>

            {/* Período y duración */}
            <div className="inline-flex items-center gap-1.5 self-start rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
              <TbCalendar className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              <span>{experience.period}</span>
              {experience.duration && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{experience.duration}</span>
                </>
              )}
            </div>
          </div>

          {/* Descripción */}
          <p
            className={`mt-3 leading-relaxed ${
              isSecondary ? "text-xs sm:text-sm text-slate-600 dark:text-slate-400" : "text-sm sm:text-base text-slate-600 dark:text-slate-300"
            }`}
          >
            {experience.description}
          </p>

          {/* Detalles / Puntos clave para reclutadores */}
          {experience.details && experience.details.length > 0 && (
            <ul
              className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              aria-label="Responsabilidades y tareas desempeñadas"
            >
              {experience.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
          {/* Aspecto secundario (ej. organización de la asamblea) */}
          {experience.secondaryNote && (
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-slate-200/80 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-200 shrink-0">Organización:</span>
              <span>{experience.secondaryNote}</span>
            </div>
          )}

          {/* Enlace al proyecto relacionado en el portfolio */}
          {experience.projectLink && (
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center">
              <a
                href={experience.projectLink.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-[#7FE0D4] transition-colors hover:text-primary-hover dark:hover:text-[#6cd4c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                <span>{experience.projectLink.label}</span>
                <TbArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
