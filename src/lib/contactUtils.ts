import type { ContactFormData, ContactFormErrors } from "../types/contact";

// Fragmentación en memoria para no exponer la dirección como texto plano directamente en el HTML renderizado
const EMAIL_USER_PARTS = ["cristian", "m.", "dev"];
const EMAIL_DOMAIN_PARTS = ["gmail", "com"];

/**
 * Reconstruye dinámicamente la dirección de correo en tiempo de ejecución
 */
export function getContactEmail(): string {
  const user = EMAIL_USER_PARTS.join("");
  const domain = EMAIL_DOMAIN_PARTS.join(".");
  return `${user}@${domain}`;
}

/**
 * Abre el cliente de correo del usuario mediante mailto
 */
export function openMailtoClient(subject = "Contacto desde el portfolio"): void {
  const email = getContactEmail();
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
}

/**
 * Valida los datos del formulario de contacto del lado del cliente
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  // Validación de nombre
  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = "Por favor, introduce tu nombre.";
  } else if (trimmedName.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  // Validación de email
  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = "Por favor, introduce tu dirección de correo electrónico.";
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Introduce un formato de email válido (ej. nombre@ejemplo.com).";
  }

  // Validación de mensaje
  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = "Por favor, escribe un mensaje.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "El mensaje debe contener al menos 10 caracteres.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Envía el mensaje del formulario de contacto a Formspree directamente desde el navegador.
 * Los campos name, email y message coinciden con los campos del formulario.
 */
export async function sendContactMessage(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://formspree.io/f/maeylbry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      let errorMessage = "Error en el envío";
      if (errorData?.errors && Array.isArray(errorData.errors)) {
        errorMessage = errorData.errors
          .map((err: { message?: string }) => err.message)
          .filter(Boolean)
          .join(", ");
      } else if (errorData?.error) {
        errorMessage = errorData.error;
      }
      return { success: false, error: errorMessage };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Error de conexión al enviar el mensaje",
    };
  }
}

