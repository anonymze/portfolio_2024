import langs from "./langs"
import { sprintf } from "@/helper";
import type { I18n } from "@/types/i18n";

// if you add a new language, don't forget to add the svg in the assets flags folder
// otherwise await import()... will throw an "incontrollable" error
const i18n: Record<I18n, (str: keyof typeof langs[I18n], ...args: string[]) => string> = {
	en: (str, ...args) => sprintf(langs.en[str], ...args),
	fr: (str, ...args) => sprintf(langs.fr[str], ...args),
};

export { i18n };