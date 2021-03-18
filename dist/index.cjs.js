"use strict";function e(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(exports,"__esModule",{value:!0});var n=e=>({get:t=>e.get(t),set:(t,r)=>(e.set(t,r),r)}),a=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,o=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,i=/<[a-z][^>]+$/i,c=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,s=/\s+$/,u=(e,t)=>0<t--&&(i.test(e[t])||!c.test(e[t])&&u(e,t)),d=(e,t,r)=>o.test(t)?e:"<".concat(t).concat(r.replace(s,""),"></").concat(t,">"),{isArray:p}=Array,{indexOf:h,slice:f}=[],g=(e,t)=>111===e.nodeType?1/t<0?t?(e=>{var{firstChild:t,lastChild:r}=e,n=document.createRange();return n.setStartAfter(t),n.setEndAfter(r),n.deleteContents(),t})(e):e.lastChild:t?e.valueOf():e.firstChild:e,b=function(e){var t="fragment",r="template",n="content"in o(r)?function(e){var t=o(r);return t.innerHTML=e,t.content}:function(e){var n=o(t),i=o(r),c=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var l=RegExp.$1;i.innerHTML="<table>"+e+"</table>",c=i.querySelectorAll(l)}else i.innerHTML=e,c=i.childNodes;return a(n,c),n};return function(e,t){return("svg"===t?i:n)(e)};function a(e,t){for(var r=t.length;r--;)e.appendChild(t[0])}function o(r){return r===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",r)}function i(e){var r=o(t),n=o("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",a(r,n.firstChild.childNodes),r}}(document),m=(e,t)=>{var{childNodes:r}=e;return r[t]},v=e=>{for(var t=[],{parentNode:r}=e;r;)t.push(h.call(r.childNodes,e)),r=(e=r).parentNode;return t},{createTreeWalker:y,importNode:w}=document,x=1!=w.length,k=x?(e,t,r)=>w.call(document,b(e,t,r),!0):b,_=x?e=>y.call(document,e,129,null,!1):e=>y.call(document,e,129),z=(e,t,r)=>((e,t,r,n,a)=>{for(var o=r.length,i=t.length,c=o,l=0,s=0,u=null;l<i||s<c;)if(i===l)for(var d=c<o?s?n(r[s-1],-0).nextSibling:n(r[c-s],0):a;s<c;)e.insertBefore(n(r[s++],1),d);else if(c===s)for(;l<i;)u&&u.has(t[l])||e.removeChild(n(t[l],-1)),l++;else if(t[l]===r[s])l++,s++;else if(t[i-1]===r[c-1])i--,c--;else if(t[l]===r[c-1]&&r[s]===t[i-1]){var p=n(t[--i],-1).nextSibling;e.insertBefore(n(r[s++],1),n(t[l++],-1).nextSibling),e.insertBefore(n(r[--c],1),p),t[i]=r[c]}else{if(!u){u=new Map;for(var h=s;h<c;)u.set(r[h],h++)}if(u.has(t[l])){var f=u.get(t[l]);if(s<f&&f<c){for(var g=l,b=1;++g<i&&g<c&&u.get(t[g])===f+b;)b++;if(b>f-s)for(var m=n(t[l],0);s<f;)e.insertBefore(n(r[s++],1),m);else e.replaceChild(n(r[s++],1),n(t[l++],-1))}else l++}else e.removeChild(n(t[l++],-1))}return r})(e.parentNode,t,r,g,e);function O(e){var{type:t,path:r}=e,n=r.reduceRight(m,this);return"node"===t?(e=>{var t,r,n=[],a=o=>{switch(typeof o){case"string":case"number":case"boolean":t!==o&&(t=o,r?r.nodeValue=o:r=document.createTextNode(o),n=z(e,n,[r]));break;case"function":a(o(e));break;case"object":case"undefined":if(null==o){t!=o&&(t=o,n=z(e,n,[]));break}if(p(o)){t=o,0===o.length?n=z(e,n,[]):"object"==typeof o[0]?n=z(e,n,o):a(String(o));break}"ELEMENT_NODE"in o&&t!==o&&(t=o,n=z(e,n,11===o.nodeType?f.call(o.childNodes):[o]))}};return a})(n):"attr"===t?((e,t)=>{switch(t[0]){case"?":return((e,t,r)=>n=>{r!==!!n&&((r=!!n)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1),!1);case".":return((e,t)=>"dataset"===t?(e=>{var{dataset:t}=e;return e=>{for(var r in e){var n=e[r];null==n?delete t[r]:t[r]=n}}})(e):r=>{e[t]=r})(e,t.slice(1));case"o":if("n"===t[1])return((e,t)=>{var r,n=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{var a=p(t)?t:[t,!1];r!==a[0]&&(r&&e.removeEventListener(n,r,a[1]),(r=a[0])&&e.addEventListener(n,r,a[1]))}})(e,t)}switch(t){case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case"aria":return(e=>t=>{for(var r in t){var n="role"===r?r:"aria-".concat(r),a=t[r];null==a?e.removeAttribute(n):e.setAttribute(n,a)}})(e)}return((e,t)=>{var r,n=!0,a=document.createAttributeNS(null,t);return t=>{r!==t&&(null==(r=t)?n||(e.removeAttributeNode(a),n=!0):(a.value=t,n&&(e.setAttributeNodeNS(a),n=!1)))}})(e,t)})(n,e.name):(e=>{var t;return r=>{t!=r&&(t=r,e.textContent=null==r?"":r)}})(n)}var E=n(new WeakMap),C=/^(?:plaintext|script|style|textarea|title|xmp)$/i,S=(e,t)=>{for(var r=((e,t,r)=>{for(var n=[],{length:o}=e,i=function(t){var r=e[t-1];n.push(a.test(r)&&u(e,t)?r.replace(a,((e,r,n)=>"".concat("isµ").concat(t-1,"=").concat(n||'"').concat(r).concat(n?"":'"'))):"".concat(r,"\x3c!--").concat("isµ").concat(t-1,"--\x3e"))},c=1;c<o;c++)i(c);n.push(e[o-1]);var s=n.join("").trim();return r?s:s.replace(l,d)})(t,0,"svg"===e),n=k(r,e),o=_(n),i=[],c=t.length-1,s=0,p="".concat("isµ").concat(s);s<c;){var h=o.nextNode();if(!h)throw"bad template: ".concat(r);if(8===h.nodeType)h.nodeValue===p&&(i.push({type:"node",path:v(h)}),p="".concat("isµ").concat(++s));else{for(;h.hasAttribute(p);)i.push({type:"attr",path:v(h),name:h.getAttribute(p)}),h.removeAttribute(p),p="".concat("isµ").concat(++s);C.test(h.tagName)&&h.textContent.trim()==="\x3c!--".concat(p,"--\x3e")&&(h.textContent="",i.push({type:"text",path:v(h)}),p="".concat("isµ").concat(++s))}}return{content:n,nodes:i}},j=(e,t)=>{var{type:r,template:n,values:a}=t,{length:o}=a;M(e,a,o);var{entry:i}=e;i&&i.template===n&&i.type===r||(e.entry=i=((e,t)=>{var{content:r,updates:n}=((e,t)=>{var{content:r,nodes:n}=E.get(t)||E.set(t,S(e,t)),a=w.call(document,r,!0);return{content:a,updates:n.map(O,a)}})(e,t);return{type:e,template:t,content:r,updates:n,wire:null}})(r,n));for(var{content:c,updates:l,wire:s}=i,u=0;u<o;u++)l[u](a[u]);return s||(i.wire=(e=>{var{childNodes:t}=e,{length:r}=t;if(r<2)return r?t[0]:e;var n=f.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:n[0],lastChild:n[r-1],valueOf(){if(t.length!==r)for(var a=0;a<r;)e.appendChild(n[a++]);return e}}})(c))},M=(e,t,r)=>{for(var{stack:n}=e,a=0;a<r;a++){var o=t[a];o instanceof R?t[a]=j(n[a]||(n[a]={stack:[],entry:null,wire:null}),o):p(o)?M(n[a]||(n[a]={stack:[],entry:null,wire:null}),o,o.length):n[a]=null}r<n.length&&n.splice(r)};function R(e,t,r){this.type=e,this.template=t,this.values=r}var A,{create:N,defineProperties:P}=Object,L=e=>{var t=n(new WeakMap);return P((function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return new R(e,t,n)}),{for:{value(r,n){var a=t.get(r)||t.set(r,N(null));return a[n]||(a[n]=(t=>function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return j(t,{type:e,template:r,values:a})})({stack:[],entry:null,wire:null}))}},node:{value:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return j({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}}})},D=n(new WeakMap),T=L("html");L("svg");var I={},F=()=>{},U=Object.assign,B=Object.prototype.hasOwnProperty,W=(e,t)=>B.call(e,t),$=Array.isArray,H=e=>"[object Map]"===K(e),V=e=>"function"==typeof e,Y=e=>"symbol"==typeof e,q=e=>null!==e&&"object"==typeof e,X=Object.prototype.toString,K=e=>X.call(e),J=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=(e,t)=>e!==t&&(e==e||t==t),Q=new WeakMap,Z=[],ee=Symbol(""),te=Symbol("");function re(e){return e&&!0===e._isEffect}function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;re(e)&&(e=e.raw);var r=oe(e,t);return t.lazy||r(),r}var ae=0;function oe(e,t){var r=function r(){if(!r.active)return t.scheduler?void 0:e();if(!Z.includes(r)){!function(e){var{deps:t}=e;if(t.length){for(var r=0;r<t.length;r++)t[r].delete(e);t.length=0}}(r);try{return ce.push(ie),ie=!0,Z.push(r),A=r,e()}finally{Z.pop(),se(),A=Z[Z.length-1]}}};return r.id=ae++,r.allowRecurse=!!t.allowRecurse,r._isEffect=!0,r.active=!0,r.raw=e,r.deps=[],r.options=t,r}var ie=!0,ce=[];function le(){ce.push(ie),ie=!1}function se(){var e=ce.pop();ie=void 0===e||e}function ue(e,t,r){if(ie&&void 0!==A){var n=Q.get(e);n||Q.set(e,n=new Map);var a=n.get(r);a||n.set(r,a=new Set),a.has(A)||(a.add(A),A.deps.push(a))}}function de(e,t,r,n,a,o){var i=Q.get(e);if(i){var c=new Set,l=e=>{e&&e.forEach((e=>{(e!==A||e.allowRecurse)&&c.add(e)}))};if("clear"===t)i.forEach(l);else if("length"===r&&$(e))i.forEach(((e,t)=>{("length"===t||t>=n)&&l(e)}));else switch(void 0!==r&&l(i.get(r)),t){case"add":$(e)?J(r)&&l(i.get("length")):(l(i.get(ee)),H(e)&&l(i.get(te)));break;case"delete":$(e)||(l(i.get(ee)),H(e)&&l(i.get(te)));break;case"set":H(e)&&l(i.get(ee))}c.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}}var pe=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(Y)),he=ve(),fe=ve(!1,!0),ge=ve(!0),be=ve(!0,!0),me={};function ve(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r,n,a){if("__v_isReactive"===n)return!e;if("__v_isReadonly"===n)return e;if("__v_raw"===n&&a===(e?$e:We).get(r))return r;var o=$(r);if(!e&&o&&W(me,n))return Reflect.get(me,n,a);var i=Reflect.get(r,n,a);return(Y(n)?pe.has(n):"__proto__"===n||"__v_isRef"===n)?i:(e||ue(r,0,n),t?i:Xe(i)?o&&J(n)?i:i.value:q(i)?e?Ve(i):He(i):i)}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,r,n,a){var o=t[r];if(!e&&(n=qe(n),!$(t)&&Xe(o)&&!Xe(n)))return o.value=n,!0;var i=$(t)&&J(r)?Number(r)<t.length:W(t,r),c=Reflect.set(t,r,n,a);return t===qe(a)&&(i?G(n,o)&&de(t,"set",r,n):de(t,"add",r,n)),c}}["includes","indexOf","lastIndexOf"].forEach((e=>{var t=Array.prototype[e];me[e]=function(){for(var e=qe(this),r=0,n=this.length;r<n;r++)ue(e,0,r+"");for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];var c=t.apply(e,o);return-1===c||!1===c?t.apply(e,o.map(qe)):c}})),["push","pop","shift","unshift","splice"].forEach((e=>{var t=Array.prototype[e];me[e]=function(){le();for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=t.apply(this,r);return se(),a}}));var we={get:he,set:ye(),deleteProperty:function(e,t){var r=W(e,t);e[t];var n=Reflect.deleteProperty(e,t);return n&&r&&de(e,"delete",t,void 0),n},has:function(e,t){var r=Reflect.has(e,t);return Y(t)&&pe.has(t)||ue(e,0,t),r},ownKeys:function(e){return ue(e,0,$(e)?"length":ee),Reflect.ownKeys(e)}},xe={get:ge,set:(e,t)=>!0,deleteProperty:(e,t)=>!0};U({},we,{get:fe,set:ye(!0)}),U({},xe,{get:be});var ke=e=>q(e)?He(e):e,_e=e=>q(e)?Ve(e):e,ze=e=>e,Oe=e=>Reflect.getPrototypeOf(e);function Ee(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=qe(e=e.__v_raw),o=qe(t);t!==o&&!r&&ue(a,0,t),!r&&ue(a,0,o);var{has:i}=Oe(a),c=r?_e:n?ze:ke;return i.call(a,t)?c(e.get(t)):i.call(a,o)?c(e.get(o)):void 0}function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.__v_raw,n=qe(r),a=qe(e);return e!==a&&!t&&ue(n,0,e),!t&&ue(n,0,a),e===a?r.has(e):r.has(e)||r.has(a)}function Se(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.__v_raw,!t&&ue(qe(e),0,ee),Reflect.get(e,"size",e)}function je(e){e=qe(e);var t=qe(this),r=Oe(t).has.call(t,e);return t.add(e),r||de(t,"add",e,e),this}function Me(e,t){t=qe(t);var r=qe(this),{has:n,get:a}=Oe(r),o=n.call(r,e);o||(e=qe(e),o=n.call(r,e));var i=a.call(r,e);return r.set(e,t),o?G(t,i)&&de(r,"set",e,t):de(r,"add",e,t),this}function Re(e){var t=qe(this),{has:r,get:n}=Oe(t),a=r.call(t,e);a||(e=qe(e),a=r.call(t,e)),n&&n.call(t,e);var o=t.delete(e);return a&&de(t,"delete",e,void 0),o}function Ae(){var e=qe(this),t=0!==e.size,r=e.clear();return t&&de(e,"clear",void 0,void 0),r}function Ne(e,t){return function(r,n){var a=this,o=a.__v_raw,i=qe(o),c=e?_e:t?ze:ke;return!e&&ue(i,0,ee),o.forEach(((e,t)=>r.call(n,c(e),c(t),a)))}}function Pe(e,t,r){return function(){var n=this.__v_raw,a=qe(n),o=H(a),i="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=n[e](...arguments),s=t?_e:r?ze:ke;return!t&&ue(a,0,c?te:ee),{next(){var{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:i?[s(e[0]),s(e[1])]:s(e),done:t}},[Symbol.iterator](){return this}}}}function Le(e){return function(){return"delete"!==e&&this}}var De={get(e){return Ee(this,e)},get size(){return Se(this)},has:Ce,add:je,set:Me,delete:Re,clear:Ae,forEach:Ne(!1,!1)},Te={get(e){return Ee(this,e,!1,!0)},get size(){return Se(this)},has:Ce,add:je,set:Me,delete:Re,clear:Ae,forEach:Ne(!1,!0)},Ie={get(e){return Ee(this,e,!0)},get size(){return Se(this,!0)},has(e){return Ce.call(this,e,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Ne(!0,!1)};function Fe(e,t){var r=t?Te:e?Ie:De;return(t,n,a)=>"__v_isReactive"===n?!e:"__v_isReadonly"===n?e:"__v_raw"===n?t:Reflect.get(W(r,n)&&n in t?r:t,n,a)}["keys","values","entries",Symbol.iterator].forEach((e=>{De[e]=Pe(e,!1,!1),Ie[e]=Pe(e,!0,!1),Te[e]=Pe(e,!1,!0)}));var Ue={get:Fe(!1,!1)},Be={get:Fe(!0,!1)},We=new WeakMap,$e=new WeakMap;function He(e){return e&&e.__v_isReadonly?e:Ye(e,!1,we,Ue)}function Ve(e){return Ye(e,!0,xe,Be)}function Ye(e,t,r,n){if(!q(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;var a=t?$e:We,o=a.get(e);if(o)return o;var i=function(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>K(e).slice(8,-1))(e))}(e);if(0===i)return e;var c=new Proxy(e,2===i?n:r);return a.set(e,c),c}function qe(e){return e&&qe(e.__v_raw)||e}function Xe(e){return Boolean(e&&!0===e.__v_isRef)}class Ke{constructor(e,t,r){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=ne(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,de(qe(this),"set","value"))}}),this.__v_isReadonly=r}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),ue(qe(this),0,"value"),this._value}set value(e){this._setter(e)}}function Je(e){var t,r;return V(e)?(t=e,r=F):(t=e.get,r=e.set),new Ke(t,r,V(e)||!e.set)}var Ge,Qe=e=>{e&&e.forEach((e=>e()))},Ze=e=>t=>{e.dispatchEvent(t)},et=e=>{var{name:n,setup:a,propDefs:o=[],useShadowDOM:i=!0}=e;customElements.define(n,class extends HTMLElement{static get observedAttributes(){return o}constructor(){super(),Qe(this.hookBeforeCreate),Qe(this.hookCreated);var e=this.props=He({});o.forEach((e=>{Object.defineProperty(this,e,{get(){return this.props[e]},set(t){this.props[e]=t}})}));var n=i?this.slots=He({}):void 0,c=this.template=a.call(this,function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({props:e,ctx:this,emit:Ze(this),refs:He({})},n?{slots:n}:{}));this.useShadowDOM=i;var l=this.root=i?this.attachShadow({mode:"closed"}):this;this.render=()=>{((e,t)=>{var r="function"==typeof t?t():t,n=D.get(e)||D.set(e,{stack:[],entry:null,wire:null}),a=r instanceof R?j(n,r):r;a!==n.wire&&(n.wire=a,e.textContent="",e.appendChild(a.valueOf()))})(l,c())},Qe(this.hookBeforeMount),this.isMounted=!1,this.effectCallback=()=>{this.isMounted&&Qe(this.hookBeforeUpdate),this.render(),this.isMounted?Qe(this.hookUpdated):this.mounted=!0},i&&ne(this.effectCallback)}connectedCallback(){this.useShadowDOM||ne(this.effectCallback),Qe(this.hookMounted),this.useShadowDOM&&this.querySelectorAll("[slot]").forEach((e=>{this.slots[e.getAttribute("slot")]=e}))}disconnectedCallback(){Qe(this.hookUnmounted)}attributeChangedCallback(e,t,r){var n;try{n=JSON.parse(r)}catch(e){n=r}this[e]=n}})},tt=new Uint8Array(16);function rt(){if(!Ge&&!(Ge="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ge(tt)}var nt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function at(e){return"string"==typeof e&&nt.test(e)}for(var ot=[],it=0;it<256;++it)ot.push((it+256).toString(16).substr(1));function ct(e,t,r){var n=(e=e||{}).random||(e.rng||rt)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(ot[e[t+0]]+ot[e[t+1]]+ot[e[t+2]]+ot[e[t+3]]+"-"+ot[e[t+4]]+ot[e[t+5]]+"-"+ot[e[t+6]]+ot[e[t+7]]+"-"+ot[e[t+8]]+ot[e[t+9]]+"-"+ot[e[t+10]]+ot[e[t+11]]+ot[e[t+12]]+ot[e[t+13]]+ot[e[t+14]]+ot[e[t+15]]).toLowerCase();if(!at(r))throw TypeError("Stringified UUID is invalid");return r}(n)}var lt,st,ut,dt,pt,ht,ft,gt=()=>T(lt||(lt=e(["\n  <style>\n    ","\n  </style>\n"])),"".concat('@import url("https://rsms.me/inter/inter.css");\n\n/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:Inter,sans-serif;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid #eee}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#bababa}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#bababa}input::placeholder,textarea::placeholder{opacity:1;color:#bababa}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.ce-container{width:100%}@media (min-width:640px){.ce-container{max-width:640px}}@media (min-width:768px){.ce-container{max-width:768px}}@media (min-width:1024px){.ce-container{max-width:1024px}}@media (min-width:1280px){.ce-container{max-width:1280px}}@media (min-width:1600px){.ce-container{max-width:1600px}}.heading-medium{font-size:1rem;line-height:1.5rem;line-height:1.375}.heading-large,.heading-medium{font-family:Inter,sans-serif;font-weight:500}.heading-large{font-size:1.25rem;line-height:1.75rem;line-height:1.5}.caption{font-weight:600;text-transform:uppercase;letter-spacing:.1em}.caption,.text-tiny{font-family:Inter,sans-serif;font-size:.75rem;line-height:1rem;line-height:1.375}.text-small{font-size:.875rem;line-height:1.25rem;line-height:1.5}.text-medium,.text-small{font-family:Inter,sans-serif}.text-medium{font-size:1rem;line-height:1.5rem;line-height:1.5}.text-large{font-family:Inter,sans-serif;font-size:1.25rem;line-height:1.75rem;line-height:1.5}.icon{height:1.5rem;width:1.5rem}.icon,.icon-small{fill:currentColor;transition-property:background-color,border-color,color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.icon-small{height:1rem;width:1rem}.scrolling-disabled{overflow:hidden;touch-action:none;-ms-touch-action:none}.ce-appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ce-bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.ce-bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.ce-bg-gray-100{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.ce-border-blue-default,.hover\\:ce-border-blue-default:hover{--tw-border-opacity:1;border-color:rgba(58,103,229,var(--tw-border-opacity))}.ce-rounded-none{border-radius:0}.ce-border-2{border-width:2px}.ce-border{border-width:1px}.ce-cursor-default{cursor:default}.ce-cursor-pointer{cursor:pointer}.ce-block{display:block}.ce-flex{display:flex}.ce-items-center{align-items:center}.ce-self-center{align-self:center}.ce-justify-between{justify-content:space-between}.ce-font-normal{font-weight:400}.ce-h-0{height:0}.ce-h-12{height:3rem}.ce-h-14{height:3.5rem}.ce-text-xs{font-size:.75rem;line-height:1rem}.ce-text-sm{font-size:.875rem;line-height:1.25rem}.ce-leading-6{line-height:1.5rem}.ce-mt-4{margin-top:1rem}.ce-mb-4{margin-bottom:1rem}.ce-opacity-60{opacity:.6}.ce-outline-none,.focus\\:ce-outline-none:focus{outline:2px solid transparent;outline-offset:2px}.ce-p-4{padding:1rem}.ce-px-1{padding-left:.25rem;padding-right:.25rem}.ce-py-3{padding-top:.75rem;padding-bottom:.75rem}.ce-px-4{padding-left:1rem;padding-right:1rem}.ce-py-6{padding-top:1.5rem;padding-bottom:1.5rem}.ce-pr-2{padding-right:.5rem}.ce-pb-3{padding-bottom:.75rem}.ce-pl-4{padding-left:1rem}.ce-pt-6{padding-top:1.5rem}.ce-placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(186,186,186,var(--tw-placeholder-opacity))}.ce-placeholder-gray-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(186,186,186,var(--tw-placeholder-opacity))}.ce-placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgba(186,186,186,var(--tw-placeholder-opacity))}.ce-pointer-events-none{pointer-events:none}.ce-fixed{position:fixed}.ce-absolute{position:absolute}.ce-relative{position:relative}.ce-inset-0{top:0;right:0;bottom:0;left:0}.ce-left-3{left:.75rem}*{--tw-shadow:0 0 transparent}.ce-shadow-lg{--tw-shadow:0px 4px 6px rgba(0,0,0,0.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.ce-text-gray-400{--tw-text-opacity:1;color:rgba(186,186,186,var(--tw-text-opacity))}.ce-text-gray-500{--tw-text-opacity:1;color:rgba(140,140,140,var(--tw-text-opacity))}.ce-text-gray-700{--tw-text-opacity:1;color:rgba(117,117,117,var(--tw-text-opacity))}.ce-text-gray-900{--tw-text-opacity:1;color:rgba(33,33,33,var(--tw-text-opacity))}.ce-text-blue-default{--tw-text-opacity:1;color:rgba(58,103,229,var(--tw-text-opacity))}.ce-select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-w-0{width:0}.ce-w-full{width:100%}.ce-z-50{z-index:50}.ce-transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.ce-origin-left{transform-origin:left}.ce-translate-y-4{--tw-translate-y:1rem}.ce--translate-y-1\\/2{--tw-translate-y:-50%}.ce-transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ce-transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ce-duration-150,.ce-transition{transition-duration:.15s}@-webkit-keyframes ce-spin{to{transform:rotate(1turn)}}@keyframes ce-spin{to{transform:rotate(1turn)}}@-webkit-keyframes ce-ping{75%,to{transform:scale(2);opacity:0}}@keyframes ce-ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes ce-pulse{50%{opacity:.5}}@keyframes ce-pulse{50%{opacity:.5}}@-webkit-keyframes ce-bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes ce-bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}:host,:root{all:initial;display:block;font-family:Inter,sans-serif;line-height:1.5rem}')),bt=()=>T(ht||(ht=e(["\n  <style>\n    ","\n  </style>\n"])),"".concat('span:before{--tw-border-opacity:1;border-color:rgba(58,103,229,var(--tw-border-opacity));border-width:2px;box-sizing:border-box;display:inline-block;height:1.25rem;width:1.25rem;content:"";transition:border-color .2s,background-color .2s}input:hover+span:before{--tw-border-opacity:1;border-color:rgba(0,25,165,var(--tw-border-opacity))}input:checked:hover+span:before{--tw-bg-opacity:1;background-color:rgba(0,25,165,var(--tw-bg-opacity))}span:not(:empty):before{margin-right:.5rem}input:disabled+span:before{--tw-bg-opacity:1!important;background-color:rgba(186,186,186,var(--tw-bg-opacity))!important;--tw-border-opacity:1!important;border-color:rgba(186,186,186,var(--tw-border-opacity))!important}input:checked+span:before{--tw-bg-opacity:1;background-color:rgba(58,103,229,var(--tw-bg-opacity))}input+span:after{display:block;position:absolute;content:"";height:20px;width:20px}input:checked+span:after{content:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><rect/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.22 15a.834.834 0 01-.608-.262L3.56 10.422A.833.833 0 114.774 9.28L8.21 12.94l7.007-7.668a.834.834 0 011.23 1.123l-7.613 8.333a.832.832 0 01-.61.272H8.22z" fill="%23fff"/></svg>\')}'));exports.defineUiCheckBox=function(){var{name:t="ui-check-box"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"ui-check-box"};et({name:t,setup:t=>{var{props:r,ctx:n}=t;return()=>T(ft||(ft=e(["\n        "," ","\n        <label\n          class=","\n        >\n          <input\n            class=",'\n            type="checkbox"\n            checked=',"\n            disabled=","\n            onchange=",'\n          />\n          <span class="ce-relative ce-flex ce-items-center">\n            <slot></slot>\n          </span>\n        </label>\n      '])),gt(),bt(),"ce-flex ce-self-center ce-text-small ".concat(r.disabled?"ce-text-gray-400 ce-cursor-default":"ce-text-gray-900 ce-cursor-pointer"),"ce-relative ce-self-center ce-w-0 ce-h-0 ce-appearance-none focus:ce-outline-none ".concat(r.disabled?"ce-cursor-default":"ce-cursor-pointer"),r.checked,r.disabled,(e=>{var{target:t}=e;return n.checked=t.checked}))},propDefs:["disabled","checked"]})},exports.defineUiDialog=function(){var{name:t="ui-dialog"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"ui-dialog"};et({name:t,setup:t=>{var{slots:r,emit:n}=t;return()=>T(ut||(ut=e(["\n        ",'\n        <div class="ce-fixed ce-inset-0 ce-z-50" role="dialog">\n          <div\n            class="ce-fixed ce-inset-0 ce-bg-black ce-opacity-60"\n            data-test="background"\n            onclick=','\n          ></div>\n          <div\n            class="ce-container ce-fixed ce-bg-white ce-shadow-lg"\n            style="left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 600px; width: calc(100% - 2rem);"\n          >\n            ','\n            <main class="ce-px-4 ce-pt-6 ce-pb-3 ce-lg:px-6">\n              <slot></slot>\n            </main>\n            ',"\n          </div>\n        </div>\n      "])),gt(),(()=>n(new Event("close"))),r.header?T(dt||(dt=e(['\n                  <header\n                    class="ce-flex ce-itemsce-nter ce-justify-between ce-h-12 ce-py-3 ce-pl-4 ce-pr-2 ce-bg-gray-100 ce-lg:h-14 ce-lg:pr-3 ce-lg:pl-6 ce-lg:py-4"\n                  >\n                    <slot name="header"></slot>\n                  </header>\n                ']))):"",r.footer?T(pt||(pt=e(['\n                  <footer\n                    class="ce-flex ce-justify-between ce-px-4 ce-py-6 ce-lg:px-6"\n                  >\n                    <slot name="footer"></slot>\n                  </footer>\n                ']))):"")}})},exports.defineUiInput=function(){var{name:t="ui-input"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"ui-input"};et({name:t,setup:t=>{var{props:r,refs:n,ctx:a}=t,o=He({isFocused:!1,id:"id-".concat(ct())}),i=Je((()=>!!r.value)),c=Je((()=>{var e="";return o.isFocused||i.value?(e="ce--translate-y-1/2 ce-bg-white ce-text-xs",o.isFocused&&(e+=" ce-text-blue-default"),i.value&&(e+=" ce-text-gray-500")):e=r.placeholder?"ce--translate-y-1/2 ce-bg-white ce-text-xs ce-text-gray-700":"ce-text-gray-500 ce-translate-y-4 ce-text-sm ce-leading-6","".concat("ce-absolute ce-px-1 ce-font-normal ce-transition-all ce-duration-150 ce-origin-left ce-transform ce-pointer-events-none ce-select-none ce-left-3"," ").concat(e)})),l=Je((()=>{var e=o.isFocused?"ce-border-2 ce-border-blue-default ce-p-inputFocused":"ce-border ce-p-4";return"".concat("ce-block ce-w-full ce-text-gray-900 ce-placeholder-gray-400 ce-transition ce-duration-150 ce-rounded-none ce-outline-none ce-h-14 hover:ce-border-blue-default"," ").concat(e)}));return()=>T(st||(st=e(["\n        ","\n        <style>\n          ",'\n        </style>\n        <div class="ce-relative">\n          <label class='," for=","\n            >","</label\n          >\n          <input\n            id=","\n            value=","\n            readonly=","\n            oninput=","\n            onfocus=","\n            onblur=","\n            onkeyup=","\n            class=","\n            type=","\n            autocomplete=","\n            placeholder=","\n            ref=","\n          />\n        </div>\n      "])),gt(),".ce-p-inputFocused {\n            padding: 16px 15px;\n          }",c.value,o.id,r.label,o.id,r.value||(r.value=""),r.readonly,(e=>{var{target:t}=e;return a.value=t.value}),(()=>o.isFocused=!0),(()=>o.isFocused=!1),(e=>{var t,{code:r}=e;return"Escape"===r&&(null===(t=n.input)||void 0===t?void 0:t.blur())}),l.value,r.type||"text",r.autocomplete,r.placeholder,(e=>n.input=e))},propDefs:["type","value","label","placeholder","autofocus","readonly","autocomplete"]})};
//# sourceMappingURL=index.cjs.js.map
