import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_Bffld1w7.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CzViFf57.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fraud detection" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Fraud detection", "badges": [
    {
      message: "React Native"
    },
    {
      message: "Expo"
    },
    {
      message: "Algorythmy"
    },
    {
      message: "Skia"
    }
  ], "messages": [
    "It's a prototype and personal mobile application. The aim is to scan an object with your camera and inform you if the product is a counterfeit.",
    "Since this project, I've only created my mobile applications in React Native to take advantage of the phone's native operation (and performance). The phone's behavior is more fluid and natural than a hybrid application that has to 'mimic' native OSes. I've also started using Skia to master graphic design."
  ], "in_progress": true })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/fraud-detection/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/fraud-detection/index.astro";
const $$url = "/en/projects/fraud-detection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
