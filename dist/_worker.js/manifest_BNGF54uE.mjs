globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_C_2jrCVI.mjs';
import './chunks/astro-designed-error-pages_B7cwM9aL.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CIZTHHT-.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/","cacheDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/node_modules/.astro/","outDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/dist/","srcDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/","publicDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/public/","buildClientDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/dist/","buildServerDir":"file:///C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalog.C_ilRL8f.css"}],"routeData":{"route":"/catalog","isIndex":false,"type":"page","pattern":"^\\/catalog\\/?$","segments":[[{"content":"catalog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalog.astro","pathname":"/catalog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalog.C_ilRL8f.css"}],"routeData":{"route":"/product/[id]","isIndex":false,"type":"page","pattern":"^\\/product\\/([^/]+?)\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/product/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalog.C_ilRL8f.css"},{"type":"inline","content":"@keyframes slide-up{0%{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.animate-slide-up[data-astro-cid-ewxirvlt]{animation:slide-up .8s cubic-bezier(.16,1,.3,1) forwards}.animate-fade-in[data-astro-cid-ewxirvlt]{animation:fade-in 1s ease-out forwards;opacity:0}.animation-delay-300[data-astro-cid-ewxirvlt]{animation-delay:.3s}.animation-delay-600[data-astro-cid-ewxirvlt]{animation-delay:.6s}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/catalog.astro",{"propagation":"none","containsHead":true}],["C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/src/pages/product/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/catalog@_@astro":"pages/catalog.astro.mjs","\u0000@astro-page:src/pages/product/[id]@_@astro":"pages/product/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BNGF54uE.mjs","C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/ginor/OneDrive/Escritorio/templates/tienda-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DK-ndfsl.mjs","@/components/shop/AddToCart":"_astro/AddToCart.DtsHhS7k.js","@astrojs/react/client.js":"_astro/client.Dc9Vh3na.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/catalog.C_ilRL8f.css","/_astro/AddToCart.DtsHhS7k.js","/_astro/client.Dc9Vh3na.js","/_astro/index.DiEladB3.js","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/chunks/astro-designed-error-pages_B7cwM9aL.mjs","/_worker.js/chunks/astro_CpmGBi1b.mjs","/_worker.js/chunks/BaseLayout_CCUYeVe2.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_C2dIlQ9H.mjs","/_worker.js/chunks/index_DxxZFuWY.mjs","/_worker.js/chunks/noop-middleware_CIZTHHT-.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/ProductCard_m3d74PN0.mjs","/_worker.js/chunks/remote_CVXTZJrr.mjs","/_worker.js/chunks/sharp_DK-ndfsl.mjs","/_worker.js/chunks/_@astro-renderers_pmHg7BfK.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BQJiifSB.mjs","/_worker.js/_astro/catalog.C_ilRL8f.css","/_worker.js/pages/catalog.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro/server_C_2jrCVI.mjs","/_worker.js/pages/product/_id_.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"JJC1WR3chq1gdavhn9MWvE+eAiJSc4W53vxF2ExLfzU=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
