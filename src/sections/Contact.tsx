import ContactForm from "../components/ui/ContactForm";
import DirectEmailCard from "../components/ui/DirectEmailCard";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="w-full border-t border-slate-200 bg-[#F8FAFC] py-16 text-slate-900 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Contacto
            </span>
          </div>

          <h2
            id="contact-title"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            ¿Hablamos?
          </h2>

          <div className="pt-1 pb-2" aria-hidden="true">
            <div className="h-0.5 w-12 rounded-full bg-primary" />
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
           Si estás buscando un desarrollador web para incorporarse a un equipo o tienes un proyecto en mente, puedes contactar conmigo mediante el formulario o directamente por email.
          </p>
        </div>

        {/* Layout en dos columnas: Formulario y Acciones Directas */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <DirectEmailCard />
          </div>
        </div>
      </div>
    </section>
  );
}
