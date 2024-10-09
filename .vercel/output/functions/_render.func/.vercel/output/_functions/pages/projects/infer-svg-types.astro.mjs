import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_BGy5MuGE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_HNxtptqb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Infer SVG types" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Infer SVG types", "badges": [
    {
      message: "Script"
    },
    {
      message: "Zig"
    },
    {
      message: "Bundler"
    },
    {
      message: "Typescript"
    }
  ], "messages": [
    "Parfois, tu as besoin de r\xE9cup\xE9rer une ic\xF4ne SVG dynamiquement sur un de tes frameworks JS favoris. G\xE9n\xE9ralement on passe le nom de l'icone \xE0 un composant, puis l'import avec React.lazy ou dynamic (selon le framework) afin que le bundler derri\xE8re puisse le r\xE9cup\xE9rer de mani\xE8re dynamique. Avec ce bout de script en Zig j'aimerais l'incorporer \xE0 un bundler, le nom des ic\xF4nes sera typ\xE9 automatiquement par rapport au nom du fichier en Typescript.",
    "Il sera framework agnostic."
  ], "in_progress": true })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/infer-svg-types/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/infer-svg-types/index.astro";
const $$url = "/projects/infer-svg-types";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
