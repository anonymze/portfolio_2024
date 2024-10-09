import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$ProjectDetailedCard } from '../../../chunks/ProjectDetailedCard_CmgVP6wx.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-E739SR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RFID" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectDetailedCard", $$ProjectDetailedCard, { "title": "RFID", "badges": [
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
      message: "API carrier"
    },
    {
      message: "Autonomy"
    }
  ], "messages": [
    "This project has been several years in the making. It all started with a barcode scanning application to manage internal parcel delivery for a company. After its success, we decided to work on a brand new application, this time using RFID tags (which offer more possibilities than a simple barcode).",
    "The application itself manages over 1000 departures / arrivals per day. All carrier service documentation has been 'deciphered' to incorporate the largest known carriers in France (Colissimo, Chronopost, DPD...).",
    "I was the only one working on the mobile application."
  ] })} ` })}`;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/projects/rfid/index.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/projects/rfid/index.astro";
const $$url = "/en/projects/rfid";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
