import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_BGy5MuGE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_HNxtptqb.mjs';
export { renderers } from '../../renderers.mjs';

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
    "Mon premier projet personnel en Zig. Le but est simple : lui donner un fichier de lecture .m3u8 (c'est un type de fichier qui est utilis\xE9 pour stocker des urls de streaming) et derri\xE8re il va t\xE9l\xE9charger toutes les vid\xE9os de streaming associ\xE9es et en sortir une vid\xE9o compl\xE8te au format MP4 gr\xE2ce au plugin FFmpeg."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/parser-ts/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/parser-ts/index.astro";
const $$url = "/projects/parser-ts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
