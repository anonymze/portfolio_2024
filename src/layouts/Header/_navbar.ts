import type { Theme } from "@/types/theme";

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
      console.log(import.meta.env);
    },
  },
  {
    id: 2,
    label: "Switch theme",
    icon: "dark",
    on_click: () => {
      const fixed_theme = document.body.getAttribute(
        "data-theme",
      ) as Theme | null;

      if (!fixed_theme) {
        const natural_theme = window.matchMedia("(prefers-color-scheme: dark)");

        natural_theme.matches
          ? document.body.setAttribute("data-theme", "light")
          : document.body.setAttribute("data-theme", "dark");

        return;
      }

      fixed_theme === "dark"
        ? document.body.setAttribute("data-theme", "light")
        : document.body.setAttribute("data-theme", "dark");
    },
  },
  {
    id: 3,
    label: "Switch language",
    icon: "flag-en",
    on_click: () => {},
  },
];
