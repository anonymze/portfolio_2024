import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C-E739SR.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy policy", "data-astro-cid-7ej6qia7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-7ej6qia7> <h1 data-astro-cid-7ej6qia7>Privacy policy</h1> <p class="mb-10 italic text-center" data-astro-cid-7ej6qia7>Last Updated: October 1, 2024</p> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>
By using this site, you consent to the collection and use of your information as described in this
				policy.
</p> </article> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>I may collect personal information from you when you:</p> <ul data-astro-cid-7ej6qia7> <li data-astro-cid-7ej6qia7>Fill out forms on the site</li> <li data-astro-cid-7ej6qia7>Contact me via email</li> </ul> <p data-astro-cid-7ej6qia7>The types of personal information that may be collected include:</p> <ul data-astro-cid-7ej6qia7> <li data-astro-cid-7ej6qia7>Name</li> <li data-astro-cid-7ej6qia7>Email address</li> <li data-astro-cid-7ej6qia7>Any other information you choose to provide</li> </ul> </article> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>
This site uses cookies to enhance user experience. Cookies are small files stored on your device that
				help remember information regarding your visit. These may include session cookies (which expire when
				you close your browser) and persistent cookies (which remain on your device until expiration or
				deletion). You can choose to disable cookies by adjusting your browser settings. Please note that
				disabling cookies may affect the functionality of some portions of the site.
</p> </article> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>
I am committed to protecting your personal information. I take reasonable measures to secure your data
				and prevent unauthorized access. However, no method of transmission over the Internet or method of
				electronic storage is completely secure. Therefore, I cannot guarantee the absolute security of your
				information.
</p> </article> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>
I do not sell, trade, or otherwise transfer your personal information to outside parties without prior
				notice. This does not include website hosting partners and other parties who assist me in operating my
				site, provided those parties agree to keep this information confidential.
</p> </article> <article data-astro-cid-7ej6qia7> <p data-astro-cid-7ej6qia7>
I reserve the right to modify this privacy policy at any time. Any changes will be posted on this page
				with a new update date. I encourage you to review this policy regularly to stay informed about
				changes.
</p> </article> </section> ` })} `;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/privacy-policy.astro", void 0);

const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/privacy-policy.astro";
const $$url = "/en/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
