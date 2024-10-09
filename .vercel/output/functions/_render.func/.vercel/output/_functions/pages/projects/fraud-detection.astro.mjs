import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_BGy5MuGE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_HNxtptqb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "D\xE9tection de fraude" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "D\xE9tection de fraude", "badges": [
    {
      message: "React Native"
    },
    {
      message: "Expo"
    },
    {
      message: "Algorythme"
    },
    {
      message: "Skia"
    }
  ], "messages": [
    "C'est une application mobile prototype et personnelle. Le but est de scanner un objet avec votre appareil photo et de vous informer si le produit est une contrefa\xE7on.",
    "Depuis ce projet, je ne cr\xE9e que mes applications mobiles en React Native pour profiter du fonctionnement natif du t\xE9l\xE9phone (et des performances). Le comportement du t\xE9l\xE9phone est plus fluide et naturel qu'une application hybride qui doit 'imiter' les OS natifs. Je me suis \xE9galement initi\xE9 \xE0 Skia afin de ma\xEEtriser les dessins graphiques."
  ], "in_progress": true })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/fraud-detection/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/fraud-detection/index.astro";
const $$url = "/projects/fraud-detection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
