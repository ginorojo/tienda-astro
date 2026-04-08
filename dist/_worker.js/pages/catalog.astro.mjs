globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_C_2jrCVI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CCUYeVe2.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_m3d74PN0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_pmHg7BfK.mjs';

const $$Astro = createAstro();
const $$Catalog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Catalog;
  const products = [
    { id: "1", name: "L\xE1mpara de Dise\xF1o Minimalista", price: 129990, image: "/images/lamp.png", category: "Iluminaci\xF3n", isNew: true },
    { id: "2", name: "Sill\xF3n Nordic Premium", price: 45e4, image: "/images/hero.png", category: "Mobiliario", onSale: true },
    { id: "3", name: "Vela Arom\xE1tica de Cuarzo", price: 25e3, image: "/images/lamp.png", category: "Decoraci\xF3n" },
    { id: "4", name: "Mesa de Centro M\xE1rmol", price: 18e4, image: "/images/hero.png", category: "Mobiliario", isNew: true },
    { id: "5", name: "Espejo de Pared Ovalado", price: 85e3, image: "/images/lamp.png", category: "Decoraci\xF3n" },
    { id: "6", name: "Coj\xEDn de Terciopelo", price: 15e3, image: "/images/hero.png", category: "Decoraci\xF3n", onSale: true }
  ];
  const categories = ["Todos", "Mobiliario", "Iluminaci\xF3n", "Decoraci\xF3n", "Arte"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cat\xE1logo | Tienda Astro", "description": "Explora nuestra colecci\xF3n completa de productos premium para el hogar." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 border-b border-slate-200 py-12"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-brand-primary mb-4 tracking-tight">Nuestro Catálogo</h1> <div class="text-sm breadcrumbs text-slate-500"> <ul> <li><a href="/">Inicio</a></li> <li>Catálogo</li> </ul> </div> </div> </div> <div class="container mx-auto px-4 py-16"> <div class="flex flex-col lg:flex-row gap-12"> <!-- Sidebar Filters --> <aside class="w-full lg:w-64 flex-shrink-0"> <div class="sticky top-28 space-y-8"> <div> <h3 class="font-bold text-lg mb-4">Categorías</h3> <ul class="space-y-2"> ${categories.map((cat) => renderTemplate`<li> <label class="flex items-center gap-3 cursor-pointer group"> <input type="radio" name="category" class="radio radio-primary radio-sm"${addAttribute(cat === "Todos", "checked")}> <span class="text-slate-600 group-hover:text-brand-accent transition-colors">${cat}</span> </label> </li>`)} </ul> </div> <div> <h3 class="font-bold text-lg mb-4">Rango de Precio</h3> <input type="range" min="0" max="1000000" value="500000" class="range range-primary range-xs"> <div class="flex justify-between text-xs text-slate-500 mt-2"> <span>$0</span> <span>$1.000.000+</span> </div> </div> <div class="p-6 bg-brand-primary rounded-2xl text-white"> <h4 class="font-bold mb-2">Despacho Gratis</h4> <p class="text-sm text-slate-300">En compras sobre $50.000 a toda la Región Metropolitana.</p> </div> </div> </aside> <!-- Products Grid --> <div class="flex-grow"> <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"> <p class="text-slate-500">Mostrando <span class="text-brand-primary font-bold">${products.length}</span> productos</p> <select class="select select-bordered select-sm w-full sm:w-auto"> <option disabled selected>Ordenar por</option> <option>Más recientes</option> <option>Precio: Menor a Mayor</option> <option>Precio: Mayor a Menor</option> <option>Populares</option> </select> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product })}`)} </div> <!-- Pagination --> <div class="mt-16 flex justify-center"> <div class="join"> <button class="join-item btn btn-outline btn-sm">Anterior</button> <button class="join-item btn btn-primary btn-sm">1</button> <button class="join-item btn btn-outline btn-sm">2</button> <button class="join-item btn btn-outline btn-sm">3</button> <button class="join-item btn btn-outline btn-sm">Siguiente</button> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/catalog.astro", void 0);

const $$file = "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/catalog.astro";
const $$url = "/catalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
