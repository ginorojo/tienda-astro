globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_BMPoQNKY.mjs';
import { c as createLucideIcon, j as jsxRuntimeExports, b as addCartItem, $ as $$BaseLayout } from '../../chunks/BaseLayout_Do-MAjHR.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Bp-P1Nvp.mjs';
import { S as ShoppingCart } from '../../chunks/shopping-cart_9AsVg3KJ.mjs';
import { s as supabase } from '../../chunks/supabase_C7auxTPX.mjs';
import { S as ShieldCheck, T as Truck } from '../../chunks/truck_CG_F7wFh.mjs';

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode);

const AddToCart = ({ id, name, price, image }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: () => addCartItem({ id, name, price, image }),
      className: "btn btn-primary btn-lg w-full bg-brand-accent border-brand-accent text-brand-primary font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
        "Añadir al Carrito"
      ]
    }
  );
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single();
  if (error) {
    console.error("Error fetching product:", error);
  }
  if (error || !product) {
    return Astro2.redirect("/404");
  }
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  }).format(product.price);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${product.name} | Tienda Astro`, "description": product.description, "image": product.image_url }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 md:py-16"> <!-- Breadcrumbs --> <div class="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap"> <a href="/" class="hover:text-brand-primary">Inicio</a> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-4 h-4 flex-shrink-0" })} <a href="/catalog" class="hover:text-brand-primary">Catálogo</a> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-4 h-4 flex-shrink-0" })} <span class="text-brand-primary font-medium">${product.name}</span> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20"> <!-- Image Gallery --> <div class="space-y-4"> <div class="aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100"> <img${addAttribute(product.image_url || "/images/placeholder.png", "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover"> </div> <div class="grid grid-cols-4 gap-4"> ${[1, 2, 3, 4].map(() => renderTemplate`<div class="aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-100 cursor-pointer hover:border-brand-accent transition-colors"> <img${addAttribute(product.image_url || "/images/placeholder.png", "src")} alt="Thumbnail" class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"> </div>`)} </div> </div> <!-- Product Info --> <div class="flex flex-col"> <span class="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Colección Premium</span> <h1 class="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight leading-tight"> ${product.name} </h1> <div class="flex items-center gap-4 mb-8"> <span class="text-3xl font-bold text-brand-primary">${formattedPrice}</span> <div class="badge badge-accent badge-outline font-bold">12 cuotas sin interés</div> </div> <p class="text-slate-600 text-lg leading-relaxed mb-8"> ${product.description} </p> ${product.features && renderTemplate`<div class="space-y-4 mb-10"> <h3 class="font-bold text-brand-primary uppercase text-sm tracking-wider">Características:</h3> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3"> ${product.features.map((feature) => renderTemplate`<li class="flex items-center gap-3 text-slate-600"> <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> ${feature} </li>`)} </ul> </div>`} <!-- Variation Selectors (Mock) --> <div class="mb-10 space-y-6"> <div> <label class="block font-bold text-sm mb-3">SELECCIONAR COLOR</label> <div class="flex gap-3"> <button class="w-8 h-8 rounded-full bg-brand-primary border-2 border-brand-accent ring-2 ring-transparent ring-offset-2"></button> <button class="w-8 h-8 rounded-full bg-slate-300 border-2 border-transparent"></button> <button class="w-8 h-8 rounded-full bg-amber-200 border-2 border-transparent"></button> </div> </div> </div> <div class="space-y-4 mb-12"> ${renderComponent($$result2, "AddToCart", AddToCart, { "client:load": true, "id": product.id, "name": product.name, "price": product.price, "image": product.image_url || "", "client:component-hydration": "load", "client:component-path": "@/components/shop/AddToCart", "client:component-export": "AddToCart" })} </div> <!-- Trust Badges --> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "ShieldCheck", ShieldCheck, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">Compra Segura</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Truck", Truck, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">Envío Express</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "RefreshCcw", RefreshCcw, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">30 días Retorno</span> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/product/[id].astro", void 0);

const $$file = "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
