import{r as u}from"./index.DiEladB3.js";var x={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C;function T(){if(C)return d;C=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,n,s){var l=null;if(s!==void 0&&(l=""+s),n.key!==void 0&&(l=""+n.key),"key"in n){s={};for(var c in n)c!=="key"&&(s[c]=n[c])}else s=n;return n=s.ref,{$$typeof:o,type:r,key:l,ref:n!==void 0?n:null,props:s}}return d.Fragment=t,d.jsx=e,d.jsxs=e,d}var E;function q(){return E||(E=1,x.exports=T()),x.exports}var R=q();let a=[],i=0;const f=4,y=o=>{let t=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},init:o,lc:0,listen(r){return e.lc=t.push(r),()=>{for(let s=i+f;s<a.length;)a[s]===r?a.splice(s,f):s+=f;let n=t.indexOf(r);~n&&(t.splice(n,1),--e.lc||e.off())}},notify(r,n){let s=!a.length;for(let l of t)a.push(l,e.value,r,n);if(s){for(i=0;i<a.length;i+=f)a[i](a[i+1],a[i+2],a[i+3]);a.length=0}},off(){},set(r){let n=e.value;n!==r&&(e.value=r,e.notify(n))},subscribe(r){let n=e.listen(r);return r(e.value),n},value:o};return e},I=(o={})=>{let t=y(o);return t.setKey=function(e,r){let n=t.value;typeof r>"u"&&e in t.value?(t.value={...t.value},delete t.value[e],t.notify(n,e)):t.value[e]!==r&&(t.value={...t.value,[e]:r},t.notify(n,e))},t},$=y(!1),h=I({});function W({id:o,name:t,price:e,image:r}){const n=h.get()[o];n?h.setKey(o,{...n,quantity:n.quantity+1}):h.setKey(o,{id:o,name:t,price:e,image:r,quantity:1}),$.set(!0)}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(...o)=>o.filter((t,e,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,r)=>r?r.toUpperCase():e.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o=>{const t=P(o);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},M=u.createContext({}),U=()=>u.useContext(M),O=u.forwardRef(({color:o,size:t,strokeWidth:e,absoluteStrokeWidth:r,className:n="",children:s,iconNode:l,...c},k)=>{const{size:p=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,color:A="currentColor",className:_=""}=U()??{},j=r??w?Number(e??v)*24/Number(t??p):e??v;return u.createElement("svg",{ref:k,...m,width:t??p??m.width,height:t??p??m.height,stroke:o??A,strokeWidth:j,className:g("lucide",_,n),...!s&&!J(c)&&{"aria-hidden":"true"},...c},[...l.map(([L,S])=>u.createElement(L,S)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(o,t)=>{const e=u.forwardRef(({className:r,...n},s)=>u.createElement(O,{ref:s,iconNode:t,className:g(`lucide-${N(b(o))}`,`lucide-${o}`,r),...n}));return e.displayName=b(o),e};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],B=Q("shopping-cart",z),Y=({id:o,name:t,price:e,image:r})=>R.jsxs("button",{onClick:()=>W({id:o,name:t,price:e,image:r}),className:"btn btn-primary btn-lg w-full bg-brand-accent border-brand-accent text-brand-primary font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3",children:[R.jsx(B,{className:"w-5 h-5"}),"Añadir al Carrito"]});export{Y as AddToCart};
