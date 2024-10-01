import { i18n } from "@/i18n/translations";
import type { I18n } from "@/types/i18n";

interface Nav {
  id: number;
  url: string;
  label: string;
  icon: string | null;
}

export const navs: (locale: I18n) => Array<Nav> = (locale) => {
  return [
    {
      id: 1,
      url: "/projects",
      label: i18n[locale]("PROJECTS"),
      icon: null,
    },
    {
      id: 2,
      url: "/extra",
      label: i18n[locale]("EXTRA"),
      icon: null,
    },
  ];
};
