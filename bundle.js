(()=>{"use strict";var e={10:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),o=n(314),c=n.n(o)()(r());c.push([e.id,".day-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 180px;\n    border: 1px solid #000;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.date-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.temp-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.conditions {\n    text-align: center;\n}",""]);const s=c},173:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),o=n(314),c=n.n(o)()(r());c.push([e.id,"body * {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.search-container {\n    display: flex;\n    justify-content: center;\n}",""]);const s=c},523:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),o=n(314),c=n.n(o)()(r());c.push([e.id,".heading {\n    text-align: center;\n}\n\n.forecast-container {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n}\n\n.site-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.error {\n    color: red;\n}",""]);const s=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},c=[],s=0;s<e.length;s++){var i=e[s],d=a.base?i[0]+a.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var s=n(o[c]);t[s].references--}for(var i=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,n.d({},{l:()=>j});var a=n(72),r=n.n(a),o=n(825),c=n.n(o),s=n(659),i=n.n(s),d=n(56),l=n.n(d),u=n(540),p=n.n(u),f=n(113),m=n.n(f),h=n(173),v={};let y;v.styleTagTransform=m(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;var x=n(10),g={};function b(e){const t=document.createElement("div");t.classList.add("day-card");const n=document.createElement("div");n.classList.add("date-container");const a=new Date(e.datetime).toString().substring(0,15),r=document.createElement("p");r.textContent=a.substring(0,3),n.appendChild(r);const o=document.createElement("p");o.textContent=a.substring(3,10),n.appendChild(o),t.appendChild(n);const c=document.createElement("div");c.classList.add("temp-container");const s=document.createElement("p");s.textContent=e.maxt,c.appendChild(s);const i=document.createElement("p");i.textContent=e.temp,c.appendChild(i);const d=document.createElement("p");d.textContent=e.mint,c.appendChild(d),t.appendChild(c);const l=document.createElement("p");return l.classList.add("conditions"),l.textContent=e.conditions,t.appendChild(l),t}g.styleTagTransform=m(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),r()(x.A,g),x.A&&x.A.locals&&x.A.locals;var C=n(523),A={};A.styleTagTransform=m(),A.setAttributes=l(),A.insert=i().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=p(),r()(C.A,A),C.A&&C.A.locals&&C.A.locals;const E="3L63BZALNF6WDMKYETGMT6Q4U",w=document.querySelector("body"),L=document.createElement("div");L.classList.add("site-container"),w.appendChild(L);const T=document.createElement("div");T.classList.add("heading");const S=document.createElement("h1");S.classList.add("welcome"),S.textContent="Welcome to the Weather App!";const M=document.createElement("p");async function j(e){const t=await async function(e){const t=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${e}&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=${E}`;try{const n=await fetch(t);return(await n.json()).locations[e].values}catch(e){!function(){const e=document.createElement("p");e.classList.add("error"),e.textContent="We were unable to identify this location. Please try again.",T.appendChild(e)}()}}(e);if(void 0!==t){const e=document.createElement("div");e.classList.add("forecast-container"),L.appendChild(e);for(let n=0;n<7;n++){const a=b(t[n]);e.appendChild(a)}}}M.textContent=" Please enter your location of choice below, and we will share its forecast for the next 7 days. Feel free to generate as many forecasts as you would like!",T.appendChild(S),T.appendChild(M),L.appendChild(T),function(){const e=document.querySelector(".site-container"),t=document.createElement("div");t.classList.add("search-container");const n=document.createElement("label");n.htmlFor="search-bar",n.textContent="Location:";const a=document.createElement("input");a.classList.add("search-bar"),a.setAttribute("id","search-bar"),a.setAttribute("type","search"),t.appendChild(n),t.appendChild(a),e.appendChild(t),a.addEventListener("keyup",(e=>{e.preventDefault(),"Enter"===e.key&&(y=e.target.value,j(y))}))}()})();