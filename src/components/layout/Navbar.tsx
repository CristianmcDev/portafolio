import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

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

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header role="banner" className="flex w-full justify-center px-4 py-4 sm:px-6 lg:px-8">
      {/* Contenedor flotante centrado con estilo navy surface, borde sutil y sombra suave */}
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/90 shadow-sm backdrop-blur-md transition-all duration-200 md:max-w-fit">
        
        {/* Cabecera / Navegación Desktop */}
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:justify-center">
          
          {/* Navegación Desktop (solo enlaces centrados) */}
          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-1 sm:gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-block rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Versión Móvil: Botón de apertura/cierre de menú */}
          <div className="flex w-full items-center justify-between md:hidden">
            <span className="text-sm font-medium text-slate-400">Navegación</span>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4]"
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

        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            className="border-t border-slate-800 px-3 py-2 md:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-slate-300 hover:bg-slate-800/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}