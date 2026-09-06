import type { ComplementaryRole } from "../../types/experience";
import { TbCalendar, TbCheck } from "react-icons/tb";
import logoAscolar from "../../assets/LogoAscolar.png";

interface ComplementaryRoleCardProps {
  roleData: ComplementaryRole;
}

export default function ComplementaryRoleCard({
  roleData,
}: ComplementaryRoleCardProps) {
  return (
    <div
      className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 transition-all duration-200 hover:border-slate-300"
      aria-labelledby="complementary-role-title"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-2xs">
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
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Dato complementario · Gestión y Organización
              </span>
            </div>

            <h3
              id="complementary-role-title"
              className="text-lg font-bold text-slate-900 sm:text-xl"
            >
              {roleData.role}
            </h3>

            <p className="text-sm font-medium text-slate-700">
              {roleData.organization}
            </p>
          </div>
        </div>

        {/* Período */}
        <div className="inline-flex items-center gap-1.5 self-start rounded-md bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs">
          <TbCalendar className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
          <span>{roleData.period}</span>
          <span aria-hidden="true">·</span>
          <span>{roleData.approxDuration}</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
        {roleData.description}
      </p>

      {/* Puntos destacados de valor profesional transferible */}
      <div className="mt-4 pt-4 border-t border-slate-200/80">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Competencias aplicadas en proyectos reales:
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Competencias de gestión">
          {roleData.skillsHighlighted.map((skill, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs"
            >
              <TbCheck className="h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
