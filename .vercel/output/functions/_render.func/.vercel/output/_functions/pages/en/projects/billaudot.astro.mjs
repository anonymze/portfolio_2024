import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-E739SR.mjs';
import { B as BillaudotHomeMenu, a as BillaudotCart, b as BillaudotProduct } from '../../../chunks/product_DyC8yvQN.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "E-commerce musical" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "E-commerce musical", "url": "https://www.billaudot.com/", "images": [BillaudotHomeMenu, BillaudotCart, BillaudotProduct], "badges": [
    {
      message: "SEO"
    },
    {
      message: "E-commerce Europe"
    },
    {
      message: "Large panel of products"
    },
    {
      message: "Elastic search"
    },
    {
      message: "Heavy maintenance"
    }
  ], "messages": [
    "My task was to create diverce modules and fix some of existing ones. Some things were not designed correctly so i had to think deep when creating or updating because a lot of new features were asked frequently.",
    "This is an E-commerce website so we had to be rigorous about the sale of products and manage a large number of delivery services since we ship to Europe.",
    "The most fun part was the referencement, with Thelia you have some modules who can help you to do that but i had to create one for 'Google Shops' to enable the possibility to see products directly in the search engine."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/billaudot/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/billaudot/index.astro";
const $$url = "/en/projects/billaudot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
