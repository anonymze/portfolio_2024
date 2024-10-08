import { i18n } from "@/i18n/translations";
import type { I18n } from "@/types/i18n";
import ProjectsSVG from "@assets/icons/projects.svg?raw";
import PrivacyPolicySVG from "@assets/icons/privacy-policy.svg?raw";
import TermsOfUseSVG from "@assets/icons/terms-of-use.svg?raw";

interface NavMobile {
  url: string;
  label: string;
  icon: string;
}

const nav_links_mobile: (locale: I18n) => Array<NavMobile> = (locale) =>  [
	{
		url: "projects",
		label: i18n[locale]("PROJECTS"),
		icon: ProjectsSVG
	},
	{
		url: "terms-of-use",
		label: i18n[locale]("TERMS_CONDITIONS"),
		icon: TermsOfUseSVG
	},
	{
		url: "privacy-policy",
		label: i18n[locale]("PRIVACY_POLICY"),
		icon: PrivacyPolicySVG
	}
]


export default nav_links_mobile;