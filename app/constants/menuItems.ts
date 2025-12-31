import { MenuItem } from "../types";

export const MENU_ITEMS: MenuItem[] = [
  {
    href: "/menu",
    title: "SHISHA / DRINK",
    label: "メニュー",
    color: "bg-slate-900/55 ring-slate-500/70 text-slate-50",
    offset: "sm:ml-0",
    glowClass: "menu-glow",
  },
  {
    href: "/calendar",
    title: "OPEN DAYS",
    label: "開店日カレンダー",
    color: "bg-slate-900/55 ring-emerald-300/70 text-slate-50",
    offset: "sm:ml-10",
    glowClass: "menu-glow",
  },
  {
    href: "/reserve",
    title: "RESERVE",
    label: "席のご予約",
    color: "bg-slate-900/55 ring-emerald-300 text-slate-50",
    offset: "sm:ml-20",
    glowClass: "menu-glow",
  },
  {
    href: "/blog",
    title: "DIARY",
    label: "ブログ / お知らせ",
    color: "bg-slate-900/55 ring-fuchsia-400/70 text-slate-50",
    offset: "sm:ml-30",
    glowClass: "menu-glow",
  },
];
