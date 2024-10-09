import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C-E739SR.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$TermsOfUse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of use", "data-astro-cid-cbuowvle": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-cbuowvle> <h1 data-astro-cid-cbuowvle>Terms of use</h1> <p class="mb-10 italic text-center" data-astro-cid-cbuowvle>Last Updated: October 1, 2024</p> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
By using this website, you acknowledge that you have read, understood, and agree to be bound by these
				Terms of Use and our Privacy Policy.
</p> </article> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
The content of this website is for general information purposes only and is subject to change without
				notice. While I strive to keep the information up-to-date and correct, I make no representations or
				warranties of any kind, express or implied, about the completeness, accuracy, reliability,
				suitability, or availability with respect to the website or the information, products, services, or
				related graphics contained on the website for any purpose.
</p> </article> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
This website uses cookies to enhance your browsing experience. Cookies are small files stored on your
				device that help me remember information about your visit. The cookies used on this site are mostly
				"trivial" in nature and include functional cookies that help improve the usability of the site but do
				not track your personal information. By continuing to use this website, you consent to the use of
				cookies as described in my Privacy Policy.
</p> </article> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
All content on this website, including but not limited to text, graphics, logos, images, and software,
				is the property of Yann Metier or is used with permission. Unauthorized use of this content is
				strictly prohibited.
</p> </article> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
This website may contain links to third-party websites that are not controlled or maintained by me. I
				am not responsible for the content or practices of these websites and do not endorse their content.
				Your use of any third-party websites is at your own risk.
</p> </article> <article data-astro-cid-cbuowvle> <p data-astro-cid-cbuowvle>
I reserve the right to modify these Terms of Use at any time. Changes will be effective immediately
				upon posting to the website. Your continued use of the website following any changes constitutes your
				acceptance of the revised Terms of Use.
</p> </article> </section> ` })} `;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/terms-of-use.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/terms-of-use.astro";
const $$url = "/en/terms-of-use";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TermsOfUse,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
