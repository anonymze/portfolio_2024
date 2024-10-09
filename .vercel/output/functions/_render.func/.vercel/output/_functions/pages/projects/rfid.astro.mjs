import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C-E739SR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RFID" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "RFID", "badges": [
    {
      message: "Angular"
    },
    {
      message: "Ionic"
    },
    {
      message: "Stores mobiles"
    },
    {
      message: "API transporteur"
    },
    {
      message: "Autonomie"
    }
  ], "messages": [
    "Ce projet est le fruit de plusieurs ann\xE9es de travail. Tout part d'une application de scan de code-barres pour g\xE9rer la livraison de colis en interne pour une entreprise. Apr\xE8s le succ\xE8s de celle-ci, nous sommes partis sur une toute nouvelle application mais qui g\xE8re cette fois-ci des \xE9tiquettes RFID (qui offrent plus de possibilit\xE9s qu'un simple code-barres).",
    "L'application g\xE8re plus de 1 000 d\xE9parts / arriv\xE9es de colis par jour. Toute la documentation des services de transporteurs a \xE9t\xE9 'dechiffr\xE9e' afin d'utiliser les plus gros transporteurs connus de France (Colissimo, Chronopost, DPD...).",
    "J'\xE9tais seul \xE0 travailler sur l'application mobile."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/rfid/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/rfid/index.astro";
const $$url = "/projects/rfid";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
