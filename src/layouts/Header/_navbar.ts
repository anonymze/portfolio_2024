interface Nav {
  id: number;
  url: string;
  label: string;
  icon: string | null;
}

interface Accessory {
  id: number;
  icon: string;
  label: string;
  on_click: () => void;
}

type Theme = "light" | "dark" | null;

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
    label: "switch_light",
    icon: "/icons/light.svg",
    on_click: () => {
      const fixed_theme = document.body.getAttribute("data-theme") as Theme;

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
    id: 2,
    label: "mail",
    icon: "/icons/light.svg",
    on_click: () => {},
  },
  {
    id: 3,
    label: "mail",
    icon: "/icons/light.svg",
    on_click: () => {},
  },

];
