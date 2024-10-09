import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C-E739SR.mjs';
import { G as GemmePresentation, a as GemmeCourses, b as GemmeRegister, c as GemmeMap } from '../../chunks/courses_OYuGjQLI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Parcours randonn\xE9es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "Parcours randonn\xE9es", "url": "https://apps.apple.com/fr/app/gemme/id1641074687", "images": [GemmePresentation, GemmeCourses, GemmeRegister, GemmeMap], "badges": [
    {
      message: "React"
    },
    {
      message: "Ionic"
    },
    {
      message: "Stores mobiles"
    },
    {
      message: "Mapbox"
    },
    {
      message: "D\xE9lai court"
    },
    {
      message: "Autonomie"
    }
  ], "messages": [
    "Une application mobile qui a demand\xE9 une production en peu de temps. D'abord cr\xE9\xE9e avec Flutter par une autre entreprise, nous avons repris le flambeau et j'ai d\xE9cid\xE9 de tout refaire en React Ionic en 2 semaines top chrono. J'ai impos\xE9 ce choix, car si quelqu'un devait reprendre la technologie, personne ne savait faire du Flutter en interne.",
    "C'est une simple application qui propose des parcours de randonn\xE9es sur une carte Mapbox, sur laquelle tu dois passer par des points de passage pour valider ta course. Un classement par temps est en place pour chaque parcours.",
    "J'\xE9tais seul \xE0 travailler sur l'application mobile."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/gemme/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/gemme/index.astro";
const $$url = "/projects/gemme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
