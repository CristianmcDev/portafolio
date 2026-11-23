import { useState } from "react";
import type { FormEvent, ChangeEvent, FocusEvent } from "react";
import type { ContactFormData, ContactFormErrors, SubmissionStatus } from "../../types/contact";
import { validateContactForm, sendContactMessage } from "../../lib/contactUtils";
import { TbSend, TbCheck, TbAlertCircle, TbLoader2 } from "react-icons/tb";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Si el campo ya ha sido tocado o contenía un error, validamos al escribir
    if (touched[name] || errors[name as keyof ContactFormErrors]) {
      const currentData = { ...formData, [name]: value };
      const { errors: newErrors } = validateContactForm(currentData);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof ContactFormErrors],
      }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const { errors: newErrors } = validateContactForm(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof ContactFormErrors],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    setTouched({ name: true, email: true, message: true });

    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      // Foco en el primer campo erróneo para usuarios con teclado/lectores de pantalla
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(`contact-${firstErrorField}`);
      element?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await sendContactMessage(formData);
      if (response.success) {
        setStatus("success");
        setFormData(INITIAL_FORM_DATA);
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setTouched({});
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
        Enviar un mensaje
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Rellena el siguiente formulario y me pondré en contacto contigo lo antes posible.
      </p>

      {/* Estado de Éxito */}
      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-5 text-emerald-900 dark:text-emerald-200"
        >
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xs"
              aria-hidden="true"
            >
              <TbCheck className="h-4 w-4" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-950 dark:text-emerald-100 text-base">
                ¡Mensaje enviado con éxito!
              </h4>
              <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
                Muchas gracias por tu mensaje. He recibido tu comunicación y te responderé lo antes posible.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 inline-flex items-center rounded-lg bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Enviar otro mensaje
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          className="mt-6 space-y-5"
        >
          {/* Mensaje de error global si falló el envío */}
          {status === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 p-4 text-sm text-rose-900 dark:text-rose-200"
            >
              <div className="flex items-start gap-2.5">
                <TbAlertCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400"
                  aria-hidden="true"
                />
                <p>
                  No se pudo procesar el envío en este momento. Por favor, inténtalo de nuevo o utiliza la opción de contacto directo por email.
                </p>
              </div>
            </div>
          )}

          {/* Campo: Nombre */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Nombre <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5 relative">
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={status === "submitting"}
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                autoComplete="name"
                placeholder="Tu nombre completo"
                className={`w-full rounded-xl border bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 ${
                  errors.name
                    ? "border-rose-300 dark:border-rose-600 focus-visible:border-rose-500 focus-visible:ring-rose-500/20"
                    : "border-slate-300 dark:border-slate-700 focus-visible:border-primary focus-visible:ring-primary/20"
                } disabled:bg-slate-50 dark:disabled:bg-slate-800/60 disabled:text-slate-500 dark:disabled:text-slate-400`}
              />
            </div>
            {errors.name && (
              <div
                id="name-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-700 dark:text-rose-400"
              >
                <TbAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Campo: Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Correo electrónico <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5 relative">
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={status === "submitting"}
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                autoComplete="email"
                placeholder="tu-correo@ejemplo.com"
                className={`w-full rounded-xl border bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 ${
                  errors.email
                    ? "border-rose-300 dark:border-rose-600 focus-visible:border-rose-500 focus-visible:ring-rose-500/20"
                    : "border-slate-300 dark:border-slate-700 focus-visible:border-primary focus-visible:ring-primary/20"
                } disabled:bg-slate-50 dark:disabled:bg-slate-800/60 disabled:text-slate-500 dark:disabled:text-slate-400`}
              />
            </div>
            {errors.email && (
              <div
                id="email-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-700 dark:text-rose-400"
              >
                <TbAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Campo: Mensaje */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Mensaje <span className="text-rose-600 dark:text-rose-400" aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5 relative">
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                disabled={status === "submitting"}
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                placeholder="Escribe aquí tu propuesta o mensaje..."
                className={`w-full rounded-xl border bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 resize-y min-h-[120px] ${
                  errors.message
                    ? "border-rose-300 dark:border-rose-600 focus-visible:border-rose-500 focus-visible:ring-rose-500/20"
                    : "border-slate-300 dark:border-slate-700 focus-visible:border-primary focus-visible:ring-primary/20"
                } disabled:bg-slate-50 dark:disabled:bg-slate-800/60 disabled:text-slate-500 dark:disabled:text-slate-400`}
              />
            </div>
            {errors.message && (
              <div
                id="message-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-700 dark:text-rose-400"
              >
                <TbAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Botón Enviar */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <TbLoader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <>
                  <TbSend className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar mensaje</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
