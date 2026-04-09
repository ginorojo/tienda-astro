globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_Bp-P1Nvp.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CZCYFNI9.mjs';
import { manifest } from './manifest_DFb5bSzX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/orders/_id_.astro.mjs');
const _page2 = () => import('./pages/admin/orders.astro.mjs');
const _page3 = () => import('./pages/admin/products.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/api/admin/products/bulk.astro.mjs');
const _page6 = () => import('./pages/api/admin/products/update.astro.mjs');
const _page7 = () => import('./pages/api/auth/signin.astro.mjs');
const _page8 = () => import('./pages/api/auth/signout.astro.mjs');
const _page9 = () => import('./pages/api/checkout/flow.astro.mjs');
const _page10 = () => import('./pages/api/checkout/flow-webhook.astro.mjs');
const _page11 = () => import('./pages/api/products/delete.astro.mjs');
const _page12 = () => import('./pages/api/products.astro.mjs');
const _page13 = () => import('./pages/catalog.astro.mjs');
const _page14 = () => import('./pages/checkout/result.astro.mjs');
const _page15 = () => import('./pages/checkout.astro.mjs');
const _page16 = () => import('./pages/product/_id_.astro.mjs');
const _page17 = () => import('./pages/signin.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/admin/orders/[id].astro", _page1],
    ["src/pages/admin/orders.astro", _page2],
    ["src/pages/admin/products.astro", _page3],
    ["src/pages/admin/index.astro", _page4],
    ["src/pages/api/admin/products/bulk.ts", _page5],
    ["src/pages/api/admin/products/update.ts", _page6],
    ["src/pages/api/auth/signin.ts", _page7],
    ["src/pages/api/auth/signout.ts", _page8],
    ["src/pages/api/checkout/flow.ts", _page9],
    ["src/pages/api/checkout/flow-webhook.ts", _page10],
    ["src/pages/api/products/delete.ts", _page11],
    ["src/pages/api/products.ts", _page12],
    ["src/pages/catalog.astro", _page13],
    ["src/pages/checkout/result.astro", _page14],
    ["src/pages/checkout.astro", _page15],
    ["src/pages/product/[id].astro", _page16],
    ["src/pages/signin.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
