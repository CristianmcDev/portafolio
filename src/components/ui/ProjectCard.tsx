import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { IconType } from "react-icons";
import type { Project } from "../../types/projects";
import {
  SiGithub,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiElementor,
  SiVite,
  SiMui,
  SiReactrouter,
  SiJsonwebtokens,
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiNestjs,
} from "react-icons/si";
import {
  TbExternalLink,
  TbDeviceDesktop,
  TbCode,
  TbMail,
  TbPaw,
  TbZoomIn,
  TbX,
} from "react-icons/tb";

interface TechIconConfig {
  component: IconType;
  color: string;
}

const TECH_CONFIG: Record<string, TechIconConfig> = {
  React: { component: SiReact, color: "#0284C7" },
  "React 18": { component: SiReact, color: "#0284C7" },
  "React 19": { component: SiReact, color: "#0284C7" },
  Redux: { component: SiRedux, color: "#764ABC" },
  Bootstrap: { component: SiBootstrap, color: "#7952B3" },
  "Node.js": { component: SiNodedotjs, color: "#5FA04E" },
  Express: { component: SiExpress, color: "#111827" },
  MongoDB: { component: SiMongodb, color: "#13AA52" },
  WordPress: { component: SiWordpress, color: "#21759B" },
  Elementor: { component: SiElementor, color: "#92003B" },
  Vite: { component: SiVite, color: "#646CFF" },
  "Material UI": { component: SiMui, color: "#007FFF" },
  "React Router": { component: SiReactrouter, color: "#CA4245" },
  EmailJS: { component: TbMail, color: "#EA4335" },
  JWT: { component: SiJsonwebtokens, color: "#111827" },
  TypeScript: { component: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { component: SiTailwindcss, color: "#06B6D4" },
  Zustand: { component: TbPaw, color: "#854D0E" },
  "TanStack Query": { component: SiReactquery, color: "#FF4154" },
  NestJS: { component: SiNestjs, color: "#E0234E" },
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Mover foco al botón de cierre al abrir el modal
  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <article
      aria-labelledby={`project-${project.id}-title`}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        featured
          ? "border-slate-300/90 hover:border-primary/40 md:col-span-1"
          : "border-slate-200/90 hover:border-slate-300"
      }`}
    >
      {/* Zona visual / Placeholder de Captura del Proyecto */}
      <div className="relative aspect-16/10 w-full overflow-hidden border-b border-slate-200/80 bg-slate-100/90 sm:aspect-16/9">
        {/* Mockup superior tipo ventana de navegador */}
        <div className="flex h-7 items-center justify-between border-b border-slate-200/60 bg-slate-200/50 px-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>
          <span className="truncate text-[10px] font-mono font-medium text-slate-500">
            {project.id}.cristianmoreno.dev
          </span>
          <div className="w-8" aria-hidden="true" />
        </div>

        {/* Contenido visual: Captura del Proyecto o Placeholder de reserva */}
        {project.image ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={handleOpenModal}
            className="group/img relative block h-[calc(100%-1.75rem)] w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Ampliar imagen de ${project.title}`}
            aria-haspopup="dialog"
          >
            <img
              src={project.image}
              alt={`Captura de pantalla de ${project.title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
            />
            {/* Indicador sutil de ampliación al pasar el cursor */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/25 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover/img:opacity-100"
              aria-hidden="true"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-xs">
                <TbZoomIn className="h-4 w-4" />
                <span>Ampliar imagen</span>
              </span>
            </div>
          </button>
        ) : (
          <div className="flex h-[calc(100%-1.75rem)] flex-col items-center justify-center p-4 text-center">
            <div
              className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-2xs transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            >
              {project.links.some((l) => l.type === "web") ? (
                <TbDeviceDesktop className="h-5 w-5 text-primary" />
              ) : (
                <TbCode className="h-5 w-5 text-primary" />
              )}
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {project.imagePlaceholderText || project.title}
            </span>
            <span className="mt-0.5 text-[11px] text-slate-500">
              Espacio reservado para vista previa
            </span>
          </div>
        )}

        {/* Badge flotante de proyecto destacado / en producción cuando corresponda */}
        {project.highlightBadge && (
          <div className="absolute top-9 right-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-600/20 bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-800 shadow-2xs backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7FE0D4]" aria-hidden="true" />
              {project.highlightBadge}
            </span>
          </div>
        )}
      </div>

      {/* Cuerpo de información del proyecto */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Metadatos: Tipo y Año */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {project.type}
          </span>
          {project.year && (
            <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs font-semibold text-slate-600">
              {project.year}
            </span>
          )}
        </div>

        {/* Título */}
        <h3
          id={`project-${project.id}-title`}
          className="mt-3 text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          {project.title}
        </h3>

        {/* Descripción: Qué resuelve el proyecto */}
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Tecnologías utilizadas con logos oficiales y accesibilidad WCAG 2.2 AA */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Tecnologías clave
            </span>
            <ul
              className="mt-2 flex flex-wrap gap-1.5"
              aria-label={`Tecnologías utilizadas en ${project.title}`}
            >
              {project.technologies.map((tech) => {
                const config = TECH_CONFIG[tech];
                const IconComponent = config?.component || TbCode;
                const iconColor = config?.color || "#475569";

                return (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 mb-3 rounded-lg border border-slate-200/90 bg-slate-50/90 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-2xs transition-all hover:border-slate-300 hover:bg-white"
                  >
                    <IconComponent
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: iconColor }}
                      aria-hidden="true"
                    />
                    <span>{tech}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Enlaces de Acción (GitHub y/o Web) */}
        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((link) => {
              const isWeb = link.type === "web";
              const defaultAria = isWeb
                ? `Visitar sitio web oficial de ${project.title} (se abre en una nueva pestaña)`
                : `Ver código de ${link.label} de ${project.title} en GitHub (se abre en una nueva pestaña)`;

              return (
                <a
                  key={`${project.id}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel || defaultAria}
                  className={
                    isWeb
                      ? "inline-flex items-center gap-1.5 rounded-[10px] bg-[#1D4ED8] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:text-sm"
                      : "inline-flex items-center gap-1.5 rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:text-sm"
                  }
                >
                  {isWeb ? (
                    <>
                      <TbExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{link.label}</span>
                    </>
                  ) : (
                    <>
                      <SiGithub className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{link.label}</span>
                    </>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal / Lightbox para ver la imagen ampliada */}
      {isModalOpen &&
        project.image &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
          >
            {/* Fondo oscuro desenfocado que cierra al hacer clic */}
            <div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
              onClick={handleCloseModal}
              aria-hidden="true"
            />

            {/* Ventana de visualización */}
            <div className="relative z-10 flex max-h-[92vh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
              {/* Barra superior del visor */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <h4 id={`modal-title-${project.id}`} className="text-sm font-semibold text-white sm:text-base">
                    {project.title}
                  </h4>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Cerrar vista ampliada"
                >
                  <TbX className="h-5 w-5" />
                </button>
              </div>

              {/* Imagen a tamaño completo / adaptada sin recortes */}
              <div className="flex max-h-[78vh] items-center justify-center overflow-auto bg-slate-950/70 p-2 sm:p-4">
                <img
                  src={project.image}
                  alt={`Captura ampliada de ${project.title}`}
                  className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-md"
                />
              </div>

              {/* Barra inferior */}
              <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/70 px-4 py-2.5 text-xs text-slate-400">
                <span>{project.type}</span>
                <span className="hidden sm:inline">Pulsa Esc o haz clic fuera para cerrar</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}
