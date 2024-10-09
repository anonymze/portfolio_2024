import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-E739SR.mjs';
import { R as RescueOcean } from '../../../chunks/rescue-ocean_C8ZVl_sp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Waste collection" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Waste collection", "url": "https://projectrescueocean.org/", "images": [RescueOcean], "badges": [
    {
      message: "Angular"
    },
    {
      message: "Ionic"
    },
    {
      message: "Mobiles stores"
    },
    {
      message: "Autonomy"
    },
    {
      message: "Translations"
    }
  ], "messages": [
    "My first independent mobile application. It's a simple application for declaring your beachside trash.",
    "For my first mobile application, getting it on the Google and Apple stores was the most complex part, there are a whole series of steps and checks before your project goes online. Besides this point, seeign your first app being used by hundred of people means a lot."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/rescue-ocean/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/rescue-ocean/index.astro";
const $$url = "/en/projects/rescue-ocean";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
