var tg=Object.defineProperty;var ng=(t,e,n)=>e in t?tg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $n=(t,e,n)=>(ng(t,typeof e!="symbol"?e+"":e,n),n),Yc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var ti=(t,e,n)=>(Yc(t,e,"read from private field"),n?n.call(t):e.get(t)),_r=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Rt=(t,e,n)=>(Yc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function vl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},bs=[],bt=()=>{},sg=()=>!1,ig=/^on[^a-z]/,wo=t=>ig.test(t),wl=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rg=Object.prototype.hasOwnProperty,ae=(t,e)=>rg.call(t,e),B=Array.isArray,Is=t=>Xi(t)==="[object Map]",Co=t=>Xi(t)==="[object Set]",Qc=t=>Xi(t)==="[object Date]",X=t=>typeof t=="function",Oe=t=>typeof t=="string",Ti=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",dh=t=>ge(t)&&X(t.then)&&X(t.catch),hh=Object.prototype.toString,Xi=t=>hh.call(t),og=t=>Xi(t).slice(8,-1),fh=t=>Xi(t)==="[object Object]",El=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kr=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ag=/-(\w)/g,Ft=Eo(t=>t.replace(ag,(e,n)=>n?n.toUpperCase():"")),lg=/\B([A-Z])/g,Hs=Eo(t=>t.replace(lg,"-$1").toLowerCase()),bo=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zo=Eo(t=>t?`on${bo(t)}`:""),Si=(t,e)=>!Object.is(t,e),xr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cg=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ug=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Jc;const Pa=()=>Jc||(Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $t(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?pg(s):$t(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Oe(t))return t;if(ge(t))return t}}const dg=/;(?![^(]*\))/g,hg=/:([^]+)/,fg=/\/\*[^]*?\*\//g;function pg(t){const e={};return t.replace(fg,"").split(dg).forEach(n=>{if(n){const s=n.split(hg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Je(t){let e="";if(Oe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Je(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gg=vl(mg);function ph(t){return!!t||t===""}function _g(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Io(t[s],e[s]);return n}function Io(t,e){if(t===e)return!0;let n=Qc(t),s=Qc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ti(t),s=Ti(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?_g(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Io(t[o],e[o]))return!1}}return String(t)===String(e)}function mh(t,e){return t.findIndex(n=>Io(n,e))}const ke=t=>Oe(t)?t:t==null?"":B(t)||ge(t)&&(t.toString===hh||!X(t.toString))?JSON.stringify(t,gh,2):String(t),gh=(t,e)=>e&&e.__v_isRef?gh(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Co(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!B(e)&&!fh(e)?String(e):e;let ht;class _h{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function yh(t){return new _h(t)}function yg(t,e=ht){e&&e.active&&e.effects.push(t)}function vh(){return ht}function vg(t){ht&&ht.cleanups.push(t)}const bl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wh=t=>(t.w&An)>0,Ch=t=>(t.n&An)>0,wg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},Cg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];wh(i)&&!Ch(i)?i.delete(t):e[n++]=i,i.w&=~An,i.n&=~An}e.length=n}},Fr=new WeakMap;let ci=0,An=1;const Na=30;let yt;const Zn=Symbol(""),Oa=Symbol("");class Il{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yg(this,s)}run(){if(!this.active)return this.fn();let e=yt,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,Cn=!0,An=1<<++ci,ci<=Na?wg(this):Xc(this),this.fn()}finally{ci<=Na&&Cg(this),An=1<<--ci,yt=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const Eh=[];function zs(){Eh.push(Cn),Cn=!1}function js(){const t=Eh.pop();Cn=t===void 0?!0:t}function at(t,e,n){if(Cn&&yt){let s=Fr.get(t);s||Fr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=bl()),bh(i)}}function bh(t,e){let n=!1;ci<=Na?Ch(t)||(t.n|=An,n=!wh(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function Jt(t,e,n,s,i,r){const o=Fr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?El(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Is(t)&&a.push(o.get(Oa)));break;case"delete":B(t)||(a.push(o.get(Zn)),Is(t)&&a.push(o.get(Oa)));break;case"set":Is(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&Ma(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ma(bl(l))}}function Ma(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Zc(s);for(const s of n)s.computed||Zc(s)}function Zc(t,e){(t!==yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Eg(t,e){var n;return(n=Fr.get(t))==null?void 0:n.get(e)}const bg=vl("__proto__,__v_isRef,__isVue"),Ih=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ti)),Ig=Tl(),Tg=Tl(!1,!0),Sg=Tl(!0),eu=kg();function kg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)at(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zs();const s=ie(this)[e].apply(this,n);return js(),s}}),t}function xg(t){const e=ie(this);return at(e,"has",t),e.hasOwnProperty(t)}function Tl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?zg:Rh:e?xh:kh).get(s))return s;const o=B(s);if(!t){if(o&&ae(eu,i))return Reflect.get(eu,i,r);if(i==="hasOwnProperty")return xg}const a=Reflect.get(s,i,r);return(Ti(i)?Ih.has(i):bg(i))||(t||at(s,"get",i),e)?a:Pe(a)?o&&El(i)?a:a.value:ge(a)?t?Ph(a):Zi(a):a}}const Rg=Th(),Ag=Th(!0);function Th(t=!1){return function(n,s,i,r){let o=n[s];if(Ns(o)&&Pe(o)&&!Pe(i))return!1;if(!t&&(!$r(i)&&!Ns(i)&&(o=ie(o),i=ie(i)),!B(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=B(n)&&El(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?Si(i,o)&&Jt(n,"set",s,i):Jt(n,"add",s,i)),l}}function Pg(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Jt(t,"delete",e,void 0),s}function Ng(t,e){const n=Reflect.has(t,e);return(!Ti(e)||!Ih.has(e))&&at(t,"has",e),n}function Og(t){return at(t,"iterate",B(t)?"length":Zn),Reflect.ownKeys(t)}const Sh={get:Ig,set:Rg,deleteProperty:Pg,has:Ng,ownKeys:Og},Mg={get:Sg,set(t,e){return!0},deleteProperty(t,e){return!0}},Dg=Ne({},Sh,{get:Tg,set:Ag}),Sl=t=>t,To=t=>Reflect.getPrototypeOf(t);function yr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&at(i,"get",e),at(i,"get",r));const{has:o}=To(i),a=s?Sl:n?Rl:ki;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function vr(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&at(s,"has",t),at(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function wr(t,e=!1){return t=t.__v_raw,!e&&at(ie(t),"iterate",Zn),Reflect.get(t,"size",t)}function tu(t){t=ie(t);const e=ie(this);return To(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function nu(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=To(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Si(e,o)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function su(t){const e=ie(this),{has:n,get:s}=To(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Jt(e,"delete",t,void 0),r}function iu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function Cr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?Sl:t?Rl:ki;return!t&&at(a,"iterate",Zn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Er(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=Is(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Sl:e?Rl:ki;return!e&&at(r,"iterate",l?Oa:Zn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:this}}function Lg(){const t={get(r){return yr(this,r)},get size(){return wr(this)},has:vr,add:tu,set:nu,delete:su,clear:iu,forEach:Cr(!1,!1)},e={get(r){return yr(this,r,!1,!0)},get size(){return wr(this)},has:vr,add:tu,set:nu,delete:su,clear:iu,forEach:Cr(!1,!0)},n={get(r){return yr(this,r,!0)},get size(){return wr(this,!0)},has(r){return vr.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:Cr(!0,!1)},s={get(r){return yr(this,r,!0,!0)},get size(){return wr(this,!0)},has(r){return vr.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:Cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Er(r,!1,!1),n[r]=Er(r,!0,!1),e[r]=Er(r,!1,!0),s[r]=Er(r,!0,!0)}),[t,n,e,s]}const[Fg,$g,Ug,Wg]=Lg();function kl(t,e){const n=e?t?Wg:Ug:t?$g:Fg;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const Vg={get:kl(!1,!1)},Bg={get:kl(!1,!0)},Hg={get:kl(!0,!1)},kh=new WeakMap,xh=new WeakMap,Rh=new WeakMap,zg=new WeakMap;function jg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qg(t){return t.__v_skip||!Object.isExtensible(t)?0:jg(og(t))}function Zi(t){return Ns(t)?t:xl(t,!1,Sh,Vg,kh)}function Ah(t){return xl(t,!1,Dg,Bg,xh)}function Ph(t){return xl(t,!0,Mg,Hg,Rh)}function xl(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function En(t){return Ns(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function $r(t){return!!(t&&t.__v_isShallow)}function Nh(t){return En(t)||Ns(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function So(t){return Lr(t,"__v_skip",!0),t}const ki=t=>ge(t)?Zi(t):t,Rl=t=>ge(t)?Ph(t):t;function Oh(t){Cn&&yt&&(t=ie(t),bh(t.dep||(t.dep=bl())))}function Mh(t,e){t=ie(t);const n=t.dep;n&&Ma(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return Dh(t,!1)}function Kg(t){return Dh(t,!0)}function Dh(t,e){return Pe(t)?t:new Gg(t,e)}class Gg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:ki(e)}get value(){return Oh(this),this._value}set value(e){const n=this.__v_isShallow||$r(e)||Ns(e);e=n?e:ie(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ki(e),Mh(this))}}function Ie(t){return Pe(t)?t.value:t}const Yg={get:(t,e,n)=>Ie(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Lh(t){return En(t)?t:new Proxy(t,Yg)}function Qg(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Xg(t,n);return e}class Jg{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Eg(ie(this._object),this._key)}}function Xg(t,e,n){const s=t[e];return Pe(s)?s:new Jg(t,e,n)}class Zg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Il(e,()=>{this._dirty||(this._dirty=!0,Mh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return Oh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function e_(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=bt):(s=t.get,i=t.set),new Zg(s,i,r||!i,n)}function bn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ko(r,e,n)}return i}function pt(t,e,n,s){if(X(t)){const r=bn(t,e,n,s);return r&&dh(r)&&r.catch(o=>{ko(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(pt(t[r],e,n,s));return i}function ko(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bn(l,null,10,[t,o,a]);return}}t_(t,n,i,s)}function t_(t,e,n,s=!0){console.error(t)}let xi=!1,Da=!1;const Qe=[];let Nt=0;const Ts=[];let zt=null,zn=0;const Fh=Promise.resolve();let Al=null;function Pl(t){const e=Al||Fh;return t?e.then(this?t.bind(this):t):e}function n_(t){let e=Nt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Ri(Qe[s])<t?e=s+1:n=s}return e}function Nl(t){(!Qe.length||!Qe.includes(t,xi&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?Qe.push(t):Qe.splice(n_(t.id),0,t),$h())}function $h(){!xi&&!Da&&(Da=!0,Al=Fh.then(Wh))}function s_(t){const e=Qe.indexOf(t);e>Nt&&Qe.splice(e,1)}function i_(t){B(t)?Ts.push(...t):(!zt||!zt.includes(t,t.allowRecurse?zn+1:zn))&&Ts.push(t),$h()}function ru(t,e=xi?Nt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Uh(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,s)=>Ri(n)-Ri(s)),zn=0;zn<zt.length;zn++)zt[zn]();zt=null,zn=0}}const Ri=t=>t.id==null?1/0:t.id,r_=(t,e)=>{const n=Ri(t)-Ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wh(t){Da=!1,xi=!0,Qe.sort(r_);const e=bt;try{for(Nt=0;Nt<Qe.length;Nt++){const n=Qe[Nt];n&&n.active!==!1&&bn(n,null,14)}}finally{Nt=0,Qe.length=0,Uh(),xi=!1,Al=null,(Qe.length||Ts.length)&&Wh()}}function o_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||be;h&&(i=n.map(m=>Oe(m)?m.trim():m)),d&&(i=n.map(cg))}let a,l=s[a=Zo(e)]||s[a=Zo(Ft(e))];!l&&r&&(l=s[a=Zo(Hs(e))]),l&&pt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(c,t,6,i)}}function Vh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=Vh(c,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):Ne(o,r),ge(t)&&s.set(t,o),o)}function xo(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Hs(e))||ae(t,e))}let je=null,Ro=null;function Ur(t){const e=je;return je=t,Ro=t&&t.type.__scopeId||null,e}function us(t){Ro=t}function ds(){Ro=null}function Ke(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_u(-1);const r=Ur(e);let o;try{o=t(...i)}finally{Ur(r),s._d&&_u(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ea(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:w}=t;let x,A;const P=Ur(t);try{if(n.shapeFlag&4){const L=i||s;x=Pt(u.call(L,L,d,r,m,h,_)),A=l}else{const L=e;x=Pt(L.length>1?L(r,{attrs:l,slots:a,emit:c}):L(r,null)),A=e.props?l:a_(l)}}catch(L){gi.length=0,ko(L,t,1),x=$(mt)}let K=x;if(A&&w!==!1){const L=Object.keys(A),{shapeFlag:Z}=K;L.length&&Z&7&&(o&&L.some(wl)&&(A=l_(A,o)),K=Pn(K,A))}return n.dirs&&(K=Pn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),x=K,Ur(P),x}const a_=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},l_=(t,e)=>{const n={};for(const s in t)(!wl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function c_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ou(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!xo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ou(s,o,c):!0:!!o;return!1}function ou(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xo(n,r))return!0}return!1}function u_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const d_=t=>t.__isSuspense;function h_(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):i_(t)}function f_(t,e){return Ol(t,null,{flush:"post"})}const br={};function In(t,e,n){return Ol(t,e,n)}function Ol(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){var a;const l=vh()===((a=$e)==null?void 0:a.scope)?$e:null;let c,u=!1,d=!1;if(Pe(t)?(c=()=>t.value,u=$r(t)):En(t)?(c=()=>t,s=!0):B(t)?(d=!0,u=t.some(L=>En(L)||$r(L)),c=()=>t.map(L=>{if(Pe(L))return L.value;if(En(L))return Gn(L);if(X(L))return bn(L,l,2)})):X(t)?e?c=()=>bn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),pt(t,l,3,[m])}:c=bt,e&&s){const L=c;c=()=>Gn(L())}let h,m=L=>{h=P.onStop=()=>{bn(L,l,4)}},_;if(Li)if(m=bt,e?n&&pt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const L=a1();_=L.__watcherHandles||(L.__watcherHandles=[])}else return bt;let w=d?new Array(t.length).fill(br):br;const x=()=>{if(P.active)if(e){const L=P.run();(s||u||(d?L.some((Z,ye)=>Si(Z,w[ye])):Si(L,w)))&&(h&&h(),pt(e,l,3,[L,w===br?void 0:d&&w[0]===br?[]:w,m]),w=L)}else P.run()};x.allowRecurse=!!e;let A;i==="sync"?A=x:i==="post"?A=()=>it(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>Nl(x));const P=new Il(c,A);e?n?x():w=P.run():i==="post"?it(P.run.bind(P),l&&l.suspense):P.run();const K=()=>{P.stop(),l&&l.scope&&Cl(l.scope.effects,P)};return _&&_.push(K),K}function p_(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Bh(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=$e;Os(this);const a=Ol(i,r.bind(s),n);return o?Os(o):es(),a}function Bh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Gn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(Co(t)||Is(t))t.forEach(n=>{Gn(n,e)});else if(fh(t))for(const n in t)Gn(t[n],e);return t}function Wr(t,e){const n=je;if(n===null)return t;const s=Do(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(zs(),pt(l,n,8,[t.el,a,t,e]),js())}}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ni(()=>{t.isMounted=!0}),Yh(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],zh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},m_={name:"BaseTransition",props:zh,setup(t,{slots:e}){const n=Ul(),s=Hh();let i;return()=>{const r=e.default&&Ml(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==mt){o=w;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return ta(o);const c=au(o);if(!c)return ta(o);const u=Ai(c,a,s,n);Pi(c,u);const d=n.subTree,h=d&&au(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const w=_();i===void 0?i=w:w!==i&&(i=w,m=!0)}if(h&&h.type!==mt&&(!jn(c,h)||m)){const w=Ai(h,a,s,n);if(Pi(h,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ta(o);l==="in-out"&&c.type!==mt&&(w.delayLeave=(x,A,P)=>{const K=jh(s,h);K[String(h.key)]=h,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},g_=m_;function jh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ai(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:w,onAppear:x,onAfterAppear:A,onAppearCancelled:P}=e,K=String(t.key),L=jh(n,t),Z=(O,W)=>{O&&pt(O,s,9,W)},ye=(O,W)=>{const J=W[1];Z(O,W),B(O)?O.every(pe=>pe.length<=1)&&J():O.length<=1&&J()},Ce={mode:r,persisted:o,beforeEnter(O){let W=a;if(!n.isMounted)if(i)W=w||a;else return;O._leaveCb&&O._leaveCb(!0);const J=L[K];J&&jn(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Z(W,[O])},enter(O){let W=l,J=c,pe=u;if(!n.isMounted)if(i)W=x||l,J=A||c,pe=P||u;else return;let F=!1;const ce=O._enterCb=qe=>{F||(F=!0,qe?Z(pe,[O]):Z(J,[O]),Ce.delayedLeave&&Ce.delayedLeave(),O._enterCb=void 0)};W?ye(W,[O,ce]):ce()},leave(O,W){const J=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return W();Z(d,[O]);let pe=!1;const F=O._leaveCb=ce=>{pe||(pe=!0,W(),ce?Z(_,[O]):Z(m,[O]),O._leaveCb=void 0,L[J]===t&&delete L[J])};L[J]=t,h?ye(h,[O,F]):F()},clone(O){return Ai(O,e,n,s)}};return Ce}function ta(t){if(Ao(t))return t=Pn(t),t.children=null,t}function au(t){return Ao(t)?t.children?t.children[0]:void 0:t}function Pi(t,e){t.shapeFlag&6&&t.component?Pi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ml(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Te?(o.patchFlag&128&&i++,s=s.concat(Ml(o.children,e,a))):(e||o.type!==mt)&&s.push(a!=null?Pn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function qh(t,e){return X(t)?(()=>Ne({name:t.name},e,{setup:t}))():t}const pi=t=>!!t.type.__asyncLoader,Ao=t=>t.type.__isKeepAlive;function __(t,e){Kh(t,"a",e)}function y_(t,e){Kh(t,"da",e)}function Kh(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Po(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ao(i.parent.vnode)&&v_(s,e,n,i),i=i.parent}}function v_(t,e,n,s){const i=Po(e,t,s,!0);Oi(()=>{Cl(s[e],i)},n)}function Po(t,e,n=$e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zs(),Os(n);const a=pt(e,n,t,o);return es(),js(),a});return s?i.unshift(r):i.push(r),r}}const en=t=>(e,n=$e)=>(!Li||t==="sp")&&Po(t,(...s)=>e(...s),n),w_=en("bm"),Ni=en("m"),C_=en("bu"),Gh=en("u"),Yh=en("bum"),Oi=en("um"),E_=en("sp"),b_=en("rtg"),I_=en("rtc");function T_(t,e=$e){Po("ec",t,e)}const Dl="components";function S_(t,e){return Jh(Dl,t,!0,e)||t}const Qh=Symbol.for("v-ndc");function k_(t){return Oe(t)?Jh(Dl,t,!1)||t:t||Qh}function Jh(t,e,n=!0,s=!1){const i=je||$e;if(i){const r=i.type;if(t===Dl){const a=i1(r,!1);if(a&&(a===e||a===Ft(e)||a===bo(Ft(e))))return r}const o=lu(i[t]||r[t],e)||lu(i.appContext[t],e);return!o&&s?r:o}}function lu(t,e){return t&&(t[e]||t[Ft(e)]||t[bo(Ft(e))])}function Ut(t,e,n,s){let i;const r=n&&n[s];if(B(t)||Oe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ge(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function x_(t,e,n={},s,i){if(je.isCE||je.parent&&pi(je.parent)&&je.parent.isCE)return e!=="default"&&(n.name=e),$("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),N();const o=r&&Xh(r(n)),a=lt(Te,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Xh(t){return t.some(e=>Br(e)?!(e.type===mt||e.type===Te&&!Xh(e.children)):!0)?t:null}const La=t=>t?uf(t)?Do(t)||t.proxy:La(t.parent):null,mi=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>La(t.parent),$root:t=>La(t.root),$emit:t=>t.emit,$options:t=>Ll(t),$forceUpdate:t=>t.f||(t.f=()=>Nl(t.update)),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>p_.bind(t)}),na=(t,e)=>t!==be&&!t.__isScriptSetup&&ae(t,e),R_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(na(s,e))return o[e]=1,s[e];if(i!==be&&ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,r[e];if(n!==be&&ae(n,e))return o[e]=4,n[e];Fa&&(o[e]=0)}}const u=mi[e];let d,h;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==be&&ae(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ae(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return na(i,e)?(i[e]=n,!0):s!==be&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&ae(t,o)||na(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(mi,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cu(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fa=!0;function A_(t){const e=Ll(t),n=t.proxy,s=t.ctx;Fa=!1,e.beforeCreate&&uu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:w,deactivated:x,beforeDestroy:A,beforeUnmount:P,destroyed:K,unmounted:L,render:Z,renderTracked:ye,renderTriggered:Ce,errorCaptured:O,serverPrefetch:W,expose:J,inheritAttrs:pe,components:F,directives:ce,filters:qe}=e;if(c&&P_(c,s,null),o)for(const me in o){const ue=o[me];X(ue)&&(s[me]=ue.bind(n))}if(i){const me=i.call(n,n);ge(me)&&(t.data=Zi(me))}if(Fa=!0,r)for(const me in r){const ue=r[me],Vt=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):bt,sn=!X(ue)&&X(ue.set)?ue.set.bind(n):bt,kt=Ae({get:Vt,set:sn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>kt.value,set:st=>kt.value=st})}if(a)for(const me in a)Zh(a[me],s,n,me);if(l){const me=X(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{Rr(ue,me[ue])})}u&&uu(u,t,"c");function re(me,ue){B(ue)?ue.forEach(Vt=>me(Vt.bind(n))):ue&&me(ue.bind(n))}if(re(w_,d),re(Ni,h),re(C_,m),re(Gh,_),re(__,w),re(y_,x),re(T_,O),re(I_,ye),re(b_,Ce),re(Yh,P),re(Oi,L),re(E_,W),B(J))if(J.length){const me=t.exposed||(t.exposed={});J.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:Vt=>n[ue]=Vt})})}else t.exposed||(t.exposed={});Z&&t.render===bt&&(t.render=Z),pe!=null&&(t.inheritAttrs=pe),F&&(t.components=F),ce&&(t.directives=ce)}function P_(t,e,n=bt){B(t)&&(t=$a(t));for(const s in t){const i=t[s];let r;ge(i)?"default"in i?r=Mt(i.from||s,i.default,!0):r=Mt(i.from||s):r=Mt(i),Pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function uu(t,e,n){pt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zh(t,e,n,s){const i=s.includes(".")?Bh(n,s):()=>n[s];if(Oe(t)){const r=e[t];X(r)&&In(i,r)}else if(X(t))In(i,t.bind(n));else if(ge(t))if(B(t))t.forEach(r=>Zh(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&In(i,r,t)}}function Ll(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Vr(l,c,o,!0)),Vr(l,e,o)),ge(e)&&r.set(e,l),l}function Vr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Vr(t,r,n,!0),i&&i.forEach(o=>Vr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:du,props:hu,emits:hu,methods:ui,computed:ui,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:ui,directives:ui,watch:M_,provide:du,inject:O_};function du(t,e){return e?t?function(){return Ne(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function O_(t,e){return ui($a(t),$a(e))}function $a(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?Ne(Object.create(null),t,e):e}function hu(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Ne(Object.create(null),cu(t),cu(e??{})):e}function M_(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function ef(){return{app:null,config:{isNativeTag:sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function L_(t,e){return function(s,i=null){X(s)||(s=Ne({},s)),i!=null&&!ge(i)&&(i=null);const r=ef(),o=new Set;let a=!1;const l=r.app={_uid:D_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:l1,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=$(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Do(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Mi=l;try{return c()}finally{Mi=null}}};return l}}let Mi=null;function Rr(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=$e||je;if(s||Mi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Mi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function F_(){return!!($e||je||Mi)}function $_(t,e,n,s=!1){const i={},r={};Lr(r,Oo,1),t.propsDefaults=Object.create(null),tf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function U_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(xo(t.emitsOptions,h))continue;const m=e[h];if(l)if(ae(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=Ft(h);i[_]=Ua(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{tf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ae(e,d)&&((u=Hs(d))===d||!ae(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ua(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ae(e,d))&&(delete r[d],c=!0)}c&&Jt(t,"set","$attrs")}function tf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;i&&ae(i,u=Ft(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:xo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||be;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ua(i,l,d,c[d],t,!ae(c,d))}}return o}function Ua(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Os(i),s=c[n]=l.call(null,e),es())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Hs(n))&&(s=!0))}return s}function nf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[h,m]=nf(d,e,!0);Ne(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&s.set(t,bs),bs;if(B(r))for(let u=0;u<r.length;u++){const d=Ft(r[u]);fu(d)&&(o[d]=be)}else if(r)for(const u in r){const d=Ft(u);if(fu(d)){const h=r[u],m=o[d]=B(h)||X(h)?{type:h}:Ne({},h);if(m){const _=gu(Boolean,m.type),w=gu(String,m.type);m[0]=_>-1,m[1]=w<0||_<w,(_>-1||ae(m,"default"))&&a.push(d)}}}const c=[o,a];return ge(t)&&s.set(t,c),c}function fu(t){return t[0]!=="$"}function pu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mu(t,e){return pu(t)===pu(e)}function gu(t,e){return B(e)?e.findIndex(n=>mu(n,t)):X(e)&&mu(e,t)?0:-1}const sf=t=>t[0]==="_"||t==="$stable",Fl=t=>B(t)?t.map(Pt):[Pt(t)],W_=(t,e,n)=>{if(e._n)return e;const s=Ke((...i)=>Fl(e(...i)),n);return s._c=!1,s},rf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sf(i))continue;const r=t[i];if(X(r))e[i]=W_(i,r,s);else if(r!=null){const o=Fl(r);e[i]=()=>o}}},of=(t,e)=>{const n=Fl(e);t.slots.default=()=>n},V_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Lr(e,"_",n)):rf(e,t.slots={})}else t.slots={},e&&of(t,e);Lr(t.slots,Oo,1)},B_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ne(i,e),!n&&a===1&&delete i._):(r=!e.$stable,rf(e,i)),o=e}else e&&(of(t,e),o={default:1});if(r)for(const a in i)!sf(a)&&!(a in o)&&delete i[a]};function Wa(t,e,n,s,i=!1){if(B(t)){t.forEach((h,m)=>Wa(h,e&&(B(e)?e[m]:e),n,s,i));return}if(pi(s)&&!i)return;const r=s.shapeFlag&4?Do(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,ae(d,c)&&(d[c]=null)):Pe(c)&&(c.value=null)),X(l))bn(l,a,12,[o,u]);else{const h=Oe(l),m=Pe(l);if(h||m){const _=()=>{if(t.f){const w=h?ae(d,l)?d[l]:u[l]:l.value;i?B(w)&&Cl(w,r):B(w)?w.includes(r)||w.push(r):h?(u[l]=[r],ae(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ae(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,it(_,n)):_()}}}const it=h_;function H_(t){return z_(t)}function z_(t,e){const n=Pa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=bt,insertStaticContent:_}=t,w=(f,p,g,y=null,C=null,E=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!jn(f,p)&&(y=v(f),st(f,C,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:U}=p;switch(b){case No:x(f,p,g,y);break;case mt:A(f,p,g,y);break;case Ar:f==null&&P(p,g,y,R);break;case Te:F(f,p,g,y,C,E,R,I,S);break;default:U&1?Z(f,p,g,y,C,E,R,I,S):U&6?ce(f,p,g,y,C,E,R,I,S):(U&64||U&128)&&b.process(f,p,g,y,C,E,R,I,S,k)}H!=null&&C&&Wa(H,f&&f.ref,E,p||f,!p)},x=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},K=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},L=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},Z=(f,p,g,y,C,E,R,I,S)=>{R=R||p.type==="svg",f==null?ye(p,g,y,C,E,R,I,S):W(f,p,C,E,R,I,S)},ye=(f,p,g,y,C,E,R,I)=>{let S,b;const{type:H,props:U,shapeFlag:z,transition:Y,dirs:ne}=f;if(S=f.el=o(f.type,E,U&&U.is,U),z&8?u(S,f.children):z&16&&O(f.children,S,null,y,C,E&&H!=="foreignObject",R,I),ne&&Un(f,null,y,"created"),Ce(S,f,f.scopeId,R,y),U){for(const he in U)he!=="value"&&!kr(he)&&r(S,he,null,U[he],E,f.children,y,C,Ge);"value"in U&&r(S,"value",null,U.value),(b=U.onVnodeBeforeMount)&&At(b,y,f)}ne&&Un(f,null,y,"beforeMount");const ve=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;ve&&Y.beforeEnter(S),s(S,p,g),((b=U&&U.onVnodeMounted)||ve||ne)&&it(()=>{b&&At(b,y,f),ve&&Y.enter(S),ne&&Un(f,null,y,"mounted")},C)},Ce=(f,p,g,y,C)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(C){let E=C.subTree;if(p===E){const R=C.vnode;Ce(f,R,R.scopeId,R.slotScopeIds,C.parent)}}},O=(f,p,g,y,C,E,R,I,S=0)=>{for(let b=S;b<f.length;b++){const H=f[b]=I?hn(f[b]):Pt(f[b]);w(null,H,p,g,y,C,E,R,I)}},W=(f,p,g,y,C,E,R)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:H}=p;S|=f.patchFlag&16;const U=f.props||be,z=p.props||be;let Y;g&&Wn(g,!1),(Y=z.onVnodeBeforeUpdate)&&At(Y,g,p,f),H&&Un(p,f,g,"beforeUpdate"),g&&Wn(g,!0);const ne=C&&p.type!=="foreignObject";if(b?J(f.dynamicChildren,b,I,g,y,ne,E):R||ue(f,p,I,null,g,y,ne,E,!1),S>0){if(S&16)pe(I,p,U,z,g,y,C);else if(S&2&&U.class!==z.class&&r(I,"class",null,z.class,C),S&4&&r(I,"style",U.style,z.style,C),S&8){const ve=p.dynamicProps;for(let he=0;he<ve.length;he++){const De=ve[he],gt=U[De],ms=z[De];(ms!==gt||De==="value")&&r(I,De,gt,ms,C,f.children,g,y,Ge)}}S&1&&f.children!==p.children&&u(I,p.children)}else!R&&b==null&&pe(I,p,U,z,g,y,C);((Y=z.onVnodeUpdated)||H)&&it(()=>{Y&&At(Y,g,p,f),H&&Un(p,f,g,"updated")},y)},J=(f,p,g,y,C,E,R)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],H=S.el&&(S.type===Te||!jn(S,b)||S.shapeFlag&70)?d(S.el):g;w(S,b,H,null,y,C,E,R,!0)}},pe=(f,p,g,y,C,E,R)=>{if(g!==y){if(g!==be)for(const I in g)!kr(I)&&!(I in y)&&r(f,I,g[I],null,R,p.children,C,E,Ge);for(const I in y){if(kr(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,R,p.children,C,E,Ge)}"value"in y&&r(f,"value",g.value,y.value)}},F=(f,p,g,y,C,E,R,I,S)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:Y}=p;Y&&(I=I?I.concat(Y):Y),f==null?(s(b,g,y),s(H,g,y),O(p.children,g,H,C,E,R,I,S)):U>0&&U&64&&z&&f.dynamicChildren?(J(f.dynamicChildren,z,g,C,E,R,I),(p.key!=null||C&&p===C.subTree)&&af(f,p,!0)):ue(f,p,g,H,C,E,R,I,S)},ce=(f,p,g,y,C,E,R,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,R,S):qe(p,g,y,C,E,R,S):Ze(f,p,S)},qe=(f,p,g,y,C,E,R)=>{const I=f.component=Z_(f,y,C);if(Ao(f)&&(I.ctx.renderer=k),e1(I),I.asyncDep){if(C&&C.registerDep(I,re),!f.el){const S=I.subTree=$(mt);A(null,S,p,g)}return}re(I,f,p,g,C,E,R)},Ze=(f,p,g)=>{const y=p.component=f.component;if(c_(f,p,g))if(y.asyncDep&&!y.asyncResolved){me(y,p,g);return}else y.next=p,s_(y.update),y.update();else p.el=f.el,y.vnode=p},re=(f,p,g,y,C,E,R)=>{const I=()=>{if(f.isMounted){let{next:H,bu:U,u:z,parent:Y,vnode:ne}=f,ve=H,he;Wn(f,!1),H?(H.el=ne.el,me(f,H,R)):H=ne,U&&xr(U),(he=H.props&&H.props.onVnodeBeforeUpdate)&&At(he,Y,H,ne),Wn(f,!0);const De=ea(f),gt=f.subTree;f.subTree=De,w(gt,De,d(gt.el),v(gt),f,C,E),H.el=De.el,ve===null&&u_(f,De.el),z&&it(z,C),(he=H.props&&H.props.onVnodeUpdated)&&it(()=>At(he,Y,H,ne),C)}else{let H;const{el:U,props:z}=p,{bm:Y,m:ne,parent:ve}=f,he=pi(p);if(Wn(f,!1),Y&&xr(Y),!he&&(H=z&&z.onVnodeBeforeMount)&&At(H,ve,p),Wn(f,!0),U&&de){const De=()=>{f.subTree=ea(f),de(U,f.subTree,f,C,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=ea(f);w(null,De,g,y,f,C,E),p.el=De.el}if(ne&&it(ne,C),!he&&(H=z&&z.onVnodeMounted)){const De=p;it(()=>At(H,ve,De),C)}(p.shapeFlag&256||ve&&pi(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&it(f.a,C),f.isMounted=!0,p=g=y=null}},S=f.effect=new Il(I,()=>Nl(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,Wn(f,!0),b()},me=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,U_(f,p.props,y,g),B_(f,p.children,g),zs(),ru(),js()},ue=(f,p,g,y,C,E,R,I,S=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,U=p.children,{patchFlag:z,shapeFlag:Y}=p;if(z>0){if(z&128){sn(b,U,g,y,C,E,R,I,S);return}else if(z&256){Vt(b,U,g,y,C,E,R,I,S);return}}Y&8?(H&16&&Ge(b,C,E),U!==b&&u(g,U)):H&16?Y&16?sn(b,U,g,y,C,E,R,I,S):Ge(b,C,E,!0):(H&8&&u(g,""),Y&16&&O(U,g,y,C,E,R,I,S))},Vt=(f,p,g,y,C,E,R,I,S)=>{f=f||bs,p=p||bs;const b=f.length,H=p.length,U=Math.min(b,H);let z;for(z=0;z<U;z++){const Y=p[z]=S?hn(p[z]):Pt(p[z]);w(f[z],Y,g,null,C,E,R,I,S)}b>H?Ge(f,C,E,!0,!1,U):O(p,g,y,C,E,R,I,S,U)},sn=(f,p,g,y,C,E,R,I,S)=>{let b=0;const H=p.length;let U=f.length-1,z=H-1;for(;b<=U&&b<=z;){const Y=f[b],ne=p[b]=S?hn(p[b]):Pt(p[b]);if(jn(Y,ne))w(Y,ne,g,null,C,E,R,I,S);else break;b++}for(;b<=U&&b<=z;){const Y=f[U],ne=p[z]=S?hn(p[z]):Pt(p[z]);if(jn(Y,ne))w(Y,ne,g,null,C,E,R,I,S);else break;U--,z--}if(b>U){if(b<=z){const Y=z+1,ne=Y<H?p[Y].el:y;for(;b<=z;)w(null,p[b]=S?hn(p[b]):Pt(p[b]),g,ne,C,E,R,I,S),b++}}else if(b>z)for(;b<=U;)st(f[b],C,E,!0),b++;else{const Y=b,ne=b,ve=new Map;for(b=ne;b<=z;b++){const dt=p[b]=S?hn(p[b]):Pt(p[b]);dt.key!=null&&ve.set(dt.key,b)}let he,De=0;const gt=z-ne+1;let ms=!1,qc=0;const ei=new Array(gt);for(b=0;b<gt;b++)ei[b]=0;for(b=Y;b<=U;b++){const dt=f[b];if(De>=gt){st(dt,C,E,!0);continue}let xt;if(dt.key!=null)xt=ve.get(dt.key);else for(he=ne;he<=z;he++)if(ei[he-ne]===0&&jn(dt,p[he])){xt=he;break}xt===void 0?st(dt,C,E,!0):(ei[xt-ne]=b+1,xt>=qc?qc=xt:ms=!0,w(dt,p[xt],g,null,C,E,R,I,S),De++)}const Kc=ms?j_(ei):bs;for(he=Kc.length-1,b=gt-1;b>=0;b--){const dt=ne+b,xt=p[dt],Gc=dt+1<H?p[dt+1].el:y;ei[b]===0?w(null,xt,g,Gc,C,E,R,I,S):ms&&(he<0||b!==Kc[he]?kt(xt,g,Gc,2):he--)}}},kt=(f,p,g,y,C=null)=>{const{el:E,type:R,transition:I,children:S,shapeFlag:b}=f;if(b&6){kt(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,k);return}if(R===Te){s(E,p,g);for(let U=0;U<S.length;U++)kt(S[U],p,g,y);s(f.anchor,p,g);return}if(R===Ar){K(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),it(()=>I.enter(E),C);else{const{leave:U,delayLeave:z,afterLeave:Y}=I,ne=()=>s(E,p,g),ve=()=>{U(E,()=>{ne(),Y&&Y()})};z?z(E,ne,ve):ve()}else s(E,p,g)},st=(f,p,g,y=!1,C=!1)=>{const{type:E,props:R,ref:I,children:S,dynamicChildren:b,shapeFlag:H,patchFlag:U,dirs:z}=f;if(I!=null&&Wa(I,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&z,ne=!pi(f);let ve;if(ne&&(ve=R&&R.onVnodeBeforeUnmount)&&At(ve,p,f),H&6)gr(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&Un(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,C,k,y):b&&(E!==Te||U>0&&U&64)?Ge(b,p,g,!1,!0):(E===Te&&U&384||!C&&H&16)&&Ge(S,p,g),y&&fs(f)}(ne&&(ve=R&&R.onVnodeUnmounted)||Y)&&it(()=>{ve&&At(ve,p,f),Y&&Un(f,null,p,"unmounted")},g)},fs=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===Te){ps(g,y);return}if(p===Ar){L(f);return}const E=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:R,delayLeave:I}=C,S=()=>R(g,E);I?I(f.el,E,S):S()}else E()},ps=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},gr=(f,p,g)=>{const{bum:y,scope:C,update:E,subTree:R,um:I}=f;y&&xr(y),C.stop(),E&&(E.active=!1,st(R,f,p,g)),I&&it(I,p),it(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ge=(f,p,g,y=!1,C=!1,E=0)=>{for(let R=E;R<f.length;R++)st(f[R],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),M=(f,p,g)=>{f==null?p._vnode&&st(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),ru(),Uh(),p._vnode=f},k={p:w,um:st,m:kt,r:fs,mt:qe,mc:O,pc:ue,pbc:J,n:v,o:t};let V,de;return e&&([V,de]=e(k)),{render:M,hydrate:V,createApp:L_(M,V)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function af(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=hn(i[r]),a.el=o.el),n||af(o,a)),a.type===No&&(a.el=o.el)}}function j_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const q_=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),No=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),gi=[];let wt=null;function N(t=!1){gi.push(wt=t?null:[])}function K_(){gi.pop(),wt=gi[gi.length-1]||null}let Di=1;function _u(t){Di+=t}function lf(t){return t.dynamicChildren=Di>0?wt||bs:null,K_(),Di>0&&wt&&wt.push(t),t}function j(t,e,n,s,i,r){return lf(D(t,e,n,s,i,r,!0))}function lt(t,e,n,s,i){return lf($(t,e,n,s,i,!0))}function Br(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const Oo="__vInternal",cf=({key:t})=>t??null,Pr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Pe(t)||X(t)?{i:je,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cf(e),ref:e&&Pr(e),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?($l(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Di>0&&!o&&wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wt.push(l),l}const $=G_;function G_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Qh)&&(t=mt),Br(t)){const a=Pn(t,e,!0);return n&&$l(a,n),Di>0&&!r&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(r1(t)&&(t=t.__vccOpts),e){e=Y_(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=Je(a)),ge(l)&&(Nh(l)&&!B(l)&&(l=Ne({},l)),e.style=$t(l))}const o=Oe(t)?1:d_(t)?128:q_(t)?64:ge(t)?4:X(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function Y_(t){return t?Nh(t)||Oo in t?Ne({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Q_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cf(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Pr(e)):[i,Pr(e)]:Pr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mo(t=" ",e=0){return $(No,null,t,e)}function Ss(t="",e=!1){return e?(N(),lt(mt,null,t)):$(mt,null,t)}function Pt(t){return t==null||typeof t=="boolean"?$(mt):B(t)?$(Te,null,t.slice()):typeof t=="object"?hn(t):$(No,null,String(t))}function hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function $l(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),$l(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Oo in e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Mo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Je([e.class,s.class]));else if(i==="style")e.style=$t([e.style,s.style]);else if(wo(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function At(t,e,n,s=null){pt(t,e,7,[n,s])}const J_=ef();let X_=0;function Z_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||J_,r={uid:X_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nf(s,i),emitsOptions:Vh(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=o_.bind(null,r),t.ce&&t.ce(r),r}let $e=null;const Ul=()=>$e||je;let Wl,gs,yu="__VUE_INSTANCE_SETTERS__";(gs=Pa()[yu])||(gs=Pa()[yu]=[]),gs.push(t=>$e=t),Wl=t=>{gs.length>1?gs.forEach(e=>e(t)):gs[0](t)};const Os=t=>{Wl(t),t.scope.on()},es=()=>{$e&&$e.scope.off(),Wl(null)};function uf(t){return t.vnode.shapeFlag&4}let Li=!1;function e1(t,e=!1){Li=e;const{props:n,children:s}=t.vnode,i=uf(t);$_(t,n,i,e),V_(t,s);const r=i?t1(t,e):void 0;return Li=!1,r}function t1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=So(new Proxy(t.ctx,R_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?s1(t):null;Os(t),zs();const r=bn(s,t,0,[t.props,i]);if(js(),es(),dh(r)){if(r.then(es,es),e)return r.then(o=>{vu(t,o,e)}).catch(o=>{ko(o,t,0)});t.asyncDep=r}else vu(t,r,e)}else df(t,e)}function vu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Lh(e)),df(t,n)}let wu;function df(t,e,n){const s=t.type;if(!t.render){if(!e&&wu&&!s.render){const i=s.template||Ll(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ne(Ne({isCustomElement:r,delimiters:a},o),l);s.render=wu(i,c)}}t.render=s.render||bt}Os(t),zs(),A_(t),js(),es()}function n1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}}))}function s1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return n1(t)},slots:t.slots,emit:t.emit,expose:e}}function Do(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lh(So(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}}))}function i1(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function r1(t){return X(t)&&"__vccOpts"in t}const Ae=(t,e)=>e_(t,e,Li);function Vl(t,e,n){const s=arguments.length;return s===2?ge(e)&&!B(e)?Br(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Br(n)&&(n=[n]),$(t,e,n))}const o1=Symbol.for("v-scx"),a1=()=>Mt(o1),l1="3.3.4",c1="http://www.w3.org/2000/svg",qn=typeof document<"u"?document:null,Cu=qn&&qn.createElement("template"),u1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?qn.createElementNS(c1,t):qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Cu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Cu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function d1(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h1(t,e,n){const s=t.style,i=Oe(n);if(n&&!i){if(e&&!Oe(e))for(const r in e)n[r]==null&&Va(s,r,"");for(const r in n)Va(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Eu=/\s*!important$/;function Va(t,e,n){if(B(n))n.forEach(s=>Va(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=f1(t,e);Eu.test(n)?t.setProperty(Hs(s),n.replace(Eu,""),"important"):t[s]=n}}const bu=["Webkit","Moz","ms"],sa={};function f1(t,e){const n=sa[e];if(n)return n;let s=Ft(e);if(s!=="filter"&&s in t)return sa[e]=s;s=bo(s);for(let i=0;i<bu.length;i++){const r=bu[i]+s;if(r in t)return sa[e]=r}return e}const Iu="http://www.w3.org/1999/xlink";function p1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Iu,e.slice(6,e.length)):t.setAttributeNS(Iu,e,n);else{const r=gg(e);n==null||r&&!ph(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function m1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ph(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function hf(t,e,n,s){t.addEventListener(e,n,s)}function g1(t,e,n,s){t.removeEventListener(e,n,s)}function _1(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=y1(e);if(s){const c=r[e]=C1(s,i);hf(t,a,c,l)}else o&&(g1(t,a,o,l),r[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function y1(t){let e;if(Tu.test(t)){e={};let s;for(;s=t.match(Tu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hs(t.slice(2)),e]}let ia=0;const v1=Promise.resolve(),w1=()=>ia||(v1.then(()=>ia=0),ia=Date.now());function C1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(E1(s,n.value),e,5,[s])};return n.value=t,n.attached=w1(),n}function E1(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Su=/^on[a-z]/,b1=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?d1(t,s,i):e==="style"?h1(t,n,s):wo(e)?wl(e)||_1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I1(t,e,s,i))?m1(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),p1(t,e,s,i))};function I1(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Su.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Su.test(e)&&Oe(n)?!1:e in t}function er(t){const e=Ul();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ha(r,i))},s=()=>{const i=t(e.proxy);Ba(e.subTree,i),n(i)};f_(s),Ni(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Oi(()=>i.disconnect())})}function Ba(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ba(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Ha(t.el,e);else if(t.type===Te)t.children.forEach(n=>Ba(n,e));else if(t.type===Ar){let{el:n,anchor:s}=t;for(;n&&(Ha(n,e),n!==s);)n=n.nextSibling}}function Ha(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const on="transition",ni="animation",Nn=(t,{slots:e})=>Vl(g_,pf(t),e);Nn.displayName="Transition";const ff={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},T1=Nn.props=Ne({},zh,ff),Vn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},ku=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function pf(t){const e={};for(const F in t)F in ff||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=S1(i),w=_&&_[0],x=_&&_[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:K,onLeave:L,onLeaveCancelled:Z,onBeforeAppear:ye=A,onAppear:Ce=P,onAppearCancelled:O=K}=e,W=(F,ce,qe)=>{cn(F,ce?u:a),cn(F,ce?c:o),qe&&qe()},J=(F,ce)=>{F._isLeaving=!1,cn(F,d),cn(F,m),cn(F,h),ce&&ce()},pe=F=>(ce,qe)=>{const Ze=F?Ce:P,re=()=>W(ce,F,qe);Vn(Ze,[ce,re]),xu(()=>{cn(ce,F?l:r),Ht(ce,F?u:a),ku(Ze)||Ru(ce,s,w,re)})};return Ne(e,{onBeforeEnter(F){Vn(A,[F]),Ht(F,r),Ht(F,o)},onBeforeAppear(F){Vn(ye,[F]),Ht(F,l),Ht(F,c)},onEnter:pe(!1),onAppear:pe(!0),onLeave(F,ce){F._isLeaving=!0;const qe=()=>J(F,ce);Ht(F,d),gf(),Ht(F,h),xu(()=>{F._isLeaving&&(cn(F,d),Ht(F,m),ku(L)||Ru(F,s,x,qe))}),Vn(L,[F,qe])},onEnterCancelled(F){W(F,!1),Vn(K,[F])},onAppearCancelled(F){W(F,!0),Vn(O,[F])},onLeaveCancelled(F){J(F),Vn(Z,[F])}})}function S1(t){if(t==null)return null;if(ge(t))return[ra(t.enter),ra(t.leave)];{const e=ra(t);return[e,e]}}function ra(t){return ug(t)}function Ht(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function cn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function xu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let k1=0;function Ru(t,e,n,s){const i=t._endId=++k1,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=mf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function mf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${on}Delay`),r=s(`${on}Duration`),o=Au(i,r),a=s(`${ni}Delay`),l=s(`${ni}Duration`),c=Au(a,l);let u=null,d=0,h=0;e===on?o>0&&(u=on,d=o,h=r.length):e===ni?c>0&&(u=ni,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?on:ni:null,h=u?u===on?r.length:l.length:0);const m=u===on&&/\b(transform|all)(,|$)/.test(s(`${on}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Au(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Pu(n)+Pu(t[s])))}function Pu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function gf(){return document.body.offsetHeight}const _f=new WeakMap,yf=new WeakMap,vf={name:"TransitionGroup",props:Ne({},T1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ul(),s=Hh();let i,r;return Gh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!O1(i[0].el,n.vnode.el,o))return;i.forEach(A1),i.forEach(P1);const a=i.filter(N1);gf(),a.forEach(l=>{const c=l.el,u=c.style;Ht(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,cn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ie(t),a=pf(o);let l=o.tag||Te;i=r,r=e.default?Ml(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Pi(u,Ai(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Pi(u,Ai(u,a,s,n)),_f.set(u,u.el.getBoundingClientRect())}return $(l,null,r)}}},x1=t=>delete t.mode;vf.props;const R1=vf;function A1(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function P1(t){yf.set(t,t.el.getBoundingClientRect())}function N1(t){const e=_f.get(t),n=yf.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function O1(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=mf(s);return i.removeChild(s),r}const Nu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>xr(e,n):e},M1={deep:!0,created(t,e,n){t._assign=Nu(n),hf(t,"change",()=>{const s=t._modelValue,i=D1(t),r=t.checked,o=t._assign;if(B(s)){const a=mh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Co(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(wf(t,r))})},mounted:Ou,beforeUpdate(t,e,n){t._assign=Nu(n),Ou(t,e,n)}};function Ou(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=mh(e,s.props.value)>-1:Co(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Io(e,wf(t,!0)))}function D1(t){return"_value"in t?t._value:t.value}function wf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const za={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):si(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),si(t,!0),s.enter(t)):s.leave(t,()=>{si(t,!1)}):si(t,e))},beforeUnmount(t,{value:e}){si(t,e)}};function si(t,e){t.style.display=e?t._vod:"none"}const L1=Ne({patchProp:b1},u1);let Mu;function F1(){return Mu||(Mu=H_(L1))}const $1=(...t)=>{const e=F1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=U1(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function U1(t){return Oe(t)?document.querySelector(t):t}var W1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Cf;const tr=t=>Cf=t,Ef=Symbol();function ja(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_i||(_i={}));function V1(){const t=yh(!0),e=t.run(()=>Fe({}));let n=[],s=[];const i=So({install(r){tr(i),i._a=r,r.provide(Ef,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!W1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const bf=()=>{};function Du(t,e,n,s=bf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&vh()&&vg(i),i}function _s(t,...e){t.slice().forEach(n=>{n(...e)})}const B1=t=>t();function qa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ja(i)&&ja(s)&&t.hasOwnProperty(n)&&!Pe(s)&&!En(s)?t[n]=qa(i,s):t[n]=s}return t}const H1=Symbol();function z1(t){return!ja(t)||!t.hasOwnProperty(H1)}const{assign:un}=Object;function j1(t){return!!(Pe(t)&&t.effect)}function q1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Qg(n.state.value[t]);return un(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=So(Ae(()=>{tr(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=If(t,c,e,n,s,!0),l}function If(t,e,n={},s,i,r){let o;const a=un({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Fe({});let w;function x(O){let W;c=u=!1,typeof O=="function"?(O(s.state.value[t]),W={type:_i.patchFunction,storeId:t,events:m}):(qa(s.state.value[t],O),W={type:_i.patchObject,payload:O,storeId:t,events:m});const J=w=Symbol();Pl().then(()=>{w===J&&(c=!0)}),u=!0,_s(d,W,s.state.value[t])}const A=r?function(){const{state:W}=n,J=W?W():{};this.$patch(pe=>{un(pe,J)})}:bf;function P(){o.stop(),d=[],h=[],s._s.delete(t)}function K(O,W){return function(){tr(s);const J=Array.from(arguments),pe=[],F=[];function ce(re){pe.push(re)}function qe(re){F.push(re)}_s(h,{args:J,name:O,store:Z,after:ce,onError:qe});let Ze;try{Ze=W.apply(this&&this.$id===t?this:Z,J)}catch(re){throw _s(F,re),re}return Ze instanceof Promise?Ze.then(re=>(_s(pe,re),re)).catch(re=>(_s(F,re),Promise.reject(re))):(_s(pe,Ze),Ze)}}const L={_p:s,$id:t,$onAction:Du.bind(null,h),$patch:x,$reset:A,$subscribe(O,W={}){const J=Du(d,O,W.detached,()=>pe()),pe=o.run(()=>In(()=>s.state.value[t],F=>{(W.flush==="sync"?u:c)&&O({storeId:t,type:_i.direct,events:m},F)},un({},l,W)));return J},$dispose:P},Z=Zi(L);s._s.set(t,Z);const ye=s._a&&s._a.runWithContext||B1,Ce=s._e.run(()=>(o=yh(),ye(()=>o.run(e))));for(const O in Ce){const W=Ce[O];if(Pe(W)&&!j1(W)||En(W))r||(_&&z1(W)&&(Pe(W)?W.value=_[O]:qa(W,_[O])),s.state.value[t][O]=W);else if(typeof W=="function"){const J=K(O,W);Ce[O]=J,a.actions[O]=W}}return un(Z,Ce),un(ie(Z),Ce),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:O=>{x(W=>{un(W,O)})}}),s._p.forEach(O=>{un(Z,o.run(()=>O({store:Z,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(Z.$state,_),c=!0,u=!0,Z}function K1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=F_();return a=a||(c?Mt(Ef,null):null),a&&tr(a),a=Cf,a._s.has(s)||(r?If(s,e,i,a):q1(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof window<"u";function G1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function oa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Tt(i)?i.map(t):t(i)}return n}const yi=()=>{},Tt=Array.isArray,Y1=/\/$/,Q1=t=>t.replace(Y1,"");function aa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=e0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function J1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function X1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ms(e.matched[s],n.matched[i])&&Tf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Z1(t[n],e[n]))return!1;return!0}function Z1(t,e){return Tt(t)?Lu(t,e):Tt(e)?Lu(e,t):t===e}function Lu(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function e0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var Hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hr||(Hr={}));const la="";function t0(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q1(t)}const n0=/^[^#]+#/;function s0(t,e){return t.replace(n0,"#")+e}function i0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const r0=()=>({left:window.pageXOffset,top:window.pageYOffset});function o0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=i0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fu(t,e){return(history.state?history.state.position-e:-1)+t}const Ka=new Map;function a0(t,e){Ka.set(t,e)}function l0(t){const e=Ka.get(t);return Ka.delete(t),e}function c0(t=""){let e=[],n=[la],s=0;t=t0(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:Fi.pop};for(const h of e)h(a,l,d)}const o={location:la,state:{},base:t,createHref:s0.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[la],s=0},go(a,l=!0){const c=this.location,u=a<0?Hr.back:Hr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function u0(t){return typeof t=="string"||t&&typeof t=="object"}function Sf(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kf=Symbol("");var $u;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($u||($u={}));function Ds(t,e){return Se(new Error,{type:t,[kf]:!0},e)}function Bt(t,e){return t instanceof Error&&kf in t&&(e==null||!!(t.type&e))}const Uu="[^/]+?",d0={sensitive:!1,strict:!1,start:!0,end:!0},h0=/[.+*?^${}()[\]/\\]/g;function f0(t,e){const n=Se({},d0,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(h0,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:w,optional:x,regexp:A}=h;r.push({name:_,repeatable:w,optional:x});const P=A||Uu;if(P!==Uu){m+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+L.message)}}let K=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(K=x&&c.length<2?`(?:/${K})`:"/"+K),x&&(K+="?"),i+=K,m+=20,x&&(m+=-8),w&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:w,optional:x}=m,A=_ in c?c[_]:"";if(Tt(A)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=Tt(A)?A.join("/"):A;if(!P)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function p0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function m0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=p0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Wu(s))return 1;if(Wu(i))return-1}return i.length-s.length}function Wu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const g0={type:0,value:""},_0=/[a-zA-Z0-9_]/;function y0(t){if(!t)return[[]];if(t==="/")return[[g0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:_0.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function v0(t,e,n){const s=f0(y0(t.path),n),i=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function w0(t,e){const n=[],s=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=C0(u);_.aliasOf=h&&h.record;const w=Hu(e,u),x=[_];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of K)x.push(Se({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_}))}let A,P;for(const K of x){const{path:L}=K;if(d&&L[0]!=="/"){const Z=d.record.path,ye=Z[Z.length-1]==="/"?"":"/";K.path=d.record.path+(L&&ye+L)}if(A=v0(K,d,w),h?h.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),m&&u.name&&!Bu(A)&&o(u.name)),_.children){const Z=_.children;for(let ye=0;ye<Z.length;ye++)r(Z[ye],A,h&&h.children[ye])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:yi}function o(u){if(Sf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&m0(u,n[d])>=0&&(u.record.path!==n[d].record.path||!xf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Bu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,w;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Ds(1,{location:u});w=h.record.name,m=Se(Vu(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Vu(u.params,h.keys.map(P=>P.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(P=>P.re.test(_)),h&&(m=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw Ds(1,{location:u,currentLocation:d});w=h.record.name,m=Se({},d.params,u.params),_=h.stringify(m)}const x=[];let A=h;for(;A;)x.unshift(A.record),A=A.parent;return{name:w,path:_,params:m,matched:x,meta:b0(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Vu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function C0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:E0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function E0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Bu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function b0(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Hu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function xf(t,e){return e.children.some(n=>n===t||xf(t,n))}const Rf=/#/g,I0=/&/g,T0=/\//g,S0=/=/g,k0=/\?/g,Af=/\+/g,x0=/%5B/g,R0=/%5D/g,Pf=/%5E/g,A0=/%60/g,Nf=/%7B/g,P0=/%7C/g,Of=/%7D/g,N0=/%20/g;function Bl(t){return encodeURI(""+t).replace(P0,"|").replace(x0,"[").replace(R0,"]")}function O0(t){return Bl(t).replace(Nf,"{").replace(Of,"}").replace(Pf,"^")}function Ga(t){return Bl(t).replace(Af,"%2B").replace(N0,"+").replace(Rf,"%23").replace(I0,"%26").replace(A0,"`").replace(Nf,"{").replace(Of,"}").replace(Pf,"^")}function M0(t){return Ga(t).replace(S0,"%3D")}function D0(t){return Bl(t).replace(Rf,"%23").replace(k0,"%3F")}function L0(t){return t==null?"":D0(t).replace(T0,"%2F")}function zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function F0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Af," "),o=r.indexOf("="),a=zr(o<0?r:r.slice(0,o)),l=o<0?null:zr(r.slice(o+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zu(t){let e="";for(let n in t){const s=t[n];if(n=M0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(r=>r&&Ga(r)):[s&&Ga(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function $0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const U0=Symbol(""),ju=Symbol(""),Hl=Symbol(""),Mf=Symbol(""),Ya=Symbol("");function ii(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ds(4,{from:n,to:e})):d instanceof Error?a(d):u0(d)?a(Ds(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function ca(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(W0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(fn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=G1(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&fn(h,n,s,r,o)()}))}}return i}function W0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qu(t){const e=Mt(Hl),n=Mt(Mf),s=Ae(()=>e.resolve(Ie(t.to))),i=Ae(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ms.bind(null,u));if(h>-1)return h;const m=Ku(l[c-2]);return c>1&&Ku(u)===m&&d[d.length-1].path!==m?d.findIndex(Ms.bind(null,l[c-2])):h}),r=Ae(()=>i.value>-1&&z0(n.params,s.value.params)),o=Ae(()=>i.value>-1&&i.value===n.matched.length-1&&Tf(n.params,s.value.params));function a(l={}){return H0(l)?e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(yi):Promise.resolve()}return{route:s,href:Ae(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const V0=qh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qu,setup(t,{slots:e}){const n=Zi(qu(t)),{options:s}=Mt(Hl),i=Ae(()=>({[Gu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Vl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),B0=V0;function H0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ku(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gu=(t,e,n)=>t??e??n,j0=qh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Ya),i=Ae(()=>t.route||s.value),r=Mt(ju,0),o=Ae(()=>{let c=Ie(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ae(()=>i.value.matched[o.value]);Rr(ju,Ae(()=>o.value+1)),Rr(U0,a),Rr(Ya,i);const l=Fe();return In(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Ms(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Yu(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=Vl(h,Se({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Yu(n.default,{Component:x,route:c})||x}}});function Yu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Df=j0;function q0(t){const e=w0(t.routes,t),n=t.parseQuery||F0,s=t.stringifyQuery||zu,i=t.history,r=ii(),o=ii(),a=ii(),l=Kg(an);let c=an;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oa.bind(null,v=>""+v),d=oa.bind(null,L0),h=oa.bind(null,zr);function m(v,M){let k,V;return Sf(v)?(k=e.getRecordMatcher(v),V=M):V=v,e.addRoute(V,k)}function _(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function A(v,M){if(M=Se({},M||l.value),typeof v=="string"){const g=aa(n,v,M.path),y=e.resolve({path:g.path},M),C=i.createHref(g.fullPath);return Se(g,y,{params:h(y.params),hash:zr(g.hash),redirectedFrom:void 0,href:C})}let k;if("path"in v)k=Se({},v,{path:aa(n,v.path,M.path).path});else{const g=Se({},v.params);for(const y in g)g[y]==null&&delete g[y];k=Se({},v,{params:d(g)}),M.params=d(M.params)}const V=e.resolve(k,M),de=v.hash||"";V.params=u(h(V.params));const f=J1(s,Se({},v,{hash:O0(de),path:V.path})),p=i.createHref(f);return Se({fullPath:f,hash:de,query:s===zu?$0(v.query):v.query||{}},V,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?aa(n,v,l.value.path):Se({},v)}function K(v,M){if(c!==v)return Ds(8,{from:M,to:v})}function L(v){return Ce(v)}function Z(v){return L(Se(P(v),{replace:!0}))}function ye(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let V=typeof k=="function"?k(v):k;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),Se({query:v.query,hash:v.hash,params:"path"in V?{}:v.params},V)}}function Ce(v,M){const k=c=A(v),V=l.value,de=v.state,f=v.force,p=v.replace===!0,g=ye(k);if(g)return Ce(Se(P(g),{state:typeof g=="object"?Se({},de,g.state):de,force:f,replace:p}),M||k);const y=k;y.redirectedFrom=M;let C;return!f&&X1(s,V,k)&&(C=Ds(16,{to:y,from:V}),kt(V,V,!0,!1)),(C?Promise.resolve(C):J(y,V)).catch(E=>Bt(E)?Bt(E,2)?E:sn(E):ue(E,y,V)).then(E=>{if(E){if(Bt(E,2))return Ce(Se({replace:p},P(E.to),{state:typeof E.to=="object"?Se({},de,E.to.state):de,force:f}),M||y)}else E=F(y,V,!0,p,de);return pe(y,V,E),E})}function O(v,M){const k=K(v,M);return k?Promise.reject(k):Promise.resolve()}function W(v){const M=ps.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function J(v,M){let k;const[V,de,f]=K0(v,M);k=ca(V.reverse(),"beforeRouteLeave",v,M);for(const g of V)g.leaveGuards.forEach(y=>{k.push(fn(y,v,M))});const p=O.bind(null,v,M);return k.push(p),Ge(k).then(()=>{k=[];for(const g of r.list())k.push(fn(g,v,M));return k.push(p),Ge(k)}).then(()=>{k=ca(de,"beforeRouteUpdate",v,M);for(const g of de)g.updateGuards.forEach(y=>{k.push(fn(y,v,M))});return k.push(p),Ge(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(Tt(g.beforeEnter))for(const y of g.beforeEnter)k.push(fn(y,v,M));else k.push(fn(g.beforeEnter,v,M));return k.push(p),Ge(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=ca(f,"beforeRouteEnter",v,M),k.push(p),Ge(k))).then(()=>{k=[];for(const g of o.list())k.push(fn(g,v,M));return k.push(p),Ge(k)}).catch(g=>Bt(g,8)?g:Promise.reject(g))}function pe(v,M,k){a.list().forEach(V=>W(()=>V(v,M,k)))}function F(v,M,k,V,de){const f=K(v,M);if(f)return f;const p=M===an,g=vs?history.state:{};k&&(V||p?i.replace(v.fullPath,Se({scroll:p&&g&&g.scroll},de)):i.push(v.fullPath,de)),l.value=v,kt(v,M,k,p),sn()}let ce;function qe(){ce||(ce=i.listen((v,M,k)=>{if(!gr.listening)return;const V=A(v),de=ye(V);if(de){Ce(Se(de,{replace:!0}),V).catch(yi);return}c=V;const f=l.value;vs&&a0(Fu(f.fullPath,k.delta),r0()),J(V,f).catch(p=>Bt(p,12)?p:Bt(p,2)?(Ce(p.to,V).then(g=>{Bt(g,20)&&!k.delta&&k.type===Fi.pop&&i.go(-1,!1)}).catch(yi),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ue(p,V,f))).then(p=>{p=p||F(V,f,!1),p&&(k.delta&&!Bt(p,8)?i.go(-k.delta,!1):k.type===Fi.pop&&Bt(p,20)&&i.go(-1,!1)),pe(V,f,p)}).catch(yi)}))}let Ze=ii(),re=ii(),me;function ue(v,M,k){sn(v);const V=re.list();return V.length?V.forEach(de=>de(v,M,k)):console.error(v),Promise.reject(v)}function Vt(){return me&&l.value!==an?Promise.resolve():new Promise((v,M)=>{Ze.add([v,M])})}function sn(v){return me||(me=!v,qe(),Ze.list().forEach(([M,k])=>v?k(v):M()),Ze.reset()),v}function kt(v,M,k,V){const{scrollBehavior:de}=t;if(!vs||!de)return Promise.resolve();const f=!k&&l0(Fu(v.fullPath,0))||(V||!k)&&history.state&&history.state.scroll||null;return Pl().then(()=>de(v,M,f)).then(p=>p&&o0(p)).catch(p=>ue(p,v,M))}const st=v=>i.go(v);let fs;const ps=new Set,gr={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:x,getRoutes:w,resolve:A,options:t,push:L,replace:Z,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:Vt,install(v){const M=this;v.component("RouterLink",B0),v.component("RouterView",Df),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(l)}),vs&&!fs&&l.value===an&&(fs=!0,L(i.location).catch(de=>{}));const k={};for(const de in an)Object.defineProperty(k,de,{get:()=>l.value[de],enumerable:!0});v.provide(Hl,M),v.provide(Mf,Ah(k)),v.provide(Ya,l);const V=v.unmount;ps.add(v),v.unmount=function(){ps.delete(v),ps.size<1&&(c=an,ce&&ce(),ce=null,l.value=an,fs=!1,me=!1),V()}}};function Ge(v){return v.reduce((M,k)=>M.then(()=>W(k)),Promise.resolve())}return gr}function K0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ms(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ms(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw qs(e)},qs=function(t){return new Error("Firebase Database ("+Lf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Y0;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $f=function(t){const e=Ff(t);return zl.encodeByteArray(e,!0)},jr=function(t){return $f(t).replace(/\./g,"")},qr=function(t){try{return zl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return Uf(void 0,t)}function Uf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!J0(n)||(t[n]=Uf(t[n],e[n]));return t}function J0(t){return t!=="__proto__"}/**
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
 */function X0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Z0=()=>X0().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ty=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qr(t[1]);return e&&JSON.parse(e)},jl=()=>{try{return Z0()||ey()||ty()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wf=t=>{var e,n;return(n=(e=jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ny=t=>{const e=Wf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Vf=()=>{var t;return(t=jl())===null||t===void 0?void 0:t.config},Bf=t=>{var e;return(e=jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jr(JSON.stringify(n)),jr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ql(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zf(){return Lf.NODE_ADMIN===!0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ly,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,s)}}function cy(t,e){return t.replace(uy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const uy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$i(qr(r[0])||""),n=$i(qr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},dy=function(t){const e=jf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hy=function(t){const e=jf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Qu(r)&&Qu(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Qu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function py(t,e){const n=new my(t,e);return n.subscribe.bind(n)}class my{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Kl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class yy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wy(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vy(t){return t===Bn?void 0:t}function wy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Ey={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},by=fe.INFO,Iy={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Ty=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Iy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=by,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Sy=(t,e)=>e.some(n=>t instanceof n);let Ju,Xu;function ky(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xy(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qf=new WeakMap,Ja=new WeakMap,Kf=new WeakMap,da=new WeakMap,Yl=new WeakMap;function Ry(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qf.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function Ay(t){if(Ja.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ja.set(t,e)}let Xa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ja.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Py(t){Xa=t(Xa)}function Ny(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ha(this),e,...n);return Kf.set(s,e.sort?e.sort():[e]),Tn(s)}:xy().includes(t)?function(...e){return t.apply(ha(this),e),Tn(qf.get(this))}:function(...e){return Tn(t.apply(ha(this),e))}}function Oy(t){return typeof t=="function"?Ny(t):(t instanceof IDBTransaction&&Ay(t),Sy(t,ky())?new Proxy(t,Xa):t)}function Tn(t){if(t instanceof IDBRequest)return Ry(t);if(da.has(t))return da.get(t);const e=Oy(t);return e!==t&&(da.set(t,e),Yl.set(e,t)),e}const ha=t=>Yl.get(t);function My(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Tn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dy=["get","getKey","getAll","getAllKeys","count"],Ly=["put","add","delete","clear"],fa=new Map;function Zu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ly.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Dy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fa.set(e,r),r}Py(t=>({...t,get:(e,n,s)=>Zu(e,n)||t.get(e,n,s),has:(e,n)=>!!Zu(e,n)||t.has(e,n)}));/**
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
 */class Fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($y(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $y(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",ed="0.9.15";/**
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
 */const is=new Gl("@firebase/app"),Uy="@firebase/app-compat",Wy="@firebase/analytics-compat",Vy="@firebase/analytics",By="@firebase/app-check-compat",Hy="@firebase/app-check",zy="@firebase/auth",jy="@firebase/auth-compat",qy="@firebase/database",Ky="@firebase/database-compat",Gy="@firebase/functions",Yy="@firebase/functions-compat",Qy="@firebase/installations",Jy="@firebase/installations-compat",Xy="@firebase/messaging",Zy="@firebase/messaging-compat",ev="@firebase/performance",tv="@firebase/performance-compat",nv="@firebase/remote-config",sv="@firebase/remote-config-compat",iv="@firebase/storage",rv="@firebase/storage-compat",ov="@firebase/firestore",av="@firebase/firestore-compat",lv="firebase",cv="10.1.0";/**
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
 */const el="[DEFAULT]",uv={[Za]:"fire-core",[Uy]:"fire-core-compat",[Vy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Hy]:"fire-app-check",[By]:"fire-app-check-compat",[zy]:"fire-auth",[jy]:"fire-auth-compat",[qy]:"fire-rtdb",[Ky]:"fire-rtdb-compat",[Gy]:"fire-fn",[Yy]:"fire-fn-compat",[Qy]:"fire-iid",[Jy]:"fire-iid-compat",[Xy]:"fire-fcm",[Zy]:"fire-fcm-compat",[ev]:"fire-perf",[tv]:"fire-perf-compat",[nv]:"fire-rc",[sv]:"fire-rc-compat",[iv]:"fire-gcs",[rv]:"fire-gcs-compat",[ov]:"fire-fst",[av]:"fire-fst-compat","fire-js":"fire-js",[lv]:"fire-js-all"};/**
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
 */const Yr=new Map,tl=new Map;function dv(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(tl.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;tl.set(e,t);for(const n of Yr.values())dv(n,t);return!0}function Ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new nr("app","Firebase",hv);/**
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
 */class fv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=cv;function Gf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:el,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=Vf()),!n)throw Sn.create("no-options");const r=Yr.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw Sn.create("duplicate-app",{appName:i})}const o=new Cy(i);for(const l of tl.values())o.addComponent(l);const a=new fv(n,s,o);return Yr.set(i,a),a}function Yf(t=el){const e=Yr.get(t);if(!e&&t===el&&Vf())return Gf();if(!e)throw Sn.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let i=(s=uv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}Fs(new ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pv="firebase-heartbeat-database",mv=1,Ui="firebase-heartbeat-store";let pa=null;function Qf(){return pa||(pa=My(pv,mv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function gv(t){try{return await(await Qf()).transaction(Ui).objectStore(Ui).get(Jf(t))}catch(e){if(e instanceof Fn)is.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function td(t,e){try{const s=(await Qf()).transaction(Ui,"readwrite");await s.objectStore(Ui).put(e,Jf(t)),await s.done}catch(n){if(n instanceof Fn)is.warn(n.message);else{const s=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(s.message)}}}function Jf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _v=1024,yv=30*24*60*60*1e3;class vv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=yv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:s}=wv(this._heartbeatsCache.heartbeats),i=jr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nd(){return new Date().toISOString().substring(0,10)}function wv(t,e=_v){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Cv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sd(t){return jr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ev(t){Fs(new ss("platform-logger",e=>new Fy(e),"PRIVATE")),Fs(new ss("heartbeat",e=>new vv(e),"PRIVATE")),kn(Za,ed,t),kn(Za,ed,"esm2017"),kn("fire-js","")}Ev("");var bv="firebase",Iv="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(bv,Iv,"app");const Tv={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},Xf=Gf(Tv);function Jl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sv=Zf,ep=new nr("auth","Firebase",Zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Gl("@firebase/auth");function kv(t,...e){Qr.logLevel<=fe.WARN&&Qr.warn(`Auth (${Gs}): ${t}`,...e)}function Nr(t,...e){Qr.logLevel<=fe.ERROR&&Qr.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw Xl(t,...e)}function Dt(t,...e){return Xl(t,...e)}function xv(t,e,n){const s=Object.assign(Object.assign({},Sv()),{[e]:n});return new nr("auth","Firebase",s).create(e,{appName:t.name})}function Xl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ep.create(t,...e)}function G(t,e,...n){if(!t)throw Xl(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function Xt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rv(){return id()==="http:"||id()==="https:"}function id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rv()||iy()||"connection"in navigator)?navigator.onLine:!0}function Pv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=ql()||Hf()}get(){return Av()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new sr(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ys(t,e,n,s,i={}){return np(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tp.fetch()(sp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function np(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Nv),e);try{const i=new Mv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ir(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ir(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ir(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xv(t,u,c);St(t,u)}}catch(i){if(i instanceof Fn)throw i;St(t,"network-request-failed",{message:String(i)})}}async function $o(t,e,n,s,i={}){const r=await Ys(t,e,n,s,i);return"mfaPendingCredential"in r&&St(t,"multi-factor-auth-required",{_serverResponse:r}),r}function sp(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Zl(t.config,i):`${t.config.apiScheme}://${i}`}class Mv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),Ov.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ir(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Dt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e){return Ys(t,"POST","/v1/accounts:delete",e)}async function Lv(t,e){return Ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fv(t,e=!1){const n=ut(t),s=await n.getIdToken(e),i=ec(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:vi(ma(i.auth_time)),issuedAtTime:vi(ma(i.iat)),expirationTime:vi(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function ec(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=qr(n);return i?JSON.parse(i):(Nr("Failed to decode base64 JWT payload"),null)}catch(i){return Nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $v(t){const e=ec(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&Uv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Uv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wi(t,Lv(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hv(r.providerUserInfo):[],a=Bv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ip(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Vv(t){const e=ut(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hv(t){return t.map(e=>{var{providerId:n}=e,s=Jl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(t,e){const n=await np(t,{},async()=>{const s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=sp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ts{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ip(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fv(this,e)}reload(){return Vv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,Dv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:L,isAnonymous:Z,providerData:ye,stsTokenManager:Ce}=n;G(K&&Ce,e,"internal-error");const O=Vi.fromJSON(this.name,Ce);G(typeof K=="string",e,"internal-error"),ln(d,e.name),ln(h,e.name),G(typeof L=="boolean",e,"internal-error"),G(typeof Z=="boolean",e,"internal-error"),ln(m,e.name),ln(_,e.name),ln(w,e.name),ln(x,e.name),ln(A,e.name),ln(P,e.name);const W=new ts({uid:K,auth:e,email:h,emailVerified:L,displayName:d,isAnonymous:Z,photoURL:_,phoneNumber:m,tenantId:w,stsTokenManager:O,createdAt:A,lastLoginAt:P});return ye&&Array.isArray(ye)&&(W.providerData=ye.map(J=>Object.assign({},J))),x&&(W._redirectEventId=x),W}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vi;i.updateFromServerResponse(n);const r=new ts({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Jr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;function qt(t){Xt(t instanceof Function,"Expected a class definition");let e=rd.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rd.set(t,e),e)}/**
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rp.type="NONE";const od=rp;/**
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
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Or(this.userKey,i.apiKey,r),this.fullPersistenceKey=Or("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ks(qt(od),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||qt(od);const o=Or(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ts._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ks(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ks(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(up(e))return"Blackberry";if(dp(e))return"Webos";if(tc(e))return"Safari";if((e.includes("chrome/")||ap(e))&&!e.includes("edge/"))return"Chrome";if(cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function op(t=Xe()){return/firefox\//i.test(t)}function tc(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ap(t=Xe()){return/crios\//i.test(t)}function lp(t=Xe()){return/iemobile/i.test(t)}function cp(t=Xe()){return/android/i.test(t)}function up(t=Xe()){return/blackberry/i.test(t)}function dp(t=Xe()){return/webos/i.test(t)}function Uo(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jv(t=Xe()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qv(){return ry()&&document.documentMode===10}function hp(t=Xe()){return Uo(t)||cp(t)||dp(t)||up(t)||/windows phone/i.test(t)||lp(t)}function Kv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e=[]){let n;switch(t){case"Browser":n=ad(Xe());break;case"Worker":n=`${ad(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}async function pp(t,e){return Ys(t,"GET","/v2/recaptchaConfig",ir(t,e))}function ld(t){return t!==void 0&&t.enterprise!==void 0}class mp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Dt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Gv().appendChild(s)})}function Yv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qv="https://www.google.com/recaptcha/enterprise.js?render=",Jv="recaptcha-enterprise",Xv="NO_RECAPTCHA";class _p{constructor(e){this.type=Jv,this.auth=rr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{pp(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new mp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Xv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&ld(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gp(Qv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cd(t,e,n,s=!1){const i=new _p(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Zv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new Zv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}async initializeRecaptchaConfig(){const e=await pp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new _p(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return ut(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=py(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){const n=Ql(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Gr(r,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function n2(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function s2(t,e,n){const s=rr(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=yp(e),{host:o,port:a}=i2(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||r2()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i2(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:dd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:dd(o)}}}function dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function r2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function o2(t,e){return Ys(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function l2(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends nc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Bi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await cd(e,s,"signInWithPassword");return ga(e,i)}else return ga(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await cd(e,s,"signInWithPassword");return ga(e,r)}else return Promise.reject(i)});case"emailLink":return a2(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return o2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return l2(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="http://localhost";class rs extends nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Jl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new rs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d2(t){const e=di(hi(t)).link,n=e?di(hi(e)).deep_link_id:null,s=di(hi(t)).deep_link_id;return(s?di(hi(s)).link:null)||s||n||e||t}class sc{constructor(e){var n,s,i,r,o,a;const l=di(hi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=u2((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=d2(e);try{return new sc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=sc.parseLink(n);return G(s,"argument-error"),Bi._fromEmailAndCode(e,s.code,s.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class or extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends or{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends or{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends or{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ts._fromIdTokenResponse(e,s,i),o=hd(s);return new $s({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=hd(s);return new $s({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Fn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Xr(e,n,s,i)}}function wp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(t,r,e,s):r})}async function h2(t,e,n=!1){const s=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",s)}/**
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
 */async function f2(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wi(t,wp(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=ec(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),$s._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&St(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(t,e,n=!1){const s="signIn",i=await wp(t,s,e),r=await $s._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function p2(t,e){return Cp(rr(t),e)}function m2(t,e,n){return p2(ut(t),Qs.credential(e,n))}function g2(t,e,n,s){return ut(t).onIdTokenChanged(e,n,s)}function _2(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function y2(t,e,n,s){return ut(t).onAuthStateChanged(e,n,s)}const Zr="__sak";/**
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
 */class Ep{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){const t=Xe();return tc(t)||Uo(t)}const w2=1e3,C2=10;class bp extends Ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=v2()&&Kv(),this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);qv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,C2):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},w2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bp.type="LOCAL";const E2=bp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends Ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ip.type="SESSION";const Tp=Ip;/**
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
 */function b2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Wo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await b2(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class I2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ic("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function T2(t){Lt().location.href=t}/**
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
 */function Sp(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function S2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x2(){return Sp()?self:null}/**
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
 */const kp="firebaseLocalStorageDb",R2=1,eo="firebaseLocalStorage",xp="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function A2(){const t=indexedDB.deleteDatabase(kp);return new ar(t).toPromise()}function sl(){const t=indexedDB.open(kp,R2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(eo,{keyPath:xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(eo)?e(s):(s.close(),await A2(),e(await sl()))})})}async function fd(t,e,n){const s=Vo(t,!0).put({[xp]:e,value:n});return new ar(s).toPromise()}async function P2(t,e){const n=Vo(t,!1).get(e),s=await new ar(n).toPromise();return s===void 0?null:s.value}function pd(t,e){const n=Vo(t,!0).delete(e);return new ar(n).toPromise()}const N2=800,O2=3;class Rp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>O2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(x2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S2(),!this.activeServiceWorker)return;this.sender=new I2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await fd(e,Zr,"1"),await pd(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>P2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Vo(i,!1).getAll();return new ar(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rp.type="LOCAL";const M2=Rp;new sr(3e4,6e4);/**
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
 */function D2(t,e){return e?qt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rc extends nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L2(t){return Cp(t.auth,new rc(t),t.bypassAuthState)}function F2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),f2(n,new rc(t),t.bypassAuthState)}async function $2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),h2(n,new rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L2;case"linkViaPopup":case"linkViaRedirect":return $2;case"reauthViaPopup":case"reauthViaRedirect":return F2;default:St(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new sr(2e3,1e4);class Cs extends Ap{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U2.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="pendingRedirect",Mr=new Map;class V2 extends Ap{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const s=await B2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B2(t,e){const n=j2(e),s=z2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function H2(t,e){Mr.set(t._key(),e)}function z2(t){return qt(t._redirectPersistence)}function j2(t){return Or(W2,t.config.apiKey,t.name)}async function q2(t,e,n=!1){const s=rr(t),i=D2(s,e),o=await new V2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=10*60*1e3;class G2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K2&&this.cachedEventUids.clear(),this.cachedEventUids.has(md(e))}saveEventToCache(e){this.cachedEventUids.add(md(e)),this.lastProcessedEventTime=Date.now()}}function md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(t,e={}){return Ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X2=/^https?/;async function Z2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q2(t);for(const n of e)try{if(ew(n))return}catch{}St(t,"unauthorized-domain")}function ew(t){const e=nl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!X2.test(n))return!1;if(J2.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const tw=new sr(3e4,6e4);function gd(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nw(t){return new Promise((e,n)=>{var s,i,r;function o(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),n(Dt(t,"network-request-failed"))},timeout:tw.get()})}if(!((i=(s=Lt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Lt().gapi)===null||r===void 0)&&r.load)o();else{const a=Yv("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Dr=null,e})}let Dr=null;function sw(t){return Dr=Dr||nw(t),Dr}/**
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
 */const iw=new sr(5e3,15e3),rw="__/auth/iframe",ow="emulator/auth/iframe",aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zl(e,ow):`https://${t.config.authDomain}/${rw}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},i=lw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ks(s).slice(1)}`}async function uw(t){const e=await sw(t),n=Lt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:cw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Lt().setTimeout(()=>{r(o)},iw.get());function l(){Lt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hw=500,fw=600,pw="_blank",mw="http://localhost";class _d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gw(t,e,n,s=hw,i=fw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Xe().toLowerCase();n&&(a=ap(c)?pw:n),op(c)&&(e=e||mw,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(jv(c)&&a!=="_self")return _w(e||"",a),new _d(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new _d(d)}function _w(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const yw="__/auth/handler",vw="emulator/auth/handler",ww=encodeURIComponent("fac");async function yd(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:i};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof or){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ww}=${encodeURIComponent(l)}`:"";return`${Cw(t)}?${Ks(a).slice(1)}${c}`}function Cw({config:t}){return t.emulator?Zl(t,vw):`https://${t.authDomain}/${yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class Ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=q2,this._overrideRedirectResult=H2}async _openPopup(e,n,s,i){var r;Xt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await yd(e,n,s,nl(),i);return gw(e,o,ic())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await yd(e,n,s,nl(),i);return T2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await uw(e),s=new G2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_a];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hp()||tc()||Uo()}}const bw=Ew;var vd="@firebase/auth",wd="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sw(t){Fs(new ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(t)},c=new e2(s,i,r,l);return n2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fs(new ss("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(s=>new Iw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(vd,wd,Tw(t)),kn(vd,wd,"esm2017")}/**
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
 */const kw=5*60,xw=Bf("authIdTokenMaxAge")||kw;let Cd=null;const Rw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xw)return;const i=n==null?void 0:n.token;Cd!==i&&(Cd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Aw(t=Yf()){const e=Ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t2(t,{popupRedirectResolver:bw,persistence:[M2,E2,Tp]}),s=Bf("authTokenSyncURL");if(s){const r=Rw(s);_2(n,r,()=>r(n.currentUser)),g2(n,o=>r(o))}const i=Wf("auth");return i&&s2(n,`http://${i}`),n}Sw("Browser");const oc=Aw(Xf),to=Fe({}),dn=Fe({}),ac=new Fe(!1);y2(oc,async t=>{if(t){to.value=t,dn.value=await Bb(`users/${t.uid}`);for(const{observable:e,path:n}of Jm)if(dn.value["game-data"]&&dn.value["game-data"]["tileswap-naenae"]&&dn.value["game-data"]["tileswap-naenae"][n]){const s=dn.value["game-data"]["tileswap-naenae"][n];typeof s=="object"&&!Array.isArray(s)?e.value={...e.value,...s}:e.value=dn.value["game-data"]["tileswap-naenae"][n]}}else to.value={},dn.value={};ac.value=!0});const Bo=Ae(()=>to.value);Ae(()=>dn.value);const lr=Ae(()=>Object.keys(to.value).length>0),Pw=async(t,e)=>await m2(oc,t,e),il=async()=>await oc.signOut(),Ed="@firebase/database",bd="1.0.1";/**
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
 */let Np="";function Nw(t){Np=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$i(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ow(e)}}catch{}return new Mw},Yn=Op("localStorage"),rl=Op("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Gl("@firebase/database"),Dw=function(){let t=1;return function(){return t++}}(),Mp=function(t){const e=_y(t),n=new fy;n.update(e);const s=n.digest();return zl.encodeByteArray(s)},cr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cr.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let ns=null,Id=!0;const Lw=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Rs.logLevel=fe.VERBOSE,ns=Rs.log.bind(Rs),e&&rl.set("logging_enabled",!0)):typeof t=="function"?ns=t:(ns=null,rl.remove("logging_enabled"))},Ye=function(...t){if(Id===!0&&(Id=!1,ns===null&&rl.get("logging_enabled")===!0&&Lw(!0)),ns){const e=cr.apply(null,t);ns(e)}},ur=function(t){return function(...e){Ye(t,...e)}},ol=function(...t){const e="FIREBASE INTERNAL ERROR: "+cr(...t);Rs.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${cr(...t)}`;throw Rs.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+cr(...t);Rs.warn(e)},Fw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$w=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Us="[MIN_NAME]",os="[MAX_NAME]",Js=function(t,e){if(t===e)return 0;if(t===Us||e===os)return-1;if(e===Us||t===os)return 1;{const n=Td(t),s=Td(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Uw=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},lc=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=lc(t[e[s]]);return n+="}",n},Lp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fp=function(t){T(!Dp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Ww=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Bw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Hw=new RegExp("^-?(0*)\\d{1,10}$"),zw=-2147483648,jw=2147483647,Td=function(t){if(Hw.test(t)){const e=Number(t);if(e>=zw&&e<=jw)return e}return null},Xs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},qw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Kw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="5",$p="v",Up="s",Wp="r",Vp="f",Bp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hp="ls",zp="p",al="ac",jp="websocket",qp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Yw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===jp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yw(t)&&(n.ns=t.namespace);const i=[];return ct(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={},va={};function uc(t){const e=t.toString();return ya[e]||(ya[e]=new Qw),ya[e]}function Jw(t,e){const n=t.toString();return va[n]||(va[n]=e()),va[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="start",Zw="close",eC="pLPCommand",tC="pRTLPCB",Yp="id",Qp="pw",Jp="ser",nC="cb",sC="seg",iC="ts",rC="d",oC="dframe",Xp=1870,Zp=30,aC=Xp-Zp,lC=25e3,cC=3e4;class Es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ur(e),this.stats_=uc(n),this.urlFn=l=>(this.appCheckToken&&(l[al]=this.appCheckToken),Gp(n,qp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cC)),$w(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sd)this.id=a,this.password=l;else if(o===Zw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sd]="t",s[Jp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[nC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$p]=cc,this.transportSessionId&&(s[Up]=this.transportSessionId),this.lastSessionId&&(s[Hp]=this.lastSessionId),this.applicationId&&(s[zp]=this.applicationId),this.appCheckToken&&(s[al]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bp.test(location.hostname)&&(s[Wp]=Vp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ww()&&!Vw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$f(n),i=Lp(s,aC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[oC]="t",s[Yp]=e,s[Qp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Dw(),window[eC+this.uniqueCallbackIdentifier]=e,window[tC+this.uniqueCallbackIdentifier]=n,this.myIFrame=dc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yp]=this.myID,e[Qp]=this.myPW,e[Jp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zp+s.length<=Xp;){const o=this.pendingSegs.shift();s=s+"&"+sC+i+"="+o.seg+"&"+iC+i+"="+o.ts+"&"+rC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(lC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=16384,dC=45e3;let no=null;typeof MozWebSocket<"u"?no=MozWebSocket:typeof WebSocket<"u"&&(no=WebSocket);class vt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ur(this.connId),this.stats_=uc(n),this.connURL=vt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[$p]=cc,typeof location<"u"&&location.hostname&&Bp.test(location.hostname)&&(o[Wp]=Vp),n&&(o[Up]=n),s&&(o[Hp]=s),i&&(o[al]=i),r&&(o[zp]=r),Gp(e,jp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let s;zf(),this.mySock=new no(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&no!==null&&!vt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$i(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lp(n,uC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let s=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vt];else{const i=this.transports_=[];for(const r of Hi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=6e4,fC=5e3,pC=10*1024,mC=100*1024,wa="t",kd="d",gC="s",xd="r",_C="e",Rd="o",Ad="a",Pd="n",Nd="p",yC="h";class vC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ur("c:"+this.id+":"),this.transportManager_=new Hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wa in e){const n=e[wa];n===Ad?this.upgradeIfSecondaryHealthy_():n===xd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ad,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(wa,e);if(kd in e){const s=e[kd];if(n===yC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gC?this.onConnectionShutdown_(s):n===xd?this.onReset_(s):n===_C?ol("Server Error: "+s):n===Rd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ol("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cc!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends tm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ql()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new so}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=32,Md=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new _e("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function nm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function im(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new _e(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return tt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rm(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ct(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class CC{constructor(e,n){this.errorPrefix_=n,this.parts_=sm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fo(this.parts_[s]);om(this)}}function EC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fo(e),om(t)}function bC(t){const e=t.parts_.pop();t.byteLength_-=Fo(e),t.parts_.length>0&&(t.byteLength_-=1)}function om(t){if(t.byteLength_>Md)throw new Error(t.errorPrefix_+"has a key path longer than "+Md+" bytes ("+t.byteLength_+").");if(t.parts_.length>Od)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Od+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends tm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new hc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,IC=60*5*1e3,Dd=30*1e3,TC=1.3,SC=3e4,kC="server_kill",Ld=3;class Yt extends em{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=IC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&so.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ue(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Lo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const s=Ls(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ol("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SC&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new vC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{ot(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(kC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ot(d),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qa(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>lc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ld&&(this.reconnectDelay_=Dd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ld&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Np.replace(/\./g,"-")]=1,ql()?e["framework.cordova"]=1:Hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=so.getInstance().currentlyOnline();return Qa(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ho{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Us,e),i=new ee(Us,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class am extends Ho{static get __EMPTY_NODE(){return Tr}static set __EMPTY_NODE(e){Tr=e}compare(e,n){return Js(e.name,n.name)}isDefinedOn(e){throw qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(os,Tr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Tr)}toString(){return".key"}}const Ps=new am;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Be.RED,this.left=i??rt.EMPTY_NODE,this.right=r??rt.EMPTY_NODE}copy(e,n,s,i,r){return new Be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class xC{copy(e,n,s,i,r){return this}insert(e,n,s){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sr(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new xC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t,e){return Js(t.name,e.name)}function fc(t,e){return Js(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;function AC(t){ll=t}const lm=function(t){return typeof t=="number"?"number:"+Fp(t):"string:"+t},cm=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else T(t===ll||t.isEmpty(),"priority of unexpected type.");T(t===ll||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cm(this.priorityNode_)}static set __childrenNodeConstructor(e){Fd=e}static get __childrenNodeConstructor(){return Fd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fp(this.value_):e+=this.value_,this.lazyHash_=Mp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),r=Ve.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let um,dm;function PC(t){um=t}function NC(t){dm=t}class OC extends Ho{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Js(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(os,new Ve("[PRIORITY-POST]",dm))}makePost(e,n){const s=um(e);return new ee(n,new Ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const Re=new OC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=Math.log(2);class DC{constructor(e){const n=r=>parseInt(Math.log(r)/MC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const io=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Be(h,d.node,Be.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),w=i(m+1,c);return d=t[m],h=n?n(d):d,new Be(h,d.node,Be.BLACK,_,w)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,w){const x=d-_,A=d;d-=_;const P=i(x+1,A),K=t[x],L=n?n(K):K;m(new Be(L,K.node,w,null,P))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));w?h(x,Be.BLACK):(h(x,Be.BLACK),h(x,Be.RED))}return u},o=new DC(t.length),a=r(o);return new rt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca;const ys={};class Kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ys&&Re,"ChildrenNode.ts has not been loaded"),Ca=Ca||new Kt({".priority":ys},{".priority":Re}),Ca}get(e){const n=Ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=io(s,e.getCompare()):a=ys;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kt(u,c)}addToIndexes(e,n){const s=Kr(this.indexes_,(i,r)=>{const o=Ls(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ys)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),io(a,o.getCompare())}else return ys;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Kt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Kr(this.indexes_,i=>{if(i===ys)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Kt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cm(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ai||(ai=new q(new rt(fc),null,Kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ai:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{T(se(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(we(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Re,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lm(this.getPriority().val())+":"),this.forEachChild(Re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Mp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===dr?-1:0}withIndex(e){if(e===Ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Re),i=n.getIterator(Re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ps?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LC extends q{constructor(){super(new rt(fc),q.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const dr=new LC;Object.defineProperties(ee,{MIN:{value:new ee(Us,q.EMPTY_NODE)},MAX:{value:new ee(os,dr)}});am.__EMPTY_NODE=q.EMPTY_NODE;Ve.__childrenNodeConstructor=q;AC(dr);NC(dr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=!0;function He(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,He(e))}if(!(t instanceof Array)&&FC){const n=[];let s=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=io(n,RC,o=>o.name,fc);if(s){const o=io(n,Re.getCompare());return new q(r,He(e),new Kt({".priority":o},{".priority":Re}))}else return new q(r,He(e),Kt.Default)}else{let n=q.EMPTY_NODE;return ct(t,(s,i)=>{if(tn(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}PC(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C extends Ho{constructor(e){super(),this.indexPath_=e,T(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Js(e.name,n.name):r}makePost(e,n){const s=He(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,dr);return new ee(os,e)}toString(){return sm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC extends Ho{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Js(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=He(e);return new ee(n,s)}toString(){return".value"}}const WC=new UC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ji(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(zi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,s)):o.trackChildChange(ji(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Re,(i,r)=>{n.hasChild(i)||s.trackChildChange(zi(i,r))}),n.isLeafNode()||n.forEachChild(Re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ji(i,r,o))}else s.trackChildChange(Ws(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.indexedFilter_=new pc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qi.getStartPost_(e),this.endPost_=qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Re,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(ji(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(zi(n,d));const w=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ws(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(zi(c.name,c.node)),r.trackChildChange(Ws(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:os}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new mc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HC(t){return t.loadsAllData()?new pc(t.getIndex()):t.hasLimit()?new BC(t):new qi(t)}function $d(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===WC?n="$value":t.index_===Ps?n="$key":(T(t.index_ instanceof $C,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ud(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends em{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ur("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ro.getListenId_(e,s),a={};this.listens_[o]=a;const l=$d(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ls(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=ro.getListenId_(e,n);delete this.listens_[s]}get(e){const n=$d(e._queryParams),s=e._path.toString(),i=new Lo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$i(a.responseText)}catch{ot("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return{value:null,children:new Map}}function fm(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,oo());const i=t.children.get(s);e=we(e),fm(i,e,n)}}function cl(t,e,n){t.value!==null?n(e,t.value):jC(t,(s,i)=>{const r=new _e(e.toString()+"/"+s);cl(i,r,n)})}function jC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=10*1e3,KC=30*1e3,GC=5*60*1e3;class YC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qC(e);const s=Wd+(KC-Wd)*Math.random();wi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ct(e,(i,r)=>{r>0&&tn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*GC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function pm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _c(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Et.ACK_USER_WRITE,this.source=pm()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new ao(le(),n,this.revert)}}else return T(se(this.path)===e,"operationForChild called for unrelated child."),new ao(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Ki(this.source,le()):new Ki(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Et.OVERWRITE}operationForChild(e){return te(this.path)?new as(this.source,le(),this.snap.getImmediateChild(e)):new as(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Et.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new as(this.source,le(),n.value):new Gi(this.source,le(),n)}else return T(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gi(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function JC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(VC(o.childName,o.snapshotNode))}),li(t,i,"child_removed",e,s,n),li(t,i,"child_added",e,s,n),li(t,i,"child_moved",r,s,n),li(t,i,"child_changed",e,s,n),li(t,i,"value",e,s,n),i}function li(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>ZC(t,a,l)),o.forEach(a=>{const l=XC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZC(t,e,n){if(e.childName==null||n.childName==null)throw qs("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,s){return zo(new Mn(e,n,s),t.serverCache)}function mm(t,e,n,s){return zo(t.eventCache,new Mn(e,n,s))}function lo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ls(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const eE=()=>(Ea||(Ea=new rt(Uw)),Ea);class Ee{constructor(e,n=eE()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return ct(e,(s,i)=>{n=n.set(new _e(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(we(e),n);return r!=null?{path:We(new _e(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(we(e)):new Ee(null)}}set(e,n){if(te(e))return new Ee(n,this.children);{const s=se(e),r=(this.children.get(s)||new Ee(null)).set(we(e),n),o=this.children.insert(s,r);return new Ee(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(we(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(we(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new Ee(null)).setTree(we(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ee(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(we(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(we(e),We(n,i),s):new Ee(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new Ee(null))}}function Ei(t,e,n){if(te(e))return new It(new Ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tt(i,e);return r=r.updateChild(o,n),new It(t.writeTree_.set(i,r))}else{const i=new Ee(n),r=t.writeTree_.setTree(e,i);return new It(r)}}}function Vd(t,e,n){let s=t;return ct(n,(i,r)=>{s=Ei(s,We(e,i),r)}),s}function Bd(t,e){if(te(e))return It.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new It(n)}}function ul(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function Hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function xn(t,e){if(te(e))return t;{const n=hs(t,e);return n!=null?new It(new Ee(n)):new It(t.writeTree_.subtree(e))}}function dl(t){return t.writeTree_.isEmpty()}function Vs(t,e){return gm(le(),t.writeTree_,e)}function gm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=gm(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e){return wm(e,t)}function tE(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ei(t.visibleWrites,e,n)),t.lastWriteId=s}function nE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function sE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iE(a,s.path)?i=!1:Ct(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return rE(t),!0;if(s.snap)t.visibleWrites=Bd(t.visibleWrites,s.path);else{const a=s.children;ct(a,l=>{t.visibleWrites=Bd(t.visibleWrites,We(s.path,l))})}return!0}else return!1}function iE(t,e){if(t.snap)return Ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ct(We(t.path,n),e))return!0;return!1}function rE(t){t.visibleWrites=_m(t.allWrites,oE,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oE(t){return t.visible}function _m(t,e,n){let s=It.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ct(n,o)?(a=tt(n,o),s=Ei(s,a,r.snap)):Ct(o,n)&&(a=tt(o,n),s=Ei(s,le(),r.snap.getChild(a)));else if(r.children){if(Ct(n,o))a=tt(n,o),s=Vd(s,a,r.children);else if(Ct(o,n))if(a=tt(o,n),te(a))s=Vd(s,le(),r.children);else{const l=Ls(r.children,se(a));if(l){const c=l.getChild(we(a));s=Ei(s,le(),c)}}}else throw qs("WriteRecord should have .snap or .children")}}return s}function ym(t,e,n,s,i){if(!s&&!i){const r=hs(t.visibleWrites,e);if(r!=null)return r;{const o=xn(t.visibleWrites,e);if(dl(o))return n;if(n==null&&!ul(o,le()))return null;{const a=n||q.EMPTY_NODE;return Vs(o,a)}}}else{const r=xn(t.visibleWrites,e);if(!i&&dl(r))return n;if(!i&&n==null&&!ul(r,le()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ct(c.path,e)||Ct(e,c.path))},a=_m(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Vs(a,l)}}}function aE(t,e,n){let s=q.EMPTY_NODE;const i=hs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xn(t.visibleWrites,e);return n.forEachChild(Re,(o,a)=>{const l=Vs(xn(r,new _e(o)),a);s=s.updateImmediateChild(o,l)}),Hd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xn(t.visibleWrites,e);return Hd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lE(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if(ul(t.visibleWrites,r))return null;{const o=xn(t.visibleWrites,r);return dl(o)?i.getChild(n):Vs(o,i.getChild(n))}}function cE(t,e,n,s){const i=We(e,n),r=hs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return Vs(o,s.getNode().getImmediateChild(n))}else return null}function uE(t,e){return hs(t.visibleWrites,e)}function dE(t,e,n,s,i,r,o){let a;const l=xn(t.visibleWrites,e),c=hs(l,le());if(c!=null)a=c;else if(n!=null)a=Vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function hE(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function co(t,e,n,s){return ym(t.writeTree,t.treePath,e,n,s)}function yc(t,e){return aE(t.writeTree,t.treePath,e)}function zd(t,e,n,s){return lE(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return uE(t.writeTree,We(t.treePath,e))}function fE(t,e,n,s,i,r){return dE(t.writeTree,t.treePath,e,n,s,i,r)}function vc(t,e,n){return cE(t.writeTree,t.treePath,e,n)}function vm(t,e){return wm(We(t.treePath,e),t.writeTree)}function wm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ji(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ws(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ji(s,e.snapshotNode,i.oldSnap));else throw qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Cm=new mE;class wc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ls(this.viewCache_),r=fE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){return{filter:t}}function _E(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yE(t,e,n,s,i){const r=new pE;let o,a;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=hl(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=ho(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=wE(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=fl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=bE(t,e,c.path,s,i,r):o=CE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Et.LISTEN_COMPLETE)o=EE(t,e,n.path,s,r);else throw qs("Unknown operation type: "+n.type);const l=r.getChanges();return vE(e,o,l),{viewCache:o,changes:l}}function vE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=lo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(hm(lo(e)))}}function Em(t,e,n,s,i,r){const o=e.eventCache;if(uo(s,n)!=null)return e;{let a,l;if(te(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ls(e),u=c instanceof q?c:q.EMPTY_NODE,d=yc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=co(s,ls(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){T(On(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=zd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=we(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=zd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=vc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ci(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function ho(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&On(n)>1)return e;const _=we(n),x=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),m,x,_,Cm,null)}const d=mm(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new wc(i,d,r);return Em(t,d,n,i,h,a)}function hl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new wc(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ci(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=we(n),m=a.getNode().getImmediateChild(d);let _;if(te(h))_=s;else{const w=u.getCompleteChild(d);w!=null?nm(h)===".priority"&&w.getChild(im(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=q.EMPTY_NODE}if(m.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=Ci(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jd(t,e){return t.eventCache.isCompleteForChild(e)}function wE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=We(n,l);jd(e,se(u))&&(a=hl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=We(n,l);jd(e,se(u))||(a=hl(t,a,u,c,i,r,o))}),a}function qd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new Ee(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=qd(t,m,h);l=ho(t,l,new _e(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),w=qd(t,_,h);l=ho(t,l,new _e(d),w,i,r,o,a)}}),l}function CE(t,e,n,s,i,r,o){if(uo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ho(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new Ee(null);return l.getNode().forEachChild(Ps,(u,d)=>{c=c.set(new _e(u),d)}),fl(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ee(null);return s.foreach((u,d)=>{const h=We(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),fl(t,e,n,c,i,r,a,o)}}function EE(t,e,n,s,i){const r=e.serverCache,o=mm(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return Em(t,o,n,s,Cm,i)}function bE(t,e,n,s,i,r){let o;if(uo(s,n)!=null)return e;{const a=new wc(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=co(s,ls(e));else{const d=e.serverCache.getNode();T(d instanceof q,"serverChildren would be complete if leaf node"),u=yc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let d=vc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,we(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,we(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=co(s,ls(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||uo(s,le())!=null,Ci(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new pc(s.getIndex()),r=HC(s);this.processor_=gE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new Mn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Mn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=zo(d,u),this.eventGenerator_=new QC(this.query_)}get query(){return this.query_}}function TE(t){return t.viewCache_.serverCache.getNode()}function SE(t){return lo(t.viewCache_)}function kE(t,e){const n=ls(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Kd(t){return t.eventRegistrations_.length===0}function xE(t,e){t.eventRegistrations_.push(e)}function Gd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Yd(t,e,n,s){e.type===Et.MERGE&&e.source.queryId!==null&&(T(ls(t.viewCache_),"We should always have a full cache before handling merges"),T(lo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yE(t.processor_,i,e,n,s);return _E(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,bm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function RE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(r,o)=>{s.push(Ws(r,o))}),n.isFullyInitialized()&&s.push(hm(n.getNode())),bm(t,s,n.getNode(),e)}function bm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return JC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class Im{constructor(){this.views=new Map}}function AE(t){T(!fo,"__referenceConstructor has already been defined"),fo=t}function PE(){return T(fo,"Reference.ts has not been loaded"),fo}function NE(t){return t.views.size===0}function Cc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Yd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Yd(o,e,n,s));return r}}function Tm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=co(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=yc(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=zo(new Mn(a,l,!1),new Mn(s,i,!1));return new IE(e,c)}return o}function OE(t,e,n,s,i,r){const o=Tm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xE(o,n),RE(o,n)}function ME(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Gd(c,n,s)),Kd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Gd(l,n,s)),Kd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Dn(t)&&r.push(new(PE())(e._repo,e._path)),{removed:r,events:o}}function Sm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const s of t.views.values())n=n||kE(s,e);return n}function km(t,e){if(e._queryParams.loadsAllData())return qo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xm(t,e){return km(t,e)!=null}function Dn(t){return qo(t)!=null}function qo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;function DE(t){T(!po,"__referenceConstructor has already been defined"),po=t}function LE(){return T(po,"Reference.ts has not been loaded"),po}let FE=1;class Qd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=hE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rm(t,e,n,s,i){return tE(t.pendingWriteTree_,e,n,s,i),i?fr(t,new as(pm(),e,n)):[]}function Qn(t,e,n=!1){const s=nE(t.pendingWriteTree_,e);if(sE(t.pendingWriteTree_,e)){let r=new Ee(null);return s.snap!=null?r=r.set(le(),!0):ct(s.children,o=>{r=r.set(new _e(o),!0)}),fr(t,new ao(s.path,r,n))}else return[]}function hr(t,e,n){return fr(t,new as(gc(),e,n))}function $E(t,e,n){const s=Ee.fromObject(n);return fr(t,new Gi(gc(),e,s))}function UE(t,e){return fr(t,new Ki(gc(),e))}function WE(t,e,n){const s=bc(t,n);if(s){const i=Ic(s),r=i.path,o=i.queryId,a=tt(r,e),l=new Ki(_c(o),a);return Tc(t,r,l)}else return[]}function Am(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||xm(o,e))){const l=ME(o,e,n,s);NE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Dn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=zE(h);for(let _=0;_<m.length;++_){const w=m[_],x=w.query,A=Mm(t,w);t.listenProvider_.startListening(bi(x),Yi(t,x),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(bi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Ko(h));t.listenProvider_.stopListening(bi(h),m)}))}jE(t,c)}return a}function Pm(t,e,n,s){const i=bc(t,s);if(i!=null){const r=Ic(i),o=r.path,a=r.queryId,l=tt(o,e),c=new as(_c(a),l,n);return Tc(t,o,c)}else return[]}function VE(t,e,n,s){const i=bc(t,s);if(i){const r=Ic(i),o=r.path,a=r.queryId,l=tt(o,e),c=Ee.fromObject(n),u=new Gi(_c(a),l,c);return Tc(t,o,u)}else return[]}function BE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=tt(h,i);r=r||Rn(m,_),o=o||Dn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Dn(a),r=r||Rn(a,le())):(a=new Im,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const w=Rn(_,le());w&&(r=r.updateImmediateChild(m,w))}));const c=xm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ko(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=qE();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=jo(t.pendingWriteTree_,i);let d=OE(a,e,n,u,r,l);if(!c&&!o&&!s){const h=km(a,e);d=d.concat(KE(t,e,h))}return d}function Ec(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),c=Rn(a,l);if(c)return c});return ym(i,e,r,n,!0)}function HE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=tt(c,n);s=s||Rn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Rn(i,le()):(i=new Im,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Mn(s,!0,!1):null,a=jo(t.pendingWriteTree_,e._path),l=Tm(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return SE(l)}function fr(t,e){return Nm(e,t.syncPointTree_,null,jo(t.pendingWriteTree_,le()))}function Nm(t,e,n,s){if(te(t.path))return Om(t,e,n,s);{const i=e.get(le());n==null&&i!=null&&(n=Rn(i,le()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vm(s,o);r=r.concat(Nm(a,l,c,u))}return i&&(r=r.concat(Cc(i,t,s,n))),r}}function Om(t,e,n,s){const i=e.get(le());n==null&&i!=null&&(n=Rn(i,le()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vm(s,o),u=t.operationForChild(o);u&&(r=r.concat(Om(u,a,l,c)))}),i&&(r=r.concat(Cc(i,t,s,n))),r}function Mm(t,e){const n=e.query,s=Yi(t,n);return{hashFn:()=>(TE(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?WE(t,n._path,s):UE(t,n._path);{const r=Bw(i,n);return Am(t,n,null,r)}}}}function Yi(t,e){const n=Ko(e);return t.queryToTagMap.get(n)}function Ko(t){return t._path.toString()+"$"+t._queryIdentifier}function bc(t,e){return t.tagToQueryMap.get(e)}function Ic(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Tc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=jo(t.pendingWriteTree_,e);return Cc(s,n,i,null)}function zE(t){return t.fold((e,n,s)=>{if(n&&Dn(n))return[qo(n)];{let i=[];return n&&(i=Sm(n)),ct(s,(r,o)=>{i=i.concat(o)}),i}})}function bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(LE())(t._repo,t._path):t}function jE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ko(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function qE(){return FE++}function KE(t,e,n){const s=e._path,i=Yi(t,e),r=Mm(t,n),o=t.listenProvider_.startListening(bi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&Dn(u))return[qo(u).query];{let h=[];return u&&(h=h.concat(Sm(u).map(m=>m.query))),ct(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(bi(u),Yi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sc(n)}node(){return this.node_}}class kc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new kc(this.syncTree_,n)}node(){return Ec(this.syncTree_,this.path_)}}const GE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return YE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},YE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},QE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},JE=function(t,e,n,s){return xc(e,new kc(n,t),s)},Dm=function(t,e,n){return xc(t,new Sc(e),n)};function xc(t,e,n){const s=t.getPriority().val(),i=Jd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Jd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ve(i))),o.forEachChild(Re,(a,l)=>{const c=xc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ac(t,e){let n=e instanceof _e?e:new _e(e),s=t,i=se(n);for(;i!==null;){const r=Ls(s.node.children,i)||{children:{},childCount:0};s=new Rc(i,s,r),n=we(n),i=se(n)}return s}function Zs(t){return t.node.value}function Lm(t,e){t.node.value=e,pl(t)}function Fm(t){return t.node.childCount>0}function XE(t){return Zs(t)===void 0&&!Fm(t)}function Go(t,e){ct(t.node.children,(n,s)=>{e(new Rc(n,t,s))})}function $m(t,e,n,s){n&&!s&&e(t),Go(t,i=>{$m(i,e,!0,s)}),n&&s&&e(t)}function ZE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pr(t){return new _e(t.parent===null?t.name:pr(t.parent)+"/"+t.name)}function pl(t){t.parent!==null&&eb(t.parent,t.name,t)}function eb(t,e,n){const s=XE(n),i=tn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,pl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/[\[\].#$\/\u0000-\u001F\u007F]/,nb=/[\[\].#$\u0000-\u001F\u007F]/,ba=10*1024*1024,Um=function(t){return typeof t=="string"&&t.length!==0&&!tb.test(t)},Wm=function(t){return typeof t=="string"&&t.length!==0&&!nb.test(t)},sb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wm(t)},ib=function(t,e,n,s){s&&e===void 0||Pc(Kl(t,"value"),e,n)},Pc=function(t,e,n){const s=n instanceof _e?new CC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(s)+" with contents = "+e.toString());if(Dp(e))throw new Error(t+"contains "+e.toString()+" "+Hn(s));if(typeof e=="string"&&e.length>ba/3&&Fo(e)>ba)throw new Error(t+"contains a string greater than "+ba+" utf8 bytes "+Hn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Um(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EC(s,o),Pc(t,a,s),bC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Hn(s)+" in addition to actual children.")}},Vm=function(t,e,n,s){if(!(s&&n===void 0)&&!Wm(n))throw new Error(Kl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vm(t,e,n,s)},Bm=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ob=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Um(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sb(n))throw new Error(Kl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!rm(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wt(t,e,n){Hm(t,n),lb(t,s=>Ct(s,e)||Ct(e,s))}function lb(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(cb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ns&&Ye("event: "+n.toString()),Xs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="repo_interrupt",db=25;class hb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ab,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oo(),this.transactionQueueTree_=new Rc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fb(t,e,n){if(t.stats_=uc(t.repoInfo_),t.forceRestClient_||qw())t.server_=new ro(t.repoInfo_,(s,i,r,o)=>{Xd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(s,i,r,o)=>{Xd(t,s,i,r,o)},s=>{Zd(t,s)},s=>{mb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Jw(t.repoInfo_,()=>new YC(t.stats_,t.server_)),t.infoData_=new zC,t.infoSyncTree_=new Qd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=hr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Oc(t,"connected",!1),t.serverSyncTree_=new Qd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Wt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function pb(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Nc(t){return GE({timestamp:pb(t)})}function Xd(t,e,n,s,i){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Kr(n,c=>He(c));o=VE(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=Pm(t.serverSyncTree_,r,l,i)}else if(s){const l=Kr(n,c=>He(c));o=$E(t.serverSyncTree_,r,l)}else{const l=He(n);o=hr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Qo(t,r)),Wt(t.eventQueue_,a,o)}function Zd(t,e){Oc(t,"connected",e),e===!1&&yb(t)}function mb(t,e){ct(e,(n,s)=>{Oc(t,n,s)})}function Oc(t,e,n){const s=new _e("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=hr(t.infoSyncTree_,s,i);Wt(t.eventQueue_,s,r)}function zm(t){return t.nextWriteId_++}function gb(t,e,n){const s=HE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());BE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=hr(t.serverSyncTree_,e._path,r);else{const a=Yi(t.serverSyncTree_,e);o=Pm(t.serverSyncTree_,e._path,r,a)}return Wt(t.eventQueue_,e._path,o),Am(t.serverSyncTree_,e,n,null,!0),r},i=>(Yo(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function _b(t,e,n,s,i){Yo(t,"set",{path:e.toString(),value:n,priority:s});const r=Nc(t),o=He(n,s),a=Ec(t.serverSyncTree_,e),l=Dm(o,a,r),c=zm(t),u=Rm(t.serverSyncTree_,e,l,c,!0);Hm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||ot("set at "+e+" failed: "+h);const w=Qn(t.serverSyncTree_,c,!_);Wt(t.eventQueue_,e,w),wb(t,i,h,m)});const d=Ym(t,e);Qo(t,d),Wt(t.eventQueue_,d,[])}function yb(t){Yo(t,"onDisconnectEvents");const e=Nc(t),n=oo();cl(t.onDisconnect_,le(),(i,r)=>{const o=JE(i,r,t.serverSyncTree_,e);fm(n,i,o)});let s=[];cl(n,le(),(i,r)=>{s=s.concat(hr(t.serverSyncTree_,i,r));const o=Ym(t,i);Qo(t,o)}),t.onDisconnect_=oo(),Wt(t.eventQueue_,le(),s)}function vb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ub)}function Yo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function wb(t,e,n,s){e&&Xs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function jm(t,e,n){return Ec(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Mc(t,e=t.transactionQueueTree_){if(e||Jo(t,e),Zs(e)){const n=Km(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Cb(t,pr(e),n)}else Fm(e)&&Go(e,n=>{Mc(t,n)})}function Cb(t,e,n){const s=n.map(c=>c.currentWriteId),i=jm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=tt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Yo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Qn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Jo(t,Ac(t.transactionQueueTree_,e)),Mc(t,t.transactionQueueTree_),Wt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Xs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ot("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Qo(t,e)}},o)}function Qo(t,e){const n=qm(t,e),s=pr(n),i=Km(t,n);return Eb(t,i,s),s}function Eb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tt(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=db)u=!0,d="maxretry",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=jm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Pc("transaction failed: Data returned ",m,l.path);let _=He(m);typeof m=="object"&&m!=null&&tn(m,".priority")||(_=_.updatePriority(h.getPriority()));const x=l.currentWriteId,A=Nc(t),P=Dm(_,h,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=zm(t),o.splice(o.indexOf(x),1),i=i.concat(Rm(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(Qn(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0))}Wt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Jo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Xs(s[a]);Mc(t,t.transactionQueueTree_)}function qm(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&Zs(s)===void 0;)s=Ac(s,n),e=we(e),n=se(e);return s}function Km(t,e){const n=[];return Gm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Gm(t,e,n){const s=Zs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Go(e,i=>{Gm(t,i,n)})}function Jo(t,e){const n=Zs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Lm(e,n.length>0?n:void 0)}Go(e,s=>{Jo(t,s)})}function Ym(t,e){const n=pr(qm(t,e)),s=Ac(t.transactionQueueTree_,e);return ZE(s,i=>{Ia(t,i)}),Ia(t,s),$m(s,i=>{Ia(t,i)}),n}function Ia(t,e){const n=Zs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Lm(e,void 0):n.length=r+1,Wt(t.eventQueue_,pr(e),i);for(let o=0;o<s.length;o++)Xs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ib(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const eh=function(t,e){const n=Tb(t),s=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Fw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new _e(n.pathString)}},Tb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=bb(t.substring(u,d)));const h=Ib(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class kb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:nm(this._path)}get ref(){return new nn(this._repo,this._path)}get _queryIdentifier(){const e=Ud(this._queryParams),n=lc(e);return n==="{}"?"default":n}get _queryObject(){return Ud(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof Dc))return!1;const n=this._repo===e._repo,s=rm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+wC(this._path)}}class nn extends Dc{constructor(e,n){super(e,n,new mc,!1)}get parent(){const e=im(this._path);return e===null?null:new nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=ml(this.ref,e);return new Qi(this._node.getChild(n),s,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qi(i,ml(this.ref,s),Re)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lc(t,e){return t=ut(t),t._checkNotDeleted("ref"),e!==void 0?ml(t._root,e):t._root}function ml(t,e){return t=ut(t),se(t._path)===null?rb("child","path",e,!1):Vm("child","path",e,!1),new nn(t._repo,We(t._path,e))}function Rb(t){return Bm("remove",t._path),Qm(t,null)}function Qm(t,e){t=ut(t),Bm("set",t._path),ib("set",e,t._path,!1);const n=new Lo;return _b(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ab(t){t=ut(t);const e=new xb(()=>{}),n=new Fc(e);return gb(t._repo,t,n).then(s=>new Qi(s,new nn(t._repo,t._path),t._queryParams.getIndex()))}class Fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Sb("value",this,new Qi(e.snapshotNode,new nn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kb(this,e,n):null}matches(e){return e instanceof Fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}AE(nn);DE(nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="FIREBASE_DATABASE_EMULATOR_HOST",gl={};let Nb=!1;function Ob(t,e,n,s){t.repoInfo_=new Kp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Mb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=eh(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Pb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=eh(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new As(As.OWNER):new Gw(t.name,t.options,e);ob("Invalid Firebase Database URL",o),te(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Lb(a,t,u,new Kw(t.name,n));return new Fb(d,t)}function Db(t,e){const n=gl[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vb(t),delete n[t.key]}function Lb(t,e,n,s){let i=gl[e.name];i||(i={},gl[e.name]=i);let r=i[t.toURLString()];return r&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hb(t,Nb,n,s),i[t.toURLString()]=r,r}class Fb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Db(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function $b(t=Yf(),e){const n=Ql(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ny("database");s&&Ub(n,...s)}return n}function Ub(t,e,n,s={}){t=ut(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new As(As.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:sy(s.mockUserToken,t.app.options.projectId);r=new As(o)}Ob(i,e,n,r)}/**
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
 */function Wb(t){Nw(Gs),Fs(new ss("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Mb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),kn(Ed,bd,t),kn(Ed,bd,"esm2017")}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Wb();const $c=$b(Xf),Jm=[],_l=[];function Vb(t){return t instanceof Set?Array.from(t):t}const Bb=async t=>(await Ab(Lc($c,t))).val(),Hb=async(t,e)=>{_l.push({path:t,data:e})},zb=async t=>{if(!(!lr.value||!ac.value))return await Rb(Lc($c,t))};setInterval(async()=>{const t=[];for(const{path:e,data:n}of _l)t.push(Qm(Lc($c,e),n));await Promise.all(t),_l.length=0},1e4);const th=async(t,e)=>{In(t,n=>{lr.value&&ac.value&&Hb(`users/${Bo.value.uid}/game-data/tileswap-naenae/${e}/`,Vb(n))},{deep:!0}),Jm.push({observable:t,path:e})};class Ot{constructor(e){if(typeof e!="number")throw new Error("Order must be a number");if(e<=0)throw new Error("Order must be greater than 0");if(e%1!==0)throw new Error("Order must be an integer");const n=Ot.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error("Order must be a prime power");this.order=e,this.p=n[0],this.q=n.length}el(e){if(e instanceof Gt){if(this.q!==1)throw new Error("Cannot create element in non-prime field");if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(e instanceof _t){if(this.q===1)throw new Error("Cannot create polynomial in prime field");if(e.field.order!==this.order)throw new Error("Cannot create polynomial in different field");return e}if(typeof e=="number")return this.q===1?new Gt(Ot.mod(e,this.order),this):_t.fromInteger(e,this);if(e instanceof Array){if(this.q===1)throw new Error("Cannot create polynomial in prime field");return new _t(e,this)}throw new Error("Cannot create element from non-number")}matrix(e){return Bs.from2DArray(e,this)}identity(e){return Bs.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...Ot.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new Ot(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}var vn,ws;const yo=class yo{constructor(e,n){_r(this,vn);if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof Ot))throw new Error("Field must be an instance of FiniteField");this.value=Ot.mod(e,n.order),this.field=n}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(e){return Rt(this,vn,ws).call(this,e,(n,s)=>n.value+s.value)}subtract(e){return Rt(this,vn,ws).call(this,e,(n,s)=>n.value-s.value)}multiply(e){return Rt(this,vn,ws).call(this,e,(n,s)=>n.value*s.value)}divide(e){return Rt(this,vn,ws).call(this,e,(n,s)=>n.multiply(s.inverse()).value)}pow(e){if(e===0)return this.field.el(1);if(e===1)return this.copy();if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let e=1;for(;e<this.field.order;){if(e*e%this.field.order===this.value)return this.field.el(e);e++}throw new Error("Element has no square root")}abs(){return this.field.el(this.value===0?0:1)}equals(e){if(e instanceof yo){if(e.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===e.value}return this.value===e}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}};vn=new WeakSet,ws=function(e,n){if(e instanceof yo){if(e.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(n(this,e))}return Rt(this,vn,ws).call(this,this.field.el(e),n)};let Gt=yo;class _t{constructor(e,n){this.field=n,this.primeField=Ot.fromOrder(n.p);const s=e.length;if(s>n.q)throw new Error(`${e.length} coefficients given, but field has order p ^ q where q = ${n.q}`);if(s<n.q)for(let i=0;i<n.q-s;i++)e.splice(0,0,this.primeField.el(0));this.coefficients=e.map(i=>this.primeField.el(i))}add(e){if(e instanceof _t){if(e.field.order!==this.field.order)throw new Error("Cannot add polynomials in different fields");const n=[];for(let s=0;s<Math.max(this.coefficients.length,e.coefficients.length);s++)n.push(this.coefficients[s].add(e.coefficients[s]));return new _t(n,this.field)}if(e instanceof Array)return this.add(new _t(e,this.field));throw new Error("Cannot add polynomial to non-polynomial")}multiply(e){if(e instanceof _t){if(e.field.order!==this.field.order)throw new Error("Cannot multiply polynomials in different fields");const n=new Array(this.coefficients.length+e.coefficients.length-1).fill().map(s=>this.primeField.el(0));for(let s=0;s<this.coefficients.length;s++)for(let i=0;i<e.coefficients.length;i++)n[s+i]=n[s+i].add(this.coefficients[s].multiply(e.coefficients[i]));return new _t(n,this.field)}if(e instanceof Gt)return this.multiply(new _t([e],e.field));if(typeof e=="number")return this.multiply(this.field.el(e));throw new Error("Cannot multiply polynomial by non-polynomial")}static fromInteger(e,n){const i=e.toString(n.p).split("").map(r=>parseInt(r));return new _t(i,n)}toString(){return(this.coefficients.map((e,n)=>{if(e.equals(0))return"";const s=this.coefficients.length-n-1;if(s===0)return e.value.toString();const i=e.value===1?"":e.value;return s===1?`${i}x`:`${i}x^${s}`}).filter(e=>e).join(" + ")||"0")+` (mod ${this.field.order})`}[void 0](){return this.toString()}}var Jn,Xn,fi;const oe=class oe{constructor(e,n){_r(this,Xn);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof Gt){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new oe(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof Gt)return e=this.field.el(e),oe.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof oe){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return oe.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof Gt||typeof e=="number")return e=this.field.el(e),new oe(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof oe){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new oe(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return oe.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(ti(oe,Jn).has(e))return ti(oe,Jn).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Rt(this,Xn,fi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return ti(oe,Jn).set(e,s),s}const n=this.PLUDeterminant();return ti(oe,Jn).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=oe.identity(this.width,this.field),s=oe.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Rt(r=s,Xn,fi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return oe.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Rt(this,Xn,fi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new oe(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return oe.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return oe.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=oe.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Rt(this,Xn,fi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i].abs();l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:oe.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof oe?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return oe.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new oe(s,n)}static fromValue(e,n,s,i){if(e instanceof Gt&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new oe(r,i)}static zeros(e,n,s){return oe.fromValue(0,e,n,s)}static ones(e,n,s){return oe.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return oe.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return oe.from2DArray(s,n)}static from2DArray(e,n){return new oe(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};Jn=new WeakMap,Xn=new WeakSet,fi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new oe(s,this.field)},_r(oe,Jn,new Map);let Bs=oe;const mo=Fe(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>mo.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");mo.value=t}});const wn=Ae(()=>mo.value),nh=t=>{mo.value=t},Ta=new Map,Sa=new Map,Xm=t=>{const e=[];for(let n=0;n<t[0].length;n++){const s=[];for(let i=t.length-1;i>=0;i--)s.push(t[i][n]);e.push(s)}return e},ka=(t,e)=>{for(let n=0;n<e;n++)t=Xm(t);return t};class jb{constructor(e,n,s){this.matrix=e,this.determinant=n,this.moves=s}}const Zm=t=>{const e=[t,Xm(t),ka(t,2),ka(t,3)],n=[],s=[];let i=0,r=0;for(const l of e){const{matrix:c,determinant:u,zerows:d}=qb(l);r=d;const h=c.flat().filter(m=>m!==-1).reduce((m,_)=>m+_,0);n.push(h),s.push(new jb(ka(c,4-i++),u,h))}const o=Math.min(...n),a=n.indexOf(o);return{solutions:s,zerows:r,shortest:a,determinant:s[0].determinant.value}};function qb(t){const e=Ot.fromOrder(Q.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(u=>u!==-1).map(u=>[(u+1)%Q.value])),r=`${s}x${n},${Qt.getExcludeFromMatrix(t)},${Ji.value},${Q.value}}`;let o=[],a=0;const l=Gb(s,n,t);let c;if(Sa.has(r)?c=Sa.get(r):(c=l.determinant(),Sa.set(r,c)),c.equals(0)){const d=Bs.from2DArray(l.matrix.map((m,_)=>m.concat(i.matrix[_])),l.field).reducedRowEchelonForm();a=d.matrix.filter(m=>m.every(_=>_.equals(0))).length-1;const h=Bs.from2DArray(d.matrix.map(m=>[m[m.length-1]]),d.field);o=new Array(l.width).fill().map(m=>0);for(let m=0;m<h.height;m++){const _=h.matrix[m][0];if(!_.equals(0)){for(let w=0;w<d.width-1;w++)if(d.matrix[m][w].equals(1)){o[w]=_.value;break}}}}else{let u;Ta.has(r)?u=Ta.get(r):(u=l.inverse(),Ta.set(r,u)),o=u.multiply(i).matrix.map(d=>d[0].value),a=1}for(let u=0;u<n;u++)for(let d=0;d<s;d++)if(t[u][d]===-1){const h=u*s+d;o.splice(h,0,-1)}return{matrix:o.map((u,d)=>o.slice(d*s,(d+1)*s)).filter(u=>u.length),determinant:c,zerows:a}}const Kb=(t,e,n)=>{for(const s of Ji.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=Q.value-1)}},Gb=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));Kb(o,a,l),s.push(l)}return Ot.fromOrder(Q.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()},Ji=Fe([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>Ji.value,set:t=>{Ji.value=t}});const Q=Fe(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>Q.value,set:t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t}});const Uc=t=>{if(t<2)throw new Error("Modulo must be greater than 1");Q.value=t},Ii=Ae(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${255*(e/(Q.value-1))},${255*(e/(Q.value-1))},${255*(e/(Q.value-1))})`)),xa=Ae(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${143*(e/(Q.value-1))+36},${143*(e/(Q.value-1))+36},${143*(e/(Q.value-1))+36})`)),Ra=Ae(()=>new Array(Q.value).fill().map((t,e)=>`rgb(${190*(e/(Q.value-1))+51},${190*(e/(Q.value-1))+51},${190*(e/(Q.value-1))+51})`)),pn=class pn{static get FILTERED_LAYOUTS(){const e=xe();return this.LAYOUTS.filter(n=>n.unlockCategory<=e.unlockedCategoriesFP)}constructor({width:e,height:n,exclude:s,unlockCategory:i,id:r}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill().map(o=>Q.value-1)),this.id=r;for(const o of this.exclude)this.matrix[Math.floor(o/e)][o%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of Ji.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=pn.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=pn.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===Q.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===Q.value-1:this.matrix[e][n]===Q.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i,id:r}=this,o=new pn({width:e,height:n,exclude:s,unlockCategory:i,id:r});return o.matrix=this.matrix.map(a=>a.slice()),o}generatePosition(e){const n=this.copy();n.setAllTiles(Q.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}if(n.matrix.every(s=>s.every(i=>i===Q.value||i===-1)))return this.generatePosition(e);if(n.nTiles()<50){const{solutions:s,shortest:i,zerows:r}=Zm(n.matrix),o=s[i],a=r!==1?e>r?r:e:Math.floor(e-Q.value*(e/3)+2);if(o.moves<a)return this.generatePosition(e)}return n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new pn({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%Q.value+Q.value)%Q.value}};$n(pn,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map((e,n)=>{const s=parseInt(e.dimensions.split("x")[0]),i=parseInt(e.dimensions.split("x")[1]),{unlockCategory:r}=e;return new pn({width:s,height:i,unlockCategory:r,id:n,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let Qt=pn;const vo=class vo{constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o,this.unlockCategory=Math.floor(r/5)+1}static get FILTERED_PUZZLES(){const e=xe();return this.PUZZLES.filter(n=>n.unlockCategory<=e.unlockedCategoriesPZ)}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}targetIsWhite(e,n){return n===void 0?this.target.matrix[Math.floor(e/this.target.width)][e%this.target.width]===this.modulo-1:this.target.matrix[e][n]===this.modulo-1}baseIsWhite(e,n){return n===void 0?this.base.matrix[Math.floor(e/this.base.width)][e%this.base.width]===this.modulo-1:this.base.matrix[e][n]===this.modulo-1}};$n(vo,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:8,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:12,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:150,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].sort((e,n)=>e.solution.length-n.solution.length).map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((w,x)=>{w===2?(s[_][x]=-1,i[_][x]=-1):w===1&&(s[_][x]=(a??2)-1)}));const l=s[0].length,c=s.length,u=Qt.getExcludeFromMatrix(s),d=new Qt({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new Qt({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new vo({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let go=vo;const sh=t=>`${t}`,_o={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:sh},tilesSwapped:{name:"Tiles Swapped",display:sh},puzzlesCompleted:{initialValue:[],name:"Puzzles Completed",display:t=>`${t.length} / ${go.PUZZLES.length}`}},Yb=Object.fromEntries(Object.keys(_o).map(t=>[t,_o[t].initialValue??0])),Kn=class Kn{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patternRange:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,modulo:l,name:c}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,this.rangeStart=i[0],this.rangeEnd=i[1],this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.generateLayouts(),this.nMoves=0,this.modulo=l??2,this.name=c,this.id=-1}generateLayouts(){const e=Qt.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd),n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=Kn.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=Kn.THRESHOLD?i*2:i);n.sort(()=>Math.random()-.5),this.challengeLayouts=n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=xe();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.generateLayouts(),this.currentPattern=0}};$n(Kn,"CHALLENGES",[new Kn({timeLimit:60,moveLimit:-1,totalClicks:90,patternRange:[1,1],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:3,name:"Think Fast"})].map((e,n)=>(e.id=n,e))),$n(Kn,"THRESHOLD",60);let yl=Kn;const xe=K1("store",()=>{const t=Fe({}),e=Fe({}),n=Fe({}),s=Fe(5),i=Fe(39),r=Fe(10),o=Fe([0,1,2]);function a(m,_){o.value.splice(m,1),o.value.push(_)}const l=Fe({...Yb});setInterval(()=>{l.value.timePlayed++},1e3);function c(m){t.value=m}function u(m){e.value=m}function d(m){n.value=m}function h(m){l.value.puzzlesCompleted.includes(m)||l.value.puzzlesCompleted.push(m)}return th(s,"difficulty"),th(l,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,setLayout:c,setPuzzle:u,setChallenge:d,solvePuzzle:h,stats:l,currentTasks:o,setTask:a,unlockedCategoriesFP:i,unlockedCategoriesPZ:r}}),Me=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Qb={components:{RouterView:Df},setup(){xe()}};function Jb(t,e,n,s,i,r){const o=S_("router-view");return N(),lt(o,null,{default:Ke(({Component:a})=>[$(Nn,{name:"fade",mode:"out-in"},{default:Ke(()=>[(N(),lt(k_(a)))]),_:2},1024)]),_:1})}const Xb=Me(Qb,[["render",Jb]]);const Zb={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},eI=["src"];function tI(t,e,n,s,i,r){return N(),j("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[D("span",null,ke(n.name),1),D("img",{src:n.image},null,8,eI)])}const Aa=Me(Zb,[["render",tI],["__scopeId","data-v-253ecde8"]]),nI="/tileswap-naenae/images/freeplay-transparent.png",sI="/tileswap-naenae/images/puzzles-transparent.png",iI="/tileswap-naenae/images/challenges-transparent.png";const Wc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"var(--shadow-color)":"var(--hl-color)"},color(){return this.black!==void 0?"var(--hl-text-color)":"var(--shadow-text-color)"}}},ih=()=>{er(t=>({23269356:t.backgroundColor,"46136db8":t.color}))},rh=Wc.setup;Wc.setup=rh?(t,e)=>(ih(),rh(t,e)):ih;function rI(t,e,n,s,i,r){return N(),j("button",null,ke(n.text),1)}const ze=Me(Wc,[["render",rI],["__scopeId","data-v-e07d88a2"]]),oI={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},cs=Object.assign(oI,{__name:"LinkButton",setup(t){return(e,n)=>(N(),lt(ze,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const aI={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},lI={class:"modal"};function cI(t,e,n,s,i,r){return N(),j("div",null,[$(Nn,{name:"fade"},{default:Ke(()=>[Wr(D("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[za,n.modelValue]])]),_:1}),$(Nn,{name:"zoom"},{default:Ke(()=>[Wr(D("div",lI,[x_(t.$slots,"default",{},void 0,!0)],512),[[za,n.modelValue]])]),_:3})])}const Ln=Me(aI,[["render",cI],["__scopeId","data-v-b228608d"]]);const uI={computed:{list(){const{stats:t}=xe();return Object.keys(_o).map(e=>{const n=_o[e];return`${n.name}: ${n.display(t[e])}`})}},methods:{async erase(){await zb(`users/${Bo.value.uid}/game-data/tileswap-naenae/`),window.location.reload()}}},dI=Object.assign(uI,{__name:"Stats",setup(t){return(e,n)=>(N(),j(Te,null,[D("ul",null,[(N(!0),j(Te,null,Ut(e.list,(s,i)=>(N(),j("li",{key:i},ke(s),1))),128))]),Ie(lr)?(N(),lt(ze,{key:0,onClick:e.erase,text:"Reset stats",black:""},null,8,["onClick"])):Ss("",!0)],64))}}),hI=Me(dI,[["__scopeId","data-v-b4a43d41"]]);const Vc={props:["value","max","text","barColor"],computed:{progress(){return this.value/this.max*100+"%"},barColorOrDefault(){return this.barColor??"var(--bg-color)"}}},oh=()=>{er(t=>({"2ceabb6e":t.progress,"1fcbc512":t.barColorOrDefault}))},ah=Vc.setup;Vc.setup=ah?(t,e)=>(oh(),ah(t,e)):oh;const fI=t=>(us("data-v-27eeb14f"),t=t(),ds(),t),pI={class:"container"},mI=fI(()=>D("div",{class:"progress"},null,-1)),gI={class:"text"};function _I(t,e,n,s,i,r){return N(),j("div",pI,[mI,D("div",gI,ke(n.text),1)])}const yI=Me(Vc,[["render",_I],["__scopeId","data-v-27eeb14f"]]),vI={FREEPLAY:"freeplay layout",PUZZLE:"puzzle",CHALLENGE:"challenge"},Le=class Le{constructor({timesRequired:e,targetId:n,type:s}){this.timesRequired=e,this.targetIds=n,this.type=s,this.targetsDone=[],this.id=-1}get completed(){return this.targetsDone.length>=this.timesRequired*this.targetIds.length}get progress(){return{text:`${this.targetsDone.length}/${this.timesRequired*this.targetIds.length}`,value:this.targetsDone.length/(this.timesRequired*this.targetIds.length)}}get text(){return`Complete the ${this.targetIds.length>1?this.targetIds.length:""} highlighted ${vI[this.type]}${this.targetIds.length>1?"s":""} ${this.timesRequired} time${this.timesRequired>1?"s":""} ${this.timesRequired>1&&this.targetIds.length>1?"each":""} `}claim(){const{currentTasks:e,setTask:n}=xe(),s=e.indexOf(this.id),i=Math.max(...e)<Le.TASKS.length-1?Math.max(...e)+1:-1;n(s,i)}static isTaskTarget(e,n){const{currentTasks:s}=xe();return s.filter(i=>i!==-1).filter(i=>Le.TASKS[i].type===n).some(i=>{const r=Le.TASKS[i];return r.targetIds.includes(e)?r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired:!1})}static advanceTasks(e,n){const{currentTasks:s}=xe();s.filter(i=>i!==-1).filter(i=>Le.TASKS[i].type===n).filter(i=>Le.TASKS[i].targetIds.includes(e)).filter(i=>{const r=Le.TASKS[i];return r.targetsDone.reduce((o,a)=>o+(a===e?1:0),0)<r.timesRequired}).forEach(i=>{Le.TASKS[i].targetsDone.push(e)})}};$n(Le,"TASK_TYPES",{FREEPLAY:"FREEPLAY",PUZZLE:"PUZZLE",CHALLENGE:"CHALLENGE"}),$n(Le,"TASKS",[new Le({timesRequired:2,targetId:[1],type:Le.TASK_TYPES.FREEPLAY}),new Le({timesRequired:1,targetId:[1],type:Le.TASK_TYPES.PUZZLE}),new Le({timesRequired:1,targetId:[0],type:Le.TASK_TYPES.CHALLENGE}),new Le({timesRequired:1,targetId:[0],type:Le.TASK_TYPES.CHALLENGE})].map((e,n)=>(e.id=n,e)));let nt=Le;const wI={class:"container"},CI=["onClick"],EI={methods:{claimTask(t){t.completed&&t.claim()}},computed:{tasks(){const{currentTasks:t}=xe();return t.filter(e=>e!==-1).map(e=>nt.TASKS[e])}}},bI=Object.assign(EI,{__name:"TaskContainer",setup(t){return(e,n)=>(N(),j("div",wI,[$(R1,{name:"slide"},{default:Ke(()=>[(N(!0),j(Te,null,Ut(e.tasks,s=>(N(),j("div",{onClick:i=>e.claimTask(s),class:Je(["task",{"completed-task":s.completed}]),key:s.id},[D("p",null,ke(s.text),1),$(yI,{barColor:s.completed?"var(--hl-color)":null,value:s.progress.value,text:s.progress.text,max:"1"},null,8,["barColor","value","text"])],10,CI))),128))]),_:1})]))}}),II=Me(bI,[["__scopeId","data-v-d219c454"]]),Bc=()=>{let t=Fe(window.innerWidth),e=Fe(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;Ni(()=>window.addEventListener("resize",n)),Ni(()=>window.addEventListener("resize",s)),Oi(()=>window.removeEventListener("resize",n)),Oi(()=>window.removeEventListener("resize",s));const i=Ae(()=>t.value),r=Ae(()=>e.value);return{width:i,height:r}};const Hc=t=>(us("data-v-eeb74dab"),t=t(),ds(),t),TI={class:"container"},SI=Hc(()=>D("h1",{class:"main-title"},[Mo("Tile"),D("span",null,"Swap")],-1)),kI=Hc(()=>D("h1",null,"Stats",-1)),xI=Hc(()=>D("h1",null,"Tasks",-1)),RI={data(){const{width:t}=Bc();return{windowWidth:t,user:Bo,isSignedIn:lr,showStats:!1,showTasks:!1}},methods:{signOut:il,signInForm(){Pw(prompt("Email"),prompt("Password"))}}},AI=Object.assign(RI,{__name:"HomeView",setup(t){return(e,n)=>(N(),j("div",TI,[SI,D("main",null,[$(Aa,{name:"Freeplay",image:Ie(nI),path:"/freeplaySelection"},null,8,["image"]),$(Aa,{name:"Puzzles",image:Ie(sI),path:"/puzzleSelection"},null,8,["image"]),$(Aa,{name:"Challenges",image:Ie(iI),path:"/challengeSelection"},null,8,["image"])]),D("div",{class:Je({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[e.windowWidth<=600?(N(),lt(ze,{key:0,text:"tasks",onClick:n[0]||(n[0]=s=>e.showTasks=!0)})):Ss("",!0),$(ze,{text:"stats",onClick:n[1]||(n[1]=s=>e.showStats=!0)}),$(cs,{text:"tutorial",to:"/tutorial"})],2),D("div",{class:Je({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[Ie(lr)?(N(),j("p",{key:0,onClick:n[2]||(n[2]=(...s)=>Ie(il)&&Ie(il)(...s))}," You are logged in as "+ke(Ie(Bo).displayName),1)):(N(),j("p",{key:1,onClick:n[3]||(n[3]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),$(Ln,{modelValue:e.showStats,"onUpdate:modelValue":n[5]||(n[5]=s=>e.showStats=s)},{default:Ke(()=>[kI,$(hI),$(ze,{black:"",text:"close",onClick:n[4]||(n[4]=s=>e.showStats=!1)})]),_:1},8,["modelValue"]),e.windowWidth>600?(N(),lt(ze,{key:0,class:"top right",text:"tasks",onClick:n[6]||(n[6]=s=>e.showTasks=!0)})):Ss("",!0),$(Ln,{modelValue:e.showTasks,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showTasks=s)},{default:Ke(()=>[xI,$(II),$(ze,{black:"",text:"close",onClick:n[7]||(n[7]=s=>e.showTasks=!1)})]),_:1},8,["modelValue"])]))}}),PI=Me(AI,[["__scopeId","data-v-eeb74dab"]]);const NI={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return nt.isTaskTarget(this.layout.id,nt.TASK_TYPES.FREEPLAY)}},methods:{openGame(){xe().setLayout(this.layout),this.$router.push("/freeplayGame")}}},OI=["data-level","title"];function MI(t,e,n,s,i,r){return N(),j("div",{onClick:e[0]||(e[0]=(...o)=>r.openGame&&r.openGame(...o)),"data-level":n.completion,class:Je(["container",{"is-task-target":r.isTaskTarget}]),title:`${n.layout.width}x${n.layout.height} - ${n.layout.exclude.length}`},[(N(!0),j(Te,null,Ut(r.includedTiles,o=>(N(),j("div",{key:"t"+o,class:"tile",style:$t({transform:`translate(${i.tileSizePreview*(o%n.layout.width-n.layout.width/2)+50}px, ${i.tileSizePreview*(Math.floor(o/n.layout.width)-n.layout.height/2)+50}px)`,width:`${i.tileSizePreview-1}px`,height:`${i.tileSizePreview-1}px`})},null,4))),128))],10,OI)}const DI=Me(NI,[["render",MI],["__scopeId","data-v-c8523d4a"]]);const LI=t=>(us("data-v-11b86a1d"),t=t(),ds(),t),FI=LI(()=>D("h1",{class:"title"},"Select a layout",-1)),$I={class:"layouts"},UI={data(){return{layouts:Qt.FILTERED_LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},WI=Object.assign(UI,{__name:"FreeplaySelection",setup(t){return(e,n)=>(N(),j("main",null,[FI,$(cs,{class:"top right",text:"back",to:"/"}),D("div",$I,[(N(!0),j(Te,null,Ut(e.layouts,(s,i)=>(N(),lt(DI,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),VI=Me(WI,[["__scopeId","data-v-11b86a1d"]]);const BI={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return xe().stats.puzzlesCompleted.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))},isTaskTarget(){return nt.isTaskTarget(this.puzzle.id,nt.TASK_TYPES.PUZZLE)}},methods:{openGame(){const t=xe();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Uc(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},HI=Object.assign(BI,{__name:"PuzzleSelectionButton",setup(t){return er(e=>({"21ef8932":e.solved?"var(--success-color)":"var(--hl-color)"})),(e,n)=>(N(),j("div",{class:Je(["container",{"is-task-target":e.isTaskTarget}]),onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(N(!0),j(Te,null,Ut(e.includedTiles,s=>(N(),j("div",{key:"t"+s,class:"tile",style:$t({backgroundColor:(e.solved?t.puzzle.targetIsWhite(s):t.puzzle.baseIsWhite(s))?"var(--puzzle-white)":"var(--shadow-color)",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],2))}}),zI=Me(HI,[["__scopeId","data-v-d6e87ad3"]]);const jI=t=>(us("data-v-4dbb0fff"),t=t(),ds(),t),qI=jI(()=>D("h1",{class:"title"},"Select a puzzle",-1)),KI={class:"layouts"},GI={data(){return{puzzles:go.FILTERED_PUZZLES}}},YI=Object.assign(GI,{__name:"PuzzleSelection",setup(t){return(e,n)=>(N(),j("main",null,[qI,$(cs,{class:"top right",text:"back",to:"/"}),D("div",KI,[(N(!0),j(Te,null,Ut(e.puzzles,(s,i)=>(N(),lt(zI,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),QI=Me(YI,[["__scopeId","data-v-4dbb0fff"]]);const zc={props:["challenge"],computed:{formattedChall(){const t=Math.floor(this.challenge.timeLimit/60).toString(),e=(this.challenge.timeLimit%60).toString(),n=this.challenge.moveLimit.toString(),s=this.challenge.nPatterns.toString();return this.challenge.name===""?t+":"+e+"<br>"+(n>0?n+" moves<br>":"no move limit<br>")+s+" layouts":this.challenge.name},isTaskTarget(){return nt.isTaskTarget(this.challenge.id,nt.TASK_TYPES.CHALLENGE)}}},lh=()=>{er(t=>({a85d8e66:t.color}))},ch=zc.setup;zc.setup=ch?(t,e)=>(lh(),ch(t,e)):lh;const JI=["innerHTML"];function XI(t,e,n,s,i,r){return N(),j("div",{innerHTML:r.formattedChall,class:Je({"is-task-target":r.isTaskTarget})},null,10,JI)}const ZI=Me(zc,[["render",XI],["__scopeId","data-v-ecde7de9"]]),eT=D("h1",{class:"title"},"Select a challenge",-1),tT={data(){return{challenges:yl.CHALLENGES}},methods:{selectChallenge(t){const e=xe();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Uc(t.modulo),this.$router.push("/challengeGame")}}},nT=Object.assign(tT,{__name:"ChallengeSelection",setup(t){return(e,n)=>(N(),j("div",null,[eT,$(cs,{class:"top right",text:"back",to:"/"}),(N(!0),j(Te,null,Ut(e.challenges,(s,i)=>(N(),lt(ZI,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}}),sT={props:["outline","highlight"]},iT={width:"100%",height:"100%",viewBox:"0 0 60.000008 60.000004",version:"1.1",id:"svg5","inkscape:version":"1.1.1 (3bf5ae0d25, 2021-09-20)","sodipodi:docname":"tile.svg","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},rT={"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1"};function oT(t,e,n,s,i,r){return N(),j("div",null,[(N(),j("svg",iT,[D("g",rT,[D("path",{id:"path2326",style:$t([{fill:n.highlight},{"fill-opacity":"1",stroke:"none","stroke-width":"0.244206px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"}]),d:"M 22.506418,5.7476747 C 19.729543,5.7881441 12.471032,11.706991 2.9756103,18.099409 l -2.67274554,9.341045 c 0.089655,-0.152676 -0.79754152,8.684464 1.22735394,7.748319 L 2.986415,55.405134 c 1.1890438,0 2.8115591,1.494069 3.9982823,1.491619 0.6651477,-0.0012 0.9771618,-0.264903 1.1322075,0.320074 C 8.0023041,57.3985 7.9220367,57.580875 7.9022063,57.76661 l 9.1375327,1.3766 35.219003,-1.256918 5.974798,-4.871264 0.150764,-5.982753 c -0.04933,0.03235 -0.09915,0.06383 -0.148379,0.09632 -4.910394,3.240803 -9.283487,7.129532 -10.87706,8.16662 -1.593571,1.037087 -0.407679,-0.777844 0.01862,-2.037005 0.426271,-1.25916 0.09293,-1.962495 -1.315379,-1.055221 -1.408323,0.907273 -3.891531,3.425633 -7.11556,4.703426 -3.224027,1.277791 -7.189312,1.314854 -7.497243,-0.652777 1.196888,-1.713332 8.339057,-10.890201 7.083592,-12.451866 -2.862861,-0.737663 -11.436846,8.513955 -10.277598,6.539978 1.224604,-2.063728 1.11112,-2.10523 2.78093,-4.204606 2.142792,-2.694037 2.983485,-3.22191 2.571799,-4.080868 -0.58137,-0.315366 -3.209137,1.491343 -5.122946,3.210942 -1.472112,1.322727 -9.704484,8.362099 -9.970116,8.192687 -0.348355,-0.222162 1.595981,-4.360091 3.152714,-5.988948 C 31.514606,37.343421 37.626519,30.328515 36.488021,29.176048 35.001437,27.67122 27.933955,33.117968 28.889153,32.24157 29.970967,31.249006 40.512676,22.019332 40.073472,18.916154 35.831584,18.80262 18.81402,35.967435 14.21696,38.000132 c 0,0 5.034507,-4.316388 5.357861,-8.104019 0.532377,-3.978252 1.294722,-4.905392 3.721358,-7.04782 C 28.2759,18.451786 37.99877,12.306987 35.042383,9.8025547 34.923911,9.7021952 34.769449,9.6480723 34.581499,9.6370967 30.960798,9.4256237 10.440538,26.211123 8.4008563,26.513292 7.9258475,25.453006 8.2597465,21.963129 11.693297,18.587622 c 0,0 12.853712,-11.1171798 11.722015,-12.4819086 -0.207237,-0.2499107 -0.51219,-0.3638785 -0.908887,-0.3580973 z","sodipodi:nodetypes":"sccccccccccccsssscccscsscsscscssccssss"},null,4),Mo(" /> "),D("rect",{style:$t([{stroke:n.outline},{fill:"none","fill-opacity":"1","stroke-width":"2.94776","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-opacity":"1","paint-order":"fill markers stroke"}]),id:"rect21023",width:"57.052246",height:"57.052242",x:"1.4738767",y:"1.4738767",ry:"9.5872917"},null,4)])]))])}const uh=Me(sT,[["render",oT]]);const aT={class:"inner-tile"},lT={props:["tile","visible","small","position"],data(){return{tileSize:"30px",borderRadius:"15px",flipped:!1,frontColor:Ii.value[this.tile],backColor:Ii.value[this.mod(this.tile+1)],frontOutline:xa.value[this.tile],backOutline:xa.value[this.mod(this.tile+1)],frontHighlight:Ra.value[this.tile],backHighlight:Ra.value[this.mod(this.tile+1)],gradient:Ii,outlineGradient:xa,highlightGradient:Ra}},watch:{tile(t){this.flipped=!this.flipped,this.flipped?(this.backColor=this.gradient[t],this.backOutline=this.outlineGradient[t],this.backHighlight=this.highlightGradient[t]):(this.frontColor=this.gradient[t],this.frontOutline=this.outlineGradient[t],this.frontHighlight=this.highlightGradient[t])}},methods:{mod(t){return(t%Q.value+Q.value)%Q.value}},mounted(){const t=xe(),e=()=>{const{width:n,height:s}=t.currentLayout,i=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1);this.borderRadius=.2*i+"px",this.tileSize=i+"px"};In(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},cT=Object.assign(lT,{__name:"Tile",setup(t){return er(e=>({"351e2f67":e.tileSize,d9f67c18:t.visible?1:0,"100eff76":e.borderRadius,"6720e946":t.visible?"pointer":"default",eaba475c:e.frontColor,"1fd6d3b8":e.backColor})),(e,n)=>(N(),j("div",{class:Je(["tile",{"flipped-tile":e.flipped}])},[D("div",aT,[D("div",{class:"front",style:$t({background:e.frontColor})},[$(uh,{outline:e.frontOutline,highlight:e.frontHighlight},null,8,["outline","highlight"])],4),D("div",{class:"back",style:$t({background:e.backColor})},[$(uh,{outline:e.backOutline,highlight:e.backHighlight},null,8,["outline","highlight"])],4)])],2))}}),uT=Me(cT,[["__scopeId","data-v-aebc1394"]]);const dT={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){return{currentChallenge:xe().currentChallenge,gradient:Ii}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=xe(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},hT=Object.assign(dT,{__name:"Layout",setup(t){return(e,n)=>(N(),j("div",null,[D("div",null,[(N(!0),j(Te,null,Ut(t.modelValue.matrix,(s,i)=>{var r;return N(),j("div",{class:"row",key:"row"+i+((r=e.currentChallenge)==null?void 0:r.currentPattern)+Ie(Q)},[(N(!0),j(Te,null,Ut(s,(o,a)=>{var l;return N(),lt(uT,{class:Je(["tile",{solution:Ie(wn)&&t.solution&&t.solution[i][a]>=1}]),small:t.small,tile:o,visible:o!==-1,position:[i,a],key:i+""+a+((l=e.currentChallenge)==null?void 0:l.currentPattern),style:$t({outline:t.target?`5px solid ${Ie(Ii)[t.target[i][a]]}`:"none"}),"data-moves":t.solution&&Ie(Q)!==2?t.solution[i][a]:"",onClick:c=>e.onTileClick(i,a)},null,8,["small","tile","visible","position","class","style","data-moves","onClick"])}),128))])}),128))])]))}}),Xo=Me(hT,[["__scopeId","data-v-165f2b62"]]);const fT={props:["modelValue"],emits:["update:modelValue"],data(){const t=xe();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(Q.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},pT={class:"diff"},mT=["value","max"];function gT(t,e,n,s,i,r){return N(),j("div",pT,[D("h2",null,"difficulty - "+ke(r.difficultyText),1),D("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,mT)])}const _T=Me(fT,[["render",gT],["__scopeId","data-v-38400e03"]]);const yT={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},vT={class:"diff"},wT=["value"];function CT(t,e,n,s,i,r){return N(),j("div",vT,[D("h2",null,"states - "+ke(r.moduloText),1),D("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,wT)])}const ET=Me(yT,[["render",CT],["__scopeId","data-v-5833a5d1"]]);const mr=t=>(us("data-v-127e0041"),t=t(),ds(),t),bT={class:"top-menu"},IT=mr(()=>D("span",null," DEV ",-1)),TT=[IT],ST={class:"top right"},kT=mr(()=>D("h1",null,"DevMode",-1)),xT={class:"input"},RT=mr(()=>D("hr",null,null,-1)),AT={key:0},PT=mr(()=>D("p",null,"Only one solution found:",-1)),NT={key:1},OT=mr(()=>D("p",null,"Multiple solutions found:",-1)),MT=["onClick"],DT={data(){const t=xe(),e=t.currentLayout,{width:n}=Bc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:Q.value,showModal:!1,showDevMode:!1,solutions:[],solutionIndex:0,determinant:0,moves:0,solveOnClick:!1}},watch:{difficulty(){this.store.difficulty=this.difficulty},internalModulo(t){Uc(t),this.randomize()},showModal(){this.showModal||this.randomize()}},computed:{solution(){return this.solutions.length===0?null:this.solutions[this.solutionIndex].matrix}},methods:{handleClick(t,e,n){if(this.moves++,wn.value)if(this.solveOnClick)this.updateSolutions();else for(const s of this.solutions)s.matrix[e][n]=((s.matrix[e][n]-1)%Q.value+Q.value)%Q.value;this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0,nt.advanceTasks(this.layout.id,nt.TASK_TYPES.FREEPLAY))},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty+Math.round(Math.random()*(Q.value-1))),this.$nextTick(()=>{try{wn.value&&this.updateSolutions()}catch(t){console.error(t),this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})},updateSolutions(){const{solutions:t,shortest:e,determinant:n}=Zm(this.layout.matrix);this.solutionIndex=e,this.solutions=t,this.determinant=n}},mounted(){this.randomize(),In(wn,t=>{t&&this.updateSolutions()})}},LT=Object.assign(DT,{__name:"FreeplayGame",setup(t){return(e,n)=>(N(),j("div",null,[D("div",bT,[Ie(wn)&&e.windowWidth<600?(N(),j("div",{key:0,class:"devmode",onClick:n[0]||(n[0]=s=>e.showDevMode=!e.showDevMode)},TT)):Ss("",!0),$(ze,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),$(_T,{modelValue:e.difficulty,"onUpdate:modelValue":n[1]||(n[1]=s=>e.difficulty=s)},null,8,["modelValue"])]),Wr(D("p",{class:Je(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},ke(e.moves)+" move"+ke(e.moves>1?"s":""),3),[[za,e.moves>0]]),D("div",ST,[$(cs,{text:"back",to:"/freeplaySelection"}),$(ET,{modelValue:e.internalModulo,"onUpdate:modelValue":n[2]||(n[2]=s=>e.internalModulo=s)},null,8,["modelValue"])]),D("main",null,[$(Nn,{name:"fade",mode:"out-in"},{default:Ke(()=>[(N(),lt(Xo,{key:Ie(Q),modelValue:e.layout,"onUpdate:modelValue":n[3]||(n[3]=s=>e.layout=s),solution:Ie(wn)?e.solution:null,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"]))]),_:1})]),Ie(wn)?Ss("",!0):(N(),j("div",{key:0,class:"open-dev left bottom",onClick:n[4]||(n[4]=s=>Ie(nh)(!0))},"v")),$(Nn,{name:"fade"},{default:Ke(()=>[Ie(wn)&&(!(e.windowWidth<600)||e.showDevMode)?(N(),j("div",{key:0,class:Je(["devmode middle",{left:e.windowWidth>=600,center:e.windowWidth<600}])},[D("div",{class:"close-dev",onClick:n[5]||(n[5]=s=>Ie(nh)(!1))},"x"),kT,D("div",xT,[Wr(D("input",{type:"checkbox","onUpdate:modelValue":n[6]||(n[6]=s=>e.solveOnClick=s)},null,512),[[M1,e.solveOnClick]]),Mo(" re-solve on click ")]),D("p",null,"Det: "+ke(e.determinant),1),RT,e.determinant!==0?(N(),j("div",AT,[PT,D("p",null,ke(e.solutions[0].moves)+" moves",1)])):(N(),j("div",NT,[OT,(N(!0),j(Te,null,Ut(e.solutions,(s,i)=>(N(),j("p",{class:Je(["cursor",{selected:e.solutionIndex===i}]),key:i,onClick:r=>e.solutionIndex=i},ke(s.moves)+" moves ",11,MT))),128))]))],2)):Ss("",!0)]),_:1}),$(Ln,{modelValue:e.showModal,"onUpdate:modelValue":n[8]||(n[8]=s=>e.showModal=s)},{default:Ke(()=>[D("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),$(ze,{black:"",text:"yay!",onClick:n[7]||(n[7]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),FT=Me(LT,[["__scopeId","data-v-127e0041"]]);const $T=t=>(us("data-v-582b4923"),t=t(),ds(),t),UT=$T(()=>D("h1",null,"no moves remaining!",-1)),WT={data(){const e=xe().currentPuzzle,n=e.base.copy(),{width:s}=Bc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=xe();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,nt.advanceTasks(this.puzzle.id,nt.TASK_TYPES.PUZZLE),t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},VT=Object.assign(WT,{__name:"PuzzleGame",setup(t){return(e,n)=>(N(),j("div",null,[$(cs,{class:"top right",text:"back",to:"/puzzleSelection"}),D("div",{class:Je(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[D("h1",null,ke(e.remainingMoves)+" move"+ke(e.remainingMoves>1?"s":"")+" remaining",1),$(ze,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),D("main",null,[$(Xo,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),$(Ln,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:Ke(()=>[D("h1",null,"you won in "+ke(e.moves)+" move"+ke(e.moves>1?"s":"")+"!",1),$(ze,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(Ln,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:Ke(()=>[UT,$(ze,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),$(cs,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),BT=Me(VT,[["__scopeId","data-v-582b4923"]]);const HT=t=>(us("data-v-3ab66eb5"),t=t(),ds(),t),zT={key:0},jT={class:"info"},qT={class:"moves"},KT={key:1,class:"info"},GT=HT(()=>D("h1",null,"you won the challenge!",-1)),YT={data(){const{currentChallenge:t}=xe();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0,hasStarted:!1}},methods:{handleClick(){const t=xe();if(this.nMoves-=1,this.nMovesPer-=1,this.hasStarted=!0,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,nt.advanceTasks(this.currentChallenge.id,nt.TASK_TYPES.CHALLENGE),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.showLostModal=!0,window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())},showLostModal(){this.showLostModal||(this.$router.push("/challengeSelection"),this.currentChallenge.reset())}},computed:{formattedTime(){const t=Math.floor(this.time/60).toString(),e=(this.time%60).toString();return`${t.padStart(2,"0")}:${e.padStart(2,"0")}`},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)+"%"},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1*this.hasStarted,this.time<=0&&(this.modalText="no time left!",this.showLostModal=!0,window.clearInterval(this.timerId))},1e3)}},QT=Object.assign(YT,{__name:"ChallengeGame",setup(t){return(e,n)=>(N(),j("div",null,[e.hasStarted?(N(),j("div",zT,[D("h2",jT,ke(e.formattedTime)+" "+ke(e.moves)+" - "+ke(e.percentageCompleted),1),D("h2",qT,ke(e.movesPer),1)])):(N(),j("h2",KT,"Click To Start The Challenge !")),D("main",null,[$(Nn,{name:"fade",mode:"out-in"},{default:Ke(()=>[(N(),lt(Xo,{key:e.currentChallenge.currentPattern,modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"]))]),_:1})]),$(Ln,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:Ke(()=>[GT,$(ze,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(Ln,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:Ke(()=>[D("h1",null,ke(e.modalText),1),$(ze,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),JT=Me(QT,[["__scopeId","data-v-3ab66eb5"]]),XT=D("h1",{class:"title"},"how to play",-1),ZT={key:0},eS=D("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),tS=D("h1",null,"Try to get all the tiles to be white!",-1),nS={key:1},sS=D("h1",null,"Nice! Now observe what happens at the corners",-1),iS={key:2},rS=D("h1",null,"Well done! Okay one last , a bit harder",-1),oS={key:3},aS=D("h1",null,"Great job! Ready to play?",-1),lS=D("h1",{class:"text-center"},"Try it here!",-1),cS={data(){const t=xe(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new Qt({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},uS=Object.assign(cS,{__name:"TutorialView",setup(t){return(e,n)=>(N(),j("div",null,[XT,$(Ln,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:Ke(()=>[e.stage===-1?(N(),j("div",ZT,[eS,tS,$(ze,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(N(),j("div",nS,[sS,$(ze,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(N(),j("div",iS,[rS,$(ze,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(N(),j("div",oS,[aS,$(ze,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),lS,$(Xo,{class:Je([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),dS=q0({history:c0("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:PI},{path:"/tutorial",name:"tutorial",component:uS},{path:"/freeplaySelection",name:"freeplaySelection",component:VI},{path:"/puzzleSelection",name:"puzzleSelection",component:QI},{path:"/challengeSelection",name:"challengeSelection",component:nT},{path:"/freeplayGame",name:"freeplayGame",component:FT},{path:"/puzzleGame",name:"puzzleGame",component:BT},{path:"/challengeGame",name:"challengeGame",component:JT}]}),jc=$1(Xb),eg=V1();tr(eg);jc.use(dS);jc.use(eg);jc.mount("#app");
