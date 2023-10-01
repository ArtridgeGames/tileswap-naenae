var l1=Object.defineProperty;var c1=(t,e,n)=>e in t?l1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Bn=(t,e,n)=>(c1(t,typeof e!="symbol"?e+"":e,n),n),Xc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var ri=(t,e,n)=>(Xc(t,e,"read from private field"),n?n.call(t):e.get(t)),Tr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Lt=(t,e,n)=>(Xc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Sl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Re={},Ss=[],xt=()=>{},u1=()=>!1,d1=/^on[^a-z]/,ko=t=>d1.test(t),kl=t=>t.startsWith("onUpdate:"),$e=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},h1=Object.prototype.hasOwnProperty,ce=(t,e)=>h1.call(t,e),B=Array.isArray,ks=t=>ir(t)==="[object Map]",xo=t=>ir(t)==="[object Set]",eu=t=>ir(t)==="[object Date]",X=t=>typeof t=="function",Ue=t=>typeof t=="string",Ai=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",hh=t=>Ce(t)&&X(t.then)&&X(t.catch),fh=Object.prototype.toString,ir=t=>fh.call(t),f1=t=>ir(t).slice(8,-1),ph=t=>ir(t)==="[object Object]",Pl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},p1=/-(\w)/g,Ht=Po(t=>t.replace(p1,(e,n)=>n?n.toUpperCase():"")),m1=/\B([A-Z])/g,Gs=Po(t=>t.replace(m1,"-$1").toLowerCase()),Ro=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Po(t=>t?`on${Ro(t)}`:""),Ni=(t,e)=>!Object.is(t,e),Dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},g1=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_1=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let tu;const za=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rt(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ue(s)?C1(s):Rt(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ue(t))return t;if(Ce(t))return t}}const y1=/;(?![^(]*\))/g,v1=/:([^]+)/,w1=/\/\*[^]*?\*\//g;function C1(t){const e={};return t.replace(w1,"").split(y1).forEach(n=>{if(n){const s=n.split(v1);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Je(t){let e="";if(Ue(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Je(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b1=Sl(E1);function mh(t){return!!t||t===""}function I1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ao(t[s],e[s]);return n}function Ao(t,e){if(t===e)return!0;let n=eu(t),s=eu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ai(t),s=Ai(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?I1(t,e):!1;if(n=Ce(t),s=Ce(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ao(t[o],e[o]))return!1}}return String(t)===String(e)}function gh(t,e){return t.findIndex(n=>Ao(n,e))}const pe=t=>Ue(t)?t:t==null?"":B(t)||Ce(t)&&(t.toString===fh||!X(t.toString))?JSON.stringify(t,_h,2):String(t),_h=(t,e)=>e&&e.__v_isRef?_h(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!B(e)&&!ph(e)?String(e):e;let gt;class yh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function vh(t){return new yh(t)}function T1(t,e=gt){e&&e.active&&e.effects.push(t)}function wh(){return gt}function S1(t){gt&&gt.cleanups.push(t)}const Rl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ch=t=>(t.w&Fn)>0,Eh=t=>(t.n&Fn)>0,k1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fn},x1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ch(i)&&!Eh(i)?i.delete(t):e[n++]=i,i.w&=~Fn,i.n&=~Fn}e.length=n}},jr=new WeakMap;let fi=0,Fn=1;const Va=30;let Et;const ss=Symbol(""),Wa=Symbol("");class Al{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,T1(this,s)}run(){if(!this.active)return this.fn();let e=Et,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,xn=!0,Fn=1<<++fi,fi<=Va?k1(this):nu(this),this.fn()}finally{fi<=Va&&x1(this),Fn=1<<--fi,Et=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(nu(this),this.onStop&&this.onStop(),this.active=!1)}}function nu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const bh=[];function Ks(){bh.push(xn),xn=!1}function Ys(){const t=bh.pop();xn=t===void 0?!0:t}function ht(t,e,n){if(xn&&Et){let s=jr.get(t);s||jr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Rl()),Ih(i)}}function Ih(t,e){let n=!1;fi<=Va?Eh(t)||(t.n|=Fn,n=!Ch(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function on(t,e,n,s,i,r){const o=jr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Pl(n)&&a.push(o.get("length")):(a.push(o.get(ss)),ks(t)&&a.push(o.get(Wa)));break;case"delete":B(t)||(a.push(o.get(ss)),ks(t)&&a.push(o.get(Wa)));break;case"set":ks(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&Ba(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ba(Rl(l))}}function Ba(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&su(s);for(const s of n)s.computed||su(s)}function su(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function P1(t,e){var n;return(n=jr.get(t))==null?void 0:n.get(e)}const R1=Sl("__proto__,__v_isRef,__isVue"),Th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ai)),A1=Nl(),N1=Nl(!1,!0),M1=Nl(!0),iu=O1();function O1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let r=0,o=this.length;r<o;r++)ht(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ae)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ks();const s=ae(this)[e].apply(this,n);return Ys(),s}}),t}function L1(t){const e=ae(this);return ht(e,"has",t),e.hasOwnProperty(t)}function Nl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?J1:Rh:e?Ph:xh).get(s))return s;const o=B(s);if(!t){if(o&&ce(iu,i))return Reflect.get(iu,i,r);if(i==="hasOwnProperty")return L1}const a=Reflect.get(s,i,r);return(Ai(i)?Th.has(i):R1(i))||(t||ht(s,"get",i),e)?a:Le(a)?o&&Pl(i)?a:a.value:Ce(a)?t?Nh(a):rr(a):a}}const D1=Sh(),F1=Sh(!0);function Sh(t=!1){return function(n,s,i,r){let o=n[s];if(Ls(o)&&Le(o)&&!Le(i))return!1;if(!t&&(!qr(i)&&!Ls(i)&&(o=ae(o),i=ae(i)),!B(n)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=B(n)&&Pl(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===ae(r)&&(a?Ni(i,o)&&on(n,"set",s,i):on(n,"add",s,i)),l}}function $1(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function U1(t,e){const n=Reflect.has(t,e);return(!Ai(e)||!Th.has(e))&&ht(t,"has",e),n}function z1(t){return ht(t,"iterate",B(t)?"length":ss),Reflect.ownKeys(t)}const kh={get:A1,set:D1,deleteProperty:$1,has:U1,ownKeys:z1},V1={get:M1,set(t,e){return!0},deleteProperty(t,e){return!0}},W1=$e({},kh,{get:N1,set:F1}),Ml=t=>t,No=t=>Reflect.getPrototypeOf(t);function Sr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ae(t),r=ae(e);n||(e!==r&&ht(i,"get",e),ht(i,"get",r));const{has:o}=No(i),a=s?Ml:n?Dl:Mi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function kr(t,e=!1){const n=this.__v_raw,s=ae(n),i=ae(t);return e||(t!==i&&ht(s,"has",t),ht(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function xr(t,e=!1){return t=t.__v_raw,!e&&ht(ae(t),"iterate",ss),Reflect.get(t,"size",t)}function ru(t){t=ae(t);const e=ae(this);return No(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function ou(t,e){e=ae(e);const n=ae(this),{has:s,get:i}=No(n);let r=s.call(n,t);r||(t=ae(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ni(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function au(t){const e=ae(this),{has:n,get:s}=No(e);let i=n.call(e,t);i||(t=ae(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&on(e,"delete",t,void 0),r}function lu(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Pr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ae(o),l=e?Ml:t?Dl:Mi;return!t&&ht(a,"iterate",ss),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Rr(t,e,n){return function(...s){const i=this.__v_raw,r=ae(i),o=ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ml:e?Dl:Mi;return!e&&ht(r,"iterate",l?Wa:ss),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function B1(){const t={get(r){return Sr(this,r)},get size(){return xr(this)},has:kr,add:ru,set:ou,delete:au,clear:lu,forEach:Pr(!1,!1)},e={get(r){return Sr(this,r,!1,!0)},get size(){return xr(this)},has:kr,add:ru,set:ou,delete:au,clear:lu,forEach:Pr(!1,!0)},n={get(r){return Sr(this,r,!0)},get size(){return xr(this,!0)},has(r){return kr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Pr(!0,!1)},s={get(r){return Sr(this,r,!0,!0)},get size(){return xr(this,!0)},has(r){return kr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rr(r,!1,!1),n[r]=Rr(r,!0,!1),e[r]=Rr(r,!1,!0),s[r]=Rr(r,!0,!0)}),[t,n,e,s]}const[H1,j1,q1,G1]=B1();function Ol(t,e){const n=e?t?G1:q1:t?j1:H1;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const K1={get:Ol(!1,!1)},Y1={get:Ol(!1,!0)},Q1={get:Ol(!0,!1)},xh=new WeakMap,Ph=new WeakMap,Rh=new WeakMap,J1=new WeakMap;function Z1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X1(t){return t.__v_skip||!Object.isExtensible(t)?0:Z1(f1(t))}function rr(t){return Ls(t)?t:Ll(t,!1,kh,K1,xh)}function Ah(t){return Ll(t,!1,W1,Y1,Ph)}function Nh(t){return Ll(t,!0,V1,Q1,Rh)}function Ll(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=X1(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Pn(t){return Ls(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function qr(t){return!!(t&&t.__v_isShallow)}function Mh(t){return Pn(t)||Ls(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Mo(t){return Hr(t,"__v_skip",!0),t}const Mi=t=>Ce(t)?rr(t):t,Dl=t=>Ce(t)?Nh(t):t;function Oh(t){xn&&Et&&(t=ae(t),Ih(t.dep||(t.dep=Rl())))}function Lh(t,e){t=ae(t);const n=t.dep;n&&Ba(n)}function Le(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return Dh(t,!1)}function em(t){return Dh(t,!0)}function Dh(t,e){return Le(t)?t:new tm(t,e)}class tm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Mi(e)}get value(){return Oh(this),this._value}set value(e){const n=this.__v_isShallow||qr(e)||Ls(e);e=n?e:ae(e),Ni(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mi(e),Lh(this))}}function ne(t){return Le(t)?t.value:t}const nm={get:(t,e,n)=>ne(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Fh(t){return Pn(t)?t:new Proxy(t,nm)}function sm(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=rm(t,n);return e}class im{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return P1(ae(this._object),this._key)}}function rm(t,e,n){const s=t[e];return Le(s)?s:new im(t,e,n)}class om{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Al(e,()=>{this._dirty||(this._dirty=!0,Lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ae(this);return Oh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function am(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=xt):(s=t.get,i=t.set),new om(s,i,r||!i,n)}function Rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Oo(r,e,n)}return i}function vt(t,e,n,s){if(X(t)){const r=Rn(t,e,n,s);return r&&hh(r)&&r.catch(o=>{Oo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(vt(t[r],e,n,s));return i}function Oo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}lm(t,n,i,s)}function lm(t,e,n,s=!0){console.error(t)}let Oi=!1,Ha=!1;const et=[];let $t=0;const xs=[];let Zt=null,Yn=0;const $h=Promise.resolve();let Fl=null;function $l(t){const e=Fl||$h;return t?e.then(this?t.bind(this):t):e}function cm(t){let e=$t+1,n=et.length;for(;e<n;){const s=e+n>>>1;Li(et[s])<t?e=s+1:n=s}return e}function Ul(t){(!et.length||!et.includes(t,Oi&&t.allowRecurse?$t+1:$t))&&(t.id==null?et.push(t):et.splice(cm(t.id),0,t),Uh())}function Uh(){!Oi&&!Ha&&(Ha=!0,Fl=$h.then(Vh))}function um(t){const e=et.indexOf(t);e>$t&&et.splice(e,1)}function dm(t){B(t)?xs.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Yn+1:Yn))&&xs.push(t),Uh()}function cu(t,e=Oi?$t+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function zh(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,s)=>Li(n)-Li(s)),Yn=0;Yn<Zt.length;Yn++)Zt[Yn]();Zt=null,Yn=0}}const Li=t=>t.id==null?1/0:t.id,hm=(t,e)=>{const n=Li(t)-Li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vh(t){Ha=!1,Oi=!0,et.sort(hm);const e=xt;try{for($t=0;$t<et.length;$t++){const n=et[$t];n&&n.active!==!1&&Rn(n,null,14)}}finally{$t=0,et.length=0,zh(),Oi=!1,Fl=null,(et.length||xs.length)&&Vh()}}function fm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Re;h&&(i=n.map(m=>Ue(m)?m.trim():m)),d&&(i=n.map(g1))}let a,l=s[a=aa(e)]||s[a=aa(Ht(e))];!l&&r&&(l=s[a=aa(Gs(e))]),l&&vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(c,t,6,i)}}function Wh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=Wh(c,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ce(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):$e(o,r),Ce(t)&&s.set(t,o),o)}function Lo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Gs(e))||ce(t,e))}let Ye=null,Do=null;function Gr(t){const e=Ye;return Ye=t,Do=t&&t.type.__scopeId||null,e}function Gt(t){Do=t}function Kt(){Do=null}function De(t,e=Ye,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cu(-1);const r=Gr(e);let o;try{o=t(...i)}finally{Gr(r),s._d&&Cu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:w}=t;let A,x;const O=Gr(t);try{if(n.shapeFlag&4){const $=i||s;A=Ft(u.call($,$,d,r,m,h,_)),x=l}else{const $=e;A=Ft($.length>1?$(r,{attrs:l,slots:a,emit:c}):$(r,null)),x=e.props?l:pm(l)}}catch($){Ci.length=0,Oo($,t,1),A=N(wt)}let G=A;if(x&&w!==!1){const $=Object.keys(x),{shapeFlag:ee}=G;$.length&&ee&7&&(o&&$.some(kl)&&(x=mm(x,o)),G=$n(G,x))}return n.dirs&&(G=$n(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),A=G,Gr(O),A}const pm=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},mm=(t,e)=>{const n={};for(const s in t)(!kl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?uu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Lo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?uu(s,o,c):!0:!!o;return!1}function uu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Lo(n,r))return!0}return!1}function _m({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ym=t=>t.__isSuspense;function vm(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):dm(t)}function wm(t,e){return zl(t,null,{flush:"post"})}const Ar={};function Ut(t,e,n){return zl(t,e,n)}function zl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Re){var a;const l=wh()===((a=We)==null?void 0:a.scope)?We:null;let c,u=!1,d=!1;if(Le(t)?(c=()=>t.value,u=qr(t)):Pn(t)?(c=()=>t,s=!0):B(t)?(d=!0,u=t.some($=>Pn($)||qr($)),c=()=>t.map($=>{if(Le($))return $.value;if(Pn($))return Zn($);if(X($))return Rn($,l,2)})):X(t)?e?c=()=>Rn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),vt(t,l,3,[m])}:c=xt,e&&s){const $=c;c=()=>Zn($())}let h,m=$=>{h=O.onStop=()=>{Rn($,l,4)}},_;if(Wi)if(m=xt,e?n&&vt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const $=pg();_=$.__watcherHandles||($.__watcherHandles=[])}else return xt;let w=d?new Array(t.length).fill(Ar):Ar;const A=()=>{if(O.active)if(e){const $=O.run();(s||u||(d?$.some((ee,be)=>Ni(ee,w[be])):Ni($,w)))&&(h&&h(),vt(e,l,3,[$,w===Ar?void 0:d&&w[0]===Ar?[]:w,m]),w=$)}else O.run()};A.allowRecurse=!!e;let x;i==="sync"?x=A:i==="post"?x=()=>lt(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),x=()=>Ul(A));const O=new Al(c,x);e?n?A():w=O.run():i==="post"?lt(O.run.bind(O),l&&l.suspense):O.run();const G=()=>{O.stop(),l&&l.scope&&xl(l.scope.effects,O)};return _&&_.push(G),G}function Cm(t,e,n){const s=this.proxy,i=Ue(t)?t.includes(".")?Bh(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=We;Ds(this);const a=zl(i,r.bind(s),n);return o?Ds(o):is(),a}function Bh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Zn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))Zn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(xo(t)||ks(t))t.forEach(n=>{Zn(n,e)});else if(ph(t))for(const n in t)Zn(t[n],e);return t}function Kr(t,e){const n=Ye;if(n===null)return t;const s=Vo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Re]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Zn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Hn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ks(),vt(l,n,8,[t.el,a,t,e]),Ys())}}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $i(()=>{t.isMounted=!0}),Qh(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},Em={name:"BaseTransition",props:jh,setup(t,{slots:e}){const n=ql(),s=Hh();let i;return()=>{const r=e.default&&Vl(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==wt){o=w;break}}const a=ae(t),{mode:l}=a;if(s.isLeaving)return ca(o);const c=du(o);if(!c)return ca(o);const u=Di(c,a,s,n);Fi(c,u);const d=n.subTree,h=d&&du(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,m=!0)}if(h&&h.type!==wt&&(!Qn(c,h)||m)){const w=Di(h,a,s,n);if(Fi(h,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ca(o);l==="in-out"&&c.type!==wt&&(w.delayLeave=(A,x,O)=>{const G=qh(s,h);G[String(h.key)]=h,A._leaveCb=()=>{x(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},bm=Em;function qh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Di(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:w,onAppear:A,onAfterAppear:x,onAppearCancelled:O}=e,G=String(t.key),$=qh(n,t),ee=(D,V)=>{D&&vt(D,s,9,V)},be=(D,V)=>{const J=V[1];ee(D,V),B(D)?D.every(ve=>ve.length<=1)&&J():D.length<=1&&J()},Se={mode:r,persisted:o,beforeEnter(D){let V=a;if(!n.isMounted)if(i)V=w||a;else return;D._leaveCb&&D._leaveCb(!0);const J=$[G];J&&Qn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),ee(V,[D])},enter(D){let V=l,J=c,ve=u;if(!n.isMounted)if(i)V=A||l,J=x||c,ve=O||u;else return;let U=!1;const de=D._enterCb=Qe=>{U||(U=!0,Qe?ee(ve,[D]):ee(J,[D]),Se.delayedLeave&&Se.delayedLeave(),D._enterCb=void 0)};V?be(V,[D,de]):de()},leave(D,V){const J=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return V();ee(d,[D]);let ve=!1;const U=D._leaveCb=de=>{ve||(ve=!0,V(),de?ee(_,[D]):ee(m,[D]),D._leaveCb=void 0,$[J]===t&&delete $[J])};$[J]=t,h?be(h,[D,U]):U()},clone(D){return Di(D,e,n,s)}};return Se}function ca(t){if(Fo(t))return t=$n(t),t.children=null,t}function du(t){return Fo(t)?t.children?t.children[0]:void 0:t}function Fi(t,e){t.shapeFlag&6&&t.component?Fi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_e?(o.patchFlag&128&&i++,s=s.concat(Vl(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?$n(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Gh(t,e){return X(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const vi=t=>!!t.type.__asyncLoader,Fo=t=>t.type.__isKeepAlive;function Im(t,e){Kh(t,"a",e)}function Tm(t,e){Kh(t,"da",e)}function Kh(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($o(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fo(i.parent.vnode)&&Sm(s,e,n,i),i=i.parent}}function Sm(t,e,n,s){const i=$o(e,t,s,!0);Ui(()=>{xl(s[e],i)},n)}function $o(t,e,n=We,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ks(),Ds(n);const a=vt(e,n,t,o);return is(),Ys(),a});return s?i.unshift(r):i.push(r),r}}const cn=t=>(e,n=We)=>(!Wi||t==="sp")&&$o(t,(...s)=>e(...s),n),km=cn("bm"),$i=cn("m"),xm=cn("bu"),Yh=cn("u"),Qh=cn("bum"),Ui=cn("um"),Pm=cn("sp"),Rm=cn("rtg"),Am=cn("rtc");function Nm(t,e=We){$o("ec",t,e)}const Wl="components";function Mm(t,e){return Zh(Wl,t,!0,e)||t}const Jh=Symbol.for("v-ndc");function Om(t){return Ue(t)?Zh(Wl,t,!1)||t:t||Jh}function Zh(t,e,n=!0,s=!1){const i=Ye||We;if(i){const r=i.type;if(t===Wl){const a=dg(r,!1);if(a&&(a===e||a===Ht(e)||a===Ro(Ht(e))))return r}const o=hu(i[t]||r[t],e)||hu(i.appContext[t],e);return!o&&s?r:o}}function hu(t,e){return t&&(t[e]||t[Ht(e)]||t[Ro(Ht(e))])}function _t(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Lm(t,e,n={},s,i){if(Ye.isCE||Ye.parent&&vi(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),N("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),I();const o=r&&Xh(r(n)),a=Fe(_e,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Xh(t){return t.some(e=>Qr(e)?!(e.type===wt||e.type===_e&&!Xh(e.children)):!0)?t:null}const ja=t=>t?df(t)?Vo(t)||t.proxy:ja(t.parent):null,wi=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ja(t.parent),$root:t=>ja(t.root),$emit:t=>t.emit,$options:t=>Bl(t),$forceUpdate:t=>t.f||(t.f=()=>Ul(t.update)),$nextTick:t=>t.n||(t.n=$l.bind(t.proxy)),$watch:t=>Cm.bind(t)}),ua=(t,e)=>t!==Re&&!t.__isScriptSetup&&ce(t,e),Dm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ua(s,e))return o[e]=1,s[e];if(i!==Re&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Re&&ce(n,e))return o[e]=4,n[e];qa&&(o[e]=0)}}const u=wi[e];let d,h;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&ce(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ce(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ua(i,e)?(i[e]=n,!0):s!==Re&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&ce(t,o)||ua(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(wi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fu(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qa=!0;function Fm(t){const e=Bl(t),n=t.proxy,s=t.ctx;qa=!1,e.beforeCreate&&pu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:w,deactivated:A,beforeDestroy:x,beforeUnmount:O,destroyed:G,unmounted:$,render:ee,renderTracked:be,renderTriggered:Se,errorCaptured:D,serverPrefetch:V,expose:J,inheritAttrs:ve,components:U,directives:de,filters:Qe}=e;if(c&&$m(c,s,null),o)for(const we in o){const he=o[we];X(he)&&(s[we]=he.bind(n))}if(i){const we=i.call(n,n);Ce(we)&&(t.data=rr(we))}if(qa=!0,r)for(const we in r){const he=r[we],Yt=X(he)?he.bind(n,n):X(he.get)?he.get.bind(n,n):xt,hn=!X(he)&&X(he.set)?he.set.bind(n):xt,Mt=Oe({get:Yt,set:hn});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:at=>Mt.value=at})}if(a)for(const we in a)ef(a[we],s,n,we);if(l){const we=X(l)?l.call(n):l;Reflect.ownKeys(we).forEach(he=>{Fr(he,we[he])})}u&&pu(u,t,"c");function le(we,he){B(he)?he.forEach(Yt=>we(Yt.bind(n))):he&&we(he.bind(n))}if(le(km,d),le($i,h),le(xm,m),le(Yh,_),le(Im,w),le(Tm,A),le(Nm,D),le(Am,be),le(Rm,Se),le(Qh,O),le(Ui,$),le(Pm,V),B(J))if(J.length){const we=t.exposed||(t.exposed={});J.forEach(he=>{Object.defineProperty(we,he,{get:()=>n[he],set:Yt=>n[he]=Yt})})}else t.exposed||(t.exposed={});ee&&t.render===xt&&(t.render=ee),ve!=null&&(t.inheritAttrs=ve),U&&(t.components=U),de&&(t.directives=de)}function $m(t,e,n=xt){B(t)&&(t=Ga(t));for(const s in t){const i=t[s];let r;Ce(i)?"default"in i?r=zt(i.from||s,i.default,!0):r=zt(i.from||s):r=zt(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pu(t,e,n){vt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ef(t,e,n,s){const i=s.includes(".")?Bh(n,s):()=>n[s];if(Ue(t)){const r=e[t];X(r)&&Ut(i,r)}else if(X(t))Ut(i,t.bind(n));else if(Ce(t))if(B(t))t.forEach(r=>ef(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&Ut(i,r,t)}}function Bl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Yr(l,c,o,!0)),Yr(l,e,o)),Ce(e)&&r.set(e,l),l}function Yr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Yr(t,r,n,!0),i&&i.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Um[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Um={data:mu,props:gu,emits:gu,methods:pi,computed:pi,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:pi,directives:pi,watch:Vm,provide:mu,inject:zm};function mu(t,e){return e?t?function(){return $e(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function zm(t,e){return pi(Ga(t),Ga(e))}function Ga(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function pi(t,e){return t?$e(Object.create(null),t,e):e}function gu(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:$e(Object.create(null),fu(t),fu(e??{})):e}function Vm(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function tf(){return{app:null,config:{isNativeTag:u1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wm=0;function Bm(t,e){return function(s,i=null){X(s)||(s=$e({},s)),i!=null&&!Ce(i)&&(i=null);const r=tf(),o=new Set;let a=!1;const l=r.app={_uid:Wm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:mg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=N(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Vo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){zi=l;try{return c()}finally{zi=null}}};return l}}let zi=null;function Fr(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function zt(t,e,n=!1){const s=We||Ye;if(s||zi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:zi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function Hm(){return!!(We||Ye||zi)}function jm(t,e,n,s=!1){const i={},r={};Hr(r,zo,1),t.propsDefaults=Object.create(null),nf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ae(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Lo(t.emitsOptions,h))continue;const m=e[h];if(l)if(ce(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=Ht(h);i[_]=Ka(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{nf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=Gs(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ka(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d))&&(delete r[d],c=!0)}c&&on(t,"set","$attrs")}function nf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;i&&ce(i,u=Ht(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ae(n),c=a||Re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ka(i,l,d,c[d],t,!ce(c,d))}}return o}function Ka(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ds(i),s=c[n]=l.call(null,e),is())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Gs(n))&&(s=!0))}return s}function sf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[h,m]=sf(d,e,!0);$e(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ce(t)&&s.set(t,Ss),Ss;if(B(r))for(let u=0;u<r.length;u++){const d=Ht(r[u]);_u(d)&&(o[d]=Re)}else if(r)for(const u in r){const d=Ht(u);if(_u(d)){const h=r[u],m=o[d]=B(h)||X(h)?{type:h}:$e({},h);if(m){const _=wu(Boolean,m.type),w=wu(String,m.type);m[0]=_>-1,m[1]=w<0||_<w,(_>-1||ce(m,"default"))&&a.push(d)}}}const c=[o,a];return Ce(t)&&s.set(t,c),c}function _u(t){return t[0]!=="$"}function yu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vu(t,e){return yu(t)===yu(e)}function wu(t,e){return B(e)?e.findIndex(n=>vu(n,t)):X(e)&&vu(e,t)?0:-1}const rf=t=>t[0]==="_"||t==="$stable",Hl=t=>B(t)?t.map(Ft):[Ft(t)],Gm=(t,e,n)=>{if(e._n)return e;const s=De((...i)=>Hl(e(...i)),n);return s._c=!1,s},of=(t,e,n)=>{const s=t._ctx;for(const i in t){if(rf(i))continue;const r=t[i];if(X(r))e[i]=Gm(i,r,s);else if(r!=null){const o=Hl(r);e[i]=()=>o}}},af=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},Km=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Hr(e,"_",n)):of(e,t.slots={})}else t.slots={},e&&af(t,e);Hr(t.slots,zo,1)},Ym=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:($e(i,e),!n&&a===1&&delete i._):(r=!e.$stable,of(e,i)),o=e}else e&&(af(t,e),o={default:1});if(r)for(const a in i)!rf(a)&&!(a in o)&&delete i[a]};function Ya(t,e,n,s,i=!1){if(B(t)){t.forEach((h,m)=>Ya(h,e&&(B(e)?e[m]:e),n,s,i));return}if(vi(s)&&!i)return;const r=s.shapeFlag&4?Vo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,ce(d,c)&&(d[c]=null)):Le(c)&&(c.value=null)),X(l))Rn(l,a,12,[o,u]);else{const h=Ue(l),m=Le(l);if(h||m){const _=()=>{if(t.f){const w=h?ce(d,l)?d[l]:u[l]:l.value;i?B(w)&&xl(w,r):B(w)?w.includes(r)||w.push(r):h?(u[l]=[r],ce(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ce(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,lt(_,n)):_()}}}const lt=vm;function Qm(t){return Jm(t)}function Jm(t,e){const n=za();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=xt,insertStaticContent:_}=t,w=(f,p,g,y=null,C=null,E=null,L=!1,S=null,P=!!p.dynamicChildren)=>{if(f===p)return;f&&!Qn(f,p)&&(y=v(f),at(f,C,E,!0),f=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:z}=p;switch(b){case Uo:A(f,p,g,y);break;case wt:x(f,p,g,y);break;case $r:f==null&&O(p,g,y,L);break;case _e:U(f,p,g,y,C,E,L,S,P);break;default:z&1?ee(f,p,g,y,C,E,L,S,P):z&6?de(f,p,g,y,C,E,L,S,P):(z&64||z&128)&&b.process(f,p,g,y,C,E,L,S,P,R)}H!=null&&C&&Ya(H,f&&f.ref,E,p||f,!p)},A=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},x=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},O=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},G=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},$=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},ee=(f,p,g,y,C,E,L,S,P)=>{L=L||p.type==="svg",f==null?be(p,g,y,C,E,L,S,P):V(f,p,C,E,L,S,P)},be=(f,p,g,y,C,E,L,S)=>{let P,b;const{type:H,props:z,shapeFlag:j,transition:Y,dirs:ie}=f;if(P=f.el=o(f.type,E,z&&z.is,z),j&8?u(P,f.children):j&16&&D(f.children,P,null,y,C,E&&H!=="foreignObject",L,S),ie&&Hn(f,null,y,"created"),Se(P,f,f.scopeId,L,y),z){for(const me in z)me!=="value"&&!Lr(me)&&r(P,me,null,z[me],E,f.children,y,C,Ze);"value"in z&&r(P,"value",null,z.value),(b=z.onVnodeBeforeMount)&&Dt(b,y,f)}ie&&Hn(f,null,y,"beforeMount");const Ie=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ie&&Y.beforeEnter(P),s(P,p,g),((b=z&&z.onVnodeMounted)||Ie||ie)&&lt(()=>{b&&Dt(b,y,f),Ie&&Y.enter(P),ie&&Hn(f,null,y,"mounted")},C)},Se=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(C){let E=C.subTree;if(p===E){const L=C.vnode;Se(f,L,L.scopeId,L.slotScopeIds,C.parent)}}},D=(f,p,g,y,C,E,L,S,P=0)=>{for(let b=P;b<f.length;b++){const H=f[b]=S?wn(f[b]):Ft(f[b]);w(null,H,p,g,y,C,E,L,S)}},V=(f,p,g,y,C,E,L)=>{const S=p.el=f.el;let{patchFlag:P,dynamicChildren:b,dirs:H}=p;P|=f.patchFlag&16;const z=f.props||Re,j=p.props||Re;let Y;g&&jn(g,!1),(Y=j.onVnodeBeforeUpdate)&&Dt(Y,g,p,f),H&&Hn(p,f,g,"beforeUpdate"),g&&jn(g,!0);const ie=C&&p.type!=="foreignObject";if(b?J(f.dynamicChildren,b,S,g,y,ie,E):L||he(f,p,S,null,g,y,ie,E,!1),P>0){if(P&16)ve(S,p,z,j,g,y,C);else if(P&2&&z.class!==j.class&&r(S,"class",null,j.class,C),P&4&&r(S,"style",z.style,j.style,C),P&8){const Ie=p.dynamicProps;for(let me=0;me<Ie.length;me++){const ze=Ie[me],Ct=z[ze],ys=j[ze];(ys!==Ct||ze==="value")&&r(S,ze,Ct,ys,C,f.children,g,y,Ze)}}P&1&&f.children!==p.children&&u(S,p.children)}else!L&&b==null&&ve(S,p,z,j,g,y,C);((Y=j.onVnodeUpdated)||H)&&lt(()=>{Y&&Dt(Y,g,p,f),H&&Hn(p,f,g,"updated")},y)},J=(f,p,g,y,C,E,L)=>{for(let S=0;S<p.length;S++){const P=f[S],b=p[S],H=P.el&&(P.type===_e||!Qn(P,b)||P.shapeFlag&70)?d(P.el):g;w(P,b,H,null,y,C,E,L,!0)}},ve=(f,p,g,y,C,E,L)=>{if(g!==y){if(g!==Re)for(const S in g)!Lr(S)&&!(S in y)&&r(f,S,g[S],null,L,p.children,C,E,Ze);for(const S in y){if(Lr(S))continue;const P=y[S],b=g[S];P!==b&&S!=="value"&&r(f,S,b,P,L,p.children,C,E,Ze)}"value"in y&&r(f,"value",g.value,y.value)}},U=(f,p,g,y,C,E,L,S,P)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:j,slotScopeIds:Y}=p;Y&&(S=S?S.concat(Y):Y),f==null?(s(b,g,y),s(H,g,y),D(p.children,g,H,C,E,L,S,P)):z>0&&z&64&&j&&f.dynamicChildren?(J(f.dynamicChildren,j,g,C,E,L,S),(p.key!=null||C&&p===C.subTree)&&lf(f,p,!0)):he(f,p,g,H,C,E,L,S,P)},de=(f,p,g,y,C,E,L,S,P)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,L,P):Qe(p,g,y,C,E,L,P):st(f,p,P)},Qe=(f,p,g,y,C,E,L)=>{const S=f.component=og(f,y,C);if(Fo(f)&&(S.ctx.renderer=R),ag(S),S.asyncDep){if(C&&C.registerDep(S,le),!f.el){const P=S.subTree=N(wt);x(null,P,p,g)}return}le(S,f,p,g,C,E,L)},st=(f,p,g)=>{const y=p.component=f.component;if(gm(f,p,g))if(y.asyncDep&&!y.asyncResolved){we(y,p,g);return}else y.next=p,um(y.update),y.update();else p.el=f.el,y.vnode=p},le=(f,p,g,y,C,E,L)=>{const S=()=>{if(f.isMounted){let{next:H,bu:z,u:j,parent:Y,vnode:ie}=f,Ie=H,me;jn(f,!1),H?(H.el=ie.el,we(f,H,L)):H=ie,z&&Dr(z),(me=H.props&&H.props.onVnodeBeforeUpdate)&&Dt(me,Y,H,ie),jn(f,!0);const ze=la(f),Ct=f.subTree;f.subTree=ze,w(Ct,ze,d(Ct.el),v(Ct),f,C,E),H.el=ze.el,Ie===null&&_m(f,ze.el),j&&lt(j,C),(me=H.props&&H.props.onVnodeUpdated)&&lt(()=>Dt(me,Y,H,ie),C)}else{let H;const{el:z,props:j}=p,{bm:Y,m:ie,parent:Ie}=f,me=vi(p);if(jn(f,!1),Y&&Dr(Y),!me&&(H=j&&j.onVnodeBeforeMount)&&Dt(H,Ie,p),jn(f,!0),z&&fe){const ze=()=>{f.subTree=la(f),fe(z,f.subTree,f,C,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ze()):ze()}else{const ze=f.subTree=la(f);w(null,ze,g,y,f,C,E),p.el=ze.el}if(ie&&lt(ie,C),!me&&(H=j&&j.onVnodeMounted)){const ze=p;lt(()=>Dt(H,Ie,ze),C)}(p.shapeFlag&256||Ie&&vi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&f.a&&lt(f.a,C),f.isMounted=!0,p=g=y=null}},P=f.effect=new Al(S,()=>Ul(b),f.scope),b=f.update=()=>P.run();b.id=f.uid,jn(f,!0),b()},we=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,qm(f,p.props,y,g),Ym(f,p.children,g),Ks(),cu(),Ys()},he=(f,p,g,y,C,E,L,S,P=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,z=p.children,{patchFlag:j,shapeFlag:Y}=p;if(j>0){if(j&128){hn(b,z,g,y,C,E,L,S,P);return}else if(j&256){Yt(b,z,g,y,C,E,L,S,P);return}}Y&8?(H&16&&Ze(b,C,E),z!==b&&u(g,z)):H&16?Y&16?hn(b,z,g,y,C,E,L,S,P):Ze(b,C,E,!0):(H&8&&u(g,""),Y&16&&D(z,g,y,C,E,L,S,P))},Yt=(f,p,g,y,C,E,L,S,P)=>{f=f||Ss,p=p||Ss;const b=f.length,H=p.length,z=Math.min(b,H);let j;for(j=0;j<z;j++){const Y=p[j]=P?wn(p[j]):Ft(p[j]);w(f[j],Y,g,null,C,E,L,S,P)}b>H?Ze(f,C,E,!0,!1,z):D(p,g,y,C,E,L,S,P,z)},hn=(f,p,g,y,C,E,L,S,P)=>{let b=0;const H=p.length;let z=f.length-1,j=H-1;for(;b<=z&&b<=j;){const Y=f[b],ie=p[b]=P?wn(p[b]):Ft(p[b]);if(Qn(Y,ie))w(Y,ie,g,null,C,E,L,S,P);else break;b++}for(;b<=z&&b<=j;){const Y=f[z],ie=p[j]=P?wn(p[j]):Ft(p[j]);if(Qn(Y,ie))w(Y,ie,g,null,C,E,L,S,P);else break;z--,j--}if(b>z){if(b<=j){const Y=j+1,ie=Y<H?p[Y].el:y;for(;b<=j;)w(null,p[b]=P?wn(p[b]):Ft(p[b]),g,ie,C,E,L,S,P),b++}}else if(b>j)for(;b<=z;)at(f[b],C,E,!0),b++;else{const Y=b,ie=b,Ie=new Map;for(b=ie;b<=j;b++){const mt=p[b]=P?wn(p[b]):Ft(p[b]);mt.key!=null&&Ie.set(mt.key,b)}let me,ze=0;const Ct=j-ie+1;let ys=!1,Qc=0;const ii=new Array(Ct);for(b=0;b<Ct;b++)ii[b]=0;for(b=Y;b<=z;b++){const mt=f[b];if(ze>=Ct){at(mt,C,E,!0);continue}let Ot;if(mt.key!=null)Ot=Ie.get(mt.key);else for(me=ie;me<=j;me++)if(ii[me-ie]===0&&Qn(mt,p[me])){Ot=me;break}Ot===void 0?at(mt,C,E,!0):(ii[Ot-ie]=b+1,Ot>=Qc?Qc=Ot:ys=!0,w(mt,p[Ot],g,null,C,E,L,S,P),ze++)}const Jc=ys?Zm(ii):Ss;for(me=Jc.length-1,b=Ct-1;b>=0;b--){const mt=ie+b,Ot=p[mt],Zc=mt+1<H?p[mt+1].el:y;ii[b]===0?w(null,Ot,g,Zc,C,E,L,S,P):ys&&(me<0||b!==Jc[me]?Mt(Ot,g,Zc,2):me--)}}},Mt=(f,p,g,y,C=null)=>{const{el:E,type:L,transition:S,children:P,shapeFlag:b}=f;if(b&6){Mt(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){L.move(f,p,g,R);return}if(L===_e){s(E,p,g);for(let z=0;z<P.length;z++)Mt(P[z],p,g,y);s(f.anchor,p,g);return}if(L===$r){G(f,p,g);return}if(y!==2&&b&1&&S)if(y===0)S.beforeEnter(E),s(E,p,g),lt(()=>S.enter(E),C);else{const{leave:z,delayLeave:j,afterLeave:Y}=S,ie=()=>s(E,p,g),Ie=()=>{z(E,()=>{ie(),Y&&Y()})};j?j(E,ie,Ie):Ie()}else s(E,p,g)},at=(f,p,g,y=!1,C=!1)=>{const{type:E,props:L,ref:S,children:P,dynamicChildren:b,shapeFlag:H,patchFlag:z,dirs:j}=f;if(S!=null&&Ya(S,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&j,ie=!vi(f);let Ie;if(ie&&(Ie=L&&L.onVnodeBeforeUnmount)&&Dt(Ie,p,f),H&6)Ir(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&Hn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,R,y):b&&(E!==_e||z>0&&z&64)?Ze(b,p,g,!1,!0):(E===_e&&z&384||!C&&H&16)&&Ze(P,p,g),y&&gs(f)}(ie&&(Ie=L&&L.onVnodeUnmounted)||Y)&&lt(()=>{Ie&&Dt(Ie,p,f),Y&&Hn(f,null,p,"unmounted")},g)},gs=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===_e){_s(g,y);return}if(p===$r){$(f);return}const E=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:S}=C,P=()=>L(g,E);S?S(f.el,E,P):P()}else E()},_s=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Ir=(f,p,g)=>{const{bum:y,scope:C,update:E,subTree:L,um:S}=f;y&&Dr(y),C.stop(),E&&(E.active=!1,at(L,f,p,g)),S&&lt(S,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ze=(f,p,g,y=!1,C=!1,E=0)=>{for(let L=E;L<f.length;L++)at(f[L],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),F=(f,p,g)=>{f==null?p._vnode&&at(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),cu(),zh(),p._vnode=f},R={p:w,um:at,m:Mt,r:gs,mt:Qe,mc:D,pc:he,pbc:J,n:v,o:t};let W,fe;return e&&([W,fe]=e(R)),{render:F,hydrate:W,createApp:Bm(F,W)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lf(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=wn(i[r]),a.el=o.el),n||lf(o,a)),a.type===Uo&&(a.el=o.el)}}function Zm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Xm=t=>t.__isTeleport,_e=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),Ci=[];let It=null;function I(t=!1){Ci.push(It=t?null:[])}function eg(){Ci.pop(),It=Ci[Ci.length-1]||null}let Vi=1;function Cu(t){Vi+=t}function cf(t){return t.dynamicChildren=Vi>0?It||Ss:null,eg(),Vi>0&&It&&It.push(t),t}function M(t,e,n,s,i,r){return cf(T(t,e,n,s,i,r,!0))}function Fe(t,e,n,s,i){return cf(N(t,e,n,s,i,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function Qn(t,e){return t.type===e.type&&t.key===e.key}const zo="__vInternal",uf=({key:t})=>t??null,Ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Le(t)||X(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,s=0,i=null,r=t===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uf(e),ref:e&&Ur(e),scopeId:Do,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return a?(jl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Vi>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const N=tg;function tg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jh)&&(t=wt),Qr(t)){const a=$n(t,e,!0);return n&&jl(a,n),Vi>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(hg(t)&&(t=t.__vccOpts),e){e=ng(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Je(a)),Ce(l)&&(Mh(l)&&!B(l)&&(l=$e({},l)),e.style=Rt(l))}const o=Ue(t)?1:ym(t)?128:Xm(t)?64:Ce(t)?4:X(t)?2:0;return T(t,e,n,s,i,o,r,!0)}function ng(t){return t?Mh(t)||zo in t?$e({},t):t:null}function $n(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?sg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uf(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Ur(e)):[i,Ur(e)]:Ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function or(t=" ",e=0){return N(Uo,null,t,e)}function An(t="",e=!1){return e?(I(),Fe(wt,null,t)):N(wt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?N(wt):B(t)?N(_e,null,t.slice()):typeof t=="object"?wn(t):N(Uo,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$n(t)}function jl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),jl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zo in e)?e._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function sg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Je([e.class,s.class]));else if(i==="style")e.style=Rt([e.style,s.style]);else if(ko(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Dt(t,e,n,s=null){vt(t,e,7,[n,s])}const ig=tf();let rg=0;function og(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ig,r={uid:rg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(s,i),emitsOptions:Wh(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fm.bind(null,r),t.ce&&t.ce(r),r}let We=null;const ql=()=>We||Ye;let Gl,vs,Eu="__VUE_INSTANCE_SETTERS__";(vs=za()[Eu])||(vs=za()[Eu]=[]),vs.push(t=>We=t),Gl=t=>{vs.length>1?vs.forEach(e=>e(t)):vs[0](t)};const Ds=t=>{Gl(t),t.scope.on()},is=()=>{We&&We.scope.off(),Gl(null)};function df(t){return t.vnode.shapeFlag&4}let Wi=!1;function ag(t,e=!1){Wi=e;const{props:n,children:s}=t.vnode,i=df(t);jm(t,n,i,e),Km(t,s);const r=i?lg(t,e):void 0;return Wi=!1,r}function lg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mo(new Proxy(t.ctx,Dm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ug(t):null;Ds(t),Ks();const r=Rn(s,t,0,[t.props,i]);if(Ys(),is(),hh(r)){if(r.then(is,is),e)return r.then(o=>{bu(t,o,e)}).catch(o=>{Oo(o,t,0)});t.asyncDep=r}else bu(t,r,e)}else hf(t,e)}function bu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Fh(e)),hf(t,n)}let Iu;function hf(t,e,n){const s=t.type;if(!t.render){if(!e&&Iu&&!s.render){const i=s.template||Bl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=$e($e({isCustomElement:r,delimiters:a},o),l);s.render=Iu(i,c)}}t.render=s.render||xt}Ds(t),Ks(),Fm(t),Ys(),is()}function cg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}}))}function ug(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cg(t)},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fh(Mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}}))}function dg(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function hg(t){return X(t)&&"__vccOpts"in t}const Oe=(t,e)=>am(t,e,Wi);function Kl(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!B(e)?Qr(e)?N(t,null,[e]):N(t,e):N(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qr(n)&&(n=[n]),N(t,e,n))}const fg=Symbol.for("v-scx"),pg=()=>zt(fg),mg="3.3.4",gg="http://www.w3.org/2000/svg",Jn=typeof document<"u"?document:null,Tu=Jn&&Jn.createElement("template"),_g={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Jn.createElementNS(gg,t):Jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Tu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vg(t,e,n){const s=t.style,i=Ue(n);if(n&&!i){if(e&&!Ue(e))for(const r in e)n[r]==null&&Qa(s,r,"");for(const r in n)Qa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Su=/\s*!important$/;function Qa(t,e,n){if(B(n))n.forEach(s=>Qa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=wg(t,e);Su.test(n)?t.setProperty(Gs(s),n.replace(Su,""),"important"):t[s]=n}}const ku=["Webkit","Moz","ms"],da={};function wg(t,e){const n=da[e];if(n)return n;let s=Ht(e);if(s!=="filter"&&s in t)return da[e]=s;s=Ro(s);for(let i=0;i<ku.length;i++){const r=ku[i]+s;if(r in t)return da[e]=r}return e}const xu="http://www.w3.org/1999/xlink";function Cg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xu,e.slice(6,e.length)):t.setAttributeNS(xu,e,n);else{const r=b1(e);n==null||r&&!mh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Eg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ff(t,e,n,s){t.addEventListener(e,n,s)}function bg(t,e,n,s){t.removeEventListener(e,n,s)}function Ig(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Tg(e);if(s){const c=r[e]=xg(s,i);ff(t,a,c,l)}else o&&(bg(t,a,o,l),r[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function Tg(t){let e;if(Pu.test(t)){e={};let s;for(;s=t.match(Pu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gs(t.slice(2)),e]}let ha=0;const Sg=Promise.resolve(),kg=()=>ha||(Sg.then(()=>ha=0),ha=Date.now());function xg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(Pg(s,n.value),e,5,[s])};return n.value=t,n.attached=kg(),n}function Pg(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ru=/^on[a-z]/,Rg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?yg(t,s,i):e==="style"?vg(t,n,s):ko(e)?kl(e)||Ig(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ag(t,e,s,i))?Eg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cg(t,e,s,i))};function Ag(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ru.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ru.test(e)&&Ue(n)?!1:e in t}function ar(t){const e=ql();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Za(r,i))},s=()=>{const i=t(e.proxy);Ja(e.subTree,i),n(i)};wm(s),$i(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Ui(()=>i.disconnect())})}function Ja(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ja(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Za(t.el,e);else if(t.type===_e)t.children.forEach(n=>Ja(n,e));else if(t.type===$r){let{el:n,anchor:s}=t;for(;n&&(Za(n,e),n!==s);)n=n.nextSibling}}function Za(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const pn="transition",oi="animation",jt=(t,{slots:e})=>Kl(bm,mf(t),e);jt.displayName="Transition";const pf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ng=jt.props=$e({},jh,pf),qn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Au=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function mf(t){const e={};for(const U in t)U in pf||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Mg(i),w=_&&_[0],A=_&&_[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:G,onLeave:$,onLeaveCancelled:ee,onBeforeAppear:be=x,onAppear:Se=O,onAppearCancelled:D=G}=e,V=(U,de,Qe)=>{_n(U,de?u:a),_n(U,de?c:o),Qe&&Qe()},J=(U,de)=>{U._isLeaving=!1,_n(U,d),_n(U,m),_n(U,h),de&&de()},ve=U=>(de,Qe)=>{const st=U?Se:O,le=()=>V(de,U,Qe);qn(st,[de,le]),Nu(()=>{_n(de,U?l:r),Jt(de,U?u:a),Au(st)||Mu(de,s,w,le)})};return $e(e,{onBeforeEnter(U){qn(x,[U]),Jt(U,r),Jt(U,o)},onBeforeAppear(U){qn(be,[U]),Jt(U,l),Jt(U,c)},onEnter:ve(!1),onAppear:ve(!0),onLeave(U,de){U._isLeaving=!0;const Qe=()=>J(U,de);Jt(U,d),_f(),Jt(U,h),Nu(()=>{U._isLeaving&&(_n(U,d),Jt(U,m),Au($)||Mu(U,s,A,Qe))}),qn($,[U,Qe])},onEnterCancelled(U){V(U,!1),qn(G,[U])},onAppearCancelled(U){V(U,!0),qn(D,[U])},onLeaveCancelled(U){J(U),qn(ee,[U])}})}function Mg(t){if(t==null)return null;if(Ce(t))return[fa(t.enter),fa(t.leave)];{const e=fa(t);return[e,e]}}function fa(t){return _1(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function _n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Nu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Og=0;function Mu(t,e,n,s){const i=t._endId=++Og,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=gf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function gf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${pn}Delay`),r=s(`${pn}Duration`),o=Ou(i,r),a=s(`${oi}Delay`),l=s(`${oi}Duration`),c=Ou(a,l);let u=null,d=0,h=0;e===pn?o>0&&(u=pn,d=o,h=r.length):e===oi?c>0&&(u=oi,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?pn:oi:null,h=u?u===pn?r.length:l.length:0);const m=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Ou(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Lu(n)+Lu(t[s])))}function Lu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function _f(){return document.body.offsetHeight}const yf=new WeakMap,vf=new WeakMap,wf={name:"TransitionGroup",props:$e({},Ng,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ql(),s=Hh();let i,r;return Yh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!zg(i[0].el,n.vnode.el,o))return;i.forEach(Fg),i.forEach($g);const a=i.filter(Ug);_f(),a.forEach(l=>{const c=l.el,u=c.style;Jt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,_n(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ae(t),a=mf(o);let l=o.tag||_e;i=r,r=e.default?Vl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Fi(u,Di(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Fi(u,Di(u,a,s,n)),yf.set(u,u.el.getBoundingClientRect())}return N(l,null,r)}}},Lg=t=>delete t.mode;wf.props;const Dg=wf;function Fg(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function $g(t){vf.set(t,t.el.getBoundingClientRect())}function Ug(t){const e=yf.get(t),n=vf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function zg(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=gf(s);return i.removeChild(s),r}const Du=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Dr(e,n):e},Vg={deep:!0,created(t,e,n){t._assign=Du(n),ff(t,"change",()=>{const s=t._modelValue,i=Wg(t),r=t.checked,o=t._assign;if(B(s)){const a=gh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xo(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Cf(t,r))})},mounted:Fu,beforeUpdate(t,e,n){t._assign=Du(n),Fu(t,e,n)}};function Fu(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=gh(e,s.props.value)>-1:xo(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ao(e,Cf(t,!0)))}function Wg(t){return"_value"in t?t._value:t.value}function Cf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xa={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ai(t,!0),s.enter(t)):s.leave(t,()=>{ai(t,!1)}):ai(t,e))},beforeUnmount(t,{value:e}){ai(t,e)}};function ai(t,e){t.style.display=e?t._vod:"none"}const Bg=$e({patchProp:Rg},_g);let $u;function Hg(){return $u||($u=Qm(Bg))}const jg=(...t)=>{const e=Hg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qg(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qg(t){return Ue(t)?document.querySelector(t):t}var Gg=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ef;const lr=t=>Ef=t,bf=Symbol();function el(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function Kg(){const t=vh(!0),e=t.run(()=>Ne({}));let n=[],s=[];const i=Mo({install(r){lr(i),i._a=r,r.provide(bf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Gg?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const If=()=>{};function Uu(t,e,n,s=If){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&wh()&&S1(i),i}function ws(t,...e){t.slice().forEach(n=>{n(...e)})}const Yg=t=>t();function tl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];el(i)&&el(s)&&t.hasOwnProperty(n)&&!Le(s)&&!Pn(s)?t[n]=tl(i,s):t[n]=s}return t}const Qg=Symbol();function Jg(t){return!el(t)||!t.hasOwnProperty(Qg)}const{assign:yn}=Object;function Zg(t){return!!(Le(t)&&t.effect)}function Xg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=sm(n.state.value[t]);return yn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Mo(Oe(()=>{lr(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=Tf(t,c,e,n,s,!0),l}function Tf(t,e,n={},s,i,r){let o;const a=yn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ne({});let w;function A(D){let V;c=u=!1,typeof D=="function"?(D(s.state.value[t]),V={type:Ei.patchFunction,storeId:t,events:m}):(tl(s.state.value[t],D),V={type:Ei.patchObject,payload:D,storeId:t,events:m});const J=w=Symbol();$l().then(()=>{w===J&&(c=!0)}),u=!0,ws(d,V,s.state.value[t])}const x=r?function(){const{state:V}=n,J=V?V():{};this.$patch(ve=>{yn(ve,J)})}:If;function O(){o.stop(),d=[],h=[],s._s.delete(t)}function G(D,V){return function(){lr(s);const J=Array.from(arguments),ve=[],U=[];function de(le){ve.push(le)}function Qe(le){U.push(le)}ws(h,{args:J,name:D,store:ee,after:de,onError:Qe});let st;try{st=V.apply(this&&this.$id===t?this:ee,J)}catch(le){throw ws(U,le),le}return st instanceof Promise?st.then(le=>(ws(ve,le),le)).catch(le=>(ws(U,le),Promise.reject(le))):(ws(ve,st),st)}}const $={_p:s,$id:t,$onAction:Uu.bind(null,h),$patch:A,$reset:x,$subscribe(D,V={}){const J=Uu(d,D,V.detached,()=>ve()),ve=o.run(()=>Ut(()=>s.state.value[t],U=>{(V.flush==="sync"?u:c)&&D({storeId:t,type:Ei.direct,events:m},U)},yn({},l,V)));return J},$dispose:O},ee=rr($);s._s.set(t,ee);const be=s._a&&s._a.runWithContext||Yg,Se=s._e.run(()=>(o=vh(),be(()=>o.run(e))));for(const D in Se){const V=Se[D];if(Le(V)&&!Zg(V)||Pn(V))r||(_&&Jg(V)&&(Le(V)?V.value=_[D]:tl(V,_[D])),s.state.value[t][D]=V);else if(typeof V=="function"){const J=G(D,V);Se[D]=J,a.actions[D]=V}}return yn(ee,Se),yn(ae(ee),Se),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:D=>{A(V=>{yn(V,D)})}}),s._p.forEach(D=>{yn(ee,o.run(()=>D({store:ee,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(ee.$state,_),c=!0,u=!0,ee}function e_(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Hm();return a=a||(c?zt(bf,null):null),a&&lr(a),a=Ef,a._s.has(s)||(r?Tf(s,e,i,a):Xg(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof window<"u";function t_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function pa(t,e){const n={};for(const s in e){const i=e[s];n[s]=At(i)?i.map(t):t(i)}return n}const bi=()=>{},At=Array.isArray,n_=/\/$/,s_=t=>t.replace(n_,"");function ma(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=a_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function i_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function r_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Fs(e.matched[s],n.matched[i])&&Sf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!o_(t[n],e[n]))return!1;return!0}function o_(t,e){return At(t)?zu(t,e):At(e)?zu(e,t):t===e}function zu(t,e){return At(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function a_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));const ga="";function l_(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),s_(t)}const c_=/^[^#]+#/;function u_(t,e){return t.replace(c_,"#")+e}function d_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const h_=()=>({left:window.pageXOffset,top:window.pageYOffset});function f_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=d_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vu(t,e){return(history.state?history.state.position-e:-1)+t}const nl=new Map;function p_(t,e){nl.set(t,e)}function m_(t){const e=nl.get(t);return nl.delete(t),e}function g_(t=""){let e=[],n=[ga],s=0;t=l_(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:Bi.pop};for(const h of e)h(a,l,d)}const o={location:ga,state:{},base:t,createHref:u_.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[ga],s=0},go(a,l=!0){const c=this.location,u=a<0?Jr.back:Jr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function __(t){return typeof t=="string"||t&&typeof t=="object"}function kf(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var Wu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wu||(Wu={}));function $s(t,e){return Ae(new Error,{type:t,[xf]:!0},e)}function Qt(t,e){return t instanceof Error&&xf in t&&(e==null||!!(t.type&e))}const Bu="[^/]+?",y_={sensitive:!1,strict:!1,start:!0,end:!0},v_=/[.+*?^${}()[\]/\\]/g;function w_(t,e){const n=Ae({},y_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(v_,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:w,optional:A,regexp:x}=h;r.push({name:_,repeatable:w,optional:A});const O=x||Bu;if(O!==Bu){m+=10;try{new RegExp(`(${O})`)}catch($){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+$.message)}}let G=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(G=A&&c.length<2?`(?:/${G})`:"/"+G),A&&(G+="?"),i+=G,m+=20,A&&(m+=-8),w&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:w,optional:A}=m,x=_ in c?c[_]:"";if(At(x)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=At(x)?x.join("/"):x;if(!O)if(A)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function C_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function E_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=C_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Hu(s))return 1;if(Hu(i))return-1}return i.length-s.length}function Hu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const b_={type:0,value:""},I_=/[a-zA-Z0-9_]/;function T_(t){if(!t)return[[]];if(t==="/")return[[b_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:I_.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function S_(t,e,n){const s=w_(T_(t.path),n),i=Ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function k_(t,e){const n=[],s=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=x_(u);_.aliasOf=h&&h.record;const w=Gu(e,u),A=[_];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of G)A.push(Ae({},_,{components:h?h.record.components:_.components,path:$,aliasOf:h?h.record:_}))}let x,O;for(const G of A){const{path:$}=G;if(d&&$[0]!=="/"){const ee=d.record.path,be=ee[ee.length-1]==="/"?"":"/";G.path=d.record.path+($&&be+$)}if(x=S_(G,d,w),h?h.alias.push(x):(O=O||x,O!==x&&O.alias.push(x),m&&u.name&&!qu(x)&&o(u.name)),_.children){const ee=_.children;for(let be=0;be<ee.length;be++)r(ee[be],x,h&&h.children[be])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return O?()=>{o(O)}:bi}function o(u){if(kf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&E_(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Pf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!qu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,w;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw $s(1,{location:u});w=h.record.name,m=Ae(ju(d.params,h.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&ju(u.params,h.keys.map(O=>O.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(O=>O.re.test(_)),h&&(m=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(O=>O.re.test(d.path)),!h)throw $s(1,{location:u,currentLocation:d});w=h.record.name,m=Ae({},d.params,u.params),_=h.stringify(m)}const A=[];let x=h;for(;x;)A.unshift(x.record),x=x.parent;return{name:w,path:_,params:m,matched:A,meta:R_(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ju(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function x_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:P_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function P_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function qu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function R_(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Gu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pf(t,e){return e.children.some(n=>n===t||Pf(t,n))}const Rf=/#/g,A_=/&/g,N_=/\//g,M_=/=/g,O_=/\?/g,Af=/\+/g,L_=/%5B/g,D_=/%5D/g,Nf=/%5E/g,F_=/%60/g,Mf=/%7B/g,$_=/%7C/g,Of=/%7D/g,U_=/%20/g;function Yl(t){return encodeURI(""+t).replace($_,"|").replace(L_,"[").replace(D_,"]")}function z_(t){return Yl(t).replace(Mf,"{").replace(Of,"}").replace(Nf,"^")}function sl(t){return Yl(t).replace(Af,"%2B").replace(U_,"+").replace(Rf,"%23").replace(A_,"%26").replace(F_,"`").replace(Mf,"{").replace(Of,"}").replace(Nf,"^")}function V_(t){return sl(t).replace(M_,"%3D")}function W_(t){return Yl(t).replace(Rf,"%23").replace(O_,"%3F")}function B_(t){return t==null?"":W_(t).replace(N_,"%2F")}function Zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function H_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Af," "),o=r.indexOf("="),a=Zr(o<0?r:r.slice(0,o)),l=o<0?null:Zr(r.slice(o+1));if(a in e){let c=e[a];At(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ku(t){let e="";for(let n in t){const s=t[n];if(n=V_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(At(s)?s.map(r=>r&&sl(r)):[s&&sl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function j_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=At(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const q_=Symbol(""),Yu=Symbol(""),Ql=Symbol(""),Lf=Symbol(""),il=Symbol("");function li(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a($s(4,{from:n,to:e})):d instanceof Error?a(d):__(d)?a($s(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function _a(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(G_(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Cn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=t_(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Cn(h,n,s,r,o)()}))}}return i}function G_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qu(t){const e=zt(Ql),n=zt(Lf),s=Oe(()=>e.resolve(ne(t.to))),i=Oe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Fs.bind(null,u));if(h>-1)return h;const m=Ju(l[c-2]);return c>1&&Ju(u)===m&&d[d.length-1].path!==m?d.findIndex(Fs.bind(null,l[c-2])):h}),r=Oe(()=>i.value>-1&&J_(n.params,s.value.params)),o=Oe(()=>i.value>-1&&i.value===n.matched.length-1&&Sf(n.params,s.value.params));function a(l={}){return Q_(l)?e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(bi):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const K_=Gh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qu,setup(t,{slots:e}){const n=rr(Qu(t)),{options:s}=zt(Ql),i=Oe(()=>({[Zu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Zu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Kl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Y_=K_;function Q_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function J_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!At(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ju(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zu=(t,e,n)=>t??e??n,Z_=Gh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zt(il),i=Oe(()=>t.route||s.value),r=zt(Yu,0),o=Oe(()=>{let c=ne(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Oe(()=>i.value.matched[o.value]);Fr(Yu,Oe(()=>o.value+1)),Fr(q_,a),Fr(il,i);const l=Ne();return Ut(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Fs(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Xu(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,A=Kl(h,Ae({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Xu(n.default,{Component:A,route:c})||A}}});function Xu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Df=Z_;function X_(t){const e=k_(t.routes,t),n=t.parseQuery||H_,s=t.stringifyQuery||Ku,i=t.history,r=li(),o=li(),a=li(),l=em(mn);let c=mn;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,v=>""+v),d=pa.bind(null,B_),h=pa.bind(null,Zr);function m(v,F){let R,W;return kf(v)?(R=e.getRecordMatcher(v),W=F):W=v,e.addRoute(W,R)}function _(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function w(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function x(v,F){if(F=Ae({},F||l.value),typeof v=="string"){const g=ma(n,v,F.path),y=e.resolve({path:g.path},F),C=i.createHref(g.fullPath);return Ae(g,y,{params:h(y.params),hash:Zr(g.hash),redirectedFrom:void 0,href:C})}let R;if("path"in v)R=Ae({},v,{path:ma(n,v.path,F.path).path});else{const g=Ae({},v.params);for(const y in g)g[y]==null&&delete g[y];R=Ae({},v,{params:d(g)}),F.params=d(F.params)}const W=e.resolve(R,F),fe=v.hash||"";W.params=u(h(W.params));const f=i_(s,Ae({},v,{hash:z_(fe),path:W.path})),p=i.createHref(f);return Ae({fullPath:f,hash:fe,query:s===Ku?j_(v.query):v.query||{}},W,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?ma(n,v,l.value.path):Ae({},v)}function G(v,F){if(c!==v)return $s(8,{from:F,to:v})}function $(v){return Se(v)}function ee(v){return $(Ae(O(v),{replace:!0}))}function be(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:R}=F;let W=typeof R=="function"?R(v):R;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=O(W):{path:W},W.params={}),Ae({query:v.query,hash:v.hash,params:"path"in W?{}:v.params},W)}}function Se(v,F){const R=c=x(v),W=l.value,fe=v.state,f=v.force,p=v.replace===!0,g=be(R);if(g)return Se(Ae(O(g),{state:typeof g=="object"?Ae({},fe,g.state):fe,force:f,replace:p}),F||R);const y=R;y.redirectedFrom=F;let C;return!f&&r_(s,W,R)&&(C=$s(16,{to:y,from:W}),Mt(W,W,!0,!1)),(C?Promise.resolve(C):J(y,W)).catch(E=>Qt(E)?Qt(E,2)?E:hn(E):he(E,y,W)).then(E=>{if(E){if(Qt(E,2))return Se(Ae({replace:p},O(E.to),{state:typeof E.to=="object"?Ae({},fe,E.to.state):fe,force:f}),F||y)}else E=U(y,W,!0,p,fe);return ve(y,W,E),E})}function D(v,F){const R=G(v,F);return R?Promise.reject(R):Promise.resolve()}function V(v){const F=_s.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(v):v()}function J(v,F){let R;const[W,fe,f]=e2(v,F);R=_a(W.reverse(),"beforeRouteLeave",v,F);for(const g of W)g.leaveGuards.forEach(y=>{R.push(Cn(y,v,F))});const p=D.bind(null,v,F);return R.push(p),Ze(R).then(()=>{R=[];for(const g of r.list())R.push(Cn(g,v,F));return R.push(p),Ze(R)}).then(()=>{R=_a(fe,"beforeRouteUpdate",v,F);for(const g of fe)g.updateGuards.forEach(y=>{R.push(Cn(y,v,F))});return R.push(p),Ze(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(At(g.beforeEnter))for(const y of g.beforeEnter)R.push(Cn(y,v,F));else R.push(Cn(g.beforeEnter,v,F));return R.push(p),Ze(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=_a(f,"beforeRouteEnter",v,F),R.push(p),Ze(R))).then(()=>{R=[];for(const g of o.list())R.push(Cn(g,v,F));return R.push(p),Ze(R)}).catch(g=>Qt(g,8)?g:Promise.reject(g))}function ve(v,F,R){a.list().forEach(W=>V(()=>W(v,F,R)))}function U(v,F,R,W,fe){const f=G(v,F);if(f)return f;const p=F===mn,g=Es?history.state:{};R&&(W||p?i.replace(v.fullPath,Ae({scroll:p&&g&&g.scroll},fe)):i.push(v.fullPath,fe)),l.value=v,Mt(v,F,R,p),hn()}let de;function Qe(){de||(de=i.listen((v,F,R)=>{if(!Ir.listening)return;const W=x(v),fe=be(W);if(fe){Se(Ae(fe,{replace:!0}),W).catch(bi);return}c=W;const f=l.value;Es&&p_(Vu(f.fullPath,R.delta),h_()),J(W,f).catch(p=>Qt(p,12)?p:Qt(p,2)?(Se(p.to,W).then(g=>{Qt(g,20)&&!R.delta&&R.type===Bi.pop&&i.go(-1,!1)}).catch(bi),Promise.reject()):(R.delta&&i.go(-R.delta,!1),he(p,W,f))).then(p=>{p=p||U(W,f,!1),p&&(R.delta&&!Qt(p,8)?i.go(-R.delta,!1):R.type===Bi.pop&&Qt(p,20)&&i.go(-1,!1)),ve(W,f,p)}).catch(bi)}))}let st=li(),le=li(),we;function he(v,F,R){hn(v);const W=le.list();return W.length?W.forEach(fe=>fe(v,F,R)):console.error(v),Promise.reject(v)}function Yt(){return we&&l.value!==mn?Promise.resolve():new Promise((v,F)=>{st.add([v,F])})}function hn(v){return we||(we=!v,Qe(),st.list().forEach(([F,R])=>v?R(v):F()),st.reset()),v}function Mt(v,F,R,W){const{scrollBehavior:fe}=t;if(!Es||!fe)return Promise.resolve();const f=!R&&m_(Vu(v.fullPath,0))||(W||!R)&&history.state&&history.state.scroll||null;return $l().then(()=>fe(v,F,f)).then(p=>p&&f_(p)).catch(p=>he(p,v,F))}const at=v=>i.go(v);let gs;const _s=new Set,Ir={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:A,getRoutes:w,resolve:x,options:t,push:$,replace:ee,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Yt,install(v){const F=this;v.component("RouterLink",Y_),v.component("RouterView",Df),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),Es&&!gs&&l.value===mn&&(gs=!0,$(i.location).catch(fe=>{}));const R={};for(const fe in mn)Object.defineProperty(R,fe,{get:()=>l.value[fe],enumerable:!0});v.provide(Ql,F),v.provide(Lf,Ah(R)),v.provide(il,l);const W=v.unmount;_s.add(v),v.unmount=function(){_s.delete(v),_s.size<1&&(c=mn,de&&de(),de=null,l.value=mn,gs=!1,we=!1),W()}}};function Ze(v){return v.reduce((F,R)=>F.then(()=>V(R)),Promise.resolve())}return Ir}function e2(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Fs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Fs(c,l))||i.push(l))}return[n,s,i]}/**
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
 */const k=function(t,e){if(!t)throw Qs(e)},Qs=function(t){return new Error("Firebase Database ("+Ff.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const $f=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},t2=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new n2;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(t){const e=$f(t);return Jl.encodeByteArray(e,!0)},Xr=function(t){return Uf(t).replace(/\./g,"")},eo=function(t){try{return Jl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s2(t){return zf(void 0,t)}function zf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i2(n)||(t[n]=zf(t[n],e[n]));return t}function i2(t){return t!=="__proto__"}/**
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
 */function r2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o2=()=>r2().__FIREBASE_DEFAULTS__,a2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eo(t[1]);return e&&JSON.parse(e)},Zl=()=>{try{return o2()||a2()||l2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vf=t=>{var e,n;return(n=(e=Zl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},c2=t=>{const e=Vf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wf=()=>{var t;return(t=Zl())===null||t===void 0?void 0:t.config},Bf=t=>{var e;return(e=Zl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function u2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xr(JSON.stringify(n)),Xr(JSON.stringify(o)),a].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function d2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h2(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jf(){return Ff.NODE_ADMIN===!0}function f2(){try{return typeof indexedDB=="object"}catch{return!1}}function p2(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const m2="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=m2,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?g2(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,a,s)}}function g2(t,e){return t.replace(_2,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _2=/\{\$([^}]+)}/g;/**
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
 */function Hi(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
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
 */const qf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Hi(eo(r[0])||""),n=Hi(eo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},y2=function(t){const e=qf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},v2=function(t){const e=qf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function no(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ed(r)&&ed(o)){if(!no(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function Js(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class w2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function C2(t,e){const n=new E2(t,e);return n.subscribe.bind(n)}class E2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");b2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}function ec(t,e){return`${t} failed: ${e} argument `}/**
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
 */const I2=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gn="[DEFAULT]";/**
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
 */class T2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k2(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:S2(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S2(t){return t===Gn?void 0:t}function k2(t){return t.instantiationMode==="EAGER"}/**
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
 */class x2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const P2={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},R2=ge.INFO,A2={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},N2=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=A2[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=R2,this._logHandler=N2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const M2=(t,e)=>e.some(n=>t instanceof n);let td,nd;function O2(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L2(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gf=new WeakMap,ol=new WeakMap,Kf=new WeakMap,va=new WeakMap,nc=new WeakMap;function D2(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gf.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function F2(t){if(ol.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $2(t){al=t(al)}function U2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return Kf.set(s,e.sort?e.sort():[e]),Nn(s)}:L2().includes(t)?function(...e){return t.apply(wa(this),e),Nn(Gf.get(this))}:function(...e){return Nn(t.apply(wa(this),e))}}function z2(t){return typeof t=="function"?U2(t):(t instanceof IDBTransaction&&F2(t),M2(t,O2())?new Proxy(t,al):t)}function Nn(t){if(t instanceof IDBRequest)return D2(t);if(va.has(t))return va.get(t);const e=z2(t);return e!==t&&(va.set(t,e),nc.set(e,t)),e}const wa=t=>nc.get(t);function V2(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const W2=["get","getKey","getAll","getAllKeys","count"],B2=["put","add","delete","clear"],Ca=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=B2.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||W2.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ca.set(e,r),r}$2(t=>({...t,get:(e,n,s)=>sd(e,n)||t.get(e,n,s),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
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
 */class H2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j2(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",id="0.9.15";/**
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
 */const ls=new tc("@firebase/app"),q2="@firebase/app-compat",G2="@firebase/analytics-compat",K2="@firebase/analytics",Y2="@firebase/app-check-compat",Q2="@firebase/app-check",J2="@firebase/auth",Z2="@firebase/auth-compat",X2="@firebase/database",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",ry="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",ly="@firebase/performance-compat",cy="@firebase/remote-config",uy="@firebase/remote-config-compat",dy="@firebase/storage",hy="@firebase/storage-compat",fy="@firebase/firestore",py="@firebase/firestore-compat",my="firebase",gy="10.1.0";/**
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
 */const cl="[DEFAULT]",_y={[ll]:"fire-core",[q2]:"fire-core-compat",[K2]:"fire-analytics",[G2]:"fire-analytics-compat",[Q2]:"fire-app-check",[Y2]:"fire-app-check-compat",[J2]:"fire-auth",[Z2]:"fire-auth-compat",[X2]:"fire-rtdb",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[ry]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[ly]:"fire-perf-compat",[cy]:"fire-rc",[uy]:"fire-rc-compat",[dy]:"fire-gcs",[hy]:"fire-gcs-compat",[fy]:"fire-fst",[py]:"fire-fst-compat","fire-js":"fire-js",[my]:"fire-js-all"};/**
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
 */const so=new Map,ul=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(ul.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of so.values())yy(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new cr("app","Firebase",vy);/**
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
 */class wy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=gy;function Yf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=Wf()),!n)throw Mn.create("no-options");const r=so.get(i);if(r){if(no(n,r.options)&&no(s,r.config))return r;throw Mn.create("duplicate-app",{appName:i})}const o=new x2(i);for(const l of ul.values())o.addComponent(l);const a=new wy(n,s,o);return so.set(i,a),a}function Qf(t=cl){const e=so.get(t);if(!e&&t===cl&&Wf())return Yf();if(!e)throw Mn.create("no-app",{appName:t});return e}function On(t,e,n){var s;let i=(s=_y[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}zs(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cy="firebase-heartbeat-database",Ey=1,ji="firebase-heartbeat-store";let Ea=null;function Jf(){return Ea||(Ea=V2(Cy,Ey,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ji)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function by(t){try{return await(await Jf()).transaction(ji).objectStore(ji).get(Zf(t))}catch(e){if(e instanceof Wn)ls.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function rd(t,e){try{const s=(await Jf()).transaction(ji,"readwrite");await s.objectStore(ji).put(e,Zf(t)),await s.done}catch(n){if(n instanceof Wn)ls.warn(n.message);else{const s=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(s.message)}}}function Zf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Iy=1024,Ty=30*24*60*60*1e3;class Sy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ty}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=od(),{heartbeatsToSend:n,unsentEntries:s}=ky(this._heartbeatsCache.heartbeats),i=Xr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function od(){return new Date().toISOString().substring(0,10)}function ky(t,e=Iy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ad(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ad(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f2()?p2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await by(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ad(t){return Xr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Py(t){zs(new as("platform-logger",e=>new H2(e),"PRIVATE")),zs(new as("heartbeat",e=>new Sy(e),"PRIVATE")),On(ll,id,t),On(ll,id,"esm2017"),On("fire-js","")}Py("");var Ry="firebase",Ay="10.1.0";/**
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
 */On(Ry,Ay,"app");const Ny={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},Xf=Yf(Ny);function ic(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function e0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const My=e0,t0=new cr("auth","Firebase",e0());/**
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
 */const io=new tc("@firebase/auth");function Oy(t,...e){io.logLevel<=ge.WARN&&io.warn(`Auth (${Zs}): ${t}`,...e)}function zr(t,...e){io.logLevel<=ge.ERROR&&io.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw rc(t,...e)}function Vt(t,...e){return rc(t,...e)}function Ly(t,e,n){const s=Object.assign(Object.assign({},My()),{[e]:n});return new cr("auth","Firebase",s).create(e,{appName:t.name})}function rc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return t0.create(t,...e)}function K(t,e,...n){if(!t)throw rc(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zr(e),new Error(e)}function an(t,e){t||tn(e)}/**
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
 */function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dy(){return ld()==="http:"||ld()==="https:"}function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||d2()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=Xl()||Hf()}get(){return Fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class n0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zy=new ur(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,i={}){return s0(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n0.fetch()(i0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function s0(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Uy),e);try{const i=new Vy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ly(t,u,c);Nt(t,u)}}catch(i){if(i instanceof Wn)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,s,i={}){const r=await Xs(t,e,n,s,i);return"mfaPendingCredential"in r&&Nt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function i0(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?oc(t.config,i):`${t.config.apiScheme}://${i}`}class Vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Vt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Wy(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function By(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hy(t,e=!1){const n=pt(t),s=await n.getIdToken(e),i=ac(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ii(ba(i.auth_time)),issuedAtTime:Ii(ba(i.iat)),expirationTime:Ii(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function ac(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=eo(n);return i?JSON.parse(i):(zr("Failed to decode base64 JWT payload"),null)}catch(i){return zr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jy(t){const e=ac(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wn&&qy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class r0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ro(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qi(t,By(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qy(r.providerUserInfo):[],a=Yy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new r0(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ky(t){const e=pt(t);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Qy(t){return t.map(e=>{var{providerId:n}=e,s=ic(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Jy(t,e){const n=await s0(t,{},async()=>{const s=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=i0(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Jy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Gi;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function gn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new r0(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hy(this,e)}reload(){return Ky(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ro(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qi(this,Wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:$,isAnonymous:ee,providerData:be,stsTokenManager:Se}=n;K(G&&Se,e,"internal-error");const D=Gi.fromJSON(this.name,Se);K(typeof G=="string",e,"internal-error"),gn(d,e.name),gn(h,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof ee=="boolean",e,"internal-error"),gn(m,e.name),gn(_,e.name),gn(w,e.name),gn(A,e.name),gn(x,e.name),gn(O,e.name);const V=new rs({uid:G,auth:e,email:h,emailVerified:$,displayName:d,isAnonymous:ee,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:D,createdAt:x,lastLoginAt:O});return be&&Array.isArray(be)&&(V.providerData=be.map(J=>Object.assign({},J))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(e,n,s=!1){const i=new Gi;i.updateFromServerResponse(n);const r=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ro(r),r}}/**
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
 */class o0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o0.type="NONE";const ud=o0;/**
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
 */function Vr(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Vr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Vr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ps(nn(ud),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||nn(ud);const o=Vr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=rs._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ps(r,e,s))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d0(e))return"Blackberry";if(h0(e))return"Webos";if(lc(e))return"Safari";if((e.includes("chrome/")||l0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function a0(t=nt()){return/firefox\//i.test(t)}function lc(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l0(t=nt()){return/crios\//i.test(t)}function c0(t=nt()){return/iemobile/i.test(t)}function u0(t=nt()){return/android/i.test(t)}function d0(t=nt()){return/blackberry/i.test(t)}function h0(t=nt()){return/webos/i.test(t)}function jo(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zy(t=nt()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xy(){return h2()&&document.documentMode===10}function f0(t=nt()){return jo(t)||u0(t)||h0(t)||d0(t)||/windows phone/i.test(t)||c0(t)}function ev(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function p0(t,e=[]){let n;switch(t){case"Browser":n=dd(nt());break;case"Worker":n=`${dd(nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${s}`}async function m0(t,e){return Xs(t,"GET","/v2/recaptchaConfig",dr(t,e))}function hd(t){return t!==void 0&&t.enterprise!==void 0}class g0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function tv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Vt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",tv().appendChild(s)})}function nv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sv="https://www.google.com/recaptcha/enterprise.js?render=",iv="recaptcha-enterprise",rv="NO_RECAPTCHA";class y0{constructor(e){this.type=iv,this.auth=hr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{m0(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new g0(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;hd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(rv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&hd(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_0(sv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fd(t,e,n,s=!1){const i=new y0(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class ov{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class av{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new ov(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}async initializeRecaptchaConfig(){const e=await m0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new g0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new y0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Oy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hr(t){return pt(t)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=C2(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function lv(t,e){const n=sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(no(r,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function cv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uv(t,e,n){const s=hr(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=v0(e),{host:o,port:a}=dv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hv()}function v0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dv(t){const e=v0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:md(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:md(o)}}}function md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function fv(t,e){return Xs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pv(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function mv(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
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
 */class Ki extends cc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ki(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ki(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await fd(e,s,"signInWithPassword");return Ia(e,i)}else return Ia(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await fd(e,s,"signInWithPassword");return Ia(e,r)}else return Promise.reject(i)});case"emailLink":return pv(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mv(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const gv="http://localhost";class cs extends cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ic(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new cs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:gv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
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
 */function _v(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yv(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,s=mi(gi(t)).deep_link_id;return(s?mi(gi(s)).link:null)||s||n||e||t}class uc{constructor(e){var n,s,i,r,o,a;const l=mi(gi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=_v((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yv(e);try{return new uc(n)}catch{return null}}}/**
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
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return Ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=uc.parseLink(n);return K(s,"argument-error"),Ki._fromEmailAndCode(e,s.code,s.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class w0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fr extends w0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class En extends fr{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
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
 */class bn extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class In extends fr{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Tn extends fr{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class Vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await rs._fromIdTokenResponse(e,s,i),o=gd(s);return new Vs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=gd(s);return new Vs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oo extends Wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new oo(e,n,s,i)}}function C0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(t,r,e,s):r})}async function vv(t,e,n=!1){const s=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vs._forOperation(t,"link",s)}/**
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
 */async function wv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await qi(t,C0(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=ac(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Vs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),r}}/**
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
 */async function E0(t,e,n=!1){const s="signIn",i=await C0(t,s,e),r=await Vs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Cv(t,e){return E0(hr(t),e)}function Ev(t,e,n){return Cv(pt(t),ei.credential(e,n))}function bv(t,e,n,s){return pt(t).onIdTokenChanged(e,n,s)}function Iv(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function Tv(t,e,n,s){return pt(t).onAuthStateChanged(e,n,s)}const ao="__sak";/**
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
 */class b0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Sv(){const t=nt();return lc(t)||jo(t)}const kv=1e3,xv=10;class I0 extends b0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sv()&&ev(),this.fallbackToPolling=f0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Xy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I0.type="LOCAL";const Pv=I0;/**
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
 */class T0 extends b0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const S0=T0;/**
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
 */function Rv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Rv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */class Av{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wt(){return window}function Nv(t){Wt().location.href=t}/**
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
 */function k0(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Mv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ov(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lv(){return k0()?self:null}/**
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
 */const x0="firebaseLocalStorageDb",Dv=1,lo="firebaseLocalStorage",P0="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Go(t,e){return t.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function Fv(){const t=indexedDB.deleteDatabase(x0);return new pr(t).toPromise()}function hl(){const t=indexedDB.open(x0,Dv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(lo,{keyPath:P0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(lo)?e(s):(s.close(),await Fv(),e(await hl()))})})}async function _d(t,e,n){const s=Go(t,!0).put({[P0]:e,value:n});return new pr(s).toPromise()}async function $v(t,e){const n=Go(t,!1).get(e),s=await new pr(n).toPromise();return s===void 0?null:s.value}function yd(t,e){const n=Go(t,!0).delete(e);return new pr(n).toPromise()}const Uv=800,zv=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(Lv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mv(),!this.activeServiceWorker)return;this.sender=new Av(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ov()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await _d(e,ao,"1"),await yd(e,ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_d(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$v(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Go(i,!1).getAll();return new pr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const Vv=R0;new ur(3e4,6e4);/**
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
 */function Wv(t,e){return e?nn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hc extends cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bv(t){return E0(t.auth,new hc(t),t.bypassAuthState)}function Hv(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),wv(n,new hc(t),t.bypassAuthState)}async function jv(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),vv(n,new hc(t),t.bypassAuthState)}/**
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
 */class A0{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bv;case"linkViaPopup":case"linkViaRedirect":return jv;case"reauthViaPopup":case"reauthViaRedirect":return Hv;default:Nt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qv=new ur(2e3,1e4);class Is extends A0{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qv.get())};e()}}Is.currentPopupAction=null;/**
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
 */const Gv="pendingRedirect",Wr=new Map;class Kv extends A0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const s=await Yv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yv(t,e){const n=Zv(e),s=Jv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Qv(t,e){Wr.set(t._key(),e)}function Jv(t){return nn(t._redirectPersistence)}function Zv(t){return Vr(Gv,t.config.apiKey,t.name)}async function Xv(t,e,n=!1){const s=hr(t),i=Wv(s,e),o=await new Kv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ew=10*60*1e3;class tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!N0(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ew&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N0(t);default:return!1}}/**
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
 */async function sw(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rw=/^https?/;async function ow(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sw(t);for(const n of e)try{if(aw(n))return}catch{}Nt(t,"unauthorized-domain")}function aw(t){const e=dl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rw.test(n))return!1;if(iw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const lw=new ur(3e4,6e4);function wd(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cw(t){return new Promise((e,n)=>{var s,i,r;function o(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(Vt(t,"network-request-failed"))},timeout:lw.get()})}if(!((i=(s=Wt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Wt().gapi)===null||r===void 0)&&r.load)o();else{const a=nv("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},_0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Br=null,e})}let Br=null;function uw(t){return Br=Br||cw(t),Br}/**
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
 */const dw=new ur(5e3,15e3),hw="__/auth/iframe",fw="emulator/auth/iframe",pw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gw(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oc(e,fw):`https://${t.config.authDomain}/${hw}`,s={apiKey:e.apiKey,appName:t.name,v:Zs},i=mw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Js(s).slice(1)}`}async function _w(t){const e=await uw(t),n=Wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:gw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Wt().setTimeout(()=>{r(o)},dw.get());function l(){Wt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const yw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vw=500,ww=600,Cw="_blank",Ew="http://localhost";class Cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bw(t,e,n,s=vw,i=ww){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=nt().toLowerCase();n&&(a=l0(c)?Cw:n),a0(c)&&(e=e||Ew,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Zy(c)&&a!=="_self")return Iw(e||"",a),new Cd(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new Cd(d)}function Iw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Tw="__/auth/handler",Sw="emulator/auth/handler",kw=encodeURIComponent("fac");async function Ed(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zs,eventId:i};if(e instanceof w0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof fr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kw}=${encodeURIComponent(l)}`:"";return`${xw(t)}?${Js(a).slice(1)}${c}`}function xw({config:t}){return t.emulator?oc(t,Sw):`https://${t.authDomain}/${Tw}`}/**
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
 */const Ta="webStorageSupport";class Pw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S0,this._completeRedirectFn=Xv,this._overrideRedirectResult=Qv}async _openPopup(e,n,s,i){var r;an((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ed(e,n,s,dl(),i);return bw(e,o,dc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Ed(e,n,s,dl(),i);return Nv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(an(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _w(e),s=new tw(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ta];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ow(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f0()||lc()||jo()}}const Rw=Pw;var bd="@firebase/auth",Id="1.1.0";/**
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
 */class Aw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mw(t){zs(new as("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(t)},c=new av(s,i,r,l);return cv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new as("auth-internal",e=>{const n=hr(e.getProvider("auth").getImmediate());return(s=>new Aw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(bd,Id,Nw(t)),On(bd,Id,"esm2017")}/**
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
 */const Ow=5*60,Lw=Bf("authIdTokenMaxAge")||Ow;let Td=null;const Dw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Lw)return;const i=n==null?void 0:n.token;Td!==i&&(Td=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fw(t=Qf()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lv(t,{popupRedirectResolver:Rw,persistence:[Vv,Pv,S0]}),s=Bf("authTokenSyncURL");if(s){const r=Dw(s);Iv(n,r,()=>r(n.currentUser)),bv(n,o=>r(o))}const i=Vf("auth");return i&&uv(n,`http://${i}`),n}Mw("Browser");const fc=Fw(Xf),co=Ne({}),vn=Ne({}),Yi=new Ne(!1);Tv(fc,async t=>{if(t){co.value=t,vn.value=await Yb(`users/${t.uid}`);for(const{observable:e,path:n}of Zp)if(vn.value["game-data"]&&vn.value["game-data"]["tileswap-naenae"]&&vn.value["game-data"]["tileswap-naenae"][n]){const s=vn.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=vn.value["game-data"]["tileswap-naenae"][n]}}else co.value={},vn.value={};Yi.value=!0});const Ko=Oe(()=>co.value);Oe(()=>vn.value);const mr=Oe(()=>Object.keys(co.value).length>0),$w=async(t,e)=>await Ev(fc,t,e),fl=async()=>await fc.signOut(),Sd="@firebase/database",kd="1.0.1";/**
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
 */let M0="";function Uw(t){M0=t}/**
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
 */class zw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Vw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const O0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zw(e)}}catch{}return new Vw},Xn=O0("localStorage"),pl=O0("sessionStorage");/**
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
 */const As=new tc("@firebase/database"),Ww=function(){let t=1;return function(){return t++}}(),L0=function(t){const e=I2(t),n=new w2;n.update(e);const s=n.digest();return Jl.encodeByteArray(s)},gr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gr.apply(null,s):typeof s=="object"?e+=Be(s):e+=s,e+=" "}return e};let os=null,xd=!0;const Bw=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(As.logLevel=ge.VERBOSE,os=As.log.bind(As),e&&pl.set("logging_enabled",!0)):typeof t=="function"?os=t:(os=null,pl.remove("logging_enabled"))},Xe=function(...t){if(xd===!0&&(xd=!1,os===null&&pl.get("logging_enabled")===!0&&Bw(!0)),os){const e=gr.apply(null,t);os(e)}},_r=function(t){return function(...e){Xe(t,...e)}},ml=function(...t){const e="FIREBASE INTERNAL ERROR: "+gr(...t);As.error(e)},ln=function(...t){const e=`FIREBASE FATAL ERROR: ${gr(...t)}`;throw As.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+gr(...t);As.warn(e)},Hw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},D0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ws="[MIN_NAME]",us="[MAX_NAME]",ti=function(t,e){if(t===e)return 0;if(t===Ws||e===us)return-1;if(e===Ws||t===us)return 1;{const n=Pd(t),s=Pd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},qw=function(t,e){return t===e?0:t<e?-1:1},ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},pc=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Be(e[s]),n+=":",n+=pc(t[e[s]]);return n+="}",n},F0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $0=function(t){k(!D0(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Gw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Qw=new RegExp("^-?(0*)\\d{1,10}$"),Jw=-2147483648,Zw=2147483647,Pd=function(t){if(Qw.test(t)){const e=Number(t);if(e>=Jw&&e<=Zw)return e}return null},ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},Xw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ns.OWNER="owner";/**
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
 */const mc="5",U0="v",z0="s",V0="r",W0="f",B0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,H0="ls",j0="p",gl="ac",q0="websocket",G0="long_polling";/**
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
 */class K0{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Y0(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===q0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===G0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nC(t)&&(n.ns=t.namespace);const i=[];return ft(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class sC{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s2(this.counters_)}}/**
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
 */const Sa={},ka={};function gc(t){const e=t.toString();return Sa[e]||(Sa[e]=new sC),Sa[e]}function iC(t,e){const n=t.toString();return ka[n]||(ka[n]=e()),ka[n]}/**
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
 */class rC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ni(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Rd="start",oC="close",aC="pLPCommand",lC="pRTLPCB",Q0="id",J0="pw",Z0="ser",cC="cb",uC="seg",dC="ts",hC="d",fC="dframe",X0=1870,ep=30,pC=X0-ep,mC=25e3,gC=3e4;class Ts{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_r(e),this.stats_=gc(n),this.urlFn=l=>(this.appCheckToken&&(l[gl]=this.appCheckToken),Y0(n,G0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gC)),jw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _c((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rd)this.id=a,this.password=l;else if(o===oC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Rd]="t",s[Z0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[U0]=mc,this.transportSessionId&&(s[z0]=this.transportSessionId),this.lastSessionId&&(s[H0]=this.lastSessionId),this.applicationId&&(s[j0]=this.applicationId),this.appCheckToken&&(s[gl]=this.appCheckToken),typeof location<"u"&&location.hostname&&B0.test(location.hostname)&&(s[V0]=W0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Gw()&&!Kw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uf(n),i=F0(s,pC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fC]="t",s[Q0]=e,s[J0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _c{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ww(),window[aC+this.uniqueCallbackIdentifier]=e,window[lC+this.uniqueCallbackIdentifier]=n,this.myIFrame=_c.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xe("frame writing exception"),a.stack&&Xe(a.stack),Xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Q0]=this.myID,e[J0]=this.myPW,e[Z0]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ep+s.length<=X0;){const o=this.pendingSegs.shift();s=s+"&"+uC+i+"="+o.seg+"&"+dC+i+"="+o.ts+"&"+hC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const _C=16384,yC=45e3;let uo=null;typeof MozWebSocket<"u"?uo=MozWebSocket:typeof WebSocket<"u"&&(uo=WebSocket);class bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_r(this.connId),this.stats_=gc(n),this.connURL=bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[U0]=mc,typeof location<"u"&&location.hostname&&B0.test(location.hostname)&&(o[V0]=W0),n&&(o[z0]=n),s&&(o[H0]=s),i&&(o[gl]=i),r&&(o[j0]=r),Y0(e,q0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let s;jf(),this.mySock=new uo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&uo!==null&&!bt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=F0(n,_C);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
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
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ts,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bt&&bt.isAvailable();let s=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bt];else{const i=this.transports_=[];for(const r of Qi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
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
 */const vC=6e4,wC=5e3,CC=10*1024,EC=100*1024,xa="t",Ad="d",bC="s",Nd="r",IC="e",Md="o",Od="a",Ld="n",Dd="p",TC="h";class SC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_r("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xa in e){const n=e[xa];n===Od?this.upgradeIfSecondaryHealthy_():n===Nd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Md&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ci("t",e),s=ci("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Od,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ld,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ci("t",e),s=ci("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ci(xa,e);if(Ad in e){const s=e[Ad];if(n===TC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ld){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bC?this.onConnectionShutdown_(s):n===Nd?this.onReset_(s):n===IC?ml("Server Error: "+s):n===Md?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ml("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mc!==s&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class np{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ho extends np{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ho}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fd=32,$d=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new Ee("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Un(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function sp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ip(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function He(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ee(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return rt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function op(t,e){if(Un(t)!==Un(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Un(t)>Un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class xC{constructor(e,n){this.errorPrefix_=n,this.parts_=ip(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bo(this.parts_[s]);ap(this)}}function PC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bo(e),ap(t)}function RC(t){const e=t.parts_.pop();t.byteLength_-=Bo(e),t.parts_.length>0&&(t.byteLength_-=1)}function ap(t){if(t.byteLength_>$d)throw new Error(t.errorPrefix_+"has a key path longer than "+$d+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fd+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yc extends np{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yc}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ui=1e3,AC=60*5*1e3,Ud=30*1e3,NC=1.3,MC=3e4,OC="server_kill",zd=3;class rn extends tp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rn.nextPersistentConnectionId_++,this.log_=_r("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=AC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ho.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Be(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Wo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;rn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=Us(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||v2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ud)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=y2(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ml("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MC&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new SC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{ut(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(OC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),l())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rl(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>pc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zd&&(this.reconnectDelay_=Ud,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+M0.replace(/\./g,"-")]=1,Xl()?e["framework.cordova"]=1:Hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ho.getInstance().currentlyOnline();return rl(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
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
 */class Yo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(Ws,e),i=new te(Ws,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
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
 */let Mr;class lp extends Yo{static get __EMPTY_NODE(){return Mr}static set __EMPTY_NODE(e){Mr=e}compare(e,n){return ti(e.name,n.name)}isDefinedOn(e){throw Qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(us,Mr)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Mr)}toString(){return".key"}}const Ms=new lp;/**
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
 */class Or{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??ct.EMPTY_NODE,this.right=r??ct.EMPTY_NODE}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class LC{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Or(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Or(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new LC;/**
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
 */function DC(t,e){return ti(t.name,e.name)}function vc(t,e){return ti(t,e)}/**
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
 */let _l;function FC(t){_l=t}const cp=function(t){return typeof t=="number"?"number:"+$0(t):"string:"+t},up=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else k(t===_l||t.isEmpty(),"priority of unexpected type.");k(t===_l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vd;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),up(this.priorityNode_)}static set __childrenNodeConstructor(e){Vd=e}static get __childrenNodeConstructor(){return Vd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$0(this.value_):e+=this.value_,this.lazyHash_=L0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),r=qe.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dp,hp;function $C(t){dp=t}function UC(t){hp=t}class zC extends Yo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ti(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(us,new qe("[PRIORITY-POST]",hp))}makePost(e,n){const s=dp(e);return new te(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new zC;/**
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
 */const VC=Math.log(2);class WC{constructor(e){const n=r=>parseInt(Math.log(r)/VC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),w=i(m+1,c);return d=t[m],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,_,w)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const A=d-_,x=d;d-=_;const O=i(A+1,x),G=t[A],$=n?n(G):G;m(new Ge($,G.node,w,null,O))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),A=Math.pow(2,l.count-(_+1));w?h(A,Ge.BLACK):(h(A,Ge.BLACK),h(A,Ge.RED))}return u},o=new WC(t.length),a=r(o);return new ct(s||e,a)};/**
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
 */let Pa;const Cs={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Cs&&Me,"ChildrenNode.ts has not been loaded"),Pa=Pa||new sn({".priority":Cs},{".priority":Me}),Pa}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fo(s,e.getCompare()):a=Cs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new sn(u,c)}addToIndexes(e,n){const s=to(this.indexes_,(i,r)=>{const o=Us(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Cs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fo(a,o.getCompare())}else return Cs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=to(this.indexes_,i=>{if(i===Cs)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new sn(s,this.indexSet_)}}/**
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
 */let di;class q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&up(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return di||(di=new q(new ct(vc),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||di}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?di:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?di:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{k(re(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cp(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":L0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yr?-1:0}withIndex(e){if(e===Ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),i=n.getIterator(Me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ms?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BC extends q{constructor(){super(new ct(vc),q.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const yr=new BC;Object.defineProperties(te,{MIN:{value:new te(Ws,q.EMPTY_NODE)},MAX:{value:new te(us,yr)}});lp.__EMPTY_NODE=q.EMPTY_NODE;qe.__childrenNodeConstructor=q;FC(yr);UC(yr);/**
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
 */const HC=!0;function Ke(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Ke(e))}if(!(t instanceof Array)&&HC){const n=[];let s=!1;if(ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ke(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=fo(n,DC,o=>o.name,vc);if(s){const o=fo(n,Me.getCompare());return new q(r,Ke(e),new sn({".priority":o},{".priority":Me}))}else return new q(r,Ke(e),sn.Default)}else{let n=q.EMPTY_NODE;return ft(t,(s,i)=>{if(un(t,s)&&s.substring(0,1)!=="."){const r=Ke(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ke(e))}}$C(Ke);/**
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
 */class jC extends Yo{constructor(e){super(),this.indexPath_=e,k(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ti(e.name,n.name):r}makePost(e,n){const s=Ke(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,yr);return new te(us,e)}toString(){return ip(this.indexPath_,0).join("/")}}/**
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
 */class qC extends Yo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ti(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Ke(e);return new te(n,s)}toString(){return".value"}}const GC=new qC;/**
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
 */function fp(t){return{type:"value",snapshotNode:t}}function Bs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function KC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ji(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bs(n,s)):o.trackChildChange(Zi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ji(i,r))}),n.isLeafNode()||n.forEachChild(Me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Zi(i,r,o))}else s.trackChildChange(Bs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xi{constructor(e){this.indexedFilter_=new wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xi.getStartPost_(e),this.endPost_=Xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Me,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class YC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new te(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Zi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ji(n,d));const w=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Bs(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ji(c.name,c.node)),r.trackChildChange(Bs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
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
 */class Cc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ws}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Cc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QC(t){return t.loadsAllData()?new wc(t.getIndex()):t.hasLimit()?new YC(t):new Xi(t)}function Wd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===GC?n="$value":t.index_===Ms?n="$key":(k(t.index_ instanceof jC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Be(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Be(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Be(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
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
 */class po extends tp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_r("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=po.getListenId_(e,s),a={};this.listens_[o]=a;const l=Wd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Us(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=po.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wd(e._queryParams),s=e._path.toString(),i=new Wo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Js(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hi(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class JC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function mo(){return{value:null,children:new Map}}function pp(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,mo());const i=t.children.get(s);e=Te(e),pp(i,e,n)}}function yl(t,e,n){t.value!==null?n(e,t.value):ZC(t,(s,i)=>{const r=new Ee(e.toString()+"/"+s);yl(i,r,n)})}function ZC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class XC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ft(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Hd=10*1e3,eE=30*1e3,tE=5*60*1e3;class nE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XC(e);const s=Hd+(eE-Hd)*Math.random();Ti(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ft(e,(i,r)=>{r>0&&un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*tE))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function mp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ec(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class go{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=mp()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new go(ue(),n,this.revert)}}else return k(re(this.path)===e,"operationForChild called for unrelated child."),new go(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class er{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new er(this.source,ue()):new er(this.source,Te(this.path))}}/**
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
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return se(this.path)?new ds(this.source,ue(),this.snap.getImmediateChild(e)):new ds(this.source,Te(this.path),this.snap)}}/**
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
 */class tr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new ds(this.source,ue(),n.value):new tr(this.source,ue(),n)}else return k(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class zn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class sE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(KC(o.childName,o.snapshotNode))}),hi(t,i,"child_removed",e,s,n),hi(t,i,"child_added",e,s,n),hi(t,i,"child_moved",r,s,n),hi(t,i,"child_changed",e,s,n),hi(t,i,"value",e,s,n),i}function hi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>oE(t,a,l)),o.forEach(a=>{const l=rE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oE(t,e,n){if(e.childName==null||n.childName==null)throw Qs("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Qo(t,e){return{eventCache:t,serverCache:e}}function Si(t,e,n,s){return Qo(new zn(e,n,s),t.serverCache)}function gp(t,e,n,s){return Qo(t.eventCache,new zn(e,n,s))}function _o(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ra;const aE=()=>(Ra||(Ra=new ct(qw)),Ra);class Pe{constructor(e,n=aE()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return ft(e,(s,i)=>{n=n.set(new Ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(se(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Te(e),n);return r!=null?{path:He(new Ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Te(e)):new Pe(null)}}set(e,n){if(se(e))return new Pe(n,this.children);{const s=re(e),r=(this.children.get(s)||new Pe(null)).set(Te(e),n),o=this.children.insert(s,r);return new Pe(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Te(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),r=(this.children.get(s)||new Pe(null)).setTree(Te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Pe(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(He(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Te(e),He(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Te(e),He(n,i),s):new Pe(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(He(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new Pe(null))}}function ki(t,e,n){if(se(e))return new Pt(new Pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=rt(i,e);return r=r.updateChild(o,n),new Pt(t.writeTree_.set(i,r))}else{const i=new Pe(n),r=t.writeTree_.setTree(e,i);return new Pt(r)}}}function jd(t,e,n){let s=t;return ft(n,(i,r)=>{s=ki(s,He(e,i),r)}),s}function qd(t,e){if(se(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Pt(n)}}function vl(t,e){return ms(t,e)!=null}function ms(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function Gd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function Ln(t,e){if(se(e))return t;{const n=ms(t,e);return n!=null?new Pt(new Pe(n)):new Pt(t.writeTree_.subtree(e))}}function wl(t){return t.writeTree_.isEmpty()}function Hs(t,e){return _p(ue(),t.writeTree_,e)}function _p(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=_p(He(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(He(t,".priority"),s)),n}}/**
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
 */function Jo(t,e){return Cp(e,t)}function lE(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ki(t.visibleWrites,e,n)),t.lastWriteId=s}function cE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dE(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return hE(t),!0;if(s.snap)t.visibleWrites=qd(t.visibleWrites,s.path);else{const a=s.children;ft(a,l=>{t.visibleWrites=qd(t.visibleWrites,He(s.path,l))})}return!0}else return!1}function dE(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(He(t.path,n),e))return!0;return!1}function hE(t){t.visibleWrites=yp(t.allWrites,fE,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fE(t){return t.visible}function yp(t,e,n){let s=Pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=rt(n,o),s=ki(s,a,r.snap)):Tt(o,n)&&(a=rt(o,n),s=ki(s,ue(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=rt(n,o),s=jd(s,a,r.children);else if(Tt(o,n))if(a=rt(o,n),se(a))s=jd(s,ue(),r.children);else{const l=Us(r.children,re(a));if(l){const c=l.getChild(Te(a));s=ki(s,ue(),c)}}}else throw Qs("WriteRecord should have .snap or .children")}}return s}function vp(t,e,n,s,i){if(!s&&!i){const r=ms(t.visibleWrites,e);if(r!=null)return r;{const o=Ln(t.visibleWrites,e);if(wl(o))return n;if(n==null&&!vl(o,ue()))return null;{const a=n||q.EMPTY_NODE;return Hs(o,a)}}}else{const r=Ln(t.visibleWrites,e);if(!i&&wl(r))return n;if(!i&&n==null&&!vl(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=yp(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Hs(a,l)}}}function pE(t,e,n){let s=q.EMPTY_NODE;const i=ms(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ln(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=Hs(Ln(r,new Ee(o)),a);s=s.updateImmediateChild(o,l)}),Gd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ln(t.visibleWrites,e);return Gd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mE(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,n);if(vl(t.visibleWrites,r))return null;{const o=Ln(t.visibleWrites,r);return wl(o)?i.getChild(n):Hs(o,i.getChild(n))}}function gE(t,e,n,s){const i=He(e,n),r=ms(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ln(t.visibleWrites,i);return Hs(o,s.getNode().getImmediateChild(n))}else return null}function _E(t,e){return ms(t.visibleWrites,e)}function yE(t,e,n,s,i,r,o){let a;const l=Ln(t.visibleWrites,e),c=ms(l,ue());if(c!=null)a=c;else if(n!=null)a=Hs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function vE(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function yo(t,e,n,s){return vp(t.writeTree,t.treePath,e,n,s)}function Ic(t,e){return pE(t.writeTree,t.treePath,e)}function Kd(t,e,n,s){return mE(t.writeTree,t.treePath,e,n,s)}function vo(t,e){return _E(t.writeTree,He(t.treePath,e))}function wE(t,e,n,s,i,r){return yE(t.writeTree,t.treePath,e,n,s,i,r)}function Tc(t,e,n){return gE(t.writeTree,t.treePath,e,n)}function wp(t,e){return Cp(He(t.treePath,e),t.writeTree)}function Cp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class CE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ji(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Bs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zi(s,e.snapshotNode,i.oldSnap));else throw Qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class EE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ep=new EE;class Sc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),r=wE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function bE(t){return{filter:t}}function IE(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TE(t,e,n,s,i){const r=new CE;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=Cl(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=wo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=kE(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=El(t,e,c.path,c.children,s,i,a,r))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=RE(t,e,c.path,s,i,r):o=xE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===St.LISTEN_COMPLETE)o=PE(t,e,n.path,s,r);else throw Qs("Unknown operation type: "+n.type);const l=r.getChanges();return SE(e,o,l),{viewCache:o,changes:l}}function SE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_o(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(fp(_o(e)))}}function bp(t,e,n,s,i,r){const o=e.eventCache;if(vo(s,n)!=null)return e;{let a,l;if(se(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof q?c:q.EMPTY_NODE,d=Ic(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=yo(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){k(Un(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Kd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Te(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Kd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Tc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Si(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function wo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=re(n);if(!l.isCompleteForPath(n)&&Un(n)>1)return e;const _=Te(n),A=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),m,A,_,Ep,null)}const d=gp(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),h=new Sc(i,d,r);return bp(t,d,n,i,h,a)}function Cl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Sc(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Si(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Si(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Te(n),m=a.getNode().getImmediateChild(d);let _;if(se(h))_=s;else{const w=u.getCompleteChild(d);w!=null?sp(h)===".priority"&&w.getChild(rp(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=q.EMPTY_NODE}if(m.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=Si(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yd(t,e){return t.eventCache.isCompleteForChild(e)}function kE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=He(n,l);Yd(e,re(u))&&(a=Cl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=He(n,l);Yd(e,re(u))||(a=Cl(t,a,u,c,i,r,o))}),a}function Qd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function El(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new Pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Qd(t,m,h);l=wo(t,l,new Ee(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),w=Qd(t,_,h);l=wo(t,l,new Ee(d),w,i,r,o,a)}}),l}function xE(t,e,n,s,i,r,o){if(vo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(se(n)){let c=new Pe(null);return l.getNode().forEachChild(Ms,(u,d)=>{c=c.set(new Ee(u),d)}),El(t,e,n,c,i,r,a,o)}else return e}else{let c=new Pe(null);return s.foreach((u,d)=>{const h=He(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),El(t,e,n,c,i,r,a,o)}}function PE(t,e,n,s,i){const r=e.serverCache,o=gp(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return bp(t,o,n,s,Ep,i)}function RE(t,e,n,s,i,r){let o;if(vo(s,n)!=null)return e;{const a=new Sc(s,e,i),l=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yo(s,hs(e));else{const d=e.serverCache.getNode();k(d instanceof q,"serverChildren would be complete if leaf node"),u=Ic(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let d=Tc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Te(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,Te(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yo(s,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vo(s,ue())!=null,Si(e,c,o,t.filter.filtersNodes())}}/**
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
 */class AE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wc(s.getIndex()),r=QC(s);this.processor_=bE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new zn(l,o.isFullyInitialized(),i.filtersNodes()),d=new zn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qo(d,u),this.eventGenerator_=new sE(this.query_)}get query(){return this.query_}}function NE(t){return t.viewCache_.serverCache.getNode()}function ME(t){return _o(t.viewCache_)}function OE(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function Jd(t){return t.eventRegistrations_.length===0}function LE(t,e){t.eventRegistrations_.push(e)}function Zd(t,e,n){const s=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Xd(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(k(hs(t.viewCache_),"We should always have a full cache before handling merges"),k(_o(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TE(t.processor_,i,e,n,s);return IE(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ip(t,r.changes,r.viewCache.eventCache.getNode(),null)}function DE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(r,o)=>{s.push(Bs(r,o))}),n.isFullyInitialized()&&s.push(fp(n.getNode())),Ip(t,s,n.getNode(),e)}function Ip(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return iE(t.eventGenerator_,e,n,i)}/**
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
 */let Co;class Tp{constructor(){this.views=new Map}}function FE(t){k(!Co,"__referenceConstructor has already been defined"),Co=t}function $E(){return k(Co,"Reference.ts has not been loaded"),Co}function UE(t){return t.views.size===0}function kc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),Xd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Xd(o,e,n,s));return r}}function Sp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=yo(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=Ic(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=Qo(new zn(a,l,!1),new zn(s,i,!1));return new AE(e,c)}return o}function zE(t,e,n,s,i,r){const o=Sp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LE(o,n),DE(o,n)}function VE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Vn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Zd(c,n,s)),Jd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Zd(l,n,s)),Jd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Vn(t)&&r.push(new($E())(e._repo,e._path)),{removed:r,events:o}}function kp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dn(t,e){let n=null;for(const s of t.views.values())n=n||OE(s,e);return n}function xp(t,e){if(e._queryParams.loadsAllData())return Zo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Pp(t,e){return xp(t,e)!=null}function Vn(t){return Zo(t)!=null}function Zo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Eo;function WE(t){k(!Eo,"__referenceConstructor has already been defined"),Eo=t}function BE(){return k(Eo,"Reference.ts has not been loaded"),Eo}let HE=1;class eh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=vE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rp(t,e,n,s,i){return lE(t.pendingWriteTree_,e,n,s,i),i?wr(t,new ds(mp(),e,n)):[]}function es(t,e,n=!1){const s=cE(t.pendingWriteTree_,e);if(uE(t.pendingWriteTree_,e)){let r=new Pe(null);return s.snap!=null?r=r.set(ue(),!0):ft(s.children,o=>{r=r.set(new Ee(o),!0)}),wr(t,new go(s.path,r,n))}else return[]}function vr(t,e,n){return wr(t,new ds(Ec(),e,n))}function jE(t,e,n){const s=Pe.fromObject(n);return wr(t,new tr(Ec(),e,s))}function qE(t,e){return wr(t,new er(Ec(),e))}function GE(t,e,n){const s=Pc(t,n);if(s){const i=Rc(s),r=i.path,o=i.queryId,a=rt(r,e),l=new er(bc(o),a);return Ac(t,r,l)}else return[]}function Ap(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Pp(o,e))){const l=VE(o,e,n,s);UE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Vn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=JE(h);for(let _=0;_<m.length;++_){const w=m[_],A=w.query,x=Lp(t,w);t.listenProvider_.startListening(xi(A),nr(t,A),x.hashFn,x.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(xi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Xo(h));t.listenProvider_.stopListening(xi(h),m)}))}ZE(t,c)}return a}function Np(t,e,n,s){const i=Pc(t,s);if(i!=null){const r=Rc(i),o=r.path,a=r.queryId,l=rt(o,e),c=new ds(bc(a),l,n);return Ac(t,o,c)}else return[]}function KE(t,e,n,s){const i=Pc(t,s);if(i){const r=Rc(i),o=r.path,a=r.queryId,l=rt(o,e),c=Pe.fromObject(n),u=new tr(bc(a),l,c);return Ac(t,o,u)}else return[]}function YE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=rt(h,i);r=r||Dn(m,_),o=o||Vn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Vn(a),r=r||Dn(a,ue())):(a=new Tp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const w=Dn(_,ue());w&&(r=r.updateImmediateChild(m,w))}));const c=Pp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Xo(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=XE();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Jo(t.pendingWriteTree_,i);let d=zE(a,e,n,u,r,l);if(!c&&!o&&!s){const h=xp(a,e);d=d.concat(eb(t,e,h))}return d}function xc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),c=Dn(a,l);if(c)return c});return vp(i,e,r,n,!0)}function QE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=rt(c,n);s=s||Dn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Dn(i,ue()):(i=new Tp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new zn(s,!0,!1):null,a=Jo(t.pendingWriteTree_,e._path),l=Sp(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return ME(l)}function wr(t,e){return Mp(e,t.syncPointTree_,null,Jo(t.pendingWriteTree_,ue()))}function Mp(t,e,n,s){if(se(t.path))return Op(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=Dn(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wp(s,o);r=r.concat(Mp(a,l,c,u))}return i&&(r=r.concat(kc(i,t,s,n))),r}}function Op(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=Dn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Op(u,a,l,c)))}),i&&(r=r.concat(kc(i,t,s,n))),r}function Lp(t,e){const n=e.query,s=nr(t,n);return{hashFn:()=>(NE(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?GE(t,n._path,s):qE(t,n._path);{const r=Yw(i,n);return Ap(t,n,null,r)}}}}function nr(t,e){const n=Xo(e);return t.queryToTagMap.get(n)}function Xo(t){return t._path.toString()+"$"+t._queryIdentifier}function Pc(t,e){return t.tagToQueryMap.get(e)}function Rc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function Ac(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=Jo(t.pendingWriteTree_,e);return kc(s,n,i,null)}function JE(t){return t.fold((e,n,s)=>{if(n&&Vn(n))return[Zo(n)];{let i=[];return n&&(i=kp(n)),ft(s,(r,o)=>{i=i.concat(o)}),i}})}function xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BE())(t._repo,t._path):t}function ZE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Xo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function XE(){return HE++}function eb(t,e,n){const s=e._path,i=nr(t,e),r=Lp(t,n),o=t.listenProvider_.startListening(xi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)k(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!se(c)&&u&&Vn(u))return[Zo(u).query];{let h=[];return u&&(h=h.concat(kp(u).map(m=>m.query))),ft(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(xi(u),nr(t,u))}}return o}/**
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
 */class Nc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nc(n)}node(){return this.node_}}class Mc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new Mc(this.syncTree_,n)}node(){return xc(this.syncTree_,this.path_)}}const tb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},th=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sb(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},sb=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ib=function(t,e,n,s){return Oc(e,new Mc(n,t),s)},Dp=function(t,e,n){return Oc(t,new Nc(e),n)};function Oc(t,e,n){const s=t.getPriority().val(),i=th(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=th(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,Ke(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new qe(i))),o.forEachChild(Me,(a,l)=>{const c=Oc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Lc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Dc(t,e){let n=e instanceof Ee?e:new Ee(e),s=t,i=re(n);for(;i!==null;){const r=Us(s.node.children,i)||{children:{},childCount:0};s=new Lc(i,s,r),n=Te(n),i=re(n)}return s}function si(t){return t.node.value}function Fp(t,e){t.node.value=e,bl(t)}function $p(t){return t.node.childCount>0}function rb(t){return si(t)===void 0&&!$p(t)}function ea(t,e){ft(t.node.children,(n,s)=>{e(new Lc(n,t,s))})}function Up(t,e,n,s){n&&!s&&e(t),ea(t,i=>{Up(i,e,!0,s)}),n&&s&&e(t)}function ob(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Cr(t){return new Ee(t.parent===null?t.name:Cr(t.parent)+"/"+t.name)}function bl(t){t.parent!==null&&ab(t.parent,t.name,t)}function ab(t,e,n){const s=rb(n),i=un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,bl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bl(t))}/**
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
 */const lb=/[\[\].#$\/\u0000-\u001F\u007F]/,cb=/[\[\].#$\u0000-\u001F\u007F]/,Aa=10*1024*1024,zp=function(t){return typeof t=="string"&&t.length!==0&&!lb.test(t)},Vp=function(t){return typeof t=="string"&&t.length!==0&&!cb.test(t)},ub=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vp(t)},db=function(t,e,n,s){s&&e===void 0||Fc(ec(t,"value"),e,n)},Fc=function(t,e,n){const s=n instanceof Ee?new xC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(D0(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>Aa/3&&Bo(e)>Aa)throw new Error(t+"contains a string greater than "+Aa+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ft(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!zp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PC(s,o),Fc(t,a,s),RC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},Wp=function(t,e,n,s){if(!(s&&n===void 0)&&!Vp(n))throw new Error(ec(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wp(t,e,n,s)},Bp=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ub(n))throw new Error(ec(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hp(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!op(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qt(t,e,n){Hp(t,n),mb(t,s=>Tt(s,e)||Tt(e,s))}function mb(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();os&&Xe("event: "+n.toString()),ni(s)}}}/**
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
 */const _b="repo_interrupt",yb=25;class vb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mo(),this.transactionQueueTree_=new Lc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wb(t,e,n){if(t.stats_=gc(t.repoInfo_),t.forceRestClient_||Xw())t.server_=new po(t.repoInfo_,(s,i,r,o)=>{nh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new rn(t.repoInfo_,e,(s,i,r,o)=>{nh(t,s,i,r,o)},s=>{sh(t,s)},s=>{Eb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=iC(t.repoInfo_,()=>new nE(t.stats_,t.server_)),t.infoData_=new JC,t.infoSyncTree_=new eh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=vr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uc(t,"connected",!1),t.serverSyncTree_=new eh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);qt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Cb(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $c(t){return tb({timestamp:Cb(t)})}function nh(t,e,n,s,i){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=to(n,c=>Ke(c));o=KE(t.serverSyncTree_,r,l,i)}else{const l=Ke(n);o=Np(t.serverSyncTree_,r,l,i)}else if(s){const l=to(n,c=>Ke(c));o=jE(t.serverSyncTree_,r,l)}else{const l=Ke(n);o=vr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=na(t,r)),qt(t.eventQueue_,a,o)}function sh(t,e){Uc(t,"connected",e),e===!1&&Tb(t)}function Eb(t,e){ft(e,(n,s)=>{Uc(t,n,s)})}function Uc(t,e,n){const s=new Ee("/.info/"+e),i=Ke(n);t.infoData_.updateSnapshot(s,i);const r=vr(t.infoSyncTree_,s,i);qt(t.eventQueue_,s,r)}function jp(t){return t.nextWriteId_++}function bb(t,e,n){const s=QE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ke(i).withIndex(e._queryParams.getIndex());YE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=vr(t.serverSyncTree_,e._path,r);else{const a=nr(t.serverSyncTree_,e);o=Np(t.serverSyncTree_,e._path,r,a)}return qt(t.eventQueue_,e._path,o),Ap(t.serverSyncTree_,e,n,null,!0),r},i=>(ta(t,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ib(t,e,n,s,i){ta(t,"set",{path:e.toString(),value:n,priority:s});const r=$c(t),o=Ke(n,s),a=xc(t.serverSyncTree_,e),l=Dp(o,a,r),c=jp(t),u=Rp(t.serverSyncTree_,e,l,c,!0);Hp(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||ut("set at "+e+" failed: "+h);const w=es(t.serverSyncTree_,c,!_);qt(t.eventQueue_,e,w),kb(t,i,h,m)});const d=Qp(t,e);na(t,d),qt(t.eventQueue_,d,[])}function Tb(t){ta(t,"onDisconnectEvents");const e=$c(t),n=mo();yl(t.onDisconnect_,ue(),(i,r)=>{const o=ib(i,r,t.serverSyncTree_,e);pp(n,i,o)});let s=[];yl(n,ue(),(i,r)=>{s=s.concat(vr(t.serverSyncTree_,i,r));const o=Qp(t,i);na(t,o)}),t.onDisconnect_=mo(),qt(t.eventQueue_,ue(),s)}function Sb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_b)}function ta(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function kb(t,e,n,s){e&&ni(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function qp(t,e,n){return xc(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function zc(t,e=t.transactionQueueTree_){if(e||sa(t,e),si(e)){const n=Kp(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xb(t,Cr(e),n)}else $p(e)&&ea(e,n=>{zc(t,n)})}function xb(t,e,n){const s=n.map(c=>c.currentWriteId),i=qp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=rt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ta(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(es(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();sa(t,Dc(t.transactionQueueTree_,e)),zc(t,t.transactionQueueTree_),qt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ni(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}na(t,e)}},o)}function na(t,e){const n=Gp(t,e),s=Cr(n),i=Kp(t,n);return Pb(t,i,s),s}function Pb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=rt(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yb)u=!0,d="maxretry",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else{const h=qp(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Fc("transaction failed: Data returned ",m,l.path);let _=Ke(m);typeof m=="object"&&m!=null&&un(m,".priority")||(_=_.updatePriority(h.getPriority()));const A=l.currentWriteId,x=$c(t),O=Dp(_,h,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=O,l.currentWriteId=jp(t),o.splice(o.indexOf(A),1),i=i.concat(Rp(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(es(t.serverSyncTree_,A,!0))}else u=!0,d="nodata",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}sa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ni(s[a]);zc(t,t.transactionQueueTree_)}function Gp(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&si(s)===void 0;)s=Dc(s,n),e=Te(e),n=re(e);return s}function Kp(t,e){const n=[];return Yp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yp(t,e,n){const s=si(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ea(e,i=>{Yp(t,i,n)})}function sa(t,e){const n=si(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Fp(e,n.length>0?n:void 0)}ea(e,s=>{sa(t,s)})}function Qp(t,e){const n=Cr(Gp(t,e)),s=Dc(t.transactionQueueTree_,e);return ob(s,i=>{Na(t,i)}),Na(t,s),Up(s,i=>{Na(t,i)}),n}function Na(t,e){const n=si(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fp(e,void 0):n.length=r+1,qt(t.eventQueue_,Cr(e),i);for(let o=0;o<s.length;o++)ni(s[o])}}/**
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
 */function Rb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ab(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const ih=function(t,e){const n=Nb(t),s=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new K0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},Nb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Rb(t.substring(u,d)));const h=Ab(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Mb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class Ob{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Lb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:sp(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Bd(this._queryParams),n=pc(e);return n==="{}"?"default":n}get _queryObject(){return Bd(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof Vc))return!1;const n=this._repo===e._repo,s=op(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kC(this._path)}}class dn extends Vc{constructor(e,n){super(e,n,new Cc,!1)}get parent(){const e=rp(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),s=Il(this.ref,e);return new sr(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new sr(i,Il(this.ref,s),Me)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wc(t,e){return t=pt(t),t._checkNotDeleted("ref"),e!==void 0?Il(t._root,e):t._root}function Il(t,e){return t=pt(t),re(t._path)===null?hb("child","path",e,!1):Wp("child","path",e,!1),new dn(t._repo,He(t._path,e))}function Db(t){return Bp("remove",t._path),Jp(t,null)}function Jp(t,e){t=pt(t),Bp("set",t._path),db("set",e,t._path,!1);const n=new Wo;return Ib(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Fb(t){t=pt(t);const e=new Lb(()=>{}),n=new Bc(e);return bb(t._repo,t,n).then(s=>new sr(s,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Mb("value",this,new sr(e.snapshotNode,new dn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ob(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}FE(dn);WE(dn);/**
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
 */const $b="FIREBASE_DATABASE_EMULATOR_HOST",Tl={};let Ub=!1;function zb(t,e,n,s){t.repoInfo_=new K0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Vb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ih(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[$b]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ih(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ns(Ns.OWNER):new tC(t.name,t.options,e);fb("Invalid Firebase Database URL",o),se(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Bb(a,t,u,new eC(t.name,n));return new Hb(d,t)}function Wb(t,e){const n=Tl[e];(!n||n[t.key]!==t)&&ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sb(t),delete n[t.key]}function Bb(t,e,n,s){let i=Tl[e.name];i||(i={},Tl[e.name]=i);let r=i[t.toURLString()];return r&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vb(t,Ub,n,s),i[t.toURLString()]=r,r}class Hb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ln("Cannot call "+e+" on a deleted database.")}}function jb(t=Qf(),e){const n=sc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=c2("database");s&&qb(n,...s)}return n}function qb(t,e,n,s={}){t=pt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ns(Ns.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:u2(s.mockUserToken,t.app.options.projectId);r=new Ns(o)}zb(i,e,n,r)}/**
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
 */function Gb(t){Uw(Zs),zs(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),On(Sd,kd,t),On(Sd,kd,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gb();const Hc=jb(Xf),Zp=[];function Kb(t){return t instanceof Set?Array.from(t):t}const Yb=async t=>(await Fb(Wc(Hc,t))).val(),Qb=async(t,e)=>{Jp(Wc(Hc,t),e)},Jb=async t=>{if(!(!mr.value||!Yi.value))return await Db(Wc(Hc,t))},Ma=async(t,e)=>{Ut(t,n=>{mr.value&&Yi.value&&Qb(`users/${Ko.value.uid}/game-data/tileswap-naenae/${e}/`,Kb(n))},{deep:!0}),Zp.push({observable:t,path:e})},Zb=new Map([[1,[3]],[2,[7]],[3,[13]],[4,[23]],[5,[45,75,67]],[6,[103,147,155]],[7,[203,211,217,235,367,277,325,313,345]],[8,[435,551,747,453,545,537,703,543]],[9,[1021,1131,1461,1423,1055,1167,1541,1333,1605,1751,1743,1617,1553,1157]],[10,[2011,2415,3771,2157,3515,2773,2033,2443,2461,3023,3543,2745,2431,3177]],[11,[4005,4445,4215,4055,6015,7413,4143,4563,4053,5023,5623,4577,6233,6673]],[12,[10123,15647,16533,16047,11015,14127,17673,13565,15341,15053,15621,15321,11417,13505]],[13,[20033,23261,24623,23517,30741,21643,30171,21277,27777,35051,34723,34047,32535,31425]],[14,[42103,43333,51761,40503,77141,62677,44103,45145,76303,64457,57231,64167,60153,55753]],[15,[100003,102043,110013,102067,104307,100317,177775,103451,110075,102061,114725,103251,100021,100201]],[16,[210013,234313,233303,307107,307527,306357,201735,272201,242413,270155,302157,210205,305667,236107]],[17,[400011,400017,400431,525251,410117,400731,411335,444257,600013,403555,525327,411077,400041,400101]],[18,[1000201,1000247,1002241,1002441,1100045,1000407,1003011,1020121,1101005,1000077,1001361,1001567,1001727,1002777]],[19,[2000047,2000641,2001441,2000107,2000077,2000157,2000175,2000257,2000677,2000737,2001557,2001637,2005775,2006677]],[20,[4000011,4001051,4004515,6000031,4442235]],[21,[10000005,10040205,10020045,10040315,10000635,10103075,10050335,10002135,17000075]],[22,[20000003,20001043,2222223,25200127,20401207,20430607,20070217]],[23,[40000041,40404041,40000063,40010061,50000241,40220151,40006341,40405463,40103271,41224445,4043561]],[24,[100000207,125245661,113763063]],[25,[200000011,200000017,204000051,200010031,200402017,252001251,201014171,204204057,200005535,200014731]],[26,[400000107,430216473,402365755,426225667,510664323,473167545,411335571]],[27,[1000000047,1001007071,1020024171,1102210617,1250025757,1257242631,1020560103,1112225171,1035530241]],[28,[2000000011,2104210431,2000025051,2020006031,2002502115,2001601071]],[29,[4000000005,4004004005,4000010205,4010000045,4400000045,4002200115,4001040115,4004204435,4100060435,4040003075,40040642751]],[30,[10040000007,10104264207,10115131333,11362212703,10343244533]],[31,[20000000011,20000000017,20000020411,21042104211,20010010017,20005000251,20004100071,20202040217,20000200435,20060140231,21042107357]],[32,[40020000007,40460216667,40035532523,42003247143,41760427607]],[33,[100000020001,100020024001,104000420001,100020224401,111100021111,100000031463,104020466001,100502430041,100601431001]],[34,[201000000007,201472024107,377000007527,225213433257,227712240037,251132516577,211636220473,200000140003]],[35,[400000000005]],[36,[0xe8d4a51fa1]],[37,[2000000012005]],[38,[4000000000143]],[39,[0x9184e72a015]],[40,[20000012000005]],[61,[200000000000000000047n]],[89,[400000000000000000000000000151n]]]),Xb=t=>{const e=Zb.get(t.q);if(!e)throw new Error(`No irreducible polynomial for field of order ${t.p} ** ${t.q}`);const n=[];for(const s of e){const r=parseInt(s.toString(),8).toString(2).trim().split("").map(o=>parseInt(o));n.push(t.el(r))}return n};class tt{constructor(e){if(typeof e!="number")throw new Error(`Order ${e} is not a number`);if(e<=0)throw new Error(`Order ${e} is not positive`);if(e%1!==0)throw new Error(`Order ${e} is not an integer`);const n=tt.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error(`Order ${e} is not a prime power`);this.order=e,this.p=n[0],this.q=n.length,this.isPrimeField=this.q===1}el(e){if(e instanceof kt){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e=="number")return this.isPrimeField?new eI(e,this):Os.fromInteger(e,this);if(e instanceof Array)return new Os(e,this);throw new Error("Cannot create element from non-number")}irreduciblePolynomial(){return Xb(this)[0]}matrix(e){return js.from2DArray(e,this)}identity(e){return js.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...tt.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new tt(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}class kt{constructor(e,n){if(this.constructor==kt)throw new Error("FiniteFieldElement is an abstract class and cannot be instantiated. Use FiniteFieldValue or FiniteFieldPolynomial instead.");if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");this.value=e,this.field=n}inverse(){throw new Error("Method inverse not implemented in "+this.constructor.name)}opposite(){throw new Error("Method opposite not implemented in "+this.constructor.name)}add(e){throw new Error("Method add not implemented in "+this.constructor.name)}subtract(e){throw new Error("Method subtract not implemented in "+this.constructor.name)}multiply(e){throw new Error("Method multiply not implemented in "+this.constructor.name)}divide(e){throw new Error("Method divide not implemented in "+this.constructor.name)}pow(e){throw new Error("Method pow not implemented in "+this.constructor.name)}sqrt(){throw new Error("Method sqrt not implemented in "+this.constructor.name)}abs(){throw new Error("Method abs not implemented in "+this.constructor.name)}equals(e){throw new Error("Method equals not implemented in "+this.constructor.name)}copy(){throw new Error("Method copy not implemented in "+this.constructor.name)}}var Sn,bs;class eI extends kt{constructor(n,s){if(typeof n!="number")throw new Error("Value must be a number");if(!(s instanceof tt))throw new Error("Field must be an instance of FiniteField");if(!tt.isPrime(s.order))throw new Error("Field must be a prime field");super(tt.mod(n,s.order),s);Tr(this,Sn)}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(n){return Lt(this,Sn,bs).call(this,n,(s,i)=>s.value+i.value)}subtract(n){return Lt(this,Sn,bs).call(this,n,(s,i)=>s.value-i.value)}multiply(n){return Lt(this,Sn,bs).call(this,n,(s,i)=>s.value*i.value)}divide(n){return Lt(this,Sn,bs).call(this,n,(s,i)=>s.multiply(i.inverse()).value)}pow(n){if(n===0)return this.field.el(1);if(n===1)return this.copy();if(n<0)return this.inverse().pow(-n);let s=this;for(let i=1;i<n;i++)s=s.multiply(this);return s}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let n=1;for(;n<this.field.order;){if(n*n%this.field.order===this.value)return this.field.el(n);n++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(n){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===n.value}return this.value===n}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}}Sn=new WeakSet,bs=function(n,s){if(n instanceof kt){if(n.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(s(this,n))}return Lt(this,Sn,bs).call(this,this.field.el(n),s)};class Os extends kt{constructor(e,n){if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");tt.isPrime(n.order)&&(console.warn("[warn] Creating polynomial in prime field. Use FiniteFieldValue instead"),console.trace()),super(Os.coefficientsToInteger(e,n),n),this.field=n,this.primeField=tt.fromOrder(n.p),this.poly=new Pi(e,this.primeField)}add(e){if(e instanceof Os){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new Os(i,n)}static coefficientsToInteger(e,n){return n=tt.fromOrder(n.p),parseInt(e.map(s=>n.el(s)).map(s=>s.value).join(""),n.p)}toString(){return(this.poly.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.poly.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}class Pi{constructor(e,n){if(!(n instanceof tt))throw new Error("Field must be an instance of FiniteField");this.field=n,this.primeField=tt.fromOrder(n.p),this.coefficients=e.map(s=>this.field.el(s))}add(e){if(e instanceof Pi){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof Pi){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=[];for(let s=0;s<this.coefficients.length+e.coefficients.length-1;s++)n.push(this.field.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return this.field.el(n)}if(e instanceof Array)return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}equals(e){if(e instanceof Pi){if(e.field.order!==this.field.order)throw new Error("Cannot compare polynomials in different fields");return this.coefficients.every((n,s)=>n.equals(e.coefficients[s]))}if(e instanceof Array)return this.equals(this.field.el(e));throw new Error("Cannot compare polynomial to non-polynomial")}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var ts,ns,_i;const oe=class oe{constructor(e,n){Tr(this,ns);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof kt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new oe(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof kt)return e=this.field.el(e),oe.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof oe){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return oe.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof kt||typeof e=="number")return e=this.field.el(e),new oe(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof oe){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new oe(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return oe.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(ri(oe,ts).has(e))return ri(oe,ts).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Lt(this,ns,_i).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return ri(oe,ts).set(e,s),s}const n=this.PLUDeterminant();return ri(oe,ts).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=oe.identity(this.width,this.field),s=oe.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Lt(r=s,ns,_i).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return oe.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Lt(this,ns,_i).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new oe(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return oe.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return oe.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=oe.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Lt(this,ns,_i).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:oe.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof oe?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return oe.from2DArray(this.matrix,this.field)}toColumnVector(){const e=new Array(this.width*this.height).fill().map((n,s)=>[this.matrix[Math.floor(s/this.height)][s%this.height]]);return new oe(e,this.field)}toSquareMatrix(e){if(this.height!==e*e||this.width!==1)throw new Error("Cannot convert matrix to square matrix");const n=new Array(e).fill().map((s,i)=>new Array(e).fill().map((r,o)=>this.matrix[i*e+o][0]));return new oe(n,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new oe(s,n)}static fromValue(e,n,s,i){if(e instanceof kt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new oe(r,i)}static zeros(e,n,s){return oe.fromValue(0,e,n,s)}static ones(e,n,s){return oe.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return oe.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return oe.from2DArray(s,n)}static from2DArray(e,n){return new oe(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};ts=new WeakMap,ns=new WeakSet,_i=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new oe(s,this.field)},Tr(oe,ts,new Map);let js=oe;const tI=({width:t,height:e,state:n,modulo:s,tilesToFlip:i})=>{const r=[];s=s??2,i=i??[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]];for(let l=0;l<e;l++)for(let c=0;c<t;c++){if(n&&n[l][c]===-1)continue;const u=Array(e).fill().map((d,h)=>Array(t).fill().map((m,_)=>n&&n[h][_]===-1?-1:0));nI(l,c,u,s,i),r.push(u)}return tt.fromOrder(s).matrix(r.map(l=>l.flat().filter(c=>c!==-1))).transpose()},nI=(t,e,n,s,i)=>{for(const r of i){const o=e+r[0],a=t+r[1];o>=0&&o<n[0].length&&a>=0&&a<n.length&&n[a][o]!==-1&&(n[a][o]=s-1)}},bo=Ne(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>bo.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");bo.value=t}});const kn=Oe(()=>bo.value),rh=t=>{bo.value=t},Oa=new Map,La=new Map,Xp=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},Da=(t,e)=>{for(let n=0;n<e;n++)t=Xp(t);return t};class sI{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const e1=t=>{const e=[t,Xp(t),Da(t,2),Da(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=iI(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new sI(Da(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function iI(t){const e=tt.fromOrder(Z.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Z.value])),r=`${s}x${n},${je.getExcludeFromMatrix(t)},${fs.value},${Z.value}}`;let o=[],a=0;const l=tI({width:s,height:n,state:t,tilesToFlip:fs.value,modulo:Z.value});let c;if(La.has(r)?c=La.get(r):(c=l.determinant(),La.set(r,c)),c.equals(0)){const d=js.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=js.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let w=0;w<d.width-1;w++)if(d.matrix[m][w].equals(1)){o[w]=_.value;break}}}}else{let u;Oa.has(r)?u=Oa.get(r):(u=l.inverse(),Oa.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const dt={backgroundColor:{name:"Background Color",options:["#bbb2ea","#adad85","#666","#FF9D81","#83769C","#7be3ad"],get value(){const{settings:t}=Q();return this.options[t.backgroundColor]},onChange(t){document.documentElement.style.setProperty("--root-bg-color",this.options[t])},unlocked:2},tilesColor:{name:"Tiles Color",options:[[{r:0,g:0,b:0},{r:255,g:255,b:255}],[{r:50,g:50,b:90},{r:200,g:100,b:100}],[{r:8,g:33,b:59},{r:88,g:131,b:173}]],get value(){const{settings:t}=Q();return this.options[t.tilesColor]},onChange(t){},unlocked:2},colorBlind:{name:"Color Blind",options:["Off","On"],get value(){const{settings:t}=Q();return this.options[t.colorBlind]},onChange(t){},unlocked:2},hoverTiles:{name:"Hover on Tiles",options:["On","Off"],get value(){const{settings:t}=Q();return this.options[t.hoverTiles]},onChange(t){},unlocked:2},tilesShape:{name:"Tiles Border Radius",options:[[30],[30,60],[0],[100]],get value(){const{settings:t}=Q();return this.options[t.tilesShape]},onChange(t){let e="";for(let n=0;n<this.options[t].length;n++)e+=`${this.options[t][n]}px `;document.documentElement.style.setProperty("--root-tile-border-radius",e)},unlocked:2},tilesSVG:{name:"Tiles Shape",options:["Round","SpikeTile","Squircle"],selected:0,get value(){const{settings:t}=Q();return this.options[t.tilesSVG]},onChange(t){},unlocked:2},spread:{name:"Spread",options:[[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],[[-1,-1],[0,0],[-1,1],[1,-1],[1,1]],[[-1,0],[0,-1],[1,0],[0,0],[0,1]]],get value(){const{settings:t}=Q();return this.options[t.spread]},repr(t){if(t===0)return"□";if(t===1)return"✖";if(t===2)return"+"},onChange(t){fs.value=this.options[t]},unlocked:3}},rI=Object.fromEntries(Object.keys(dt).map(t=>[t,dt[t].selected??0])),fs=Ne([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>fs.value,set:t=>{fs.value=t}});const Z=Ne(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Z.value,set:t=>{if(typeof t!="number")throw new Error("Modulo must be a number");if(t<2)throw new Error("Modulo must be greater than 1");Z.value=t}});const jc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Z.value=t},Ri=Oe(()=>{const t=dt.tilesColor.value[0],e=dt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Z.value).fill().map((s,i)=>`rgb(${n.r*(i/(Z.value-1))+t.r},${n.g*(i/(Z.value-1))+t.g},${n.b*(i/(Z.value-1))+t.b})`)}),Fa=Oe(()=>{const t=dt.tilesColor.value[0],e=dt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Z.value).fill().map((s,i)=>`rgb(${n.r*.4*(i/(Z.value-1))+t.r+36},${n.g*.4*(i/(Z.value-1))+t.g+36},${n.b*.4*(i/(Z.value-1))+t.b+36})`)}),$a=Oe(()=>{const t=dt.tilesColor.value[0],e=dt.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Z.value).fill().map((s,i)=>`rgb(${n.r*.75*(i/(Z.value-1))+t.r+50},${n.g*.75*(i/(Z.value-1))+t.g+50},${n.b*.75*(i/(Z.value-1))+t.b+50})`)}),Xt=class Xt{static get FILTERED_LAYOUTS(){return Q(),this.LAYOUTS}constructor({width:e,height:n,exclude:s,unlockCategory:i,id:r}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(o=>Z.value-1)),this.id=r;for(const o of this.exclude)this.matrix[Math.floor(o/e)][o%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of fs.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=Xt.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=Xt.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Z.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Z.value-1:this.matrix[e][n]===Z.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i,id:r}=this,o=new Xt({width:e,height:n,exclude:s,unlockCategory:i,id:r});return o.matrix=this.matrix.map(a=>a.slice()),o}generatePosition(e){const n=this.copy();n.setAllTiles(Z.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}if(n.matrix.every(s=>s.every(i=>i===Z.value||i===-1)))return this.generatePosition(e);if(n.nTiles()<50){const{solutions:s,shortest:i,zerows:r}=e1(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Z.value*(e/3)+2);if(o.moves<a)return this.generatePosition(e)}return n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static getRandomLayout(){const e=Xt.FILTERED_LAYOUTS;return e[Math.floor(Math.random()*e.length)]}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new Xt({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Z.value+Z.value)%Z.value}};Bn(Xt,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1,id:0},{dimensions:"4x4",unlockCategory:3,id:1},{dimensions:"5x5",unlockCategory:5,id:2},{dimensions:"6x6",unlockCategory:9,id:3},{dimensions:"7x7",unlockCategory:11,id:4},{dimensions:"8x8",unlockCategory:15,id:5},{dimensions:"9x9",unlockCategory:15,id:6},{dimensions:"10x10",unlockCategory:15,id:7},{dimensions:"11x11",unlockCategory:15,id:8},{dimensions:"12x12",unlockCategory:15,id:9},{dimensions:"3x4",unlockCategory:3,id:10},{dimensions:"3x5",unlockCategory:3,id:11},{dimensions:"3x6",unlockCategory:9,id:12},{dimensions:"3x7",unlockCategory:9,id:13},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:1,id:14},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:7,id:15},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:11,id:16},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:9,id:17},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:11,id:18},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:16,id:19},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:1,id:20},{dimensions:"3x3",exclude:[4],unlockCategory:1,id:21},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:1,id:22},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:-2,id:32},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:-2,id:40},{dimensions:"3x3",exclude:[4,7],unlockCategory:1,id:23},{dimensions:"4x4",exclude:[5,10],unlockCategory:3,id:24},{dimensions:"4x4",exclude:[3,12],unlockCategory:3,id:25},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:4,id:26},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:3,id:27},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:3,id:28},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:4,id:29},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:4,id:30},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:-1,id:31},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:4,id:33},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:-1,id:34},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:-1,id:35},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:6,id:36},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:5,id:37},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:5,id:38},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:-1,id:39},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:-1,id:41},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:-1,id:42},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:-1,id:43},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:7,id:44},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:2,id:45},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:1,id:46},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:7,id:47},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:6,id:48},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:6,id:49},{dimensions:"5x5",exclude:[12],unlockCategory:-1,id:50},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:-1,id:51},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:7,id:52},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:5,id:53},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:-1,id:54},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:-1,id:55},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:5,id:56},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:-1,id:57},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:5,id:58},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:-2,id:59},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:8,id:60},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:-2,id:61},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:4,id:62},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:13,id:63},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:-2,id:64},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:7,id:65},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:-1,id:66},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:-1,id:67},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:11,id:68},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:6,id:69},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:6,id:70},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:8,id:71},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:8,id:72},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:-2,id:73},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:9,id:74},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:11,id:75},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:10,id:76},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:-1,id:77},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:-1,id:78},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:10,id:79},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:10,id:80},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:12,id:81},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:13,id:82},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:-2,id:83},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:6,id:84},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:4,id:85},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:3,id:86},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:7,id:87},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:12,id:88},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:12,id:89},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:12,id:90},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:16,id:91},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:16,id:92},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:8,id:93},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:-2,id:94},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:-2,id:95},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:-1,id:96},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:7,id:97},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:-1,id:98},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:8,id:99},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:4,id:100},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:7,id:101},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:6,id:102},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:6,id:103},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:9,id:104},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:13,id:105},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:6,id:106},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:14,id:107},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:8,id:108},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:2,id:109},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:-2,id:110},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:-2,id:111},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:9,id:112},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:10,id:113},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:11,id:114},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:10,id:115},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:10,id:116},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:7,id:117},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:-2,id:118},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:2,id:119},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:10,id:120},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:10,id:121},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:-2,id:122},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:-2,id:123},{dimensions:"3x4",exclude:[4,7],unlockCategory:-2,id:124},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:-1,id:125},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:-2,id:126},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:13,id:127},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:4,id:128},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:-2,id:129},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:-2,id:130},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:-2,id:131},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:-1,id:132},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:-1,id:133},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:11,id:134},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:14,id:135},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:16,id:136},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:12,id:137},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:5,id:138},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:-2,id:139},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:10,id:140},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:16,id:141},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:2,id:142},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:-2,id:143},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:-2,id:144},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:2,id:145},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:-2,id:146},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:-2,id:147},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:14,id:148},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:12,id:149},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:12,id:150},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:17,id:151},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:14,id:152},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:-1,id:153},{dimensions:"13x13",unlockCategory:15,id:154},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:8,id:155},{dimensions:"3x5",exclude:[4,7,10],unlockCategory:-3,id:156},{dimensions:"3x5",exclude:[0,2,5,6,8,9,11],unlockCategory:-3,id:157},{dimensions:"3x5",exclude:[3,4,10,11],unlockCategory:-3,id:158},{dimensions:"3x5",exclude:[3,4,6,9,10],unlockCategory:-3,id:159},{dimensions:"3x5",exclude:[1,2,4,9,10,12,13],unlockCategory:-3,id:160},{dimensions:"3x5",exclude:[4,5,9,10],unlockCategory:-3,id:161},{dimensions:"3x5",exclude:[4,5,10],unlockCategory:-3,id:162},{dimensions:"3x5",exclude:[3,4,6,8,10,11,13,14],unlockCategory:-3,id:163},{dimensions:"3x5",exclude:[4,10],unlockCategory:-3,id:164},{dimensions:"3x5",exclude:[4,9,10],unlockCategory:-3,id:165},{dimensions:"3x5",exclude:[3,5,6,8,9,11,14],unlockCategory:-3,id:166},{dimensions:"3x5",exclude:[4,10,11,13,14],unlockCategory:-3,id:167},{dimensions:"3x5",exclude:[0,2,4,7,11,12,13],unlockCategory:2,id:168},{dimensions:"3x5",exclude:[2,4,8,10,13],unlockCategory:-3,id:169},{dimensions:"3x5",exclude:[3,5,6,8,9,11,12,14],unlockCategory:-3,id:170},{dimensions:"3x5",exclude:[1,4,7,10,12],unlockCategory:-3,id:171},{dimensions:"3x5",exclude:[1,4,7,12,14],unlockCategory:-3,id:172},{dimensions:"5x5",exclude:[1,3,6,8,11,13,16,18,20,22,24],unlockCategory:-3,id:173},{dimensions:"3x5",exclude:[1,4,6,8,10,13],unlockCategory:-3,id:174},{dimensions:"3x5",exclude:[1,4,9,10],unlockCategory:-3,id:175},{dimensions:"3x5",exclude:[3,4,6,8,10,11],unlockCategory:-3,id:176},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:-3,id:177},{dimensions:"8x8",exclude:[1,2,4,9,10,12,13,14,22,24,25,26,27,28,30,32,33,38,41,42,44,45,46,49,50,60,61,63],unlockCategory:-3,id:178},{dimensions:"7x4",exclude:[1,5,8,10,12,15,17,19,24],unlockCategory:-3,id:178},{dimensions:"7x6",exclude:[8,9,10,11,12,17,21,22,24,26,27,28,29,31,38,39,40,41],unlockCategory:-3,id:179},{dimensions:"7x5",exclude:[4,5,8,9,11,12,15,16,18,19,22,23,25,26,29,30],unlockCategory:-3,id:180},{dimensions:"3x9",exclude:[1,5,10,12,14,16,21,25],unlockCategory:-3,id:181},{dimensions:"9x3",exclude:[1,5,10,12,14,16,21,25],unlockCategory:-3,id:182},{dimensions:"7x4",exclude:[0,1,2,3,4,7,8,9,12,14,17,19,22,24,26],unlockCategory:-3,id:183},{dimensions:"9x5",exclude:[0,1,2,3,4,5,6,9,10,11,12,13,16,18,19,20,23,25,27,30,32,34,37,39,41,43],unlockCategory:-3,id:184},{dimensions:"11x6",exclude:[0,1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,20,22,23,24,25,26,29,31,33,34,35,38,40,42,44,47,49,51,53,56,58,60,62,64],unlockCategory:-3,id:185}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i,id:r}=e;return new Xt({width:n,height:s,unlockCategory:i,id:r,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let je=Xt;window.layouts=je.LAYOUTS;const So=class So{static get FILTERED_PUZZLES(){const e=Q();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}get completionMoves(){const e=Q();for(let n=0;n<e.stats.puzzlesCompleted.length;n++){const s=e.stats.puzzlesCompleted[n];if(s.id===this.id)return s.completionMoves}return-1}set completionMoves(e){const n=Q();for(let s=0;s<n.stats.puzzlesCompleted.length;s++){const i=n.stats.puzzlesCompleted[s];if(i.id===this.id){i.completionMoves=Math.min(e,i.completionMoves);return}}n.stats.puzzlesCompleted.push({id:this.id,completionMoves:e})}};Bn(So,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[6,9,13,14,17,21,22,24]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[5,9,11,14,20,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[2,4,12,13,18,20,34,35,38,42,44,45,46,48,49,52,53,59,60,63,64,68,70]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((w,A)=>{w===2?(s[_][A]=-1,i[_][A]=-1):w===1&&(s[_][A]=(a??2)-1)}));const l=s[0].length,c=s.length,u=je.getExcludeFromMatrix(s),d=new je({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new je({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new So({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let en=So;const ke=class ke{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patterns:i,nPatterns:r,bigLayoutAdapt:o,timeLimitPer:a,moveLimitPer:l,hasSpecificPatterns:c,modulo:u,randomPatterns:d,name:h}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,c?this.patterns=i:(this.rangeStart=i[0],this.rangeEnd=i[1]),this.nPatterns=r,this.currentPattern=0,this.timeLimitPer=a,this.randomPatterns=d,this.moveLimitPer=l,this.bigLayoutAdapt=o,this.hasSpecificPatterns=c,this.nMoves=0,this.modulo=u??2,this.name=h,this.id=-1,this.generateLayouts()}get maxPercent(){const e=Q();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.maxPercent}return 0}get minTime(){const e=Q();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minTime}return this.timeLimit}set maxPercent(e){const n=Q();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.maxPercent=Math.max(i.maxPercent,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:e,minTime:this.timeLimit,minMoves:this.moveLimit})}set minTime(e){const n=Q();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minTime=Math.min(i.minTime,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:e,minMoves:this.moveLimit})}set minMoves(e){if(this.timeLimit===-1){const n=Q();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minMoves=Math.min(i.minMoves,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:-1,minMoves:e})}}get minMoves(){const e=Q();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minMoves}return this.timeLimit}generateLayouts(){let e;this.hasSpecificPatterns?e=je.LAYOUTS.filter(r=>this.patterns.includes(r.id)):e=je.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd);const n=[];if(this.randomPatterns)for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);else for(let r=0;r<this.patterns.length;r++){let o=this.patterns[r];for(let a=0;a<je.LAYOUTS.length;a++)o===je.LAYOUTS[a].id&&n.push(je.LAYOUTS[a])}const s=n.reduce((r,o)=>r+(o.nTiles()>=ke.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=ke.THRESHOLD?i*2:i);this.randomPatterns&&n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=Q();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};Bn(ke,"CHALLENGES",[{name:"Think Fast",id:0,challenges:[new ke({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[0],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Expert"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:45,patterns:[0],nPatterns:15,bigLayoutAdapt:!1,moveLimitPer:5,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Hard"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:33,patterns:[0],nPatterns:11,bigLayoutAdapt:!1,moveLimitPer:7,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Medium"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:21,patterns:[0],nPatterns:7,bigLayoutAdapt:!1,moveLimitPer:7,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Easy"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[2],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Think a bit less fast but still fast enough to be fast enough, you know?"})]},{name:"Category 1",id:1,challenges:[new ke({timeLimit:60,moveLimit:-1,totalClicks:17,patterns:[1,1],nPatterns:5,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Easy"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:30,patterns:[1,1],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Medium"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:55,patterns:[1,1],nPatterns:14,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Hard"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:92,patterns:[1,1],nPatterns:22,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!1,randomPatterns:!0,name:"Expert"})]},new ke({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[11],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"OG"}),new ke({timeLimit:-1,moveLimit:45,totalClicks:35,patterns:[156,157,158,159,160,161,162,163,164,165],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:10,hasSpecificPatterns:!0,randomPatterns:!1,name:"Count"}),new ke({timeLimit:-1,moveLimit:-1,totalClicks:78,patterns:[119,109,110,111,142,143,144,145,131,166,146,130,132,133,156,167,168,169,161,170,171,172,173,174,175,176],nPatterns:26,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:10,hasSpecificPatterns:!0,randomPatterns:!1,name:"Read"}),new ke({timeLimit:90,moveLimit:-1,totalClicks:80,patterns:[0,1,2,3,4,5,6,7,8,9],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!1,name:"Growing Square"}),new ke({timeLimit:120,moveLimit:-1,totalClicks:80,patterns:[136,19,18,17,47,177,14],nPatterns:7,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!1,name:"Shrinking Circle"}),new ke({timeLimit:-1,moveLimit:-1,totalClicks:60,patterns:[83,84,85,86,104,93,94,95,96,97,98,99,117,103,30,152],nPatterns:10,bigLayoutAdapt:!1,moveLimitPer:15,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Game of Life"}),new ke({timeLimit:40,moveLimit:-1,totalClicks:70,patterns:[69,45,66,130,178,179,180,182],nPatterns:7,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Snake"}),new ke({timeLimit:50,moveLimit:-1,totalClicks:44,patterns:[86,183,184,185],nPatterns:4,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!1,name:"Tile Centipede"}),new ke({timeLimit:60,moveLimit:-1,totalClicks:92,patterns:[1,10,11,24,25,27,28],nPatterns:12,bigLayoutAdapt:!1,moveLimitPer:-1,timeLimitPer:-1,hasSpecificPatterns:!0,randomPatterns:!0,name:"Category 3"})].map((e,n)=>e instanceof ke?(e.id=n*100,e):(e.challenges=e.challenges.map((s,i)=>(s.id=n*100+i,s)),e))),Bn(ke,"THRESHOLD",60);let ps=ke;const oh=t=>`${t}`,Io={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:oh},tilesSwapped:{name:"Tiles Swapped",display:oh},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${en.PUZZLES.length}`},challengesCompleted:{initialValue:[],name:"Challenges Completed",display:t=>`${t.length} / ${ps.CHALLENGES.length}`}},oI=Object.fromEntries(Object.keys(Io).map(t=>[t,Io[t].initialValue??0])),Q=e_("store",()=>{const t=Ne({}),e=Ne({}),n=Ne({}),s=Ne(5),i=Ne(17),r=Ne(51),o=Ne([0,1,2,3,100,101,102,103,200,300,400,500,600,700,800,900,1e3]),a=Ne([0,1,2]),l=Ne(2),c=Ne(!1);function u(x,O){a.value.splice(x,1),a.value.push(O)}const d=Ne({...rI});Ut(d,x=>{for(const O of Object.keys(d.value))dt[O].onChange(d.value[O])},{deep:!0});const h=Ne({...oI});setInterval(()=>{h.value.timePlayed+=10},1e4);function m(x){t.value=x}function _(x){e.value=x}function w(x){n.value=x}function A(x){l.value=x}return Ma(s,"difficulty"),Ma(h,"stats"),Ma(d,"settings"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,isRandomFreeplay:c,difficulty:s,setLayout:m,setPuzzle:_,setChallenge:w,unlockedChallenges:o,stats:h,currentTasks:a,maxTask:l,setTask:u,setMaxTask:A,unlockedCategoriesFP:i,unlockedCategoriesPZ:r,settings:d}}),ye=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},aI={components:{RouterView:Df},setup(){Q()}};function lI(t,e,n,s,i,r){const o=Mm("router-view");return I(),Fe(o,null,{default:De(({Component:a})=>[N(jt,{name:"fade",mode:"out-in"},{default:De(()=>[(I(),Fe(Om(a)))]),_:2},1024)]),_:1})}const cI=ye(aI,[["render",lI]]);const uI={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},dI=["src"];function hI(t,e,n,s,i,r){return I(),M("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[T("span",null,pe(n.name),1),T("img",{src:n.image},null,8,dI)])}const Ua=ye(uI,[["render",hI],["__scopeId","data-v-28f6e7f1"]]),fI="/tileswap-naenae/images/freeplay-transparent.png",pI="/tileswap-naenae/images/puzzles-transparent.png",mI="/tileswap-naenae/images/svg/challenges.svg",gI="/tileswap-naenae/images/svg/stats.svg",_I="/tileswap-naenae/images/svg/settings.svg",yI="/tileswap-naenae/images/svg/tasks.svg",vI="/tileswap-naenae/images/svg/tutorial.svg";const qc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},ah=()=>{ar(t=>({"4d678754":t.backgroundColor,"1fda82a2":t.color}))},lh=qc.setup;qc.setup=lh?(t,e)=>(ah(),lh(t,e)):ah;function wI(t,e,n,s,i,r){return I(),M("button",null,pe(n.text),1)}const Ve=ye(qc,[["render",wI],["__scopeId","data-v-5af88f32"]]);const CI={props:["icon","to"],methods:{handleClick(){this.to&&this.$router.push(this.to)}}},EI=["src"];function bI(t,e,n,s,i,r){return I(),M("main",{class:"container",onClick:e[0]||(e[0]=(...o)=>r.handleClick&&r.handleClick(...o))},[T("div",null,[T("img",{src:n.icon},null,8,EI)])])}const yi=ye(CI,[["render",bI],["__scopeId","data-v-c92adcf7"]]),II={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},qs=Object.assign(II,{__name:"LinkButton",setup(t){return(e,n)=>(I(),Fe(Ve,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const TI={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},SI={class:"modal"};function kI(t,e,n,s,i,r){return I(),M("div",null,[N(jt,{name:"fade"},{default:De(()=>[Kr(T("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Xa,n.modelValue]])]),_:1}),N(jt,{name:"zoom"},{default:De(()=>[Kr(T("div",SI,[Lm(t.$slots,"default",{},void 0,!0)],512),[[Xa,n.modelValue]])]),_:3})])}const Bt=ye(TI,[["render",kI],["__scopeId","data-v-51b89cb9"]]);const xI={computed:{list(){const{stats:t}=Q();return Object.keys(Io).map(e=>{const n=Io[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await Jb(`users/${Ko.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},PI=Object.assign(xI,{__name:"Stats",setup(t){return(e,n)=>(I(),M(_e,null,[T("ul",null,[(I(!0),M(_e,null,_t(e.list,(s,i)=>(I(),M("li",{key:i},pe(s),1))),128))]),ne(mr)?(I(),Fe(Ve,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):An("",!0)],64))}}),RI=ye(PI,[["__scopeId","data-v-4aef3568"]]),Er="/tileswap-naenae/images/svg/lock.svg",AI={props:["color"]},NI={width:"100%",height:"100%",viewBox:"0 0 79.374998 79.375002",version:"1.1",id:"svg2365","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"spike tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},MI=T("defs",{id:"defs2362"},null,-1),OI={"inkscape:groupmode":"layer",id:"layer2","inkscape:label":"Calque 2"},LI=T("g",{"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"},null,-1);function DI(t,e,n,s,i,r){return I(),M("svg",NI,[MI,T("g",OI,[T("path",{id:"rect14225",style:Rt([{fill:n.color},{"fill-opacity":"1",stroke:"none","stroke-width":"25.8844","stroke-linecap":"round","stroke-linejoin":"round","stroke-opacity":"0.97992","paint-order":"fill markers stroke"}]),d:"m 26.051013,2.1329395 c -0.280307,0 -0.560419,0.2218214 -0.775192,0.6642568 L 19.250381,15.20586 c -0.03632,0.07476 -0.06557,0.158085 -0.09569,0.239907 -0.272635,0.503967 -0.845653,1.512566 -1.345147,2.048236 -0.414097,0.444087 -1.181924,0.945319 -1.722347,1.271651 -0.218787,0.05195 -0.423681,0.120896 -0.606014,0.209384 L 3.0725302,25.000479 c -0.4424263,0.214801 -0.6656414,0.493523 -0.6656414,0.773807 0,0.280306 0.2232085,0.561805 0.6656414,0.776581 l 11.3963318,5.533142 c 0.112761,0.160036 0.195657,0.331364 0.259336,0.514487 -0.06309,0.194511 -0.156905,0.384143 -0.277353,0.567181 L 3.0711553,38.690499 c -0.4424257,0.214802 -0.6642565,0.493523 -0.6642565,0.773808 0,0.280306 0.2218152,0.561811 0.6642565,0.776581 l 11.3852337,5.528984 c 0.118611,0.164764 0.205962,0.339035 0.271808,0.528354 -0.06167,0.190034 -0.152587,0.376169 -0.26903,0.554698 L 3.0711553,52.38191 c -0.4424257,0.214802 -0.6642565,0.49352 -0.6642565,0.773808 0,0.280306 0.2232085,0.560421 0.6656414,0.775194 l 12.4086568,6.025441 c 0.41257,0.12556 0.597701,0.207062 0.863874,0.262106 0.564542,0.158158 1.265238,0.403385 1.664105,0.733597 0.820561,0.649608 0.857184,1.613332 1.241147,2.419879 l 6.02405,12.408666 c 0.214801,0.442425 0.49491,0.664256 0.775197,0.664256 0.280307,0 0.560415,-0.221815 0.775197,-0.664256 l 5.534541,-11.396329 c 0.160037,-0.112755 0.329974,-0.197016 0.513094,-0.260705 0.19451,0.06309 0.384146,0.156906 0.567181,0.277363 l 5.524825,11.379693 c 0.214802,0.442425 0.494911,0.664252 0.775195,0.664252 0.280306,0 0.561808,-0.221815 0.776581,-0.664252 l 5.5276,-11.385241 c 0.164764,-0.118611 0.340419,-0.205971 0.529735,-0.271789 0.190065,0.06165 0.374785,0.152584 0.553317,0.269033 l 5.528983,11.388016 c 0.214802,0.442425 0.494904,0.664252 0.775192,0.664252 0.280306,0 0.560421,-0.221815 0.775194,-0.664252 l 6.025444,-12.408663 c 0.09701,-0.199834 0.17015,-0.42865 0.223286,-0.671188 0.225135,-0.499538 0.588158,-1.201415 1.012325,-1.605861 0.698724,-0.666238 2.297853,-1.225889 2.297853,-1.225889 v -0.06378 c 0.0191,-0.0085 0.03955,-0.01597 0.05824,-0.02505 L 76.231999,53.75475 c 0.442431,-0.214801 0.665643,-0.49352 0.665643,-0.773807 0,-0.280306 -0.223224,-0.560422 -0.665643,-0.775198 L 64.835667,46.671216 C 64.722912,46.51118 64.640029,46.34124 64.57634,46.15812 c 0.06309,-0.194542 0.156905,-0.385534 0.277363,-0.568569 l 11.379693,-5.524822 c 0.442428,-0.214801 0.664252,-0.493523 0.664252,-0.77381 0,-0.280306 -0.221815,-0.561809 -0.664252,-0.776582 L 64.848155,32.986744 c -0.118611,-0.164764 -0.205972,-0.340419 -0.27179,-0.529738 0.06165,-0.190034 0.152584,-0.374788 0.269034,-0.553317 l 11.388016,-5.52898 c 0.442427,-0.214802 0.664252,-0.494911 0.664252,-0.775198 0,-0.280306 -0.223224,-0.560421 -0.665643,-0.775194 L 63.823434,18.798873 C 63.567332,18.674533 63.266106,18.586232 62.945617,18.534004 62.439575,18.241047 61.823493,17.840049 61.46734,17.43708 60.851471,16.74026 60.215105,15.137846 60.215105,15.137846 h -0.0166 L 54.207644,2.7972073 C 53.992843,2.3547816 53.712743,2.1329501 53.432456,2.1329501 c -0.280306,0 -0.560425,0.2218214 -0.775198,0.6642572 L 47.12273,14.19354 c -0.160037,0.112761 -0.32998,0.197025 -0.5131,0.260705 -0.194542,-0.06309 -0.384149,-0.156905 -0.567185,-0.277344 L 40.517623,2.7972095 C 40.302822,2.3547841 40.02272,2.1329527 39.742432,2.1329527 c -0.280275,0 -0.561808,0.2218214 -0.776581,0.6642568 L 33.438254,14.182449 c -0.164764,0.118588 -0.340416,0.205964 -0.529735,0.271795 -0.190065,-0.06167 -0.374791,-0.152587 -0.55332,-0.269024 L 26.826219,2.7972054 C 26.61143,2.3547797 26.331308,2.1329483 26.051022,2.1329483 Z M 63.802574,32.407138 v 0.0014 l -0.01409,0.04299 0.0085,0.02505 c -0.01033,-0.0047 -0.02161,-0.0091 -0.03191,-0.01409 v -0.03883 c 0.01221,-0.0056 0.02536,-0.01096 0.03745,-0.0166 z m 0.0027,13.691411 -0.01659,0.0527 0.0056,0.01534 c -0.0097,-0.0047 -0.01941,-0.0094 -0.02912,-0.01409 v -0.03607 c 0.01346,-0.0059 0.02693,-0.0119 0.04024,-0.01785 z M 32.893248,63.27764 h 0.0056 c 0.01096,0.02536 0.02192,0.05026 0.03328,0.0749 l -0.05408,-0.01534 -0.01409,0.0041 c 0.01002,-0.02098 0.01973,-0.04218 0.02912,-0.06378 z m 13.690021,0 h 0.0056 c 0.01065,0.02442 0.02223,0.04828 0.03329,0.07211 l -0.04299,-0.01221 -0.0263,0.0069 c 0.01033,-0.02223 0.02067,-0.04406 0.03037,-0.06657 z","sodipodi:nodetypes":"ccccscccscccccsccccssccccccscccccsccccsscccsccccscccccsccccsscccscccscccccscccccccccccccccccccccccccccccccccccc"},null,4)]),LI])}const t1=ye(AI,[["render",DI]]),FI={props:["color"]},$I={width:"100%",height:"100%",viewBox:"0 0 300 300",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"round.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},UI=T("defs",{id:"defs2"},null,-1),zI={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function VI(t,e,n,s,i,r){return I(),M("svg",$I,[UI,T("g",zI,[T("circle",{style:Rt([{fill:n.color},{"stroke-width":"60.979","stroke-linecap":"round","stroke-linejoin":"round","paint-order":"fill markers stroke"}]),id:"path846",cx:"150",cy:"150",r:"150"},null,4)])])}const n1=ye(FI,[["render",VI]]);const WI=["data-repr","data-value","data-locked","onClick"],BI=["src"],HI={methods:{changeSetting(t,e){if(e>dt[t].unlocked)return;const n=Q();n.settings[t]=e},formatRgb(t){return`rgb(${t.r},${t.g},${t.b})`},formatBR(t,e){let n="";for(let s=0;s<t.length;s++)n+=`${t[s]*e}px `;return n}},computed:{settingsList(){const{settings:t}=Q();return Object.fromEntries(Object.entries(dt).map(([n,s])=>[n,{...s,selected:t[n]}]))}}},jI=Object.assign(HI,{__name:"Settings",setup(t){return(e,n)=>(I(),M("ul",null,[(I(!0),M(_e,null,_t(e.settingsList,(s,i)=>(I(),M("li",{key:i},[or(pe(s.name)+" : ",1),(I(!0),M(_e,null,_t(s.options,(r,o)=>(I(),M("div",{style:Rt(`${r instanceof Array?r[0]instanceof Object?r.map((a,l)=>`--value-${l+1}: `+e.formatRgb(a)+";").join(" "):`--value: ${e.formatBR(r,.4)};`:`--value: ${r};`} 
        --selected: ${o===s.selected?"2px":"0px"};
        ${s.repr?`--repr: ${s.repr(o)};`:""}
        `),"data-repr":s.repr?s.repr(o):"","data-value":r,"data-locked":o>s.unlocked,class:Je(i),key:r+" "+o,onClick:a=>e.changeSetting(i,o)},[s.options[o]==="SpikeTile"?(I(),Fe(t1,{key:0,color:"#666"})):s.options[o]==="Round"?(I(),Fe(n1,{key:1,color:"#666"})):An("",!0),o>s.unlocked?(I(),M("img",{key:2,src:ne(Er)},null,8,BI)):An("",!0)],14,WI))),128))]))),128))]))}}),qI=ye(jI,[["__scopeId","data-v-dd7a611c"]]);const Gc={props:["value","max","text","barColor"],computed:{progress(){return this.value/this.max*100+"%"},barColorOrDefault(){return this.barColor??"var(--bg-color)"}}},ch=()=>{ar(t=>({"66efb67b":t.progress,57354920:t.barColorOrDefault}))},uh=Gc.setup;Gc.setup=uh?(t,e)=>(ch(),uh(t,e)):ch;const GI=t=>(Gt("data-v-7f09a05f"),t=t(),Kt(),t),KI={class:"container"},YI=GI(()=>T("div",{class:"progress"},null,-1)),QI={class:"text"};function JI(t,e,n,s,i,r){return I(),M("div",KI,[YI,T("div",QI,pe(n.text),1)])}const s1=ye(Gc,[["render",JI],["__scopeId","data-v-7f09a05f"]]),ZI={FREEPLAY:"freeplay layout",PUZZLE:"puzzle",CHALLENGE:"challenge"},xe=class xe{constructor({timesRequired:e,targetId:n,type:s,difficulty:i}){this.timesRequired=e,this.targetIds=n,this.type=s,this.targetsDone=[],this.id=-1,this.difficulty=i??-1}get completed(){return this.targetsDone.length>=this.timesRequired*this.targetIds.length}get progress(){return{text:`${this.targetsDone.length}/${this.timesRequired*this.targetIds.length}`,value:this.targetsDone.length/(this.timesRequired*this.targetIds.length)}}get text(){return`Complete the ${this.targetIds.length>1?this.targetIds.length:""} 
            highlighted ${ZI[this.type]}
            ${this.targetIds.length>1?"s":""} 
            ${this.timesRequired} time${this.timesRequired>1?"s":""} 
            ${this.timesRequired>1&&this.targetIds.length>1?"each":""} 
            ${this.difficulty!=-1?this.difficultyText():""}`}claim(){const{currentTasks:e,setTask:n,maxTask:s,setMaxTask:i}=Q(),r=e.indexOf(this.id);i(s+1);const o=s<xe.TASKS.length-1?s+1:-1;n(r,o)}difficultyText(){if(this.type!==xe.TASK_TYPES.FREEPLAY)return`in less than ${this.difficulty} ${this.type===xe.TASK_TYPES.PUZZLE?"moves":"seconds"}`;const e=je.LAYOUTS.filter(r=>r.id===this.targetIds[0])[0],n=["very easy","easy","normal","hard","very hard"],s=e.width*e.height-e.exclude.length;return`in ${n[Math.floor((this.difficulty-1)/(s/n.length))]} mode`}static isTaskTarget(e,n){const{currentTasks:s}=Q();return s.filter(i=>i!==-1).filter(i=>xe.TASKS[i].type===n).some(i=>{const r=xe.TASKS[i];return r.targetIds.includes(e)?r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired:!1})}static advanceTasks(e,n,s){const{currentTasks:i}=Q();i.filter(r=>r!==-1).filter(r=>xe.TASKS[r].type===n).filter(r=>xe.TASKS[r].targetIds.includes(e)).filter(r=>(n===xe.TASK_TYPES.FREEPLAY?xe.TASKS[r].difficulty<=s:xe.TASKS[r].difficulty>=s)||xe.TASKS[r].difficulty===-1).filter(r=>{const o=xe.TASKS[r];return o.targetsDone.reduce((a,l)=>a+(l===e?1:0),0)<o.timesRequired}).forEach(r=>{xe.TASKS[r].targetsDone.push(e)})}static generateTask(e,n){let s=[];if(n===xe.TASK_TYPES.PUZZLE){const i=Math.floor(Math.min(e*en.PUZZLES.length/100,en.PUZZLES.length*.9)),r=Math.floor(en.PUZZLES.length/10);s.push(Math.min(Math.floor(Math.random()*r+i),en.PUZZLES.length-1));const o=en.PUZZLES.filter(l=>l.id===s[0])[0],a=e<=30?-1:e<=60?o.solution.length*1.2:o.solution.length;return new xe({timesRequired:1,targetId:s,type:n,difficulty:Math.ceil(a)})}}};Bn(xe,"TASK_TYPES",{FREEPLAY:"FREEPLAY",PUZZLE:"PUZZLE",CHALLENGE:"CHALLENGE"}),Bn(xe,"TASKS",[new xe({timesRequired:2,targetId:[1],type:xe.TASK_TYPES.FREEPLAY,difficulty:16}),xe.generateTask(Math.random()*99+1,xe.TASK_TYPES.PUZZLE),new xe({timesRequired:1,targetId:[1],type:xe.TASK_TYPES.CHALLENGE,difficulty:2})].map((e,n)=>(e.id=n,e)));let ot=xe;const XI={class:"container"},eT=["onClick"],tT={methods:{claimTask(t){t.completed&&t.claim()}},computed:{tasks(){const{currentTasks:t}=Q();return t.filter(e=>e!==-1).map(e=>ot.TASKS[e])}}},nT=Object.assign(tT,{__name:"TaskContainer",setup(t){return(e,n)=>(I(),M("div",XI,[N(Dg,{name:"slide"},{default:De(()=>[(I(!0),M(_e,null,_t(e.tasks,s=>(I(),M("div",{onClick:i=>e.claimTask(s),class:Je(["task",{"completed-task":s.completed}]),key:s.id},[T("p",null,pe(s.text),1),N(s1,{barColor:s.completed?"var(--hl-color)":null,value:s.progress.value,text:s.progress.text,max:"1"},null,8,["barColor","value","text"])],10,eT))),128))]),_:1})]))}}),sT=ye(nT,[["__scopeId","data-v-f034b974"]]);const iT={},i1=t=>(Gt("data-v-6e93468f"),t=t(),Kt(),t),rT=i1(()=>T("h1",null,[or("tile"),T("span",null,"swap")],-1)),oT=i1(()=>T("p",null," loading... ",-1)),aT=[rT,oT];function lT(t,e){return I(),M("main",null,aT)}const cT=ye(iT,[["render",lT],["__scopeId","data-v-6e93468f"]]),Kc=()=>{let t=Ne(window.innerWidth),e=Ne(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;$i(()=>window.addEventListener("resize",n)),$i(()=>window.addEventListener("resize",s)),Ui(()=>window.removeEventListener("resize",n)),Ui(()=>window.removeEventListener("resize",s));const i=Oe(()=>t.value),r=Oe(()=>e.value);return{width:i,height:r}};const ia=t=>(Gt("data-v-62a12201"),t=t(),Kt(),t),uT={class:"container"},dT=ia(()=>T("h1",{class:"main-title"},[or("Tile"),T("span",null,"Swap")],-1)),hT={class:"buttons"},fT=ia(()=>T("h1",null,"Stats",-1)),pT=ia(()=>T("h1",null,"Settings",-1)),mT=ia(()=>T("h1",null,"Tasks",-1)),gT={data(){const{width:t}=Kc();return{windowWidth:t,user:Ko,isSignedIn:mr,showStats:!1,showTasks:!1,showSettings:!1,showSplash:!Yi.value}},methods:{signOut:fl,signInForm(){$w(prompt("Email"),prompt("Password"))}},mounted(){Ut(Yi,t=>{this.showSplash=!1})}},_T=Object.assign(gT,{__name:"HomeView",setup(t){return(e,n)=>(I(),M("div",uT,[dT,T("main",hT,[N(Ua,{name:"Freeplay",image:ne(fI),path:"/freeplaySelection"},null,8,["image"]),N(Ua,{name:"Puzzles",image:ne(pI),path:"/puzzleSelection"},null,8,["image"]),N(Ua,{name:"Challenges",image:ne(mI),path:"/challengeSelection"},null,8,["image"])]),T("div",{class:Je({bottom:e.windowWidth>600,center:e.windowWidth>600,"text-center":e.windowWidth<=600}),style:{width:"max-content"}},[N(yi,{icon:ne(yI),onClick:n[0]||(n[0]=s=>e.showTasks=!0)},null,8,["icon"]),N(yi,{icon:ne(gI),onClick:n[1]||(n[1]=s=>e.showStats=!0)},null,8,["icon"]),N(yi,{icon:ne(_I),onClick:n[2]||(n[2]=s=>e.showSettings=!0)},null,8,["icon"]),N(yi,{icon:ne(vI),to:"/tutorial"},null,8,["icon"])],2),T("div",{class:Je({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[ne(mr)?(I(),M("p",{key:0,onClick:n[3]||(n[3]=(...s)=>ne(fl)&&ne(fl)(...s))}," You are logged in as "+pe(ne(Ko).displayName),1)):(I(),M("p",{key:1,onClick:n[4]||(n[4]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),N(Bt,{modelValue:e.showStats,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showStats=s)},{default:De(()=>[fT,N(RI),N(Ve,{black:"",text:"close",onClick:n[5]||(n[5]=s=>e.showStats=!1)})]),_:1},8,["modelValue"]),N(Bt,{modelValue:e.showSettings,"onUpdate:modelValue":n[7]||(n[7]=s=>e.showSettings=s)},{default:De(()=>[pT,N(qI)]),_:1},8,["modelValue"]),N(Bt,{modelValue:e.showTasks,"onUpdate:modelValue":n[9]||(n[9]=s=>e.showTasks=s)},{default:De(()=>[mT,N(sT),N(Ve,{black:"",text:"close",onClick:n[8]||(n[8]=s=>e.showTasks=!1)})]),_:1},8,["modelValue"]),N(jt,{name:"fade"},{default:De(()=>[e.showSplash?(I(),Fe(cT,{key:0})):An("",!0)]),_:1})]))}}),yT=ye(_T,[["__scopeId","data-v-62a12201"]]);const vT=["data-level","title"],wT={key:0},CT={key:1},ET=["src"],bT={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return ot.isTaskTarget(this.layout.id,ot.TASK_TYPES.FREEPLAY)},unlocked(){return Q().unlockedCategoriesFP>=this.layout.unlockCategory}},methods:{openGame(){if(!this.unlocked)return;const t=Q();t.isRandomFreeplay=!1,t.setLayout(this.layout),this.$router.push("/freeplayGame")}}},IT=Object.assign(bT,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(I(),M("div",{onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s)),"data-level":t.completion,class:Je(["container",{"is-task-target":e.isTaskTarget,locked:!e.unlocked}]),title:`${t.layout.width}x${t.layout.height} - ${t.layout.exclude.length} (id: ${t.layout.id})`},[e.unlocked?(I(),M("div",wT,[(I(!0),M(_e,null,_t(e.includedTiles,s=>(I(),M("div",{key:"t"+s,class:"tile",style:Rt({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))])):(I(),M("div",CT,[T("img",{src:ne(Er)},null,8,ET)]))],10,vT))}}),TT=ye(IT,[["__scopeId","data-v-3fad0b60"]]),ST="/tileswap-naenae/images/svg/random.svg";const r1=t=>(Gt("data-v-22e631e2"),t=t(),Kt(),t),kT=r1(()=>T("h1",{class:"title"},"Select a layout",-1)),xT=r1(()=>T("br",null,null,-1)),PT={class:"text-center"},RT={data(){const t=new Set(je.FILTERED_LAYOUTS.map(s=>s.unlockCategory)).size,e=Math.min(...je.FILTERED_LAYOUTS.map(s=>s.unlockCategory));return{layouts:new Array(t).fill(0).map((s,i)=>je.FILTERED_LAYOUTS.filter(r=>r.unlockCategory===i+e))}},methods:{goHome(){this.$router.push("/")},startRandomFreeplay(){const t=Q();t.isRandomFreeplay=!0,t.setLayout(je.getRandomLayout()),this.$router.push("/freeplayGame")}}},AT=Object.assign(RT,{__name:"FreeplaySelection",setup(t){return(e,n)=>(I(),M("main",null,[kT,N(qs,{class:"top right",text:"back",to:"/"}),xT,T("div",null,[T("div",PT,[N(yi,{icon:ne(ST),onClick:e.startRandomFreeplay},null,8,["icon","onClick"])]),(I(!0),M(_e,null,_t(e.layouts,(s,i)=>(I(),M("div",{class:"layouts",key:i},[(I(!0),M(_e,null,_t(s,(r,o)=>(I(),Fe(TT,{layout:r,completion:r.id,key:o},null,8,["layout","completion"]))),128))]))),128))])]))}}),NT=ye(AT,[["__scopeId","data-v-22e631e2"]]);const MT={key:0},OT={key:1},LT=["src"],DT={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return Q().stats.puzzlesCompleted.some(({id:e})=>e===this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return ot.isTaskTarget(this.puzzle.id,ot.TASK_TYPES.PUZZLE)},buttonColor(){const t=this.puzzle.solution.length,e=this.puzzle.completionMoves;return this.solved?e<=t?"var(--success-color)":e<=t*1.2?"var(--silver-color)":"var(--bronze-color)":"var(--hl-color)"},unlocked(){return Q().unlockedCategoriesPZ>=this.puzzle.id}},methods:{openGame(){if(!this.unlocked)return;const t=Q();t.setPuzzle(this.puzzle),t.setLayout(this.layout),jc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},FT=Object.assign(DT,{__name:"PuzzleSelectionButton",setup(t){return ar(e=>({"0aae944e":e.buttonColor})),(e,n)=>(I(),M("div",{class:Je(["container",{"is-task-target":e.isTaskTarget,locked:!e.unlocked}]),onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[e.unlocked?(I(),M("div",MT,[(I(!0),M(_e,null,_t(e.includedTiles,s=>(I(),M("div",{key:"t"+s,class:"tile",style:Rt({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))])):(I(),M("div",OT,[T("img",{src:ne(Er)},null,8,LT)]))],2))}}),$T=ye(FT,[["__scopeId","data-v-e32dd1ff"]]);const UT=t=>(Gt("data-v-e30da421"),t=t(),Kt(),t),zT=UT(()=>T("h1",{class:"title"},"Select a puzzle",-1)),VT={class:"layouts"},WT={data(){return{puzzles:en.FILTERED_PUZZLES}}},BT=Object.assign(WT,{__name:"PuzzleSelection",setup(t){return(e,n)=>(I(),M("main",null,[zT,N(qs,{class:"top right",text:"back",to:"/"}),T("div",VT,[(I(!0),M(_e,null,_t(e.puzzles,(s,i)=>(I(),Fe($T,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),HT=ye(BT,[["__scopeId","data-v-e30da421"]]);function To(t){const e=Math.floor(t/60).toString(),n=(t%60).toString();return`${e.padStart(2,"0")}:${n.padStart(2,"0")}`}const jT=["innerHTML"],qT={key:1,class:"locked"},GT=["src"],KT={props:["challenge","locked"],computed:{formattedChall(){const t=this.challenge.moveLimit.toString(),e=this.challenge.nPatterns.toString(),n=this.challenge.maxPercent!==0?this.challenge.maxPercent!==100?this.challenge.maxPercent+"%":this.challenge.timeLimit!==-1?To(this.challenge.minTime):this.challenge.moveLimit!==-1?this.challenge.minMoves+" moves":"":"";return(this.challenge.name?this.challenge.name:To(challenge.timeLimit)+"<br>"+(t>0?t+" moves<br>":"no move limit<br>")+e+" layouts")+` ${(n&&"<br>(")+n+(n&&")")}`},isTaskTarget(){return ot.isTaskTarget(this.challenge.id,ot.TASK_TYPES.CHALLENGE)}}},YT=Object.assign(KT,{__name:"ChallengeSelectionButton",setup(t){return ar(e=>({"6e7be234":e.color})),(e,n)=>t.locked?(I(),M("div",qT,[T("img",{src:ne(Er)},null,8,GT)])):(I(),M("div",{key:0,class:Je({"is-task-target":e.isTaskTarget,"is-completed":t.challenge.maxPercent===100}),innerHTML:e.formattedChall},null,10,jT))}}),QT=ye(YT,[["__scopeId","data-v-9398785b"]]);const JT={key:1,class:"locked"},ZT=["src"],XT={props:["category","locked"]},eS=Object.assign(XT,{__name:"ChallengeCategoryButton",setup(t){return(e,n)=>t.locked?(I(),M("div",JT,[T("img",{src:ne(Er)},null,8,ZT)])):(I(),Fe(Ve,{key:0,text:t.category.name},null,8,["text"]))}}),tS=ye(eS,[["__scopeId","data-v-3052142c"]]);const nS=t=>(Gt("data-v-10fe3517"),t=t(),Kt(),t),sS=nS(()=>T("h1",{class:"title"},"Select a challenge",-1)),iS={class:"name"},rS={data(){return{challenges:ps.CHALLENGES,categoryName:""}},methods:{selectChallenge(t){if(!this.isUnlocked(t))return;const e=Q();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),jc(t.modulo),this.$router.push("/challengeGame")},selectCategory(t){this.isUnlocked(t)&&(this.challenges=t.challenges,this.categoryName=t.name)},isUnlocked(t){const{unlockedChallenges:e}=Q();if(t instanceof ps)return e.includes(t.id);for(let n=0;n<t.challenges.length;n++)if(e.includes(t.challenges[n].id))return!0;return!1}}},oS=Object.assign(rS,{__name:"ChallengeSelection",setup(t){return(e,n)=>(I(),M("div",null,[sS,e.categoryName?(I(),Fe(Ve,{key:1,class:"top right",text:"back",onClick:n[0]||(n[0]=s=>{e.categoryName="",e.challenges=ne(ps).CHALLENGES})})):(I(),Fe(qs,{key:0,class:"top right",text:"back",to:"/"})),T("h3",iS,pe(e.categoryName),1),N(jt,{name:"fade",mode:"out-in"},{default:De(()=>[(I(),M("div",{class:"container",key:e.categoryName},[(I(!0),M(_e,null,_t(e.challenges,s=>(I(),M("div",{key:s.id},[s instanceof ne(ps)?(I(),Fe(QT,{key:0,title:`id: ${s.id}`,onClick:i=>e.selectChallenge(s),challenge:s,locked:!e.isUnlocked(s)},null,8,["title","onClick","challenge","locked"])):(I(),Fe(tS,{key:1,onClick:i=>e.selectCategory(s),category:s,locked:!e.isUnlocked(s)},null,8,["onClick","category","locked"]))]))),128))]))]),_:1})]))}}),aS=ye(oS,[["__scopeId","data-v-10fe3517"]]),lS={props:["color","shape"]},dh=Object.assign(lS,{__name:"TileShape",setup(t){return(e,n)=>(I(),M("div",null,[t.shape==="SpikeTile"?(I(),Fe(t1,{key:0,color:t.color},null,8,["color"])):t.shape==="Round"?(I(),Fe(n1,{key:1,color:t.color},null,8,["color"])):An("",!0)]))}});const cS={class:"inner-tile"},uS={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:Ri.value[this.tile],backColor:Ri.value[this.mod(this.tile+1)],frontOutline:Fa.value[this.tile],backOutline:Fa.value[this.mod(this.tile+1)],frontHighlight:$a.value[this.tile],backHighlight:$a.value[this.mod(this.tile+1)],tileSVG:dt.tilesSVG.value,gradient:Ri,outlineGradient:Fa,highlightGradient:$a}},computed:{borderRadiusSetting(){return Math.max(...dt.tilesShape.value)}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Z.value+Z.value)%Z.value}},mounted(){const t=Q(),e=dt.tilesShape.value,n=()=>{const{width:s,height:i}=t.currentLayout,r=1/(Math.sqrt(s**2+i**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius="";for(let o=0;o<e.length;o++)this.borderRadius+=`${e[o]*r*.2/30}px `;this.tileSize=r+"px"};Ut(()=>t.currentLayout,n,{deep:!0,immediate:!1}),n(),window.addEventListener("resize",n),this.$nextTick(n),window.addEventListener("orientationchange",n)}},dS=Object.assign(uS,{__name:"Tile",setup(t){return ar(e=>({"7258b842":e.tileSize,"5e029cb9":t.visible?1:0,ae58ba5e:e.borderRadius,"919d87bc":t.visible?"pointer":"default",e8ce4e68:e.frontOutline})),(e,n)=>(I(),M("div",{class:Je(["tile",{"flipped-tile":e.flipped}])},[T("div",cS,[T("div",{class:"front",style:Rt({background:"rgba(0,0,0,0)"})},[N(dh,{color:e.frontColor,shape:e.tileSVG},null,8,["color","shape"])],4),T("div",{class:"back",style:Rt({background:"rgba(0,0,0,0)"})},[N(dh,{color:e.backColor,shape:e.tileSVG},null,8,["color","shape"])],4)])],2))}}),hS=ye(dS,[["__scopeId","data-v-699224ed"]]);const fS={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){const{currentChallenge:t,settings:e}=Q();return{currentChallenge:t,settings:e,gradient:Ri,hoveredTile:null}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=Q(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}},shouldHover(t,e){return this.hoveredTile===null?!1:fs.value.map(([n,s])=>[n+this.hoveredTile.tile,s+this.hoveredTile.row]).some(([n,s])=>n===e&&s===t)},mouseOver(t,e){this.hoveredTile={row:t,tile:e}},mouseLeave(t,e){this.hoveredTile=null}}},pS=Object.assign(fS,{__name:"Layout",setup(t){return(e,n)=>(I(),M("div",null,[T("div",null,[(I(!0),M(_e,null,_t(t.modelValue.matrix,(s,i)=>{var r;return I(),M("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+ne(Z)},[(I(!0),M(_e,null,_t(s,(o,a)=>{var l;return I(),Fe(hS,{class:Je(["tile",{solution:ne(kn)&&t.solution&&t.solution[i][a]>=1,"color-blind":e.settings.colorBlind===1,hover:e.shouldHover(i,a)&&e.settings.hoverTiles===0}]),small:t.small,tile:o,"data-tile":`${o+1}`,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern)+t.modelValue.id,style:Rt({outline:t.target?`5px solid ${ne(Ri)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&ne(Z)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a),onMouseover:c=>o!==-1&&e.mouseOver(i,a),onMouseleave:c=>o!==-1&&e.mouseLeave(i,a)},null,8,["small","tile","data-tile","visible","position","class","style","data-moves","onClick","onMouseover","onMouseleave"])}),128))])}),128))])]))}}),ra=ye(pS,[["__scopeId","data-v-16e959f9"]]);const mS={props:["modelValue"],emits:["update:modelValue"],data(){const t=Q();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Z.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},gS={class:"diff"},_S=["value","max"];function yS(t,e,n,s,i,r){return I(),M("div",gS,[T("h2",null,"difficulty - "+pe(r.difficultyText),1),T("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,_S)])}const vS=ye(mS,[["render",yS],["__scopeId","data-v-a2a93efe"]]);const wS={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},CS={class:"diff"},ES=["value"];function bS(t,e,n,s,i,r){return I(),M("div",CS,[T("h2",null,"states - "+pe(r.moduloText),1),T("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,ES)])}const IS=ye(wS,[["render",bS],["__scopeId","data-v-fa2b05d6"]]);const br=t=>(Gt("data-v-8137888a"),t=t(),Kt(),t),TS={class:"top-menu"},SS=br(()=>T("span",null," DEV ",-1)),kS=[SS],xS={class:"top right"},PS=br(()=>T("h1",null,"DevMode",-1)),RS={class:"input"},AS=br(()=>T("hr",null,null,-1)),NS={key:0},MS=br(()=>T("p",null,"Only one solution found:",-1)),OS={key:1},LS=br(()=>T("p",null,"Multiple solutions found:",-1)),DS=["onClick"],FS={data(){const t=Q(),e=t.currentLayout,{width:n}=Kc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Z.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty,this.randomize()},internalModulo(t){jc(t),this.randomize()},showModal(){this.showModal||(this.store.isRandomFreeplay&&(this.store.setLayout(je.getRandomLayout()),this.layout=this.store.currentLayout),this.randomize())}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,kn.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Z.value+Z.value)%Z.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0,ot.advanceTasks(this.layout.id,ot.TASK_TYPES.FREEPLAY,this.store.difficulty))},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Z.value-1))),this.$nextTick(()=>{try{kn.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=e1(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),Ut(kn,t=>{t&&this.updateSolutions()})}},$S=Object.assign(FS,{__name:"FreeplayGame",setup(t){return(e,n)=>(I(),M("div",null,[T("div",TS,[ne(kn)&&e.windowWidth<600?(I(),M("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},kS)):An("",!0),N(Ve,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),N(vS,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),Kr(T("p",{class:Je(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},pe(e.moves)+" move"+pe(e.moves>1?"s":""),3),[[Xa,e.moves>0]]),T("div",xS,[N(qs,{text:"back",to:"/freeplaySelection"}),N(IS,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),T("main",null,[N(jt,{name:"fade",mode:"out-in"},{default:De(()=>[(I(),Fe(ra,{key:ne(Z)+e.layout.id,modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:ne(kn)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),ne(kn)?An("",!0):(I(),M("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>ne(rh)(!0))},"v")),N(jt,{name:"fade"},{default:De(()=>[ne(kn)&&(!(e.windowWidth<600)||e.showDevMode)?(I(),M("div",{key:0,class:Je(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[T("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>ne(rh)(!1))},"x"),PS,T("div",RS,[Kr(T("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[Vg,e.solveOnClick]]),or(" re-solve on click ")]),T("p",null,"Det: "+pe(e.determinant),1),AS,e.determinant!==0?(I(),M("div",NS,[MS,T("p",null,pe(e.solutions[0].moves)+" moves",1)])):(I(),M("div",OS,[LS,(I(!0),M(_e,null,_t(e.solutions,(s,i)=>(I(),M("p",{class:Je(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},pe(s.moves)+" moves ",11,DS))),128))]))],2)):An("",!0)]),_:1}),N(Bt,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:De(()=>[T("h1",null,"you won in "+pe(e.moves)+" move"+pe(e.moves>1?"s":"")+"!",1),N(Ve,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),US=ye($S,[["__scopeId","data-v-8137888a"]]);const zS=t=>(Gt("data-v-7c92567c"),t=t(),Kt(),t),VS=zS(()=>T("h1",null,"no moves remaining!",-1)),WS={data(){const e=Q().currentPuzzle,n=e.base.copy(),{width:s}=Kc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves},completionMoves(){return this.puzzle.completionMoves===-1?"":`current best: ${this.puzzle.completionMoves} moves`},nextMedal(){return this.puzzle.completionMoves===-1?"next medal: finish the puzzle":this.puzzle.completionMoves<=this.puzzle.solution.length?"":`next medal: ${this.puzzle.completionMoves<=this.puzzle.solution.length*1.2?this.puzzle.solution.length:Math.floor(this.puzzle.solution.length*1.2)} moves`}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){this.remainingMoves>0&&(Q(),this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,this.puzzle.completionMoves=this.moves,ot.advanceTasks(this.puzzle.id,ot.TASK_TYPES.PUZZLE,this.moves)):this.remainingMoves===0&&(this.showLostModal=!0))}}},BS=Object.assign(WS,{__name:"PuzzleGame",setup(t){return(e,n)=>(I(),M("div",null,[N(qs,{class:"top right",text:"back",to:"/puzzleSelection"}),T("div",{class:Je(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[T("h1",null,pe(e.remainingMoves)+" move"+pe(e.remainingMoves>1?"s":"")+" remaining",1),T("h1",null,pe(e.completionMoves),1),T("h1",null,pe(e.nextMedal),1),N(Ve,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),T("main",null,[N(ra,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),N(Bt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:De(()=>[T("h1",null,"you won in "+pe(e.moves)+" move"+pe(e.moves>1?"s":"")+"!",1),N(Ve,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),N(Bt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:De(()=>[VS,N(Ve,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),N(qs,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),HS=ye(BS,[["__scopeId","data-v-7c92567c"]]);const o1=t=>(Gt("data-v-e6578300"),t=t(),Kt(),t),jS={key:0},qS={class:"info center"},GS={class:"per center"},KS={key:1,class:"info center"},YS=o1(()=>T("h1",null,"you won the challenge!",-1)),QS=o1(()=>T("h1",null,"Are you sure you want to go back?",-1)),JS={data(){const{currentChallenge:t}=Q();return{currentChallenge:t,time:t.timeLimit,timePer:t.timeLimitPer,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,showPauseModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=Q();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.timePer=this.currentChallenge.timeLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.minTime=Math.min(this.currentChallenge.timeLimit-this.time,this.currentChallenge.minTime),this.currentChallenge.maxPercent=100,this.currentChallenge.minMoves=Math.min(this.currentChallenge.moveLimit-this.nMoves,this.currentChallenge.minMoves),ot.advanceTasks(this.currentChallenge.id,ot.TASK_TYPES.CHALLENGE,this.currentChallenge.timeLimit-this.time),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))},resume(){this.showPauseModal=!1},quit(){this.showPauseModal=!1,window.clearInterval(this.timerId),this.currentChallenge.reset(),this.$router.push("/challengeSelection")}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){return this.currentChallenge.timeLimit!==-1?To(this.time)+"- ":""},formattedTimePer(){return this.currentChallenge.timeLimitPer!==-1?To(this.timePer).toString():""},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)},moves(){return this.nMoves<=-1?"":this.nMoves+" -"},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer+(this.currentChallenge.timeLimitPer===-1?"":" - ")}},mounted(){this.timerId=window.setInterval(()=>{this.currentChallenge.timeLimit!==-1&&(this.time-=1*this.hasStarted*!this.showPauseModal,this.time<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))),this.currentChallenge.timeLimitPer!==-1&&(this.timePer-=1*this.hasStarted*!this.showPauseModal,this.timePer<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId)))},1e3)}},ZS=Object.assign(JS,{__name:"ChallengeGame",setup(t){return(e,n)=>(I(),M("div",null,[N(Ve,{class:"top right",text:"back",onClick:n[0]||(n[0]=s=>e.showPauseModal=!0)}),e.hasStarted?(I(),M("div",jS,[T("h2",qS,pe(e.formattedTime)+" "+pe(e.moves)+" "+pe(e.percentageCompleted+"%"),1),T("h2",GS,pe(e.movesPer)+" "+pe(e.formattedTimePer),1)])):(I(),M("h2",KS,"Click To Start The Challenge !")),N(s1,{class:"center progress",value:e.percentageCompleted,max:100},null,8,["value"]),T("main",null,[N(jt,{name:"fade",mode:"out-in"},{default:De(()=>[(I(),Fe(ra,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[1]||(n[1]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),N(Bt,{modelValue:e.showWinModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showWinModal=s)},{default:De(()=>[YS,N(Ve,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),N(Bt,{modelValue:e.showLostModal,"onUpdate:modelValue":n[5]||(n[5]=s=>e.showLostModal=s)},{default:De(()=>[T("h1",null,pe(e.modalText),1),N(Ve,{black:"",text:"adnwkhu!",onClick:n[4]||(n[4]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"]),N(Bt,{modelValue:e.showPauseModal,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showPauseModal=s)},{default:De(()=>[QS,N(Ve,{black:"",text:"resume",onClick:e.resume},null,8,["onClick"]),N(Ve,{black:"",text:"quit",onClick:e.quit},null,8,["onClick"])]),_:1},8,["modelValue"])]))}}),XS=ye(ZS,[["__scopeId","data-v-e6578300"]]),ek=T("h1",{class:"title"},"how to play",-1),tk={key:0},nk=T("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),sk=T("h1",null,"Try to get all the tiles to be white!",-1),ik={key:1},rk=T("h1",null,"Nice! Now observe what happens at the corners",-1),ok={key:2},ak=T("h1",null,"Well done! Okay one last , a bit harder",-1),lk={key:3},ck=T("h1",null,"Great job! Ready to play?",-1),uk=T("h1",{class:"text-center"},"Try it here!",-1),dk={data(){const t=Q(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new je({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},hk=Object.assign(dk,{__name:"TutorialView",setup(t){return(e,n)=>(I(),M("div",null,[ek,N(Bt,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:De(()=>[e.stage===-1?(I(),M("div",tk,[nk,sk,N(Ve,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(I(),M("div",ik,[rk,N(Ve,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(I(),M("div",ok,[ak,N(Ve,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(I(),M("div",lk,[ck,N(Ve,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),uk,N(ra,{class:Je([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}});const fk={},oa=t=>(Gt("data-v-54240160"),t=t(),Kt(),t),pk=oa(()=>T("div",{class:"tile"},null,-1)),mk=oa(()=>T("div",{class:"tile"},null,-1)),gk=oa(()=>T("div",{class:"tile"},null,-1)),_k=oa(()=>T("div",{class:"tile"},null,-1)),yk=[pk,mk,gk,_k];function vk(t,e){return I(),M("main",null,yk)}const wk=ye(fk,[["render",vk],["__scopeId","data-v-54240160"]]),Ck=X_({history:g_("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:yT},{path:"/tutorial",name:"tutorial",component:hk},{path:"/freeplaySelection",name:"freeplaySelection",component:NT},{path:"/puzzleSelection",name:"puzzleSelection",component:HT},{path:"/challengeSelection",name:"challengeSelection",component:aS},{path:"/freeplayGame",name:"freeplayGame",component:US},{path:"/puzzleGame",name:"puzzleGame",component:HS},{path:"/challengeGame",name:"challengeGame",component:XS},{path:"/test",name:"test",component:wk}]}),Yc=jg(cI),a1=Kg();lr(a1);Yc.use(Ck);Yc.use(a1);Yc.mount("#app");
