export interface SkillItem {
  name: string;
  description?: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}
