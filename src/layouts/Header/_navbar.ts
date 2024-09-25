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

//
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

//
export const accessories: Array<Accessory> = [
  {
    id: 1,
    label: "switch_light",
    icon: "",
    on_click: () => {
      const fixed_theme = document.body.getAttribute("data-theme");

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
    icon: "",
    on_click: () => {},
  },
];
