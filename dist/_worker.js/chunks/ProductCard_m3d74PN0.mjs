globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, k as renderComponent, h as createAstro } from './astro/server_C_2jrCVI.mjs';
import { c as createLucideIcon, S as ShoppingCart } from './BaseLayout_CCUYeVe2.mjs';

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { id, name, price, image, category, isNew, onSale } = Astro2.props;
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  }).format(price);
  return renderTemplate`${maybeRenderHead()}<div class="premium-card group"> <div class="relative overflow-hidden rounded-t-2xl aspect-square bg-slate-50"> <!-- Badges --> <div class="absolute top-4 left-4 z-10 flex flex-col gap-2"> ${isNew && renderTemplate`<span class="badge badge-primary font-bold">NUEVO</span>`} ${onSale && renderTemplate`<span class="badge badge-accent font-bold text-brand-primary">OFERTA</span>`} </div> <!-- Image --> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <!-- Quick Actions --> <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"> <button class="btn btn-circle btn-primary shadow-lg border-none hover:scale-110"> ${renderComponent($$result, "ShoppingCart", ShoppingCart, { "className": "w-5 h-5" })} </button> <a${addAttribute(`/product/${id}`, "href")} class="btn btn-circle bg-white text-brand-primary border-none shadow-lg hover:scale-110"> ${renderComponent($$result, "Eye", Eye, { "className": "w-5 h-5" })} </a> </div> </div> <div class="p-6"> <div class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2"> ${category} </div> <h3 class="font-bold text-lg mb-2 text-brand-primary truncate group-hover:text-brand-accent transition-colors"> ${name} </h3> <div class="flex items-center justify-between"> <span class="text-xl font-bold text-brand-primary">${formattedPrice}</span> <div class="rating rating-xs"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<input type="radio"${addAttribute(`rating-${id}`, "name")} class="mask mask-star-2 bg-brand-accent" checked>`)} </div> </div> </div> </div>`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/components/shop/ProductCard.astro", void 0);

export { $$ProductCard as $ };
