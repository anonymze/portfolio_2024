interface Nav {
  id: number;
  url: string;
  label: string;
  icon: string | null;
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

