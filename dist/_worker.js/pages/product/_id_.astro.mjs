globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_C_2jrCVI.mjs';
import { c as createLucideIcon, S as ShoppingCart, $ as $$BaseLayout } from '../../chunks/BaseLayout_CCUYeVe2.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_pmHg7BfK.mjs';

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$3);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode$2);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

let listenerQueue = [];
let lqIndex = 0;
const QUEUE_ITEMS_PER_LISTENER = 4;
const atom = /* @__NO_SIDE_EFFECTS__ */ (initialValue) => {
  let listeners = [];
  let $atom = {
    get() {
      if (!$atom.lc) {
        $atom.listen(() => {
        })();
      }
      return $atom.value;
    },
    init: initialValue,
    lc: 0,
    listen(listener) {
      $atom.lc = listeners.push(listener);
      return () => {
        for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length; ) {
          if (listenerQueue[i] === listener) {
            listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
          } else {
            i += QUEUE_ITEMS_PER_LISTENER;
          }
        }
        let index = listeners.indexOf(listener);
        if (~index) {
          listeners.splice(index, 1);
          if (!--$atom.lc) $atom.off();
        }
      };
    },
    notify(oldValue, changedKey) {
      let runListenerQueue = !listenerQueue.length;
      for (let listener of listeners) {
        listenerQueue.push(listener, $atom.value, oldValue, changedKey);
      }
      if (runListenerQueue) {
        for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) {
          listenerQueue[lqIndex](
            listenerQueue[lqIndex + 1],
            listenerQueue[lqIndex + 2],
            listenerQueue[lqIndex + 3]
          );
        }
        listenerQueue.length = 0;
      }
    },
    /* It will be called on last listener unsubscribing.
       We will redefine it in onMount and onStop. */
    off() {
    },
    set(newValue) {
      let oldValue = $atom.value;
      if (oldValue !== newValue) {
        $atom.value = newValue;
        $atom.notify(oldValue);
      }
    },
    subscribe(listener) {
      let unbind = $atom.listen(listener);
      listener($atom.value);
      return unbind;
    },
    value: initialValue
  };
  return $atom;
};

/* @__NO_SIDE_EFFECTS__ */
const map = (initial = {}) => {
  let $map = atom(initial);

  $map.setKey = function (key, value) {
    let oldMap = $map.value;
    if (typeof value === 'undefined' && key in $map.value) {
      $map.value = { ...$map.value };
      delete $map.value[key];
      $map.notify(oldMap, key);
    } else if ($map.value[key] !== value) {
      $map.value = {
        ...$map.value,
        [key]: value
      };
      $map.notify(oldMap, key);
    }
  };

  return $map
};

const isCartOpen = atom(false);
const cartItems = map({});
function addCartItem({ id, name, price, image }) {
  const existingItem = cartItems.get()[id];
  if (existingItem) {
    cartItems.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity + 1
    });
  } else {
    cartItems.setKey(id, { id, name, price, image, quantity: 1 });
  }
  isCartOpen.set(true);
}

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
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const products = [
    {
      id: "1",
      name: "L\xE1mpara de Dise\xF1o Minimalista",
      price: 129990,
      image: "/images/lamp.png",
      category: "Iluminaci\xF3n",
      description: "Esta elegante l\xE1mpara combina la calidez de los materiales naturales con la precisi\xF3n del dise\xF1o moderno. Perfecta para mesas de noche o escritorios que buscan un toque de distinci\xF3n.",
      features: [
        "Material: Lat\xF3n pulido y Vidrio soplado",
        "Temperatura de color: 2700K (C\xE1lida)",
        "Medidas: 45cm x 20cm",
        "Eficiencia energ\xE9tica: A++"
      ]
    },
    {
      id: "2",
      name: "Sill\xF3n Nordic Premium",
      price: 45e4,
      image: "/images/hero.png",
      category: "Mobiliario",
      description: "Confort inigualable y dise\xF1o escandinavo. Tapizado en tela de alta resistencia con patas de madera s\xF3lida de roble.",
      features: [
        "Tapiz: Lino premium gris",
        "Estructura: Roble s\xF3lido",
        "Soporte: Hasta 150kg",
        "Garant\xEDa: 2 a\xF1os"
      ]
    }
  ];
  const product = products.find((p) => p.id === id) || products[0];
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  }).format(product.price);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${product.name} | Tienda Astro`, "description": product.description, "image": product.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 md:py-16"> <!-- Breadcrumbs --> <div class="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap"> <a href="/" class="hover:text-brand-primary">Inicio</a> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-4 h-4 flex-shrink-0" })} <a href="/catalog" class="hover:text-brand-primary">Catálogo</a> ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-4 h-4 flex-shrink-0" })} <span class="text-brand-primary font-medium">${product.name}</span> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20"> <!-- Image Gallery --> <div class="space-y-4"> <div class="aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover"> </div> <div class="grid grid-cols-4 gap-4"> ${[1, 2, 3, 4].map(() => renderTemplate`<div class="aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-100 cursor-pointer hover:border-brand-accent transition-colors"> <img${addAttribute(product.image, "src")} alt="Thumbnail" class="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"> </div>`)} </div> </div> <!-- Product Info --> <div class="flex flex-col"> <span class="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">${product.category}</span> <h1 class="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight leading-tight"> ${product.name} </h1> <div class="flex items-center gap-4 mb-8"> <span class="text-3xl font-bold text-brand-primary">${formattedPrice}</span> <div class="badge badge-accent badge-outline font-bold">12 cuotas sin interés</div> </div> <p class="text-slate-600 text-lg leading-relaxed mb-8"> ${product.description} </p> <div class="space-y-4 mb-10"> <h3 class="font-bold text-brand-primary uppercase text-sm tracking-wider">Características:</h3> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3"> ${product.features.map((feature) => renderTemplate`<li class="flex items-center gap-3 text-slate-600"> <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> ${feature} </li>`)} </ul> </div> <!-- Variation Selectors (Mock) --> <div class="mb-10 space-y-6"> <div> <label class="block font-bold text-sm mb-3">SELECCIONAR COLOR</label> <div class="flex gap-3"> <button class="w-8 h-8 rounded-full bg-brand-primary border-2 border-brand-accent ring-2 ring-transparent ring-offset-2"></button> <button class="w-8 h-8 rounded-full bg-slate-300 border-2 border-transparent"></button> <button class="w-8 h-8 rounded-full bg-amber-200 border-2 border-transparent"></button> </div> </div> </div> <div class="space-y-4 mb-12"> ${renderComponent($$result2, "AddToCart", AddToCart, { "client:load": true, "id": product.id, "name": product.name, "price": product.price, "image": product.image, "client:component-hydration": "load", "client:component-path": "@/components/shop/AddToCart", "client:component-export": "AddToCart" })} </div> <!-- Trust Badges --> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "ShieldCheck", ShieldCheck, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">Compra Segura</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Truck", Truck, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">Envío Express</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "RefreshCcw", RefreshCcw, { "className": "w-5 h-5 text-brand-accent" })} <span class="text-xs font-bold text-slate-500 uppercase tracking-tighter">30 días Retorno</span> </div> </div> </div> </div> </div> ` })}`;
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
