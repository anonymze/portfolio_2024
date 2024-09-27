import type { Theme } from "@/types/theme";

type AttributeName = `data-${string}`;

export const setTheme = (attribute_theme: AttributeName) => {
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

	window.sessionStorage.setItem("theme", document.body.getAttribute(attribute_theme)!);
};

export const getTheme = (attribute_theme: AttributeName): Theme => {
  return "light";
};
