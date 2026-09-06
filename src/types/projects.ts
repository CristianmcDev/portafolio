export type ProjectLinkType = "github" | "web";

export interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
  sublabel?: string;
  ariaLabel?: string;
}

export interface Project {
  id: string;
  title: string;
  year?: string;
  type: string;
  description: string;
  technologies?: string[];
  links: ProjectLink[];
  featured?: boolean;
  highlightBadge?: string;
  imagePlaceholderText?: string;
  image?: string;
}
