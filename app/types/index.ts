export type ViewType = "menu" | "calendar" | "blog" | "reserve" | null;

export interface MenuButtonItem {
  href: string;
  title: string;
  label: string;
  color: string;
  offset: string;
  glowClass: string;
}
