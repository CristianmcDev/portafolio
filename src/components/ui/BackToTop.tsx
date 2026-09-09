import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón una vez superado el Hero (~350px de scroll)
      setIsVisible(window.scrollY > 350);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Accesibilidad para teclado: devolver el foco al encabezado principal
    const heroTarget =
      document.getElementById("hero-title") || document.getElementById("inicio");
    if (heroTarget) {
      heroTarget.setAttribute("tabindex", "-1");
      heroTarget.focus({ preventScroll: true });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
      title="Volver al inicio"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-slate-300 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#7FE0D4]/70 hover:bg-slate-800 hover:text-[#7FE0D4] hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg
        className="h-5 w-5 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
