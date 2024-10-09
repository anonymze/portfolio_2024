import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_BGy5MuGE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_HNxtptqb.mjs';
import { R as RescueOcean } from '../../chunks/rescue-ocean_C8ZVl_sp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ramassage de d\xE9chets" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Ramassage de d\xE9chets", "url": "https://projectrescueocean.org/", "images": [RescueOcean], "badges": [
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
      message: "Autonomie"
    },
    {
      message: "Traductions"
    }
  ], "messages": [
    "Ma premi\xE8re application mobile en autonomie. C'est une simple application permattant de d\xE9clarer vos d\xE9chets ramass\xE9s en bord de plage.",
    "Pour ma premi\xE8re application mobile, la diffusion sur les stores Google et Apple fut le plus complexe \xE0 mes yeux, il y a tout une s\xE9rie d'\xE9tapes et de v\xE9rifications avant de voir votre projet mis en ligne. Outre ce point, voir votre premi\xE8re application utilis\xE9e par des centaines de personnes est plut\xF4t cool."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/rescue-ocean/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/rescue-ocean/index.astro";
const $$url = "/projects/rescue-ocean";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
