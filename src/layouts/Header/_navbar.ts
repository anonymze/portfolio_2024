import type { Theme } from "@/types/theme";
import { setTheme } from "@/utils/theme_browser";

interface Nav {
  id: number;
  url: string;
  label: string;
  icon: string | null;
}

interface Accessory {
  id: number;
  icon: SVGIcons;
  label: string;
  on_click: () => void;
}

export const navs: Array<Nav> = [
  {
    id: 1,
    url: "/projects",
    label: "Projects",
    icon: null,
  },
  {
    id: 2,
    url: "/extra",
    label: "Extra",
    icon: null,
  },
];

export const accessories: Array<Accessory> = [
  {
    id: 1,
    label: "Email contact",
    icon: "mail",
    on_click: () => {
      window.navigator.clipboard.writeText(import.meta.env.PUBLIC_EMAIL);
    },
  },
  {
    id: 2,
    label: "Switch theme",
    icon: "dark",
    on_click: () => setTheme("data-theme"),
  },
  {
    id: 3,
    label: "Switch language",
    icon: "flag-en",
    on_click: () => {},
  },
];
