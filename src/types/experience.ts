export type ExperienceLevel = "featured" | "standard" | "secondary";

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrContext: string;
  period: string;
  duration?: string;
  level: ExperienceLevel;
  typeBadge?: string;
  description: string;
  details?: string[];
  secondaryNote?: string;
  projectLink?: {
    label: string;
    href: string;
  };
}

export interface ComplementaryRole {
  role: string;
  organization: string;
  period: string;
  approxDuration: string;
  description: string;
  skillsHighlighted: string[];
}
