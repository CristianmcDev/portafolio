export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="w-full py-12 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-8 md:gap-10">
          {/* Foto de perfil a la izquierda */}
          <div className="shrink-0">
            <img
              src="/cristianMoreno.jpg"
              alt="Fotografía de Cristian Moreno"
              className="h-28 w-28 rounded-full border border-slate-700/80 object-cover shadow-sm sm:h-32 sm:w-32 md:h-36 md:w-36"
              loading="eager"
              fetchPriority="high"
              width="144"
              height="144"
            />
          </div>

          {/* Bloque principal de contenido */}
          <div className="flex flex-1 flex-col items-start space-y-4">
            <div className="space-y-1">
              <h1
                id="hero-title"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Cristian Moreno
              </h1>
              <p className="text-lg font-medium text-slate-200 sm:text-xl">
                Desarrollador Web
              </p>

              {/* Separador con color de acento turquesa (#7FE0D4) */}
              <div className="pt-2 pb-1" aria-hidden="true">
                <div className="h-0.5 w-12 rounded-full bg-[#7FE0D4]" />
              </div>
            </div>

            <p className="max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg">
              Especializado en la creación de aplicaciones y sitios web accesibles, intuitivos y eficientes, con un enfoque riguroso en la calidad de código y la experiencia de usuario.
            </p>

            {/* Enlaces de acción y redes profesionales */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-2 sm:w-auto">
              {/* Enlace/Botón CV (Azul Principal #1D4ED8) */}
              <a
                href="/cv.pdf"
                download="CV_Cristian_Moreno.pdf"
                aria-label="Descargar currículum vitae de Cristian Moreno en formato PDF"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#1D4ED8] px-4 py-2.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Descargar CV</span>
              </a>

              {/* Enlace GitHub */}
              <a
                href="https://github.com/CristianmcDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Cristian Moreno (se abre en una nueva pestaña)"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-xs transition-colors hover:border-slate-600 hover:bg-slate-700/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              {/* Enlace LinkedIn */}
              <a
                href="https://www.linkedin.com/in/cristianmc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Cristian Moreno (se abre en una nueva pestaña)"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-xs transition-colors hover:border-slate-600 hover:bg-slate-700/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 6.46 5.48a1.64 1.64 0 0 0-1.64 1.64c0 .91.73 1.64 1.64 1.64m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
