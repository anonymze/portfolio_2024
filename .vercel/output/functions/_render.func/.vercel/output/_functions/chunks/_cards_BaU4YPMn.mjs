import { c as createComponent, f as defineStyleVars, r as renderTemplate, g as defineScriptVars, d as renderComponent, a as addAttribute, m as maybeRenderHead, b as createAstro } from './astro/server_CH8WW7kO.mjs';
import { $ as $$Image } from './_astro_assets_BLstWCnG.mjs';
import { $ as $$Badge } from './Badge_SW4joOHu.mjs';
/* empty css                         */
import { A as AuroraHome } from './home_DzxzMg6g.mjs';
import { i as i18n } from './Layout_CzViFf57.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, image, image_width, url_project, message_badge, fading_order, fading_from } = Astro2.props;
  const cursor = url_project ? "pointer" : "default";
  const figure_id = crypto.randomUUID();
  const $$definedVars = defineStyleVars([{ cursor }]);
  return renderTemplate(_a || (_a = __template(["", "<article", "", ' tabindex="0"', "> <figure", "> ", " <figcaption", "> <h3", "> ", " ", " </h3> </figcaption> </figure> </article> <script>(function(){", '\n	if (url_project) {\n		document.getElementById(figure_id).addEventListener("click", () => location.href = url_project);\n	}\n})();<\/script> '])), maybeRenderHead(), addAttribute([
    "project-card",
    {
      "fading-in": fading_order ?? false,
      "from-left": fading_from === "left",
      "from-right": fading_from === "right"
    }
  ], "class:list"), addAttribute(`${fading_order ? `--transition-delay-count: ${fading_order}` : void 0}; ${$$definedVars}`, "style"), addAttribute(figure_id, "id"), addAttribute(`${`max-width: ${image_width}px`}; ${$$definedVars}`, "style"), renderComponent($$result, "Image", $$Image, { "class": "h-36 sm:h-44", "src": image, "format": "webp", "width": image_width ?? image.width, "densities": [2, 4], "alt": "PROJECT" }), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), title, message_badge ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "class:list": "ml-2 mt-1 text-xs", "message": message_badge })}` : null, defineScriptVars({ url_project, figure_id }));
}, "/Users/ano/dev/perso/portfolio/src/components/ProjectCard.astro", void 0);

const Billaudot = new Proxy({"src":"/_astro/card.T63BDL26.png","width":2612,"height":1586,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/billaudot/card.png";
							}
							
							return target[name];
						}
					});

const Zig = new Proxy({"src":"/_astro/zig.HxJbqgct.png","width":2500,"height":1158,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/zig.png";
							}
							
							return target[name];
						}
					});

const RescueOcean = new Proxy({"src":"/_astro/rescue-ocean-dark.dHgDGZm4.png","width":2601,"height":1387,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/rescue-ocean/rescue-ocean-dark.png";
							}
							
							return target[name];
						}
					});

const Gemme = new Proxy({"src":"/_astro/header.BcUCRN0R.png","width":868,"height":428,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/gemme/header.png";
							}
							
							return target[name];
						}
					});

const Rfid = new Proxy({"src":"/_astro/rfid.DRYJnsqv.png","width":742,"height":740,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/rfid.png";
							}
							
							return target[name];
						}
					});

const ReactNative = new Proxy({"src":"/_astro/react-native.3Qcu3xOp.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/react-native.png";
							}
							
							return target[name];
						}
					});

const cards = (locale) => [
  [
    i18n[locale]("TITLE_CARD_FRONT_END"),
    [
      {
        fading_order: 3,
        fading_from: "right",
        image: Rfid,
        image_width: 250,
        title: "RFID • Ionic - Angular",
        url_project: "projects/rfid"
      },
      {
        fading_order: 2,
        fading_from: "left",
        image: Gemme,
        image_width: 380,
        title: i18n[locale]("TITLE_CARD_GEMME"),
        url_project: "projects/gemme"
      },
      {
        fading_order: 4,
        fading_from: "left",
        image: RescueOcean,
        image_width: 450,
        title: i18n[locale]("TITLE_CARD_RESCUE"),
        url_project: "projects/rescue-ocean"
      },
      {
        fading_order: 1,
        fading_from: "right",
        image: ReactNative,
        image_width: 300,
        title: i18n[locale]("TITLE_CARD_FRAUD"),
        message_badge: i18n[locale]("IN_PROGRESS"),
        url_project: "projects/fraud-detection"
      }
    ]
  ],
  [
    i18n[locale]("TITLE_CARD_FULLS_TACK"),
    [
      {
        fading_from: "left",
        fading_order: 1,
        image: Billaudot,
        image_width: 500,
        title: "E-commerce musical • Thelia - Symfony - React",
        url_project: "projects/billaudot"
      },
      {
        fading_from: "right",
        fading_order: 3,
        image: AuroraHome,
        image_width: 500,
        title: "Aurora • Symfony - React",
        url_project: "projects/aurora"
      },
      {
        fading_order: 4,
        fading_from: "right",
        image: Zig,
        image_width: 300,
        title: "Parser transport video (.ts) • Zig",
        url_project: "projects/parser-ts"
      },
      {
        fading_order: 2,
        fading_from: "left",
        image: Zig,
        image_width: 300,
        title: "Infer SVG types • Zig - Typescript",
        message_badge: i18n[locale]("IN_PROGRESS"),
        url_project: "projects/infer-svg-types"
      }
    ]
  ]
];

export { $$ProjectCard as $, cards as c };
