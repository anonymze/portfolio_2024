import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_bQrO92AX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { message } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(Astro2.props.class, "class:list")} data-astro-cid-w254wjdn> ${message} </div> `;
}, "/Users/ano/dev/perso/portfolio/src/components/Badge.astro", void 0);

export { $$Badge as $ };
