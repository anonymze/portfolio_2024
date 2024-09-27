import type { Theme } from "@/types/theme";

type AttributeName = `data-${string}`;

const storage_name_fix = "theme";

export const setTheme = (
  attribute_theme: AttributeName,
  storage_name?: string,
) => {
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

  window.sessionStorage.setItem(
    storage_name ?? storage_name_fix,
    document.body.getAttribute(attribute_theme)!,
  );
};

export const getTheme = (
  attribute_theme: AttributeName,
  storage_name?: string,
): Theme => {
  const fixed_theme = document.body.getAttribute(
    attribute_theme,
  ) as Theme | null;

  if (fixed_theme) return fixed_theme;

  const storage_theme = window.sessionStorage.getItem(
    storage_name ?? storage_name_fix,
  ) as Theme | null;

  if (storage_theme) return storage_theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
