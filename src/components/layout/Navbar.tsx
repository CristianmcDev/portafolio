import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Detectar scroll para navbar sticky y sección activa (Scroll-Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sectionIds = NAV_ITEMS.map((item) => item.id);

      // Si el usuario llega al final de la página, activar el último elemento (contacto)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Umbral de compensación con el navbar sticky
      const offset = 140;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - offset;
          if (scrollY >= top) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú con la tecla Escape y devolver el foco al botón toggle
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 flex w-full justify-center px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        isScrolled ? "py-2.5 sm:py-3" : "py-4"
      }`}
    >
      {/* Contenedor flotante centrado con estilo navy surface, borde sutil y sombra suave */}
      <div
        className={`w-full max-w-md rounded-xl border bg-slate-900/90 backdrop-blur-md transition-all duration-300 md:max-w-fit ${
          isScrolled
            ? "border-slate-700/80 shadow-lg shadow-black/25 bg-slate-900/95"
            : "border-slate-800 shadow-sm"
        }`}
      >
        {/* Cabecera / Navegación Desktop */}
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:justify-center">
          {/* Navegación Desktop (enlaces centrados y botón de tema apartado) */}
          <nav aria-label="Navegación principal" className="hidden md:flex md:items-center md:gap-1.5">
            <ul className="flex items-center gap-1 sm:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-block cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] ${
                        isActive
                          ? "bg-slate-800 text-[#7FE0D4] font-semibold shadow-xs ring-1 ring-slate-700/60"
                          : "font-medium text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Separador sutil para apartar el botón de tema sin alterar el diseño */}
            <div className="mx-1 h-4 w-px bg-slate-800" aria-hidden="true" />

            {/* Botón de cambio de tema (Dark Mode) */}
            <ThemeToggle />
          </nav>

          {/* Versión Móvil: Botón de apertura/cierre de menú y control de tema */}
          <div className="flex w-full items-center justify-between md:hidden">
            <span className="text-sm font-medium text-slate-400">Navegación</span>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                ref={toggleButtonRef}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4]"
              >
              {isOpen ? (
                // Icono Cerrar (X)
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Icono Hamburguesa
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            className="border-t border-slate-800 px-3 py-2 md:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-2 text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] ${
                        isActive
                          ? "bg-slate-800 text-[#7FE0D4] font-semibold border-l-2 border-[#7FE0D4]"
                          : "font-medium text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}