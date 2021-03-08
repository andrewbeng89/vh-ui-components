var e=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const t=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,n=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,o=/>[^<>]*$/,i=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,s=(e,t)=>0<t--&&(r.test(e[t])||!o.test(e[t])&&s(e,t)),c=(e,t,r)=>n.test(t)?e:`<${t}${r.replace(a,"")}></${t}>`,{isArray:l}=Array,{indexOf:u,slice:d}=[],p=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e
/*! (c) Andrea Giammarchi - ISC */;var h=function(e){var t="fragment",n="template",r="content"in i(n)?function(e){var t=i(n);return t.innerHTML=e,t.content}:function(e){var r=i(t),a=i(n),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;a.innerHTML="<table>"+e+"</table>",s=a.querySelectorAll(c)}else a.innerHTML=e,s=a.childNodes;return o(r,s),r};return function(e,t){return("svg"===t?a:r)(e)};function o(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function i(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(e){var n=i(t),r=i("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",o(n,r.firstChild.childNodes),n}}(document);const f=({childNodes:e},t)=>e[t],g=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(u.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:m,importNode:b}=document,y=1!=b.length,w=y?(e,t,n)=>b.call(document,h(e,t,n),!0):h,v=y?e=>m.call(document,e,129,null,!1):e=>m.call(document,e,129),x=(e,t,n)=>((e,t,n,r,o)=>{const i=n.length;let a=t.length,s=i,c=0,l=0,u=null;for(;c<a||l<s;)if(a===c){const t=s<i?l?r(n[l-1],-0).nextSibling:r(n[s-l],0):o;for(;l<s;)e.insertBefore(r(n[l++],1),t)}else if(s===l)for(;c<a;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[l])c++,l++;else if(t[a-1]===n[s-1])a--,s--;else if(t[c]===n[s-1]&&n[l]===t[a-1]){const o=r(t[--a],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--s],1),o),t[a]=n[s]}else{if(!u){u=new Map;let e=l;for(;e<s;)u.set(n[e],e++)}if(u.has(t[c])){const o=u.get(t[c]);if(l<o&&o<s){let i=c,d=1;for(;++i<a&&i<s&&u.get(t[i])===o+d;)d++;if(d>o-l){const i=r(t[c],0);for(;l<o;)e.insertBefore(r(n[l++],1),i)}else e.replaceChild(r(n[l++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,t,n,p,e);function k(e){const{type:t,path:n}=e,r=n.reduceRight(f,this);return"node"===t?(e=>{let t,n,r=[];const o=i=>{switch(typeof i){case"string":case"number":case"boolean":t!==i&&(t=i,n?n.nodeValue=i:n=document.createTextNode(i),r=x(e,r,[n]));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){t!=i&&(t=i,r=x(e,r,[]));break}if(l(i)){t=i,0===i.length?r=x(e,r,[]):"object"==typeof i[0]?r=x(e,r,i):o(String(i));break}"ELEMENT_NODE"in i&&t!==i&&(t=i,r=x(e,r,11===i.nodeType?d.call(i.childNodes):[i]))}};return o})(r):"attr"===t?((e,t)=>{switch(t[0]){case"?":return((e,t,n)=>r=>{n!==!!r&&((n=!!r)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):n=>{e[t]=n})(e,t.slice(1));case"o":if("n"===t[1])return((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const o=l(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}})(e,t)}switch(t){case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:`aria-${n}`,o=t[n];null==o?e.removeAttribute(r):e.setAttribute(r,o)}})(e)}return((e,t)=>{let n,r=!0;const o=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}})(e,t)})(r,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(r)}const _=e(new WeakMap),$=/^(?:plaintext|script|style|textarea|title|xmp)$/i,z=(e,n)=>{const r=((e,n,r)=>{const o=[],{length:a}=e;for(let n=1;n<a;n++){const r=e[n-1];o.push(t.test(r)&&s(e,n)?r.replace(t,((e,t,r)=>`isµ${n-1}=${r||'"'}${t}${r?"":'"'}`)):`${r}\x3c!--isµ${n-1}--\x3e`)}o.push(e[a-1]);const l=o.join("").trim();return r?l:l.replace(i,c)})(n,0,"svg"===e),o=w(r,e),a=v(o),l=[],u=n.length-1;let d=0,p=`isµ${d}`;for(;d<u;){const e=a.nextNode();if(!e)throw`bad template: ${r}`;if(8===e.nodeType)e.nodeValue===p&&(l.push({type:"node",path:g(e)}),p="isµ"+ ++d);else{for(;e.hasAttribute(p);)l.push({type:"attr",path:g(e),name:e.getAttribute(p)}),e.removeAttribute(p),p="isµ"+ ++d;$.test(e.tagName)&&e.textContent.trim()===`\x3c!--${p}--\x3e`&&(e.textContent="",l.push({type:"text",path:g(e)}),p="isµ"+ ++d)}}return{content:o,nodes:l}},S=(e,{type:t,template:n,values:r})=>{const{length:o}=r;E(e,r,o);let{entry:i}=e;i&&i.template===n&&i.type===t||(e.entry=i=((e,t)=>{const{content:n,updates:r}=((e,t)=>{const{content:n,nodes:r}=_.get(t)||_.set(t,z(e,t)),o=b.call(document,n,!0);return{content:o,updates:r.map(k,o)}})(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:a,updates:s,wire:c}=i;for(let e=0;e<o;e++)s[e](r[e]);return c||(i.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=d.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(a))},E=({stack:e},t,n)=>{for(let r=0;r<n;r++){const n=t[r];n instanceof C?t[r]=S(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):l(n)?E(e[r]||(e[r]={stack:[],entry:null,wire:null}),n,n.length):e[r]=null}n<e.length&&e.splice(n)};function C(e,t,n){this.type=e,this.template=t,this.values=n}const{create:M,defineProperties:R}=Object,N=t=>{const n=e(new WeakMap);return R(((e,...n)=>new C(t,e,n)),{for:{value(e,r){const o=n.get(e)||n.set(e,M(null));return o[r]||(o[r]=(e=>(n,...r)=>S(e,{type:t,template:n,values:r}))({stack:[],entry:null,wire:null}))}},node:{value:(e,...n)=>S({stack:[],entry:null,wire:null},{type:t,template:e,values:n}).valueOf()}})},A=e(new WeakMap),O=N("html");N("svg");const j={},L=()=>{},T=Object.assign,U=Object.prototype.hasOwnProperty,D=(e,t)=>U.call(e,t),F=Array.isArray,I=e=>"[object Map]"===V(e),B=e=>"function"==typeof e,P=e=>"symbol"==typeof e,W=e=>null!==e&&"object"==typeof e,H=Object.prototype.toString,V=e=>H.call(e),Y=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=(e,t)=>e!==t&&(e==e||t==t),X=new WeakMap,K=[];let J;const G=Symbol(""),Q=Symbol("");function Z(e,t=j){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!K.includes(n)){!function(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}(n);try{return ne.push(te),te=!0,K.push(n),J=n,e()}finally{K.pop(),re(),J=K[K.length-1]}}};return n.id=ee++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}let ee=0;let te=!0;const ne=[];function re(){const e=ne.pop();te=void 0===e||e}function oe(e,t,n){if(!te||void 0===J)return;let r=X.get(e);r||X.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(J)||(o.add(J),J.deps.push(o))}function ie(e,t,n,r,o,i){const a=X.get(e);if(!a)return;const s=new Set,c=e=>{e&&e.forEach((e=>{(e!==J||e.allowRecurse)&&s.add(e)}))};if("clear"===t)a.forEach(c);else if("length"===n&&F(e))a.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(a.get(n)),t){case"add":F(e)?Y(n)&&c(a.get("length")):(c(a.get(G)),I(e)&&c(a.get(Q)));break;case"delete":F(e)||(c(a.get(G)),I(e)&&c(a.get(Q)));break;case"set":I(e)&&c(a.get(G))}s.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const ae=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(P)),se=pe(),ce=pe(!1,!0),le=pe(!0),ue=pe(!0,!0),de={};function pe(e=!1,t=!1){return function(n,r,o){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&o===(e?Ue:Te).get(n))return n;const i=F(n);if(!e&&i&&D(de,r))return Reflect.get(de,r,o);const a=Reflect.get(n,r,o);return(P(r)?ae.has(r):"__proto__"===r||"__v_isRef"===r)?a:(e||oe(n,0,r),t?a:Pe(a)?i&&Y(r)?a:a.value:W(a)?e?Fe(a):De(a):a)}}function he(e=!1){return function(t,n,r,o){const i=t[n];if(!e&&(r=Be(r),!F(t)&&Pe(i)&&!Pe(r)))return i.value=r,!0;const a=F(t)&&Y(n)?Number(n)<t.length:D(t,n),s=Reflect.set(t,n,r,o);return t===Be(o)&&(a?q(r,i)&&ie(t,"set",n,r):ie(t,"add",n,r)),s}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];de[e]=function(...e){const n=Be(this);for(let e=0,t=this.length;e<t;e++)oe(n,0,e+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(Be)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];de[e]=function(...e){ne.push(te),te=!1;const n=t.apply(this,e);return re(),n}}));const fe={get:se,set:he(),deleteProperty:function(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ie(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return P(t)&&ae.has(t)||oe(e,0,t),n},ownKeys:function(e){return oe(e,0,F(e)?"length":G),Reflect.ownKeys(e)}},ge={get:le,set:(e,t)=>!0,deleteProperty:(e,t)=>!0};T({},fe,{get:ce,set:he(!0)}),T({},ge,{get:ue});const me=e=>W(e)?De(e):e,be=e=>W(e)?Fe(e):e,ye=e=>e,we=e=>Reflect.getPrototypeOf(e);function ve(e,t,n=!1,r=!1){const o=Be(e=e.__v_raw),i=Be(t);t!==i&&!n&&oe(o,0,t),!n&&oe(o,0,i);const{has:a}=we(o),s=n?be:r?ye:me;return a.call(o,t)?s(e.get(t)):a.call(o,i)?s(e.get(i)):void 0}function xe(e,t=!1){const n=this.__v_raw,r=Be(n),o=Be(e);return e!==o&&!t&&oe(r,0,e),!t&&oe(r,0,o),e===o?n.has(e):n.has(e)||n.has(o)}function ke(e,t=!1){return e=e.__v_raw,!t&&oe(Be(e),0,G),Reflect.get(e,"size",e)}function _e(e){e=Be(e);const t=Be(this),n=we(t).has.call(t,e);return t.add(e),n||ie(t,"add",e,e),this}function $e(e,t){t=Be(t);const n=Be(this),{has:r,get:o}=we(n);let i=r.call(n,e);i||(e=Be(e),i=r.call(n,e));const a=o.call(n,e);return n.set(e,t),i?q(t,a)&&ie(n,"set",e,t):ie(n,"add",e,t),this}function ze(e){const t=Be(this),{has:n,get:r}=we(t);let o=n.call(t,e);o||(e=Be(e),o=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&ie(t,"delete",e,void 0),i}function Se(){const e=Be(this),t=0!==e.size,n=e.clear();return t&&ie(e,"clear",void 0,void 0),n}function Ee(e,t){return function(n,r){const o=this,i=o.__v_raw,a=Be(i),s=e?be:t?ye:me;return!e&&oe(a,0,G),i.forEach(((e,t)=>n.call(r,s(e),s(t),o)))}}function Ce(e,t,n){return function(...r){const o=this.__v_raw,i=Be(o),a=I(i),s="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,l=o[e](...r),u=t?be:n?ye:me;return!t&&oe(i,0,c?Q:G),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Me(e){return function(...t){return"delete"!==e&&this}}const Re={get(e){return ve(this,e)},get size(){return ke(this)},has:xe,add:_e,set:$e,delete:ze,clear:Se,forEach:Ee(!1,!1)},Ne={get(e){return ve(this,e,!1,!0)},get size(){return ke(this)},has:xe,add:_e,set:$e,delete:ze,clear:Se,forEach:Ee(!1,!0)},Ae={get(e){return ve(this,e,!0)},get size(){return ke(this,!0)},has(e){return xe.call(this,e,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Ee(!0,!1)};function Oe(e,t){const n=t?Ne:e?Ae:Re;return(t,r,o)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(D(n,r)&&r in t?n:t,r,o)}["keys","values","entries",Symbol.iterator].forEach((e=>{Re[e]=Ce(e,!1,!1),Ae[e]=Ce(e,!0,!1),Ne[e]=Ce(e,!1,!0)}));const je={get:Oe(!1,!1)},Le={get:Oe(!0,!1)},Te=new WeakMap,Ue=new WeakMap;function De(e){return e&&e.__v_isReadonly?e:Ie(e,!1,fe,je)}function Fe(e){return Ie(e,!0,ge,Le)}function Ie(e,t,n,r){if(!W(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=t?Ue:Te,i=o.get(e);if(i)return i;const a=function(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>V(e).slice(8,-1))(e))}(e);if(0===a)return e;const s=new Proxy(e,2===a?r:n);return o.set(e,s),s}function Be(e){return e&&Be(e.__v_raw)||e}function Pe(e){return Boolean(e&&!0===e.__v_isRef)}class We{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Z(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,ie(Be(this),"set","value"))}}),this.__v_isReadonly=n}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),oe(Be(this),0,"value"),this._value}set value(e){this._setter(e)}}function He(e){let t,n;return B(e)?(t=e,n=L):(t=e.get,n=e.set),new We(t,n,B(e)||!e.set)}const Ve=e=>{e?.forEach((e=>e()))},Ye=e=>t=>{e.dispatchEvent(t)},qe=({name:e,setup:t,propDefs:n=[],useShadowDOM:r=!0})=>{customElements.define(e,class extends HTMLElement{static get observedAttributes(){return n}constructor(){super(),Ve(this.hookBeforeCreate),Ve(this.hookCreated);const e=this.props=De({});n.forEach((e=>{Object.defineProperty(this,e,{get(){return this.props[e]},set(t){this.props[e]=t}})}));const o=r?this.slots=De({}):void 0,i=this.template=t.call(this,{props:e,ctx:this,emit:Ye(this),refs:De({}),...o?{slots:o}:{}});this.useShadowDOM=r;const a=this.root=r?this.attachShadow({mode:"closed"}):this;this.render=()=>{((e,t)=>{const n="function"==typeof t?t():t,r=A.get(e)||A.set(e,{stack:[],entry:null,wire:null}),o=n instanceof C?S(r,n):n;o!==r.wire&&(r.wire=o,e.textContent="",e.appendChild(o.valueOf()))})(a,i())},Ve(this.hookBeforeMount),this.isMounted=!1,this.effectCallback=()=>{this.isMounted&&Ve(this.hookBeforeUpdate),this.render(),this.isMounted?Ve(this.hookUpdated):this.mounted=!0},r&&Z(this.effectCallback)}connectedCallback(){this.useShadowDOM||Z(this.effectCallback),Ve(this.hookMounted),this.useShadowDOM&&this.querySelectorAll("[slot]").forEach((e=>{this.slots[e.getAttribute("slot")]=e}))}disconnectedCallback(){Ve(this.hookUnmounted)}attributeChangedCallback(e,t,n){let r;try{r=JSON.parse(n)}catch(e){r=n}this[e]=r}})};var Xe,Ke=new Uint8Array(16);function Je(){if(!Xe&&!(Xe="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xe(Ke)}var Ge=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Qe(e){return"string"==typeof e&&Ge.test(e)}for(var Ze=[],et=0;et<256;++et)Ze.push((et+256).toString(16).substr(1));function tt(e,t,n){var r=(e=e||{}).random||(e.rng||Je)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Ze[e[t+0]]+Ze[e[t+1]]+Ze[e[t+2]]+Ze[e[t+3]]+"-"+Ze[e[t+4]]+Ze[e[t+5]]+"-"+Ze[e[t+6]]+Ze[e[t+7]]+"-"+Ze[e[t+8]]+Ze[e[t+9]]+"-"+Ze[e[t+10]]+Ze[e[t+11]]+Ze[e[t+12]]+Ze[e[t+13]]+Ze[e[t+14]]+Ze[e[t+15]]).toLowerCase();if(!Qe(n))throw TypeError("Stringified UUID is invalid");return n}(r)}const nt=()=>O`<style>${"/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder, textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder, textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.ce-container{width:100%}@media (min-width:640px){.ce-container{max-width:640px}}@media (min-width:768px){.ce-container{max-width:768px}}@media (min-width:1024px){.ce-container{max-width:1024px}}@media (min-width:1280px){.ce-container{max-width:1280px}}@media (min-width:1536px){.ce-container{max-width:1536px}}.ce-bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.ce-bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.ce-bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.ce-rounded-none{border-radius:0}.ce-border-2{border-width:2px}.ce-border{border-width:1px}.ce-block{display:block}.ce-flex{display:flex}.ce-justify-between{justify-content:space-between}.ce-font-normal{font-weight:400}.ce-h-12{height:3rem}.ce-h-14{height:3.5rem}.ce-text-xs{font-size:.75rem;line-height:1rem}.ce-text-sm{font-size:.875rem;line-height:1.25rem}.ce-mt-4{margin-top:1rem}.ce-mb-4{margin-bottom:1rem}.ce-opacity-60{opacity:.6}.ce-outline-none{outline:2px solid transparent;outline-offset:2px}.ce-p-4{padding:1rem}.ce-px-1{padding-left:.25rem;padding-right:.25rem}.ce-py-3{padding-top:.75rem;padding-bottom:.75rem}.ce-px-4{padding-left:1rem;padding-right:1rem}.ce-py-6{padding-top:1.5rem;padding-bottom:1.5rem}.ce-pr-2{padding-right:.5rem}.ce-pb-3{padding-bottom:.75rem}.ce-pl-4{padding-left:1rem}.ce-pt-6{padding-top:1.5rem}.ce-placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(156,163,175,var(--tw-placeholder-opacity))}.ce-placeholder-gray-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(156,163,175,var(--tw-placeholder-opacity))}.ce-placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgba(156,163,175,var(--tw-placeholder-opacity))}.ce-pointer-events-none{pointer-events:none}.ce-fixed{position:fixed}.ce-absolute{position:absolute}.ce-relative{position:relative}.ce-inset-0{top:0;right:0;bottom:0;left:0}.ce-left-3{left:.75rem}*{--tw-shadow:0 0 transparent}.ce-shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.ce-text-gray-500{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.ce-text-gray-700{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.ce-text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.ce-select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-w-full{width:100%}.ce-z-50{z-index:50}.ce-transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.ce-origin-left{transform-origin:left}.ce-translate-y-4{--tw-translate-y:1rem}.ce--translate-y-1\\/2{--tw-translate-y:-50%}.ce-transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ce-transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ce-duration-150,.ce-transition{transition-duration:.15s}@-webkit-keyframes ce-spin{to{transform:rotate(1turn)}}@keyframes ce-spin{to{transform:rotate(1turn)}}@-webkit-keyframes ce-ping{75%,to{transform:scale(2);opacity:0}}@keyframes ce-ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes ce-pulse{50%{opacity:.5}}@keyframes ce-pulse{50%{opacity:.5}}@-webkit-keyframes ce-bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes ce-bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}"}</style>`;var rt=({name:e="ui-input"}={name:"ui-input"})=>{qe({name:e,setup:({props:e,refs:t,ctx:n})=>{const r=De({isFocused:!1,id:`id-${tt()}`}),o=({target:e})=>{n.value=e.value},i=()=>{r.isFocused=!0},a=()=>{r.isFocused=!1},s=({code:e})=>{"Escape"===e&&t.input?.blur()},c=He((()=>!!e.value)),l=He((()=>{let t="";return r.isFocused||c.value?(t="ce--translate-y-1/2 ce-bg-white ce-text-xs",r.isFocused&&(t+=" ce-text-blue"),c.value&&(t+=" ce-text-gray-500")):t=e.placeholder?"ce--translate-y-1/2 ce-bg-white ce-text-xs ce-text-gray-700":"ce-text-gray-500 ce-translate-y-4 ce-text-sm",`ce-absolute ce-px-1 ce-font-normal ce-transition-all ce-duration-150 ce-origin-left ce-transform ce-pointer-events-none ce-select-none ce-left-3 ${t}`})),u=He((()=>`ce-block ce-w-full ce-text-gray-900 ce-placeholder-gray-400 ce-transition ce-duration-150 ce-rounded-none ce-outline-none ce-h-14 ce-hover:border-blue ${r.isFocused?"ce-border-2 ce-border-blue ce-p-inputFocused":"ce-border ce-p-4"}`));return()=>O`
        ${nt()}
        <style>
          html {
            font-size: initial;
          }

          .ce-p-inputFocused {
            padding: 16px 15px;
          }
        </style>
        <div class="ce-relative">
          <label class=${l.value} for=${r.id}
            >${e.label}</label
          >
          <input
            id=${r.id}
            value=${e.value||(e.value="")}
            readonly=${e.readonly}
            oninput=${o}
            onfocus=${i}
            onblur=${a}
            onkeyup=${s}
            class=${u.value}
            type=${e.type||"text"}
            autocomplete=${e.autocomplete}
            placeholder=${e.placeholder}
            ref=${e=>t.input=e}
          />
        </div>
      `},propDefs:["type","value","label","placeholder","autofocus","readonly","autocomplete"],useShadowDOM:!1})},ot=({name:e="ui-dialog"}={name:"ui-dialog"})=>{qe({name:e,setup:({slots:e,emit:t})=>()=>O`
        ${nt()}
        <div class="ce-fixed ce-inset-0 ce-z-50" role="dialog">
          <div
            class="ce-fixed ce-inset-0 ce-bg-black ce-opacity-60"
            data-test="background"
            onclick=${()=>t(new Event("close"))}
          ></div>
          <div
            class="ce-container ce-fixed ce-bg-white ce-shadow-lg"
            style="left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 600px; width: calc(100% - 2rem);"
          >
            ${e.header?O`
                  <header
                    class="ce-flex ce-itemsce-nter ce-justify-between ce-h-12 ce-py-3 ce-pl-4 ce-pr-2 ce-bg-gray-100 ce-lg:h-14 ce-lg:pr-3 ce-lg:pl-6 ce-lg:py-4"
                  >
                    <slot name="header"></slot>
                  </header>
                `:""}
            <main class="ce-px-4 ce-pt-6 ce-pb-3 ce-lg:px-6">
              <slot></slot>
            </main>
            ${e.footer?O`
                  <footer
                    class="ce-flex ce-justify-between ce-px-4 ce-py-6 ce-lg:px-6"
                  >
                    <slot name="footer"></slot>
                  </footer>
                `:""}
          </div>
        </div>
      `})};export{ot as defineUiDialog,rt as defineUiInput};
//# sourceMappingURL=index.esm.js.map
