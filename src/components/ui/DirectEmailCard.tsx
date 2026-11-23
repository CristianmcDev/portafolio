import { useState, useRef, useEffect } from "react";
import { getContactEmail, openMailtoClient } from "../../lib/contactUtils";
import { TbMail, TbCopy, TbCheck } from "react-icons/tb";

export default function DirectEmailCard() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      const email = getContactEmail();
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Fallback si el portapapeles no tiene permisos
      setCopied(false);
    }
  };

  const handleOpenMailto = () => {
    openMailtoClient();
  };

  return (
    <aside
      aria-labelledby="direct-email-heading"
      className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs"
    >
      <div className="space-y-4">
        {/* Cabecera de la tarjeta */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#7FE0D4]"
            aria-hidden="true"
          >
            <TbMail className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Vía directa
            </span>
            <h3
              id="direct-email-heading"
              className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
            >
              Contacto por email
            </h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Si prefieres redactar desde tu cliente de correo habitual o añadirme a tu libreta de contactos, dispones de estas dos opciones rápidas:
        </p>

        {/* Acciones de correo */}
        <div className="space-y-3 pt-2">
          {/* Acción 1: Abrir mailto */}
          <button
            type="button"
            onClick={handleOpenMailto}
            aria-label="Abrir tu cliente de correo para enviar un email"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl cursor-pointer bg-slate-900 dark:bg-slate-800 dark:border dark:border-slate-700 px-4 py-3 text-sm font-semibold text-white shadow-2xs transition-colors hover:bg-slate-800 dark:hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FE0D4]"
          >
            <TbMail className="h-4 w-4" aria-hidden="true" />
            <span>Contactar por email</span>
          </button>

          {/* Acción 2: Copiar al portapapeles */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copiar dirección de correo al portapapeles"
            className={`inline-flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              copied
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 focus-visible:outline-emerald-600"
                : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600 focus-visible:outline-[#7FE0D4]"
            }`}
          >
            {copied ? (
              <>
                <TbCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>¡Email copiado!</span>
              </>
            ) : (
              <>
                <TbCopy className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                <span>Copiar email</span>
              </>
            )}
          </button>

          {/* Anuncio accesible de estado para lectores de pantalla */}
          <div aria-live="polite" className="sr-only">
            {copied ? "Dirección de correo electrónico copiada al portapapeles con éxito." : ""}
          </div>
        </div>
      </div>

      {/* Nota contextual accesible */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          La dirección se procesa dinámicamente para protegerla de indexación y no se expone en texto plano en la página.
        </p>
      </div>
    </aside>
  );
}
