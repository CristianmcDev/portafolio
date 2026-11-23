import { EXPERIENCES, COMPLEMENTARY_ROLE } from "../data/experience";
import ExperienceTimelineItem from "../components/ui/ExperienceTimelineItem";
import ComplementaryRoleCard from "../components/ui/ComplementaryRoleCard";

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16 text-slate-900 dark:text-slate-100 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary dark:bg-[#7FE0D4]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-[#7FE0D4]">
              Experiencia
            </span>
          </div>

          <h2
            id="experience-title"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl"
          >
            Trayectoria y experiencia relevante
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-primary dark:bg-[#7FE0D4]" />
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Recorrido profesional en desarrollo web, abarcando tanto el lado del cliente como del servidor, con experiencia en empresa, proyectos reales para entidades asociativas y gestión continua.
          </p>
        </div>

        {/* Línea temporal de experiencias */}
        <div className="mt-12">
          <div className="flex flex-col">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceTimelineItem
                key={experience.id}
                experience={experience}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Bloque complementario de responsabilidad y gestión */}
        <ComplementaryRoleCard roleData={COMPLEMENTARY_ROLE} />
      </div>
    </section>
  );
}
