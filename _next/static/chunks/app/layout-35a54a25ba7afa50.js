(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{618:function(e,r,t){Promise.resolve().then(t.t.bind(t,4026,23)),Promise.resolve().then(t.t.bind(t,3309,23)),Promise.resolve().then(t.t.bind(t,7840,23)),Promise.resolve().then(t.t.bind(t,4892,23)),Promise.resolve().then(t.t.bind(t,7344,23)),Promise.resolve().then(t.bind(t,1469))},2580:function(e,r,t){"use strict";t.d(r,{M:function(){return l}});var o=t(226),n=t(9128);let l=()=>{o.p8.registerPlugin(n.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{o.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-scale");r.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");o.p8.fromTo(e,{ease:"sine",scale:r},{scale:t,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-parallax");t.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");o.p8.fromTo(e,{ease:"sine",y:r},{y:t,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-skill-prog");l.forEach(e=>{var r=e.getAttribute("data-value-1"),t=e.getAttribute("data-value-2");o.p8.fromTo(e,{width:r,ease:"sine"},{width:t,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-counter");i.forEach(e=>{var r=e,t={val:0},n=e.dataset.number,l=(n+"").split("."),i=l.length>1?l[1].length:0;o.p8.to(t,{val:n,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){r.innerHTML=t.val.toFixed(i)}})}),o.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let s=document.querySelector(".mil-top-panel");void 0!=s&&window.addEventListener("scroll",e=>{window.scrollY>10?s.classList.add("mil-active"):s.classList.remove("mil-active")})}},1469:function(e,r,t){"use strict";t.r(r);var o=t(9268),n=t(6006),l=t(2580);let i=()=>((0,n.useEffect)(()=>{(0,l.M)()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"mil-progress-track",children:(0,o.jsx)("div",{className:"mil-progress"})})}));r.default=i},7840:function(){},7344:function(){},4892:function(){},4026:function(){},3309:function(){},3177:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(6006),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,l={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,o)&&!a.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:s.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},9268:function(e,r,t){"use strict";e.exports=t(3177)}},function(e){e.O(0,[8968,9077,2667,8139,1744],function(){return e(e.s=618)}),_N_E=e.O()}]);