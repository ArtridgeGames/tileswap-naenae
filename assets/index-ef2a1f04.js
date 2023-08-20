var Bm=Object.defineProperty;var Hm=(t,e,n)=>e in t?Bm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ur=(t,e,n)=>(Hm(t,typeof e!="symbol"?e+"":e,n),n),Hc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Qs=(t,e,n)=>(Hc(t,e,"read from private field"),n?n.call(t):e.get(t)),dr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var kt=(t,e,n)=>(Hc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _l(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},_s=[],Ct=()=>{},zm=()=>!1,jm=/^on[^a-z]/,mo=t=>jm.test(t),yl=t=>t.startsWith("onUpdate:"),Oe=Object.assign,vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qm=Object.prototype.hasOwnProperty,ae=(t,e)=>qm.call(t,e),B=Array.isArray,ys=t=>qi(t)==="[object Map]",go=t=>qi(t)==="[object Set]",zc=t=>qi(t)==="[object Date]",X=t=>typeof t=="function",Pe=t=>typeof t=="string",Ci=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",sh=t=>ge(t)&&X(t.then)&&X(t.catch),ih=Object.prototype.toString,qi=t=>ih.call(t),Gm=t=>qi(t).slice(8,-1),rh=t=>qi(t)==="[object Object]",wl=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cr=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Km=/-(\w)/g,Dt=_o(t=>t.replace(Km,(e,n)=>n?n.toUpperCase():"")),Ym=/\B([A-Z])/g,Ls=_o(t=>t.replace(Ym,"-$1").toLowerCase()),yo=_o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yo=_o(t=>t?`on${yo(t)}`:""),Ei=(t,e)=>!Object.is(t,e),Er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Jm=t=>{const e=Pe(t)?Number(t):NaN;return isNaN(e)?t:e};let jc;const ka=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lt(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?tg(s):Lt(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Pe(t))return t;if(ge(t))return t}}const Xm=/;(?![^(]*\))/g,Zm=/:([^]+)/,eg=/\/\*[^]*?\*\//g;function tg(t){const e={};return t.replace(eg,"").split(Xm).forEach(n=>{if(n){const s=n.split(Zm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ut(t){let e="";if(Pe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=ut(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ng="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sg=_l(ng);function oh(t){return!!t||t===""}function ig(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vo(t[s],e[s]);return n}function vo(t,e){if(t===e)return!0;let n=zc(t),s=zc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ci(t),s=Ci(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?ig(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vo(t[o],e[o]))return!1}}return String(t)===String(e)}function ah(t,e){return t.findIndex(n=>vo(n,e))}const ke=t=>Pe(t)?t:t==null?"":B(t)||ge(t)&&(t.toString===ih||!X(t.toString))?JSON.stringify(t,lh,2):String(t),lh=(t,e)=>e&&e.__v_isRef?lh(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:go(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!B(e)&&!rh(e)?String(e):e;let lt;class ch{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(t){return new ch(t)}function rg(t,e=lt){e&&e.active&&e.effects.push(t)}function dh(){return lt}function og(t){lt&&lt.cleanups.push(t)}const Cl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hh=t=>(t.w&kn)>0,fh=t=>(t.n&kn)>0,ag=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kn},lg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];hh(i)&&!fh(i)?i.delete(t):e[n++]=i,i.w&=~kn,i.n&=~kn}e.length=n}},Nr=new WeakMap;let ii=0,kn=1;const xa=30;let gt;const Kn=Symbol(""),Ra=Symbol("");class El{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rg(this,s)}run(){if(!this.active)return this.fn();let e=gt,n=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,yn=!0,kn=1<<++ii,ii<=xa?ag(this):qc(this),this.fn()}finally{ii<=xa&&lg(this),kn=1<<--ii,gt=this.parent,yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(qc(this),this.onStop&&this.onStop(),this.active=!1)}}function qc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yn=!0;const ph=[];function Fs(){ph.push(yn),yn=!1}function $s(){const t=ph.pop();yn=t===void 0?!0:t}function it(t,e,n){if(yn&&gt){let s=Nr.get(t);s||Nr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Cl()),mh(i)}}function mh(t,e){let n=!1;ii<=xa?fh(t)||(t.n|=kn,n=!hh(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function Gt(t,e,n,s,i,r){const o=Nr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?wl(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),ys(t)&&a.push(o.get(Ra)));break;case"delete":B(t)||(a.push(o.get(Kn)),ys(t)&&a.push(o.get(Ra)));break;case"set":ys(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&Aa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Aa(Cl(l))}}function Aa(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Gc(s);for(const s of n)s.computed||Gc(s)}function Gc(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function cg(t,e){var n;return(n=Nr.get(t))==null?void 0:n.get(e)}const ug=_l("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ci)),dg=bl(),hg=bl(!1,!0),fg=bl(!0),Kc=pg();function pg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)it(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs();const s=re(this)[e].apply(this,n);return $s(),s}}),t}function mg(t){const e=re(this);return it(e,"has",t),e.hasOwnProperty(t)}function bl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Pg:Ch:e?wh:vh).get(s))return s;const o=B(s);if(!t){if(o&&ae(Kc,i))return Reflect.get(Kc,i,r);if(i==="hasOwnProperty")return mg}const a=Reflect.get(s,i,r);return(Ci(i)?gh.has(i):ug(i))||(t||it(s,"get",i),e)?a:Ae(a)?o&&wl(i)?a:a.value:ge(a)?t?bh(a):Gi(a):a}}const gg=_h(),_g=_h(!0);function _h(t=!1){return function(n,s,i,r){let o=n[s];if(Ts(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!Or(i)&&!Ts(i)&&(o=re(o),i=re(i)),!B(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const a=B(n)&&wl(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?Ei(i,o)&&Gt(n,"set",s,i):Gt(n,"add",s,i)),l}}function yg(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function vg(t,e){const n=Reflect.has(t,e);return(!Ci(e)||!gh.has(e))&&it(t,"has",e),n}function wg(t){return it(t,"iterate",B(t)?"length":Kn),Reflect.ownKeys(t)}const yh={get:dg,set:gg,deleteProperty:yg,has:vg,ownKeys:wg},Cg={get:fg,set(t,e){return!0},deleteProperty(t,e){return!0}},Eg=Oe({},yh,{get:hg,set:_g}),Il=t=>t,wo=t=>Reflect.getPrototypeOf(t);function hr(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&it(i,"get",e),it(i,"get",r));const{has:o}=wo(i),a=s?Il:n?kl:bi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function fr(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&it(s,"has",t),it(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function pr(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",Kn),Reflect.get(t,"size",t)}function Yc(t){t=re(t);const e=re(this);return wo(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Qc(t,e){e=re(e);const n=re(this),{has:s,get:i}=wo(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ei(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Jc(t){const e=re(this),{has:n,get:s}=wo(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Gt(e,"delete",t,void 0),r}function Xc(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function mr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?Il:t?kl:bi;return!t&&it(a,"iterate",Kn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function gr(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=ys(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Il:e?kl:bi;return!e&&it(r,"iterate",l?Ra:Kn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:this}}function bg(){const t={get(r){return hr(this,r)},get size(){return pr(this)},has:fr,add:Yc,set:Qc,delete:Jc,clear:Xc,forEach:mr(!1,!1)},e={get(r){return hr(this,r,!1,!0)},get size(){return pr(this)},has:fr,add:Yc,set:Qc,delete:Jc,clear:Xc,forEach:mr(!1,!0)},n={get(r){return hr(this,r,!0)},get size(){return pr(this,!0)},has(r){return fr.call(this,r,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:mr(!0,!1)},s={get(r){return hr(this,r,!0,!0)},get size(){return pr(this,!0)},has(r){return fr.call(this,r,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gr(r,!1,!1),n[r]=gr(r,!0,!1),e[r]=gr(r,!1,!0),s[r]=gr(r,!0,!0)}),[t,n,e,s]}const[Ig,Tg,Sg,kg]=bg();function Tl(t,e){const n=e?t?kg:Sg:t?Tg:Ig;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const xg={get:Tl(!1,!1)},Rg={get:Tl(!1,!0)},Ag={get:Tl(!0,!1)},vh=new WeakMap,wh=new WeakMap,Ch=new WeakMap,Pg=new WeakMap;function Ng(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Og(t){return t.__v_skip||!Object.isExtensible(t)?0:Ng(Gm(t))}function Gi(t){return Ts(t)?t:Sl(t,!1,yh,xg,vh)}function Eh(t){return Sl(t,!1,Eg,Rg,wh)}function bh(t){return Sl(t,!0,Cg,Ag,Ch)}function Sl(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Og(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function vn(t){return Ts(t)?vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ts(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function Ih(t){return vn(t)||Ts(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Co(t){return Pr(t,"__v_skip",!0),t}const bi=t=>ge(t)?Gi(t):t,kl=t=>ge(t)?bh(t):t;function Th(t){yn&&gt&&(t=re(t),mh(t.dep||(t.dep=Cl())))}function Sh(t,e){t=re(t);const n=t.dep;n&&Aa(n)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function De(t){return kh(t,!1)}function Mg(t){return kh(t,!0)}function kh(t,e){return Ae(t)?t:new Dg(t,e)}class Dg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:bi(e)}get value(){return Th(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||Ts(e);e=n?e:re(e),Ei(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:bi(e),Sh(this))}}function Ie(t){return Ae(t)?t.value:t}const Lg={get:(t,e,n)=>Ie(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function xh(t){return vn(t)?t:new Proxy(t,Lg)}function Fg(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Ug(t,n);return e}class $g{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return cg(re(this._object),this._key)}}function Ug(t,e,n){const s=t[e];return Ae(s)?s:new $g(t,e,n)}class Wg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new El(e,()=>{this._dirty||(this._dirty=!0,Sh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return Th(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vg(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=Ct):(s=t.get,i=t.set),new Wg(s,i,r||!i,n)}function wn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Eo(r,e,n)}return i}function dt(t,e,n,s){if(X(t)){const r=wn(t,e,n,s);return r&&sh(r)&&r.catch(o=>{Eo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}function Eo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){wn(l,null,10,[t,o,a]);return}}Bg(t,n,i,s)}function Bg(t,e,n,s=!0){console.error(t)}let Ii=!1,Pa=!1;const Ge=[];let At=0;const vs=[];let Wt=null,Wn=0;const Rh=Promise.resolve();let xl=null;function Rl(t){const e=xl||Rh;return t?e.then(this?t.bind(this):t):e}function Hg(t){let e=At+1,n=Ge.length;for(;e<n;){const s=e+n>>>1;Ti(Ge[s])<t?e=s+1:n=s}return e}function Al(t){(!Ge.length||!Ge.includes(t,Ii&&t.allowRecurse?At+1:At))&&(t.id==null?Ge.push(t):Ge.splice(Hg(t.id),0,t),Ah())}function Ah(){!Ii&&!Pa&&(Pa=!0,xl=Rh.then(Nh))}function zg(t){const e=Ge.indexOf(t);e>At&&Ge.splice(e,1)}function jg(t){B(t)?vs.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Wn+1:Wn))&&vs.push(t),Ah()}function Zc(t,e=Ii?At+1:0){for(;e<Ge.length;e++){const n=Ge[e];n&&n.pre&&(Ge.splice(e,1),e--,n())}}function Ph(t){if(vs.length){const e=[...new Set(vs)];if(vs.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,s)=>Ti(n)-Ti(s)),Wn=0;Wn<Wt.length;Wn++)Wt[Wn]();Wt=null,Wn=0}}const Ti=t=>t.id==null?1/0:t.id,qg=(t,e)=>{const n=Ti(t)-Ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nh(t){Pa=!1,Ii=!0,Ge.sort(qg);const e=Ct;try{for(At=0;At<Ge.length;At++){const n=Ge[At];n&&n.active!==!1&&wn(n,null,14)}}finally{At=0,Ge.length=0,Ph(),Ii=!1,xl=null,(Ge.length||vs.length)&&Nh()}}function Gg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||be;h&&(i=n.map(m=>Pe(m)?m.trim():m)),d&&(i=n.map(Qm))}let a,l=s[a=Yo(e)]||s[a=Yo(Dt(e))];!l&&r&&(l=s[a=Yo(Ls(e))]),l&&dt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(c,t,6,i)}}function Oh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=Oh(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):Oe(o,r),ge(t)&&s.set(t,o),o)}function bo(t,e){return!t||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Ls(e))||ae(t,e))}let He=null,Io=null;function Mr(t){const e=He;return He=t,Io=t&&t.type.__scopeId||null,e}function Us(t){Io=t}function Ws(){Io=null}function Ze(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&du(-1);const r=Mr(e);let o;try{o=t(...i)}finally{Mr(r),s._d&&du(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:w}=t;let x,A;const P=Mr(t);try{if(n.shapeFlag&4){const M=i||s;x=Rt(u.call(M,M,d,r,m,h,_)),A=l}else{const M=e;x=Rt(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:Kg(l)}}catch(M){di.length=0,Eo(M,t,1),x=U(ht)}let q=x;if(A&&w!==!1){const M=Object.keys(A),{shapeFlag:Z}=q;M.length&&Z&7&&(o&&M.some(yl)&&(A=Yg(A,o)),q=xn(q,A))}return n.dirs&&(q=xn(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),x=q,Mr(P),x}const Kg=t=>{let e;for(const n in t)(n==="class"||n==="style"||mo(n))&&((e||(e={}))[n]=t[n]);return e},Yg=(t,e)=>{const n={};for(const s in t)(!yl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Qg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?eu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!bo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?eu(s,o,c):!0:!!o;return!1}function eu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!bo(n,r))return!0}return!1}function Jg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xg=t=>t.__isSuspense;function Zg(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):jg(t)}function e_(t,e){return Pl(t,null,{flush:"post"})}const _r={};function Cn(t,e,n){return Pl(t,e,n)}function Pl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){var a;const l=dh()===((a=Le)==null?void 0:a.scope)?Le:null;let c,u=!1,d=!1;if(Ae(t)?(c=()=>t.value,u=Or(t)):vn(t)?(c=()=>t,s=!0):B(t)?(d=!0,u=t.some(M=>vn(M)||Or(M)),c=()=>t.map(M=>{if(Ae(M))return M.value;if(vn(M))return Hn(M);if(X(M))return wn(M,l,2)})):X(t)?e?c=()=>wn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),dt(t,l,3,[m])}:c=Ct,e&&s){const M=c;c=()=>Hn(M())}let h,m=M=>{h=P.onStop=()=>{wn(M,l,4)}},_;if(Ai)if(m=Ct,e?n&&dt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const M=Q_();_=M.__watcherHandles||(M.__watcherHandles=[])}else return Ct;let w=d?new Array(t.length).fill(_r):_r;const x=()=>{if(P.active)if(e){const M=P.run();(s||u||(d?M.some((Z,ye)=>Ei(Z,w[ye])):Ei(M,w)))&&(h&&h(),dt(e,l,3,[M,w===_r?void 0:d&&w[0]===_r?[]:w,m]),w=M)}else P.run()};x.allowRecurse=!!e;let A;i==="sync"?A=x:i==="post"?A=()=>tt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>Al(x));const P=new El(c,A);e?n?x():w=P.run():i==="post"?tt(P.run.bind(P),l&&l.suspense):P.run();const q=()=>{P.stop(),l&&l.scope&&vl(l.scope.effects,P)};return _&&_.push(q),q}function t_(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?Mh(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Le;Ss(this);const a=Pl(i,r.bind(s),n);return o?Ss(o):Yn(),a}function Mh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Hn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))Hn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(go(t)||ys(t))t.forEach(n=>{Hn(n,e)});else if(rh(t))for(const n in t)Hn(t[n],e);return t}function Dr(t,e){const n=He;if(n===null)return t;const s=Ao(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Hn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Mn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Fs(),dt(l,n,8,[t.el,a,t,e]),$s())}}function n_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Si(()=>{t.isMounted=!0}),Wh(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],Dh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},s_={name:"BaseTransition",props:Dh,setup(t,{slots:e}){const n=ef(),s=n_();let i;return()=>{const r=e.default&&Fh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==ht){o=w;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return Jo(o);const c=tu(o);if(!c)return Jo(o);const u=Na(c,a,s,n);Oa(c,u);const d=n.subTree,h=d&&tu(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,m=!0)}if(h&&h.type!==ht&&(!Vn(c,h)||m)){const w=Na(h,a,s,n);if(Oa(h,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Jo(o);l==="in-out"&&c.type!==ht&&(w.delayLeave=(x,A,P)=>{const q=Lh(s,h);q[String(h.key)]=h,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},i_=s_;function Lh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Na(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:w,onAppear:x,onAfterAppear:A,onAppearCancelled:P}=e,q=String(t.key),M=Lh(n,t),Z=(N,W)=>{N&&dt(N,s,9,W)},ye=(N,W)=>{const J=W[1];Z(N,W),B(N)?N.every(pe=>pe.length<=1)&&J():N.length<=1&&J()},Ce={mode:r,persisted:o,beforeEnter(N){let W=a;if(!n.isMounted)if(i)W=w||a;else return;N._leaveCb&&N._leaveCb(!0);const J=M[q];J&&Vn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Z(W,[N])},enter(N){let W=l,J=c,pe=u;if(!n.isMounted)if(i)W=x||l,J=A||c,pe=P||u;else return;let D=!1;const ce=N._enterCb=ze=>{D||(D=!0,ze?Z(pe,[N]):Z(J,[N]),Ce.delayedLeave&&Ce.delayedLeave(),N._enterCb=void 0)};W?ye(W,[N,ce]):ce()},leave(N,W){const J=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return W();Z(d,[N]);let pe=!1;const D=N._leaveCb=ce=>{pe||(pe=!0,W(),ce?Z(_,[N]):Z(m,[N]),N._leaveCb=void 0,M[J]===t&&delete M[J])};M[J]=t,h?ye(h,[N,D]):D()},clone(N){return Na(N,e,n,s)}};return Ce}function Jo(t){if(To(t))return t=xn(t),t.children=null,t}function tu(t){return To(t)?t.children?t.children[0]:void 0:t}function Oa(t,e){t.shapeFlag&6&&t.component?Oa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Se?(o.patchFlag&128&&i++,s=s.concat(Fh(o.children,e,a))):(e||o.type!==ht)&&s.push(a!=null?xn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function $h(t,e){return X(t)?(()=>Oe({name:t.name},e,{setup:t}))():t}const ci=t=>!!t.type.__asyncLoader,To=t=>t.type.__isKeepAlive;function r_(t,e){Uh(t,"a",e)}function o_(t,e){Uh(t,"da",e)}function Uh(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(So(e,s,n),n){let i=n.parent;for(;i&&i.parent;)To(i.parent.vnode)&&a_(s,e,n,i),i=i.parent}}function a_(t,e,n,s){const i=So(e,t,s,!0);ki(()=>{vl(s[e],i)},n)}function So(t,e,n=Le,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs(),Ss(n);const a=dt(e,n,t,o);return Yn(),$s(),a});return s?i.unshift(r):i.push(r),r}}const Jt=t=>(e,n=Le)=>(!Ai||t==="sp")&&So(t,(...s)=>e(...s),n),l_=Jt("bm"),Si=Jt("m"),c_=Jt("bu"),u_=Jt("u"),Wh=Jt("bum"),ki=Jt("um"),d_=Jt("sp"),h_=Jt("rtg"),f_=Jt("rtc");function p_(t,e=Le){So("ec",t,e)}const Nl="components";function m_(t,e){return Bh(Nl,t,!0,e)||t}const Vh=Symbol.for("v-ndc");function g_(t){return Pe(t)?Bh(Nl,t,!1)||t:t||Vh}function Bh(t,e,n=!0,s=!1){const i=He||Le;if(i){const r=i.type;if(t===Nl){const a=G_(r,!1);if(a&&(a===e||a===Dt(e)||a===yo(Dt(e))))return r}const o=nu(i[t]||r[t],e)||nu(i.appContext[t],e);return!o&&s?r:o}}function nu(t,e){return t&&(t[e]||t[Dt(e)]||t[yo(Dt(e))])}function Kt(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Pe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ge(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function __(t,e,n={},s,i){if(He.isCE||He.parent&&ci(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),U("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),$();const o=r&&Hh(r(n)),a=ft(Se,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Hh(t){return t.some(e=>Fr(e)?!(e.type===ht||e.type===Se&&!Hh(e.children)):!0)?t:null}const Ma=t=>t?tf(t)?Ao(t)||t.proxy:Ma(t.parent):null,ui=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ma(t.parent),$root:t=>Ma(t.root),$emit:t=>t.emit,$options:t=>Ol(t),$forceUpdate:t=>t.f||(t.f=()=>Al(t.update)),$nextTick:t=>t.n||(t.n=Rl.bind(t.proxy)),$watch:t=>t_.bind(t)}),Xo=(t,e)=>t!==be&&!t.__isScriptSetup&&ae(t,e),y_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xo(s,e))return o[e]=1,s[e];if(i!==be&&ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,r[e];if(n!==be&&ae(n,e))return o[e]=4,n[e];Da&&(o[e]=0)}}const u=ui[e];let d,h;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==be&&ae(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ae(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xo(i,e)?(i[e]=n,!0):s!==be&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&ae(t,o)||Xo(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(ui,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function su(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Da=!0;function v_(t){const e=Ol(t),n=t.proxy,s=t.ctx;Da=!1,e.beforeCreate&&iu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:w,deactivated:x,beforeDestroy:A,beforeUnmount:P,destroyed:q,unmounted:M,render:Z,renderTracked:ye,renderTriggered:Ce,errorCaptured:N,serverPrefetch:W,expose:J,inheritAttrs:pe,components:D,directives:ce,filters:ze}=e;if(c&&w_(c,s,null),o)for(const me in o){const ue=o[me];X(ue)&&(s[me]=ue.bind(n))}if(i){const me=i.call(n,n);ge(me)&&(t.data=Gi(me))}if(Da=!0,r)for(const me in r){const ue=r[me],$t=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):Ct,en=!X(ue)&&X(ue.set)?ue.set.bind(n):Ct,Tt=Re({get:$t,set:en});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:et=>Tt.value=et})}if(a)for(const me in a)zh(a[me],s,n,me);if(l){const me=X(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{br(ue,me[ue])})}u&&iu(u,t,"c");function ie(me,ue){B(ue)?ue.forEach($t=>me($t.bind(n))):ue&&me(ue.bind(n))}if(ie(l_,d),ie(Si,h),ie(c_,m),ie(u_,_),ie(r_,w),ie(o_,x),ie(p_,N),ie(f_,ye),ie(h_,Ce),ie(Wh,P),ie(ki,M),ie(d_,W),B(J))if(J.length){const me=t.exposed||(t.exposed={});J.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:$t=>n[ue]=$t})})}else t.exposed||(t.exposed={});Z&&t.render===Ct&&(t.render=Z),pe!=null&&(t.inheritAttrs=pe),D&&(t.components=D),ce&&(t.directives=ce)}function w_(t,e,n=Ct){B(t)&&(t=La(t));for(const s in t){const i=t[s];let r;ge(i)?"default"in i?r=Nt(i.from||s,i.default,!0):r=Nt(i.from||s):r=Nt(i),Ae(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function iu(t,e,n){dt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function zh(t,e,n,s){const i=s.includes(".")?Mh(n,s):()=>n[s];if(Pe(t)){const r=e[t];X(r)&&Cn(i,r)}else if(X(t))Cn(i,t.bind(n));else if(ge(t))if(B(t))t.forEach(r=>zh(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&Cn(i,r,t)}}function Ol(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Lr(l,c,o,!0)),Lr(l,e,o)),ge(e)&&r.set(e,l),l}function Lr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Lr(t,r,n,!0),i&&i.forEach(o=>Lr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=C_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const C_={data:ru,props:ou,emits:ou,methods:ri,computed:ri,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:ri,directives:ri,watch:b_,provide:ru,inject:E_};function ru(t,e){return e?t?function(){return Oe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function E_(t,e){return ri(La(t),La(e))}function La(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function ri(t,e){return t?Oe(Object.create(null),t,e):e}function ou(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Oe(Object.create(null),su(t),su(e??{})):e}function b_(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Qe(t[s],e[s]);return n}function jh(){return{app:null,config:{isNativeTag:zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function T_(t,e){return function(s,i=null){X(s)||(s=Oe({},s)),i!=null&&!ge(i)&&(i=null);const r=jh(),o=new Set;let a=!1;const l=r.app={_uid:I_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:J_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=U(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Ao(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){xi=l;try{return c()}finally{xi=null}}};return l}}let xi=null;function br(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Le||He;if(s||xi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:xi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function S_(){return!!(Le||He||xi)}function k_(t,e,n,s=!1){const i={},r={};Pr(r,xo,1),t.propsDefaults=Object.create(null),qh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Eh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function x_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(bo(t.emitsOptions,h))continue;const m=e[h];if(l)if(ae(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=Dt(h);i[_]=Fa(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{qh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ae(e,d)&&((u=Ls(d))===d||!ae(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Fa(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ae(e,d))&&(delete r[d],c=!0)}c&&Gt(t,"set","$attrs")}function qh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;i&&ae(i,u=Dt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:bo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||be;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Fa(i,l,d,c[d],t,!ae(c,d))}}return o}function Fa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ss(i),s=c[n]=l.call(null,e),Yn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function Gh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[h,m]=Gh(d,e,!0);Oe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&s.set(t,_s),_s;if(B(r))for(let u=0;u<r.length;u++){const d=Dt(r[u]);au(d)&&(o[d]=be)}else if(r)for(const u in r){const d=Dt(u);if(au(d)){const h=r[u],m=o[d]=B(h)||X(h)?{type:h}:Oe({},h);if(m){const _=uu(Boolean,m.type),w=uu(String,m.type);m[0]=_>-1,m[1]=w<0||_<w,(_>-1||ae(m,"default"))&&a.push(d)}}}const c=[o,a];return ge(t)&&s.set(t,c),c}function au(t){return t[0]!=="$"}function lu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cu(t,e){return lu(t)===lu(e)}function uu(t,e){return B(e)?e.findIndex(n=>cu(n,t)):X(e)&&cu(e,t)?0:-1}const Kh=t=>t[0]==="_"||t==="$stable",Ml=t=>B(t)?t.map(Rt):[Rt(t)],R_=(t,e,n)=>{if(e._n)return e;const s=Ze((...i)=>Ml(e(...i)),n);return s._c=!1,s},Yh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Kh(i))continue;const r=t[i];if(X(r))e[i]=R_(i,r,s);else if(r!=null){const o=Ml(r);e[i]=()=>o}}},Qh=(t,e)=>{const n=Ml(e);t.slots.default=()=>n},A_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Pr(e,"_",n)):Yh(e,t.slots={})}else t.slots={},e&&Qh(t,e);Pr(t.slots,xo,1)},P_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Yh(e,i)),o=e}else e&&(Qh(t,e),o={default:1});if(r)for(const a in i)!Kh(a)&&!(a in o)&&delete i[a]};function $a(t,e,n,s,i=!1){if(B(t)){t.forEach((h,m)=>$a(h,e&&(B(e)?e[m]:e),n,s,i));return}if(ci(s)&&!i)return;const r=s.shapeFlag&4?Ao(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Pe(c)?(u[c]=null,ae(d,c)&&(d[c]=null)):Ae(c)&&(c.value=null)),X(l))wn(l,a,12,[o,u]);else{const h=Pe(l),m=Ae(l);if(h||m){const _=()=>{if(t.f){const w=h?ae(d,l)?d[l]:u[l]:l.value;i?B(w)&&vl(w,r):B(w)?w.includes(r)||w.push(r):h?(u[l]=[r],ae(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ae(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,tt(_,n)):_()}}}const tt=Zg;function N_(t){return O_(t)}function O_(t,e){const n=ka();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Ct,insertStaticContent:_}=t,w=(f,p,g,y=null,C=null,E=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Vn(f,p)&&(y=v(f),et(f,C,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:F}=p;switch(b){case ko:x(f,p,g,y);break;case ht:A(f,p,g,y);break;case Ir:f==null&&P(p,g,y,R);break;case Se:D(f,p,g,y,C,E,R,I,S);break;default:F&1?Z(f,p,g,y,C,E,R,I,S):F&6?ce(f,p,g,y,C,E,R,I,S):(F&64||F&128)&&b.process(f,p,g,y,C,E,R,I,S,k)}H!=null&&C&&$a(H,f&&f.ref,E,p||f,!p)},x=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},q=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},Z=(f,p,g,y,C,E,R,I,S)=>{R=R||p.type==="svg",f==null?ye(p,g,y,C,E,R,I,S):W(f,p,C,E,R,I,S)},ye=(f,p,g,y,C,E,R,I)=>{let S,b;const{type:H,props:F,shapeFlag:z,transition:Y,dirs:ne}=f;if(S=f.el=o(f.type,E,F&&F.is,F),z&8?u(S,f.children):z&16&&N(f.children,S,null,y,C,E&&H!=="foreignObject",R,I),ne&&Mn(f,null,y,"created"),Ce(S,f,f.scopeId,R,y),F){for(const he in F)he!=="value"&&!Cr(he)&&r(S,he,null,F[he],E,f.children,y,C,je);"value"in F&&r(S,"value",null,F.value),(b=F.onVnodeBeforeMount)&&xt(b,y,f)}ne&&Mn(f,null,y,"beforeMount");const ve=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;ve&&Y.beforeEnter(S),s(S,p,g),((b=F&&F.onVnodeMounted)||ve||ne)&&tt(()=>{b&&xt(b,y,f),ve&&Y.enter(S),ne&&Mn(f,null,y,"mounted")},C)},Ce=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(C){let E=C.subTree;if(p===E){const R=C.vnode;Ce(f,R,R.scopeId,R.slotScopeIds,C.parent)}}},N=(f,p,g,y,C,E,R,I,S=0)=>{for(let b=S;b<f.length;b++){const H=f[b]=I?cn(f[b]):Rt(f[b]);w(null,H,p,g,y,C,E,R,I)}},W=(f,p,g,y,C,E,R)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:H}=p;S|=f.patchFlag&16;const F=f.props||be,z=p.props||be;let Y;g&&Dn(g,!1),(Y=z.onVnodeBeforeUpdate)&&xt(Y,g,p,f),H&&Mn(p,f,g,"beforeUpdate"),g&&Dn(g,!0);const ne=C&&p.type!=="foreignObject";if(b?J(f.dynamicChildren,b,I,g,y,ne,E):R||ue(f,p,I,null,g,y,ne,E,!1),S>0){if(S&16)pe(I,p,F,z,g,y,C);else if(S&2&&F.class!==z.class&&r(I,"class",null,z.class,C),S&4&&r(I,"style",F.style,z.style,C),S&8){const ve=p.dynamicProps;for(let he=0;he<ve.length;he++){const Ne=ve[he],pt=F[Ne],cs=z[Ne];(cs!==pt||Ne==="value")&&r(I,Ne,pt,cs,C,f.children,g,y,je)}}S&1&&f.children!==p.children&&u(I,p.children)}else!R&&b==null&&pe(I,p,F,z,g,y,C);((Y=z.onVnodeUpdated)||H)&&tt(()=>{Y&&xt(Y,g,p,f),H&&Mn(p,f,g,"updated")},y)},J=(f,p,g,y,C,E,R)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],H=S.el&&(S.type===Se||!Vn(S,b)||S.shapeFlag&70)?d(S.el):g;w(S,b,H,null,y,C,E,R,!0)}},pe=(f,p,g,y,C,E,R)=>{if(g!==y){if(g!==be)for(const I in g)!Cr(I)&&!(I in y)&&r(f,I,g[I],null,R,p.children,C,E,je);for(const I in y){if(Cr(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,R,p.children,C,E,je)}"value"in y&&r(f,"value",g.value,y.value)}},D=(f,p,g,y,C,E,R,I,S)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:z,slotScopeIds:Y}=p;Y&&(I=I?I.concat(Y):Y),f==null?(s(b,g,y),s(H,g,y),N(p.children,g,H,C,E,R,I,S)):F>0&&F&64&&z&&f.dynamicChildren?(J(f.dynamicChildren,z,g,C,E,R,I),(p.key!=null||C&&p===C.subTree)&&Jh(f,p,!0)):ue(f,p,g,H,C,E,R,I,S)},ce=(f,p,g,y,C,E,R,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,R,S):ze(p,g,y,C,E,R,S):Ye(f,p,S)},ze=(f,p,g,y,C,E,R)=>{const I=f.component=B_(f,y,C);if(To(f)&&(I.ctx.renderer=k),H_(I),I.asyncDep){if(C&&C.registerDep(I,ie),!f.el){const S=I.subTree=U(ht);A(null,S,p,g)}return}ie(I,f,p,g,C,E,R)},Ye=(f,p,g)=>{const y=p.component=f.component;if(Qg(f,p,g))if(y.asyncDep&&!y.asyncResolved){me(y,p,g);return}else y.next=p,zg(y.update),y.update();else p.el=f.el,y.vnode=p},ie=(f,p,g,y,C,E,R)=>{const I=()=>{if(f.isMounted){let{next:H,bu:F,u:z,parent:Y,vnode:ne}=f,ve=H,he;Dn(f,!1),H?(H.el=ne.el,me(f,H,R)):H=ne,F&&Er(F),(he=H.props&&H.props.onVnodeBeforeUpdate)&&xt(he,Y,H,ne),Dn(f,!0);const Ne=Qo(f),pt=f.subTree;f.subTree=Ne,w(pt,Ne,d(pt.el),v(pt),f,C,E),H.el=Ne.el,ve===null&&Jg(f,Ne.el),z&&tt(z,C),(he=H.props&&H.props.onVnodeUpdated)&&tt(()=>xt(he,Y,H,ne),C)}else{let H;const{el:F,props:z}=p,{bm:Y,m:ne,parent:ve}=f,he=ci(p);if(Dn(f,!1),Y&&Er(Y),!he&&(H=z&&z.onVnodeBeforeMount)&&xt(H,ve,p),Dn(f,!0),F&&de){const Ne=()=>{f.subTree=Qo(f),de(F,f.subTree,f,C,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=Qo(f);w(null,Ne,g,y,f,C,E),p.el=Ne.el}if(ne&&tt(ne,C),!he&&(H=z&&z.onVnodeMounted)){const Ne=p;tt(()=>xt(H,ve,Ne),C)}(p.shapeFlag&256||ve&&ci(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&tt(f.a,C),f.isMounted=!0,p=g=y=null}},S=f.effect=new El(I,()=>Al(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,Dn(f,!0),b()},me=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,x_(f,p.props,y,g),P_(f,p.children,g),Fs(),Zc(),$s()},ue=(f,p,g,y,C,E,R,I,S=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,F=p.children,{patchFlag:z,shapeFlag:Y}=p;if(z>0){if(z&128){en(b,F,g,y,C,E,R,I,S);return}else if(z&256){$t(b,F,g,y,C,E,R,I,S);return}}Y&8?(H&16&&je(b,C,E),F!==b&&u(g,F)):H&16?Y&16?en(b,F,g,y,C,E,R,I,S):je(b,C,E,!0):(H&8&&u(g,""),Y&16&&N(F,g,y,C,E,R,I,S))},$t=(f,p,g,y,C,E,R,I,S)=>{f=f||_s,p=p||_s;const b=f.length,H=p.length,F=Math.min(b,H);let z;for(z=0;z<F;z++){const Y=p[z]=S?cn(p[z]):Rt(p[z]);w(f[z],Y,g,null,C,E,R,I,S)}b>H?je(f,C,E,!0,!1,F):N(p,g,y,C,E,R,I,S,F)},en=(f,p,g,y,C,E,R,I,S)=>{let b=0;const H=p.length;let F=f.length-1,z=H-1;for(;b<=F&&b<=z;){const Y=f[b],ne=p[b]=S?cn(p[b]):Rt(p[b]);if(Vn(Y,ne))w(Y,ne,g,null,C,E,R,I,S);else break;b++}for(;b<=F&&b<=z;){const Y=f[F],ne=p[z]=S?cn(p[z]):Rt(p[z]);if(Vn(Y,ne))w(Y,ne,g,null,C,E,R,I,S);else break;F--,z--}if(b>F){if(b<=z){const Y=z+1,ne=Y<H?p[Y].el:y;for(;b<=z;)w(null,p[b]=S?cn(p[b]):Rt(p[b]),g,ne,C,E,R,I,S),b++}}else if(b>z)for(;b<=F;)et(f[b],C,E,!0),b++;else{const Y=b,ne=b,ve=new Map;for(b=ne;b<=z;b++){const at=p[b]=S?cn(p[b]):Rt(p[b]);at.key!=null&&ve.set(at.key,b)}let he,Ne=0;const pt=z-ne+1;let cs=!1,Wc=0;const Ys=new Array(pt);for(b=0;b<pt;b++)Ys[b]=0;for(b=Y;b<=F;b++){const at=f[b];if(Ne>=pt){et(at,C,E,!0);continue}let St;if(at.key!=null)St=ve.get(at.key);else for(he=ne;he<=z;he++)if(Ys[he-ne]===0&&Vn(at,p[he])){St=he;break}St===void 0?et(at,C,E,!0):(Ys[St-ne]=b+1,St>=Wc?Wc=St:cs=!0,w(at,p[St],g,null,C,E,R,I,S),Ne++)}const Vc=cs?M_(Ys):_s;for(he=Vc.length-1,b=pt-1;b>=0;b--){const at=ne+b,St=p[at],Bc=at+1<H?p[at+1].el:y;Ys[b]===0?w(null,St,g,Bc,C,E,R,I,S):cs&&(he<0||b!==Vc[he]?Tt(St,g,Bc,2):he--)}}},Tt=(f,p,g,y,C=null)=>{const{el:E,type:R,transition:I,children:S,shapeFlag:b}=f;if(b&6){Tt(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,k);return}if(R===Se){s(E,p,g);for(let F=0;F<S.length;F++)Tt(S[F],p,g,y);s(f.anchor,p,g);return}if(R===Ir){q(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),tt(()=>I.enter(E),C);else{const{leave:F,delayLeave:z,afterLeave:Y}=I,ne=()=>s(E,p,g),ve=()=>{F(E,()=>{ne(),Y&&Y()})};z?z(E,ne,ve):ve()}else s(E,p,g)},et=(f,p,g,y=!1,C=!1)=>{const{type:E,props:R,ref:I,children:S,dynamicChildren:b,shapeFlag:H,patchFlag:F,dirs:z}=f;if(I!=null&&$a(I,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&z,ne=!ci(f);let ve;if(ne&&(ve=R&&R.onVnodeBeforeUnmount)&&xt(ve,p,f),H&6)cr(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&Mn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,k,y):b&&(E!==Se||F>0&&F&64)?je(b,p,g,!1,!0):(E===Se&&F&384||!C&&H&16)&&je(S,p,g),y&&as(f)}(ne&&(ve=R&&R.onVnodeUnmounted)||Y)&&tt(()=>{ve&&xt(ve,p,f),Y&&Mn(f,null,p,"unmounted")},g)},as=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===Se){ls(g,y);return}if(p===Ir){M(f);return}const E=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:R,delayLeave:I}=C,S=()=>R(g,E);I?I(f.el,E,S):S()}else E()},ls=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},cr=(f,p,g)=>{const{bum:y,scope:C,update:E,subTree:R,um:I}=f;y&&Er(y),C.stop(),E&&(E.active=!1,et(R,f,p,g)),I&&tt(I,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},je=(f,p,g,y=!1,C=!1,E=0)=>{for(let R=E;R<f.length;R++)et(f[R],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),Zc(),Ph(),p._vnode=f},k={p:w,um:et,m:Tt,r:as,mt:ze,mc:N,pc:ue,pbc:J,n:v,o:t};let V,de;return e&&([V,de]=e(k)),{render:O,hydrate:V,createApp:T_(O,V)}}function Dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jh(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=cn(i[r]),a.el=o.el),n||Jh(o,a)),a.type===ko&&(a.el=o.el)}}function M_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const D_=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Ir=Symbol.for("v-stc"),di=[];let yt=null;function $(t=!1){di.push(yt=t?null:[])}function L_(){di.pop(),yt=di[di.length-1]||null}let Ri=1;function du(t){Ri+=t}function Xh(t){return t.dynamicChildren=Ri>0?yt||_s:null,L_(),Ri>0&&yt&&yt.push(t),t}function G(t,e,n,s,i,r){return Xh(L(t,e,n,s,i,r,!0))}function ft(t,e,n,s,i){return Xh(U(t,e,n,s,i,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const xo="__vInternal",Zh=({key:t})=>t??null,Tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||Ae(t)||X(t)?{i:He,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zh(e),ref:e&&Tr(e),scopeId:Io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return a?(Dl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),Ri>0&&!o&&yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yt.push(l),l}const U=F_;function F_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Vh)&&(t=ht),Fr(t)){const a=xn(t,e,!0);return n&&Dl(a,n),Ri>0&&!r&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(K_(t)&&(t=t.__vccOpts),e){e=$_(e);let{class:a,style:l}=e;a&&!Pe(a)&&(e.class=ut(a)),ge(l)&&(Ih(l)&&!B(l)&&(l=Oe({},l)),e.style=Lt(l))}const o=Pe(t)?1:Xg(t)?128:D_(t)?64:ge(t)?4:X(t)?2:0;return L(t,e,n,s,i,o,r,!0)}function $_(t){return t?Ih(t)||xo in t?Oe({},t):t:null}function xn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?U_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zh(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Tr(e)):[i,Tr(e)]:Tr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ro(t=" ",e=0){return U(ko,null,t,e)}function Sr(t="",e=!1){return e?($(),ft(ht,null,t)):U(ht,null,t)}function Rt(t){return t==null||typeof t=="boolean"?U(ht):B(t)?U(Se,null,t.slice()):typeof t=="object"?cn(t):U(ko,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function Dl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Dl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(xo in e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[Ro(e)]):n=8);t.children=e,t.shapeFlag|=n}function U_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ut([e.class,s.class]));else if(i==="style")e.style=Lt([e.style,s.style]);else if(mo(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function xt(t,e,n,s=null){dt(t,e,7,[n,s])}const W_=jh();let V_=0;function B_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||W_,r={uid:V_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(s,i),emitsOptions:Oh(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gg.bind(null,r),t.ce&&t.ce(r),r}let Le=null;const ef=()=>Le||He;let Ll,us,hu="__VUE_INSTANCE_SETTERS__";(us=ka()[hu])||(us=ka()[hu]=[]),us.push(t=>Le=t),Ll=t=>{us.length>1?us.forEach(e=>e(t)):us[0](t)};const Ss=t=>{Ll(t),t.scope.on()},Yn=()=>{Le&&Le.scope.off(),Ll(null)};function tf(t){return t.vnode.shapeFlag&4}let Ai=!1;function H_(t,e=!1){Ai=e;const{props:n,children:s}=t.vnode,i=tf(t);k_(t,n,i,e),A_(t,s);const r=i?z_(t,e):void 0;return Ai=!1,r}function z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Co(new Proxy(t.ctx,y_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?q_(t):null;Ss(t),Fs();const r=wn(s,t,0,[t.props,i]);if($s(),Yn(),sh(r)){if(r.then(Yn,Yn),e)return r.then(o=>{fu(t,o,e)}).catch(o=>{Eo(o,t,0)});t.asyncDep=r}else fu(t,r,e)}else nf(t,e)}function fu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=xh(e)),nf(t,n)}let pu;function nf(t,e,n){const s=t.type;if(!t.render){if(!e&&pu&&!s.render){const i=s.template||Ol(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=pu(i,c)}}t.render=s.render||Ct}Ss(t),Fs(),v_(t),$s(),Yn()}function j_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}}))}function q_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return j_(t)},slots:t.slots,emit:t.emit,expose:e}}function Ao(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xh(Co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}}))}function G_(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function K_(t){return X(t)&&"__vccOpts"in t}const Re=(t,e)=>Vg(t,e,Ai);function Fl(t,e,n){const s=arguments.length;return s===2?ge(e)&&!B(e)?Fr(e)?U(t,null,[e]):U(t,e):U(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fr(n)&&(n=[n]),U(t,e,n))}const Y_=Symbol.for("v-scx"),Q_=()=>Nt(Y_),J_="3.3.4",X_="http://www.w3.org/2000/svg",Bn=typeof document<"u"?document:null,mu=Bn&&Bn.createElement("template"),Z_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Bn.createElementNS(X_,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{mu.innerHTML=s?`<svg>${t}</svg>`:t;const a=mu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function e1(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function t1(t,e,n){const s=t.style,i=Pe(n);if(n&&!i){if(e&&!Pe(e))for(const r in e)n[r]==null&&Ua(s,r,"");for(const r in n)Ua(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const gu=/\s*!important$/;function Ua(t,e,n){if(B(n))n.forEach(s=>Ua(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=n1(t,e);gu.test(n)?t.setProperty(Ls(s),n.replace(gu,""),"important"):t[s]=n}}const _u=["Webkit","Moz","ms"],Zo={};function n1(t,e){const n=Zo[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return Zo[e]=s;s=yo(s);for(let i=0;i<_u.length;i++){const r=_u[i]+s;if(r in t)return Zo[e]=r}return e}const yu="http://www.w3.org/1999/xlink";function s1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yu,e.slice(6,e.length)):t.setAttributeNS(yu,e,n);else{const r=sg(e);n==null||r&&!oh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function i1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=oh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function sf(t,e,n,s){t.addEventListener(e,n,s)}function r1(t,e,n,s){t.removeEventListener(e,n,s)}function o1(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=a1(e);if(s){const c=r[e]=u1(s,i);sf(t,a,c,l)}else o&&(r1(t,a,o,l),r[e]=void 0)}}const vu=/(?:Once|Passive|Capture)$/;function a1(t){let e;if(vu.test(t)){e={};let s;for(;s=t.match(vu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let ea=0;const l1=Promise.resolve(),c1=()=>ea||(l1.then(()=>ea=0),ea=Date.now());function u1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(d1(s,n.value),e,5,[s])};return n.value=t,n.attached=c1(),n}function d1(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wu=/^on[a-z]/,h1=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?e1(t,s,i):e==="style"?t1(t,n,s):mo(e)?yl(e)||o1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f1(t,e,s,i))?i1(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),s1(t,e,s,i))};function f1(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wu.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wu.test(e)&&Pe(n)?!1:e in t}function Po(t){const e=ef();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Va(r,i))},s=()=>{const i=t(e.proxy);Wa(e.subTree,i),n(i)};e_(s),Si(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),ki(()=>i.disconnect())})}function Wa(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Wa(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Va(t.el,e);else if(t.type===Se)t.children.forEach(n=>Wa(n,e));else if(t.type===Ir){let{el:n,anchor:s}=t;for(;n&&(Va(n,e),n!==s);)n=n.nextSibling}}function Va(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const nn="transition",Js="animation",Rn=(t,{slots:e})=>Fl(i_,p1(t),e);Rn.displayName="Transition";const rf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rn.props=Oe({},Dh,rf);const Ln=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cu=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function p1(t){const e={};for(const D in t)D in rf||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=m1(i),w=_&&_[0],x=_&&_[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:q,onLeave:M,onLeaveCancelled:Z,onBeforeAppear:ye=A,onAppear:Ce=P,onAppearCancelled:N=q}=e,W=(D,ce,ze)=>{Fn(D,ce?u:a),Fn(D,ce?c:o),ze&&ze()},J=(D,ce)=>{D._isLeaving=!1,Fn(D,d),Fn(D,m),Fn(D,h),ce&&ce()},pe=D=>(ce,ze)=>{const Ye=D?Ce:P,ie=()=>W(ce,D,ze);Ln(Ye,[ce,ie]),Eu(()=>{Fn(ce,D?l:r),sn(ce,D?u:a),Cu(Ye)||bu(ce,s,w,ie)})};return Oe(e,{onBeforeEnter(D){Ln(A,[D]),sn(D,r),sn(D,o)},onBeforeAppear(D){Ln(ye,[D]),sn(D,l),sn(D,c)},onEnter:pe(!1),onAppear:pe(!0),onLeave(D,ce){D._isLeaving=!0;const ze=()=>J(D,ce);sn(D,d),y1(),sn(D,h),Eu(()=>{D._isLeaving&&(Fn(D,d),sn(D,m),Cu(M)||bu(D,s,x,ze))}),Ln(M,[D,ze])},onEnterCancelled(D){W(D,!1),Ln(q,[D])},onAppearCancelled(D){W(D,!0),Ln(N,[D])},onLeaveCancelled(D){J(D),Ln(Z,[D])}})}function m1(t){if(t==null)return null;if(ge(t))return[ta(t.enter),ta(t.leave)];{const e=ta(t);return[e,e]}}function ta(t){return Jm(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Fn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Eu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let g1=0;function bu(t,e,n,s){const i=t._endId=++g1,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=_1(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function _1(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${nn}Delay`),r=s(`${nn}Duration`),o=Iu(i,r),a=s(`${Js}Delay`),l=s(`${Js}Duration`),c=Iu(a,l);let u=null,d=0,h=0;e===nn?o>0&&(u=nn,d=o,h=r.length):e===Js?c>0&&(u=Js,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?nn:Js:null,h=u?u===nn?r.length:l.length:0);const m=u===nn&&/\b(transform|all)(,|$)/.test(s(`${nn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Iu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Tu(n)+Tu(t[s])))}function Tu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function y1(){return document.body.offsetHeight}const Su=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Er(e,n):e},v1={deep:!0,created(t,e,n){t._assign=Su(n),sf(t,"change",()=>{const s=t._modelValue,i=w1(t),r=t.checked,o=t._assign;if(B(s)){const a=ah(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(go(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(of(t,r))})},mounted:ku,beforeUpdate(t,e,n){t._assign=Su(n),ku(t,e,n)}};function ku(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=ah(e,s.props.value)>-1:go(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=vo(e,of(t,!0)))}function w1(t){return"_value"in t?t._value:t.value}function of(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ba={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Xs(t,!0),s.enter(t)):s.leave(t,()=>{Xs(t,!1)}):Xs(t,e))},beforeUnmount(t,{value:e}){Xs(t,e)}};function Xs(t,e){t.style.display=e?t._vod:"none"}const C1=Oe({patchProp:h1},Z_);let xu;function E1(){return xu||(xu=N_(C1))}const b1=(...t)=>{const e=E1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=I1(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function I1(t){return Pe(t)?document.querySelector(t):t}var T1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let af;const Ki=t=>af=t,lf=Symbol();function Ha(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hi||(hi={}));function S1(){const t=uh(!0),e=t.run(()=>De({}));let n=[],s=[];const i=Co({install(r){Ki(i),i._a=r,r.provide(lf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!T1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const cf=()=>{};function Ru(t,e,n,s=cf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&dh()&&og(i),i}function ds(t,...e){t.slice().forEach(n=>{n(...e)})}const k1=t=>t();function za(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ha(i)&&Ha(s)&&t.hasOwnProperty(n)&&!Ae(s)&&!vn(s)?t[n]=za(i,s):t[n]=s}return t}const x1=Symbol();function R1(t){return!Ha(t)||!t.hasOwnProperty(x1)}const{assign:an}=Object;function A1(t){return!!(Ae(t)&&t.effect)}function P1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Fg(n.state.value[t]);return an(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Co(Re(()=>{Ki(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=uf(t,c,e,n,s,!0),l}function uf(t,e,n={},s,i,r){let o;const a=an({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),De({});let w;function x(N){let W;c=u=!1,typeof N=="function"?(N(s.state.value[t]),W={type:hi.patchFunction,storeId:t,events:m}):(za(s.state.value[t],N),W={type:hi.patchObject,payload:N,storeId:t,events:m});const J=w=Symbol();Rl().then(()=>{w===J&&(c=!0)}),u=!0,ds(d,W,s.state.value[t])}const A=r?function(){const{state:W}=n,J=W?W():{};this.$patch(pe=>{an(pe,J)})}:cf;function P(){o.stop(),d=[],h=[],s._s.delete(t)}function q(N,W){return function(){Ki(s);const J=Array.from(arguments),pe=[],D=[];function ce(ie){pe.push(ie)}function ze(ie){D.push(ie)}ds(h,{args:J,name:N,store:Z,after:ce,onError:ze});let Ye;try{Ye=W.apply(this&&this.$id===t?this:Z,J)}catch(ie){throw ds(D,ie),ie}return Ye instanceof Promise?Ye.then(ie=>(ds(pe,ie),ie)).catch(ie=>(ds(D,ie),Promise.reject(ie))):(ds(pe,Ye),Ye)}}const M={_p:s,$id:t,$onAction:Ru.bind(null,h),$patch:x,$reset:A,$subscribe(N,W={}){const J=Ru(d,N,W.detached,()=>pe()),pe=o.run(()=>Cn(()=>s.state.value[t],D=>{(W.flush==="sync"?u:c)&&N({storeId:t,type:hi.direct,events:m},D)},an({},l,W)));return J},$dispose:P},Z=Gi(M);s._s.set(t,Z);const ye=s._a&&s._a.runWithContext||k1,Ce=s._e.run(()=>(o=uh(),ye(()=>o.run(e))));for(const N in Ce){const W=Ce[N];if(Ae(W)&&!A1(W)||vn(W))r||(_&&R1(W)&&(Ae(W)?W.value=_[N]:za(W,_[N])),s.state.value[t][N]=W);else if(typeof W=="function"){const J=q(N,W);Ce[N]=J,a.actions[N]=W}}return an(Z,Ce),an(re(Z),Ce),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:N=>{x(W=>{an(W,N)})}}),s._p.forEach(N=>{an(Z,o.run(()=>N({store:Z,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(Z.$state,_),c=!0,u=!0,Z}function N1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=S_();return a=a||(c?Nt(lf,null):null),a&&Ki(a),a=af,a._s.has(s)||(r?uf(s,e,i,a):P1(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof window<"u";function O1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function na(t,e){const n={};for(const s in e){const i=e[s];n[s]=bt(i)?i.map(t):t(i)}return n}const fi=()=>{},bt=Array.isArray,M1=/\/$/,D1=t=>t.replace(M1,"");function sa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=U1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function L1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function F1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ks(e.matched[s],n.matched[i])&&df(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function df(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$1(t[n],e[n]))return!1;return!0}function $1(t,e){return bt(t)?Au(t,e):bt(e)?Au(e,t):t===e}function Au(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function U1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var $r;(function(t){t.back="back",t.forward="forward",t.unknown=""})($r||($r={}));const ia="";function W1(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),D1(t)}const V1=/^[^#]+#/;function B1(t,e){return t.replace(V1,"#")+e}function H1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const z1=()=>({left:window.pageXOffset,top:window.pageYOffset});function j1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=H1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pu(t,e){return(history.state?history.state.position-e:-1)+t}const ja=new Map;function q1(t,e){ja.set(t,e)}function G1(t){const e=ja.get(t);return ja.delete(t),e}function K1(t=""){let e=[],n=[ia],s=0;t=W1(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:Pi.pop};for(const h of e)h(a,l,d)}const o={location:ia,state:{},base:t,createHref:B1.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[ia],s=0},go(a,l=!0){const c=this.location,u=a<0?$r.back:$r.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function Y1(t){return typeof t=="string"||t&&typeof t=="object"}function hf(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ff=Symbol("");var Nu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nu||(Nu={}));function xs(t,e){return Te(new Error,{type:t,[ff]:!0},e)}function Ut(t,e){return t instanceof Error&&ff in t&&(e==null||!!(t.type&e))}const Ou="[^/]+?",Q1={sensitive:!1,strict:!1,start:!0,end:!0},J1=/[.+*?^${}()[\]/\\]/g;function X1(t,e){const n=Te({},Q1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(J1,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:w,optional:x,regexp:A}=h;r.push({name:_,repeatable:w,optional:x});const P=A||Ou;if(P!==Ou){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+M.message)}}let q=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(q=x&&c.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),i+=q,m+=20,x&&(m+=-8),w&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:w,optional:x}=m,A=_ in c?c[_]:"";if(bt(A)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=bt(A)?A.join("/"):A;if(!P)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Z1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function e0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Z1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Mu(s))return 1;if(Mu(i))return-1}return i.length-s.length}function Mu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const t0={type:0,value:""},n0=/[a-zA-Z0-9_]/;function s0(t){if(!t)return[[]];if(t==="/")return[[t0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:n0.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function i0(t,e,n){const s=X1(s0(t.path),n),i=Te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function r0(t,e){const n=[],s=new Map;e=Fu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=o0(u);_.aliasOf=h&&h.record;const w=Fu(e,u),x=[_];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of q)x.push(Te({},_,{components:h?h.record.components:_.components,path:M,aliasOf:h?h.record:_}))}let A,P;for(const q of x){const{path:M}=q;if(d&&M[0]!=="/"){const Z=d.record.path,ye=Z[Z.length-1]==="/"?"":"/";q.path=d.record.path+(M&&ye+M)}if(A=i0(q,d,w),h?h.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),m&&u.name&&!Lu(A)&&o(u.name)),_.children){const Z=_.children;for(let ye=0;ye<Z.length;ye++)r(Z[ye],A,h&&h.children[ye])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:fi}function o(u){if(hf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&e0(u,n[d])>=0&&(u.record.path!==n[d].record.path||!pf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Lu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,w;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw xs(1,{location:u});w=h.record.name,m=Te(Du(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Du(u.params,h.keys.map(P=>P.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(P=>P.re.test(_)),h&&(m=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw xs(1,{location:u,currentLocation:d});w=h.record.name,m=Te({},d.params,u.params),_=h.stringify(m)}const x=[];let A=h;for(;A;)x.unshift(A.record),A=A.parent;return{name:w,path:_,params:m,matched:x,meta:l0(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Du(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function o0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:a0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function a0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Lu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function l0(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function Fu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pf(t,e){return e.children.some(n=>n===t||pf(t,n))}const mf=/#/g,c0=/&/g,u0=/\//g,d0=/=/g,h0=/\?/g,gf=/\+/g,f0=/%5B/g,p0=/%5D/g,_f=/%5E/g,m0=/%60/g,yf=/%7B/g,g0=/%7C/g,vf=/%7D/g,_0=/%20/g;function $l(t){return encodeURI(""+t).replace(g0,"|").replace(f0,"[").replace(p0,"]")}function y0(t){return $l(t).replace(yf,"{").replace(vf,"}").replace(_f,"^")}function qa(t){return $l(t).replace(gf,"%2B").replace(_0,"+").replace(mf,"%23").replace(c0,"%26").replace(m0,"`").replace(yf,"{").replace(vf,"}").replace(_f,"^")}function v0(t){return qa(t).replace(d0,"%3D")}function w0(t){return $l(t).replace(mf,"%23").replace(h0,"%3F")}function C0(t){return t==null?"":w0(t).replace(u0,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function E0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gf," "),o=r.indexOf("="),a=Ur(o<0?r:r.slice(0,o)),l=o<0?null:Ur(r.slice(o+1));if(a in e){let c=e[a];bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $u(t){let e="";for(let n in t){const s=t[n];if(n=v0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(r=>r&&qa(r)):[s&&qa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function b0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const I0=Symbol(""),Uu=Symbol(""),Ul=Symbol(""),wf=Symbol(""),Ga=Symbol("");function Zs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function un(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(xs(4,{from:n,to:e})):d instanceof Error?a(d):Y1(d)?a(xs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function ra(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(T0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(un(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=O1(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&un(h,n,s,r,o)()}))}}return i}function T0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wu(t){const e=Nt(Ul),n=Nt(wf),s=Re(()=>e.resolve(Ie(t.to))),i=Re(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(ks.bind(null,u));if(h>-1)return h;const m=Vu(l[c-2]);return c>1&&Vu(u)===m&&d[d.length-1].path!==m?d.findIndex(ks.bind(null,l[c-2])):h}),r=Re(()=>i.value>-1&&R0(n.params,s.value.params)),o=Re(()=>i.value>-1&&i.value===n.matched.length-1&&df(n.params,s.value.params));function a(l={}){return x0(l)?e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(fi):Promise.resolve()}return{route:s,href:Re(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const S0=$h({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wu,setup(t,{slots:e}){const n=Gi(Wu(t)),{options:s}=Nt(Ul),i=Re(()=>({[Bu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Fl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),k0=S0;function x0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function R0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Vu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bu=(t,e,n)=>t??e??n,A0=$h({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(Ga),i=Re(()=>t.route||s.value),r=Nt(Uu,0),o=Re(()=>{let c=Ie(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Re(()=>i.value.matched[o.value]);br(Uu,Re(()=>o.value+1)),br(I0,a),br(Ga,i);const l=De();return Cn(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!ks(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Hu(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=Fl(h,Te({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Hu(n.default,{Component:x,route:c})||x}}});function Hu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cf=A0;function P0(t){const e=r0(t.routes,t),n=t.parseQuery||E0,s=t.stringifyQuery||$u,i=t.history,r=Zs(),o=Zs(),a=Zs(),l=Mg(rn);let c=rn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=na.bind(null,v=>""+v),d=na.bind(null,C0),h=na.bind(null,Ur);function m(v,O){let k,V;return hf(v)?(k=e.getRecordMatcher(v),V=O):V=v,e.addRoute(V,k)}function _(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function w(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=Te({},O||l.value),typeof v=="string"){const g=sa(n,v,O.path),y=e.resolve({path:g.path},O),C=i.createHref(g.fullPath);return Te(g,y,{params:h(y.params),hash:Ur(g.hash),redirectedFrom:void 0,href:C})}let k;if("path"in v)k=Te({},v,{path:sa(n,v.path,O.path).path});else{const g=Te({},v.params);for(const y in g)g[y]==null&&delete g[y];k=Te({},v,{params:d(g)}),O.params=d(O.params)}const V=e.resolve(k,O),de=v.hash||"";V.params=u(h(V.params));const f=L1(s,Te({},v,{hash:y0(de),path:V.path})),p=i.createHref(f);return Te({fullPath:f,hash:de,query:s===$u?b0(v.query):v.query||{}},V,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?sa(n,v,l.value.path):Te({},v)}function q(v,O){if(c!==v)return xs(8,{from:O,to:v})}function M(v){return Ce(v)}function Z(v){return M(Te(P(v),{replace:!0}))}function ye(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let V=typeof k=="function"?k(v):k;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),Te({query:v.query,hash:v.hash,params:"path"in V?{}:v.params},V)}}function Ce(v,O){const k=c=A(v),V=l.value,de=v.state,f=v.force,p=v.replace===!0,g=ye(k);if(g)return Ce(Te(P(g),{state:typeof g=="object"?Te({},de,g.state):de,force:f,replace:p}),O||k);const y=k;y.redirectedFrom=O;let C;return!f&&F1(s,V,k)&&(C=xs(16,{to:y,from:V}),Tt(V,V,!0,!1)),(C?Promise.resolve(C):J(y,V)).catch(E=>Ut(E)?Ut(E,2)?E:en(E):ue(E,y,V)).then(E=>{if(E){if(Ut(E,2))return Ce(Te({replace:p},P(E.to),{state:typeof E.to=="object"?Te({},de,E.to.state):de,force:f}),O||y)}else E=D(y,V,!0,p,de);return pe(y,V,E),E})}function N(v,O){const k=q(v,O);return k?Promise.reject(k):Promise.resolve()}function W(v){const O=ls.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function J(v,O){let k;const[V,de,f]=N0(v,O);k=ra(V.reverse(),"beforeRouteLeave",v,O);for(const g of V)g.leaveGuards.forEach(y=>{k.push(un(y,v,O))});const p=N.bind(null,v,O);return k.push(p),je(k).then(()=>{k=[];for(const g of r.list())k.push(un(g,v,O));return k.push(p),je(k)}).then(()=>{k=ra(de,"beforeRouteUpdate",v,O);for(const g of de)g.updateGuards.forEach(y=>{k.push(un(y,v,O))});return k.push(p),je(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(bt(g.beforeEnter))for(const y of g.beforeEnter)k.push(un(y,v,O));else k.push(un(g.beforeEnter,v,O));return k.push(p),je(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=ra(f,"beforeRouteEnter",v,O),k.push(p),je(k))).then(()=>{k=[];for(const g of o.list())k.push(un(g,v,O));return k.push(p),je(k)}).catch(g=>Ut(g,8)?g:Promise.reject(g))}function pe(v,O,k){a.list().forEach(V=>W(()=>V(v,O,k)))}function D(v,O,k,V,de){const f=q(v,O);if(f)return f;const p=O===rn,g=fs?history.state:{};k&&(V||p?i.replace(v.fullPath,Te({scroll:p&&g&&g.scroll},de)):i.push(v.fullPath,de)),l.value=v,Tt(v,O,k,p),en()}let ce;function ze(){ce||(ce=i.listen((v,O,k)=>{if(!cr.listening)return;const V=A(v),de=ye(V);if(de){Ce(Te(de,{replace:!0}),V).catch(fi);return}c=V;const f=l.value;fs&&q1(Pu(f.fullPath,k.delta),z1()),J(V,f).catch(p=>Ut(p,12)?p:Ut(p,2)?(Ce(p.to,V).then(g=>{Ut(g,20)&&!k.delta&&k.type===Pi.pop&&i.go(-1,!1)}).catch(fi),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ue(p,V,f))).then(p=>{p=p||D(V,f,!1),p&&(k.delta&&!Ut(p,8)?i.go(-k.delta,!1):k.type===Pi.pop&&Ut(p,20)&&i.go(-1,!1)),pe(V,f,p)}).catch(fi)}))}let Ye=Zs(),ie=Zs(),me;function ue(v,O,k){en(v);const V=ie.list();return V.length?V.forEach(de=>de(v,O,k)):console.error(v),Promise.reject(v)}function $t(){return me&&l.value!==rn?Promise.resolve():new Promise((v,O)=>{Ye.add([v,O])})}function en(v){return me||(me=!v,ze(),Ye.list().forEach(([O,k])=>v?k(v):O()),Ye.reset()),v}function Tt(v,O,k,V){const{scrollBehavior:de}=t;if(!fs||!de)return Promise.resolve();const f=!k&&G1(Pu(v.fullPath,0))||(V||!k)&&history.state&&history.state.scroll||null;return Rl().then(()=>de(v,O,f)).then(p=>p&&j1(p)).catch(p=>ue(p,v,O))}const et=v=>i.go(v);let as;const ls=new Set,cr={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:x,getRoutes:w,resolve:A,options:t,push:M,replace:Z,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:$t,install(v){const O=this;v.component("RouterLink",k0),v.component("RouterView",Cf),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(l)}),fs&&!as&&l.value===rn&&(as=!0,M(i.location).catch(de=>{}));const k={};for(const de in rn)Object.defineProperty(k,de,{get:()=>l.value[de],enumerable:!0});v.provide(Ul,O),v.provide(wf,Eh(k)),v.provide(Ga,l);const V=v.unmount;ls.add(v),v.unmount=function(){ls.delete(v),ls.size<1&&(c=rn,ce&&ce(),ce=null,l.value=rn,as=!1,me=!1),V()}}};function je(v){return v.reduce((O,k)=>O.then(()=>W(k)),Promise.resolve())}return cr}function N0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ks(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Vs(e)},Vs=function(t){return new Error("Firebase Database ("+Ef.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new M0;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class M0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(t){const e=bf(t);return Wl.encodeByteArray(e,!0)},Wr=function(t){return If(t).replace(/\./g,"")},Vr=function(t){try{return Wl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){return Tf(void 0,t)}function Tf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!L0(n)||(t[n]=Tf(t[n],e[n]));return t}function L0(t){return t!=="__proto__"}/**
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
 */function F0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $0=()=>F0().__FIREBASE_DEFAULTS__,U0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},W0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vr(t[1]);return e&&JSON.parse(e)},Vl=()=>{try{return $0()||U0()||W0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sf=t=>{var e,n;return(n=(e=Vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V0=t=>{const e=Sf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kf=()=>{var t;return(t=Vl())===null||t===void 0?void 0:t.config},xf=t=>{var e;return(e=Vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function B0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wr(JSON.stringify(n)),Wr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function H0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Af(){return Ef.NODE_ADMIN===!0}function j0(){try{return typeof indexedDB=="object"}catch{return!1}}function q0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="FirebaseError";class On extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=G0,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?K0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,s)}}function K0(t,e){return t.replace(Y0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Y0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ni(Vr(r[0])||""),n=Ni(Vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Q0=function(t){const e=Pf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},J0=function(t){const e=Pf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ka(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(zu(r)&&zu(o)){if(!Hr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function zu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Z0(t,e){const n=new ey(t,e);return n.subscribe.bind(n)}class ey{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ty(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=oa),i.error===void 0&&(i.error=oa),i.complete===void 0&&(i.complete=oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ty(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oa(){}function Hl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class sy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new No;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ry(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iy(t){return t===$n?void 0:t}function ry(t){return t.instantiationMode==="EAGER"}/**
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
 */class oy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const ay={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ly=fe.INFO,cy={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},uy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=cy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=ly,this._logHandler=uy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ay[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const dy=(t,e)=>e.some(n=>t instanceof n);let ju,qu;function hy(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fy(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nf=new WeakMap,Ya=new WeakMap,Of=new WeakMap,aa=new WeakMap,jl=new WeakMap;function py(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(En(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nf.set(n,t)}).catch(()=>{}),jl.set(e,t),e}function my(t){if(Ya.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ya.set(t,e)}let Qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Of.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gy(t){Qa=t(Qa)}function _y(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(la(this),e,...n);return Of.set(s,e.sort?e.sort():[e]),En(s)}:fy().includes(t)?function(...e){return t.apply(la(this),e),En(Nf.get(this))}:function(...e){return En(t.apply(la(this),e))}}function yy(t){return typeof t=="function"?_y(t):(t instanceof IDBTransaction&&my(t),dy(t,hy())?new Proxy(t,Qa):t)}function En(t){if(t instanceof IDBRequest)return py(t);if(aa.has(t))return aa.get(t);const e=yy(t);return e!==t&&(aa.set(t,e),jl.set(e,t)),e}const la=t=>jl.get(t);function vy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=En(o);return s&&o.addEventListener("upgradeneeded",l=>{s(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wy=["get","getKey","getAll","getAllKeys","count"],Cy=["put","add","delete","clear"],ca=new Map;function Gu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Cy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ca.set(e,r),r}gy(t=>({...t,get:(e,n,s)=>Gu(e,n)||t.get(e,n,s),has:(e,n)=>!!Gu(e,n)||t.has(e,n)}));/**
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
 */class Ey{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(by(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function by(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",Ku="0.9.15";/**
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
 */const Zn=new zl("@firebase/app"),Iy="@firebase/app-compat",Ty="@firebase/analytics-compat",Sy="@firebase/analytics",ky="@firebase/app-check-compat",xy="@firebase/app-check",Ry="@firebase/auth",Ay="@firebase/auth-compat",Py="@firebase/database",Ny="@firebase/database-compat",Oy="@firebase/functions",My="@firebase/functions-compat",Dy="@firebase/installations",Ly="@firebase/installations-compat",Fy="@firebase/messaging",$y="@firebase/messaging-compat",Uy="@firebase/performance",Wy="@firebase/performance-compat",Vy="@firebase/remote-config",By="@firebase/remote-config-compat",Hy="@firebase/storage",zy="@firebase/storage-compat",jy="@firebase/firestore",qy="@firebase/firestore-compat",Gy="firebase",Ky="10.1.0";/**
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
 */const Xa="[DEFAULT]",Yy={[Ja]:"fire-core",[Iy]:"fire-core-compat",[Sy]:"fire-analytics",[Ty]:"fire-analytics-compat",[xy]:"fire-app-check",[ky]:"fire-app-check-compat",[Ry]:"fire-auth",[Ay]:"fire-auth-compat",[Py]:"fire-rtdb",[Ny]:"fire-rtdb-compat",[Oy]:"fire-fn",[My]:"fire-fn-compat",[Dy]:"fire-iid",[Ly]:"fire-iid-compat",[Fy]:"fire-fcm",[$y]:"fire-fcm-compat",[Uy]:"fire-perf",[Wy]:"fire-perf-compat",[Vy]:"fire-rc",[By]:"fire-rc-compat",[Hy]:"fire-gcs",[zy]:"fire-gcs-compat",[jy]:"fire-fst",[qy]:"fire-fst-compat","fire-js":"fire-js",[Gy]:"fire-js-all"};/**
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
 */const zr=new Map,Za=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Za.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,t);for(const n of zr.values())Qy(n,t);return!0}function ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new Yi("app","Firebase",Jy);/**
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
 */class Xy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=Ky;function Mf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=kf()),!n)throw bn.create("no-options");const r=zr.get(i);if(r){if(Hr(n,r.options)&&Hr(s,r.config))return r;throw bn.create("duplicate-app",{appName:i})}const o=new oy(i);for(const l of Za.values())o.addComponent(l);const a=new Xy(n,s,o);return zr.set(i,a),a}function Df(t=Xa){const e=zr.get(t);if(!e&&t===Xa&&kf())return Mf();if(!e)throw bn.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=Yy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}As(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zy="firebase-heartbeat-database",ev=1,Oi="firebase-heartbeat-store";let ua=null;function Lf(){return ua||(ua=vy(Zy,ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oi)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),ua}async function tv(t){try{return await(await Lf()).transaction(Oi).objectStore(Oi).get(Ff(t))}catch(e){if(e instanceof On)Zn.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Yu(t,e){try{const s=(await Lf()).transaction(Oi,"readwrite");await s.objectStore(Oi).put(e,Ff(t)),await s.done}catch(n){if(n instanceof On)Zn.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(s.message)}}}function Ff(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nv=1024,sv=30*24*60*60*1e3;class iv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ov(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=sv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qu(),{heartbeatsToSend:n,unsentEntries:s}=rv(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qu(){return new Date().toISOString().substring(0,10)}function rv(t,e=nv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ju(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ju(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j0()?q0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ju(t){return Wr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function av(t){As(new Xn("platform-logger",e=>new Ey(e),"PRIVATE")),As(new Xn("heartbeat",e=>new iv(e),"PRIVATE")),In(Ja,Ku,t),In(Ja,Ku,"esm2017"),In("fire-js","")}av("");var lv="firebase",cv="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(lv,cv,"app");const uv={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},$f=Mf(uv);function Gl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dv=Uf,Wf=new Yi("auth","Firebase",Uf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new zl("@firebase/auth");function hv(t,...e){jr.logLevel<=fe.WARN&&jr.warn(`Auth (${Hs}): ${t}`,...e)}function kr(t,...e){jr.logLevel<=fe.ERROR&&jr.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,...e){throw Kl(t,...e)}function Ot(t,...e){return Kl(t,...e)}function fv(t,e,n){const s=Object.assign(Object.assign({},dv()),{[e]:n});return new Yi("auth","Firebase",s).create(e,{appName:t.name})}function Kl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wf.create(t,...e)}function K(t,e,...n){if(!t)throw Kl(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kr(e),new Error(e)}function Yt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pv(){return Xu()==="http:"||Xu()==="https:"}function Xu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pv()||H0()||"connection"in navigator)?navigator.onLine:!0}function gv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Bl()||Rf()}get(){return mv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Qi(3e4,6e4);function Ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zs(t,e,n,s,i={}){return Bf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Bs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Vf.fetch()(Hf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Bf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_v),e);try{const i=new vv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fv(t,u,c);It(t,u)}}catch(i){if(i instanceof On)throw i;It(t,"network-request-failed",{message:String(i)})}}async function Mo(t,e,n,s,i={}){const r=await zs(t,e,n,s,i);return"mfaPendingCredential"in r&&It(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Hf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Yl(t.config,i):`${t.config.apiScheme}://${i}`}class vv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),yv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e){return zs(t,"POST","/v1/accounts:delete",e)}async function Cv(t,e){return zs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ev(t,e=!1){const n=ot(t),s=await n.getIdToken(e),i=Ql(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:pi(da(i.auth_time)),issuedAtTime:pi(da(i.iat)),expirationTime:pi(da(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function da(t){return Number(t)*1e3}function Ql(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vr(n);return i?JSON.parse(i):(kr("Failed to decode base64 JWT payload"),null)}catch(i){return kr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bv(t){const e=Ql(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof On&&Iv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Iv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Mi(t,Cv(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xv(r.providerUserInfo):[],a=kv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Sv(t){const e=ot(t);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xv(t){return t.map(e=>{var{providerId:n}=e,s=Gl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(t,e){const n=await Bf(t,{},async()=>{const s=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Hf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Rv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Di;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ev(this,e)}reload(){return Sv(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mi(this,wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:M,isAnonymous:Z,providerData:ye,stsTokenManager:Ce}=n;K(q&&Ce,e,"internal-error");const N=Di.fromJSON(this.name,Ce);K(typeof q=="string",e,"internal-error"),on(d,e.name),on(h,e.name),K(typeof M=="boolean",e,"internal-error"),K(typeof Z=="boolean",e,"internal-error"),on(m,e.name),on(_,e.name),on(w,e.name),on(x,e.name),on(A,e.name),on(P,e.name);const W=new Qn({uid:q,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:Z,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:N,createdAt:A,lastLoginAt:P});return ye&&Array.isArray(ye)&&(W.providerData=ye.map(J=>Object.assign({},J))),x&&(W._redirectEventId=x),W}static async _fromIdTokenResponse(e,n,s=!1){const i=new Di;i.updateFromServerResponse(n);const r=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;function Bt(t){Yt(t instanceof Function,"Expected a class definition");let e=Zu.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zu.set(t,e),e)}/**
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
 */class jf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jf.type="NONE";const ed=jf;/**
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
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,r),this.fullPersistenceKey=xr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ws(Bt(ed),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Bt(ed);const o=xr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Qn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ws(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ws(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qf(e))return"Blackberry";if(Jf(e))return"Webos";if(Jl(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qf(t=Ke()){return/firefox\//i.test(t)}function Jl(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(t=Ke()){return/crios\//i.test(t)}function Kf(t=Ke()){return/iemobile/i.test(t)}function Yf(t=Ke()){return/android/i.test(t)}function Qf(t=Ke()){return/blackberry/i.test(t)}function Jf(t=Ke()){return/webos/i.test(t)}function Do(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Av(t=Ke()){var e;return Do(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pv(){return z0()&&document.documentMode===10}function Xf(t=Ke()){return Do(t)||Yf(t)||Jf(t)||Qf(t)||/windows phone/i.test(t)||Kf(t)}function Nv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e=[]){let n;switch(t){case"Browser":n=td(Ke());break;case"Worker":n=`${td(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}async function ep(t,e){return zs(t,"GET","/v2/recaptchaConfig",Ji(t,e))}function nd(t){return t!==void 0&&t.enterprise!==void 0}class tp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function np(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Ov().appendChild(s)})}function Mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Dv="https://www.google.com/recaptcha/enterprise.js?render=",Lv="recaptcha-enterprise",Fv="NO_RECAPTCHA";class sp{constructor(e){this.type=Lv,this.auth=Xi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ep(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Fv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&nd(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}np(Dv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function sd(t,e,n,s=!1){const i=new sp(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class $v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new $v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}async initializeRecaptchaConfig(){const e=await ep(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new sp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return ot(t)}class id{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z0(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e){const n=ql(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Hr(r,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function Vv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Bv(t,e,n){const s=Xi(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ip(e),{host:o,port:a}=Hv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zv()}function ip(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hv(t){const e=ip(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:rd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:rd(o)}}}function rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function jv(t,e){return zs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}async function Gv(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Xl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Li(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await sd(e,s,"signInWithPassword");return ha(e,i)}else return ha(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await sd(e,s,"signInWithPassword");return ha(e,r)}else return Promise.reject(i)});case"emailLink":return qv(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return jv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gv(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="http://localhost";class es extends Xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new es(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:Kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qv(t){const e=oi(ai(t)).link,n=e?oi(ai(e)).deep_link_id:null,s=oi(ai(t)).deep_link_id;return(s?oi(ai(s)).link:null)||s||n||e||t}class Zl{constructor(e){var n,s,i,r,o,a;const l=oi(ai(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=Yv((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qv(e);try{return new Zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Zl.parseLink(n);return K(s,"argument-error"),Li._fromEmailAndCode(e,s.code,s.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Zi{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Zi{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Qn._fromIdTokenResponse(e,s,i),o=od(s);return new Ps({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=od(s);return new Ps({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends On{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Gr(e,n,s,i)}}function op(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(t,r,e,s):r})}async function Jv(t,e,n=!1){const s=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",s)}/**
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
 */async function Xv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Mi(t,op(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Ql(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Ps._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&It(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e,n=!1){const s="signIn",i=await op(t,s,e),r=await Ps._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Zv(t,e){return ap(Xi(t),e)}function e2(t,e,n){return Zv(ot(t),js.credential(e,n))}function t2(t,e,n,s){return ot(t).onIdTokenChanged(e,n,s)}function n2(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function s2(t,e,n,s){return ot(t).onAuthStateChanged(e,n,s)}const Kr="__sak";/**
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
 */class lp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(){const t=Ke();return Jl(t)||Do(t)}const r2=1e3,o2=10;class cp extends lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=i2()&&Nv(),this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Pv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o2):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},r2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cp.type="LOCAL";const a2=cp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}up.type="SESSION";const dp=up;/**
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
 */function l2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Lo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await l2(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class c2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ec("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function u2(t){Mt().location.href=t}/**
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
 */function hp(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function d2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f2(){return hp()?self:null}/**
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
 */const fp="firebaseLocalStorageDb",p2=1,Yr="firebaseLocalStorage",pp="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function m2(){const t=indexedDB.deleteDatabase(fp);return new er(t).toPromise()}function tl(){const t=indexedDB.open(fp,p2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Yr,{keyPath:pp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Yr)?e(s):(s.close(),await m2(),e(await tl()))})})}async function ad(t,e,n){const s=Fo(t,!0).put({[pp]:e,value:n});return new er(s).toPromise()}async function g2(t,e){const n=Fo(t,!1).get(e),s=await new er(n).toPromise();return s===void 0?null:s.value}function ld(t,e){const n=Fo(t,!0).delete(e);return new er(n).toPromise()}const _2=800,y2=3;class mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>y2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(f2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d2(),!this.activeServiceWorker)return;this.sender=new c2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await ad(e,Kr,"1"),await ld(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ad(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>g2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fo(i,!1).getAll();return new er(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mp.type="LOCAL";const v2=mp;new Qi(3e4,6e4);/**
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
 */function w2(t,e){return e?Bt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tc extends Xl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C2(t){return ap(t.auth,new tc(t),t.bypassAuthState)}function E2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Xv(n,new tc(t),t.bypassAuthState)}async function b2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Jv(n,new tc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C2;case"linkViaPopup":case"linkViaRedirect":return b2;case"reauthViaPopup":case"reauthViaRedirect":return E2;default:It(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new Qi(2e3,1e4);class ms extends gp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I2.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="pendingRedirect",Rr=new Map;class S2 extends gp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const s=await k2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k2(t,e){const n=A2(e),s=R2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function x2(t,e){Rr.set(t._key(),e)}function R2(t){return Bt(t._redirectPersistence)}function A2(t){return xr(T2,t.config.apiKey,t.name)}async function P2(t,e,n=!1){const s=Xi(t),i=w2(s,e),o=await new S2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=10*60*1e3;class O2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_p(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N2&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _p({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _p(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e={}){return zs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F2=/^https?/;async function $2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D2(t);for(const n of e)try{if(U2(n))return}catch{}It(t,"unauthorized-domain")}function U2(t){const e=el(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!F2.test(n))return!1;if(L2.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const W2=new Qi(3e4,6e4);function ud(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V2(t){return new Promise((e,n)=>{var s,i,r;function o(){ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ud(),n(Ot(t,"network-request-failed"))},timeout:W2.get()})}if(!((i=(s=Mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mt().gapi)===null||r===void 0)&&r.load)o();else{const a=Mv("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},np(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ar=null,e})}let Ar=null;function B2(t){return Ar=Ar||V2(t),Ar}/**
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
 */const H2=new Qi(5e3,15e3),z2="__/auth/iframe",j2="emulator/auth/iframe",q2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yl(e,j2):`https://${t.config.authDomain}/${z2}`,s={apiKey:e.apiKey,appName:t.name,v:Hs},i=G2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Bs(s).slice(1)}`}async function Y2(t){const e=await B2(t),n=Mt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:K2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Mt().setTimeout(()=>{r(o)},H2.get());function l(){Mt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J2=500,X2=600,Z2="_blank",ew="http://localhost";class dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tw(t,e,n,s=J2,i=X2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ke().toLowerCase();n&&(a=Gf(c)?Z2:n),qf(c)&&(e=e||ew,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Av(c)&&a!=="_self")return nw(e||"",a),new dd(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new dd(d)}function nw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sw="__/auth/handler",iw="emulator/auth/handler",rw=encodeURIComponent("fac");async function hd(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hs,eventId:i};if(e instanceof rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ka(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Zi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rw}=${encodeURIComponent(l)}`:"";return`${ow(t)}?${Bs(a).slice(1)}${c}`}function ow({config:t}){return t.emulator?Yl(t,iw):`https://${t.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class aw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dp,this._completeRedirectFn=P2,this._overrideRedirectResult=x2}async _openPopup(e,n,s,i){var r;Yt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await hd(e,n,s,el(),i);return tw(e,o,ec())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await hd(e,n,s,el(),i);return u2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Y2(e),s=new O2(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fa,{type:fa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[fa];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xf()||Jl()||Do()}}const lw=aw;var fd="@firebase/auth",pd="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dw(t){As(new Xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(t)},c=new Uv(s,i,r,l);return Vv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),As(new Xn("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(s=>new cw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(fd,pd,uw(t)),In(fd,pd,"esm2017")}/**
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
 */const hw=5*60,fw=xf("authIdTokenMaxAge")||hw;let md=null;const pw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fw)return;const i=n==null?void 0:n.token;md!==i&&(md=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mw(t=Df()){const e=ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wv(t,{popupRedirectResolver:lw,persistence:[v2,a2,dp]}),s=xf("authTokenSyncURL");if(s){const r=pw(s);n2(n,r,()=>r(n.currentUser)),t2(n,o=>r(o))}const i=Sf("auth");return i&&Bv(n,`http://${i}`),n}dw("Browser");const nc=mw($f),Qr=De({}),ln=De({}),sc=new De(!1);s2(nc,async t=>{if(t){Qr.value=t,ln.value=await kb(`users/${t.uid}`);for(const{observable:e,path:n}of Fm)if(ln.value["game-data"]&&ln.value["game-data"]["tileswap-naenae"]&&ln.value["game-data"]["tileswap-naenae"][n]){const s=ln.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=ln.value["game-data"]["tileswap-naenae"][n]}}else Qr.value={},ln.value={};sc.value=!0});const $o=Re(()=>Qr.value);Re(()=>ln.value);const tr=Re(()=>Object.keys(Qr.value).length>0),gw=async(t,e)=>await e2(nc,t,e),nl=async()=>await nc.signOut(),gd="@firebase/database",_d="1.0.1";/**
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
 */let yp="";function _w(t){yp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ni(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yw(e)}}catch{}return new vw},zn=vp("localStorage"),sl=vp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new zl("@firebase/database"),ww=function(){let t=1;return function(){return t++}}(),wp=function(t){const e=ny(t),n=new X0;n.update(e);const s=n.digest();return Wl.encodeByteArray(s)},nr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=nr.apply(null,s):typeof s=="object"?e+=Fe(s):e+=s,e+=" "}return e};let Jn=null,yd=!0;const Cw=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Es.logLevel=fe.VERBOSE,Jn=Es.log.bind(Es),e&&sl.set("logging_enabled",!0)):typeof t=="function"?Jn=t:(Jn=null,sl.remove("logging_enabled"))},qe=function(...t){if(yd===!0&&(yd=!1,Jn===null&&sl.get("logging_enabled")===!0&&Cw(!0)),Jn){const e=nr.apply(null,t);Jn(e)}},sr=function(t){return function(...e){qe(t,...e)}},il=function(...t){const e="FIREBASE INTERNAL ERROR: "+nr(...t);Es.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${nr(...t)}`;throw Es.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+nr(...t);Es.warn(e)},Ew=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ns="[MIN_NAME]",ts="[MAX_NAME]",qs=function(t,e){if(t===e)return 0;if(t===Ns||e===ts)return-1;if(e===Ns||t===ts)return 1;{const n=vd(t),s=vd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Iw=function(t,e){return t===e?0:t<e?-1:1},ei=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},ic=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Fe(e[s]),n+=":",n+=ic(t[e[s]]);return n+="}",n},Ep=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bp=function(t){T(!Cp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Tw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const xw=new RegExp("^-?(0*)\\d{1,10}$"),Rw=-2147483648,Aw=2147483647,vd=function(t){if(xw.test(t)){const e=Number(t);if(e>=Rw&&e<=Aw)return e}return null},Gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},Pw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Nw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="5",Ip="v",Tp="s",Sp="r",kp="f",xp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rp="ls",Ap="p",rl="ac",Pp="websocket",Np="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Mw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Pp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Np)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mw(t)&&(n.ns=t.namespace);const i=[];return rt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return D0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={},ma={};function oc(t){const e=t.toString();return pa[e]||(pa[e]=new Dw),pa[e]}function Lw(t,e){const n=t.toString();return ma[n]||(ma[n]=e()),ma[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="start",$w="close",Uw="pLPCommand",Ww="pRTLPCB",Dp="id",Lp="pw",Fp="ser",Vw="cb",Bw="seg",Hw="ts",zw="d",jw="dframe",$p=1870,Up=30,qw=$p-Up,Gw=25e3,Kw=3e4;class gs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sr(e),this.stats_=oc(n),this.urlFn=l=>(this.appCheckToken&&(l[rl]=this.appCheckToken),Mp(n,Np,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Fw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kw)),bw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ac((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wd)this.id=a,this.password=l;else if(o===$w)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[wd]="t",s[Fp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Vw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ip]=rc,this.transportSessionId&&(s[Tp]=this.transportSessionId),this.lastSessionId&&(s[Rp]=this.lastSessionId),this.applicationId&&(s[Ap]=this.applicationId),this.appCheckToken&&(s[rl]=this.appCheckToken),typeof location<"u"&&location.hostname&&xp.test(location.hostname)&&(s[Sp]=kp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tw()&&!Sw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=If(n),i=Ep(s,qw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jw]="t",s[Dp]=e,s[Lp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ac{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ww(),window[Uw+this.uniqueCallbackIdentifier]=e,window[Ww+this.uniqueCallbackIdentifier]=n,this.myIFrame=ac.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dp]=this.myID,e[Lp]=this.myPW,e[Fp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Up+s.length<=$p;){const o=this.pendingSegs.shift();s=s+"&"+Bw+i+"="+o.seg+"&"+Hw+i+"="+o.ts+"&"+zw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Gw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=16384,Qw=45e3;let Jr=null;typeof MozWebSocket<"u"?Jr=MozWebSocket:typeof WebSocket<"u"&&(Jr=WebSocket);class _t{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sr(this.connId),this.stats_=oc(n),this.connURL=_t.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ip]=rc,typeof location<"u"&&location.hostname&&xp.test(location.hostname)&&(o[Sp]=kp),n&&(o[Tp]=n),s&&(o[Rp]=s),i&&(o[rl]=i),r&&(o[Ap]=r),Mp(e,Pp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let s;Af(),this.mySock=new Jr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jr!==null&&!_t.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ni(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ep(n,Yw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let s=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_t];else{const i=this.transports_=[];for(const r of Fi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=6e4,Xw=5e3,Zw=10*1024,eC=100*1024,ga="t",Cd="d",tC="s",Ed="r",nC="e",bd="o",Id="a",Td="n",Sd="p",sC="h";class iC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sr("c:"+this.id+":"),this.transportManager_=new Fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===Id?this.upgradeIfSecondaryHealthy_():n===Ed?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ei("t",e),s=ei("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Id,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Td,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ei("t",e),s=ei("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ei(ga,e);if(Cd in e){const s=e[Cd];if(n===sC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Td){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tC?this.onConnectionShutdown_(s):n===Ed?this.onReset_(s):n===nC?il("Server Error: "+s):n===bd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):il("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rc!==s&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Vp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=32,xd=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new _e("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Bp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function $e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new _e(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return Je(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jp(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class oC{constructor(e,n){this.errorPrefix_=n,this.parts_=Hp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oo(this.parts_[s]);qp(this)}}function aC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oo(e),qp(t)}function lC(t){const e=t.parts_.pop();t.byteLength_-=Oo(e),t.parts_.length>0&&(t.byteLength_-=1)}function qp(t){if(t.byteLength_>xd)throw new Error(t.errorPrefix_+"has a key path longer than "+xd+" bytes ("+t.byteLength_+").");if(t.parts_.length>kd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kd+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Vp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new lc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=1e3,cC=60*5*1e3,Rd=30*1e3,uC=1.3,dC=3e4,hC="server_kill",Ad=3;class jt extends Wp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=sr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ti,this.maxReconnectDelay_=cC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Af())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Fe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new No,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const s=Rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):il("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dC&&(this.reconnectDelay_=ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new iC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{st(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(hC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&st(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ka(this.interruptReasons_)&&(this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ic(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ad&&(this.reconnectDelay_=Rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ad&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yp.replace(/\./g,"-")]=1,Bl()?e["framework.cordova"]=1:Rf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xr.getInstance().currentlyOnline();return Ka(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Ns,e),i=new ee(Ns,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;class Gp extends Uo{static get __EMPTY_NODE(){return vr}static set __EMPTY_NODE(e){vr=e}compare(e,n){return qs(e.name,n.name)}isDefinedOn(e){throw Vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(ts,vr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,vr)}toString(){return".key"}}const Is=new Gp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=i??nt.EMPTY_NODE,this.right=r??nt.EMPTY_NODE}copy(e,n,s,i,r){return new Ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class fC{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wr(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new fC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){return qs(t.name,e.name)}function cc(t,e){return qs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;function mC(t){ol=t}const Kp=function(t){return typeof t=="number"?"number:"+bp(t):"string:"+t},Yp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else T(t===ol||t.isEmpty(),"priority of unexpected type.");T(t===ol||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yp(this.priorityNode_)}static set __childrenNodeConstructor(e){Pd=e}static get __childrenNodeConstructor(){return Pd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bp(this.value_):e+=this.value_,this.lazyHash_=wp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=We.VALUE_TYPE_ORDER.indexOf(n),r=We.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp,Jp;function gC(t){Qp=t}function _C(t){Jp=t}class yC extends Uo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(ts,new We("[PRIORITY-POST]",Jp))}makePost(e,n){const s=Qp(e);return new ee(n,new We("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=Math.log(2);class wC{constructor(e){const n=r=>parseInt(Math.log(r)/vC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ve(h,d.node,Ve.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),w=i(m+1,c);return d=t[m],h=n?n(d):d,new Ve(h,d.node,Ve.BLACK,_,w)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const x=d-_,A=d;d-=_;const P=i(x+1,A),q=t[x],M=n?n(q):q;m(new Ve(M,q.node,w,null,P))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));w?h(x,Ve.BLACK):(h(x,Ve.BLACK),h(x,Ve.RED))}return u},o=new wC(t.length),a=r(o);return new nt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;const hs={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(hs&&xe,"ChildrenNode.ts has not been loaded"),_a=_a||new Ht({".priority":hs},{".priority":xe}),_a}get(e){const n=Rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Zr(s,e.getCompare()):a=hs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ht(u,c)}addToIndexes(e,n){const s=Br(this.indexes_,(i,r)=>{const o=Rs(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===hs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zr(a,o.getCompare())}else return hs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=Br(this.indexes_,i=>{if(i===hs)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Ht(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ni||(ni=new j(new nt(cc),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ni}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ni:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ni:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{T(se(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(we(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kp(this.getPriority().val())+":"),this.forEachChild(xe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ir?-1:0}withIndex(e){if(e===Is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(xe),i=n.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Is?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CC extends j{constructor(){super(new nt(cc),j.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const ir=new CC;Object.defineProperties(ee,{MIN:{value:new ee(Ns,j.EMPTY_NODE)},MAX:{value:new ee(ts,ir)}});Gp.__EMPTY_NODE=j.EMPTY_NODE;We.__childrenNodeConstructor=j;mC(ir);_C(ir);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,Be(e))}if(!(t instanceof Array)&&EC){const n=[];let s=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Zr(n,pC,o=>o.name,cc);if(s){const o=Zr(n,xe.getCompare());return new j(r,Be(e),new Ht({".priority":o},{".priority":xe}))}else return new j(r,Be(e),Ht.Default)}else{let n=j.EMPTY_NODE;return rt(t,(s,i)=>{if(Xt(t,s)&&s.substring(0,1)!=="."){const r=Be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Be(e))}}gC(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends Uo{constructor(e){super(),this.indexPath_=e,T(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qs(e.name,n.name):r}makePost(e,n){const s=Be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,ir);return new ee(ts,e)}toString(){return Hp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends Uo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Be(e);return new ee(n,s)}toString(){return".value"}}const TC=new IC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){return{type:"value",snapshotNode:t}}function Os(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $i(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ui(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange($i(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(n,s)):o.trackChildChange(Ui(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{n.hasChild(i)||s.trackChildChange($i(i,r))}),n.isLeafNode()||n.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ui(i,r,o))}else s.trackChildChange(Os(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new uc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(xe,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Ui(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange($i(n,d));const w=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Os(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange($i(c.name,c.node)),r.trackChildChange(Os(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ns}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new dc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xC(t){return t.loadsAllData()?new uc(t.getIndex()):t.hasLimit()?new kC(t):new Wi(t)}function Nd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===TC?n="$value":t.index_===Is?n="$key":(T(t.index_ instanceof bC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Od(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Wp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=sr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=eo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Nd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Rs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=eo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Nd(e._queryParams),s=e._path.toString(),i=new No;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ni(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){return{value:null,children:new Map}}function Zp(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,to());const i=t.children.get(s);e=we(e),Zp(i,e,n)}}function al(t,e,n){t.value!==null?n(e,t.value):AC(t,(s,i)=>{const r=new _e(e.toString()+"/"+s);al(i,r,n)})}function AC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=10*1e3,NC=30*1e3,OC=5*60*1e3;class MC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PC(e);const s=Md+(NC-Md)*Math.random();mi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;rt(e,(i,r)=>{r>0&&Xt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*OC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function em(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=wt.ACK_USER_WRITE,this.source=em()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new no(le(),n,this.revert)}}else return T(se(this.path)===e,"operationForChild called for unrelated child."),new no(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Vi(this.source,le()):new Vi(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=wt.OVERWRITE}operationForChild(e){return te(this.path)?new ns(this.source,le(),this.snap.getImmediateChild(e)):new ns(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=wt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ns(this.source,le(),n.value):new Bi(this.source,le(),n)}else return T(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(SC(o.childName,o.snapshotNode))}),si(t,i,"child_removed",e,s,n),si(t,i,"child_added",e,s,n),si(t,i,"child_moved",r,s,n),si(t,i,"child_changed",e,s,n),si(t,i,"value",e,s,n),i}function si(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>$C(t,a,l)),o.forEach(a=>{const l=FC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function FC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $C(t,e,n){if(e.childName==null||n.childName==null)throw Vs("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e){return{eventCache:t,serverCache:e}}function gi(t,e,n,s){return Wo(new Pn(e,n,s),t.serverCache)}function tm(t,e,n,s){return Wo(t.eventCache,new Pn(e,n,s))}function so(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;const UC=()=>(ya||(ya=new nt(Iw)),ya);class Ee{constructor(e,n=UC()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return rt(e,(s,i)=>{n=n.set(new _e(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(we(e),n);return r!=null?{path:$e(new _e(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(we(e)):new Ee(null)}}set(e,n){if(te(e))return new Ee(n,this.children);{const s=se(e),r=(this.children.get(s)||new Ee(null)).set(we(e),n),o=this.children.insert(s,r);return new Ee(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(we(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(we(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new Ee(null)).setTree(we(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ee(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(we(e),$e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(we(e),$e(n,i),s):new Ee(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new Ee(null))}}function _i(t,e,n){if(te(e))return new Et(new Ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Je(i,e);return r=r.updateChild(o,n),new Et(t.writeTree_.set(i,r))}else{const i=new Ee(n),r=t.writeTree_.setTree(e,i);return new Et(r)}}}function Dd(t,e,n){let s=t;return rt(n,(i,r)=>{s=_i(s,$e(e,i),r)}),s}function Ld(t,e){if(te(e))return Et.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new Et(n)}}function ll(t,e){return os(t,e)!=null}function os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function Fd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Tn(t,e){if(te(e))return t;{const n=os(t,e);return n!=null?new Et(new Ee(n)):new Et(t.writeTree_.subtree(e))}}function cl(t){return t.writeTree_.isEmpty()}function Ms(t,e){return nm(le(),t.writeTree_,e)}function nm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nm($e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e){return om(e,t)}function WC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_i(t.visibleWrites,e,n)),t.lastWriteId=s}function VC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function BC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HC(a,s.path)?i=!1:vt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zC(t),!0;if(s.snap)t.visibleWrites=Ld(t.visibleWrites,s.path);else{const a=s.children;rt(a,l=>{t.visibleWrites=Ld(t.visibleWrites,$e(s.path,l))})}return!0}else return!1}function HC(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt($e(t.path,n),e))return!0;return!1}function zC(t){t.visibleWrites=sm(t.allWrites,jC,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jC(t){return t.visible}function sm(t,e,n){let s=Et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)vt(n,o)?(a=Je(n,o),s=_i(s,a,r.snap)):vt(o,n)&&(a=Je(o,n),s=_i(s,le(),r.snap.getChild(a)));else if(r.children){if(vt(n,o))a=Je(n,o),s=Dd(s,a,r.children);else if(vt(o,n))if(a=Je(o,n),te(a))s=Dd(s,le(),r.children);else{const l=Rs(r.children,se(a));if(l){const c=l.getChild(we(a));s=_i(s,le(),c)}}}else throw Vs("WriteRecord should have .snap or .children")}}return s}function im(t,e,n,s,i){if(!s&&!i){const r=os(t.visibleWrites,e);if(r!=null)return r;{const o=Tn(t.visibleWrites,e);if(cl(o))return n;if(n==null&&!ll(o,le()))return null;{const a=n||j.EMPTY_NODE;return Ms(o,a)}}}else{const r=Tn(t.visibleWrites,e);if(!i&&cl(r))return n;if(!i&&n==null&&!ll(r,le()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=sm(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Ms(a,l)}}}function qC(t,e,n){let s=j.EMPTY_NODE;const i=os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Tn(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=Ms(Tn(r,new _e(o)),a);s=s.updateImmediateChild(o,l)}),Fd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Tn(t.visibleWrites,e);return Fd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function GC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,n);if(ll(t.visibleWrites,r))return null;{const o=Tn(t.visibleWrites,r);return cl(o)?i.getChild(n):Ms(o,i.getChild(n))}}function KC(t,e,n,s){const i=$e(e,n),r=os(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Tn(t.visibleWrites,i);return Ms(o,s.getNode().getImmediateChild(n))}else return null}function YC(t,e){return os(t.visibleWrites,e)}function QC(t,e,n,s,i,r,o){let a;const l=Tn(t.visibleWrites,e),c=os(l,le());if(c!=null)a=c;else if(n!=null)a=Ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function JC(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function io(t,e,n,s){return im(t.writeTree,t.treePath,e,n,s)}function pc(t,e){return qC(t.writeTree,t.treePath,e)}function $d(t,e,n,s){return GC(t.writeTree,t.treePath,e,n,s)}function ro(t,e){return YC(t.writeTree,$e(t.treePath,e))}function XC(t,e,n,s,i,r){return QC(t.writeTree,t.treePath,e,n,s,i,r)}function mc(t,e,n){return KC(t.writeTree,t.treePath,e,n)}function rm(t,e){return om($e(t.treePath,e),t.writeTree)}function om(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ui(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$i(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Os(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ui(s,e.snapshotNode,i.oldSnap));else throw Vs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const am=new eE;class gc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),r=XC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return{filter:t}}function nE(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sE(t,e,n,s,i){const r=new ZC;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=ul(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=oo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=rE(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=dl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=lE(t,e,c.path,s,i,r):o=oE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===wt.LISTEN_COMPLETE)o=aE(t,e,n.path,s,r);else throw Vs("Unknown operation type: "+n.type);const l=r.getChanges();return iE(e,o,l),{viewCache:o,changes:l}}function iE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=so(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xp(so(e)))}}function lm(t,e,n,s,i,r){const o=e.eventCache;if(ro(s,n)!=null)return e;{let a,l;if(te(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ss(e),u=c instanceof j?c:j.EMPTY_NODE,d=pc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=io(s,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){T(An(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=$d(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=we(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$d(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=mc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return gi(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function oo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const _=we(n),x=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),m,x,_,am,null)}const d=tm(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new gc(i,d,r);return lm(t,d,n,i,h,a)}function ul(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gc(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gi(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=we(n),m=a.getNode().getImmediateChild(d);let _;if(te(h))_=s;else{const w=u.getCompleteChild(d);w!=null?Bp(h)===".priority"&&w.getChild(zp(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=j.EMPTY_NODE}if(m.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=gi(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ud(t,e){return t.eventCache.isCompleteForChild(e)}function rE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=$e(n,l);Ud(e,se(u))&&(a=ul(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=$e(n,l);Ud(e,se(u))||(a=ul(t,a,u,c,i,r,o))}),a}function Wd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function dl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new Ee(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Wd(t,m,h);l=oo(t,l,new _e(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),w=Wd(t,_,h);l=oo(t,l,new _e(d),w,i,r,o,a)}}),l}function oE(t,e,n,s,i,r,o){if(ro(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new Ee(null);return l.getNode().forEachChild(Is,(u,d)=>{c=c.set(new _e(u),d)}),dl(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ee(null);return s.foreach((u,d)=>{const h=$e(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),dl(t,e,n,c,i,r,a,o)}}function aE(t,e,n,s,i){const r=e.serverCache,o=tm(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return lm(t,o,n,s,am,i)}function lE(t,e,n,s,i,r){let o;if(ro(s,n)!=null)return e;{const a=new gc(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=io(s,ss(e));else{const d=e.serverCache.getNode();T(d instanceof j,"serverChildren would be complete if leaf node"),u=pc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let d=mc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,we(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,we(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=io(s,ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ro(s,le())!=null,gi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new uc(s.getIndex()),r=xC(s);this.processor_=tE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Pn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wo(d,u),this.eventGenerator_=new DC(this.query_)}get query(){return this.query_}}function uE(t){return t.viewCache_.serverCache.getNode()}function dE(t){return so(t.viewCache_)}function hE(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Vd(t){return t.eventRegistrations_.length===0}function fE(t,e){t.eventRegistrations_.push(e)}function Bd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Hd(t,e,n,s){e.type===wt.MERGE&&e.source.queryId!==null&&(T(ss(t.viewCache_),"We should always have a full cache before handling merges"),T(so(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=sE(t.processor_,i,e,n,s);return nE(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,cm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function pE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(r,o)=>{s.push(Os(r,o))}),n.isFullyInitialized()&&s.push(Xp(n.getNode())),cm(t,s,n.getNode(),e)}function cm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return LC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class um{constructor(){this.views=new Map}}function mE(t){T(!ao,"__referenceConstructor has already been defined"),ao=t}function gE(){return T(ao,"Reference.ts has not been loaded"),ao}function _E(t){return t.views.size===0}function _c(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Hd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Hd(o,e,n,s));return r}}function dm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=io(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=pc(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=Wo(new Pn(a,l,!1),new Pn(s,i,!1));return new cE(e,c)}return o}function yE(t,e,n,s,i,r){const o=dm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fE(o,n),pE(o,n)}function vE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Nn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Bd(c,n,s)),Vd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Bd(l,n,s)),Vd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Nn(t)&&r.push(new(gE())(e._repo,e._path)),{removed:r,events:o}}function hm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sn(t,e){let n=null;for(const s of t.views.values())n=n||hE(s,e);return n}function fm(t,e){if(e._queryParams.loadsAllData())return Bo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function pm(t,e){return fm(t,e)!=null}function Nn(t){return Bo(t)!=null}function Bo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;function wE(t){T(!lo,"__referenceConstructor has already been defined"),lo=t}function CE(){return T(lo,"Reference.ts has not been loaded"),lo}let EE=1;class zd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=JC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mm(t,e,n,s,i){return WC(t.pendingWriteTree_,e,n,s,i),i?or(t,new ns(em(),e,n)):[]}function jn(t,e,n=!1){const s=VC(t.pendingWriteTree_,e);if(BC(t.pendingWriteTree_,e)){let r=new Ee(null);return s.snap!=null?r=r.set(le(),!0):rt(s.children,o=>{r=r.set(new _e(o),!0)}),or(t,new no(s.path,r,n))}else return[]}function rr(t,e,n){return or(t,new ns(hc(),e,n))}function bE(t,e,n){const s=Ee.fromObject(n);return or(t,new Bi(hc(),e,s))}function IE(t,e){return or(t,new Vi(hc(),e))}function TE(t,e,n){const s=vc(t,n);if(s){const i=wc(s),r=i.path,o=i.queryId,a=Je(r,e),l=new Vi(fc(o),a);return Cc(t,r,l)}else return[]}function gm(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pm(o,e))){const l=vE(o,e,n,s);_E(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Nn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=RE(h);for(let _=0;_<m.length;++_){const w=m[_],x=w.query,A=wm(t,w);t.listenProvider_.startListening(yi(x),Hi(t,x),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(yi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Ho(h));t.listenProvider_.stopListening(yi(h),m)}))}AE(t,c)}return a}function _m(t,e,n,s){const i=vc(t,s);if(i!=null){const r=wc(i),o=r.path,a=r.queryId,l=Je(o,e),c=new ns(fc(a),l,n);return Cc(t,o,c)}else return[]}function SE(t,e,n,s){const i=vc(t,s);if(i){const r=wc(i),o=r.path,a=r.queryId,l=Je(o,e),c=Ee.fromObject(n),u=new Bi(fc(a),l,c);return Cc(t,o,u)}else return[]}function kE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Je(h,i);r=r||Sn(m,_),o=o||Nn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Nn(a),r=r||Sn(a,le())):(a=new um,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const w=Sn(_,le());w&&(r=r.updateImmediateChild(m,w))}));const c=pm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ho(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=PE();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Vo(t.pendingWriteTree_,i);let d=yE(a,e,n,u,r,l);if(!c&&!o&&!s){const h=fm(a,e);d=d.concat(NE(t,e,h))}return d}function yc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=Sn(a,l);if(c)return c});return im(i,e,r,n,!0)}function xE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Je(c,n);s=s||Sn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Sn(i,le()):(i=new um,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Pn(s,!0,!1):null,a=Vo(t.pendingWriteTree_,e._path),l=dm(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return dE(l)}function or(t,e){return ym(e,t.syncPointTree_,null,Vo(t.pendingWriteTree_,le()))}function ym(t,e,n,s){if(te(t.path))return vm(t,e,n,s);{const i=e.get(le());n==null&&i!=null&&(n=Sn(i,le()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=rm(s,o);r=r.concat(ym(a,l,c,u))}return i&&(r=r.concat(_c(i,t,s,n))),r}}function vm(t,e,n,s){const i=e.get(le());n==null&&i!=null&&(n=Sn(i,le()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=rm(s,o),u=t.operationForChild(o);u&&(r=r.concat(vm(u,a,l,c)))}),i&&(r=r.concat(_c(i,t,s,n))),r}function wm(t,e){const n=e.query,s=Hi(t,n);return{hashFn:()=>(uE(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?TE(t,n._path,s):IE(t,n._path);{const r=kw(i,n);return gm(t,n,null,r)}}}}function Hi(t,e){const n=Ho(e);return t.queryToTagMap.get(n)}function Ho(t){return t._path.toString()+"$"+t._queryIdentifier}function vc(t,e){return t.tagToQueryMap.get(e)}function wc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Cc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Vo(t.pendingWriteTree_,e);return _c(s,n,i,null)}function RE(t){return t.fold((e,n,s)=>{if(n&&Nn(n))return[Bo(n)];{let i=[];return n&&(i=hm(n)),rt(s,(r,o)=>{i=i.concat(o)}),i}})}function yi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CE())(t._repo,t._path):t}function AE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ho(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function PE(){return EE++}function NE(t,e,n){const s=e._path,i=Hi(t,e),r=wm(t,n),o=t.listenProvider_.startListening(yi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Nn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&Nn(u))return[Bo(u).query];{let h=[];return u&&(h=h.concat(hm(u).map(m=>m.query))),rt(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(yi(u),Hi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ec(n)}node(){return this.node_}}class bc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new bc(this.syncTree_,n)}node(){return yc(this.syncTree_,this.path_)}}const OE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ME(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ME=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},DE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},LE=function(t,e,n,s){return Ic(e,new bc(n,t),s)},Cm=function(t,e,n){return Ic(t,new Ec(e),n)};function Ic(t,e,n){const s=t.getPriority().val(),i=jd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new We(a,Be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new We(i))),o.forEachChild(xe,(a,l)=>{const c=Ic(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sc(t,e){let n=e instanceof _e?e:new _e(e),s=t,i=se(n);for(;i!==null;){const r=Rs(s.node.children,i)||{children:{},childCount:0};s=new Tc(i,s,r),n=we(n),i=se(n)}return s}function Ks(t){return t.node.value}function Em(t,e){t.node.value=e,hl(t)}function bm(t){return t.node.childCount>0}function FE(t){return Ks(t)===void 0&&!bm(t)}function zo(t,e){rt(t.node.children,(n,s)=>{e(new Tc(n,t,s))})}function Im(t,e,n,s){n&&!s&&e(t),zo(t,i=>{Im(i,e,!0,s)}),n&&s&&e(t)}function $E(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ar(t){return new _e(t.parent===null?t.name:ar(t.parent)+"/"+t.name)}function hl(t){t.parent!==null&&UE(t.parent,t.name,t)}function UE(t,e,n){const s=FE(n),i=Xt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,hl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,hl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=/[\[\].#$\/\u0000-\u001F\u007F]/,VE=/[\[\].#$\u0000-\u001F\u007F]/,va=10*1024*1024,Tm=function(t){return typeof t=="string"&&t.length!==0&&!WE.test(t)},Sm=function(t){return typeof t=="string"&&t.length!==0&&!VE.test(t)},BE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sm(t)},HE=function(t,e,n,s){s&&e===void 0||kc(Hl(t,"value"),e,n)},kc=function(t,e,n){const s=n instanceof _e?new oC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(s));if(typeof e=="function")throw new Error(t+"contains a function "+Un(s)+" with contents = "+e.toString());if(Cp(e))throw new Error(t+"contains "+e.toString()+" "+Un(s));if(typeof e=="string"&&e.length>va/3&&Oo(e)>va)throw new Error(t+"contains a string greater than "+va+" utf8 bytes "+Un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aC(s,o),kc(t,a,s),lC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Un(s)+" in addition to actual children.")}},km=function(t,e,n,s){if(!(s&&n===void 0)&&!Sm(n))throw new Error(Hl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),km(t,e,n,s)},xm=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BE(n))throw new Error(Hl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!jp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ft(t,e,n){Rm(t,n),GE(t,s=>vt(s,e)||vt(e,s))}function GE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(KE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Jn&&qe("event: "+n.toString()),Gs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="repo_interrupt",QE=25;class JE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=to(),this.transactionQueueTree_=new Tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XE(t,e,n){if(t.stats_=oc(t.repoInfo_),t.forceRestClient_||Pw())t.server_=new eo(t.repoInfo_,(s,i,r,o)=>{qd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new jt(t.repoInfo_,e,(s,i,r,o)=>{qd(t,s,i,r,o)},s=>{Gd(t,s)},s=>{eb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Lw(t.repoInfo_,()=>new MC(t.stats_,t.server_)),t.infoData_=new RC,t.infoSyncTree_=new zd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=rr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rc(t,"connected",!1),t.serverSyncTree_=new zd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ft(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ZE(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xc(t){return OE({timestamp:ZE(t)})}function qd(t,e,n,s,i){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Br(n,c=>Be(c));o=SE(t.serverSyncTree_,r,l,i)}else{const l=Be(n);o=_m(t.serverSyncTree_,r,l,i)}else if(s){const l=Br(n,c=>Be(c));o=bE(t.serverSyncTree_,r,l)}else{const l=Be(n);o=rr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=qo(t,r)),Ft(t.eventQueue_,a,o)}function Gd(t,e){Rc(t,"connected",e),e===!1&&sb(t)}function eb(t,e){rt(e,(n,s)=>{Rc(t,n,s)})}function Rc(t,e,n){const s=new _e("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(s,i);const r=rr(t.infoSyncTree_,s,i);Ft(t.eventQueue_,s,r)}function Am(t){return t.nextWriteId_++}function tb(t,e,n){const s=xE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Be(i).withIndex(e._queryParams.getIndex());kE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=rr(t.serverSyncTree_,e._path,r);else{const a=Hi(t.serverSyncTree_,e);o=_m(t.serverSyncTree_,e._path,r,a)}return Ft(t.eventQueue_,e._path,o),gm(t.serverSyncTree_,e,n,null,!0),r},i=>(jo(t,"get for query "+Fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function nb(t,e,n,s,i){jo(t,"set",{path:e.toString(),value:n,priority:s});const r=xc(t),o=Be(n,s),a=yc(t.serverSyncTree_,e),l=Cm(o,a,r),c=Am(t),u=mm(t.serverSyncTree_,e,l,c,!0);Rm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||st("set at "+e+" failed: "+h);const w=jn(t.serverSyncTree_,c,!_);Ft(t.eventQueue_,e,w),rb(t,i,h,m)});const d=Dm(t,e);qo(t,d),Ft(t.eventQueue_,d,[])}function sb(t){jo(t,"onDisconnectEvents");const e=xc(t),n=to();al(t.onDisconnect_,le(),(i,r)=>{const o=LE(i,r,t.serverSyncTree_,e);Zp(n,i,o)});let s=[];al(n,le(),(i,r)=>{s=s.concat(rr(t.serverSyncTree_,i,r));const o=Dm(t,i);qo(t,o)}),t.onDisconnect_=to(),Ft(t.eventQueue_,le(),s)}function ib(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YE)}function jo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function rb(t,e,n,s){e&&Gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Pm(t,e,n){return yc(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Ac(t,e=t.transactionQueueTree_){if(e||Go(t,e),Ks(e)){const n=Om(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ob(t,ar(e),n)}else bm(e)&&zo(e,n=>{Ac(t,n)})}function ob(t,e,n){const s=n.map(c=>c.currentWriteId),i=Pm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Go(t,Sc(t.transactionQueueTree_,e)),Ac(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Gs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}qo(t,e)}},o)}function qo(t,e){const n=Nm(t,e),s=ar(n),i=Om(t,n);return ab(t,i,s),s}function ab(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QE)u=!0,d="maxretry",i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Pm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){kc("transaction failed: Data returned ",m,l.path);let _=Be(m);typeof m=="object"&&m!=null&&Xt(m,".priority")||(_=_.updatePriority(h.getPriority()));const x=l.currentWriteId,A=xc(t),P=Cm(_,h,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=Am(t),o.splice(o.indexOf(x),1),i=i.concat(mm(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(jn(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Go(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Gs(s[a]);Ac(t,t.transactionQueueTree_)}function Nm(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&Ks(s)===void 0;)s=Sc(s,n),e=we(e),n=se(e);return s}function Om(t,e){const n=[];return Mm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Mm(t,e,n){const s=Ks(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zo(e,i=>{Mm(t,i,n)})}function Go(t,e){const n=Ks(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Em(e,n.length>0?n:void 0)}zo(e,s=>{Go(t,s)})}function Dm(t,e){const n=ar(Nm(t,e)),s=Sc(t.transactionQueueTree_,e);return $E(s,i=>{wa(t,i)}),wa(t,s),Im(s,i=>{wa(t,i)}),n}function wa(t,e){const n=Ks(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Em(e,void 0):n.length=r+1,Ft(t.eventQueue_,ar(e),i);for(let o=0;o<s.length;o++)Gs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kd=function(t,e){const n=ub(t),s=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ew();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Op(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new _e(n.pathString)}},ub=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=lb(t.substring(u,d)));const h=cb(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class hb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:Bp(this._path)}get ref(){return new Zt(this._repo,this._path)}get _queryIdentifier(){const e=Od(this._queryParams),n=ic(e);return n==="{}"?"default":n}get _queryObject(){return Od(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Pc))return!1;const n=this._repo===e._repo,s=jp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rC(this._path)}}class Zt extends Pc{constructor(e,n){super(e,n,new dc,!1)}get parent(){const e=zp(this._path);return e===null?null:new Zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=fl(this.ref,e);return new zi(this._node.getChild(n),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zi(i,fl(this.ref,s),xe)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nc(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?fl(t._root,e):t._root}function fl(t,e){return t=ot(t),se(t._path)===null?zE("child","path",e,!1):km("child","path",e,!1),new Zt(t._repo,$e(t._path,e))}function pb(t){return xm("remove",t._path),Lm(t,null)}function Lm(t,e){t=ot(t),xm("set",t._path),HE("set",e,t._path,!1);const n=new No;return nb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mb(t){t=ot(t);const e=new fb(()=>{}),n=new Oc(e);return tb(t._repo,t,n).then(s=>new zi(s,new Zt(t._repo,t._path),t._queryParams.getIndex()))}class Oc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new db("value",this,new zi(e.snapshotNode,new Zt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hb(this,e,n):null}matches(e){return e instanceof Oc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}mE(Zt);wE(Zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="FIREBASE_DATABASE_EMULATOR_HOST",pl={};let _b=!1;function yb(t,e,n,s){t.repoInfo_=new Op(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function vb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kd(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[gb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Kd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new bs(bs.OWNER):new Ow(t.name,t.options,e);jE("Invalid Firebase Database URL",o),te(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Cb(a,t,u,new Nw(t.name,n));return new Eb(d,t)}function wb(t,e){const n=pl[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ib(t),delete n[t.key]}function Cb(t,e,n,s){let i=pl[e.name];i||(i={},pl[e.name]=i);let r=i[t.toURLString()];return r&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new JE(t,_b,n,s),i[t.toURLString()]=r,r}class Eb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zt(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function bb(t=Df(),e){const n=ql(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=V0("database");s&&Ib(n,...s)}return n}function Ib(t,e,n,s={}){t=ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new bs(bs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:B0(s.mockUserToken,t.app.options.projectId);r=new bs(o)}yb(i,e,n,r)}/**
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
 */function Tb(t){_w(Hs),As(new Xn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(gd,_d,t),In(gd,_d,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Tb();const Mc=bb($f),Fm=[],ml=[];function Sb(t){return t instanceof Set?Array.from(t):t}const kb=async t=>(await mb(Nc(Mc,t))).val(),xb=async(t,e)=>{ml.push({path:t,data:e})},Rb=async t=>{if(!(!tr.value||!sc.value))return await pb(Nc(Mc,t))};setInterval(async()=>{const t=[];for(const{path:e,data:n}of ml)t.push(Lm(Nc(Mc,e),n));await Promise.all(t),ml.length=0},1e4);const Yd=async(t,e)=>{Cn(t,n=>{tr.value&&sc.value&&xb(`users/${$o.value.uid}/game-data/tileswap-naenae/${e}/`,Sb(n))},{deep:!0}),Fm.push({observable:t,path:e})};class Pt{constructor(e){if(typeof e!="number")throw new Error("Order must be a number");if(e<=0)throw new Error("Order must be greater than 0");if(e%1!==0)throw new Error("Order must be an integer");const n=Pt.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error("Order must be a prime power");this.order=e,this.p=n[0],this.q=n.length}el(e){if(e instanceof zt){if(this.q!==1)throw new Error("Cannot create element in non-prime field");if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(e instanceof mt){if(this.q===1)throw new Error("Cannot create polynomial in prime field");if(e.field.order!==this.order)throw new Error("Cannot create polynomial in different field");return e}if(typeof e=="number")return this.q===1?new zt(Pt.mod(e,this.order),this):mt.fromInteger(e,this);if(e instanceof Array){if(this.q===1)throw new Error("Cannot create polynomial in prime field");return new mt(e,this)}throw new Error("Cannot create element from non-number")}matrix(e){return Ds.from2DArray(e,this)}identity(e){return Ds.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...Pt.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new Pt(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}var gn,ps;const fo=class fo{constructor(e,n){dr(this,gn);if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof Pt))throw new Error("Field must be an instance of FiniteField");this.value=Pt.mod(e,n.order),this.field=n}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(e){return kt(this,gn,ps).call(this,e,(n,s)=>n.value+s.value)}subtract(e){return kt(this,gn,ps).call(this,e,(n,s)=>n.value-s.value)}multiply(e){return kt(this,gn,ps).call(this,e,(n,s)=>n.value*s.value)}divide(e){return kt(this,gn,ps).call(this,e,(n,s)=>n.multiply(s.inverse()).value)}pow(e){if(e===0)return this.field.el(1);if(e===1)return this.copy();if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let e=1;for(;e<this.field.order;){if(e*e%this.field.order===this.value)return this.field.el(e);e++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(e){if(e instanceof fo){if(e.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===e.value}return this.value===e}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}};gn=new WeakSet,ps=function(e,n){if(e instanceof fo){if(e.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(n(this,e))}return kt(this,gn,ps).call(this,this.field.el(e),n)};let zt=fo;class mt{constructor(e,n){this.field=n,this.primeField=Pt.fromOrder(n.p);const s=e.length;if(s>n.q)throw new Error(`${e.length} coefficients given, but field has order p ^ q where q = ${n.q}`);if(s<n.q)for(let i=0;i<n.q-s;i++)e.splice(0,0,this.primeField.el(0));this.coefficients=e.map(i=>this.primeField.el(i))}add(e){if(e instanceof mt){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++)n.push(this.coefficients[s].add(e.coefficients[s]));return new mt(n,this.field)}if(e instanceof Array)return this.add(new mt(e,this.field));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof mt){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=new Array(this.coefficients.length+e.coefficients.length-1).fill().map(s=>this.primeField.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return new mt(n,this.field)}if(e instanceof zt)return this.multiply(new mt([e],e.field));if(typeof e=="number")return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new mt(i,n)}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var qn,Gn,li;const oe=class oe{constructor(e,n){dr(this,Gn);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof zt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new oe(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof zt)return e=this.field.el(e),oe.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof oe){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return oe.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof zt||typeof e=="number")return e=this.field.el(e),new oe(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof oe){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new oe(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return oe.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(Qs(oe,qn).has(e))return Qs(oe,qn).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=kt(this,Gn,li).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return Qs(oe,qn).set(e,s),s}const n=this.PLUDeterminant();return Qs(oe,qn).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=oe.identity(this.width,this.field),s=oe.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return kt(r=s,Gn,li).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return oe.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=kt(this,Gn,li).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new oe(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return oe.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return oe.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=oe.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:kt(this,Gn,li).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:oe.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof oe?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return oe.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new oe(s,n)}static fromValue(e,n,s,i){if(e instanceof zt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new oe(r,i)}static zeros(e,n,s){return oe.fromValue(0,e,n,s)}static ones(e,n,s){return oe.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return oe.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return oe.from2DArray(s,n)}static from2DArray(e,n){return new oe(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};qn=new WeakMap,Gn=new WeakSet,li=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new oe(s,this.field)},dr(oe,qn,new Map);let Ds=oe;const co=De(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>co.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");co.value=t}});const _n=Re(()=>co.value),Qd=t=>{co.value=t},Ca=new Map,Ea=new Map,$m=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},ba=(t,e)=>{for(let n=0;n<e;n++)t=$m(t);return t};class Ab{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const Um=t=>{const e=[t,$m(t),ba(t,2),ba(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=Pb(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new Ab(ba(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function Pb(t){const e=Pt.fromOrder(Q.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Q.value])),r=`${s}x${n},${qt.getExcludeFromMatrix(t)},${ji.value},${Q.value}}`;let o=[],a=0;const l=Ob(s,n,t);let c;if(Ea.has(r)?c=Ea.get(r):(c=l.determinant(),Ea.set(r,c)),c.equals(0)){const d=Ds.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=Ds.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let w=0;w<d.width-1;w++)if(d.matrix[m][w].equals(1)){o[w]=_.value;break}}}}else{let u;Ca.has(r)?u=Ca.get(r):(u=l.inverse(),Ca.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const Nb=(t,e,n)=>{for(const s of ji.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Q.value-1)}},Ob=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));Nb(o,a,l),s.push(l)}return Pt.fromOrder(Q.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()},ji=De([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>ji.value,set:t=>{ji.value=t}});const Q=De(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Q.value,set:t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t}});const Dc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t},vi=Re(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${255*(e/(Q.value-1))},${255*(e/(Q.value-1))},${255*(e/(Q.value-1))})`)),Ia=Re(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${143*(e/(Q.value-1))+36},${143*(e/(Q.value-1))+36},${143*(e/(Q.value-1))+36})`)),Ta=Re(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${190*(e/(Q.value-1))+51},${190*(e/(Q.value-1))+51},${190*(e/(Q.value-1))+51})`)),dn=class dn{static get FILTERED_LAYOUTS(){const e=Me();return this.LAYOUTS.filter(n=>n.unlockCategory<=e.unlockedCategoriesFP)}constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(r=>Q.value-1));for(const r of this.exclude)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of ji.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=dn.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=dn.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Q.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Q.value-1:this.matrix[e][n]===Q.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new dn({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(Q.value-1);for(let l=0;l<e;l++){let c,u;do c=Math.floor(Math.random()*n.height),u=Math.floor(Math.random()*n.width);while(!n.isTile(c,u));n.swapTiles(c,u,-1)}const{solutions:s,shortest:i,zerows:r}=Um(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Q.value*(e/3)+2);return n.matrix.every(l=>l.every(c=>c===Q.value||c===-1))?this.generatePosition(e):o.moves<a?this.generatePosition(e):n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new dn({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Q.value+Q.value)%Q.value}};ur(dn,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new dn({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let qt=dn;const po=class po{constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}static get FILTERED_PUZZLES(){const e=Me();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}};ur(po,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((w,x)=>{w===2?(s[_][x]=-1,i[_][x]=-1):w===1&&(s[_][x]=(a??2)-1)}));const l=s[0].length,c=s.length,u=qt.getExcludeFromMatrix(s),d=new qt({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new qt({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new po({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let uo=po;const Jd=t=>`${t}`,ho={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:Jd},tilesSwapped:{name:"Tiles Swapped",display:Jd},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${uo.PUZZLES.length}`}},Mb=Object.fromEntries(Object.keys(ho).map(t=>[t,ho[t].initialValue??0])),wi=class wi{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patternRange:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,modulo:l,name:c}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,this.rangeStart=i[0],this.rangeEnd=i[1],this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.generateLayouts(),this.nMoves=0,this.modulo=l??2,this.name=c}generateLayouts(){const e=qt.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd),n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=wi.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=wi.THRESHOLD?i*2:i);n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=Me();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};ur(wi,"THRESHOLD",60);let gl=wi;const Me=N1("store",()=>{const t=De({}),e=De({}),n=De({}),s=De(5),i=De(39),r=De(1),o=De([new gl({timeLimit:60,moveLimit:-1,totalClicks:90,patternRange:[1,1],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,name:"Think Fast"})]),a=De({...Mb});setInterval(()=>{a.value.timePlayed++},1e3);function l(h){t.value=h}function c(h){e.value=h}function u(h){n.value=h}function d(h){a.value.puzzlesCompleted.includes(h)||a.value.puzzlesCompleted.push(h)}return Yd(s,"difficulty"),Yd(a,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,setLayout:l,setPuzzle:c,setChallenge:u,solvePuzzle:d,stats:a,challenges:o,unlockedCategoriesFP:i,unlockedCategoriesPZ:r}}),Ue=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Db={components:{RouterView:Cf},setup(){Me()}};function Lb(t,e,n,s,i,r){const o=m_("router-view");return $(),ft(o,null,{default:Ze(({Component:a})=>[U(Rn,{name:"fade",mode:"out-in"},{default:Ze(()=>[($(),ft(g_(a)))]),_:2},1024)]),_:1})}const Fb=Ue(Db,[["render",Lb]]);const $b={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},Ub=["src"];function Wb(t,e,n,s,i,r){return $(),G("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[L("span",null,ke(n.name),1),L("img",{src:n.image},null,8,Ub)])}const Sa=Ue($b,[["render",Wb],["__scopeId","data-v-253ecde8"]]),Vb="/tileswap-naenae/images/freeplay-transparent.png",Bb="/tileswap-naenae/images/puzzles-transparent.png",Hb="/tileswap-naenae/images/challenges-transparent.png";const Lc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},Xd=()=>{Po(t=>({23269356:t.backgroundColor,"46136db8":t.color}))},Zd=Lc.setup;Lc.setup=Zd?(t,e)=>(Xd(),Zd(t,e)):Xd;function zb(t,e,n,s,i,r){return $(),G("button",null,ke(n.text),1)}const Xe=Ue(Lc,[["render",zb],["__scopeId","data-v-e07d88a2"]]),jb={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},is=Object.assign(jb,{__name:"LinkButton",setup(t){return(e,n)=>($(),ft(Xe,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const qb={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},Gb={class:"modal"};function Kb(t,e,n,s,i,r){return $(),G("div",null,[U(Rn,{name:"fade"},{default:Ze(()=>[Dr(L("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Ba,n.modelValue]])]),_:1}),U(Rn,{name:"zoom"},{default:Ze(()=>[Dr(L("div",Gb,[__(t.$slots,"default",{},void 0,!0)],512),[[Ba,n.modelValue]])]),_:3})])}const rs=Ue(qb,[["render",Kb],["__scopeId","data-v-d736b0ef"]]);const Yb={computed:{list(){const{stats:t}=Me();return Object.keys(ho).map(e=>{const n=ho[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await Rb(`users/${$o.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},Qb=Object.assign(Yb,{__name:"Stats",setup(t){return(e,n)=>($(),G(Se,null,[L("ul",null,[($(!0),G(Se,null,Kt(e.list,(s,i)=>($(),G("li",{key:i},ke(s),1))),128))]),Ie(tr)?($(),ft(Xe,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):Sr("",!0)],64))}}),Jb=Ue(Qb,[["__scopeId","data-v-b4a43d41"]]),Fc=()=>{let t=De(window.innerWidth),e=De(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Si(()=>window.addEventListener("resize",n)),Si(()=>window.addEventListener("resize",s)),ki(()=>window.removeEventListener("resize",n)),ki(()=>window.removeEventListener("resize",s));const i=Re(()=>t.value),r=Re(()=>e.value);return{width:i,height:r}};const Wm=t=>(Us("data-v-5c6c6541"),t=t(),Ws(),t),Xb={class:"container"},Zb=Wm(()=>L("h1",{class:"main-title"},[Ro("Tile"),L("span",null,"Swap")],-1)),eI=Wm(()=>L("h1",null,"Stats",-1)),tI={data(){const{width:t}=Fc();return{windowWidth:t,user:$o,isSignedIn:tr,showStats:!1}},methods:{signOut:nl,signInForm(){gw(prompt("Email"),prompt("Password"))},openStats(){this.showStats=!0}}},nI=Object.assign(tI,{__name:"HomeView",setup(t){return(e,n)=>($(),G("div",Xb,[Zb,L("main",null,[U(Sa,{name:"Freeplay",image:Ie(Vb),path:"/freeplaySelection"},null,8,["image"]),U(Sa,{name:"Puzzles",image:Ie(Bb),path:"/puzzleSelection"},null,8,["image"]),U(Sa,{name:"Challenges",image:Ie(Hb),path:"/challengeSelection"},null,8,["image"])]),L("div",{class:ut({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[U(Xe,{text:"stats",onClick:e.openStats},null,8,["onClick"]),U(is,{text:"tutorial",to:"/tutorial"})],2),L("div",{class:ut({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[Ie(tr)?($(),G("p",{key:0,onClick:n[0]||(n[0]=(...s)=>Ie(nl)&&Ie(nl)(...s))}," You are logged in as "+ke(Ie($o).displayName),1)):($(),G("p",{key:1,onClick:n[1]||(n[1]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),U(rs,{modelValue:e.showStats,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showStats=s)},{default:Ze(()=>[eI,U(Jb),U(Xe,{black:"",text:"close",onClick:n[2]||(n[2]=s=>e.showStats=!1)})]),_:1},8,["modelValue"])]))}}),sI=Ue(nI,[["__scopeId","data-v-5c6c6541"]]);const iI=["data-level"],rI={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){Me().setLayout(this.layout),this.$router.push("/freeplayGame")}}},oI=Object.assign(rI,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>($(),G("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[($(!0),G(Se,null,Kt(e.includedTiles,s=>($(),G("div",{key:"t"+s,class:"tile",style:Lt({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],8,iI))}}),aI=Ue(oI,[["__scopeId","data-v-282cd56e"]]);const lI=t=>(Us("data-v-11b86a1d"),t=t(),Ws(),t),cI=lI(()=>L("h1",{class:"title"},"Select a layout",-1)),uI={class:"layouts"},dI={data(){return{layouts:qt.FILTERED_LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},hI=Object.assign(dI,{__name:"FreeplaySelection",setup(t){return(e,n)=>($(),G("main",null,[cI,U(is,{class:"top right",text:"back",to:"/"}),L("div",uI,[($(!0),G(Se,null,Kt(e.layouts,(s,i)=>($(),ft(aI,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),fI=Ue(hI,[["__scopeId","data-v-11b86a1d"]]);const pI={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return Me().stats.puzzlesCompleted.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){const t=Me();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Dc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},mI=Object.assign(pI,{__name:"PuzzleSelectionButton",setup(t){return Po(e=>({ac50d404:e.solved?"var(--success-color)":"var(--hl-color)"})),(e,n)=>($(),G("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[($(!0),G(Se,null,Kt(e.includedTiles,s=>($(),G("div",{key:"t"+s,class:"tile",style:Lt({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))}}),gI=Ue(mI,[["__scopeId","data-v-53681e0c"]]);const _I=t=>(Us("data-v-4dbb0fff"),t=t(),Ws(),t),yI=_I(()=>L("h1",{class:"title"},"Select a puzzle",-1)),vI={class:"layouts"},wI={data(){return{puzzles:uo.FILTERED_PUZZLES}}},CI=Object.assign(wI,{__name:"PuzzleSelection",setup(t){return(e,n)=>($(),G("main",null,[yI,U(is,{class:"top right",text:"back",to:"/"}),L("div",vI,[($(!0),G(Se,null,Kt(e.puzzles,(s,i)=>($(),ft(gI,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),EI=Ue(CI,[["__scopeId","data-v-4dbb0fff"]]);const $c={props:["challenge"],computed:{formattedChall(){const t=Math.floor(this.challenge.timeLimit/60).toString(),e=(this.challenge.timeLimit%60).toString(),n=this.challenge.moveLimit.toString(),s=this.challenge.nPatterns.toString();return this.challenge.name===""?t+":"+e+"<br>"+(n>0?n+" moves<br>":"no move limit<br>")+s+" layouts":this.challenge.name}}},eh=()=>{Po(t=>({"013269a4":t.color}))},th=$c.setup;$c.setup=th?(t,e)=>(eh(),th(t,e)):eh;const bI=["innerHTML"];function II(t,e,n,s,i,r){return $(),G("div",{innerHTML:r.formattedChall},null,8,bI)}const TI=Ue($c,[["render",II],["__scopeId","data-v-6702b2d0"]]),SI=L("h1",{class:"title"},"Select a challenge",-1),kI={data(){return{challenges:Me().challenges}},methods:{selectChallenge(t){const e=Me();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Dc(t.modulo),this.$router.push("/challengeGame")}}},xI=Object.assign(kI,{__name:"ChallengeSelection",setup(t){return(e,n)=>($(),G("div",null,[SI,U(is,{class:"top right",text:"back",to:"/"}),($(!0),G(Se,null,Kt(e.challenges,(s,i)=>($(),ft(TI,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}}),RI={props:["outline","highlight"]},AI={width:"100%",height:"100%",viewBox:"0 0 60.000008 60.000004",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},PI={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function NI(t,e,n,s,i,r){return $(),G("div",null,[($(),G("svg",AI,[L("g",PI,[L("path",{id:"path2326",style:Lt([{fill:n.highlight},{"fill-opacity":"1",stroke:"none","stroke-width":"0.244206px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"}]),d:"M 22.506418,5.7476747 C 19.729543,5.7881441 12.471032,11.706991 2.9756103,18.099409 l -2.67274554,9.341045 c 0.089655,-0.152676 -0.79754152,8.684464 1.22735394,7.748319 L 2.986415,55.405134 c 1.1890438,0 2.8115591,1.494069 3.9982823,1.491619 0.6651477,-0.0012 0.9771618,-0.264903 1.1322075,0.320074 C 8.0023041,57.3985 7.9220367,57.580875 7.9022063,57.76661 l 9.1375327,1.3766 35.219003,-1.256918 5.974798,-4.871264 0.150764,-5.982753 c -0.04933,0.03235 -0.09915,0.06383 -0.148379,0.09632 -4.910394,3.240803 -9.283487,7.129532 -10.87706,8.16662 -1.593571,1.037087 -0.407679,-0.777844 0.01862,-2.037005 0.426271,-1.25916 0.09293,-1.962495 -1.315379,-1.055221 -1.408323,0.907273 -3.891531,3.425633 -7.11556,4.703426 -3.224027,1.277791 -7.189312,1.314854 -7.497243,-0.652777 1.196888,-1.713332 8.339057,-10.890201 7.083592,-12.451866 -2.862861,-0.737663 -11.436846,8.513955 -10.277598,6.539978 1.224604,-2.063728 1.11112,-2.10523 2.78093,-4.204606 2.142792,-2.694037 2.983485,-3.22191 2.571799,-4.080868 -0.58137,-0.315366 -3.209137,1.491343 -5.122946,3.210942 -1.472112,1.322727 -9.704484,8.362099 -9.970116,8.192687 -0.348355,-0.222162 1.595981,-4.360091 3.152714,-5.988948 C 31.514606,37.343421 37.626519,30.328515 36.488021,29.176048 35.001437,27.67122 27.933955,33.117968 28.889153,32.24157 29.970967,31.249006 40.512676,22.019332 40.073472,18.916154 35.831584,18.80262 18.81402,35.967435 14.21696,38.000132 c 0,0 5.034507,-4.316388 5.357861,-8.104019 0.532377,-3.978252 1.294722,-4.905392 3.721358,-7.04782 C 28.2759,18.451786 37.99877,12.306987 35.042383,9.8025547 34.923911,9.7021952 34.769449,9.6480723 34.581499,9.6370967 30.960798,9.4256237 10.440538,26.211123 8.4008563,26.513292 7.9258475,25.453006 8.2597465,21.963129 11.693297,18.587622 c 0,0 12.853712,-11.1171798 11.722015,-12.4819086 -0.207237,-0.2499107 -0.51219,-0.3638785 -0.908887,-0.3580973 z","sodipodi:nodetypes":"sccccccccccccsssscccscsscsscscssccssss"},null,4),Ro(" /> "),L("rect",{style:Lt([{stroke:n.outline},{fill:"none","fill-opacity":"1","stroke-width":"2.94776","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-opacity":"1","paint-order":"fill markers stroke"}]),id:"rect21023",width:"57.052246",height:"57.052242",x:"1.4738767",y:"1.4738767",ry:"9.5872917"},null,4)])]))])}const nh=Ue(RI,[["render",NI]]);const OI={class:"inner-tile"},MI={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:vi.value[this.tile],backColor:vi.value[this.mod(this.tile+1)],frontOutline:Ia.value[this.tile],backOutline:Ia.value[this.mod(this.tile+1)],frontHighlight:Ta.value[this.tile],backHighlight:Ta.value[this.mod(this.tile+1)],gradient:vi,outlineGradient:Ia,highlightGradient:Ta}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Q.value+Q.value)%Q.value}},mounted(){const t=Me(),e=()=>{const{width:n,height:s}=t.currentLayout,i=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius=.2*i+"px",this.tileSize=i+"px"};Cn(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},DI=Object.assign(MI,{__name:"Tile",setup(t){return Po(e=>({"351e2f67":e.tileSize,d9f67c18:t.visible?1:0,"100eff76":e.borderRadius,"6720e946":t.visible?"pointer":"default",eaba475c:e.frontColor,"1fd6d3b8":e.backColor})),(e,n)=>($(),G("div",{class:ut(["tile",{"flipped-tile":e.flipped}])},[L("div",OI,[L("div",{class:"front",style:Lt({background:e.frontColor})},[U(nh,{outline:e.frontOutline,highlight:e.frontHighlight},null,8,["outline","highlight"])],4),L("div",{class:"back",style:Lt({background:e.backColor})},[U(nh,{outline:e.backOutline,highlight:e.backHighlight},null,8,["outline","highlight"])],4)])],2))}}),LI=Ue(DI,[["__scopeId","data-v-aebc1394"]]);const FI={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){return{currentChallenge:Me().currentChallenge,gradient:vi}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=Me(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},$I=Object.assign(FI,{__name:"Layout",setup(t){return(e,n)=>($(),G("div",null,[L("div",null,[($(!0),G(Se,null,Kt(t.modelValue.matrix,(s,i)=>{var r;return $(),G("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+Ie(Q)},[($(!0),G(Se,null,Kt(s,(o,a)=>{var l;return $(),ft(LI,{class:ut(["tile",{solution:Ie(_n)&&t.solution&&t.solution[i][a]>=1}]),small:t.small,tile:o,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern),style:Lt({outline:t.target?`5px solid ${Ie(vi)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&Ie(Q)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a)},null,8,["small","tile","visible","position","class","style","data-moves","onClick"])}),128))])}),128))])]))}}),Ko=Ue($I,[["__scopeId","data-v-165f2b62"]]);const UI={props:["modelValue"],emits:["update:modelValue"],data(){const t=Me();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Q.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},WI={class:"diff"},VI=["value","max"];function BI(t,e,n,s,i,r){return $(),G("div",WI,[L("h2",null,"difficulty - "+ke(r.difficultyText),1),L("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,VI)])}const HI=Ue(UI,[["render",BI],["__scopeId","data-v-38400e03"]]);const zI={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},jI={class:"diff"},qI=["value"];function GI(t,e,n,s,i,r){return $(),G("div",jI,[L("h2",null,"states - "+ke(r.moduloText),1),L("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,qI)])}const KI=Ue(zI,[["render",GI],["__scopeId","data-v-5833a5d1"]]);const lr=t=>(Us("data-v-d786f2f6"),t=t(),Ws(),t),YI={class:"top-menu"},QI=lr(()=>L("span",null," DEV ",-1)),JI=[QI],XI={class:"top right"},ZI=lr(()=>L("h1",null,"DevMode",-1)),eT={class:"input"},tT=lr(()=>L("hr",null,null,-1)),nT={key:0},sT=lr(()=>L("p",null,"Only one solution found:",-1)),iT={key:1},rT=lr(()=>L("p",null,"Multiple solutions found:",-1)),oT=["onClick"],aT={data(){const t=Me(),e=t.currentLayout,{width:n}=Fc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Q.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty},internalModulo(t){Dc(t),this.randomize()},showModal(){this.showModal||this.randomize()}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,_n.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Q.value+Q.value)%Q.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Q.value-1))),this.$nextTick(()=>{try{_n.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=Um(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),Cn(_n,t=>{t&&this.updateSolutions()})}},lT=Object.assign(aT,{__name:"FreeplayGame",setup(t){return(e,n)=>($(),G("div",null,[L("div",YI,[Ie(_n)&&e.windowWidth<600?($(),G("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},JI)):Sr("",!0),U(Xe,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),U(HI,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),Dr(L("p",{class:ut(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},ke(e.moves)+" move"+ke(e.moves>1?"s":""),3),[[Ba,e.moves>0]]),L("div",XI,[U(is,{text:"back",to:"/freeplaySelection"}),U(KI,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),L("main",null,[U(Rn,{name:"fade",mode:"out-in"},{default:Ze(()=>[($(),ft(Ko,{key:Ie(Q),modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:Ie(_n)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),Ie(_n)?Sr("",!0):($(),G("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>Ie(Qd)(!0))},"v")),U(Rn,{name:"fade"},{default:Ze(()=>[Ie(_n)&&(!(e.windowWidth<600)||e.showDevMode)?($(),G("div",{key:0,class:ut(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[L("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>Ie(Qd)(!1))},"x"),ZI,L("div",eT,[Dr(L("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[v1,e.solveOnClick]]),Ro(" re-solve on click ")]),L("p",null,"Det: "+ke(e.determinant),1),tT,e.determinant!==0?($(),G("div",nT,[sT,L("p",null,ke(e.solutions[0].moves)+" moves",1)])):($(),G("div",iT,[rT,($(!0),G(Se,null,Kt(e.solutions,(s,i)=>($(),G("p",{class:ut(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},ke(s.moves)+" moves ",11,oT))),128))]))],2)):Sr("",!0)]),_:1}),U(rs,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:Ze(()=>[L("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),U(Xe,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),cT=Ue(lT,[["__scopeId","data-v-d786f2f6"]]);const uT=t=>(Us("data-v-9ca46572"),t=t(),Ws(),t),dT=uT(()=>L("h1",null,"no moves remaining!",-1)),hT={data(){const e=Me().currentPuzzle,n=e.base.copy(),{width:s}=Fc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=Me();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},fT=Object.assign(hT,{__name:"PuzzleGame",setup(t){return(e,n)=>($(),G("div",null,[U(is,{class:"top right",text:"back",to:"/puzzleSelection"}),L("div",{class:ut(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[L("h1",null,ke(e.remainingMoves)+" move"+ke(e.remainingMoves>1?"s":"")+" remaining",1),U(Xe,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),L("main",null,[U(Ko,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),U(rs,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:Ze(()=>[L("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),U(Xe,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),U(rs,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:Ze(()=>[dT,U(Xe,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),U(is,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),pT=Ue(fT,[["__scopeId","data-v-9ca46572"]]);const mT=t=>(Us("data-v-8c7aba3b"),t=t(),Ws(),t),gT={key:0},_T={class:"info"},yT={class:"moves"},vT={key:1,class:"info"},wT=mT(()=>L("h1",null,"you won the challenge!",-1)),CT={data(){const{currentChallenge:t}=Me();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=Me();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.showLostModal=!0,window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){const t=Math.floor(this.time/60).toString(),e=(this.time%60).toString();return`${t.padStart(2,"0")}:${e.padStart(2,"0")}`},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)+"%"},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1*this.hasStarted,this.time<=0&&(this.modalText="no time left!",this.showLostModal=!0,window.clearInterval(this.timerId))},1e3)}},ET=Object.assign(CT,{__name:"ChallengeGame",setup(t){return(e,n)=>($(),G("div",null,[e.hasStarted?($(),G("div",gT,[L("h2",_T,ke(e.formattedTime)+" "+ke(e.moves)+" - "+ke(e.percentageCompleted),1),L("h2",yT,ke(e.movesPer),1)])):($(),G("h2",vT,"Click To Start The Challenge !")),L("main",null,[U(Rn,{name:"fade",mode:"out-in"},{default:Ze(()=>[($(),ft(Ko,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),U(rs,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:Ze(()=>[wT,U(Xe,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),U(rs,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:Ze(()=>[L("h1",null,ke(e.modalText),1),U(Xe,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),bT=Ue(ET,[["__scopeId","data-v-8c7aba3b"]]),IT=L("h1",{class:"title"},"how to play",-1),TT={key:0},ST=L("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),kT=L("h1",null,"Try to get all the tiles to be white!",-1),xT={key:1},RT=L("h1",null,"Nice! Now observe what happens at the corners",-1),AT={key:2},PT=L("h1",null,"Well done! Okay one last , a bit harder",-1),NT={key:3},OT=L("h1",null,"Great job! Ready to play?",-1),MT=L("h1",{class:"text-center"},"Try it here!",-1),DT={data(){const t=Me(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new qt({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},LT=Object.assign(DT,{__name:"TutorialView",setup(t){return(e,n)=>($(),G("div",null,[IT,U(rs,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:Ze(()=>[e.stage===-1?($(),G("div",TT,[ST,kT,U(Xe,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?($(),G("div",xT,[RT,U(Xe,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?($(),G("div",AT,[PT,U(Xe,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):($(),G("div",NT,[OT,U(Xe,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),MT,U(Ko,{class:ut([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),FT=P0({history:K1("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:sI},{path:"/tutorial",name:"tutorial",component:LT},{path:"/freeplaySelection",name:"freeplaySelection",component:fI},{path:"/puzzleSelection",name:"puzzleSelection",component:EI},{path:"/challengeSelection",name:"challengeSelection",component:xI},{path:"/freeplayGame",name:"freeplayGame",component:cT},{path:"/puzzleGame",name:"puzzleGame",component:pT},{path:"/challengeGame",name:"challengeGame",component:bT}]}),Uc=b1(Fb),Vm=S1();Ki(Vm);Uc.use(FT);Uc.use(Vm);Uc.mount("#app");
