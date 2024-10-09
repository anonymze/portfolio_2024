import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BTjXv1Km.mjs';
import { manifest } from './manifest_DqYJXxla.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en/privacy-policy.astro.mjs');
const _page2 = () => import('./pages/en/projects/aurora.astro.mjs');
const _page3 = () => import('./pages/en/projects/billaudot.astro.mjs');
const _page4 = () => import('./pages/en/projects/fraud-detection.astro.mjs');
const _page5 = () => import('./pages/en/projects/gemme.astro.mjs');
const _page6 = () => import('./pages/en/projects/infer-svg-types.astro.mjs');
const _page7 = () => import('./pages/en/projects/parser-ts.astro.mjs');
const _page8 = () => import('./pages/en/projects/rescue-ocean.astro.mjs');
const _page9 = () => import('./pages/en/projects/rfid.astro.mjs');
const _page10 = () => import('./pages/en/projects.astro.mjs');
const _page11 = () => import('./pages/en/terms-of-use.astro.mjs');
const _page12 = () => import('./pages/en.astro.mjs');
const _page13 = () => import('./pages/privacy-policy.astro.mjs');
const _page14 = () => import('./pages/projects/aurora.astro.mjs');
const _page15 = () => import('./pages/projects/billaudot.astro.mjs');
const _page16 = () => import('./pages/projects/fraud-detection.astro.mjs');
const _page17 = () => import('./pages/projects/gemme.astro.mjs');
const _page18 = () => import('./pages/projects/infer-svg-types.astro.mjs');
const _page19 = () => import('./pages/projects/parser-ts.astro.mjs');
const _page20 = () => import('./pages/projects/rescue-ocean.astro.mjs');
const _page21 = () => import('./pages/projects/rfid.astro.mjs');
const _page22 = () => import('./pages/projects.astro.mjs');
const _page23 = () => import('./pages/terms-of-use.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/privacy-policy.astro", _page1],
    ["src/pages/en/projects/aurora/index.astro", _page2],
    ["src/pages/en/projects/billaudot/index.astro", _page3],
    ["src/pages/en/projects/fraud-detection/index.astro", _page4],
    ["src/pages/en/projects/gemme/index.astro", _page5],
    ["src/pages/en/projects/infer-svg-types/index.astro", _page6],
    ["src/pages/en/projects/parser-ts/index.astro", _page7],
    ["src/pages/en/projects/rescue-ocean/index.astro", _page8],
    ["src/pages/en/projects/rfid/index.astro", _page9],
    ["src/pages/en/projects/index.astro", _page10],
    ["src/pages/en/terms-of-use.astro", _page11],
    ["src/pages/en/index.astro", _page12],
    ["src/pages/privacy-policy.astro", _page13],
    ["src/pages/projects/aurora/index.astro", _page14],
    ["src/pages/projects/billaudot/index.astro", _page15],
    ["src/pages/projects/fraud-detection/index.astro", _page16],
    ["src/pages/projects/gemme/index.astro", _page17],
    ["src/pages/projects/infer-svg-types/index.astro", _page18],
    ["src/pages/projects/parser-ts/index.astro", _page19],
    ["src/pages/projects/rescue-ocean/index.astro", _page20],
    ["src/pages/projects/rfid/index.astro", _page21],
    ["src/pages/projects/index.astro", _page22],
    ["src/pages/terms-of-use.astro", _page23],
    ["src/pages/index.astro", _page24]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7b55a3cb-32b8-4fe7-9dc2-30bdd615ccac",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
