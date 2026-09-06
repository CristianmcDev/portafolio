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
 * Preparado para conectar con un servicio externo (ej. Formspree, Basin o Cloudflare Pages Function)
 */
export async function sendContactMessage(
  _data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Cuando conectes un endpoint de servicio externo en Cloudflare Pages, puedes sustituir
  // esta lógica por una llamada fetch:
  //
  // const response = await fetch("https://tu-servicio-de-formularios.com/api/...", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(_data),
  // });
  // if (!response.ok) throw new Error("Error en el envío");

  // Simulación con retardo realista de red
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 700);
  });
}
