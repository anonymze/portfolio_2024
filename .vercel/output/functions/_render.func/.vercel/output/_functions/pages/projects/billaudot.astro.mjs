import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C-E739SR.mjs';
import { B as BillaudotHomeMenu, a as BillaudotCart, b as BillaudotProduct } from '../../chunks/product_DyC8yvQN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "E-commerce musical" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "E-commerce musical", "url": "https://www.billaudot.com/", "images": [BillaudotHomeMenu, BillaudotCart, BillaudotProduct], "badges": [
    {
      message: "SEO"
    },
    {
      message: "E-commerce Europe"
    },
    {
      message: "Large panel de produits"
    },
    {
      message: "Elastic search"
    },
    {
      message: "Maintenance imposante"
    }
  ], "messages": [
    "Ma t\xE2che consistait \xE0 cr\xE9er diff\xE9rents modules et \xE0 corriger certains modules existants. Certaines t\xE2ches n'avaient pas \xE9t\xE9 con\xE7ues correctement, et j'ai donc d\xFB r\xE9fl\xE9chir avec attention lors de la cr\xE9ation ou de la mise \xE0 jour de modules car de nombreuses fonctionnalit\xE9s \xE9taient demand\xE9es fr\xE9quemment.",
    "Il s'agit d'un site E-commerce, nous devions \xEAtre rigoureux sur la vente des produits et g\xE9rer un grand nombre de services de livraison car nous exp\xE9dions en Europe.",
    "La partie la plus amusante a \xE9t\xE9 le r\xE9f\xE9rencement, avec Thelia vous avez quelques modules qui peuvent vous aider \xE0 le faire, mais j'ai d\xFB en cr\xE9er un pour 'Google Shops' afin d'avoir la possibilit\xE9 de voir les produits directement dans le moteur de recherche."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/projects/billaudot/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/projects/billaudot/index.astro";
const $$url = "/projects/billaudot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
