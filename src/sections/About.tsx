export default function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="w-full border-t border-slate-200 bg-[#F8FAFC] py-16 text-slate-900 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Sobre mí
            </span>
          </div>

          <h2
            id="about-title"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Desarrollo proyectos web de principio a fin
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-[#1D4ED8]" />
          </div>
        </div>

        {/* Párrafos descriptivos */}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
          <p>
            Soy Cristian Moreno, <strong className="font-semibold text-slate-900">Desarrollador Web</strong>. Me interesa crear aplicaciones y sitios web <strong className="font-semibold text-slate-900">claros, accesibles y rápidos</strong>, cuidando tanto su funcionamiento como su diseño y estructura.
          </p>
          <p>
            Mi experiencia combina <strong className="font-semibold text-slate-900">desarrollo profesional y proyectos propios</strong>, trabajando tanto en frontend como en el desarrollo de aplicaciones y sitios web completos. Me gusta participar en todo el proceso, desde organizar una idea y construir su interfaz hasta convertirla en un <strong className="font-semibold text-slate-900">producto funcional</strong>.
          </p>
        </div>

        {/* Pilares / Áreas de enfoque */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Card 1: Accesibilidad */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm">
            <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-[#1D4ED8]" aria-hidden="true">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Accesibilidad Web
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Diseño y desarrollo teniendo en cuenta los estándares de accesibilidad para crear experiencias que puedan utilizar el mayor número de personas posible.
            </p>
          </div>

          {/* Card 2: Calidad y Rendimiento */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm">
            <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-[#1D4ED8]" aria-hidden="true">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Código Limpio
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Estructuras claras, componentes reutilizables y código organizado para facilitar su mantenimiento y evolución.
            </p>
          </div>

          {/* Card 3: Experiencia de Usuario */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-sm">
            <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-[#1D4ED8]" aria-hidden="true">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Diseño Intuitivo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Interfaces claras, jerarquías visuales bien definidas y navegación natural en cualquier resolución.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
