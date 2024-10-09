import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-E739SR.mjs';
export { renderers } from '../../../renderers.mjs';

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
    "Sometimes you need to retrieve an SVG icon dynamically from one of your favorite JS frameworks. Typically you'll pass the icon name to your component then import it with React.lazy or dynamic (depends on the framework) so that your bundle can retrieve it dynamically. With this bit of scripting in ZIg I'd like to incorporate into a bundler, the icon names will be automatically typed in relation to the file name in Typescript.",
    "	He will be framework agnostic."
  ], "in_progress": true })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/infer-svg-types/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/infer-svg-types/index.astro";
const $$url = "/en/projects/infer-svg-types";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
