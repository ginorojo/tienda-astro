globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, r as renderTemplate, h as createAstro, l as renderHead, n as renderSlot } from './astro/server_C_2jrCVI.mjs';
/* empty css                           */
import { a as reactExports } from './_@astro-renderers_pmHg7BfK.mjs';

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const LucideContext = reactExports.createContext({});
const useLucideContext = () => reactExports.useContext(LucideContext);

const Icon = reactExports.forwardRef(
  ({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$4);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$3);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$2);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$1);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 glass-effect"> <div class="container mx-auto px-4"> <div class="navbar h-20 px-0"> <div class="navbar-start"> <div class="dropdown"> <label${addAttribute(0, "tabindex")} class="btn btn-ghost lg:hidden"> ${renderComponent($$result, "Menu", Menu, { "className": "w-6 h-6" })} </label> <ul${addAttribute(0, "tabindex")} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="/catalog">Catálogo</a></li> <li><a href="/about">Nosotros</a></li> </ul> </div> <a href="/" class="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
TIENDA<span class="text-brand-accent">ASTRO</span> </a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1 gap-2"> <li><a href="/catalog" class="font-medium hover:text-brand-accent">Catálogo</a></li> <li><a href="/about" class="font-medium hover:text-brand-accent">Nosotros</a></li> <li><a href="/contact" class="font-medium hover:text-brand-accent">Contacto</a></li> </ul> </div> <div class="navbar-end gap-2"> <button class="btn btn-ghost btn-circle"> ${renderComponent($$result, "Search", Search, { "className": "w-5 h-5" })} </button> <div class="dropdown dropdown-end"> <label${addAttribute(0, "tabindex")} class="btn btn-ghost btn-circle"> <div class="indicator"> ${renderComponent($$result, "ShoppingBag", ShoppingBag, { "className": "w-5 h-5" })} <span class="badge badge-sm indicator-item badge-accent">0</span> </div> </label> <div${addAttribute(0, "tabindex")} class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"> <div class="card-body"> <span class="font-bold text-lg">0 Productos</span> <span class="text-info">Subtotal: $0</span> <div class="card-actions"> <a href="/checkout" class="btn btn-primary btn-block">Ir al Carrito</a> </div> </div> </div> </div> <a href="/admin" class="btn btn-ghost btn-circle"> ${renderComponent($$result, "User", User, { "className": "w-5 h-5" })} </a> </div> </div> </div> </header>`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/components/common/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-brand-primary text-brand-secondary pt-16 pb-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <div class="col-span-1 md:col-span-1"> <a href="/" class="text-2xl font-bold tracking-tighter mb-4 block">
TIENDA<span class="text-brand-accent">ASTRO</span> </a> <p class="text-slate-400 text-sm leading-relaxed">
Ofreciendo productos de la más alta calidad con un toque de elegancia desde 2024. Despacho a todo Chile.
</p> </div> <div> <h3 class="font-bold text-lg mb-6">Explorar</h3> <ul class="space-y-4 text-slate-400 text-sm"> <li><a href="/catalog" class="hover:text-brand-accent transition-colors">Catálogo</a></li> <li><a href="/collections" class="hover:text-brand-accent transition-colors">Colecciones</a></li> <li><a href="/offers" class="hover:text-brand-accent transition-colors">Ofertas</a></li> </ul> </div> <div> <h3 class="font-bold text-lg mb-6">Ayuda</h3> <ul class="space-y-4 text-slate-400 text-sm"> <li><a href="/faq" class="hover:text-brand-accent transition-colors">Preguntas Frecuentes</a></li> <li><a href="/shipping" class="hover:text-brand-accent transition-colors">Envíos y Devoluciones</a></li> <li><a href="/tracking" class="hover:text-brand-accent transition-colors">Sigue tu Pedido</a></li> </ul> </div> <div> <h3 class="font-bold text-lg mb-6">Newsletter</h3> <p class="text-slate-400 text-sm mb-4">Suscríbete para recibir ofertas exclusivas.</p> <div class="join w-full"> <input class="input input-bordered join-item bg-slate-900 border-slate-700 w-full" placeholder="email@ejemplo.com"> <button class="btn btn-primary join-item bg-brand-accent border-brand-accent text-brand-primary">Unirse</button> </div> </div> </div> <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-slate-500 text-xs">
© ${currentYear} Tienda Astro. Todos los derechos reservados.
</p> <div class="flex gap-6"> <a href="#" class="text-slate-500 hover:text-white transition-colors">Instagram</a> <a href="#" class="text-slate-500 hover:text-white transition-colors">Facebook</a> <a href="#" class="text-slate-500 hover:text-white transition-colors">LinkedIn</a> </div> </div> </div> </footer>`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/components/common/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$MetaTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MetaTags;
  const {
    title = "Tienda Premium | Calidad y Elegancia",
    description = "Descubre nuestra colecci\xF3n exclusiva de productos premium con despacho a todo Chile.",
    image = "/og-image.jpg",
    // Default OG image
    articleDate
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://tienda-astro.pages.dev");
  return renderTemplate`<!-- Global Metadata --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(articleDate ? "article" : "website", "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, canonicalURL), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, canonicalURL), "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}>${articleDate && renderTemplate`<meta property="article:published_time"${addAttribute(articleDate, "content")}>`}`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/components/seo/MetaTags.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, articleDate } = Astro2.props;
  return renderTemplate`<html lang="es" data-theme="premium"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderComponent($$result, "MetaTags", $$MetaTags, { "title": title, "description": description, "image": image, "articleDate": articleDate })}${renderHead()}</head> <body class="min-h-screen flex flex-col font-sans"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, ShoppingCart as S, createLucideIcon as c };
