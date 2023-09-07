var i0=Object.defineProperty;var r0=(t,e,n)=>e in t?i0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var zn=(t,e,n)=>(r0(t,typeof e!="symbol"?e+"":e,n),n),Jc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var ii=(t,e,n)=>(Jc(t,e,"read from private field"),n?n.call(t):e.get(t)),Er=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Ot=(t,e,n)=>(Jc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function bl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Se={},Ts=[],St=()=>{},o0=()=>!1,a0=/^on[^a-z]/,Io=t=>a0.test(t),Il=t=>t.startsWith("onUpdate:"),Le=Object.assign,Tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l0=Object.prototype.hasOwnProperty,le=(t,e)=>l0.call(t,e),B=Array.isArray,Ss=t=>sr(t)==="[object Map]",To=t=>sr(t)==="[object Set]",Xc=t=>sr(t)==="[object Date]",X=t=>typeof t=="function",De=t=>typeof t=="string",Ri=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",hh=t=>ye(t)&&X(t.then)&&X(t.catch),fh=Object.prototype.toString,sr=t=>fh.call(t),c0=t=>sr(t).slice(8,-1),ph=t=>sr(t)==="[object Object]",Sl=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nr=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u0=/-(\w)/g,zt=So(t=>t.replace(u0,(e,n)=>n?n.toUpperCase():"")),d0=/\B([A-Z])/g,js=So(t=>t.replace(d0,"-$1").toLowerCase()),ko=So(t=>t.charAt(0).toUpperCase()+t.slice(1)),sa=So(t=>t?`on${ko(t)}`:""),Pi=(t,e)=>!Object.is(t,e),Or=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},h0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},f0=t=>{const e=De(t)?Number(t):NaN;return isNaN(e)?t:e};let Zc;const Da=()=>Zc||(Zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xt(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=De(s)?_0(s):xt(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(De(t))return t;if(ye(t))return t}}const p0=/;(?![^(]*\))/g,m0=/:([^]+)/,g0=/\/\*[^]*?\*\//g;function _0(t){const e={};return t.replace(g0,"").split(p0).forEach(n=>{if(n){const s=n.split(m0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ge(t){let e="";if(De(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Ge(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v0=bl(y0);function mh(t){return!!t||t===""}function w0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=xo(t[s],e[s]);return n}function xo(t,e){if(t===e)return!0;let n=Xc(t),s=Xc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ri(t),s=Ri(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?w0(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xo(t[o],e[o]))return!1}}return String(t)===String(e)}function gh(t,e){return t.findIndex(n=>xo(n,e))}const ke=t=>De(t)?t:t==null?"":B(t)||ye(t)&&(t.toString===fh||!X(t.toString))?JSON.stringify(t,_h,2):String(t),_h=(t,e)=>e&&e.__v_isRef?_h(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:To(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!B(e)&&!ph(e)?String(e):e;let ft;class yh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function vh(t){return new yh(t)}function C0(t,e=ft){e&&e.active&&e.effects.push(t)}function wh(){return ft}function E0(t){ft&&ft.cleanups.push(t)}const kl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ch=t=>(t.w&Mn)>0,Eh=t=>(t.n&Mn)>0,b0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mn},I0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ch(i)&&!Eh(i)?i.delete(t):e[n++]=i,i.w&=~Mn,i.n&=~Mn}e.length=n}},zr=new WeakMap;let hi=0,Mn=1;const Fa=30;let wt;const ns=Symbol(""),$a=Symbol("");class xl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,C0(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Sn=!0,Mn=1<<++hi,hi<=Fa?b0(this):eu(this),this.fn()}finally{hi<=Fa&&I0(this),Mn=1<<--hi,wt=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(eu(this),this.onStop&&this.onStop(),this.active=!1)}}function eu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const bh=[];function qs(){bh.push(Sn),Sn=!1}function Ks(){const t=bh.pop();Sn=t===void 0?!0:t}function ct(t,e,n){if(Sn&&wt){let s=zr.get(t);s||zr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=kl()),Ih(i)}}function Ih(t,e){let n=!1;hi<=Fa?Eh(t)||(t.n|=Mn,n=!Ch(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function tn(t,e,n,s,i,r){const o=zr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Sl(n)&&a.push(o.get("length")):(a.push(o.get(ns)),Ss(t)&&a.push(o.get($a)));break;case"delete":B(t)||(a.push(o.get(ns)),Ss(t)&&a.push(o.get($a)));break;case"set":Ss(t)&&a.push(o.get(ns));break}if(a.length===1)a[0]&&Ua(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ua(kl(l))}}function Ua(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&tu(s);for(const s of n)s.computed||tu(s)}function tu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function T0(t,e){var n;return(n=zr.get(t))==null?void 0:n.get(e)}const S0=bl("__proto__,__v_isRef,__isVue"),Th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ri)),k0=Rl(),x0=Rl(!1,!0),R0=Rl(!0),nu=P0();function P0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)ct(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qs();const s=ie(this)[e].apply(this,n);return Ks(),s}}),t}function A0(t){const e=ie(this);return ct(e,"has",t),e.hasOwnProperty(t)}function Rl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?K0:Ph:e?Rh:xh).get(s))return s;const o=B(s);if(!t){if(o&&le(nu,i))return Reflect.get(nu,i,r);if(i==="hasOwnProperty")return A0}const a=Reflect.get(s,i,r);return(Ri(i)?Th.has(i):S0(i))||(t||ct(s,"get",i),e)?a:Me(a)?o&&Sl(i)?a:a.value:ye(a)?t?Nh(a):ir(a):a}}const N0=Sh(),O0=Sh(!0);function Sh(t=!1){return function(n,s,i,r){let o=n[s];if(Ms(o)&&Me(o)&&!Me(i))return!1;if(!t&&(!Br(i)&&!Ms(i)&&(o=ie(o),i=ie(i)),!B(n)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=B(n)&&Sl(s)?Number(s)<n.length:le(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?Pi(i,o)&&tn(n,"set",s,i):tn(n,"add",s,i)),l}}function M0(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&tn(t,"delete",e,void 0),s}function L0(t,e){const n=Reflect.has(t,e);return(!Ri(e)||!Th.has(e))&&ct(t,"has",e),n}function D0(t){return ct(t,"iterate",B(t)?"length":ns),Reflect.ownKeys(t)}const kh={get:k0,set:N0,deleteProperty:M0,has:L0,ownKeys:D0},F0={get:R0,set(t,e){return!0},deleteProperty(t,e){return!0}},$0=Le({},kh,{get:x0,set:O0}),Pl=t=>t,Ro=t=>Reflect.getPrototypeOf(t);function br(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&ct(i,"get",e),ct(i,"get",r));const{has:o}=Ro(i),a=s?Pl:n?Ol:Ai;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ir(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&ct(s,"has",t),ct(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Tr(t,e=!1){return t=t.__v_raw,!e&&ct(ie(t),"iterate",ns),Reflect.get(t,"size",t)}function su(t){t=ie(t);const e=ie(this);return Ro(e).has.call(e,t)||(e.add(t),tn(e,"add",t,t)),this}function iu(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=Ro(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Pi(e,o)&&tn(n,"set",t,e):tn(n,"add",t,e),this}function ru(t){const e=ie(this),{has:n,get:s}=Ro(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&tn(e,"delete",t,void 0),r}function ou(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&tn(t,"clear",void 0,void 0),n}function Sr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?Pl:t?Ol:Ai;return!t&&ct(a,"iterate",ns),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function kr(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=Ss(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Pl:e?Ol:Ai;return!e&&ct(r,"iterate",l?$a:ns),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function U0(){const t={get(r){return br(this,r)},get size(){return Tr(this)},has:Ir,add:su,set:iu,delete:ru,clear:ou,forEach:Sr(!1,!1)},e={get(r){return br(this,r,!1,!0)},get size(){return Tr(this)},has:Ir,add:su,set:iu,delete:ru,clear:ou,forEach:Sr(!1,!0)},n={get(r){return br(this,r,!0)},get size(){return Tr(this,!0)},has(r){return Ir.call(this,r,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Sr(!0,!1)},s={get(r){return br(this,r,!0,!0)},get size(){return Tr(this,!0)},has(r){return Ir.call(this,r,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=kr(r,!1,!1),n[r]=kr(r,!0,!1),e[r]=kr(r,!1,!0),s[r]=kr(r,!0,!0)}),[t,n,e,s]}const[W0,V0,z0,B0]=U0();function Al(t,e){const n=e?t?B0:z0:t?V0:W0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(le(n,i)&&i in s?n:s,i,r)}const H0={get:Al(!1,!1)},j0={get:Al(!1,!0)},q0={get:Al(!0,!1)},xh=new WeakMap,Rh=new WeakMap,Ph=new WeakMap,K0=new WeakMap;function G0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Y0(t){return t.__v_skip||!Object.isExtensible(t)?0:G0(c0(t))}function ir(t){return Ms(t)?t:Nl(t,!1,kh,H0,xh)}function Ah(t){return Nl(t,!1,$0,j0,Rh)}function Nh(t){return Nl(t,!0,F0,q0,Ph)}function Nl(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Y0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function kn(t){return Ms(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ms(t){return!!(t&&t.__v_isReadonly)}function Br(t){return!!(t&&t.__v_isShallow)}function Oh(t){return kn(t)||Ms(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Po(t){return Vr(t,"__v_skip",!0),t}const Ai=t=>ye(t)?ir(t):t,Ol=t=>ye(t)?Nh(t):t;function Mh(t){Sn&&wt&&(t=ie(t),Ih(t.dep||(t.dep=kl())))}function Lh(t,e){t=ie(t);const n=t.dep;n&&Ua(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return Dh(t,!1)}function Q0(t){return Dh(t,!0)}function Dh(t,e){return Me(t)?t:new J0(t,e)}class J0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:Ai(e)}get value(){return Mh(this),this._value}set value(e){const n=this.__v_isShallow||Br(e)||Ms(e);e=n?e:ie(e),Pi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ai(e),Lh(this))}}function xe(t){return Me(t)?t.value:t}const X0={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Fh(t){return kn(t)?t:new Proxy(t,X0)}function Z0(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=tg(t,n);return e}class eg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return T0(ie(this._object),this._key)}}function tg(t,e,n){const s=t[e];return Me(s)?s:new eg(t,e,n)}class ng{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xl(e,()=>{this._dirty||(this._dirty=!0,Lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return Mh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sg(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=St):(s=t.get,i=t.set),new ng(s,i,r||!i,n)}function xn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ao(r,e,n)}return i}function mt(t,e,n,s){if(X(t)){const r=xn(t,e,n,s);return r&&hh(r)&&r.catch(o=>{Ao(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(mt(t[r],e,n,s));return i}function Ao(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xn(l,null,10,[t,o,a]);return}}ig(t,n,i,s)}function ig(t,e,n,s=!0){console.error(t)}let Ni=!1,Wa=!1;const Je=[];let Ft=0;const ks=[];let Gt=null,Gn=0;const $h=Promise.resolve();let Ml=null;function Ll(t){const e=Ml||$h;return t?e.then(this?t.bind(this):t):e}function rg(t){let e=Ft+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Oi(Je[s])<t?e=s+1:n=s}return e}function Dl(t){(!Je.length||!Je.includes(t,Ni&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Je.push(t):Je.splice(rg(t.id),0,t),Uh())}function Uh(){!Ni&&!Wa&&(Wa=!0,Ml=$h.then(Vh))}function og(t){const e=Je.indexOf(t);e>Ft&&Je.splice(e,1)}function ag(t){B(t)?ks.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?Gn+1:Gn))&&ks.push(t),Uh()}function au(t,e=Ni?Ft+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function Wh(t){if(ks.length){const e=[...new Set(ks)];if(ks.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>Oi(n)-Oi(s)),Gn=0;Gn<Gt.length;Gn++)Gt[Gn]();Gt=null,Gn=0}}const Oi=t=>t.id==null?1/0:t.id,lg=(t,e)=>{const n=Oi(t)-Oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vh(t){Wa=!1,Ni=!0,Je.sort(lg);const e=St;try{for(Ft=0;Ft<Je.length;Ft++){const n=Je[Ft];n&&n.active!==!1&&xn(n,null,14)}}finally{Ft=0,Je.length=0,Wh(),Ni=!1,Ml=null,(Je.length||ks.length)&&Vh()}}function cg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Se;h&&(i=n.map(m=>De(m)?m.trim():m)),d&&(i=n.map(h0))}let a,l=s[a=sa(e)]||s[a=sa(zt(e))];!l&&r&&(l=s[a=sa(js(e))]),l&&mt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(c,t,6,i)}}function zh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=zh(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):Le(o,r),ye(t)&&s.set(t,o),o)}function No(t,e){return!t||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,js(e))||le(t,e))}let qe=null,Oo=null;function Hr(t){const e=qe;return qe=t,Oo=t&&t.type.__scopeId||null,e}function Un(t){Oo=t}function Wn(){Oo=null}function ze(t,e=qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&vu(-1);const r=Hr(e);let o;try{o=t(...i)}finally{Hr(r),s._d&&vu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ia(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:v}=t;let S,N;const M=Hr(t);try{if(n.shapeFlag&4){const F=i||s;S=Dt(u.call(F,F,d,r,m,h,_)),N=l}else{const F=e;S=Dt(F.length>1?F(r,{attrs:l,slots:a,emit:c}):F(r,null)),N=e.props?l:ug(l)}}catch(F){vi.length=0,Ao(F,t,1),S=O(gt)}let K=S;if(N&&v!==!1){const F=Object.keys(N),{shapeFlag:Z}=K;F.length&&Z&7&&(o&&F.some(Il)&&(N=dg(N,o)),K=Ln(K,N))}return n.dirs&&(K=Ln(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),S=K,Hr(M),S}const ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||Io(n))&&((e||(e={}))[n]=t[n]);return e},dg=(t,e)=>{const n={};for(const s in t)(!Il(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?lu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!No(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?lu(s,o,c):!0:!!o;return!1}function lu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!No(n,r))return!0}return!1}function fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pg=t=>t.__isSuspense;function mg(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ag(t)}function gg(t,e){return Fl(t,null,{flush:"post"})}const xr={};function $t(t,e,n){return Fl(t,e,n)}function Fl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){var a;const l=wh()===((a=Ue)==null?void 0:a.scope)?Ue:null;let c,u=!1,d=!1;if(Me(t)?(c=()=>t.value,u=Br(t)):kn(t)?(c=()=>t,s=!0):B(t)?(d=!0,u=t.some(F=>kn(F)||Br(F)),c=()=>t.map(F=>{if(Me(F))return F.value;if(kn(F))return Jn(F);if(X(F))return xn(F,l,2)})):X(t)?e?c=()=>xn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),mt(t,l,3,[m])}:c=St,e&&s){const F=c;c=()=>Jn(F())}let h,m=F=>{h=M.onStop=()=>{xn(F,l,4)}},_;if(Wi)if(m=St,e?n&&mt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const F=u1();_=F.__watcherHandles||(F.__watcherHandles=[])}else return St;let v=d?new Array(t.length).fill(xr):xr;const S=()=>{if(M.active)if(e){const F=M.run();(s||u||(d?F.some((Z,we)=>Pi(Z,v[we])):Pi(F,v)))&&(h&&h(),mt(e,l,3,[F,v===xr?void 0:d&&v[0]===xr?[]:v,m]),v=F)}else M.run()};S.allowRecurse=!!e;let N;i==="sync"?N=S:i==="post"?N=()=>ot(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),N=()=>Dl(S));const M=new xl(c,N);e?n?S():v=M.run():i==="post"?ot(M.run.bind(M),l&&l.suspense):M.run();const K=()=>{M.stop(),l&&l.scope&&Tl(l.scope.effects,M)};return _&&_.push(K),K}function _g(t,e,n){const s=this.proxy,i=De(t)?t.includes(".")?Bh(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Ue;Ls(this);const a=Fl(i,r.bind(s),n);return o?Ls(o):is(),a}function Bh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Jn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Jn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(To(t)||Ss(t))t.forEach(n=>{Jn(n,e)});else if(ph(t))for(const n in t)Jn(t[n],e);return t}function jr(t,e){const n=qe;if(n===null)return t;const s=$o(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Se]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(qs(),mt(l,n,8,[t.el,a,t,e]),Ks())}}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{t.isMounted=!0}),Qh(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},yg={name:"BaseTransition",props:jh,setup(t,{slots:e}){const n=Bl(),s=Hh();let i;return()=>{const r=e.default&&$l(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==gt){o=v;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return ra(o);const c=cu(o);if(!c)return ra(o);const u=Mi(c,a,s,n);Li(c,u);const d=n.subTree,h=d&&cu(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const v=_();i===void 0?i=v:v!==i&&(i=v,m=!0)}if(h&&h.type!==gt&&(!Yn(c,h)||m)){const v=Mi(h,a,s,n);if(Li(h,v),l==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ra(o);l==="in-out"&&c.type!==gt&&(v.delayLeave=(S,N,M)=>{const K=qh(s,h);K[String(h.key)]=h,S._leaveCb=()=>{N(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},vg=yg;function qh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Mi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:v,onAppear:S,onAfterAppear:N,onAppearCancelled:M}=e,K=String(t.key),F=qh(n,t),Z=(L,V)=>{L&&mt(L,s,9,V)},we=(L,V)=>{const J=V[1];Z(L,V),B(L)?L.every(me=>me.length<=1)&&J():L.length<=1&&J()},be={mode:r,persisted:o,beforeEnter(L){let V=a;if(!n.isMounted)if(i)V=v||a;else return;L._leaveCb&&L._leaveCb(!0);const J=F[K];J&&Yn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Z(V,[L])},enter(L){let V=l,J=c,me=u;if(!n.isMounted)if(i)V=S||l,J=N||c,me=M||u;else return;let $=!1;const ue=L._enterCb=Ke=>{$||($=!0,Ke?Z(me,[L]):Z(J,[L]),be.delayedLeave&&be.delayedLeave(),L._enterCb=void 0)};V?we(V,[L,ue]):ue()},leave(L,V){const J=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return V();Z(d,[L]);let me=!1;const $=L._leaveCb=ue=>{me||(me=!0,V(),ue?Z(_,[L]):Z(m,[L]),L._leaveCb=void 0,F[J]===t&&delete F[J])};F[J]=t,h?we(h,[L,$]):$()},clone(L){return Mi(L,e,n,s)}};return be}function ra(t){if(Mo(t))return t=Ln(t),t.children=null,t}function cu(t){return Mo(t)?t.children?t.children[0]:void 0:t}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $l(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_e?(o.patchFlag&128&&i++,s=s.concat($l(o.children,e,a))):(e||o.type!==gt)&&s.push(a!=null?Ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Kh(t,e){return X(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const _i=t=>!!t.type.__asyncLoader,Mo=t=>t.type.__isKeepAlive;function wg(t,e){Gh(t,"a",e)}function Cg(t,e){Gh(t,"da",e)}function Gh(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Lo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Mo(i.parent.vnode)&&Eg(s,e,n,i),i=i.parent}}function Eg(t,e,n,s){const i=Lo(e,t,s,!0);Fi(()=>{Tl(s[e],i)},n)}function Lo(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qs(),Ls(n);const a=mt(e,n,t,o);return is(),Ks(),a});return s?i.unshift(r):i.push(r),r}}const on=t=>(e,n=Ue)=>(!Wi||t==="sp")&&Lo(t,(...s)=>e(...s),n),bg=on("bm"),Di=on("m"),Ig=on("bu"),Yh=on("u"),Qh=on("bum"),Fi=on("um"),Tg=on("sp"),Sg=on("rtg"),kg=on("rtc");function xg(t,e=Ue){Lo("ec",t,e)}const Ul="components";function Rg(t,e){return Xh(Ul,t,!0,e)||t}const Jh=Symbol.for("v-ndc");function Pg(t){return De(t)?Xh(Ul,t,!1)||t:t||Jh}function Xh(t,e,n=!0,s=!1){const i=qe||Ue;if(i){const r=i.type;if(t===Ul){const a=a1(r,!1);if(a&&(a===e||a===zt(e)||a===ko(zt(e))))return r}const o=uu(i[t]||r[t],e)||uu(i.appContext[t],e);return!o&&s?r:o}}function uu(t,e){return t&&(t[e]||t[zt(e)]||t[ko(zt(e))])}function yt(t,e,n,s){let i;const r=n&&n[s];if(B(t)||De(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Ag(t,e,n={},s,i){if(qe.isCE||qe.parent&&_i(qe.parent)&&qe.parent.isCE)return e!=="default"&&(n.name=e),O("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),R();const o=r&&Zh(r(n)),a=st(_e,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Zh(t){return t.some(e=>Kr(e)?!(e.type===gt||e.type===_e&&!Zh(e.children)):!0)?t:null}const Va=t=>t?df(t)?$o(t)||t.proxy:Va(t.parent):null,yi=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Va(t.parent),$root:t=>Va(t.root),$emit:t=>t.emit,$options:t=>Wl(t),$forceUpdate:t=>t.f||(t.f=()=>Dl(t.update)),$nextTick:t=>t.n||(t.n=Ll.bind(t.proxy)),$watch:t=>_g.bind(t)}),oa=(t,e)=>t!==Se&&!t.__isScriptSetup&&le(t,e),Ng={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(oa(s,e))return o[e]=1,s[e];if(i!==Se&&le(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,r[e];if(n!==Se&&le(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=yi[e];let d,h;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Se&&le(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,le(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return oa(i,e)?(i[e]=n,!0):s!==Se&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&le(t,o)||oa(e,o)||(a=r[0])&&le(a,o)||le(s,o)||le(yi,o)||le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function du(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let za=!0;function Og(t){const e=Wl(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&hu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:v,deactivated:S,beforeDestroy:N,beforeUnmount:M,destroyed:K,unmounted:F,render:Z,renderTracked:we,renderTriggered:be,errorCaptured:L,serverPrefetch:V,expose:J,inheritAttrs:me,components:$,directives:ue,filters:Ke}=e;if(c&&Mg(c,s,null),o)for(const ge in o){const de=o[ge];X(de)&&(s[ge]=de.bind(n))}if(i){const ge=i.call(n,n);ye(ge)&&(t.data=ir(ge))}if(za=!0,r)for(const ge in r){const de=r[ge],jt=X(de)?de.bind(n,n):X(de.get)?de.get.bind(n,n):St,cn=!X(de)&&X(de.set)?de.set.bind(n):St,At=Oe({get:jt,set:cn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>At.value,set:rt=>At.value=rt})}if(a)for(const ge in a)ef(a[ge],s,n,ge);if(l){const ge=X(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(de=>{Mr(de,ge[de])})}u&&hu(u,t,"c");function re(ge,de){B(de)?de.forEach(jt=>ge(jt.bind(n))):de&&ge(de.bind(n))}if(re(bg,d),re(Di,h),re(Ig,m),re(Yh,_),re(wg,v),re(Cg,S),re(xg,L),re(kg,we),re(Sg,be),re(Qh,M),re(Fi,F),re(Tg,V),B(J))if(J.length){const ge=t.exposed||(t.exposed={});J.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:jt=>n[de]=jt})})}else t.exposed||(t.exposed={});Z&&t.render===St&&(t.render=Z),me!=null&&(t.inheritAttrs=me),$&&(t.components=$),ue&&(t.directives=ue)}function Mg(t,e,n=St){B(t)&&(t=Ba(t));for(const s in t){const i=t[s];let r;ye(i)?"default"in i?r=Ut(i.from||s,i.default,!0):r=Ut(i.from||s):r=Ut(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function hu(t,e,n){mt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ef(t,e,n,s){const i=s.includes(".")?Bh(n,s):()=>n[s];if(De(t)){const r=e[t];X(r)&&$t(i,r)}else if(X(t))$t(i,t.bind(n));else if(ye(t))if(B(t))t.forEach(r=>ef(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&$t(i,r,t)}}function Wl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qr(l,c,o,!0)),qr(l,e,o)),ye(e)&&r.set(e,l),l}function qr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qr(t,r,n,!0),i&&i.forEach(o=>qr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Lg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lg={data:fu,props:pu,emits:pu,methods:fi,computed:fi,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:fi,directives:fi,watch:Fg,provide:fu,inject:Dg};function fu(t,e){return e?t?function(){return Le(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Dg(t,e){return fi(Ba(t),Ba(e))}function Ba(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?Le(Object.create(null),t,e):e}function pu(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Le(Object.create(null),du(t),du(e??{})):e}function Fg(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function tf(){return{app:null,config:{isNativeTag:o0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function Ug(t,e){return function(s,i=null){X(s)||(s=Le({},s)),i!=null&&!ye(i)&&(i=null);const r=tf(),o=new Set;let a=!1;const l=r.app={_uid:$g++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:d1,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=O(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,$o(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){$i=l;try{return c()}finally{$i=null}}};return l}}let $i=null;function Mr(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Ue||qe;if(s||$i){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:$i._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function Wg(){return!!(Ue||qe||$i)}function Vg(t,e,n,s=!1){const i={},r={};Vr(r,Fo,1),t.propsDefaults=Object.create(null),nf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function zg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(No(t.emitsOptions,h))continue;const m=e[h];if(l)if(le(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=zt(h);i[_]=Ha(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{nf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!le(e,d)&&((u=js(d))===d||!le(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ha(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!le(e,d))&&(delete r[d],c=!0)}c&&tn(t,"set","$attrs")}function nf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Nr(l))continue;const c=e[l];let u;i&&le(i,u=zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:No(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||Se;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ha(i,l,d,c[d],t,!le(c,d))}}return o}function Ha(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ls(i),s=c[n]=l.call(null,e),is())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===js(n))&&(s=!0))}return s}function sf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[h,m]=sf(d,e,!0);Le(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,Ts),Ts;if(B(r))for(let u=0;u<r.length;u++){const d=zt(r[u]);mu(d)&&(o[d]=Se)}else if(r)for(const u in r){const d=zt(u);if(mu(d)){const h=r[u],m=o[d]=B(h)||X(h)?{type:h}:Le({},h);if(m){const _=yu(Boolean,m.type),v=yu(String,m.type);m[0]=_>-1,m[1]=v<0||_<v,(_>-1||le(m,"default"))&&a.push(d)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function mu(t){return t[0]!=="$"}function gu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function _u(t,e){return gu(t)===gu(e)}function yu(t,e){return B(e)?e.findIndex(n=>_u(n,t)):X(e)&&_u(e,t)?0:-1}const rf=t=>t[0]==="_"||t==="$stable",Vl=t=>B(t)?t.map(Dt):[Dt(t)],Bg=(t,e,n)=>{if(e._n)return e;const s=ze((...i)=>Vl(e(...i)),n);return s._c=!1,s},of=(t,e,n)=>{const s=t._ctx;for(const i in t){if(rf(i))continue;const r=t[i];if(X(r))e[i]=Bg(i,r,s);else if(r!=null){const o=Vl(r);e[i]=()=>o}}},af=(t,e)=>{const n=Vl(e);t.slots.default=()=>n},Hg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Vr(e,"_",n)):of(e,t.slots={})}else t.slots={},e&&af(t,e);Vr(t.slots,Fo,1)},jg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,of(e,i)),o=e}else e&&(af(t,e),o={default:1});if(r)for(const a in i)!rf(a)&&!(a in o)&&delete i[a]};function ja(t,e,n,s,i=!1){if(B(t)){t.forEach((h,m)=>ja(h,e&&(B(e)?e[m]:e),n,s,i));return}if(_i(s)&&!i)return;const r=s.shapeFlag&4?$o(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(De(c)?(u[c]=null,le(d,c)&&(d[c]=null)):Me(c)&&(c.value=null)),X(l))xn(l,a,12,[o,u]);else{const h=De(l),m=Me(l);if(h||m){const _=()=>{if(t.f){const v=h?le(d,l)?d[l]:u[l]:l.value;i?B(v)&&Tl(v,r):B(v)?v.includes(r)||v.push(r):h?(u[l]=[r],le(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,le(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ot(_,n)):_()}}}const ot=mg;function qg(t){return Kg(t)}function Kg(t,e){const n=Da();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=St,insertStaticContent:_}=t,v=(f,p,g,y=null,C=null,E=null,P=!1,I=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Yn(f,p)&&(y=w(f),rt(f,C,E,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:U}=p;switch(b){case Do:S(f,p,g,y);break;case gt:N(f,p,g,y);break;case Lr:f==null&&M(p,g,y,P);break;case _e:$(f,p,g,y,C,E,P,I,k);break;default:U&1?Z(f,p,g,y,C,E,P,I,k):U&6?ue(f,p,g,y,C,E,P,I,k):(U&64||U&128)&&b.process(f,p,g,y,C,E,P,I,k,x)}H!=null&&C&&ja(H,f&&f.ref,E,p||f,!p)},S=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},N=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},M=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},K=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},F=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},Z=(f,p,g,y,C,E,P,I,k)=>{P=P||p.type==="svg",f==null?we(p,g,y,C,E,P,I,k):V(f,p,C,E,P,I,k)},we=(f,p,g,y,C,E,P,I)=>{let k,b;const{type:H,props:U,shapeFlag:j,transition:Y,dirs:ne}=f;if(k=f.el=o(f.type,E,U&&U.is,U),j&8?u(k,f.children):j&16&&L(f.children,k,null,y,C,E&&H!=="foreignObject",P,I),ne&&Bn(f,null,y,"created"),be(k,f,f.scopeId,P,y),U){for(const fe in U)fe!=="value"&&!Nr(fe)&&r(k,fe,null,U[fe],E,f.children,y,C,Ye);"value"in U&&r(k,"value",null,U.value),(b=U.onVnodeBeforeMount)&&Mt(b,y,f)}ne&&Bn(f,null,y,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ce&&Y.beforeEnter(k),s(k,p,g),((b=U&&U.onVnodeMounted)||Ce||ne)&&ot(()=>{b&&Mt(b,y,f),Ce&&Y.enter(k),ne&&Bn(f,null,y,"mounted")},C)},be=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(C){let E=C.subTree;if(p===E){const P=C.vnode;be(f,P,P.scopeId,P.slotScopeIds,C.parent)}}},L=(f,p,g,y,C,E,P,I,k=0)=>{for(let b=k;b<f.length;b++){const H=f[b]=I?_n(f[b]):Dt(f[b]);v(null,H,p,g,y,C,E,P,I)}},V=(f,p,g,y,C,E,P)=>{const I=p.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:H}=p;k|=f.patchFlag&16;const U=f.props||Se,j=p.props||Se;let Y;g&&Hn(g,!1),(Y=j.onVnodeBeforeUpdate)&&Mt(Y,g,p,f),H&&Bn(p,f,g,"beforeUpdate"),g&&Hn(g,!0);const ne=C&&p.type!=="foreignObject";if(b?J(f.dynamicChildren,b,I,g,y,ne,E):P||de(f,p,I,null,g,y,ne,E,!1),k>0){if(k&16)me(I,p,U,j,g,y,C);else if(k&2&&U.class!==j.class&&r(I,"class",null,j.class,C),k&4&&r(I,"style",U.style,j.style,C),k&8){const Ce=p.dynamicProps;for(let fe=0;fe<Ce.length;fe++){const Fe=Ce[fe],vt=U[Fe],_s=j[Fe];(_s!==vt||Fe==="value")&&r(I,Fe,vt,_s,C,f.children,g,y,Ye)}}k&1&&f.children!==p.children&&u(I,p.children)}else!P&&b==null&&me(I,p,U,j,g,y,C);((Y=j.onVnodeUpdated)||H)&&ot(()=>{Y&&Mt(Y,g,p,f),H&&Bn(p,f,g,"updated")},y)},J=(f,p,g,y,C,E,P)=>{for(let I=0;I<p.length;I++){const k=f[I],b=p[I],H=k.el&&(k.type===_e||!Yn(k,b)||k.shapeFlag&70)?d(k.el):g;v(k,b,H,null,y,C,E,P,!0)}},me=(f,p,g,y,C,E,P)=>{if(g!==y){if(g!==Se)for(const I in g)!Nr(I)&&!(I in y)&&r(f,I,g[I],null,P,p.children,C,E,Ye);for(const I in y){if(Nr(I))continue;const k=y[I],b=g[I];k!==b&&I!=="value"&&r(f,I,b,k,P,p.children,C,E,Ye)}"value"in y&&r(f,"value",g.value,y.value)}},$=(f,p,g,y,C,E,P,I,k)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:Y}=p;Y&&(I=I?I.concat(Y):Y),f==null?(s(b,g,y),s(H,g,y),L(p.children,g,H,C,E,P,I,k)):U>0&&U&64&&j&&f.dynamicChildren?(J(f.dynamicChildren,j,g,C,E,P,I),(p.key!=null||C&&p===C.subTree)&&lf(f,p,!0)):de(f,p,g,H,C,E,P,I,k)},ue=(f,p,g,y,C,E,P,I,k)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,P,k):Ke(p,g,y,C,E,P,k):et(f,p,k)},Ke=(f,p,g,y,C,E,P)=>{const I=f.component=n1(f,y,C);if(Mo(f)&&(I.ctx.renderer=x),s1(I),I.asyncDep){if(C&&C.registerDep(I,re),!f.el){const k=I.subTree=O(gt);N(null,k,p,g)}return}re(I,f,p,g,C,E,P)},et=(f,p,g)=>{const y=p.component=f.component;if(hg(f,p,g))if(y.asyncDep&&!y.asyncResolved){ge(y,p,g);return}else y.next=p,og(y.update),y.update();else p.el=f.el,y.vnode=p},re=(f,p,g,y,C,E,P)=>{const I=()=>{if(f.isMounted){let{next:H,bu:U,u:j,parent:Y,vnode:ne}=f,Ce=H,fe;Hn(f,!1),H?(H.el=ne.el,ge(f,H,P)):H=ne,U&&Or(U),(fe=H.props&&H.props.onVnodeBeforeUpdate)&&Mt(fe,Y,H,ne),Hn(f,!0);const Fe=ia(f),vt=f.subTree;f.subTree=Fe,v(vt,Fe,d(vt.el),w(vt),f,C,E),H.el=Fe.el,Ce===null&&fg(f,Fe.el),j&&ot(j,C),(fe=H.props&&H.props.onVnodeUpdated)&&ot(()=>Mt(fe,Y,H,ne),C)}else{let H;const{el:U,props:j}=p,{bm:Y,m:ne,parent:Ce}=f,fe=_i(p);if(Hn(f,!1),Y&&Or(Y),!fe&&(H=j&&j.onVnodeBeforeMount)&&Mt(H,Ce,p),Hn(f,!0),U&&he){const Fe=()=>{f.subTree=ia(f),he(U,f.subTree,f,C,null)};fe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Fe()):Fe()}else{const Fe=f.subTree=ia(f);v(null,Fe,g,y,f,C,E),p.el=Fe.el}if(ne&&ot(ne,C),!fe&&(H=j&&j.onVnodeMounted)){const Fe=p;ot(()=>Mt(H,Ce,Fe),C)}(p.shapeFlag&256||Ce&&_i(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&ot(f.a,C),f.isMounted=!0,p=g=y=null}},k=f.effect=new xl(I,()=>Dl(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,Hn(f,!0),b()},ge=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,zg(f,p.props,y,g),jg(f,p.children,g),qs(),au(),Ks()},de=(f,p,g,y,C,E,P,I,k=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,U=p.children,{patchFlag:j,shapeFlag:Y}=p;if(j>0){if(j&128){cn(b,U,g,y,C,E,P,I,k);return}else if(j&256){jt(b,U,g,y,C,E,P,I,k);return}}Y&8?(H&16&&Ye(b,C,E),U!==b&&u(g,U)):H&16?Y&16?cn(b,U,g,y,C,E,P,I,k):Ye(b,C,E,!0):(H&8&&u(g,""),Y&16&&L(U,g,y,C,E,P,I,k))},jt=(f,p,g,y,C,E,P,I,k)=>{f=f||Ts,p=p||Ts;const b=f.length,H=p.length,U=Math.min(b,H);let j;for(j=0;j<U;j++){const Y=p[j]=k?_n(p[j]):Dt(p[j]);v(f[j],Y,g,null,C,E,P,I,k)}b>H?Ye(f,C,E,!0,!1,U):L(p,g,y,C,E,P,I,k,U)},cn=(f,p,g,y,C,E,P,I,k)=>{let b=0;const H=p.length;let U=f.length-1,j=H-1;for(;b<=U&&b<=j;){const Y=f[b],ne=p[b]=k?_n(p[b]):Dt(p[b]);if(Yn(Y,ne))v(Y,ne,g,null,C,E,P,I,k);else break;b++}for(;b<=U&&b<=j;){const Y=f[U],ne=p[j]=k?_n(p[j]):Dt(p[j]);if(Yn(Y,ne))v(Y,ne,g,null,C,E,P,I,k);else break;U--,j--}if(b>U){if(b<=j){const Y=j+1,ne=Y<H?p[Y].el:y;for(;b<=j;)v(null,p[b]=k?_n(p[b]):Dt(p[b]),g,ne,C,E,P,I,k),b++}}else if(b>j)for(;b<=U;)rt(f[b],C,E,!0),b++;else{const Y=b,ne=b,Ce=new Map;for(b=ne;b<=j;b++){const ht=p[b]=k?_n(p[b]):Dt(p[b]);ht.key!=null&&Ce.set(ht.key,b)}let fe,Fe=0;const vt=j-ne+1;let _s=!1,Gc=0;const si=new Array(vt);for(b=0;b<vt;b++)si[b]=0;for(b=Y;b<=U;b++){const ht=f[b];if(Fe>=vt){rt(ht,C,E,!0);continue}let Nt;if(ht.key!=null)Nt=Ce.get(ht.key);else for(fe=ne;fe<=j;fe++)if(si[fe-ne]===0&&Yn(ht,p[fe])){Nt=fe;break}Nt===void 0?rt(ht,C,E,!0):(si[Nt-ne]=b+1,Nt>=Gc?Gc=Nt:_s=!0,v(ht,p[Nt],g,null,C,E,P,I,k),Fe++)}const Yc=_s?Gg(si):Ts;for(fe=Yc.length-1,b=vt-1;b>=0;b--){const ht=ne+b,Nt=p[ht],Qc=ht+1<H?p[ht+1].el:y;si[b]===0?v(null,Nt,g,Qc,C,E,P,I,k):_s&&(fe<0||b!==Yc[fe]?At(Nt,g,Qc,2):fe--)}}},At=(f,p,g,y,C=null)=>{const{el:E,type:P,transition:I,children:k,shapeFlag:b}=f;if(b&6){At(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){P.move(f,p,g,x);return}if(P===_e){s(E,p,g);for(let U=0;U<k.length;U++)At(k[U],p,g,y);s(f.anchor,p,g);return}if(P===Lr){K(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),ot(()=>I.enter(E),C);else{const{leave:U,delayLeave:j,afterLeave:Y}=I,ne=()=>s(E,p,g),Ce=()=>{U(E,()=>{ne(),Y&&Y()})};j?j(E,ne,Ce):Ce()}else s(E,p,g)},rt=(f,p,g,y=!1,C=!1)=>{const{type:E,props:P,ref:I,children:k,dynamicChildren:b,shapeFlag:H,patchFlag:U,dirs:j}=f;if(I!=null&&ja(I,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&j,ne=!_i(f);let Ce;if(ne&&(Ce=P&&P.onVnodeBeforeUnmount)&&Mt(Ce,p,f),H&6)Cr(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&Bn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,x,y):b&&(E!==_e||U>0&&U&64)?Ye(b,p,g,!1,!0):(E===_e&&U&384||!C&&H&16)&&Ye(k,p,g),y&&ms(f)}(ne&&(Ce=P&&P.onVnodeUnmounted)||Y)&&ot(()=>{Ce&&Mt(Ce,p,f),Y&&Bn(f,null,p,"unmounted")},g)},ms=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===_e){gs(g,y);return}if(p===Lr){F(f);return}const E=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:I}=C,k=()=>P(g,E);I?I(f.el,E,k):k()}else E()},gs=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Cr=(f,p,g)=>{const{bum:y,scope:C,update:E,subTree:P,um:I}=f;y&&Or(y),C.stop(),E&&(E.active=!1,rt(P,f,p,g)),I&&ot(I,p),ot(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,g,y=!1,C=!1,E=0)=>{for(let P=E;P<f.length;P++)rt(f[P],p,g,y,C)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),D=(f,p,g)=>{f==null?p._vnode&&rt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,g),au(),Wh(),p._vnode=f},x={p:v,um:rt,m:At,r:ms,mt:Ke,mc:L,pc:de,pbc:J,n:w,o:t};let z,he;return e&&([z,he]=e(x)),{render:D,hydrate:z,createApp:Ug(D,z)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lf(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_n(i[r]),a.el=o.el),n||lf(o,a)),a.type===Do&&(a.el=o.el)}}function Gg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Yg=t=>t.__isTeleport,_e=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),Lr=Symbol.for("v-stc"),vi=[];let Et=null;function R(t=!1){vi.push(Et=t?null:[])}function Qg(){vi.pop(),Et=vi[vi.length-1]||null}let Ui=1;function vu(t){Ui+=t}function cf(t){return t.dynamicChildren=Ui>0?Et||Ts:null,Qg(),Ui>0&&Et&&Et.push(t),t}function W(t,e,n,s,i,r){return cf(A(t,e,n,s,i,r,!0))}function st(t,e,n,s,i){return cf(O(t,e,n,s,i,!0))}function Kr(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}const Fo="__vInternal",uf=({key:t})=>t??null,Dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||Me(t)||X(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,s=0,i=null,r=t===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uf(e),ref:e&&Dr(e),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return a?(zl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),Ui>0&&!o&&Et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Et.push(l),l}const O=Jg;function Jg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jh)&&(t=gt),Kr(t)){const a=Ln(t,e,!0);return n&&zl(a,n),Ui>0&&!r&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag|=-2,a}if(l1(t)&&(t=t.__vccOpts),e){e=Xg(e);let{class:a,style:l}=e;a&&!De(a)&&(e.class=Ge(a)),ye(l)&&(Oh(l)&&!B(l)&&(l=Le({},l)),e.style=xt(l))}const o=De(t)?1:pg(t)?128:Yg(t)?64:ye(t)?4:X(t)?2:0;return A(t,e,n,s,i,o,r,!0)}function Xg(t){return t?Oh(t)||Fo in t?Le({},t):t:null}function Ln(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Zg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uf(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Dr(e)):[i,Dr(e)]:Dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gs(t=" ",e=0){return O(Do,null,t,e)}function ss(t="",e=!1){return e?(R(),st(gt,null,t)):O(gt,null,t)}function Dt(t){return t==null||typeof t=="boolean"?O(gt):B(t)?O(_e,null,t.slice()):typeof t=="object"?_n(t):O(Do,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function zl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Fo in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),s&64?(n=16,e=[Gs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ge([e.class,s.class]));else if(i==="style")e.style=xt([e.style,s.style]);else if(Io(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Mt(t,e,n,s=null){mt(t,e,7,[n,s])}const e1=tf();let t1=0;function n1(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||e1,r={uid:t1++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(s,i),emitsOptions:zh(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cg.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const Bl=()=>Ue||qe;let Hl,ys,wu="__VUE_INSTANCE_SETTERS__";(ys=Da()[wu])||(ys=Da()[wu]=[]),ys.push(t=>Ue=t),Hl=t=>{ys.length>1?ys.forEach(e=>e(t)):ys[0](t)};const Ls=t=>{Hl(t),t.scope.on()},is=()=>{Ue&&Ue.scope.off(),Hl(null)};function df(t){return t.vnode.shapeFlag&4}let Wi=!1;function s1(t,e=!1){Wi=e;const{props:n,children:s}=t.vnode,i=df(t);Vg(t,n,i,e),Hg(t,s);const r=i?i1(t,e):void 0;return Wi=!1,r}function i1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Po(new Proxy(t.ctx,Ng));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?o1(t):null;Ls(t),qs();const r=xn(s,t,0,[t.props,i]);if(Ks(),is(),hh(r)){if(r.then(is,is),e)return r.then(o=>{Cu(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=r}else Cu(t,r,e)}else hf(t,e)}function Cu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Fh(e)),hf(t,n)}let Eu;function hf(t,e,n){const s=t.type;if(!t.render){if(!e&&Eu&&!s.render){const i=s.template||Wl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Le(Le({isCustomElement:r,delimiters:a},o),l);s.render=Eu(i,c)}}t.render=s.render||St}Ls(t),qs(),Og(t),Ks(),is()}function r1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}}))}function o1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return r1(t)},slots:t.slots,emit:t.emit,expose:e}}function $o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fh(Po(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}}))}function a1(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function l1(t){return X(t)&&"__vccOpts"in t}const Oe=(t,e)=>sg(t,e,Wi);function jl(t,e,n){const s=arguments.length;return s===2?ye(e)&&!B(e)?Kr(e)?O(t,null,[e]):O(t,e):O(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Kr(n)&&(n=[n]),O(t,e,n))}const c1=Symbol.for("v-scx"),u1=()=>Ut(c1),d1="3.3.4",h1="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,bu=Qn&&Qn.createElement("template"),f1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qn.createElementNS(h1,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bu.innerHTML=s?`<svg>${t}</svg>`:t;const a=bu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function p1(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function m1(t,e,n){const s=t.style,i=De(n);if(n&&!i){if(e&&!De(e))for(const r in e)n[r]==null&&qa(s,r,"");for(const r in n)qa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Iu=/\s*!important$/;function qa(t,e,n){if(B(n))n.forEach(s=>qa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=g1(t,e);Iu.test(n)?t.setProperty(js(s),n.replace(Iu,""),"important"):t[s]=n}}const Tu=["Webkit","Moz","ms"],aa={};function g1(t,e){const n=aa[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return aa[e]=s;s=ko(s);for(let i=0;i<Tu.length;i++){const r=Tu[i]+s;if(r in t)return aa[e]=r}return e}const Su="http://www.w3.org/1999/xlink";function _1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Su,e.slice(6,e.length)):t.setAttributeNS(Su,e,n);else{const r=v0(e);n==null||r&&!mh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function y1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ff(t,e,n,s){t.addEventListener(e,n,s)}function v1(t,e,n,s){t.removeEventListener(e,n,s)}function w1(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=C1(e);if(s){const c=r[e]=I1(s,i);ff(t,a,c,l)}else o&&(v1(t,a,o,l),r[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function C1(t){let e;if(ku.test(t)){e={};let s;for(;s=t.match(ku);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):js(t.slice(2)),e]}let la=0;const E1=Promise.resolve(),b1=()=>la||(E1.then(()=>la=0),la=Date.now());function I1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mt(T1(s,n.value),e,5,[s])};return n.value=t,n.attached=b1(),n}function T1(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const xu=/^on[a-z]/,S1=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?p1(t,s,i):e==="style"?m1(t,n,s):Io(e)?Il(e)||w1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k1(t,e,s,i))?y1(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_1(t,e,s,i))};function k1(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&xu.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xu.test(e)&&De(n)?!1:e in t}function rr(t){const e=Bl();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ga(r,i))},s=()=>{const i=t(e.proxy);Ka(e.subTree,i),n(i)};gg(s),Di(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Fi(()=>i.disconnect())})}function Ka(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ka(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ga(t.el,e);else if(t.type===_e)t.children.forEach(n=>Ka(n,e));else if(t.type===Lr){let{el:n,anchor:s}=t;for(;n&&(Ga(n,e),n!==s);)n=n.nextSibling}}function Ga(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const dn="transition",ri="animation",nn=(t,{slots:e})=>jl(vg,mf(t),e);nn.displayName="Transition";const pf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},x1=nn.props=Le({},jh,pf),jn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ru=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function mf(t){const e={};for(const $ in t)$ in pf||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=R1(i),v=_&&_[0],S=_&&_[1],{onBeforeEnter:N,onEnter:M,onEnterCancelled:K,onLeave:F,onLeaveCancelled:Z,onBeforeAppear:we=N,onAppear:be=M,onAppearCancelled:L=K}=e,V=($,ue,Ke)=>{pn($,ue?u:a),pn($,ue?c:o),Ke&&Ke()},J=($,ue)=>{$._isLeaving=!1,pn($,d),pn($,m),pn($,h),ue&&ue()},me=$=>(ue,Ke)=>{const et=$?be:M,re=()=>V(ue,$,Ke);jn(et,[ue,re]),Pu(()=>{pn(ue,$?l:r),Kt(ue,$?u:a),Ru(et)||Au(ue,s,v,re)})};return Le(e,{onBeforeEnter($){jn(N,[$]),Kt($,r),Kt($,o)},onBeforeAppear($){jn(we,[$]),Kt($,l),Kt($,c)},onEnter:me(!1),onAppear:me(!0),onLeave($,ue){$._isLeaving=!0;const Ke=()=>J($,ue);Kt($,d),_f(),Kt($,h),Pu(()=>{$._isLeaving&&(pn($,d),Kt($,m),Ru(F)||Au($,s,S,Ke))}),jn(F,[$,Ke])},onEnterCancelled($){V($,!1),jn(K,[$])},onAppearCancelled($){V($,!0),jn(L,[$])},onLeaveCancelled($){J($),jn(Z,[$])}})}function R1(t){if(t==null)return null;if(ye(t))return[ca(t.enter),ca(t.leave)];{const e=ca(t);return[e,e]}}function ca(t){return f0(t)}function Kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function pn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Pu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let P1=0;function Au(t,e,n,s){const i=t._endId=++P1,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=gf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function gf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${dn}Delay`),r=s(`${dn}Duration`),o=Nu(i,r),a=s(`${ri}Delay`),l=s(`${ri}Duration`),c=Nu(a,l);let u=null,d=0,h=0;e===dn?o>0&&(u=dn,d=o,h=r.length):e===ri?c>0&&(u=ri,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?dn:ri:null,h=u?u===dn?r.length:l.length:0);const m=u===dn&&/\b(transform|all)(,|$)/.test(s(`${dn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Nu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ou(n)+Ou(t[s])))}function Ou(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function _f(){return document.body.offsetHeight}const yf=new WeakMap,vf=new WeakMap,wf={name:"TransitionGroup",props:Le({},x1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Bl(),s=Hh();let i,r;return Yh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!D1(i[0].el,n.vnode.el,o))return;i.forEach(O1),i.forEach(M1);const a=i.filter(L1);_f(),a.forEach(l=>{const c=l.el,u=c.style;Kt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,pn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ie(t),a=mf(o);let l=o.tag||_e;i=r,r=e.default?$l(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Li(u,Mi(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Li(u,Mi(u,a,s,n)),yf.set(u,u.el.getBoundingClientRect())}return O(l,null,r)}}},A1=t=>delete t.mode;wf.props;const N1=wf;function O1(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function M1(t){vf.set(t,t.el.getBoundingClientRect())}function L1(t){const e=yf.get(t),n=vf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function D1(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=gf(s);return i.removeChild(s),r}const Mu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Or(e,n):e},F1={deep:!0,created(t,e,n){t._assign=Mu(n),ff(t,"change",()=>{const s=t._modelValue,i=$1(t),r=t.checked,o=t._assign;if(B(s)){const a=gh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(To(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Cf(t,r))})},mounted:Lu,beforeUpdate(t,e,n){t._assign=Mu(n),Lu(t,e,n)}};function Lu(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=gh(e,s.props.value)>-1:To(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=xo(e,Cf(t,!0)))}function $1(t){return"_value"in t?t._value:t.value}function Cf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ya={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):oi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),oi(t,!0),s.enter(t)):s.leave(t,()=>{oi(t,!1)}):oi(t,e))},beforeUnmount(t,{value:e}){oi(t,e)}};function oi(t,e){t.style.display=e?t._vod:"none"}const U1=Le({patchProp:S1},f1);let Du;function W1(){return Du||(Du=qg(U1))}const V1=(...t)=>{const e=W1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=z1(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function z1(t){return De(t)?document.querySelector(t):t}var B1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ef;const or=t=>Ef=t,bf=Symbol();function Qa(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wi||(wi={}));function H1(){const t=vh(!0),e=t.run(()=>Ne({}));let n=[],s=[];const i=Po({install(r){or(i),i._a=r,r.provide(bf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!B1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const If=()=>{};function Fu(t,e,n,s=If){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&wh()&&E0(i),i}function vs(t,...e){t.slice().forEach(n=>{n(...e)})}const j1=t=>t();function Ja(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Qa(i)&&Qa(s)&&t.hasOwnProperty(n)&&!Me(s)&&!kn(s)?t[n]=Ja(i,s):t[n]=s}return t}const q1=Symbol();function K1(t){return!Qa(t)||!t.hasOwnProperty(q1)}const{assign:mn}=Object;function G1(t){return!!(Me(t)&&t.effect)}function Y1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Z0(n.state.value[t]);return mn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Po(Oe(()=>{or(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=Tf(t,c,e,n,s,!0),l}function Tf(t,e,n={},s,i,r){let o;const a=mn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ne({});let v;function S(L){let V;c=u=!1,typeof L=="function"?(L(s.state.value[t]),V={type:wi.patchFunction,storeId:t,events:m}):(Ja(s.state.value[t],L),V={type:wi.patchObject,payload:L,storeId:t,events:m});const J=v=Symbol();Ll().then(()=>{v===J&&(c=!0)}),u=!0,vs(d,V,s.state.value[t])}const N=r?function(){const{state:V}=n,J=V?V():{};this.$patch(me=>{mn(me,J)})}:If;function M(){o.stop(),d=[],h=[],s._s.delete(t)}function K(L,V){return function(){or(s);const J=Array.from(arguments),me=[],$=[];function ue(re){me.push(re)}function Ke(re){$.push(re)}vs(h,{args:J,name:L,store:Z,after:ue,onError:Ke});let et;try{et=V.apply(this&&this.$id===t?this:Z,J)}catch(re){throw vs($,re),re}return et instanceof Promise?et.then(re=>(vs(me,re),re)).catch(re=>(vs($,re),Promise.reject(re))):(vs(me,et),et)}}const F={_p:s,$id:t,$onAction:Fu.bind(null,h),$patch:S,$reset:N,$subscribe(L,V={}){const J=Fu(d,L,V.detached,()=>me()),me=o.run(()=>$t(()=>s.state.value[t],$=>{(V.flush==="sync"?u:c)&&L({storeId:t,type:wi.direct,events:m},$)},mn({},l,V)));return J},$dispose:M},Z=ir(F);s._s.set(t,Z);const we=s._a&&s._a.runWithContext||j1,be=s._e.run(()=>(o=vh(),we(()=>o.run(e))));for(const L in be){const V=be[L];if(Me(V)&&!G1(V)||kn(V))r||(_&&K1(V)&&(Me(V)?V.value=_[L]:Ja(V,_[L])),s.state.value[t][L]=V);else if(typeof V=="function"){const J=K(L,V);be[L]=J,a.actions[L]=V}}return mn(Z,be),mn(ie(Z),be),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:L=>{S(V=>{mn(V,L)})}}),s._p.forEach(L=>{mn(Z,o.run(()=>L({store:Z,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(Z.$state,_),c=!0,u=!0,Z}function Q1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Wg();return a=a||(c?Ut(bf,null):null),a&&or(a),a=Ef,a._s.has(s)||(r?Tf(s,e,i,a):Y1(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Sf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Ys(e)},Ys=function(t){return new Error("Firebase Database ("+Sf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const kf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J1=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new X1;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xf=function(t){const e=kf(t);return ql.encodeByteArray(e,!0)},Gr=function(t){return xf(t).replace(/\./g,"")},Yr=function(t){try{return ql.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Z1(t){return Rf(void 0,t)}function Rf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!e_(n)||(t[n]=Rf(t[n],e[n]));return t}function e_(t){return t!=="__proto__"}/**
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
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yr(t[1]);return e&&JSON.parse(e)},Kl=()=>{try{return n_()||s_()||i_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pf=t=>{var e,n;return(n=(e=Kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},r_=t=>{const e=Pf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Af=()=>{var t;return(t=Kl())===null||t===void 0?void 0:t.config},Nf=t=>{var e;return(e=Kl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function o_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gr(JSON.stringify(n)),Gr(JSON.stringify(o)),a].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function a_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l_(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mf(){return Sf.NODE_ADMIN===!0}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function u_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const d_="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=d_,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?h_(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,s)}}function h_(t,e){return t.replace(f_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const f_=/\{\$([^}]+)}/g;/**
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
 */function Vi(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
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
 */const Lf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Vi(Yr(r[0])||""),n=Vi(Yr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},p_=function(t){const e=Lf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m_=function(t){const e=Lf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function an(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($u(r)&&$u(o)){if(!Jr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $u(t){return t!==null&&typeof t=="object"}/**
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
 */class g_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function __(t,e){const n=new y_(t,e);return n.subscribe.bind(n)}class y_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");v_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Yl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const w_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class C_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Uo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b_(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(t){return t===qn?void 0:t}function b_(t){return t.instantiationMode==="EAGER"}/**
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
 */class I_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new C_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const T_={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},S_=pe.INFO,k_={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},x_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=k_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=S_,this._logHandler=x_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const R_=(t,e)=>e.some(n=>t instanceof n);let Uu,Wu;function P_(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A_(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Df=new WeakMap,Za=new WeakMap,Ff=new WeakMap,da=new WeakMap,Jl=new WeakMap;function N_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Df.set(n,t)}).catch(()=>{}),Jl.set(e,t),e}function O_(t){if(Za.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Za.set(t,e)}let el={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ff.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M_(t){el=t(el)}function L_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ha(this),e,...n);return Ff.set(s,e.sort?e.sort():[e]),Rn(s)}:A_().includes(t)?function(...e){return t.apply(ha(this),e),Rn(Df.get(this))}:function(...e){return Rn(t.apply(ha(this),e))}}function D_(t){return typeof t=="function"?L_(t):(t instanceof IDBTransaction&&O_(t),R_(t,P_())?new Proxy(t,el):t)}function Rn(t){if(t instanceof IDBRequest)return N_(t);if(da.has(t))return da.get(t);const e=D_(t);return e!==t&&(da.set(t,e),Jl.set(e,t)),e}const ha=t=>Jl.get(t);function F_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $_=["get","getKey","getAll","getAllKeys","count"],U_=["put","add","delete","clear"],fa=new Map;function Vu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=U_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fa.set(e,r),r}M_(t=>({...t,get:(e,n,s)=>Vu(e,n)||t.get(e,n,s),has:(e,n)=>!!Vu(e,n)||t.has(e,n)}));/**
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
 */class W_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function V_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tl="@firebase/app",zu="0.9.15";/**
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
 */const ls=new Ql("@firebase/app"),z_="@firebase/app-compat",B_="@firebase/analytics-compat",H_="@firebase/analytics",j_="@firebase/app-check-compat",q_="@firebase/app-check",K_="@firebase/auth",G_="@firebase/auth-compat",Y_="@firebase/database",Q_="@firebase/database-compat",J_="@firebase/functions",X_="@firebase/functions-compat",Z_="@firebase/installations",ey="@firebase/installations-compat",ty="@firebase/messaging",ny="@firebase/messaging-compat",sy="@firebase/performance",iy="@firebase/performance-compat",ry="@firebase/remote-config",oy="@firebase/remote-config-compat",ay="@firebase/storage",ly="@firebase/storage-compat",cy="@firebase/firestore",uy="@firebase/firestore-compat",dy="firebase",hy="10.1.0";/**
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
 */const nl="[DEFAULT]",fy={[tl]:"fire-core",[z_]:"fire-core-compat",[H_]:"fire-analytics",[B_]:"fire-analytics-compat",[q_]:"fire-app-check",[j_]:"fire-app-check-compat",[K_]:"fire-auth",[G_]:"fire-auth-compat",[Y_]:"fire-rtdb",[Q_]:"fire-rtdb-compat",[J_]:"fire-fn",[X_]:"fire-fn-compat",[Z_]:"fire-iid",[ey]:"fire-iid-compat",[ty]:"fire-fcm",[ny]:"fire-fcm-compat",[sy]:"fire-perf",[iy]:"fire-perf-compat",[ry]:"fire-rc",[oy]:"fire-rc-compat",[ay]:"fire-gcs",[ly]:"fire-gcs-compat",[cy]:"fire-fst",[uy]:"fire-fst-compat","fire-js":"fire-js",[dy]:"fire-js-all"};/**
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
 */const Xr=new Map,sl=new Map;function py(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(sl.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of Xr.values())py(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const my={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new ar("app","Firebase",my);/**
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
 */class gy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=hy;function $f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=Af()),!n)throw Pn.create("no-options");const r=Xr.get(i);if(r){if(Jr(n,r.options)&&Jr(s,r.config))return r;throw Pn.create("duplicate-app",{appName:i})}const o=new I_(i);for(const l of sl.values())o.addComponent(l);const a=new gy(n,s,o);return Xr.set(i,a),a}function Uf(t=nl){const e=Xr.get(t);if(!e&&t===nl&&Af())return $f();if(!e)throw Pn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=fy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}Fs(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _y="firebase-heartbeat-database",yy=1,zi="firebase-heartbeat-store";let pa=null;function Wf(){return pa||(pa=F_(_y,yy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zi)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function vy(t){try{return await(await Wf()).transaction(zi).objectStore(zi).get(Vf(t))}catch(e){if(e instanceof Vn)ls.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function Bu(t,e){try{const s=(await Wf()).transaction(zi,"readwrite");await s.objectStore(zi).put(e,Vf(t)),await s.done}catch(n){if(n instanceof Vn)ls.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(s.message)}}}function Vf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wy=1024,Cy=30*24*60*60*1e3;class Ey{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Iy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Cy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hu(),{heartbeatsToSend:n,unsentEntries:s}=by(this._heartbeatsCache.heartbeats),i=Gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hu(){return new Date().toISOString().substring(0,10)}function by(t,e=wy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ju(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ju(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?u_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ju(t){return Gr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ty(t){Fs(new as("platform-logger",e=>new W_(e),"PRIVATE")),Fs(new as("heartbeat",e=>new Ey(e),"PRIVATE")),An(tl,zu,t),An(tl,zu,"esm2017"),An("fire-js","")}Ty("");var Sy="firebase",ky="10.1.0";/**
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
 */An(Sy,ky,"app");const xy={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},zf=$f(xy);function Zl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Bf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ry=Bf,Hf=new ar("auth","Firebase",Bf());/**
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
 */const Zr=new Ql("@firebase/auth");function Py(t,...e){Zr.logLevel<=pe.WARN&&Zr.warn(`Auth (${Js}): ${t}`,...e)}function Fr(t,...e){Zr.logLevel<=pe.ERROR&&Zr.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function Rt(t,...e){throw ec(t,...e)}function Wt(t,...e){return ec(t,...e)}function Ay(t,e,n){const s=Object.assign(Object.assign({},Ry()),{[e]:n});return new ar("auth","Firebase",s).create(e,{appName:t.name})}function ec(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hf.create(t,...e)}function G(t,e,...n){if(!t)throw ec(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fr(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
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
 */function il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ny(){return qu()==="http:"||qu()==="https:"}function qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ny()||a_()||"connection"in navigator)?navigator.onLine:!0}function My(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gl()||Of()}get(){return Oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tc(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dy=new lr(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,i={}){return qf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jf.fetch()(Kf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ly),e);try{const i=new Fy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Rr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Rr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ay(t,u,c);Rt(t,u)}}catch(i){if(i instanceof Vn)throw i;Rt(t,"network-request-failed",{message:String(i)})}}async function Vo(t,e,n,s,i={}){const r=await Xs(t,e,n,s,i);return"mfaPendingCredential"in r&&Rt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Kf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?tc(t.config,i):`${t.config.apiScheme}://${i}`}class Fy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wt(this.auth,"network-request-failed")),Dy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Wt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function $y(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function Uy(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wy(t,e=!1){const n=dt(t),s=await n.getIdToken(e),i=nc(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ci(ma(i.auth_time)),issuedAtTime:Ci(ma(i.iat)),expirationTime:Ci(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function nc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yr(n);return i?JSON.parse(i):(Fr("Failed to decode base64 JWT payload"),null)}catch(i){return Fr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vy(t){const e=nc(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vn&&zy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function zy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class By{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Bi(t,Uy(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qy(r.providerUserInfo):[],a=jy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Gf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Hy(t){const e=dt(t);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function qy(t){return t.map(e=>{var{providerId:n}=e,s=Zl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ky(t,e){const n=await qf(t,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Kf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ky(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Hi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function hn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new By(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wy(this,e)}reload(){return Hy(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bi(this,$y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:F,isAnonymous:Z,providerData:we,stsTokenManager:be}=n;G(K&&be,e,"internal-error");const L=Hi.fromJSON(this.name,be);G(typeof K=="string",e,"internal-error"),hn(d,e.name),hn(h,e.name),G(typeof F=="boolean",e,"internal-error"),G(typeof Z=="boolean",e,"internal-error"),hn(m,e.name),hn(_,e.name),hn(v,e.name),hn(S,e.name),hn(N,e.name),hn(M,e.name);const V=new rs({uid:K,auth:e,email:h,emailVerified:F,displayName:d,isAnonymous:Z,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:L,createdAt:N,lastLoginAt:M});return we&&Array.isArray(we)&&(V.providerData=we.map(J=>Object.assign({},J))),S&&(V._redirectEventId=S),V}static async _fromIdTokenResponse(e,n,s=!1){const i=new Hi;i.updateFromServerResponse(n);const r=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await eo(r),r}}/**
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
 */const Ku=new Map;function Jt(t){sn(t instanceof Function,"Expected a class definition");let e=Ku.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ku.set(t,e),e)}/**
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
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yf.type="NONE";const Gu=Yf;/**
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
 */function $r(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=$r(this.userKey,i.apiKey,r),this.fullPersistenceKey=$r("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(Jt(Gu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Jt(Gu);const o=$r(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=rs._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xs(r,e,s))}}/**
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
 */function Yu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ep(e))return"Blackberry";if(tp(e))return"Webos";if(sc(e))return"Safari";if((e.includes("chrome/")||Jf(e))&&!e.includes("edge/"))return"Chrome";if(Zf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qf(t=Ze()){return/firefox\//i.test(t)}function sc(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jf(t=Ze()){return/crios\//i.test(t)}function Xf(t=Ze()){return/iemobile/i.test(t)}function Zf(t=Ze()){return/android/i.test(t)}function ep(t=Ze()){return/blackberry/i.test(t)}function tp(t=Ze()){return/webos/i.test(t)}function zo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gy(t=Ze()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yy(){return l_()&&document.documentMode===10}function np(t=Ze()){return zo(t)||Zf(t)||tp(t)||ep(t)||/windows phone/i.test(t)||Xf(t)}function Qy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sp(t,e=[]){let n;switch(t){case"Browser":n=Yu(Ze());break;case"Worker":n=`${Yu(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}async function ip(t,e){return Xs(t,"GET","/v2/recaptchaConfig",cr(t,e))}function Qu(t){return t!==void 0&&t.enterprise!==void 0}class rp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Jy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function op(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Wt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Jy().appendChild(s)})}function Xy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zy="https://www.google.com/recaptcha/enterprise.js?render=",e2="recaptcha-enterprise",t2="NO_RECAPTCHA";class ap{constructor(e){this.type=e2,this.auth=ur(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ip(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Qu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(t2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Qu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}op(Zy+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ju(t,e,n,s=!1){const i=new ap(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class n2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class s2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xu(this),this.idTokenSubscription=new Xu(this),this.beforeStateQueue=new n2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=My()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}async initializeRecaptchaConfig(){const e=await ip(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new rp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ap(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Py(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return dt(t)}class Xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=__(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function i2(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Jr(r,e??{}))return i;Rt(i,"already-initialized")}return n.initialize({options:e})}function r2(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function o2(t,e,n){const s=ur(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=lp(e),{host:o,port:a}=a2(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||l2()}function lp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a2(t){const e=lp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zu(o)}}}function Zu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ic{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function c2(t,e){return Xs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ga(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
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
 */async function u2(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function d2(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
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
 */class ji extends ic{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ji(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ju(e,s,"signInWithPassword");return ga(e,i)}else return ga(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ju(e,s,"signInWithPassword");return ga(e,r)}else return Promise.reject(i)});case"emailLink":return u2(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return c2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d2(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
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
 */const h2="http://localhost";class cs extends ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Zl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new cs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:h2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
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
 */function f2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p2(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,s=pi(mi(t)).deep_link_id;return(s?pi(mi(s)).link:null)||s||n||e||t}class rc{constructor(e){var n,s,i,r,o,a;const l=pi(mi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=f2((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p2(e);try{return new rc(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=rc.parseLink(n);return G(s,"argument-error"),ji._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends dr{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class En extends dr{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class bn extends dr{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await rs._fromIdTokenResponse(e,s,i),o=ed(s);return new $s({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ed(s);return new $s({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class to extends Vn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new to(e,n,s,i)}}function up(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(t,r,e,s):r})}async function m2(t,e,n=!1){const s=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",s)}/**
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
 */async function g2(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Bi(t,up(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=nc(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),$s._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Rt(s,"user-mismatch"),r}}/**
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
 */async function dp(t,e,n=!1){const s="signIn",i=await up(t,s,e),r=await $s._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function _2(t,e){return dp(ur(t),e)}function y2(t,e,n){return _2(dt(t),Zs.credential(e,n))}function v2(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function w2(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function C2(t,e,n,s){return dt(t).onAuthStateChanged(e,n,s)}const no="__sak";/**
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
 */class hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function E2(){const t=Ze();return sc(t)||zo(t)}const b2=1e3,I2=10;class fp extends hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=E2()&&Qy(),this.fallbackToPolling=np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Yy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,I2):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},b2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fp.type="LOCAL";const T2=fp;/**
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
 */class pp extends hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pp.type="SESSION";const mp=pp;/**
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
 */function S2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Bo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await S2(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
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
 */function oc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=oc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vt(){return window}function x2(t){Vt().location.href=t}/**
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
 */function gp(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function R2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A2(){return gp()?self:null}/**
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
 */const _p="firebaseLocalStorageDb",N2=1,so="firebaseLocalStorage",yp="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function O2(){const t=indexedDB.deleteDatabase(_p);return new hr(t).toPromise()}function rl(){const t=indexedDB.open(_p,N2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(so,{keyPath:yp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(so)?e(s):(s.close(),await O2(),e(await rl()))})})}async function td(t,e,n){const s=Ho(t,!0).put({[yp]:e,value:n});return new hr(s).toPromise()}async function M2(t,e){const n=Ho(t,!1).get(e),s=await new hr(n).toPromise();return s===void 0?null:s.value}function nd(t,e){const n=Ho(t,!0).delete(e);return new hr(n).toPromise()}const L2=800,D2=3;class vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>D2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(A2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await R2(),!this.activeServiceWorker)return;this.sender=new k2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rl();return await td(e,no,"1"),await nd(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>td(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>M2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ho(i,!1).getAll();return new hr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vp.type="LOCAL";const F2=vp;new lr(3e4,6e4);/**
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
 */function $2(t,e){return e?Jt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ac extends ic{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U2(t){return dp(t.auth,new ac(t),t.bypassAuthState)}function W2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),g2(n,new ac(t),t.bypassAuthState)}async function V2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),m2(n,new ac(t),t.bypassAuthState)}/**
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
 */class wp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U2;case"linkViaPopup":case"linkViaRedirect":return V2;case"reauthViaPopup":case"reauthViaRedirect":return W2;default:Rt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const z2=new lr(2e3,1e4);class bs extends wp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z2.get())};e()}}bs.currentPopupAction=null;/**
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
 */const B2="pendingRedirect",Ur=new Map;class H2 extends wp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ur.get(this.auth._key());if(!e){try{const s=await j2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ur.set(this.auth._key(),e)}return this.bypassAuthState||Ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j2(t,e){const n=G2(e),s=K2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function q2(t,e){Ur.set(t._key(),e)}function K2(t){return Jt(t._redirectPersistence)}function G2(t){return $r(B2,t.config.apiKey,t.name)}async function Y2(t,e,n=!1){const s=ur(t),i=$2(s,e),o=await new H2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Q2=10*60*1e3;class J2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q2&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(e))}saveEventToCache(e){this.cachedEventUids.add(sd(e)),this.lastProcessedEventTime=Date.now()}}function sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cp(t);default:return!1}}/**
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
 */async function Z2(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const ev=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tv=/^https?/;async function nv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z2(t);for(const n of e)try{if(sv(n))return}catch{}Rt(t,"unauthorized-domain")}function sv(t){const e=il(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tv.test(n))return!1;if(ev.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const iv=new lr(3e4,6e4);function id(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rv(t){return new Promise((e,n)=>{var s,i,r;function o(){id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{id(),n(Wt(t,"network-request-failed"))},timeout:iv.get()})}if(!((i=(s=Vt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Vt().gapi)===null||r===void 0)&&r.load)o();else{const a=Xy("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},op(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function ov(t){return Wr=Wr||rv(t),Wr}/**
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
 */const av=new lr(5e3,15e3),lv="__/auth/iframe",cv="emulator/auth/iframe",uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hv(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tc(e,cv):`https://${t.config.authDomain}/${lv}`,s={apiKey:e.apiKey,appName:t.name,v:Js},i=dv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qs(s).slice(1)}`}async function fv(t){const e=await ov(t),n=Vt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:hv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Vt().setTimeout(()=>{r(o)},av.get());function l(){Vt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mv=500,gv=600,_v="_blank",yv="http://localhost";class rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vv(t,e,n,s=mv,i=gv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ze().toLowerCase();n&&(a=Jf(c)?_v:n),Qf(c)&&(e=e||yv,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Gy(c)&&a!=="_self")return wv(e||"",a),new rd(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new rd(d)}function wv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Cv="__/auth/handler",Ev="emulator/auth/handler",bv=encodeURIComponent("fac");async function od(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:i};if(e instanceof cp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof dr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${bv}=${encodeURIComponent(l)}`:"";return`${Iv(t)}?${Qs(a).slice(1)}${c}`}function Iv({config:t}){return t.emulator?tc(t,Ev):`https://${t.authDomain}/${Cv}`}/**
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
 */const _a="webStorageSupport";class Tv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mp,this._completeRedirectFn=Y2,this._overrideRedirectResult=q2}async _openPopup(e,n,s,i){var r;sn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await od(e,n,s,il(),i);return vv(e,o,oc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await od(e,n,s,il(),i);return x2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(sn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fv(e),s=new J2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_a];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return np()||sc()||zo()}}const Sv=Tv;var ad="@firebase/auth",ld="1.1.0";/**
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
 */class kv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rv(t){Fs(new as("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sp(t)},c=new s2(s,i,r,l);return r2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fs(new as("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(s=>new kv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ad,ld,xv(t)),An(ad,ld,"esm2017")}/**
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
 */const Pv=5*60,Av=Nf("authIdTokenMaxAge")||Pv;let cd=null;const Nv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Av)return;const i=n==null?void 0:n.token;cd!==i&&(cd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ov(t=Uf()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i2(t,{popupRedirectResolver:Sv,persistence:[F2,T2,mp]}),s=Nf("authTokenSyncURL");if(s){const r=Nv(s);w2(n,r,()=>r(n.currentUser)),v2(n,o=>r(o))}const i=Pf("auth");return i&&o2(n,`http://${i}`),n}Rv("Browser");const lc=Ov(zf),io=Ne({}),gn=Ne({}),qi=new Ne(!1);C2(lc,async t=>{if(t){io.value=t,gn.value=await jE(`users/${t.uid}`);for(const{observable:e,path:n}of Vm)if(gn.value["game-data"]&&gn.value["game-data"]["tileswap-naenae"]&&gn.value["game-data"]["tileswap-naenae"][n]){const s=gn.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=gn.value["game-data"]["tileswap-naenae"][n]}}else io.value={},gn.value={};qi.value=!0});const jo=Oe(()=>io.value);Oe(()=>gn.value);const fr=Oe(()=>Object.keys(io.value).length>0),Mv=async(t,e)=>await y2(lc,t,e),ol=async()=>await lc.signOut(),ud="@firebase/database",dd="1.0.1";/**
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
 */let Ep="";function Lv(t){Ep=t}/**
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
 */class Dv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Fv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Dv(e)}}catch{}return new Fv},Xn=bp("localStorage"),al=bp("sessionStorage");/**
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
 */const Ps=new Ql("@firebase/database"),$v=function(){let t=1;return function(){return t++}}(),Ip=function(t){const e=w_(t),n=new g_;n.update(e);const s=n.digest();return ql.encodeByteArray(s)},pr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=pr.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let os=null,hd=!0;const Uv=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ps.logLevel=pe.VERBOSE,os=Ps.log.bind(Ps),e&&al.set("logging_enabled",!0)):typeof t=="function"?os=t:(os=null,al.remove("logging_enabled"))},Qe=function(...t){if(hd===!0&&(hd=!1,os===null&&al.get("logging_enabled")===!0&&Uv(!0)),os){const e=pr.apply(null,t);os(e)}},mr=function(t){return function(...e){Qe(t,...e)}},ll=function(...t){const e="FIREBASE INTERNAL ERROR: "+pr(...t);Ps.error(e)},rn=function(...t){const e=`FIREBASE FATAL ERROR: ${pr(...t)}`;throw Ps.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+pr(...t);Ps.warn(e)},Wv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Us="[MIN_NAME]",us="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Us||e===us)return-1;if(e===Us||t===us)return 1;{const n=fd(t),s=fd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},zv=function(t,e){return t===e?0:t<e?-1:1},ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},cc=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=cc(t[e[s]]);return n+="}",n},Sp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ut(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kp=function(t){T(!Tp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Bv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const qv=new RegExp("^-?(0*)\\d{1,10}$"),Kv=-2147483648,Gv=2147483647,fd=function(t){if(qv.test(t)){const e=Number(t);if(e>=Kv&&e<=Gv)return e}return null},ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jv{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
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
 */const uc="5",xp="v",Rp="s",Pp="r",Ap="f",Np=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Op="ls",Mp="p",cl="ac",Lp="websocket",Dp="long_polling";/**
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
 */class Fp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $p(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Lp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xv(t)&&(n.ns=t.namespace);const i=[];return ut(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Zv{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Z1(this.counters_)}}/**
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
 */const ya={},va={};function dc(t){const e=t.toString();return ya[e]||(ya[e]=new Zv),ya[e]}function ew(t,e){const n=t.toString();return va[n]||(va[n]=e()),va[n]}/**
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
 */class tw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ti(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pd="start",nw="close",sw="pLPCommand",iw="pRTLPCB",Up="id",Wp="pw",Vp="ser",rw="cb",ow="seg",aw="ts",lw="d",cw="dframe",zp=1870,Bp=30,uw=zp-Bp,dw=25e3,hw=3e4;class Is{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mr(e),this.stats_=dc(n),this.urlFn=l=>(this.appCheckToken&&(l[cl]=this.appCheckToken),$p(n,Dp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hw)),Vv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pd)this.id=a,this.password=l;else if(o===nw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[pd]="t",s[Vp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xp]=uc,this.transportSessionId&&(s[Rp]=this.transportSessionId),this.lastSessionId&&(s[Op]=this.lastSessionId),this.applicationId&&(s[Mp]=this.applicationId),this.appCheckToken&&(s[cl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Np.test(location.hostname)&&(s[Pp]=Ap);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Is.forceAllow_=!0}static forceDisallow(){Is.forceDisallow_=!0}static isAvailable(){return Is.forceAllow_?!0:!Is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bv()&&!Hv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xf(n),i=Sp(s,uw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[cw]="t",s[Up]=e,s[Wp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$v(),window[sw+this.uniqueCallbackIdentifier]=e,window[iw+this.uniqueCallbackIdentifier]=n,this.myIFrame=hc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Up]=this.myID,e[Wp]=this.myPW,e[Vp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bp+s.length<=zp;){const o=this.pendingSegs.shift();s=s+"&"+ow+i+"="+o.seg+"&"+aw+i+"="+o.ts+"&"+lw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(dw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const fw=16384,pw=45e3;let ro=null;typeof MozWebSocket<"u"?ro=MozWebSocket:typeof WebSocket<"u"&&(ro=WebSocket);class Ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mr(this.connId),this.stats_=dc(n),this.connURL=Ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[xp]=uc,typeof location<"u"&&location.hostname&&Np.test(location.hostname)&&(o[Pp]=Ap),n&&(o[Rp]=n),s&&(o[Op]=s),i&&(o[cl]=i),r&&(o[Mp]=r),$p(e,Lp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let s;Mf(),this.mySock=new ro(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ro!==null&&!Ct.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Vi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sp(n,fw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Is,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let s=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ct];else{const i=this.transports_=[];for(const r of Ki.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
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
 */const mw=6e4,gw=5e3,_w=10*1024,yw=100*1024,wa="t",md="d",vw="s",gd="r",ww="e",_d="o",yd="a",vd="n",wd="p",Cw="h";class Ew{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mr("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_w?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wa in e){const n=e[wa];n===yd?this.upgradeIfSecondaryHealthy_():n===gd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_d&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ai("t",e),s=ai("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ai("t",e),s=ai("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ai(wa,e);if(md in e){const s=e[md];if(n===Cw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vw?this.onConnectionShutdown_(s):n===gd?this.onReset_(s):n===ww?ll("Server Error: "+s):n===_d?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ll("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),uc!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class jp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class oo extends jp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oo}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cd=32,Ed=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new ve("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function qp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Kp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ve(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return nt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yp(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Iw{constructor(e,n){this.errorPrefix_=n,this.parts_=Kp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wo(this.parts_[s]);Qp(this)}}function Tw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wo(e),Qp(t)}function Sw(t){const e=t.parts_.pop();t.byteLength_-=Wo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qp(t){if(t.byteLength_>Ed)throw new Error(t.errorPrefix_+"has a key path longer than "+Ed+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cd+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fc extends jp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const li=1e3,kw=60*5*1e3,bd=30*1e3,xw=1.3,Rw=3e4,Pw="server_kill",Id=3;class Zt extends Hp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zt.nextPersistentConnectionId_++,this.log_=mr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=li,this.maxReconnectDelay_=kw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Mf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Uo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Zt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=Ds(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||m_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=p_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ll("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Rw&&(this.reconnectDelay_=li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Ew(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{lt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pw)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&lt(d),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xa(this.interruptReasons_)&&(this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>cc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Id&&(this.reconnectDelay_=bd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Id&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ep.replace(/\./g,"-")]=1,Gl()?e["framework.cordova"]=1:Of()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oo.getInstance().currentlyOnline();return Xa(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */class qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Us,e),i=new ee(Us,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let Pr;class Jp extends qo{static get __EMPTY_NODE(){return Pr}static set __EMPTY_NODE(e){Pr=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(us,Pr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Pr)}toString(){return".key"}}const Ns=new Jp;/**
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
 */class Ar{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??He.RED,this.left=i??at.EMPTY_NODE,this.right=r??at.EMPTY_NODE}copy(e,n,s,i,r){return new He(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class Aw{copy(e,n,s,i,r){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,n=at.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new at(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ar(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ar(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ar(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ar(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new Aw;/**
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
 */function Nw(t,e){return ei(t.name,e.name)}function pc(t,e){return ei(t,e)}/**
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
 */let ul;function Ow(t){ul=t}const Xp=function(t){return typeof t=="number"?"number:"+kp(t):"string:"+t},Zp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else T(t===ul||t.isEmpty(),"priority of unexpected type.");T(t===ul||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Td;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zp(this.priorityNode_)}static set __childrenNodeConstructor(e){Td=e}static get __childrenNodeConstructor(){return Td}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kp(this.value_):e+=this.value_,this.lazyHash_=Ip(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let em,tm;function Mw(t){em=t}function Lw(t){tm=t}class Dw extends qo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(us,new Be("[PRIORITY-POST]",tm))}makePost(e,n){const s=em(e);return new ee(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new Dw;/**
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
 */const Fw=Math.log(2);class $w{constructor(e){const n=r=>parseInt(Math.log(r)/Fw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ao=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new He(h,d.node,He.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),v=i(m+1,c);return d=t[m],h=n?n(d):d,new He(h,d.node,He.BLACK,_,v)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,v){const S=d-_,N=d;d-=_;const M=i(S+1,N),K=t[S],F=n?n(K):K;m(new He(F,K.node,v,null,M))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));v?h(S,He.BLACK):(h(S,He.BLACK),h(S,He.RED))}return u},o=new $w(t.length),a=r(o);return new at(s||e,a)};/**
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
 */let Ca;const ws={};class Xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ws&&Ae,"ChildrenNode.ts has not been loaded"),Ca=Ca||new Xt({".priority":ws},{".priority":Ae}),Ca}get(e){const n=Ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof at?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ao(s,e.getCompare()):a=ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Xt(u,c)}addToIndexes(e,n){const s=Qr(this.indexes_,(i,r)=>{const o=Ds(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ao(a,o.getCompare())}else return ws;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qr(this.indexes_,i=>{if(i===ws)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Xt(s,this.indexSet_)}}/**
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
 */let ci;class q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ci||(ci=new q(new at(pc),null,Xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ci}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ci:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ci:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{T(se(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xp(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ip(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gr?-1:0}withIndex(e){if(e===Ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),i=n.getIterator(Ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ns?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uw extends q{constructor(){super(new at(pc),q.EMPTY_NODE,Xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const gr=new Uw;Object.defineProperties(ee,{MIN:{value:new ee(Us,q.EMPTY_NODE)},MAX:{value:new ee(us,gr)}});Jp.__EMPTY_NODE=q.EMPTY_NODE;Be.__childrenNodeConstructor=q;Ow(gr);Lw(gr);/**
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
 */const Ww=!0;function je(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,je(e))}if(!(t instanceof Array)&&Ww){const n=[];let s=!1;if(ut(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=je(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=ao(n,Nw,o=>o.name,pc);if(s){const o=ao(n,Ae.getCompare());return new q(r,je(e),new Xt({".priority":o},{".priority":Ae}))}else return new q(r,je(e),Xt.Default)}else{let n=q.EMPTY_NODE;return ut(t,(s,i)=>{if(an(t,s)&&s.substring(0,1)!=="."){const r=je(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(je(e))}}Mw(je);/**
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
 */class Vw extends qo{constructor(e){super(),this.indexPath_=e,T(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ei(e.name,n.name):r}makePost(e,n){const s=je(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,gr);return new ee(us,e)}toString(){return Kp(this.indexPath_,0).join("/")}}/**
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
 */class zw extends qo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=je(e);return new ee(n,s)}toString(){return".value"}}const Bw=new zw;/**
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
 */function nm(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Hw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class mc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Gi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,s)):o.trackChildChange(Yi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(Gi(i,r))}),n.isLeafNode()||n.forEachChild(Ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Yi(i,r,o))}else s.trackChildChange(Ws(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qi{constructor(e){this.indexedFilter_=new mc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Ae,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class jw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Yi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Gi(n,d));const v=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ws(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gi(c.name,c.node)),r.trackChildChange(Ws(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
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
 */class gc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new gc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qw(t){return t.loadsAllData()?new mc(t.getIndex()):t.hasLimit()?new jw(t):new Qi(t)}function Sd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===Bw?n="$value":t.index_===Ns?n="$key":(T(t.index_ instanceof Vw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
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
 */class lo extends Hp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=mr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=lo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Sd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ds(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=lo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Sd(e._queryParams),s=e._path.toString(),i=new Uo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vi(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Kw{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function co(){return{value:null,children:new Map}}function sm(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,co());const i=t.children.get(s);e=Ee(e),sm(i,e,n)}}function dl(t,e,n){t.value!==null?n(e,t.value):Gw(t,(s,i)=>{const r=new ve(e.toString()+"/"+s);dl(i,r,n)})}function Gw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Yw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ut(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const xd=10*1e3,Qw=30*1e3,Jw=5*60*1e3;class Xw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Yw(e);const s=xd+(Qw-xd)*Math.random();Ei(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ut(e,(i,r)=>{r>0&&an(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jw))}}/**
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
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function im(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _c(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class uo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=It.ACK_USER_WRITE,this.source=im()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new uo(ce(),n,this.revert)}}else return T(se(this.path)===e,"operationForChild called for unrelated child."),new uo(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ji{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Ji(this.source,ce()):new Ji(this.source,Ee(this.path))}}/**
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
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=It.OVERWRITE}operationForChild(e){return te(this.path)?new ds(this.source,ce(),this.snap.getImmediateChild(e)):new ds(this.source,Ee(this.path),this.snap)}}/**
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
 */class Xi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=It.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new ds(this.source,ce(),n.value):new Xi(this.source,ce(),n)}else return T(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Zw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Hw(o.childName,o.snapshotNode))}),ui(t,i,"child_removed",e,s,n),ui(t,i,"child_added",e,s,n),ui(t,i,"child_moved",r,s,n),ui(t,i,"child_changed",e,s,n),ui(t,i,"value",e,s,n),i}function ui(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>nC(t,a,l)),o.forEach(a=>{const l=tC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nC(t,e,n){if(e.childName==null||n.childName==null)throw Ys("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ko(t,e){return{eventCache:t,serverCache:e}}function bi(t,e,n,s){return Ko(new Fn(e,n,s),t.serverCache)}function rm(t,e,n,s){return Ko(t.eventCache,new Fn(e,n,s))}function ho(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ea;const sC=()=>(Ea||(Ea=new at(zv)),Ea);class Te{constructor(e,n=sC()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return ut(e,(s,i)=>{n=n.set(new ve(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Ve(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new Te(null)}}set(e,n){if(te(e))return new Te(n,this.children);{const s=se(e),r=(this.children.get(s)||new Te(null)).set(Ee(e),n),o=this.children.insert(s,r);return new Te(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Te(null):new Te(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new Te(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Te(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),Ve(n,i),s):new Te(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new Te(null))}}function Ii(t,e,n){if(te(e))return new kt(new Te(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=nt(i,e);return r=r.updateChild(o,n),new kt(t.writeTree_.set(i,r))}else{const i=new Te(n),r=t.writeTree_.setTree(e,i);return new kt(r)}}}function Rd(t,e,n){let s=t;return ut(n,(i,r)=>{s=Ii(s,Ve(e,i),r)}),s}function Pd(t,e){if(te(e))return kt.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new kt(n)}}function hl(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function Ad(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Nn(t,e){if(te(e))return t;{const n=ps(t,e);return n!=null?new kt(new Te(n)):new kt(t.writeTree_.subtree(e))}}function fl(t){return t.writeTree_.isEmpty()}function Vs(t,e){return om(ce(),t.writeTree_,e)}function om(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=om(Ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ve(t,".priority"),s)),n}}/**
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
 */function Go(t,e){return um(e,t)}function iC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ii(t.visibleWrites,e,n)),t.lastWriteId=s}function rC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function oC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aC(a,s.path)?i=!1:bt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return lC(t),!0;if(s.snap)t.visibleWrites=Pd(t.visibleWrites,s.path);else{const a=s.children;ut(a,l=>{t.visibleWrites=Pd(t.visibleWrites,Ve(s.path,l))})}return!0}else return!1}function aC(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Ve(t.path,n),e))return!0;return!1}function lC(t){t.visibleWrites=am(t.allWrites,cC,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cC(t){return t.visible}function am(t,e,n){let s=kt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)bt(n,o)?(a=nt(n,o),s=Ii(s,a,r.snap)):bt(o,n)&&(a=nt(o,n),s=Ii(s,ce(),r.snap.getChild(a)));else if(r.children){if(bt(n,o))a=nt(n,o),s=Rd(s,a,r.children);else if(bt(o,n))if(a=nt(o,n),te(a))s=Rd(s,ce(),r.children);else{const l=Ds(r.children,se(a));if(l){const c=l.getChild(Ee(a));s=Ii(s,ce(),c)}}}else throw Ys("WriteRecord should have .snap or .children")}}return s}function lm(t,e,n,s,i){if(!s&&!i){const r=ps(t.visibleWrites,e);if(r!=null)return r;{const o=Nn(t.visibleWrites,e);if(fl(o))return n;if(n==null&&!hl(o,ce()))return null;{const a=n||q.EMPTY_NODE;return Vs(o,a)}}}else{const r=Nn(t.visibleWrites,e);if(!i&&fl(r))return n;if(!i&&n==null&&!hl(r,ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(bt(c.path,e)||bt(e,c.path))},a=am(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Vs(a,l)}}}function uC(t,e,n){let s=q.EMPTY_NODE;const i=ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=Vs(Nn(r,new ve(o)),a);s=s.updateImmediateChild(o,l)}),Ad(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nn(t.visibleWrites,e);return Ad(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ve(e,n);if(hl(t.visibleWrites,r))return null;{const o=Nn(t.visibleWrites,r);return fl(o)?i.getChild(n):Vs(o,i.getChild(n))}}function hC(t,e,n,s){const i=Ve(e,n),r=ps(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return Vs(o,s.getNode().getImmediateChild(n))}else return null}function fC(t,e){return ps(t.visibleWrites,e)}function pC(t,e,n,s,i,r,o){let a;const l=Nn(t.visibleWrites,e),c=ps(l,ce());if(c!=null)a=c;else if(n!=null)a=Vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function mC(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function fo(t,e,n,s){return lm(t.writeTree,t.treePath,e,n,s)}function vc(t,e){return uC(t.writeTree,t.treePath,e)}function Nd(t,e,n,s){return dC(t.writeTree,t.treePath,e,n,s)}function po(t,e){return fC(t.writeTree,Ve(t.treePath,e))}function gC(t,e,n,s,i,r){return pC(t.writeTree,t.treePath,e,n,s,i,r)}function wc(t,e,n){return hC(t.writeTree,t.treePath,e,n)}function cm(t,e){return um(Ve(t.treePath,e),t.writeTree)}function um(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _C{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Yi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ws(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Yi(s,e.snapshotNode,i.oldSnap));else throw Ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dm=new yC;class Cc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),r=gC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function vC(t){return{filter:t}}function wC(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CC(t,e,n,s,i){const r=new _C;let o,a;if(n.type===It.OVERWRITE){const c=n;c.source.fromUser?o=pl(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=mo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===It.MERGE){const c=n;c.source.fromUser?o=bC(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ml(t,e,c.path,c.children,s,i,a,r))}else if(n.type===It.ACK_USER_WRITE){const c=n;c.revert?o=SC(t,e,c.path,s,i,r):o=IC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===It.LISTEN_COMPLETE)o=TC(t,e,n.path,s,r);else throw Ys("Unknown operation type: "+n.type);const l=r.getChanges();return EC(e,o,l),{viewCache:o,changes:l}}function EC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ho(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(nm(ho(e)))}}function hm(t,e,n,s,i,r){const o=e.eventCache;if(po(s,n)!=null)return e;{let a,l;if(te(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof q?c:q.EMPTY_NODE,d=vc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=fo(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){T(Dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Nd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ee(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Nd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=wc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return bi(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function mo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Dn(n)>1)return e;const _=Ee(n),S=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),m,S,_,dm,null)}const d=rm(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new Cc(i,d,r);return hm(t,d,n,i,h,a)}function pl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Cc(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=bi(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=bi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ee(n),m=a.getNode().getImmediateChild(d);let _;if(te(h))_=s;else{const v=u.getCompleteChild(d);v!=null?qp(h)===".priority"&&v.getChild(Gp(h)).isEmpty()?_=v:_=v.updateChild(h,s):_=q.EMPTY_NODE}if(m.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=bi(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Od(t,e){return t.eventCache.isCompleteForChild(e)}function bC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ve(n,l);Od(e,se(u))&&(a=pl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ve(n,l);Od(e,se(u))||(a=pl(t,a,u,c,i,r,o))}),a}function Md(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ml(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new Te(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Md(t,m,h);l=mo(t,l,new ve(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=Md(t,_,h);l=mo(t,l,new ve(d),v,i,r,o,a)}}),l}function IC(t,e,n,s,i,r,o){if(po(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return mo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new Te(null);return l.getNode().forEachChild(Ns,(u,d)=>{c=c.set(new ve(u),d)}),ml(t,e,n,c,i,r,a,o)}else return e}else{let c=new Te(null);return s.foreach((u,d)=>{const h=Ve(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ml(t,e,n,c,i,r,a,o)}}function TC(t,e,n,s,i){const r=e.serverCache,o=rm(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return hm(t,o,n,s,dm,i)}function SC(t,e,n,s,i,r){let o;if(po(s,n)!=null)return e;{const a=new Cc(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fo(s,hs(e));else{const d=e.serverCache.getNode();T(d instanceof q,"serverChildren would be complete if leaf node"),u=vc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let d=wc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,Ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fo(s,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||po(s,ce())!=null,bi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class kC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new mc(s.getIndex()),r=qw(s);this.processor_=vC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new Fn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Fn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ko(d,u),this.eventGenerator_=new Zw(this.query_)}get query(){return this.query_}}function xC(t){return t.viewCache_.serverCache.getNode()}function RC(t){return ho(t.viewCache_)}function PC(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Ld(t){return t.eventRegistrations_.length===0}function AC(t,e){t.eventRegistrations_.push(e)}function Dd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Fd(t,e,n,s){e.type===It.MERGE&&e.source.queryId!==null&&(T(hs(t.viewCache_),"We should always have a full cache before handling merges"),T(ho(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=CC(t.processor_,i,e,n,s);return wC(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function NC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(r,o)=>{s.push(Ws(r,o))}),n.isFullyInitialized()&&s.push(nm(n.getNode())),fm(t,s,n.getNode(),e)}function fm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return eC(t.eventGenerator_,e,n,i)}/**
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
 */let go;class pm{constructor(){this.views=new Map}}function OC(t){T(!go,"__referenceConstructor has already been defined"),go=t}function MC(){return T(go,"Reference.ts has not been loaded"),go}function LC(t){return t.views.size===0}function Ec(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Fd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fd(o,e,n,s));return r}}function mm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=fo(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=vc(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=Ko(new Fn(a,l,!1),new Fn(s,i,!1));return new kC(e,c)}return o}function DC(t,e,n,s,i,r){const o=mm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AC(o,n),NC(o,n)}function FC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=$n(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Dd(c,n,s)),Ld(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Dd(l,n,s)),Ld(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$n(t)&&r.push(new(MC())(e._repo,e._path)),{removed:r,events:o}}function gm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const s of t.views.values())n=n||PC(s,e);return n}function _m(t,e){if(e._queryParams.loadsAllData())return Yo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ym(t,e){return _m(t,e)!=null}function $n(t){return Yo(t)!=null}function Yo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _o;function $C(t){T(!_o,"__referenceConstructor has already been defined"),_o=t}function UC(){return T(_o,"Reference.ts has not been loaded"),_o}let WC=1;class $d{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=mC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vm(t,e,n,s,i){return iC(t.pendingWriteTree_,e,n,s,i),i?yr(t,new ds(im(),e,n)):[]}function Zn(t,e,n=!1){const s=rC(t.pendingWriteTree_,e);if(oC(t.pendingWriteTree_,e)){let r=new Te(null);return s.snap!=null?r=r.set(ce(),!0):ut(s.children,o=>{r=r.set(new ve(o),!0)}),yr(t,new uo(s.path,r,n))}else return[]}function _r(t,e,n){return yr(t,new ds(_c(),e,n))}function VC(t,e,n){const s=Te.fromObject(n);return yr(t,new Xi(_c(),e,s))}function zC(t,e){return yr(t,new Ji(_c(),e))}function BC(t,e,n){const s=Ic(t,n);if(s){const i=Tc(s),r=i.path,o=i.queryId,a=nt(r,e),l=new Ji(yc(o),a);return Sc(t,r,l)}else return[]}function wm(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ym(o,e))){const l=FC(o,e,n,s);LC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>$n(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=KC(h);for(let _=0;_<m.length;++_){const v=m[_],S=v.query,N=Im(t,v);t.listenProvider_.startListening(Ti(S),Zi(t,S),N.hashFn,N.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ti(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Qo(h));t.listenProvider_.stopListening(Ti(h),m)}))}GC(t,c)}return a}function Cm(t,e,n,s){const i=Ic(t,s);if(i!=null){const r=Tc(i),o=r.path,a=r.queryId,l=nt(o,e),c=new ds(yc(a),l,n);return Sc(t,o,c)}else return[]}function HC(t,e,n,s){const i=Ic(t,s);if(i){const r=Tc(i),o=r.path,a=r.queryId,l=nt(o,e),c=Te.fromObject(n),u=new Xi(yc(a),l,c);return Sc(t,o,u)}else return[]}function jC(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=nt(h,i);r=r||On(m,_),o=o||$n(m)});let a=t.syncPointTree_.get(i);a?(o=o||$n(a),r=r||On(a,ce())):(a=new pm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=On(_,ce());v&&(r=r.updateImmediateChild(m,v))}));const c=ym(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Qo(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=YC();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Go(t.pendingWriteTree_,i);let d=DC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=_m(a,e);d=d.concat(QC(t,e,h))}return d}function bc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),c=On(a,l);if(c)return c});return lm(i,e,r,n,!0)}function qC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=nt(c,n);s=s||On(u,d)});let i=t.syncPointTree_.get(n);i?s=s||On(i,ce()):(i=new pm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Fn(s,!0,!1):null,a=Go(t.pendingWriteTree_,e._path),l=mm(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return RC(l)}function yr(t,e){return Em(e,t.syncPointTree_,null,Go(t.pendingWriteTree_,ce()))}function Em(t,e,n,s){if(te(t.path))return bm(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=On(i,ce()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cm(s,o);r=r.concat(Em(a,l,c,u))}return i&&(r=r.concat(Ec(i,t,s,n))),r}}function bm(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=On(i,ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cm(s,o),u=t.operationForChild(o);u&&(r=r.concat(bm(u,a,l,c)))}),i&&(r=r.concat(Ec(i,t,s,n))),r}function Im(t,e){const n=e.query,s=Zi(t,n);return{hashFn:()=>(xC(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?BC(t,n._path,s):zC(t,n._path);{const r=jv(i,n);return wm(t,n,null,r)}}}}function Zi(t,e){const n=Qo(e);return t.queryToTagMap.get(n)}function Qo(t){return t._path.toString()+"$"+t._queryIdentifier}function Ic(t,e){return t.tagToQueryMap.get(e)}function Tc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Sc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Go(t.pendingWriteTree_,e);return Ec(s,n,i,null)}function KC(t){return t.fold((e,n,s)=>{if(n&&$n(n))return[Yo(n)];{let i=[];return n&&(i=gm(n)),ut(s,(r,o)=>{i=i.concat(o)}),i}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UC())(t._repo,t._path):t}function GC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Qo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function YC(){return WC++}function QC(t,e,n){const s=e._path,i=Zi(t,e),r=Im(t,n),o=t.listenProvider_.startListening(Ti(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!$n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&$n(u))return[Yo(u).query];{let h=[];return u&&(h=h.concat(gm(u).map(m=>m.query))),ut(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ti(u),Zi(t,u))}}return o}/**
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
 */class kc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kc(n)}node(){return this.node_}}class xc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new xc(this.syncTree_,n)}node(){return bc(this.syncTree_,this.path_)}}const JC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ud=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZC(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},ZC=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},eE=function(t,e,n,s){return Rc(e,new xc(n,t),s)},Tm=function(t,e,n){return Rc(t,new kc(e),n)};function Rc(t,e,n){const s=t.getPriority().val(),i=Ud(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ud(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,je(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(Ae,(a,l)=>{const c=Rc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Pc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ac(t,e){let n=e instanceof ve?e:new ve(e),s=t,i=se(n);for(;i!==null;){const r=Ds(s.node.children,i)||{children:{},childCount:0};s=new Pc(i,s,r),n=Ee(n),i=se(n)}return s}function ni(t){return t.node.value}function Sm(t,e){t.node.value=e,gl(t)}function km(t){return t.node.childCount>0}function tE(t){return ni(t)===void 0&&!km(t)}function Jo(t,e){ut(t.node.children,(n,s)=>{e(new Pc(n,t,s))})}function xm(t,e,n,s){n&&!s&&e(t),Jo(t,i=>{xm(i,e,!0,s)}),n&&s&&e(t)}function nE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vr(t){return new ve(t.parent===null?t.name:vr(t.parent)+"/"+t.name)}function gl(t){t.parent!==null&&sE(t.parent,t.name,t)}function sE(t,e,n){const s=tE(n),i=an(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gl(t))}/**
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
 */const iE=/[\[\].#$\/\u0000-\u001F\u007F]/,rE=/[\[\].#$\u0000-\u001F\u007F]/,ba=10*1024*1024,Rm=function(t){return typeof t=="string"&&t.length!==0&&!iE.test(t)},Pm=function(t){return typeof t=="string"&&t.length!==0&&!rE.test(t)},oE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pm(t)},aE=function(t,e,n,s){s&&e===void 0||Nc(Yl(t,"value"),e,n)},Nc=function(t,e,n){const s=n instanceof ve?new Iw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(Tp(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>ba/3&&Wo(e)>ba)throw new Error(t+"contains a string greater than "+ba+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ut(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Rm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Tw(s,o),Nc(t,a,s),Sw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},Am=function(t,e,n,s){if(!(s&&n===void 0)&&!Pm(n))throw new Error(Yl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Am(t,e,n,s)},Nm=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oE(n))throw new Error(Yl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Om(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Yp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bt(t,e,n){Om(t,n),dE(t,s=>bt(s,e)||bt(e,s))}function dE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();os&&Qe("event: "+n.toString()),ti(s)}}}/**
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
 */const fE="repo_interrupt",pE=25;class mE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=co(),this.transactionQueueTree_=new Pc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gE(t,e,n){if(t.stats_=dc(t.repoInfo_),t.forceRestClient_||Yv())t.server_=new lo(t.repoInfo_,(s,i,r,o)=>{Wd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Zt(t.repoInfo_,e,(s,i,r,o)=>{Wd(t,s,i,r,o)},s=>{Vd(t,s)},s=>{yE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ew(t.repoInfo_,()=>new Xw(t.stats_,t.server_)),t.infoData_=new Kw,t.infoSyncTree_=new $d({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_r(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mc(t,"connected",!1),t.serverSyncTree_=new $d({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Bt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function _E(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oc(t){return JC({timestamp:_E(t)})}function Wd(t,e,n,s,i){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Qr(n,c=>je(c));o=HC(t.serverSyncTree_,r,l,i)}else{const l=je(n);o=Cm(t.serverSyncTree_,r,l,i)}else if(s){const l=Qr(n,c=>je(c));o=VC(t.serverSyncTree_,r,l)}else{const l=je(n);o=_r(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Zo(t,r)),Bt(t.eventQueue_,a,o)}function Vd(t,e){Mc(t,"connected",e),e===!1&&CE(t)}function yE(t,e){ut(e,(n,s)=>{Mc(t,n,s)})}function Mc(t,e,n){const s=new ve("/.info/"+e),i=je(n);t.infoData_.updateSnapshot(s,i);const r=_r(t.infoSyncTree_,s,i);Bt(t.eventQueue_,s,r)}function Mm(t){return t.nextWriteId_++}function vE(t,e,n){const s=qC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=je(i).withIndex(e._queryParams.getIndex());jC(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_r(t.serverSyncTree_,e._path,r);else{const a=Zi(t.serverSyncTree_,e);o=Cm(t.serverSyncTree_,e._path,r,a)}return Bt(t.eventQueue_,e._path,o),wm(t.serverSyncTree_,e,n,null,!0),r},i=>(Xo(t,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function wE(t,e,n,s,i){Xo(t,"set",{path:e.toString(),value:n,priority:s});const r=Oc(t),o=je(n,s),a=bc(t.serverSyncTree_,e),l=Tm(o,a,r),c=Mm(t),u=vm(t.serverSyncTree_,e,l,c,!0);Om(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||lt("set at "+e+" failed: "+h);const v=Zn(t.serverSyncTree_,c,!_);Bt(t.eventQueue_,e,v),bE(t,i,h,m)});const d=Um(t,e);Zo(t,d),Bt(t.eventQueue_,d,[])}function CE(t){Xo(t,"onDisconnectEvents");const e=Oc(t),n=co();dl(t.onDisconnect_,ce(),(i,r)=>{const o=eE(i,r,t.serverSyncTree_,e);sm(n,i,o)});let s=[];dl(n,ce(),(i,r)=>{s=s.concat(_r(t.serverSyncTree_,i,r));const o=Um(t,i);Zo(t,o)}),t.onDisconnect_=co(),Bt(t.eventQueue_,ce(),s)}function EE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fE)}function Xo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function bE(t,e,n,s){e&&ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Lm(t,e,n){return bc(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Lc(t,e=t.transactionQueueTree_){if(e||ea(t,e),ni(e)){const n=Fm(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IE(t,vr(e),n)}else km(e)&&Jo(e,n=>{Lc(t,n)})}function IE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Lm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=nt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Xo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ea(t,Ac(t.transactionQueueTree_,e)),Lc(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ti(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Zo(t,e)}},o)}function Zo(t,e){const n=Dm(t,e),s=vr(n),i=Fm(t,n);return TE(t,i,s),s}function TE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=nt(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pE)u=!0,d="maxretry",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Lm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Nc("transaction failed: Data returned ",m,l.path);let _=je(m);typeof m=="object"&&m!=null&&an(m,".priority")||(_=_.updatePriority(h.getPriority()));const S=l.currentWriteId,N=Oc(t),M=Tm(_,h,N);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=M,l.currentWriteId=Mm(t),o.splice(o.indexOf(S),1),i=i.concat(vm(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,S,!0))}else u=!0,d="nodata",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ea(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ti(s[a]);Lc(t,t.transactionQueueTree_)}function Dm(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&ni(s)===void 0;)s=Ac(s,n),e=Ee(e),n=se(e);return s}function Fm(t,e){const n=[];return $m(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $m(t,e,n){const s=ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Jo(e,i=>{$m(t,i,n)})}function ea(t,e){const n=ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Sm(e,n.length>0?n:void 0)}Jo(e,s=>{ea(t,s)})}function Um(t,e){const n=vr(Dm(t,e)),s=Ac(t.transactionQueueTree_,e);return nE(s,i=>{Ia(t,i)}),Ia(t,s),xm(s,i=>{Ia(t,i)}),n}function Ia(t,e){const n=ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sm(e,void 0):n.length=r+1,Bt(t.eventQueue_,vr(e),i);for(let o=0;o<s.length;o++)ti(s[o])}}/**
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
 */function SE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zd=function(t,e){const n=xE(t),s=n.namespace;n.domain==="firebase.com"&&rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Wv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ve(n.pathString)}},xE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=SE(t.substring(u,d)));const h=kE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class RE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class PE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class AE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:qp(this._path)}get ref(){return new ln(this._repo,this._path)}get _queryIdentifier(){const e=kd(this._queryParams),n=cc(e);return n==="{}"?"default":n}get _queryObject(){return kd(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof Dc))return!1;const n=this._repo===e._repo,s=Yp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bw(this._path)}}class ln extends Dc{constructor(e,n){super(e,n,new gc,!1)}get parent(){const e=Gp(this._path);return e===null?null:new ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class er{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=_l(this.ref,e);return new er(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new er(i,_l(this.ref,s),Ae)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fc(t,e){return t=dt(t),t._checkNotDeleted("ref"),e!==void 0?_l(t._root,e):t._root}function _l(t,e){return t=dt(t),se(t._path)===null?lE("child","path",e,!1):Am("child","path",e,!1),new ln(t._repo,Ve(t._path,e))}function NE(t){return Nm("remove",t._path),Wm(t,null)}function Wm(t,e){t=dt(t),Nm("set",t._path),aE("set",e,t._path,!1);const n=new Uo;return wE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function OE(t){t=dt(t);const e=new AE(()=>{}),n=new $c(e);return vE(t._repo,t,n).then(s=>new er(s,new ln(t._repo,t._path),t._queryParams.getIndex()))}class $c{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new RE("value",this,new er(e.snapshotNode,new ln(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PE(this,e,n):null}matches(e){return e instanceof $c?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}OC(ln);$C(ln);/**
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
 */const ME="FIREBASE_DATABASE_EMULATOR_HOST",yl={};let LE=!1;function DE(t,e,n,s){t.repoInfo_=new Fp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function FE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zd(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ME]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=zd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new As(As.OWNER):new Jv(t.name,t.options,e);cE("Invalid Firebase Database URL",o),te(o.path)||rn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=UE(a,t,u,new Qv(t.name,n));return new WE(d,t)}function $E(t,e){const n=yl[e];(!n||n[t.key]!==t)&&rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EE(t),delete n[t.key]}function UE(t,e,n,s){let i=yl[e.name];i||(i={},yl[e.name]=i);let r=i[t.toURLString()];return r&&rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mE(t,LE,n,s),i[t.toURLString()]=r,r}class WE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ln(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&($E(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rn("Cannot call "+e+" on a deleted database.")}}function VE(t=Uf(),e){const n=Xl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=r_("database");s&&zE(n,...s)}return n}function zE(t,e,n,s={}){t=dt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&rn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new As(As.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:o_(s.mockUserToken,t.app.options.projectId);r=new As(o)}DE(i,e,n,r)}/**
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
 */function BE(t){Lv(Js),Fs(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return FE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(ud,dd,t),An(ud,dd,"esm2017")}Zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BE();const Uc=VE(zf),Vm=[];function HE(t){return t instanceof Set?Array.from(t):t}const jE=async t=>(await OE(Fc(Uc,t))).val(),qE=async(t,e)=>{Wm(Fc(Uc,t),e)},KE=async t=>{if(!(!fr.value||!qi.value))return await NE(Fc(Uc,t))},Ta=async(t,e)=>{$t(t,n=>{fr.value&&qi.value&&qE(`users/${jo.value.uid}/game-data/tileswap-naenae/${e}/`,HE(n))},{deep:!0}),Vm.push({observable:t,path:e})},GE=new Map([[1,[3]],[2,[7]],[3,[13]],[4,[23]],[5,[45,75,67]],[6,[103,147,155]],[7,[203,211,217,235,367,277,325,313,345]],[8,[435,551,747,453,545,537,703,543]],[9,[1021,1131,1461,1423,1055,1167,1541,1333,1605,1751,1743,1617,1553,1157]],[10,[2011,2415,3771,2157,3515,2773,2033,2443,2461,3023,3543,2745,2431,3177]],[11,[4005,4445,4215,4055,6015,7413,4143,4563,4053,5023,5623,4577,6233,6673]],[12,[10123,15647,16533,16047,11015,14127,17673,13565,15341,15053,15621,15321,11417,13505]],[13,[20033,23261,24623,23517,30741,21643,30171,21277,27777,35051,34723,34047,32535,31425]],[14,[42103,43333,51761,40503,77141,62677,44103,45145,76303,64457,57231,64167,60153,55753]],[15,[100003,102043,110013,102067,104307,100317,177775,103451,110075,102061,114725,103251,100021,100201]],[16,[210013,234313,233303,307107,307527,306357,201735,272201,242413,270155,302157,210205,305667,236107]],[17,[400011,400017,400431,525251,410117,400731,411335,444257,600013,403555,525327,411077,400041,400101]],[18,[1000201,1000247,1002241,1002441,1100045,1000407,1003011,1020121,1101005,1000077,1001361,1001567,1001727,1002777]],[19,[2000047,2000641,2001441,2000107,2000077,2000157,2000175,2000257,2000677,2000737,2001557,2001637,2005775,2006677]],[20,[4000011,4001051,4004515,6000031,4442235]],[21,[10000005,10040205,10020045,10040315,10000635,10103075,10050335,10002135,17000075]],[22,[20000003,20001043,2222223,25200127,20401207,20430607,20070217]],[23,[40000041,40404041,40000063,40010061,50000241,40220151,40006341,40405463,40103271,41224445,4043561]],[24,[100000207,125245661,113763063]],[25,[200000011,200000017,204000051,200010031,200402017,252001251,201014171,204204057,200005535,200014731]],[26,[400000107,430216473,402365755,426225667,510664323,473167545,411335571]],[27,[1000000047,1001007071,1020024171,1102210617,1250025757,1257242631,1020560103,1112225171,1035530241]],[28,[2000000011,2104210431,2000025051,2020006031,2002502115,2001601071]],[29,[4000000005,4004004005,4000010205,4010000045,4400000045,4002200115,4001040115,4004204435,4100060435,4040003075,40040642751]],[30,[10040000007,10104264207,10115131333,11362212703,10343244533]],[31,[20000000011,20000000017,20000020411,21042104211,20010010017,20005000251,20004100071,20202040217,20000200435,20060140231,21042107357]],[32,[40020000007,40460216667,40035532523,42003247143,41760427607]],[33,[100000020001,100020024001,104000420001,100020224401,111100021111,100000031463,104020466001,100502430041,100601431001]],[34,[201000000007,201472024107,377000007527,225213433257,227712240037,251132516577,211636220473,200000140003]],[35,[400000000005]],[36,[0xe8d4a51fa1]],[37,[2000000012005]],[38,[4000000000143]],[39,[0x9184e72a015]],[40,[20000012000005]],[61,[200000000000000000047n]],[89,[400000000000000000000000000151n]]]),YE=t=>{const e=GE.get(t.q);if(!e)throw new Error(`No irreducible polynomial for field of order ${t.p} ** ${t.q}`);const n=[];for(const s of e){const r=parseInt(s.toString(),8).toString(2).trim().split("").map(o=>parseInt(o));n.push(t.el(r))}return n};class Xe{constructor(e){if(typeof e!="number")throw new Error(`Order ${e} is not a number`);if(e<=0)throw new Error(`Order ${e} is not positive`);if(e%1!==0)throw new Error(`Order ${e} is not an integer`);const n=Xe.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error(`Order ${e} is not a prime power`);this.order=e,this.p=n[0],this.q=n.length,this.isPrimeField=this.q===1}el(e){if(e instanceof Tt){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e=="number")return this.isPrimeField?new QE(e,this):Os.fromInteger(e,this);if(e instanceof Array)return new Os(e,this);throw new Error("Cannot create element from non-number")}irreduciblePolynomial(){return YE(this)[0]}matrix(e){return zs.from2DArray(e,this)}identity(e){return zs.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...Xe.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new Xe(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}class Tt{constructor(e,n){if(this.constructor==Tt)throw new Error("FiniteFieldElement is an abstract class and cannot be instantiated. Use FiniteFieldValue or FiniteFieldPolynomial instead.");if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");this.value=e,this.field=n}inverse(){throw new Error("Method inverse not implemented in "+this.constructor.name)}opposite(){throw new Error("Method opposite not implemented in "+this.constructor.name)}add(e){throw new Error("Method add not implemented in "+this.constructor.name)}subtract(e){throw new Error("Method subtract not implemented in "+this.constructor.name)}multiply(e){throw new Error("Method multiply not implemented in "+this.constructor.name)}divide(e){throw new Error("Method divide not implemented in "+this.constructor.name)}pow(e){throw new Error("Method pow not implemented in "+this.constructor.name)}sqrt(){throw new Error("Method sqrt not implemented in "+this.constructor.name)}abs(){throw new Error("Method abs not implemented in "+this.constructor.name)}equals(e){throw new Error("Method equals not implemented in "+this.constructor.name)}copy(){throw new Error("Method copy not implemented in "+this.constructor.name)}}var In,Cs;class QE extends Tt{constructor(n,s){if(typeof n!="number")throw new Error("Value must be a number");if(!(s instanceof Xe))throw new Error("Field must be an instance of FiniteField");if(!Xe.isPrime(s.order))throw new Error("Field must be a prime field");super(Xe.mod(n,s.order),s);Er(this,In)}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(n){return Ot(this,In,Cs).call(this,n,(s,i)=>s.value+i.value)}subtract(n){return Ot(this,In,Cs).call(this,n,(s,i)=>s.value-i.value)}multiply(n){return Ot(this,In,Cs).call(this,n,(s,i)=>s.value*i.value)}divide(n){return Ot(this,In,Cs).call(this,n,(s,i)=>s.multiply(i.inverse()).value)}pow(n){if(n===0)return this.field.el(1);if(n===1)return this.copy();if(n<0)return this.inverse().pow(-n);let s=this;for(let i=1;i<n;i++)s=s.multiply(this);return s}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let n=1;for(;n<this.field.order;){if(n*n%this.field.order===this.value)return this.field.el(n);n++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(n){if(n instanceof Tt){if(n.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===n.value}return this.value===n}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}}In=new WeakSet,Cs=function(n,s){if(n instanceof Tt){if(n.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(s(this,n))}return Ot(this,In,Cs).call(this,this.field.el(n),s)};class Os extends Tt{constructor(e,n){if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");Xe.isPrime(n.order)&&(console.warn("[warn] Creating polynomial in prime field. Use FiniteFieldValue instead"),console.trace()),super(Os.coefficientsToInteger(e,n),n),this.field=n,this.primeField=Xe.fromOrder(n.p),this.poly=new Si(e,this.primeField)}add(e){if(e instanceof Os){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new Os(i,n)}static coefficientsToInteger(e,n){return n=Xe.fromOrder(n.p),parseInt(e.map(s=>n.el(s)).map(s=>s.value).join(""),n.p)}toString(){return(this.poly.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.poly.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}class Si{constructor(e,n){if(!(n instanceof Xe))throw new Error("Field must be an instance of FiniteField");this.field=n,this.primeField=Xe.fromOrder(n.p),this.coefficients=e.map(s=>this.field.el(s))}add(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++){const i=this.coefficients[s]??this.primeField.el(0),r=e.coefficients[s]??this.primeField.el(0);n.push(this.coefficients[i].add(r))}return this.field.el(n)}if(e instanceof Array)return this.add(this.field.el(e));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=[];for(let s=0;s<this.coefficients.length+e.coefficients.length-1;s++)n.push(this.field.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return this.field.el(n)}if(e instanceof Array)return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}equals(e){if(e instanceof Si){if(e.field.order!==this.field.order)throw new Error("Cannot compare polynomials in different fields");return this.coefficients.every((n,s)=>n.equals(e.coefficients[s]))}if(e instanceof Array)return this.equals(this.field.el(e));throw new Error("Cannot compare polynomial to non-polynomial")}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var es,ts,gi;const ae=class ae{constructor(e,n){Er(this,ts);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof Tt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new ae(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof Tt)return e=this.field.el(e),ae.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof ae){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return ae.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof Tt||typeof e=="number")return e=this.field.el(e),new ae(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof ae){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new ae(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return ae.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(ii(ae,es).has(e))return ii(ae,es).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Ot(this,ts,gi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return ii(ae,es).set(e,s),s}const n=this.PLUDeterminant();return ii(ae,es).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=ae.identity(this.width,this.field),s=ae.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Ot(r=s,ts,gi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return ae.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Ot(this,ts,gi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new ae(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return ae.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return ae.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=ae.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Ot(this,ts,gi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:ae.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof ae?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return ae.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new ae(s,n)}static fromValue(e,n,s,i){if(e instanceof Tt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new ae(r,i)}static zeros(e,n,s){return ae.fromValue(0,e,n,s)}static ones(e,n,s){return ae.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return ae.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return ae.from2DArray(s,n)}static from2DArray(e,n){return new ae(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};es=new WeakMap,ts=new WeakSet,gi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new ae(s,this.field)},Er(ae,es,new Map);let zs=ae;const yo=Ne(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>yo.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");yo.value=t}});const Tn=Oe(()=>yo.value),Bd=t=>{yo.value=t},Sa=new Map,ka=new Map,zm=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},xa=(t,e)=>{for(let n=0;n<e;n++)t=zm(t);return t};class JE{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const Bm=t=>{const e=[t,zm(t),xa(t,2),xa(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=XE(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new JE(xa(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function XE(t){const e=Xe.fromOrder(Q.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Q.value])),r=`${s}x${n},${_t.getExcludeFromMatrix(t)},${tr.value},${Q.value}}`;let o=[],a=0;const l=eb(s,n,t);let c;if(ka.has(r)?c=ka.get(r):(c=l.determinant(),ka.set(r,c)),c.equals(0)){const d=zs.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=zs.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let v=0;v<d.width-1;v++)if(d.matrix[m][v].equals(1)){o[v]=_.value;break}}}}else{let u;Sa.has(r)?u=Sa.get(r):(u=l.inverse(),Sa.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const ZE=(t,e,n)=>{for(const s of tr.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Q.value-1)}},eb=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));ZE(o,a,l),s.push(l)}return Xe.fromOrder(Q.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()},Ht={backgroundColor:{name:"Background Color",options:["#bbb2ea","#adad85","#666","#FF9D81","#83769C","#7be3ad"],get value(){const{settings:t}=oe();return this.options[t.backgroundColor]},onChange(t){document.documentElement.style.setProperty("--root-bg-color",this.options[t])}},tilesColor:{name:"Tiles Color",options:[[{r:0,g:0,b:0},{r:255,g:255,b:255}],[{r:50,g:50,b:90},{r:200,g:100,b:100}],[{r:8,g:33,b:59},{r:88,g:131,b:173}]],get value(){const{settings:t}=oe();return this.options[t.tilesColor]},onChange(t){}},colorBlind:{name:"Color Blind",options:["Off","On"],get value(){const{settings:t}=oe();return this.options[t.colorBlind]},onChange(t){}}},tb=Object.fromEntries(Object.keys(Ht).map(t=>[t,Ht[t].selected??0])),tr=Ne([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>tr.value,set:t=>{tr.value=t}});const Q=Ne(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Q.value,set:t=>{if(typeof t!="number")throw new Error("Modulo must be a number");if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t}});const Wc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t},ki=Oe(()=>{const t=Ht.tilesColor.value[0],e=Ht.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*(i/(Q.value-1))+t.r},${n.g*(i/(Q.value-1))+t.g},${n.b*(i/(Q.value-1))+t.b})`)}),Ra=Oe(()=>{const t=Ht.tilesColor.value[0],e=Ht.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.4*(i/(Q.value-1))+t.r+36},${n.g*.4*(i/(Q.value-1))+t.g+36},${n.b*.4*(i/(Q.value-1))+t.b+36})`)}),Pa=Oe(()=>{const t=Ht.tilesColor.value[0],e=Ht.tilesColor.value[1],n={r:e.r-t.r,g:e.g-t.g,b:e.b-t.b};return new Array(Q.value).fill().map((s,i)=>`rgb(${n.r*.75*(i/(Q.value-1))+t.r+70},${n.g*.75*(i/(Q.value-1))+t.g+70},${n.b*.75*(i/(Q.value-1))+t.b+70})`)}),vn=class vn{static get FILTERED_LAYOUTS(){const e=oe();return this.LAYOUTS.filter(n=>n.unlockCategory<=e.unlockedCategoriesFP)}constructor({width:e,height:n,exclude:s,unlockCategory:i,id:r}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(o=>Q.value-1)),this.id=r;for(const o of this.exclude)this.matrix[Math.floor(o/e)][o%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of tr.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=vn.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=vn.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Q.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Q.value-1:this.matrix[e][n]===Q.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i,id:r}=this,o=new vn({width:e,height:n,exclude:s,unlockCategory:i,id:r});return o.matrix=this.matrix.map(a=>a.slice()),o}generatePosition(e){const n=this.copy();n.setAllTiles(Q.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}if(n.matrix.every(s=>s.every(i=>i===Q.value||i===-1)))return this.generatePosition(e);if(n.nTiles()<50){const{solutions:s,shortest:i,zerows:r}=Bm(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Q.value*(e/3)+2);if(o.moves<a)return this.generatePosition(e)}return n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new vn({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Q.value+Q.value)%Q.value}};zn(vn,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map((e,n)=>{const s=parseInt(e.dimensions.split("x")[0]),i=parseInt(e.dimensions.split("x")[1]),{unlockCategory:r}=e;return new vn({width:s,height:i,unlockCategory:r,id:n,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let _t=vn;window.layouts=_t.LAYOUTS;const bo=class bo{static get FILTERED_PUZZLES(){const e=oe();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}get completionMoves(){const e=oe();for(let n=0;n<e.stats.puzzlesCompleted.length;n++){const s=e.stats.puzzlesCompleted[n];if(s.id===this.id)return s.completionMoves}return-1}set completionMoves(e){const n=oe();for(let s=0;s<n.stats.puzzlesCompleted.length;s++){const i=n.stats.puzzlesCompleted[s];if(i.id===this.id){i.completionMoves=Math.min(e,i.completionMoves);return}}n.stats.puzzlesCompleted.push({id:this.id,completionMoves:e})}};zn(bo,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[6,9,13,14,17,21,22,24]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[5,9,11,14,20,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[2,4,12,13,18,20,34,35,38,42,44,45,46,48,49,52,53,59,60,63,64,68,70]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((v,S)=>{v===2?(s[_][S]=-1,i[_][S]=-1):v===1&&(s[_][S]=(a??2)-1)}));const l=s[0].length,c=s.length,u=_t.getExcludeFromMatrix(s),d=new _t({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new _t({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new bo({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let Yt=bo;const Lt=class Lt{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patterns:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,hasSpecificPatterns:l,modulo:c,name:u}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,l?this.patterns=i:(this.rangeStart=i[0],this.rangeEnd=i[1]),this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.hasSpecificPatterns=l,this.nMoves=0,this.modulo=c??2,this.name=u,this.id=-1,this.generateLayouts()}get maxPercent(){const e=oe();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.maxPercent}return 0}get minTime(){const e=oe();for(let n=0;n<e.stats.challengesCompleted.length;n++){const s=e.stats.challengesCompleted[n];if(s.id===this.id)return s.minTime}return this.timeLimit}set maxPercent(e){const n=oe();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.maxPercent=Math.max(i.maxPercent,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:e,minTime:this.timeLimit})}set minTime(e){const n=oe();for(let s=0;s<n.stats.challengesCompleted.length;s++){const i=n.stats.challengesCompleted[s];if(i.id===this.id){i.minTime=Math.min(i.minTime,e);return}}n.stats.challengesCompleted.push({id:this.id,maxPercent:0,minTime:e})}generateLayouts(){let e;this.hasSpecificPatterns?e=_t.LAYOUTS.filter(r=>this.patterns.includes(r.id)):e=_t.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd);const n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=Lt.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=Lt.THRESHOLD?i*2:i);n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=oe();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};zn(Lt,"CHALLENGES",[new Lt({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[0],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,hasSpecificPatterns:!0,name:"Think Fast"}),new Lt({timeLimit:60,moveLimit:-1,totalClicks:2,patterns:[1,1],nPatterns:1,bigLayoutAdapt:!1,moveLimitPer:2,hasSpecificPatterns:!1,name:"EZ"}),new Lt({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[2],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,hasSpecificPatterns:!0,name:"Think a bit less fast but still fast enough to be fast enough, you know?"}),new Lt({timeLimit:60,moveLimit:-1,totalClicks:90,patterns:[11],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:-1,hasSpecificPatterns:!0,name:"OG"})].map((e,n)=>(e.id=n,e))),zn(Lt,"THRESHOLD",60);let vo=Lt;const Hd=t=>`${t}`,wo={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:Hd},tilesSwapped:{name:"Tiles Swapped",display:Hd},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${Yt.PUZZLES.length}`},challengesCompleted:{initialValue:[],name:"Challenges Completed",display:t=>`${t.length} / ${vo.CHALLENGES.length}`}},nb=Object.fromEntries(Object.keys(wo).map(t=>[t,wo[t].initialValue??0])),oe=Q1("store",()=>{const t=Ne({}),e=Ne({}),n=Ne({}),s=Ne(5),i=Ne(39),r=Ne(10),o=Ne([0,1,2]),a=Ne(2);function l(v,S){o.value.splice(v,1),o.value.push(S)}const c=Ne({...tb});$t(c,v=>{for(const S of Object.keys(c.value))Ht[S].onChange(c.value[S])},{deep:!0});const u=Ne({...nb});setInterval(()=>{u.value.timePlayed+=10},1e4);function d(v){t.value=v}function h(v){e.value=v}function m(v){n.value=v}function _(v){a.value=v}return Ta(s,"difficulty"),Ta(u,"stats"),Ta(c,"settings"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,setLayout:d,setPuzzle:h,setChallenge:m,stats:u,currentTasks:o,maxTask:a,setTask:l,setMaxTask:_,unlockedCategoriesFP:i,unlockedCategoriesPZ:r,settings:c}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof window<"u";function sb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Aa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pt(i)?i.map(t):t(i)}return n}const xi=()=>{},Pt=Array.isArray,ib=/\/$/,rb=t=>t.replace(ib,"");function Na(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=cb(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function ob(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ab(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Bs(e.matched[s],n.matched[i])&&Hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lb(t[n],e[n]))return!1;return!0}function lb(t,e){return Pt(t)?jd(t,e):Pt(e)?jd(e,t):t===e}function jd(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function cb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var Co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Co||(Co={}));const Oa="";function ub(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rb(t)}const db=/^[^#]+#/;function hb(t,e){return t.replace(db,"#")+e}function fb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const pb=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=fb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qd(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function gb(t,e){vl.set(t,e)}function _b(t){const e=vl.get(t);return vl.delete(t),e}function yb(t=""){let e=[],n=[Oa],s=0;t=ub(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:nr.pop};for(const h of e)h(a,l,d)}const o={location:Oa,state:{},base:t,createHref:hb.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Oa],s=0},go(a,l=!0){const c=this.location,u=a<0?Co.back:Co.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function vb(t){return typeof t=="string"||t&&typeof t=="object"}function jm(t){return typeof t=="string"||typeof t=="symbol"}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qm=Symbol("");var Kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kd||(Kd={}));function Hs(t,e){return Re(new Error,{type:t,[qm]:!0},e)}function qt(t,e){return t instanceof Error&&qm in t&&(e==null||!!(t.type&e))}const Gd="[^/]+?",wb={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Eb(t,e){const n=Re({},wb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Cb,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:v,optional:S,regexp:N}=h;r.push({name:_,repeatable:v,optional:S});const M=N||Gd;if(M!==Gd){m+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+F.message)}}let K=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(K=S&&c.length<2?`(?:/${K})`:"/"+K),S&&(K+="?"),i+=K,m+=20,S&&(m+=-8),v&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:v,optional:S}=m,N=_ in c?c[_]:"";if(Pt(N)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Pt(N)?N.join("/"):N;if(!M)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function bb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ib(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=bb(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Yd(s))return 1;if(Yd(i))return-1}return i.length-s.length}function Yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Tb={type:0,value:""},Sb=/[a-zA-Z0-9_]/;function kb(t){if(!t)return[[]];if(t==="/")return[[Tb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Sb.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function xb(t,e,n){const s=Eb(kb(t.path),n),i=Re(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Rb(t,e){const n=[],s=new Map;e=Xd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=Pb(u);_.aliasOf=h&&h.record;const v=Xd(e,u),S=[_];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of K)S.push(Re({},_,{components:h?h.record.components:_.components,path:F,aliasOf:h?h.record:_}))}let N,M;for(const K of S){const{path:F}=K;if(d&&F[0]!=="/"){const Z=d.record.path,we=Z[Z.length-1]==="/"?"":"/";K.path=d.record.path+(F&&we+F)}if(N=xb(K,d,v),h?h.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),m&&u.name&&!Jd(N)&&o(u.name)),_.children){const Z=_.children;for(let we=0;we<Z.length;we++)r(Z[we],N,h&&h.children[we])}h=h||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return M?()=>{o(M)}:xi}function o(u){if(jm(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Ib(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Km(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Jd(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,v;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Hs(1,{location:u});v=h.record.name,m=Re(Qd(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Qd(u.params,h.keys.map(M=>M.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(M=>M.re.test(_)),h&&(m=h.parse(_),v=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw Hs(1,{location:u,currentLocation:d});v=h.record.name,m=Re({},d.params,u.params),_=h.stringify(m)}const S=[];let N=h;for(;N;)S.unshift(N.record),N=N.parent;return{name:v,path:_,params:m,matched:S,meta:Nb(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Qd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Pb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ab(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ab(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Jd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nb(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Xd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Km(t,e){return e.children.some(n=>n===t||Km(t,n))}const Gm=/#/g,Ob=/&/g,Mb=/\//g,Lb=/=/g,Db=/\?/g,Ym=/\+/g,Fb=/%5B/g,$b=/%5D/g,Qm=/%5E/g,Ub=/%60/g,Jm=/%7B/g,Wb=/%7C/g,Xm=/%7D/g,Vb=/%20/g;function Vc(t){return encodeURI(""+t).replace(Wb,"|").replace(Fb,"[").replace($b,"]")}function zb(t){return Vc(t).replace(Jm,"{").replace(Xm,"}").replace(Qm,"^")}function wl(t){return Vc(t).replace(Ym,"%2B").replace(Vb,"+").replace(Gm,"%23").replace(Ob,"%26").replace(Ub,"`").replace(Jm,"{").replace(Xm,"}").replace(Qm,"^")}function Bb(t){return wl(t).replace(Lb,"%3D")}function Hb(t){return Vc(t).replace(Gm,"%23").replace(Db,"%3F")}function jb(t){return t==null?"":Hb(t).replace(Mb,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ym," "),o=r.indexOf("="),a=Eo(o<0?r:r.slice(0,o)),l=o<0?null:Eo(r.slice(o+1));if(a in e){let c=e[a];Pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zd(t){let e="";for(let n in t){const s=t[n];if(n=Bb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(r=>r&&wl(r)):[s&&wl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Kb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Gb=Symbol(""),eh=Symbol(""),zc=Symbol(""),Zm=Symbol(""),Cl=Symbol("");function di(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Hs(4,{from:n,to:e})):d instanceof Error?a(d):vb(d)?a(Hs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ma(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Yb(a)){const c=(a.__vccOpts||a)[e];c&&i.push(yn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=sb(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&yn(h,n,s,r,o)()}))}}return i}function Yb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function th(t){const e=Ut(zc),n=Ut(Zm),s=Oe(()=>e.resolve(xe(t.to))),i=Oe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Bs.bind(null,u));if(h>-1)return h;const m=nh(l[c-2]);return c>1&&nh(u)===m&&d[d.length-1].path!==m?d.findIndex(Bs.bind(null,l[c-2])):h}),r=Oe(()=>i.value>-1&&Zb(n.params,s.value.params)),o=Oe(()=>i.value>-1&&i.value===n.matched.length-1&&Hm(n.params,s.value.params));function a(l={}){return Xb(l)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(xi):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Qb=Kh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:th,setup(t,{slots:e}){const n=ir(th(t)),{options:s}=Ut(zc),i=Oe(()=>({[sh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:jl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Jb=Qb;function Xb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function nh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sh=(t,e,n)=>t??e??n,eI=Kh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ut(Cl),i=Oe(()=>t.route||s.value),r=Ut(eh,0),o=Oe(()=>{let c=xe(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Oe(()=>i.value.matched[o.value]);Mr(eh,Oe(()=>o.value+1)),Mr(Gb,a),Mr(Cl,i);const l=Ne();return $t(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Bs(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return ih(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,S=jl(h,Re({},_,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ih(n.default,{Component:S,route:c})||S}}});function ih(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const e0=eI;function tI(t){const e=Rb(t.routes,t),n=t.parseQuery||qb,s=t.stringifyQuery||Zd,i=t.history,r=di(),o=di(),a=di(),l=Q0(fn);let c=fn;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Aa.bind(null,w=>""+w),d=Aa.bind(null,jb),h=Aa.bind(null,Eo);function m(w,D){let x,z;return jm(w)?(x=e.getRecordMatcher(w),z=D):z=w,e.addRoute(z,x)}function _(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function v(){return e.getRoutes().map(w=>w.record)}function S(w){return!!e.getRecordMatcher(w)}function N(w,D){if(D=Re({},D||l.value),typeof w=="string"){const g=Na(n,w,D.path),y=e.resolve({path:g.path},D),C=i.createHref(g.fullPath);return Re(g,y,{params:h(y.params),hash:Eo(g.hash),redirectedFrom:void 0,href:C})}let x;if("path"in w)x=Re({},w,{path:Na(n,w.path,D.path).path});else{const g=Re({},w.params);for(const y in g)g[y]==null&&delete g[y];x=Re({},w,{params:d(g)}),D.params=d(D.params)}const z=e.resolve(x,D),he=w.hash||"";z.params=u(h(z.params));const f=ob(s,Re({},w,{hash:zb(he),path:z.path})),p=i.createHref(f);return Re({fullPath:f,hash:he,query:s===Zd?Kb(w.query):w.query||{}},z,{redirectedFrom:void 0,href:p})}function M(w){return typeof w=="string"?Na(n,w,l.value.path):Re({},w)}function K(w,D){if(c!==w)return Hs(8,{from:D,to:w})}function F(w){return be(w)}function Z(w){return F(Re(M(w),{replace:!0}))}function we(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let z=typeof x=="function"?x(w):x;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=M(z):{path:z},z.params={}),Re({query:w.query,hash:w.hash,params:"path"in z?{}:w.params},z)}}function be(w,D){const x=c=N(w),z=l.value,he=w.state,f=w.force,p=w.replace===!0,g=we(x);if(g)return be(Re(M(g),{state:typeof g=="object"?Re({},he,g.state):he,force:f,replace:p}),D||x);const y=x;y.redirectedFrom=D;let C;return!f&&ab(s,z,x)&&(C=Hs(16,{to:y,from:z}),At(z,z,!0,!1)),(C?Promise.resolve(C):J(y,z)).catch(E=>qt(E)?qt(E,2)?E:cn(E):de(E,y,z)).then(E=>{if(E){if(qt(E,2))return be(Re({replace:p},M(E.to),{state:typeof E.to=="object"?Re({},he,E.to.state):he,force:f}),D||y)}else E=$(y,z,!0,p,he);return me(y,z,E),E})}function L(w,D){const x=K(w,D);return x?Promise.reject(x):Promise.resolve()}function V(w){const D=gs.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(w):w()}function J(w,D){let x;const[z,he,f]=nI(w,D);x=Ma(z.reverse(),"beforeRouteLeave",w,D);for(const g of z)g.leaveGuards.forEach(y=>{x.push(yn(y,w,D))});const p=L.bind(null,w,D);return x.push(p),Ye(x).then(()=>{x=[];for(const g of r.list())x.push(yn(g,w,D));return x.push(p),Ye(x)}).then(()=>{x=Ma(he,"beforeRouteUpdate",w,D);for(const g of he)g.updateGuards.forEach(y=>{x.push(yn(y,w,D))});return x.push(p),Ye(x)}).then(()=>{x=[];for(const g of f)if(g.beforeEnter)if(Pt(g.beforeEnter))for(const y of g.beforeEnter)x.push(yn(y,w,D));else x.push(yn(g.beforeEnter,w,D));return x.push(p),Ye(x)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),x=Ma(f,"beforeRouteEnter",w,D),x.push(p),Ye(x))).then(()=>{x=[];for(const g of o.list())x.push(yn(g,w,D));return x.push(p),Ye(x)}).catch(g=>qt(g,8)?g:Promise.reject(g))}function me(w,D,x){a.list().forEach(z=>V(()=>z(w,D,x)))}function $(w,D,x,z,he){const f=K(w,D);if(f)return f;const p=D===fn,g=Es?history.state:{};x&&(z||p?i.replace(w.fullPath,Re({scroll:p&&g&&g.scroll},he)):i.push(w.fullPath,he)),l.value=w,At(w,D,x,p),cn()}let ue;function Ke(){ue||(ue=i.listen((w,D,x)=>{if(!Cr.listening)return;const z=N(w),he=we(z);if(he){be(Re(he,{replace:!0}),z).catch(xi);return}c=z;const f=l.value;Es&&gb(qd(f.fullPath,x.delta),pb()),J(z,f).catch(p=>qt(p,12)?p:qt(p,2)?(be(p.to,z).then(g=>{qt(g,20)&&!x.delta&&x.type===nr.pop&&i.go(-1,!1)}).catch(xi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),de(p,z,f))).then(p=>{p=p||$(z,f,!1),p&&(x.delta&&!qt(p,8)?i.go(-x.delta,!1):x.type===nr.pop&&qt(p,20)&&i.go(-1,!1)),me(z,f,p)}).catch(xi)}))}let et=di(),re=di(),ge;function de(w,D,x){cn(w);const z=re.list();return z.length?z.forEach(he=>he(w,D,x)):console.error(w),Promise.reject(w)}function jt(){return ge&&l.value!==fn?Promise.resolve():new Promise((w,D)=>{et.add([w,D])})}function cn(w){return ge||(ge=!w,Ke(),et.list().forEach(([D,x])=>w?x(w):D()),et.reset()),w}function At(w,D,x,z){const{scrollBehavior:he}=t;if(!Es||!he)return Promise.resolve();const f=!x&&_b(qd(w.fullPath,0))||(z||!x)&&history.state&&history.state.scroll||null;return Ll().then(()=>he(w,D,f)).then(p=>p&&mb(p)).catch(p=>de(p,w,D))}const rt=w=>i.go(w);let ms;const gs=new Set,Cr={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:S,getRoutes:v,resolve:N,options:t,push:F,replace:Z,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:jt,install(w){const D=this;w.component("RouterLink",Jb),w.component("RouterView",e0),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(l)}),Es&&!ms&&l.value===fn&&(ms=!0,F(i.location).catch(he=>{}));const x={};for(const he in fn)Object.defineProperty(x,he,{get:()=>l.value[he],enumerable:!0});w.provide(zc,D),w.provide(Zm,Ah(x)),w.provide(Cl,l);const z=w.unmount;gs.add(w),w.unmount=function(){gs.delete(w),gs.size<1&&(c=fn,ue&&ue(),ue=null,l.value=fn,ms=!1,ge=!1),z()}}};function Ye(w){return w.reduce((D,x)=>D.then(()=>V(x)),Promise.resolve())}return Cr}function nI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Bs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Bs(c,l))||i.push(l))}return[n,s,i]}const Pe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},sI={components:{RouterView:e0},setup(){oe()}};function iI(t,e,n,s,i,r){const o=Rg("router-view");return R(),st(o,null,{default:ze(({Component:a})=>[O(nn,{name:"fade",mode:"out-in"},{default:ze(()=>[(R(),st(Pg(a)))]),_:2},1024)]),_:1})}const rI=Pe(sI,[["render",iI]]);const oI={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},aI=["src"];function lI(t,e,n,s,i,r){return R(),W("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[A("span",null,ke(n.name),1),A("img",{src:n.image},null,8,aI)])}const La=Pe(oI,[["render",lI],["__scopeId","data-v-253ecde8"]]),cI="/tileswap-naenae/images/freeplay-transparent.png",uI="/tileswap-naenae/images/puzzles-transparent.png",dI="/tileswap-naenae/images/challenges-transparent.png";const Bc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},rh=()=>{rr(t=>({23269356:t.backgroundColor,"46136db8":t.color}))},oh=Bc.setup;Bc.setup=oh?(t,e)=>(rh(),oh(t,e)):rh;function hI(t,e,n,s,i,r){return R(),W("button",null,ke(n.text),1)}const $e=Pe(Bc,[["render",hI],["__scopeId","data-v-e07d88a2"]]),fI={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},fs=Object.assign(fI,{__name:"LinkButton",setup(t){return(e,n)=>(R(),st($e,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const pI={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},mI={class:"modal"};function gI(t,e,n,s,i,r){return R(),W("div",null,[O(nn,{name:"fade"},{default:ze(()=>[jr(A("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Ya,n.modelValue]])]),_:1}),O(nn,{name:"zoom"},{default:ze(()=>[jr(A("div",mI,[Ag(t.$slots,"default",{},void 0,!0)],512),[[Ya,n.modelValue]])]),_:3})])}const en=Pe(pI,[["render",gI],["__scopeId","data-v-b228608d"]]);const _I={computed:{list(){const{stats:t}=oe();return Object.keys(wo).map(e=>{const n=wo[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await KE(`users/${jo.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},yI=Object.assign(_I,{__name:"Stats",setup(t){return(e,n)=>(R(),W(_e,null,[A("ul",null,[(R(!0),W(_e,null,yt(e.list,(s,i)=>(R(),W("li",{key:i},ke(s),1))),128))]),xe(fr)?(R(),st($e,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):ss("",!0)],64))}}),vI=Pe(yI,[["__scopeId","data-v-b4a43d41"]]);const wI={methods:{changeSetting(t,e){const n=oe();n.settings[t]=e},formatRgb(t){return`rgb(${t.r},${t.g},${t.b})`}},computed:{settingsList(){const{settings:t}=oe();return Object.fromEntries(Object.entries(Ht).map(([n,s])=>[n,{...s,selected:t[n]}]))}}},CI=["data-value","onClick"];function EI(t,e,n,s,i,r){return R(),W("ul",null,[(R(!0),W(_e,null,yt(r.settingsList,(o,a)=>(R(),W("li",{key:a},[Gs(ke(o.name)+" : ",1),(R(!0),W(_e,null,yt(o.options,(l,c)=>(R(),W("div",{style:xt(`${l instanceof Array?l.map((u,d)=>`--value-${d+1}: `+r.formatRgb(u)+";").join(" "):`--value: ${l};`} 
        --selected: ${c===o.selected?"2px":"0px"}`),"data-value":l,class:Ge(a),key:l+" "+c,onClick:u=>r.changeSetting(a,c)},null,14,CI))),128))]))),128))])}const bI=Pe(wI,[["render",EI],["__scopeId","data-v-8607b79a"]]);const Hc={props:["value","max","text","barColor"],computed:{progress(){return this.value/this.max*100+"%"},barColorOrDefault(){return this.barColor??"var(--bg-color)"}}},ah=()=>{rr(t=>({"2ceabb6e":t.progress,"1fcbc512":t.barColorOrDefault}))},lh=Hc.setup;Hc.setup=lh?(t,e)=>(ah(),lh(t,e)):ah;const II=t=>(Un("data-v-27eeb14f"),t=t(),Wn(),t),TI={class:"container"},SI=II(()=>A("div",{class:"progress"},null,-1)),kI={class:"text"};function xI(t,e,n,s,i,r){return R(),W("div",TI,[SI,A("div",kI,ke(n.text),1)])}const t0=Pe(Hc,[["render",xI],["__scopeId","data-v-27eeb14f"]]),RI={FREEPLAY:"freeplay layout",PUZZLE:"puzzle",CHALLENGE:"challenge"},Ie=class Ie{constructor({timesRequired:e,targetId:n,type:s,difficulty:i}){this.timesRequired=e,this.targetIds=n,this.type=s,this.targetsDone=[],this.id=-1,this.difficulty=i??-1}get completed(){return this.targetsDone.length>=this.timesRequired*this.targetIds.length}get progress(){return{text:`${this.targetsDone.length}/${this.timesRequired*this.targetIds.length}`,value:this.targetsDone.length/(this.timesRequired*this.targetIds.length)}}get text(){return`Complete the ${this.targetIds.length>1?this.targetIds.length:""} 
            highlighted ${RI[this.type]}
            ${this.targetIds.length>1?"s":""} 
            ${this.timesRequired} time${this.timesRequired>1?"s":""} 
            ${this.timesRequired>1&&this.targetIds.length>1?"each":""} 
            ${this.difficulty!=-1?this.difficultyText():""}`}claim(){const{currentTasks:e,setTask:n,maxTask:s,setMaxTask:i}=oe(),r=e.indexOf(this.id);i(s+1);const o=s<Ie.TASKS.length-1?s+1:-1;n(r,o)}difficultyText(){if(this.type!==Ie.TASK_TYPES.FREEPLAY)return`in less than ${this.difficulty} ${this.type===Ie.TASK_TYPES.PUZZLE?"moves":"seconds"}`;const e=_t.LAYOUTS.filter(r=>r.id===this.targetIds[0])[0],n=["very easy","easy","normal","hard","very hard"],s=e.width*e.height-e.exclude.length;return`in ${n[Math.floor((this.difficulty-1)/(s/n.length))]} mode`}static isTaskTarget(e,n){const{currentTasks:s}=oe();return s.filter(i=>i!==-1).filter(i=>Ie.TASKS[i].type===n).some(i=>{const r=Ie.TASKS[i];return r.targetIds.includes(e)?r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired:!1})}static advanceTasks(e,n,s){const{currentTasks:i}=oe();i.filter(r=>r!==-1).filter(r=>Ie.TASKS[r].type===n).filter(r=>Ie.TASKS[r].targetIds.includes(e)).filter(r=>(n===Ie.TASK_TYPES.FREEPLAY?Ie.TASKS[r].difficulty<=s:Ie.TASKS[r].difficulty>=s)||Ie.TASKS[r].difficulty===-1).filter(r=>{const o=Ie.TASKS[r];return o.targetsDone.reduce((a,l)=>a+(l===e?1:0),0)<o.timesRequired}).forEach(r=>{Ie.TASKS[r].targetsDone.push(e)})}static generateTask(e,n){let s=[];if(n===Ie.TASK_TYPES.PUZZLE){const i=Math.floor(Math.min(e*Yt.PUZZLES.length/100,Yt.PUZZLES.length*.9)),r=Math.floor(Yt.PUZZLES.length/10);s.push(Math.min(Math.floor(Math.random()*r+i),Yt.PUZZLES.length-1));const o=Yt.PUZZLES.filter(l=>l.id===s[0])[0],a=e<=30?-1:e<=60?o.solution.length*1.2:o.solution.length;return new Ie({timesRequired:1,targetId:s,type:n,difficulty:Math.ceil(a)})}}};zn(Ie,"TASK_TYPES",{FREEPLAY:"FREEPLAY",PUZZLE:"PUZZLE",CHALLENGE:"CHALLENGE"}),zn(Ie,"TASKS",[new Ie({timesRequired:2,targetId:[1],type:Ie.TASK_TYPES.FREEPLAY,difficulty:16}),Ie.generateTask(Math.random()*99+1,Ie.TASK_TYPES.PUZZLE),new Ie({timesRequired:1,targetId:[1],type:Ie.TASK_TYPES.CHALLENGE,difficulty:2})].map((e,n)=>(e.id=n,e)));let it=Ie;const PI={class:"container"},AI=["onClick"],NI={methods:{claimTask(t){t.completed&&t.claim()}},computed:{tasks(){const{currentTasks:t}=oe();return t.filter(e=>e!==-1).map(e=>it.TASKS[e])}}},OI=Object.assign(NI,{__name:"TaskContainer",setup(t){return(e,n)=>(R(),W("div",PI,[O(N1,{name:"slide"},{default:ze(()=>[(R(!0),W(_e,null,yt(e.tasks,s=>(R(),W("div",{onClick:i=>e.claimTask(s),class:Ge(["task",{"completed-task":s.completed}]),key:s.id},[A("p",null,ke(s.text),1),O(t0,{barColor:s.completed?"var(--hl-color)":null,value:s.progress.value,text:s.progress.text,max:"1"},null,8,["barColor","value","text"])],10,AI))),128))]),_:1})]))}}),MI=Pe(OI,[["__scopeId","data-v-d219c454"]]);const LI={},n0=t=>(Un("data-v-8367d9c9"),t=t(),Wn(),t),DI=n0(()=>A("h1",null,[Gs("tile"),A("span",null,"swap")],-1)),FI=n0(()=>A("p",null," loading... ",-1)),$I=[DI,FI];function UI(t,e){return R(),W("main",null,$I)}const WI=Pe(LI,[["render",UI],["__scopeId","data-v-8367d9c9"]]),jc=()=>{let t=Ne(window.innerWidth),e=Ne(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Di(()=>window.addEventListener("resize",n)),Di(()=>window.addEventListener("resize",s)),Fi(()=>window.removeEventListener("resize",n)),Fi(()=>window.removeEventListener("resize",s));const i=Oe(()=>t.value),r=Oe(()=>e.value);return{width:i,height:r}};const ta=t=>(Un("data-v-d5305a29"),t=t(),Wn(),t),VI={class:"container"},zI=ta(()=>A("h1",{class:"main-title"},[Gs("Tile"),A("span",null,"Swap")],-1)),BI={class:"buttons"},HI=ta(()=>A("h1",null,"Stats",-1)),jI=ta(()=>A("h1",null,"Settings",-1)),qI=ta(()=>A("h1",null,"Tasks",-1)),KI={data(){const{width:t}=jc();return{windowWidth:t,user:jo,isSignedIn:fr,showStats:!1,showTasks:!1,showSettings:!1,showSplash:!qi.value}},methods:{signOut:ol,signInForm(){Mv(prompt("Email"),prompt("Password"))}},mounted(){$t(qi,t=>{this.showSplash=!1})}},GI=Object.assign(KI,{__name:"HomeView",setup(t){return(e,n)=>(R(),W("div",VI,[zI,A("main",BI,[O(La,{name:"Freeplay",image:xe(cI),path:"/freeplaySelection"},null,8,["image"]),O(La,{name:"Puzzles",image:xe(uI),path:"/puzzleSelection"},null,8,["image"]),O(La,{name:"Challenges",image:xe(dI),path:"/challengeSelection"},null,8,["image"])]),A("div",{class:Ge({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[e.windowWidth<=600?(R(),st($e,{key:0,text:"tasks",onClick:n[0]||(n[0]=s=>e.showTasks=!0)})):ss("",!0),O($e,{text:"stats",onClick:n[1]||(n[1]=s=>e.showStats=!0)}),O($e,{text:"settings",onClick:n[2]||(n[2]=s=>e.showSettings=!0)}),O(fs,{text:"tutorial",to:"/tutorial"})],2),A("div",{class:Ge({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[xe(fr)?(R(),W("p",{key:0,onClick:n[3]||(n[3]=(...s)=>xe(ol)&&xe(ol)(...s))}," You are logged in as "+ke(xe(jo).displayName),1)):(R(),W("p",{key:1,onClick:n[4]||(n[4]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),O(en,{modelValue:e.showStats,"onUpdate:modelValue":n[6]||(n[6]=s=>e.showStats=s)},{default:ze(()=>[HI,O(vI),O($e,{black:"",text:"close",onClick:n[5]||(n[5]=s=>e.showStats=!1)})]),_:1},8,["modelValue"]),O(en,{modelValue:e.showSettings,"onUpdate:modelValue":n[7]||(n[7]=s=>e.showSettings=s)},{default:ze(()=>[jI,O(bI)]),_:1},8,["modelValue"]),e.windowWidth>600?(R(),st($e,{key:0,class:"top right",text:"tasks",onClick:n[8]||(n[8]=s=>e.showTasks=!0)})):ss("",!0),O(en,{modelValue:e.showTasks,"onUpdate:modelValue":n[10]||(n[10]=s=>e.showTasks=s)},{default:ze(()=>[qI,O(MI),O($e,{black:"",text:"close",onClick:n[9]||(n[9]=s=>e.showTasks=!1)})]),_:1},8,["modelValue"]),O(nn,{name:"fade"},{default:ze(()=>[e.showSplash?(R(),st(WI,{key:0})):ss("",!0)]),_:1})]))}}),YI=Pe(GI,[["__scopeId","data-v-d5305a29"]]);const QI={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return it.isTaskTarget(this.layout.id,it.TASK_TYPES.FREEPLAY)}},methods:{openGame(){oe().setLayout(this.layout),this.$router.push("/freeplayGame")}}},JI=["data-level","title"];function XI(t,e,n,s,i,r){return R(),W("div",{onClick:e[0]||(e[0]=(...o)=>r.openGame&&r.openGame(...o)),"data-level":n.completion,class:Ge(["container",{"is-task-target":r.isTaskTarget}]),title:`${n.layout.width}x${n.layout.height} - ${n.layout.exclude.length}`},[(R(!0),W(_e,null,yt(r.includedTiles,o=>(R(),W("div",{key:"t"+o,class:"tile",style:xt({transform:`translate(${i.tileSizePreview*(o%n.layout.width-n.layout.width/2)+50}px, ${i.tileSizePreview*(Math.floor(o/n.layout.width)-n.layout.height/2)+50}px)`,width:`${i.tileSizePreview-1}px`,height:`${i.tileSizePreview-1}px`})},null,4))),128))],10,JI)}const ZI=Pe(QI,[["render",XI],["__scopeId","data-v-c8523d4a"]]);const eT=t=>(Un("data-v-11b86a1d"),t=t(),Wn(),t),tT=eT(()=>A("h1",{class:"title"},"Select a layout",-1)),nT={class:"layouts"},sT={data(){return{layouts:_t.FILTERED_LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},iT=Object.assign(sT,{__name:"FreeplaySelection",setup(t){return(e,n)=>(R(),W("main",null,[tT,O(fs,{class:"top right",text:"back",to:"/"}),A("div",nT,[(R(!0),W(_e,null,yt(e.layouts,(s,i)=>(R(),st(ZI,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),rT=Pe(iT,[["__scopeId","data-v-11b86a1d"]]);const oT={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return oe().stats.puzzlesCompleted.some(({id:e})=>e===this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return it.isTaskTarget(this.puzzle.id,it.TASK_TYPES.PUZZLE)},buttonColor(){const t=this.puzzle.solution.length,e=this.puzzle.completionMoves;return this.solved?e<=t?"var(--success-color)":e<=t*1.2?"var(--silver-color)":"var(--bronze-color)":"var(--hl-color)"}},methods:{openGame(){const t=oe();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Wc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},aT=Object.assign(oT,{__name:"PuzzleSelectionButton",setup(t){return rr(e=>({b9f6d758:e.buttonColor})),(e,n)=>(R(),W("div",{class:Ge(["container",{"is-task-target":e.isTaskTarget}]),onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(R(!0),W(_e,null,yt(e.includedTiles,s=>(R(),W("div",{key:"t"+s,class:"tile",style:xt({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],2))}}),lT=Pe(aT,[["__scopeId","data-v-5a134c7a"]]);const cT=t=>(Un("data-v-4dbb0fff"),t=t(),Wn(),t),uT=cT(()=>A("h1",{class:"title"},"Select a puzzle",-1)),dT={class:"layouts"},hT={data(){return{puzzles:Yt.FILTERED_PUZZLES}}},fT=Object.assign(hT,{__name:"PuzzleSelection",setup(t){return(e,n)=>(R(),W("main",null,[uT,O(fs,{class:"top right",text:"back",to:"/"}),A("div",dT,[(R(!0),W(_e,null,yt(e.puzzles,(s,i)=>(R(),st(lT,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),pT=Pe(fT,[["__scopeId","data-v-4dbb0fff"]]);function El(t){const e=Math.floor(t/60).toString(),n=(t%60).toString();return`${e.padStart(2,"0")}:${n.padStart(2,"0")}`}const qc={props:["challenge"],computed:{formattedChall(){const t=this.challenge.moveLimit.toString(),e=this.challenge.nPatterns.toString(),n=this.challenge.maxPercent!==0?this.challenge.maxPercent!==100?this.challenge.maxPercent+"%":El(this.challenge.minTime):"";return(this.challenge.name?this.challenge.name:El(challenge.timeLimit)+"<br>"+(t>0?t+" moves<br>":"no move limit<br>")+e+" layouts")+` ${(n&&"<br>(")+n+(n&&")")}`},isTaskTarget(){return it.isTaskTarget(this.challenge.id,it.TASK_TYPES.CHALLENGE)}}},ch=()=>{rr(t=>({"6fdd6d86":t.color}))},uh=qc.setup;qc.setup=uh?(t,e)=>(ch(),uh(t,e)):ch;const mT=["innerHTML"];function gT(t,e,n,s,i,r){return R(),W("div",{class:Ge({"is-task-target":r.isTaskTarget,"is-completed":n.challenge.maxPercent===100}),innerHTML:r.formattedChall},null,10,mT)}const _T=Pe(qc,[["render",gT],["__scopeId","data-v-b05bb205"]]),yT=A("h1",{class:"title"},"Select a challenge",-1),vT={data(){return{challenges:vo.CHALLENGES}},methods:{selectChallenge(t){const e=oe();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Wc(t.modulo),this.$router.push("/challengeGame")}}},wT=Object.assign(vT,{__name:"ChallengeSelection",setup(t){return(e,n)=>(R(),W("div",null,[yT,O(fs,{class:"top right",text:"back",to:"/"}),(R(!0),W(_e,null,yt(e.challenges,(s,i)=>(R(),st(_T,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}}),CT={props:["outline","highlight"]},ET={width:"100%",height:"100%",viewBox:"0 0 60.000008 60.000004",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},bT={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function IT(t,e,n,s,i,r){return R(),W("div",null,[(R(),W("svg",ET,[A("g",bT,[A("path",{id:"path2326",style:xt([{fill:n.highlight},{"fill-opacity":"1",stroke:"none","stroke-width":"0.244206px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"}]),d:"M 22.506418,5.7476747 C 19.729543,5.7881441 12.471032,11.706991 2.9756103,18.099409 l -2.67274554,9.341045 c 0.089655,-0.152676 -0.79754152,8.684464 1.22735394,7.748319 L 2.986415,55.405134 c 1.1890438,0 2.8115591,1.494069 3.9982823,1.491619 0.6651477,-0.0012 0.9771618,-0.264903 1.1322075,0.320074 C 8.0023041,57.3985 7.9220367,57.580875 7.9022063,57.76661 l 9.1375327,1.3766 35.219003,-1.256918 5.974798,-4.871264 0.150764,-5.982753 c -0.04933,0.03235 -0.09915,0.06383 -0.148379,0.09632 -4.910394,3.240803 -9.283487,7.129532 -10.87706,8.16662 -1.593571,1.037087 -0.407679,-0.777844 0.01862,-2.037005 0.426271,-1.25916 0.09293,-1.962495 -1.315379,-1.055221 -1.408323,0.907273 -3.891531,3.425633 -7.11556,4.703426 -3.224027,1.277791 -7.189312,1.314854 -7.497243,-0.652777 1.196888,-1.713332 8.339057,-10.890201 7.083592,-12.451866 -2.862861,-0.737663 -11.436846,8.513955 -10.277598,6.539978 1.224604,-2.063728 1.11112,-2.10523 2.78093,-4.204606 2.142792,-2.694037 2.983485,-3.22191 2.571799,-4.080868 -0.58137,-0.315366 -3.209137,1.491343 -5.122946,3.210942 -1.472112,1.322727 -9.704484,8.362099 -9.970116,8.192687 -0.348355,-0.222162 1.595981,-4.360091 3.152714,-5.988948 C 31.514606,37.343421 37.626519,30.328515 36.488021,29.176048 35.001437,27.67122 27.933955,33.117968 28.889153,32.24157 29.970967,31.249006 40.512676,22.019332 40.073472,18.916154 35.831584,18.80262 18.81402,35.967435 14.21696,38.000132 c 0,0 5.034507,-4.316388 5.357861,-8.104019 0.532377,-3.978252 1.294722,-4.905392 3.721358,-7.04782 C 28.2759,18.451786 37.99877,12.306987 35.042383,9.8025547 34.923911,9.7021952 34.769449,9.6480723 34.581499,9.6370967 30.960798,9.4256237 10.440538,26.211123 8.4008563,26.513292 7.9258475,25.453006 8.2597465,21.963129 11.693297,18.587622 c 0,0 12.853712,-11.1171798 11.722015,-12.4819086 -0.207237,-0.2499107 -0.51219,-0.3638785 -0.908887,-0.3580973 z","sodipodi:nodetypes":"sccccccccccccsssscccscsscsscscssccssss"},null,4),Gs(" /> "),A("rect",{style:xt([{stroke:n.outline},{fill:"none","fill-opacity":"1","stroke-width":"2.94776","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-opacity":"1","paint-order":"fill markers stroke"}]),id:"rect21023",width:"57.052246",height:"57.052242",x:"1.4738767",y:"1.4738767",ry:"9.5872917"},null,4)])]))])}const dh=Pe(CT,[["render",IT]]);const TT={class:"inner-tile"},ST={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:ki.value[this.tile],backColor:ki.value[this.mod(this.tile+1)],frontOutline:Ra.value[this.tile],backOutline:Ra.value[this.mod(this.tile+1)],frontHighlight:Pa.value[this.tile],backHighlight:Pa.value[this.mod(this.tile+1)],gradient:ki,outlineGradient:Ra,highlightGradient:Pa}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Q.value+Q.value)%Q.value}},mounted(){const t=oe(),e=()=>{const{width:n,height:s}=t.currentLayout,i=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius=.2*i+"px",this.tileSize=i+"px"};$t(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e),this.$nextTick(e),window.addEventListener("orientationchange",e)}},kT=Object.assign(ST,{__name:"Tile",setup(t){return rr(e=>({c608dfe2:e.tileSize,b5be5768:t.visible?1:0,d90867c4:e.borderRadius,"5ae82496":t.visible?"pointer":"default","70aab2fa":e.frontColor,f8396b08:e.backColor})),(e,n)=>(R(),W("div",{class:Ge(["tile",{"flipped-tile":e.flipped}])},[A("div",TT,[A("div",{class:"front",style:xt({background:e.frontColor})},[O(dh,{outline:e.frontOutline,highlight:e.frontHighlight},null,8,["outline","highlight"])],4),A("div",{class:"back",style:xt({background:e.backColor})},[O(dh,{outline:e.backOutline,highlight:e.backHighlight},null,8,["outline","highlight"])],4)])],2))}}),xT=Pe(kT,[["__scopeId","data-v-a7b30663"]]);const RT={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){const{currentChallenge:t,settings:e}=oe();return{currentChallenge:t,settings:e,gradient:ki}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=oe(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},PT=Object.assign(RT,{__name:"Layout",setup(t){return(e,n)=>(R(),W("div",null,[A("div",null,[(R(!0),W(_e,null,yt(t.modelValue.matrix,(s,i)=>{var r;return R(),W("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+xe(Q)},[(R(!0),W(_e,null,yt(s,(o,a)=>{var l;return R(),st(xT,{class:Ge(["tile",{solution:xe(Tn)&&t.solution&&t.solution[i][a]>=1,"color-blind":e.settings.colorBlind===1}]),small:t.small,tile:o,"data-tile":`${o+1}`,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern),style:xt({outline:t.target?`5px solid ${xe(ki)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&xe(Q)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a)},null,8,["small","tile","data-tile","visible","position","class","style","data-moves","onClick"])}),128))])}),128))])]))}}),na=Pe(PT,[["__scopeId","data-v-24a2448e"]]);const AT={props:["modelValue"],emits:["update:modelValue"],data(){const t=oe();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Q.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},NT={class:"diff"},OT=["value","max"];function MT(t,e,n,s,i,r){return R(),W("div",NT,[A("h2",null,"difficulty - "+ke(r.difficultyText),1),A("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,OT)])}const LT=Pe(AT,[["render",MT],["__scopeId","data-v-38400e03"]]);const DT={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},FT={class:"diff"},$T=["value"];function UT(t,e,n,s,i,r){return R(),W("div",FT,[A("h2",null,"states - "+ke(r.moduloText),1),A("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,$T)])}const WT=Pe(DT,[["render",UT],["__scopeId","data-v-5833a5d1"]]);const wr=t=>(Un("data-v-2acdcc0f"),t=t(),Wn(),t),VT={class:"top-menu"},zT=wr(()=>A("span",null," DEV ",-1)),BT=[zT],HT={class:"top right"},jT=wr(()=>A("h1",null,"DevMode",-1)),qT={class:"input"},KT=wr(()=>A("hr",null,null,-1)),GT={key:0},YT=wr(()=>A("p",null,"Only one solution found:",-1)),QT={key:1},JT=wr(()=>A("p",null,"Multiple solutions found:",-1)),XT=["onClick"],ZT={data(){const t=oe(),e=t.currentLayout,{width:n}=jc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Q.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty,this.randomize()},internalModulo(t){Wc(t),this.randomize()},showModal(){this.showModal||this.randomize()}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,Tn.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Q.value+Q.value)%Q.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0,it.advanceTasks(this.layout.id,it.TASK_TYPES.FREEPLAY,this.store.difficulty))},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Q.value-1))),this.$nextTick(()=>{try{Tn.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=Bm(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),$t(Tn,t=>{t&&this.updateSolutions()})}},eS=Object.assign(ZT,{__name:"FreeplayGame",setup(t){return(e,n)=>(R(),W("div",null,[A("div",VT,[xe(Tn)&&e.windowWidth<600?(R(),W("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},BT)):ss("",!0),O($e,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),O(LT,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),jr(A("p",{class:Ge(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},ke(e.moves)+" move"+ke(e.moves>1?"s":""),3),[[Ya,e.moves>0]]),A("div",HT,[O(fs,{text:"back",to:"/freeplaySelection"}),O(WT,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),A("main",null,[O(nn,{name:"fade",mode:"out-in"},{default:ze(()=>[(R(),st(na,{key:xe(Q),modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:xe(Tn)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),xe(Tn)?ss("",!0):(R(),W("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>xe(Bd)(!0))},"v")),O(nn,{name:"fade"},{default:ze(()=>[xe(Tn)&&(!(e.windowWidth<600)||e.showDevMode)?(R(),W("div",{key:0,class:Ge(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[A("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>xe(Bd)(!1))},"x"),jT,A("div",qT,[jr(A("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[F1,e.solveOnClick]]),Gs(" re-solve on click ")]),A("p",null,"Det: "+ke(e.determinant),1),KT,e.determinant!==0?(R(),W("div",GT,[YT,A("p",null,ke(e.solutions[0].moves)+" moves",1)])):(R(),W("div",QT,[JT,(R(!0),W(_e,null,yt(e.solutions,(s,i)=>(R(),W("p",{class:Ge(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},ke(s.moves)+" moves ",11,XT))),128))]))],2)):ss("",!0)]),_:1}),O(en,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:ze(()=>[A("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),O($e,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),tS=Pe(eS,[["__scopeId","data-v-2acdcc0f"]]);const nS=t=>(Un("data-v-8a90382f"),t=t(),Wn(),t),sS=nS(()=>A("h1",null,"no moves remaining!",-1)),iS={data(){const e=oe().currentPuzzle,n=e.base.copy(),{width:s}=jc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){this.remainingMoves>0&&(oe(),this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,this.puzzle.completionMoves=this.moves,it.advanceTasks(this.puzzle.id,it.TASK_TYPES.PUZZLE,this.moves)):this.remainingMoves===0&&(this.showLostModal=!0))}}},rS=Object.assign(iS,{__name:"PuzzleGame",setup(t){return(e,n)=>(R(),W("div",null,[O(fs,{class:"top right",text:"back",to:"/puzzleSelection"}),A("div",{class:Ge(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[A("h1",null,ke(e.remainingMoves)+" move"+ke(e.remainingMoves>1?"s":"")+" remaining",1),O($e,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),A("main",null,[O(na,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),O(en,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:ze(()=>[A("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),O($e,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),O(en,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:ze(()=>[sS,O($e,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),O(fs,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),oS=Pe(rS,[["__scopeId","data-v-8a90382f"]]);const aS=t=>(Un("data-v-9b5a8c82"),t=t(),Wn(),t),lS={key:0},cS={class:"info center"},uS={class:"moves center"},dS={key:1,class:"info center"},hS=aS(()=>A("h1",null,"you won the challenge!",-1)),fS={data(){const{currentChallenge:t}=oe();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=oe();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.minTime=Math.min(this.currentChallenge.timeLimit-this.time,this.currentChallenge.minTime),this.currentChallenge.maxPercent=100,it.advanceTasks(this.currentChallenge.id,it.TASK_TYPES.CHALLENGE,this.currentChallenge.timeLimit-this.time),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){return El(this.time)},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1*this.hasStarted,this.time<=0&&(this.modalText="no time left!",this.currentChallenge.maxPercent=Math.max(this.percentageCompleted,this.currentChallenge.maxPercent),this.showLostModal=!0,window.clearInterval(this.timerId))},1e3)}},pS=Object.assign(fS,{__name:"ChallengeGame",setup(t){return(e,n)=>(R(),W("div",null,[e.hasStarted?(R(),W("div",lS,[A("h2",cS,ke(e.formattedTime)+" "+ke(e.moves)+" - "+ke(e.percentageCompleted+"%"),1),A("h2",uS,ke(e.movesPer),1)])):(R(),W("h2",dS,"Click To Start The Challenge !")),O(t0,{class:"center progress",value:e.percentageCompleted,max:100},null,8,["value"]),A("main",null,[O(nn,{name:"fade",mode:"out-in"},{default:ze(()=>[(R(),st(na,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),O(en,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:ze(()=>[hS,O($e,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),O(en,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:ze(()=>[A("h1",null,ke(e.modalText),1),O($e,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),mS=Pe(pS,[["__scopeId","data-v-9b5a8c82"]]),gS=A("h1",{class:"title"},"how to play",-1),_S={key:0},yS=A("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),vS=A("h1",null,"Try to get all the tiles to be white!",-1),wS={key:1},CS=A("h1",null,"Nice! Now observe what happens at the corners",-1),ES={key:2},bS=A("h1",null,"Well done! Okay one last , a bit harder",-1),IS={key:3},TS=A("h1",null,"Great job! Ready to play?",-1),SS=A("h1",{class:"text-center"},"Try it here!",-1),kS={data(){const t=oe(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new _t({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},xS=Object.assign(kS,{__name:"TutorialView",setup(t){return(e,n)=>(R(),W("div",null,[gS,O(en,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:ze(()=>[e.stage===-1?(R(),W("div",_S,[yS,vS,O($e,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(R(),W("div",wS,[CS,O($e,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(R(),W("div",ES,[bS,O($e,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(R(),W("div",IS,[TS,O($e,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),SS,O(na,{class:Ge([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),RS=tI({history:yb("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:YI},{path:"/tutorial",name:"tutorial",component:xS},{path:"/freeplaySelection",name:"freeplaySelection",component:rT},{path:"/puzzleSelection",name:"puzzleSelection",component:pT},{path:"/challengeSelection",name:"challengeSelection",component:wT},{path:"/freeplayGame",name:"freeplayGame",component:tS},{path:"/puzzleGame",name:"puzzleGame",component:oS},{path:"/challengeGame",name:"challengeGame",component:mS}]}),Kc=V1(rI),s0=H1();or(s0);Kc.use(RS);Kc.use(s0);Kc.mount("#app");
