import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="w-full border-t border-slate-200 bg-[#F8FAFC] py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Proyectos
            </span>
          </div>

          <h2
            id="projects-title"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Proyectos destacados
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-primary" />
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Selección de aplicaciones y sitios web desarrollados de forma práctica e individual, aplicando buenas prácticas y estándares modernos.
          </p>
        </div>

        {/* Proyectos Principales / Destacados (BonsaiArt & ASCOLAR) */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Experiencia Práctica y Proyectos Clave
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Otros Proyectos (XV Asamblea, Calendar, Teslo Shop) */}
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Desarrollos Complementarios
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
