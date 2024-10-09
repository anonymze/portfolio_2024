import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_Bffld1w7.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CzViFf57.mjs';
import { A as AuroraHome } from '../../chunks/home_DzxzMg6g.mjs';
import { A as AuroraProject, a as AuroraContact } from '../../chunks/contact_CGEAnVUm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aurora" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Aurora", "url": "https://www.auvergnerhonealpes-entreprises.fr/", "images": [AuroraHome, AuroraProject, AuroraContact], "badges": [
    {
      message: "UX"
    },
    {
      message: "Vitesse"
    },
    {
      message: "Api platform"
    },
    {
      message: "React Forms"
    }
  ], "messages": [
    "L'interface du back-office \xE9tait en React Typescript, nous devions cr\xE9er quelque chose de rapide et avec une bonne interactivit\xE9. L'interface est utilis\xE9e quotidiennement par des personnes, l'UX \xE9tait donc un \xE9l\xE9ment important. Lorsque vous cr\xE9ez une action, pensez \xE0 une personne qui la fera 100 fois par jour.",
    "Nous avons au moins 10 formulaires diff\xE9rents sur l'ensemble du site web, nos composants bas\xE9s sur les formulaires \xE9taient flexibles et facilement r\xE9utilisables.",
    "Pour les donn\xE9es, nous avons utilis\xE9 Api Platform, un outil de gestion de routes API."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/aurora/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/aurora/index.astro";
const $$url = "/projects/aurora";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
