import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { c as cards, $ as $$ProjectCard } from '../../chunks/_cards_BaU4YPMn.mjs';
import { g as getRelativeLocaleUrl, $ as $$Layout } from '../../chunks/Layout_CzViFf57.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projets", "data-astro-cid-gq2hwksu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-gq2hwksu>Engineering, <span class="text-secondary" data-astro-cid-gq2hwksu>Conception</span>, Design</h1> ${cards(locale).map((section) => {
    return renderTemplate`<section data-astro-cid-gq2hwksu> <h2 data-astro-cid-gq2hwksu>${unescapeHTML(section[0])}</h2> <div class="flex flex-wrap gap-6 justify-center sm:justify-start" data-astro-cid-gq2hwksu> ${section[1].map((card) => {
      return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "fading_from": card.fading_from, "fading_order": card.fading_order, "image": card.image, "image_width": card.image_width, "title": card.title, "url_project": getRelativeLocaleUrl(locale) + card.url_project, "message_badge": card.message_badge, "data-astro-cid-gq2hwksu": true })}`;
    })} </div> </section>`;
  })}` })} `;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/index.astro";
const $$url = "/en/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
