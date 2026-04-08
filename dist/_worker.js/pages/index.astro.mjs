globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, k as renderComponent } from '../chunks/astro/server_C_2jrCVI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CCUYeVe2.mjs';
/* empty css                                 */
import { $ as $$ProductCard } from '../chunks/ProductCard_m3d74PN0.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_pmHg7BfK.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, ctaText, ctaLink, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden" data-astro-cid-ewxirvlt> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0" data-astro-cid-ewxirvlt> <img${addAttribute(image, "src")} alt="Hero Background" class="w-full h-full object-cover" data-astro-cid-ewxirvlt> <div class="absolute inset-0 bg-gradient-to-r from-brand-primary/60 to-transparent" data-astro-cid-ewxirvlt></div> </div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-ewxirvlt> <div class="max-w-2xl text-white" data-astro-cid-ewxirvlt> <div class="overflow-hidden" data-astro-cid-ewxirvlt> <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up" data-astro-cid-ewxirvlt> ${title} </h1> </div> <p class="text-xl md:text-2xl text-slate-200 mb-10 max-w-lg leading-relaxed animate-fade-in animation-delay-300" data-astro-cid-ewxirvlt> ${subtitle} </p> <div class="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600" data-astro-cid-ewxirvlt> <a${addAttribute(ctaLink, "href")} class="btn btn-primary btn-lg px-8 bg-brand-accent border-brand-accent text-brand-primary font-bold hover:scale-105 transition-transform" data-astro-cid-ewxirvlt> ${ctaText} </a> <a href="/catalog" class="btn btn-outline btn-lg px-8 text-white border-white hover:bg-white hover:text-brand-primary transition-all" data-astro-cid-ewxirvlt>
Explorar Catálogo
</a> </div> </div> </div> <!-- Decorative element --> <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" data-astro-cid-ewxirvlt> <div class="w-px h-12 bg-white/30 whitespace-nowrap" data-astro-cid-ewxirvlt></div> </div> </section> `;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/components/home/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const featuredProducts = [
    {
      id: "1",
      name: "L\xE1mpara de Dise\xF1o Minimalista",
      price: 129990,
      image: "/images/lamp.png",
      category: "Iluminaci\xF3n",
      isNew: true
    },
    {
      id: "2",
      name: "Sill\xF3n Nordic Premium",
      price: 45e4,
      image: "/images/hero.png",
      // Using hero as filler
      category: "Mobiliario",
      onSale: true
    },
    {
      id: "3",
      name: "Vela Arom\xE1tica de Cuarzo",
      price: 25e3,
      image: "/images/lamp.png",
      category: "Decoraci\xF3n"
    },
    {
      id: "4",
      name: "Mesa de Centro M\xE1rmol",
      price: 18e4,
      image: "/images/hero.png",
      category: "Mobiliario",
      isNew: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tienda Astro | Dise\xF1o Premium para tu Hogar", "description": "Colecci\xF3n exclusiva de productos premium con despacho a todo Chile. Calidad, dise\xF1o y elegancia." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "La Elegancia est\xE1 en los Detalles", "subtitle": "Descubre nuestra nueva colecci\xF3n de primavera dise\xF1ada para transformar cualquier espacio en una experiencia \xFAnica.", "ctaText": "Comprar Ahora", "ctaLink": "/catalog", "image": "/images/hero.png" })}  ${maybeRenderHead()}<section class="py-24 bg-white"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"> <div> <h2 class="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4">Selección Exclusiva</h2> <p class="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight">Destacados de la Semana</p> </div> <a href="/catalog" class="btn btn-ghost group">
Ver todo el catálogo
<span class="ml-2 group-hover:translate-x-1 transition-transform">→</span> </a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${featuredProducts.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product })}`)} </div> </div> </section>  <section class="py-20 bg-brand-secondary"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <div class="text-center"> <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"> <span class="text-2xl">📦</span> </div> <h3 class="font-bold text-xl mb-4">Envío Seguro</h3> <p class="text-slate-500">Despachamos a todo Chile con los más altos estándares de protección.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"> <span class="text-2xl">💳</span> </div> <h3 class="font-bold text-xl mb-4">Pago en Cuotas</h3> <p class="text-slate-500">Aceptamos todas las tarjetas vía Webpay (Flow) con hasta 12 cuotas.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"> <span class="text-2xl">✨</span> </div> <h3 class="font-bold text-xl mb-4">Garantía Premium</h3> <p class="text-slate-500">Comprometidos con la calidad. Si no estás conforme, te devolvemos tu dinero.</p> </div> </div> </div> </section>  <section class="py-24 overflow-hidden"> <div class="container mx-auto px-4"> <div class="bg-brand-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white"> <div class="relative z-10 max-w-2xl mx-auto"> <h2 class="text-4xl md:text-6xl font-bold mb-8 tracking-tight">¿Listo para elevar tu estilo?</h2> <p class="text-xl text-slate-300 mb-12">Suscríbete a nuestro newsletter y obtén un 10% de descuento en tu primera compra.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <input type="email" placeholder="Tu correo electrónico" class="input input-lg input-bordered bg-white/10 border-white/20 text-white w-full sm:w-auto min-w-[300px]"> <button class="btn btn-primary btn-lg bg-brand-accent border-brand-accent text-brand-primary font-bold px-12">Suscribirme</button> </div> </div> <!-- Decorative blobs --> <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div> <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> </div> </div> </section> ` })}`;
}, "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
