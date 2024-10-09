import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_Bffld1w7.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CzViFf57.mjs';
import { A as AuroraHome } from '../../../chunks/home_DzxzMg6g.mjs';
import { A as AuroraProject, a as AuroraContact } from '../../../chunks/contact_CGEAnVUm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aurora" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Aurora", "url": "https://www.auvergnerhonealpes-entreprises.fr/", "images": [AuroraHome, AuroraProject, AuroraContact], "badges": [
    {
      message: "UX"
    },
    {
      message: "Speed"
    },
    {
      message: "Api platform"
    },
    {
      message: "React Forms"
    }
  ], "messages": [
    "The back office interface was in React Typescript, we had to do something fast and with a good interactivity. The interface is used dayly so the UX was an important part. When you create an action think of a person that will do it 100 times par day.",
    "We have at least 10 different forms in the entire website, our components based around forms were flexible and resuable easely",
    "For the data we used Api Platform, a tool for managing API's endpoints."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/aurora/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/aurora/index.astro";
const $$url = "/en/projects/aurora";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
