export type ViewType = "menu" | "calendar" | "blog" | "reserve" | null;

export interface MenuItem {
  href: string;
  title: string;
  label: string;
  color: string;
  offset: string;
  glowClass: string;
}
