var l0=Object.defineProperty;var c0=(t,e,n)=>e in t?l0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Bn=(t,e,n)=>(c0(t,typeof e!="symbol"?e+"":e,n),n),Xc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var ni=(t,e,n)=>(Xc(t,e,"read from private field"),n?n.call(t):e.get(t)),br=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Mt=(t,e,n)=>(Xc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Il(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ke={},bs=[],xt=()=>{},u0=()=>!1,d0=/^on[^a-z]/,To=t=>d0.test(t),Tl=t=>t.startsWith("onUpdate:"),Le=Object.assign,Sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},h0=Object.prototype.hasOwnProperty,le=(t,e)=>h0.call(t,e),z=Array.isArray,Is=t=>sr(t)==="[object Map]",So=t=>sr(t)==="[object Set]",Zc=t=>sr(t)==="[object Date]",X=t=>typeof t=="function",De=t=>typeof t=="string",Ri=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",fh=t=>ve(t)&&X(t.then)&&X(t.catch),ph=Object.prototype.toString,sr=t=>ph.call(t),f0=t=>sr(t).slice(8,-1),mh=t=>sr(t)==="[object Object]",kl=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Or=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},p0=/-(\w)/g,zt=ko(t=>t.replace(p0,(e,n)=>n?n.toUpperCase():"")),m0=/\B([A-Z])/g,Hs=ko(t=>t.replace(m0,"-$1").toLowerCase()),xo=ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),ia=ko(t=>t?`on${xo(t)}`:""),Pi=(t,e)=>!Object.is(t,e),Mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},g0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_0=t=>{const e=De(t)?Number(t):NaN;return isNaN(e)?t:e};let eu;const Fa=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=De(s)?C0(s):Ht(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(De(t))return t;if(ve(t))return t}}const y0=/;(?![^(]*\))/g,v0=/:([^]+)/,w0=/\/\*[^]*?\*\//g;function C0(t){const e={};return t.replace(w0,"").split(y0).forEach(n=>{if(n){const s=n.split(v0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ge(t){let e="";if(De(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Ge(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b0=Il(E0);function gh(t){return!!t||t===""}function I0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ro(t[s],e[s]);return n}function Ro(t,e){if(t===e)return!0;let n=Zc(t),s=Zc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ri(t),s=Ri(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?I0(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ro(t[o],e[o]))return!1}}return String(t)===String(e)}function _h(t,e){return t.findIndex(n=>Ro(n,e))}const xe=t=>De(t)?t:t==null?"":z(t)||ve(t)&&(t.toString===ph||!X(t.toString))?JSON.stringify(t,yh,2):String(t),yh=(t,e)=>e&&e.__v_isRef?yh(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:So(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!z(e)&&!mh(e)?String(e):e;let ft;class vh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wh(t){return new vh(t)}function T0(t,e=ft){e&&e.active&&e.effects.push(t)}function Ch(){return ft}function S0(t){ft&&ft.cleanups.push(t)}const xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Eh=t=>(t.w&Mn)>0,bh=t=>(t.n&Mn)>0,k0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mn},x0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Eh(i)&&!bh(i)?i.delete(t):e[n++]=i,i.w&=~Mn,i.n&=~Mn}e.length=n}},zr=new WeakMap;let ui=0,Mn=1;const $a=30;let Et;const ns=Symbol(""),Ua=Symbol("");class Rl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,T0(this,s)}run(){if(!this.active)return this.fn();let e=Et,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,Sn=!0,Mn=1<<++ui,ui<=$a?k0(this):tu(this),this.fn()}finally{ui<=$a&&x0(this),Mn=1<<--ui,Et=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(tu(this),this.onStop&&this.onStop(),this.active=!1)}}function tu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const Ih=[];function js(){Ih.push(Sn),Sn=!1}function qs(){const t=Ih.pop();Sn=t===void 0?!0:t}function ct(t,e,n){if(Sn&&Et){let s=zr.get(t);s||zr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=xl()),Th(i)}}function Th(t,e){let n=!1;ui<=$a?bh(t)||(t.n|=Mn,n=!Eh(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function nn(t,e,n,s,i,r){const o=zr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?kl(n)&&a.push(o.get("length")):(a.push(o.get(ns)),Is(t)&&a.push(o.get(Ua)));break;case"delete":z(t)||(a.push(o.get(ns)),Is(t)&&a.push(o.get(Ua)));break;case"set":Is(t)&&a.push(o.get(ns));break}if(a.length===1)a[0]&&Va(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Va(xl(l))}}function Va(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&nu(s);for(const s of n)s.computed||nu(s)}function nu(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function R0(t,e){var n;return(n=zr.get(t))==null?void 0:n.get(e)}const P0=Il("__proto__,__v_isRef,__isVue"),Sh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ri)),A0=Pl(),N0=Pl(!1,!0),O0=Pl(!0),su=M0();function M0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)ct(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js();const s=re(this)[e].apply(this,n);return qs(),s}}),t}function L0(t){const e=re(this);return ct(e,"has",t),e.hasOwnProperty(t)}function Pl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?J0:Ah:e?Ph:Rh).get(s))return s;const o=z(s);if(!t){if(o&&le(su,i))return Reflect.get(su,i,r);if(i==="hasOwnProperty")return L0}const a=Reflect.get(s,i,r);return(Ri(i)?Sh.has(i):P0(i))||(t||ct(s,"get",i),e)?a:Me(a)?o&&kl(i)?a:a.value:ve(a)?t?Oh(a):ir(a):a}}const D0=kh(),F0=kh(!0);function kh(t=!1){return function(n,s,i,r){let o=n[s];if(Ns(o)&&Me(o)&&!Me(i))return!1;if(!t&&(!Hr(i)&&!Ns(i)&&(o=re(o),i=re(i)),!z(n)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=z(n)&&kl(s)?Number(s)<n.length:le(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?Pi(i,o)&&nn(n,"set",s,i):nn(n,"add",s,i)),l}}function $0(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&nn(t,"delete",e,void 0),s}function U0(t,e){const n=Reflect.has(t,e);return(!Ri(e)||!Sh.has(e))&&ct(t,"has",e),n}function V0(t){return ct(t,"iterate",z(t)?"length":ns),Reflect.ownKeys(t)}const xh={get:A0,set:D0,deleteProperty:$0,has:U0,ownKeys:V0},W0={get:O0,set(t,e){return!0},deleteProperty(t,e){return!0}},B0=Le({},xh,{get:N0,set:F0}),Al=t=>t,Po=t=>Reflect.getPrototypeOf(t);function Ir(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&ct(i,"get",e),ct(i,"get",r));const{has:o}=Po(i),a=s?Al:n?Ml:Ai;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Tr(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&ct(s,"has",t),ct(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Sr(t,e=!1){return t=t.__v_raw,!e&&ct(re(t),"iterate",ns),Reflect.get(t,"size",t)}function iu(t){t=re(t);const e=re(this);return Po(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function ru(t,e){e=re(e);const n=re(this),{has:s,get:i}=Po(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Pi(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function ou(t){const e=re(this),{has:n,get:s}=Po(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&nn(e,"delete",t,void 0),r}function au(){const t=re(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function kr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?Al:t?Ml:Ai;return!t&&ct(a,"iterate",ns),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function xr(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=Is(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Al:e?Ml:Ai;return!e&&ct(r,"iterate",l?Ua:ns),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function z0(){const t={get(r){return Ir(this,r)},get size(){return Sr(this)},has:Tr,add:iu,set:ru,delete:ou,clear:au,forEach:kr(!1,!1)},e={get(r){return Ir(this,r,!1,!0)},get size(){return Sr(this)},has:Tr,add:iu,set:ru,delete:ou,clear:au,forEach:kr(!1,!0)},n={get(r){return Ir(this,r,!0)},get size(){return Sr(this,!0)},has(r){return Tr.call(this,r,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:kr(!0,!1)},s={get(r){return Ir(this,r,!0,!0)},get size(){return Sr(this,!0)},has(r){return Tr.call(this,r,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=xr(r,!1,!1),n[r]=xr(r,!0,!1),e[r]=xr(r,!1,!0),s[r]=xr(r,!0,!0)}),[t,n,e,s]}const[H0,j0,q0,K0]=z0();function Nl(t,e){const n=e?t?K0:q0:t?j0:H0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(le(n,i)&&i in s?n:s,i,r)}const G0={get:Nl(!1,!1)},Y0={get:Nl(!1,!0)},Q0={get:Nl(!0,!1)},Rh=new WeakMap,Ph=new WeakMap,Ah=new WeakMap,J0=new WeakMap;function X0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z0(t){return t.__v_skip||!Object.isExtensible(t)?0:X0(f0(t))}function ir(t){return Ns(t)?t:Ol(t,!1,xh,G0,Rh)}function Nh(t){return Ol(t,!1,B0,Y0,Ph)}function Oh(t){return Ol(t,!0,W0,Q0,Ah)}function Ol(t,e,n,s,i){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Z0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function kn(t){return Ns(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function Hr(t){return!!(t&&t.__v_isShallow)}function Mh(t){return kn(t)||Ns(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Ao(t){return Br(t,"__v_skip",!0),t}const Ai=t=>ve(t)?ir(t):t,Ml=t=>ve(t)?Oh(t):t;function Lh(t){Sn&&Et&&(t=re(t),Th(t.dep||(t.dep=xl())))}function Dh(t,e){t=re(t);const n=t.dep;n&&Va(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Ae(t){return Fh(t,!1)}function e1(t){return Fh(t,!0)}function Fh(t,e){return Me(t)?t:new t1(t,e)}class t1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Ai(e)}get value(){return Lh(this),this._value}set value(e){const n=this.__v_isShallow||Hr(e)||Ns(e);e=n?e:re(e),Pi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ai(e),Dh(this))}}function fe(t){return Me(t)?t.value:t}const n1={get:(t,e,n)=>fe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $h(t){return kn(t)?t:new Proxy(t,n1)}function s1(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=r1(t,n);return e}class i1{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return R0(re(this._object),this._key)}}function r1(t,e,n){const s=t[e];return Me(s)?s:new i1(t,e,n)}class o1{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,Dh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return Lh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function a1(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=xt):(s=t.get,i=t.set),new o1(s,i,r||!i,n)}function xn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){No(r,e,n)}return i}function _t(t,e,n,s){if(X(t)){const r=xn(t,e,n,s);return r&&fh(r)&&r.catch(o=>{No(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(_t(t[r],e,n,s));return i}function No(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xn(l,null,10,[t,o,a]);return}}l1(t,n,i,s)}function l1(t,e,n,s=!0){console.error(t)}let Ni=!1,Wa=!1;const Je=[];let Ft=0;const Ts=[];let Yt=null,Gn=0;const Uh=Promise.resolve();let Ll=null;function Dl(t){const e=Ll||Uh;return t?e.then(this?t.bind(this):t):e}function c1(t){let e=Ft+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Oi(Je[s])<t?e=s+1:n=s}return e}function Fl(t){(!Je.length||!Je.includes(t,Ni&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Je.push(t):Je.splice(c1(t.id),0,t),Vh())}function Vh(){!Ni&&!Wa&&(Wa=!0,Ll=Uh.then(Bh))}function u1(t){const e=Je.indexOf(t);e>Ft&&Je.splice(e,1)}function d1(t){z(t)?Ts.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?Gn+1:Gn))&&Ts.push(t),Vh()}function lu(t,e=Ni?Ft+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function Wh(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,s)=>Oi(n)-Oi(s)),Gn=0;Gn<Yt.length;Gn++)Yt[Gn]();Yt=null,Gn=0}}const Oi=t=>t.id==null?1/0:t.id,h1=(t,e)=>{const n=Oi(t)-Oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bh(t){Wa=!1,Ni=!0,Je.sort(h1);const e=xt;try{for(Ft=0;Ft<Je.length;Ft++){const n=Je[Ft];n&&n.active!==!1&&xn(n,null,14)}}finally{Ft=0,Je.length=0,Wh(),Ni=!1,Ll=null,(Je.length||Ts.length)&&Bh()}}function f1(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||ke;h&&(i=n.map(m=>De(m)?m.trim():m)),d&&(i=n.map(g0))}let a,l=s[a=ia(e)]||s[a=ia(zt(e))];!l&&r&&(l=s[a=ia(Hs(e))]),l&&_t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(c,t,6,i)}}function zh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=zh(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ve(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):Le(o,r),ve(t)&&s.set(t,o),o)}function Oo(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Hs(e))||le(t,e))}let qe=null,Mo=null;function jr(t){const e=qe;return qe=t,Mo=t&&t.type.__scopeId||null,e}function Un(t){Mo=t}function Vn(){Mo=null}function $e(t,e=qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wu(-1);const r=jr(e);let o;try{o=t(...i)}finally{jr(r),s._d&&wu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ra(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:w}=t;let I,A;const M=jr(t);try{if(n.shapeFlag&4){const F=i||s;I=Dt(u.call(F,F,d,r,m,h,_)),A=l}else{const F=e;I=Dt(F.length>1?F(r,{attrs:l,slots:a,emit:c}):F(r,null)),A=e.props?l:p1(l)}}catch(F){yi.length=0,No(F,t,1),I=R(yt)}let K=I;if(A&&w!==!1){const F=Object.keys(A),{shapeFlag:Z}=K;F.length&&Z&7&&(o&&F.some(Tl)&&(A=m1(A,o)),K=Ln(K,A))}return n.dirs&&(K=Ln(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),I=K,jr(M),I}const p1=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},m1=(t,e)=>{const n={};for(const s in t)(!Tl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function g1(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Oo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cu(s,o,c):!0:!!o;return!1}function cu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Oo(n,r))return!0}return!1}function _1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const y1=t=>t.__isSuspense;function v1(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):d1(t)}function w1(t,e){return $l(t,null,{flush:"post"})}const Rr={};function $t(t,e,n){return $l(t,e,n)}function $l(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ke){var a;const l=Ch()===((a=Ue)==null?void 0:a.scope)?Ue:null;let c,u=!1,d=!1;if(Me(t)?(c=()=>t.value,u=Hr(t)):kn(t)?(c=()=>t,s=!0):z(t)?(d=!0,u=t.some(F=>kn(F)||Hr(F)),c=()=>t.map(F=>{if(Me(F))return F.value;if(kn(F))return Jn(F);if(X(F))return xn(F,l,2)})):X(t)?e?c=()=>xn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),_t(t,l,3,[m])}:c=xt,e&&s){const F=c;c=()=>Jn(F())}let h,m=F=>{h=M.onStop=()=>{xn(F,l,4)}},_;if(Vi)if(m=xt,e?n&&_t(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const F=pg();_=F.__watcherHandles||(F.__watcherHandles=[])}else return xt;let w=d?new Array(t.length).fill(Rr):Rr;const I=()=>{if(M.active)if(e){const F=M.run();(s||u||(d?F.some((Z,Ce)=>Pi(Z,w[Ce])):Pi(F,w)))&&(h&&h(),_t(e,l,3,[F,w===Rr?void 0:d&&w[0]===Rr?[]:w,m]),w=F)}else M.run()};I.allowRecurse=!!e;let A;i==="sync"?A=I:i==="post"?A=()=>ot(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),A=()=>Fl(I));const M=new Rl(c,A);e?n?I():w=M.run():i==="post"?ot(M.run.bind(M),l&&l.suspense):M.run();const K=()=>{M.stop(),l&&l.scope&&Sl(l.scope.effects,M)};return _&&_.push(K),K}function C1(t,e,n){const s=this.proxy,i=De(t)?t.includes(".")?Hh(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Ue;Os(this);const a=$l(i,r.bind(s),n);return o?Os(o):ss(),a}function Hh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Jn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Jn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(So(t)||Is(t))t.forEach(n=>{Jn(n,e)});else if(mh(t))for(const n in t)Jn(t[n],e);return t}function qr(t,e){const n=qe;if(n===null)return t;const s=Uo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ke]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function zn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(js(),_t(l,n,8,[t.el,a,t,e]),qs())}}function jh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{t.isMounted=!0}),Jh(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],qh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},E1={name:"BaseTransition",props:qh,setup(t,{slots:e}){const n=Hl(),s=jh();let i;return()=>{const r=e.default&&Ul(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==yt){o=w;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return oa(o);const c=uu(o);if(!c)return oa(o);const u=Mi(c,a,s,n);Li(c,u);const d=n.subTree,h=d&&uu(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,m=!0)}if(h&&h.type!==yt&&(!Yn(c,h)||m)){const w=Mi(h,a,s,n);if(Li(h,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},oa(o);l==="in-out"&&c.type!==yt&&(w.delayLeave=(I,A,M)=>{const K=Kh(s,h);K[String(h.key)]=h,I._leaveCb=()=>{A(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},b1=E1;function Kh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Mi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:w,onAppear:I,onAfterAppear:A,onAppearCancelled:M}=e,K=String(t.key),F=Kh(n,t),Z=(L,W)=>{L&&_t(L,s,9,W)},Ce=(L,W)=>{const J=W[1];Z(L,W),z(L)?L.every(_e=>_e.length<=1)&&J():L.length<=1&&J()},Ie={mode:r,persisted:o,beforeEnter(L){let W=a;if(!n.isMounted)if(i)W=w||a;else return;L._leaveCb&&L._leaveCb(!0);const J=F[K];J&&Yn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Z(W,[L])},enter(L){let W=l,J=c,_e=u;if(!n.isMounted)if(i)W=I||l,J=A||c,_e=M||u;else return;let $=!1;const ue=L._enterCb=Ke=>{$||($=!0,Ke?Z(_e,[L]):Z(J,[L]),Ie.delayedLeave&&Ie.delayedLeave(),L._enterCb=void 0)};W?Ce(W,[L,ue]):ue()},leave(L,W){const J=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return W();Z(d,[L]);let _e=!1;const $=L._leaveCb=ue=>{_e||(_e=!0,W(),ue?Z(_,[L]):Z(m,[L]),L._leaveCb=void 0,F[J]===t&&delete F[J])};F[J]=t,h?Ce(h,[L,$]):$()},clone(L){return Mi(L,e,n,s)}};return Ie}function oa(t){if(Lo(t))return t=Ln(t),t.children=null,t}function uu(t){return Lo(t)?t.children?t.children[0]:void 0:t}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ul(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ge?(o.patchFlag&128&&i++,s=s.concat(Ul(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?Ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Gh(t,e){return X(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const gi=t=>!!t.type.__asyncLoader,Lo=t=>t.type.__isKeepAlive;function I1(t,e){Yh(t,"a",e)}function T1(t,e){Yh(t,"da",e)}function Yh(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Do(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Lo(i.parent.vnode)&&S1(s,e,n,i),i=i.parent}}function S1(t,e,n,s){const i=Do(e,t,s,!0);Fi(()=>{Sl(s[e],i)},n)}function Do(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js(),Os(n);const a=_t(e,n,t,o);return ss(),qs(),a});return s?i.unshift(r):i.push(r),r}}const an=t=>(e,n=Ue)=>(!Vi||t==="sp")&&Do(t,(...s)=>e(...s),n),k1=an("bm"),Di=an("m"),x1=an("bu"),Qh=an("u"),Jh=an("bum"),Fi=an("um"),R1=an("sp"),P1=an("rtg"),A1=an("rtc");function N1(t,e=Ue){Do("ec",t,e)}const Vl="components";function O1(t,e){return Zh(Vl,t,!0,e)||t}const Xh=Symbol.for("v-ndc");function M1(t){return De(t)?Zh(Vl,t,!1)||t:t||Xh}function Zh(t,e,n=!0,s=!1){const i=qe||Ue;if(i){const r=i.type;if(t===Vl){const a=dg(r,!1);if(a&&(a===e||a===zt(e)||a===xo(zt(e))))return r}const o=du(i[t]||r[t],e)||du(i.appContext[t],e);return!o&&s?r:o}}function du(t,e){return t&&(t[e]||t[zt(e)]||t[xo(zt(e))])}function pt(t,e,n,s){let i;const r=n&&n[s];if(z(t)||De(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function L1(t,e,n={},s,i){if(qe.isCE||qe.parent&&gi(qe.parent)&&qe.parent.isCE)return e!=="default"&&(n.name=e),R("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),P();const o=r&&ef(r(n)),a=mt(ge,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ef(t){return t.some(e=>Gr(e)?!(e.type===yt||e.type===ge&&!ef(e.children)):!0)?t:null}const Ba=t=>t?hf(t)?Uo(t)||t.proxy:Ba(t.parent):null,_i=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ba(t.parent),$root:t=>Ba(t.root),$emit:t=>t.emit,$options:t=>Wl(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=Dl.bind(t.proxy)),$watch:t=>C1.bind(t)}),aa=(t,e)=>t!==ke&&!t.__isScriptSetup&&le(t,e),D1={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(aa(s,e))return o[e]=1,s[e];if(i!==ke&&le(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,r[e];if(n!==ke&&le(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=_i[e];let d,h;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ke&&le(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,le(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return aa(i,e)?(i[e]=n,!0):s!==ke&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ke&&le(t,o)||aa(e,o)||(a=r[0])&&le(a,o)||le(s,o)||le(_i,o)||le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hu(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let za=!0;function F1(t){const e=Wl(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&fu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:w,deactivated:I,beforeDestroy:A,beforeUnmount:M,destroyed:K,unmounted:F,render:Z,renderTracked:Ce,renderTriggered:Ie,errorCaptured:L,serverPrefetch:W,expose:J,inheritAttrs:_e,components:$,directives:ue,filters:Ke}=e;if(c&&$1(c,s,null),o)for(const ye in o){const de=o[ye];X(de)&&(s[ye]=de.bind(n))}if(i){const ye=i.call(n,n);ve(ye)&&(t.data=ir(ye))}if(za=!0,r)for(const ye in r){const de=r[ye],qt=X(de)?de.bind(n,n):X(de.get)?de.get.bind(n,n):xt,un=!X(de)&&X(de.set)?de.set.bind(n):xt,Nt=Oe({get:qt,set:un});Object.defineProperty(s,ye,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:rt=>Nt.value=rt})}if(a)for(const ye in a)tf(a[ye],s,n,ye);if(l){const ye=X(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(de=>{Lr(de,ye[de])})}u&&fu(u,t,"c");function oe(ye,de){z(de)?de.forEach(qt=>ye(qt.bind(n))):de&&ye(de.bind(n))}if(oe(k1,d),oe(Di,h),oe(x1,m),oe(Qh,_),oe(I1,w),oe(T1,I),oe(N1,L),oe(A1,Ce),oe(P1,Ie),oe(Jh,M),oe(Fi,F),oe(R1,W),z(J))if(J.length){const ye=t.exposed||(t.exposed={});J.forEach(de=>{Object.defineProperty(ye,de,{get:()=>n[de],set:qt=>n[de]=qt})})}else t.exposed||(t.exposed={});Z&&t.render===xt&&(t.render=Z),_e!=null&&(t.inheritAttrs=_e),$&&(t.components=$),ue&&(t.directives=ue)}function $1(t,e,n=xt){z(t)&&(t=Ha(t));for(const s in t){const i=t[s];let r;ve(i)?"default"in i?r=Ut(i.from||s,i.default,!0):r=Ut(i.from||s):r=Ut(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fu(t,e,n){_t(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function tf(t,e,n,s){const i=s.includes(".")?Hh(n,s):()=>n[s];if(De(t)){const r=e[t];X(r)&&$t(i,r)}else if(X(t))$t(i,t.bind(n));else if(ve(t))if(z(t))t.forEach(r=>tf(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&$t(i,r,t)}}function Wl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Kr(l,c,o,!0)),Kr(l,e,o)),ve(e)&&r.set(e,l),l}function Kr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Kr(t,r,n,!0),i&&i.forEach(o=>Kr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=U1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const U1={data:pu,props:mu,emits:mu,methods:di,computed:di,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:di,directives:di,watch:W1,provide:pu,inject:V1};function pu(t,e){return e?t?function(){return Le(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function V1(t,e){return di(Ha(t),Ha(e))}function Ha(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?Le(Object.create(null),t,e):e}function mu(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Le(Object.create(null),hu(t),hu(e??{})):e}function W1(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function nf(){return{app:null,config:{isNativeTag:u0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B1=0;function z1(t,e){return function(s,i=null){X(s)||(s=Le({},s)),i!=null&&!ve(i)&&(i=null);const r=nf(),o=new Set;let a=!1;const l=r.app={_uid:B1++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:mg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=R(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Uo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){$i=l;try{return c()}finally{$i=null}}};return l}}let $i=null;function Lr(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Ue||qe;if(s||$i){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:$i._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function H1(){return!!(Ue||qe||$i)}function j1(t,e,n,s=!1){const i={},r={};Br(r,$o,1),t.propsDefaults=Object.create(null),sf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Nh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function q1(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Oo(t.emitsOptions,h))continue;const m=e[h];if(l)if(le(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=zt(h);i[_]=ja(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{sf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!le(e,d)&&((u=Hs(d))===d||!le(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ja(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!le(e,d))&&(delete r[d],c=!0)}c&&nn(t,"set","$attrs")}function sf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Or(l))continue;const c=e[l];let u;i&&le(i,u=zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||ke;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ja(i,l,d,c[d],t,!le(c,d))}}return o}function ja(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Os(i),s=c[n]=l.call(null,e),ss())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Hs(n))&&(s=!0))}return s}function rf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[h,m]=rf(d,e,!0);Le(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ve(t)&&s.set(t,bs),bs;if(z(r))for(let u=0;u<r.length;u++){const d=zt(r[u]);gu(d)&&(o[d]=ke)}else if(r)for(const u in r){const d=zt(u);if(gu(d)){const h=r[u],m=o[d]=z(h)||X(h)?{type:h}:Le({},h);if(m){const _=vu(Boolean,m.type),w=vu(String,m.type);m[0]=_>-1,m[1]=w<0||_<w,(_>-1||le(m,"default"))&&a.push(d)}}}const c=[o,a];return ve(t)&&s.set(t,c),c}function gu(t){return t[0]!=="$"}function _u(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yu(t,e){return _u(t)===_u(e)}function vu(t,e){return z(e)?e.findIndex(n=>yu(n,t)):X(e)&&yu(e,t)?0:-1}const of=t=>t[0]==="_"||t==="$stable",Bl=t=>z(t)?t.map(Dt):[Dt(t)],K1=(t,e,n)=>{if(e._n)return e;const s=$e((...i)=>Bl(e(...i)),n);return s._c=!1,s},af=(t,e,n)=>{const s=t._ctx;for(const i in t){if(of(i))continue;const r=t[i];if(X(r))e[i]=K1(i,r,s);else if(r!=null){const o=Bl(r);e[i]=()=>o}}},lf=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},G1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Br(e,"_",n)):af(e,t.slots={})}else t.slots={},e&&lf(t,e);Br(t.slots,$o,1)},Y1=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,af(e,i)),o=e}else e&&(lf(t,e),o={default:1});if(r)for(const a in i)!of(a)&&!(a in o)&&delete i[a]};function qa(t,e,n,s,i=!1){if(z(t)){t.forEach((h,m)=>qa(h,e&&(z(e)?e[m]:e),n,s,i));return}if(gi(s)&&!i)return;const r=s.shapeFlag&4?Uo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(De(c)?(u[c]=null,le(d,c)&&(d[c]=null)):Me(c)&&(c.value=null)),X(l))xn(l,a,12,[o,u]);else{const h=De(l),m=Me(l);if(h||m){const _=()=>{if(t.f){const w=h?le(d,l)?d[l]:u[l]:l.value;i?z(w)&&Sl(w,r):z(w)?w.includes(r)||w.push(r):h?(u[l]=[r],le(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,le(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ot(_,n)):_()}}}const ot=v1;function Q1(t){return J1(t)}function J1(t,e){const n=Fa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=xt,insertStaticContent:_}=t,w=(f,p,g,y=null,C=null,E=null,O=!1,T=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Yn(f,p)&&(y=v(f),rt(f,C,E,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:V}=p;switch(b){case Fo:I(f,p,g,y);break;case yt:A(f,p,g,y);break;case Dr:f==null&&M(p,g,y,O);break;case ge:$(f,p,g,y,C,E,O,T,k);break;default:V&1?Z(f,p,g,y,C,E,O,T,k):V&6?ue(f,p,g,y,C,E,O,T,k):(V&64||V&128)&&b.process(f,p,g,y,C,E,O,T,k,x)}H!=null&&C&&qa(H,f&&f.ref,E,p||f,!p)},I=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},M=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},K=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},F=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},Z=(f,p,g,y,C,E,O,T,k)=>{O=O||p.type==="svg",f==null?Ce(p,g,y,C,E,O,T,k):W(f,p,C,E,O,T,k)},Ce=(f,p,g,y,C,E,O,T)=>{let k,b;const{type:H,props:V,shapeFlag:j,transition:Y,dirs:ne}=f;if(k=f.el=o(f.type,E,V&&V.is,V),j&8?u(k,f.children):j&16&&L(f.children,k,null,y,C,E&&H!=="foreignObject",O,T),ne&&zn(f,null,y,"created"),Ie(k,f,f.scopeId,O,y),V){for(const pe in V)pe!=="value"&&!Or(pe)&&r(k,pe,null,V[pe],E,f.children,y,C,Ye);"value"in V&&r(k,"value",null,V.value),(b=V.onVnodeBeforeMount)&&Lt(b,y,f)}ne&&zn(f,null,y,"beforeMount");const Ee=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(k),s(k,p,g),((b=V&&V.onVnodeMounted)||Ee||ne)&&ot(()=>{b&&Lt(b,y,f),Ee&&Y.enter(k),ne&&zn(f,null,y,"mounted")},C)},Ie=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(C){let E=C.subTree;if(p===E){const O=C.vnode;Ie(f,O,O.scopeId,O.slotScopeIds,C.parent)}}},L=(f,p,g,y,C,E,O,T,k=0)=>{for(let b=k;b<f.length;b++){const H=f[b]=T?yn(f[b]):Dt(f[b]);w(null,H,p,g,y,C,E,O,T)}},W=(f,p,g,y,C,E,O)=>{const T=p.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:H}=p;k|=f.patchFlag&16;const V=f.props||ke,j=p.props||ke;let Y;g&&Hn(g,!1),(Y=j.onVnodeBeforeUpdate)&&Lt(Y,g,p,f),H&&zn(p,f,g,"beforeUpdate"),g&&Hn(g,!0);const ne=C&&p.type!=="foreignObject";if(b?J(f.dynamicChildren,b,T,g,y,ne,E):O||de(f,p,T,null,g,y,ne,E,!1),k>0){if(k&16)_e(T,p,V,j,g,y,C);else if(k&2&&V.class!==j.class&&r(T,"class",null,j.class,C),k&4&&r(T,"style",V.style,j.style,C),k&8){const Ee=p.dynamicProps;for(let pe=0;pe<Ee.length;pe++){const Fe=Ee[pe],wt=V[Fe],ms=j[Fe];(ms!==wt||Fe==="value")&&r(T,Fe,wt,ms,C,f.children,g,y,Ye)}}k&1&&f.children!==p.children&&u(T,p.children)}else!O&&b==null&&_e(T,p,V,j,g,y,C);((Y=j.onVnodeUpdated)||H)&&ot(()=>{Y&&Lt(Y,g,p,f),H&&zn(p,f,g,"updated")},y)},J=(f,p,g,y,C,E,O)=>{for(let T=0;T<p.length;T++){const k=f[T],b=p[T],H=k.el&&(k.type===ge||!Yn(k,b)||k.shapeFlag&70)?d(k.el):g;w(k,b,H,null,y,C,E,O,!0)}},_e=(f,p,g,y,C,E,O)=>{if(g!==y){if(g!==ke)for(const T in g)!Or(T)&&!(T in y)&&r(f,T,g[T],null,O,p.children,C,E,Ye);for(const T in y){if(Or(T))continue;const k=y[T],b=g[T];k!==b&&T!=="value"&&r(f,T,b,k,O,p.children,C,E,Ye)}"value"in y&&r(f,"value",g.value,y.value)}},$=(f,p,g,y,C,E,O,T,k)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:V,dynamicChildren:j,slotScopeIds:Y}=p;Y&&(T=T?T.concat(Y):Y),f==null?(s(b,g,y),s(H,g,y),L(p.children,g,H,C,E,O,T,k)):V>0&&V&64&&j&&f.dynamicChildren?(J(f.dynamicChildren,j,g,C,E,O,T),(p.key!=null||C&&p===C.subTree)&&cf(f,p,!0)):de(f,p,g,H,C,E,O,T,k)},ue=(f,p,g,y,C,E,O,T,k)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,O,k):Ke(p,g,y,C,E,O,k):et(f,p,k)},Ke=(f,p,g,y,C,E,O)=>{const T=f.component=og(f,y,C);if(Lo(f)&&(T.ctx.renderer=x),ag(T),T.asyncDep){if(C&&C.registerDep(T,oe),!f.el){const k=T.subTree=R(yt);A(null,k,p,g)}return}oe(T,f,p,g,C,E,O)},et=(f,p,g)=>{const y=p.component=f.component;if(g1(f,p,g))if(y.asyncDep&&!y.asyncResolved){ye(y,p,g);return}else y.next=p,u1(y.update),y.update();else p.el=f.el,y.vnode=p},oe=(f,p,g,y,C,E,O)=>{const T=()=>{if(f.isMounted){let{next:H,bu:V,u:j,parent:Y,vnode:ne}=f,Ee=H,pe;Hn(f,!1),H?(H.el=ne.el,ye(f,H,O)):H=ne,V&&Mr(V),(pe=H.props&&H.props.onVnodeBeforeUpdate)&&Lt(pe,Y,H,ne),Hn(f,!0);const Fe=ra(f),wt=f.subTree;f.subTree=Fe,w(wt,Fe,d(wt.el),v(wt),f,C,E),H.el=Fe.el,Ee===null&&_1(f,Fe.el),j&&ot(j,C),(pe=H.props&&H.props.onVnodeUpdated)&&ot(()=>Lt(pe,Y,H,ne),C)}else{let H;const{el:V,props:j}=p,{bm:Y,m:ne,parent:Ee}=f,pe=gi(p);if(Hn(f,!1),Y&&Mr(Y),!pe&&(H=j&&j.onVnodeBeforeMount)&&Lt(H,Ee,p),Hn(f,!0),V&&he){const Fe=()=>{f.subTree=ra(f),he(V,f.subTree,f,C,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Fe()):Fe()}else{const Fe=f.subTree=ra(f);w(null,Fe,g,y,f,C,E),p.el=Fe.el}if(ne&&ot(ne,C),!pe&&(H=j&&j.onVnodeMounted)){const Fe=p;ot(()=>Lt(H,Ee,Fe),C)}(p.shapeFlag&256||Ee&&gi(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&ot(f.a,C),f.isMounted=!0,p=g=y=null}},k=f.effect=new Rl(T,()=>Fl(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,Hn(f,!0),b()},ye=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,q1(f,p.props,y,g),Y1(f,p.children,g),js(),lu(),qs()},de=(f,p,g,y,C,E,O,T,k=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,V=p.children,{patchFlag:j,shapeFlag:Y}=p;if(j>0){if(j&128){un(b,V,g,y,C,E,O,T,k);return}else if(j&256){qt(b,V,g,y,C,E,O,T,k);return}}Y&8?(H&16&&Ye(b,C,E),V!==b&&u(g,V)):H&16?Y&16?un(b,V,g,y,C,E,O,T,k):Ye(b,C,E,!0):(H&8&&u(g,""),Y&16&&L(V,g,y,C,E,O,T,k))},qt=(f,p,g,y,C,E,O,T,k)=>{f=f||bs,p=p||bs;const b=f.length,H=p.length,V=Math.min(b,H);let j;for(j=0;j<V;j++){const Y=p[j]=k?yn(p[j]):Dt(p[j]);w(f[j],Y,g,null,C,E,O,T,k)}b>H?Ye(f,C,E,!0,!1,V):L(p,g,y,C,E,O,T,k,V)},un=(f,p,g,y,C,E,O,T,k)=>{let b=0;const H=p.length;let V=f.length-1,j=H-1;for(;b<=V&&b<=j;){const Y=f[b],ne=p[b]=k?yn(p[b]):Dt(p[b]);if(Yn(Y,ne))w(Y,ne,g,null,C,E,O,T,k);else break;b++}for(;b<=V&&b<=j;){const Y=f[V],ne=p[j]=k?yn(p[j]):Dt(p[j]);if(Yn(Y,ne))w(Y,ne,g,null,C,E,O,T,k);else break;V--,j--}if(b>V){if(b<=j){const Y=j+1,ne=Y<H?p[Y].el:y;for(;b<=j;)w(null,p[b]=k?yn(p[b]):Dt(p[b]),g,ne,C,E,O,T,k),b++}}else if(b>j)for(;b<=V;)rt(f[b],C,E,!0),b++;else{const Y=b,ne=b,Ee=new Map;for(b=ne;b<=j;b++){const ht=p[b]=k?yn(p[b]):Dt(p[b]);ht.key!=null&&Ee.set(ht.key,b)}let pe,Fe=0;const wt=j-ne+1;let ms=!1,Yc=0;const ti=new Array(wt);for(b=0;b<wt;b++)ti[b]=0;for(b=Y;b<=V;b++){const ht=f[b];if(Fe>=wt){rt(ht,C,E,!0);continue}let Ot;if(ht.key!=null)Ot=Ee.get(ht.key);else for(pe=ne;pe<=j;pe++)if(ti[pe-ne]===0&&Yn(ht,p[pe])){Ot=pe;break}Ot===void 0?rt(ht,C,E,!0):(ti[Ot-ne]=b+1,Ot>=Yc?Yc=Ot:ms=!0,w(ht,p[Ot],g,null,C,E,O,T,k),Fe++)}const Qc=ms?X1(ti):bs;for(pe=Qc.length-1,b=wt-1;b>=0;b--){const ht=ne+b,Ot=p[ht],Jc=ht+1<H?p[ht+1].el:y;ti[b]===0?w(null,Ot,g,Jc,C,E,O,T,k):ms&&(pe<0||b!==Qc[pe]?Nt(Ot,g,Jc,2):pe--)}}},Nt=(f,p,g,y,C=null)=>{const{el:E,type:O,transition:T,children:k,shapeFlag:b}=f;if(b&6){Nt(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){O.move(f,p,g,x);return}if(O===ge){s(E,p,g);for(let V=0;V<k.length;V++)Nt(k[V],p,g,y);s(f.anchor,p,g);return}if(O===Dr){K(f,p,g);return}if(y!==2&&b&1&&T)if(y===0)T.beforeEnter(E),s(E,p,g),ot(()=>T.enter(E),C);else{const{leave:V,delayLeave:j,afterLeave:Y}=T,ne=()=>s(E,p,g),Ee=()=>{V(E,()=>{ne(),Y&&Y()})};j?j(E,ne,Ee):Ee()}else s(E,p,g)},rt=(f,p,g,y=!1,C=!1)=>{const{type:E,props:O,ref:T,children:k,dynamicChildren:b,shapeFlag:H,patchFlag:V,dirs:j}=f;if(T!=null&&qa(T,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&j,ne=!gi(f);let Ee;if(ne&&(Ee=O&&O.onVnodeBeforeUnmount)&&Lt(Ee,p,f),H&6)Er(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&zn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,x,y):b&&(E!==ge||V>0&&V&64)?Ye(b,p,g,!1,!0):(E===ge&&V&384||!C&&H&16)&&Ye(k,p,g),y&&fs(f)}(ne&&(Ee=O&&O.onVnodeUnmounted)||Y)&&ot(()=>{Ee&&Lt(Ee,p,f),Y&&zn(f,null,p,"unmounted")},g)},fs=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===ge){ps(g,y);return}if(p===Dr){F(f);return}const E=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:O,delayLeave:T}=C,k=()=>O(g,E);T?T(f.el,E,k):k()}else E()},ps=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Er=(f,p,g)=>{const{bum:y,scope:C,update:E,subTree:O,um:T}=f;y&&Mr(y),C.stop(),E&&(E.active=!1,rt(O,f,p,g)),T&&ot(T,p),ot(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,g,y=!1,C=!1,E=0)=>{for(let O=E;O<f.length;O++)rt(f[O],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),D=(f,p,g)=>{f==null?p._vnode&&rt(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),lu(),Wh(),p._vnode=f},x={p:w,um:rt,m:Nt,r:fs,mt:Ke,mc:L,pc:de,pbc:J,n:v,o:t};let B,he;return e&&([B,he]=e(x)),{render:D,hydrate:B,createApp:z1(D,B)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cf(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=yn(i[r]),a.el=o.el),n||cf(o,a)),a.type===Fo&&(a.el=o.el)}}function X1(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Z1=t=>t.__isTeleport,ge=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Dr=Symbol.for("v-stc"),yi=[];let It=null;function P(t=!1){yi.push(It=t?null:[])}function eg(){yi.pop(),It=yi[yi.length-1]||null}let Ui=1;function wu(t){Ui+=t}function uf(t){return t.dynamicChildren=Ui>0?It||bs:null,eg(),Ui>0&&It&&It.push(t),t}function U(t,e,n,s,i,r){return uf(N(t,e,n,s,i,r,!0))}function mt(t,e,n,s,i){return uf(R(t,e,n,s,i,!0))}function Gr(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}const $o="__vInternal",df=({key:t})=>t??null,Fr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||Me(t)||X(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,s=0,i=null,r=t===ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&df(e),ref:e&&Fr(e),scopeId:Mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return a?(zl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),Ui>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const R=tg;function tg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Xh)&&(t=yt),Gr(t)){const a=Ln(t,e,!0);return n&&zl(a,n),Ui>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(hg(t)&&(t=t.__vccOpts),e){e=ng(e);let{class:a,style:l}=e;a&&!De(a)&&(e.class=Ge(a)),ve(l)&&(Mh(l)&&!z(l)&&(l=Le({},l)),e.style=Ht(l))}const o=De(t)?1:y1(t)?128:Z1(t)?64:ve(t)?4:X(t)?2:0;return N(t,e,n,s,i,o,r,!0)}function ng(t){return t?Mh(t)||$o in t?Le({},t):t:null}function Ln(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?sg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&df(a),ref:e&&e.ref?n&&i?z(i)?i.concat(Fr(e)):[i,Fr(e)]:Fr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rr(t=" ",e=0){return R(Fo,null,t,e)}function vi(t="",e=!1){return e?(P(),mt(yt,null,t)):R(yt,null,t)}function Dt(t){return t==null||typeof t=="boolean"?R(yt):z(t)?R(ge,null,t.slice()):typeof t=="object"?yn(t):R(Fo,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function zl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($o in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),s&64?(n=16,e=[rr(e)]):n=8);t.children=e,t.shapeFlag|=n}function sg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ge([e.class,s.class]));else if(i==="style")e.style=Ht([e.style,s.style]);else if(To(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){_t(t,e,7,[n,s])}const ig=nf();let rg=0;function og(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ig,r={uid:rg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rf(s,i),emitsOptions:zh(s,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=f1.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const Hl=()=>Ue||qe;let jl,gs,Cu="__VUE_INSTANCE_SETTERS__";(gs=Fa()[Cu])||(gs=Fa()[Cu]=[]),gs.push(t=>Ue=t),jl=t=>{gs.length>1?gs.forEach(e=>e(t)):gs[0](t)};const Os=t=>{jl(t),t.scope.on()},ss=()=>{Ue&&Ue.scope.off(),jl(null)};function hf(t){return t.vnode.shapeFlag&4}let Vi=!1;function ag(t,e=!1){Vi=e;const{props:n,children:s}=t.vnode,i=hf(t);j1(t,n,i,e),G1(t,s);const r=i?lg(t,e):void 0;return Vi=!1,r}function lg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ao(new Proxy(t.ctx,D1));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ug(t):null;Os(t),js();const r=xn(s,t,0,[t.props,i]);if(qs(),ss(),fh(r)){if(r.then(ss,ss),e)return r.then(o=>{Eu(t,o,e)}).catch(o=>{No(o,t,0)});t.asyncDep=r}else Eu(t,r,e)}else ff(t,e)}function Eu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=$h(e)),ff(t,n)}let bu;function ff(t,e,n){const s=t.type;if(!t.render){if(!e&&bu&&!s.render){const i=s.template||Wl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Le(Le({isCustomElement:r,delimiters:a},o),l);s.render=bu(i,c)}}t.render=s.render||xt}Os(t),js(),F1(t),qs(),ss()}function cg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}}))}function ug(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cg(t)},slots:t.slots,emit:t.emit,expose:e}}function Uo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($h(Ao(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}}))}function dg(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function hg(t){return X(t)&&"__vccOpts"in t}const Oe=(t,e)=>a1(t,e,Vi);function ql(t,e,n){const s=arguments.length;return s===2?ve(e)&&!z(e)?Gr(e)?R(t,null,[e]):R(t,e):R(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gr(n)&&(n=[n]),R(t,e,n))}const fg=Symbol.for("v-scx"),pg=()=>Ut(fg),mg="3.3.4",gg="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,Iu=Qn&&Qn.createElement("template"),_g={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qn.createElementNS(gg,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Iu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Iu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vg(t,e,n){const s=t.style,i=De(n);if(n&&!i){if(e&&!De(e))for(const r in e)n[r]==null&&Ka(s,r,"");for(const r in n)Ka(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Tu=/\s*!important$/;function Ka(t,e,n){if(z(n))n.forEach(s=>Ka(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=wg(t,e);Tu.test(n)?t.setProperty(Hs(s),n.replace(Tu,""),"important"):t[s]=n}}const Su=["Webkit","Moz","ms"],la={};function wg(t,e){const n=la[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return la[e]=s;s=xo(s);for(let i=0;i<Su.length;i++){const r=Su[i]+s;if(r in t)return la[e]=r}return e}const ku="http://www.w3.org/1999/xlink";function Cg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ku,e.slice(6,e.length)):t.setAttributeNS(ku,e,n);else{const r=b0(e);n==null||r&&!gh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Eg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function pf(t,e,n,s){t.addEventListener(e,n,s)}function bg(t,e,n,s){t.removeEventListener(e,n,s)}function Ig(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Tg(e);if(s){const c=r[e]=xg(s,i);pf(t,a,c,l)}else o&&(bg(t,a,o,l),r[e]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function Tg(t){let e;if(xu.test(t)){e={};let s;for(;s=t.match(xu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hs(t.slice(2)),e]}let ca=0;const Sg=Promise.resolve(),kg=()=>ca||(Sg.then(()=>ca=0),ca=Date.now());function xg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_t(Rg(s,n.value),e,5,[s])};return n.value=t,n.attached=kg(),n}function Rg(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ru=/^on[a-z]/,Pg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?yg(t,s,i):e==="style"?vg(t,n,s):To(e)?Tl(e)||Ig(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ag(t,e,s,i))?Eg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cg(t,e,s,i))};function Ag(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ru.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ru.test(e)&&De(n)?!1:e in t}function or(t){const e=Hl();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ya(r,i))},s=()=>{const i=t(e.proxy);Ga(e.subTree,i),n(i)};w1(s),Di(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Fi(()=>i.disconnect())})}function Ga(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ga(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ya(t.el,e);else if(t.type===ge)t.children.forEach(n=>Ga(n,e));else if(t.type===Dr){let{el:n,anchor:s}=t;for(;n&&(Ya(n,e),n!==s);)n=n.nextSibling}}function Ya(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const hn="transition",si="animation",sn=(t,{slots:e})=>ql(b1,gf(t),e);sn.displayName="Transition";const mf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ng=sn.props=Le({},qh,mf),jn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Pu=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function gf(t){const e={};for(const $ in t)$ in mf||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Og(i),w=_&&_[0],I=_&&_[1],{onBeforeEnter:A,onEnter:M,onEnterCancelled:K,onLeave:F,onLeaveCancelled:Z,onBeforeAppear:Ce=A,onAppear:Ie=M,onAppearCancelled:L=K}=e,W=($,ue,Ke)=>{mn($,ue?u:a),mn($,ue?c:o),Ke&&Ke()},J=($,ue)=>{$._isLeaving=!1,mn($,d),mn($,m),mn($,h),ue&&ue()},_e=$=>(ue,Ke)=>{const et=$?Ie:M,oe=()=>W(ue,$,Ke);jn(et,[ue,oe]),Au(()=>{mn(ue,$?l:r),Gt(ue,$?u:a),Pu(et)||Nu(ue,s,w,oe)})};return Le(e,{onBeforeEnter($){jn(A,[$]),Gt($,r),Gt($,o)},onBeforeAppear($){jn(Ce,[$]),Gt($,l),Gt($,c)},onEnter:_e(!1),onAppear:_e(!0),onLeave($,ue){$._isLeaving=!0;const Ke=()=>J($,ue);Gt($,d),yf(),Gt($,h),Au(()=>{$._isLeaving&&(mn($,d),Gt($,m),Pu(F)||Nu($,s,I,Ke))}),jn(F,[$,Ke])},onEnterCancelled($){W($,!1),jn(K,[$])},onAppearCancelled($){W($,!0),jn(L,[$])},onLeaveCancelled($){J($),jn(Z,[$])}})}function Og(t){if(t==null)return null;if(ve(t))return[ua(t.enter),ua(t.leave)];{const e=ua(t);return[e,e]}}function ua(t){return _0(t)}function Gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function mn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Au(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Mg=0;function Nu(t,e,n,s){const i=t._endId=++Mg,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=_f(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function _f(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${hn}Delay`),r=s(`${hn}Duration`),o=Ou(i,r),a=s(`${si}Delay`),l=s(`${si}Duration`),c=Ou(a,l);let u=null,d=0,h=0;e===hn?o>0&&(u=hn,d=o,h=r.length):e===si?c>0&&(u=si,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?hn:si:null,h=u?u===hn?r.length:l.length:0);const m=u===hn&&/\b(transform|all)(,|$)/.test(s(`${hn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Ou(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Mu(n)+Mu(t[s])))}function Mu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function yf(){return document.body.offsetHeight}const vf=new WeakMap,wf=new WeakMap,Cf={name:"TransitionGroup",props:Le({},Ng,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hl(),s=jh();let i,r;return Qh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Vg(i[0].el,n.vnode.el,o))return;i.forEach(Fg),i.forEach($g);const a=i.filter(Ug);yf(),a.forEach(l=>{const c=l.el,u=c.style;Gt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,mn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=re(t),a=gf(o);let l=o.tag||ge;i=r,r=e.default?Ul(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Li(u,Mi(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Li(u,Mi(u,a,s,n)),vf.set(u,u.el.getBoundingClientRect())}return R(l,null,r)}}},Lg=t=>delete t.mode;Cf.props;const Dg=Cf;function Fg(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function $g(t){wf.set(t,t.el.getBoundingClientRect())}function Ug(t){const e=vf.get(t),n=wf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Vg(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=_f(s);return i.removeChild(s),r}const Lu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Mr(e,n):e},Wg={deep:!0,created(t,e,n){t._assign=Lu(n),pf(t,"change",()=>{const s=t._modelValue,i=Bg(t),r=t.checked,o=t._assign;if(z(s)){const a=_h(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(So(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Ef(t,r))})},mounted:Du,beforeUpdate(t,e,n){t._assign=Lu(n),Du(t,e,n)}};function Du(t,{value:e,oldValue:n},s){t._modelValue=e,z(e)?t.checked=_h(e,s.props.value)>-1:So(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ro(e,Ef(t,!0)))}function Bg(t){return"_value"in t?t._value:t.value}function Ef(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Qa={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ii(t,!0),s.enter(t)):s.leave(t,()=>{ii(t,!1)}):ii(t,e))},beforeUnmount(t,{value:e}){ii(t,e)}};function ii(t,e){t.style.display=e?t._vod:"none"}const zg=Le({patchProp:Pg},_g);let Fu;function Hg(){return Fu||(Fu=Q1(zg))}const jg=(...t)=>{const e=Hg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qg(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qg(t){return De(t)?document.querySelector(t):t}var Kg=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let bf;const ar=t=>bf=t,If=Symbol();function Ja(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wi||(wi={}));function Gg(){const t=wh(!0),e=t.run(()=>Ae({}));let n=[],s=[];const i=Ao({install(r){ar(i),i._a=r,r.provide(If,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Kg?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Tf=()=>{};function $u(t,e,n,s=Tf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ch()&&S0(i),i}function _s(t,...e){t.slice().forEach(n=>{n(...e)})}const Yg=t=>t();function Xa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ja(i)&&Ja(s)&&t.hasOwnProperty(n)&&!Me(s)&&!kn(s)?t[n]=Xa(i,s):t[n]=s}return t}const Qg=Symbol();function Jg(t){return!Ja(t)||!t.hasOwnProperty(Qg)}const{assign:gn}=Object;function Xg(t){return!!(Me(t)&&t.effect)}function Zg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=s1(n.state.value[t]);return gn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Ao(Oe(()=>{ar(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=Sf(t,c,e,n,s,!0),l}function Sf(t,e,n={},s,i,r){let o;const a=gn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ae({});let w;function I(L){let W;c=u=!1,typeof L=="function"?(L(s.state.value[t]),W={type:wi.patchFunction,storeId:t,events:m}):(Xa(s.state.value[t],L),W={type:wi.patchObject,payload:L,storeId:t,events:m});const J=w=Symbol();Dl().then(()=>{w===J&&(c=!0)}),u=!0,_s(d,W,s.state.value[t])}const A=r?function(){const{state:W}=n,J=W?W():{};this.$patch(_e=>{gn(_e,J)})}:Tf;function M(){o.stop(),d=[],h=[],s._s.delete(t)}function K(L,W){return function(){ar(s);const J=Array.from(arguments),_e=[],$=[];function ue(oe){_e.push(oe)}function Ke(oe){$.push(oe)}_s(h,{args:J,name:L,store:Z,after:ue,onError:Ke});let et;try{et=W.apply(this&&this.$id===t?this:Z,J)}catch(oe){throw _s($,oe),oe}return et instanceof Promise?et.then(oe=>(_s(_e,oe),oe)).catch(oe=>(_s($,oe),Promise.reject(oe))):(_s(_e,et),et)}}const F={_p:s,$id:t,$onAction:$u.bind(null,h),$patch:I,$reset:A,$subscribe(L,W={}){const J=$u(d,L,W.detached,()=>_e()),_e=o.run(()=>$t(()=>s.state.value[t],$=>{(W.flush==="sync"?u:c)&&L({storeId:t,type:wi.direct,events:m},$)},gn({},l,W)));return J},$dispose:M},Z=ir(F);s._s.set(t,Z);const Ce=s._a&&s._a.runWithContext||Yg,Ie=s._e.run(()=>(o=wh(),Ce(()=>o.run(e))));for(const L in Ie){const W=Ie[L];if(Me(W)&&!Xg(W)||kn(W))r||(_&&Jg(W)&&(Me(W)?W.value=_[L]:Xa(W,_[L])),s.state.value[t][L]=W);else if(typeof W=="function"){const J=K(L,W);Ie[L]=J,a.actions[L]=W}}return gn(Z,Ie),gn(re(Z),Ie),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:L=>{I(W=>{gn(W,L)})}}),s._p.forEach(L=>{gn(Z,o.run(()=>L({store:Z,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(Z.$state,_),c=!0,u=!0,Z}function e_(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=H1();return a=a||(c?Ut(If,null):null),a&&ar(a),a=bf,a._s.has(s)||(r?Sf(s,e,i,a):Zg(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Ks(e)},Ks=function(t){return new Error("Firebase Database ("+kf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},t_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new n_;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rf=function(t){const e=xf(t);return Kl.encodeByteArray(e,!0)},Yr=function(t){return Rf(t).replace(/\./g,"")},Qr=function(t){try{return Kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){return Pf(void 0,t)}function Pf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i_(n)||(t[n]=Pf(t[n],e[n]));return t}function i_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=()=>r_().__FIREBASE_DEFAULTS__,a_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qr(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return o_()||a_()||l_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Af=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},c_=t=>{const e=Af(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nf=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},Of=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yr(JSON.stringify(n)),Yr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function d_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h_(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lf(){return kf.NODE_ADMIN===!0}function f_(){try{return typeof indexedDB=="object"}catch{return!1}}function p_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=m_,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?g_(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,a,s)}}function g_(t,e){return t.replace(__,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const __=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Wi(Qr(r[0])||""),n=Wi(Qr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},y_=function(t){const e=Df(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},v_=function(t){const e=Df(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Za(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uu(r)&&Uu(o)){if(!Xr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function C_(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");b_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=da),i.error===void 0&&(i.error=da),i.complete===void 0&&(i.complete=da);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function da(){}function Ql(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k_(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:S_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S_(t){return t===qn?void 0:t}function k_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const R_={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},P_=me.INFO,A_={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},N_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=A_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=P_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const O_=(t,e)=>e.some(n=>t instanceof n);let Vu,Wu;function M_(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L_(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ff=new WeakMap,el=new WeakMap,$f=new WeakMap,ha=new WeakMap,Xl=new WeakMap;function D_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ff.set(n,t)}).catch(()=>{}),Xl.set(e,t),e}function F_(t){if(el.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $_(t){tl=t(tl)}function U_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fa(this),e,...n);return $f.set(s,e.sort?e.sort():[e]),Rn(s)}:L_().includes(t)?function(...e){return t.apply(fa(this),e),Rn(Ff.get(this))}:function(...e){return Rn(t.apply(fa(this),e))}}function V_(t){return typeof t=="function"?U_(t):(t instanceof IDBTransaction&&F_(t),O_(t,M_())?new Proxy(t,tl):t)}function Rn(t){if(t instanceof IDBRequest)return D_(t);if(ha.has(t))return ha.get(t);const e=V_(t);return e!==t&&(ha.set(t,e),Xl.set(e,t)),e}const fa=t=>Xl.get(t);function W_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const B_=["get","getKey","getAll","getAllKeys","count"],z_=["put","add","delete","clear"],pa=new Map;function Bu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=z_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||B_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return pa.set(e,r),r}$_(t=>({...t,get:(e,n,s)=>Bu(e,n)||t.get(e,n,s),has:(e,n)=>!!Bu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",zu="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Jl("@firebase/app"),q_="@firebase/app-compat",K_="@firebase/analytics-compat",G_="@firebase/analytics",Y_="@firebase/app-check-compat",Q_="@firebase/app-check",J_="@firebase/auth",X_="@firebase/auth-compat",Z_="@firebase/database",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",ry="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",ly="@firebase/performance-compat",cy="@firebase/remote-config",uy="@firebase/remote-config-compat",dy="@firebase/storage",hy="@firebase/storage-compat",fy="@firebase/firestore",py="@firebase/firestore-compat",my="firebase",gy="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="[DEFAULT]",_y={[nl]:"fire-core",[q_]:"fire-core-compat",[G_]:"fire-analytics",[K_]:"fire-analytics-compat",[Q_]:"fire-app-check",[Y_]:"fire-app-check-compat",[J_]:"fire-auth",[X_]:"fire-auth-compat",[Z_]:"fire-rtdb",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[ry]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[ly]:"fire-perf-compat",[cy]:"fire-rc",[uy]:"fire-rc-compat",[dy]:"fire-gcs",[hy]:"fire-gcs-compat",[fy]:"fire-fst",[py]:"fire-fst-compat","fire-js":"fire-js",[my]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Map,il=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(il.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Zr.values())yy(n,t);return!0}function Zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new lr("app","Firebase",vy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=gy;function Uf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=Nf()),!n)throw Pn.create("no-options");const r=Zr.get(i);if(r){if(Xr(n,r.options)&&Xr(s,r.config))return r;throw Pn.create("duplicate-app",{appName:i})}const o=new x_(i);for(const l of il.values())o.addComponent(l);const a=new wy(n,s,o);return Zr.set(i,a),a}function Vf(t=sl){const e=Zr.get(t);if(!e&&t===sl&&Nf())return Uf();if(!e)throw Pn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=_y[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Ls(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="firebase-heartbeat-database",Ey=1,Bi="firebase-heartbeat-store";let ma=null;function Wf(){return ma||(ma=W_(Cy,Ey,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bi)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),ma}async function by(t){try{return await(await Wf()).transaction(Bi).objectStore(Bi).get(Bf(t))}catch(e){if(e instanceof Wn)as.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(n.message)}}}async function Hu(t,e){try{const s=(await Wf()).transaction(Bi,"readwrite");await s.objectStore(Bi).put(e,Bf(t)),await s.done}catch(n){if(n instanceof Wn)as.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});as.warn(s.message)}}}function Bf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=1024,Ty=30*24*60*60*1e3;class Sy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ju();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ty}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ju(),{heartbeatsToSend:n,unsentEntries:s}=ky(this._heartbeatsCache.heartbeats),i=Yr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ju(){return new Date().toISOString().substring(0,10)}function ky(t,e=Iy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await by(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qu(t){return Yr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){Ls(new os("platform-logger",e=>new H_(e),"PRIVATE")),Ls(new os("heartbeat",e=>new Sy(e),"PRIVATE")),An(nl,zu,t),An(nl,zu,"esm2017"),An("fire-js","")}Ry("");var Py="firebase",Ay="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(Py,Ay,"app");const Ny={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},zf=Uf(Ny);function ec(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Hf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oy=Hf,jf=new lr("auth","Firebase",Hf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Jl("@firebase/auth");function My(t,...e){eo.logLevel<=me.WARN&&eo.warn(`Auth (${Ys}): ${t}`,...e)}function $r(t,...e){eo.logLevel<=me.ERROR&&eo.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw tc(t,...e)}function Vt(t,...e){return tc(t,...e)}function Ly(t,e,n){const s=Object.assign(Object.assign({},Oy()),{[e]:n});return new lr("auth","Firebase",s).create(e,{appName:t.name})}function tc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jf.create(t,...e)}function G(t,e,...n){if(!t)throw tc(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $r(e),new Error(e)}function rn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dy(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||d_()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yl()||Mf()}get(){return Fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new cr(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,s,i={}){return Kf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Gs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qf.fetch()(Gf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Kf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Uy),e);try{const i=new Wy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ly(t,u,c);Pt(t,u)}}catch(i){if(i instanceof Wn)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function Bo(t,e,n,s,i={}){const r=await Qs(t,e,n,s,i);return"mfaPendingCredential"in r&&Pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Gf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?nc(t.config,i):`${t.config.apiScheme}://${i}`}class Wy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),Vy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Vt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function zy(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hy(t,e=!1){const n=dt(t),s=await n.getIdToken(e),i=sc(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ci(ga(i.auth_time)),issuedAtTime:Ci(ga(i.iat)),expirationTime:Ci(ga(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ga(t){return Number(t)*1e3}function sc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qr(n);return i?JSON.parse(i):($r("Failed to decode base64 JWT payload"),null)}catch(i){return $r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jy(t){const e=sc(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wn&&qy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t){var e;const n=t.auth,s=await t.getIdToken(),i=await zi(t,zy(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qy(r.providerUserInfo):[],a=Yy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Yf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Gy(t){const e=dt(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Qy(t){return t.map(e=>{var{providerId:n}=e,s=ec(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){const n=await Kf(t,{},async()=>{const s=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Gf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Jy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Hi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class is{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hy(this,e)}reload(){return Gy(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new is(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zi(this,By(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:F,isAnonymous:Z,providerData:Ce,stsTokenManager:Ie}=n;G(K&&Ie,e,"internal-error");const L=Hi.fromJSON(this.name,Ie);G(typeof K=="string",e,"internal-error"),fn(d,e.name),fn(h,e.name),G(typeof F=="boolean",e,"internal-error"),G(typeof Z=="boolean",e,"internal-error"),fn(m,e.name),fn(_,e.name),fn(w,e.name),fn(I,e.name),fn(A,e.name),fn(M,e.name);const W=new is({uid:K,auth:e,email:h,emailVerified:F,displayName:d,isAnonymous:Z,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:L,createdAt:A,lastLoginAt:M});return Ce&&Array.isArray(Ce)&&(W.providerData=Ce.map(J=>Object.assign({},J))),I&&(W._redirectEventId=I),W}static async _fromIdTokenResponse(e,n,s=!1){const i=new Hi;i.updateFromServerResponse(n);const r=new is({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await to(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;function Zt(t){rn(t instanceof Function,"Expected a class definition");let e=Gu.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qf.type="NONE";const Yu=Qf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ur(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ur("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?is._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ss(Zt(Yu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Zt(Yu);const o=Ur(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=is._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ss(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ss(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tp(e))return"Blackberry";if(np(e))return"Webos";if(ic(e))return"Safari";if((e.includes("chrome/")||Xf(e))&&!e.includes("edge/"))return"Chrome";if(ep(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jf(t=Ze()){return/firefox\//i.test(t)}function ic(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xf(t=Ze()){return/crios\//i.test(t)}function Zf(t=Ze()){return/iemobile/i.test(t)}function ep(t=Ze()){return/android/i.test(t)}function tp(t=Ze()){return/blackberry/i.test(t)}function np(t=Ze()){return/webos/i.test(t)}function zo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xy(t=Ze()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zy(){return h_()&&document.documentMode===10}function sp(t=Ze()){return zo(t)||ep(t)||np(t)||tp(t)||/windows phone/i.test(t)||Zf(t)}function e2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e=[]){let n;switch(t){case"Browser":n=Qu(Ze());break;case"Worker":n=`${Qu(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${s}`}async function rp(t,e){return Qs(t,"GET","/v2/recaptchaConfig",ur(t,e))}function Ju(t){return t!==void 0&&t.enterprise!==void 0}class op{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ap(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Vt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",t2().appendChild(s)})}function n2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const s2="https://www.google.com/recaptcha/enterprise.js?render=",i2="recaptcha-enterprise",r2="NO_RECAPTCHA";class lp{constructor(e){this.type=i2,this.auth=dr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{rp(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new op(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Ju(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(r2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Ju(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ap(s2+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Xu(t,e,n,s=!1){const i=new lp(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.beforeStateQueue=new o2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}async initializeRecaptchaConfig(){const e=await rp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new op(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new lp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&My(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return dt(t)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=C_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e){const n=Zl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Xr(r,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function c2(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function u2(t,e,n){const s=dr(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=cp(e),{host:o,port:a}=d2(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||h2()}function cp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function d2(t){const e=cp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ed(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ed(o)}}}function ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function h2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function f2(t,e){return Qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t,e){return Bo(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function m2(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends rc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ji(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xu(e,s,"signInWithPassword");return _a(e,i)}else return _a(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Xu(e,s,"signInWithPassword");return _a(e,r)}else return Promise.reject(i)});case"emailLink":return p2(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return f2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return m2(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return Bo(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="http://localhost";class ls extends rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ec(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ls(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ks(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:g2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y2(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,s=hi(fi(t)).deep_link_id;return(s?hi(fi(s)).link:null)||s||n||e||t}class oc{constructor(e){var n,s,i,r,o,a;const l=hi(fi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=_2((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=y2(e);try{return new oc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oc.parseLink(n);return G(s,"argument-error"),ji._fromEmailAndCode(e,s.code,s.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends hr{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends hr{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends hr{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await is._fromIdTokenResponse(e,s,i),o=td(s);return new Ds({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=td(s);return new Ds({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new no(e,n,s,i)}}function dp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,r,e,s):r})}async function v2(t,e,n=!1){const s=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await zi(t,dp(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=sc(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Ds._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e,n=!1){const s="signIn",i=await dp(t,s,e),r=await Ds._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function C2(t,e){return hp(dr(t),e)}function E2(t,e,n){return C2(dt(t),Js.credential(e,n))}function b2(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function I2(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function T2(t,e,n,s){return dt(t).onAuthStateChanged(e,n,s)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(){const t=Ze();return ic(t)||zo(t)}const k2=1e3,x2=10;class pp extends fp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S2()&&e2(),this.fallbackToPolling=sp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Zy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,x2):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},k2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pp.type="LOCAL";const R2=pp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp extends fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mp.type="SESSION";const gp=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ho(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await P2(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ac("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function N2(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function O2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function L2(){return _p()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebaseLocalStorageDb",D2=1,io="firebaseLocalStorage",vp="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function F2(){const t=indexedDB.deleteDatabase(yp);return new fr(t).toPromise()}function ol(){const t=indexedDB.open(yp,D2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(io,{keyPath:vp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(io)?e(s):(s.close(),await F2(),e(await ol()))})})}async function nd(t,e,n){const s=jo(t,!0).put({[vp]:e,value:n});return new fr(s).toPromise()}async function $2(t,e){const n=jo(t,!1).get(e),s=await new fr(n).toPromise();return s===void 0?null:s.value}function sd(t,e){const n=jo(t,!0).delete(e);return new fr(n).toPromise()}const U2=800,V2=3;class wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>V2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(L2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O2(),!this.activeServiceWorker)return;this.sender=new A2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await nd(e,so,"1"),await sd(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=jo(i,!1).getAll();return new fr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wp.type="LOCAL";const W2=wp;new cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t,e){return e?Zt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z2(t){return hp(t.auth,new lc(t),t.bypassAuthState)}function H2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),w2(n,new lc(t),t.bypassAuthState)}async function j2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),v2(n,new lc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return j2;case"reauthViaPopup":case"reauthViaRedirect":return H2;default:Pt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new cr(2e3,1e4);class Cs extends Cp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q2.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="pendingRedirect",Vr=new Map;class G2 extends Cp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const s=await Y2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y2(t,e){const n=X2(e),s=J2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Q2(t,e){Vr.set(t._key(),e)}function J2(t){return Zt(t._redirectPersistence)}function X2(t){return Ur(K2,t.config.apiKey,t.name)}async function Z2(t,e,n=!1){const s=dr(t),i=B2(s,e),o=await new G2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=10*60*1e3;class tv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ep(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ev&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}saveEventToCache(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}function id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rv=/^https?/;async function ov(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sv(t);for(const n of e)try{if(av(n))return}catch{}Pt(t,"unauthorized-domain")}function av(t){const e=rl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rv.test(n))return!1;if(iv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new cr(3e4,6e4);function rd(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cv(t){return new Promise((e,n)=>{var s,i,r;function o(){rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rd(),n(Vt(t,"network-request-failed"))},timeout:lv.get()})}if(!((i=(s=Wt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Wt().gapi)===null||r===void 0)&&r.load)o();else{const a=n2("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},ap(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function uv(t){return Wr=Wr||cv(t),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new cr(5e3,15e3),hv="__/auth/iframe",fv="emulator/auth/iframe",pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gv(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nc(e,fv):`https://${t.config.authDomain}/${hv}`,s={apiKey:e.apiKey,appName:t.name,v:Ys},i=mv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Gs(s).slice(1)}`}async function _v(t){const e=await uv(t),n=Wt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:gv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Wt().setTimeout(()=>{r(o)},dv.get());function l(){Wt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vv=500,wv=600,Cv="_blank",Ev="http://localhost";class od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bv(t,e,n,s=vv,i=wv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ze().toLowerCase();n&&(a=Xf(c)?Cv:n),Jf(c)&&(e=e||Ev,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Xy(c)&&a!=="_self")return Iv(e||"",a),new od(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new od(d)}function Iv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="__/auth/handler",Sv="emulator/auth/handler",kv=encodeURIComponent("fac");async function ad(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ys,eventId:i};if(e instanceof up){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Za(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof hr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kv}=${encodeURIComponent(l)}`:"";return`${xv(t)}?${Gs(a).slice(1)}${c}`}function xv({config:t}){return t.emulator?nc(t,Sv):`https://${t.authDomain}/${Tv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class Rv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gp,this._completeRedirectFn=Z2,this._overrideRedirectResult=Q2}async _openPopup(e,n,s,i){var r;rn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ad(e,n,s,rl(),i);return bv(e,o,ac())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ad(e,n,s,rl(),i);return N2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(rn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _v(e),s=new tv(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ya];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ov(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sp()||ic()||zo()}}const Pv=Rv;var ld="@firebase/auth",cd="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ov(t){Ls(new os("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ip(t)},c=new a2(s,i,r,l);return c2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ls(new os("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(s=>new Av(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ld,cd,Nv(t)),An(ld,cd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=5*60,Lv=Of("authIdTokenMaxAge")||Mv;let ud=null;const Dv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Lv)return;const i=n==null?void 0:n.token;ud!==i&&(ud=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fv(t=Vf()){const e=Zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=l2(t,{popupRedirectResolver:Pv,persistence:[W2,R2,gp]}),s=Of("authTokenSyncURL");if(s){const r=Dv(s);I2(n,r,()=>r(n.currentUser)),b2(n,o=>r(o))}const i=Af("auth");return i&&u2(n,`http://${i}`),n}Ov("Browser");const cc=Fv(zf),ro=Ae({}),_n=Ae({}),qi=new Ae(!1);T2(cc,async t=>{if(t){ro.value=t,_n.value=await YE(`users/${t.uid}`);for(const{observable:e,path:n}of Bm)if(_n.value["game-data"]&&_n.value["game-data"]["tileswap-naenae"]&&_n.value["game-data"]["tileswap-naenae"][n]){const s=_n.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=_n.value["game-data"]["tileswap-naenae"][n]}}else ro.value={},_n.value={};qi.value=!0});const qo=Oe(()=>ro.value);Oe(()=>_n.value);const pr=Oe(()=>Object.keys(ro.value).length>0),$v=async(t,e)=>await E2(cc,t,e),al=async()=>await cc.signOut(),dd="@firebase/database",hd="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bp="";function Uv(t){bp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vv(e)}}catch{}return new Wv},Xn=Ip("localStorage"),ll=Ip("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Jl("@firebase/database"),Bv=function(){let t=1;return function(){return t++}}(),Tp=function(t){const e=I_(t),n=new w_;n.update(e);const s=n.digest();return Kl.encodeByteArray(s)},mr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mr.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let rs=null,fd=!0;const zv=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xs.logLevel=me.VERBOSE,rs=xs.log.bind(xs),e&&ll.set("logging_enabled",!0)):typeof t=="function"?rs=t:(rs=null,ll.remove("logging_enabled"))},Qe=function(...t){if(fd===!0&&(fd=!1,rs===null&&ll.get("logging_enabled")===!0&&zv(!0)),rs){const e=mr.apply(null,t);rs(e)}},gr=function(t){return function(...e){Qe(t,...e)}},cl=function(...t){const e="FIREBASE INTERNAL ERROR: "+mr(...t);xs.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${mr(...t)}`;throw xs.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+mr(...t);xs.warn(e)},Hv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fs="[MIN_NAME]",cs="[MAX_NAME]",Xs=function(t,e){if(t===e)return 0;if(t===Fs||e===cs)return-1;if(e===Fs||t===cs)return 1;{const n=pd(t),s=pd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},qv=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},uc=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=uc(t[e[s]]);return n+="}",n},kp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ut(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xp=function(t){S(!Sp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Kv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Qv=new RegExp("^-?(0*)\\d{1,10}$"),Jv=-2147483648,Xv=2147483647,pd=function(t){if(Qv.test(t)){const e=Number(t);if(e>=Jv&&e<=Xv)return e}return null},Zs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Zv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class Rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="5",Rp="v",Pp="s",Ap="r",Np="f",Op=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mp="ls",Lp="p",ul="ac",Dp="websocket",Fp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Up(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Dp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nw(t)&&(n.ns=t.namespace);const i=[];return ut(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={},wa={};function hc(t){const e=t.toString();return va[e]||(va[e]=new sw),va[e]}function iw(t,e){const n=t.toString();return wa[n]||(wa[n]=e()),wa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Zs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="start",ow="close",aw="pLPCommand",lw="pRTLPCB",Vp="id",Wp="pw",Bp="ser",cw="cb",uw="seg",dw="ts",hw="d",fw="dframe",zp=1870,Hp=30,pw=zp-Hp,mw=25e3,gw=3e4;class Es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gr(e),this.stats_=hc(n),this.urlFn=l=>(this.appCheckToken&&(l[ul]=this.appCheckToken),Up(n,Fp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gw)),jv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===md)this.id=a,this.password=l;else if(o===ow)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[md]="t",s[Bp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Rp]=dc,this.transportSessionId&&(s[Pp]=this.transportSessionId),this.lastSessionId&&(s[Mp]=this.lastSessionId),this.applicationId&&(s[Lp]=this.applicationId),this.appCheckToken&&(s[ul]=this.appCheckToken),typeof location<"u"&&location.hostname&&Op.test(location.hostname)&&(s[Ap]=Np);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Kv()&&!Gv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rf(n),i=kp(s,pw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fw]="t",s[Vp]=e,s[Wp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bv(),window[aw+this.uniqueCallbackIdentifier]=e,window[lw+this.uniqueCallbackIdentifier]=n,this.myIFrame=fc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vp]=this.myID,e[Wp]=this.myPW,e[Bp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hp+s.length<=zp;){const o=this.pendingSegs.shift();s=s+"&"+uw+i+"="+o.seg+"&"+dw+i+"="+o.ts+"&"+hw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=16384,yw=45e3;let oo=null;typeof MozWebSocket<"u"?oo=MozWebSocket:typeof WebSocket<"u"&&(oo=WebSocket);class bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gr(this.connId),this.stats_=hc(n),this.connURL=bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Rp]=dc,typeof location<"u"&&location.hostname&&Op.test(location.hostname)&&(o[Ap]=Np),n&&(o[Pp]=n),s&&(o[Mp]=s),i&&(o[ul]=i),r&&(o[Lp]=r),Up(e,Dp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let s;Lf(),this.mySock=new oo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&oo!==null&&!bt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Wi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kp(n,_w);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bt&&bt.isAvailable();let s=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bt];else{const i=this.transports_=[];for(const r of Ki.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=6e4,ww=5e3,Cw=10*1024,Ew=100*1024,Ca="t",gd="d",bw="s",_d="r",Iw="e",yd="o",vd="a",wd="n",Cd="p",Tw="h";class Sw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gr("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ew?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ca in e){const n=e[Ca];n===vd?this.upgradeIfSecondaryHealthy_():n===_d?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(Ca,e);if(gd in e){const s=e[gd];if(n===Tw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bw?this.onConnectionShutdown_(s):n===_d?this.onReset_(s):n===Iw?cl("Server Error: "+s):n===yd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dc!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ww))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends qp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ao}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=32,bd=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new we("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function Kp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new we(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return nt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Qp(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class xw{constructor(e,n){this.errorPrefix_=n,this.parts_=Gp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wo(this.parts_[s]);Jp(this)}}function Rw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wo(e),Jp(t)}function Pw(t){const e=t.parts_.pop();t.byteLength_-=Wo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jp(t){if(t.byteLength_>bd)throw new Error(t.errorPrefix_+"has a key path longer than "+bd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ed)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ed+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends qp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new pc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,Aw=60*5*1e3,Id=30*1e3,Nw=1.3,Ow=3e4,Mw="server_kill",Td=3;class tn extends jp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tn.nextPersistentConnectionId_++,this.log_=gr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=Aw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ve(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;tn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const s=Ms(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||v_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Id)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=y_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cl("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ow&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Sw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{lt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mw)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&lt(d),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Za(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>uc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Td&&(this.reconnectDelay_=Id,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Td&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bp.replace(/\./g,"-")]=1,Yl()?e["framework.cordova"]=1:Mf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ao.getInstance().currentlyOnline();return Za(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Fs,e),i=new ee(Fs,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;class Xp extends Ko{static get __EMPTY_NODE(){return Ar}static set __EMPTY_NODE(e){Ar=e}compare(e,n){return Xs(e.name,n.name)}isDefinedOn(e){throw Ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(cs,Ar)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Ar)}toString(){return".key"}}const Ps=new Xp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ze{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ze.RED,this.left=i??at.EMPTY_NODE,this.right=r??at.EMPTY_NODE}copy(e,n,s,i,r){return new ze(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ze.RED=!0;ze.BLACK=!1;class Lw{copy(e,n,s,i,r){return this}insert(e,n,s){return new ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,n=at.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new at(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nr(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new Lw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e){return Xs(t.name,e.name)}function mc(t,e){return Xs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;function Fw(t){dl=t}const Zp=function(t){return typeof t=="number"?"number:"+xp(t):"string:"+t},em=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else S(t===dl||t.isEmpty(),"priority of unexpected type.");S(t===dl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),em(this.priorityNode_)}static set __childrenNodeConstructor(e){Sd=e}static get __childrenNodeConstructor(){return Sd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xp(this.value_):e+=this.value_,this.lazyHash_=Tp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm,nm;function $w(t){tm=t}function Uw(t){nm=t}class Vw extends Ko{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(cs,new Be("[PRIORITY-POST]",nm))}makePost(e,n){const s=tm(e);return new ee(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ne=new Vw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=Math.log(2);class Bw{constructor(e){const n=r=>parseInt(Math.log(r)/Ww,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ze(h,d.node,ze.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),w=i(m+1,c);return d=t[m],h=n?n(d):d,new ze(h,d.node,ze.BLACK,_,w)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const I=d-_,A=d;d-=_;const M=i(I+1,A),K=t[I],F=n?n(K):K;m(new ze(F,K.node,w,null,M))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));w?h(I,ze.BLACK):(h(I,ze.BLACK),h(I,ze.RED))}return u},o=new Bw(t.length),a=r(o);return new at(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const ys={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(ys&&Ne,"ChildrenNode.ts has not been loaded"),Ea=Ea||new en({".priority":ys},{".priority":Ne}),Ea}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof at?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=lo(s,e.getCompare()):a=ys;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new en(u,c)}addToIndexes(e,n){const s=Jr(this.indexes_,(i,r)=>{const o=Ms(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===ys)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),lo(a,o.getCompare())}else return ys;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new en(s,this.indexSet_)}removeFromIndexes(e,n){const s=Jr(this.indexes_,i=>{if(i===ys)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new en(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&em(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ai||(ai=new q(new at(mc),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ai:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{S(se(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ne,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zp(this.getPriority().val())+":"),this.forEachChild(Ne,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Tp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_r?-1:0}withIndex(e){if(e===Ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ne),i=n.getIterator(Ne);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ps?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zw extends q{constructor(){super(new at(mc),q.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const _r=new zw;Object.defineProperties(ee,{MIN:{value:new ee(Fs,q.EMPTY_NODE)},MAX:{value:new ee(cs,_r)}});Xp.__EMPTY_NODE=q.EMPTY_NODE;Be.__childrenNodeConstructor=q;Fw(_r);Uw(_r);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=!0;function He(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,He(e))}if(!(t instanceof Array)&&Hw){const n=[];let s=!1;if(ut(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=lo(n,Dw,o=>o.name,mc);if(s){const o=lo(n,Ne.getCompare());return new q(r,He(e),new en({".priority":o},{".priority":Ne}))}else return new q(r,He(e),en.Default)}else{let n=q.EMPTY_NODE;return ut(t,(s,i)=>{if(ln(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}$w(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw extends Ko{constructor(e){super(),this.indexPath_=e,S(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xs(e.name,n.name):r}makePost(e,n){const s=He(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,_r);return new ee(cs,e)}toString(){return Gp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw extends Ko{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=He(e);return new ee(n,s)}toString(){return".value"}}const Kw=new qw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){return{type:"value",snapshotNode:t}}function $s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Gi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($s(n,s)):o.trackChildChange(Yi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,r)=>{n.hasChild(i)||s.trackChildChange(Gi(i,r))}),n.isLeafNode()||n.forEachChild(Ne,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Yi(i,r,o))}else s.trackChildChange($s(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.indexedFilter_=new gc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Ne,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Yi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Gi(n,d));const w=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange($s(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gi(c.name,c.node)),r.trackChildChange($s(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fs}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new _c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qw(t){return t.loadsAllData()?new gc(t.getIndex()):t.hasLimit()?new Yw(t):new Qi(t)}function kd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===Kw?n="$value":t.index_===Ps?n="$key":(S(t.index_ instanceof jw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends jp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=co.getListenId_(e,s),a={};this.listens_[o]=a;const l=kd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ms(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=co.getListenId_(e,n);delete this.listens_[s]}get(e){const n=kd(e._queryParams),s=e._path.toString(),i=new Vo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Wi(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){return{value:null,children:new Map}}function im(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,uo());const i=t.children.get(s);e=be(e),im(i,e,n)}}function hl(t,e,n){t.value!==null?n(e,t.value):Xw(t,(s,i)=>{const r=new we(e.toString()+"/"+s);hl(i,r,n)})}function Xw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ut(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=10*1e3,eC=30*1e3,tC=5*60*1e3;class nC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zw(e);const s=Rd+(eC-Rd)*Math.random();Ei(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ut(e,(i,r)=>{r>0&&ln(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*tC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function rm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=rm()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new ho(ce(),n,this.revert)}}else return S(se(this.path)===e,"operationForChild called for unrelated child."),new ho(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Ji(this.source,ce()):new Ji(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return te(this.path)?new us(this.source,ce(),this.snap.getImmediateChild(e)):new us(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new us(this.source,ce(),n.value):new Xi(this.source,ce(),n)}else return S(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Gw(o.childName,o.snapshotNode))}),li(t,i,"child_removed",e,s,n),li(t,i,"child_added",e,s,n),li(t,i,"child_moved",r,s,n),li(t,i,"child_changed",e,s,n),li(t,i,"value",e,s,n),i}function li(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>oC(t,a,l)),o.forEach(a=>{const l=rC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oC(t,e,n){if(e.childName==null||n.childName==null)throw Ks("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t,e){return{eventCache:t,serverCache:e}}function bi(t,e,n,s){return Go(new Fn(e,n,s),t.serverCache)}function om(t,e,n,s){return Go(t.eventCache,new Fn(e,n,s))}function fo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;const aC=()=>(ba||(ba=new at(qv)),ba);class Se{constructor(e,n=aC()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return ut(e,(s,i)=>{n=n.set(new we(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:We(new we(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new Se(null)}}set(e,n){if(te(e))return new Se(n,this.children);{const s=se(e),r=(this.children.get(s)||new Se(null)).set(be(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new Se(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(be(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),We(n,i),s):new Se(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new Se(null))}}function Ii(t,e,n){if(te(e))return new Rt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=nt(i,e);return r=r.updateChild(o,n),new Rt(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new Rt(r)}}}function Pd(t,e,n){let s=t;return ut(n,(i,r)=>{s=Ii(s,We(e,i),r)}),s}function Ad(t,e){if(te(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Rt(n)}}function fl(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function Nd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Nn(t,e){if(te(e))return t;{const n=hs(t,e);return n!=null?new Rt(new Se(n)):new Rt(t.writeTree_.subtree(e))}}function pl(t){return t.writeTree_.isEmpty()}function Us(t,e){return am(ce(),t.writeTree_,e)}function am(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=am(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){return dm(e,t)}function lC(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ii(t.visibleWrites,e,n)),t.lastWriteId=s}function cC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dC(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return hC(t),!0;if(s.snap)t.visibleWrites=Ad(t.visibleWrites,s.path);else{const a=s.children;ut(a,l=>{t.visibleWrites=Ad(t.visibleWrites,We(s.path,l))})}return!0}else return!1}function dC(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(We(t.path,n),e))return!0;return!1}function hC(t){t.visibleWrites=lm(t.allWrites,fC,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fC(t){return t.visible}function lm(t,e,n){let s=Rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=nt(n,o),s=Ii(s,a,r.snap)):Tt(o,n)&&(a=nt(o,n),s=Ii(s,ce(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=nt(n,o),s=Pd(s,a,r.children);else if(Tt(o,n))if(a=nt(o,n),te(a))s=Pd(s,ce(),r.children);else{const l=Ms(r.children,se(a));if(l){const c=l.getChild(be(a));s=Ii(s,ce(),c)}}}else throw Ks("WriteRecord should have .snap or .children")}}return s}function cm(t,e,n,s,i){if(!s&&!i){const r=hs(t.visibleWrites,e);if(r!=null)return r;{const o=Nn(t.visibleWrites,e);if(pl(o))return n;if(n==null&&!fl(o,ce()))return null;{const a=n||q.EMPTY_NODE;return Us(o,a)}}}else{const r=Nn(t.visibleWrites,e);if(!i&&pl(r))return n;if(!i&&n==null&&!fl(r,ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=lm(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Us(a,l)}}}function pC(t,e,n){let s=q.EMPTY_NODE;const i=hs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nn(t.visibleWrites,e);return n.forEachChild(Ne,(o,a)=>{const l=Us(Nn(r,new we(o)),a);s=s.updateImmediateChild(o,l)}),Nd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nn(t.visibleWrites,e);return Nd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mC(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if(fl(t.visibleWrites,r))return null;{const o=Nn(t.visibleWrites,r);return pl(o)?i.getChild(n):Us(o,i.getChild(n))}}function gC(t,e,n,s){const i=We(e,n),r=hs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return Us(o,s.getNode().getImmediateChild(n))}else return null}function _C(t,e){return hs(t.visibleWrites,e)}function yC(t,e,n,s,i,r,o){let a;const l=Nn(t.visibleWrites,e),c=hs(l,ce());if(c!=null)a=c;else if(n!=null)a=Us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function vC(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function po(t,e,n,s){return cm(t.writeTree,t.treePath,e,n,s)}function wc(t,e){return pC(t.writeTree,t.treePath,e)}function Od(t,e,n,s){return mC(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return _C(t.writeTree,We(t.treePath,e))}function wC(t,e,n,s,i,r){return yC(t.writeTree,t.treePath,e,n,s,i,r)}function Cc(t,e,n){return gC(t.writeTree,t.treePath,e,n)}function um(t,e){return dm(We(t.treePath,e),t.writeTree)}function dm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Yi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,$s(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Yi(s,e.snapshotNode,i.oldSnap));else throw Ks("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hm=new EC;class Ec{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),r=wC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){return{filter:t}}function IC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TC(t,e,n,s,i){const r=new CC;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=ml(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=go(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=kC(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=PC(t,e,c.path,s,i,r):o=xC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===St.LISTEN_COMPLETE)o=RC(t,e,n.path,s,r);else throw Ks("Unknown operation type: "+n.type);const l=r.getChanges();return SC(e,o,l),{viewCache:o,changes:l}}function SC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(sm(fo(e)))}}function fm(t,e,n,s,i,r){const o=e.eventCache;if(mo(s,n)!=null)return e;{let a,l;if(te(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ds(e),u=c instanceof q?c:q.EMPTY_NODE,d=wc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=po(s,ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){S(Dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Od(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=be(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Od(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Cc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return bi(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function go(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Dn(n)>1)return e;const _=be(n),I=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),m,I,_,hm,null)}const d=om(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new Ec(i,d,r);return fm(t,d,n,i,h,a)}function ml(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ec(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=bi(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=bi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=be(n),m=a.getNode().getImmediateChild(d);let _;if(te(h))_=s;else{const w=u.getCompleteChild(d);w!=null?Kp(h)===".priority"&&w.getChild(Yp(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=q.EMPTY_NODE}if(m.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=bi(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Md(t,e){return t.eventCache.isCompleteForChild(e)}function kC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=We(n,l);Md(e,se(u))&&(a=ml(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=We(n,l);Md(e,se(u))||(a=ml(t,a,u,c,i,r,o))}),a}function Ld(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function gl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Ld(t,m,h);l=go(t,l,new we(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),w=Ld(t,_,h);l=go(t,l,new we(d),w,i,r,o,a)}}),l}function xC(t,e,n,s,i,r,o){if(mo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return go(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new Se(null);return l.getNode().forEachChild(Ps,(u,d)=>{c=c.set(new we(u),d)}),gl(t,e,n,c,i,r,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,d)=>{const h=We(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),gl(t,e,n,c,i,r,a,o)}}function RC(t,e,n,s,i){const r=e.serverCache,o=om(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return fm(t,o,n,s,hm,i)}function PC(t,e,n,s,i,r){let o;if(mo(s,n)!=null)return e;{const a=new Ec(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=po(s,ds(e));else{const d=e.serverCache.getNode();S(d instanceof q,"serverChildren would be complete if leaf node"),u=wc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let d=Cc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=po(s,ds(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mo(s,ce())!=null,bi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new gc(s.getIndex()),r=Qw(s);this.processor_=bC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new Fn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Fn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Go(d,u),this.eventGenerator_=new sC(this.query_)}get query(){return this.query_}}function NC(t){return t.viewCache_.serverCache.getNode()}function OC(t){return fo(t.viewCache_)}function MC(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Dd(t){return t.eventRegistrations_.length===0}function LC(t,e){t.eventRegistrations_.push(e)}function Fd(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function $d(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(S(ds(t.viewCache_),"We should always have a full cache before handling merges"),S(fo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TC(t.processor_,i,e,n,s);return IC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,pm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function DC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(r,o)=>{s.push($s(r,o))}),n.isFullyInitialized()&&s.push(sm(n.getNode())),pm(t,s,n.getNode(),e)}function pm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return iC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class mm{constructor(){this.views=new Map}}function FC(t){S(!_o,"__referenceConstructor has already been defined"),_o=t}function $C(){return S(_o,"Reference.ts has not been loaded"),_o}function UC(t){return t.views.size===0}function bc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),$d(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat($d(o,e,n,s));return r}}function gm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=po(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=wc(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=Go(new Fn(a,l,!1),new Fn(s,i,!1));return new AC(e,c)}return o}function VC(t,e,n,s,i,r){const o=gm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LC(o,n),DC(o,n)}function WC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=$n(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fd(c,n,s)),Dd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fd(l,n,s)),Dd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$n(t)&&r.push(new($C())(e._repo,e._path)),{removed:r,events:o}}function _m(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const s of t.views.values())n=n||MC(s,e);return n}function ym(t,e){if(e._queryParams.loadsAllData())return Qo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function vm(t,e){return ym(t,e)!=null}function $n(t){return Qo(t)!=null}function Qo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;function BC(t){S(!yo,"__referenceConstructor has already been defined"),yo=t}function zC(){return S(yo,"Reference.ts has not been loaded"),yo}let HC=1;class Ud{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=vC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wm(t,e,n,s,i){return lC(t.pendingWriteTree_,e,n,s,i),i?vr(t,new us(rm(),e,n)):[]}function Zn(t,e,n=!1){const s=cC(t.pendingWriteTree_,e);if(uC(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(ce(),!0):ut(s.children,o=>{r=r.set(new we(o),!0)}),vr(t,new ho(s.path,r,n))}else return[]}function yr(t,e,n){return vr(t,new us(yc(),e,n))}function jC(t,e,n){const s=Se.fromObject(n);return vr(t,new Xi(yc(),e,s))}function qC(t,e){return vr(t,new Ji(yc(),e))}function KC(t,e,n){const s=Tc(t,n);if(s){const i=Sc(s),r=i.path,o=i.queryId,a=nt(r,e),l=new Ji(vc(o),a);return kc(t,r,l)}else return[]}function Cm(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||vm(o,e))){const l=WC(o,e,n,s);UC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>$n(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=JC(h);for(let _=0;_<m.length;++_){const w=m[_],I=w.query,A=Tm(t,w);t.listenProvider_.startListening(Ti(I),Zi(t,I),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ti(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Jo(h));t.listenProvider_.stopListening(Ti(h),m)}))}XC(t,c)}return a}function Em(t,e,n,s){const i=Tc(t,s);if(i!=null){const r=Sc(i),o=r.path,a=r.queryId,l=nt(o,e),c=new us(vc(a),l,n);return kc(t,o,c)}else return[]}function GC(t,e,n,s){const i=Tc(t,s);if(i){const r=Sc(i),o=r.path,a=r.queryId,l=nt(o,e),c=Se.fromObject(n),u=new Xi(vc(a),l,c);return kc(t,o,u)}else return[]}function YC(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=nt(h,i);r=r||On(m,_),o=o||$n(m)});let a=t.syncPointTree_.get(i);a?(o=o||$n(a),r=r||On(a,ce())):(a=new mm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const w=On(_,ce());w&&(r=r.updateImmediateChild(m,w))}));const c=vm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Jo(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=ZC();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Yo(t.pendingWriteTree_,i);let d=VC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=ym(a,e);d=d.concat(eE(t,e,h))}return d}function Ic(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),c=On(a,l);if(c)return c});return cm(i,e,r,n,!0)}function QC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=nt(c,n);s=s||On(u,d)});let i=t.syncPointTree_.get(n);i?s=s||On(i,ce()):(i=new mm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Fn(s,!0,!1):null,a=Yo(t.pendingWriteTree_,e._path),l=gm(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return OC(l)}function vr(t,e){return bm(e,t.syncPointTree_,null,Yo(t.pendingWriteTree_,ce()))}function bm(t,e,n,s){if(te(t.path))return Im(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=On(i,ce()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=um(s,o);r=r.concat(bm(a,l,c,u))}return i&&(r=r.concat(bc(i,t,s,n))),r}}function Im(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=On(i,ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=um(s,o),u=t.operationForChild(o);u&&(r=r.concat(Im(u,a,l,c)))}),i&&(r=r.concat(bc(i,t,s,n))),r}function Tm(t,e){const n=e.query,s=Zi(t,n);return{hashFn:()=>(NC(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?KC(t,n._path,s):qC(t,n._path);{const r=Yv(i,n);return Cm(t,n,null,r)}}}}function Zi(t,e){const n=Jo(e);return t.queryToTagMap.get(n)}function Jo(t){return t._path.toString()+"$"+t._queryIdentifier}function Tc(t,e){return t.tagToQueryMap.get(e)}function Sc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function kc(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Yo(t.pendingWriteTree_,e);return bc(s,n,i,null)}function JC(t){return t.fold((e,n,s)=>{if(n&&$n(n))return[Qo(n)];{let i=[];return n&&(i=_m(n)),ut(s,(r,o)=>{i=i.concat(o)}),i}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zC())(t._repo,t._path):t}function XC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Jo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ZC(){return HC++}function eE(t,e,n){const s=e._path,i=Zi(t,e),r=Tm(t,n),o=t.listenProvider_.startListening(Ti(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!$n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&$n(u))return[Qo(u).query];{let h=[];return u&&(h=h.concat(_m(u).map(m=>m.query))),ut(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ti(u),Zi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xc(n)}node(){return this.node_}}class Rc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Rc(this.syncTree_,n)}node(){return Ic(this.syncTree_,this.path_)}}const tE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vd=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sE(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},sE=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},iE=function(t,e,n,s){return Pc(e,new Rc(n,t),s)},Sm=function(t,e,n){return Pc(t,new xc(e),n)};function Pc(t,e,n){const s=t.getPriority().val(),i=Vd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(Ne,(a,l)=>{const c=Pc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nc(t,e){let n=e instanceof we?e:new we(e),s=t,i=se(n);for(;i!==null;){const r=Ms(s.node.children,i)||{children:{},childCount:0};s=new Ac(i,s,r),n=be(n),i=se(n)}return s}function ei(t){return t.node.value}function km(t,e){t.node.value=e,_l(t)}function xm(t){return t.node.childCount>0}function rE(t){return ei(t)===void 0&&!xm(t)}function Xo(t,e){ut(t.node.children,(n,s)=>{e(new Ac(n,t,s))})}function Rm(t,e,n,s){n&&!s&&e(t),Xo(t,i=>{Rm(i,e,!0,s)}),n&&s&&e(t)}function oE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function wr(t){return new we(t.parent===null?t.name:wr(t.parent)+"/"+t.name)}function _l(t){t.parent!==null&&aE(t.parent,t.name,t)}function aE(t,e,n){const s=rE(n),i=ln(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,_l(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_l(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/[\[\].#$\/\u0000-\u001F\u007F]/,cE=/[\[\].#$\u0000-\u001F\u007F]/,Ia=10*1024*1024,Pm=function(t){return typeof t=="string"&&t.length!==0&&!lE.test(t)},Am=function(t){return typeof t=="string"&&t.length!==0&&!cE.test(t)},uE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Am(t)},dE=function(t,e,n,s){s&&e===void 0||Oc(Ql(t,"value"),e,n)},Oc=function(t,e,n){const s=n instanceof we?new xw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(Sp(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>Ia/3&&Wo(e)>Ia)throw new Error(t+"contains a string greater than "+Ia+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ut(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Pm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rw(s,o),Oc(t,a,s),Pw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},Nm=function(t,e,n,s){if(!(s&&n===void 0)&&!Am(n))throw new Error(Ql(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nm(t,e,n,s)},Om=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uE(n))throw new Error(Ql(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Qp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function jt(t,e,n){Mm(t,n),mE(t,s=>Tt(s,e)||Tt(e,s))}function mE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rs&&Qe("event: "+n.toString()),Zs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="repo_interrupt",yE=25;class vE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=uo(),this.transactionQueueTree_=new Ac,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wE(t,e,n){if(t.stats_=hc(t.repoInfo_),t.forceRestClient_||Zv())t.server_=new co(t.repoInfo_,(s,i,r,o)=>{Wd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new tn(t.repoInfo_,e,(s,i,r,o)=>{Wd(t,s,i,r,o)},s=>{Bd(t,s)},s=>{EE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=iw(t.repoInfo_,()=>new nC(t.stats_,t.server_)),t.infoData_=new Jw,t.infoSyncTree_=new Ud({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=yr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lc(t,"connected",!1),t.serverSyncTree_=new Ud({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);jt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function CE(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mc(t){return tE({timestamp:CE(t)})}function Wd(t,e,n,s,i){t.dataUpdateCount++;const r=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Jr(n,c=>He(c));o=GC(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=Em(t.serverSyncTree_,r,l,i)}else if(s){const l=Jr(n,c=>He(c));o=jC(t.serverSyncTree_,r,l)}else{const l=He(n);o=yr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ea(t,r)),jt(t.eventQueue_,a,o)}function Bd(t,e){Lc(t,"connected",e),e===!1&&TE(t)}function EE(t,e){ut(e,(n,s)=>{Lc(t,n,s)})}function Lc(t,e,n){const s=new we("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=yr(t.infoSyncTree_,s,i);jt(t.eventQueue_,s,r)}function Lm(t){return t.nextWriteId_++}function bE(t,e,n){const s=QC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());YC(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=yr(t.serverSyncTree_,e._path,r);else{const a=Zi(t.serverSyncTree_,e);o=Em(t.serverSyncTree_,e._path,r,a)}return jt(t.eventQueue_,e._path,o),Cm(t.serverSyncTree_,e,n,null,!0),r},i=>(Zo(t,"get for query "+Ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function IE(t,e,n,s,i){Zo(t,"set",{path:e.toString(),value:n,priority:s});const r=Mc(t),o=He(n,s),a=Ic(t.serverSyncTree_,e),l=Sm(o,a,r),c=Lm(t),u=wm(t.serverSyncTree_,e,l,c,!0);Mm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||lt("set at "+e+" failed: "+h);const w=Zn(t.serverSyncTree_,c,!_);jt(t.eventQueue_,e,w),kE(t,i,h,m)});const d=Vm(t,e);ea(t,d),jt(t.eventQueue_,d,[])}function TE(t){Zo(t,"onDisconnectEvents");const e=Mc(t),n=uo();hl(t.onDisconnect_,ce(),(i,r)=>{const o=iE(i,r,t.serverSyncTree_,e);im(n,i,o)});let s=[];hl(n,ce(),(i,r)=>{s=s.concat(yr(t.serverSyncTree_,i,r));const o=Vm(t,i);ea(t,o)}),t.onDisconnect_=uo(),jt(t.eventQueue_,ce(),s)}function SE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_E)}function Zo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function kE(t,e,n,s){e&&Zs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Dm(t,e,n){return Ic(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Dc(t,e=t.transactionQueueTree_){if(e||ta(t,e),ei(e)){const n=$m(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xE(t,wr(e),n)}else xm(e)&&Xo(e,n=>{Dc(t,n)})}function xE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Dm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=nt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Zo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ta(t,Nc(t.transactionQueueTree_,e)),Dc(t,t.transactionQueueTree_),jt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Zs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ea(t,e)}},o)}function ea(t,e){const n=Fm(t,e),s=wr(n),i=$m(t,n);return RE(t,i,s),s}function RE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=nt(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yE)u=!0,d="maxretry",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Dm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Oc("transaction failed: Data returned ",m,l.path);let _=He(m);typeof m=="object"&&m!=null&&ln(m,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,A=Mc(t),M=Sm(_,h,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=M,l.currentWriteId=Lm(t),o.splice(o.indexOf(I),1),i=i.concat(wm(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,I,!0))}else u=!0,d="nodata",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ta(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Zs(s[a]);Dc(t,t.transactionQueueTree_)}function Fm(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&ei(s)===void 0;)s=Nc(s,n),e=be(e),n=se(e);return s}function $m(t,e){const n=[];return Um(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Um(t,e,n){const s=ei(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Xo(e,i=>{Um(t,i,n)})}function ta(t,e){const n=ei(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,km(e,n.length>0?n:void 0)}Xo(e,s=>{ta(t,s)})}function Vm(t,e){const n=wr(Fm(t,e)),s=Nc(t.transactionQueueTree_,e);return oE(s,i=>{Ta(t,i)}),Ta(t,s),Rm(s,i=>{Ta(t,i)}),n}function Ta(t,e){const n=ei(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?km(e,void 0):n.length=r+1,jt(t.eventQueue_,wr(e),i);for(let o=0;o<s.length;o++)Zs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zd=function(t,e){const n=NE(t),s=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $p(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new we(n.pathString)}},NE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=PE(t.substring(u,d)));const h=AE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class ME{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:Kp(this._path)}get ref(){return new cn(this._repo,this._path)}get _queryIdentifier(){const e=xd(this._queryParams),n=uc(e);return n==="{}"?"default":n}get _queryObject(){return xd(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof Fc))return!1;const n=this._repo===e._repo,s=Qp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kw(this._path)}}class cn extends Fc{constructor(e,n){super(e,n,new _c,!1)}get parent(){const e=Yp(this._path);return e===null?null:new cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class er{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),s=yl(this.ref,e);return new er(this._node.getChild(n),s,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new er(i,yl(this.ref,s),Ne)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $c(t,e){return t=dt(t),t._checkNotDeleted("ref"),e!==void 0?yl(t._root,e):t._root}function yl(t,e){return t=dt(t),se(t._path)===null?hE("child","path",e,!1):Nm("child","path",e,!1),new cn(t._repo,We(t._path,e))}function DE(t){return Om("remove",t._path),Wm(t,null)}function Wm(t,e){t=dt(t),Om("set",t._path),dE("set",e,t._path,!1);const n=new Vo;return IE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function FE(t){t=dt(t);const e=new LE(()=>{}),n=new Uc(e);return bE(t._repo,t,n).then(s=>new er(s,new cn(t._repo,t._path),t._queryParams.getIndex()))}class Uc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new OE("value",this,new er(e.snapshotNode,new cn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ME(this,e,n):null}matches(e){return e instanceof Uc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}FC(cn);BC(cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="FIREBASE_DATABASE_EMULATOR_HOST",vl={};let UE=!1;function VE(t,e,n,s){t.repoInfo_=new $p(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function WE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zd(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[$E]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=zd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Rs(Rs.OWNER):new tw(t.name,t.options,e);fE("Invalid Firebase Database URL",o),te(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const d=zE(a,t,u,new ew(t.name,n));return new HE(d,t)}function BE(t,e){const n=vl[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SE(t),delete n[t.key]}function zE(t,e,n,s){let i=vl[e.name];i||(i={},vl[e.name]=i);let r=i[t.toURLString()];return r&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vE(t,UE,n,s),i[t.toURLString()]=r,r}class HE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function jE(t=Vf(),e){const n=Zl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=c_("database");s&&qE(n,...s)}return n}function qE(t,e,n,s={}){t=dt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&on("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rs(Rs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:u_(s.mockUserToken,t.app.options.projectId);r=new Rs(o)}VE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){Uv(Ys),Ls(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return WE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(dd,hd,t),An(dd,hd,"esm2017")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KE();const Vc=jE(zf),Bm=[];function GE(t){return t instanceof Set?Array.from(t):t}const YE=async t=>(await FE($c(Vc,t))).val(),QE=async(t,e)=>{Wm($c(Vc,t),e)},JE=async t=>{if(!(!pr.value||!qi.value))return await DE($c(Vc,t))},Sa=async(t,e)=>{$t(t,n=>{pr.value&&qi.value&&QE(`users/${qo.value.uid}/game-data/tileswap-naenae/${e}/`,GE(n))},{deep:!0}),Bm.push({observable:t,path:e})},XE=new Map([[1,[3]],[2,[7]],[3,[13]],[4,[23]],[5,[45,75,67]],[6,[103,147,155]],[7,[203,211,217,235,367,277,325,313,345]],[8,[435,551,747,453,545,537,703,543]],[9,[1021,1131,1461,1423,1055,1167,1541,1333,1605,1751,1743,1617,1553,1157]],[10,[2011,2415,3771,2157,3515,2773,2033,2443,2461,3023,3543,2745,2431,3177]],[11,[4005,4445,4215,4055,6015,7413,4143,4563,4053,5023,5623,4577,6233,6673]],[12,[10123,15647,16533,16047,11015,14127,17673,13565,15341,15053,15621,15321,11417,13505]],[13,[20033,23261,24623,23517,30741,21643,30171,21277,27777,35051,34723,34047,32535,31425]],[14,[42103,43333,51761,40503,77141,62677,44103,45145,76303,64457,57231,64167,60153,55753]],[15,[100003,102043,110013,102067,104307,100317,177775,103451,110075,102061,114725,103251,100021,100201]],[16,[210013,234313,233303,307107,307527,306357,201735,272201,242413,270155,302157,210205,305667,236107]],[17,[400011,400017,400431,525251,410117,400731,411335,444257,600013,403555,525327,411077,400041,400101]],[18,[1000201,1000247,1002241,1002441,1100045,1000407,1003011,1020121,1101005,1000077,1001361,1001567,1001727,1002777]],[19,[2000047,2000641,2001441,2000107,2000077,2000157,2000175,2000257,2000677,2000737,2001557,2001637,2005775,2006677]],[20,[4000011,4001051,4004515,6000031,4442235]],[21,[10000005,10040205,10020045,10040315,10000635,10103075,10050335,10002135,17000075]],[22,[20000003,20001043,2222223,25200127,20401207,20430607,20070217]],[23,[40000041,40404041,40000063,40010061,50000241,40220151,40006341,40405463,40103271,41224445,4043561]],[24,[100000207,125245661,113763063]],[25,[200000011,200000017,204000051,200010031,200402017,252001251,201014171,204204057,200005535,200014731]],[26,[400000107,430216473,402365755,426225667,510664323,473167545,411335571]],[27,[1000000047,1001007071,1020024171,1102210617,1250025757,1257242631,1020560103,1112225171,1035530241]],[28,[2000000011,2104210431,2000025051,2020006031,2002502115,2001601071]],[29,[4000000005,4004004005,4000010205,4010000045,4400000045,4002200115,4001040115,4004204435,4100060435,4040003075,40040642751]],[30,[10040000007,10104264207,10115131333,11362212703,10343244533]],[31,[20000000011,20000000017,20000020411,21042104211,20010010017,20005000251,20004100071,20202040217,20000200435,20060140231,21042107357]],[32,[40020000007,40460216667,40035532523,42003247143,41760427607]],[33,[100000020001,100020024001,104000420001,100020224401,111100021111,100000031463,104020466001,100502430041,100601431001]],[34,[201000000007,201472024107,377000007527,225213433257,227712240037,251132516577,211636220473,200000140003]],[35,[400000000005]],[36,[0xe8d4a51fa1]],[37,[2000000012005]],[38,[4000000000143]],[39,[0x9184e72a015]],[40,[20000012000005]],[61,[200000000000000000047n]],[89,[400000000000000000000000000151n]]]),ZE=t=>{const e=XE.get(t.q);if(!e)throw new Error(`No irreducible polynomial for field of order ${t.p} ** ${t.q}`);const n=[];for(const s of e){const r=parseInt(s.toString(),8).toString(2).trim().split("").map(o=>parseInt(o));n.push(t.el(r))}return n};class Xe{constructor(e){if(typeof e!="number")throw new Error(`Order ${e} is not a number`);if(e<=0)throw new Error(`Order ${e} is not positive`);if(e%1!==0)throw new Error(`Order ${e} is not an integer`);const n=Xe.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error(`Order ${e} is not a prime power`);this.order=e,this.p=n[0],this.q=n.length,this.isPrimeField=this.q===1}el(e){if(e instanceof kt){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e=="number")return this.isPrimeField?new eb(e,this):As.fromInteger(e,this);if(e instanceof Array)return new As(e,this);throw new Error("Cannot create element from non-number")}irreduciblePolynomial(){return ZE(this)[0]}matrix(e){return Vs.from2DArray(e,this)}identity(e){return Vs.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...Xe.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new Xe(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}class kt{constructor(e,n){if(this.constructor==kt)throw new Error("FiniteFieldElement is an abstract class and cannot be instantiated. Use FiniteFieldValue or FiniteFieldPolynomial instead.");if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");this.value=e,this.field=n}inverse(){throw new Error("Method inverse not implemented in "+this.constructor.name)}opposite(){throw new Error("Method opposite not implemented in "+this.constructor.name)}add(e){throw new Error("Method add not implemented in "+this.constructor.name)}subtract(e){throw new Error("Method subtract not implemented in "+this.constructor.name)}multiply(e){throw new Error("Method multiply not implemented in "+this.constructor.name)}divide(e){throw new Error("Method divide not implemented in "+this.constructor.name)}pow(e){throw new Error("Method pow not implemented in "+this.constructor.name)}sqrt(){throw new Error("Method sqrt not implemented in "+this.constructor.name)}abs(){throw new Error("Method abs not implemented in "+this.constructor.name)}equals(e){throw new Error("Method equals not implemented in "+this.constructor.name)}copy(){throw new Error("Method copy not implemented in "+this.constructor.name)}}var In,vs;class eb extends kt{constructor(n,s){if(typeof n!="number")throw new Error("Value must be a number");if(!(s instanceof Xe))throw new Error("Field must be an instance of FiniteField");if(!Xe.isPrime(s.order))throw new Error("Field must be a prime field");super(Xe.mod(n,s.order),s);br(this,In)}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(n){return Mt(this,In,vs).call(this,n,(s,i)=>s.value+i.value)}subtract(n){return Mt(this,In,vs).call(this,n,(s,i)=>s.value-i.value)}multiply(n){return Mt(this,In,vs).call(this,n,(s,i)=>s.value*i.value)}divide(n){return Mt(this,In,vs).call(this,n,(s,i)=>s.multiply(i.inverse()).value)}pow(n){if(n===0)return this.field.el(1);if(n===1)return this.copy();if(n<0)return this.inverse().pow(-n);let s=this;for(let i=1;i<n;i++)s=s.multiply(this);return s}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let n=1;for(;n<this.field.order;){if(n*n%this.field.order===this.value)return this.field.el(n);n++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(n){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===n.value}return this.value===n}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}}In=new WeakSet,vs=function(n,s){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(s(this,n))}return Mt(this,In,vs).call(this,this.field.el(n),s)};class As extends kt{constructor(e,n){if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");Xe.isPrime(n.order)&&(console.warn("[warn] Creating polynomial in prime field. Use FiniteFieldValue instead"),console.trace()),super(As.coefficientsToInteger(e,n),n),this.field=n,this.primeField=Xe.fromOrder(n.p),this.poly=new Si(e,this.primeField)}add(e){if(e instanceof As){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new As(i,n)}static coefficientsToInteger(e,n){return n=Xe.fromOrder(n.p),parseInt(e.map(s=>n.el(s)).map(s=>s.value).join(""),n.p)}toString(){return(this.poly.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.poly.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}class Si{constructor(e,n){if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");this.field=n,this.primeField=Xe.fromOrder(n.p),this.coefficients=e.map(s=>this.field.el(s))}add(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=[];for(let s=0;s<this.coefficients.length+e.coefficients.length-1;s++)n.push(this.field.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return this.field.el(n)}if(e instanceof Array)return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}equals(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot compare polynomials in different fields");return this.coefficients.every((n,s)=>n.equals(e.coefficients[s]))}if(e instanceof Array)return this.equals(this.field.el(e));throw new Error("Cannot compare polynomial to non-polynomial")}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var es,ts,pi;const ae=class ae{constructor(e,n){br(this,ts);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof kt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new ae(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof kt)return e=this.field.el(e),ae.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof ae){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return ae.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof kt||typeof e=="number")return e=this.field.el(e),new ae(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof ae){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new ae(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return ae.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(ni(ae,es).has(e))return ni(ae,es).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Mt(this,ts,pi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return ni(ae,es).set(e,s),s}const n=this.PLUDeterminant();return ni(ae,es).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=ae.identity(this.width,this.field),s=ae.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Mt(r=s,ts,pi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return ae.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Mt(this,ts,pi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new ae(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return ae.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return ae.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=ae.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Mt(this,ts,pi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:ae.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof ae?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return ae.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new ae(s,n)}static fromValue(e,n,s,i){if(e instanceof kt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new ae(r,i)}static zeros(e,n,s){return ae.fromValue(0,e,n,s)}static ones(e,n,s){return ae.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return ae.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return ae.from2DArray(s,n)}static from2DArray(e,n){return new ae(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};es=new WeakMap,ts=new WeakSet,pi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new ae(s,this.field)},br(ae,es,new Map);let Vs=ae;const vo=Ae(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>vo.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");vo.value=t}});const Tn=Oe(()=>vo.value),Hd=t=>{vo.value=t},ka=new Map,xa=new Map,zm=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},Ra=(t,e)=>{for(let n=0;n<e;n++)t=zm(t);return t};class tb{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const Hm=t=>{const e=[t,zm(t),Ra(t,2),Ra(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=nb(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new tb(Ra(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function nb(t){const e=Xe.fromOrder(Q.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Q.value])),r=`${s}x${n},${st.getExcludeFromMatrix(t)},${tr.value},${Q.value}}`;let o=[],a=0;const l=ib(s,n,t);let c;if(xa.has(r)?c=xa.get(r):(c=l.determinant(),xa.set(r,c)),c.equals(0)){const d=Vs.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=Vs.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let w=0;w<d.width-1;w++)if(d.matrix[m][w].equals(1)){o[w]=_.value;break}}}}else{let u;ka.has(r)?u=ka.get(r):(u=l.inverse(),ka.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const sb=(t,e,n)=>{for(const s of tr.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Q.value-1)}},ib=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));sb(o,a,l),s.push(l)}return Xe.fromOrder(Q.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()},vt={backgroundColor:{name:"Background Color",options:["#bbb2ea","#adad85","#666","#FF9D81","#83769C","#7be3ad"],get value(){const{settings:t}=ie();return this.options[t.backgroundColor]},onChange(t){document.documentElement.style.setProperty("--root-bg-color",this.options[t])}},tilesColor:{name:"Tiles Color",options:[[{r:0,g:0,b:0},{r:255,g:255,b:255}],[{r:50,g:50,b:90},{r:200,g:100,b:100}],[{r:8,g:33,b:59},{r:88,g:131,b:173}]],get value(){const{settings:t}=ie();return this.options[t.tilesColor]},onChange(t){}},colorBlind:{name:"Color Blind",options:["Off","On"],get value(){const{settings:t}=ie();return this.options[t.colorBlind]},onChange(t){}},tilesShape:{name:"Tiles Shape",options:[[30],[30,60],[0],[100]],get value(){const{settings:t}=ie();return this.options[t.tilesShape]},onChange(t){let e="";for(let n=0;n<this.options[t].length;n++)e+=`${this.options[t][n]}px `;document.documentElement.style.setProperty("--root-tile-border-radius",e)}}},rb=Object.fromEntries(Object.keys(vt).map(t=>[t,vt[t].selected??0])),tr=Ae([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>tr.value,set:t=>{tr.value=t}});const Q=Ae(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Q.value,set:t=>{if(typeof t!="number")throw new Error("Modulo must be a number");if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t}});const Wc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t},ki=Oe(()=>{const t=vt.tilesColor.value[0],e=vt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*(i/(Q.value-1))+t.r},${n.g*(i/(Q.value-1))+t.g},${n.b*(i/(Q.value-1))+t.b})`)}),Pa=Oe(()=>{const t=vt.tilesColor.value[0],e=vt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.4*(i/(Q.value-1))+t.r+36},${n.g*.4*(i/(Q.value-1))+t.g+36},${n.b*.4*(i/(Q.value-1))+t.b+36})`)}),Aa=Oe(()=>{const t=vt.tilesColor.value[0],e=vt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.75*(i/(Q.value-1))+t.r+50},${n.g*.75*(i/(Q.value-1))+t.g+50},${n.b*.75*(i/(Q.value-1))+t.b+50})`)}),Qt=class Qt{static get FILTERED_LAYOUTS(){const e=ie();return this.LAYOUTS.filter(n=>n.unlockCategory<=e.unlockedCategoriesFP&&n.unlockCategory>0)}constructor({width:e,height:n,exclude:s,unlockCategory:i,id:r}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(o=>Q.value-1)),this.id=r;for(const o of this.exclude)this.matrix[Math.floor(o/e)][o%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of tr.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=Qt.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=Qt.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Q.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Q.value-1:this.matrix[e][n]===Q.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i,id:r}=this,o=new Qt({width:e,height:n,exclude:s,unlockCategory:i,id:r});return o.matrix=this.matrix.map(a=>a.slice()),o}generatePosition(e){const n=this.copy();n.setAllTiles(Q.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}if(n.matrix.every(s=>s.every(i=>i===Q.value||i===-1)))return this.generatePosition(e);if(n.nTiles()<50){const{solutions:s,shortest:i,zerows:r}=Hm(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Q.value*(e/3)+2);if(o.moves<a)return this.generatePosition(e)}return n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static getRandomLayout(){const e=Qt.FILTERED_LAYOUTS;return e[Math.floor(Math.random()*e.length)]}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new Qt({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Q.value+Q.value)%Q.value}};Bn(Qt,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1,id:0},{dimensions:"4x4",unlockCategory:3,id:1},{dimensions:"5x5",unlockCategory:5,id:2},{dimensions:"6x6",unlockCategory:9,id:3},{dimensions:"7x7",unlockCategory:11,id:4},{dimensions:"8x8",unlockCategory:15,id:5},{dimensions:"9x9",unlockCategory:15,id:6},{dimensions:"10x10",unlockCategory:15,id:7},{dimensions:"11x11",unlockCategory:15,id:8},{dimensions:"12x12",unlockCategory:15,id:9},{dimensions:"3x4",unlockCategory:3,id:10},{dimensions:"3x5",unlockCategory:3,id:11},{dimensions:"3x6",unlockCategory:9,id:12},{dimensions:"3x7",unlockCategory:9,id:13},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:1,id:14},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:7,id:15},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:11,id:16},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:9,id:17},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:11,id:18},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:16,id:19},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:1,id:20},{dimensions:"3x3",exclude:[4],unlockCategory:1,id:21},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:1,id:22},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:-2,id:32},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:-2,id:40},{dimensions:"3x3",exclude:[4,7],unlockCategory:1,id:23},{dimensions:"4x4",exclude:[5,10],unlockCategory:3,id:24},{dimensions:"4x4",exclude:[3,12],unlockCategory:3,id:25},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:4,id:26},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:3,id:27},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:3,id:28},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:4,id:29},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:4,id:30},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:-1,id:31},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:4,id:33},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:-1,id:34},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:-1,id:35},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:6,id:36},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:5,id:37},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:5,id:38},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:-1,id:39},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:-1,id:41},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:-1,id:42},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:-1,id:43},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:7,id:44},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:2,id:45},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:1,id:46},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:7,id:47},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:6,id:48},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:6,id:49},{dimensions:"5x5",exclude:[12],unlockCategory:-1,id:50},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:-1,id:51},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:7,id:52},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:5,id:53},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:-1,id:54},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:-1,id:55},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:5,id:56},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:-1,id:57},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:5,id:58},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:-2,id:59},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:8,id:60},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:-2,id:61},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:4,id:62},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:13,id:63},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:-2,id:64},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:7,id:65},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:-1,id:66},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:-1,id:67},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:11,id:68},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:6,id:69},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:6,id:70},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:8,id:71},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:8,id:72},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:-2,id:73},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:9,id:74},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:11,id:75},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:10,id:76},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:-1,id:77},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:-1,id:78},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:10,id:79},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:10,id:80},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:12,id:81},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:13,id:82},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:-2,id:83},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:6,id:84},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:4,id:85},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:3,id:86},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:7,id:87},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:12,id:88},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:12,id:89},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:12,id:90},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:16,id:91},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:16,id:92},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:8,id:93},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:-2,id:94},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:-2,id:95},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:-1,id:96},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:7,id:97},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:-1,id:98},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:8,id:99},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:4,id:100},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:7,id:101},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:6,id:102},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:6,id:103},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:9,id:104},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:13,id:105},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:6,id:106},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:14,id:107},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:8,id:108},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:2,id:109},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:-2,id:110},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:-2,id:111},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:9,id:112},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:10,id:113},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:11,id:114},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:10,id:115},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:10,id:116},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:7,id:117},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:-2,id:118},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:2,id:119},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:10,id:120},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:10,id:121},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:-2,id:122},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:-2,id:123},{dimensions:"3x4",exclude:[4,7],unlockCategory:-2,id:124},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:-1,id:125},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:-2,id:126},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:13,id:127},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:4,id:128},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:-2,id:129},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:-2,id:130},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:-2,id:131},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:-1,id:132},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:-1,id:133},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:11,id:134},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:14,id:135},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:16,id:136},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:12,id:137},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:5,id:138},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:-2,id:139},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:10,id:140},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:16,id:141},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:2,id:142},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:-2,id:143},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:-2,id:144},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:2,id:145},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:-2,id:146},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:-2,id:147},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:14,id:148},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:12,id:149},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:12,id:150},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:17,id:151},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:14,id:152},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:-1,id:153},{dimensions:"13x13",unlockCategory:15,id:154},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:8,id:155}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i,id:r}=e;return new Qt({width:n,height:s,unlockCategory:i,id:r,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let st=Qt;window.layouts=st.LAYOUTS;const Io=class Io{static get FILTERED_PUZZLES(){const e=ie();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}get completionMoves(){const e=ie();for(let n=0;n<e.stats.puzzlesCompleted.length;n++){const s=e.stats.puzzlesCompleted[n];if(s.id===this.id)return s.completionMoves}return-1}set completionMoves(e){const n=ie();for(let s=0;s<n.stats.puzzlesCompleted.length;s++){const i=n.stats.puzzlesCompleted[s];if(i.id===this.id){i.completionMoves=Math.min(e,i.completionMoves);return}}n.stats.puzzlesCompleted.push({id:this.id,completionMoves:e})}};Bn(Io,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[6,9,13,14,17,21,22,24]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[5,9,11,14,20,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[2,4,12,13,18,20,34,35,38,42,44,45,46,48,49,52,53,59,60,63,64,68,70]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((w,I)=>{w===2?(s[_][I]=-1,i[_][I]=-1):w===1&&(s[_][I]=(a??2)-1)}));const l=s[0].length,c=s.length,u=st.getExcludeFromMatrix(s),d=new st({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new st({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new Io({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let Jt=Io;const Ct=class Ct{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patterns:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,hasSpecificPatterns:l,modulo:c,name:u}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,l?this.patterns=i:(this.rangeStart=i[0],this.rangeEnd=i[1]),this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.hasSpecificPatterns=l,this.nMoves=0,this.modulo=c??2,this.name=u,this.id=-1,this.generateLayouts()}get maxPercent(){const e=ie();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.maxPercent}return 0}get minTime(){const e=ie();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minTime}return this.timeLimit}set maxPercent(e){const n=ie();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.maxPercent=Math.max(i.maxPercent,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:e,minTime:this.timeLimit})}set minTime(e){const n=ie();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minTime=Math.min(i.minTime,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:e})}generateLayouts(){let e;this.hasSpecificPatterns?e=st.LAYOUTS.filter(r=>this.patterns.includes(r.id)):e=st.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd);const n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=Ct.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=Ct.THRESHOLD?i*2:i);n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=ie();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};Bn(Ct,"CHALLENGES",[new Ct({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[0],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,hasSpecificPatterns:!0,name:"Think Fast"}),new Ct({timeLimit:60,moveLimit:-1,totalClicks:2,patterns:[1,1],nPatterns:1,bigLayoutAdapt:!1,moveLimitPer:2,hasSpecificPatterns:!1,name:"EZ"}),new Ct({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[2],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,hasSpecificPatterns:!0,name:"Think a bit less fast but still fast enough to be fast enough, you know?"}),new Ct({timeLimit:60,moveLimit:-1,totalClicks:16,patterns:[1,2],nPatterns:5,bigLayoutAdapt:!1,moveLimitPer:4,hasSpecificPatterns:!1,name:"Challenge 1"}),new Ct({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[11],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,hasSpecificPatterns:!0,name:"OG"})].map((e,n)=>(e.id=n,e))),Bn(Ct,"THRESHOLD",60);let wo=Ct;const jd=t=>`${t}`,Co={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:jd},tilesSwapped:{name:"Tiles Swapped",display:jd},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${Jt.PUZZLES.length}`},challengesCompleted:{initialValue:[],name:"Challenges Completed",display:t=>`${t.length} / ${wo.CHALLENGES.length}`}},ob=Object.fromEntries(Object.keys(Co).map(t=>[t,Co[t].initialValue??0])),ie=e_("store",()=>{const t=Ae({}),e=Ae({}),n=Ae({}),s=Ae(5),i=Ae(39),r=Ae(10),o=Ae([0,1,2]),a=Ae(2),l=Ae(!1);function c(I,A){o.value.splice(I,1),o.value.push(A)}const u=Ae({...rb});$t(u,I=>{for(const A of Object.keys(u.value))vt[A].onChange(u.value[A])},{deep:!0});const d=Ae({...ob});setInterval(()=>{d.value.timePlayed+=10},1e4);function h(I){t.value=I}function m(I){e.value=I}function _(I){n.value=I}function w(I){a.value=I}return Sa(s,"difficulty"),Sa(d,"stats"),Sa(u,"settings"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,isRandomFreeplay:l,difficulty:s,setLayout:h,setPuzzle:m,setChallenge:_,stats:d,currentTasks:o,maxTask:a,setTask:c,setMaxTask:w,unlockedCategoriesFP:i,unlockedCategoriesPZ:r,settings:u}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof window<"u";function ab(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Na(t,e){const n={};for(const s in e){const i=e[s];n[s]=At(i)?i.map(t):t(i)}return n}const xi=()=>{},At=Array.isArray,lb=/\/$/,cb=t=>t.replace(lb,"");function Oa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=fb(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function ub(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function db(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ws(e.matched[s],n.matched[i])&&jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hb(t[n],e[n]))return!1;return!0}function hb(t,e){return At(t)?qd(t,e):At(e)?qd(e,t):t===e}function qd(t,e){return At(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function fb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var Eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Eo||(Eo={}));const Ma="";function pb(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cb(t)}const mb=/^[^#]+#/;function gb(t,e){return t.replace(mb,"#")+e}function _b(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const yb=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=_b(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kd(t,e){return(history.state?history.state.position-e:-1)+t}const wl=new Map;function wb(t,e){wl.set(t,e)}function Cb(t){const e=wl.get(t);return wl.delete(t),e}function Eb(t=""){let e=[],n=[Ma],s=0;t=pb(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:nr.pop};for(const h of e)h(a,l,d)}const o={location:Ma,state:{},base:t,createHref:gb.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Ma],s=0},go(a,l=!0){const c=this.location,u=a<0?Eo.back:Eo.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function bb(t){return typeof t=="string"||t&&typeof t=="object"}function qm(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Km=Symbol("");var Gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gd||(Gd={}));function Bs(t,e){return Re(new Error,{type:t,[Km]:!0},e)}function Kt(t,e){return t instanceof Error&&Km in t&&(e==null||!!(t.type&e))}const Yd="[^/]+?",Ib={sensitive:!1,strict:!1,start:!0,end:!0},Tb=/[.+*?^${}()[\]/\\]/g;function Sb(t,e){const n=Re({},Ib,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Tb,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:w,optional:I,regexp:A}=h;r.push({name:_,repeatable:w,optional:I});const M=A||Yd;if(M!==Yd){m+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+F.message)}}let K=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(K=I&&c.length<2?`(?:/${K})`:"/"+K),I&&(K+="?"),i+=K,m+=20,I&&(m+=-8),w&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:w,optional:I}=m,A=_ in c?c[_]:"";if(At(A)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=At(A)?A.join("/"):A;if(!M)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function kb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xb(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=kb(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Qd(s))return 1;if(Qd(i))return-1}return i.length-s.length}function Qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Rb={type:0,value:""},Pb=/[a-zA-Z0-9_]/;function Ab(t){if(!t)return[[]];if(t==="/")return[[Rb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Pb.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function Nb(t,e,n){const s=Sb(Ab(t.path),n),i=Re(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ob(t,e){const n=[],s=new Map;e=Zd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=Mb(u);_.aliasOf=h&&h.record;const w=Zd(e,u),I=[_];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of K)I.push(Re({},_,{components:h?h.record.components:_.components,path:F,aliasOf:h?h.record:_}))}let A,M;for(const K of I){const{path:F}=K;if(d&&F[0]!=="/"){const Z=d.record.path,Ce=Z[Z.length-1]==="/"?"":"/";K.path=d.record.path+(F&&Ce+F)}if(A=Nb(K,d,w),h?h.alias.push(A):(M=M||A,M!==A&&M.alias.push(A),m&&u.name&&!Xd(A)&&o(u.name)),_.children){const Z=_.children;for(let Ce=0;Ce<Z.length;Ce++)r(Z[Ce],A,h&&h.children[Ce])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return M?()=>{o(M)}:xi}function o(u){if(qm(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&xb(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Gm(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Xd(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,w;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Bs(1,{location:u});w=h.record.name,m=Re(Jd(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Jd(u.params,h.keys.map(M=>M.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(M=>M.re.test(_)),h&&(m=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw Bs(1,{location:u,currentLocation:d});w=h.record.name,m=Re({},d.params,u.params),_=h.stringify(m)}const I=[];let A=h;for(;A;)I.unshift(A.record),A=A.parent;return{name:w,path:_,params:m,matched:I,meta:Db(I)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Jd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Mb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Lb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Lb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Db(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Zd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Gm(t,e){return e.children.some(n=>n===t||Gm(t,n))}const Ym=/#/g,Fb=/&/g,$b=/\//g,Ub=/=/g,Vb=/\?/g,Qm=/\+/g,Wb=/%5B/g,Bb=/%5D/g,Jm=/%5E/g,zb=/%60/g,Xm=/%7B/g,Hb=/%7C/g,Zm=/%7D/g,jb=/%20/g;function Bc(t){return encodeURI(""+t).replace(Hb,"|").replace(Wb,"[").replace(Bb,"]")}function qb(t){return Bc(t).replace(Xm,"{").replace(Zm,"}").replace(Jm,"^")}function Cl(t){return Bc(t).replace(Qm,"%2B").replace(jb,"+").replace(Ym,"%23").replace(Fb,"%26").replace(zb,"`").replace(Xm,"{").replace(Zm,"}").replace(Jm,"^")}function Kb(t){return Cl(t).replace(Ub,"%3D")}function Gb(t){return Bc(t).replace(Ym,"%23").replace(Vb,"%3F")}function Yb(t){return t==null?"":Gb(t).replace($b,"%2F")}function bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Qb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Qm," "),o=r.indexOf("="),a=bo(o<0?r:r.slice(0,o)),l=o<0?null:bo(r.slice(o+1));if(a in e){let c=e[a];At(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function eh(t){let e="";for(let n in t){const s=t[n];if(n=Kb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(At(s)?s.map(r=>r&&Cl(r)):[s&&Cl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Jb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=At(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Xb=Symbol(""),th=Symbol(""),zc=Symbol(""),e0=Symbol(""),El=Symbol("");function ci(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Bs(4,{from:n,to:e})):d instanceof Error?a(d):bb(d)?a(Bs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function La(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Zb(a)){const c=(a.__vccOpts||a)[e];c&&i.push(vn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=ab(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&vn(h,n,s,r,o)()}))}}return i}function Zb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nh(t){const e=Ut(zc),n=Ut(e0),s=Oe(()=>e.resolve(fe(t.to))),i=Oe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ws.bind(null,u));if(h>-1)return h;const m=sh(l[c-2]);return c>1&&sh(u)===m&&d[d.length-1].path!==m?d.findIndex(Ws.bind(null,l[c-2])):h}),r=Oe(()=>i.value>-1&&sI(n.params,s.value.params)),o=Oe(()=>i.value>-1&&i.value===n.matched.length-1&&jm(n.params,s.value.params));function a(l={}){return nI(l)?e[fe(t.replace)?"replace":"push"](fe(t.to)).catch(xi):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const eI=Gh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nh,setup(t,{slots:e}){const n=ir(nh(t)),{options:s}=Ut(zc),i=Oe(()=>({[ih(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ih(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ql("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),tI=eI;function nI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!At(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function sh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ih=(t,e,n)=>t??e??n,iI=Gh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ut(El),i=Oe(()=>t.route||s.value),r=Ut(th,0),o=Oe(()=>{let c=fe(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Oe(()=>i.value.matched[o.value]);Lr(th,Oe(()=>o.value+1)),Lr(Xb,a),Lr(El,i);const l=Ae();return $t(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Ws(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return rh(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,I=ql(h,Re({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return rh(n.default,{Component:I,route:c})||I}}});function rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const t0=iI;function rI(t){const e=Ob(t.routes,t),n=t.parseQuery||Qb,s=t.stringifyQuery||eh,i=t.history,r=ci(),o=ci(),a=ci(),l=e1(pn);let c=pn;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,v=>""+v),d=Na.bind(null,Yb),h=Na.bind(null,bo);function m(v,D){let x,B;return qm(v)?(x=e.getRecordMatcher(v),B=D):B=v,e.addRoute(B,x)}function _(v){const D=e.getRecordMatcher(v);D&&e.removeRoute(D)}function w(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function A(v,D){if(D=Re({},D||l.value),typeof v=="string"){const g=Oa(n,v,D.path),y=e.resolve({path:g.path},D),C=i.createHref(g.fullPath);return Re(g,y,{params:h(y.params),hash:bo(g.hash),redirectedFrom:void 0,href:C})}let x;if("path"in v)x=Re({},v,{path:Oa(n,v.path,D.path).path});else{const g=Re({},v.params);for(const y in g)g[y]==null&&delete g[y];x=Re({},v,{params:d(g)}),D.params=d(D.params)}const B=e.resolve(x,D),he=v.hash||"";B.params=u(h(B.params));const f=ub(s,Re({},v,{hash:qb(he),path:B.path})),p=i.createHref(f);return Re({fullPath:f,hash:he,query:s===eh?Jb(v.query):v.query||{}},B,{redirectedFrom:void 0,href:p})}function M(v){return typeof v=="string"?Oa(n,v,l.value.path):Re({},v)}function K(v,D){if(c!==v)return Bs(8,{from:D,to:v})}function F(v){return Ie(v)}function Z(v){return F(Re(M(v),{replace:!0}))}function Ce(v){const D=v.matched[v.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let B=typeof x=="function"?x(v):x;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=M(B):{path:B},B.params={}),Re({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function Ie(v,D){const x=c=A(v),B=l.value,he=v.state,f=v.force,p=v.replace===!0,g=Ce(x);if(g)return Ie(Re(M(g),{state:typeof g=="object"?Re({},he,g.state):he,force:f,replace:p}),D||x);const y=x;y.redirectedFrom=D;let C;return!f&&db(s,B,x)&&(C=Bs(16,{to:y,from:B}),Nt(B,B,!0,!1)),(C?Promise.resolve(C):J(y,B)).catch(E=>Kt(E)?Kt(E,2)?E:un(E):de(E,y,B)).then(E=>{if(E){if(Kt(E,2))return Ie(Re({replace:p},M(E.to),{state:typeof E.to=="object"?Re({},he,E.to.state):he,force:f}),D||y)}else E=$(y,B,!0,p,he);return _e(y,B,E),E})}function L(v,D){const x=K(v,D);return x?Promise.reject(x):Promise.resolve()}function W(v){const D=ps.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(v):v()}function J(v,D){let x;const[B,he,f]=oI(v,D);x=La(B.reverse(),"beforeRouteLeave",v,D);for(const g of B)g.leaveGuards.forEach(y=>{x.push(vn(y,v,D))});const p=L.bind(null,v,D);return x.push(p),Ye(x).then(()=>{x=[];for(const g of r.list())x.push(vn(g,v,D));return x.push(p),Ye(x)}).then(()=>{x=La(he,"beforeRouteUpdate",v,D);for(const g of he)g.updateGuards.forEach(y=>{x.push(vn(y,v,D))});return x.push(p),Ye(x)}).then(()=>{x=[];for(const g of f)if(g.beforeEnter)if(At(g.beforeEnter))for(const y of g.beforeEnter)x.push(vn(y,v,D));else x.push(vn(g.beforeEnter,v,D));return x.push(p),Ye(x)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),x=La(f,"beforeRouteEnter",v,D),x.push(p),Ye(x))).then(()=>{x=[];for(const g of o.list())x.push(vn(g,v,D));return x.push(p),Ye(x)}).catch(g=>Kt(g,8)?g:Promise.reject(g))}function _e(v,D,x){a.list().forEach(B=>W(()=>B(v,D,x)))}function $(v,D,x,B,he){const f=K(v,D);if(f)return f;const p=D===pn,g=ws?history.state:{};x&&(B||p?i.replace(v.fullPath,Re({scroll:p&&g&&g.scroll},he)):i.push(v.fullPath,he)),l.value=v,Nt(v,D,x,p),un()}let ue;function Ke(){ue||(ue=i.listen((v,D,x)=>{if(!Er.listening)return;const B=A(v),he=Ce(B);if(he){Ie(Re(he,{replace:!0}),B).catch(xi);return}c=B;const f=l.value;ws&&wb(Kd(f.fullPath,x.delta),yb()),J(B,f).catch(p=>Kt(p,12)?p:Kt(p,2)?(Ie(p.to,B).then(g=>{Kt(g,20)&&!x.delta&&x.type===nr.pop&&i.go(-1,!1)}).catch(xi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),de(p,B,f))).then(p=>{p=p||$(B,f,!1),p&&(x.delta&&!Kt(p,8)?i.go(-x.delta,!1):x.type===nr.pop&&Kt(p,20)&&i.go(-1,!1)),_e(B,f,p)}).catch(xi)}))}let et=ci(),oe=ci(),ye;function de(v,D,x){un(v);const B=oe.list();return B.length?B.forEach(he=>he(v,D,x)):console.error(v),Promise.reject(v)}function qt(){return ye&&l.value!==pn?Promise.resolve():new Promise((v,D)=>{et.add([v,D])})}function un(v){return ye||(ye=!v,Ke(),et.list().forEach(([D,x])=>v?x(v):D()),et.reset()),v}function Nt(v,D,x,B){const{scrollBehavior:he}=t;if(!ws||!he)return Promise.resolve();const f=!x&&Cb(Kd(v.fullPath,0))||(B||!x)&&history.state&&history.state.scroll||null;return Dl().then(()=>he(v,D,f)).then(p=>p&&vb(p)).catch(p=>de(p,v,D))}const rt=v=>i.go(v);let fs;const ps=new Set,Er={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:I,getRoutes:w,resolve:A,options:t,push:F,replace:Z,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:qt,install(v){const D=this;v.component("RouterLink",tI),v.component("RouterView",t0),v.config.globalProperties.$router=D,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(l)}),ws&&!fs&&l.value===pn&&(fs=!0,F(i.location).catch(he=>{}));const x={};for(const he in pn)Object.defineProperty(x,he,{get:()=>l.value[he],enumerable:!0});v.provide(zc,D),v.provide(e0,Nh(x)),v.provide(El,l);const B=v.unmount;ps.add(v),v.unmount=function(){ps.delete(v),ps.size<1&&(c=pn,ue&&ue(),ue=null,l.value=pn,fs=!1,ye=!1),B()}}};function Ye(v){return v.reduce((D,x)=>D.then(()=>W(x)),Promise.resolve())}return Er}function oI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ws(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ws(c,l))||i.push(l))}return[n,s,i]}const Pe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},aI={components:{RouterView:t0},setup(){ie()}};function lI(t,e,n,s,i,r){const o=O1("router-view");return P(),mt(o,null,{default:$e(({Component:a})=>[R(sn,{name:"fade",mode:"out-in"},{default:$e(()=>[(P(),mt(M1(a)))]),_:2},1024)]),_:1})}const cI=Pe(aI,[["render",lI]]);const uI={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},dI=["src"];function hI(t,e,n,s,i,r){return P(),U("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[N("span",null,xe(n.name),1),N("img",{src:n.image},null,8,dI)])}const Da=Pe(uI,[["render",hI],["__scopeId","data-v-253ecde8"]]),fI="/tileswap-naenae/images/freeplay-transparent.png",pI="/tileswap-naenae/images/puzzles-transparent.png",mI="/tileswap-naenae/images/svg/challenges.svg",gI="/tileswap-naenae/images/svg/stats.svg",_I="/tileswap-naenae/images/svg/settings.svg",yI="/tileswap-naenae/images/svg/tasks.svg",n0="/tileswap-naenae/images/svg/tutorial.svg";const Hc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},oh=()=>{or(t=>({"40b353db":t.backgroundColor,"447bfbe9":t.color}))},ah=Hc.setup;Hc.setup=ah?(t,e)=>(oh(),ah(t,e)):oh;function vI(t,e,n,s,i,r){return P(),U("button",null,xe(n.text),1)}const je=Pe(Hc,[["render",vI],["__scopeId","data-v-e0db62cb"]]);const wI={props:["icon","to"],methods:{handleClick(){this.to&&this.$router.push(this.to)}}},CI=["src"];function EI(t,e,n,s,i,r){return P(),U("main",{class:"container",onClick:e[0]||(e[0]=(...o)=>r.handleClick&&r.handleClick(...o))},[N("div",null,[N("img",{src:n.icon},null,8,CI)])])}const mi=Pe(wI,[["render",EI],["__scopeId","data-v-68fc9cdb"]]);const bI={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},II={class:"modal"};function TI(t,e,n,s,i,r){return P(),U("div",null,[R(sn,{name:"fade"},{default:$e(()=>[qr(N("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Qa,n.modelValue]])]),_:1}),R(sn,{name:"zoom"},{default:$e(()=>[qr(N("div",II,[L1(t.$slots,"default",{},void 0,!0)],512),[[Qa,n.modelValue]])]),_:3})])}const Bt=Pe(bI,[["render",TI],["__scopeId","data-v-b228608d"]]);const SI={computed:{list(){const{stats:t}=ie();return Object.keys(Co).map(e=>{const n=Co[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await JE(`users/${qo.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},kI=Object.assign(SI,{__name:"Stats",setup(t){return(e,n)=>(P(),U(ge,null,[N("ul",null,[(P(!0),U(ge,null,pt(e.list,(s,i)=>(P(),U("li",{key:i},xe(s),1))),128))]),fe(pr)?(P(),mt(je,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):vi("",!0)],64))}}),xI=Pe(kI,[["__scopeId","data-v-37e528a9"]]);const RI={methods:{changeSetting(t,e){const n=ie();n.settings[t]=e},formatRgb(t){return`rgb(${t.r},${t.g},${t.b})`},formatBR(t,e){let n="";for(let s=0;s<t.length;s++)n+=`${t[s]*e}px `;return n}},computed:{settingsList(){const{settings:t}=ie();return Object.fromEntries(Object.entries(vt).map(([n,s])=>[n,{...s,selected:t[n]}]))}}},PI=["data-value","onClick"];function AI(t,e,n,s,i,r){return P(),U("ul",null,[(P(!0),U(ge,null,pt(r.settingsList,(o,a)=>(P(),U("li",{key:a},[rr(xe(o.name)+" : ",1),(P(!0),U(ge,null,pt(o.options,(l,c)=>(P(),U("div",{style:Ht(`${l instanceof Array?l[0]instanceof Object?l.map((u,d)=>`--value-${d+1}: `+r.formatRgb(u)+";").join(" "):`--value: ${r.formatBR(l,.4)};`:`--value: ${l};`} 
        --selected: ${c===o.selected?"2px":"0px"}`),"data-value":l,class:Ge(a),key:l+" "+c,onClick:u=>r.changeSetting(a,c)},null,14,PI))),128))]))),128))])}const NI=Pe(RI,[["render",AI],["__scopeId","data-v-d201dd7d"]]);const jc={props:["value","max","text","barColor"],computed:{progress(){return this.value/this.max*100+"%"},barColorOrDefault(){return this.barColor??"var(--bg-color)"}}},lh=()=>{or(t=>({"2ceabb6e":t.progress,"1fcbc512":t.barColorOrDefault}))},ch=jc.setup;jc.setup=ch?(t,e)=>(lh(),ch(t,e)):lh;const OI=t=>(Un("data-v-27eeb14f"),t=t(),Vn(),t),MI={class:"container"},LI=OI(()=>N("div",{class:"progress"},null,-1)),DI={class:"text"};function FI(t,e,n,s,i,r){return P(),U("div",MI,[LI,N("div",DI,xe(n.text),1)])}const s0=Pe(jc,[["render",FI],["__scopeId","data-v-27eeb14f"]]),$I={FREEPLAY:"freeplay layout",PUZZLE:"puzzle",CHALLENGE:"challenge"},Te=class Te{constructor({timesRequired:e,targetId:n,type:s,difficulty:i}){this.timesRequired=e,this.targetIds=n,this.type=s,this.targetsDone=[],this.id=-1,this.difficulty=i??-1}get completed(){return this.targetsDone.length>=this.timesRequired*this.targetIds.length}get progress(){return{text:`${this.targetsDone.length}/${this.timesRequired*this.targetIds.length}`,value:this.targetsDone.length/(this.timesRequired*this.targetIds.length)}}get text(){return`Complete the ${this.targetIds.length>1?this.targetIds.length:""} 
            highlighted ${$I[this.type]}
            ${this.targetIds.length>1?"s":""} 
            ${this.timesRequired} time${this.timesRequired>1?"s":""} 
            ${this.timesRequired>1&&this.targetIds.length>1?"each":""} 
            ${this.difficulty!=-1?this.difficultyText():""}`}claim(){const{currentTasks:e,setTask:n,maxTask:s,setMaxTask:i}=ie(),r=e.indexOf(this.id);i(s+1);const o=s<Te.TASKS.length-1?s+1:-1;n(r,o)}difficultyText(){if(this.type!==Te.TASK_TYPES.FREEPLAY)return`in less than ${this.difficulty} ${this.type===Te.TASK_TYPES.PUZZLE?"moves":"seconds"}`;const e=st.LAYOUTS.filter(r=>r.id===this.targetIds[0])[0],n=["very easy","easy","normal","hard","very hard"],s=e.width*e.height-e.exclude.length;return`in ${n[Math.floor((this.difficulty-1)/(s/n.length))]} mode`}static isTaskTarget(e,n){const{currentTasks:s}=ie();return s.filter(i=>i!==-1).filter(i=>Te.TASKS[i].type===n).some(i=>{const r=Te.TASKS[i];return r.targetIds.includes(e)?r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired:!1})}static advanceTasks(e,n,s){const{currentTasks:i}=ie();i.filter(r=>r!==-1).filter(r=>Te.TASKS[r].type===n).filter(r=>Te.TASKS[r].targetIds.includes(e)).filter(r=>(n===Te.TASK_TYPES.FREEPLAY?Te.TASKS[r].difficulty<=s:Te.TASKS[r].difficulty>=s)||Te.TASKS[r].difficulty===-1).filter(r=>{const o=Te.TASKS[r];return o.targetsDone.reduce((a,l)=>a+(l===e?1:0),0)<o.timesRequired}).forEach(r=>{Te.TASKS[r].targetsDone.push(e)})}static generateTask(e,n){let s=[];if(n===Te.TASK_TYPES.PUZZLE){const i=Math.floor(Math.min(e*Jt.PUZZLES.length/100,Jt.PUZZLES.length*.9)),r=Math.floor(Jt.PUZZLES.length/10);s.push(Math.min(Math.floor(Math.random()*r+i),Jt.PUZZLES.length-1));const o=Jt.PUZZLES.filter(l=>l.id===s[0])[0],a=e<=30?-1:e<=60?o.solution.length*1.2:o.solution.length;return new Te({timesRequired:1,targetId:s,type:n,difficulty:Math.ceil(a)})}}};Bn(Te,"TASK_TYPES",{FREEPLAY:"FREEPLAY",PUZZLE:"PUZZLE",CHALLENGE:"CHALLENGE"}),Bn(Te,"TASKS",[new Te({timesRequired:2,targetId:[1],type:Te.TASK_TYPES.FREEPLAY,difficulty:16}),Te.generateTask(Math.random()*99+1,Te.TASK_TYPES.PUZZLE),new Te({timesRequired:1,targetId:[1],type:Te.TASK_TYPES.CHALLENGE,difficulty:2})].map((e,n)=>(e.id=n,e)));let it=Te;const UI={class:"container"},VI=["onClick"],WI={methods:{claimTask(t){t.completed&&t.claim()}},computed:{tasks(){const{currentTasks:t}=ie();return t.filter(e=>e!==-1).map(e=>it.TASKS[e])}}},BI=Object.assign(WI,{__name:"TaskContainer",setup(t){return(e,n)=>(P(),U("div",UI,[R(Dg,{name:"slide"},{default:$e(()=>[(P(!0),U(ge,null,pt(e.tasks,s=>(P(),U("div",{onClick:i=>e.claimTask(s),class:Ge(["task",{"completed-task":s.completed}]),key:s.id},[N("p",null,xe(s.text),1),R(s0,{barColor:s.completed?"var(--hl-color)":null,value:s.progress.value,text:s.progress.text,max:"1"},null,8,["barColor","value","text"])],10,VI))),128))]),_:1})]))}}),zI=Pe(BI,[["__scopeId","data-v-d219c454"]]);const HI={},i0=t=>(Un("data-v-8367d9c9"),t=t(),Vn(),t),jI=i0(()=>N("h1",null,[rr("tile"),N("span",null,"swap")],-1)),qI=i0(()=>N("p",null," loading... ",-1)),KI=[jI,qI];function GI(t,e){return P(),U("main",null,KI)}const YI=Pe(HI,[["render",GI],["__scopeId","data-v-8367d9c9"]]),qc=()=>{let t=Ae(window.innerWidth),e=Ae(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Di(()=>window.addEventListener("resize",n)),Di(()=>window.addEventListener("resize",s)),Fi(()=>window.removeEventListener("resize",n)),Fi(()=>window.removeEventListener("resize",s));const i=Oe(()=>t.value),r=Oe(()=>e.value);return{width:i,height:r}};const na=t=>(Un("data-v-17ec989a"),t=t(),Vn(),t),QI={class:"container"},JI=na(()=>N("h1",{class:"main-title"},[rr("Tile"),N("span",null,"Swap")],-1)),XI={class:"buttons"},ZI=na(()=>N("h1",null,"Stats",-1)),eT=na(()=>N("h1",null,"Settings",-1)),tT=na(()=>N("h1",null,"Tasks",-1)),nT={data(){const{width:t}=qc();return{windowWidth:t,user:qo,isSignedIn:pr,showStats:!1,showTasks:!1,showSettings:!1,showSplash:!qi.value}},methods:{signOut:al,signInForm(){$v(prompt("Email"),prompt("Password"))}},mounted(){$t(qi,t=>{this.showSplash=!1})}},sT=Object.assign(nT,{__name:"HomeView",setup(t){return(e,n)=>(P(),U("div",QI,[JI,N("main",XI,[R(Da,{name:"Freeplay",image:fe(fI),path:"/freeplaySelection"},null,8,["image"]),R(Da,{name:"Puzzles",image:fe(pI),path:"/puzzleSelection"},null,8,["image"]),R(Da,{name:"Challenges",image:fe(mI),path:"/challengeSelection"},null,8,["image"])]),N("div",{class:Ge({bottom:e.windowWidth>600,center:e.windowWidth>600,"text-center":e.windowWidth<=600}),style:{width:"max-content"}},[R(mi,{icon:fe(yI),onClick:n[0]||(n[0]=s=>e.showTasks=!0)},null,8,["icon"]),R(mi,{icon:fe(gI),onClick:n[1]||(n[1]=s=>e.showStats=!0)},null,8,["icon"]),R(mi,{icon:fe(_I),onClick:n[2]||(n[2]=s=>e.showSettings=!0)},null,8,["icon"]),R(mi,{icon:fe(n0),to:"/tutorial"},null,8,["icon"])],2),N("div",{class:Ge({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[fe(pr)?(P(),U("p",{key:0,onClick:n[3]||(n[3]=(...s)=>fe(al)&&fe(al)(...s))}," You are logged in as "+xe(fe(qo).displayName),1)):(P(),U("p",{key:1,onClick:n[4]||(n[4]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),R(Bt,{modelValue:e.showStats,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showStats=s)},{default:$e(()=>[ZI,R(xI),R(je,{black:"",text:"close",onClick:n[5]||(n[5]=s=>e.showStats=!1)})]),_:1},8,["modelValue"]),R(Bt,{modelValue:e.showSettings,"onUpdate:modelValue":n[7]||(n[7]=s=>e.showSettings=s)},{default:$e(()=>[eT,R(NI)]),_:1},8,["modelValue"]),R(Bt,{modelValue:e.showTasks,"onUpdate:modelValue":n[9]||(n[9]=s=>e.showTasks=s)},{default:$e(()=>[tT,R(zI),R(je,{black:"",text:"close",onClick:n[8]||(n[8]=s=>e.showTasks=!1)})]),_:1},8,["modelValue"]),R(sn,{name:"fade"},{default:$e(()=>[e.showSplash?(P(),mt(YI,{key:0})):vi("",!0)]),_:1})]))}}),iT=Pe(sT,[["__scopeId","data-v-17ec989a"]]);const rT={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return it.isTaskTarget(this.layout.id,it.TASK_TYPES.FREEPLAY)}},methods:{openGame(){const t=ie();t.isRandomFreeplay=!1,t.setLayout(this.layout),this.$router.push("/freeplayGame")}}},oT=["data-level","title"];function aT(t,e,n,s,i,r){return P(),U("div",{onClick:e[0]||(e[0]=(...o)=>r.openGame&&r.openGame(...o)),"data-level":n.completion,class:Ge(["container",{"is-task-target":r.isTaskTarget}]),title:`${n.layout.width}x${n.layout.height} - ${n.layout.exclude.length} (id: ${n.layout.id})`},[(P(!0),U(ge,null,pt(r.includedTiles,o=>(P(),U("div",{key:"t"+o,class:"tile",style:Ht({transform:`translate(${i.tileSizePreview*(o%n.layout.width-n.layout.width/2)+50}px, ${i.tileSizePreview*(Math.floor(o/n.layout.width)-n.layout.height/2)+50}px)`,width:`${i.tileSizePreview-1}px`,height:`${i.tileSizePreview-1}px`})},null,4))),128))],10,oT)}const lT=Pe(rT,[["render",aT],["__scopeId","data-v-372f8205"]]),cT={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},zs=Object.assign(cT,{__name:"LinkButton",setup(t){return(e,n)=>(P(),mt(je,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const r0=t=>(Un("data-v-487d3bc6"),t=t(),Vn(),t),uT=r0(()=>N("h1",{class:"title"},"Select a layout",-1)),dT=r0(()=>N("br",null,null,-1)),hT={class:"text-center"},fT={data(){const t=new Set(st.FILTERED_LAYOUTS.map(n=>n.unlockCategory)).size,e=new Array(t).fill(0).map((n,s)=>st.FILTERED_LAYOUTS.filter(i=>i.unlockCategory===s+1));return console.log(e),{layouts:e}},methods:{goHome(){this.$router.push("/")},startRandomFreeplay(){const t=ie();t.isRandomFreeplay=!0,t.setLayout(st.getRandomLayout()),this.$router.push("/freeplayGame")}}},pT=Object.assign(fT,{__name:"FreeplaySelection",setup(t){return(e,n)=>(P(),U("main",null,[uT,R(zs,{class:"top right",text:"back",to:"/"}),dT,N("div",null,[N("div",hT,[R(mi,{icon:fe(n0),onClick:e.startRandomFreeplay},null,8,["icon","onClick"])]),(P(!0),U(ge,null,pt(e.layouts,(s,i)=>(P(),U("div",{class:"layouts",key:i},[(P(!0),U(ge,null,pt(s,(r,o)=>(P(),mt(lT,{layout:r,completion:r.id,key:o},null,8,["layout","completion"]))),128))]))),128))])]))}}),mT=Pe(pT,[["__scopeId","data-v-487d3bc6"]]);const gT={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return ie().stats.puzzlesCompleted.some(({id:e})=>e===this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return it.isTaskTarget(this.puzzle.id,it.TASK_TYPES.PUZZLE)},buttonColor(){const t=this.puzzle.solution.length,e=this.puzzle.completionMoves;return this.solved?e<=t?"var(--success-color)":e<=t*1.2?"var(--silver-color)":"var(--bronze-color)":"var(--hl-color)"}},methods:{openGame(){const t=ie();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Wc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},_T=Object.assign(gT,{__name:"PuzzleSelectionButton",setup(t){return or(e=>({b9f6d758:e.buttonColor})),(e,n)=>(P(),U("div",{class:Ge(["container",{"is-task-target":e.isTaskTarget}]),onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(P(!0),U(ge,null,pt(e.includedTiles,s=>(P(),U("div",{key:"t"+s,class:"tile",style:Ht({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],2))}}),yT=Pe(_T,[["__scopeId","data-v-5a134c7a"]]);const vT=t=>(Un("data-v-b0e4f03a"),t=t(),Vn(),t),wT=vT(()=>N("h1",{class:"title"},"Select a puzzle",-1)),CT={class:"layouts"},ET={data(){return{puzzles:Jt.FILTERED_PUZZLES}}},bT=Object.assign(ET,{__name:"PuzzleSelection",setup(t){return(e,n)=>(P(),U("main",null,[wT,R(zs,{class:"top right",text:"back",to:"/"}),N("div",CT,[(P(!0),U(ge,null,pt(e.puzzles,(s,i)=>(P(),mt(yT,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),IT=Pe(bT,[["__scopeId","data-v-b0e4f03a"]]);function bl(t){const e=Math.floor(t/60).toString(),n=(t%60).toString();return`${e.padStart(2,"0")}:${n.padStart(2,"0")}`}const Kc={props:["challenge"],computed:{formattedChall(){const t=this.challenge.moveLimit.toString(),e=this.challenge.nPatterns.toString(),n=this.challenge.maxPercent!==0?this.challenge.maxPercent!==100?this.challenge.maxPercent+"%":bl(this.challenge.minTime):"";return(this.challenge.name?this.challenge.name:bl(challenge.timeLimit)+"<br>"+(t>0?t+" moves<br>":"no move limit<br>")+e+" layouts")+` ${(n&&"<br>(")+n+(n&&")")}`},isTaskTarget(){return it.isTaskTarget(this.challenge.id,it.TASK_TYPES.CHALLENGE)}}},uh=()=>{or(t=>({"6fdd6d86":t.color}))},dh=Kc.setup;Kc.setup=dh?(t,e)=>(uh(),dh(t,e)):uh;const TT=["innerHTML"];function ST(t,e,n,s,i,r){return P(),U("div",{class:Ge({"is-task-target":r.isTaskTarget,"is-completed":n.challenge.maxPercent===100}),innerHTML:r.formattedChall},null,10,TT)}const kT=Pe(Kc,[["render",ST],["__scopeId","data-v-b05bb205"]]),xT=N("h1",{class:"title"},"Select a challenge",-1),RT={data(){return{challenges:wo.CHALLENGES}},methods:{selectChallenge(t){const e=ie();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Wc(t.modulo),this.$router.push("/challengeGame")}}},PT=Object.assign(RT,{__name:"ChallengeSelection",setup(t){return(e,n)=>(P(),U("div",null,[xT,R(zs,{class:"top right",text:"back",to:"/"}),(P(!0),U(ge,null,pt(e.challenges,s=>(P(),mt(kT,{key:s.id,onClick:i=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}}),AT={props:["outline","highlight","borderRadius"]},NT={width:"100%",height:"100%",viewBox:"0 0 60.000008 60.000004",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},OT={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function MT(t,e,n,s,i,r){return P(),U("div",null,[(P(),U("svg",NT,[N("g",OT,[N("path",{id:"path2326",d:"M 22.506418,5.7476747 C 19.729543,5.7881441 7.8201531,14.600871 -1.6752686,20.993289 l -1.535864,6.447165 c 0,0 -4.6215975,10.854874 -2.5967021,9.918729 l 3.9366651,26.417533 c 1.18904376,0 8.3926138,-0.366283 9.579337,-0.368733 0.6651477,-0.0012 0.9771618,1.388743 1.1322075,1.97372 2.9859851,8.449902 4.1459521,0.467401 4.1261221,0.653136 l 6.140299,-1.207221 33.462005,-2.187094 c 0,0 1.73733,-2.804207 5.664739,-9.625496 5.167643,-7.441406 7.790982,-10.03738 7.307621,-10.955232 -1.02416,-1.944774 -1.679155,0.3216 -7.156857,4.972479 -6.488887,4.740256 -7.512793,5.637813 -11.025439,8.26294 -1.593571,1.037087 -0.407679,-0.777844 0.01862,-2.037005 0.426271,-1.25916 0.09293,-1.962495 -1.315379,-1.055221 -1.408323,0.907273 -3.891531,3.425633 -7.11556,4.703426 -3.224027,1.277791 -7.189312,1.314854 -7.497243,-0.652777 1.196888,-1.713332 8.339057,-10.890201 7.083592,-12.451866 -2.862861,-0.737663 -11.436846,8.513955 -10.277598,6.539978 1.224604,-2.063728 1.11112,-2.10523 2.78093,-4.204606 2.142792,-2.694037 2.983485,-3.22191 2.571799,-4.080868 -0.58137,-0.315366 -3.209137,1.491343 -5.122946,3.210942 -1.472112,1.322727 -9.704484,8.362099 -9.970116,8.192687 -0.348355,-0.222162 1.595981,-4.360091 3.152714,-5.988948 C 31.514606,37.343421 37.626519,30.328515 36.488021,29.176048 35.001437,27.67122 27.933955,33.117968 28.889153,32.24157 29.970967,31.249006 40.512676,22.019332 40.073472,18.916154 35.831584,18.80262 18.81402,35.967435 14.21696,38.000132 c 0,0 5.034507,-4.316388 5.357861,-8.104019 0.532377,-3.978252 1.294722,-4.905392 3.721358,-7.04782 C 28.2759,18.451786 37.99877,12.306987 35.042383,9.8025547 34.923911,9.7021952 34.769449,9.6480723 34.581499,9.6370967 30.960798,9.4256237 10.440538,26.211123 8.4008563,26.513292 7.9258475,25.453006 8.2597465,21.963129 11.693297,18.587622 c 0,0 12.853712,-11.1171798 11.722015,-12.4819086 -0.207237,-0.2499107 -0.51219,-0.3638785 -0.908887,-0.3580973 z","sodipodi:nodetypes":"sccccccccccsccssscccscsscsscscssccssss",style:Ht([{fill:n.highlight},{"fill-opacity":"1",stroke:"none","stroke-width":"0.244206px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"}])},null,4)])]))])}const hh=Pe(AT,[["render",MT]]);const LT={class:"inner-tile"},DT={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:ki.value[this.tile],backColor:ki.value[this.mod(this.tile+1)],frontOutline:Pa.value[this.tile],backOutline:Pa.value[this.mod(this.tile+1)],frontHighlight:Aa.value[this.tile],backHighlight:Aa.value[this.mod(this.tile+1)],gradient:ki,outlineGradient:Pa,highlightGradient:Aa}},computed:{borderRadiusSetting(){return Math.max(...vt.tilesShape.value)}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Q.value+Q.value)%Q.value}},mounted(){const t=ie(),e=vt.tilesShape.value,n=()=>{const{width:s,height:i}=t.currentLayout,r=1/(Math.sqrt(s**2+i**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius="";for(let o=0;o<e.length;o++)this.borderRadius+=`${e[o]*r*.2/30}px `;this.tileSize=r+"px"};$t(()=>t.currentLayout,n,{deep:!0,immediate:!1}),n(),window.addEventListener("resize",n),this.$nextTick(n),window.addEventListener("orientationchange",n)}},FT=Object.assign(DT,{__name:"Tile",setup(t){return or(e=>({"5adfd9c8":e.tileSize,f37c4f1a:t.visible?1:0,"637add52":e.borderRadius,"4305c3dc":t.visible?"pointer":"default","9df0715c":e.frontOutline,"46a37273":e.frontColor,faef903a:e.backColor})),(e,n)=>(P(),U("div",{class:Ge(["tile",{"flipped-tile":e.flipped}])},[N("div",LT,[N("div",{class:"front",style:Ht({background:e.frontColor})},[R(hh,{outline:e.frontOutline,highlight:e.frontHighlight,borderRadius:e.borderRadiusSetting/3},null,8,["outline","highlight","borderRadius"])],4),N("div",{class:"back",style:Ht({background:e.backColor})},[R(hh,{outline:e.backOutline,highlight:e.backHighlight,borderRadius:e.borderRadiusSetting/3},null,8,["outline","highlight","borderRadius"])],4)])],2))}}),$T=Pe(FT,[["__scopeId","data-v-5f1be2a5"]]);const UT={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){const{currentChallenge:t,settings:e}=ie();return{currentChallenge:t,settings:e,gradient:ki}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=ie(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},VT=Object.assign(UT,{__name:"Layout",setup(t){return(e,n)=>(P(),U("div",null,[N("div",null,[(P(!0),U(ge,null,pt(t.modelValue.matrix,(s,i)=>{var r;return P(),U("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+fe(Q)},[(P(!0),U(ge,null,pt(s,(o,a)=>{var l;return P(),mt($T,{class:Ge(["tile",{solution:fe(Tn)&&t.solution&&t.solution[i][a]>=1,"color-blind":e.settings.colorBlind===1}]),small:t.small,tile:o,"data-tile":`${o+1}`,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern)+t.modelValue.id,style:Ht({outline:t.target?`5px solid ${fe(ki)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&fe(Q)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a)},null,8,["small","tile","data-tile","visible","position","class","style","data-moves","onClick"])}),128))])}),128))])]))}}),sa=Pe(VT,[["__scopeId","data-v-b102a0d5"]]);const WT={props:["modelValue"],emits:["update:modelValue"],data(){const t=ie();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Q.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},BT={class:"diff"},zT=["value","max"];function HT(t,e,n,s,i,r){return P(),U("div",BT,[N("h2",null,"difficulty - "+xe(r.difficultyText),1),N("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,zT)])}const jT=Pe(WT,[["render",HT],["__scopeId","data-v-38400e03"]]);const qT={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},KT={class:"diff"},GT=["value"];function YT(t,e,n,s,i,r){return P(),U("div",KT,[N("h2",null,"states - "+xe(r.moduloText),1),N("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,GT)])}const QT=Pe(qT,[["render",YT],["__scopeId","data-v-5833a5d1"]]);const Cr=t=>(Un("data-v-72d49e50"),t=t(),Vn(),t),JT={class:"top-menu"},XT=Cr(()=>N("span",null," DEV ",-1)),ZT=[XT],eS={class:"top right"},tS=Cr(()=>N("h1",null,"DevMode",-1)),nS={class:"input"},sS=Cr(()=>N("hr",null,null,-1)),iS={key:0},rS=Cr(()=>N("p",null,"Only one solution found:",-1)),oS={key:1},aS=Cr(()=>N("p",null,"Multiple solutions found:",-1)),lS=["onClick"],cS={data(){const t=ie(),e=t.currentLayout,{width:n}=qc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Q.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty,this.randomize()},internalModulo(t){Wc(t),this.randomize()},showModal(){this.showModal||(this.store.isRandomFreeplay&&(this.store.setLayout(st.getRandomLayout()),this.layout=this.store.currentLayout),this.randomize())}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,Tn.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Q.value+Q.value)%Q.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0,it.advanceTasks(this.layout.id,it.TASK_TYPES.FREEPLAY,this.store.difficulty))},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Q.value-1))),this.$nextTick(()=>{try{Tn.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=Hm(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),$t(Tn,t=>{t&&this.updateSolutions()})}},uS=Object.assign(cS,{__name:"FreeplayGame",setup(t){return(e,n)=>(P(),U("div",null,[N("div",JT,[fe(Tn)&&e.windowWidth<600?(P(),U("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},ZT)):vi("",!0),R(je,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),R(jT,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),qr(N("p",{class:Ge(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},xe(e.moves)+" move"+xe(e.moves>1?"s":""),3),[[Qa,e.moves>0]]),N("div",eS,[R(zs,{text:"back",to:"/freeplaySelection"}),R(QT,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),N("main",null,[R(sn,{name:"fade",mode:"out-in"},{default:$e(()=>[(P(),mt(sa,{key:fe(Q)+e.layout.id,modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:fe(Tn)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),fe(Tn)?vi("",!0):(P(),U("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>fe(Hd)(!0))},"v")),R(sn,{name:"fade"},{default:$e(()=>[fe(Tn)&&(!(e.windowWidth<600)||e.showDevMode)?(P(),U("div",{key:0,class:Ge(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[N("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>fe(Hd)(!1))},"x"),tS,N("div",nS,[qr(N("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[Wg,e.solveOnClick]]),rr(" re-solve on click ")]),N("p",null,"Det: "+xe(e.determinant),1),sS,e.determinant!==0?(P(),U("div",iS,[rS,N("p",null,xe(e.solutions[0].moves)+" moves",1)])):(P(),U("div",oS,[aS,(P(!0),U(ge,null,pt(e.solutions,(s,i)=>(P(),U("p",{class:Ge(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},xe(s.moves)+" moves ",11,lS))),128))]))],2)):vi("",!0)]),_:1}),R(Bt,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:$e(()=>[N("h1",null,"you won in "+xe(e.moves)+" move"+xe(e.moves>1?"s":"")+"!",1),R(je,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),dS=Pe(uS,[["__scopeId","data-v-72d49e50"]]);const hS=t=>(Un("data-v-7263d965"),t=t(),Vn(),t),fS=hS(()=>N("h1",null,"no moves remaining!",-1)),pS={data(){const e=ie().currentPuzzle,n=e.base.copy(),{width:s}=qc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){this.remainingMoves>0&&(ie(),this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,this.puzzle.completionMoves=this.moves,it.advanceTasks(this.puzzle.id,it.TASK_TYPES.PUZZLE,this.moves)):this.remainingMoves===0&&(this.showLostModal=!0))}}},mS=Object.assign(pS,{__name:"PuzzleGame",setup(t){return(e,n)=>(P(),U("div",null,[R(zs,{class:"top right",text:"back",to:"/puzzleSelection"}),N("div",{class:Ge(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[N("h1",null,xe(e.remainingMoves)+" move"+xe(e.remainingMoves>1?"s":"")+" remaining",1),R(je,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),N("main",null,[R(sa,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),R(Bt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:$e(()=>[N("h1",null,"you won in "+xe(e.moves)+" move"+xe(e.moves>1?"s":"")+"!",1),R(je,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),R(Bt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:$e(()=>[fS,R(je,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),R(zs,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),gS=Pe(mS,[["__scopeId","data-v-7263d965"]]);const o0=t=>(Un("data-v-5dc54e70"),t=t(),Vn(),t),_S={key:0},yS={class:"info center"},vS={class:"moves center"},wS={key:1,class:"info center"},CS=o0(()=>N("h1",null,"you won the challenge!",-1)),ES=o0(()=>N("h1",null,"Are you sure you want to go back?",-1)),bS={data(){const{currentChallenge:t}=ie();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,showPauseModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=ie();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.minTime=Math.min(this.currentChallenge.timeLimit-this.time,this.currentChallenge.minTime),this.currentChallenge.maxPercent=100,it.advanceTasks(this.currentChallenge.id,it.TASK_TYPES.CHALLENGE,this.currentChallenge.timeLimit-this.time),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))},resume(){this.showPauseModal=!1},quit(){this.showPauseModal=!1,window.clearInterval(this.timerId),this.currentChallenge.reset(),this.$router.push("/challengeSelection")}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){return bl(this.time)},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1*this.hasStarted*!this.showPauseModal,this.time<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))},1e3)}},IS=Object.assign(bS,{__name:"ChallengeGame",setup(t){return(e,n)=>(P(),U("div",null,[R(je,{class:"top right",text:"back",onClick:n[0]||(n[0]=s=>e.showPauseModal=!0)}),e.hasStarted?(P(),U("div",_S,[N("h2",yS,xe(e.formattedTime)+" "+xe(e.moves)+" - "+xe(e.percentageCompleted+"%"),1),N("h2",vS,xe(e.movesPer),1)])):(P(),U("h2",wS,"Click To Start The Challenge !")),R(s0,{class:"center progress",value:e.percentageCompleted,max:100},null,8,["value"]),N("main",null,[R(sn,{name:"fade",mode:"out-in"},{default:$e(()=>[(P(),mt(sa,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[1]||(n[1]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),R(Bt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showWinModal=s)},{default:$e(()=>[CS,R(je,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),R(Bt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[5]||(n[5]=s=>e.showLostModal=s)},{default:$e(()=>[N("h1",null,xe(e.modalText),1),R(je,{black:"",text:"adnwkhu!",onClick:n[4]||(n[4]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"]),R(Bt,{modelValue:e.showPauseModal,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showPauseModal=s)},{default:$e(()=>[ES,R(je,{black:"",text:"resume",onClick:e.resume},null,8,["onClick"]),R(je,{black:"",text:"quit",onClick:e.quit},null,8,["onClick"])]),_:1},8,["modelValue"])]))}}),TS=Pe(IS,[["__scopeId","data-v-5dc54e70"]]),SS=N("h1",{class:"title"},"how to play",-1),kS={key:0},xS=N("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),RS=N("h1",null,"Try to get all the tiles to be white!",-1),PS={key:1},AS=N("h1",null,"Nice! Now observe what happens at the corners",-1),NS={key:2},OS=N("h1",null,"Well done! Okay one last , a bit harder",-1),MS={key:3},LS=N("h1",null,"Great job! Ready to play?",-1),DS=N("h1",{class:"text-center"},"Try it here!",-1),FS={data(){const t=ie(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new st({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},$S=Object.assign(FS,{__name:"TutorialView",setup(t){return(e,n)=>(P(),U("div",null,[SS,R(Bt,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:$e(()=>[e.stage===-1?(P(),U("div",kS,[xS,RS,R(je,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(P(),U("div",PS,[AS,R(je,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(P(),U("div",NS,[OS,R(je,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(P(),U("div",MS,[LS,R(je,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),DS,R(sa,{class:Ge([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),US=rI({history:Eb("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:iT},{path:"/tutorial",name:"tutorial",component:$S},{path:"/freeplaySelection",name:"freeplaySelection",component:mT},{path:"/puzzleSelection",name:"puzzleSelection",component:IT},{path:"/challengeSelection",name:"challengeSelection",component:PT},{path:"/freeplayGame",name:"freeplayGame",component:dS},{path:"/puzzleGame",name:"puzzleGame",component:gS},{path:"/challengeGame",name:"challengeGame",component:TS}]}),Gc=jg(cI),a0=Gg();ar(a0);Gc.use(US);Gc.use(a0);Gc.mount("#app");
