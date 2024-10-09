import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl, $ as $$Layout } from '../chunks/Layout_CzViFf57.mjs';
import { L as LocationSVG } from '../chunks/location_BakCcQlM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome home", "data-astro-cid-dhfotatx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="presentation sm:px-6 my-6 sm:my-12 lg:my-20" data-astro-cid-dhfotatx> <h1 data-astro-cid-dhfotatx>Hello folks ! <span class="text-secondary font-bold" data-astro-cid-dhfotatx>I'm Yann</span>.</h1> <p data-astro-cid-dhfotatx>
Welcome to my world. I've been a <span class="text-tertiary font-bold" data-astro-cid-dhfotatx>web developer</span> since <span class="text-tertiary font-bold" data-astro-cid-dhfotatx>2020</span>.
</p> <p data-astro-cid-dhfotatx>
Here, I'll try to describe myself, explain what drives me and why I want to become a really good
			software enginer. The road isn't short, but I'm going fast and safely (of course). So I'll introduce you
			to some of my <span class="text-tertiary font-bold" data-astro-cid-dhfotatx>projects</span> and what my main <span class="text-tertiary font-bold" data-astro-cid-dhfotatx>skills</span> are.<br data-astro-cid-dhfotatx> </p> <p data-astro-cid-dhfotatx>
Oh, and I'm French and I live in Lourdes.
<a${addAttribute("https://maps.app.goo.gl/PuKMRXYwnGsDbywc6", "href")} aria-label="Open a paghtope with my pinned location" class="inline-block align-middle mb-2 p-3" target="_blank" data-astro-cid-dhfotatx>${unescapeHTML(LocationSVG)}</a> </p> </section> <article class="frameworks background-dotted gap-8 mt-0 lg:mt-36 lg:gap-20 md:gap-16 sm:gap-12" data-astro-cid-dhfotatx> <div aria-label="Angular" class="fading-in" style="--transition-delay-count: 1" data-astro-cid-dhfotatx> <span id="angular-icon" data-astro-cid-dhfotatx></span> </div> <div aria-label="Ionic" class="fading-in" style="--transition-delay-count: 2" data-astro-cid-dhfotatx> <span id="ionic-icon" data-astro-cid-dhfotatx></span> </div> <div aria-label="Nextjs" class="fading-in" style="--transition-delay-count: 3" data-astro-cid-dhfotatx> <span id="nextjs-icon" data-astro-cid-dhfotatx></span> </div> <div aria-label="Node" class="fading-in" style="--transition-delay-count: 6" data-astro-cid-dhfotatx> <span id="node-icon" data-astro-cid-dhfotatx></span> </div> <div aria-label="React" class="fading-in" style="--transition-delay-count: 4" data-astro-cid-dhfotatx> <span id="react-icon" data-astro-cid-dhfotatx></span> </div> <div aria-label="Typescript" class="fading-in" style="--transition-delay-count: 5" data-astro-cid-dhfotatx> <span id="typescript-icon" data-astro-cid-dhfotatx></span> </div> </article> <article class="max-w-[var(--max-width-layout)] mx-auto my-6 sm:my-10" data-astro-cid-dhfotatx> <p class="mb-5" data-astro-cid-dhfotatx>
I prefer <span class="text-tertiary" data-astro-cid-dhfotatx>web</span> and <span class="text-tertiary" data-astro-cid-dhfotatx>front-end</span> for two
			reasons. The first is the simplicity of displaying a simple visual interface. And the second is that seeing
			what you're coding is a great satisfaction that I never thought I'd get. But without the <span class="text-tertiary" data-astro-cid-dhfotatx>back-end</span>, you can't move forward either, and when you're in total <span class="text-tertiary" data-astro-cid-dhfotatx>autonomy</span> you
			have to learn <span class="text-tertiary" data-astro-cid-dhfotatx>Node</span> or <span class="text-tertiary" data-astro-cid-dhfotatx>PHP</span>, yes,
			you have to know how to deliver routes, secure your app, pre-render its content, control your cookies,
			set up a database, authenticate your user, manage CORS problems... in short, one without the other
			doesn't work!
</p> <p class="mb-5" data-astro-cid-dhfotatx>
Most of my front-end projects use <span class="text-tertiary" data-astro-cid-dhfotatx>Tailwind</span>. It's a tool that works
			very well with the ecosystem of <span class="text-tertiary" data-astro-cid-dhfotatx>Javascript</span> frameworks for encapsulating
			content. So you'll often find a <code data-astro-cid-dhfotatx>w-full</code> or a <code data-astro-cid-dhfotatx>text-secondary</code> hanging around on my
<a target="_blank" class="underline decoration-secondary"${addAttribute("https://github.com/anonymze", "href")} title="Go to my github" data-astro-cid-dhfotatx>Github</a>.
</p> <p data-astro-cid-dhfotatx>
I often seek to go further than the simple road indicated, passionate I believe is the term. For
			example, you'll find some of my personal <a target="_blank" class="underline decoration-secondary"${addAttribute(getRelativeLocaleUrl(locale, "projects"), "href")} title="Go to projects page" data-astro-cid-dhfotatx>projects</a> in Zig, and it's thanks to this technology that I was able to discover what a <span class="text-tertiary" data-astro-cid-dhfotatx>system language</span> was, and I can assure you that playing with machine memory is a whole other thing.
</p> </article> ` })} `;
}, "/Users/ano/dev/perso/portfolio/src/pages/en/index.astro", void 0);
const $$file = "/Users/ano/dev/perso/portfolio/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
