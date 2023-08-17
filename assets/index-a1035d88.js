var Im=Object.defineProperty;var Tm=(t,e,n)=>e in t?Im(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tr=(t,e,n)=>(Tm(t,typeof e!="symbol"?e+"":e,n),n),Nc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var qs=(t,e,n)=>(Nc(t,e,"read from private field"),n?n.call(t):e.get(t)),nr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Mt=(t,e,n)=>(Nc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function rl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ce={},hs=[],_t=()=>{},Sm=()=>!1,km=/^on[^a-z]/,io=t=>km.test(t),ol=t=>t.startsWith("onUpdate:"),Pe=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xm=Object.prototype.hasOwnProperty,oe=(t,e)=>xm.call(t,e),H=Array.isArray,fs=t=>ro(t)==="[object Map]",Bd=t=>ro(t)==="[object Set]",Q=t=>typeof t=="function",Re=t=>typeof t=="string",ll=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Vd=t=>Ee(t)&&Q(t.then)&&Q(t.catch),Hd=Object.prototype.toString,ro=t=>Hd.call(t),Rm=t=>ro(t).slice(8,-1),zd=t=>ro(t)==="[object Object]",cl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Am=/-(\w)/g,At=oo(t=>t.replace(Am,(e,n)=>n?n.toUpperCase():"")),Pm=/\B([A-Z])/g,Ps=oo(t=>t.replace(Pm,"-$1").toLowerCase()),ao=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lo=oo(t=>t?`on${ao(t)}`:""),_i=(t,e)=>!Object.is(t,e),Fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Om=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Oc;const ha=()=>Oc||(Oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ns(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?Fm(s):Ns(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Re(t))return t;if(Ee(t))return t}}const Mm=/;(?![^(]*\))/g,Dm=/:([^]+)/,Lm=/\/\*[^]*?\*\//g;function Fm(t){const e={};return t.replace(Lm,"").split(Mm).forEach(n=>{if(n){const s=n.split(Dm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pt(t){let e="";if(Re(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Pt(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$m=rl(Um);function jd(t){return!!t||t===""}const Ne=t=>Re(t)?t:t==null?"":H(t)||Ee(t)&&(t.toString===Hd||!Q(t.toString))?JSON.stringify(t,qd,2):String(t),qd=(t,e)=>e&&e.__v_isRef?qd(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Bd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!H(e)&&!zd(e)?String(e):e;let at;class Gd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Kd(t){return new Gd(t)}function Wm(t,e=at){e&&e.active&&e.effects.push(t)}function Yd(){return at}function Bm(t){at&&at.cleanups.push(t)}const ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qd=t=>(t.w&vn)>0,Jd=t=>(t.n&vn)>0,Vm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vn},Hm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Qd(i)&&!Jd(i)?i.delete(t):e[n++]=i,i.w&=~vn,i.n&=~vn}e.length=n}},Cr=new WeakMap;let ei=0,vn=1;const fa=30;let ht;const Hn=Symbol(""),pa=Symbol("");class dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Wm(this,s)}run(){if(!this.active)return this.fn();let e=ht,n=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,un=!0,vn=1<<++ei,ei<=fa?Vm(this):Mc(this),this.fn()}finally{ei<=fa&&Hm(this),vn=1<<--ei,ht=this.parent,un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(Mc(this),this.onStop&&this.onStop(),this.active=!1)}}function Mc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let un=!0;const Xd=[];function Os(){Xd.push(un),un=!1}function Ms(){const t=Xd.pop();un=t===void 0?!0:t}function st(t,e,n){if(un&&ht){let s=Cr.get(t);s||Cr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ul()),Zd(i)}}function Zd(t,e){let n=!1;ei<=fa?Jd(t)||(t.n|=vn,n=!Qd(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function Vt(t,e,n,s,i,r){const o=Cr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?cl(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),fs(t)&&a.push(o.get(pa)));break;case"delete":H(t)||(a.push(o.get(Hn)),fs(t)&&a.push(o.get(pa)));break;case"set":fs(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&ma(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ma(ul(l))}}function ma(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Dc(s);for(const s of n)s.computed||Dc(s)}function Dc(t,e){(t!==ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function zm(t,e){var n;return(n=Cr.get(t))==null?void 0:n.get(e)}const jm=rl("__proto__,__v_isRef,__isVue"),eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ll)),qm=hl(),Gm=hl(!1,!0),Km=hl(!0),Lc=Ym();function Ym(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)st(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os();const s=ie(this)[e].apply(this,n);return Ms(),s}}),t}function Qm(t){const e=ie(this);return st(e,"has",t),e.hasOwnProperty(t)}function hl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?hg:rh:e?ih:sh).get(s))return s;const o=H(s);if(!t){if(o&&oe(Lc,i))return Reflect.get(Lc,i,r);if(i==="hasOwnProperty")return Qm}const a=Reflect.get(s,i,r);return(ll(i)?eh.has(i):jm(i))||(t||st(s,"get",i),e)?a:xe(a)?o&&cl(i)?a:a.value:Ee(a)?t?ah(a):Wi(a):a}}const Jm=th(),Xm=th(!0);function th(t=!1){return function(n,s,i,r){let o=n[s];if(ws(o)&&xe(o)&&!xe(i))return!1;if(!t&&(!Er(i)&&!ws(i)&&(o=ie(o),i=ie(i)),!H(n)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=H(n)&&cl(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?_i(i,o)&&Vt(n,"set",s,i):Vt(n,"add",s,i)),l}}function Zm(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vt(t,"delete",e,void 0),s}function eg(t,e){const n=Reflect.has(t,e);return(!ll(e)||!eh.has(e))&&st(t,"has",e),n}function tg(t){return st(t,"iterate",H(t)?"length":Hn),Reflect.ownKeys(t)}const nh={get:qm,set:Jm,deleteProperty:Zm,has:eg,ownKeys:tg},ng={get:Km,set(t,e){return!0},deleteProperty(t,e){return!0}},sg=Pe({},nh,{get:Gm,set:Xm}),fl=t=>t,lo=t=>Reflect.getPrototypeOf(t);function sr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&st(i,"get",e),st(i,"get",r));const{has:o}=lo(i),a=s?fl:n?gl:yi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ir(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&st(s,"has",t),st(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function rr(t,e=!1){return t=t.__v_raw,!e&&st(ie(t),"iterate",Hn),Reflect.get(t,"size",t)}function Fc(t){t=ie(t);const e=ie(this);return lo(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function Uc(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=lo(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?_i(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function $c(t){const e=ie(this),{has:n,get:s}=lo(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vt(e,"delete",t,void 0),r}function Wc(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function or(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?fl:t?gl:yi;return!t&&st(a,"iterate",Hn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ar(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=fs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?fl:e?gl:yi;return!e&&st(r,"iterate",l?pa:Hn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function ig(){const t={get(r){return sr(this,r)},get size(){return rr(this)},has:ir,add:Fc,set:Uc,delete:$c,clear:Wc,forEach:or(!1,!1)},e={get(r){return sr(this,r,!1,!0)},get size(){return rr(this)},has:ir,add:Fc,set:Uc,delete:$c,clear:Wc,forEach:or(!1,!0)},n={get(r){return sr(this,r,!0)},get size(){return rr(this,!0)},has(r){return ir.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:or(!0,!1)},s={get(r){return sr(this,r,!0,!0)},get size(){return rr(this,!0)},has(r){return ir.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ar(r,!1,!1),n[r]=ar(r,!0,!1),e[r]=ar(r,!1,!0),s[r]=ar(r,!0,!0)}),[t,n,e,s]}const[rg,og,ag,lg]=ig();function pl(t,e){const n=e?t?lg:ag:t?og:rg;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const cg={get:pl(!1,!1)},ug={get:pl(!1,!0)},dg={get:pl(!0,!1)},sh=new WeakMap,ih=new WeakMap,rh=new WeakMap,hg=new WeakMap;function fg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pg(t){return t.__v_skip||!Object.isExtensible(t)?0:fg(Rm(t))}function Wi(t){return ws(t)?t:ml(t,!1,nh,cg,sh)}function oh(t){return ml(t,!1,sg,ug,ih)}function ah(t){return ml(t,!0,ng,dg,rh)}function ml(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function dn(t){return ws(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function Er(t){return!!(t&&t.__v_isShallow)}function lh(t){return dn(t)||ws(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function co(t){return wr(t,"__v_skip",!0),t}const yi=t=>Ee(t)?Wi(t):t,gl=t=>Ee(t)?ah(t):t;function ch(t){un&&ht&&(t=ie(t),Zd(t.dep||(t.dep=ul())))}function uh(t,e){t=ie(t);const n=t.dep;n&&ma(n)}function xe(t){return!!(t&&t.__v_isRef===!0)}function He(t){return dh(t,!1)}function mg(t){return dh(t,!0)}function dh(t,e){return xe(t)?t:new gg(t,e)}class gg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:yi(e)}get value(){return ch(this),this._value}set value(e){const n=this.__v_isShallow||Er(e)||ws(e);e=n?e:ie(e),_i(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yi(e),uh(this))}}function Qe(t){return xe(t)?t.value:t}const _g={get:(t,e,n)=>Qe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function hh(t){return dn(t)?t:new Proxy(t,_g)}function yg(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=wg(t,n);return e}class vg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zm(ie(this._object),this._key)}}function wg(t,e,n){const s=t[e];return xe(s)?s:new vg(t,e,n)}class Cg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dl(e,()=>{this._dirty||(this._dirty=!0,uh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Eg(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=_t):(s=t.get,i=t.set),new Cg(s,i,r||!i,n)}function hn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){uo(r,e,n)}return i}function ut(t,e,n,s){if(Q(t)){const r=hn(t,e,n,s);return r&&Vd(r)&&r.catch(o=>{uo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function uo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hn(l,null,10,[t,o,a]);return}}bg(t,n,i,s)}function bg(t,e,n,s=!0){console.error(t)}let vi=!1,ga=!1;const qe=[];let Tt=0;const ps=[];let Lt=null,Mn=0;const fh=Promise.resolve();let _l=null;function yl(t){const e=_l||fh;return t?e.then(this?t.bind(this):t):e}function Ig(t){let e=Tt+1,n=qe.length;for(;e<n;){const s=e+n>>>1;wi(qe[s])<t?e=s+1:n=s}return e}function vl(t){(!qe.length||!qe.includes(t,vi&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?qe.push(t):qe.splice(Ig(t.id),0,t),ph())}function ph(){!vi&&!ga&&(ga=!0,_l=fh.then(gh))}function Tg(t){const e=qe.indexOf(t);e>Tt&&qe.splice(e,1)}function Sg(t){H(t)?ps.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?Mn+1:Mn))&&ps.push(t),ph()}function Bc(t,e=vi?Tt+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function mh(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>wi(n)-wi(s)),Mn=0;Mn<Lt.length;Mn++)Lt[Mn]();Lt=null,Mn=0}}const wi=t=>t.id==null?1/0:t.id,kg=(t,e)=>{const n=wi(t)-wi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gh(t){ga=!1,vi=!0,qe.sort(kg);const e=_t;try{for(Tt=0;Tt<qe.length;Tt++){const n=qe[Tt];n&&n.active!==!1&&hn(n,null,14)}}finally{Tt=0,qe.length=0,mh(),vi=!1,_l=null,(qe.length||ps.length)&&gh()}}function xg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Ce;h&&(i=n.map(m=>Re(m)?m.trim():m)),d&&(i=n.map(Nm))}let a,l=s[a=Lo(e)]||s[a=Lo(At(e))];!l&&r&&(l=s[a=Lo(Ps(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function _h(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=_h(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Pe(o,r),Ee(t)&&s.set(t,o),o)}function ho(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Ps(e))||oe(t,e))}let $e=null,fo=null;function br(t){const e=$e;return $e=t,fo=t&&t.type.__scopeId||null,e}function Ds(t){fo=t}function Ls(){fo=null}function lt(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zc(-1);const r=br(e);let o;try{o=t(...i)}finally{br(r),s._d&&Zc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Uo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:C}=t;let x,A;const P=br(t);try{if(n.shapeFlag&4){const M=i||s;x=It(u.call(M,M,d,r,m,h,_)),A=l}else{const M=e;x=It(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:Rg(l)}}catch(M){li.length=0,uo(M,t,1),x=$(kt)}let z=x;if(A&&C!==!1){const M=Object.keys(A),{shapeFlag:J}=z;M.length&&J&7&&(o&&M.some(ol)&&(A=Ag(A,o)),z=En(z,A))}return n.dirs&&(z=En(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),x=z,br(P),x}const Rg=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},Ag=(t,e)=>{const n={};for(const s in t)(!ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Pg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!ho(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vc(s,o,c):!0:!!o;return!1}function Vc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ho(n,r))return!0}return!1}function Ng({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Og=t=>t.__isSuspense;function Mg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Sg(t)}function Dg(t,e){return wl(t,null,{flush:"post"})}const lr={};function zn(t,e,n){return wl(t,e,n)}function wl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){var a;const l=Yd()===((a=Oe)==null?void 0:a.scope)?Oe:null;let c,u=!1,d=!1;if(xe(t)?(c=()=>t.value,u=Er(t)):dn(t)?(c=()=>t,s=!0):H(t)?(d=!0,u=t.some(M=>dn(M)||Er(M)),c=()=>t.map(M=>{if(xe(M))return M.value;if(dn(M))return Fn(M);if(Q(M))return hn(M,l,2)})):Q(t)?e?c=()=>hn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),ut(t,l,3,[m])}:c=_t,e&&s){const M=c;c=()=>Fn(M())}let h,m=M=>{h=P.onStop=()=>{hn(M,l,4)}},_;if(Ti)if(m=_t,e?n&&ut(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const M=P_();_=M.__watcherHandles||(M.__watcherHandles=[])}else return _t;let C=d?new Array(t.length).fill(lr):lr;const x=()=>{if(P.active)if(e){const M=P.run();(s||u||(d?M.some((J,ge)=>_i(J,C[ge])):_i(M,C)))&&(h&&h(),ut(e,l,3,[M,C===lr?void 0:d&&C[0]===lr?[]:C,m]),C=M)}else P.run()};x.allowRecurse=!!e;let A;i==="sync"?A=x:i==="post"?A=()=>Ze(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>vl(x));const P=new dl(c,A);e?n?x():C=P.run():i==="post"?Ze(P.run.bind(P),l&&l.suspense):P.run();const z=()=>{P.stop(),l&&l.scope&&al(l.scope.effects,P)};return _&&_.push(z),z}function Lg(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?yh(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Oe;Cs(this);const a=wl(i,r.bind(s),n);return o?Cs(o):jn(),a}function yh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Fn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Fn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(Bd(t)||fs(t))t.forEach(n=>{Fn(n,e)});else if(zd(t))for(const n in t)Fn(t[n],e);return t}function _a(t,e){const n=$e;if(n===null)return t;const s=yo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Fn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Os(),ut(l,n,8,[t.el,a,t,e]),Ms())}}function Fg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ci(()=>{t.isMounted=!0}),Ih(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],vh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},Ug={name:"BaseTransition",props:vh,setup(t,{slots:e}){const n=$h(),s=Fg();let i;return()=>{const r=e.default&&Ch(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==kt){o=C;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return $o(o);const c=Hc(o);if(!c)return $o(o);const u=ya(c,a,s,n);va(c,u);const d=n.subTree,h=d&&Hc(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const C=_();i===void 0?i=C:C!==i&&(i=C,m=!0)}if(h&&h.type!==kt&&(!Dn(c,h)||m)){const C=ya(h,a,s,n);if(va(h,C),l==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},$o(o);l==="in-out"&&c.type!==kt&&(C.delayLeave=(x,A,P)=>{const z=wh(s,h);z[String(h.key)]=h,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},$g=Ug;function wh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ya(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:C,onAppear:x,onAfterAppear:A,onAppearCancelled:P}=e,z=String(t.key),M=wh(n,t),J=(N,F)=>{N&&ut(N,s,9,F)},ge=(N,F)=>{const Y=F[1];J(N,F),H(N)?N.every(fe=>fe.length<=1)&&Y():N.length<=1&&Y()},ve={mode:r,persisted:o,beforeEnter(N){let F=a;if(!n.isMounted)if(i)F=C||a;else return;N._leaveCb&&N._leaveCb(!0);const Y=M[z];Y&&Dn(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),J(F,[N])},enter(N){let F=l,Y=c,fe=u;if(!n.isMounted)if(i)F=x||l,Y=A||c,fe=P||u;else return;let D=!1;const le=N._enterCb=Ve=>{D||(D=!0,Ve?J(fe,[N]):J(Y,[N]),ve.delayedLeave&&ve.delayedLeave(),N._enterCb=void 0)};F?ge(F,[N,le]):le()},leave(N,F){const Y=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return F();J(d,[N]);let fe=!1;const D=N._leaveCb=le=>{fe||(fe=!0,F(),le?J(_,[N]):J(m,[N]),N._leaveCb=void 0,M[Y]===t&&delete M[Y])};M[Y]=t,h?ge(h,[N,D]):D()},clone(N){return ya(N,e,n,s)}};return ve}function $o(t){if(po(t))return t=En(t),t.children=null,t}function Hc(t){return po(t)?t.children?t.children[0]:void 0:t}function va(t,e){t.shapeFlag&6&&t.component?va(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ch(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Se?(o.patchFlag&128&&i++,s=s.concat(Ch(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?En(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Eh(t,e){return Q(t)?(()=>Pe({name:t.name},e,{setup:t}))():t}const oi=t=>!!t.type.__asyncLoader,po=t=>t.type.__isKeepAlive;function Wg(t,e){bh(t,"a",e)}function Bg(t,e){bh(t,"da",e)}function bh(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)po(i.parent.vnode)&&Vg(s,e,n,i),i=i.parent}}function Vg(t,e,n,s){const i=mo(e,t,s,!0);Ei(()=>{al(s[e],i)},n)}function mo(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os(),Cs(n);const a=ut(e,n,t,o);return jn(),Ms(),a});return s?i.unshift(r):i.push(r),r}}const jt=t=>(e,n=Oe)=>(!Ti||t==="sp")&&mo(t,(...s)=>e(...s),n),Hg=jt("bm"),Ci=jt("m"),zg=jt("bu"),jg=jt("u"),Ih=jt("bum"),Ei=jt("um"),qg=jt("sp"),Gg=jt("rtg"),Kg=jt("rtc");function Yg(t,e=Oe){mo("ec",t,e)}const Cl="components";function Qg(t,e){return Sh(Cl,t,!0,e)||t}const Th=Symbol.for("v-ndc");function Jg(t){return Re(t)?Sh(Cl,t,!1)||t:t||Th}function Sh(t,e,n=!0,s=!1){const i=$e||Oe;if(i){const r=i.type;if(t===Cl){const a=x_(r,!1);if(a&&(a===e||a===At(e)||a===ao(At(e))))return r}const o=zc(i[t]||r[t],e)||zc(i.appContext[t],e);return!o&&s?r:o}}function zc(t,e){return t&&(t[e]||t[At(e)]||t[ao(At(e))])}function wn(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Re(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Xg(t,e,n={},s,i){if($e.isCE||$e.parent&&oi($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),$("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),q();const o=r&&kh(r(n)),a=Cn(Se,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function kh(t){return t.some(e=>Tr(e)?!(e.type===kt||e.type===Se&&!kh(e.children)):!0)?t:null}const wa=t=>t?Wh(t)?yo(t)||t.proxy:wa(t.parent):null,ai=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wa(t.parent),$root:t=>wa(t.root),$emit:t=>t.emit,$options:t=>El(t),$forceUpdate:t=>t.f||(t.f=()=>vl(t.update)),$nextTick:t=>t.n||(t.n=yl.bind(t.proxy)),$watch:t=>Lg.bind(t)}),Wo=(t,e)=>t!==Ce&&!t.__isScriptSetup&&oe(t,e),Zg={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Wo(s,e))return o[e]=1,s[e];if(i!==Ce&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,r[e];if(n!==Ce&&oe(n,e))return o[e]=4,n[e];Ca&&(o[e]=0)}}const u=ai[e];let d,h;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ce&&oe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,oe(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Wo(i,e)?(i[e]=n,!0):s!==Ce&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&oe(t,o)||Wo(e,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(ai,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ca=!0;function e_(t){const e=El(t),n=t.proxy,s=t.ctx;Ca=!1,e.beforeCreate&&qc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:C,deactivated:x,beforeDestroy:A,beforeUnmount:P,destroyed:z,unmounted:M,render:J,renderTracked:ge,renderTriggered:ve,errorCaptured:N,serverPrefetch:F,expose:Y,inheritAttrs:fe,components:D,directives:le,filters:Ve}=e;if(c&&t_(c,s,null),o)for(const pe in o){const ce=o[pe];Q(ce)&&(s[pe]=ce.bind(n))}if(i){const pe=i.call(n,n);Ee(pe)&&(t.data=Wi(pe))}if(Ca=!0,r)for(const pe in r){const ce=r[pe],Ot=Q(ce)?ce.bind(n,n):Q(ce.get)?ce.get.bind(n,n):_t,Kt=!Q(ce)&&Q(ce.set)?ce.set.bind(n):_t,Ct=ke({get:Ot,set:Kt});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Xe=>Ct.value=Xe})}if(a)for(const pe in a)xh(a[pe],s,n,pe);if(l){const pe=Q(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ce=>{fr(ce,pe[ce])})}u&&qc(u,t,"c");function se(pe,ce){H(ce)?ce.forEach(Ot=>pe(Ot.bind(n))):ce&&pe(ce.bind(n))}if(se(Hg,d),se(Ci,h),se(zg,m),se(jg,_),se(Wg,C),se(Bg,x),se(Yg,N),se(Kg,ge),se(Gg,ve),se(Ih,P),se(Ei,M),se(qg,F),H(Y))if(Y.length){const pe=t.exposed||(t.exposed={});Y.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:Ot=>n[ce]=Ot})})}else t.exposed||(t.exposed={});J&&t.render===_t&&(t.render=J),fe!=null&&(t.inheritAttrs=fe),D&&(t.components=D),le&&(t.directives=le)}function t_(t,e,n=_t){H(t)&&(t=Ea(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function qc(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xh(t,e,n,s){const i=s.includes(".")?yh(n,s):()=>n[s];if(Re(t)){const r=e[t];Q(r)&&zn(i,r)}else if(Q(t))zn(i,t.bind(n));else if(Ee(t))if(H(t))t.forEach(r=>xh(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&zn(i,r,t)}}function El(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ir(l,c,o,!0)),Ir(l,e,o)),Ee(e)&&r.set(e,l),l}function Ir(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ir(t,r,n,!0),i&&i.forEach(o=>Ir(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=n_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const n_={data:Gc,props:Kc,emits:Kc,methods:ti,computed:ti,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:ti,directives:ti,watch:i_,provide:Gc,inject:s_};function Gc(t,e){return e?t?function(){return Pe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function s_(t,e){return ti(Ea(t),Ea(e))}function Ea(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function ti(t,e){return t?Pe(Object.create(null),t,e):e}function Kc(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),jc(t),jc(e??{})):e}function i_(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Rh(){return{app:null,config:{isNativeTag:Sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r_=0;function o_(t,e){return function(s,i=null){Q(s)||(s=Pe({},s)),i!=null&&!Ee(i)&&(i=null);const r=Rh(),o=new Set;let a=!1;const l=r.app={_uid:r_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:N_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=$(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,yo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){bi=l;try{return c()}finally{bi=null}}};return l}}let bi=null;function fr(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Oe||$e;if(s||bi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:bi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function a_(){return!!(Oe||$e||bi)}function l_(t,e,n,s=!1){const i={},r={};wr(r,_o,1),t.propsDefaults=Object.create(null),Ah(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:oh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function c_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ho(t.emitsOptions,h))continue;const m=e[h];if(l)if(oe(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=At(h);i[_]=ba(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{Ah(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!oe(e,d)&&((u=Ps(d))===d||!oe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ba(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!oe(e,d))&&(delete r[d],c=!0)}c&&Vt(t,"set","$attrs")}function Ah(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;i&&oe(i,u=At(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ho(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||Ce;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ba(i,l,d,c[d],t,!oe(c,d))}}return o}function ba(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Cs(i),s=c[n]=l.call(null,e),jn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ps(n))&&(s=!0))}return s}function Ph(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=d=>{l=!0;const[h,m]=Ph(d,e,!0);Pe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,hs),hs;if(H(r))for(let u=0;u<r.length;u++){const d=At(r[u]);Yc(d)&&(o[d]=Ce)}else if(r)for(const u in r){const d=At(u);if(Yc(d)){const h=r[u],m=o[d]=H(h)||Q(h)?{type:h}:Pe({},h);if(m){const _=Xc(Boolean,m.type),C=Xc(String,m.type);m[0]=_>-1,m[1]=C<0||_<C,(_>-1||oe(m,"default"))&&a.push(d)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function Yc(t){return t[0]!=="$"}function Qc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jc(t,e){return Qc(t)===Qc(e)}function Xc(t,e){return H(e)?e.findIndex(n=>Jc(n,t)):Q(e)&&Jc(e,t)?0:-1}const Nh=t=>t[0]==="_"||t==="$stable",bl=t=>H(t)?t.map(It):[It(t)],u_=(t,e,n)=>{if(e._n)return e;const s=lt((...i)=>bl(e(...i)),n);return s._c=!1,s},Oh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Nh(i))continue;const r=t[i];if(Q(r))e[i]=u_(i,r,s);else if(r!=null){const o=bl(r);e[i]=()=>o}}},Mh=(t,e)=>{const n=bl(e);t.slots.default=()=>n},d_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),wr(e,"_",n)):Oh(e,t.slots={})}else t.slots={},e&&Mh(t,e);wr(t.slots,_o,1)},h_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Pe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Oh(e,i)),o=e}else e&&(Mh(t,e),o={default:1});if(r)for(const a in i)!Nh(a)&&!(a in o)&&delete i[a]};function Ia(t,e,n,s,i=!1){if(H(t)){t.forEach((h,m)=>Ia(h,e&&(H(e)?e[m]:e),n,s,i));return}if(oi(s)&&!i)return;const r=s.shapeFlag&4?yo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):xe(c)&&(c.value=null)),Q(l))hn(l,a,12,[o,u]);else{const h=Re(l),m=xe(l);if(h||m){const _=()=>{if(t.f){const C=h?oe(d,l)?d[l]:u[l]:l.value;i?H(C)&&al(C,r):H(C)?C.includes(r)||C.push(r):h?(u[l]=[r],oe(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,oe(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ze(_,n)):_()}}}const Ze=Mg;function f_(t){return p_(t)}function p_(t,e){const n=ha();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=_t,insertStaticContent:_}=t,C=(f,p,g,y=null,w=null,E=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Dn(f,p)&&(y=v(f),Xe(f,w,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:W,shapeFlag:L}=p;switch(b){case go:x(f,p,g,y);break;case kt:A(f,p,g,y);break;case pr:f==null&&P(p,g,y,R);break;case Se:D(f,p,g,y,w,E,R,I,S);break;default:L&1?J(f,p,g,y,w,E,R,I,S):L&6?le(f,p,g,y,w,E,R,I,S):(L&64||L&128)&&b.process(f,p,g,y,w,E,R,I,S,k)}W!=null&&w&&Ia(W,f&&f.ref,E,p||f,!p)},x=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},z=({el:f,anchor:p},g,y)=>{let w;for(;f&&f!==p;)w=h(f),s(f,g,y),f=w;s(p,g,y)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},J=(f,p,g,y,w,E,R,I,S)=>{R=R||p.type==="svg",f==null?ge(p,g,y,w,E,R,I,S):F(f,p,w,E,R,I,S)},ge=(f,p,g,y,w,E,R,I)=>{let S,b;const{type:W,props:L,shapeFlag:B,transition:K,dirs:te}=f;if(S=f.el=o(f.type,E,L&&L.is,L),B&8?u(S,f.children):B&16&&N(f.children,S,null,y,w,E&&W!=="foreignObject",R,I),te&&kn(f,null,y,"created"),ve(S,f,f.scopeId,R,y),L){for(const de in L)de!=="value"&&!hr(de)&&r(S,de,null,L[de],E,f.children,y,w,ze);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&bt(b,y,f)}te&&kn(f,null,y,"beforeMount");const _e=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;_e&&K.beforeEnter(S),s(S,p,g),((b=L&&L.onVnodeMounted)||_e||te)&&Ze(()=>{b&&bt(b,y,f),_e&&K.enter(S),te&&kn(f,null,y,"mounted")},w)},ve=(f,p,g,y,w)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(w){let E=w.subTree;if(p===E){const R=w.vnode;ve(f,R,R.scopeId,R.slotScopeIds,w.parent)}}},N=(f,p,g,y,w,E,R,I,S=0)=>{for(let b=S;b<f.length;b++){const W=f[b]=I?tn(f[b]):It(f[b]);C(null,W,p,g,y,w,E,R,I)}},F=(f,p,g,y,w,E,R)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:W}=p;S|=f.patchFlag&16;const L=f.props||Ce,B=p.props||Ce;let K;g&&xn(g,!1),(K=B.onVnodeBeforeUpdate)&&bt(K,g,p,f),W&&kn(p,f,g,"beforeUpdate"),g&&xn(g,!0);const te=w&&p.type!=="foreignObject";if(b?Y(f.dynamicChildren,b,I,g,y,te,E):R||ce(f,p,I,null,g,y,te,E,!1),S>0){if(S&16)fe(I,p,L,B,g,y,w);else if(S&2&&L.class!==B.class&&r(I,"class",null,B.class,w),S&4&&r(I,"style",L.style,B.style,w),S&8){const _e=p.dynamicProps;for(let de=0;de<_e.length;de++){const Ae=_e[de],dt=L[Ae],rs=B[Ae];(rs!==dt||Ae==="value")&&r(I,Ae,dt,rs,w,f.children,g,y,ze)}}S&1&&f.children!==p.children&&u(I,p.children)}else!R&&b==null&&fe(I,p,L,B,g,y,w);((K=B.onVnodeUpdated)||W)&&Ze(()=>{K&&bt(K,g,p,f),W&&kn(p,f,g,"updated")},y)},Y=(f,p,g,y,w,E,R)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],W=S.el&&(S.type===Se||!Dn(S,b)||S.shapeFlag&70)?d(S.el):g;C(S,b,W,null,y,w,E,R,!0)}},fe=(f,p,g,y,w,E,R)=>{if(g!==y){if(g!==Ce)for(const I in g)!hr(I)&&!(I in y)&&r(f,I,g[I],null,R,p.children,w,E,ze);for(const I in y){if(hr(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,R,p.children,w,E,ze)}"value"in y&&r(f,"value",g.value,y.value)}},D=(f,p,g,y,w,E,R,I,S)=>{const b=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),f==null?(s(b,g,y),s(W,g,y),N(p.children,g,W,w,E,R,I,S)):L>0&&L&64&&B&&f.dynamicChildren?(Y(f.dynamicChildren,B,g,w,E,R,I),(p.key!=null||w&&p===w.subTree)&&Dh(f,p,!0)):ce(f,p,g,W,w,E,R,I,S)},le=(f,p,g,y,w,E,R,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?w.ctx.activate(p,g,y,R,S):Ve(p,g,y,w,E,R,S):Ke(f,p,S)},Ve=(f,p,g,y,w,E,R)=>{const I=f.component=b_(f,y,w);if(po(f)&&(I.ctx.renderer=k),I_(I),I.asyncDep){if(w&&w.registerDep(I,se),!f.el){const S=I.subTree=$(kt);A(null,S,p,g)}return}se(I,f,p,g,w,E,R)},Ke=(f,p,g)=>{const y=p.component=f.component;if(Pg(f,p,g))if(y.asyncDep&&!y.asyncResolved){pe(y,p,g);return}else y.next=p,Tg(y.update),y.update();else p.el=f.el,y.vnode=p},se=(f,p,g,y,w,E,R)=>{const I=()=>{if(f.isMounted){let{next:W,bu:L,u:B,parent:K,vnode:te}=f,_e=W,de;xn(f,!1),W?(W.el=te.el,pe(f,W,R)):W=te,L&&Fo(L),(de=W.props&&W.props.onVnodeBeforeUpdate)&&bt(de,K,W,te),xn(f,!0);const Ae=Uo(f),dt=f.subTree;f.subTree=Ae,C(dt,Ae,d(dt.el),v(dt),f,w,E),W.el=Ae.el,_e===null&&Ng(f,Ae.el),B&&Ze(B,w),(de=W.props&&W.props.onVnodeUpdated)&&Ze(()=>bt(de,K,W,te),w)}else{let W;const{el:L,props:B}=p,{bm:K,m:te,parent:_e}=f,de=oi(p);if(xn(f,!1),K&&Fo(K),!de&&(W=B&&B.onVnodeBeforeMount)&&bt(W,_e,p),xn(f,!0),L&&ue){const Ae=()=>{f.subTree=Uo(f),ue(L,f.subTree,f,w,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{const Ae=f.subTree=Uo(f);C(null,Ae,g,y,f,w,E),p.el=Ae.el}if(te&&Ze(te,w),!de&&(W=B&&B.onVnodeMounted)){const Ae=p;Ze(()=>bt(W,_e,Ae),w)}(p.shapeFlag&256||_e&&oi(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&Ze(f.a,w),f.isMounted=!0,p=g=y=null}},S=f.effect=new dl(I,()=>vl(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,xn(f,!0),b()},pe=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,c_(f,p.props,y,g),h_(f,p.children,g),Os(),Bc(),Ms()},ce=(f,p,g,y,w,E,R,I,S=!1)=>{const b=f&&f.children,W=f?f.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){Kt(b,L,g,y,w,E,R,I,S);return}else if(B&256){Ot(b,L,g,y,w,E,R,I,S);return}}K&8?(W&16&&ze(b,w,E),L!==b&&u(g,L)):W&16?K&16?Kt(b,L,g,y,w,E,R,I,S):ze(b,w,E,!0):(W&8&&u(g,""),K&16&&N(L,g,y,w,E,R,I,S))},Ot=(f,p,g,y,w,E,R,I,S)=>{f=f||hs,p=p||hs;const b=f.length,W=p.length,L=Math.min(b,W);let B;for(B=0;B<L;B++){const K=p[B]=S?tn(p[B]):It(p[B]);C(f[B],K,g,null,w,E,R,I,S)}b>W?ze(f,w,E,!0,!1,L):N(p,g,y,w,E,R,I,S,L)},Kt=(f,p,g,y,w,E,R,I,S)=>{let b=0;const W=p.length;let L=f.length-1,B=W-1;for(;b<=L&&b<=B;){const K=f[b],te=p[b]=S?tn(p[b]):It(p[b]);if(Dn(K,te))C(K,te,g,null,w,E,R,I,S);else break;b++}for(;b<=L&&b<=B;){const K=f[L],te=p[B]=S?tn(p[B]):It(p[B]);if(Dn(K,te))C(K,te,g,null,w,E,R,I,S);else break;L--,B--}if(b>L){if(b<=B){const K=B+1,te=K<W?p[K].el:y;for(;b<=B;)C(null,p[b]=S?tn(p[b]):It(p[b]),g,te,w,E,R,I,S),b++}}else if(b>B)for(;b<=L;)Xe(f[b],w,E,!0),b++;else{const K=b,te=b,_e=new Map;for(b=te;b<=B;b++){const ot=p[b]=S?tn(p[b]):It(p[b]);ot.key!=null&&_e.set(ot.key,b)}let de,Ae=0;const dt=B-te+1;let rs=!1,Rc=0;const js=new Array(dt);for(b=0;b<dt;b++)js[b]=0;for(b=K;b<=L;b++){const ot=f[b];if(Ae>=dt){Xe(ot,w,E,!0);continue}let Et;if(ot.key!=null)Et=_e.get(ot.key);else for(de=te;de<=B;de++)if(js[de-te]===0&&Dn(ot,p[de])){Et=de;break}Et===void 0?Xe(ot,w,E,!0):(js[Et-te]=b+1,Et>=Rc?Rc=Et:rs=!0,C(ot,p[Et],g,null,w,E,R,I,S),Ae++)}const Ac=rs?m_(js):hs;for(de=Ac.length-1,b=dt-1;b>=0;b--){const ot=te+b,Et=p[ot],Pc=ot+1<W?p[ot+1].el:y;js[b]===0?C(null,Et,g,Pc,w,E,R,I,S):rs&&(de<0||b!==Ac[de]?Ct(Et,g,Pc,2):de--)}}},Ct=(f,p,g,y,w=null)=>{const{el:E,type:R,transition:I,children:S,shapeFlag:b}=f;if(b&6){Ct(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,k);return}if(R===Se){s(E,p,g);for(let L=0;L<S.length;L++)Ct(S[L],p,g,y);s(f.anchor,p,g);return}if(R===pr){z(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),Ze(()=>I.enter(E),w);else{const{leave:L,delayLeave:B,afterLeave:K}=I,te=()=>s(E,p,g),_e=()=>{L(E,()=>{te(),K&&K()})};B?B(E,te,_e):_e()}else s(E,p,g)},Xe=(f,p,g,y=!1,w=!1)=>{const{type:E,props:R,ref:I,children:S,dynamicChildren:b,shapeFlag:W,patchFlag:L,dirs:B}=f;if(I!=null&&Ia(I,null,g,f,!0),W&256){p.ctx.deactivate(f);return}const K=W&1&&B,te=!oi(f);let _e;if(te&&(_e=R&&R.onVnodeBeforeUnmount)&&bt(_e,p,f),W&6)er(f.component,g,y);else{if(W&128){f.suspense.unmount(g,y);return}K&&kn(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,g,w,k,y):b&&(E!==Se||L>0&&L&64)?ze(b,p,g,!1,!0):(E===Se&&L&384||!w&&W&16)&&ze(S,p,g),y&&ss(f)}(te&&(_e=R&&R.onVnodeUnmounted)||K)&&Ze(()=>{_e&&bt(_e,p,f),K&&kn(f,null,p,"unmounted")},g)},ss=f=>{const{type:p,el:g,anchor:y,transition:w}=f;if(p===Se){is(g,y);return}if(p===pr){M(f);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:I}=w,S=()=>R(g,E);I?I(f.el,E,S):S()}else E()},is=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},er=(f,p,g)=>{const{bum:y,scope:w,update:E,subTree:R,um:I}=f;y&&Fo(y),w.stop(),E&&(E.active=!1,Xe(R,f,p,g)),I&&Ze(I,p),Ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,g,y=!1,w=!1,E=0)=>{for(let R=E;R<f.length;R++)Xe(f[R],p,g,y,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),Bc(),mh(),p._vnode=f},k={p:C,um:Xe,m:Ct,r:ss,mt:Ve,mc:N,pc:ce,pbc:Y,n:v,o:t};let U,ue;return e&&([U,ue]=e(k)),{render:O,hydrate:U,createApp:o_(O,U)}}function xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dh(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=tn(i[r]),a.el=o.el),n||Dh(o,a)),a.type===go&&(a.el=o.el)}}function m_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const g_=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),li=[];let pt=null;function q(t=!1){li.push(pt=t?null:[])}function __(){li.pop(),pt=li[li.length-1]||null}let Ii=1;function Zc(t){Ii+=t}function Lh(t){return t.dynamicChildren=Ii>0?pt||hs:null,__(),Ii>0&&pt&&pt.push(t),t}function Z(t,e,n,s,i,r){return Lh(G(t,e,n,s,i,r,!0))}function Cn(t,e,n,s,i){return Lh($(t,e,n,s,i,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const _o="__vInternal",Fh=({key:t})=>t??null,mr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||xe(t)||Q(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fh(e),ref:e&&mr(e),scopeId:fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(Il(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Ii>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const $=y_;function y_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Th)&&(t=kt),Tr(t)){const a=En(t,e,!0);return n&&Il(a,n),Ii>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(R_(t)&&(t=t.__vccOpts),e){e=v_(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Pt(a)),Ee(l)&&(lh(l)&&!H(l)&&(l=Pe({},l)),e.style=Ns(l))}const o=Re(t)?1:Og(t)?128:g_(t)?64:Ee(t)?4:Q(t)?2:0;return G(t,e,n,s,i,o,r,!0)}function v_(t){return t?lh(t)||_o in t?Pe({},t):t:null}function En(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?w_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fh(a),ref:e&&e.ref?n&&i?H(i)?i.concat(mr(e)):[i,mr(e)]:mr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Uh(t=" ",e=0){return $(go,null,t,e)}function It(t){return t==null||typeof t=="boolean"?$(kt):H(t)?$(Se,null,t.slice()):typeof t=="object"?tn(t):$(go,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:En(t)}function Il(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Il(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_o in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Uh(e)]):n=8);t.children=e,t.shapeFlag|=n}function w_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Pt([e.class,s.class]));else if(i==="style")e.style=Ns([e.style,s.style]);else if(io(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){ut(t,e,7,[n,s])}const C_=Rh();let E_=0;function b_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||C_,r={uid:E_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(s,i),emitsOptions:_h(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xg.bind(null,r),t.ce&&t.ce(r),r}let Oe=null;const $h=()=>Oe||$e;let Tl,os,eu="__VUE_INSTANCE_SETTERS__";(os=ha()[eu])||(os=ha()[eu]=[]),os.push(t=>Oe=t),Tl=t=>{os.length>1?os.forEach(e=>e(t)):os[0](t)};const Cs=t=>{Tl(t),t.scope.on()},jn=()=>{Oe&&Oe.scope.off(),Tl(null)};function Wh(t){return t.vnode.shapeFlag&4}let Ti=!1;function I_(t,e=!1){Ti=e;const{props:n,children:s}=t.vnode,i=Wh(t);l_(t,n,i,e),d_(t,s);const r=i?T_(t,e):void 0;return Ti=!1,r}function T_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=co(new Proxy(t.ctx,Zg));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?k_(t):null;Cs(t),Os();const r=hn(s,t,0,[t.props,i]);if(Ms(),jn(),Vd(r)){if(r.then(jn,jn),e)return r.then(o=>{tu(t,o,e)}).catch(o=>{uo(o,t,0)});t.asyncDep=r}else tu(t,r,e)}else Bh(t,e)}function tu(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=hh(e)),Bh(t,n)}let nu;function Bh(t,e,n){const s=t.type;if(!t.render){if(!e&&nu&&!s.render){const i=s.template||El(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:r,delimiters:a},o),l);s.render=nu(i,c)}}t.render=s.render||_t}Cs(t),Os(),e_(t),Ms(),jn()}function S_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}}))}function k_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return S_(t)},slots:t.slots,emit:t.emit,expose:e}}function yo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hh(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}}))}function x_(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function R_(t){return Q(t)&&"__vccOpts"in t}const ke=(t,e)=>Eg(t,e,Ti);function Sl(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!H(e)?Tr(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tr(n)&&(n=[n]),$(t,e,n))}const A_=Symbol.for("v-scx"),P_=()=>St(A_),N_="3.3.4",O_="http://www.w3.org/2000/svg",Ln=typeof document<"u"?document:null,su=Ln&&Ln.createElement("template"),M_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ln.createElementNS(O_,t):Ln.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{su.innerHTML=s?`<svg>${t}</svg>`:t;const a=su.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function D_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function L_(t,e,n){const s=t.style,i=Re(n);if(n&&!i){if(e&&!Re(e))for(const r in e)n[r]==null&&Ta(s,r,"");for(const r in n)Ta(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const iu=/\s*!important$/;function Ta(t,e,n){if(H(n))n.forEach(s=>Ta(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=F_(t,e);iu.test(n)?t.setProperty(Ps(s),n.replace(iu,""),"important"):t[s]=n}}const ru=["Webkit","Moz","ms"],Bo={};function F_(t,e){const n=Bo[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return Bo[e]=s;s=ao(s);for(let i=0;i<ru.length;i++){const r=ru[i]+s;if(r in t)return Bo[e]=r}return e}const ou="http://www.w3.org/1999/xlink";function U_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ou,e.slice(6,e.length)):t.setAttributeNS(ou,e,n);else{const r=$m(e);n==null||r&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function $_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function W_(t,e,n,s){t.addEventListener(e,n,s)}function B_(t,e,n,s){t.removeEventListener(e,n,s)}function V_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=H_(e);if(s){const c=r[e]=q_(s,i);W_(t,a,c,l)}else o&&(B_(t,a,o,l),r[e]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function H_(t){let e;if(au.test(t)){e={};let s;for(;s=t.match(au);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let Vo=0;const z_=Promise.resolve(),j_=()=>Vo||(z_.then(()=>Vo=0),Vo=Date.now());function q_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(G_(s,n.value),e,5,[s])};return n.value=t,n.attached=j_(),n}function G_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const lu=/^on[a-z]/,K_=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?D_(t,s,i):e==="style"?L_(t,n,s):io(e)?ol(e)||V_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Y_(t,e,s,i))?$_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),U_(t,e,s,i))};function Y_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&lu.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lu.test(e)&&Re(n)?!1:e in t}function vo(t){const e=$h();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ka(r,i))},s=()=>{const i=t(e.proxy);Sa(e.subTree,i),n(i)};Dg(s),Ci(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Ei(()=>i.disconnect())})}function Sa(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Sa(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ka(t.el,e);else if(t.type===Se)t.children.forEach(n=>Sa(n,e));else if(t.type===pr){let{el:n,anchor:s}=t;for(;n&&(ka(n,e),n!==s);)n=n.nextSibling}}function ka(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Qt="transition",Gs="animation",Es=(t,{slots:e})=>Sl($g,Q_(t),e);Es.displayName="Transition";const Vh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Es.props=Pe({},vh,Vh);const Rn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},cu=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Q_(t){const e={};for(const D in t)D in Vh||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=J_(i),C=_&&_[0],x=_&&_[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:z,onLeave:M,onLeaveCancelled:J,onBeforeAppear:ge=A,onAppear:ve=P,onAppearCancelled:N=z}=e,F=(D,le,Ve)=>{An(D,le?u:a),An(D,le?c:o),Ve&&Ve()},Y=(D,le)=>{D._isLeaving=!1,An(D,d),An(D,m),An(D,h),le&&le()},fe=D=>(le,Ve)=>{const Ke=D?ve:P,se=()=>F(le,D,Ve);Rn(Ke,[le,se]),uu(()=>{An(le,D?l:r),Jt(le,D?u:a),cu(Ke)||du(le,s,C,se)})};return Pe(e,{onBeforeEnter(D){Rn(A,[D]),Jt(D,r),Jt(D,o)},onBeforeAppear(D){Rn(ge,[D]),Jt(D,l),Jt(D,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(D,le){D._isLeaving=!0;const Ve=()=>Y(D,le);Jt(D,d),e1(),Jt(D,h),uu(()=>{D._isLeaving&&(An(D,d),Jt(D,m),cu(M)||du(D,s,x,Ve))}),Rn(M,[D,Ve])},onEnterCancelled(D){F(D,!1),Rn(z,[D])},onAppearCancelled(D){F(D,!0),Rn(N,[D])},onLeaveCancelled(D){Y(D),Rn(J,[D])}})}function J_(t){if(t==null)return null;if(Ee(t))return[Ho(t.enter),Ho(t.leave)];{const e=Ho(t);return[e,e]}}function Ho(t){return Om(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function An(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function uu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let X_=0;function du(t,e,n,s){const i=t._endId=++X_,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Z_(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Z_(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${Qt}Delay`),r=s(`${Qt}Duration`),o=hu(i,r),a=s(`${Gs}Delay`),l=s(`${Gs}Duration`),c=hu(a,l);let u=null,d=0,h=0;e===Qt?o>0&&(u=Qt,d=o,h=r.length):e===Gs?c>0&&(u=Gs,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Qt:Gs:null,h=u?u===Qt?r.length:l.length:0);const m=u===Qt&&/\b(transform|all)(,|$)/.test(s(`${Qt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function hu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>fu(n)+fu(t[s])))}function fu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function e1(){return document.body.offsetHeight}const xa={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ks(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ks(t,!0),s.enter(t)):s.leave(t,()=>{Ks(t,!1)}):Ks(t,e))},beforeUnmount(t,{value:e}){Ks(t,e)}};function Ks(t,e){t.style.display=e?t._vod:"none"}const t1=Pe({patchProp:K_},M_);let pu;function n1(){return pu||(pu=f_(t1))}const s1=(...t)=>{const e=n1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=i1(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function i1(t){return Re(t)?document.querySelector(t):t}var r1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Hh;const Bi=t=>Hh=t,zh=Symbol();function Ra(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ci||(ci={}));function o1(){const t=Kd(!0),e=t.run(()=>He({}));let n=[],s=[];const i=co({install(r){Bi(i),i._a=r,r.provide(zh,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!r1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const jh=()=>{};function mu(t,e,n,s=jh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yd()&&Bm(i),i}function as(t,...e){t.slice().forEach(n=>{n(...e)})}const a1=t=>t();function Aa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ra(i)&&Ra(s)&&t.hasOwnProperty(n)&&!xe(s)&&!dn(s)?t[n]=Aa(i,s):t[n]=s}return t}const l1=Symbol();function c1(t){return!Ra(t)||!t.hasOwnProperty(l1)}const{assign:en}=Object;function u1(t){return!!(xe(t)&&t.effect)}function d1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=yg(n.state.value[t]);return en(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=co(ke(()=>{Bi(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=qh(t,c,e,n,s,!0),l}function qh(t,e,n={},s,i,r){let o;const a=en({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),He({});let C;function x(N){let F;c=u=!1,typeof N=="function"?(N(s.state.value[t]),F={type:ci.patchFunction,storeId:t,events:m}):(Aa(s.state.value[t],N),F={type:ci.patchObject,payload:N,storeId:t,events:m});const Y=C=Symbol();yl().then(()=>{C===Y&&(c=!0)}),u=!0,as(d,F,s.state.value[t])}const A=r?function(){const{state:F}=n,Y=F?F():{};this.$patch(fe=>{en(fe,Y)})}:jh;function P(){o.stop(),d=[],h=[],s._s.delete(t)}function z(N,F){return function(){Bi(s);const Y=Array.from(arguments),fe=[],D=[];function le(se){fe.push(se)}function Ve(se){D.push(se)}as(h,{args:Y,name:N,store:J,after:le,onError:Ve});let Ke;try{Ke=F.apply(this&&this.$id===t?this:J,Y)}catch(se){throw as(D,se),se}return Ke instanceof Promise?Ke.then(se=>(as(fe,se),se)).catch(se=>(as(D,se),Promise.reject(se))):(as(fe,Ke),Ke)}}const M={_p:s,$id:t,$onAction:mu.bind(null,h),$patch:x,$reset:A,$subscribe(N,F={}){const Y=mu(d,N,F.detached,()=>fe()),fe=o.run(()=>zn(()=>s.state.value[t],D=>{(F.flush==="sync"?u:c)&&N({storeId:t,type:ci.direct,events:m},D)},en({},l,F)));return Y},$dispose:P},J=Wi(M);s._s.set(t,J);const ge=s._a&&s._a.runWithContext||a1,ve=s._e.run(()=>(o=Kd(),ge(()=>o.run(e))));for(const N in ve){const F=ve[N];if(xe(F)&&!u1(F)||dn(F))r||(_&&c1(F)&&(xe(F)?F.value=_[N]:Aa(F,_[N])),s.state.value[t][N]=F);else if(typeof F=="function"){const Y=z(N,F);ve[N]=Y,a.actions[N]=F}}return en(J,ve),en(ie(J),ve),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:N=>{x(F=>{en(F,N)})}}),s._p.forEach(N=>{en(J,o.run(()=>N({store:J,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(J.$state,_),c=!0,u=!0,J}function h1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=a_();return a=a||(c?St(zh,null):null),a&&Bi(a),a=Hh,a._s.has(s)||(r?qh(s,e,i,a):d1(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function f1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function zo(t,e){const n={};for(const s in e){const i=e[s];n[s]=vt(i)?i.map(t):t(i)}return n}const ui=()=>{},vt=Array.isArray,p1=/\/$/,m1=t=>t.replace(p1,"");function jo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=v1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function g1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&bs(e.matched[s],n.matched[i])&&Gh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!y1(t[n],e[n]))return!1;return!0}function y1(t,e){return vt(t)?gu(t,e):vt(e)?gu(e,t):t===e}function gu(t,e){return vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function v1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));const qo="";function w1(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m1(t)}const C1=/^[^#]+#/;function E1(t,e){return t.replace(C1,"#")+e}function b1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const I1=()=>({left:window.pageXOffset,top:window.pageYOffset});function T1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=b1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _u(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function S1(t,e){Pa.set(t,e)}function k1(t){const e=Pa.get(t);return Pa.delete(t),e}function x1(t=""){let e=[],n=[qo],s=0;t=w1(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:Si.pop};for(const h of e)h(a,l,d)}const o={location:qo,state:{},base:t,createHref:E1.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[qo],s=0},go(a,l=!0){const c=this.location,u=a<0?Sr.back:Sr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function R1(t){return typeof t=="string"||t&&typeof t=="object"}function Kh(t){return typeof t=="string"||typeof t=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yh=Symbol("");var yu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yu||(yu={}));function Is(t,e){return be(new Error,{type:t,[Yh]:!0},e)}function Dt(t,e){return t instanceof Error&&Yh in t&&(e==null||!!(t.type&e))}const vu="[^/]+?",A1={sensitive:!1,strict:!1,start:!0,end:!0},P1=/[.+*?^${}()[\]/\\]/g;function N1(t,e){const n=be({},A1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(P1,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:C,optional:x,regexp:A}=h;r.push({name:_,repeatable:C,optional:x});const P=A||vu;if(P!==vu){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+M.message)}}let z=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(z=x&&c.length<2?`(?:/${z})`:"/"+z),x&&(z+="?"),i+=z,m+=20,x&&(m+=-8),C&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:C,optional:x}=m,A=_ in c?c[_]:"";if(vt(A)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=vt(A)?A.join("/"):A;if(!P)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function O1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function M1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=O1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wu(s))return 1;if(wu(i))return-1}return i.length-s.length}function wu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const D1={type:0,value:""},L1=/[a-zA-Z0-9_]/;function F1(t){if(!t)return[[]];if(t==="/")return[[D1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:L1.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function U1(t,e,n){const s=N1(F1(t.path),n),i=be(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $1(t,e){const n=[],s=new Map;e=bu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=W1(u);_.aliasOf=h&&h.record;const C=bu(e,u),x=[_];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of z)x.push(be({},_,{components:h?h.record.components:_.components,path:M,aliasOf:h?h.record:_}))}let A,P;for(const z of x){const{path:M}=z;if(d&&M[0]!=="/"){const J=d.record.path,ge=J[J.length-1]==="/"?"":"/";z.path=d.record.path+(M&&ge+M)}if(A=U1(z,d,C),h?h.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),m&&u.name&&!Eu(A)&&o(u.name)),_.children){const J=_.children;for(let ge=0;ge<J.length;ge++)r(J[ge],A,h&&h.children[ge])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:ui}function o(u){if(Kh(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&M1(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Qh(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Eu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,C;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Is(1,{location:u});C=h.record.name,m=be(Cu(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Cu(u.params,h.keys.map(P=>P.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(P=>P.re.test(_)),h&&(m=h.parse(_),C=h.record.name);else{if(h=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw Is(1,{location:u,currentLocation:d});C=h.record.name,m=be({},d.params,u.params),_=h.stringify(m)}const x=[];let A=h;for(;A;)x.unshift(A.record),A=A.parent;return{name:C,path:_,params:m,matched:x,meta:V1(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Cu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function W1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:B1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function B1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Eu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function V1(t){return t.reduce((e,n)=>be(e,n.meta),{})}function bu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qh(t,e){return e.children.some(n=>n===t||Qh(t,n))}const Jh=/#/g,H1=/&/g,z1=/\//g,j1=/=/g,q1=/\?/g,Xh=/\+/g,G1=/%5B/g,K1=/%5D/g,Zh=/%5E/g,Y1=/%60/g,ef=/%7B/g,Q1=/%7C/g,tf=/%7D/g,J1=/%20/g;function kl(t){return encodeURI(""+t).replace(Q1,"|").replace(G1,"[").replace(K1,"]")}function X1(t){return kl(t).replace(ef,"{").replace(tf,"}").replace(Zh,"^")}function Na(t){return kl(t).replace(Xh,"%2B").replace(J1,"+").replace(Jh,"%23").replace(H1,"%26").replace(Y1,"`").replace(ef,"{").replace(tf,"}").replace(Zh,"^")}function Z1(t){return Na(t).replace(j1,"%3D")}function e0(t){return kl(t).replace(Jh,"%23").replace(q1,"%3F")}function t0(t){return t==null?"":e0(t).replace(z1,"%2F")}function kr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Xh," "),o=r.indexOf("="),a=kr(o<0?r:r.slice(0,o)),l=o<0?null:kr(r.slice(o+1));if(a in e){let c=e[a];vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Iu(t){let e="";for(let n in t){const s=t[n];if(n=Z1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(s)?s.map(r=>r&&Na(r)):[s&&Na(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function s0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const i0=Symbol(""),Tu=Symbol(""),xl=Symbol(""),nf=Symbol(""),Oa=Symbol("");function Ys(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Is(4,{from:n,to:e})):d instanceof Error?a(d):R1(d)?a(Is(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Go(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(r0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(nn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=f1(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&nn(h,n,s,r,o)()}))}}return i}function r0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Su(t){const e=St(xl),n=St(nf),s=ke(()=>e.resolve(Qe(t.to))),i=ke(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(bs.bind(null,u));if(h>-1)return h;const m=ku(l[c-2]);return c>1&&ku(u)===m&&d[d.length-1].path!==m?d.findIndex(bs.bind(null,l[c-2])):h}),r=ke(()=>i.value>-1&&c0(n.params,s.value.params)),o=ke(()=>i.value>-1&&i.value===n.matched.length-1&&Gh(n.params,s.value.params));function a(l={}){return l0(l)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(ui):Promise.resolve()}return{route:s,href:ke(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const o0=Eh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Su,setup(t,{slots:e}){const n=Wi(Su(t)),{options:s}=St(xl),i=ke(()=>({[xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Sl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),a0=o0;function l0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function c0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ku(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xu=(t,e,n)=>t??e??n,u0=Eh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(Oa),i=ke(()=>t.route||s.value),r=St(Tu,0),o=ke(()=>{let c=Qe(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ke(()=>i.value.matched[o.value]);fr(Tu,ke(()=>o.value+1)),fr(i0,a),fr(Oa,i);const l=He();return zn(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!bs(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Ru(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=Sl(h,be({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ru(n.default,{Component:x,route:c})||x}}});function Ru(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sf=u0;function d0(t){const e=$1(t.routes,t),n=t.parseQuery||n0,s=t.stringifyQuery||Iu,i=t.history,r=Ys(),o=Ys(),a=Ys(),l=mg(Xt);let c=Xt;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,v=>""+v),d=zo.bind(null,t0),h=zo.bind(null,kr);function m(v,O){let k,U;return Kh(v)?(k=e.getRecordMatcher(v),U=O):U=v,e.addRoute(U,k)}function _(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=be({},O||l.value),typeof v=="string"){const g=jo(n,v,O.path),y=e.resolve({path:g.path},O),w=i.createHref(g.fullPath);return be(g,y,{params:h(y.params),hash:kr(g.hash),redirectedFrom:void 0,href:w})}let k;if("path"in v)k=be({},v,{path:jo(n,v.path,O.path).path});else{const g=be({},v.params);for(const y in g)g[y]==null&&delete g[y];k=be({},v,{params:d(g)}),O.params=d(O.params)}const U=e.resolve(k,O),ue=v.hash||"";U.params=u(h(U.params));const f=g1(s,be({},v,{hash:X1(ue),path:U.path})),p=i.createHref(f);return be({fullPath:f,hash:ue,query:s===Iu?s0(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?jo(n,v,l.value.path):be({},v)}function z(v,O){if(c!==v)return Is(8,{from:O,to:v})}function M(v){return ve(v)}function J(v){return M(be(P(v),{replace:!0}))}function ge(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),be({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ve(v,O){const k=c=A(v),U=l.value,ue=v.state,f=v.force,p=v.replace===!0,g=ge(k);if(g)return ve(be(P(g),{state:typeof g=="object"?be({},ue,g.state):ue,force:f,replace:p}),O||k);const y=k;y.redirectedFrom=O;let w;return!f&&_1(s,U,k)&&(w=Is(16,{to:y,from:U}),Ct(U,U,!0,!1)),(w?Promise.resolve(w):Y(y,U)).catch(E=>Dt(E)?Dt(E,2)?E:Kt(E):ce(E,y,U)).then(E=>{if(E){if(Dt(E,2))return ve(be({replace:p},P(E.to),{state:typeof E.to=="object"?be({},ue,E.to.state):ue,force:f}),O||y)}else E=D(y,U,!0,p,ue);return fe(y,U,E),E})}function N(v,O){const k=z(v,O);return k?Promise.reject(k):Promise.resolve()}function F(v){const O=is.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Y(v,O){let k;const[U,ue,f]=h0(v,O);k=Go(U.reverse(),"beforeRouteLeave",v,O);for(const g of U)g.leaveGuards.forEach(y=>{k.push(nn(y,v,O))});const p=N.bind(null,v,O);return k.push(p),ze(k).then(()=>{k=[];for(const g of r.list())k.push(nn(g,v,O));return k.push(p),ze(k)}).then(()=>{k=Go(ue,"beforeRouteUpdate",v,O);for(const g of ue)g.updateGuards.forEach(y=>{k.push(nn(y,v,O))});return k.push(p),ze(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(vt(g.beforeEnter))for(const y of g.beforeEnter)k.push(nn(y,v,O));else k.push(nn(g.beforeEnter,v,O));return k.push(p),ze(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=Go(f,"beforeRouteEnter",v,O),k.push(p),ze(k))).then(()=>{k=[];for(const g of o.list())k.push(nn(g,v,O));return k.push(p),ze(k)}).catch(g=>Dt(g,8)?g:Promise.reject(g))}function fe(v,O,k){a.list().forEach(U=>F(()=>U(v,O,k)))}function D(v,O,k,U,ue){const f=z(v,O);if(f)return f;const p=O===Xt,g=cs?history.state:{};k&&(U||p?i.replace(v.fullPath,be({scroll:p&&g&&g.scroll},ue)):i.push(v.fullPath,ue)),l.value=v,Ct(v,O,k,p),Kt()}let le;function Ve(){le||(le=i.listen((v,O,k)=>{if(!er.listening)return;const U=A(v),ue=ge(U);if(ue){ve(be(ue,{replace:!0}),U).catch(ui);return}c=U;const f=l.value;cs&&S1(_u(f.fullPath,k.delta),I1()),Y(U,f).catch(p=>Dt(p,12)?p:Dt(p,2)?(ve(p.to,U).then(g=>{Dt(g,20)&&!k.delta&&k.type===Si.pop&&i.go(-1,!1)}).catch(ui),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ce(p,U,f))).then(p=>{p=p||D(U,f,!1),p&&(k.delta&&!Dt(p,8)?i.go(-k.delta,!1):k.type===Si.pop&&Dt(p,20)&&i.go(-1,!1)),fe(U,f,p)}).catch(ui)}))}let Ke=Ys(),se=Ys(),pe;function ce(v,O,k){Kt(v);const U=se.list();return U.length?U.forEach(ue=>ue(v,O,k)):console.error(v),Promise.reject(v)}function Ot(){return pe&&l.value!==Xt?Promise.resolve():new Promise((v,O)=>{Ke.add([v,O])})}function Kt(v){return pe||(pe=!v,Ve(),Ke.list().forEach(([O,k])=>v?k(v):O()),Ke.reset()),v}function Ct(v,O,k,U){const{scrollBehavior:ue}=t;if(!cs||!ue)return Promise.resolve();const f=!k&&k1(_u(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return yl().then(()=>ue(v,O,f)).then(p=>p&&T1(p)).catch(p=>ce(p,v,O))}const Xe=v=>i.go(v);let ss;const is=new Set,er={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:x,getRoutes:C,resolve:A,options:t,push:M,replace:J,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Ot,install(v){const O=this;v.component("RouterLink",a0),v.component("RouterView",sf),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),cs&&!ss&&l.value===Xt&&(ss=!0,M(i.location).catch(ue=>{}));const k={};for(const ue in Xt)Object.defineProperty(k,ue,{get:()=>l.value[ue],enumerable:!0});v.provide(xl,O),v.provide(nf,oh(k)),v.provide(Oa,l);const U=v.unmount;is.add(v),v.unmount=function(){is.delete(v),is.size<1&&(c=Xt,le&&le(),le=null,l.value=Xt,ss=!1,pe=!1),U()}}};function ze(v){return v.reduce((O,k)=>O.then(()=>F(k)),Promise.resolve())}return er}function h0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>bs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>bs(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Fs(e)},Fs=function(t){return new Error("Firebase Database ("+rf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},f0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(of(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new p0;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const af=function(t){const e=of(t);return Rl.encodeByteArray(e,!0)},xr=function(t){return af(t).replace(/\./g,"")},Rr=function(t){try{return Rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return lf(void 0,t)}function lf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!g0(n)||(t[n]=lf(t[n],e[n]));return t}function g0(t){return t!=="__proto__"}/**
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
 */function _0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const y0=()=>_0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},w0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return y0()||v0()||w0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cf=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C0=t=>{const e=cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uf=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config},df=t=>{var e;return(e=Al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function E0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xr(JSON.stringify(n)),xr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function b0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I0(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ff(){return rf.NODE_ADMIN===!0}function T0(){try{return typeof indexedDB=="object"}catch{return!1}}function S0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=k0,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?x0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function x0(t,e){return t.replace(R0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const R0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ki(Rr(r[0])||""),n=ki(Rr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},A0=function(t){const e=pf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},P0=function(t){const e=pf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Au(r)&&Au(o)){if(!Pr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Au(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function O0(t,e){const n=new M0(t,e);return n.subscribe.bind(n)}class M0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");D0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ko),i.error===void 0&&(i.error=Ko),i.complete===void 0&&(i.complete=Ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ko(){}function Nl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Co=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class F0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($0(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:U0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U0(t){return t===Pn?void 0:t}function $0(t){return t.instantiationMode==="EAGER"}/**
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
 */class W0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const B0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},V0=he.INFO,H0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},z0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=H0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ol{constructor(e){this.name=e,this._logLevel=V0,this._logHandler=z0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const j0=(t,e)=>e.some(n=>t instanceof n);let Pu,Nu;function q0(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G0(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mf=new WeakMap,Da=new WeakMap,gf=new WeakMap,Yo=new WeakMap,Ml=new WeakMap;function K0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mf.set(n,t)}).catch(()=>{}),Ml.set(e,t),e}function Y0(t){if(Da.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Da.set(t,e)}let La={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q0(t){La=t(La)}function J0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Qo(this),e,...n);return gf.set(s,e.sort?e.sort():[e]),fn(s)}:G0().includes(t)?function(...e){return t.apply(Qo(this),e),fn(mf.get(this))}:function(...e){return fn(t.apply(Qo(this),e))}}function X0(t){return typeof t=="function"?J0(t):(t instanceof IDBTransaction&&Y0(t),j0(t,q0())?new Proxy(t,La):t)}function fn(t){if(t instanceof IDBRequest)return K0(t);if(Yo.has(t))return Yo.get(t);const e=X0(t);return e!==t&&(Yo.set(t,e),Ml.set(e,t)),e}const Qo=t=>Ml.get(t);function Z0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=fn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ey=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],Jo=new Map;function Ou(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jo.get(e))return Jo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ty.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ey.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Jo.set(e,r),r}Q0(t=>({...t,get:(e,n,s)=>Ou(e,n)||t.get(e,n,s),has:(e,n)=>!!Ou(e,n)||t.has(e,n)}));/**
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
 */class ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fa="@firebase/app",Mu="0.9.15";/**
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
 */const Yn=new Ol("@firebase/app"),iy="@firebase/app-compat",ry="@firebase/analytics-compat",oy="@firebase/analytics",ay="@firebase/app-check-compat",ly="@firebase/app-check",cy="@firebase/auth",uy="@firebase/auth-compat",dy="@firebase/database",hy="@firebase/database-compat",fy="@firebase/functions",py="@firebase/functions-compat",my="@firebase/installations",gy="@firebase/installations-compat",_y="@firebase/messaging",yy="@firebase/messaging-compat",vy="@firebase/performance",wy="@firebase/performance-compat",Cy="@firebase/remote-config",Ey="@firebase/remote-config-compat",by="@firebase/storage",Iy="@firebase/storage-compat",Ty="@firebase/firestore",Sy="@firebase/firestore-compat",ky="firebase",xy="10.1.0";/**
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
 */const Ua="[DEFAULT]",Ry={[Fa]:"fire-core",[iy]:"fire-core-compat",[oy]:"fire-analytics",[ry]:"fire-analytics-compat",[ly]:"fire-app-check",[ay]:"fire-app-check-compat",[cy]:"fire-auth",[uy]:"fire-auth-compat",[dy]:"fire-rtdb",[hy]:"fire-rtdb-compat",[fy]:"fire-fn",[py]:"fire-fn-compat",[my]:"fire-iid",[gy]:"fire-iid-compat",[_y]:"fire-fcm",[yy]:"fire-fcm-compat",[vy]:"fire-perf",[wy]:"fire-perf-compat",[Cy]:"fire-rc",[Ey]:"fire-rc-compat",[by]:"fire-gcs",[Iy]:"fire-gcs-compat",[Ty]:"fire-fst",[Sy]:"fire-fst-compat","fire-js":"fire-js",[ky]:"fire-js-all"};/**
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
 */const Nr=new Map,$a=new Map;function Ay(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if($a.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Nr.values())Ay(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Py={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new Vi("app","Firebase",Py);/**
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
 */class Ny{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=xy;function _f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw pn.create("no-options");const r=Nr.get(i);if(r){if(Pr(n,r.options)&&Pr(s,r.config))return r;throw pn.create("duplicate-app",{appName:i})}const o=new W0(i);for(const l of $a.values())o.addComponent(l);const a=new Ny(n,s,o);return Nr.set(i,a),a}function yf(t=Ua){const e=Nr.get(t);if(!e&&t===Ua&&uf())return _f();if(!e)throw pn.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=Ry[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}Ss(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Oy="firebase-heartbeat-database",My=1,xi="firebase-heartbeat-store";let Xo=null;function vf(){return Xo||(Xo=Z0(Oy,My,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),Xo}async function Dy(t){try{return await(await vf()).transaction(xi).objectStore(xi).get(wf(t))}catch(e){if(e instanceof Sn)Yn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function Du(t,e){try{const s=(await vf()).transaction(xi,"readwrite");await s.objectStore(xi).put(e,wf(t)),await s.done}catch(n){if(n instanceof Sn)Yn.warn(n.message);else{const s=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(s.message)}}}function wf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ly=1024,Fy=30*24*60*60*1e3;class Uy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Fy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lu(),{heartbeatsToSend:n,unsentEntries:s}=$y(this._heartbeatsCache.heartbeats),i=xr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lu(){return new Date().toISOString().substring(0,10)}function $y(t,e=Ly){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Wy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T0()?S0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(t){return xr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function By(t){Ss(new Kn("platform-logger",e=>new ny(e),"PRIVATE")),Ss(new Kn("heartbeat",e=>new Uy(e),"PRIVATE")),mn(Fa,Mu,t),mn(Fa,Mu,"esm2017"),mn("fire-js","")}By("");var Vy="firebase",Hy="10.1.0";/**
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
 */mn(Vy,Hy,"app");const zy={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},Cf=_f(zy);function Ll(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jy=Ef,bf=new Vi("auth","Firebase",Ef());/**
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
 */const Or=new Ol("@firebase/auth");function qy(t,...e){Or.logLevel<=he.WARN&&Or.warn(`Auth (${$s}): ${t}`,...e)}function gr(t,...e){Or.logLevel<=he.ERROR&&Or.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw Fl(t,...e)}function xt(t,...e){return Fl(t,...e)}function Gy(t,e,n){const s=Object.assign(Object.assign({},jy()),{[e]:n});return new Vi("auth","Firebase",s).create(e,{appName:t.name})}function Fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bf.create(t,...e)}function j(t,e,...n){if(!t)throw Fl(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function Ht(t,e){t||Ft(e)}/**
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
 */function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ky(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ky()||b0()||"connection"in navigator)?navigator.onLine:!0}function Qy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Pl()||hf()}get(){return Yy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class If{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xy=new Hi(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ws(t,e,n,s,i={}){return Tf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),If.fetch()(Sf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Tf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jy),e);try{const i=new Zy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw cr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw cr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gy(t,u,c);wt(t,u)}}catch(i){if(i instanceof Sn)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function Eo(t,e,n,s,i={}){const r=await Ws(t,e,n,s,i);return"mfaPendingCredential"in r&&wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ul(t.config,i):`${t.config.apiScheme}://${i}`}class Zy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),Xy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function ev(t,e){return Ws(t,"POST","/v1/accounts:delete",e)}async function tv(t,e){return Ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nv(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=$l(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:di(Zo(i.auth_time)),issuedAtTime:di(Zo(i.iat)),expirationTime:di(Zo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zo(t){return Number(t)*1e3}function $l(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rr(n);return i?JSON.parse(i):(gr("Failed to decode base64 JWT payload"),null)}catch(i){return gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sv(t){const e=$l(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ri(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&iv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ri(t,tv(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lv(r.providerUserInfo):[],a=av(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new kf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function ov(t){const e=rt(t);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function av(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lv(t){return t.map(e=>{var{providerId:n}=e,s=Ll(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function cv(t,e){const n=await Tf(t,{},async()=>{const s=Us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",If.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await cv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ai;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Zt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nv(this,e)}reload(){return ov(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ri(this,ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:J,providerData:ge,stsTokenManager:ve}=n;j(z&&ve,e,"internal-error");const N=Ai.fromJSON(this.name,ve);j(typeof z=="string",e,"internal-error"),Zt(d,e.name),Zt(h,e.name),j(typeof M=="boolean",e,"internal-error"),j(typeof J=="boolean",e,"internal-error"),Zt(m,e.name),Zt(_,e.name),Zt(C,e.name),Zt(x,e.name),Zt(A,e.name),Zt(P,e.name);const F=new qn({uid:z,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:J,photoURL:_,phoneNumber:m,tenantId:C,stsTokenManager:N,createdAt:A,lastLoginAt:P});return ge&&Array.isArray(ge)&&(F.providerData=ge.map(Y=>Object.assign({},Y))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ai;i.updateFromServerResponse(n);const r=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Mr(r),r}}/**
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
 */const $u=new Map;function Ut(t){Ht(t instanceof Function,"Expected a class definition");let e=$u.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$u.set(t,e),e)}/**
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
 */class xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xf.type="NONE";const Wu=xf;/**
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
 */function _r(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_r(this.userKey,i.apiKey,r),this.fullPersistenceKey=_r("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ms(Ut(Wu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ut(Wu);const o=_r(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=qn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ms(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ms(r,e,s))}}/**
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
 */function Bu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Of(e))return"Blackberry";if(Mf(e))return"Webos";if(Wl(e))return"Safari";if((e.includes("chrome/")||Af(e))&&!e.includes("edge/"))return"Chrome";if(Nf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rf(t=Ge()){return/firefox\//i.test(t)}function Wl(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Af(t=Ge()){return/crios\//i.test(t)}function Pf(t=Ge()){return/iemobile/i.test(t)}function Nf(t=Ge()){return/android/i.test(t)}function Of(t=Ge()){return/blackberry/i.test(t)}function Mf(t=Ge()){return/webos/i.test(t)}function bo(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uv(t=Ge()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dv(){return I0()&&document.documentMode===10}function Df(t=Ge()){return bo(t)||Nf(t)||Mf(t)||Of(t)||/windows phone/i.test(t)||Pf(t)}function hv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Lf(t,e=[]){let n;switch(t){case"Browser":n=Bu(Ge());break;case"Worker":n=`${Bu(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${s}`}async function Ff(t,e){return Ws(t,"GET","/v2/recaptchaConfig",zi(t,e))}function Vu(t){return t!==void 0&&t.enterprise!==void 0}class Uf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function fv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $f(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",fv().appendChild(s)})}function pv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mv="https://www.google.com/recaptcha/enterprise.js?render=",gv="recaptcha-enterprise",_v="NO_RECAPTCHA";class Wf{constructor(e){this.type=gv,this.auth=ji(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ff(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Vu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(_v)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Vu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$f(mv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hu(t,e,n,s=!1){const i=new Wf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class yv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class vv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new yv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}async initializeRecaptchaConfig(){const e=await Ff(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Uf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Wf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ji(t){return rt(t)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=O0(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wv(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Pr(r,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function Cv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ev(t,e,n){const s=ji(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Bf(e),{host:o,port:a}=bv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Iv()}function Bf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bv(t){const e=Bf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ju(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ju(o)}}}function ju(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Iv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function Tv(t,e){return Ws(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ea(t,e){return Eo(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
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
 */async function Sv(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function kv(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
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
 */class Pi extends Bl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hu(e,s,"signInWithPassword");return ea(e,i)}else return ea(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Hu(e,s,"signInWithPassword");return ea(e,r)}else return Promise.reject(i)});case"emailLink":return Sv(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Tv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kv(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Eo(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
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
 */const xv="http://localhost";class Qn extends Bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ll(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Us(n)}return e}}/**
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
 */function Rv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Av(t){const e=ni(si(t)).link,n=e?ni(si(e)).deep_link_id:null,s=ni(si(t)).deep_link_id;return(s?ni(si(s)).link:null)||s||n||e||t}class Vl{constructor(e){var n,s,i,r,o,a;const l=ni(si(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=Rv((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Av(e);try{return new Vl(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vl.parseLink(n);return j(s,"argument-error"),Pi._fromEmailAndCode(e,s.code,s.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qi extends Vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends qi{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class on extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class an extends qi{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class ln extends qi{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await qn._fromIdTokenResponse(e,s,i),o=qu(s);return new ks({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=qu(s);return new ks({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function qu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dr extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Dr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Dr(e,n,s,i)}}function Hf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Dr._fromErrorAndOperation(t,r,e,s):r})}async function Pv(t,e,n=!1){const s=await Ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",s)}/**
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
 */async function Nv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ri(t,Hf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=$l(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),ks._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),r}}/**
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
 */async function zf(t,e,n=!1){const s="signIn",i=await Hf(t,s,e),r=await ks._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Ov(t,e){return zf(ji(t),e)}function Mv(t,e,n){return Ov(rt(t),Bs.credential(e,n))}function Dv(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function Lv(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Fv(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}const Lr="__sak";/**
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
 */class jf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Uv(){const t=Ge();return Wl(t)||bo(t)}const $v=1e3,Wv=10;class qf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uv()&&hv(),this.fallbackToPolling=Df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);dv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qf.type="LOCAL";const Bv=qf;/**
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
 */class Gf extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gf.type="SESSION";const Kf=Gf;/**
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
 */function Vv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Io(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Vv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Io.receivers=[];/**
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
 */function Hl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Hl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rt(){return window}function zv(t){Rt().location.href=t}/**
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
 */function Yf(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function jv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gv(){return Yf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",Kv=1,Fr="firebaseLocalStorage",Jf="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function To(t,e){return t.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function Yv(){const t=indexedDB.deleteDatabase(Qf);return new Gi(t).toPromise()}function Ba(){const t=indexedDB.open(Qf,Kv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fr,{keyPath:Jf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fr)?e(s):(s.close(),await Yv(),e(await Ba()))})})}async function Gu(t,e,n){const s=To(t,!0).put({[Jf]:e,value:n});return new Gi(s).toPromise()}async function Qv(t,e){const n=To(t,!1).get(e),s=await new Gi(n).toPromise();return s===void 0?null:s.value}function Ku(t,e){const n=To(t,!0).delete(e);return new Gi(n).toPromise()}const Jv=800,Xv=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Xv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jv(),!this.activeServiceWorker)return;this.sender=new Hv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await Gu(e,Lr,"1"),await Ku(e,Lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Qv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ku(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=To(i,!1).getAll();return new Gi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const Zv=Xf;new Hi(3e4,6e4);/**
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
 */function e2(t,e){return e?Ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zl extends Bl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t2(t){return zf(t.auth,new zl(t),t.bypassAuthState)}function n2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Nv(n,new zl(t),t.bypassAuthState)}async function s2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Pv(n,new zl(t),t.bypassAuthState)}/**
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
 */class Zf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return s2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:wt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i2=new Hi(2e3,1e4);class us extends Zf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i2.get())};e()}}us.currentPopupAction=null;/**
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
 */const r2="pendingRedirect",yr=new Map;class o2 extends Zf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=yr.get(this.auth._key());if(!e){try{const s=await a2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}yr.set(this.auth._key(),e)}return this.bypassAuthState||yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a2(t,e){const n=u2(e),s=c2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function l2(t,e){yr.set(t._key(),e)}function c2(t){return Ut(t._redirectPersistence)}function u2(t){return _r(r2,t.config.apiKey,t.name)}async function d2(t,e,n=!1){const s=ji(t),i=e2(s,e),o=await new o2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const h2=10*60*1e3;class f2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ep(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
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
 */async function m2(t,e={}){return Ws(t,"GET","/v1/projects",e)}/**
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
 */const g2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_2=/^https?/;async function y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m2(t);for(const n of e)try{if(v2(n))return}catch{}wt(t,"unauthorized-domain")}function v2(t){const e=Wa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!_2.test(n))return!1;if(g2.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const w2=new Hi(3e4,6e4);function Qu(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C2(t){return new Promise((e,n)=>{var s,i,r;function o(){Qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qu(),n(xt(t,"network-request-failed"))},timeout:w2.get()})}if(!((i=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Rt().gapi)===null||r===void 0)&&r.load)o();else{const a=pv("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},$f(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vr=null,e})}let vr=null;function E2(t){return vr=vr||C2(t),vr}/**
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
 */const b2=new Hi(5e3,15e3),I2="__/auth/iframe",T2="emulator/auth/iframe",S2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x2(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ul(e,T2):`https://${t.config.authDomain}/${I2}`,s={apiKey:e.apiKey,appName:t.name,v:$s},i=k2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Us(s).slice(1)}`}async function R2(t){const e=await E2(t),n=Rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:x2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Rt().setTimeout(()=>{r(o)},b2.get());function l(){Rt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const A2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,N2=600,O2="_blank",M2="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D2(t,e,n,s=P2,i=N2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},A2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ge().toLowerCase();n&&(a=Af(c)?O2:n),Rf(c)&&(e=e||M2,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(uv(c)&&a!=="_self")return L2(e||"",a),new Ju(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Ju(d)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const F2="__/auth/handler",U2="emulator/auth/handler",$2=encodeURIComponent("fac");async function Xu(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$s,eventId:i};if(e instanceof Vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof qi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${$2}=${encodeURIComponent(l)}`:"";return`${W2(t)}?${Us(a).slice(1)}${c}`}function W2({config:t}){return t.emulator?Ul(t,U2):`https://${t.authDomain}/${F2}`}/**
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
 */const ta="webStorageSupport";class B2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=d2,this._overrideRedirectResult=l2}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xu(e,n,s,Wa(),i);return D2(e,o,Hl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Xu(e,n,s,Wa(),i);return zv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await R2(e),s=new f2(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ta,{type:ta},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ta];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Df()||Wl()||bo()}}const V2=B2;var Zu="@firebase/auth",ed="1.1.0";/**
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
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j2(t){Ss(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lf(t)},c=new vv(s,i,r,l);return Cv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ss(new Kn("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(s=>new H2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Zu,ed,z2(t)),mn(Zu,ed,"esm2017")}/**
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
 */const q2=5*60,G2=df("authIdTokenMaxAge")||q2;let td=null;const K2=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>G2)return;const i=n==null?void 0:n.token;td!==i&&(td=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y2(t=yf()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wv(t,{popupRedirectResolver:V2,persistence:[Zv,Bv,Kf]}),s=df("authTokenSyncURL");if(s){const r=K2(s);Lv(n,r,()=>r(n.currentUser)),Dv(n,o=>r(o))}const i=cf("auth");return i&&Ev(n,`http://${i}`),n}j2("Browser");const jl=Y2(Cf),Ur=He({}),Nn=He({});Fv(jl,async t=>{if(t){Ur.value=t,Nn.value=await lb(`users/${t.uid}`);for(const{observable:e,path:n}of wm)Nn.value["game-data"]&&Nn.value["game-data"]["tileswap-naenae"]&&Nn.value["game-data"]["tileswap-naenae"][n]&&(e.value=Nn.value["game-data"]["tileswap-naenae"][n])}else Ur.value={},Nn.value={}});const ql=ke(()=>Ur.value);ke(()=>Nn.value);const Gl=ke(()=>Object.keys(Ur.value).length>0),Q2=async(t,e)=>await Mv(jl,t,e),Va=async()=>await jl.signOut(),nd="@firebase/database",sd="1.0.1";/**
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
 */let tp="";function J2(t){tp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new X2(e)}}catch{}return new Z2},Un=np("localStorage"),Ha=np("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Ol("@firebase/database"),ew=function(){let t=1;return function(){return t++}}(),sp=function(t){const e=L0(t),n=new N0;n.update(e);const s=n.digest();return Rl.encodeByteArray(s)},Ki=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ki.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let Gn=null,id=!0;const tw=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_s.logLevel=he.VERBOSE,Gn=_s.log.bind(_s),e&&Ha.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,Ha.remove("logging_enabled"))},je=function(...t){if(id===!0&&(id=!1,Gn===null&&Ha.get("logging_enabled")===!0&&tw(!0)),Gn){const e=Ki.apply(null,t);Gn(e)}},Yi=function(t){return function(...e){je(t,...e)}},za=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ki(...t);_s.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ki(...t)}`;throw _s.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+Ki(...t);_s.warn(e)},nw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ip=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xs="[MIN_NAME]",Jn="[MAX_NAME]",Vs=function(t,e){if(t===e)return 0;if(t===xs||e===Jn)return-1;if(e===xs||t===Jn)return 1;{const n=rd(t),s=rd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iw=function(t,e){return t===e?0:t<e?-1:1},Qs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Kl=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Kl(t[e[s]]);return n+="}",n},rp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function it(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const op=function(t){T(!ip(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},rw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ow=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lw=new RegExp("^-?(0*)\\d{1,10}$"),cw=-2147483648,uw=2147483647,rd=function(t){if(lw.test(t)){const e=Number(t);if(e>=cw&&e<=uw)return e}return null},Hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},dw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ys.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="5",ap="v",lp="s",cp="r",up="f",dp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hp="ls",fp="p",ja="ac",pp="websocket",mp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Un.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Un.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _p(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===pp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pw(t)&&(n.ns=t.namespace);const i=[];return it(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.counters_={}}incrementCounter(e,n=1){qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={},sa={};function Ql(t){const e=t.toString();return na[e]||(na[e]=new mw),na[e]}function gw(t,e){const n=t.toString();return sa[n]||(sa[n]=e()),sa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Hs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="start",yw="close",vw="pLPCommand",ww="pRTLPCB",yp="id",vp="pw",wp="ser",Cw="cb",Ew="seg",bw="ts",Iw="d",Tw="dframe",Cp=1870,Ep=30,Sw=Cp-Ep,kw=25e3,xw=3e4;class ds{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yi(e),this.stats_=Ql(n),this.urlFn=l=>(this.appCheckToken&&(l[ja]=this.appCheckToken),_p(n,mp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _w(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xw)),sw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===od)this.id=a,this.password=l;else if(o===yw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[od]="t",s[wp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ap]=Yl,this.transportSessionId&&(s[lp]=this.transportSessionId),this.lastSessionId&&(s[hp]=this.lastSessionId),this.applicationId&&(s[fp]=this.applicationId),this.appCheckToken&&(s[ja]=this.appCheckToken),typeof location<"u"&&location.hostname&&dp.test(location.hostname)&&(s[cp]=up);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ds.forceAllow_=!0}static forceDisallow(){ds.forceDisallow_=!0}static isAvailable(){return ds.forceAllow_?!0:!ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rw()&&!ow()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=af(n),i=rp(s,Sw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Tw]="t",s[yp]=e,s[vp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ew(),window[vw+this.uniqueCallbackIdentifier]=e,window[ww+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yp]=this.myID,e[vp]=this.myPW,e[wp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ep+s.length<=Cp;){const o=this.pendingSegs.shift();s=s+"&"+Ew+i+"="+o.seg+"&"+bw+i+"="+o.ts+"&"+Iw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(kw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=16384,Aw=45e3;let $r=null;typeof MozWebSocket<"u"?$r=MozWebSocket:typeof WebSocket<"u"&&($r=WebSocket);class ft{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yi(this.connId),this.stats_=Ql(n),this.connURL=ft.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ap]=Yl,typeof location<"u"&&location.hostname&&dp.test(location.hostname)&&(o[cp]=up),n&&(o[lp]=n),s&&(o[hp]=s),i&&(o[ja]=i),r&&(o[fp]=r),_p(e,pp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Un.set("previous_websocket_failure",!0);try{let s;ff(),this.mySock=new $r(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$r!==null&&!ft.forceDisallow_}static previouslyFailed(){return Un.isInMemoryStorage||Un.get("previous_websocket_failure")===!0}markConnectionHealthy(){Un.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ki(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rp(n,Rw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Aw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ds,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let s=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ft];else{const i=this.transports_=[];for(const r of Ni.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ni.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=6e4,Nw=5e3,Ow=10*1024,Mw=100*1024,ia="t",ad="d",Dw="s",ld="r",Lw="e",cd="o",ud="a",dd="n",hd="p",Fw="h";class Uw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yi("c:"+this.id+":"),this.transportManager_=new Ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ow?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ia in e){const n=e[ia];n===ud?this.upgradeIfSecondaryHealthy_():n===ld?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qs("t",e),s=Qs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ud,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qs("t",e),s=Qs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qs(ia,e);if(ad in e){const s=e[ad];if(n===Fw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Dw?this.onConnectionShutdown_(s):n===ld?this.onReset_(s):n===Lw?za("Server Error: "+s):n===cd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):za("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yl!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Un.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ip{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=32,pd=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new me("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function Tp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $w(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Sp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=ne(t),s=ne(e);if(n===null)return e;if(n===s)return Je(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xp(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ww{constructor(e,n){this.errorPrefix_=n,this.parts_=Sp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Co(this.parts_[s]);Rp(this)}}function Bw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Co(e),Rp(t)}function Vw(t){const e=t.parts_.pop();t.byteLength_-=Co(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rp(t){if(t.byteLength_>pd)throw new Error(t.errorPrefix_+"has a key path longer than "+pd+" bytes ("+t.byteLength_+").");if(t.parts_.length>fd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fd+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Ip{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=1e3,Hw=60*5*1e3,md=30*1e3,zw=1.3,jw=3e4,qw="server_kill",gd=3;class Wt extends bp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Yi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=Hw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ff())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qt(e,"w")){const s=Ts(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||P0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=md)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=A0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):za("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jw&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Uw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{nt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(qw)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nt(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ma(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Kl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gd&&(this.reconnectDelay_=md,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tp.replace(/\./g,"-")]=1,Pl()?e["framework.cordova"]=1:hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wr.getInstance().currentlyOnline();return Ma(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(xs,e),i=new X(xs,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;class Ap extends So{static get __EMPTY_NODE(){return ur}static set __EMPTY_NODE(e){ur=e}compare(e,n){return Vs(e.name,n.name)}isDefinedOn(e){throw Fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Jn,ur)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,ur)}toString(){return".key"}}const vs=new Ap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=i??et.EMPTY_NODE,this.right=r??et.EMPTY_NODE}copy(e,n,s,i,r){return new Fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class Gw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new dr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new dr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new dr(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new Gw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e){return Vs(t.name,e.name)}function Zl(t,e){return Vs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;function Yw(t){qa=t}const Pp=function(t){return typeof t=="number"?"number:"+op(t):"string:"+t},Np=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qt(e,".sv"),"Priority must be a string or number.")}else T(t===qa||t.isEmpty(),"priority of unexpected type.");T(t===qa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Np(this.priorityNode_)}static set __childrenNodeConstructor(e){_d=e}static get __childrenNodeConstructor(){return _d}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:ne(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=op(this.value_):e+=this.value_,this.lazyHash_=sp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),r=Le.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op,Mp;function Qw(t){Op=t}function Jw(t){Mp=t}class Xw extends So{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Vs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Jn,new Le("[PRIORITY-POST]",Mp))}makePost(e,n){const s=Op(e);return new X(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new Xw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=Math.log(2);class eC{constructor(e){const n=r=>parseInt(Math.log(r)/Zw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Br=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),C=i(m+1,c);return d=t[m],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,_,C)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,C){const x=d-_,A=d;d-=_;const P=i(x+1,A),z=t[x],M=n?n(z):z;m(new Fe(M,z.node,C,null,P))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));C?h(x,Fe.BLACK):(h(x,Fe.BLACK),h(x,Fe.RED))}return u},o=new eC(t.length),a=r(o);return new et(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const ls={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ls&&Ie,"ChildrenNode.ts has not been loaded"),ra=ra||new $t({".priority":ls},{".priority":Ie}),ra}get(e){const n=Ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return qt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Br(s,e.getCompare()):a=ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=Ar(this.indexes_,(i,r)=>{const o=Ts(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Br(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ar(this.indexes_,i=>{if(i===ls)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Np(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new V(new et(Zl),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xs:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{T(ne(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pp(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qi?-1:0}withIndex(e){if(e===vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vs?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tC extends V{constructor(){super(new et(Zl),V.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Qi=new tC;Object.defineProperties(X,{MIN:{value:new X(xs,V.EMPTY_NODE)},MAX:{value:new X(Jn,Qi)}});Ap.__EMPTY_NODE=V.EMPTY_NODE;Le.__childrenNodeConstructor=V;Yw(Qi);Jw(Qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=!0;function Ue(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Ue(e))}if(!(t instanceof Array)&&nC){const n=[];let s=!1;if(it(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=Br(n,Kw,o=>o.name,Zl);if(s){const o=Br(n,Ie.getCompare());return new V(r,Ue(e),new $t({".priority":o},{".priority":Ie}))}else return new V(r,Ue(e),$t.Default)}else{let n=V.EMPTY_NODE;return it(t,(s,i)=>{if(qt(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}Qw(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC extends So{constructor(e){super(),this.indexPath_=e,T(!ee(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Vs(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Qi);return new X(Jn,e)}toString(){return Sp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends So{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Vs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=Ue(e);return new X(n,s)}toString(){return".value"}}const rC=new iC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Oi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,s)):o.trackChildChange(Mi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Oi(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Mi(i,r,o))}else s.trackChildChange(Rs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.indexedFilter_=new ec(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Di.getStartPost_(e),this.endPost_=Di.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new X(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new X(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new X(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new X(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Mi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Oi(n,d));const C=a.updateImmediateChild(n,V.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Rs(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Oi(c.name,c.node)),r.trackChildChange(Rs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lC(t){return t.loadsAllData()?new ec(t.getIndex()):t.hasLimit()?new aC(t):new Di(t)}function yd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===rC?n="$value":t.index_===vs?n="$key":(T(t.index_ instanceof sC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends bp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Yi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vr.getListenId_(e,s),a={};this.listens_[o]=a;const l=yd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ts(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Vr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yd(e._queryParams),s=e._path.toString(),i=new wo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Us(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ki(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(){return{value:null,children:new Map}}function Lp(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ne(e);t.children.has(s)||t.children.set(s,Hr());const i=t.children.get(s);e=ye(e),Lp(i,e,n)}}function Ga(t,e,n){t.value!==null?n(e,t.value):uC(t,(s,i)=>{const r=new me(e.toString()+"/"+s);Ga(i,r,n)})}function uC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&it(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=10*1e3,hC=30*1e3,fC=5*60*1e3;class pC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dC(e);const s=wd+(hC-wd)*Math.random();hi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;it(e,(i,r)=>{r>0&&qt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*fC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Fp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=gt.ACK_USER_WRITE,this.source=Fp()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new zr(ae(),n,this.revert)}}else return T(ne(this.path)===e,"operationForChild called for unrelated child."),new zr(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Li(this.source,ae()):new Li(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=gt.OVERWRITE}operationForChild(e){return ee(this.path)?new Xn(this.source,ae(),this.snap.getImmediateChild(e)):new Xn(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=gt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Xn(this.source,ae(),n.value):new Fi(this.source,ae(),n)}else return T(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fi(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(oC(o.childName,o.snapshotNode))}),Zs(t,i,"child_removed",e,s,n),Zs(t,i,"child_added",e,s,n),Zs(t,i,"child_moved",r,s,n),Zs(t,i,"child_changed",e,s,n),Zs(t,i,"value",e,s,n),i}function Zs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>yC(t,a,l)),o.forEach(a=>{const l=_C(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _C(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yC(t,e,n){if(e.childName==null||n.childName==null)throw Fs("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e){return{eventCache:t,serverCache:e}}function fi(t,e,n,s){return ko(new In(e,n,s),t.serverCache)}function Up(t,e,n,s){return ko(t.eventCache,new In(e,n,s))}function jr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const vC=()=>(oa||(oa=new et(iw)),oa);class we{constructor(e,n=vC()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return it(e,(s,i)=>{n=n.set(new me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(ee(e))return null;{const s=ne(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:De(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new we(null)}}set(e,n){if(ee(e))return new we(n,this.children);{const s=ne(e),r=(this.children.get(s)||new we(null)).set(ye(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(ee(e))return n;{const s=ne(e),r=(this.children.get(s)||new we(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),De(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=ne(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),De(n,i),s):new we(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new we(null))}}function pi(t,e,n){if(ee(e))return new yt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Je(i,e);return r=r.updateChild(o,n),new yt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new yt(r)}}}function Cd(t,e,n){let s=t;return it(n,(i,r)=>{s=pi(s,De(e,i),r)}),s}function Ed(t,e){if(ee(e))return yt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new yt(n)}}function Ka(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function bd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function gn(t,e){if(ee(e))return t;{const n=ns(t,e);return n!=null?new yt(new we(n)):new yt(t.writeTree_.subtree(e))}}function Ya(t){return t.writeTree_.isEmpty()}function As(t,e){return $p(ae(),t.writeTree_,e)}function $p(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$p(De(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){return Hp(e,t)}function wC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=pi(t.visibleWrites,e,n)),t.lastWriteId=s}function CC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function EC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bC(a,s.path)?i=!1:mt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return IC(t),!0;if(s.snap)t.visibleWrites=Ed(t.visibleWrites,s.path);else{const a=s.children;it(a,l=>{t.visibleWrites=Ed(t.visibleWrites,De(s.path,l))})}return!0}else return!1}function bC(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(De(t.path,n),e))return!0;return!1}function IC(t){t.visibleWrites=Wp(t.allWrites,TC,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TC(t){return t.visible}function Wp(t,e,n){let s=yt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)mt(n,o)?(a=Je(n,o),s=pi(s,a,r.snap)):mt(o,n)&&(a=Je(o,n),s=pi(s,ae(),r.snap.getChild(a)));else if(r.children){if(mt(n,o))a=Je(n,o),s=Cd(s,a,r.children);else if(mt(o,n))if(a=Je(o,n),ee(a))s=Cd(s,ae(),r.children);else{const l=Ts(r.children,ne(a));if(l){const c=l.getChild(ye(a));s=pi(s,ae(),c)}}}else throw Fs("WriteRecord should have .snap or .children")}}return s}function Bp(t,e,n,s,i){if(!s&&!i){const r=ns(t.visibleWrites,e);if(r!=null)return r;{const o=gn(t.visibleWrites,e);if(Ya(o))return n;if(n==null&&!Ka(o,ae()))return null;{const a=n||V.EMPTY_NODE;return As(o,a)}}}else{const r=gn(t.visibleWrites,e);if(!i&&Ya(r))return n;if(!i&&n==null&&!Ka(r,ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=Wp(t.allWrites,o,e),l=n||V.EMPTY_NODE;return As(a,l)}}}function SC(t,e,n){let s=V.EMPTY_NODE;const i=ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=As(gn(r,new me(o)),a);s=s.updateImmediateChild(o,l)}),bd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gn(t.visibleWrites,e);return bd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,n);if(Ka(t.visibleWrites,r))return null;{const o=gn(t.visibleWrites,r);return Ya(o)?i.getChild(n):As(o,i.getChild(n))}}function xC(t,e,n,s){const i=De(e,n),r=ns(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return As(o,s.getNode().getImmediateChild(n))}else return null}function RC(t,e){return ns(t.visibleWrites,e)}function AC(t,e,n,s,i,r,o){let a;const l=gn(t.visibleWrites,e),c=ns(l,ae());if(c!=null)a=c;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function PC(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function qr(t,e,n,s){return Bp(t.writeTree,t.treePath,e,n,s)}function ic(t,e){return SC(t.writeTree,t.treePath,e)}function Id(t,e,n,s){return kC(t.writeTree,t.treePath,e,n,s)}function Gr(t,e){return RC(t.writeTree,De(t.treePath,e))}function NC(t,e,n,s,i,r){return AC(t.writeTree,t.treePath,e,n,s,i,r)}function rc(t,e,n){return xC(t.writeTree,t.treePath,e,n)}function Vp(t,e){return Hp(De(t.treePath,e),t.writeTree)}function Hp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Mi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Oi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mi(s,e.snapshotNode,i.oldSnap));else throw Fs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zp=new MC;class oc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),r=NC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return{filter:t}}function LC(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function FC(t,e,n,s,i){const r=new OC;let o,a;if(n.type===gt.OVERWRITE){const c=n;c.source.fromUser?o=Qa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Kr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===gt.MERGE){const c=n;c.source.fromUser?o=$C(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ja(t,e,c.path,c.children,s,i,a,r))}else if(n.type===gt.ACK_USER_WRITE){const c=n;c.revert?o=VC(t,e,c.path,s,i,r):o=WC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===gt.LISTEN_COMPLETE)o=BC(t,e,n.path,s,r);else throw Fs("Unknown operation type: "+n.type);const l=r.getChanges();return UC(e,o,l),{viewCache:o,changes:l}}function UC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=jr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dp(jr(e)))}}function jp(t,e,n,s,i,r){const o=e.eventCache;if(Gr(s,n)!=null)return e;{let a,l;if(ee(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zn(e),u=c instanceof V?c:V.EMPTY_NODE,d=ic(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=qr(s,Zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ne(n);if(c===".priority"){T(bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Id(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ye(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Id(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=rc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return fi(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Kr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=ne(n);if(!l.isCompleteForPath(n)&&bn(n)>1)return e;const _=ye(n),x=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),m,x,_,zp,null)}const d=Up(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),h=new oc(i,d,r);return jp(t,d,n,i,h,a)}function Qa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new oc(i,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=fi(e,c,!0,t.filter.filtersNodes());else{const d=ne(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=fi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),m=a.getNode().getImmediateChild(d);let _;if(ee(h))_=s;else{const C=u.getCompleteChild(d);C!=null?Tp(h)===".priority"&&C.getChild(kp(h)).isEmpty()?_=C:_=C.updateChild(h,s):_=V.EMPTY_NODE}if(m.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=fi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Td(t,e){return t.eventCache.isCompleteForChild(e)}function $C(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=De(n,l);Td(e,ne(u))&&(a=Qa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=De(n,l);Td(e,ne(u))||(a=Qa(t,a,u,c,i,r,o))}),a}function Sd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ja(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Sd(t,m,h);l=Kr(t,l,new me(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),C=Sd(t,_,h);l=Kr(t,l,new me(d),C,i,r,o,a)}}),l}function WC(t,e,n,s,i,r,o){if(Gr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Kr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ee(n)){let c=new we(null);return l.getNode().forEachChild(vs,(u,d)=>{c=c.set(new me(u),d)}),Ja(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,d)=>{const h=De(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ja(t,e,n,c,i,r,a,o)}}function BC(t,e,n,s,i){const r=e.serverCache,o=Up(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return jp(t,o,n,s,zp,i)}function VC(t,e,n,s,i,r){let o;if(Gr(s,n)!=null)return e;{const a=new oc(s,e,i),l=e.eventCache.getNode();let c;if(ee(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qr(s,Zn(e));else{const d=e.serverCache.getNode();T(d instanceof V,"serverChildren would be complete if leaf node"),u=ic(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ne(n);let d=rc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qr(s,Zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gr(s,ae())!=null,fi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ec(s.getIndex()),r=lC(s);this.processor_=DC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new In(l,o.isFullyInitialized(),i.filtersNodes()),d=new In(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ko(d,u),this.eventGenerator_=new mC(this.query_)}get query(){return this.query_}}function zC(t){return t.viewCache_.serverCache.getNode()}function jC(t){return jr(t.viewCache_)}function qC(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function kd(t){return t.eventRegistrations_.length===0}function GC(t,e){t.eventRegistrations_.push(e)}function xd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rd(t,e,n,s){e.type===gt.MERGE&&e.source.queryId!==null&&(T(Zn(t.viewCache_),"We should always have a full cache before handling merges"),T(jr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=FC(t.processor_,i,e,n,s);return LC(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,qp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function KC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(Rs(r,o))}),n.isFullyInitialized()&&s.push(Dp(n.getNode())),qp(t,s,n.getNode(),e)}function qp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return gC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr;class Gp{constructor(){this.views=new Map}}function YC(t){T(!Yr,"__referenceConstructor has already been defined"),Yr=t}function QC(){return T(Yr,"Reference.ts has not been loaded"),Yr}function JC(t){return t.views.size===0}function ac(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Rd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rd(o,e,n,s));return r}}function Kp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=qr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=ic(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=ko(new In(a,l,!1),new In(s,i,!1));return new HC(e,c)}return o}function XC(t,e,n,s,i,r){const o=Kp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),GC(o,n),KC(o,n)}function ZC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Tn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(xd(c,n,s)),kd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(xd(l,n,s)),kd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Tn(t)&&r.push(new(QC())(e._repo,e._path)),{removed:r,events:o}}function Yp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const s of t.views.values())n=n||qC(s,e);return n}function Qp(t,e){if(e._queryParams.loadsAllData())return Ro(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Jp(t,e){return Qp(t,e)!=null}function Tn(t){return Ro(t)!=null}function Ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr;function eE(t){T(!Qr,"__referenceConstructor has already been defined"),Qr=t}function tE(){return T(Qr,"Reference.ts has not been loaded"),Qr}let nE=1;class Ad{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=PC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xp(t,e,n,s,i){return wC(t.pendingWriteTree_,e,n,s,i),i?Xi(t,new Xn(Fp(),e,n)):[]}function $n(t,e,n=!1){const s=CC(t.pendingWriteTree_,e);if(EC(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ae(),!0):it(s.children,o=>{r=r.set(new me(o),!0)}),Xi(t,new zr(s.path,r,n))}else return[]}function Ji(t,e,n){return Xi(t,new Xn(nc(),e,n))}function sE(t,e,n){const s=we.fromObject(n);return Xi(t,new Fi(nc(),e,s))}function iE(t,e){return Xi(t,new Li(nc(),e))}function rE(t,e,n){const s=cc(t,n);if(s){const i=uc(s),r=i.path,o=i.queryId,a=Je(r,e),l=new Li(sc(o),a);return dc(t,r,l)}else return[]}function Zp(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Jp(o,e))){const l=ZC(o,e,n,s);JC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Tn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=cE(h);for(let _=0;_<m.length;++_){const C=m[_],x=C.query,A=sm(t,C);t.listenProvider_.startListening(mi(x),Ui(t,x),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(mi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Ao(h));t.listenProvider_.stopListening(mi(h),m)}))}uE(t,c)}return a}function em(t,e,n,s){const i=cc(t,s);if(i!=null){const r=uc(i),o=r.path,a=r.queryId,l=Je(o,e),c=new Xn(sc(a),l,n);return dc(t,o,c)}else return[]}function oE(t,e,n,s){const i=cc(t,s);if(i){const r=uc(i),o=r.path,a=r.queryId,l=Je(o,e),c=we.fromObject(n),u=new Fi(sc(a),l,c);return dc(t,o,u)}else return[]}function aE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Je(h,i);r=r||_n(m,_),o=o||Tn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Tn(a),r=r||_n(a,ae())):(a=new Gp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const C=_n(_,ae());C&&(r=r.updateImmediateChild(m,C))}));const c=Jp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ao(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=dE();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=xo(t.pendingWriteTree_,i);let d=XC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=Qp(a,e);d=d.concat(hE(t,e,h))}return d}function lc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=_n(a,l);if(c)return c});return Bp(i,e,r,n,!0)}function lE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Je(c,n);s=s||_n(u,d)});let i=t.syncPointTree_.get(n);i?s=s||_n(i,ae()):(i=new Gp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new In(s,!0,!1):null,a=xo(t.pendingWriteTree_,e._path),l=Kp(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return jC(l)}function Xi(t,e){return tm(e,t.syncPointTree_,null,xo(t.pendingWriteTree_,ae()))}function tm(t,e,n,s){if(ee(t.path))return nm(t,e,n,s);{const i=e.get(ae());n==null&&i!=null&&(n=_n(i,ae()));let r=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Vp(s,o);r=r.concat(tm(a,l,c,u))}return i&&(r=r.concat(ac(i,t,s,n))),r}}function nm(t,e,n,s){const i=e.get(ae());n==null&&i!=null&&(n=_n(i,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Vp(s,o),u=t.operationForChild(o);u&&(r=r.concat(nm(u,a,l,c)))}),i&&(r=r.concat(ac(i,t,s,n))),r}function sm(t,e){const n=e.query,s=Ui(t,n);return{hashFn:()=>(zC(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?rE(t,n._path,s):iE(t,n._path);{const r=aw(i,n);return Zp(t,n,null,r)}}}}function Ui(t,e){const n=Ao(e);return t.queryToTagMap.get(n)}function Ao(t){return t._path.toString()+"$"+t._queryIdentifier}function cc(t,e){return t.tagToQueryMap.get(e)}function uc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function dc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=xo(t.pendingWriteTree_,e);return ac(s,n,i,null)}function cE(t){return t.fold((e,n,s)=>{if(n&&Tn(n))return[Ro(n)];{let i=[];return n&&(i=Yp(n)),it(s,(r,o)=>{i=i.concat(o)}),i}})}function mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tE())(t._repo,t._path):t}function uE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ao(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dE(){return nE++}function hE(t,e,n){const s=e._path,i=Ui(t,e),r=sm(t,n),o=t.listenProvider_.startListening(mi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Tn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ee(c)&&u&&Tn(u))return[Ro(u).query];{let h=[];return u&&(h=h.concat(Yp(u).map(m=>m.query))),it(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(mi(u),Ui(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hc(n)}node(){return this.node_}}class fc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new fc(this.syncTree_,n)}node(){return lc(this.syncTree_,this.path_)}}const fE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},mE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gE=function(t,e,n,s){return pc(e,new fc(n,t),s)},im=function(t,e,n){return pc(t,new hc(e),n)};function pc(t,e,n){const s=t.getPriority().val(),i=Pd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Pd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Le(i))),o.forEachChild(Ie,(a,l)=>{const c=pc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gc(t,e){let n=e instanceof me?e:new me(e),s=t,i=ne(n);for(;i!==null;){const r=Ts(s.node.children,i)||{children:{},childCount:0};s=new mc(i,s,r),n=ye(n),i=ne(n)}return s}function zs(t){return t.node.value}function rm(t,e){t.node.value=e,Xa(t)}function om(t){return t.node.childCount>0}function _E(t){return zs(t)===void 0&&!om(t)}function Po(t,e){it(t.node.children,(n,s)=>{e(new mc(n,t,s))})}function am(t,e,n,s){n&&!s&&e(t),Po(t,i=>{am(i,e,!0,s)}),n&&s&&e(t)}function yE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Zi(t){return new me(t.parent===null?t.name:Zi(t.parent)+"/"+t.name)}function Xa(t){t.parent!==null&&vE(t.parent,t.name,t)}function vE(t,e,n){const s=_E(n),i=qt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=/[\[\].#$\/\u0000-\u001F\u007F]/,CE=/[\[\].#$\u0000-\u001F\u007F]/,aa=10*1024*1024,lm=function(t){return typeof t=="string"&&t.length!==0&&!wE.test(t)},cm=function(t){return typeof t=="string"&&t.length!==0&&!CE.test(t)},EE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cm(t)},bE=function(t,e,n,s){s&&e===void 0||_c(Nl(t,"value"),e,n)},_c=function(t,e,n){const s=n instanceof me?new Ww(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(s));if(typeof e=="function")throw new Error(t+"contains a function "+On(s)+" with contents = "+e.toString());if(ip(e))throw new Error(t+"contains "+e.toString()+" "+On(s));if(typeof e=="string"&&e.length>aa/3&&Co(e)>aa)throw new Error(t+"contains a string greater than "+aa+" utf8 bytes "+On(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(it(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lm(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bw(s,o),_c(t,a,s),Vw(s)}),i&&r)throw new Error(t+' contains ".value" child '+On(s)+" in addition to actual children.")}},um=function(t,e,n,s){if(!(s&&n===void 0)&&!cm(n))throw new Error(Nl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),um(t,e,n,s)},TE=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EE(n))throw new Error(Nl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Nt(t,e,n){dm(t,n),xE(t,s=>mt(s,e)||mt(e,s))}function xE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(RE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gn&&je("event: "+n.toString()),Hs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="repo_interrupt",PE=25;class NE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hr(),this.transactionQueueTree_=new mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OE(t,e,n){if(t.stats_=Ql(t.repoInfo_),t.forceRestClient_||dw())t.server_=new Vr(t.repoInfo_,(s,i,r,o)=>{Nd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Od(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(s,i,r,o)=>{Nd(t,s,i,r,o)},s=>{Od(t,s)},s=>{DE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gw(t.repoInfo_,()=>new pC(t.stats_,t.server_)),t.infoData_=new cC,t.infoSyncTree_=new Ad({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ji(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vc(t,"connected",!1),t.serverSyncTree_=new Ad({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ME(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yc(t){return fE({timestamp:ME(t)})}function Nd(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ar(n,c=>Ue(c));o=oE(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=em(t.serverSyncTree_,r,l,i)}else if(s){const l=Ar(n,c=>Ue(c));o=sE(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=Ji(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oo(t,r)),Nt(t.eventQueue_,a,o)}function Od(t,e){vc(t,"connected",e),e===!1&&UE(t)}function DE(t,e){it(e,(n,s)=>{vc(t,n,s)})}function vc(t,e,n){const s=new me("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=Ji(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function hm(t){return t.nextWriteId_++}function LE(t,e,n){const s=lE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ue(i).withIndex(e._queryParams.getIndex());aE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ji(t.serverSyncTree_,e._path,r);else{const a=Ui(t.serverSyncTree_,e);o=em(t.serverSyncTree_,e._path,r,a)}return Nt(t.eventQueue_,e._path,o),Zp(t.serverSyncTree_,e,n,null,!0),r},i=>(No(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function FE(t,e,n,s,i){No(t,"set",{path:e.toString(),value:n,priority:s});const r=yc(t),o=Ue(n,s),a=lc(t.serverSyncTree_,e),l=im(o,a,r),c=hm(t),u=Xp(t.serverSyncTree_,e,l,c,!0);dm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||nt("set at "+e+" failed: "+h);const C=$n(t.serverSyncTree_,c,!_);Nt(t.eventQueue_,e,C),WE(t,i,h,m)});const d=_m(t,e);Oo(t,d),Nt(t.eventQueue_,d,[])}function UE(t){No(t,"onDisconnectEvents");const e=yc(t),n=Hr();Ga(t.onDisconnect_,ae(),(i,r)=>{const o=gE(i,r,t.serverSyncTree_,e);Lp(n,i,o)});let s=[];Ga(n,ae(),(i,r)=>{s=s.concat(Ji(t.serverSyncTree_,i,r));const o=_m(t,i);Oo(t,o)}),t.onDisconnect_=Hr(),Nt(t.eventQueue_,ae(),s)}function $E(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AE)}function No(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function WE(t,e,n,s){e&&Hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fm(t,e,n){return lc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function wc(t,e=t.transactionQueueTree_){if(e||Mo(t,e),zs(e)){const n=mm(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BE(t,Zi(e),n)}else om(e)&&Po(e,n=>{wc(t,n)})}function BE(t,e,n){const s=n.map(c=>c.currentWriteId),i=fm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{No(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat($n(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Mo(t,gc(t.transactionQueueTree_,e)),wc(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Hs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Oo(t,e)}},o)}function Oo(t,e){const n=pm(t,e),s=Zi(n),i=mm(t,n);return VE(t,i,s),s}function VE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=PE)u=!0,d="maxretry",i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else{const h=fm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){_c("transaction failed: Data returned ",m,l.path);let _=Ue(m);typeof m=="object"&&m!=null&&qt(m,".priority")||(_=_.updatePriority(h.getPriority()));const x=l.currentWriteId,A=yc(t),P=im(_,h,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=hm(t),o.splice(o.indexOf(x),1),i=i.concat(Xp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat($n(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Mo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Hs(s[a]);wc(t,t.transactionQueueTree_)}function pm(t,e){let n,s=t.transactionQueueTree_;for(n=ne(e);n!==null&&zs(s)===void 0;)s=gc(s,n),e=ye(e),n=ne(e);return s}function mm(t,e){const n=[];return gm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function gm(t,e,n){const s=zs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Po(e,i=>{gm(t,i,n)})}function Mo(t,e){const n=zs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,rm(e,n.length>0?n:void 0)}Po(e,s=>{Mo(t,s)})}function _m(t,e){const n=Zi(pm(t,e)),s=gc(t.transactionQueueTree_,e);return yE(s,i=>{la(t,i)}),la(t,s),am(s,i=>{la(t,i)}),n}function la(t,e){const n=zs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rm(e,void 0):n.length=r+1,Nt(t.eventQueue_,Zi(e),i);for(let o=0;o<s.length;o++)Hs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Md=function(t,e){const n=jE(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},jE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=HE(t.substring(u,d)));const h=zE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class GE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Cc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:Tp(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=vd(this._queryParams),n=Kl(e);return n==="{}"?"default":n}get _queryObject(){return vd(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Cc))return!1;const n=this._repo===e._repo,s=xp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$w(this._path)}}class Gt extends Cc{constructor(e,n){super(e,n,new tc,!1)}get parent(){const e=kp(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $i{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Za(this.ref,e);return new $i(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new $i(i,Za(this.ref,s),Ie)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ym(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Za(t._root,e):t._root}function Za(t,e){return t=rt(t),ne(t._path)===null?IE("child","path",e,!1):um("child","path",e,!1),new Gt(t._repo,De(t._path,e))}function YE(t,e){t=rt(t),TE("set",t._path),bE("set",e,t._path,!1);const n=new wo;return FE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QE(t){t=rt(t);const e=new KE(()=>{}),n=new Ec(e);return LE(t._repo,t,n).then(s=>new $i(s,new Gt(t._repo,t._path),t._queryParams.getIndex()))}class Ec{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qE("value",this,new $i(e.snapshotNode,new Gt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new GE(this,e,n):null}matches(e){return e instanceof Ec?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}YC(Gt);eE(Gt);/**
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
 */const JE="FIREBASE_DATABASE_EMULATOR_HOST",el={};let XE=!1;function ZE(t,e,n,s){t.repoInfo_=new gp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function eb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Md(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[JE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Md(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ys(ys.OWNER):new fw(t.name,t.options,e);SE("Invalid Firebase Database URL",o),ee(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=nb(a,t,u,new hw(t.name,n));return new sb(d,t)}function tb(t,e){const n=el[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$E(t),delete n[t.key]}function nb(t,e,n,s){let i=el[e.name];i||(i={},el[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NE(t,XE,n,s),i[t.toURLString()]=r,r}class sb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function ib(t=yf(),e){const n=Dl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=C0("database");s&&rb(n,...s)}return n}function rb(t,e,n,s={}){t=rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ys(ys.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:E0(s.mockUserToken,t.app.options.projectId);r=new ys(o)}ZE(i,e,n,r)}/**
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
 */function ob(t){J2($s),Ss(new Kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return eb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(nd,sd,t),mn(nd,sd,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ob();const vm=ib(Cf),wm=[],tl=[];function ab(t){return t instanceof Set?Array.from(t):t}const lb=async t=>(await QE(ym(vm,t))).val(),cb=async(t,e)=>{tl.push({path:t,data:e})};setInterval(async()=>{const t=[];for(const{path:e,data:n}of tl)t.push(YE(ym(vm,e),n));await Promise.all(t),tl.length=0},1e4);const ca=async(t,e)=>{zn(t,n=>{Gl.value&&cb(`users/${ql.value.uid}/game-data/tileswap-naenae/${e}/`,ab(n))},{deep:!0}),wm.push({observable:t,path:e})},Jr=He([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>Jr.value,set:t=>{Jr.value=t}});const Cm=ke(()=>Jr.value),Xr=He(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Xr.value,set:t=>{if(t<2)throw new Error("Modulo must be greater than 1");Xr.value=t}});const Te=ke(()=>Xr.value),bc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Xr.value=t},Ic=ke(()=>new Array(Te.value).fill().map((t,e)=>`rgb(${255*(e/(Te.value-1))},${255*(e/(Te.value-1))},${255*(e/(Te.value-1))})`)),sn=class sn{constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill(0));for(const r of this.exclude)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of Jr.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=sn.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=sn.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Te.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Te.value-1:this.matrix[e][n]===Te.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new sn({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(Te.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}return n.matrix.every(s=>s.every(i=>i===1||i===-1))?this.generatePosition(e):n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new sn({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Te.value+Te.value)%Te.value}};tr(sn,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new sn({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let Bt=sn;const no=class no{constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}};tr(no,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:30,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:30,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:75,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((C,x)=>{C===2?(s[_][x]=-1,i[_][x]=-1):C===1&&(s[_][x]=(a??2)-1)}));const l=s[0].length,c=s.length,u=Bt.getExcludeFromMatrix(s),d=new Bt({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new Bt({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new no({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let Zr=no;const Dd=t=>`${t}`,eo={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:Dd},tilesSwapped:{name:"Tiles Swapped",display:Dd},puzzlesCompleted:{name:"Puzzles Completed",display:t=>`${t} / ${Zr.PUZZLES.length}`}},ub=Object.fromEntries(Object.keys(eo).map(t=>[t,eo[t].initialValue??0])),gi=class gi{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patternRange:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,modulo:l}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,this.rangeStart=i[0],this.rangeEnd=i[1],this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.challengeLayouts=this.generateLayouts(),this.nMoves=0,this.modulo=l??2}generateLayouts(){const e=Bt.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd),n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=gi.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=gi.THRESHOLD?i*2:i);return n.sort(()=>Math.random()-.5),n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=We();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.currentPattern=0}};tr(gi,"THRESHOLD",60);let nl=gi;const We=h1("store",()=>{const t=He({}),e=He({}),n=He({}),s=He(2),i=He([]),r=He([new nl({timeLimit:30,moveLimit:-1,totalClicks:60,patternRange:[1,39],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:2})]),o=He({...ub});setInterval(()=>{o.value.timePlayed++},1e3);function a(d){t.value=d}function l(d){e.value=d}function c(d){n.value=d}function u(d){i.value.includes(d)||(i.value.push(d),o.value.puzzlesCompleted++)}return ca(i,"solved-puzzles"),ca(s,"difficulty"),ca(o,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,solvedPuzzles:i,setLayout:a,setPuzzle:l,setChallenge:c,solvePuzzle:u,stats:o,challenges:r}}),Be=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},db={components:{RouterView:sf},setup(){We()}};function hb(t,e,n,s,i,r){const o=Qg("router-view");return q(),Cn(o,null,{default:lt(({Component:a})=>[$(Es,{name:"fade",mode:"out-in"},{default:lt(()=>[(q(),Cn(Jg(a)))]),_:2},1024)]),_:1})}const fb=Be(db,[["render",hb]]);const pb={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},mb=["src"];function gb(t,e,n,s,i,r){return q(),Z("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[G("span",null,Ne(n.name),1),G("img",{src:n.image},null,8,mb)])}const ua=Be(pb,[["render",gb],["__scopeId","data-v-7bbaab8a"]]),_b="/tileswap-naenae/images/freeplay.png",yb="/tileswap-naenae/images/puzzles.png",vb="/tileswap-naenae/images/challenges.png";const Tc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"black":"white"},color(){return this.black!==void 0?"white":"black"}}},Ld=()=>{vo(t=>({e7a07ef6:t.backgroundColor,"426355da":t.color}))},Fd=Tc.setup;Tc.setup=Fd?(t,e)=>(Ld(),Fd(t,e)):Ld;function wb(t,e,n,s,i,r){return q(),Z("button",null,Ne(n.text),1)}const tt=Be(Tc,[["render",wb],["__scopeId","data-v-d91b9173"]]),Cb={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},es=Object.assign(Cb,{__name:"LinkButton",setup(t){return(e,n)=>(q(),Cn(tt,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const Eb={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},bb={class:"modal"};function Ib(t,e,n,s,i,r){return q(),Z("div",null,[$(Es,{name:"fade"},{default:lt(()=>[_a(G("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[xa,n.modelValue]])]),_:1}),$(Es,{name:"zoom"},{default:lt(()=>[_a(G("div",bb,[Xg(t.$slots,"default",{},void 0,!0)],512),[[xa,n.modelValue]])]),_:3})])}const ts=Be(Eb,[["render",Ib],["__scopeId","data-v-de2ad822"]]);const Tb={computed:{list(){const{stats:t}=We();return Object.keys(eo).map(e=>{const n=eo[e];return`${n.name}: ${n.display(t[e])}`})}}};function Sb(t,e,n,s,i,r){return q(),Z("ul",null,[(q(!0),Z(Se,null,wn(r.list,(o,a)=>(q(),Z("li",{key:a},Ne(o),1))),128))])}const kb=Be(Tb,[["render",Sb],["__scopeId","data-v-8a712b4f"]]),Sc=()=>{let t=He(window.innerWidth),e=He(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Ci(()=>window.addEventListener("resize",n)),Ci(()=>window.addEventListener("resize",s)),Ei(()=>window.removeEventListener("resize",n)),Ei(()=>window.removeEventListener("resize",s));const i=ke(()=>t.value),r=ke(()=>e.value);return{width:i,height:r}};const Em=t=>(Ds("data-v-68d96c35"),t=t(),Ls(),t),xb={class:"container"},Rb=Em(()=>G("h1",{class:"main-title"},[Uh("TilesTo"),G("span",null,"Swap")],-1)),Ab=Em(()=>G("h1",null,"Stats",-1)),Pb={data(){const{width:t}=Sc();return{windowWidth:t,user:ql,isSignedIn:Gl,showStats:!1}},methods:{signOut:Va,signInForm(){Q2(prompt("Email"),prompt("Password"))},openStats(){this.showStats=!0}}},Nb=Object.assign(Pb,{__name:"HomeView",setup(t){return(e,n)=>(q(),Z("div",xb,[Rb,G("main",null,[$(ua,{name:"Freeplay",image:Qe(_b),path:"/freeplaySelection"},null,8,["image"]),$(ua,{name:"Puzzles",image:Qe(yb),path:"/puzzleSelection"},null,8,["image"]),$(ua,{name:"Challenges",image:Qe(vb),path:"/challengeSelection"},null,8,["image"])]),G("div",{class:Pt({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[$(tt,{text:"stats",onClick:e.openStats},null,8,["onClick"]),$(es,{text:"tutorial",to:"/tutorial"})],2),G("div",{class:Pt({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[Qe(Gl)?(q(),Z("p",{key:0,onClick:n[0]||(n[0]=(...s)=>Qe(Va)&&Qe(Va)(...s))}," You are logged in as "+Ne(Qe(ql).displayName),1)):(q(),Z("p",{key:1,onClick:n[1]||(n[1]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),$(ts,{modelValue:e.showStats,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showStats=s)},{default:lt(()=>[Ab,$(kb),$(tt,{black:"",text:"close",onClick:n[2]||(n[2]=s=>e.showStats=!1)})]),_:1},8,["modelValue"])]))}}),Ob=Be(Nb,[["__scopeId","data-v-68d96c35"]]);const Mb=["data-level"],Db={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){We().setLayout(this.layout),this.$router.push("/freeplayGame")}}},Lb=Object.assign(Db,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(q(),Z("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(q(!0),Z(Se,null,wn(e.includedTiles,s=>(q(),Z("div",{key:"t"+s,class:"tile",style:Ns({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],8,Mb))}}),Fb=Be(Lb,[["__scopeId","data-v-e2c2d84b"]]);const Ub=t=>(Ds("data-v-7bec83c9"),t=t(),Ls(),t),$b=Ub(()=>G("h1",{class:"title"},"Select a layout",-1)),Wb={class:"layouts"},Bb={data(){return{layouts:Bt.LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},Vb=Object.assign(Bb,{__name:"FreeplaySelection",setup(t){return(e,n)=>(q(),Z("main",null,[$b,$(es,{class:"top right",text:"back",to:"/"}),G("div",Wb,[(q(!0),Z(Se,null,wn(e.layouts,(s,i)=>(q(),Cn(Fb,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),Hb=Be(Vb,[["__scopeId","data-v-7bec83c9"]]);const zb={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return We().solvedPuzzles.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){const t=We();t.setPuzzle(this.puzzle),t.setLayout(this.layout),bc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},jb=Object.assign(zb,{__name:"PuzzleSelectionButton",setup(t){return vo(e=>({"2afab504":e.solved?"#DAC778":"white"})),(e,n)=>(q(),Z("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(q(!0),Z(Se,null,wn(e.includedTiles,s=>(q(),Z("div",{key:"t"+s,class:"tile",style:Ns({backgroundColor:e.layout.isWhite(s)?"#b5ab9e":"black",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))}}),qb=Be(jb,[["__scopeId","data-v-a737a162"]]);const Gb=t=>(Ds("data-v-de8b964b"),t=t(),Ls(),t),Kb=Gb(()=>G("h1",{class:"title"},"Select a puzzle",-1)),Yb={class:"layouts"},Qb={data(){return{puzzles:Zr.PUZZLES}}},Jb=Object.assign(Qb,{__name:"PuzzleSelection",setup(t){return(e,n)=>(q(),Z("main",null,[Kb,$(es,{class:"top right",text:"back",to:"/"}),G("div",Yb,[(q(!0),Z(Se,null,wn(e.puzzles,(s,i)=>(q(),Cn(qb,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),Xb=Be(Jb,[["__scopeId","data-v-de8b964b"]]);const kc={props:["challenge"],computed:{formattedChall(){const t=Math.floor(this.challenge.timeLimit/60).toString(),e=(this.challenge.timeLimit%60).toString(),n=this.challenge.moveLimit.toString(),s=this.challenge.nPatterns.toString();return t+":"+e+"<br>"+(n>0?n+" moves<br>":"no move limit<br>")+s+" layouts"}}},Ud=()=>{vo(t=>({"29fe589f":t.color}))},$d=kc.setup;kc.setup=$d?(t,e)=>(Ud(),$d(t,e)):Ud;const Zb=["innerHTML"];function eI(t,e,n,s,i,r){return q(),Z("div",{innerHTML:r.formattedChall},null,8,Zb)}const tI=Be(kc,[["render",eI],["__scopeId","data-v-99e3cb12"]]),nI={data(){return{challenges:We().challenges}},methods:{selectChallenge(t){const e=We();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),bc(t.modulo),this.$router.push("/challengeGame")}}},sI=Object.assign(nI,{__name:"ChallengeSelection",setup(t){return(e,n)=>(q(),Z("div",null,[$(es,{class:"top right",text:"back",to:"/"}),(q(!0),Z(Se,null,wn(e.challenges,(s,i)=>(q(),Cn(tI,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}});const iI=t=>(Ds("data-v-74d5ebb7"),t=t(),Ls(),t),rI=iI(()=>G("div",{class:"inner-tile"},[G("div",{class:"front"}),G("div",{class:"back"})],-1)),oI=[rI],aI={props:["tile","visible","small"],data(){return{tileSize:"30px",flipped:!1,previousFront:0,previousBack:0,gradient:Ic}},watch:{tile(){this.flipped=!this.flipped}},computed:{frontColor(){return this.previousFront=this.gradient.indexOf(this.frontColor),this.flipped?this.gradient[this.previousFront]:this.gradient[this.tile]},backColor(){return this.previousBack=this.gradient.indexOf(this.backColor),this.flipped?this.gradient[this.tile]:this.gradient[this.previousBack]}},methods:{modulo(t){return(t%Te.value+Te.value)%Te.value}},mounted(){const t=We(),e=()=>{const{width:n,height:s}=t.currentLayout;this.tileSize=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1)+"px"};zn(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},lI=Object.assign(aI,{__name:"Tile",setup(t){return vo(e=>({a9f8a3b6:e.tileSize,e2965d14:t.visible?1:0,"526456df":t.visible?"pointer":"default","1d23a390":e.frontColor,"36deef26":e.backColor})),(e,n)=>(q(),Z("div",{class:Pt(["tile",{"flipped-tile":e.flipped}])},oI,2))}}),cI=Be(lI,[["__scopeId","data-v-74d5ebb7"]]);class yn{constructor(e){if(typeof e!="number")throw new Error("Order must be a number");if(e<=0)throw new Error("Order must be greater than 0");if(e%1!==0)throw new Error("Order must be an integer");yn.isPrime(e)||console.warn("\x1B[33m%s\x1B[0m",`[Warn] Order ${e} is not prime`),this.order=e}el(e){if(e instanceof cn){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e!="number")throw new Error("Value must be a number");return new cn(yn.mod(e,this.order),this)}matrix(e){return to.from2DArray(e,this)}identity(e){return to.identity(e,this)}static mod(e,n){return(e%n+n)%n}static fromOrder(e){return new yn(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}var Wn,ii;const so=class so{constructor(e,n){nr(this,Wn);if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof yn))throw new Error("Field must be an instance of FiniteField");this.value=yn.mod(e,n.order),this.field=n}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(e){return Mt(this,Wn,ii).call(this,e,(n,s)=>n.value+s.value)}subtract(e){return Mt(this,Wn,ii).call(this,e,(n,s)=>n.value-s.value)}multiply(e){return Mt(this,Wn,ii).call(this,e,(n,s)=>n.value*s.value)}divide(e){return Mt(this,Wn,ii).call(this,e,(n,s)=>n.multiply(s.inverse()).value)}pow(e){if(e===0)return this.field.el(1);if(e===1)return this.copy();if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let e=1;for(;e<this.field.order;){if(e*e%this.field.order===this.value)return this.field.el(e);e++}throw new Error("Element has no square root")}equals(e){if(e instanceof so){if(e.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===e.value}return this.value===e}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}};Wn=new WeakSet,ii=function(e,n){if(e instanceof so){if(e.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(n(this,e))}return e=this.field.el(e),this.field.el(n(this,e))};let cn=so;var Bn,Vn,ri;const re=class re{constructor(e,n){nr(this,Vn);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof cn){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new re(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof cn)return e=this.field.el(e),re.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof re){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return re.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof cn||typeof e=="number")return e=this.field.el(e),new re(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof re){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new re(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return re.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(qs(re,Bn).has(e))return qs(re,Bn).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Mt(this,Vn,ri).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return qs(re,Bn).set(e,s),s}const n=this.PLUDeterminant();return qs(re,Bn).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=re.identity(this.width,this.field),s=re.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Mt(r=s,Vn,ri).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return re.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Mt(this,Vn,ri).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new re(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return re.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return re.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=re.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Mt(this,Vn,ri).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i];l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:re.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof re?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return re.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new re(s,n)}static fromValue(e,n,s,i){if(e instanceof cn&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new re(r,i)}static zeros(e,n,s){return re.fromValue(0,e,n,s)}static ones(e,n,s){return re.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return re.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return re.from2DArray(s,n)}static from2DArray(e,n){return new re(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};Bn=new WeakMap,Vn=new WeakSet,ri=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new re(s,this.field)},nr(re,Bn,new Map);let to=re;const sl=He(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>sl.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");sl.value=t}});const il=ke(()=>sl.value),da=new Map,Wd=t=>{const e=yn.fromOrder(Te.value),n=t.length,s=t[0].length,i=`${s}x${n},${Bt.getExcludeFromMatrix(t)},${Cm.value},${Te.value}}`;let r;if(da.has(i))r=da.get(i);else{const l=dI(s,n,t),c=l.determinant();console.log("Det:",c.toString()),c.value===0?r=l.pseudoInverse():r=l.inverse(),da.set(i,r)}const o=e.matrix(t.flat().filter(l=>l!==-1).map(l=>[(l+1)%Te.value])),a=r.multiply(o).matrix.map(l=>l[0].value);for(let l=0;l<n;l++)for(let c=0;c<s;c++)if(t[l][c]===-1){const u=l*s+c;a.splice(u,0,-1)}return a.map((l,c)=>a.slice(c*s,(c+1)*s)).filter(l=>l.length)},uI=(t,e,n)=>{for(const s of Cm.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Te.value-1)}},dI=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));uI(o,a,l),s.push(l)}return yn.fromOrder(Te.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()};const hI={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){return{currentChallenge:We().currentChallenge,gradient:Ic}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=We(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},fI=Object.assign(hI,{__name:"Layout",setup(t){return(e,n)=>(q(),Z("div",null,[$(Es,{name:"list",mode:"out-in"},{default:lt(()=>{var s;return[(q(),Z("div",{key:(s=e.currentChallenge)==null?void 0:s.currentPattern},[(q(!0),Z(Se,null,wn(t.modelValue.matrix,(i,r)=>{var o;return q(),Z("div",{class:"row",key:"row"+r+((o=e.currentChallenge)==null?void 0:o.currentPattern)},[(q(!0),Z(Se,null,wn(i,(a,l)=>{var c;return q(),Cn(cI,{small:t.small,tile:a,visible:a!==-1,key:r+""+l+((c=e.currentChallenge)==null?void 0:c.currentPattern),class:Pt({solution:Qe(il)&&t.solution&&t.solution[r][l]>=1}),style:Ns({outline:t.target?`5px solid ${Qe(Ic)[t.target[r][l]]}`:"none"}),"data-moves":t.solution?t.solution[r][l]:"",onClick:u=>e.onTileClick(r,l)},null,8,["small","tile","visible","class","style","data-moves","onClick"])}),128))])}),128))]))]}),_:1})]))}}),Do=Be(fI,[["__scopeId","data-v-c3ed1f2b"]]);const pI={props:["modelValue"],emits:["update:modelValue"],data(){const t=We();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Te.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},mI={class:"diff"},gI=["value","max"];function _I(t,e,n,s,i,r){return q(),Z("div",mI,[G("h2",null,"difficulty - "+Ne(r.difficultyText),1),G("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,gI)])}const yI=Be(pI,[["render",_I],["__scopeId","data-v-38400e03"]]);const vI={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},wI={class:"diff"},CI=["value"];function EI(t,e,n,s,i,r){return q(),Z("div",wI,[G("h2",null,"modulo - "+Ne(r.moduloText),1),G("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,CI)])}const bI=Be(vI,[["render",EI],["__scopeId","data-v-1360d3ea"]]);const II={class:"top-menu"},TI={class:"top right"},SI={data(){const t=We(),e=t.currentLayout,{width:n}=Sc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Te.value,showModal:!1,solution:e.matrix.map(s=>s.slice()),moves:0}},watch:{difficulty(){this.store.difficulty=this.difficulty},internalModulo(t){bc(t),this.randomize()},showModal(){this.showModal||this.randomize()}},methods:{handleClick(){this.moves++;try{il.value&&(this.solution=Wd(this.layout.matrix))}catch(t){console.error(t)}this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty),this.$nextTick(()=>{try{il.value&&(this.solution=Wd(this.layout.matrix))}catch(t){console.error(t)}})}},mounted(){this.randomize()}},kI=Object.assign(SI,{__name:"FreeplayGame",setup(t){return(e,n)=>(q(),Z("div",null,[G("div",II,[$(tt,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),$(yI,{modelValue:e.difficulty,"onUpdate:modelValue":n[0]||(n[0]=s=>e.difficulty=s)},null,8,["modelValue"])]),_a(G("p",{class:Pt(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},Ne(e.moves)+" move"+Ne(e.moves>1?"s":""),3),[[xa,e.moves>0]]),G("div",TI,[$(es,{text:"back",to:"/freeplaySelection"}),$(bI,{modelValue:e.internalModulo,"onUpdate:modelValue":n[1]||(n[1]=s=>e.internalModulo=s)},null,8,["modelValue"])]),G("main",null,[$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[2]||(n[2]=s=>e.layout=s),solution:e.solution,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"])]),$(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:lt(()=>[G("h1",null,"you won in "+Ne(e.moves)+" move"+Ne(e.moves>1?"s":"")+"!",1),$(tt,{black:"",text:"yay!",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),xI=Be(kI,[["__scopeId","data-v-530ef833"]]);const RI=t=>(Ds("data-v-9ca46572"),t=t(),Ls(),t),AI=RI(()=>G("h1",null,"no moves remaining!",-1)),PI={data(){const e=We().currentPuzzle,n=e.base.copy(),{width:s}=Sc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=We();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},NI=Object.assign(PI,{__name:"PuzzleGame",setup(t){return(e,n)=>(q(),Z("div",null,[$(es,{class:"top right",text:"back",to:"/puzzleSelection"}),G("div",{class:Pt(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[G("h1",null,Ne(e.remainingMoves)+" move"+Ne(e.remainingMoves>1?"s":"")+" remaining",1),$(tt,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),G("main",null,[$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),$(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[G("h1",null,"you won in "+Ne(e.moves)+" move"+Ne(e.moves>1?"s":"")+"!",1),$(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:lt(()=>[AI,$(tt,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),$(es,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),OI=Be(NI,[["__scopeId","data-v-9ca46572"]]);const MI=t=>(Ds("data-v-77de2009"),t=t(),Ls(),t),DI={class:"info"},LI={class:"moves"},FI=MI(()=>G("h1",null,"you won the challenge!",-1)),UI={data(){const{currentChallenge:t}=We();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0}},methods:{handleClick(){const t=We();if(this.nMoves-=1,this.nMovesPer-=1,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||this.$router.push("/challengeSelection")},showLostModal(){this.showLostModal||this.$router.push("/challengeSelection")}},computed:{formattedTime(){const t=Math.floor(this.time/60).toString(),e=(this.time%60).toString();return`${t.padStart(2,"0")}:${e.padStart(2,"0")}`},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)+"%"},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1,this.time<=0&&(this.modalText="no time left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))},1e3)}},$I=Object.assign(UI,{__name:"ChallengeGame",setup(t){return(e,n)=>(q(),Z("div",null,[G("p",DI,Ne(e.formattedTime)+" "+Ne(e.moves)+" - "+Ne(e.percentageCompleted),1),G("main",null,[$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"])]),G("p",LI,Ne(e.movesPer),1),$(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[FI,$(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:lt(()=>[G("h1",null,Ne(e.modalText),1),$(tt,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),WI=Be($I,[["__scopeId","data-v-77de2009"]]),BI=G("h1",{class:"title"},"how to play",-1),VI={key:0},HI=G("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),zI=G("h1",null,"Try to get all the tiles to be white!",-1),jI={key:1},qI=G("h1",null,"Nice! Now observe what happens at the corners",-1),GI={key:2},KI=G("h1",null,"Well done! Okay one last , a bit harder",-1),YI={key:3},QI=G("h1",null,"Great job! Ready to play?",-1),JI=G("h1",{class:"text-center"},"Try it here!",-1),XI={data(){const t=We(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new Bt({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},ZI=Object.assign(XI,{__name:"TutorialView",setup(t){return(e,n)=>(q(),Z("div",null,[BI,$(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:lt(()=>[e.stage===-1?(q(),Z("div",VI,[HI,zI,$(tt,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(q(),Z("div",jI,[qI,$(tt,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(q(),Z("div",GI,[KI,$(tt,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(q(),Z("div",YI,[QI,$(tt,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),JI,$(Do,{class:Pt([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),eT=d0({history:x1("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:Ob},{path:"/tutorial",name:"tutorial",component:ZI},{path:"/freeplaySelection",name:"freeplaySelection",component:Hb},{path:"/puzzleSelection",name:"puzzleSelection",component:Xb},{path:"/challengeSelection",name:"challengeSelection",component:sI},{path:"/freeplayGame",name:"freeplayGame",component:xI},{path:"/puzzleGame",name:"puzzleGame",component:OI},{path:"/challengeGame",name:"challengeGame",component:WI}]}),xc=s1(fb),bm=o1();Bi(bm);xc.use(eT);xc.use(bm);xc.mount("#app");
