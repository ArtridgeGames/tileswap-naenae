var o0=Object.defineProperty;var a0=(t,e,n)=>e in t?o0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wn=(t,e,n)=>(a0(t,typeof e!="symbol"?e+"":e,n),n),Zc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var ii=(t,e,n)=>(Zc(t,e,"read from private field"),n?n.call(t):e.get(t)),Tr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Ot=(t,e,n)=>(Zc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Sl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Re={},Is=[],xt=()=>{},l0=()=>!1,c0=/^on[^a-z]/,ko=t=>c0.test(t),kl=t=>t.startsWith("onUpdate:"),De=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},u0=Object.prototype.hasOwnProperty,ce=(t,e)=>u0.call(t,e),B=Array.isArray,Ts=t=>ir(t)==="[object Map]",xo=t=>ir(t)==="[object Set]",eu=t=>ir(t)==="[object Date]",Z=t=>typeof t=="function",Fe=t=>typeof t=="string",Pi=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",hh=t=>we(t)&&Z(t.then)&&Z(t.catch),fh=Object.prototype.toString,ir=t=>fh.call(t),d0=t=>ir(t).slice(8,-1),ph=t=>ir(t)==="[object Object]",Rl=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h0=/-(\w)/g,Bt=Ro(t=>t.replace(h0,(e,n)=>n?n.toUpperCase():"")),f0=/\B([A-Z])/g,qs=Ro(t=>t.replace(f0,"-$1").toLowerCase()),Po=Ro(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Ro(t=>t?`on${Po(t)}`:""),Ai=(t,e)=>!Object.is(t,e),Dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},p0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},m0=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let tu;const za=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?v0(s):Ht(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(we(t))return t}}const g0=/;(?![^(]*\))/g,_0=/:([^]+)/,y0=/\/\*[^]*?\*\//g;function v0(t){const e={};return t.replace(y0,"").split(g0).forEach(n=>{if(n){const s=n.split(_0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Je(t){let e="";if(Fe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Je(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const w0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",C0=Sl(w0);function mh(t){return!!t||t===""}function b0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ao(t[s],e[s]);return n}function Ao(t,e){if(t===e)return!0;let n=eu(t),s=eu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Pi(t),s=Pi(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?b0(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ao(t[o],e[o]))return!1}}return String(t)===String(e)}function gh(t,e){return t.findIndex(n=>Ao(n,e))}const pe=t=>Fe(t)?t:t==null?"":B(t)||we(t)&&(t.toString===fh||!Z(t.toString))?JSON.stringify(t,_h,2):String(t),_h=(t,e)=>e&&e.__v_isRef?_h(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!B(e)&&!ph(e)?String(e):e;let mt;class yh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function vh(t){return new yh(t)}function E0(t,e=mt){e&&e.active&&e.effects.push(t)}function wh(){return mt}function I0(t){mt&&mt.cleanups.push(t)}const Pl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ch=t=>(t.w&Dn)>0,bh=t=>(t.n&Dn)>0,T0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},S0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ch(i)&&!bh(i)?i.delete(t):e[n++]=i,i.w&=~Dn,i.n&=~Dn}e.length=n}},jr=new WeakMap;let hi=0,Dn=1;const Va=30;let bt;const ns=Symbol(""),Wa=Symbol("");class Al{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,E0(this,s)}run(){if(!this.active)return this.fn();let e=bt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,xn=!0,Dn=1<<++hi,hi<=Va?T0(this):nu(this),this.fn()}finally{hi<=Va&&S0(this),Dn=1<<--hi,bt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(nu(this),this.onStop&&this.onStop(),this.active=!1)}}function nu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Eh=[];function Ks(){Eh.push(xn),xn=!1}function Gs(){const t=Eh.pop();xn=t===void 0?!0:t}function dt(t,e,n){if(xn&&bt){let s=jr.get(t);s||jr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Pl()),Ih(i)}}function Ih(t,e){let n=!1;hi<=Va?bh(t)||(t.n|=Dn,n=!Ch(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function on(t,e,n,s,i,r){const o=jr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Rl(n)&&a.push(o.get("length")):(a.push(o.get(ns)),Ts(t)&&a.push(o.get(Wa)));break;case"delete":B(t)||(a.push(o.get(ns)),Ts(t)&&a.push(o.get(Wa)));break;case"set":Ts(t)&&a.push(o.get(ns));break}if(a.length===1)a[0]&&Ba(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ba(Pl(l))}}function Ba(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&su(s);for(const s of n)s.computed||su(s)}function su(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function k0(t,e){var n;return(n=jr.get(t))==null?void 0:n.get(e)}const x0=Sl("__proto__,__v_isRef,__isVue"),Th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi)),R0=Nl(),P0=Nl(!1,!0),A0=Nl(!0),iu=N0();function N0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let r=0,o=this.length;r<o;r++)dt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(oe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ks();const s=oe(this)[e].apply(this,n);return Gs(),s}}),t}function M0(t){const e=oe(this);return dt(e,"has",t),e.hasOwnProperty(t)}function Nl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Y0:Ph:e?Rh:xh).get(s))return s;const o=B(s);if(!t){if(o&&ce(iu,i))return Reflect.get(iu,i,r);if(i==="hasOwnProperty")return M0}const a=Reflect.get(s,i,r);return(Pi(i)?Th.has(i):x0(i))||(t||dt(s,"get",i),e)?a:Oe(a)?o&&Rl(i)?a:a.value:we(a)?t?Nh(a):rr(a):a}}const O0=Sh(),L0=Sh(!0);function Sh(t=!1){return function(n,s,i,r){let o=n[s];if(Os(o)&&Oe(o)&&!Oe(i))return!1;if(!t&&(!qr(i)&&!Os(i)&&(o=oe(o),i=oe(i)),!B(n)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const a=B(n)&&Rl(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===oe(r)&&(a?Ai(i,o)&&on(n,"set",s,i):on(n,"add",s,i)),l}}function D0(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function F0(t,e){const n=Reflect.has(t,e);return(!Pi(e)||!Th.has(e))&&dt(t,"has",e),n}function $0(t){return dt(t,"iterate",B(t)?"length":ns),Reflect.ownKeys(t)}const kh={get:R0,set:O0,deleteProperty:D0,has:F0,ownKeys:$0},U0={get:A0,set(t,e){return!0},deleteProperty(t,e){return!0}},z0=De({},kh,{get:P0,set:L0}),Ml=t=>t,No=t=>Reflect.getPrototypeOf(t);function Sr(t,e,n=!1,s=!1){t=t.__v_raw;const i=oe(t),r=oe(e);n||(e!==r&&dt(i,"get",e),dt(i,"get",r));const{has:o}=No(i),a=s?Ml:n?Dl:Ni;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function kr(t,e=!1){const n=this.__v_raw,s=oe(n),i=oe(t);return e||(t!==i&&dt(s,"has",t),dt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function xr(t,e=!1){return t=t.__v_raw,!e&&dt(oe(t),"iterate",ns),Reflect.get(t,"size",t)}function ru(t){t=oe(t);const e=oe(this);return No(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function ou(t,e){e=oe(e);const n=oe(this),{has:s,get:i}=No(n);let r=s.call(n,t);r||(t=oe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ai(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function au(t){const e=oe(this),{has:n,get:s}=No(e);let i=n.call(e,t);i||(t=oe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&on(e,"delete",t,void 0),r}function lu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Rr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=oe(o),l=e?Ml:t?Dl:Ni;return!t&&dt(a,"iterate",ns),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Pr(t,e,n){return function(...s){const i=this.__v_raw,r=oe(i),o=Ts(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ml:e?Dl:Ni;return!e&&dt(r,"iterate",l?Wa:ns),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function V0(){const t={get(r){return Sr(this,r)},get size(){return xr(this)},has:kr,add:ru,set:ou,delete:au,clear:lu,forEach:Rr(!1,!1)},e={get(r){return Sr(this,r,!1,!0)},get size(){return xr(this)},has:kr,add:ru,set:ou,delete:au,clear:lu,forEach:Rr(!1,!0)},n={get(r){return Sr(this,r,!0)},get size(){return xr(this,!0)},has(r){return kr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Rr(!0,!1)},s={get(r){return Sr(this,r,!0,!0)},get size(){return xr(this,!0)},has(r){return kr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Pr(r,!1,!1),n[r]=Pr(r,!0,!1),e[r]=Pr(r,!1,!0),s[r]=Pr(r,!0,!0)}),[t,n,e,s]}const[W0,B0,H0,j0]=V0();function Ol(t,e){const n=e?t?j0:H0:t?B0:W0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const q0={get:Ol(!1,!1)},K0={get:Ol(!1,!0)},G0={get:Ol(!0,!1)},xh=new WeakMap,Rh=new WeakMap,Ph=new WeakMap,Y0=new WeakMap;function Q0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J0(t){return t.__v_skip||!Object.isExtensible(t)?0:Q0(d0(t))}function rr(t){return Os(t)?t:Ll(t,!1,kh,q0,xh)}function Ah(t){return Ll(t,!1,z0,K0,Rh)}function Nh(t){return Ll(t,!0,U0,G0,Ph)}function Ll(t,e,n,s,i){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=J0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Rn(t){return Os(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Os(t){return!!(t&&t.__v_isReadonly)}function qr(t){return!!(t&&t.__v_isShallow)}function Mh(t){return Rn(t)||Os(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Mo(t){return Hr(t,"__v_skip",!0),t}const Ni=t=>we(t)?rr(t):t,Dl=t=>we(t)?Nh(t):t;function Oh(t){xn&&bt&&(t=oe(t),Ih(t.dep||(t.dep=Pl())))}function Lh(t,e){t=oe(t);const n=t.dep;n&&Ba(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Ae(t){return Dh(t,!1)}function X0(t){return Dh(t,!0)}function Dh(t,e){return Oe(t)?t:new Z0(t,e)}class Z0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Ni(e)}get value(){return Oh(this),this._value}set value(e){const n=this.__v_isShallow||qr(e)||Os(e);e=n?e:oe(e),Ai(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ni(e),Lh(this))}}function ne(t){return Oe(t)?t.value:t}const e1={get:(t,e,n)=>ne(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Fh(t){return Rn(t)?t:new Proxy(t,e1)}function t1(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=s1(t,n);return e}class n1{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return k0(oe(this._object),this._key)}}function s1(t,e,n){const s=t[e];return Oe(s)?s:new n1(t,e,n)}class i1{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Al(e,()=>{this._dirty||(this._dirty=!0,Lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=oe(this);return Oh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function r1(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=xt):(s=t.get,i=t.set),new i1(s,i,r||!i,n)}function Pn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Oo(r,e,n)}return i}function vt(t,e,n,s){if(Z(t)){const r=Pn(t,e,n,s);return r&&hh(r)&&r.catch(o=>{Oo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(vt(t[r],e,n,s));return i}function Oo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Pn(l,null,10,[t,o,a]);return}}o1(t,n,i,s)}function o1(t,e,n,s=!0){console.error(t)}let Mi=!1,Ha=!1;const et=[];let Ft=0;const Ss=[];let Xt=null,Gn=0;const $h=Promise.resolve();let Fl=null;function $l(t){const e=Fl||$h;return t?e.then(this?t.bind(this):t):e}function a1(t){let e=Ft+1,n=et.length;for(;e<n;){const s=e+n>>>1;Oi(et[s])<t?e=s+1:n=s}return e}function Ul(t){(!et.length||!et.includes(t,Mi&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?et.push(t):et.splice(a1(t.id),0,t),Uh())}function Uh(){!Mi&&!Ha&&(Ha=!0,Fl=$h.then(Vh))}function l1(t){const e=et.indexOf(t);e>Ft&&et.splice(e,1)}function c1(t){B(t)?Ss.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?Gn+1:Gn))&&Ss.push(t),Uh()}function cu(t,e=Mi?Ft+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function zh(t){if(Ss.length){const e=[...new Set(Ss)];if(Ss.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>Oi(n)-Oi(s)),Gn=0;Gn<Xt.length;Gn++)Xt[Gn]();Xt=null,Gn=0}}const Oi=t=>t.id==null?1/0:t.id,u1=(t,e)=>{const n=Oi(t)-Oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vh(t){Ha=!1,Mi=!0,et.sort(u1);const e=xt;try{for(Ft=0;Ft<et.length;Ft++){const n=et[Ft];n&&n.active!==!1&&Pn(n,null,14)}}finally{Ft=0,et.length=0,zh(),Mi=!1,Fl=null,(et.length||Ss.length)&&Vh()}}function d1(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Re;h&&(i=n.map(m=>Fe(m)?m.trim():m)),d&&(i=n.map(p0))}let a,l=s[a=aa(e)]||s[a=aa(Bt(e))];!l&&r&&(l=s[a=aa(qs(e))]),l&&vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(c,t,6,i)}}function Wh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Wh(c,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(we(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):De(o,r),we(t)&&s.set(t,o),o)}function Lo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,qs(e))||ce(t,e))}let Ge=null,Do=null;function Kr(t){const e=Ge;return Ge=t,Do=t&&t.type.__scopeId||null,e}function Kt(t){Do=t}function Gt(){Do=null}function Le(t,e=Ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cu(-1);const r=Kr(e);let o;try{o=t(...i)}finally{Kr(r),s._d&&Cu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:w}=t;let A,x;const M=Kr(t);try{if(n.shapeFlag&4){const $=i||s;A=Dt(u.call($,$,d,r,m,h,_)),x=l}else{const $=e;A=Dt($.length>1?$(r,{attrs:l,slots:a,emit:c}):$(r,null)),x=e.props?l:h1(l)}}catch($){wi.length=0,Oo($,t,1),A=N(wt)}let K=A;if(x&&w!==!1){const $=Object.keys(x),{shapeFlag:ee}=K;$.length&&ee&7&&(o&&$.some(kl)&&(x=f1(x,o)),K=Fn(K,x))}return n.dirs&&(K=Fn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),A=K,Kr(M),A}const h1=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},f1=(t,e)=>{const n={};for(const s in t)(!kl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function p1(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?uu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Lo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?uu(s,o,c):!0:!!o;return!1}function uu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Lo(n,r))return!0}return!1}function m1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const g1=t=>t.__isSuspense;function _1(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):c1(t)}function y1(t,e){return zl(t,null,{flush:"post"})}const Ar={};function $t(t,e,n){return zl(t,e,n)}function zl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Re){var a;const l=wh()===((a=Ve)==null?void 0:a.scope)?Ve:null;let c,u=!1,d=!1;if(Oe(t)?(c=()=>t.value,u=qr(t)):Rn(t)?(c=()=>t,s=!0):B(t)?(d=!0,u=t.some($=>Rn($)||qr($)),c=()=>t.map($=>{if(Oe($))return $.value;if(Rn($))return Jn($);if(Z($))return Pn($,l,2)})):Z(t)?e?c=()=>Pn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),vt(t,l,3,[m])}:c=xt,e&&s){const $=c;c=()=>Jn($())}let h,m=$=>{h=M.onStop=()=>{Pn($,l,4)}},_;if(Vi)if(m=xt,e?n&&vt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const $=hg();_=$.__watcherHandles||($.__watcherHandles=[])}else return xt;let w=d?new Array(t.length).fill(Ar):Ar;const A=()=>{if(M.active)if(e){const $=M.run();(s||u||(d?$.some((ee,Ee)=>Ai(ee,w[Ee])):Ai($,w)))&&(h&&h(),vt(e,l,3,[$,w===Ar?void 0:d&&w[0]===Ar?[]:w,m]),w=$)}else M.run()};A.allowRecurse=!!e;let x;i==="sync"?x=A:i==="post"?x=()=>lt(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),x=()=>Ul(A));const M=new Al(c,x);e?n?A():w=M.run():i==="post"?lt(M.run.bind(M),l&&l.suspense):M.run();const K=()=>{M.stop(),l&&l.scope&&xl(l.scope.effects,M)};return _&&_.push(K),K}function v1(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?Bh(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Ve;Ls(this);const a=zl(i,r.bind(s),n);return o?Ls(o):ss(),a}function Bh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Jn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Jn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(xo(t)||Ts(t))t.forEach(n=>{Jn(n,e)});else if(ph(t))for(const n in t)Jn(t[n],e);return t}function Gr(t,e){const n=Ge;if(n===null)return t;const s=Vo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Re]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ks(),vt(l,n,8,[t.el,a,t,e]),Gs())}}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fi(()=>{t.isMounted=!0}),Qh(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},w1={name:"BaseTransition",props:jh,setup(t,{slots:e}){const n=ql(),s=Hh();let i;return()=>{const r=e.default&&Vl(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==wt){o=w;break}}const a=oe(t),{mode:l}=a;if(s.isLeaving)return ca(o);const c=du(o);if(!c)return ca(o);const u=Li(c,a,s,n);Di(c,u);const d=n.subTree,h=d&&du(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,m=!0)}if(h&&h.type!==wt&&(!Yn(c,h)||m)){const w=Li(h,a,s,n);if(Di(h,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ca(o);l==="in-out"&&c.type!==wt&&(w.delayLeave=(A,x,M)=>{const K=qh(s,h);K[String(h.key)]=h,A._leaveCb=()=>{x(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},C1=w1;function qh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Li(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:w,onAppear:A,onAfterAppear:x,onAppearCancelled:M}=e,K=String(t.key),$=qh(n,t),ee=(D,V)=>{D&&vt(D,s,9,V)},Ee=(D,V)=>{const J=V[1];ee(D,V),B(D)?D.every(ye=>ye.length<=1)&&J():D.length<=1&&J()},Se={mode:r,persisted:o,beforeEnter(D){let V=a;if(!n.isMounted)if(i)V=w||a;else return;D._leaveCb&&D._leaveCb(!0);const J=$[K];J&&Yn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),ee(V,[D])},enter(D){let V=l,J=c,ye=u;if(!n.isMounted)if(i)V=A||l,J=x||c,ye=M||u;else return;let U=!1;const de=D._enterCb=Ye=>{U||(U=!0,Ye?ee(ye,[D]):ee(J,[D]),Se.delayedLeave&&Se.delayedLeave(),D._enterCb=void 0)};V?Ee(V,[D,de]):de()},leave(D,V){const J=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return V();ee(d,[D]);let ye=!1;const U=D._leaveCb=de=>{ye||(ye=!0,V(),de?ee(_,[D]):ee(m,[D]),D._leaveCb=void 0,$[J]===t&&delete $[J])};$[J]=t,h?Ee(h,[D,U]):U()},clone(D){return Li(D,e,n,s)}};return Se}function ca(t){if(Fo(t))return t=Fn(t),t.children=null,t}function du(t){return Fo(t)?t.children?t.children[0]:void 0:t}function Di(t,e){t.shapeFlag&6&&t.component?Di(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_e?(o.patchFlag&128&&i++,s=s.concat(Vl(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?Fn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Kh(t,e){return Z(t)?(()=>De({name:t.name},e,{setup:t}))():t}const yi=t=>!!t.type.__asyncLoader,Fo=t=>t.type.__isKeepAlive;function b1(t,e){Gh(t,"a",e)}function E1(t,e){Gh(t,"da",e)}function Gh(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($o(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fo(i.parent.vnode)&&I1(s,e,n,i),i=i.parent}}function I1(t,e,n,s){const i=$o(e,t,s,!0);$i(()=>{xl(s[e],i)},n)}function $o(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ks(),Ls(n);const a=vt(e,n,t,o);return ss(),Gs(),a});return s?i.unshift(r):i.push(r),r}}const cn=t=>(e,n=Ve)=>(!Vi||t==="sp")&&$o(t,(...s)=>e(...s),n),T1=cn("bm"),Fi=cn("m"),S1=cn("bu"),Yh=cn("u"),Qh=cn("bum"),$i=cn("um"),k1=cn("sp"),x1=cn("rtg"),R1=cn("rtc");function P1(t,e=Ve){$o("ec",t,e)}const Wl="components";function A1(t,e){return Xh(Wl,t,!0,e)||t}const Jh=Symbol.for("v-ndc");function N1(t){return Fe(t)?Xh(Wl,t,!1)||t:t||Jh}function Xh(t,e,n=!0,s=!1){const i=Ge||Ve;if(i){const r=i.type;if(t===Wl){const a=cg(r,!1);if(a&&(a===e||a===Bt(e)||a===Po(Bt(e))))return r}const o=hu(i[t]||r[t],e)||hu(i.appContext[t],e);return!o&&s?r:o}}function hu(t,e){return t&&(t[e]||t[Bt(e)]||t[Po(Bt(e))])}function gt(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(we(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function M1(t,e,n={},s,i){if(Ge.isCE||Ge.parent&&yi(Ge.parent)&&Ge.parent.isCE)return e!=="default"&&(n.name=e),N("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),I();const o=r&&Zh(r(n)),a=Qe(_e,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Zh(t){return t.some(e=>Qr(e)?!(e.type===wt||e.type===_e&&!Zh(e.children)):!0)?t:null}const ja=t=>t?df(t)?Vo(t)||t.proxy:ja(t.parent):null,vi=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ja(t.parent),$root:t=>ja(t.root),$emit:t=>t.emit,$options:t=>Bl(t),$forceUpdate:t=>t.f||(t.f=()=>Ul(t.update)),$nextTick:t=>t.n||(t.n=$l.bind(t.proxy)),$watch:t=>v1.bind(t)}),ua=(t,e)=>t!==Re&&!t.__isScriptSetup&&ce(t,e),O1={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ua(s,e))return o[e]=1,s[e];if(i!==Re&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Re&&ce(n,e))return o[e]=4,n[e];qa&&(o[e]=0)}}const u=vi[e];let d,h;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&ce(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ce(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ua(i,e)?(i[e]=n,!0):s!==Re&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&ce(t,o)||ua(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(vi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fu(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qa=!0;function L1(t){const e=Bl(t),n=t.proxy,s=t.ctx;qa=!1,e.beforeCreate&&pu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:w,deactivated:A,beforeDestroy:x,beforeUnmount:M,destroyed:K,unmounted:$,render:ee,renderTracked:Ee,renderTriggered:Se,errorCaptured:D,serverPrefetch:V,expose:J,inheritAttrs:ye,components:U,directives:de,filters:Ye}=e;if(c&&D1(c,s,null),o)for(const ve in o){const he=o[ve];Z(he)&&(s[ve]=he.bind(n))}if(i){const ve=i.call(n,n);we(ve)&&(t.data=rr(ve))}if(qa=!0,r)for(const ve in r){const he=r[ve],Yt=Z(he)?he.bind(n,n):Z(he.get)?he.get.bind(n,n):xt,hn=!Z(he)&&Z(he.set)?he.set.bind(n):xt,Nt=Me({get:Yt,set:hn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:at=>Nt.value=at})}if(a)for(const ve in a)ef(a[ve],s,n,ve);if(l){const ve=Z(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(he=>{Fr(he,ve[he])})}u&&pu(u,t,"c");function ae(ve,he){B(he)?he.forEach(Yt=>ve(Yt.bind(n))):he&&ve(he.bind(n))}if(ae(T1,d),ae(Fi,h),ae(S1,m),ae(Yh,_),ae(b1,w),ae(E1,A),ae(P1,D),ae(R1,Ee),ae(x1,Se),ae(Qh,M),ae($i,$),ae(k1,V),B(J))if(J.length){const ve=t.exposed||(t.exposed={});J.forEach(he=>{Object.defineProperty(ve,he,{get:()=>n[he],set:Yt=>n[he]=Yt})})}else t.exposed||(t.exposed={});ee&&t.render===xt&&(t.render=ee),ye!=null&&(t.inheritAttrs=ye),U&&(t.components=U),de&&(t.directives=de)}function D1(t,e,n=xt){B(t)&&(t=Ka(t));for(const s in t){const i=t[s];let r;we(i)?"default"in i?r=Ut(i.from||s,i.default,!0):r=Ut(i.from||s):r=Ut(i),Oe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pu(t,e,n){vt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ef(t,e,n,s){const i=s.includes(".")?Bh(n,s):()=>n[s];if(Fe(t)){const r=e[t];Z(r)&&$t(i,r)}else if(Z(t))$t(i,t.bind(n));else if(we(t))if(B(t))t.forEach(r=>ef(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&$t(i,r,t)}}function Bl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Yr(l,c,o,!0)),Yr(l,e,o)),we(e)&&r.set(e,l),l}function Yr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Yr(t,r,n,!0),i&&i.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=F1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const F1={data:mu,props:gu,emits:gu,methods:fi,computed:fi,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:fi,directives:fi,watch:U1,provide:mu,inject:$1};function mu(t,e){return e?t?function(){return De(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function $1(t,e){return fi(Ka(t),Ka(e))}function Ka(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?De(Object.create(null),t,e):e}function gu(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:De(Object.create(null),fu(t),fu(e??{})):e}function U1(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function tf(){return{app:null,config:{isNativeTag:l0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let z1=0;function V1(t,e){return function(s,i=null){Z(s)||(s=De({},s)),i!=null&&!we(i)&&(i=null);const r=tf(),o=new Set;let a=!1;const l=r.app={_uid:z1++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=N(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Vo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ui=l;try{return c()}finally{Ui=null}}};return l}}let Ui=null;function Fr(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Ve||Ge;if(s||Ui){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ui._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function W1(){return!!(Ve||Ge||Ui)}function B1(t,e,n,s=!1){const i={},r={};Hr(r,zo,1),t.propsDefaults=Object.create(null),nf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function H1(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=oe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Lo(t.emitsOptions,h))continue;const m=e[h];if(l)if(ce(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=Bt(h);i[_]=Ga(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{nf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=qs(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ga(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d))&&(delete r[d],c=!0)}c&&on(t,"set","$attrs")}function nf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;i&&ce(i,u=Bt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=oe(n),c=a||Re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ga(i,l,d,c[d],t,!ce(c,d))}}return o}function Ga(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ls(i),s=c[n]=l.call(null,e),ss())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===qs(n))&&(s=!0))}return s}function sf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=d=>{l=!0;const[h,m]=sf(d,e,!0);De(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return we(t)&&s.set(t,Is),Is;if(B(r))for(let u=0;u<r.length;u++){const d=Bt(r[u]);_u(d)&&(o[d]=Re)}else if(r)for(const u in r){const d=Bt(u);if(_u(d)){const h=r[u],m=o[d]=B(h)||Z(h)?{type:h}:De({},h);if(m){const _=wu(Boolean,m.type),w=wu(String,m.type);m[0]=_>-1,m[1]=w<0||_<w,(_>-1||ce(m,"default"))&&a.push(d)}}}const c=[o,a];return we(t)&&s.set(t,c),c}function _u(t){return t[0]!=="$"}function yu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vu(t,e){return yu(t)===yu(e)}function wu(t,e){return B(e)?e.findIndex(n=>vu(n,t)):Z(e)&&vu(e,t)?0:-1}const rf=t=>t[0]==="_"||t==="$stable",Hl=t=>B(t)?t.map(Dt):[Dt(t)],j1=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>Hl(e(...i)),n);return s._c=!1,s},of=(t,e,n)=>{const s=t._ctx;for(const i in t){if(rf(i))continue;const r=t[i];if(Z(r))e[i]=j1(i,r,s);else if(r!=null){const o=Hl(r);e[i]=()=>o}}},af=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},q1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Hr(e,"_",n)):of(e,t.slots={})}else t.slots={},e&&af(t,e);Hr(t.slots,zo,1)},K1=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(De(i,e),!n&&a===1&&delete i._):(r=!e.$stable,of(e,i)),o=e}else e&&(af(t,e),o={default:1});if(r)for(const a in i)!rf(a)&&!(a in o)&&delete i[a]};function Ya(t,e,n,s,i=!1){if(B(t)){t.forEach((h,m)=>Ya(h,e&&(B(e)?e[m]:e),n,s,i));return}if(yi(s)&&!i)return;const r=s.shapeFlag&4?Vo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ce(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),Z(l))Pn(l,a,12,[o,u]);else{const h=Fe(l),m=Oe(l);if(h||m){const _=()=>{if(t.f){const w=h?ce(d,l)?d[l]:u[l]:l.value;i?B(w)&&xl(w,r):B(w)?w.includes(r)||w.push(r):h?(u[l]=[r],ce(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ce(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,lt(_,n)):_()}}}const lt=_1;function G1(t){return Y1(t)}function Y1(t,e){const n=za();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=xt,insertStaticContent:_}=t,w=(f,p,g,y=null,C=null,b=null,L=!1,T=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Yn(f,p)&&(y=v(f),at(f,C,b,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:H,shapeFlag:z}=p;switch(E){case Uo:A(f,p,g,y);break;case wt:x(f,p,g,y);break;case $r:f==null&&M(p,g,y,L);break;case _e:U(f,p,g,y,C,b,L,T,R);break;default:z&1?ee(f,p,g,y,C,b,L,T,R):z&6?de(f,p,g,y,C,b,L,T,R):(z&64||z&128)&&E.process(f,p,g,y,C,b,L,T,R,P)}H!=null&&C&&Ya(H,f&&f.ref,b,p||f,!p)},A=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},x=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},M=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},K=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},$=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},ee=(f,p,g,y,C,b,L,T,R)=>{L=L||p.type==="svg",f==null?Ee(p,g,y,C,b,L,T,R):V(f,p,C,b,L,T,R)},Ee=(f,p,g,y,C,b,L,T)=>{let R,E;const{type:H,props:z,shapeFlag:j,transition:Y,dirs:ie}=f;if(R=f.el=o(f.type,b,z&&z.is,z),j&8?u(R,f.children):j&16&&D(f.children,R,null,y,C,b&&H!=="foreignObject",L,T),ie&&Bn(f,null,y,"created"),Se(R,f,f.scopeId,L,y),z){for(const me in z)me!=="value"&&!Lr(me)&&r(R,me,null,z[me],b,f.children,y,C,Xe);"value"in z&&r(R,"value",null,z.value),(E=z.onVnodeBeforeMount)&&Lt(E,y,f)}ie&&Bn(f,null,y,"beforeMount");const Ie=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ie&&Y.beforeEnter(R),s(R,p,g),((E=z&&z.onVnodeMounted)||Ie||ie)&&lt(()=>{E&&Lt(E,y,f),Ie&&Y.enter(R),ie&&Bn(f,null,y,"mounted")},C)},Se=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let b=0;b<y.length;b++)m(f,y[b]);if(C){let b=C.subTree;if(p===b){const L=C.vnode;Se(f,L,L.scopeId,L.slotScopeIds,C.parent)}}},D=(f,p,g,y,C,b,L,T,R=0)=>{for(let E=R;E<f.length;E++){const H=f[E]=T?wn(f[E]):Dt(f[E]);w(null,H,p,g,y,C,b,L,T)}},V=(f,p,g,y,C,b,L)=>{const T=p.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:H}=p;R|=f.patchFlag&16;const z=f.props||Re,j=p.props||Re;let Y;g&&Hn(g,!1),(Y=j.onVnodeBeforeUpdate)&&Lt(Y,g,p,f),H&&Bn(p,f,g,"beforeUpdate"),g&&Hn(g,!0);const ie=C&&p.type!=="foreignObject";if(E?J(f.dynamicChildren,E,T,g,y,ie,b):L||he(f,p,T,null,g,y,ie,b,!1),R>0){if(R&16)ye(T,p,z,j,g,y,C);else if(R&2&&z.class!==j.class&&r(T,"class",null,j.class,C),R&4&&r(T,"style",z.style,j.style,C),R&8){const Ie=p.dynamicProps;for(let me=0;me<Ie.length;me++){const $e=Ie[me],Ct=z[$e],gs=j[$e];(gs!==Ct||$e==="value")&&r(T,$e,Ct,gs,C,f.children,g,y,Xe)}}R&1&&f.children!==p.children&&u(T,p.children)}else!L&&E==null&&ye(T,p,z,j,g,y,C);((Y=j.onVnodeUpdated)||H)&&lt(()=>{Y&&Lt(Y,g,p,f),H&&Bn(p,f,g,"updated")},y)},J=(f,p,g,y,C,b,L)=>{for(let T=0;T<p.length;T++){const R=f[T],E=p[T],H=R.el&&(R.type===_e||!Yn(R,E)||R.shapeFlag&70)?d(R.el):g;w(R,E,H,null,y,C,b,L,!0)}},ye=(f,p,g,y,C,b,L)=>{if(g!==y){if(g!==Re)for(const T in g)!Lr(T)&&!(T in y)&&r(f,T,g[T],null,L,p.children,C,b,Xe);for(const T in y){if(Lr(T))continue;const R=y[T],E=g[T];R!==E&&T!=="value"&&r(f,T,E,R,L,p.children,C,b,Xe)}"value"in y&&r(f,"value",g.value,y.value)}},U=(f,p,g,y,C,b,L,T,R)=>{const E=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:j,slotScopeIds:Y}=p;Y&&(T=T?T.concat(Y):Y),f==null?(s(E,g,y),s(H,g,y),D(p.children,g,H,C,b,L,T,R)):z>0&&z&64&&j&&f.dynamicChildren?(J(f.dynamicChildren,j,g,C,b,L,T),(p.key!=null||C&&p===C.subTree)&&lf(f,p,!0)):he(f,p,g,H,C,b,L,T,R)},de=(f,p,g,y,C,b,L,T,R)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,L,R):Ye(p,g,y,C,b,L,R):st(f,p,R)},Ye=(f,p,g,y,C,b,L)=>{const T=f.component=ig(f,y,C);if(Fo(f)&&(T.ctx.renderer=P),rg(T),T.asyncDep){if(C&&C.registerDep(T,ae),!f.el){const R=T.subTree=N(wt);x(null,R,p,g)}return}ae(T,f,p,g,C,b,L)},st=(f,p,g)=>{const y=p.component=f.component;if(p1(f,p,g))if(y.asyncDep&&!y.asyncResolved){ve(y,p,g);return}else y.next=p,l1(y.update),y.update();else p.el=f.el,y.vnode=p},ae=(f,p,g,y,C,b,L)=>{const T=()=>{if(f.isMounted){let{next:H,bu:z,u:j,parent:Y,vnode:ie}=f,Ie=H,me;Hn(f,!1),H?(H.el=ie.el,ve(f,H,L)):H=ie,z&&Dr(z),(me=H.props&&H.props.onVnodeBeforeUpdate)&&Lt(me,Y,H,ie),Hn(f,!0);const $e=la(f),Ct=f.subTree;f.subTree=$e,w(Ct,$e,d(Ct.el),v(Ct),f,C,b),H.el=$e.el,Ie===null&&m1(f,$e.el),j&&lt(j,C),(me=H.props&&H.props.onVnodeUpdated)&&lt(()=>Lt(me,Y,H,ie),C)}else{let H;const{el:z,props:j}=p,{bm:Y,m:ie,parent:Ie}=f,me=yi(p);if(Hn(f,!1),Y&&Dr(Y),!me&&(H=j&&j.onVnodeBeforeMount)&&Lt(H,Ie,p),Hn(f,!0),z&&fe){const $e=()=>{f.subTree=la(f),fe(z,f.subTree,f,C,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&$e()):$e()}else{const $e=f.subTree=la(f);w(null,$e,g,y,f,C,b),p.el=$e.el}if(ie&&lt(ie,C),!me&&(H=j&&j.onVnodeMounted)){const $e=p;lt(()=>Lt(H,Ie,$e),C)}(p.shapeFlag&256||Ie&&yi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&f.a&&lt(f.a,C),f.isMounted=!0,p=g=y=null}},R=f.effect=new Al(T,()=>Ul(E),f.scope),E=f.update=()=>R.run();E.id=f.uid,Hn(f,!0),E()},ve=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,H1(f,p.props,y,g),K1(f,p.children,g),Ks(),cu(),Gs()},he=(f,p,g,y,C,b,L,T,R=!1)=>{const E=f&&f.children,H=f?f.shapeFlag:0,z=p.children,{patchFlag:j,shapeFlag:Y}=p;if(j>0){if(j&128){hn(E,z,g,y,C,b,L,T,R);return}else if(j&256){Yt(E,z,g,y,C,b,L,T,R);return}}Y&8?(H&16&&Xe(E,C,b),z!==E&&u(g,z)):H&16?Y&16?hn(E,z,g,y,C,b,L,T,R):Xe(E,C,b,!0):(H&8&&u(g,""),Y&16&&D(z,g,y,C,b,L,T,R))},Yt=(f,p,g,y,C,b,L,T,R)=>{f=f||Is,p=p||Is;const E=f.length,H=p.length,z=Math.min(E,H);let j;for(j=0;j<z;j++){const Y=p[j]=R?wn(p[j]):Dt(p[j]);w(f[j],Y,g,null,C,b,L,T,R)}E>H?Xe(f,C,b,!0,!1,z):D(p,g,y,C,b,L,T,R,z)},hn=(f,p,g,y,C,b,L,T,R)=>{let E=0;const H=p.length;let z=f.length-1,j=H-1;for(;E<=z&&E<=j;){const Y=f[E],ie=p[E]=R?wn(p[E]):Dt(p[E]);if(Yn(Y,ie))w(Y,ie,g,null,C,b,L,T,R);else break;E++}for(;E<=z&&E<=j;){const Y=f[z],ie=p[j]=R?wn(p[j]):Dt(p[j]);if(Yn(Y,ie))w(Y,ie,g,null,C,b,L,T,R);else break;z--,j--}if(E>z){if(E<=j){const Y=j+1,ie=Y<H?p[Y].el:y;for(;E<=j;)w(null,p[E]=R?wn(p[E]):Dt(p[E]),g,ie,C,b,L,T,R),E++}}else if(E>j)for(;E<=z;)at(f[E],C,b,!0),E++;else{const Y=E,ie=E,Ie=new Map;for(E=ie;E<=j;E++){const pt=p[E]=R?wn(p[E]):Dt(p[E]);pt.key!=null&&Ie.set(pt.key,E)}let me,$e=0;const Ct=j-ie+1;let gs=!1,Qc=0;const si=new Array(Ct);for(E=0;E<Ct;E++)si[E]=0;for(E=Y;E<=z;E++){const pt=f[E];if($e>=Ct){at(pt,C,b,!0);continue}let Mt;if(pt.key!=null)Mt=Ie.get(pt.key);else for(me=ie;me<=j;me++)if(si[me-ie]===0&&Yn(pt,p[me])){Mt=me;break}Mt===void 0?at(pt,C,b,!0):(si[Mt-ie]=E+1,Mt>=Qc?Qc=Mt:gs=!0,w(pt,p[Mt],g,null,C,b,L,T,R),$e++)}const Jc=gs?Q1(si):Is;for(me=Jc.length-1,E=Ct-1;E>=0;E--){const pt=ie+E,Mt=p[pt],Xc=pt+1<H?p[pt+1].el:y;si[E]===0?w(null,Mt,g,Xc,C,b,L,T,R):gs&&(me<0||E!==Jc[me]?Nt(Mt,g,Xc,2):me--)}}},Nt=(f,p,g,y,C=null)=>{const{el:b,type:L,transition:T,children:R,shapeFlag:E}=f;if(E&6){Nt(f.component.subTree,p,g,y);return}if(E&128){f.suspense.move(p,g,y);return}if(E&64){L.move(f,p,g,P);return}if(L===_e){s(b,p,g);for(let z=0;z<R.length;z++)Nt(R[z],p,g,y);s(f.anchor,p,g);return}if(L===$r){K(f,p,g);return}if(y!==2&&E&1&&T)if(y===0)T.beforeEnter(b),s(b,p,g),lt(()=>T.enter(b),C);else{const{leave:z,delayLeave:j,afterLeave:Y}=T,ie=()=>s(b,p,g),Ie=()=>{z(b,()=>{ie(),Y&&Y()})};j?j(b,ie,Ie):Ie()}else s(b,p,g)},at=(f,p,g,y=!1,C=!1)=>{const{type:b,props:L,ref:T,children:R,dynamicChildren:E,shapeFlag:H,patchFlag:z,dirs:j}=f;if(T!=null&&Ya(T,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&j,ie=!yi(f);let Ie;if(ie&&(Ie=L&&L.onVnodeBeforeUnmount)&&Lt(Ie,p,f),H&6)Ir(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&Bn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,P,y):E&&(b!==_e||z>0&&z&64)?Xe(E,p,g,!1,!0):(b===_e&&z&384||!C&&H&16)&&Xe(R,p,g),y&&ps(f)}(ie&&(Ie=L&&L.onVnodeUnmounted)||Y)&&lt(()=>{Ie&&Lt(Ie,p,f),Y&&Bn(f,null,p,"unmounted")},g)},ps=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===_e){ms(g,y);return}if(p===$r){$(f);return}const b=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:T}=C,R=()=>L(g,b);T?T(f.el,b,R):R()}else b()},ms=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Ir=(f,p,g)=>{const{bum:y,scope:C,update:b,subTree:L,um:T}=f;y&&Dr(y),C.stop(),b&&(b.active=!1,at(L,f,p,g)),T&&lt(T,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Xe=(f,p,g,y=!1,C=!1,b=0)=>{for(let L=b;L<f.length;L++)at(f[L],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),F=(f,p,g)=>{f==null?p._vnode&&at(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),cu(),zh(),p._vnode=f},P={p:w,um:at,m:Nt,r:ps,mt:Ye,mc:D,pc:he,pbc:J,n:v,o:t};let W,fe;return e&&([W,fe]=e(P)),{render:F,hydrate:W,createApp:V1(F,W)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lf(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=wn(i[r]),a.el=o.el),n||lf(o,a)),a.type===Uo&&(a.el=o.el)}}function Q1(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const J1=t=>t.__isTeleport,_e=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),wi=[];let It=null;function I(t=!1){wi.push(It=t?null:[])}function X1(){wi.pop(),It=wi[wi.length-1]||null}let zi=1;function Cu(t){zi+=t}function cf(t){return t.dynamicChildren=zi>0?It||Is:null,X1(),zi>0&&It&&It.push(t),t}function O(t,e,n,s,i,r){return cf(S(t,e,n,s,i,r,!0))}function Qe(t,e,n,s,i){return cf(N(t,e,n,s,i,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}const zo="__vInternal",uf=({key:t})=>t??null,Ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Oe(t)||Z(t)?{i:Ge,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,s=0,i=null,r=t===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uf(e),ref:e&&Ur(e),scopeId:Do,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ge};return a?(jl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),zi>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const N=Z1;function Z1(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jh)&&(t=wt),Qr(t)){const a=Fn(t,e,!0);return n&&jl(a,n),zi>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(ug(t)&&(t=t.__vccOpts),e){e=eg(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Je(a)),we(l)&&(Mh(l)&&!B(l)&&(l=De({},l)),e.style=Ht(l))}const o=Fe(t)?1:g1(t)?128:J1(t)?64:we(t)?4:Z(t)?2:0;return S(t,e,n,s,i,o,r,!0)}function eg(t){return t?Mh(t)||zo in t?De({},t):t:null}function Fn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?tg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uf(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Ur(e)):[i,Ur(e)]:Ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function or(t=" ",e=0){return N(Uo,null,t,e)}function ks(t="",e=!1){return e?(I(),Qe(wt,null,t)):N(wt,null,t)}function Dt(t){return t==null||typeof t=="boolean"?N(wt):B(t)?N(_e,null,t.slice()):typeof t=="object"?wn(t):N(Uo,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function jl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),jl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zo in e)?e._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function tg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Je([e.class,s.class]));else if(i==="style")e.style=Ht([e.style,s.style]);else if(ko(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){vt(t,e,7,[n,s])}const ng=tf();let sg=0;function ig(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ng,r={uid:sg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(s,i),emitsOptions:Wh(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=d1.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const ql=()=>Ve||Ge;let Kl,_s,bu="__VUE_INSTANCE_SETTERS__";(_s=za()[bu])||(_s=za()[bu]=[]),_s.push(t=>Ve=t),Kl=t=>{_s.length>1?_s.forEach(e=>e(t)):_s[0](t)};const Ls=t=>{Kl(t),t.scope.on()},ss=()=>{Ve&&Ve.scope.off(),Kl(null)};function df(t){return t.vnode.shapeFlag&4}let Vi=!1;function rg(t,e=!1){Vi=e;const{props:n,children:s}=t.vnode,i=df(t);B1(t,n,i,e),q1(t,s);const r=i?og(t,e):void 0;return Vi=!1,r}function og(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mo(new Proxy(t.ctx,O1));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?lg(t):null;Ls(t),Ks();const r=Pn(s,t,0,[t.props,i]);if(Gs(),ss(),hh(r)){if(r.then(ss,ss),e)return r.then(o=>{Eu(t,o,e)}).catch(o=>{Oo(o,t,0)});t.asyncDep=r}else Eu(t,r,e)}else hf(t,e)}function Eu(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Fh(e)),hf(t,n)}let Iu;function hf(t,e,n){const s=t.type;if(!t.render){if(!e&&Iu&&!s.render){const i=s.template||Bl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=De(De({isCustomElement:r,delimiters:a},o),l);s.render=Iu(i,c)}}t.render=s.render||xt}Ls(t),Ks(),L1(t),Gs(),ss()}function ag(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function lg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ag(t)},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fh(Mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}}))}function cg(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function ug(t){return Z(t)&&"__vccOpts"in t}const Me=(t,e)=>r1(t,e,Vi);function Gl(t,e,n){const s=arguments.length;return s===2?we(e)&&!B(e)?Qr(e)?N(t,null,[e]):N(t,e):N(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qr(n)&&(n=[n]),N(t,e,n))}const dg=Symbol.for("v-scx"),hg=()=>Ut(dg),fg="3.3.4",pg="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,Tu=Qn&&Qn.createElement("template"),mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qn.createElementNS(pg,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Tu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _g(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&Qa(s,r,"");for(const r in n)Qa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Su=/\s*!important$/;function Qa(t,e,n){if(B(n))n.forEach(s=>Qa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yg(t,e);Su.test(n)?t.setProperty(qs(s),n.replace(Su,""),"important"):t[s]=n}}const ku=["Webkit","Moz","ms"],da={};function yg(t,e){const n=da[e];if(n)return n;let s=Bt(e);if(s!=="filter"&&s in t)return da[e]=s;s=Po(s);for(let i=0;i<ku.length;i++){const r=ku[i]+s;if(r in t)return da[e]=r}return e}const xu="http://www.w3.org/1999/xlink";function vg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xu,e.slice(6,e.length)):t.setAttributeNS(xu,e,n);else{const r=C0(e);n==null||r&&!mh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function wg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ff(t,e,n,s){t.addEventListener(e,n,s)}function Cg(t,e,n,s){t.removeEventListener(e,n,s)}function bg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Eg(e);if(s){const c=r[e]=Sg(s,i);ff(t,a,c,l)}else o&&(Cg(t,a,o,l),r[e]=void 0)}}const Ru=/(?:Once|Passive|Capture)$/;function Eg(t){let e;if(Ru.test(t)){e={};let s;for(;s=t.match(Ru);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qs(t.slice(2)),e]}let ha=0;const Ig=Promise.resolve(),Tg=()=>ha||(Ig.then(()=>ha=0),ha=Date.now());function Sg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(kg(s,n.value),e,5,[s])};return n.value=t,n.attached=Tg(),n}function kg(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Pu=/^on[a-z]/,xg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?gg(t,s,i):e==="style"?_g(t,n,s):ko(e)?kl(e)||bg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rg(t,e,s,i))?wg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),vg(t,e,s,i))};function Rg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Pu.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pu.test(e)&&Fe(n)?!1:e in t}function ar(t){const e=ql();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Xa(r,i))},s=()=>{const i=t(e.proxy);Ja(e.subTree,i),n(i)};y1(s),Fi(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),$i(()=>i.disconnect())})}function Ja(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ja(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Xa(t.el,e);else if(t.type===_e)t.children.forEach(n=>Ja(n,e));else if(t.type===$r){let{el:n,anchor:s}=t;for(;n&&(Xa(n,e),n!==s);)n=n.nextSibling}}function Xa(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const pn="transition",ri="animation",jt=(t,{slots:e})=>Gl(C1,mf(t),e);jt.displayName="Transition";const pf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pg=jt.props=De({},jh,pf),jn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Au=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function mf(t){const e={};for(const U in t)U in pf||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Ag(i),w=_&&_[0],A=_&&_[1],{onBeforeEnter:x,onEnter:M,onEnterCancelled:K,onLeave:$,onLeaveCancelled:ee,onBeforeAppear:Ee=x,onAppear:Se=M,onAppearCancelled:D=K}=e,V=(U,de,Ye)=>{_n(U,de?u:a),_n(U,de?c:o),Ye&&Ye()},J=(U,de)=>{U._isLeaving=!1,_n(U,d),_n(U,m),_n(U,h),de&&de()},ye=U=>(de,Ye)=>{const st=U?Se:M,ae=()=>V(de,U,Ye);jn(st,[de,ae]),Nu(()=>{_n(de,U?l:r),Jt(de,U?u:a),Au(st)||Mu(de,s,w,ae)})};return De(e,{onBeforeEnter(U){jn(x,[U]),Jt(U,r),Jt(U,o)},onBeforeAppear(U){jn(Ee,[U]),Jt(U,l),Jt(U,c)},onEnter:ye(!1),onAppear:ye(!0),onLeave(U,de){U._isLeaving=!0;const Ye=()=>J(U,de);Jt(U,d),_f(),Jt(U,h),Nu(()=>{U._isLeaving&&(_n(U,d),Jt(U,m),Au($)||Mu(U,s,A,Ye))}),jn($,[U,Ye])},onEnterCancelled(U){V(U,!1),jn(K,[U])},onAppearCancelled(U){V(U,!0),jn(D,[U])},onLeaveCancelled(U){J(U),jn(ee,[U])}})}function Ag(t){if(t==null)return null;if(we(t))return[fa(t.enter),fa(t.leave)];{const e=fa(t);return[e,e]}}function fa(t){return m0(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function _n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Nu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ng=0;function Mu(t,e,n,s){const i=t._endId=++Ng,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=gf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function gf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${pn}Delay`),r=s(`${pn}Duration`),o=Ou(i,r),a=s(`${ri}Delay`),l=s(`${ri}Duration`),c=Ou(a,l);let u=null,d=0,h=0;e===pn?o>0&&(u=pn,d=o,h=r.length):e===ri?c>0&&(u=ri,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?pn:ri:null,h=u?u===pn?r.length:l.length:0);const m=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Ou(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Lu(n)+Lu(t[s])))}function Lu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function _f(){return document.body.offsetHeight}const yf=new WeakMap,vf=new WeakMap,wf={name:"TransitionGroup",props:De({},Pg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ql(),s=Hh();let i,r;return Yh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!$g(i[0].el,n.vnode.el,o))return;i.forEach(Lg),i.forEach(Dg);const a=i.filter(Fg);_f(),a.forEach(l=>{const c=l.el,u=c.style;Jt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,_n(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=oe(t),a=mf(o);let l=o.tag||_e;i=r,r=e.default?Vl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Di(u,Li(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Di(u,Li(u,a,s,n)),yf.set(u,u.el.getBoundingClientRect())}return N(l,null,r)}}},Mg=t=>delete t.mode;wf.props;const Og=wf;function Lg(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Dg(t){vf.set(t,t.el.getBoundingClientRect())}function Fg(t){const e=yf.get(t),n=vf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function $g(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=gf(s);return i.removeChild(s),r}const Du=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Dr(e,n):e},Ug={deep:!0,created(t,e,n){t._assign=Du(n),ff(t,"change",()=>{const s=t._modelValue,i=zg(t),r=t.checked,o=t._assign;if(B(s)){const a=gh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xo(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Cf(t,r))})},mounted:Fu,beforeUpdate(t,e,n){t._assign=Du(n),Fu(t,e,n)}};function Fu(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=gh(e,s.props.value)>-1:xo(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ao(e,Cf(t,!0)))}function zg(t){return"_value"in t?t._value:t.value}function Cf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Za={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):oi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),oi(t,!0),s.enter(t)):s.leave(t,()=>{oi(t,!1)}):oi(t,e))},beforeUnmount(t,{value:e}){oi(t,e)}};function oi(t,e){t.style.display=e?t._vod:"none"}const Vg=De({patchProp:xg},mg);let $u;function Wg(){return $u||($u=G1(Vg))}const Bg=(...t)=>{const e=Wg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Hg(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Hg(t){return Fe(t)?document.querySelector(t):t}var jg=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let bf;const lr=t=>bf=t,Ef=Symbol();function el(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ci||(Ci={}));function qg(){const t=vh(!0),e=t.run(()=>Ae({}));let n=[],s=[];const i=Mo({install(r){lr(i),i._a=r,r.provide(Ef,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!jg?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const If=()=>{};function Uu(t,e,n,s=If){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&wh()&&I0(i),i}function ys(t,...e){t.slice().forEach(n=>{n(...e)})}const Kg=t=>t();function tl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];el(i)&&el(s)&&t.hasOwnProperty(n)&&!Oe(s)&&!Rn(s)?t[n]=tl(i,s):t[n]=s}return t}const Gg=Symbol();function Yg(t){return!el(t)||!t.hasOwnProperty(Gg)}const{assign:yn}=Object;function Qg(t){return!!(Oe(t)&&t.effect)}function Jg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=t1(n.state.value[t]);return yn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Mo(Me(()=>{lr(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=Tf(t,c,e,n,s,!0),l}function Tf(t,e,n={},s,i,r){let o;const a=yn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ae({});let w;function A(D){let V;c=u=!1,typeof D=="function"?(D(s.state.value[t]),V={type:Ci.patchFunction,storeId:t,events:m}):(tl(s.state.value[t],D),V={type:Ci.patchObject,payload:D,storeId:t,events:m});const J=w=Symbol();$l().then(()=>{w===J&&(c=!0)}),u=!0,ys(d,V,s.state.value[t])}const x=r?function(){const{state:V}=n,J=V?V():{};this.$patch(ye=>{yn(ye,J)})}:If;function M(){o.stop(),d=[],h=[],s._s.delete(t)}function K(D,V){return function(){lr(s);const J=Array.from(arguments),ye=[],U=[];function de(ae){ye.push(ae)}function Ye(ae){U.push(ae)}ys(h,{args:J,name:D,store:ee,after:de,onError:Ye});let st;try{st=V.apply(this&&this.$id===t?this:ee,J)}catch(ae){throw ys(U,ae),ae}return st instanceof Promise?st.then(ae=>(ys(ye,ae),ae)).catch(ae=>(ys(U,ae),Promise.reject(ae))):(ys(ye,st),st)}}const $={_p:s,$id:t,$onAction:Uu.bind(null,h),$patch:A,$reset:x,$subscribe(D,V={}){const J=Uu(d,D,V.detached,()=>ye()),ye=o.run(()=>$t(()=>s.state.value[t],U=>{(V.flush==="sync"?u:c)&&D({storeId:t,type:Ci.direct,events:m},U)},yn({},l,V)));return J},$dispose:M},ee=rr($);s._s.set(t,ee);const Ee=s._a&&s._a.runWithContext||Kg,Se=s._e.run(()=>(o=vh(),Ee(()=>o.run(e))));for(const D in Se){const V=Se[D];if(Oe(V)&&!Qg(V)||Rn(V))r||(_&&Yg(V)&&(Oe(V)?V.value=_[D]:tl(V,_[D])),s.state.value[t][D]=V);else if(typeof V=="function"){const J=K(D,V);Se[D]=J,a.actions[D]=V}}return yn(ee,Se),yn(oe(ee),Se),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:D=>{A(V=>{yn(V,D)})}}),s._p.forEach(D=>{yn(ee,o.run(()=>D({store:ee,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(ee.$state,_),c=!0,u=!0,ee}function Xg(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=W1();return a=a||(c?Ut(Ef,null):null),a&&lr(a),a=bf,a._s.has(s)||(r?Tf(s,e,i,a):Jg(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof window<"u";function Zg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function pa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pt(i)?i.map(t):t(i)}return n}const bi=()=>{},Pt=Array.isArray,e_=/\/$/,t_=t=>t.replace(e_,"");function ma(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=r_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function n_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function s_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ds(e.matched[s],n.matched[i])&&Sf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!i_(t[n],e[n]))return!1;return!0}function i_(t,e){return Pt(t)?zu(t,e):Pt(e)?zu(e,t):t===e}function zu(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function r_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));const ga="";function o_(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),t_(t)}const a_=/^[^#]+#/;function l_(t,e){return t.replace(a_,"#")+e}function c_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const u_=()=>({left:window.pageXOffset,top:window.pageYOffset});function d_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=c_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vu(t,e){return(history.state?history.state.position-e:-1)+t}const nl=new Map;function h_(t,e){nl.set(t,e)}function f_(t){const e=nl.get(t);return nl.delete(t),e}function p_(t=""){let e=[],n=[ga],s=0;t=o_(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:Wi.pop};for(const h of e)h(a,l,d)}const o={location:ga,state:{},base:t,createHref:l_.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[ga],s=0},go(a,l=!0){const c=this.location,u=a<0?Jr.back:Jr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function m_(t){return typeof t=="string"||t&&typeof t=="object"}function kf(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var Wu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wu||(Wu={}));function Fs(t,e){return Pe(new Error,{type:t,[xf]:!0},e)}function Qt(t,e){return t instanceof Error&&xf in t&&(e==null||!!(t.type&e))}const Bu="[^/]+?",g_={sensitive:!1,strict:!1,start:!0,end:!0},__=/[.+*?^${}()[\]/\\]/g;function y_(t,e){const n=Pe({},g_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(__,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:w,optional:A,regexp:x}=h;r.push({name:_,repeatable:w,optional:A});const M=x||Bu;if(M!==Bu){m+=10;try{new RegExp(`(${M})`)}catch($){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+$.message)}}let K=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(K=A&&c.length<2?`(?:/${K})`:"/"+K),A&&(K+="?"),i+=K,m+=20,A&&(m+=-8),w&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:w,optional:A}=m,x=_ in c?c[_]:"";if(Pt(x)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Pt(x)?x.join("/"):x;if(!M)if(A)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function v_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function w_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=v_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Hu(s))return 1;if(Hu(i))return-1}return i.length-s.length}function Hu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const C_={type:0,value:""},b_=/[a-zA-Z0-9_]/;function E_(t){if(!t)return[[]];if(t==="/")return[[C_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:b_.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function I_(t,e,n){const s=y_(E_(t.path),n),i=Pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function T_(t,e){const n=[],s=new Map;e=Ku({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=S_(u);_.aliasOf=h&&h.record;const w=Ku(e,u),A=[_];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of K)A.push(Pe({},_,{components:h?h.record.components:_.components,path:$,aliasOf:h?h.record:_}))}let x,M;for(const K of A){const{path:$}=K;if(d&&$[0]!=="/"){const ee=d.record.path,Ee=ee[ee.length-1]==="/"?"":"/";K.path=d.record.path+($&&Ee+$)}if(x=I_(K,d,w),h?h.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),m&&u.name&&!qu(x)&&o(u.name)),_.children){const ee=_.children;for(let Ee=0;Ee<ee.length;Ee++)r(ee[Ee],x,h&&h.children[Ee])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return M?()=>{o(M)}:bi}function o(u){if(kf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&w_(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Rf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!qu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,w;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Fs(1,{location:u});w=h.record.name,m=Pe(ju(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&ju(u.params,h.keys.map(M=>M.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(M=>M.re.test(_)),h&&(m=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw Fs(1,{location:u,currentLocation:d});w=h.record.name,m=Pe({},d.params,u.params),_=h.stringify(m)}const A=[];let x=h;for(;x;)A.unshift(x.record),x=x.parent;return{name:w,path:_,params:m,matched:A,meta:x_(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ju(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function S_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:k_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function k_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function qu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function x_(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Ku(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Rf(t,e){return e.children.some(n=>n===t||Rf(t,n))}const Pf=/#/g,R_=/&/g,P_=/\//g,A_=/=/g,N_=/\?/g,Af=/\+/g,M_=/%5B/g,O_=/%5D/g,Nf=/%5E/g,L_=/%60/g,Mf=/%7B/g,D_=/%7C/g,Of=/%7D/g,F_=/%20/g;function Yl(t){return encodeURI(""+t).replace(D_,"|").replace(M_,"[").replace(O_,"]")}function $_(t){return Yl(t).replace(Mf,"{").replace(Of,"}").replace(Nf,"^")}function sl(t){return Yl(t).replace(Af,"%2B").replace(F_,"+").replace(Pf,"%23").replace(R_,"%26").replace(L_,"`").replace(Mf,"{").replace(Of,"}").replace(Nf,"^")}function U_(t){return sl(t).replace(A_,"%3D")}function z_(t){return Yl(t).replace(Pf,"%23").replace(N_,"%3F")}function V_(t){return t==null?"":z_(t).replace(P_,"%2F")}function Xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function W_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Af," "),o=r.indexOf("="),a=Xr(o<0?r:r.slice(0,o)),l=o<0?null:Xr(r.slice(o+1));if(a in e){let c=e[a];Pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gu(t){let e="";for(let n in t){const s=t[n];if(n=U_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(r=>r&&sl(r)):[s&&sl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function B_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const H_=Symbol(""),Yu=Symbol(""),Ql=Symbol(""),Lf=Symbol(""),il=Symbol("");function ai(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Fs(4,{from:n,to:e})):d instanceof Error?a(d):m_(d)?a(Fs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function _a(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(j_(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Cn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Zg(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Cn(h,n,s,r,o)()}))}}return i}function j_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qu(t){const e=Ut(Ql),n=Ut(Lf),s=Me(()=>e.resolve(ne(t.to))),i=Me(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ds.bind(null,u));if(h>-1)return h;const m=Ju(l[c-2]);return c>1&&Ju(u)===m&&d[d.length-1].path!==m?d.findIndex(Ds.bind(null,l[c-2])):h}),r=Me(()=>i.value>-1&&Y_(n.params,s.value.params)),o=Me(()=>i.value>-1&&i.value===n.matched.length-1&&Sf(n.params,s.value.params));function a(l={}){return G_(l)?e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(bi):Promise.resolve()}return{route:s,href:Me(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const q_=Kh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qu,setup(t,{slots:e}){const n=rr(Qu(t)),{options:s}=Ut(Ql),i=Me(()=>({[Xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),K_=q_;function G_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ju(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xu=(t,e,n)=>t??e??n,Q_=Kh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ut(il),i=Me(()=>t.route||s.value),r=Ut(Yu,0),o=Me(()=>{let c=ne(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Me(()=>i.value.matched[o.value]);Fr(Yu,Me(()=>o.value+1)),Fr(H_,a),Fr(il,i);const l=Ae();return $t(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Ds(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Zu(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,A=Gl(h,Pe({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Zu(n.default,{Component:A,route:c})||A}}});function Zu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Df=Q_;function J_(t){const e=T_(t.routes,t),n=t.parseQuery||W_,s=t.stringifyQuery||Gu,i=t.history,r=ai(),o=ai(),a=ai(),l=X0(mn);let c=mn;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,v=>""+v),d=pa.bind(null,V_),h=pa.bind(null,Xr);function m(v,F){let P,W;return kf(v)?(P=e.getRecordMatcher(v),W=F):W=v,e.addRoute(W,P)}function _(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function w(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function x(v,F){if(F=Pe({},F||l.value),typeof v=="string"){const g=ma(n,v,F.path),y=e.resolve({path:g.path},F),C=i.createHref(g.fullPath);return Pe(g,y,{params:h(y.params),hash:Xr(g.hash),redirectedFrom:void 0,href:C})}let P;if("path"in v)P=Pe({},v,{path:ma(n,v.path,F.path).path});else{const g=Pe({},v.params);for(const y in g)g[y]==null&&delete g[y];P=Pe({},v,{params:d(g)}),F.params=d(F.params)}const W=e.resolve(P,F),fe=v.hash||"";W.params=u(h(W.params));const f=n_(s,Pe({},v,{hash:$_(fe),path:W.path})),p=i.createHref(f);return Pe({fullPath:f,hash:fe,query:s===Gu?B_(v.query):v.query||{}},W,{redirectedFrom:void 0,href:p})}function M(v){return typeof v=="string"?ma(n,v,l.value.path):Pe({},v)}function K(v,F){if(c!==v)return Fs(8,{from:F,to:v})}function $(v){return Se(v)}function ee(v){return $(Pe(M(v),{replace:!0}))}function Ee(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:P}=F;let W=typeof P=="function"?P(v):P;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=M(W):{path:W},W.params={}),Pe({query:v.query,hash:v.hash,params:"path"in W?{}:v.params},W)}}function Se(v,F){const P=c=x(v),W=l.value,fe=v.state,f=v.force,p=v.replace===!0,g=Ee(P);if(g)return Se(Pe(M(g),{state:typeof g=="object"?Pe({},fe,g.state):fe,force:f,replace:p}),F||P);const y=P;y.redirectedFrom=F;let C;return!f&&s_(s,W,P)&&(C=Fs(16,{to:y,from:W}),Nt(W,W,!0,!1)),(C?Promise.resolve(C):J(y,W)).catch(b=>Qt(b)?Qt(b,2)?b:hn(b):he(b,y,W)).then(b=>{if(b){if(Qt(b,2))return Se(Pe({replace:p},M(b.to),{state:typeof b.to=="object"?Pe({},fe,b.to.state):fe,force:f}),F||y)}else b=U(y,W,!0,p,fe);return ye(y,W,b),b})}function D(v,F){const P=K(v,F);return P?Promise.reject(P):Promise.resolve()}function V(v){const F=ms.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(v):v()}function J(v,F){let P;const[W,fe,f]=X_(v,F);P=_a(W.reverse(),"beforeRouteLeave",v,F);for(const g of W)g.leaveGuards.forEach(y=>{P.push(Cn(y,v,F))});const p=D.bind(null,v,F);return P.push(p),Xe(P).then(()=>{P=[];for(const g of r.list())P.push(Cn(g,v,F));return P.push(p),Xe(P)}).then(()=>{P=_a(fe,"beforeRouteUpdate",v,F);for(const g of fe)g.updateGuards.forEach(y=>{P.push(Cn(y,v,F))});return P.push(p),Xe(P)}).then(()=>{P=[];for(const g of f)if(g.beforeEnter)if(Pt(g.beforeEnter))for(const y of g.beforeEnter)P.push(Cn(y,v,F));else P.push(Cn(g.beforeEnter,v,F));return P.push(p),Xe(P)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),P=_a(f,"beforeRouteEnter",v,F),P.push(p),Xe(P))).then(()=>{P=[];for(const g of o.list())P.push(Cn(g,v,F));return P.push(p),Xe(P)}).catch(g=>Qt(g,8)?g:Promise.reject(g))}function ye(v,F,P){a.list().forEach(W=>V(()=>W(v,F,P)))}function U(v,F,P,W,fe){const f=K(v,F);if(f)return f;const p=F===mn,g=ws?history.state:{};P&&(W||p?i.replace(v.fullPath,Pe({scroll:p&&g&&g.scroll},fe)):i.push(v.fullPath,fe)),l.value=v,Nt(v,F,P,p),hn()}let de;function Ye(){de||(de=i.listen((v,F,P)=>{if(!Ir.listening)return;const W=x(v),fe=Ee(W);if(fe){Se(Pe(fe,{replace:!0}),W).catch(bi);return}c=W;const f=l.value;ws&&h_(Vu(f.fullPath,P.delta),u_()),J(W,f).catch(p=>Qt(p,12)?p:Qt(p,2)?(Se(p.to,W).then(g=>{Qt(g,20)&&!P.delta&&P.type===Wi.pop&&i.go(-1,!1)}).catch(bi),Promise.reject()):(P.delta&&i.go(-P.delta,!1),he(p,W,f))).then(p=>{p=p||U(W,f,!1),p&&(P.delta&&!Qt(p,8)?i.go(-P.delta,!1):P.type===Wi.pop&&Qt(p,20)&&i.go(-1,!1)),ye(W,f,p)}).catch(bi)}))}let st=ai(),ae=ai(),ve;function he(v,F,P){hn(v);const W=ae.list();return W.length?W.forEach(fe=>fe(v,F,P)):console.error(v),Promise.reject(v)}function Yt(){return ve&&l.value!==mn?Promise.resolve():new Promise((v,F)=>{st.add([v,F])})}function hn(v){return ve||(ve=!v,Ye(),st.list().forEach(([F,P])=>v?P(v):F()),st.reset()),v}function Nt(v,F,P,W){const{scrollBehavior:fe}=t;if(!ws||!fe)return Promise.resolve();const f=!P&&f_(Vu(v.fullPath,0))||(W||!P)&&history.state&&history.state.scroll||null;return $l().then(()=>fe(v,F,f)).then(p=>p&&d_(p)).catch(p=>he(p,v,F))}const at=v=>i.go(v);let ps;const ms=new Set,Ir={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:A,getRoutes:w,resolve:x,options:t,push:$,replace:ee,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Yt,install(v){const F=this;v.component("RouterLink",K_),v.component("RouterView",Df),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),ws&&!ps&&l.value===mn&&(ps=!0,$(i.location).catch(fe=>{}));const P={};for(const fe in mn)Object.defineProperty(P,fe,{get:()=>l.value[fe],enumerable:!0});v.provide(Ql,F),v.provide(Lf,Ah(P)),v.provide(il,l);const W=v.unmount;ms.add(v),v.unmount=function(){ms.delete(v),ms.size<1&&(c=mn,de&&de(),de=null,l.value=mn,ps=!1,ve=!1),W()}}};function Xe(v){return v.reduce((F,P)=>F.then(()=>V(P)),Promise.resolve())}return Ir}function X_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ds(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ds(c,l))||i.push(l))}return[n,s,i]}/**
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
 */const Ff={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Ys(e)},Ys=function(t){return new Error("Firebase Database ("+Ff.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const $f=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Z_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new ey;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(t){const e=$f(t);return Jl.encodeByteArray(e,!0)},Zr=function(t){return Uf(t).replace(/\./g,"")},eo=function(t){try{return Jl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ty(t){return zf(void 0,t)}function zf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ny(n)||(t[n]=zf(t[n],e[n]));return t}function ny(t){return t!=="__proto__"}/**
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
 */function sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iy=()=>sy().__FIREBASE_DEFAULTS__,ry=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eo(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return iy()||ry()||oy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vf=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ay=t=>{const e=Vf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wf=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},Bf=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zr(JSON.stringify(n)),Zr(JSON.stringify(o)),a].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function cy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uy(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jf(){return Ff.NODE_ADMIN===!0}function dy(){try{return typeof indexedDB=="object"}catch{return!1}}function hy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const fy="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fy,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?py(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,s)}}function py(t,e){return t.replace(my,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const my=/\{\$([^}]+)}/g;/**
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
 */function Bi(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
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
 */const qf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Bi(eo(r[0])||""),n=Bi(eo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},gy=function(t){const e=qf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_y=function(t){const e=qf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function no(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ed(r)&&ed(o)){if(!no(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function Qs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class yy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function vy(t,e){const n=new wy(t,e);return n.subscribe.bind(n)}class wy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}function ec(t,e){return`${t} failed: ${e} argument `}/**
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
 */const by=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ey{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ty(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Iy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iy(t){return t===qn?void 0:t}function Ty(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ey(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const ky={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},xy=ge.INFO,Ry={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Py=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ry[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=xy,this._logHandler=Py,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ky[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Ay=(t,e)=>e.some(n=>t instanceof n);let td,nd;function Ny(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function My(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kf=new WeakMap,ol=new WeakMap,Gf=new WeakMap,va=new WeakMap,nc=new WeakMap;function Oy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(An(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kf.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function Ly(t){if(ol.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dy(t){al=t(al)}function Fy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return Gf.set(s,e.sort?e.sort():[e]),An(s)}:My().includes(t)?function(...e){return t.apply(wa(this),e),An(Kf.get(this))}:function(...e){return An(t.apply(wa(this),e))}}function $y(t){return typeof t=="function"?Fy(t):(t instanceof IDBTransaction&&Ly(t),Ay(t,Ny())?new Proxy(t,al):t)}function An(t){if(t instanceof IDBRequest)return Oy(t);if(va.has(t))return va.get(t);const e=$y(t);return e!==t&&(va.set(t,e),nc.set(e,t)),e}const wa=t=>nc.get(t);function Uy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=An(o);return s&&o.addEventListener("upgradeneeded",l=>{s(An(o.result),l.oldVersion,l.newVersion,An(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zy=["get","getKey","getAll","getAllKeys","count"],Vy=["put","add","delete","clear"],Ca=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ca.set(e,r),r}Dy(t=>({...t,get:(e,n,s)=>sd(e,n)||t.get(e,n,s),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
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
 */class Wy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(By(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function By(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",id="0.9.15";/**
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
 */const as=new tc("@firebase/app"),Hy="@firebase/app-compat",jy="@firebase/analytics-compat",qy="@firebase/analytics",Ky="@firebase/app-check-compat",Gy="@firebase/app-check",Yy="@firebase/auth",Qy="@firebase/auth-compat",Jy="@firebase/database",Xy="@firebase/database-compat",Zy="@firebase/functions",ev="@firebase/functions-compat",tv="@firebase/installations",nv="@firebase/installations-compat",sv="@firebase/messaging",iv="@firebase/messaging-compat",rv="@firebase/performance",ov="@firebase/performance-compat",av="@firebase/remote-config",lv="@firebase/remote-config-compat",cv="@firebase/storage",uv="@firebase/storage-compat",dv="@firebase/firestore",hv="@firebase/firestore-compat",fv="firebase",pv="10.1.0";/**
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
 */const cl="[DEFAULT]",mv={[ll]:"fire-core",[Hy]:"fire-core-compat",[qy]:"fire-analytics",[jy]:"fire-analytics-compat",[Gy]:"fire-app-check",[Ky]:"fire-app-check-compat",[Yy]:"fire-auth",[Qy]:"fire-auth-compat",[Jy]:"fire-rtdb",[Xy]:"fire-rtdb-compat",[Zy]:"fire-fn",[ev]:"fire-fn-compat",[tv]:"fire-iid",[nv]:"fire-iid-compat",[sv]:"fire-fcm",[iv]:"fire-fcm-compat",[rv]:"fire-perf",[ov]:"fire-perf-compat",[av]:"fire-rc",[lv]:"fire-rc-compat",[cv]:"fire-gcs",[uv]:"fire-gcs-compat",[dv]:"fire-fst",[hv]:"fire-fst-compat","fire-js":"fire-js",[fv]:"fire-js-all"};/**
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
 */const so=new Map,ul=new Map;function gv(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(ul.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of so.values())gv(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _v={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new cr("app","Firebase",_v);/**
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
 */class yv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=pv;function Yf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=Wf()),!n)throw Nn.create("no-options");const r=so.get(i);if(r){if(no(n,r.options)&&no(s,r.config))return r;throw Nn.create("duplicate-app",{appName:i})}const o=new Sy(i);for(const l of ul.values())o.addComponent(l);const a=new yv(n,s,o);return so.set(i,a),a}function Qf(t=cl){const e=so.get(t);if(!e&&t===cl&&Wf())return Yf();if(!e)throw Nn.create("no-app",{appName:t});return e}function Mn(t,e,n){var s;let i=(s=mv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Us(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vv="firebase-heartbeat-database",wv=1,Hi="firebase-heartbeat-store";let ba=null;function Jf(){return ba||(ba=Uy(vv,wv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hi)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),ba}async function Cv(t){try{return await(await Jf()).transaction(Hi).objectStore(Hi).get(Xf(t))}catch(e){if(e instanceof Vn)as.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(n.message)}}}async function rd(t,e){try{const s=(await Jf()).transaction(Hi,"readwrite");await s.objectStore(Hi).put(e,Xf(t)),await s.done}catch(n){if(n instanceof Vn)as.warn(n.message);else{const s=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});as.warn(s.message)}}}function Xf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bv=1024,Ev=30*24*60*60*1e3;class Iv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ev}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=od(),{heartbeatsToSend:n,unsentEntries:s}=Tv(this._heartbeatsCache.heartbeats),i=Zr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function od(){return new Date().toISOString().substring(0,10)}function Tv(t,e=bv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ad(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ad(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dy()?hy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ad(t){return Zr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kv(t){Us(new os("platform-logger",e=>new Wy(e),"PRIVATE")),Us(new os("heartbeat",e=>new Iv(e),"PRIVATE")),Mn(ll,id,t),Mn(ll,id,"esm2017"),Mn("fire-js","")}kv("");var xv="firebase",Rv="10.1.0";/**
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
 */Mn(xv,Rv,"app");const Pv={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},Zf=Yf(Pv);function ic(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ep(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Av=ep,tp=new cr("auth","Firebase",ep());/**
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
 */const io=new tc("@firebase/auth");function Nv(t,...e){io.logLevel<=ge.WARN&&io.warn(`Auth (${Js}): ${t}`,...e)}function zr(t,...e){io.logLevel<=ge.ERROR&&io.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function At(t,...e){throw rc(t,...e)}function zt(t,...e){return rc(t,...e)}function Mv(t,e,n){const s=Object.assign(Object.assign({},Av()),{[e]:n});return new cr("auth","Firebase",s).create(e,{appName:t.name})}function rc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return tp.create(t,...e)}function G(t,e,...n){if(!t)throw rc(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zr(e),new Error(e)}function an(t,e){t||tn(e)}/**
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
 */function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ov(){return ld()==="http:"||ld()==="https:"}function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ov()||cy()||"connection"in navigator)?navigator.onLine:!0}function Dv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=Zl()||Hf()}get(){return Lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oc(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class np{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $v=new ur(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,i={}){return sp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),np.fetch()(ip(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function sp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fv),e);try{const i=new Uv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mv(t,u,c);At(t,u)}}catch(i){if(i instanceof Vn)throw i;At(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,s,i={}){const r=await Xs(t,e,n,s,i);return"mfaPendingCredential"in r&&At(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ip(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?oc(t.config,i):`${t.config.apiScheme}://${i}`}class Uv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zt(this.auth,"network-request-failed")),$v.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=zt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function zv(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function Vv(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wv(t,e=!1){const n=ft(t),s=await n.getIdToken(e),i=ac(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ei(Ea(i.auth_time)),issuedAtTime:Ei(Ea(i.iat)),expirationTime:Ei(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function ac(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=eo(n);return i?JSON.parse(i):(zr("Failed to decode base64 JWT payload"),null)}catch(i){return zr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bv(t){const e=ac(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vn&&Hv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Hv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ro(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ji(t,Vv(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Gv(r.providerUserInfo):[],a=Kv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rp(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function qv(t){const e=ft(t);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Gv(t){return t.map(e=>{var{providerId:n}=e,s=ic(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Yv(t,e){const n=await sp(t,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ip(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",np.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Yv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new qi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function gn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class is{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rp(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wv(this,e)}reload(){return qv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new is(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ro(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ji(this,zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:$,isAnonymous:ee,providerData:Ee,stsTokenManager:Se}=n;G(K&&Se,e,"internal-error");const D=qi.fromJSON(this.name,Se);G(typeof K=="string",e,"internal-error"),gn(d,e.name),gn(h,e.name),G(typeof $=="boolean",e,"internal-error"),G(typeof ee=="boolean",e,"internal-error"),gn(m,e.name),gn(_,e.name),gn(w,e.name),gn(A,e.name),gn(x,e.name),gn(M,e.name);const V=new is({uid:K,auth:e,email:h,emailVerified:$,displayName:d,isAnonymous:ee,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:D,createdAt:x,lastLoginAt:M});return Ee&&Array.isArray(Ee)&&(V.providerData=Ee.map(J=>Object.assign({},J))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(e,n,s=!1){const i=new qi;i.updateFromServerResponse(n);const r=new is({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ro(r),r}}/**
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
 */const cd=new Map;function nn(t){an(t instanceof Function,"Expected a class definition");let e=cd.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cd.set(t,e),e)}/**
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
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}op.type="NONE";const ud=op;/**
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
 */function Vr(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Vr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Vr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?is._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(nn(ud),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||nn(ud);const o=Vr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=is._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xs(r,e,s))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dp(e))return"Blackberry";if(hp(e))return"Webos";if(lc(e))return"Safari";if((e.includes("chrome/")||lp(e))&&!e.includes("edge/"))return"Chrome";if(up(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ap(t=nt()){return/firefox\//i.test(t)}function lc(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lp(t=nt()){return/crios\//i.test(t)}function cp(t=nt()){return/iemobile/i.test(t)}function up(t=nt()){return/android/i.test(t)}function dp(t=nt()){return/blackberry/i.test(t)}function hp(t=nt()){return/webos/i.test(t)}function jo(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qv(t=nt()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jv(){return uy()&&document.documentMode===10}function fp(t=nt()){return jo(t)||up(t)||hp(t)||dp(t)||/windows phone/i.test(t)||cp(t)}function Xv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pp(t,e=[]){let n;switch(t){case"Browser":n=dd(nt());break;case"Worker":n=`${dd(nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}async function mp(t,e){return Xs(t,"GET","/v2/recaptchaConfig",dr(t,e))}function hd(t){return t!==void 0&&t.enterprise!==void 0}class gp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Zv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _p(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=zt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Zv().appendChild(s)})}function e2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const t2="https://www.google.com/recaptcha/enterprise.js?render=",n2="recaptcha-enterprise",s2="NO_RECAPTCHA";class yp{constructor(e){this.type=n2,this.auth=hr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{mp(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;hd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(s2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&hd(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_p(t2+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fd(t,e,n,s=!1){const i=new yp(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class i2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class r2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new i2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}async initializeRecaptchaConfig(){const e=await mp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hr(t){return ft(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=vy(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function o2(t,e){const n=sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(no(r,e??{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function a2(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function l2(t,e,n){const s=hr(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=vp(e),{host:o,port:a}=c2(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||u2()}function vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c2(t){const e=vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:md(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:md(o)}}}function md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function u2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function d2(t,e){return Xs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ia(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}/**
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
 */async function h2(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function f2(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
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
 */class Ki extends cc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ki(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ki(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await fd(e,s,"signInWithPassword");return Ia(e,i)}else return Ia(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await fd(e,s,"signInWithPassword");return Ia(e,r)}else return Promise.reject(i)});case"emailLink":return h2(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return d2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return f2(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
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
 */const p2="http://localhost";class ls extends cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ic(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ls(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:p2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
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
 */function m2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g2(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,s=pi(mi(t)).deep_link_id;return(s?pi(mi(s)).link:null)||s||n||e||t}class uc{constructor(e){var n,s,i,r,o,a;const l=pi(mi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=m2((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=g2(e);try{return new uc(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=uc.parseLink(n);return G(s,"argument-error"),Ki._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fr extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends fr{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class En extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return En.credential(n,s)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class In extends fr{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Tn extends fr{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await is._fromIdTokenResponse(e,s,i),o=gd(s);return new zs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=gd(s);return new zs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oo extends Vn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new oo(e,n,s,i)}}function Cp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(t,r,e,s):r})}async function _2(t,e,n=!1){const s=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
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
 */async function y2(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ji(t,Cp(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=ac(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),zs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&At(s,"user-mismatch"),r}}/**
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
 */async function bp(t,e,n=!1){const s="signIn",i=await Cp(t,s,e),r=await zs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function v2(t,e){return bp(hr(t),e)}function w2(t,e,n){return v2(ft(t),Zs.credential(e,n))}function C2(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function b2(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function E2(t,e,n,s){return ft(t).onAuthStateChanged(e,n,s)}const ao="__sak";/**
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
 */class Ep{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function I2(){const t=nt();return lc(t)||jo(t)}const T2=1e3,S2=10;class Ip extends Ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=I2()&&Xv(),this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Jv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S2):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},T2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const k2=Ip;/**
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
 */class Tp extends Ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tp.type="SESSION";const Sp=Tp;/**
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
 */function x2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await x2(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function dc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class R2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vt(){return window}function P2(t){Vt().location.href=t}/**
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
 */function kp(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function A2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M2(){return kp()?self:null}/**
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
 */const xp="firebaseLocalStorageDb",O2=1,lo="firebaseLocalStorage",Rp="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function L2(){const t=indexedDB.deleteDatabase(xp);return new pr(t).toPromise()}function hl(){const t=indexedDB.open(xp,O2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(lo,{keyPath:Rp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(lo)?e(s):(s.close(),await L2(),e(await hl()))})})}async function _d(t,e,n){const s=Ko(t,!0).put({[Rp]:e,value:n});return new pr(s).toPromise()}async function D2(t,e){const n=Ko(t,!1).get(e),s=await new pr(n).toPromise();return s===void 0?null:s.value}function yd(t,e){const n=Ko(t,!0).delete(e);return new pr(n).toPromise()}const F2=800,$2=3;class Pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(M2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A2(),!this.activeServiceWorker)return;this.sender=new R2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await _d(e,ao,"1"),await yd(e,ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_d(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>D2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ko(i,!1).getAll();return new pr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const U2=Pp;new ur(3e4,6e4);/**
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
 */function z2(t,e){return e?nn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hc extends cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V2(t){return bp(t.auth,new hc(t),t.bypassAuthState)}function W2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),y2(n,new hc(t),t.bypassAuthState)}async function B2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_2(n,new hc(t),t.bypassAuthState)}/**
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
 */class Ap{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V2;case"linkViaPopup":case"linkViaRedirect":return B2;case"reauthViaPopup":case"reauthViaRedirect":return W2;default:At(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H2=new ur(2e3,1e4);class bs extends Ap{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}bs.currentPopupAction=null;/**
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
 */const j2="pendingRedirect",Wr=new Map;class q2 extends Ap{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const s=await K2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K2(t,e){const n=Q2(e),s=Y2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function G2(t,e){Wr.set(t._key(),e)}function Y2(t){return nn(t._redirectPersistence)}function Q2(t){return Vr(j2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){const s=hr(t),i=z2(s,e),o=await new q2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const X2=10*60*1e3;class Z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Np(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X2&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Np({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(t);default:return!1}}/**
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
 */async function tw(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const nw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sw=/^https?/;async function iw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tw(t);for(const n of e)try{if(rw(n))return}catch{}At(t,"unauthorized-domain")}function rw(t){const e=dl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sw.test(n))return!1;if(nw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const ow=new ur(3e4,6e4);function wd(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aw(t){return new Promise((e,n)=>{var s,i,r;function o(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(zt(t,"network-request-failed"))},timeout:ow.get()})}if(!((i=(s=Vt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Vt().gapi)===null||r===void 0)&&r.load)o();else{const a=e2("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},_p(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Br=null,e})}let Br=null;function lw(t){return Br=Br||aw(t),Br}/**
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
 */const cw=new ur(5e3,15e3),uw="__/auth/iframe",dw="emulator/auth/iframe",hw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pw(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oc(e,dw):`https://${t.config.authDomain}/${uw}`,s={apiKey:e.apiKey,appName:t.name,v:Js},i=fw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qs(s).slice(1)}`}async function mw(t){const e=await lw(t),n=Vt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:pw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Vt().setTimeout(()=>{r(o)},cw.get());function l(){Vt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const gw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_w=500,yw=600,vw="_blank",ww="http://localhost";class Cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cw(t,e,n,s=_w,i=yw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=nt().toLowerCase();n&&(a=lp(c)?vw:n),ap(c)&&(e=e||ww,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Qv(c)&&a!=="_self")return bw(e||"",a),new Cd(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new Cd(d)}function bw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ew="__/auth/handler",Iw="emulator/auth/handler",Tw=encodeURIComponent("fac");async function bd(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:i};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof fr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Tw}=${encodeURIComponent(l)}`:"";return`${Sw(t)}?${Qs(a).slice(1)}${c}`}function Sw({config:t}){return t.emulator?oc(t,Iw):`https://${t.authDomain}/${Ew}`}/**
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
 */const Ta="webStorageSupport";class kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sp,this._completeRedirectFn=J2,this._overrideRedirectResult=G2}async _openPopup(e,n,s,i){var r;an((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bd(e,n,s,dl(),i);return Cw(e,o,dc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await bd(e,n,s,dl(),i);return P2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(an(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mw(e),s=new Z2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ta];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fp()||lc()||jo()}}const xw=kw;var Ed="@firebase/auth",Id="1.1.0";/**
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
 */class Rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Aw(t){Us(new os("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(t)},c=new r2(s,i,r,l);return a2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Us(new os("auth-internal",e=>{const n=hr(e.getProvider("auth").getImmediate());return(s=>new Rw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Ed,Id,Pw(t)),Mn(Ed,Id,"esm2017")}/**
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
 */const Nw=5*60,Mw=Bf("authIdTokenMaxAge")||Nw;let Td=null;const Ow=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Mw)return;const i=n==null?void 0:n.token;Td!==i&&(Td=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lw(t=Qf()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=o2(t,{popupRedirectResolver:xw,persistence:[U2,k2,Sp]}),s=Bf("authTokenSyncURL");if(s){const r=Ow(s);b2(n,r,()=>r(n.currentUser)),C2(n,o=>r(o))}const i=Vf("auth");return i&&l2(n,`http://${i}`),n}Aw("Browser");const fc=Lw(Zf),co=Ae({}),vn=Ae({}),Gi=new Ae(!1);E2(fc,async t=>{if(t){co.value=t,vn.value=await KE(`users/${t.uid}`);for(const{observable:e,path:n}of Xm)if(vn.value["game-data"]&&vn.value["game-data"]["tileswap-naenae"]&&vn.value["game-data"]["tileswap-naenae"][n]){const s=vn.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=vn.value["game-data"]["tileswap-naenae"][n]}}else co.value={},vn.value={};Gi.value=!0});const Go=Me(()=>co.value);Me(()=>vn.value);const mr=Me(()=>Object.keys(co.value).length>0),Dw=async(t,e)=>await w2(fc,t,e),fl=async()=>await fc.signOut(),Sd="@firebase/database",kd="1.0.1";/**
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
 */let Mp="";function Fw(t){Mp=t}/**
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
 */class $w{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Uw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Op=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $w(e)}}catch{}return new Uw},Xn=Op("localStorage"),pl=Op("sessionStorage");/**
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
 */const Ps=new tc("@firebase/database"),zw=function(){let t=1;return function(){return t++}}(),Lp=function(t){const e=by(t),n=new yy;n.update(e);const s=n.digest();return Jl.encodeByteArray(s)},gr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gr.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let rs=null,xd=!0;const Vw=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ps.logLevel=ge.VERBOSE,rs=Ps.log.bind(Ps),e&&pl.set("logging_enabled",!0)):typeof t=="function"?rs=t:(rs=null,pl.remove("logging_enabled"))},Ze=function(...t){if(xd===!0&&(xd=!1,rs===null&&pl.get("logging_enabled")===!0&&Vw(!0)),rs){const e=gr.apply(null,t);rs(e)}},_r=function(t){return function(...e){Ze(t,...e)}},ml=function(...t){const e="FIREBASE INTERNAL ERROR: "+gr(...t);Ps.error(e)},ln=function(...t){const e=`FIREBASE FATAL ERROR: ${gr(...t)}`;throw Ps.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+gr(...t);Ps.warn(e)},Ww=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vs="[MIN_NAME]",cs="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Vs||e===cs)return-1;if(e===Vs||t===cs)return 1;{const n=Rd(t),s=Rd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hw=function(t,e){return t===e?0:t<e?-1:1},li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},pc=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=pc(t[e[s]]);return n+="}",n},Fp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $p=function(t){k(!Dp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},jw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Kw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Gw=new RegExp("^-?(0*)\\d{1,10}$"),Yw=-2147483648,Qw=2147483647,Rd=function(t){if(Gw.test(t)){const e=Number(t);if(e>=Yw&&e<=Qw)return e}return null},ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},Jw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ii=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Zw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
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
 */const mc="5",Up="v",zp="s",Vp="r",Wp="f",Bp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hp="ls",jp="p",gl="ac",qp="websocket",Kp="long_polling";/**
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
 */class Gp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yp(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===qp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eC(t)&&(n.ns=t.namespace);const i=[];return ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class tC{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ty(this.counters_)}}/**
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
 */const Sa={},ka={};function gc(t){const e=t.toString();return Sa[e]||(Sa[e]=new tC),Sa[e]}function nC(t,e){const n=t.toString();return ka[n]||(ka[n]=e()),ka[n]}/**
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
 */class sC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ti(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pd="start",iC="close",rC="pLPCommand",oC="pRTLPCB",Qp="id",Jp="pw",Xp="ser",aC="cb",lC="seg",cC="ts",uC="d",dC="dframe",Zp=1870,em=30,hC=Zp-em,fC=25e3,pC=3e4;class Es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_r(e),this.stats_=gc(n),this.urlFn=l=>(this.appCheckToken&&(l[gl]=this.appCheckToken),Yp(n,Kp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pC)),Bw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _c((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pd)this.id=a,this.password=l;else if(o===iC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pd]="t",s[Xp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[aC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Up]=mc,this.transportSessionId&&(s[zp]=this.transportSessionId),this.lastSessionId&&(s[Hp]=this.lastSessionId),this.applicationId&&(s[jp]=this.applicationId),this.appCheckToken&&(s[gl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bp.test(location.hostname)&&(s[Vp]=Wp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jw()&&!qw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uf(n),i=Fp(s,hC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[dC]="t",s[Qp]=e,s[Jp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _c{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zw(),window[rC+this.uniqueCallbackIdentifier]=e,window[oC+this.uniqueCallbackIdentifier]=n,this.myIFrame=_c.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qp]=this.myID,e[Jp]=this.myPW,e[Xp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+em+s.length<=Zp;){const o=this.pendingSegs.shift();s=s+"&"+lC+i+"="+o.seg+"&"+cC+i+"="+o.ts+"&"+uC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(fC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const mC=16384,gC=45e3;let uo=null;typeof MozWebSocket<"u"?uo=MozWebSocket:typeof WebSocket<"u"&&(uo=WebSocket);class Et{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_r(this.connId),this.stats_=gc(n),this.connURL=Et.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Up]=mc,typeof location<"u"&&location.hostname&&Bp.test(location.hostname)&&(o[Vp]=Wp),n&&(o[zp]=n),s&&(o[Hp]=s),i&&(o[gl]=i),r&&(o[jp]=r),Yp(e,qp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let s;jf(),this.mySock=new uo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&uo!==null&&!Et.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fp(n,mC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class Yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Et&&Et.isAvailable();let s=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const i=this.transports_=[];for(const r of Yi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yi.globalTransportInitialized_=!1;/**
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
 */const _C=6e4,yC=5e3,vC=10*1024,wC=100*1024,xa="t",Ad="d",CC="s",Nd="r",bC="e",Md="o",Od="a",Ld="n",Dd="p",EC="h";class IC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_r("c:"+this.id+":"),this.transportManager_=new Yi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ii(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xa in e){const n=e[xa];n===Od?this.upgradeIfSecondaryHealthy_():n===Nd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Md&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),s=li("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Od,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ld,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),s=li("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(xa,e);if(Ad in e){const s=e[Ad];if(n===EC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ld){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CC?this.onConnectionShutdown_(s):n===Nd?this.onReset_(s):n===bC?ml("Server Error: "+s):n===Md?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ml("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mc!==s&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ii(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_C))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ii(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tm{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class nm{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ho extends nm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ho}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fd=32,$d=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new Ce("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $n(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function sm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function im(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ce(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return rt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function om(t,e){if($n(t)!==$n(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if($n(t)>$n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class SC{constructor(e,n){this.errorPrefix_=n,this.parts_=im(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bo(this.parts_[s]);am(this)}}function kC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bo(e),am(t)}function xC(t){const e=t.parts_.pop();t.byteLength_-=Bo(e),t.parts_.length>0&&(t.byteLength_-=1)}function am(t){if(t.byteLength_>$d)throw new Error(t.errorPrefix_+"has a key path longer than "+$d+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fd+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yc extends nm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yc}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ci=1e3,RC=60*5*1e3,Ud=30*1e3,PC=1.3,AC=3e4,NC="server_kill",zd=3;class rn extends tm{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rn.nextPersistentConnectionId_++,this.log_=_r("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=RC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ho.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Wo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;rn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=$s(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_y(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ud)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ml("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AC&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new IC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{ut(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(NC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rl(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>pc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zd&&(this.reconnectDelay_=Ud,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mp.replace(/\./g,"-")]=1,Zl()?e["framework.cordova"]=1:Hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ho.getInstance().currentlyOnline();return rl(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class Yo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(Vs,e),i=new te(Vs,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
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
 */let Mr;class lm extends Yo{static get __EMPTY_NODE(){return Mr}static set __EMPTY_NODE(e){Mr=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(cs,Mr)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Mr)}toString(){return".key"}}const Ns=new lm;/**
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
 */class Or{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??ct.EMPTY_NODE,this.right=r??ct.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class MC{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Or(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Or(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new MC;/**
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
 */function OC(t,e){return ei(t.name,e.name)}function vc(t,e){return ei(t,e)}/**
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
 */let _l;function LC(t){_l=t}const cm=function(t){return typeof t=="number"?"number:"+$p(t):"string:"+t},um=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else k(t===_l||t.isEmpty(),"priority of unexpected type.");k(t===_l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vd;class je{constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),um(this.priorityNode_)}static set __childrenNodeConstructor(e){Vd=e}static get __childrenNodeConstructor(){return Vd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||$n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$p(this.value_):e+=this.value_,this.lazyHash_=Lp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),r=je.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dm,hm;function DC(t){dm=t}function FC(t){hm=t}class $C extends Yo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(cs,new je("[PRIORITY-POST]",hm))}makePost(e,n){const s=dm(e);return new te(n,new je("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ne=new $C;/**
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
 */const UC=Math.log(2);class zC{constructor(e){const n=r=>parseInt(Math.log(r)/UC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new qe(h,d.node,qe.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),w=i(m+1,c);return d=t[m],h=n?n(d):d,new qe(h,d.node,qe.BLACK,_,w)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const A=d-_,x=d;d-=_;const M=i(A+1,x),K=t[A],$=n?n(K):K;m(new qe($,K.node,w,null,M))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),A=Math.pow(2,l.count-(_+1));w?h(A,qe.BLACK):(h(A,qe.BLACK),h(A,qe.RED))}return u},o=new zC(t.length),a=r(o);return new ct(s||e,a)};/**
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
 */let Ra;const vs={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(vs&&Ne,"ChildrenNode.ts has not been loaded"),Ra=Ra||new sn({".priority":vs},{".priority":Ne}),Ra}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fo(s,e.getCompare()):a=vs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new sn(u,c)}addToIndexes(e,n){const s=to(this.indexes_,(i,r)=>{const o=$s(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===vs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fo(a,o.getCompare())}else return vs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=to(this.indexes_,i=>{if(i===vs)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new sn(s,this.indexSet_)}}/**
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
 */let ui;class q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&um(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ui||(ui=new q(new ct(vc),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ui:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ui:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{k(re(e)!==".priority"||$n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ne,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cm(this.getPriority().val())+":"),this.forEachChild(Ne,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Lp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yr?-1:0}withIndex(e){if(e===Ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ne),i=n.getIterator(Ne);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ns?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VC extends q{constructor(){super(new ct(vc),q.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const yr=new VC;Object.defineProperties(te,{MIN:{value:new te(Vs,q.EMPTY_NODE)},MAX:{value:new te(cs,yr)}});lm.__EMPTY_NODE=q.EMPTY_NODE;je.__childrenNodeConstructor=q;LC(yr);FC(yr);/**
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
 */const WC=!0;function Ke(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,Ke(e))}if(!(t instanceof Array)&&WC){const n=[];let s=!1;if(ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ke(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=fo(n,OC,o=>o.name,vc);if(s){const o=fo(n,Ne.getCompare());return new q(r,Ke(e),new sn({".priority":o},{".priority":Ne}))}else return new q(r,Ke(e),sn.Default)}else{let n=q.EMPTY_NODE;return ht(t,(s,i)=>{if(un(t,s)&&s.substring(0,1)!=="."){const r=Ke(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ke(e))}}DC(Ke);/**
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
 */class BC extends Yo{constructor(e){super(),this.indexPath_=e,k(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}makePost(e,n){const s=Ke(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,yr);return new te(cs,e)}toString(){return im(this.indexPath_,0).join("/")}}/**
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
 */class HC extends Yo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Ke(e);return new te(n,s)}toString(){return".value"}}const jC=new HC;/**
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
 */function fm(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ji(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Qi(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,s)):o.trackChildChange(Ji(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,r)=>{n.hasChild(i)||s.trackChildChange(Qi(i,r))}),n.isLeafNode()||n.forEachChild(Ne,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ji(i,r,o))}else s.trackChildChange(Ws(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xi{constructor(e){this.indexedFilter_=new wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xi.getStartPost_(e),this.endPost_=Xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Ne,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class KC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new te(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Ji(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Qi(n,d));const w=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ws(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Qi(c.name,c.node)),r.trackChildChange(Ws(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
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
 */class Cc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vs}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new Cc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GC(t){return t.loadsAllData()?new wc(t.getIndex()):t.hasLimit()?new KC(t):new Xi(t)}function Wd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===jC?n="$value":t.index_===Ns?n="$key":(k(t.index_ instanceof BC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
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
 */class po extends tm{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_r("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=po.getListenId_(e,s),a={};this.listens_[o]=a;const l=Wd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),$s(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=po.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wd(e._queryParams),s=e._path.toString(),i=new Wo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bi(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class YC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function mo(){return{value:null,children:new Map}}function pm(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,mo());const i=t.children.get(s);e=Te(e),pm(i,e,n)}}function yl(t,e,n){t.value!==null?n(e,t.value):QC(t,(s,i)=>{const r=new Ce(e.toString()+"/"+s);yl(i,r,n)})}function QC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class JC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Hd=10*1e3,XC=30*1e3,ZC=5*60*1e3;class eb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JC(e);const s=Hd+(XC-Hd)*Math.random();Ii(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ht(e,(i,r)=>{r>0&&un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ii(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZC))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function mm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ec(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class go{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=mm()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new go(ue(),n,this.revert)}}else return k(re(this.path)===e,"operationForChild called for unrelated child."),new go(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zi{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Zi(this.source,ue()):new Zi(this.source,Te(this.path))}}/**
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
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return se(this.path)?new us(this.source,ue(),this.snap.getImmediateChild(e)):new us(this.source,Te(this.path),this.snap)}}/**
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
 */class er{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new us(this.source,ue(),n.value):new er(this.source,ue(),n)}else return k(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Un{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class tb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qC(o.childName,o.snapshotNode))}),di(t,i,"child_removed",e,s,n),di(t,i,"child_added",e,s,n),di(t,i,"child_moved",r,s,n),di(t,i,"child_changed",e,s,n),di(t,i,"value",e,s,n),i}function di(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>ib(t,a,l)),o.forEach(a=>{const l=sb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ib(t,e,n){if(e.childName==null||n.childName==null)throw Ys("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Qo(t,e){return{eventCache:t,serverCache:e}}function Ti(t,e,n,s){return Qo(new Un(e,n,s),t.serverCache)}function gm(t,e,n,s){return Qo(t.eventCache,new Un(e,n,s))}function _o(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pa;const rb=()=>(Pa||(Pa=new ct(Hw)),Pa);class xe{constructor(e,n=rb()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return ht(e,(s,i)=>{n=n.set(new Ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(se(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Te(e),n);return r!=null?{path:Be(new Ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Te(e)):new xe(null)}}set(e,n){if(se(e))return new xe(n,this.children);{const s=re(e),r=(this.children.get(s)||new xe(null)).set(Te(e),n),o=this.children.insert(s,r);return new xe(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new xe(null):new xe(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Te(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),r=(this.children.get(s)||new xe(null)).setTree(Te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new xe(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Te(e),Be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Te(e),Be(n,i),s):new xe(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new xe(null))}}function Si(t,e,n){if(se(e))return new Rt(new xe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=rt(i,e);return r=r.updateChild(o,n),new Rt(t.writeTree_.set(i,r))}else{const i=new xe(n),r=t.writeTree_.setTree(e,i);return new Rt(r)}}}function jd(t,e,n){let s=t;return ht(n,(i,r)=>{s=Si(s,Be(e,i),r)}),s}function qd(t,e){if(se(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Rt(n)}}function vl(t,e){return fs(t,e)!=null}function fs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function Kd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function On(t,e){if(se(e))return t;{const n=fs(t,e);return n!=null?new Rt(new xe(n)):new Rt(t.writeTree_.subtree(e))}}function wl(t){return t.writeTree_.isEmpty()}function Bs(t,e){return _m(ue(),t.writeTree_,e)}function _m(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=_m(Be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Be(t,".priority"),s)),n}}/**
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
 */function Jo(t,e){return Cm(e,t)}function ob(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=s}function ab(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function lb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cb(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return ub(t),!0;if(s.snap)t.visibleWrites=qd(t.visibleWrites,s.path);else{const a=s.children;ht(a,l=>{t.visibleWrites=qd(t.visibleWrites,Be(s.path,l))})}return!0}else return!1}function cb(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(Be(t.path,n),e))return!0;return!1}function ub(t){t.visibleWrites=ym(t.allWrites,db,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function db(t){return t.visible}function ym(t,e,n){let s=Rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=rt(n,o),s=Si(s,a,r.snap)):Tt(o,n)&&(a=rt(o,n),s=Si(s,ue(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=rt(n,o),s=jd(s,a,r.children);else if(Tt(o,n))if(a=rt(o,n),se(a))s=jd(s,ue(),r.children);else{const l=$s(r.children,re(a));if(l){const c=l.getChild(Te(a));s=Si(s,ue(),c)}}}else throw Ys("WriteRecord should have .snap or .children")}}return s}function vm(t,e,n,s,i){if(!s&&!i){const r=fs(t.visibleWrites,e);if(r!=null)return r;{const o=On(t.visibleWrites,e);if(wl(o))return n;if(n==null&&!vl(o,ue()))return null;{const a=n||q.EMPTY_NODE;return Bs(o,a)}}}else{const r=On(t.visibleWrites,e);if(!i&&wl(r))return n;if(!i&&n==null&&!vl(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=ym(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Bs(a,l)}}}function hb(t,e,n){let s=q.EMPTY_NODE;const i=fs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=On(t.visibleWrites,e);return n.forEachChild(Ne,(o,a)=>{const l=Bs(On(r,new Ce(o)),a);s=s.updateImmediateChild(o,l)}),Kd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=On(t.visibleWrites,e);return Kd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function fb(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Be(e,n);if(vl(t.visibleWrites,r))return null;{const o=On(t.visibleWrites,r);return wl(o)?i.getChild(n):Bs(o,i.getChild(n))}}function pb(t,e,n,s){const i=Be(e,n),r=fs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=On(t.visibleWrites,i);return Bs(o,s.getNode().getImmediateChild(n))}else return null}function mb(t,e){return fs(t.visibleWrites,e)}function gb(t,e,n,s,i,r,o){let a;const l=On(t.visibleWrites,e),c=fs(l,ue());if(c!=null)a=c;else if(n!=null)a=Bs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function _b(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function yo(t,e,n,s){return vm(t.writeTree,t.treePath,e,n,s)}function Ic(t,e){return hb(t.writeTree,t.treePath,e)}function Gd(t,e,n,s){return fb(t.writeTree,t.treePath,e,n,s)}function vo(t,e){return mb(t.writeTree,Be(t.treePath,e))}function yb(t,e,n,s,i,r){return gb(t.writeTree,t.treePath,e,n,s,i,r)}function Tc(t,e,n){return pb(t.writeTree,t.treePath,e,n)}function wm(t,e){return Cm(Be(t.treePath,e),t.writeTree)}function Cm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class vb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ji(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Qi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ws(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ji(s,e.snapshotNode,i.oldSnap));else throw Ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bm=new wb;class Sc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),r=yb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Cb(t){return{filter:t}}function bb(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Eb(t,e,n,s,i){const r=new vb;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=Cl(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=wo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=Tb(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=xb(t,e,c.path,s,i,r):o=Sb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===St.LISTEN_COMPLETE)o=kb(t,e,n.path,s,r);else throw Ys("Unknown operation type: "+n.type);const l=r.getChanges();return Ib(e,o,l),{viewCache:o,changes:l}}function Ib(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_o(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(fm(_o(e)))}}function Em(t,e,n,s,i,r){const o=e.eventCache;if(vo(s,n)!=null)return e;{let a,l;if(se(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ds(e),u=c instanceof q?c:q.EMPTY_NODE,d=Ic(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=yo(s,ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){k($n(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Gd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Te(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Gd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Tc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ti(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function wo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=re(n);if(!l.isCompleteForPath(n)&&$n(n)>1)return e;const _=Te(n),A=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),m,A,_,bm,null)}const d=gm(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),h=new Sc(i,d,r);return Em(t,d,n,i,h,a)}function Cl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Sc(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ti(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Te(n),m=a.getNode().getImmediateChild(d);let _;if(se(h))_=s;else{const w=u.getCompleteChild(d);w!=null?sm(h)===".priority"&&w.getChild(rm(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=q.EMPTY_NODE}if(m.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=Ti(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yd(t,e){return t.eventCache.isCompleteForChild(e)}function Tb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Be(n,l);Yd(e,re(u))&&(a=Cl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Be(n,l);Yd(e,re(u))||(a=Cl(t,a,u,c,i,r,o))}),a}function Qd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function bl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new xe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Qd(t,m,h);l=wo(t,l,new Ce(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),w=Qd(t,_,h);l=wo(t,l,new Ce(d),w,i,r,o,a)}}),l}function Sb(t,e,n,s,i,r,o){if(vo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(se(n)){let c=new xe(null);return l.getNode().forEachChild(Ns,(u,d)=>{c=c.set(new Ce(u),d)}),bl(t,e,n,c,i,r,a,o)}else return e}else{let c=new xe(null);return s.foreach((u,d)=>{const h=Be(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),bl(t,e,n,c,i,r,a,o)}}function kb(t,e,n,s,i){const r=e.serverCache,o=gm(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return Em(t,o,n,s,bm,i)}function xb(t,e,n,s,i,r){let o;if(vo(s,n)!=null)return e;{const a=new Sc(s,e,i),l=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yo(s,ds(e));else{const d=e.serverCache.getNode();k(d instanceof q,"serverChildren would be complete if leaf node"),u=Ic(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let d=Tc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Te(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,Te(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yo(s,ds(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vo(s,ue())!=null,Ti(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Rb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wc(s.getIndex()),r=GC(s);this.processor_=Cb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new Un(l,o.isFullyInitialized(),i.filtersNodes()),d=new Un(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qo(d,u),this.eventGenerator_=new tb(this.query_)}get query(){return this.query_}}function Pb(t){return t.viewCache_.serverCache.getNode()}function Ab(t){return _o(t.viewCache_)}function Nb(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function Jd(t){return t.eventRegistrations_.length===0}function Mb(t,e){t.eventRegistrations_.push(e)}function Xd(t,e,n){const s=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zd(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(k(ds(t.viewCache_),"We should always have a full cache before handling merges"),k(_o(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Eb(t.processor_,i,e,n,s);return bb(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Im(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ob(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(r,o)=>{s.push(Ws(r,o))}),n.isFullyInitialized()&&s.push(fm(n.getNode())),Im(t,s,n.getNode(),e)}function Im(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return nb(t.eventGenerator_,e,n,i)}/**
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
 */let Co;class Tm{constructor(){this.views=new Map}}function Lb(t){k(!Co,"__referenceConstructor has already been defined"),Co=t}function Db(){return k(Co,"Reference.ts has not been loaded"),Co}function Fb(t){return t.views.size===0}function kc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),Zd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zd(o,e,n,s));return r}}function Sm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=yo(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=Ic(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=Qo(new Un(a,l,!1),new Un(s,i,!1));return new Rb(e,c)}return o}function $b(t,e,n,s,i,r){const o=Sm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mb(o,n),Ob(o,n)}function Ub(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=zn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Xd(c,n,s)),Jd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Xd(l,n,s)),Jd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!zn(t)&&r.push(new(Db())(e._repo,e._path)),{removed:r,events:o}}function km(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ln(t,e){let n=null;for(const s of t.views.values())n=n||Nb(s,e);return n}function xm(t,e){if(e._queryParams.loadsAllData())return Xo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Rm(t,e){return xm(t,e)!=null}function zn(t){return Xo(t)!=null}function Xo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let bo;function zb(t){k(!bo,"__referenceConstructor has already been defined"),bo=t}function Vb(){return k(bo,"Reference.ts has not been loaded"),bo}let Wb=1;class eh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=_b(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pm(t,e,n,s,i){return ob(t.pendingWriteTree_,e,n,s,i),i?wr(t,new us(mm(),e,n)):[]}function Zn(t,e,n=!1){const s=ab(t.pendingWriteTree_,e);if(lb(t.pendingWriteTree_,e)){let r=new xe(null);return s.snap!=null?r=r.set(ue(),!0):ht(s.children,o=>{r=r.set(new Ce(o),!0)}),wr(t,new go(s.path,r,n))}else return[]}function vr(t,e,n){return wr(t,new us(bc(),e,n))}function Bb(t,e,n){const s=xe.fromObject(n);return wr(t,new er(bc(),e,s))}function Hb(t,e){return wr(t,new Zi(bc(),e))}function jb(t,e,n){const s=Rc(t,n);if(s){const i=Pc(s),r=i.path,o=i.queryId,a=rt(r,e),l=new Zi(Ec(o),a);return Ac(t,r,l)}else return[]}function Am(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Rm(o,e))){const l=Ub(o,e,n,s);Fb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>zn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=Yb(h);for(let _=0;_<m.length;++_){const w=m[_],A=w.query,x=Lm(t,w);t.listenProvider_.startListening(ki(A),tr(t,A),x.hashFn,x.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ki(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Zo(h));t.listenProvider_.stopListening(ki(h),m)}))}Qb(t,c)}return a}function Nm(t,e,n,s){const i=Rc(t,s);if(i!=null){const r=Pc(i),o=r.path,a=r.queryId,l=rt(o,e),c=new us(Ec(a),l,n);return Ac(t,o,c)}else return[]}function qb(t,e,n,s){const i=Rc(t,s);if(i){const r=Pc(i),o=r.path,a=r.queryId,l=rt(o,e),c=xe.fromObject(n),u=new er(Ec(a),l,c);return Ac(t,o,u)}else return[]}function Kb(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=rt(h,i);r=r||Ln(m,_),o=o||zn(m)});let a=t.syncPointTree_.get(i);a?(o=o||zn(a),r=r||Ln(a,ue())):(a=new Tm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const w=Ln(_,ue());w&&(r=r.updateImmediateChild(m,w))}));const c=Rm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Zo(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=Jb();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Jo(t.pendingWriteTree_,i);let d=$b(a,e,n,u,r,l);if(!c&&!o&&!s){const h=xm(a,e);d=d.concat(Xb(t,e,h))}return d}function xc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),c=Ln(a,l);if(c)return c});return vm(i,e,r,n,!0)}function Gb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=rt(c,n);s=s||Ln(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Ln(i,ue()):(i=new Tm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Un(s,!0,!1):null,a=Jo(t.pendingWriteTree_,e._path),l=Sm(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return Ab(l)}function wr(t,e){return Mm(e,t.syncPointTree_,null,Jo(t.pendingWriteTree_,ue()))}function Mm(t,e,n,s){if(se(t.path))return Om(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=Ln(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wm(s,o);r=r.concat(Mm(a,l,c,u))}return i&&(r=r.concat(kc(i,t,s,n))),r}}function Om(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=Ln(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wm(s,o),u=t.operationForChild(o);u&&(r=r.concat(Om(u,a,l,c)))}),i&&(r=r.concat(kc(i,t,s,n))),r}function Lm(t,e){const n=e.query,s=tr(t,n);return{hashFn:()=>(Pb(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jb(t,n._path,s):Hb(t,n._path);{const r=Kw(i,n);return Am(t,n,null,r)}}}}function tr(t,e){const n=Zo(e);return t.queryToTagMap.get(n)}function Zo(t){return t._path.toString()+"$"+t._queryIdentifier}function Rc(t,e){return t.tagToQueryMap.get(e)}function Pc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Ac(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=Jo(t.pendingWriteTree_,e);return kc(s,n,i,null)}function Yb(t){return t.fold((e,n,s)=>{if(n&&zn(n))return[Xo(n)];{let i=[];return n&&(i=km(n)),ht(s,(r,o)=>{i=i.concat(o)}),i}})}function ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Vb())(t._repo,t._path):t}function Qb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Zo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Jb(){return Wb++}function Xb(t,e,n){const s=e._path,i=tr(t,e),r=Lm(t,n),o=t.listenProvider_.startListening(ki(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)k(!zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!se(c)&&u&&zn(u))return[Xo(u).query];{let h=[];return u&&(h=h.concat(km(u).map(m=>m.query))),ht(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ki(u),tr(t,u))}}return o}/**
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
 */class Nc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nc(n)}node(){return this.node_}}class Mc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Mc(this.syncTree_,n)}node(){return xc(this.syncTree_,this.path_)}}const Zb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},th=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tE(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},tE=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},nE=function(t,e,n,s){return Oc(e,new Mc(n,t),s)},Dm=function(t,e,n){return Oc(t,new Nc(e),n)};function Oc(t,e,n){const s=t.getPriority().val(),i=th(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=th(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,Ke(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new je(i))),o.forEachChild(Ne,(a,l)=>{const c=Oc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Lc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Dc(t,e){let n=e instanceof Ce?e:new Ce(e),s=t,i=re(n);for(;i!==null;){const r=$s(s.node.children,i)||{children:{},childCount:0};s=new Lc(i,s,r),n=Te(n),i=re(n)}return s}function ni(t){return t.node.value}function Fm(t,e){t.node.value=e,El(t)}function $m(t){return t.node.childCount>0}function sE(t){return ni(t)===void 0&&!$m(t)}function ea(t,e){ht(t.node.children,(n,s)=>{e(new Lc(n,t,s))})}function Um(t,e,n,s){n&&!s&&e(t),ea(t,i=>{Um(i,e,!0,s)}),n&&s&&e(t)}function iE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Cr(t){return new Ce(t.parent===null?t.name:Cr(t.parent)+"/"+t.name)}function El(t){t.parent!==null&&rE(t.parent,t.name,t)}function rE(t,e,n){const s=sE(n),i=un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,El(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,El(t))}/**
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
 */const oE=/[\[\].#$\/\u0000-\u001F\u007F]/,aE=/[\[\].#$\u0000-\u001F\u007F]/,Aa=10*1024*1024,zm=function(t){return typeof t=="string"&&t.length!==0&&!oE.test(t)},Vm=function(t){return typeof t=="string"&&t.length!==0&&!aE.test(t)},lE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vm(t)},cE=function(t,e,n,s){s&&e===void 0||Fc(ec(t,"value"),e,n)},Fc=function(t,e,n){const s=n instanceof Ce?new SC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(Dp(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>Aa/3&&Bo(e)>Aa)throw new Error(t+"contains a string greater than "+Aa+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!zm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kC(s,o),Fc(t,a,s),xC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},Wm=function(t,e,n,s){if(!(s&&n===void 0)&&!Vm(n))throw new Error(ec(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wm(t,e,n,s)},Bm=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lE(n))throw new Error(ec(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!om(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qt(t,e,n){Hm(t,n),fE(t,s=>Tt(s,e)||Tt(e,s))}function fE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(pE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rs&&Ze("event: "+n.toString()),ti(s)}}}/**
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
 */const mE="repo_interrupt",gE=25;class _E{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mo(),this.transactionQueueTree_=new Lc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yE(t,e,n){if(t.stats_=gc(t.repoInfo_),t.forceRestClient_||Jw())t.server_=new po(t.repoInfo_,(s,i,r,o)=>{nh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new rn(t.repoInfo_,e,(s,i,r,o)=>{nh(t,s,i,r,o)},s=>{sh(t,s)},s=>{wE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nC(t.repoInfo_,()=>new eb(t.stats_,t.server_)),t.infoData_=new YC,t.infoSyncTree_=new eh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=vr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uc(t,"connected",!1),t.serverSyncTree_=new eh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);qt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vE(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $c(t){return Zb({timestamp:vE(t)})}function nh(t,e,n,s,i){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=to(n,c=>Ke(c));o=qb(t.serverSyncTree_,r,l,i)}else{const l=Ke(n);o=Nm(t.serverSyncTree_,r,l,i)}else if(s){const l=to(n,c=>Ke(c));o=Bb(t.serverSyncTree_,r,l)}else{const l=Ke(n);o=vr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=na(t,r)),qt(t.eventQueue_,a,o)}function sh(t,e){Uc(t,"connected",e),e===!1&&EE(t)}function wE(t,e){ht(e,(n,s)=>{Uc(t,n,s)})}function Uc(t,e,n){const s=new Ce("/.info/"+e),i=Ke(n);t.infoData_.updateSnapshot(s,i);const r=vr(t.infoSyncTree_,s,i);qt(t.eventQueue_,s,r)}function jm(t){return t.nextWriteId_++}function CE(t,e,n){const s=Gb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ke(i).withIndex(e._queryParams.getIndex());Kb(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=vr(t.serverSyncTree_,e._path,r);else{const a=tr(t.serverSyncTree_,e);o=Nm(t.serverSyncTree_,e._path,r,a)}return qt(t.eventQueue_,e._path,o),Am(t.serverSyncTree_,e,n,null,!0),r},i=>(ta(t,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function bE(t,e,n,s,i){ta(t,"set",{path:e.toString(),value:n,priority:s});const r=$c(t),o=Ke(n,s),a=xc(t.serverSyncTree_,e),l=Dm(o,a,r),c=jm(t),u=Pm(t.serverSyncTree_,e,l,c,!0);Hm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||ut("set at "+e+" failed: "+h);const w=Zn(t.serverSyncTree_,c,!_);qt(t.eventQueue_,e,w),TE(t,i,h,m)});const d=Qm(t,e);na(t,d),qt(t.eventQueue_,d,[])}function EE(t){ta(t,"onDisconnectEvents");const e=$c(t),n=mo();yl(t.onDisconnect_,ue(),(i,r)=>{const o=nE(i,r,t.serverSyncTree_,e);pm(n,i,o)});let s=[];yl(n,ue(),(i,r)=>{s=s.concat(vr(t.serverSyncTree_,i,r));const o=Qm(t,i);na(t,o)}),t.onDisconnect_=mo(),qt(t.eventQueue_,ue(),s)}function IE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mE)}function ta(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function TE(t,e,n,s){e&&ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function qm(t,e,n){return xc(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function zc(t,e=t.transactionQueueTree_){if(e||sa(t,e),ni(e)){const n=Gm(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SE(t,Cr(e),n)}else $m(e)&&ea(e,n=>{zc(t,n)})}function SE(t,e,n){const s=n.map(c=>c.currentWriteId),i=qm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=rt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ta(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();sa(t,Dc(t.transactionQueueTree_,e)),zc(t,t.transactionQueueTree_),qt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ti(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}na(t,e)}},o)}function na(t,e){const n=Km(t,e),s=Cr(n),i=Gm(t,n);return kE(t,i,s),s}function kE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=rt(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gE)u=!0,d="maxretry",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=qm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Fc("transaction failed: Data returned ",m,l.path);let _=Ke(m);typeof m=="object"&&m!=null&&un(m,".priority")||(_=_.updatePriority(h.getPriority()));const A=l.currentWriteId,x=$c(t),M=Dm(_,h,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=M,l.currentWriteId=jm(t),o.splice(o.indexOf(A),1),i=i.concat(Pm(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,A,!0))}else u=!0,d="nodata",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}sa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ti(s[a]);zc(t,t.transactionQueueTree_)}function Km(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&ni(s)===void 0;)s=Dc(s,n),e=Te(e),n=re(e);return s}function Gm(t,e){const n=[];return Ym(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ym(t,e,n){const s=ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ea(e,i=>{Ym(t,i,n)})}function sa(t,e){const n=ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Fm(e,n.length>0?n:void 0)}ea(e,s=>{sa(t,s)})}function Qm(t,e){const n=Cr(Km(t,e)),s=Dc(t.transactionQueueTree_,e);return iE(s,i=>{Na(t,i)}),Na(t,s),Um(s,i=>{Na(t,i)}),n}function Na(t,e){const n=ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fm(e,void 0):n.length=r+1,qt(t.eventQueue_,Cr(e),i);for(let o=0;o<s.length;o++)ti(s[o])}}/**
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
 */function xE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function RE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const ih=function(t,e){const n=PE(t),s=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ww();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},PE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=xE(t.substring(u,d)));const h=RE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class AE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class NE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ME{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:sm(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Bd(this._queryParams),n=pc(e);return n==="{}"?"default":n}get _queryObject(){return Bd(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof Vc))return!1;const n=this._repo===e._repo,s=om(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TC(this._path)}}class dn extends Vc{constructor(e,n){super(e,n,new Cc,!1)}get parent(){const e=rm(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),s=Il(this.ref,e);return new nr(this._node.getChild(n),s,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new nr(i,Il(this.ref,s),Ne)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wc(t,e){return t=ft(t),t._checkNotDeleted("ref"),e!==void 0?Il(t._root,e):t._root}function Il(t,e){return t=ft(t),re(t._path)===null?uE("child","path",e,!1):Wm("child","path",e,!1),new dn(t._repo,Be(t._path,e))}function OE(t){return Bm("remove",t._path),Jm(t,null)}function Jm(t,e){t=ft(t),Bm("set",t._path),cE("set",e,t._path,!1);const n=new Wo;return bE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function LE(t){t=ft(t);const e=new ME(()=>{}),n=new Bc(e);return CE(t._repo,t,n).then(s=>new nr(s,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new AE("value",this,new nr(e.snapshotNode,new dn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NE(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Lb(dn);zb(dn);/**
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
 */const DE="FIREBASE_DATABASE_EMULATOR_HOST",Tl={};let FE=!1;function $E(t,e,n,s){t.repoInfo_=new Gp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function UE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ih(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[DE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ih(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new As(As.OWNER):new Zw(t.name,t.options,e);dE("Invalid Firebase Database URL",o),se(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const d=VE(a,t,u,new Xw(t.name,n));return new WE(d,t)}function zE(t,e){const n=Tl[e];(!n||n[t.key]!==t)&&ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IE(t),delete n[t.key]}function VE(t,e,n,s){let i=Tl[e.name];i||(i={},Tl[e.name]=i);let r=i[t.toURLString()];return r&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new _E(t,FE,n,s),i[t.toURLString()]=r,r}class WE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ln("Cannot call "+e+" on a deleted database.")}}function BE(t=Qf(),e){const n=sc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ay("database");s&&HE(n,...s)}return n}function HE(t,e,n,s={}){t=ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new As(As.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ly(s.mockUserToken,t.app.options.projectId);r=new As(o)}$E(i,e,n,r)}/**
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
 */function jE(t){Fw(Js),Us(new os("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return UE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Mn(Sd,kd,t),Mn(Sd,kd,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jE();const Hc=BE(Zf),Xm=[];function qE(t){return t instanceof Set?Array.from(t):t}const KE=async t=>(await LE(Wc(Hc,t))).val(),GE=async(t,e)=>{Jm(Wc(Hc,t),e)},YE=async t=>{if(!(!mr.value||!Gi.value))return await OE(Wc(Hc,t))},Ma=async(t,e)=>{$t(t,n=>{mr.value&&Gi.value&&GE(`users/${Go.value.uid}/game-data/tileswap-naenae/${e}/`,qE(n))},{deep:!0}),Xm.push({observable:t,path:e})},QE=new Map([[1,[3]],[2,[7]],[3,[13]],[4,[23]],[5,[45,75,67]],[6,[103,147,155]],[7,[203,211,217,235,367,277,325,313,345]],[8,[435,551,747,453,545,537,703,543]],[9,[1021,1131,1461,1423,1055,1167,1541,1333,1605,1751,1743,1617,1553,1157]],[10,[2011,2415,3771,2157,3515,2773,2033,2443,2461,3023,3543,2745,2431,3177]],[11,[4005,4445,4215,4055,6015,7413,4143,4563,4053,5023,5623,4577,6233,6673]],[12,[10123,15647,16533,16047,11015,14127,17673,13565,15341,15053,15621,15321,11417,13505]],[13,[20033,23261,24623,23517,30741,21643,30171,21277,27777,35051,34723,34047,32535,31425]],[14,[42103,43333,51761,40503,77141,62677,44103,45145,76303,64457,57231,64167,60153,55753]],[15,[100003,102043,110013,102067,104307,100317,177775,103451,110075,102061,114725,103251,100021,100201]],[16,[210013,234313,233303,307107,307527,306357,201735,272201,242413,270155,302157,210205,305667,236107]],[17,[400011,400017,400431,525251,410117,400731,411335,444257,600013,403555,525327,411077,400041,400101]],[18,[1000201,1000247,1002241,1002441,1100045,1000407,1003011,1020121,1101005,1000077,1001361,1001567,1001727,1002777]],[19,[2000047,2000641,2001441,2000107,2000077,2000157,2000175,2000257,2000677,2000737,2001557,2001637,2005775,2006677]],[20,[4000011,4001051,4004515,6000031,4442235]],[21,[10000005,10040205,10020045,10040315,10000635,10103075,10050335,10002135,17000075]],[22,[20000003,20001043,2222223,25200127,20401207,20430607,20070217]],[23,[40000041,40404041,40000063,40010061,50000241,40220151,40006341,40405463,40103271,41224445,4043561]],[24,[100000207,125245661,113763063]],[25,[200000011,200000017,204000051,200010031,200402017,252001251,201014171,204204057,200005535,200014731]],[26,[400000107,430216473,402365755,426225667,510664323,473167545,411335571]],[27,[1000000047,1001007071,1020024171,1102210617,1250025757,1257242631,1020560103,1112225171,1035530241]],[28,[2000000011,2104210431,2000025051,2020006031,2002502115,2001601071]],[29,[4000000005,4004004005,4000010205,4010000045,4400000045,4002200115,4001040115,4004204435,4100060435,4040003075,40040642751]],[30,[10040000007,10104264207,10115131333,11362212703,10343244533]],[31,[20000000011,20000000017,20000020411,21042104211,20010010017,20005000251,20004100071,20202040217,20000200435,20060140231,21042107357]],[32,[40020000007,40460216667,40035532523,42003247143,41760427607]],[33,[100000020001,100020024001,104000420001,100020224401,111100021111,100000031463,104020466001,100502430041,100601431001]],[34,[201000000007,201472024107,377000007527,225213433257,227712240037,251132516577,211636220473,200000140003]],[35,[400000000005]],[36,[0xe8d4a51fa1]],[37,[2000000012005]],[38,[4000000000143]],[39,[0x9184e72a015]],[40,[20000012000005]],[61,[200000000000000000047n]],[89,[400000000000000000000000000151n]]]),JE=t=>{const e=QE.get(t.q);if(!e)throw new Error(`No irreducible polynomial for field of order ${t.p} ** ${t.q}`);const n=[];for(const s of e){const r=parseInt(s.toString(),8).toString(2).trim().split("").map(o=>parseInt(o));n.push(t.el(r))}return n};class tt{constructor(e){if(typeof e!="number")throw new Error(`Order ${e} is not a number`);if(e<=0)throw new Error(`Order ${e} is not positive`);if(e%1!==0)throw new Error(`Order ${e} is not an integer`);const n=tt.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error(`Order ${e} is not a prime power`);this.order=e,this.p=n[0],this.q=n.length,this.isPrimeField=this.q===1}el(e){if(e instanceof kt){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e=="number")return this.isPrimeField?new XE(e,this):Ms.fromInteger(e,this);if(e instanceof Array)return new Ms(e,this);throw new Error("Cannot create element from non-number")}irreduciblePolynomial(){return JE(this)[0]}matrix(e){return Hs.from2DArray(e,this)}identity(e){return Hs.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...tt.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new tt(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}class kt{constructor(e,n){if(this.constructor==kt)throw new Error("FiniteFieldElement is an abstract class and cannot be instantiated. Use FiniteFieldValue or FiniteFieldPolynomial instead.");if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");this.value=e,this.field=n}inverse(){throw new Error("Method inverse not implemented in "+this.constructor.name)}opposite(){throw new Error("Method opposite not implemented in "+this.constructor.name)}add(e){throw new Error("Method add not implemented in "+this.constructor.name)}subtract(e){throw new Error("Method subtract not implemented in "+this.constructor.name)}multiply(e){throw new Error("Method multiply not implemented in "+this.constructor.name)}divide(e){throw new Error("Method divide not implemented in "+this.constructor.name)}pow(e){throw new Error("Method pow not implemented in "+this.constructor.name)}sqrt(){throw new Error("Method sqrt not implemented in "+this.constructor.name)}abs(){throw new Error("Method abs not implemented in "+this.constructor.name)}equals(e){throw new Error("Method equals not implemented in "+this.constructor.name)}copy(){throw new Error("Method copy not implemented in "+this.constructor.name)}}var Sn,Cs;class XE extends kt{constructor(n,s){if(typeof n!="number")throw new Error("Value must be a number");if(!(s instanceof tt))throw new Error("Field must be an instance of FiniteField");if(!tt.isPrime(s.order))throw new Error("Field must be a prime field");super(tt.mod(n,s.order),s);Tr(this,Sn)}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(n){return Ot(this,Sn,Cs).call(this,n,(s,i)=>s.value+i.value)}subtract(n){return Ot(this,Sn,Cs).call(this,n,(s,i)=>s.value-i.value)}multiply(n){return Ot(this,Sn,Cs).call(this,n,(s,i)=>s.value*i.value)}divide(n){return Ot(this,Sn,Cs).call(this,n,(s,i)=>s.multiply(i.inverse()).value)}pow(n){if(n===0)return this.field.el(1);if(n===1)return this.copy();if(n<0)return this.inverse().pow(-n);let s=this;for(let i=1;i<n;i++)s=s.multiply(this);return s}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let n=1;for(;n<this.field.order;){if(n*n%this.field.order===this.value)return this.field.el(n);n++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(n){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===n.value}return this.value===n}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}}Sn=new WeakSet,Cs=function(n,s){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(s(this,n))}return Ot(this,Sn,Cs).call(this,this.field.el(n),s)};class Ms extends kt{constructor(e,n){if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");tt.isPrime(n.order)&&(console.warn("[warn] Creating polynomial in prime field. Use FiniteFieldValue instead"),console.trace()),super(Ms.coefficientsToInteger(e,n),n),this.field=n,this.primeField=tt.fromOrder(n.p),this.poly=new xi(e,this.primeField)}add(e){if(e instanceof Ms){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new Ms(i,n)}static coefficientsToInteger(e,n){return n=tt.fromOrder(n.p),parseInt(e.map(s=>n.el(s)).map(s=>s.value).join(""),n.p)}toString(){return(this.poly.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.poly.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}class xi{constructor(e,n){if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");this.field=n,this.primeField=tt.fromOrder(n.p),this.coefficients=e.map(s=>this.field.el(s))}add(e){if(e instanceof xi){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof xi){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=[];for(let s=0;s<this.coefficients.length+e.coefficients.length-1;s++)n.push(this.field.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return this.field.el(n)}if(e instanceof Array)return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}equals(e){if(e instanceof xi){if(e.field.order!==this.field.order)throw new Error("Cannot compare polynomials in different fields");return this.coefficients.every((n,s)=>n.equals(e.coefficients[s]))}if(e instanceof Array)return this.equals(this.field.el(e));throw new Error("Cannot compare polynomial to non-polynomial")}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var es,ts,gi;const le=class le{constructor(e,n){Tr(this,ts);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof kt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new le(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof kt)return e=this.field.el(e),le.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof le){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return le.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof kt||typeof e=="number")return e=this.field.el(e),new le(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof le){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new le(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return le.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(ii(le,es).has(e))return ii(le,es).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Ot(this,ts,gi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return ii(le,es).set(e,s),s}const n=this.PLUDeterminant();return ii(le,es).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=le.identity(this.width,this.field),s=le.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Ot(r=s,ts,gi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return le.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Ot(this,ts,gi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new le(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return le.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return le.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=le.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Ot(this,ts,gi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:le.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof le?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return le.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new le(s,n)}static fromValue(e,n,s,i){if(e instanceof kt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new le(r,i)}static zeros(e,n,s){return le.fromValue(0,e,n,s)}static ones(e,n,s){return le.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return le.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return le.from2DArray(s,n)}static from2DArray(e,n){return new le(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};es=new WeakMap,ts=new WeakSet,gi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new le(s,this.field)},Tr(le,es,new Map);let Hs=le;const Eo=Ae(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>Eo.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");Eo.value=t}});const kn=Me(()=>Eo.value),rh=t=>{Eo.value=t},Oa=new Map,La=new Map,Zm=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},Da=(t,e)=>{for(let n=0;n<e;n++)t=Zm(t);return t};class ZE{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const e0=t=>{const e=[t,Zm(t),Da(t,2),Da(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=eI(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new ZE(Da(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function eI(t){const e=tt.fromOrder(Q.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Q.value])),r=`${s}x${n},${He.getExcludeFromMatrix(t)},${sr.value},${Q.value}}`;let o=[],a=0;const l=nI(s,n,t);let c;if(La.has(r)?c=La.get(r):(c=l.determinant(),La.set(r,c)),c.equals(0)){const d=Hs.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=Hs.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let w=0;w<d.width-1;w++)if(d.matrix[m][w].equals(1)){o[w]=_.value;break}}}}else{let u;Oa.has(r)?u=Oa.get(r):(u=l.inverse(),Oa.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const tI=(t,e,n)=>{for(const s of sr.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Q.value-1)}},nI=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));tI(o,a,l),s.push(l)}return tt.fromOrder(Q.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()},_t={backgroundColor:{name:"Background Color",options:["#bbb2ea","#adad85","#666","#FF9D81","#83769C","#7be3ad"],get value(){const{settings:t}=X();return this.options[t.backgroundColor]},onChange(t){document.documentElement.style.setProperty("--root-bg-color",this.options[t])},unlocked:2},tilesColor:{name:"Tiles Color",options:[[{r:0,g:0,b:0},{r:255,g:255,b:255}],[{r:50,g:50,b:90},{r:200,g:100,b:100}],[{r:8,g:33,b:59},{r:88,g:131,b:173}]],get value(){const{settings:t}=X();return this.options[t.tilesColor]},onChange(t){},unlocked:2},colorBlind:{name:"Color Blind",options:["Off","On"],get value(){const{settings:t}=X();return this.options[t.colorBlind]},onChange(t){},unlocked:2},tilesShape:{name:"Tiles Shape",options:[[30],[30,60],[0],[100]],get value(){const{settings:t}=X();return this.options[t.tilesShape]},onChange(t){let e="";for(let n=0;n<this.options[t].length;n++)e+=`${this.options[t][n]}px `;document.documentElement.style.setProperty("--root-tile-border-radius",e)},unlocked:2}},sI=Object.fromEntries(Object.keys(_t).map(t=>[t,_t[t].selected??0])),sr=Ae([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>sr.value,set:t=>{sr.value=t}});const Q=Ae(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Q.value,set:t=>{if(typeof t!="number")throw new Error("Modulo must be a number");if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t}});const jc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t},Ri=Me(()=>{const t=_t.tilesColor.value[0],e=_t.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*(i/(Q.value-1))+t.r},${n.g*(i/(Q.value-1))+t.g},${n.b*(i/(Q.value-1))+t.b})`)}),Fa=Me(()=>{const t=_t.tilesColor.value[0],e=_t.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.4*(i/(Q.value-1))+t.r+36},${n.g*.4*(i/(Q.value-1))+t.g+36},${n.b*.4*(i/(Q.value-1))+t.b+36})`)}),$a=Me(()=>{const t=_t.tilesColor.value[0],e=_t.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.75*(i/(Q.value-1))+t.r+50},${n.g*.75*(i/(Q.value-1))+t.g+50},${n.b*.75*(i/(Q.value-1))+t.b+50})`)}),Zt=class Zt{static get FILTERED_LAYOUTS(){return X(),this.LAYOUTS}constructor({width:e,height:n,exclude:s,unlockCategory:i,id:r}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(o=>Q.value-1)),this.id=r;for(const o of this.exclude)this.matrix[Math.floor(o/e)][o%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of sr.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=Zt.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=Zt.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Q.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Q.value-1:this.matrix[e][n]===Q.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i,id:r}=this,o=new Zt({width:e,height:n,exclude:s,unlockCategory:i,id:r});return o.matrix=this.matrix.map(a=>a.slice()),o}generatePosition(e){const n=this.copy();n.setAllTiles(Q.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}if(n.matrix.every(s=>s.every(i=>i===Q.value||i===-1)))return this.generatePosition(e);if(n.nTiles()<50){const{solutions:s,shortest:i,zerows:r}=e0(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Q.value*(e/3)+2);if(o.moves<a)return this.generatePosition(e)}return n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static getRandomLayout(){const e=Zt.FILTERED_LAYOUTS;return e[Math.floor(Math.random()*e.length)]}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new Zt({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Q.value+Q.value)%Q.value}};Wn(Zt,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1,id:0},{dimensions:"4x4",unlockCategory:3,id:1},{dimensions:"5x5",unlockCategory:5,id:2},{dimensions:"6x6",unlockCategory:9,id:3},{dimensions:"7x7",unlockCategory:11,id:4},{dimensions:"8x8",unlockCategory:15,id:5},{dimensions:"9x9",unlockCategory:15,id:6},{dimensions:"10x10",unlockCategory:15,id:7},{dimensions:"11x11",unlockCategory:15,id:8},{dimensions:"12x12",unlockCategory:15,id:9},{dimensions:"3x4",unlockCategory:3,id:10},{dimensions:"3x5",unlockCategory:3,id:11},{dimensions:"3x6",unlockCategory:9,id:12},{dimensions:"3x7",unlockCategory:9,id:13},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:1,id:14},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:7,id:15},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:11,id:16},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:9,id:17},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:11,id:18},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:16,id:19},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:1,id:20},{dimensions:"3x3",exclude:[4],unlockCategory:1,id:21},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:1,id:22},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:-2,id:32},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:-2,id:40},{dimensions:"3x3",exclude:[4,7],unlockCategory:1,id:23},{dimensions:"4x4",exclude:[5,10],unlockCategory:3,id:24},{dimensions:"4x4",exclude:[3,12],unlockCategory:3,id:25},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:4,id:26},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:3,id:27},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:3,id:28},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:4,id:29},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:4,id:30},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:-1,id:31},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:4,id:33},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:-1,id:34},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:-1,id:35},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:6,id:36},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:5,id:37},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:5,id:38},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:-1,id:39},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:-1,id:41},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:-1,id:42},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:-1,id:43},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:7,id:44},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:2,id:45},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:1,id:46},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:7,id:47},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:6,id:48},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:6,id:49},{dimensions:"5x5",exclude:[12],unlockCategory:-1,id:50},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:-1,id:51},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:7,id:52},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:5,id:53},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:-1,id:54},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:-1,id:55},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:5,id:56},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:-1,id:57},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:5,id:58},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:-2,id:59},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:8,id:60},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:-2,id:61},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:4,id:62},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:13,id:63},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:-2,id:64},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:7,id:65},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:-1,id:66},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:-1,id:67},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:11,id:68},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:6,id:69},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:6,id:70},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:8,id:71},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:8,id:72},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:-2,id:73},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:9,id:74},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:11,id:75},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:10,id:76},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:-1,id:77},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:-1,id:78},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:10,id:79},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:10,id:80},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:12,id:81},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:13,id:82},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:-2,id:83},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:6,id:84},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:4,id:85},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:3,id:86},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:7,id:87},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:12,id:88},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:12,id:89},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:12,id:90},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:16,id:91},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:16,id:92},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:8,id:93},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:-2,id:94},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:-2,id:95},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:-1,id:96},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:7,id:97},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:-1,id:98},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:8,id:99},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:4,id:100},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:7,id:101},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:6,id:102},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:6,id:103},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:9,id:104},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:13,id:105},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:6,id:106},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:14,id:107},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:8,id:108},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:2,id:109},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:-2,id:110},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:-2,id:111},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:9,id:112},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:10,id:113},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:11,id:114},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:10,id:115},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:10,id:116},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:7,id:117},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:-2,id:118},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:2,id:119},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:10,id:120},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:10,id:121},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:-2,id:122},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:-2,id:123},{dimensions:"3x4",exclude:[4,7],unlockCategory:-2,id:124},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:-1,id:125},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:-2,id:126},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:13,id:127},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:4,id:128},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:-2,id:129},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:-2,id:130},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:-2,id:131},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:-1,id:132},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:-1,id:133},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:11,id:134},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:14,id:135},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:16,id:136},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:12,id:137},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:5,id:138},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:-2,id:139},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:10,id:140},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:16,id:141},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:2,id:142},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:-2,id:143},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:-2,id:144},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:2,id:145},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:-2,id:146},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:-2,id:147},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:14,id:148},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:12,id:149},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:12,id:150},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:17,id:151},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:14,id:152},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:-1,id:153},{dimensions:"13x13",unlockCategory:15,id:154},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:8,id:155},{dimensions:"3x5",exclude:[4,7,10],unlockCategory:-3,id:156},{dimensions:"3x5",exclude:[0,2,5,6,8,9,11],unlockCategory:-3,id:157},{dimensions:"3x5",exclude:[3,4,10,11],unlockCategory:-3,id:158},{dimensions:"3x5",exclude:[3,4,6,9,10],unlockCategory:-3,id:159},{dimensions:"3x5",exclude:[1,2,4,9,10,12,13],unlockCategory:-3,id:160},{dimensions:"3x5",exclude:[4,5,9,10],unlockCategory:-3,id:161},{dimensions:"3x5",exclude:[4,5,10],unlockCategory:-3,id:162},{dimensions:"3x5",exclude:[3,4,6,8,10,11,13,14],unlockCategory:-3,id:163},{dimensions:"3x5",exclude:[4,10],unlockCategory:-3,id:164},{dimensions:"3x5",exclude:[4,9,10],unlockCategory:-3,id:165},{dimensions:"3x5",exclude:[3,5,6,8,9,11,14],unlockCategory:-3,id:166},{dimensions:"3x5",exclude:[4,10,11,13,14],unlockCategory:-3,id:167},{dimensions:"3x5",exclude:[0,2,4,7,11,12,13],unlockCategory:2,id:168},{dimensions:"3x5",exclude:[2,4,8,10,13],unlockCategory:-3,id:169},{dimensions:"3x5",exclude:[3,5,6,8,9,11,12,14],unlockCategory:-3,id:170},{dimensions:"3x5",exclude:[1,4,7,10,12],unlockCategory:-3,id:171},{dimensions:"3x5",exclude:[1,4,7,12,14],unlockCategory:-3,id:172},{dimensions:"5x5",exclude:[1,3,6,8,11,13,16,18,20,22,24],unlockCategory:-3,id:173},{dimensions:"3x5",exclude:[1,4,6,8,10,13],unlockCategory:-3,id:174},{dimensions:"3x5",exclude:[1,4,9,10],unlockCategory:-3,id:175},{dimensions:"3x5",exclude:[3,4,6,8,10,11],unlockCategory:-3,id:176}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i,id:r}=e;return new Zt({width:n,height:s,unlockCategory:i,id:r,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let He=Zt;window.layouts=He.LAYOUTS;const So=class So{static get FILTERED_PUZZLES(){const e=X();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}get completionMoves(){const e=X();for(let n=0;n<e.stats.puzzlesCompleted.length;n++){const s=e.stats.puzzlesCompleted[n];if(s.id===this.id)return s.completionMoves}return-1}set completionMoves(e){const n=X();for(let s=0;s<n.stats.puzzlesCompleted.length;s++){const i=n.stats.puzzlesCompleted[s];if(i.id===this.id){i.completionMoves=Math.min(e,i.completionMoves);return}}n.stats.puzzlesCompleted.push({id:this.id,completionMoves:e})}};Wn(So,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[6,9,13,14,17,21,22,24]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[5,9,11,14,20,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[2,4,12,13,18,20,34,35,38,42,44,45,46,48,49,52,53,59,60,63,64,68,70]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((w,A)=>{w===2?(s[_][A]=-1,i[_][A]=-1):w===1&&(s[_][A]=(a??2)-1)}));const l=s[0].length,c=s.length,u=He.getExcludeFromMatrix(s),d=new He({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new He({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new So({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let en=So;const ze=class ze{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patterns:i,nPatterns:r,bigLayoutAdapt:o,timeLimitPer:a,moveLimitPer:l,hasSpecificPatterns:c,modulo:u,randomPatterns:d,name:h}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,c?this.patterns=i:(this.rangeStart=i[0],this.rangeEnd=i[1]),this.nPatterns=r,this.currentPattern=0,this.timeLimitPer=a,this.randomPatterns=d,this.moveLimitPer=l,this.bigLayoutAdapt=o,this.hasSpecificPatterns=c,this.nMoves=0,this.modulo=u??2,this.name=h,this.id=-1,this.generateLayouts()}get maxPercent(){const e=X();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.maxPercent}return 0}get minTime(){const e=X();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minTime}return this.timeLimit}set maxPercent(e){const n=X();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.maxPercent=Math.max(i.maxPercent,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:e,minTime:this.timeLimit,minMoves:this.moveLimit})}set minTime(e){const n=X();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minTime=Math.min(i.minTime,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:e,minMoves:-1})}set minMoves(e){if(this.timeLimit===-1){const n=X();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minMoves=Math.min(i.minMoves,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:-1,minMoves:e})}}get minMoves(){const e=X();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minMoves}return this.timeLimit}generateLayouts(){let e;this.hasSpecificPatterns?e=He.LAYOUTS.filter(r=>this.patterns.includes(r.id)):e=He.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd);const n=[];if(this.randomPatterns)for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);else for(let r=0;r<this.patterns.length;r++){let o=this.patterns[r];for(let a=0;a<He.LAYOUTS.length;a++)o===He.LAYOUTS[a].id&&n.push(He.LAYOUTS[a])}const s=n.reduce((r,o)=>r+(o.nTiles()>=ze.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=ze.THRESHOLD?i*2:i);this.randomPatterns&&n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=X();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};Wn(ze,"CHALLENGES",[{name:"Think Fast",id:0,challenges:[new ze({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[0],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Expert"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:45,patterns:[0],nPatterns:15,bigLayoutAdapt:!1,moveLimitPer:5,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Hard"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:33,patterns:[0],nPatterns:11,bigLayoutAdapt:!1,moveLimitPer:7,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Medium"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:21,patterns:[0],nPatterns:7,bigLayoutAdapt:!1,moveLimitPer:7,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Easy"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[2],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Think a bit less fast but still fast enough to be fast enough, you know?"})]},{name:"Think Slow",id:1,challenges:[new ze({timeLimit:60,moveLimit:-1,totalClicks:17,patterns:[1,1],nPatterns:5,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Easy"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:30,patterns:[1,1],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Medium"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:55,patterns:[1,1],nPatterns:14,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Hard"}),new ze({timeLimit:60,moveLimit:-1,totalClicks:92,patterns:[1,1],nPatterns:22,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Expert"})]},new ze({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[11],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"OG"}),new ze({timeLimit:-1,moveLimit:45,totalClicks:35,patterns:[156,157,158,159,160,161,162,163,164,165],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:10,hasSpecificPatterns:!0,randomPatterns:!1,name:"Count"}),new ze({timeLimit:-1,moveLimit:-1,totalClicks:78,patterns:[119,109,110,111,142,143,144,145,131,166,146,130,132,133,156,167,168,169,161,170,171,172,173,174,175,176],nPatterns:26,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:10,hasSpecificPatterns:!0,randomPatterns:!1,name:"Read"})].map((e,n)=>e instanceof ze?(e.id=n*100,e):(e.challenges=e.challenges.map((s,i)=>(s.id=n*100+i,s)),e))),Wn(ze,"THRESHOLD",60);let hs=ze;const oh=t=>`${t}`,Io={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:oh},tilesSwapped:{name:"Tiles Swapped",display:oh},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${en.PUZZLES.length}`},challengesCompleted:{initialValue:[],name:"Challenges Completed",display:t=>`${t.length} / ${hs.CHALLENGES.length}`}},iI=Object.fromEntries(Object.keys(Io).map(t=>[t,Io[t].initialValue??0])),X=Xg("store",()=>{const t=Ae({}),e=Ae({}),n=Ae({}),s=Ae(5),i=Ae(17),r=Ae(51),o=Ae([0,1,2,3,100,101,102,103,200,300,400]),a=Ae([0,1,2]),l=Ae(2),c=Ae(!1);function u(x,M){a.value.splice(x,1),a.value.push(M)}const d=Ae({...sI});$t(d,x=>{for(const M of Object.keys(d.value))_t[M].onChange(d.value[M])},{deep:!0});const h=Ae({...iI});setInterval(()=>{h.value.timePlayed+=10},1e4);function m(x){t.value=x}function _(x){e.value=x}function w(x){n.value=x}function A(x){l.value=x}return Ma(s,"difficulty"),Ma(h,"stats"),Ma(d,"settings"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,isRandomFreeplay:c,difficulty:s,setLayout:m,setPuzzle:_,setChallenge:w,unlockedChallenges:o,stats:h,currentTasks:a,maxTask:l,setTask:u,setMaxTask:A,unlockedCategoriesFP:i,unlockedCategoriesPZ:r,settings:d}}),be=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},rI={components:{RouterView:Df},setup(){X()}};function oI(t,e,n,s,i,r){const o=A1("router-view");return I(),Qe(o,null,{default:Le(({Component:a})=>[N(jt,{name:"fade",mode:"out-in"},{default:Le(()=>[(I(),Qe(N1(a)))]),_:2},1024)]),_:1})}const aI=be(rI,[["render",oI]]);const lI={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},cI=["src"];function uI(t,e,n,s,i,r){return I(),O("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[S("span",null,pe(n.name),1),S("img",{src:n.image},null,8,cI)])}const Ua=be(lI,[["render",uI],["__scopeId","data-v-253ecde8"]]),dI="/tileswap-naenae/images/freeplay-transparent.png",hI="/tileswap-naenae/images/puzzles-transparent.png",fI="/tileswap-naenae/images/svg/challenges.svg",pI="/tileswap-naenae/images/svg/stats.svg",mI="/tileswap-naenae/images/svg/settings.svg",gI="/tileswap-naenae/images/svg/tasks.svg",_I="/tileswap-naenae/images/svg/tutorial.svg";const qc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},ah=()=>{ar(t=>({"40b353db":t.backgroundColor,"447bfbe9":t.color}))},lh=qc.setup;qc.setup=lh?(t,e)=>(ah(),lh(t,e)):ah;function yI(t,e,n,s,i,r){return I(),O("button",null,pe(n.text),1)}const Ue=be(qc,[["render",yI],["__scopeId","data-v-e0db62cb"]]);const vI={props:["icon","to"],methods:{handleClick(){this.to&&this.$router.push(this.to)}}},wI=["src"];function CI(t,e,n,s,i,r){return I(),O("main",{class:"container",onClick:e[0]||(e[0]=(...o)=>r.handleClick&&r.handleClick(...o))},[S("div",null,[S("img",{src:n.icon},null,8,wI)])])}const _i=be(vI,[["render",CI],["__scopeId","data-v-a9a49b07"]]),bI={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},js=Object.assign(bI,{__name:"LinkButton",setup(t){return(e,n)=>(I(),Qe(Ue,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const EI={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},II={class:"modal"};function TI(t,e,n,s,i,r){return I(),O("div",null,[N(jt,{name:"fade"},{default:Le(()=>[Gr(S("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Za,n.modelValue]])]),_:1}),N(jt,{name:"zoom"},{default:Le(()=>[Gr(S("div",II,[M1(t.$slots,"default",{},void 0,!0)],512),[[Za,n.modelValue]])]),_:3})])}const Wt=be(EI,[["render",TI],["__scopeId","data-v-b228608d"]]);const SI={computed:{list(){const{stats:t}=X();return Object.keys(Io).map(e=>{const n=Io[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await YE(`users/${Go.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},kI=Object.assign(SI,{__name:"Stats",setup(t){return(e,n)=>(I(),O(_e,null,[S("ul",null,[(I(!0),O(_e,null,gt(e.list,(s,i)=>(I(),O("li",{key:i},pe(s),1))),128))]),ne(mr)?(I(),Qe(Ue,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):ks("",!0)],64))}}),xI=be(kI,[["__scopeId","data-v-37e528a9"]]),br="/tileswap-naenae/images/svg/lock.svg";const RI=["data-value","data-locked","onClick"],PI=["src"],AI={methods:{changeSetting(t,e){if(e>_t[t].unlocked)return;const n=X();n.settings[t]=e},formatRgb(t){return`rgb(${t.r},${t.g},${t.b})`},formatBR(t,e){let n="";for(let s=0;s<t.length;s++)n+=`${t[s]*e}px `;return n}},computed:{settingsList(){const{settings:t}=X();return Object.fromEntries(Object.entries(_t).map(([n,s])=>[n,{...s,selected:t[n]}]))}}},NI=Object.assign(AI,{__name:"Settings",setup(t){return(e,n)=>(I(),O("ul",null,[(I(!0),O(_e,null,gt(e.settingsList,(s,i)=>(I(),O("li",{key:i},[or(pe(s.name)+" : ",1),(I(!0),O(_e,null,gt(s.options,(r,o)=>(I(),O("div",{style:Ht(`${r instanceof Array?r[0]instanceof Object?r.map((a,l)=>`--value-${l+1}: `+e.formatRgb(a)+";").join(" "):`--value: ${e.formatBR(r,.4)};`:`--value: ${r};`} 
        --selected: ${o===s.selected?"2px":"0px"}
        `),"data-value":r,"data-locked":o>s.unlocked,class:Je(i),key:r+" "+o,onClick:a=>e.changeSetting(i,o)},[o>s.unlocked?(I(),O("img",{key:0,src:ne(br)},null,8,PI)):ks("",!0)],14,RI))),128))]))),128))]))}}),MI=be(NI,[["__scopeId","data-v-c6adaaf3"]]);const Kc={props:["value","max","text","barColor"],computed:{progress(){return this.value/this.max*100+"%"},barColorOrDefault(){return this.barColor??"var(--bg-color)"}}},ch=()=>{ar(t=>({"2ceabb6e":t.progress,"1fcbc512":t.barColorOrDefault}))},uh=Kc.setup;Kc.setup=uh?(t,e)=>(ch(),uh(t,e)):ch;const OI=t=>(Kt("data-v-27eeb14f"),t=t(),Gt(),t),LI={class:"container"},DI=OI(()=>S("div",{class:"progress"},null,-1)),FI={class:"text"};function $I(t,e,n,s,i,r){return I(),O("div",LI,[DI,S("div",FI,pe(n.text),1)])}const t0=be(Kc,[["render",$I],["__scopeId","data-v-27eeb14f"]]),UI={FREEPLAY:"freeplay layout",PUZZLE:"puzzle",CHALLENGE:"challenge"},ke=class ke{constructor({timesRequired:e,targetId:n,type:s,difficulty:i}){this.timesRequired=e,this.targetIds=n,this.type=s,this.targetsDone=[],this.id=-1,this.difficulty=i??-1}get completed(){return this.targetsDone.length>=this.timesRequired*this.targetIds.length}get progress(){return{text:`${this.targetsDone.length}/${this.timesRequired*this.targetIds.length}`,value:this.targetsDone.length/(this.timesRequired*this.targetIds.length)}}get text(){return`Complete the ${this.targetIds.length>1?this.targetIds.length:""} 
            highlighted ${UI[this.type]}
            ${this.targetIds.length>1?"s":""} 
            ${this.timesRequired} time${this.timesRequired>1?"s":""} 
            ${this.timesRequired>1&&this.targetIds.length>1?"each":""} 
            ${this.difficulty!=-1?this.difficultyText():""}`}claim(){const{currentTasks:e,setTask:n,maxTask:s,setMaxTask:i}=X(),r=e.indexOf(this.id);i(s+1);const o=s<ke.TASKS.length-1?s+1:-1;n(r,o)}difficultyText(){if(this.type!==ke.TASK_TYPES.FREEPLAY)return`in less than ${this.difficulty} ${this.type===ke.TASK_TYPES.PUZZLE?"moves":"seconds"}`;const e=He.LAYOUTS.filter(r=>r.id===this.targetIds[0])[0],n=["very easy","easy","normal","hard","very hard"],s=e.width*e.height-e.exclude.length;return`in ${n[Math.floor((this.difficulty-1)/(s/n.length))]} mode`}static isTaskTarget(e,n){const{currentTasks:s}=X();return s.filter(i=>i!==-1).filter(i=>ke.TASKS[i].type===n).some(i=>{const r=ke.TASKS[i];return r.targetIds.includes(e)?r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired:!1})}static advanceTasks(e,n,s){const{currentTasks:i}=X();i.filter(r=>r!==-1).filter(r=>ke.TASKS[r].type===n).filter(r=>ke.TASKS[r].targetIds.includes(e)).filter(r=>(n===ke.TASK_TYPES.FREEPLAY?ke.TASKS[r].difficulty<=s:ke.TASKS[r].difficulty>=s)||ke.TASKS[r].difficulty===-1).filter(r=>{const o=ke.TASKS[r];return o.targetsDone.reduce((a,l)=>a+(l===e?1:0),0)<o.timesRequired}).forEach(r=>{ke.TASKS[r].targetsDone.push(e)})}static generateTask(e,n){let s=[];if(n===ke.TASK_TYPES.PUZZLE){const i=Math.floor(Math.min(e*en.PUZZLES.length/100,en.PUZZLES.length*.9)),r=Math.floor(en.PUZZLES.length/10);s.push(Math.min(Math.floor(Math.random()*r+i),en.PUZZLES.length-1));const o=en.PUZZLES.filter(l=>l.id===s[0])[0],a=e<=30?-1:e<=60?o.solution.length*1.2:o.solution.length;return new ke({timesRequired:1,targetId:s,type:n,difficulty:Math.ceil(a)})}}};Wn(ke,"TASK_TYPES",{FREEPLAY:"FREEPLAY",PUZZLE:"PUZZLE",CHALLENGE:"CHALLENGE"}),Wn(ke,"TASKS",[new ke({timesRequired:2,targetId:[1],type:ke.TASK_TYPES.FREEPLAY,difficulty:16}),ke.generateTask(Math.random()*99+1,ke.TASK_TYPES.PUZZLE),new ke({timesRequired:1,targetId:[1],type:ke.TASK_TYPES.CHALLENGE,difficulty:2})].map((e,n)=>(e.id=n,e)));let ot=ke;const zI={class:"container"},VI=["onClick"],WI={methods:{claimTask(t){t.completed&&t.claim()}},computed:{tasks(){const{currentTasks:t}=X();return t.filter(e=>e!==-1).map(e=>ot.TASKS[e])}}},BI=Object.assign(WI,{__name:"TaskContainer",setup(t){return(e,n)=>(I(),O("div",zI,[N(Og,{name:"slide"},{default:Le(()=>[(I(!0),O(_e,null,gt(e.tasks,s=>(I(),O("div",{onClick:i=>e.claimTask(s),class:Je(["task",{"completed-task":s.completed}]),key:s.id},[S("p",null,pe(s.text),1),N(t0,{barColor:s.completed?"var(--hl-color)":null,value:s.progress.value,text:s.progress.text,max:"1"},null,8,["barColor","value","text"])],10,VI))),128))]),_:1})]))}}),HI=be(BI,[["__scopeId","data-v-d219c454"]]);const jI={},n0=t=>(Kt("data-v-8367d9c9"),t=t(),Gt(),t),qI=n0(()=>S("h1",null,[or("tile"),S("span",null,"swap")],-1)),KI=n0(()=>S("p",null," loading... ",-1)),GI=[qI,KI];function YI(t,e){return I(),O("main",null,GI)}const QI=be(jI,[["render",YI],["__scopeId","data-v-8367d9c9"]]),Gc=()=>{let t=Ae(window.innerWidth),e=Ae(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Fi(()=>window.addEventListener("resize",n)),Fi(()=>window.addEventListener("resize",s)),$i(()=>window.removeEventListener("resize",n)),$i(()=>window.removeEventListener("resize",s));const i=Me(()=>t.value),r=Me(()=>e.value);return{width:i,height:r}};const ia=t=>(Kt("data-v-6269b9e9"),t=t(),Gt(),t),JI={class:"container"},XI=ia(()=>S("h1",{class:"main-title"},[or("Tile"),S("span",null,"Swap")],-1)),ZI={class:"buttons"},eT=ia(()=>S("h1",null,"Stats",-1)),tT=ia(()=>S("h1",null,"Settings",-1)),nT=ia(()=>S("h1",null,"Tasks",-1)),sT={data(){const{width:t}=Gc();return{windowWidth:t,user:Go,isSignedIn:mr,showStats:!1,showTasks:!1,showSettings:!1,showSplash:!Gi.value}},methods:{signOut:fl,signInForm(){Dw(prompt("Email"),prompt("Password"))}},mounted(){$t(Gi,t=>{this.showSplash=!1})}},iT=Object.assign(sT,{__name:"HomeView",setup(t){return(e,n)=>(I(),O("div",JI,[XI,S("main",ZI,[N(Ua,{name:"Freeplay",image:ne(dI),path:"/freeplaySelection"},null,8,["image"]),N(Ua,{name:"Puzzles",image:ne(hI),path:"/puzzleSelection"},null,8,["image"]),N(Ua,{name:"Challenges",image:ne(fI),path:"/challengeSelection"},null,8,["image"])]),S("div",{class:Je({bottom:e.windowWidth>600,center:e.windowWidth>600,"text-center":e.windowWidth<=600}),style:{width:"max-content"}},[N(_i,{icon:ne(gI),onClick:n[0]||(n[0]=s=>e.showTasks=!0)},null,8,["icon"]),N(_i,{icon:ne(pI),onClick:n[1]||(n[1]=s=>e.showStats=!0)},null,8,["icon"]),N(_i,{icon:ne(mI),onClick:n[2]||(n[2]=s=>e.showSettings=!0)},null,8,["icon"]),N(_i,{icon:ne(_I),to:"/tutorial"},null,8,["icon"])],2),S("div",{class:Je({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[ne(mr)?(I(),O("p",{key:0,onClick:n[3]||(n[3]=(...s)=>ne(fl)&&ne(fl)(...s))}," You are logged in as "+pe(ne(Go).displayName),1)):(I(),O("p",{key:1,onClick:n[4]||(n[4]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),N(Wt,{modelValue:e.showStats,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showStats=s)},{default:Le(()=>[eT,N(xI),N(Ue,{black:"",text:"close",onClick:n[5]||(n[5]=s=>e.showStats=!1)})]),_:1},8,["modelValue"]),N(Wt,{modelValue:e.showSettings,"onUpdate:modelValue":n[7]||(n[7]=s=>e.showSettings=s)},{default:Le(()=>[tT,N(MI)]),_:1},8,["modelValue"]),N(Wt,{modelValue:e.showTasks,"onUpdate:modelValue":n[9]||(n[9]=s=>e.showTasks=s)},{default:Le(()=>[nT,N(HI),N(Ue,{black:"",text:"close",onClick:n[8]||(n[8]=s=>e.showTasks=!1)})]),_:1},8,["modelValue"]),N(jt,{name:"fade"},{default:Le(()=>[e.showSplash?(I(),Qe(QI,{key:0})):ks("",!0)]),_:1})]))}}),rT=be(iT,[["__scopeId","data-v-6269b9e9"]]);const oT=["data-level","title"],aT={key:0},lT={key:1},cT=["src"],uT={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return ot.isTaskTarget(this.layout.id,ot.TASK_TYPES.FREEPLAY)},unlocked(){return X().unlockedCategoriesFP>=this.layout.unlockCategory}},methods:{openGame(){if(!this.unlocked)return;const t=X();t.isRandomFreeplay=!1,t.setLayout(this.layout),this.$router.push("/freeplayGame")}}},dT=Object.assign(uT,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(I(),O("div",{onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s)),"data-level":t.completion,class:Je(["container",{"is-task-target":e.isTaskTarget,locked:!e.unlocked}]),title:`${t.layout.width}x${t.layout.height} - ${t.layout.exclude.length} (id: ${t.layout.id})`},[e.unlocked?(I(),O("div",aT,[(I(!0),O(_e,null,gt(e.includedTiles,s=>(I(),O("div",{key:"t"+s,class:"tile",style:Ht({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))])):(I(),O("div",lT,[S("img",{src:ne(br)},null,8,cT)]))],10,oT))}}),hT=be(dT,[["__scopeId","data-v-2c9a044d"]]),fT="/tileswap-naenae/images/svg/random.svg";const s0=t=>(Kt("data-v-fef7671e"),t=t(),Gt(),t),pT=s0(()=>S("h1",{class:"title"},"Select a layout",-1)),mT=s0(()=>S("br",null,null,-1)),gT={class:"text-center"},_T={data(){const t=new Set(He.FILTERED_LAYOUTS.map(s=>s.unlockCategory)).size,e=Math.min(...He.FILTERED_LAYOUTS.map(s=>s.unlockCategory));return{layouts:new Array(t).fill(0).map((s,i)=>He.FILTERED_LAYOUTS.filter(r=>r.unlockCategory===i+e))}},methods:{goHome(){this.$router.push("/")},startRandomFreeplay(){const t=X();t.isRandomFreeplay=!0,t.setLayout(He.getRandomLayout()),this.$router.push("/freeplayGame")}}},yT=Object.assign(_T,{__name:"FreeplaySelection",setup(t){return(e,n)=>(I(),O("main",null,[pT,N(js,{class:"top right",text:"back",to:"/"}),mT,S("div",null,[S("div",gT,[N(_i,{icon:ne(fT),onClick:e.startRandomFreeplay},null,8,["icon","onClick"])]),(I(!0),O(_e,null,gt(e.layouts,(s,i)=>(I(),O("div",{class:"layouts",key:i},[(I(!0),O(_e,null,gt(s,(r,o)=>(I(),Qe(hT,{layout:r,completion:r.id,key:o},null,8,["layout","completion"]))),128))]))),128))])]))}}),vT=be(yT,[["__scopeId","data-v-fef7671e"]]);const wT={key:0},CT={key:1},bT=["src"],ET={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return X().stats.puzzlesCompleted.some(({id:e})=>e===this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return ot.isTaskTarget(this.puzzle.id,ot.TASK_TYPES.PUZZLE)},buttonColor(){const t=this.puzzle.solution.length,e=this.puzzle.completionMoves;return this.solved?e<=t?"var(--success-color)":e<=t*1.2?"var(--silver-color)":"var(--bronze-color)":"var(--hl-color)"},unlocked(){return X().unlockedCategoriesPZ>=this.puzzle.id}},methods:{openGame(){if(!this.unlocked)return;const t=X();t.setPuzzle(this.puzzle),t.setLayout(this.layout),jc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},IT=Object.assign(ET,{__name:"PuzzleSelectionButton",setup(t){return ar(e=>({"4590b230":e.buttonColor})),(e,n)=>(I(),O("div",{class:Je(["container",{"is-task-target":e.isTaskTarget,locked:!e.unlocked}]),onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[e.unlocked?(I(),O("div",wT,[(I(!0),O(_e,null,gt(e.includedTiles,s=>(I(),O("div",{key:"t"+s,class:"tile",style:Ht({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))])):(I(),O("div",CT,[S("img",{src:ne(br)},null,8,bT)]))],2))}}),TT=be(IT,[["__scopeId","data-v-a2858c60"]]);const ST=t=>(Kt("data-v-b0e4f03a"),t=t(),Gt(),t),kT=ST(()=>S("h1",{class:"title"},"Select a puzzle",-1)),xT={class:"layouts"},RT={data(){return{puzzles:en.FILTERED_PUZZLES}}},PT=Object.assign(RT,{__name:"PuzzleSelection",setup(t){return(e,n)=>(I(),O("main",null,[kT,N(js,{class:"top right",text:"back",to:"/"}),S("div",xT,[(I(!0),O(_e,null,gt(e.puzzles,(s,i)=>(I(),Qe(TT,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),AT=be(PT,[["__scopeId","data-v-b0e4f03a"]]);function To(t){const e=Math.floor(t/60).toString(),n=(t%60).toString();return`${e.padStart(2,"0")}:${n.padStart(2,"0")}`}const NT=["innerHTML"],MT={key:1,class:"locked"},OT=["src"],LT={props:["challenge","locked"],computed:{formattedChall(){const t=this.challenge.moveLimit.toString(),e=this.challenge.nPatterns.toString(),n=this.challenge.maxPercent!==0?this.challenge.maxPercent!==100?this.challenge.maxPercent+"%":this.challenge.timeLimit!==-1?To(this.challenge.minTime):this.challenge.minMoves+" moves":"";return(this.challenge.name?this.challenge.name:To(challenge.timeLimit)+"<br>"+(t>0?t+" moves<br>":"no move limit<br>")+e+" layouts")+` ${(n&&"<br>(")+n+(n&&")")}`},isTaskTarget(){return ot.isTaskTarget(this.challenge.id,ot.TASK_TYPES.CHALLENGE)}}},DT=Object.assign(LT,{__name:"ChallengeSelectionButton",setup(t){return ar(e=>({"95902b2a":e.color})),(e,n)=>t.locked?(I(),O("div",MT,[S("img",{src:ne(br)},null,8,OT)])):(I(),O("div",{key:0,class:Je({"is-task-target":e.isTaskTarget,"is-completed":t.challenge.maxPercent===100}),innerHTML:e.formattedChall},null,10,NT))}}),FT=be(DT,[["__scopeId","data-v-16456431"]]);const $T={key:1,class:"locked"},UT=["src"],zT={props:["category","locked"]},VT=Object.assign(zT,{__name:"ChallengeCategoryButton",setup(t){return(e,n)=>t.locked?(I(),O("div",$T,[S("img",{src:ne(br)},null,8,UT)])):(I(),Qe(Ue,{key:0,text:t.category.name},null,8,["text"]))}}),WT=be(VT,[["__scopeId","data-v-7b725918"]]);const BT=t=>(Kt("data-v-78c61200"),t=t(),Gt(),t),HT=BT(()=>S("h1",{class:"title"},"Select a challenge",-1)),jT={class:"name"},qT={data(){return{challenges:hs.CHALLENGES,categoryName:""}},methods:{selectChallenge(t){if(!this.isUnlocked(t))return;const e=X();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),jc(t.modulo),this.$router.push("/challengeGame")},selectCategory(t){this.isUnlocked(t)&&(this.challenges=t.challenges,this.categoryName=t.name)},isUnlocked(t){const{unlockedChallenges:e}=X();if(t instanceof hs)return e.includes(t.id);for(let n=0;n<t.challenges.length;n++)if(e.includes(t.challenges[n].id))return!0;return!1}}},KT=Object.assign(qT,{__name:"ChallengeSelection",setup(t){return(e,n)=>(I(),O("div",null,[HT,e.categoryName?(I(),Qe(Ue,{key:1,class:"top right",text:"back",onClick:n[0]||(n[0]=s=>{e.categoryName="",e.challenges=ne(hs).CHALLENGES})})):(I(),Qe(js,{key:0,class:"top right",text:"back",to:"/"})),S("h3",jT,pe(e.categoryName),1),N(jt,{name:"fade",mode:"out-in"},{default:Le(()=>[(I(),O("div",{class:"container",key:e.categoryName},[(I(!0),O(_e,null,gt(e.challenges,s=>(I(),O("div",{key:s.id},[s instanceof ne(hs)?(I(),Qe(FT,{key:0,title:`id: ${s.id}`,onClick:i=>e.selectChallenge(s),challenge:s,locked:!e.isUnlocked(s)},null,8,["title","onClick","challenge","locked"])):(I(),Qe(WT,{key:1,onClick:i=>e.selectCategory(s),category:s,locked:!e.isUnlocked(s)},null,8,["onClick","category","locked"]))]))),128))]))]),_:1})]))}}),GT=be(KT,[["__scopeId","data-v-78c61200"]]),YT={props:["outline","highlight","borderRadius"]},QT={width:"100%",height:"100%",viewBox:"0 0 60.000008 60.000004",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},JT={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function XT(t,e,n,s,i,r){return I(),O("div",null,[(I(),O("svg",QT,[S("g",JT,[S("path",{id:"path2326",d:"M 22.506418,5.7476747 C 19.729543,5.7881441 7.8201531,14.600871 -1.6752686,20.993289 l -1.535864,6.447165 c 0,0 -4.6215975,10.854874 -2.5967021,9.918729 l 3.9366651,26.417533 c 1.18904376,0 8.3926138,-0.366283 9.579337,-0.368733 0.6651477,-0.0012 0.9771618,1.388743 1.1322075,1.97372 2.9859851,8.449902 4.1459521,0.467401 4.1261221,0.653136 l 6.140299,-1.207221 33.462005,-2.187094 c 0,0 1.73733,-2.804207 5.664739,-9.625496 5.167643,-7.441406 7.790982,-10.03738 7.307621,-10.955232 -1.02416,-1.944774 -1.679155,0.3216 -7.156857,4.972479 -6.488887,4.740256 -7.512793,5.637813 -11.025439,8.26294 -1.593571,1.037087 -0.407679,-0.777844 0.01862,-2.037005 0.426271,-1.25916 0.09293,-1.962495 -1.315379,-1.055221 -1.408323,0.907273 -3.891531,3.425633 -7.11556,4.703426 -3.224027,1.277791 -7.189312,1.314854 -7.497243,-0.652777 1.196888,-1.713332 8.339057,-10.890201 7.083592,-12.451866 -2.862861,-0.737663 -11.436846,8.513955 -10.277598,6.539978 1.224604,-2.063728 1.11112,-2.10523 2.78093,-4.204606 2.142792,-2.694037 2.983485,-3.22191 2.571799,-4.080868 -0.58137,-0.315366 -3.209137,1.491343 -5.122946,3.210942 -1.472112,1.322727 -9.704484,8.362099 -9.970116,8.192687 -0.348355,-0.222162 1.595981,-4.360091 3.152714,-5.988948 C 31.514606,37.343421 37.626519,30.328515 36.488021,29.176048 35.001437,27.67122 27.933955,33.117968 28.889153,32.24157 29.970967,31.249006 40.512676,22.019332 40.073472,18.916154 35.831584,18.80262 18.81402,35.967435 14.21696,38.000132 c 0,0 5.034507,-4.316388 5.357861,-8.104019 0.532377,-3.978252 1.294722,-4.905392 3.721358,-7.04782 C 28.2759,18.451786 37.99877,12.306987 35.042383,9.8025547 34.923911,9.7021952 34.769449,9.6480723 34.581499,9.6370967 30.960798,9.4256237 10.440538,26.211123 8.4008563,26.513292 7.9258475,25.453006 8.2597465,21.963129 11.693297,18.587622 c 0,0 12.853712,-11.1171798 11.722015,-12.4819086 -0.207237,-0.2499107 -0.51219,-0.3638785 -0.908887,-0.3580973 z","sodipodi:nodetypes":"sccccccccccsccssscccscsscsscscssccssss",style:Ht([{fill:n.highlight},{"fill-opacity":"1",stroke:"none","stroke-width":"0.244206px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"}])},null,4)])]))])}const dh=be(YT,[["render",XT]]);const ZT={class:"inner-tile"},eS={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:Ri.value[this.tile],backColor:Ri.value[this.mod(this.tile+1)],frontOutline:Fa.value[this.tile],backOutline:Fa.value[this.mod(this.tile+1)],frontHighlight:$a.value[this.tile],backHighlight:$a.value[this.mod(this.tile+1)],gradient:Ri,outlineGradient:Fa,highlightGradient:$a}},computed:{borderRadiusSetting(){return Math.max(..._t.tilesShape.value)}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Q.value+Q.value)%Q.value}},mounted(){const t=X(),e=_t.tilesShape.value,n=()=>{const{width:s,height:i}=t.currentLayout,r=1/(Math.sqrt(s**2+i**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius="";for(let o=0;o<e.length;o++)this.borderRadius+=`${e[o]*r*.2/30}px `;this.tileSize=r+"px"};$t(()=>t.currentLayout,n,{deep:!0,immediate:!1}),n(),window.addEventListener("resize",n),this.$nextTick(n),window.addEventListener("orientationchange",n)}},tS=Object.assign(eS,{__name:"Tile",setup(t){return ar(e=>({"5adfd9c8":e.tileSize,f37c4f1a:t.visible?1:0,"637add52":e.borderRadius,"4305c3dc":t.visible?"pointer":"default","9df0715c":e.frontOutline,"46a37273":e.frontColor,faef903a:e.backColor})),(e,n)=>(I(),O("div",{class:Je(["tile",{"flipped-tile":e.flipped}])},[S("div",ZT,[S("div",{class:"front",style:Ht({background:e.frontColor})},[N(dh,{outline:e.frontOutline,highlight:e.frontHighlight,borderRadius:e.borderRadiusSetting/3},null,8,["outline","highlight","borderRadius"])],4),S("div",{class:"back",style:Ht({background:e.backColor})},[N(dh,{outline:e.backOutline,highlight:e.backHighlight,borderRadius:e.borderRadiusSetting/3},null,8,["outline","highlight","borderRadius"])],4)])],2))}}),nS=be(tS,[["__scopeId","data-v-5f1be2a5"]]);const sS={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){const{currentChallenge:t,settings:e}=X();return{currentChallenge:t,settings:e,gradient:Ri}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=X(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},iS=Object.assign(sS,{__name:"Layout",setup(t){return(e,n)=>(I(),O("div",null,[S("div",null,[(I(!0),O(_e,null,gt(t.modelValue.matrix,(s,i)=>{var r;return I(),O("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+ne(Q)},[(I(!0),O(_e,null,gt(s,(o,a)=>{var l;return I(),Qe(nS,{class:Je(["tile",{solution:ne(kn)&&t.solution&&t.solution[i][a]>=1,"color-blind":e.settings.colorBlind===1}]),small:t.small,tile:o,"data-tile":`${o+1}`,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern)+t.modelValue.id,style:Ht({outline:t.target?`5px solid ${ne(Ri)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&ne(Q)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a)},null,8,["small","tile","data-tile","visible","position","class","style","data-moves","onClick"])}),128))])}),128))])]))}}),ra=be(iS,[["__scopeId","data-v-b102a0d5"]]);const rS={props:["modelValue"],emits:["update:modelValue"],data(){const t=X();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Q.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},oS={class:"diff"},aS=["value","max"];function lS(t,e,n,s,i,r){return I(),O("div",oS,[S("h2",null,"difficulty - "+pe(r.difficultyText),1),S("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,aS)])}const cS=be(rS,[["render",lS],["__scopeId","data-v-38400e03"]]);const uS={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},dS={class:"diff"},hS=["value"];function fS(t,e,n,s,i,r){return I(),O("div",dS,[S("h2",null,"states - "+pe(r.moduloText),1),S("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,hS)])}const pS=be(uS,[["render",fS],["__scopeId","data-v-5833a5d1"]]);const Er=t=>(Kt("data-v-72d49e50"),t=t(),Gt(),t),mS={class:"top-menu"},gS=Er(()=>S("span",null," DEV ",-1)),_S=[gS],yS={class:"top right"},vS=Er(()=>S("h1",null,"DevMode",-1)),wS={class:"input"},CS=Er(()=>S("hr",null,null,-1)),bS={key:0},ES=Er(()=>S("p",null,"Only one solution found:",-1)),IS={key:1},TS=Er(()=>S("p",null,"Multiple solutions found:",-1)),SS=["onClick"],kS={data(){const t=X(),e=t.currentLayout,{width:n}=Gc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Q.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty,this.randomize()},internalModulo(t){jc(t),this.randomize()},showModal(){this.showModal||(this.store.isRandomFreeplay&&(this.store.setLayout(He.getRandomLayout()),this.layout=this.store.currentLayout),this.randomize())}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,kn.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Q.value+Q.value)%Q.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0,ot.advanceTasks(this.layout.id,ot.TASK_TYPES.FREEPLAY,this.store.difficulty))},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Q.value-1))),this.$nextTick(()=>{try{kn.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=e0(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),$t(kn,t=>{t&&this.updateSolutions()})}},xS=Object.assign(kS,{__name:"FreeplayGame",setup(t){return(e,n)=>(I(),O("div",null,[S("div",mS,[ne(kn)&&e.windowWidth<600?(I(),O("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},_S)):ks("",!0),N(Ue,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),N(cS,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),Gr(S("p",{class:Je(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},pe(e.moves)+" move"+pe(e.moves>1?"s":""),3),[[Za,e.moves>0]]),S("div",yS,[N(js,{text:"back",to:"/freeplaySelection"}),N(pS,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),S("main",null,[N(jt,{name:"fade",mode:"out-in"},{default:Le(()=>[(I(),Qe(ra,{key:ne(Q)+e.layout.id,modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:ne(kn)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),ne(kn)?ks("",!0):(I(),O("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>ne(rh)(!0))},"v")),N(jt,{name:"fade"},{default:Le(()=>[ne(kn)&&(!(e.windowWidth<600)||e.showDevMode)?(I(),O("div",{key:0,class:Je(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[S("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>ne(rh)(!1))},"x"),vS,S("div",wS,[Gr(S("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[Ug,e.solveOnClick]]),or(" re-solve on click ")]),S("p",null,"Det: "+pe(e.determinant),1),CS,e.determinant!==0?(I(),O("div",bS,[ES,S("p",null,pe(e.solutions[0].moves)+" moves",1)])):(I(),O("div",IS,[TS,(I(!0),O(_e,null,gt(e.solutions,(s,i)=>(I(),O("p",{class:Je(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},pe(s.moves)+" moves ",11,SS))),128))]))],2)):ks("",!0)]),_:1}),N(Wt,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:Le(()=>[S("h1",null,"you won in "+pe(e.moves)+" move"+pe(e.moves>1?"s":"")+"!",1),N(Ue,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),RS=be(xS,[["__scopeId","data-v-72d49e50"]]);const PS=t=>(Kt("data-v-002149ed"),t=t(),Gt(),t),AS=PS(()=>S("h1",null,"no moves remaining!",-1)),NS={data(){const e=X().currentPuzzle,n=e.base.copy(),{width:s}=Gc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves},completionMoves(){return this.puzzle.completionMoves===-1?"":`current best: ${this.puzzle.completionMoves} moves`},nextMedal(){return this.puzzle.completionMoves===-1?"next medal: finish the puzzle":this.puzzle.completionMoves<=this.puzzle.solution.length?"":`next medal: ${this.puzzle.completionMoves<=this.puzzle.solution.length*1.2?this.puzzle.solution.length:Math.floor(this.puzzle.solution.length*1.2)} moves`}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){this.remainingMoves>0&&(X(),this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,this.puzzle.completionMoves=this.moves,ot.advanceTasks(this.puzzle.id,ot.TASK_TYPES.PUZZLE,this.moves)):this.remainingMoves===0&&(this.showLostModal=!0))}}},MS=Object.assign(NS,{__name:"PuzzleGame",setup(t){return(e,n)=>(I(),O("div",null,[N(js,{class:"top right",text:"back",to:"/puzzleSelection"}),S("div",{class:Je(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[S("h1",null,pe(e.remainingMoves)+" move"+pe(e.remainingMoves>1?"s":"")+" remaining",1),S("h1",null,pe(e.completionMoves),1),S("h1",null,pe(e.nextMedal),1),N(Ue,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),S("main",null,[N(ra,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),N(Wt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:Le(()=>[S("h1",null,"you won in "+pe(e.moves)+" move"+pe(e.moves>1?"s":"")+"!",1),N(Ue,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),N(Wt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:Le(()=>[AS,N(Ue,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),N(js,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),OS=be(MS,[["__scopeId","data-v-002149ed"]]);const i0=t=>(Kt("data-v-cfd3b4f4"),t=t(),Gt(),t),LS={key:0},DS={class:"info center"},FS={class:"per center"},$S={key:1,class:"info center"},US=i0(()=>S("h1",null,"you won the challenge!",-1)),zS=i0(()=>S("h1",null,"Are you sure you want to go back?",-1)),VS={data(){const{currentChallenge:t}=X();return{currentChallenge:t,time:t.timeLimit,timePer:t.timeLimitPer,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,showPauseModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=X();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.timePer=this.currentChallenge.timeLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.minTime=Math.min(this.currentChallenge.timeLimit-this.time,this.currentChallenge.minTime),this.currentChallenge.maxPercent=100,this.currentChallenge.minMoves=Math.min(this.currentChallenge.moveLimit-this.nMoves,this.currentChallenge.minMoves),ot.advanceTasks(this.currentChallenge.id,ot.TASK_TYPES.CHALLENGE,this.currentChallenge.timeLimit-this.time),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))},resume(){this.showPauseModal=!1},quit(){this.showPauseModal=!1,window.clearInterval(this.timerId),this.currentChallenge.reset(),this.$router.push("/challengeSelection")}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){return this.currentChallenge.timeLimit!==-1?To(this.time)+"- ":""},formattedTimePer(){return this.currentChallenge.timeLimitPer!==-1?To(this.timePer).toString():""},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)},moves(){return this.nMoves<=-1?"":this.nMoves+" -"},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer+(this.currentChallenge.timeLimitPer===-1?"":" - ")}},mounted(){this.timerId=window.setInterval(()=>{this.currentChallenge.timeLimit!==-1&&(this.time-=1*this.hasStarted*!this.showPauseModal,this.time<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))),this.currentChallenge.timeLimitPer!==-1&&(this.timePer-=1*this.hasStarted*!this.showPauseModal,this.timePer<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId)))},1e3)}},WS=Object.assign(VS,{__name:"ChallengeGame",setup(t){return(e,n)=>(I(),O("div",null,[N(Ue,{class:"top right",text:"back",onClick:n[0]||(n[0]=s=>e.showPauseModal=!0)}),e.hasStarted?(I(),O("div",LS,[S("h2",DS,pe(e.formattedTime)+" "+pe(e.moves)+" "+pe(e.percentageCompleted+"%"),1),S("h2",FS,pe(e.movesPer)+" "+pe(e.formattedTimePer),1)])):(I(),O("h2",$S,"Click To Start The Challenge !")),N(t0,{class:"center progress",value:e.percentageCompleted,max:100},null,8,["value"]),S("main",null,[N(jt,{name:"fade",mode:"out-in"},{default:Le(()=>[(I(),Qe(ra,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[1]||(n[1]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),N(Wt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showWinModal=s)},{default:Le(()=>[US,N(Ue,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),N(Wt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[5]||(n[5]=s=>e.showLostModal=s)},{default:Le(()=>[S("h1",null,pe(e.modalText),1),N(Ue,{black:"",text:"adnwkhu!",onClick:n[4]||(n[4]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"]),N(Wt,{modelValue:e.showPauseModal,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showPauseModal=s)},{default:Le(()=>[zS,N(Ue,{black:"",text:"resume",onClick:e.resume},null,8,["onClick"]),N(Ue,{black:"",text:"quit",onClick:e.quit},null,8,["onClick"])]),_:1},8,["modelValue"])]))}}),BS=be(WS,[["__scopeId","data-v-cfd3b4f4"]]),HS=S("h1",{class:"title"},"how to play",-1),jS={key:0},qS=S("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),KS=S("h1",null,"Try to get all the tiles to be white!",-1),GS={key:1},YS=S("h1",null,"Nice! Now observe what happens at the corners",-1),QS={key:2},JS=S("h1",null,"Well done! Okay one last , a bit harder",-1),XS={key:3},ZS=S("h1",null,"Great job! Ready to play?",-1),ek=S("h1",{class:"text-center"},"Try it here!",-1),tk={data(){const t=X(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new He({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},nk=Object.assign(tk,{__name:"TutorialView",setup(t){return(e,n)=>(I(),O("div",null,[HS,N(Wt,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:Le(()=>[e.stage===-1?(I(),O("div",jS,[qS,KS,N(Ue,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(I(),O("div",GS,[YS,N(Ue,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(I(),O("div",QS,[JS,N(Ue,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(I(),O("div",XS,[ZS,N(Ue,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),ek,N(ra,{class:Je([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}});const sk={},oa=t=>(Kt("data-v-3ba693a6"),t=t(),Gt(),t),ik=oa(()=>S("div",{class:"tile"},null,-1)),rk=oa(()=>S("div",{class:"tile"},null,-1)),ok=oa(()=>S("div",{class:"tile"},null,-1)),ak=oa(()=>S("div",{class:"tile"},null,-1)),lk=[ik,rk,ok,ak];function ck(t,e){return I(),O("main",null,lk)}const uk=be(sk,[["render",ck],["__scopeId","data-v-3ba693a6"]]),dk=J_({history:p_("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:rT},{path:"/tutorial",name:"tutorial",component:nk},{path:"/freeplaySelection",name:"freeplaySelection",component:vT},{path:"/puzzleSelection",name:"puzzleSelection",component:AT},{path:"/challengeSelection",name:"challengeSelection",component:GT},{path:"/freeplayGame",name:"freeplayGame",component:RS},{path:"/puzzleGame",name:"puzzleGame",component:OS},{path:"/challengeGame",name:"challengeGame",component:BS},{path:"/test",name:"test",component:uk}]}),Yc=Bg(aI),r0=qg();lr(r0);Yc.use(dk);Yc.use(r0);Yc.mount("#app");
