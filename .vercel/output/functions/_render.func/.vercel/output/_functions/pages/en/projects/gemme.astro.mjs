import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_BGy5MuGE.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_HNxtptqb.mjs';
import { G as GemmePresentation, a as GemmeCourses, b as GemmeRegister, c as GemmeMap } from '../../../chunks/courses_OYuGjQLI.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hiking trails" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Hiking trails", "url": "https://apps.apple.com/fr/app/gemme/id1641074687", ",": true, "images": [GemmePresentation, GemmeCourses, GemmeRegister, GemmeMap], "badges": [
    {
      message: "React"
    },
    {
      message: "Ionic"
    },
    {
      message: "Mobiles stores"
    },
    {
      message: "Mapbox"
    },
    {
      message: "Short delay"
    },
    {
      message: "Autonomy"
    }
  ], "messages": [
    "A mobile application that needed to be produced in a short space of time. First created with Flutter by another company, we took over and I decided to redo everything in React Ionic in 2 weeks top speed. I imposed this choice, because if someone had to take over the technology nobody knew how to use Flutter internally.",
    "It's a simple application that proposes hiking routes on a Mapbox map, on which you have to pass through waypoints to validate your run. A time classement is in place for each parcours.",
    "I was the only one working on the mobile application."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/gemme/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/gemme/index.astro";
const $$url = "/en/projects/gemme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
