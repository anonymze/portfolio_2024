import{r as l}from"./index.DhYZZe0J.js";/* empty css                       */var u={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function c(o,r,i){var e,t={},s=null,p=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)_.call(r,e)&&!v.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:d,type:o,key:s,ref:p,props:t,_owner:x.current}}n.Fragment=m;n.jsx=c;n.jsxs=c;u.exports=n;var a=u.exports;const w=o=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",...o},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})),k=()=>a.jsx("button",{id:"scroll-to-top","aria-hidden":"true",tabIndex:-1,"aria-label":"Scroll to the beginning of the page",onClick:()=>window.scrollTo(0,0),children:a.jsx(w,{})});export{k as default};
