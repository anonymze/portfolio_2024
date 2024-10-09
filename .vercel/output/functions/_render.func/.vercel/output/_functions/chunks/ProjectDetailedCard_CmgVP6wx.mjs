import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, d as renderComponent, b as createAstro } from './astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { $ as $$Badge } from './Badge_SW4joOHu.mjs';
import { i as i18n } from './Layout_C-E739SR.mjs';
import { $ as $$Image } from './_astro_assets_BLstWCnG.mjs';
/* empty css                         */

const ArrowTopRightSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25\" />\n</svg>\n";

const MaintenanceSVG = "<svg fill=\"currentColor\" enable-background=\"new 0 0 512 512\" height=\"30\" viewBox=\"0 0 512 512\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m25.695 485.784c13.958 13.953 37.971 14.711 52.16.521l145.868-145.868c10.025 3.835 20.905 5.942 32.277 5.942 49.91 0 90.38-40.47 90.38-90.38 0-13.92-3.15-27.1-8.77-38.87l-69.08 69.08h-24.99l-17.67-17.68v-24.98l69.11-69.11c-11.8-5.65-25.02-8.82-38.98-8.82-49.91 0-90.38 40.47-90.38 90.38 0 11.373 2.107 22.252 5.942 32.277l-145.867 145.869c-14.26 14.26-14.26 37.379 0 51.639z\"/><path d=\"m512 288v-64l-34.95-4.37c-2.42-14.76-6.27-29.03-11.41-42.67l28.06-21.25-32-55.42-32.47 13.7c-9.36-11.4-19.82-21.86-31.22-31.22l13.7-32.47-55.42-32-21.25 28.06c-13.64-5.14-27.91-8.99-42.67-11.41l-4.37-34.95h-64l-4.37 34.95c-14.76 2.42-29.03 6.27-42.67 11.41l-21.25-28.06-55.42 32 13.7 32.47c-11.4 9.36-21.86 19.82-31.22 31.22l-32.47-13.7-32 55.42 28.06 21.25c-5.14 13.64-8.99 27.91-11.41 42.67l-34.95 4.37v64l34.95 4.37c2.42 14.76 6.27 29.03 11.41 42.67l-28.06 21.25 15.675 27.148 67.594-67.594c-7.223-18.57-11.194-38.751-11.194-59.844 0-91.326 74.299-165.625 165.625-165.625s165.625 74.299 165.625 165.625-74.299 165.625-165.625 165.625c-21.093 0-41.272-3.973-59.841-11.197l-67.596 67.596 27.147 15.676 21.25-28.06c13.64 5.14 27.91 8.99 42.67 11.41l4.37 34.95h64l4.37-34.95c14.76-2.42 29.03-6.27 42.67-11.41l21.25 28.06 55.42-32-13.7-32.47c11.4-9.36 21.86-19.82 31.22-31.22l32.47 13.7 32-55.42-28.06-21.25c5.14-13.64 8.99-27.91 11.41-42.67z\"/></g></svg>";

const $$Astro = createAstro();
const $$ProjectDetailedCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectDetailedCard;
  const { title, messages, badges, url, images, in_progress } = Astro2.props;
  const locale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<section class="py-10 px-5 sm:py-24 sm:px-12" data-astro-cid-6ew6dla6> <div class="w-full sm:w-[70%]" data-astro-cid-6ew6dla6> <div class="flex items-start justify-between" data-astro-cid-6ew6dla6> <h1 data-astro-cid-6ew6dla6>${title}<span class="text-secondary" data-astro-cid-6ew6dla6>.</span></h1> <div class="flex flex-col items-center gap-y-3 w-32" data-astro-cid-6ew6dla6> ${url && renderTemplate`<a target="_blank"${addAttribute(url, "href")}${addAttribute(i18n[locale]("OPEN_WEBSITE") + " " + title, "title")} data-astro-cid-6ew6dla6>${unescapeHTML(ArrowTopRightSVG)}</a>`} ${in_progress && renderTemplate`<span${addAttribute(i18n[locale]("PROJECT_IN_PROGRESS"), "aria-label")} class="inline-block w-fit" data-astro-cid-6ew6dla6>${unescapeHTML(MaintenanceSVG)}</span>`} </div> </div> ${messages.map((message) => {
    return renderTemplate`<p data-astro-cid-6ew6dla6>${message}</p>`;
  })} <div class="flex gap-2 flex-wrap" data-astro-cid-6ew6dla6> ${badges.map((badge) => {
    return renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "class:list": "text-sm uppercase", "message": badge.message, "data-astro-cid-6ew6dla6": true })}`;
  })} </div> </div> </section> ${!images?.length ? renderTemplate`<p class="text-center italic font-bold" data-astro-cid-6ew6dla6>${i18n[locale]("IMAGES_CONFIDENTIAL")}</p>` : renderTemplate`<ul class="Zp-0 sm:p-12 lg:p-16" data-astro-cid-6ew6dla6> ${images.map((image) => {
    return renderTemplate`<li data-astro-cid-6ew6dla6> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Website", "data-astro-cid-6ew6dla6": true })} </li>`;
  })} </ul>`} `;
}, "/Users/ano/dev/perso/portfolio/src/components/ProjectDetailedCard.astro", void 0);

export { $$ProjectDetailedCard as $ };
