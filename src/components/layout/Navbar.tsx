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
    <header role="banner" className="w-full py-4 px-4 sm:px-6 lg:px-8 flex justify-center">
      {/* Contenedor flotante centrado con border-radius moderado y sombra sutil */}
      <div className="w-full max-w-md md:max-w-fit rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-200">
        
        {/* Cabecera / Navegación Desktop */}
        <div className="flex items-center justify-between md:justify-center px-4 py-2 sm:px-6">
          
          {/* Navegación Desktop (solo enlaces centrados) */}
          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-1 sm:gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-block rounded-lg px-3.5 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Versión Móvil: Botón de apertura/cierre de menú */}
          <div className="flex w-full items-center justify-between md:hidden">
            <span className="text-sm font-medium text-neutral-500">Navegación</span>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
            className="border-t border-neutral-100 px-3 py-2 md:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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