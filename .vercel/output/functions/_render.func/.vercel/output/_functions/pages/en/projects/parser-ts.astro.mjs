import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-E739SR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Parser transport video" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Parser transport video (.ts)", "url": "https://github.com/anonymze/zig_parser_m3u8", "badges": [
    {
      message: "Script"
    },
    {
      message: "Zig"
    },
    {
      message: "FFMPEG"
    }
  ], "messages": [
    "My first personal project in Zig. The aim was simple: give it a .m3u8 file (this is a file type used to store streaming urls) and it will download all the associated streaming videos and output a complete video in mp4 format using the FFMPEG plugin."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/parser-ts/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/parser-ts/index.astro";
const $$url = "/en/projects/parser-ts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
