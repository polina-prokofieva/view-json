var e={667:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root {\n  --key: #538cc6;\n  --value: #7a0;\n}\n.main--nkgWn {\n  display: grid;\n  gap: 7px;\n  font-family: 'Courier New';\n  font-size: 11pt;\n}\n.key--ePMDj {\n  color: var(--key);\n}\n.value--hsvoM {\n  color: var(--value);\n}\n.string--l71lZ {\n  font-style: italic;\n}\n.array--q1hA6,\n.object--snknK {\n  cursor: pointer;\n}\n.array--q1hA6 > .key--ePMDj::before,\n.object--snknK > .key--ePMDj::before {\n  display: inline-block;\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  background-color: transparent;\n  border-width: 4.5px 0 4.5px 7px;\n  border-color: transparent transparent transparent #ccc;\n  margin-left: -17px;\n  margin-right: 7px;\n  transition: transform 0.1s ease-in-out;\n}\n.array--q1hA6 > .value--hsvoM,\n.object--snknK > .value--hsvoM {\n  display: grid;\n  gap: 7px;\n  visibility: hidden;\n  height: 0;\n}\n.array--q1hA6.opened--a6cpo > .key--ePMDj::before,\n.object--snknK.opened--a6cpo > .key--ePMDj::before {\n  transform: rotateZ(0.25turn);\n}\n.array--q1hA6.opened--a6cpo > .value--hsvoM,\n.object--snknK.opened--a6cpo > .value--hsvoM {\n  visibility: visible;\n  height: auto;\n  margin-top: 7px;\n}\n.field--RcmI_ {\n  margin-left: 20px;\n}\n",""]),i.locals={main:"main--nkgWn",key:"key--ePMDj",value:"value--hsvoM",string:"string--l71lZ",array:"array--q1hA6",object:"object--snknK",opened:"opened--a6cpo",field:"field--RcmI_"};const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var y=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r={};(()=>{t.d(r,{O:()=>Z,R:()=>w});const e=e=>"object"==typeof e&&!Array.isArray(e)&&null!==e,n=e=>!(!e||"object"!=typeof e||!(Array.isArray(e)&&0===e.length||0===Object.keys(e).length)),o=(t,r,o)=>{const{hidePropertiesByValue:a,hidePropertiesByKey:i,hideEmpty:s}=o;return!((i||a||s)&&(!e(r)&&a&&a.includes(r)||i&&i.includes(t)||n(r)&&s))},a=(e,{nullAppearence:n,boolAppearence:t})=>t&&"boolean"==typeof e?t[+e]:n&&null===e?n:e,i=e=>{if("string"!=typeof e)return null;const n=e.split(/[\s_\-]/).filter((e=>e)),t=/([A-Z]+$)|(\d+[a-z]+)|(\d+)|(((^[a-z])|[A-Z]+)[a-z]*)/g;let r=[];for(let e of n){const n=e.match(t)||[e];r=r.concat(n)}return r?r.map((e=>(e=>{const n=(e.match(/[A-Z]/g)||[]).length,t=/^[A-Z]+$/.test(e);return n>1&&!t?e.slice(0,n-1)+" "+e.slice(n-1):e})(e))).join(" "):e},s=(e,t)=>{if(!t||!Object.keys(t).length)return e;const r=Array.isArray(e)?[]:{},{isFormatKeys:c,hideEmpty:l}=t;for(const p in e){const u=c?i(p):p;if(o(p,e[p],t))if(e[p]&&"object"==typeof e[p]){const o=s(e[p],t);l&&n(o)||(r[u]=o)}else r[u]=a(e[p],t)}return r};var c=t(379),l=t.n(c),p=t(795),u=t.n(p),d=t(569),f=t.n(d),y=t(565),v=t.n(y),h=t(216),m=t.n(h),g=t(589),b=t.n(g),A=t(667),k={};k.styleTagTransform=b(),k.setAttributes=v(),k.insert=f().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=m(),l()(A.Z,k);const j=A.Z&&A.Z.locals?A.Z.locals:void 0,x=(n,t="",r)=>{const o=document.createElement(n);if(o.innerHTML=t,e(r))for(let e in r)o[e]=r[e];else{const e=Array.isArray(r)?r.join(" "):r;o.className=e}return o},M=e=>{e.classList.toggle(j.opened),e.classList.contains(j.opened)||e.querySelectorAll(`.${j.opened}`).forEach((e=>{e.classList.remove(j.opened)}))},C=(e,n=j.main)=>{const t=x("div",null,n);for(const n in e){const r=e[n],o=Array.isArray(r)?"array":typeof r,a=x("div",null,[j.field,j[o]]),{keyElement:i,fragment:s}=E(n,r);a.appendChild(s),i.addEventListener("click",(()=>M(a))),t.appendChild(a)}return t},E=(e,n)=>{const t=document.createDocumentFragment(),r=x("span",e,j.key);return t.appendChild(r),"object"==typeof n?t.appendChild(C(n,j.value)):(t.appendChild(x("span",": ",j.value)),t.appendChild(x("span",n,j.value))),{keyElement:r,fragment:t}},P={root:"",formatKeys:!1,hideArrayElements:!1,hideEmpty:!0},Z=(e,n={})=>{const t={...P,...n};try{const n=JSON.parse(e);return s(n,t)}catch(e){return"Invalid JSON"}},w=(e,n,t)=>{((e,n)=>{const t=C(e);n.appendChild(t)})(Z(e,n),t)}})();var o=r.O,a=r.R;export{o as convert,a as generate};