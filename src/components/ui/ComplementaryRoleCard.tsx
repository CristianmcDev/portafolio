import type { ComplementaryRole } from "../../types/experience";
import { TbCalendar, TbCheck } from "react-icons/tb";
import logoAscolar from "../../assets/LogoAscolar.webp";

interface ComplementaryRoleCardProps {
  roleData: ComplementaryRole;
}

export default function ComplementaryRoleCard({
  roleData,
}: ComplementaryRoleCardProps) {
  return (
    <article
      className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-8 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
      aria-labelledby="complementary-role-title"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 p-1.5 shadow-2xs">
            <img
              src={logoAscolar}
              alt="Logo oficial de ASCOLAR"
              className="h-full w-full object-contain"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Dato complementario · Gestión y Organización
              </span>
            </div>

            <h3
              id="complementary-role-title"
              className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
            >
              {roleData.role}
            </h3>

            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {roleData.organization}
            </p>
          </div>
        </div>

        {/* Período */}
        <div className="inline-flex items-center gap-1.5 self-start rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
          <TbCalendar className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <span>{roleData.period}</span>
          <span aria-hidden="true">·</span>
          <span>{roleData.approxDuration}</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
        {roleData.description}
      </p>

      {/* Puntos destacados de valor profesional transferible */}
      <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Competencias aplicadas en proyectos reales:
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Competencias de gestión">
          {roleData.skillsHighlighted.map((skill, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs"
            >
              <TbCheck className="h-3.5 w-3.5 text-teal-600 dark:text-[#7FE0D4]" aria-hidden="true" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
