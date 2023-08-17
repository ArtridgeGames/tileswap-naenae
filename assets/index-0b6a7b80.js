var Tm=Object.defineProperty;var Sm=(t,e,n)=>e in t?Tm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nr=(t,e,n)=>(Sm(t,typeof e!="symbol"?e+"":e,n),n),Nc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Gs=(t,e,n)=>(Nc(t,e,"read from private field"),n?n.call(t):e.get(t)),sr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Mt=(t,e,n)=>(Nc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ol(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ce={},fs=[],_t=()=>{},km=()=>!1,xm=/^on[^a-z]/,ro=t=>xm.test(t),al=t=>t.startsWith("onUpdate:"),Pe=Object.assign,ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rm=Object.prototype.hasOwnProperty,oe=(t,e)=>Rm.call(t,e),H=Array.isArray,ps=t=>oo(t)==="[object Map]",Bh=t=>oo(t)==="[object Set]",Q=t=>typeof t=="function",xe=t=>typeof t=="string",cl=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Vh=t=>Ee(t)&&Q(t.then)&&Q(t.catch),Hh=Object.prototype.toString,oo=t=>Hh.call(t),Am=t=>oo(t).slice(8,-1),zh=t=>oo(t)==="[object Object]",ul=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pm=/-(\w)/g,At=ao(t=>t.replace(Pm,(e,n)=>n?n.toUpperCase():"")),Nm=/\B([A-Z])/g,Ns=ao(t=>t.replace(Nm,"-$1").toLowerCase()),lo=ao(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fo=ao(t=>t?`on${lo(t)}`:""),yi=(t,e)=>!Object.is(t,e),Uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Om=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mm=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Oc;const fa=()=>Oc||(Oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Um(s):Os(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(xe(t))return t;if(Ee(t))return t}}const Dm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Fm=/\/\*[^]*?\*\//g;function Um(t){const e={};return t.replace(Fm,"").split(Dm).forEach(n=>{if(n){const s=n.split(Lm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pt(t){let e="";if(xe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Pt(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $m="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=ol($m);function jh(t){return!!t||t===""}const Ue=t=>xe(t)?t:t==null?"":H(t)||Ee(t)&&(t.toString===Hh||!Q(t.toString))?JSON.stringify(t,qh,2):String(t),qh=(t,e)=>e&&e.__v_isRef?qh(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Bh(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!H(e)&&!zh(e)?String(e):e;let at;class Gh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Kh(t){return new Gh(t)}function Bm(t,e=at){e&&e.active&&e.effects.push(t)}function Yh(){return at}function Vm(t){at&&at.cleanups.push(t)}const hl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qh=t=>(t.w&wn)>0,Jh=t=>(t.n&wn)>0,Hm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},zm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Qh(i)&&!Jh(i)?i.delete(t):e[n++]=i,i.w&=~wn,i.n&=~wn}e.length=n}},Er=new WeakMap;let ti=0,wn=1;const pa=30;let dt;const zn=Symbol(""),ma=Symbol("");class dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bm(this,s)}run(){if(!this.active)return this.fn();let e=dt,n=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dt,dt=this,un=!0,wn=1<<++ti,ti<=pa?Hm(this):Mc(this),this.fn()}finally{ti<=pa&&zm(this),wn=1<<--ti,dt=this.parent,un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(Mc(this),this.onStop&&this.onStop(),this.active=!1)}}function Mc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let un=!0;const Xh=[];function Ms(){Xh.push(un),un=!1}function Ds(){const t=Xh.pop();un=t===void 0?!0:t}function st(t,e,n){if(un&&dt){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=hl()),Zh(i)}}function Zh(t,e){let n=!1;ti<=pa?Jh(t)||(t.n|=wn,n=!Qh(t)):n=!t.has(dt),n&&(t.add(dt),dt.deps.push(t))}function Vt(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ul(n)&&a.push(o.get("length")):(a.push(o.get(zn)),ps(t)&&a.push(o.get(ma)));break;case"delete":H(t)||(a.push(o.get(zn)),ps(t)&&a.push(o.get(ma)));break;case"set":ps(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&ga(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ga(hl(l))}}function ga(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Dc(s);for(const s of n)s.computed||Dc(s)}function Dc(t,e){(t!==dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function jm(t,e){var n;return(n=Er.get(t))==null?void 0:n.get(e)}const qm=ol("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cl)),Gm=fl(),Km=fl(!1,!0),Ym=fl(!0),Lc=Qm();function Qm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)st(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ms();const s=ie(this)[e].apply(this,n);return Ds(),s}}),t}function Jm(t){const e=ie(this);return st(e,"has",t),e.hasOwnProperty(t)}function fl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?fg:rd:e?id:sd).get(s))return s;const o=H(s);if(!t){if(o&&oe(Lc,i))return Reflect.get(Lc,i,r);if(i==="hasOwnProperty")return Jm}const a=Reflect.get(s,i,r);return(cl(i)?ed.has(i):qm(i))||(t||st(s,"get",i),e)?a:ke(a)?o&&ul(i)?a:a.value:Ee(a)?t?ad(a):Bi(a):a}}const Xm=td(),Zm=td(!0);function td(t=!1){return function(n,s,i,r){let o=n[s];if(Cs(o)&&ke(o)&&!ke(i))return!1;if(!t&&(!br(i)&&!Cs(i)&&(o=ie(o),i=ie(i)),!H(n)&&ke(o)&&!ke(i)))return o.value=i,!0;const a=H(n)&&ul(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?yi(i,o)&&Vt(n,"set",s,i):Vt(n,"add",s,i)),l}}function eg(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vt(t,"delete",e,void 0),s}function tg(t,e){const n=Reflect.has(t,e);return(!cl(e)||!ed.has(e))&&st(t,"has",e),n}function ng(t){return st(t,"iterate",H(t)?"length":zn),Reflect.ownKeys(t)}const nd={get:Gm,set:Xm,deleteProperty:eg,has:tg,ownKeys:ng},sg={get:Ym,set(t,e){return!0},deleteProperty(t,e){return!0}},ig=Pe({},nd,{get:Km,set:Zm}),pl=t=>t,co=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&st(i,"get",e),st(i,"get",r));const{has:o}=co(i),a=s?pl:n?_l:vi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function rr(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&st(s,"has",t),st(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function or(t,e=!1){return t=t.__v_raw,!e&&st(ie(t),"iterate",zn),Reflect.get(t,"size",t)}function Fc(t){t=ie(t);const e=ie(this);return co(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function Uc(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=co(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?yi(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function $c(t){const e=ie(this),{has:n,get:s}=co(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vt(e,"delete",t,void 0),r}function Wc(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function ar(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?pl:t?_l:vi;return!t&&st(a,"iterate",zn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function lr(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=ps(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?pl:e?_l:vi;return!e&&st(r,"iterate",l?ma:zn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function rg(){const t={get(r){return ir(this,r)},get size(){return or(this)},has:rr,add:Fc,set:Uc,delete:$c,clear:Wc,forEach:ar(!1,!1)},e={get(r){return ir(this,r,!1,!0)},get size(){return or(this)},has:rr,add:Fc,set:Uc,delete:$c,clear:Wc,forEach:ar(!1,!0)},n={get(r){return ir(this,r,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:ar(!0,!1)},s={get(r){return ir(this,r,!0,!0)},get size(){return or(this,!0)},has(r){return rr.call(this,r,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=lr(r,!1,!1),n[r]=lr(r,!0,!1),e[r]=lr(r,!1,!0),s[r]=lr(r,!0,!0)}),[t,n,e,s]}const[og,ag,lg,cg]=rg();function ml(t,e){const n=e?t?cg:lg:t?ag:og;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const ug={get:ml(!1,!1)},hg={get:ml(!1,!0)},dg={get:ml(!0,!1)},sd=new WeakMap,id=new WeakMap,rd=new WeakMap,fg=new WeakMap;function pg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mg(t){return t.__v_skip||!Object.isExtensible(t)?0:pg(Am(t))}function Bi(t){return Cs(t)?t:gl(t,!1,nd,ug,sd)}function od(t){return gl(t,!1,ig,hg,id)}function ad(t){return gl(t,!0,sg,dg,rd)}function gl(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=mg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function hn(t){return Cs(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Cs(t){return!!(t&&t.__v_isReadonly)}function br(t){return!!(t&&t.__v_isShallow)}function ld(t){return hn(t)||Cs(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function uo(t){return Cr(t,"__v_skip",!0),t}const vi=t=>Ee(t)?Bi(t):t,_l=t=>Ee(t)?ad(t):t;function cd(t){un&&dt&&(t=ie(t),Zh(t.dep||(t.dep=hl())))}function ud(t,e){t=ie(t);const n=t.dep;n&&ga(n)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Ve(t){return hd(t,!1)}function gg(t){return hd(t,!0)}function hd(t,e){return ke(t)?t:new _g(t,e)}class _g{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:vi(e)}get value(){return cd(this),this._value}set value(e){const n=this.__v_isShallow||br(e)||Cs(e);e=n?e:ie(e),yi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vi(e),ud(this))}}function Qe(t){return ke(t)?t.value:t}const yg={get:(t,e,n)=>Qe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function dd(t){return hn(t)?t:new Proxy(t,yg)}function vg(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Cg(t,n);return e}class wg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jm(ie(this._object),this._key)}}function Cg(t,e,n){const s=t[e];return ke(s)?s:new wg(t,e,n)}class Eg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dl(e,()=>{this._dirty||(this._dirty=!0,ud(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return cd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bg(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=_t):(s=t.get,i=t.set),new Eg(s,i,r||!i,n)}function dn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ho(r,e,n)}return i}function ut(t,e,n,s){if(Q(t)){const r=dn(t,e,n,s);return r&&Vh(r)&&r.catch(o=>{ho(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function ho(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){dn(l,null,10,[t,o,a]);return}}Ig(t,n,i,s)}function Ig(t,e,n,s=!0){console.error(t)}let wi=!1,_a=!1;const qe=[];let Tt=0;const ms=[];let Lt=null,Dn=0;const fd=Promise.resolve();let yl=null;function vl(t){const e=yl||fd;return t?e.then(this?t.bind(this):t):e}function Tg(t){let e=Tt+1,n=qe.length;for(;e<n;){const s=e+n>>>1;Ci(qe[s])<t?e=s+1:n=s}return e}function wl(t){(!qe.length||!qe.includes(t,wi&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?qe.push(t):qe.splice(Tg(t.id),0,t),pd())}function pd(){!wi&&!_a&&(_a=!0,yl=fd.then(gd))}function Sg(t){const e=qe.indexOf(t);e>Tt&&qe.splice(e,1)}function kg(t){H(t)?ms.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?Dn+1:Dn))&&ms.push(t),pd()}function Bc(t,e=wi?Tt+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function md(t){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>Ci(n)-Ci(s)),Dn=0;Dn<Lt.length;Dn++)Lt[Dn]();Lt=null,Dn=0}}const Ci=t=>t.id==null?1/0:t.id,xg=(t,e)=>{const n=Ci(t)-Ci(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gd(t){_a=!1,wi=!0,qe.sort(xg);const e=_t;try{for(Tt=0;Tt<qe.length;Tt++){const n=qe[Tt];n&&n.active!==!1&&dn(n,null,14)}}finally{Tt=0,qe.length=0,md(),wi=!1,yl=null,(qe.length||ms.length)&&gd()}}function Rg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ce;d&&(i=n.map(m=>xe(m)?m.trim():m)),h&&(i=n.map(Om))}let a,l=s[a=Fo(e)]||s[a=Fo(At(e))];!l&&r&&(l=s[a=Fo(Ns(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function _d(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=_d(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Pe(o,r),Ee(t)&&s.set(t,o),o)}function fo(t,e){return!t||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Ns(e))||oe(t,e))}let $e=null,po=null;function Ir(t){const e=$e;return $e=t,po=t&&t.type.__scopeId||null,e}function Ls(t){po=t}function Fs(){po=null}function lt(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zc(-1);const r=Ir(e);let o;try{o=t(...i)}finally{Ir(r),s._d&&Zc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $o(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:_,inheritAttrs:C}=t;let x,A;const P=Ir(t);try{if(n.shapeFlag&4){const M=i||s;x=It(u.call(M,M,h,r,m,d,_)),A=l}else{const M=e;x=It(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:Ag(l)}}catch(M){ci.length=0,ho(M,t,1),x=B(kt)}let z=x;if(A&&C!==!1){const M=Object.keys(A),{shapeFlag:J}=z;M.length&&J&7&&(o&&M.some(al)&&(A=Pg(A,o)),z=bn(z,A))}return n.dirs&&(z=bn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),x=z,Ir(P),x}const Ag=t=>{let e;for(const n in t)(n==="class"||n==="style"||ro(n))&&((e||(e={}))[n]=t[n]);return e},Pg=(t,e)=>{const n={};for(const s in t)(!al(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ng(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!fo(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vc(s,o,c):!0:!!o;return!1}function Vc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!fo(n,r))return!0}return!1}function Og({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Mg=t=>t.__isSuspense;function Dg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):kg(t)}function Lg(t,e){return Cl(t,null,{flush:"post"})}const cr={};function fn(t,e,n){return Cl(t,e,n)}function Cl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){var a;const l=Yh()===((a=Ne)==null?void 0:a.scope)?Ne:null;let c,u=!1,h=!1;if(ke(t)?(c=()=>t.value,u=br(t)):hn(t)?(c=()=>t,s=!0):H(t)?(h=!0,u=t.some(M=>hn(M)||br(M)),c=()=>t.map(M=>{if(ke(M))return M.value;if(hn(M))return Un(M);if(Q(M))return dn(M,l,2)})):Q(t)?e?c=()=>dn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),ut(t,l,3,[m])}:c=_t,e&&s){const M=c;c=()=>Un(M())}let d,m=M=>{d=P.onStop=()=>{dn(M,l,4)}},_;if(Si)if(m=_t,e?n&&ut(e,l,3,[c(),h?[]:void 0,m]):c(),i==="sync"){const M=N_();_=M.__watcherHandles||(M.__watcherHandles=[])}else return _t;let C=h?new Array(t.length).fill(cr):cr;const x=()=>{if(P.active)if(e){const M=P.run();(s||u||(h?M.some((J,ge)=>yi(J,C[ge])):yi(M,C)))&&(d&&d(),ut(e,l,3,[M,C===cr?void 0:h&&C[0]===cr?[]:C,m]),C=M)}else P.run()};x.allowRecurse=!!e;let A;i==="sync"?A=x:i==="post"?A=()=>Ze(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>wl(x));const P=new dl(c,A);e?n?x():C=P.run():i==="post"?Ze(P.run.bind(P),l&&l.suspense):P.run();const z=()=>{P.stop(),l&&l.scope&&ll(l.scope.effects,P)};return _&&_.push(z),z}function Fg(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?yd(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Ne;Es(this);const a=Cl(i,r.bind(s),n);return o?Es(o):jn(),a}function yd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Un(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))Un(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Bh(t)||ps(t))t.forEach(n=>{Un(n,e)});else if(zh(t))for(const n in t)Un(t[n],e);return t}function ya(t,e){const n=$e;if(n===null)return t;const s=vo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function xn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ms(),ut(l,n,8,[t.el,a,t,e]),Ds())}}function Ug(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ei(()=>{t.isMounted=!0}),Id(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],vd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},$g={name:"BaseTransition",props:vd,setup(t,{slots:e}){const n=$d(),s=Ug();let i;return()=>{const r=e.default&&Cd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==kt){o=C;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return Wo(o);const c=Hc(o);if(!c)return Wo(o);const u=va(c,a,s,n);wa(c,u);const h=n.subTree,d=h&&Hc(h);let m=!1;const{getTransitionKey:_}=c.type;if(_){const C=_();i===void 0?i=C:C!==i&&(i=C,m=!0)}if(d&&d.type!==kt&&(!Ln(c,d)||m)){const C=va(d,a,s,n);if(wa(d,C),l==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Wo(o);l==="in-out"&&c.type!==kt&&(C.delayLeave=(x,A,P)=>{const z=wd(s,d);z[String(d.key)]=d,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},Wg=$g;function wd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function va(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:C,onAppear:x,onAfterAppear:A,onAppearCancelled:P}=e,z=String(t.key),M=wd(n,t),J=(N,F)=>{N&&ut(N,s,9,F)},ge=(N,F)=>{const Y=F[1];J(N,F),H(N)?N.every(fe=>fe.length<=1)&&Y():N.length<=1&&Y()},ve={mode:r,persisted:o,beforeEnter(N){let F=a;if(!n.isMounted)if(i)F=C||a;else return;N._leaveCb&&N._leaveCb(!0);const Y=M[z];Y&&Ln(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),J(F,[N])},enter(N){let F=l,Y=c,fe=u;if(!n.isMounted)if(i)F=x||l,Y=A||c,fe=P||u;else return;let D=!1;const le=N._enterCb=Be=>{D||(D=!0,Be?J(fe,[N]):J(Y,[N]),ve.delayedLeave&&ve.delayedLeave(),N._enterCb=void 0)};F?ge(F,[N,le]):le()},leave(N,F){const Y=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return F();J(h,[N]);let fe=!1;const D=N._leaveCb=le=>{fe||(fe=!0,F(),le?J(_,[N]):J(m,[N]),N._leaveCb=void 0,M[Y]===t&&delete M[Y])};M[Y]=t,d?ge(d,[N,D]):D()},clone(N){return va(N,e,n,s)}};return ve}function Wo(t){if(mo(t))return t=bn(t),t.children=null,t}function Hc(t){return mo(t)?t.children?t.children[0]:void 0:t}function wa(t,e){t.shapeFlag&6&&t.component?wa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Te?(o.patchFlag&128&&i++,s=s.concat(Cd(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?bn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ed(t,e){return Q(t)?(()=>Pe({name:t.name},e,{setup:t}))():t}const ai=t=>!!t.type.__asyncLoader,mo=t=>t.type.__isKeepAlive;function Bg(t,e){bd(t,"a",e)}function Vg(t,e){bd(t,"da",e)}function bd(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(go(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mo(i.parent.vnode)&&Hg(s,e,n,i),i=i.parent}}function Hg(t,e,n,s){const i=go(e,t,s,!0);bi(()=>{ll(s[e],i)},n)}function go(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),Es(n);const a=ut(e,n,t,o);return jn(),Ds(),a});return s?i.unshift(r):i.push(r),r}}const jt=t=>(e,n=Ne)=>(!Si||t==="sp")&&go(t,(...s)=>e(...s),n),zg=jt("bm"),Ei=jt("m"),jg=jt("bu"),qg=jt("u"),Id=jt("bum"),bi=jt("um"),Gg=jt("sp"),Kg=jt("rtg"),Yg=jt("rtc");function Qg(t,e=Ne){go("ec",t,e)}const El="components";function Jg(t,e){return Sd(El,t,!0,e)||t}const Td=Symbol.for("v-ndc");function Xg(t){return xe(t)?Sd(El,t,!1)||t:t||Td}function Sd(t,e,n=!0,s=!1){const i=$e||Ne;if(i){const r=i.type;if(t===El){const a=R_(r,!1);if(a&&(a===e||a===At(e)||a===lo(At(e))))return r}const o=zc(i[t]||r[t],e)||zc(i.appContext[t],e);return!o&&s?r:o}}function zc(t,e){return t&&(t[e]||t[At(e)]||t[lo(At(e))])}function Cn(t,e,n,s){let i;const r=n&&n[s];if(H(t)||xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Zg(t,e,n={},s,i){if($e.isCE||$e.parent&&ai($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),B("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),q();const o=r&&kd(r(n)),a=En(Te,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function kd(t){return t.some(e=>Sr(e)?!(e.type===kt||e.type===Te&&!kd(e.children)):!0)?t:null}const Ca=t=>t?Wd(t)?vo(t)||t.proxy:Ca(t.parent):null,li=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ca(t.parent),$root:t=>Ca(t.root),$emit:t=>t.emit,$options:t=>bl(t),$forceUpdate:t=>t.f||(t.f=()=>wl(t.update)),$nextTick:t=>t.n||(t.n=vl.bind(t.proxy)),$watch:t=>Fg.bind(t)}),Bo=(t,e)=>t!==Ce&&!t.__isScriptSetup&&oe(t,e),e_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Bo(s,e))return o[e]=1,s[e];if(i!==Ce&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,r[e];if(n!==Ce&&oe(n,e))return o[e]=4,n[e];Ea&&(o[e]=0)}}const u=li[e];let h,d;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&oe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Bo(i,e)?(i[e]=n,!0):s!==Ce&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&oe(t,o)||Bo(e,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(li,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ea=!0;function t_(t){const e=bl(t),n=t.proxy,s=t.ctx;Ea=!1,e.beforeCreate&&qc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:_,activated:C,deactivated:x,beforeDestroy:A,beforeUnmount:P,destroyed:z,unmounted:M,render:J,renderTracked:ge,renderTriggered:ve,errorCaptured:N,serverPrefetch:F,expose:Y,inheritAttrs:fe,components:D,directives:le,filters:Be}=e;if(c&&n_(c,s,null),o)for(const pe in o){const ce=o[pe];Q(ce)&&(s[pe]=ce.bind(n))}if(i){const pe=i.call(n,n);Ee(pe)&&(t.data=Bi(pe))}if(Ea=!0,r)for(const pe in r){const ce=r[pe],Ot=Q(ce)?ce.bind(n,n):Q(ce.get)?ce.get.bind(n,n):_t,Kt=!Q(ce)&&Q(ce.set)?ce.set.bind(n):_t,Ct=Se({get:Ot,set:Kt});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Xe=>Ct.value=Xe})}if(a)for(const pe in a)xd(a[pe],s,n,pe);if(l){const pe=Q(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ce=>{pr(ce,pe[ce])})}u&&qc(u,t,"c");function se(pe,ce){H(ce)?ce.forEach(Ot=>pe(Ot.bind(n))):ce&&pe(ce.bind(n))}if(se(zg,h),se(Ei,d),se(jg,m),se(qg,_),se(Bg,C),se(Vg,x),se(Qg,N),se(Yg,ge),se(Kg,ve),se(Id,P),se(bi,M),se(Gg,F),H(Y))if(Y.length){const pe=t.exposed||(t.exposed={});Y.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:Ot=>n[ce]=Ot})})}else t.exposed||(t.exposed={});J&&t.render===_t&&(t.render=J),fe!=null&&(t.inheritAttrs=fe),D&&(t.components=D),le&&(t.directives=le)}function n_(t,e,n=_t){H(t)&&(t=ba(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),ke(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function qc(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xd(t,e,n,s){const i=s.includes(".")?yd(n,s):()=>n[s];if(xe(t)){const r=e[t];Q(r)&&fn(i,r)}else if(Q(t))fn(i,t.bind(n));else if(Ee(t))if(H(t))t.forEach(r=>xd(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&fn(i,r,t)}}function bl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Tr(l,c,o,!0)),Tr(l,e,o)),Ee(e)&&r.set(e,l),l}function Tr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Tr(t,r,n,!0),i&&i.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=s_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const s_={data:Gc,props:Kc,emits:Kc,methods:ni,computed:ni,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:ni,directives:ni,watch:r_,provide:Gc,inject:i_};function Gc(t,e){return e?t?function(){return Pe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function i_(t,e){return ni(ba(t),ba(e))}function ba(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Pe(Object.create(null),t,e):e}function Kc(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),jc(t),jc(e??{})):e}function r_(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Rd(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o_=0;function a_(t,e){return function(s,i=null){Q(s)||(s=Pe({},s)),i!=null&&!Ee(i)&&(i=null);const r=Rd(),o=new Set;let a=!1;const l=r.app={_uid:o_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:O_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=B(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,vo(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ii=l;try{return c()}finally{Ii=null}}};return l}}let Ii=null;function pr(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Ne||$e;if(s||Ii){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ii._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function l_(){return!!(Ne||$e||Ii)}function c_(t,e,n,s=!1){const i={},r={};Cr(r,yo,1),t.propsDefaults=Object.create(null),Ad(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:od(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function u_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(fo(t.emitsOptions,d))continue;const m=e[d];if(l)if(oe(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const _=At(d);i[_]=Ia(l,a,_,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Ad(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Ns(h))===h||!oe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ia(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!oe(e,h))&&(delete r[h],c=!0)}c&&Vt(t,"set","$attrs")}function Ad(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fr(l))continue;const c=e[l];let u;i&&oe(i,u=At(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||Ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ia(i,l,h,c[h],t,!oe(c,h))}}return o}function Ia(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Es(i),s=c[n]=l.call(null,e),jn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ns(n))&&(s=!0))}return s}function Pd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=h=>{l=!0;const[d,m]=Pd(h,e,!0);Pe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,fs),fs;if(H(r))for(let u=0;u<r.length;u++){const h=At(r[u]);Yc(h)&&(o[h]=Ce)}else if(r)for(const u in r){const h=At(u);if(Yc(h)){const d=r[u],m=o[h]=H(d)||Q(d)?{type:d}:Pe({},d);if(m){const _=Xc(Boolean,m.type),C=Xc(String,m.type);m[0]=_>-1,m[1]=C<0||_<C,(_>-1||oe(m,"default"))&&a.push(h)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function Yc(t){return t[0]!=="$"}function Qc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jc(t,e){return Qc(t)===Qc(e)}function Xc(t,e){return H(e)?e.findIndex(n=>Jc(n,t)):Q(e)&&Jc(e,t)?0:-1}const Nd=t=>t[0]==="_"||t==="$stable",Il=t=>H(t)?t.map(It):[It(t)],h_=(t,e,n)=>{if(e._n)return e;const s=lt((...i)=>Il(e(...i)),n);return s._c=!1,s},Od=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Nd(i))continue;const r=t[i];if(Q(r))e[i]=h_(i,r,s);else if(r!=null){const o=Il(r);e[i]=()=>o}}},Md=(t,e)=>{const n=Il(e);t.slots.default=()=>n},d_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Cr(e,"_",n)):Od(e,t.slots={})}else t.slots={},e&&Md(t,e);Cr(t.slots,yo,1)},f_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Pe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Od(e,i)),o=e}else e&&(Md(t,e),o={default:1});if(r)for(const a in i)!Nd(a)&&!(a in o)&&delete i[a]};function Ta(t,e,n,s,i=!1){if(H(t)){t.forEach((d,m)=>Ta(d,e&&(H(e)?e[m]:e),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?vo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,oe(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),Q(l))dn(l,a,12,[o,u]);else{const d=xe(l),m=ke(l);if(d||m){const _=()=>{if(t.f){const C=d?oe(h,l)?h[l]:u[l]:l.value;i?H(C)&&ll(C,r):H(C)?C.includes(r)||C.push(r):d?(u[l]=[r],oe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,oe(h,l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ze(_,n)):_()}}}const Ze=Dg;function p_(t){return m_(t)}function m_(t,e){const n=fa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=_t,insertStaticContent:_}=t,C=(f,p,g,y=null,w=null,E=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ln(f,p)&&(y=v(f),Xe(f,w,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:L}=p;switch(b){case _o:x(f,p,g,y);break;case kt:A(f,p,g,y);break;case mr:f==null&&P(p,g,y,R);break;case Te:D(f,p,g,y,w,E,R,I,S);break;default:L&1?J(f,p,g,y,w,E,R,I,S):L&6?le(f,p,g,y,w,E,R,I,S):(L&64||L&128)&&b.process(f,p,g,y,w,E,R,I,S,k)}$!=null&&w&&Ta($,f&&f.ref,E,p||f,!p)},x=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},z=({el:f,anchor:p},g,y)=>{let w;for(;f&&f!==p;)w=d(f),s(f,g,y),f=w;s(p,g,y)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},J=(f,p,g,y,w,E,R,I,S)=>{R=R||p.type==="svg",f==null?ge(p,g,y,w,E,R,I,S):F(f,p,w,E,R,I,S)},ge=(f,p,g,y,w,E,R,I)=>{let S,b;const{type:$,props:L,shapeFlag:W,transition:G,dirs:te}=f;if(S=f.el=o(f.type,E,L&&L.is,L),W&8?u(S,f.children):W&16&&N(f.children,S,null,y,w,E&&$!=="foreignObject",R,I),te&&xn(f,null,y,"created"),ve(S,f,f.scopeId,R,y),L){for(const he in L)he!=="value"&&!fr(he)&&r(S,he,null,L[he],E,f.children,y,w,ze);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&bt(b,y,f)}te&&xn(f,null,y,"beforeMount");const _e=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;_e&&G.beforeEnter(S),s(S,p,g),((b=L&&L.onVnodeMounted)||_e||te)&&Ze(()=>{b&&bt(b,y,f),_e&&G.enter(S),te&&xn(f,null,y,"mounted")},w)},ve=(f,p,g,y,w)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(w){let E=w.subTree;if(p===E){const R=w.vnode;ve(f,R,R.scopeId,R.slotScopeIds,w.parent)}}},N=(f,p,g,y,w,E,R,I,S=0)=>{for(let b=S;b<f.length;b++){const $=f[b]=I?tn(f[b]):It(f[b]);C(null,$,p,g,y,w,E,R,I)}},F=(f,p,g,y,w,E,R)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:$}=p;S|=f.patchFlag&16;const L=f.props||Ce,W=p.props||Ce;let G;g&&Rn(g,!1),(G=W.onVnodeBeforeUpdate)&&bt(G,g,p,f),$&&xn(p,f,g,"beforeUpdate"),g&&Rn(g,!0);const te=w&&p.type!=="foreignObject";if(b?Y(f.dynamicChildren,b,I,g,y,te,E):R||ce(f,p,I,null,g,y,te,E,!1),S>0){if(S&16)fe(I,p,L,W,g,y,w);else if(S&2&&L.class!==W.class&&r(I,"class",null,W.class,w),S&4&&r(I,"style",L.style,W.style,w),S&8){const _e=p.dynamicProps;for(let he=0;he<_e.length;he++){const Re=_e[he],ht=L[Re],rs=W[Re];(rs!==ht||Re==="value")&&r(I,Re,ht,rs,w,f.children,g,y,ze)}}S&1&&f.children!==p.children&&u(I,p.children)}else!R&&b==null&&fe(I,p,L,W,g,y,w);((G=W.onVnodeUpdated)||$)&&Ze(()=>{G&&bt(G,g,p,f),$&&xn(p,f,g,"updated")},y)},Y=(f,p,g,y,w,E,R)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],$=S.el&&(S.type===Te||!Ln(S,b)||S.shapeFlag&70)?h(S.el):g;C(S,b,$,null,y,w,E,R,!0)}},fe=(f,p,g,y,w,E,R)=>{if(g!==y){if(g!==Ce)for(const I in g)!fr(I)&&!(I in y)&&r(f,I,g[I],null,R,p.children,w,E,ze);for(const I in y){if(fr(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,R,p.children,w,E,ze)}"value"in y&&r(f,"value",g.value,y.value)}},D=(f,p,g,y,w,E,R,I,S)=>{const b=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:W,slotScopeIds:G}=p;G&&(I=I?I.concat(G):G),f==null?(s(b,g,y),s($,g,y),N(p.children,g,$,w,E,R,I,S)):L>0&&L&64&&W&&f.dynamicChildren?(Y(f.dynamicChildren,W,g,w,E,R,I),(p.key!=null||w&&p===w.subTree)&&Dd(f,p,!0)):ce(f,p,g,$,w,E,R,I,S)},le=(f,p,g,y,w,E,R,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?w.ctx.activate(p,g,y,R,S):Be(p,g,y,w,E,R,S):Ke(f,p,S)},Be=(f,p,g,y,w,E,R)=>{const I=f.component=I_(f,y,w);if(mo(f)&&(I.ctx.renderer=k),T_(I),I.asyncDep){if(w&&w.registerDep(I,se),!f.el){const S=I.subTree=B(kt);A(null,S,p,g)}return}se(I,f,p,g,w,E,R)},Ke=(f,p,g)=>{const y=p.component=f.component;if(Ng(f,p,g))if(y.asyncDep&&!y.asyncResolved){pe(y,p,g);return}else y.next=p,Sg(y.update),y.update();else p.el=f.el,y.vnode=p},se=(f,p,g,y,w,E,R)=>{const I=()=>{if(f.isMounted){let{next:$,bu:L,u:W,parent:G,vnode:te}=f,_e=$,he;Rn(f,!1),$?($.el=te.el,pe(f,$,R)):$=te,L&&Uo(L),(he=$.props&&$.props.onVnodeBeforeUpdate)&&bt(he,G,$,te),Rn(f,!0);const Re=$o(f),ht=f.subTree;f.subTree=Re,C(ht,Re,h(ht.el),v(ht),f,w,E),$.el=Re.el,_e===null&&Og(f,Re.el),W&&Ze(W,w),(he=$.props&&$.props.onVnodeUpdated)&&Ze(()=>bt(he,G,$,te),w)}else{let $;const{el:L,props:W}=p,{bm:G,m:te,parent:_e}=f,he=ai(p);if(Rn(f,!1),G&&Uo(G),!he&&($=W&&W.onVnodeBeforeMount)&&bt($,_e,p),Rn(f,!0),L&&ue){const Re=()=>{f.subTree=$o(f),ue(L,f.subTree,f,w,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=$o(f);C(null,Re,g,y,f,w,E),p.el=Re.el}if(te&&Ze(te,w),!he&&($=W&&W.onVnodeMounted)){const Re=p;Ze(()=>bt($,_e,Re),w)}(p.shapeFlag&256||_e&&ai(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&Ze(f.a,w),f.isMounted=!0,p=g=y=null}},S=f.effect=new dl(I,()=>wl(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,Rn(f,!0),b()},pe=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,u_(f,p.props,y,g),f_(f,p.children,g),Ms(),Bc(),Ds()},ce=(f,p,g,y,w,E,R,I,S=!1)=>{const b=f&&f.children,$=f?f.shapeFlag:0,L=p.children,{patchFlag:W,shapeFlag:G}=p;if(W>0){if(W&128){Kt(b,L,g,y,w,E,R,I,S);return}else if(W&256){Ot(b,L,g,y,w,E,R,I,S);return}}G&8?($&16&&ze(b,w,E),L!==b&&u(g,L)):$&16?G&16?Kt(b,L,g,y,w,E,R,I,S):ze(b,w,E,!0):($&8&&u(g,""),G&16&&N(L,g,y,w,E,R,I,S))},Ot=(f,p,g,y,w,E,R,I,S)=>{f=f||fs,p=p||fs;const b=f.length,$=p.length,L=Math.min(b,$);let W;for(W=0;W<L;W++){const G=p[W]=S?tn(p[W]):It(p[W]);C(f[W],G,g,null,w,E,R,I,S)}b>$?ze(f,w,E,!0,!1,L):N(p,g,y,w,E,R,I,S,L)},Kt=(f,p,g,y,w,E,R,I,S)=>{let b=0;const $=p.length;let L=f.length-1,W=$-1;for(;b<=L&&b<=W;){const G=f[b],te=p[b]=S?tn(p[b]):It(p[b]);if(Ln(G,te))C(G,te,g,null,w,E,R,I,S);else break;b++}for(;b<=L&&b<=W;){const G=f[L],te=p[W]=S?tn(p[W]):It(p[W]);if(Ln(G,te))C(G,te,g,null,w,E,R,I,S);else break;L--,W--}if(b>L){if(b<=W){const G=W+1,te=G<$?p[G].el:y;for(;b<=W;)C(null,p[b]=S?tn(p[b]):It(p[b]),g,te,w,E,R,I,S),b++}}else if(b>W)for(;b<=L;)Xe(f[b],w,E,!0),b++;else{const G=b,te=b,_e=new Map;for(b=te;b<=W;b++){const ot=p[b]=S?tn(p[b]):It(p[b]);ot.key!=null&&_e.set(ot.key,b)}let he,Re=0;const ht=W-te+1;let rs=!1,Rc=0;const qs=new Array(ht);for(b=0;b<ht;b++)qs[b]=0;for(b=G;b<=L;b++){const ot=f[b];if(Re>=ht){Xe(ot,w,E,!0);continue}let Et;if(ot.key!=null)Et=_e.get(ot.key);else for(he=te;he<=W;he++)if(qs[he-te]===0&&Ln(ot,p[he])){Et=he;break}Et===void 0?Xe(ot,w,E,!0):(qs[Et-te]=b+1,Et>=Rc?Rc=Et:rs=!0,C(ot,p[Et],g,null,w,E,R,I,S),Re++)}const Ac=rs?g_(qs):fs;for(he=Ac.length-1,b=ht-1;b>=0;b--){const ot=te+b,Et=p[ot],Pc=ot+1<$?p[ot+1].el:y;qs[b]===0?C(null,Et,g,Pc,w,E,R,I,S):rs&&(he<0||b!==Ac[he]?Ct(Et,g,Pc,2):he--)}}},Ct=(f,p,g,y,w=null)=>{const{el:E,type:R,transition:I,children:S,shapeFlag:b}=f;if(b&6){Ct(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,k);return}if(R===Te){s(E,p,g);for(let L=0;L<S.length;L++)Ct(S[L],p,g,y);s(f.anchor,p,g);return}if(R===mr){z(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),Ze(()=>I.enter(E),w);else{const{leave:L,delayLeave:W,afterLeave:G}=I,te=()=>s(E,p,g),_e=()=>{L(E,()=>{te(),G&&G()})};W?W(E,te,_e):_e()}else s(E,p,g)},Xe=(f,p,g,y=!1,w=!1)=>{const{type:E,props:R,ref:I,children:S,dynamicChildren:b,shapeFlag:$,patchFlag:L,dirs:W}=f;if(I!=null&&Ta(I,null,g,f,!0),$&256){p.ctx.deactivate(f);return}const G=$&1&&W,te=!ai(f);let _e;if(te&&(_e=R&&R.onVnodeBeforeUnmount)&&bt(_e,p,f),$&6)tr(f.component,g,y);else{if($&128){f.suspense.unmount(g,y);return}G&&xn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,g,w,k,y):b&&(E!==Te||L>0&&L&64)?ze(b,p,g,!1,!0):(E===Te&&L&384||!w&&$&16)&&ze(S,p,g),y&&ss(f)}(te&&(_e=R&&R.onVnodeUnmounted)||G)&&Ze(()=>{_e&&bt(_e,p,f),G&&xn(f,null,p,"unmounted")},g)},ss=f=>{const{type:p,el:g,anchor:y,transition:w}=f;if(p===Te){is(g,y);return}if(p===mr){M(f);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:I}=w,S=()=>R(g,E);I?I(f.el,E,S):S()}else E()},is=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},tr=(f,p,g)=>{const{bum:y,scope:w,update:E,subTree:R,um:I}=f;y&&Uo(y),w.stop(),E&&(E.active=!1,Xe(R,f,p,g)),I&&Ze(I,p),Ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,g,y=!1,w=!1,E=0)=>{for(let R=E;R<f.length;R++)Xe(f[R],p,g,y,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),Bc(),md(),p._vnode=f},k={p:C,um:Xe,m:Ct,r:ss,mt:Be,mc:N,pc:ce,pbc:Y,n:v,o:t};let U,ue;return e&&([U,ue]=e(k)),{render:O,hydrate:U,createApp:a_(O,U)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dd(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=tn(i[r]),a.el=o.el),n||Dd(o,a)),a.type===_o&&(a.el=o.el)}}function g_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const __=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),ci=[];let pt=null;function q(t=!1){ci.push(pt=t?null:[])}function y_(){ci.pop(),pt=ci[ci.length-1]||null}let Ti=1;function Zc(t){Ti+=t}function Ld(t){return t.dynamicChildren=Ti>0?pt||fs:null,y_(),Ti>0&&pt&&pt.push(t),t}function ee(t,e,n,s,i,r){return Ld(K(t,e,n,s,i,r,!0))}function En(t,e,n,s,i){return Ld(B(t,e,n,s,i,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const yo="__vInternal",Fd=({key:t})=>t??null,gr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||ke(t)||Q(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,s=0,i=null,r=t===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fd(e),ref:e&&gr(e),scopeId:po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(Tl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Ti>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const B=v_;function v_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Td)&&(t=kt),Sr(t)){const a=bn(t,e,!0);return n&&Tl(a,n),Ti>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(A_(t)&&(t=t.__vccOpts),e){e=w_(e);let{class:a,style:l}=e;a&&!xe(a)&&(e.class=Pt(a)),Ee(l)&&(ld(l)&&!H(l)&&(l=Pe({},l)),e.style=Os(l))}const o=xe(t)?1:Mg(t)?128:__(t)?64:Ee(t)?4:Q(t)?2:0;return K(t,e,n,s,i,o,r,!0)}function w_(t){return t?ld(t)||yo in t?Pe({},t):t:null}function bn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?C_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fd(a),ref:e&&e.ref?n&&i?H(i)?i.concat(gr(e)):[i,gr(e)]:gr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ud(t=" ",e=0){return B(_o,null,t,e)}function It(t){return t==null||typeof t=="boolean"?B(kt):H(t)?B(Te,null,t.slice()):typeof t=="object"?tn(t):B(_o,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Tl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Tl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(yo in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Ud(e)]):n=8);t.children=e,t.shapeFlag|=n}function C_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Pt([e.class,s.class]));else if(i==="style")e.style=Os([e.style,s.style]);else if(ro(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){ut(t,e,7,[n,s])}const E_=Rd();let b_=0;function I_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||E_,r={uid:b_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(s,i),emitsOptions:_d(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Rg.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const $d=()=>Ne||$e;let Sl,os,eu="__VUE_INSTANCE_SETTERS__";(os=fa()[eu])||(os=fa()[eu]=[]),os.push(t=>Ne=t),Sl=t=>{os.length>1?os.forEach(e=>e(t)):os[0](t)};const Es=t=>{Sl(t),t.scope.on()},jn=()=>{Ne&&Ne.scope.off(),Sl(null)};function Wd(t){return t.vnode.shapeFlag&4}let Si=!1;function T_(t,e=!1){Si=e;const{props:n,children:s}=t.vnode,i=Wd(t);c_(t,n,i,e),d_(t,s);const r=i?S_(t,e):void 0;return Si=!1,r}function S_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=uo(new Proxy(t.ctx,e_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?x_(t):null;Es(t),Ms();const r=dn(s,t,0,[t.props,i]);if(Ds(),jn(),Vh(r)){if(r.then(jn,jn),e)return r.then(o=>{tu(t,o,e)}).catch(o=>{ho(o,t,0)});t.asyncDep=r}else tu(t,r,e)}else Bd(t,e)}function tu(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=dd(e)),Bd(t,n)}let nu;function Bd(t,e,n){const s=t.type;if(!t.render){if(!e&&nu&&!s.render){const i=s.template||bl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:r,delimiters:a},o),l);s.render=nu(i,c)}}t.render=s.render||_t}Es(t),Ms(),t_(t),Ds(),jn()}function k_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}}))}function x_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return k_(t)},slots:t.slots,emit:t.emit,expose:e}}function vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dd(uo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}}))}function R_(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function A_(t){return Q(t)&&"__vccOpts"in t}const Se=(t,e)=>bg(t,e,Si);function kl(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!H(e)?Sr(e)?B(t,null,[e]):B(t,e):B(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Sr(n)&&(n=[n]),B(t,e,n))}const P_=Symbol.for("v-scx"),N_=()=>St(P_),O_="3.3.4",M_="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,su=Fn&&Fn.createElement("template"),D_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Fn.createElementNS(M_,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{su.innerHTML=s?`<svg>${t}</svg>`:t;const a=su.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function L_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function F_(t,e,n){const s=t.style,i=xe(n);if(n&&!i){if(e&&!xe(e))for(const r in e)n[r]==null&&Sa(s,r,"");for(const r in n)Sa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const iu=/\s*!important$/;function Sa(t,e,n){if(H(n))n.forEach(s=>Sa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=U_(t,e);iu.test(n)?t.setProperty(Ns(s),n.replace(iu,""),"important"):t[s]=n}}const ru=["Webkit","Moz","ms"],Vo={};function U_(t,e){const n=Vo[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return Vo[e]=s;s=lo(s);for(let i=0;i<ru.length;i++){const r=ru[i]+s;if(r in t)return Vo[e]=r}return e}const ou="http://www.w3.org/1999/xlink";function $_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ou,e.slice(6,e.length)):t.setAttributeNS(ou,e,n);else{const r=Wm(e);n==null||r&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function W_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function B_(t,e,n,s){t.addEventListener(e,n,s)}function V_(t,e,n,s){t.removeEventListener(e,n,s)}function H_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=z_(e);if(s){const c=r[e]=G_(s,i);B_(t,a,c,l)}else o&&(V_(t,a,o,l),r[e]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function z_(t){let e;if(au.test(t)){e={};let s;for(;s=t.match(au);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Ho=0;const j_=Promise.resolve(),q_=()=>Ho||(j_.then(()=>Ho=0),Ho=Date.now());function G_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(K_(s,n.value),e,5,[s])};return n.value=t,n.attached=q_(),n}function K_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const lu=/^on[a-z]/,Y_=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?L_(t,s,i):e==="style"?F_(t,n,s):ro(e)?al(e)||H_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q_(t,e,s,i))?W_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$_(t,e,s,i))};function Q_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&lu.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lu.test(e)&&xe(n)?!1:e in t}function wo(t){const e=$d();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>xa(r,i))},s=()=>{const i=t(e.proxy);ka(e.subTree,i),n(i)};Lg(s),Ei(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),bi(()=>i.disconnect())})}function ka(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ka(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)xa(t.el,e);else if(t.type===Te)t.children.forEach(n=>ka(n,e));else if(t.type===mr){let{el:n,anchor:s}=t;for(;n&&(xa(n,e),n!==s);)n=n.nextSibling}}function xa(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Qt="transition",Ks="animation",bs=(t,{slots:e})=>kl(Wg,J_(t),e);bs.displayName="Transition";const Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bs.props=Pe({},vd,Vd);const An=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},cu=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function J_(t){const e={};for(const D in t)D in Vd||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=X_(i),C=_&&_[0],x=_&&_[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:z,onLeave:M,onLeaveCancelled:J,onBeforeAppear:ge=A,onAppear:ve=P,onAppearCancelled:N=z}=e,F=(D,le,Be)=>{Pn(D,le?u:a),Pn(D,le?c:o),Be&&Be()},Y=(D,le)=>{D._isLeaving=!1,Pn(D,h),Pn(D,m),Pn(D,d),le&&le()},fe=D=>(le,Be)=>{const Ke=D?ve:P,se=()=>F(le,D,Be);An(Ke,[le,se]),uu(()=>{Pn(le,D?l:r),Jt(le,D?u:a),cu(Ke)||hu(le,s,C,se)})};return Pe(e,{onBeforeEnter(D){An(A,[D]),Jt(D,r),Jt(D,o)},onBeforeAppear(D){An(ge,[D]),Jt(D,l),Jt(D,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(D,le){D._isLeaving=!0;const Be=()=>Y(D,le);Jt(D,h),t1(),Jt(D,d),uu(()=>{D._isLeaving&&(Pn(D,h),Jt(D,m),cu(M)||hu(D,s,x,Be))}),An(M,[D,Be])},onEnterCancelled(D){F(D,!1),An(z,[D])},onAppearCancelled(D){F(D,!0),An(N,[D])},onLeaveCancelled(D){Y(D),An(J,[D])}})}function X_(t){if(t==null)return null;if(Ee(t))return[zo(t.enter),zo(t.leave)];{const e=zo(t);return[e,e]}}function zo(t){return Mm(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Pn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function uu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Z_=0;function hu(t,e,n,s){const i=t._endId=++Z_,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=e1(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=m=>{m.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function e1(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${Qt}Delay`),r=s(`${Qt}Duration`),o=du(i,r),a=s(`${Ks}Delay`),l=s(`${Ks}Duration`),c=du(a,l);let u=null,h=0,d=0;e===Qt?o>0&&(u=Qt,h=o,d=r.length):e===Ks?c>0&&(u=Ks,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Qt:Ks:null,d=u?u===Qt?r.length:l.length:0);const m=u===Qt&&/\b(transform|all)(,|$)/.test(s(`${Qt}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function du(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>fu(n)+fu(t[s])))}function fu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function t1(){return document.body.offsetHeight}const Ra={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ys(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ys(t,!0),s.enter(t)):s.leave(t,()=>{Ys(t,!1)}):Ys(t,e))},beforeUnmount(t,{value:e}){Ys(t,e)}};function Ys(t,e){t.style.display=e?t._vod:"none"}const n1=Pe({patchProp:Y_},D_);let pu;function s1(){return pu||(pu=p_(n1))}const i1=(...t)=>{const e=s1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=r1(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function r1(t){return xe(t)?document.querySelector(t):t}var o1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Hd;const Vi=t=>Hd=t,zd=Symbol();function Aa(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ui||(ui={}));function a1(){const t=Kh(!0),e=t.run(()=>Ve({}));let n=[],s=[];const i=uo({install(r){Vi(i),i._a=r,r.provide(zd,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!o1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const jd=()=>{};function mu(t,e,n,s=jd){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yh()&&Vm(i),i}function as(t,...e){t.slice().forEach(n=>{n(...e)})}const l1=t=>t();function Pa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Aa(i)&&Aa(s)&&t.hasOwnProperty(n)&&!ke(s)&&!hn(s)?t[n]=Pa(i,s):t[n]=s}return t}const c1=Symbol();function u1(t){return!Aa(t)||!t.hasOwnProperty(c1)}const{assign:en}=Object;function h1(t){return!!(ke(t)&&t.effect)}function d1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=vg(n.state.value[t]);return en(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=uo(Se(()=>{Vi(n);const m=n._s.get(t);return o[d].call(m,m)})),h),{}))}return l=qd(t,c,e,n,s,!0),l}function qd(t,e,n={},s,i,r){let o;const a=en({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ve({});let C;function x(N){let F;c=u=!1,typeof N=="function"?(N(s.state.value[t]),F={type:ui.patchFunction,storeId:t,events:m}):(Pa(s.state.value[t],N),F={type:ui.patchObject,payload:N,storeId:t,events:m});const Y=C=Symbol();vl().then(()=>{C===Y&&(c=!0)}),u=!0,as(h,F,s.state.value[t])}const A=r?function(){const{state:F}=n,Y=F?F():{};this.$patch(fe=>{en(fe,Y)})}:jd;function P(){o.stop(),h=[],d=[],s._s.delete(t)}function z(N,F){return function(){Vi(s);const Y=Array.from(arguments),fe=[],D=[];function le(se){fe.push(se)}function Be(se){D.push(se)}as(d,{args:Y,name:N,store:J,after:le,onError:Be});let Ke;try{Ke=F.apply(this&&this.$id===t?this:J,Y)}catch(se){throw as(D,se),se}return Ke instanceof Promise?Ke.then(se=>(as(fe,se),se)).catch(se=>(as(D,se),Promise.reject(se))):(as(fe,Ke),Ke)}}const M={_p:s,$id:t,$onAction:mu.bind(null,d),$patch:x,$reset:A,$subscribe(N,F={}){const Y=mu(h,N,F.detached,()=>fe()),fe=o.run(()=>fn(()=>s.state.value[t],D=>{(F.flush==="sync"?u:c)&&N({storeId:t,type:ui.direct,events:m},D)},en({},l,F)));return Y},$dispose:P},J=Bi(M);s._s.set(t,J);const ge=s._a&&s._a.runWithContext||l1,ve=s._e.run(()=>(o=Kh(),ge(()=>o.run(e))));for(const N in ve){const F=ve[N];if(ke(F)&&!h1(F)||hn(F))r||(_&&u1(F)&&(ke(F)?F.value=_[N]:Pa(F,_[N])),s.state.value[t][N]=F);else if(typeof F=="function"){const Y=z(N,F);ve[N]=Y,a.actions[N]=F}}return en(J,ve),en(ie(J),ve),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:N=>{x(F=>{en(F,N)})}}),s._p.forEach(N=>{en(J,o.run(()=>N({store:J,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(J.$state,_),c=!0,u=!0,J}function f1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=l_();return a=a||(c?St(zd,null):null),a&&Vi(a),a=Hd,a._s.has(s)||(r?qd(s,e,i,a):d1(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function p1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function jo(t,e){const n={};for(const s in e){const i=e[s];n[s]=vt(i)?i.map(t):t(i)}return n}const hi=()=>{},vt=Array.isArray,m1=/\/$/,g1=t=>t.replace(m1,"");function qo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=w1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function _1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function y1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Is(e.matched[s],n.matched[i])&&Gd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v1(t[n],e[n]))return!1;return!0}function v1(t,e){return vt(t)?gu(t,e):vt(e)?gu(e,t):t===e}function gu(t,e){return vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function w1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kr||(kr={}));const Go="";function C1(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),g1(t)}const E1=/^[^#]+#/;function b1(t,e){return t.replace(E1,"#")+e}function I1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const T1=()=>({left:window.pageXOffset,top:window.pageYOffset});function S1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=I1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _u(t,e){return(history.state?history.state.position-e:-1)+t}const Na=new Map;function k1(t,e){Na.set(t,e)}function x1(t){const e=Na.get(t);return Na.delete(t),e}function R1(t=""){let e=[],n=[Go],s=0;t=C1(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const h={direction:c,delta:u,type:ki.pop};for(const d of e)d(a,l,h)}const o={location:Go,state:{},base:t,createHref:b1.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Go],s=0},go(a,l=!0){const c=this.location,u=a<0?kr.back:kr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function A1(t){return typeof t=="string"||t&&typeof t=="object"}function Kd(t){return typeof t=="string"||typeof t=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yd=Symbol("");var yu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yu||(yu={}));function Ts(t,e){return be(new Error,{type:t,[Yd]:!0},e)}function Dt(t,e){return t instanceof Error&&Yd in t&&(e==null||!!(t.type&e))}const vu="[^/]+?",P1={sensitive:!1,strict:!1,start:!0,end:!0},N1=/[.+*?^${}()[\]/\\]/g;function O1(t,e){const n=be({},P1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(N1,"\\$&"),m+=40;else if(d.type===1){const{value:_,repeatable:C,optional:x,regexp:A}=d;r.push({name:_,repeatable:C,optional:x});const P=A||vu;if(P!==vu){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+M.message)}}let z=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(z=x&&c.length<2?`(?:/${z})`:"/"+z),x&&(z+="?"),i+=z,m+=20,x&&(m+=-8),C&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",_=r[d-1];h[_.name]=m&&_.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:C,optional:x}=m,A=_ in c?c[_]:"";if(vt(A)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=vt(A)?A.join("/"):A;if(!P)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function M1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function D1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=M1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wu(s))return 1;if(wu(i))return-1}return i.length-s.length}function wu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const L1={type:0,value:""},F1=/[a-zA-Z0-9_]/;function U1(t){if(!t)return[[]];if(t==="/")return[[L1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:F1.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function $1(t,e,n){const s=O1(U1(t.path),n),i=be(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function W1(t,e){const n=[],s=new Map;e=bu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const m=!d,_=B1(u);_.aliasOf=d&&d.record;const C=bu(e,u),x=[_];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of z)x.push(be({},_,{components:d?d.record.components:_.components,path:M,aliasOf:d?d.record:_}))}let A,P;for(const z of x){const{path:M}=z;if(h&&M[0]!=="/"){const J=h.record.path,ge=J[J.length-1]==="/"?"":"/";z.path=h.record.path+(M&&ge+M)}if(A=$1(z,h,C),d?d.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),m&&u.name&&!Eu(A)&&o(u.name)),_.children){const J=_.children;for(let ge=0;ge<J.length;ge++)r(J[ge],A,d&&d.children[ge])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:hi}function o(u){if(Kd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&D1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Eu(u)&&s.set(u.record.name,u)}function c(u,h){let d,m={},_,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ts(1,{location:u});C=d.record.name,m=be(Cu(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Cu(u.params,d.keys.map(P=>P.name))),_=d.stringify(m)}else if("path"in u)_=u.path,d=n.find(P=>P.re.test(_)),d&&(m=d.parse(_),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Ts(1,{location:u,currentLocation:h});C=d.record.name,m=be({},h.params,u.params),_=d.stringify(m)}const x=[];let A=d;for(;A;)x.unshift(A.record),A=A.parent;return{name:C,path:_,params:m,matched:x,meta:H1(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Cu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function B1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:V1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function V1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Eu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function H1(t){return t.reduce((e,n)=>be(e,n.meta),{})}function bu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qd(t,e){return e.children.some(n=>n===t||Qd(t,n))}const Jd=/#/g,z1=/&/g,j1=/\//g,q1=/=/g,G1=/\?/g,Xd=/\+/g,K1=/%5B/g,Y1=/%5D/g,Zd=/%5E/g,Q1=/%60/g,ef=/%7B/g,J1=/%7C/g,tf=/%7D/g,X1=/%20/g;function xl(t){return encodeURI(""+t).replace(J1,"|").replace(K1,"[").replace(Y1,"]")}function Z1(t){return xl(t).replace(ef,"{").replace(tf,"}").replace(Zd,"^")}function Oa(t){return xl(t).replace(Xd,"%2B").replace(X1,"+").replace(Jd,"%23").replace(z1,"%26").replace(Q1,"`").replace(ef,"{").replace(tf,"}").replace(Zd,"^")}function e0(t){return Oa(t).replace(q1,"%3D")}function t0(t){return xl(t).replace(Jd,"%23").replace(G1,"%3F")}function n0(t){return t==null?"":t0(t).replace(j1,"%2F")}function xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function s0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Xd," "),o=r.indexOf("="),a=xr(o<0?r:r.slice(0,o)),l=o<0?null:xr(r.slice(o+1));if(a in e){let c=e[a];vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Iu(t){let e="";for(let n in t){const s=t[n];if(n=e0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(s)?s.map(r=>r&&Oa(r)):[s&&Oa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function i0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const r0=Symbol(""),Tu=Symbol(""),Rl=Symbol(""),nf=Symbol(""),Ma=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ts(4,{from:n,to:e})):h instanceof Error?a(h):A1(h)?a(Ts(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ko(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(o0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(nn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=p1(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&nn(d,n,s,r,o)()}))}}return i}function o0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Su(t){const e=St(Rl),n=St(nf),s=Se(()=>e.resolve(Qe(t.to))),i=Se(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Is.bind(null,u));if(d>-1)return d;const m=ku(l[c-2]);return c>1&&ku(u)===m&&h[h.length-1].path!==m?h.findIndex(Is.bind(null,l[c-2])):d}),r=Se(()=>i.value>-1&&u0(n.params,s.value.params)),o=Se(()=>i.value>-1&&i.value===n.matched.length-1&&Gd(n.params,s.value.params));function a(l={}){return c0(l)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(hi):Promise.resolve()}return{route:s,href:Se(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const a0=Ed({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Su,setup(t,{slots:e}){const n=Bi(Su(t)),{options:s}=St(Rl),i=Se(()=>({[xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:kl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),l0=a0;function c0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function u0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ku(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xu=(t,e,n)=>t??e??n,h0=Ed({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(Ma),i=Se(()=>t.route||s.value),r=St(Tu,0),o=Se(()=>{let c=Qe(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Se(()=>i.value.matched[o.value]);pr(Tu,Se(()=>o.value+1)),pr(r0,a),pr(Ma,i);const l=Ve();return fn(()=>[l.value,a.value,t.name],([c,u,h],[d,m,_])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Is(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ru(n.default,{Component:d,route:c});const m=h.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=kl(d,be({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ru(n.default,{Component:x,route:c})||x}}});function Ru(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sf=h0;function d0(t){const e=W1(t.routes,t),n=t.parseQuery||s0,s=t.stringifyQuery||Iu,i=t.history,r=Qs(),o=Qs(),a=Qs(),l=gg(Xt);let c=Xt;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,v=>""+v),h=jo.bind(null,n0),d=jo.bind(null,xr);function m(v,O){let k,U;return Kd(v)?(k=e.getRecordMatcher(v),U=O):U=v,e.addRoute(U,k)}function _(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=be({},O||l.value),typeof v=="string"){const g=qo(n,v,O.path),y=e.resolve({path:g.path},O),w=i.createHref(g.fullPath);return be(g,y,{params:d(y.params),hash:xr(g.hash),redirectedFrom:void 0,href:w})}let k;if("path"in v)k=be({},v,{path:qo(n,v.path,O.path).path});else{const g=be({},v.params);for(const y in g)g[y]==null&&delete g[y];k=be({},v,{params:h(g)}),O.params=h(O.params)}const U=e.resolve(k,O),ue=v.hash||"";U.params=u(d(U.params));const f=_1(s,be({},v,{hash:Z1(ue),path:U.path})),p=i.createHref(f);return be({fullPath:f,hash:ue,query:s===Iu?i0(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?qo(n,v,l.value.path):be({},v)}function z(v,O){if(c!==v)return Ts(8,{from:O,to:v})}function M(v){return ve(v)}function J(v){return M(be(P(v),{replace:!0}))}function ge(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),be({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ve(v,O){const k=c=A(v),U=l.value,ue=v.state,f=v.force,p=v.replace===!0,g=ge(k);if(g)return ve(be(P(g),{state:typeof g=="object"?be({},ue,g.state):ue,force:f,replace:p}),O||k);const y=k;y.redirectedFrom=O;let w;return!f&&y1(s,U,k)&&(w=Ts(16,{to:y,from:U}),Ct(U,U,!0,!1)),(w?Promise.resolve(w):Y(y,U)).catch(E=>Dt(E)?Dt(E,2)?E:Kt(E):ce(E,y,U)).then(E=>{if(E){if(Dt(E,2))return ve(be({replace:p},P(E.to),{state:typeof E.to=="object"?be({},ue,E.to.state):ue,force:f}),O||y)}else E=D(y,U,!0,p,ue);return fe(y,U,E),E})}function N(v,O){const k=z(v,O);return k?Promise.reject(k):Promise.resolve()}function F(v){const O=is.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Y(v,O){let k;const[U,ue,f]=f0(v,O);k=Ko(U.reverse(),"beforeRouteLeave",v,O);for(const g of U)g.leaveGuards.forEach(y=>{k.push(nn(y,v,O))});const p=N.bind(null,v,O);return k.push(p),ze(k).then(()=>{k=[];for(const g of r.list())k.push(nn(g,v,O));return k.push(p),ze(k)}).then(()=>{k=Ko(ue,"beforeRouteUpdate",v,O);for(const g of ue)g.updateGuards.forEach(y=>{k.push(nn(y,v,O))});return k.push(p),ze(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(vt(g.beforeEnter))for(const y of g.beforeEnter)k.push(nn(y,v,O));else k.push(nn(g.beforeEnter,v,O));return k.push(p),ze(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=Ko(f,"beforeRouteEnter",v,O),k.push(p),ze(k))).then(()=>{k=[];for(const g of o.list())k.push(nn(g,v,O));return k.push(p),ze(k)}).catch(g=>Dt(g,8)?g:Promise.reject(g))}function fe(v,O,k){a.list().forEach(U=>F(()=>U(v,O,k)))}function D(v,O,k,U,ue){const f=z(v,O);if(f)return f;const p=O===Xt,g=cs?history.state:{};k&&(U||p?i.replace(v.fullPath,be({scroll:p&&g&&g.scroll},ue)):i.push(v.fullPath,ue)),l.value=v,Ct(v,O,k,p),Kt()}let le;function Be(){le||(le=i.listen((v,O,k)=>{if(!tr.listening)return;const U=A(v),ue=ge(U);if(ue){ve(be(ue,{replace:!0}),U).catch(hi);return}c=U;const f=l.value;cs&&k1(_u(f.fullPath,k.delta),T1()),Y(U,f).catch(p=>Dt(p,12)?p:Dt(p,2)?(ve(p.to,U).then(g=>{Dt(g,20)&&!k.delta&&k.type===ki.pop&&i.go(-1,!1)}).catch(hi),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ce(p,U,f))).then(p=>{p=p||D(U,f,!1),p&&(k.delta&&!Dt(p,8)?i.go(-k.delta,!1):k.type===ki.pop&&Dt(p,20)&&i.go(-1,!1)),fe(U,f,p)}).catch(hi)}))}let Ke=Qs(),se=Qs(),pe;function ce(v,O,k){Kt(v);const U=se.list();return U.length?U.forEach(ue=>ue(v,O,k)):console.error(v),Promise.reject(v)}function Ot(){return pe&&l.value!==Xt?Promise.resolve():new Promise((v,O)=>{Ke.add([v,O])})}function Kt(v){return pe||(pe=!v,Be(),Ke.list().forEach(([O,k])=>v?k(v):O()),Ke.reset()),v}function Ct(v,O,k,U){const{scrollBehavior:ue}=t;if(!cs||!ue)return Promise.resolve();const f=!k&&x1(_u(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return vl().then(()=>ue(v,O,f)).then(p=>p&&S1(p)).catch(p=>ce(p,v,O))}const Xe=v=>i.go(v);let ss;const is=new Set,tr={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:x,getRoutes:C,resolve:A,options:t,push:M,replace:J,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Ot,install(v){const O=this;v.component("RouterLink",l0),v.component("RouterView",sf),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),cs&&!ss&&l.value===Xt&&(ss=!0,M(i.location).catch(ue=>{}));const k={};for(const ue in Xt)Object.defineProperty(k,ue,{get:()=>l.value[ue],enumerable:!0});v.provide(Rl,O),v.provide(nf,od(k)),v.provide(Ma,l);const U=v.unmount;is.add(v),v.unmount=function(){is.delete(v),is.size<1&&(c=Xt,le&&le(),le=null,l.value=Xt,ss=!1,pe=!1),U()}}};function ze(v){return v.reduce((O,k)=>O.then(()=>F(k)),Promise.resolve())}return tr}function f0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Is(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Is(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const T=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+rf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},p0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(of(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new m0;const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const af=function(t){const e=of(t);return Al.encodeByteArray(e,!0)},Rr=function(t){return af(t).replace(/\./g,"")},Ar=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){return lf(void 0,t)}function lf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_0(n)||(t[n]=lf(t[n],e[n]));return t}function _0(t){return t!=="__proto__"}/**
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
 */function y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v0=()=>y0().__FIREBASE_DEFAULTS__,w0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ar(t[1]);return e&&JSON.parse(e)},Pl=()=>{try{return v0()||w0()||C0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cf=t=>{var e,n;return(n=(e=Pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},E0=t=>{const e=cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uf=()=>{var t;return(t=Pl())===null||t===void 0?void 0:t.config},hf=t=>{var e;return(e=Pl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function b0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rr(JSON.stringify(n)),Rr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function I0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T0(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ff(){return rf.NODE_ADMIN===!0}function S0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="FirebaseError";class kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=x0,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?R0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,s)}}function R0(t,e){return t.replace(A0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const A0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=xi(Ar(r[0])||""),n=xi(Ar(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},P0=function(t){const e=pf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},N0=function(t){const e=pf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Da(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Au(r)&&Au(o)){if(!Nr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Au(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function M0(t,e){const n=new D0(t,e);return n.subscribe.bind(n)}class D0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");L0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Yo),i.error===void 0&&(i.error=Yo),i.complete===void 0&&(i.complete=Yo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yo(){}function Ol(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Eo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Nn="[DEFAULT]";/**
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
 */class U0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Co;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W0(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $0(t){return t===Nn?void 0:t}function W0(t){return t.instantiationMode==="EAGER"}/**
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
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const V0={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},H0=de.INFO,z0={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},j0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=z0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=H0,this._logHandler=j0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const q0=(t,e)=>e.some(n=>t instanceof n);let Pu,Nu;function G0(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K0(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mf=new WeakMap,La=new WeakMap,gf=new WeakMap,Qo=new WeakMap,Dl=new WeakMap;function Y0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mf.set(n,t)}).catch(()=>{}),Dl.set(e,t),e}function Q0(t){if(La.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});La.set(t,e)}let Fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function J0(t){Fa=t(Fa)}function X0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Jo(this),e,...n);return gf.set(s,e.sort?e.sort():[e]),pn(s)}:K0().includes(t)?function(...e){return t.apply(Jo(this),e),pn(mf.get(this))}:function(...e){return pn(t.apply(Jo(this),e))}}function Z0(t){return typeof t=="function"?X0(t):(t instanceof IDBTransaction&&Q0(t),q0(t,G0())?new Proxy(t,Fa):t)}function pn(t){if(t instanceof IDBRequest)return Y0(t);if(Qo.has(t))return Qo.get(t);const e=Z0(t);return e!==t&&(Qo.set(t,e),Dl.set(e,t)),e}const Jo=t=>Dl.get(t);function ey(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=pn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ty=["get","getKey","getAll","getAllKeys","count"],ny=["put","add","delete","clear"],Xo=new Map;function Ou(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xo.get(e))return Xo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ny.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ty.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xo.set(e,r),r}J0(t=>({...t,get:(e,n,s)=>Ou(e,n)||t.get(e,n,s),has:(e,n)=>!!Ou(e,n)||t.has(e,n)}));/**
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
 */class sy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ua="@firebase/app",Mu="0.9.15";/**
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
 */const Yn=new Ml("@firebase/app"),ry="@firebase/app-compat",oy="@firebase/analytics-compat",ay="@firebase/analytics",ly="@firebase/app-check-compat",cy="@firebase/app-check",uy="@firebase/auth",hy="@firebase/auth-compat",dy="@firebase/database",fy="@firebase/database-compat",py="@firebase/functions",my="@firebase/functions-compat",gy="@firebase/installations",_y="@firebase/installations-compat",yy="@firebase/messaging",vy="@firebase/messaging-compat",wy="@firebase/performance",Cy="@firebase/performance-compat",Ey="@firebase/remote-config",by="@firebase/remote-config-compat",Iy="@firebase/storage",Ty="@firebase/storage-compat",Sy="@firebase/firestore",ky="@firebase/firestore-compat",xy="firebase",Ry="10.1.0";/**
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
 */const $a="[DEFAULT]",Ay={[Ua]:"fire-core",[ry]:"fire-core-compat",[ay]:"fire-analytics",[oy]:"fire-analytics-compat",[cy]:"fire-app-check",[ly]:"fire-app-check-compat",[uy]:"fire-auth",[hy]:"fire-auth-compat",[dy]:"fire-rtdb",[fy]:"fire-rtdb-compat",[py]:"fire-fn",[my]:"fire-fn-compat",[gy]:"fire-iid",[_y]:"fire-iid-compat",[yy]:"fire-fcm",[vy]:"fire-fcm-compat",[wy]:"fire-perf",[Cy]:"fire-perf-compat",[Ey]:"fire-rc",[by]:"fire-rc-compat",[Iy]:"fire-gcs",[Ty]:"fire-gcs-compat",[Sy]:"fire-fst",[ky]:"fire-fst-compat","fire-js":"fire-js",[xy]:"fire-js-all"};/**
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
 */const Or=new Map,Wa=new Map;function Py(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(Wa.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;Wa.set(e,t);for(const n of Or.values())Py(n,t);return!0}function Ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ny={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new Hi("app","Firebase",Ny);/**
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
 */class Oy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=Ry;function _f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$a,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw mn.create("no-options");const r=Or.get(i);if(r){if(Nr(n,r.options)&&Nr(s,r.config))return r;throw mn.create("duplicate-app",{appName:i})}const o=new B0(i);for(const l of Wa.values())o.addComponent(l);const a=new Oy(n,s,o);return Or.set(i,a),a}function yf(t=$a){const e=Or.get(t);if(!e&&t===$a&&uf())return _f();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=Ay[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}ks(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const My="firebase-heartbeat-database",Dy=1,Ri="firebase-heartbeat-store";let Zo=null;function vf(){return Zo||(Zo=ey(My,Dy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ri)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Zo}async function Ly(t){try{return await(await vf()).transaction(Ri).objectStore(Ri).get(wf(t))}catch(e){if(e instanceof kn)Yn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function Du(t,e){try{const s=(await vf()).transaction(Ri,"readwrite");await s.objectStore(Ri).put(e,wf(t)),await s.done}catch(n){if(n instanceof kn)Yn.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(s.message)}}}function wf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fy=1024,Uy=30*24*60*60*1e3;class $y{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new By(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Uy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lu(),{heartbeatsToSend:n,unsentEntries:s}=Wy(this._heartbeatsCache.heartbeats),i=Rr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lu(){return new Date().toISOString().substring(0,10)}function Wy(t,e=Fy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class By{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ly(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(t){return Rr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vy(t){ks(new Kn("platform-logger",e=>new sy(e),"PRIVATE")),ks(new Kn("heartbeat",e=>new $y(e),"PRIVATE")),gn(Ua,Mu,t),gn(Ua,Mu,"esm2017"),gn("fire-js","")}Vy("");var Hy="firebase",zy="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(Hy,zy,"app");const jy={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},Cf=_f(jy);function Fl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qy=Ef,bf=new Hi("auth","Firebase",Ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Ml("@firebase/auth");function Gy(t,...e){Mr.logLevel<=de.WARN&&Mr.warn(`Auth (${Ws}): ${t}`,...e)}function _r(t,...e){Mr.logLevel<=de.ERROR&&Mr.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw Ul(t,...e)}function xt(t,...e){return Ul(t,...e)}function Ky(t,e,n){const s=Object.assign(Object.assign({},qy()),{[e]:n});return new Hi("auth","Firebase",s).create(e,{appName:t.name})}function Ul(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bf.create(t,...e)}function j(t,e,...n){if(!t)throw Ul(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function Ht(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yy(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yy()||I0()||"connection"in navigator)?navigator.onLine:!0}function Jy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Nl()||df()}get(){return Qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new zi(3e4,6e4);function ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,s,i={}){return Tf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),If.fetch()(Sf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Tf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Xy),e);try{const i=new ev(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ur(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ur(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ur(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ky(t,u,c);wt(t,u)}}catch(i){if(i instanceof kn)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function bo(t,e,n,s,i={}){const r=await Bs(t,e,n,s,i);return"mfaPendingCredential"in r&&wt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?$l(t.config,i):`${t.config.apiScheme}://${i}`}class ev{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),Zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ur(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function nv(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sv(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=Wl(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:di(ea(i.auth_time)),issuedAtTime:di(ea(i.iat)),expirationTime:di(ea(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ea(t){return Number(t)*1e3}function Wl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ar(n);return i?JSON.parse(i):(_r("Failed to decode base64 JWT payload"),null)}catch(i){return _r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iv(t){const e=Wl(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kn&&rv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function rv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Dr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ai(t,nv(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?cv(r.providerUserInfo):[],a=lv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new kf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function av(t){const e=rt(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function cv(t){return t.map(e=>{var{providerId:n}=e,s=Fl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t,e){const n=await Tf(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",If.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await uv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Pi;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sv(this,e)}reload(){return av(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ai(this,tv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:J,providerData:ge,stsTokenManager:ve}=n;j(z&&ve,e,"internal-error");const N=Pi.fromJSON(this.name,ve);j(typeof z=="string",e,"internal-error"),Zt(h,e.name),Zt(d,e.name),j(typeof M=="boolean",e,"internal-error"),j(typeof J=="boolean",e,"internal-error"),Zt(m,e.name),Zt(_,e.name),Zt(C,e.name),Zt(x,e.name),Zt(A,e.name),Zt(P,e.name);const F=new qn({uid:z,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:J,photoURL:_,phoneNumber:m,tenantId:C,stsTokenManager:N,createdAt:A,lastLoginAt:P});return ge&&Array.isArray(ge)&&(F.providerData=ge.map(Y=>Object.assign({},Y))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new Pi;i.updateFromServerResponse(n);const r=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Dr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,r),this.fullPersistenceKey=yr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gs(Ut(Wu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ut(Wu);const o=yr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=qn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Of(e))return"Blackberry";if(Mf(e))return"Webos";if(Bl(e))return"Safari";if((e.includes("chrome/")||Af(e))&&!e.includes("edge/"))return"Chrome";if(Nf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rf(t=Ge()){return/firefox\//i.test(t)}function Bl(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Af(t=Ge()){return/crios\//i.test(t)}function Pf(t=Ge()){return/iemobile/i.test(t)}function Nf(t=Ge()){return/android/i.test(t)}function Of(t=Ge()){return/blackberry/i.test(t)}function Mf(t=Ge()){return/webos/i.test(t)}function Io(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hv(t=Ge()){var e;return Io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dv(){return T0()&&document.documentMode===10}function Df(t=Ge()){return Io(t)||Nf(t)||Mf(t)||Of(t)||/windows phone/i.test(t)||Pf(t)}function fv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e=[]){let n;switch(t){case"Browser":n=Bu(Ge());break;case"Worker":n=`${Bu(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${s}`}async function Ff(t,e){return Bs(t,"GET","/v2/recaptchaConfig",ji(t,e))}function Vu(t){return t!==void 0&&t.enterprise!==void 0}class Uf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $f(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",pv().appendChild(s)})}function mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gv="https://www.google.com/recaptcha/enterprise.js?render=",_v="recaptcha-enterprise",yv="NO_RECAPTCHA";class Wf{constructor(e){this.type=_v,this.auth=qi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ff(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Uf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Vu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(yv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Vu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$f(gv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hu(t,e,n,s=!1){const i=new Wf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class vv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new vv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}async initializeRecaptchaConfig(){const e=await Ff(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Uf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Wf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return rt(t)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=M0(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){const n=Ll(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Nr(r,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function Ev(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bv(t,e,n){const s=qi(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Bf(e),{host:o,port:a}=Iv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tv()}function Bf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Iv(t){const e=Bf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ju(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ju(o)}}}function ju(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function Sv(t,e){return Bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e){return bo(t,"POST","/v1/accounts:signInWithPassword",ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}async function xv(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Vl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ni(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hu(e,s,"signInWithPassword");return ta(e,i)}else return ta(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Hu(e,s,"signInWithPassword");return ta(e,r)}else return Promise.reject(i)});case"emailLink":return kv(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xv(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return bo(t,"POST","/v1/accounts:signInWithIdp",ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="http://localhost";class Qn extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:Rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pv(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,s=si(ii(t)).deep_link_id;return(s?si(ii(s)).link:null)||s||n||e||t}class Hl{constructor(e){var n,s,i,r,o,a;const l=si(ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Av((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Pv(e);try{return new Hl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Hl.parseLink(n);return j(s,"argument-error"),Ni._fromEmailAndCode(e,s.code,s.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gi extends Vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Gi{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Gi{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await qn._fromIdTokenResponse(e,s,i),o=qu(s);return new xs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=qu(s);return new xs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function qu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends kn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Lr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Lr(e,n,s,i)}}function Hf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Lr._fromErrorAndOperation(t,r,e,s):r})}async function Nv(t,e,n=!1){const s=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",s)}/**
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
 */async function Ov(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ai(t,Hf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=Wl(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),xs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e,n=!1){const s="signIn",i=await Hf(t,s,e),r=await xs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Mv(t,e){return zf(qi(t),e)}function Dv(t,e,n){return Mv(rt(t),Vs.credential(e,n))}function Lv(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function Fv(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Uv(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}const Fr="__sak";/**
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
 */class jf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){const t=Ge();return Bl(t)||Io(t)}const Wv=1e3,Bv=10;class qf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$v()&&fv(),this.fallbackToPolling=Df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);dv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Bv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qf.type="LOCAL";const Vv=qf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Hv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new To(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Hv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function jv(t){Rt().location.href=t}/**
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
 */function Yf(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function qv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kv(){return Yf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",Yv=1,Ur="firebaseLocalStorage",Jf="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function So(t,e){return t.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function Qv(){const t=indexedDB.deleteDatabase(Qf);return new Ki(t).toPromise()}function Va(){const t=indexedDB.open(Qf,Yv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ur,{keyPath:Jf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ur)?e(s):(s.close(),await Qv(),e(await Va()))})})}async function Gu(t,e,n){const s=So(t,!0).put({[Jf]:e,value:n});return new Ki(s).toPromise()}async function Jv(t,e){const n=So(t,!1).get(e),s=await new Ki(n).toPromise();return s===void 0?null:s.value}function Ku(t,e){const n=So(t,!0).delete(e);return new Ki(n).toPromise()}const Xv=800,Zv=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Zv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(Kv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qv(),!this.activeServiceWorker)return;this.sender=new zv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Gu(e,Fr,"1"),await Ku(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Jv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ku(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=So(i,!1).getAll();return new Ki(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const e2=Xf;new zi(3e4,6e4);/**
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
 */function t2(t,e){return e?Ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jl extends Vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n2(t){return zf(t.auth,new jl(t),t.bypassAuthState)}function s2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Ov(n,new jl(t),t.bypassAuthState)}async function i2(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Nv(n,new jl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n2;case"linkViaPopup":case"linkViaRedirect":return i2;case"reauthViaPopup":case"reauthViaRedirect":return s2;default:wt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=new zi(2e3,1e4);class us extends Zf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r2.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="pendingRedirect",vr=new Map;class a2 extends Zf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await l2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(t,e){const n=h2(e),s=u2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function c2(t,e){vr.set(t._key(),e)}function u2(t){return Ut(t._redirectPersistence)}function h2(t){return yr(o2,t.config.apiKey,t.name)}async function d2(t,e,n=!1){const s=qi(t),i=t2(s,e),o=await new a2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=10*60*1e3;class p2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ep(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y2=/^https?/;async function v2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g2(t);for(const n of e)try{if(w2(n))return}catch{}wt(t,"unauthorized-domain")}function w2(t){const e=Ba(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!y2.test(n))return!1;if(_2.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const C2=new zi(3e4,6e4);function Qu(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E2(t){return new Promise((e,n)=>{var s,i,r;function o(){Qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qu(),n(xt(t,"network-request-failed"))},timeout:C2.get()})}if(!((i=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Rt().gapi)===null||r===void 0)&&r.load)o();else{const a=mv("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},$f(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wr=null,e})}let wr=null;function b2(t){return wr=wr||E2(t),wr}/**
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
 */const I2=new zi(5e3,15e3),T2="__/auth/iframe",S2="emulator/auth/iframe",k2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R2(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$l(e,S2):`https://${t.config.authDomain}/${T2}`,s={apiKey:e.apiKey,appName:t.name,v:Ws},i=x2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${$s(s).slice(1)}`}async function A2(t){const e=await b2(t),n=Rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:R2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Rt().setTimeout(()=>{r(o)},I2.get());function l(){Rt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const P2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N2=500,O2=600,M2="_blank",D2="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L2(t,e,n,s=N2,i=O2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},P2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ge().toLowerCase();n&&(a=Af(c)?M2:n),Rf(c)&&(e=e||D2,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(hv(c)&&a!=="_self")return F2(e||"",a),new Ju(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Ju(h)}function F2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const U2="__/auth/handler",$2="emulator/auth/handler",W2=encodeURIComponent("fac");async function Xu(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ws,eventId:i};if(e instanceof Vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Da(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Gi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${W2}=${encodeURIComponent(l)}`:"";return`${B2(t)}?${$s(a).slice(1)}${c}`}function B2({config:t}){return t.emulator?$l(t,$2):`https://${t.authDomain}/${U2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="webStorageSupport";class V2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=d2,this._overrideRedirectResult=c2}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xu(e,n,s,Ba(),i);return L2(e,o,zl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Xu(e,n,s,Ba(),i);return jv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await A2(e),s=new p2(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(na,{type:na},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[na];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Df()||Bl()||Io()}}const H2=V2;var Zu="@firebase/auth",eh="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function q2(t){ks(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lf(t)},c=new wv(s,i,r,l);return Ev(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ks(new Kn("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(s=>new z2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Zu,eh,j2(t)),gn(Zu,eh,"esm2017")}/**
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
 */const G2=5*60,K2=hf("authIdTokenMaxAge")||G2;let th=null;const Y2=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>K2)return;const i=n==null?void 0:n.token;th!==i&&(th=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q2(t=yf()){const e=Ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cv(t,{popupRedirectResolver:H2,persistence:[e2,Vv,Kf]}),s=hf("authTokenSyncURL");if(s){const r=Y2(s);Fv(n,r,()=>r(n.currentUser)),Lv(n,o=>r(o))}const i=cf("auth");return i&&bv(n,`http://${i}`),n}q2("Browser");const ql=Q2(Cf),$r=Ve({}),On=Ve({});Uv(ql,async t=>{if(t){$r.value=t,On.value=await cb(`users/${t.uid}`);for(const{observable:e,path:n}of wm)On.value["game-data"]&&On.value["game-data"]["tileswap-naenae"]&&On.value["game-data"]["tileswap-naenae"][n]&&(e.value=On.value["game-data"]["tileswap-naenae"][n])}else $r.value={},On.value={}});const Gl=Se(()=>$r.value);Se(()=>On.value);const Kl=Se(()=>Object.keys($r.value).length>0),J2=async(t,e)=>await Dv(ql,t,e),Ha=async()=>await ql.signOut(),nh="@firebase/database",sh="1.0.1";/**
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
 */let tp="";function X2(t){tp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Z2(e)}}catch{}return new ew},$n=np("localStorage"),za=np("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Ml("@firebase/database"),tw=function(){let t=1;return function(){return t++}}(),sp=function(t){const e=F0(t),n=new O0;n.update(e);const s=n.digest();return Al.encodeByteArray(s)},Yi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yi.apply(null,s):typeof s=="object"?e+=Oe(s):e+=s,e+=" "}return e};let Gn=null,ih=!0;const nw=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ys.logLevel=de.VERBOSE,Gn=ys.log.bind(ys),e&&za.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,za.remove("logging_enabled"))},je=function(...t){if(ih===!0&&(ih=!1,Gn===null&&za.get("logging_enabled")===!0&&nw(!0)),Gn){const e=Yi.apply(null,t);Gn(e)}},Qi=function(t){return function(...e){je(t,...e)}},ja=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yi(...t);ys.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Yi(...t)}`;throw ys.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+Yi(...t);ys.warn(e)},sw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ip=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rs="[MIN_NAME]",Jn="[MAX_NAME]",Hs=function(t,e){if(t===e)return 0;if(t===Rs||e===Jn)return-1;if(e===Rs||t===Jn)return 1;{const n=rh(t),s=rh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},rw=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},Yl=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Oe(e[s]),n+=":",n+=Yl(t[e[s]]);return n+="}",n},rp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function it(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const op=function(t){T(!ip(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ow=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const cw=new RegExp("^-?(0*)\\d{1,10}$"),uw=-2147483648,hw=2147483647,rh=function(t){if(cw.test(t)){const e=Number(t);if(e>=uw&&e<=hw)return e}return null},zs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},dw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="5",ap="v",lp="s",cp="r",up="f",hp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dp="ls",fp="p",qa="ac",pp="websocket",mp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _p(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===pp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mw(t)&&(n.ns=t.namespace);const i=[];return it(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.counters_={}}incrementCounter(e,n=1){qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return g0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={},ia={};function Jl(t){const e=t.toString();return sa[e]||(sa[e]=new gw),sa[e]}function _w(t,e){const n=t.toString();return ia[n]||(ia[n]=e()),ia[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&zs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="start",vw="close",ww="pLPCommand",Cw="pRTLPCB",yp="id",vp="pw",wp="ser",Ew="cb",bw="seg",Iw="ts",Tw="d",Sw="dframe",Cp=1870,Ep=30,kw=Cp-Ep,xw=25e3,Rw=3e4;class hs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qi(e),this.stats_=Jl(n),this.urlFn=l=>(this.appCheckToken&&(l[qa]=this.appCheckToken),_p(n,mp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rw)),iw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===oh)this.id=a,this.password=l;else if(o===vw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[oh]="t",s[wp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ew]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ap]=Ql,this.transportSessionId&&(s[lp]=this.transportSessionId),this.lastSessionId&&(s[dp]=this.lastSessionId),this.applicationId&&(s[fp]=this.applicationId),this.appCheckToken&&(s[qa]=this.appCheckToken),typeof location<"u"&&location.hostname&&hp.test(location.hostname)&&(s[cp]=up);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hs.forceAllow_=!0}static forceDisallow(){hs.forceDisallow_=!0}static isAvailable(){return hs.forceAllow_?!0:!hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ow()&&!aw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=af(n),i=rp(s,kw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sw]="t",s[yp]=e,s[vp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tw(),window[ww+this.uniqueCallbackIdentifier]=e,window[Cw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yp]=this.myID,e[vp]=this.myPW,e[wp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ep+s.length<=Cp;){const o=this.pendingSegs.shift();s=s+"&"+bw+i+"="+o.seg+"&"+Iw+i+"="+o.ts+"&"+Tw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(xw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=16384,Pw=45e3;let Wr=null;typeof MozWebSocket<"u"?Wr=MozWebSocket:typeof WebSocket<"u"&&(Wr=WebSocket);class ft{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qi(this.connId),this.stats_=Jl(n),this.connURL=ft.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ap]=Ql,typeof location<"u"&&location.hostname&&hp.test(location.hostname)&&(o[cp]=up),n&&(o[lp]=n),s&&(o[dp]=s),i&&(o[qa]=i),r&&(o[fp]=r),_p(e,pp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let s;ff(),this.mySock=new Wr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wr!==null&&!ft.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rp(n,Aw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hs,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let s=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ft];else{const i=this.transports_=[];for(const r of Oi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Oi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=6e4,Ow=5e3,Mw=10*1024,Dw=100*1024,ra="t",ah="d",Lw="s",lh="r",Fw="e",ch="o",uh="a",hh="n",dh="p",Uw="h";class $w{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qi("c:"+this.id+":"),this.transportManager_=new Oi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ra in e){const n=e[ra];n===uh?this.upgradeIfSecondaryHealthy_():n===lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ch&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(ra,e);if(ah in e){const s=e[ah];if(n===Uw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Lw?this.onConnectionShutdown_(s):n===lh?this.onReset_(s):n===Fw?ja("Server Error: "+s):n===ch?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ja("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ql!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ow))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Br extends Ip{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Br}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=32,ph=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new me("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function Tp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ww(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Sp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=ne(t),s=ne(e);if(n===null)return e;if(n===s)return Je(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xp(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Bw{constructor(e,n){this.errorPrefix_=n,this.parts_=Sp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Eo(this.parts_[s]);Rp(this)}}function Vw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Eo(e),Rp(t)}function Hw(t){const e=t.parts_.pop();t.byteLength_-=Eo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rp(t){if(t.byteLength_>ph)throw new Error(t.errorPrefix_+"has a key path longer than "+ph+" bytes ("+t.byteLength_+").");if(t.parts_.length>fh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fh+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Ip{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Zl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=1e3,zw=60*5*1e3,mh=30*1e3,jw=1.3,qw=3e4,Gw="server_kill",gh=3;class Wt extends bp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Qi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=zw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ff())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Br.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Oe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Co,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qt(e,"w")){const s=Ss(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||N0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=P0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ja("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qw&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new $w(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{nt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&nt(h),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Da(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Yl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gh&&(this.reconnectDelay_=mh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tp.replace(/\./g,"-")]=1,Nl()?e["framework.cordova"]=1:df()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Br.getInstance().currentlyOnline();return Da(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ko{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(Rs,e),i=new X(Rs,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;class Ap extends ko{static get __EMPTY_NODE(){return hr}static set __EMPTY_NODE(e){hr=e}compare(e,n){return Hs(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Jn,hr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,hr)}toString(){return".key"}}const ws=new Ap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Le.RED,this.left=i??et.EMPTY_NODE,this.right=r??et.EMPTY_NODE}copy(e,n,s,i,r){return new Le(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class Kw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new dr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new dr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new dr(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new Kw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){return Hs(t.name,e.name)}function ec(t,e){return Hs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;function Qw(t){Ga=t}const Pp=function(t){return typeof t=="number"?"number:"+op(t):"string:"+t},Np=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qt(e,".sv"),"Priority must be a string or number.")}else T(t===Ga||t.isEmpty(),"priority of unexpected type.");T(t===Ga||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Np(this.priorityNode_)}static set __childrenNodeConstructor(e){_h=e}static get __childrenNodeConstructor(){return _h}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:ne(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=op(this.value_):e+=this.value_,this.lazyHash_=sp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),r=De.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op,Mp;function Jw(t){Op=t}function Xw(t){Mp=t}class Zw extends ko{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Jn,new De("[PRIORITY-POST]",Mp))}makePost(e,n){const s=Op(e);return new X(n,new De("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new Zw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=Math.log(2);class tC{constructor(e){const n=r=>parseInt(Math.log(r)/eC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Le(d,h.node,Le.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),C=i(m+1,c);return h=t[m],d=n?n(h):h,new Le(d,h.node,Le.BLACK,_,C)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,C){const x=h-_,A=h;h-=_;const P=i(x+1,A),z=t[x],M=n?n(z):z;m(new Le(M,z.node,C,null,P))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));C?d(x,Le.BLACK):(d(x,Le.BLACK),d(x,Le.RED))}return u},o=new tC(t.length),a=r(o);return new et(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const ls={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ls&&Ie,"ChildrenNode.ts has not been loaded"),oa=oa||new $t({".priority":ls},{".priority":Ie}),oa}get(e){const n=Ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return qt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Vr(s,e.getCompare()):a=ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=Pr(this.indexes_,(i,r)=>{const o=Ss(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vr(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pr(this.indexes_,i=>{if(i===ls)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Np(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zs||(Zs=new V(new et(ec),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zs:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zs:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{T(ne(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pp(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ji?-1:0}withIndex(e){if(e===ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ws?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nC extends V{constructor(){super(new et(ec),V.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Ji=new nC;Object.defineProperties(X,{MIN:{value:new X(Rs,V.EMPTY_NODE)},MAX:{value:new X(Jn,Ji)}});Ap.__EMPTY_NODE=V.EMPTY_NODE;De.__childrenNodeConstructor=V;Qw(Ji);Xw(Ji);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=!0;function Fe(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,Fe(e))}if(!(t instanceof Array)&&sC){const n=[];let s=!1;if(it(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=Vr(n,Yw,o=>o.name,ec);if(s){const o=Vr(n,Ie.getCompare());return new V(r,Fe(e),new $t({".priority":o},{".priority":Ie}))}else return new V(r,Fe(e),$t.Default)}else{let n=V.EMPTY_NODE;return it(t,(s,i)=>{if(qt(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}Jw(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends ko{constructor(e){super(),this.indexPath_=e,T(!Z(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hs(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Ji);return new X(Jn,e)}toString(){return Sp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC extends ko{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=Fe(e);return new X(n,s)}toString(){return".value"}}const oC=new rC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){return{type:"value",snapshotNode:t}}function As(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Mi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Di(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Mi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(As(n,s)):o.trackChildChange(Di(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Mi(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Di(i,r,o))}else s.trackChildChange(As(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.indexedFilter_=new tc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Li.getStartPost_(e),this.endPost_=Li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new X(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new X(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new X(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,m)=>h(m,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new X(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Di(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Mi(n,h));const C=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(As(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Mi(c.name,c.node)),r.trackChildChange(As(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cC(t){return t.loadsAllData()?new tc(t.getIndex()):t.hasLimit()?new lC(t):new Li(t)}function yh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===oC?n="$value":t.index_===ws?n="$key":(T(t.index_ instanceof iC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Oe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Oe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Oe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends bp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Qi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hr.getListenId_(e,s),a={};this.listens_[o]=a;const l=yh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ss(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Hr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yh(e._queryParams),s=e._path.toString(),i=new Co;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xi(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return{value:null,children:new Map}}function Lp(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ne(e);t.children.has(s)||t.children.set(s,zr());const i=t.children.get(s);e=ye(e),Lp(i,e,n)}}function Ka(t,e,n){t.value!==null?n(e,t.value):hC(t,(s,i)=>{const r=new me(e.toString()+"/"+s);Ka(i,r,n)})}function hC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wh=10*1e3,fC=30*1e3,pC=5*60*1e3;class mC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dC(e);const s=wh+(fC-wh)*Math.random();fi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;it(e,(i,r)=>{r>0&&qt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*pC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Fp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ic(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=gt.ACK_USER_WRITE,this.source=Fp()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new jr(ae(),n,this.revert)}}else return T(ne(this.path)===e,"operationForChild called for unrelated child."),new jr(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new Fi(this.source,ae()):new Fi(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=gt.OVERWRITE}operationForChild(e){return Z(this.path)?new Xn(this.source,ae(),this.snap.getImmediateChild(e)):new Xn(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=gt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Xn(this.source,ae(),n.value):new Ui(this.source,ae(),n)}else return T(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ui(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _C(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(aC(o.childName,o.snapshotNode))}),ei(t,i,"child_removed",e,s,n),ei(t,i,"child_added",e,s,n),ei(t,i,"child_moved",r,s,n),ei(t,i,"child_changed",e,s,n),ei(t,i,"value",e,s,n),i}function ei(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>vC(t,a,l)),o.forEach(a=>{const l=yC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function yC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vC(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){return{eventCache:t,serverCache:e}}function pi(t,e,n,s){return xo(new Tn(e,n,s),t.serverCache)}function Up(t,e,n,s){return xo(t.eventCache,new Tn(e,n,s))}function qr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;const wC=()=>(aa||(aa=new et(rw)),aa);class we{constructor(e,n=wC()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return it(e,(s,i)=>{n=n.set(new me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(Z(e))return null;{const s=ne(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Me(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new we(null)}}set(e,n){if(Z(e))return new we(n,this.children);{const s=ne(e),r=(this.children.get(s)||new we(null)).set(ye(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(Z(e))return n;{const s=ne(e),r=(this.children.get(s)||new we(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=ne(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Me(n,i),s):new we(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new we(null))}}function mi(t,e,n){if(Z(e))return new yt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Je(i,e);return r=r.updateChild(o,n),new yt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new yt(r)}}}function Ch(t,e,n){let s=t;return it(n,(i,r)=>{s=mi(s,Me(e,i),r)}),s}function Eh(t,e){if(Z(e))return yt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new yt(n)}}function Ya(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function bh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function _n(t,e){if(Z(e))return t;{const n=ns(t,e);return n!=null?new yt(new we(n)):new yt(t.writeTree_.subtree(e))}}function Qa(t){return t.writeTree_.isEmpty()}function Ps(t,e){return $p(ae(),t.writeTree_,e)}function $p(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$p(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e){return Hp(e,t)}function CC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=mi(t.visibleWrites,e,n)),t.lastWriteId=s}function EC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function bC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&IC(a,s.path)?i=!1:mt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return TC(t),!0;if(s.snap)t.visibleWrites=Eh(t.visibleWrites,s.path);else{const a=s.children;it(a,l=>{t.visibleWrites=Eh(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function IC(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(Me(t.path,n),e))return!0;return!1}function TC(t){t.visibleWrites=Wp(t.allWrites,SC,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function SC(t){return t.visible}function Wp(t,e,n){let s=yt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)mt(n,o)?(a=Je(n,o),s=mi(s,a,r.snap)):mt(o,n)&&(a=Je(o,n),s=mi(s,ae(),r.snap.getChild(a)));else if(r.children){if(mt(n,o))a=Je(n,o),s=Ch(s,a,r.children);else if(mt(o,n))if(a=Je(o,n),Z(a))s=Ch(s,ae(),r.children);else{const l=Ss(r.children,ne(a));if(l){const c=l.getChild(ye(a));s=mi(s,ae(),c)}}}else throw Us("WriteRecord should have .snap or .children")}}return s}function Bp(t,e,n,s,i){if(!s&&!i){const r=ns(t.visibleWrites,e);if(r!=null)return r;{const o=_n(t.visibleWrites,e);if(Qa(o))return n;if(n==null&&!Ya(o,ae()))return null;{const a=n||V.EMPTY_NODE;return Ps(o,a)}}}else{const r=_n(t.visibleWrites,e);if(!i&&Qa(r))return n;if(!i&&n==null&&!Ya(r,ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=Wp(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Ps(a,l)}}}function kC(t,e,n){let s=V.EMPTY_NODE;const i=ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=_n(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=Ps(_n(r,new me(o)),a);s=s.updateImmediateChild(o,l)}),bh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=_n(t.visibleWrites,e);return bh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function xC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Ya(t.visibleWrites,r))return null;{const o=_n(t.visibleWrites,r);return Qa(o)?i.getChild(n):Ps(o,i.getChild(n))}}function RC(t,e,n,s){const i=Me(e,n),r=ns(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Ps(o,s.getNode().getImmediateChild(n))}else return null}function AC(t,e){return ns(t.visibleWrites,e)}function PC(t,e,n,s,i,r,o){let a;const l=_n(t.visibleWrites,e),c=ns(l,ae());if(c!=null)a=c;else if(n!=null)a=Ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function NC(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Gr(t,e,n,s){return Bp(t.writeTree,t.treePath,e,n,s)}function rc(t,e){return kC(t.writeTree,t.treePath,e)}function Ih(t,e,n,s){return xC(t.writeTree,t.treePath,e,n,s)}function Kr(t,e){return AC(t.writeTree,Me(t.treePath,e))}function OC(t,e,n,s,i,r){return PC(t.writeTree,t.treePath,e,n,s,i,r)}function oc(t,e,n){return RC(t.writeTree,t.treePath,e,n)}function Vp(t,e){return Hp(Me(t.treePath,e),t.writeTree)}function Hp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Di(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Mi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,As(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Di(s,e.snapshotNode,i.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zp=new DC;class ac{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),r=OC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return{filter:t}}function FC(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UC(t,e,n,s,i){const r=new MC;let o,a;if(n.type===gt.OVERWRITE){const c=n;c.source.fromUser?o=Ja(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=Yr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===gt.MERGE){const c=n;c.source.fromUser?o=WC(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===gt.ACK_USER_WRITE){const c=n;c.revert?o=HC(t,e,c.path,s,i,r):o=BC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===gt.LISTEN_COMPLETE)o=VC(t,e,n.path,s,r);else throw Us("Unknown operation type: "+n.type);const l=r.getChanges();return $C(e,o,l),{viewCache:o,changes:l}}function $C(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dp(qr(e)))}}function jp(t,e,n,s,i,r){const o=e.eventCache;if(Kr(s,n)!=null)return e;{let a,l;if(Z(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zn(e),u=c instanceof V?c:V.EMPTY_NODE,h=rc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Gr(s,Zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ne(n);if(c===".priority"){T(In(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ih(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ih(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=oc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return pi(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Yr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=ne(n);if(!l.isCompleteForPath(n)&&In(n)>1)return e;const _=ye(n),x=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),m,x,_,zp,null)}const h=Up(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),d=new ac(i,h,r);return jp(t,h,n,i,d,a)}function Ja(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ac(i,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=pi(e,c,!0,t.filter.filtersNodes());else{const h=ne(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=pi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),m=a.getNode().getImmediateChild(h);let _;if(Z(d))_=s;else{const C=u.getCompleteChild(h);C!=null?Tp(d)===".priority"&&C.getChild(kp(d)).isEmpty()?_=C:_=C.updateChild(d,s):_=V.EMPTY_NODE}if(m.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=pi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Th(t,e){return t.eventCache.isCompleteForChild(e)}function WC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Me(n,l);Th(e,ne(u))&&(a=Ja(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Me(n,l);Th(e,ne(u))||(a=Ja(t,a,u,c,i,r,o))}),a}function Sh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),_=Sh(t,m,d);l=Yr(t,l,new me(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!m){const _=e.serverCache.getNode().getImmediateChild(h),C=Sh(t,_,d);l=Yr(t,l,new me(h),C,i,r,o,a)}}),l}function BC(t,e,n,s,i,r,o){if(Kr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Z(n)){let c=new we(null);return l.getNode().forEachChild(ws,(u,h)=>{c=c.set(new me(u),h)}),Xa(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=Me(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xa(t,e,n,c,i,r,a,o)}}function VC(t,e,n,s,i){const r=e.serverCache,o=Up(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return jp(t,o,n,s,zp,i)}function HC(t,e,n,s,i,r){let o;if(Kr(s,n)!=null)return e;{const a=new ac(s,e,i),l=e.eventCache.getNode();let c;if(Z(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gr(s,Zn(e));else{const h=e.serverCache.getNode();T(h instanceof V,"serverChildren would be complete if leaf node"),u=rc(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ne(n);let h=oc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gr(s,Zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Kr(s,ae())!=null,pi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tc(s.getIndex()),r=cC(s);this.processor_=LC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Tn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Tn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xo(h,u),this.eventGenerator_=new gC(this.query_)}get query(){return this.query_}}function jC(t){return t.viewCache_.serverCache.getNode()}function qC(t){return qr(t.viewCache_)}function GC(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function kh(t){return t.eventRegistrations_.length===0}function KC(t,e){t.eventRegistrations_.push(e)}function xh(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rh(t,e,n,s){e.type===gt.MERGE&&e.source.queryId!==null&&(T(Zn(t.viewCache_),"We should always have a full cache before handling merges"),T(qr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=UC(t.processor_,i,e,n,s);return FC(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,qp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function YC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(As(r,o))}),n.isFullyInitialized()&&s.push(Dp(n.getNode())),qp(t,s,n.getNode(),e)}function qp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _C(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr;class Gp{constructor(){this.views=new Map}}function QC(t){T(!Qr,"__referenceConstructor has already been defined"),Qr=t}function JC(){return T(Qr,"Reference.ts has not been loaded"),Qr}function XC(t){return t.views.size===0}function lc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Rh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rh(o,e,n,s));return r}}function Kp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Gr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=rc(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=xo(new Tn(a,l,!1),new Tn(s,i,!1));return new zC(e,c)}return o}function ZC(t,e,n,s,i,r){const o=Kp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),KC(o,n),YC(o,n)}function eE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Sn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(xh(c,n,s)),kh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(xh(l,n,s)),kh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Sn(t)&&r.push(new(JC())(e._repo,e._path)),{removed:r,events:o}}function Yp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const s of t.views.values())n=n||GC(s,e);return n}function Qp(t,e){if(e._queryParams.loadsAllData())return Ao(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Jp(t,e){return Qp(t,e)!=null}function Sn(t){return Ao(t)!=null}function Ao(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;function tE(t){T(!Jr,"__referenceConstructor has already been defined"),Jr=t}function nE(){return T(Jr,"Reference.ts has not been loaded"),Jr}let sE=1;class Ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=NC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xp(t,e,n,s,i){return CC(t.pendingWriteTree_,e,n,s,i),i?Zi(t,new Xn(Fp(),e,n)):[]}function Wn(t,e,n=!1){const s=EC(t.pendingWriteTree_,e);if(bC(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ae(),!0):it(s.children,o=>{r=r.set(new me(o),!0)}),Zi(t,new jr(s.path,r,n))}else return[]}function Xi(t,e,n){return Zi(t,new Xn(sc(),e,n))}function iE(t,e,n){const s=we.fromObject(n);return Zi(t,new Ui(sc(),e,s))}function rE(t,e){return Zi(t,new Fi(sc(),e))}function oE(t,e,n){const s=uc(t,n);if(s){const i=hc(s),r=i.path,o=i.queryId,a=Je(r,e),l=new Fi(ic(o),a);return dc(t,r,l)}else return[]}function Zp(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Jp(o,e))){const l=eE(o,e,n,s);XC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,m)=>Sn(m));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=uE(d);for(let _=0;_<m.length;++_){const C=m[_],x=C.query,A=sm(t,C);t.listenProvider_.startListening(gi(x),$i(t,x),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(gi(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(Po(d));t.listenProvider_.stopListening(gi(d),m)}))}hE(t,c)}return a}function em(t,e,n,s){const i=uc(t,s);if(i!=null){const r=hc(i),o=r.path,a=r.queryId,l=Je(o,e),c=new Xn(ic(a),l,n);return dc(t,o,c)}else return[]}function aE(t,e,n,s){const i=uc(t,s);if(i){const r=hc(i),o=r.path,a=r.queryId,l=Je(o,e),c=we.fromObject(n),u=new Ui(ic(a),l,c);return dc(t,o,u)}else return[]}function lE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const _=Je(d,i);r=r||yn(m,_),o=o||Sn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Sn(a),r=r||yn(a,ae())):(a=new Gp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const C=yn(_,ae());C&&(r=r.updateImmediateChild(m,C))}));const c=Jp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Po(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=dE();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=Ro(t.pendingWriteTree_,i);let h=ZC(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Qp(a,e);h=h.concat(fE(t,e,d))}return h}function cc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=yn(a,l);if(c)return c});return Bp(i,e,r,n,!0)}function cE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Je(c,n);s=s||yn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||yn(i,ae()):(i=new Gp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Tn(s,!0,!1):null,a=Ro(t.pendingWriteTree_,e._path),l=Kp(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return qC(l)}function Zi(t,e){return tm(e,t.syncPointTree_,null,Ro(t.pendingWriteTree_,ae()))}function tm(t,e,n,s){if(Z(t.path))return nm(t,e,n,s);{const i=e.get(ae());n==null&&i!=null&&(n=yn(i,ae()));let r=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Vp(s,o);r=r.concat(tm(a,l,c,u))}return i&&(r=r.concat(lc(i,t,s,n))),r}}function nm(t,e,n,s){const i=e.get(ae());n==null&&i!=null&&(n=yn(i,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Vp(s,o),u=t.operationForChild(o);u&&(r=r.concat(nm(u,a,l,c)))}),i&&(r=r.concat(lc(i,t,s,n))),r}function sm(t,e){const n=e.query,s=$i(t,n);return{hashFn:()=>(jC(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?oE(t,n._path,s):rE(t,n._path);{const r=lw(i,n);return Zp(t,n,null,r)}}}}function $i(t,e){const n=Po(e);return t.queryToTagMap.get(n)}function Po(t){return t._path.toString()+"$"+t._queryIdentifier}function uc(t,e){return t.tagToQueryMap.get(e)}function hc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function dc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Ro(t.pendingWriteTree_,e);return lc(s,n,i,null)}function uE(t){return t.fold((e,n,s)=>{if(n&&Sn(n))return[Ao(n)];{let i=[];return n&&(i=Yp(n)),it(s,(r,o)=>{i=i.concat(o)}),i}})}function gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nE())(t._repo,t._path):t}function hE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Po(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dE(){return sE++}function fE(t,e,n){const s=e._path,i=$i(t,e),r=sm(t,n),o=t.listenProvider_.startListening(gi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Z(c)&&u&&Sn(u))return[Ao(u).query];{let d=[];return u&&(d=d.concat(Yp(u).map(m=>m.query))),it(h,(m,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(gi(u),$i(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fc(n)}node(){return this.node_}}class pc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new pc(this.syncTree_,n)}node(){return cc(this.syncTree_,this.path_)}}const pE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ph=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},gE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_E=function(t,e,n,s){return mc(e,new pc(n,t),s)},im=function(t,e,n){return mc(t,new fc(e),n)};function mc(t,e,n){const s=t.getPriority().val(),i=Ph(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ph(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new De(i))),o.forEachChild(Ie,(a,l)=>{const c=mc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function _c(t,e){let n=e instanceof me?e:new me(e),s=t,i=ne(n);for(;i!==null;){const r=Ss(s.node.children,i)||{children:{},childCount:0};s=new gc(i,s,r),n=ye(n),i=ne(n)}return s}function js(t){return t.node.value}function rm(t,e){t.node.value=e,Za(t)}function om(t){return t.node.childCount>0}function yE(t){return js(t)===void 0&&!om(t)}function No(t,e){it(t.node.children,(n,s)=>{e(new gc(n,t,s))})}function am(t,e,n,s){n&&!s&&e(t),No(t,i=>{am(i,e,!0,s)}),n&&s&&e(t)}function vE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function er(t){return new me(t.parent===null?t.name:er(t.parent)+"/"+t.name)}function Za(t){t.parent!==null&&wE(t.parent,t.name,t)}function wE(t,e,n){const s=yE(n),i=qt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Za(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Za(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=/[\[\].#$\/\u0000-\u001F\u007F]/,EE=/[\[\].#$\u0000-\u001F\u007F]/,la=10*1024*1024,lm=function(t){return typeof t=="string"&&t.length!==0&&!CE.test(t)},cm=function(t){return typeof t=="string"&&t.length!==0&&!EE.test(t)},bE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cm(t)},IE=function(t,e,n,s){s&&e===void 0||yc(Ol(t,"value"),e,n)},yc=function(t,e,n){const s=n instanceof me?new Bw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(s)+" with contents = "+e.toString());if(ip(e))throw new Error(t+"contains "+e.toString()+" "+Mn(s));if(typeof e=="string"&&e.length>la/3&&Eo(e)>la)throw new Error(t+"contains a string greater than "+la+" utf8 bytes "+Mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(it(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vw(s,o),yc(t,a,s),Hw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Mn(s)+" in addition to actual children.")}},um=function(t,e,n,s){if(!(s&&n===void 0)&&!cm(n))throw new Error(Ol(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),um(t,e,n,s)},SE=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bE(n))throw new Error(Ol(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Nt(t,e,n){hm(t,n),RE(t,s=>mt(s,e)||mt(e,s))}function RE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(AE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gn&&je("event: "+n.toString()),zs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="repo_interrupt",NE=25;class OE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zr(),this.transactionQueueTree_=new gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ME(t,e,n){if(t.stats_=Jl(t.repoInfo_),t.forceRestClient_||dw())t.server_=new Hr(t.repoInfo_,(s,i,r,o)=>{Nh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Oh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(s,i,r,o)=>{Nh(t,s,i,r,o)},s=>{Oh(t,s)},s=>{LE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_w(t.repoInfo_,()=>new mC(t.stats_,t.server_)),t.infoData_=new uC,t.infoSyncTree_=new Ah({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Xi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wc(t,"connected",!1),t.serverSyncTree_=new Ah({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function DE(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vc(t){return pE({timestamp:DE(t)})}function Nh(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Pr(n,c=>Fe(c));o=aE(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=em(t.serverSyncTree_,r,l,i)}else if(s){const l=Pr(n,c=>Fe(c));o=iE(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=Xi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Mo(t,r)),Nt(t.eventQueue_,a,o)}function Oh(t,e){wc(t,"connected",e),e===!1&&$E(t)}function LE(t,e){it(e,(n,s)=>{wc(t,n,s)})}function wc(t,e,n){const s=new me("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=Xi(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function dm(t){return t.nextWriteId_++}function FE(t,e,n){const s=cE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());lE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Xi(t.serverSyncTree_,e._path,r);else{const a=$i(t.serverSyncTree_,e);o=em(t.serverSyncTree_,e._path,r,a)}return Nt(t.eventQueue_,e._path,o),Zp(t.serverSyncTree_,e,n,null,!0),r},i=>(Oo(t,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function UE(t,e,n,s,i){Oo(t,"set",{path:e.toString(),value:n,priority:s});const r=vc(t),o=Fe(n,s),a=cc(t.serverSyncTree_,e),l=im(o,a,r),c=dm(t),u=Xp(t.serverSyncTree_,e,l,c,!0);hm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const _=d==="ok";_||nt("set at "+e+" failed: "+d);const C=Wn(t.serverSyncTree_,c,!_);Nt(t.eventQueue_,e,C),BE(t,i,d,m)});const h=_m(t,e);Mo(t,h),Nt(t.eventQueue_,h,[])}function $E(t){Oo(t,"onDisconnectEvents");const e=vc(t),n=zr();Ka(t.onDisconnect_,ae(),(i,r)=>{const o=_E(i,r,t.serverSyncTree_,e);Lp(n,i,o)});let s=[];Ka(n,ae(),(i,r)=>{s=s.concat(Xi(t.serverSyncTree_,i,r));const o=_m(t,i);Mo(t,o)}),t.onDisconnect_=zr(),Nt(t.eventQueue_,ae(),s)}function WE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PE)}function Oo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function BE(t,e,n,s){e&&zs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fm(t,e,n){return cc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Cc(t,e=t.transactionQueueTree_){if(e||Do(t,e),js(e)){const n=mm(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VE(t,er(e),n)}else om(e)&&No(e,n=>{Cc(t,n)})}function VE(t,e,n){const s=n.map(c=>c.currentWriteId),i=fm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Oo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Wn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Do(t,_c(t.transactionQueueTree_,e)),Cc(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)zs(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Mo(t,e)}},o)}function Mo(t,e){const n=pm(t,e),s=er(n),i=mm(t,n);return HE(t,i,s),s}function HE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(n,l.path);let u=!1,h;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NE)u=!0,h="maxretry",i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=fm(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){yc("transaction failed: Data returned ",m,l.path);let _=Fe(m);typeof m=="object"&&m!=null&&qt(m,".priority")||(_=_.updatePriority(d.getPriority()));const x=l.currentWriteId,A=vc(t),P=im(_,d,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=dm(t),o.splice(o.indexOf(x),1),i=i.concat(Xp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(Wn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Do(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)zs(s[a]);Cc(t,t.transactionQueueTree_)}function pm(t,e){let n,s=t.transactionQueueTree_;for(n=ne(e);n!==null&&js(s)===void 0;)s=_c(s,n),e=ye(e),n=ne(e);return s}function mm(t,e){const n=[];return gm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function gm(t,e,n){const s=js(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);No(e,i=>{gm(t,i,n)})}function Do(t,e){const n=js(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,rm(e,n.length>0?n:void 0)}No(e,s=>{Do(t,s)})}function _m(t,e){const n=er(pm(t,e)),s=_c(t.transactionQueueTree_,e);return vE(s,i=>{ca(t,i)}),ca(t,s),am(s,i=>{ca(t,i)}),n}function ca(t,e){const n=js(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rm(e,void 0):n.length=r+1,Nt(t.eventQueue_,er(e),i);for(let o=0;o<s.length;o++)zs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mh=function(t,e){const n=qE(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},qE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=zE(t.substring(u,h)));const d=jE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class KE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:Tp(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=vh(this._queryParams),n=Yl(e);return n==="{}"?"default":n}get _queryObject(){return vh(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Ec))return!1;const n=this._repo===e._repo,s=xp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ww(this._path)}}class Gt extends Ec{constructor(e,n){super(e,n,new nc,!1)}get parent(){const e=kp(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=el(this.ref,e);return new Wi(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wi(i,el(this.ref,s),Ie)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ym(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?el(t._root,e):t._root}function el(t,e){return t=rt(t),ne(t._path)===null?TE("child","path",e,!1):um("child","path",e,!1),new Gt(t._repo,Me(t._path,e))}function QE(t,e){t=rt(t),SE("set",t._path),IE("set",e,t._path,!1);const n=new Co;return UE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function JE(t){t=rt(t);const e=new YE(()=>{}),n=new bc(e);return FE(t._repo,t,n).then(s=>new Wi(s,new Gt(t._repo,t._path),t._queryParams.getIndex()))}class bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new GE("value",this,new Wi(e.snapshotNode,new Gt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KE(this,e,n):null}matches(e){return e instanceof bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}QC(Gt);tE(Gt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="FIREBASE_DATABASE_EMULATOR_HOST",tl={};let ZE=!1;function eb(t,e,n,s){t.repoInfo_=new gp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function tb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mh(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[XE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Mh(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new vs(vs.OWNER):new pw(t.name,t.options,e);kE("Invalid Firebase Database URL",o),Z(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sb(a,t,u,new fw(t.name,n));return new ib(h,t)}function nb(t,e){const n=tl[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WE(t),delete n[t.key]}function sb(t,e,n,s){let i=tl[e.name];i||(i={},tl[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new OE(t,ZE,n,s),i[t.toURLString()]=r,r}class ib{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ME(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function rb(t=yf(),e){const n=Ll(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=E0("database");s&&ob(n,...s)}return n}function ob(t,e,n,s={}){t=rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new vs(vs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:b0(s.mockUserToken,t.app.options.projectId);r=new vs(o)}eb(i,e,n,r)}/**
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
 */function ab(t){X2(Ws),ks(new Kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(nh,sh,t),gn(nh,sh,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ab();const vm=rb(Cf),wm=[],nl=[];function lb(t){return t instanceof Set?Array.from(t):t}const cb=async t=>(await JE(ym(vm,t))).val(),ub=async(t,e)=>{nl.push({path:t,data:e})};setInterval(async()=>{const t=[];for(const{path:e,data:n}of nl)t.push(QE(ym(vm,e),n));await Promise.all(t),nl.length=0},1e4);const ua=async(t,e)=>{fn(t,n=>{Kl.value&&ub(`users/${Gl.value.uid}/game-data/tileswap-naenae/${e}/`,lb(n))},{deep:!0}),wm.push({observable:t,path:e})},Xr=Ve([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>Xr.value,set:t=>{Xr.value=t}});const Cm=Se(()=>Xr.value),Zr=Ve(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Zr.value,set:t=>{if(t<2)throw new Error("Modulo must be greater than 1");Zr.value=t}});const Ae=Se(()=>Zr.value),Em=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Zr.value=t},ds=Se(()=>new Array(Ae.value).fill().map((t,e)=>`rgb(${255*(e/(Ae.value-1))},${255*(e/(Ae.value-1))},${255*(e/(Ae.value-1))})`)),sn=class sn{constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill(0));for(const r of this.exclude)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of Xr.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=sn.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=sn.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Ae.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Ae.value-1:this.matrix[e][n]===Ae.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new sn({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(Ae.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}return n.matrix.every(s=>s.every(i=>i===1||i===-1))?this.generatePosition(e):n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new sn({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Ae.value+Ae.value)%Ae.value}};nr(sn,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new sn({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let Bt=sn;const so=class so{constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}};nr(so,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:30,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:30,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:75,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((C,x)=>{C===2?(s[_][x]=-1,i[_][x]=-1):C===1&&(s[_][x]=(a??2)-1)}));const l=s[0].length,c=s.length,u=Bt.getExcludeFromMatrix(s),h=new Bt({width:l,height:c,exclude:u,unlockCategory:0});h.setMatrix(s);const d=new Bt({width:l,height:c,exclude:u,unlockCategory:0});return d.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new so({base:h,target:d,moves:r,solution:o,id:n,modulo:a??2})}));let eo=so;const Dh=t=>`${t}`,to={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:Dh},tilesSwapped:{name:"Tiles Swapped",display:Dh},puzzlesCompleted:{name:"Puzzles Completed",display:t=>`${t} / ${eo.PUZZLES.length}`}},hb=Object.fromEntries(Object.keys(to).map(t=>[t,to[t].initialValue??0])),_i=class _i{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patternRange:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,modulo:l}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,this.rangeStart=i[0],this.rangeEnd=i[1],this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.challengeLayouts=this.generateLayouts(),this.nMoves=0,this.modulo=l??2}generateLayouts(){const e=Bt.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd),n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=_i.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=_i.THRESHOLD?i*2:i);return n.sort(()=>Math.random()-.5),n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=We();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.currentPattern=0}};nr(_i,"THRESHOLD",60);let sl=_i;const We=f1("store",()=>{const t=Ve({}),e=Ve({}),n=Ve({}),s=Ve(2),i=Ve([]),r=Ve([new sl({timeLimit:30,moveLimit:-1,totalClicks:60,patternRange:[1,39],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:2})]),o=Ve({...hb});setInterval(()=>{o.value.timePlayed++},1e3);function a(h){t.value=h}function l(h){e.value=h}function c(h){n.value=h}function u(h){i.value.includes(h)||(i.value.push(h),o.value.puzzlesCompleted++)}return ua(i,"solved-puzzles"),ua(s,"difficulty"),ua(o,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,solvedPuzzles:i,setLayout:a,setPuzzle:l,setChallenge:c,solvePuzzle:u,stats:o,challenges:r}}),He=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},db={components:{RouterView:sf},setup(){We()}};function fb(t,e,n,s,i,r){const o=Jg("router-view");return q(),En(o,null,{default:lt(({Component:a})=>[B(bs,{name:"fade",mode:"out-in"},{default:lt(()=>[(q(),En(Xg(a)))]),_:2},1024)]),_:1})}const pb=He(db,[["render",fb]]);const mb={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},gb=["src"];function _b(t,e,n,s,i,r){return q(),ee("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[K("span",null,Ue(n.name),1),K("img",{src:n.image},null,8,gb)])}const ha=He(mb,[["render",_b],["__scopeId","data-v-7bbaab8a"]]),yb="/tileswap-naenae/images/freeplay.png",vb="/tileswap-naenae/images/puzzles.png",wb="/tileswap-naenae/images/challenges.png";const Ic={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"black":"white"},color(){return this.black!==void 0?"white":"black"}}},Lh=()=>{wo(t=>({e7a07ef6:t.backgroundColor,"426355da":t.color}))},Fh=Ic.setup;Ic.setup=Fh?(t,e)=>(Lh(),Fh(t,e)):Lh;function Cb(t,e,n,s,i,r){return q(),ee("button",null,Ue(n.text),1)}const tt=He(Ic,[["render",Cb],["__scopeId","data-v-d91b9173"]]),Eb={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},es=Object.assign(Eb,{__name:"LinkButton",setup(t){return(e,n)=>(q(),En(tt,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const bb={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},Ib={class:"modal"};function Tb(t,e,n,s,i,r){return q(),ee("div",null,[B(bs,{name:"fade"},{default:lt(()=>[ya(K("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Ra,n.modelValue]])]),_:1}),B(bs,{name:"zoom"},{default:lt(()=>[ya(K("div",Ib,[Zg(t.$slots,"default",{},void 0,!0)],512),[[Ra,n.modelValue]])]),_:3})])}const ts=He(bb,[["render",Tb],["__scopeId","data-v-de2ad822"]]);const Sb={computed:{list(){const{stats:t}=We();return Object.keys(to).map(e=>{const n=to[e];return`${n.name}: ${n.display(t[e])}`})}}};function kb(t,e,n,s,i,r){return q(),ee("ul",null,[(q(!0),ee(Te,null,Cn(r.list,(o,a)=>(q(),ee("li",{key:a},Ue(o),1))),128))])}const xb=He(Sb,[["render",kb],["__scopeId","data-v-8a712b4f"]]),Tc=()=>{let t=Ve(window.innerWidth),e=Ve(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Ei(()=>window.addEventListener("resize",n)),Ei(()=>window.addEventListener("resize",s)),bi(()=>window.removeEventListener("resize",n)),bi(()=>window.removeEventListener("resize",s));const i=Se(()=>t.value),r=Se(()=>e.value);return{width:i,height:r}};const bm=t=>(Ls("data-v-68d96c35"),t=t(),Fs(),t),Rb={class:"container"},Ab=bm(()=>K("h1",{class:"main-title"},[Ud("TilesTo"),K("span",null,"Swap")],-1)),Pb=bm(()=>K("h1",null,"Stats",-1)),Nb={data(){const{width:t}=Tc();return{windowWidth:t,user:Gl,isSignedIn:Kl,showStats:!1}},methods:{signOut:Ha,signInForm(){J2(prompt("Email"),prompt("Password"))},openStats(){this.showStats=!0}}},Ob=Object.assign(Nb,{__name:"HomeView",setup(t){return(e,n)=>(q(),ee("div",Rb,[Ab,K("main",null,[B(ha,{name:"Freeplay",image:Qe(yb),path:"/freeplaySelection"},null,8,["image"]),B(ha,{name:"Puzzles",image:Qe(vb),path:"/puzzleSelection"},null,8,["image"]),B(ha,{name:"Challenges",image:Qe(wb),path:"/challengeSelection"},null,8,["image"])]),K("div",{class:Pt({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[B(tt,{text:"stats",onClick:e.openStats},null,8,["onClick"]),B(es,{text:"tutorial",to:"/tutorial"})],2),K("div",{class:Pt({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[Qe(Kl)?(q(),ee("p",{key:0,onClick:n[0]||(n[0]=(...s)=>Qe(Ha)&&Qe(Ha)(...s))}," You are logged in as "+Ue(Qe(Gl).displayName),1)):(q(),ee("p",{key:1,onClick:n[1]||(n[1]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),B(ts,{modelValue:e.showStats,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showStats=s)},{default:lt(()=>[Pb,B(xb),B(tt,{black:"",text:"close",onClick:n[2]||(n[2]=s=>e.showStats=!1)})]),_:1},8,["modelValue"])]))}}),Mb=He(Ob,[["__scopeId","data-v-68d96c35"]]);const Db=["data-level"],Lb={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){We().setLayout(this.layout),this.$router.push("/freeplayGame")}}},Fb=Object.assign(Lb,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(q(),ee("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(q(!0),ee(Te,null,Cn(e.includedTiles,s=>(q(),ee("div",{key:"t"+s,class:"tile",style:Os({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],8,Db))}}),Ub=He(Fb,[["__scopeId","data-v-e2c2d84b"]]);const $b=t=>(Ls("data-v-7bec83c9"),t=t(),Fs(),t),Wb=$b(()=>K("h1",{class:"title"},"Select a layout",-1)),Bb={class:"layouts"},Vb={data(){return{layouts:Bt.LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},Hb=Object.assign(Vb,{__name:"FreeplaySelection",setup(t){return(e,n)=>(q(),ee("main",null,[Wb,B(es,{class:"top right",text:"back",to:"/"}),K("div",Bb,[(q(!0),ee(Te,null,Cn(e.layouts,(s,i)=>(q(),En(Ub,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),zb=He(Hb,[["__scopeId","data-v-7bec83c9"]]);const jb={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return We().solvedPuzzles.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){const t=We();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Em(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},qb=Object.assign(jb,{__name:"PuzzleSelectionButton",setup(t){return wo(e=>({"2afab504":e.solved?"#DAC778":"white"})),(e,n)=>(q(),ee("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(q(!0),ee(Te,null,Cn(e.includedTiles,s=>(q(),ee("div",{key:"t"+s,class:"tile",style:Os({backgroundColor:e.layout.isWhite(s)?"#b5ab9e":"black",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))}}),Gb=He(qb,[["__scopeId","data-v-a737a162"]]);const Kb=t=>(Ls("data-v-de8b964b"),t=t(),Fs(),t),Yb=Kb(()=>K("h1",{class:"title"},"Select a puzzle",-1)),Qb={class:"layouts"},Jb={data(){return{puzzles:eo.PUZZLES}}},Xb=Object.assign(Jb,{__name:"PuzzleSelection",setup(t){return(e,n)=>(q(),ee("main",null,[Yb,B(es,{class:"top right",text:"back",to:"/"}),K("div",Qb,[(q(!0),ee(Te,null,Cn(e.puzzles,(s,i)=>(q(),En(Gb,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),Zb=He(Xb,[["__scopeId","data-v-de8b964b"]]);const Sc={props:["challenge"],computed:{formattedChall(){const t=Math.floor(this.challenge.timeLimit/60).toString(),e=(this.challenge.timeLimit%60).toString(),n=this.challenge.moveLimit.toString(),s=this.challenge.nPatterns.toString();return t+":"+e+"<br>"+(n>0?n+" moves<br>":"no move limit<br>")+s+" layouts"}}},Uh=()=>{wo(t=>({"29fe589f":t.color}))},$h=Sc.setup;Sc.setup=$h?(t,e)=>(Uh(),$h(t,e)):Uh;const eI=["innerHTML"];function tI(t,e,n,s,i,r){return q(),ee("div",{innerHTML:r.formattedChall},null,8,eI)}const nI=He(Sc,[["render",tI],["__scopeId","data-v-99e3cb12"]]),sI={data(){return{challenges:We().challenges}},methods:{selectChallenge(t){const e=We();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Em(t.modulo),this.$router.push("/challengeGame")}}},iI=Object.assign(sI,{__name:"ChallengeSelection",setup(t){return(e,n)=>(q(),ee("div",null,[B(es,{class:"top right",text:"back",to:"/"}),(q(!0),ee(Te,null,Cn(e.challenges,(s,i)=>(q(),En(nI,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}});const rI=t=>(Ls("data-v-da2e8ec6"),t=t(),Fs(),t),oI=rI(()=>K("div",{class:"inner-tile"},[K("div",{class:"front"}),K("div",{class:"back"})],-1)),aI=[oI],lI={props:["tile","visible","small"],data(){return{tileSize:"30px",flipped:!1,delayFrontColor:ds[ds.length-1],delayBackColor:ds[0],gradient:ds}},watch:{tile(){this.flipped=!this.flipped}},computed:{frontColor(){return this.flipped?this.gradient[this.modulo(this.tile-1)]:this.gradient[this.tile]},backColor(){return this.flipped?this.gradient[this.tile]:this.gradient[this.modulo(this.tile-1)]}},methods:{modulo(t){return(t%Ae.value+Ae.value)%Ae.value}},mounted(){const t=We(),e=()=>{const{width:n,height:s}=t.currentLayout;this.tileSize=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1)+"px"};fn(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},cI=Object.assign(lI,{__name:"Tile",setup(t){return wo(e=>({"7cf23b95":e.tileSize,"657d73f4":t.visible?1:0,"5115ab6f":t.visible?"pointer":"default","2da49500":e.frontColor,ba7be094:e.backColor})),(e,n)=>(q(),ee("div",{class:Pt(["tile",{"flipped-tile":e.flipped}])},aI,2))}}),uI=He(cI,[["__scopeId","data-v-da2e8ec6"]]);class vn{constructor(e){if(typeof e!="number")throw new Error("Order must be a number");if(e<=0)throw new Error("Order must be greater than 0");if(e%1!==0)throw new Error("Order must be an integer");vn.isPrime(e)||console.warn("\x1B[33m%s\x1B[0m",`[Warn] Order ${e} is not prime`),this.order=e}el(e){if(e instanceof cn){if(e.field!==this)throw new Error("Cannot create element in different field");return e}if(typeof e!="number")throw new Error("Value must be a number");return new cn(vn.mod(e,this.order),this)}matrix(e){return no.from2DArray(e,this)}identity(e){return no.identity(e,this)}static mod(e,n){return(e%n+n)%n}static fromOrder(e){return new vn(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}var Bn,ri;const io=class io{constructor(e,n){sr(this,Bn);if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof vn))throw new Error("Field must be an instance of FiniteField");this.value=vn.mod(e,n.order),this.field=n}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(e){return Mt(this,Bn,ri).call(this,e,(n,s)=>n.value+s.value)}subtract(e){return Mt(this,Bn,ri).call(this,e,(n,s)=>n.value-s.value)}multiply(e){return Mt(this,Bn,ri).call(this,e,(n,s)=>n.value*s.value)}divide(e){return Mt(this,Bn,ri).call(this,e,(n,s)=>n.multiply(s.inverse()).value)}pow(e){if(e===0)return this.field.el(1);if(e===1)return this.copy();if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let e=1;for(;e<this.field.order;){if(e*e%this.field.order===this.value)return this.field.el(e);e++}throw new Error("Element has no square root")}equals(e){if(e instanceof io){if(e.field!==this.field)throw new Error("Cannot compare two numbers in different fields");return this.value===e.value}return this.value===e}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}};Bn=new WeakSet,ri=function(e,n){if(e instanceof io){if(e.field!==this.field)throw new Error("Cannot add two numbers in different fields");return this.field.el(n(this,e))}return e=this.field.el(e),this.field.el(n(this,e))};let cn=io;var Vn,Hn,oi;const re=class re{constructor(e,n){sr(this,Hn);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof cn){if(i.field!==n)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new re(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof cn)return e=this.field.el(e),re.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof re){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return re.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof cn||typeof e=="number")return e=this.field.el(e),new re(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof re){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new re(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return re.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(Gs(re,Vn).has(e))return Gs(re,Vn).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Mt(this,Hn,oi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return Gs(re,Vn).set(e,s),s}const n=this.PLUDeterminant();return Gs(re,Vn).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=re.identity(this.width,this.field),s=re.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Mt(r=s,Hn,oi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return re.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Mt(this,Hn,oi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new re(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].multiply(u)}function n(l,c,u,h){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].add(l[u][d].multiply(h))}function s(l,c,u){for(let h=u;h<l.length;h++)if(!l[h][c].equals(0))return h;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return re.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let h=i[l][a];e(i,l,h.inverse());for(let d=0;d<r;d++)if(d!==l){let m=i[d][a].opposite();n(i,d,l,m)}a++}return re.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=re.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Mt(this,Hn,oi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i];l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:re.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof re?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return re.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new re(s,n)}static fromValue(e,n,s,i){if(e instanceof cn&&e.field!==i)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new re(r,i)}static zeros(e,n,s){return re.fromValue(0,e,n,s)}static ones(e,n,s){return re.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return re.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return re.from2DArray(s,n)}static from2DArray(e,n){return new re(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};Vn=new WeakMap,Hn=new WeakSet,oi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new re(s,this.field)},sr(re,Vn,new Map);let no=re;const il=Ve(!1);globalThis.window&&Object.defineProperty(window,"devMode",{get:()=>il.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");il.value=t}});const rl=Se(()=>il.value),da=new Map;let kc=vn.fromOrder(Ae.value);fn(Ae,()=>{kc=vn.fromOrder(Ae.value)});const Wh=t=>{const e=t.length,n=t[0].length,s=`${n}x${e},${Bt.getExcludeFromMatrix(t)},${Cm.value}}`;let i;if(da.has(s))i=da.get(s);else{const a=dI(n,e,t),l=a.determinant();console.log("Det:",l.toString()),l.value===0?i=a.pseudoInverse():i=a.inverse(),da.set(s,i)}const r=kc.matrix(t.flat().filter(a=>a!==-1).map(a=>[(a+1)%Ae.value])),o=i.multiply(r).matrix.map(a=>a[0].value);for(let a=0;a<e;a++)for(let l=0;l<n;l++)if(t[a][l]===-1){const c=a*n+l;o.splice(c,0,-1)}return o.map((a,l)=>o.slice(l*n,(l+1)*n)).filter(a=>a.length)},hI=(t,e,n)=>{for(const s of Cm.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Ae.value-1)}},dI=(t,e,n)=>{const s=[];for(let r=0;r<e;r++)for(let o=0;o<t;o++){if(n&&n[r][o]===-1)continue;const a=Array(e).fill().map((l,c)=>Array(t).fill().map((u,h)=>n&&n[c][h]===-1?-1:0));hI(r,o,a),s.push(a)}return kc.matrix(s.map(r=>r.flat().filter(o=>o!==-1))).transpose()};const fI={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){return{currentChallenge:We().currentChallenge,gradient:ds}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=We(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},pI=Object.assign(fI,{__name:"Layout",setup(t){return(e,n)=>(q(),ee("div",null,[B(bs,{name:"list",mode:"out-in"},{default:lt(()=>{var s;return[(q(),ee("div",{key:(s=e.currentChallenge)==null?void 0:s.currentPattern},[(q(!0),ee(Te,null,Cn(t.modelValue.matrix,(i,r)=>{var o;return q(),ee("div",{class:"row",key:"row"+r+((o=e.currentChallenge)==null?void 0:o.currentPattern)},[(q(!0),ee(Te,null,Cn(i,(a,l)=>{var c;return q(),En(uI,{small:t.small,tile:a,visible:a!==-1,key:r+""+l+((c=e.currentChallenge)==null?void 0:c.currentPattern),class:Pt({solution:Qe(rl)&&t.solution&&t.solution[r][l]>=1}),style:Os({outline:t.target?`5px solid ${Qe(ds)[t.target[r][l]]}`:"none"}),onClick:u=>e.onTileClick(r,l)},null,8,["small","tile","visible","class","style","onClick"])}),128))])}),128))]))]}),_:1})]))}}),Lo=He(pI,[["__scopeId","data-v-709259d9"]]);const mI={props:["modelValue"],emits:["update:modelValue"],data(){const t=We();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Ae.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},gI={class:"diff"},_I=["value","max"];function yI(t,e,n,s,i,r){return q(),ee("div",gI,[K("h2",null,"difficulty - "+Ue(r.difficultyText),1),K("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,_I)])}const vI=He(mI,[["render",yI],["__scopeId","data-v-1638e08f"]]);const wI={class:"top-menu"},CI={data(){const t=We(),e=t.currentLayout,{width:n}=Tc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,showModal:!1,solution:e.matrix.map(s=>s.slice()),moves:0}},watch:{difficulty(){this.store.difficulty=this.difficulty},showModal(){this.showModal||this.randomize()}},methods:{handleClick(){this.moves++;try{rl.value&&(this.solution=Wh(this.layout.matrix))}catch(t){console.error(t)}this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty),this.$nextTick(()=>{try{rl.value&&(this.solution=Wh(this.layout.matrix))}catch(t){console.error(t)}})}},mounted(){this.randomize()}},EI=Object.assign(CI,{__name:"FreeplayGame",setup(t){return(e,n)=>(q(),ee("div",null,[K("div",wI,[B(tt,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),B(vI,{modelValue:e.difficulty,"onUpdate:modelValue":n[0]||(n[0]=s=>e.difficulty=s)},null,8,["modelValue"])]),ya(K("p",{class:Pt(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},Ue(e.moves)+" move"+Ue(e.moves>1?"s":""),3),[[Ra,e.moves>0]]),B(es,{class:"top right",text:"back",to:"/freeplaySelection"}),K("main",null,[B(Lo,{modelValue:e.layout,"onUpdate:modelValue":n[1]||(n[1]=s=>e.layout=s),solution:e.solution,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"])]),B(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showModal=s)},{default:lt(()=>[K("h1",null,"you won in "+Ue(e.moves)+" move"+Ue(e.moves>1?"s":"")+"!",1),B(tt,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),bI=He(EI,[["__scopeId","data-v-fbdd3665"]]);const II=t=>(Ls("data-v-9ca46572"),t=t(),Fs(),t),TI=II(()=>K("h1",null,"no moves remaining!",-1)),SI={data(){const e=We().currentPuzzle,n=e.base.copy(),{width:s}=Tc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=We();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},kI=Object.assign(SI,{__name:"PuzzleGame",setup(t){return(e,n)=>(q(),ee("div",null,[B(es,{class:"top right",text:"back",to:"/puzzleSelection"}),K("div",{class:Pt(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[K("h1",null,Ue(e.remainingMoves)+" move"+Ue(e.remainingMoves>1?"s":"")+" remaining",1),B(tt,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),K("main",null,[B(Lo,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),B(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[K("h1",null,"you won in "+Ue(e.moves)+" move"+Ue(e.moves>1?"s":"")+"!",1),B(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),B(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:lt(()=>[TI,B(tt,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),B(es,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),xI=He(kI,[["__scopeId","data-v-9ca46572"]]);const RI=t=>(Ls("data-v-77de2009"),t=t(),Fs(),t),AI={class:"info"},PI={class:"moves"},NI=RI(()=>K("h1",null,"you won the challenge!",-1)),OI={data(){const{currentChallenge:t}=We();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0}},methods:{handleClick(){const t=We();if(this.nMoves-=1,this.nMovesPer-=1,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||this.$router.push("/challengeSelection")},showLostModal(){this.showLostModal||this.$router.push("/challengeSelection")}},computed:{formattedTime(){const t=Math.floor(this.time/60).toString(),e=(this.time%60).toString();return`${t.padStart(2,"0")}:${e.padStart(2,"0")}`},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)+"%"},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1,this.time<=0&&(this.modalText="no time left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))},1e3)}},MI=Object.assign(OI,{__name:"ChallengeGame",setup(t){return(e,n)=>(q(),ee("div",null,[K("p",AI,Ue(e.formattedTime)+" "+Ue(e.moves)+" - "+Ue(e.percentageCompleted),1),K("main",null,[B(Lo,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"])]),K("p",PI,Ue(e.movesPer),1),B(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[NI,B(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),B(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:lt(()=>[K("h1",null,Ue(e.modalText),1),B(tt,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),DI=He(MI,[["__scopeId","data-v-77de2009"]]),LI=K("h1",{class:"title"},"how to play",-1),FI={key:0},UI=K("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),$I=K("h1",null,"Try to get all the tiles to be white!",-1),WI={key:1},BI=K("h1",null,"Nice! Now observe what happens at the corners",-1),VI={key:2},HI=K("h1",null,"Well done! Okay one last , a bit harder",-1),zI={key:3},jI=K("h1",null,"Great job! Ready to play?",-1),qI=K("h1",{class:"text-center"},"Try it here!",-1),GI={data(){const t=We(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new Bt({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},KI=Object.assign(GI,{__name:"TutorialView",setup(t){return(e,n)=>(q(),ee("div",null,[LI,B(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:lt(()=>[e.stage===-1?(q(),ee("div",FI,[UI,$I,B(tt,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(q(),ee("div",WI,[BI,B(tt,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(q(),ee("div",VI,[HI,B(tt,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(q(),ee("div",zI,[jI,B(tt,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),qI,B(Lo,{class:Pt([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),YI=d0({history:R1("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:Mb},{path:"/tutorial",name:"tutorial",component:KI},{path:"/freeplaySelection",name:"freeplaySelection",component:zb},{path:"/puzzleSelection",name:"puzzleSelection",component:Zb},{path:"/challengeSelection",name:"challengeSelection",component:iI},{path:"/freeplayGame",name:"freeplayGame",component:bI},{path:"/puzzleGame",name:"puzzleGame",component:xI},{path:"/challengeGame",name:"challengeGame",component:DI}]}),xc=i1(pb),Im=a1();Vi(Im);xc.use(YI);xc.use(Im);xc.mount("#app");
