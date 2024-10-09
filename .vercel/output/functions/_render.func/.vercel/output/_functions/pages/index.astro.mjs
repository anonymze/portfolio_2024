import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl, $ as $$Layout } from '../chunks/Layout_C-E739SR.mjs';
import { L as LocationSVG } from '../chunks/location_BakCcQlM.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BLstWCnG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const Test = new Proxy({"src":"/_astro/me.TAyrfMtK.png","width":770,"height":1218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/me.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="presentation sm:px-6 my-6 sm:my-12 lg:my-20" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Bonjour ! <span class="text-secondary font-bold" data-astro-cid-j7pv25f6>Je suis Yann</span>.</h1> ${renderComponent($$result2, "Image", $$Image, { "src": Test, "alt": "", "data-astro-cid-j7pv25f6": true })} <p data-astro-cid-j7pv25f6>
Bienvenue dans mon univers. Je suis <span class="text-tertiary font-bold" data-astro-cid-j7pv25f6>développeur web</span> depuis
<span class="text-tertiary font-bold" data-astro-cid-j7pv25f6>2020</span>.
</p> <p data-astro-cid-j7pv25f6>
Ici, je vais jouer le jeu de me décrire, de montrer ce qui me motive et d'expliquer pourquoi je veux
			devenir un excellent concepteur développeur. La route n'est pas courte, mais je vais vite et en toute
			sécurité (evidemment). Je vais donc vous présenter quelques-uns de mes <span class="text-tertiary font-bold" data-astro-cid-j7pv25f6>projets</span> ainsi que mes principales <span class="text-tertiary font-bold" data-astro-cid-j7pv25f6>compétences</span>.<br data-astro-cid-j7pv25f6> </p> <p data-astro-cid-j7pv25f6>
Ah, et je suis Français et je vis à Lourdes.
<a${addAttribute("https://maps.app.goo.gl/PuKMRXYwnGsDbywc6", "href")} aria-label="Open a paghtope with my pinned location" class="inline-block align-middle mb-2 p-3" target="_blank" data-astro-cid-j7pv25f6>${unescapeHTML(LocationSVG)}</a> </p> </section> <article class="frameworks background-dotted gap-8 lg:gap-20 md:gap-16 sm:gap-12" data-astro-cid-j7pv25f6> <div aria-label="Angular" class="fading-in" style="--transition-delay-count: 1" data-astro-cid-j7pv25f6> <span id="angular-icon" data-astro-cid-j7pv25f6></span> </div> <div aria-label="Ionic" class="fading-in" style="--transition-delay-count: 2" data-astro-cid-j7pv25f6> <span id="ionic-icon" data-astro-cid-j7pv25f6></span> </div> <div aria-label="Nextjs" class="fading-in" style="--transition-delay-count: 3" data-astro-cid-j7pv25f6> <span id="nextjs-icon" data-astro-cid-j7pv25f6></span> </div> <div aria-label="Node" class="fading-in" style="--transition-delay-count: 6" data-astro-cid-j7pv25f6> <span id="node-icon" data-astro-cid-j7pv25f6></span> </div> <div aria-label="React" class="fading-in" style="--transition-delay-count: 4" data-astro-cid-j7pv25f6> <span id="react-icon" data-astro-cid-j7pv25f6></span> </div> <div aria-label="Typescript" class="fading-in" style="--transition-delay-count: 5" data-astro-cid-j7pv25f6> <span id="typescript-icon" data-astro-cid-j7pv25f6></span> </div> </article> <article class="max-w-[var(--max-width-layout)] mx-auto my-6 sm:my-10" data-astro-cid-j7pv25f6> <p class="mb-5" data-astro-cid-j7pv25f6>
Je préfère le <span class="text-tertiary" data-astro-cid-j7pv25f6>web</span> et le <span class="text-tertiary" data-astro-cid-j7pv25f6>front</span> pour
			deux raisons. La première étant la simplicité d'afficher une simple interface visuelle ett la deuxième parce
			que voir ce que l'on code est une grande satisfaction que je ne pensais pas imaginer. Mais sans le <span class="text-tertiary" data-astro-cid-j7pv25f6>back</span> on n'avance pas non plus, et quand on est en totale
<span class="text-tertiary" data-astro-cid-j7pv25f6>autonomie</span> il faut apprendre à faire du <span class="text-tertiary" data-astro-cid-j7pv25f6>Node</span> ou du <span class="text-tertiary" data-astro-cid-j7pv25f6>PHP</span>, oui, il faut savoir délivrer des routes, sécuriser son
			app, pre-render son contenu, contrôler ses cookies, établir une base de données, authentifier son
			utilisateur, gérer les problèmes de CORS... bref l'un sans l'autre ne fonctionne pas !
</p> <p class="mb-5" data-astro-cid-j7pv25f6>
La plupart de mes projets front sont accompagnés de <span class="text-tertiary" data-astro-cid-j7pv25f6>Tailwind</span>. C'est
			un outil qui fonctionne très bien avec l'écosystème des frameworks <span class="text-tertiary" data-astro-cid-j7pv25f6>Javascript</span> pour encapsuler un contenu. Donc vous retrouverez souvent un <code data-astro-cid-j7pv25f6>w-full</code> ou un <code data-astro-cid-j7pv25f6>text-secondary</code> qui traîne sur mon <a target="_blank" class="underline decoration-secondary"${addAttribute("https://github.com/anonymze", "href")} title="Ouvre mon Github" data-astro-cid-j7pv25f6>Github</a>.
</p> <p data-astro-cid-j7pv25f6>
Je cherche souvent à aller plus loin que la simple route indiquée, passioné je crois que c'est le terme.
			Par exemple vous trouverez certains de mes <a target="_blank" class="underline decoration-secondary"${addAttribute(getRelativeLocaleUrl(locale, "projects"), "href")} title="Va vers la page projets" data-astro-cid-j7pv25f6>projets</a>
personnels en Zig, et c'est grâce à cette technologie que j'ai pu découvrir ce qu'était un <span class="text-tertiary" data-astro-cid-j7pv25f6>langage système</span>, et je vous assure que de jouer avec la mémoire machine c'est une autre paire de manches.
</p> </article> ` })} `;
}, "/Users/ano/dev/perso/portfolio/src/pages/index.astro", void 0);
const $$file = "/Users/ano/dev/perso/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
