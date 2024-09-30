import { I18n } from "@/types/i18n";
import { getRelativeLocaleUrl } from "astro:i18n";
import type { AstroCookies } from "astro";

export const storage_locale_name_fix = "language";

export const getPreferedLocale = (
  cookies: AstroCookies,
  preferredLocale?: string,
) => {
  const fixed_locale = cookies.get(storage_locale_name_fix)?.value;

  if (fixed_locale) return fixed_locale as I18n;

  return (preferredLocale as I18n) ?? I18n["DEFAULT"];
};

export function setPreferedLocale(locale: I18n) {
  // 7 days
  window.document.cookie = `${storage_locale_name_fix}=${locale};max-age=${60 * 60 * 24 * 7}`;
}

export const switchRouteLocale = (pathname: string, locale: string) => {
  if (locale === I18n["FR"]) {
    return getRelativeLocaleUrl(I18n["EN"], pathname);
  }

  return getRelativeLocaleUrl(
    I18n["FR"],
    pathname.split("/").slice(2).join("/"),
  );
};
