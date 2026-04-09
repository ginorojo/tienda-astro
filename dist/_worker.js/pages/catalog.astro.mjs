globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BMPoQNKY.mjs';
import { j as jsxRuntimeExports, $ as $$BaseLayout } from '../chunks/BaseLayout_Do-MAjHR.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_Bp-P1Nvp.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Bp-P1Nvp.mjs';
import { P as ProductCard } from '../chunks/ProductCard_C5C-6mqp.mjs';
import { s as supabase } from '../chunks/supabase_C7auxTPX.mjs';

const ProductExplorer = ({ initialProducts, categories }) => {
  const [selectedCategory, setSelectedCategory] = reactExports.useState("Todos");
  const [priceRange, setPriceRange] = reactExports.useState(1e6);
  const [sortBy, setSortBy] = reactExports.useState("Más recientes");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredProducts = reactExports.useMemo(() => {
    let result = [...initialProducts];
    result = result.filter((p) => p.price <= priceRange);
    if (searchQuery) {
      result = result.filter(
        (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === "Precio: Menor a Mayor") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Precio: Mayor a Menor") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Más recientes") {
      result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
    return result;
  }, [initialProducts, selectedCategory, priceRange, sortBy, searchQuery]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-full lg:w-64 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-28 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4 text-brand-primary", children: "Búsqueda" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Buscar producto...",
            className: "input input-bordered w-full",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4 text-brand-primary", children: "Categorías" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "category",
              className: "radio radio-primary radio-sm",
              checked: selectedCategory === cat,
              onChange: () => setSelectedCategory(cat)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `transition-colors ${selectedCategory === cat ? "text-brand-accent font-bold" : "text-slate-600 group-hover:text-brand-accent"}`, children: cat })
        ] }) }, cat)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4 text-brand-primary", children: "Precio Máximo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "1000000",
            step: "10000",
            value: priceRange,
            onChange: (e) => setPriceRange(Number(e.target.value)),
            className: "range range-primary range-xs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-brand-accent", children: new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(priceRange) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-brand-primary rounded-2xl text-white shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Despacho Gratis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300", children: "En compras sobre $50.000 a toda la Región Metropolitana." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center mb-8 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500", children: [
          "Mostrando ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary font-bold", children: filteredProducts.length }),
          " productos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "select select-bordered select-sm w-full sm:w-auto",
            value: sortBy,
            onChange: (e) => setSortBy(e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Más recientes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Precio: Menor a Mayor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Precio: Mayor a Menor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Populares" })
            ]
          }
        )
      ] }),
      filteredProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { ...product }, product.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-400", children: "No se encontraron productos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setSelectedCategory("Todos");
              setPriceRange(1e6);
              setSearchQuery("");
            },
            className: "btn btn-ghost mt-4 text-brand-accent",
            children: "Limpiar filtros"
          }
        )
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Catalog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Catalog;
  const { data: productsData, error } = await supabase.from("products").select("*").gt("stock", 0).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching catalog products:", error);
  }
  const products = productsData || [];
  console.log(`[Catalog] Total products fetched: ${products.length}`);
  const categories = ["Todos", "Mobiliario", "Iluminaci\xF3n", "Decoraci\xF3n"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cat\xE1logo | Tienda Astro", "description": "Explora nuestra colecci\xF3n completa de productos premium para el hogar." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 border-b border-slate-200 py-12"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-brand-primary mb-4 tracking-tight">Nuestro Catálogo</h1> <div class="text-sm breadcrumbs text-slate-500"> <ul> <li><a href="/">Inicio</a></li> <li>Catálogo</li> </ul> </div> </div> </div> <div class="container mx-auto px-4 py-16"> ${renderComponent($$result2, "ProductExplorer", ProductExplorer, { "client:load": true, "initialProducts": products, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/components/shop/ProductExplorer", "client:component-export": "ProductExplorer" })} </div> ` })}`;
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
