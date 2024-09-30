import type { Theme } from "@/types/theme";
import { getCookie } from "./cookies";

type AttributeName = `data-${string}`;

export const storage_theme_name_fix = "theme";

/**
 *
 * @param attribute_theme the data attribute name set on the tag element
 * @param storage_name the data storage name set on the browser
 */
export const getPreferredTheme = (attribute_theme: AttributeName): Theme => {
  const fixed_theme = document.body.getAttribute(
    attribute_theme,
  ) as Theme | null;

  if (fixed_theme) return fixed_theme;

  const storage_theme = getCookie(storage_theme_name_fix) as Theme | null;

  if (storage_theme) return storage_theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};


/**
 *
 * @param attribute_theme the data attribute name set on the tag element
 * @param storage_name the data storage name set on the browser
 */
export const setPreferredTheme = (attribute_theme: AttributeName): Theme => {
  const fixed_theme = document.body.getAttribute(
    attribute_theme,
  ) as Theme | null;

  if (!fixed_theme) {
    const natural_theme = window.matchMedia("(prefers-color-scheme: dark)");

    natural_theme.matches
      ? document.body.setAttribute(attribute_theme, "light")
      : document.body.setAttribute(attribute_theme, "dark");
  } else {
    fixed_theme === "dark"
      ? document.body.setAttribute(attribute_theme, "light")
      : document.body.setAttribute(attribute_theme, "dark");
  }

  const theme = document.body.getAttribute(attribute_theme)! as Theme;

  // 7 days
  window.document.cookie = `${storage_theme_name_fix}=${theme};max-age=${60 * 60 * 24 * 7}`;

  return theme;
};