var Em=Object.defineProperty;var bm=(t,e,n)=>e in t?Em(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ir=(t,e,n)=>(bm(t,typeof e!="symbol"?e+"":e,n),n),Pc=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Gs=(t,e,n)=>(Pc(t,e,"read from private field"),n?n.call(t):e.get(t)),rr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Dt=(t,e,n)=>(Pc(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function il(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ee={},hs=[],yt=()=>{},Im=()=>!1,Tm=/^on[^a-z]/,io=t=>Tm.test(t),rl=t=>t.startsWith("onUpdate:"),Pe=Object.assign,ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sm=Object.prototype.hasOwnProperty,oe=(t,e)=>Sm.call(t,e),H=Array.isArray,fs=t=>ro(t)==="[object Map]",Wd=t=>ro(t)==="[object Set]",Q=t=>typeof t=="function",xe=t=>typeof t=="string",al=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Bd=t=>be(t)&&Q(t.then)&&Q(t.catch),Vd=Object.prototype.toString,ro=t=>Vd.call(t),km=t=>ro(t).slice(8,-1),Hd=t=>ro(t)==="[object Object]",ll=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xm=/-(\w)/g,Pt=oo(t=>t.replace(xm,(e,n)=>n?n.toUpperCase():"")),Rm=/\B([A-Z])/g,Ns=oo(t=>t.replace(Rm,"-$1").toLowerCase()),ao=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lo=oo(t=>t?`on${ao(t)}`:""),vi=(t,e)=>!Object.is(t,e),Fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Am=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pm=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Nc;const ha=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=xe(s)?Dm(s):Os(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(xe(t))return t;if(be(t))return t}}const Nm=/;(?![^(]*\))/g,Om=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Dm(t){const e={};return t.replace(Mm,"").split(Nm).forEach(n=>{if(n){const s=n.split(Om);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Nt(t){let e="";if(xe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Nt(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=il(Lm);function zd(t){return!!t||t===""}const Ae=t=>xe(t)?t:t==null?"":H(t)||be(t)&&(t.toString===Vd||!Q(t.toString))?JSON.stringify(t,jd,2):String(t),jd=(t,e)=>e&&e.__v_isRef?jd(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Wd(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!H(e)&&!Hd(e)?String(e):e;let at;class qd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Gd(t){return new qd(t)}function Um(t,e=at){e&&e.active&&e.effects.push(t)}function Kd(){return at}function $m(t){at&&at.cleanups.push(t)}const cl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yd=t=>(t.w&Cn)>0,Qd=t=>(t.n&Cn)>0,Wm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},Bm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Yd(i)&&!Qd(i)?i.delete(t):e[n++]=i,i.w&=~Cn,i.n&=~Cn}e.length=n}},Ir=new WeakMap;let ti=0,Cn=1;const fa=30;let ft;const zn=Symbol(""),pa=Symbol("");class ul{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Um(this,s)}run(){if(!this.active)return this.fn();let e=ft,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ft,ft=this,hn=!0,Cn=1<<++ti,ti<=fa?Wm(this):Oc(this),this.fn()}finally{ti<=fa&&Bm(this),Cn=1<<--ti,ft=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function Oc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const Jd=[];function Ms(){Jd.push(hn),hn=!1}function Ds(){const t=Jd.pop();hn=t===void 0?!0:t}function st(t,e,n){if(hn&&ft){let s=Ir.get(t);s||Ir.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=cl()),Xd(i)}}function Xd(t,e){let n=!1;ti<=fa?Qd(t)||(t.n|=Cn,n=!Yd(t)):n=!t.has(ft),n&&(t.add(ft),ft.deps.push(t))}function Ht(t,e,n,s,i,r){const o=Ir.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ll(n)&&a.push(o.get("length")):(a.push(o.get(zn)),fs(t)&&a.push(o.get(pa)));break;case"delete":H(t)||(a.push(o.get(zn)),fs(t)&&a.push(o.get(pa)));break;case"set":fs(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&ma(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ma(cl(l))}}function ma(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Mc(s);for(const s of n)s.computed||Mc(s)}function Mc(t,e){(t!==ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Vm(t,e){var n;return(n=Ir.get(t))==null?void 0:n.get(e)}const Hm=il("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(al)),zm=dl(),jm=dl(!1,!0),qm=dl(!0),Dc=Gm();function Gm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)st(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ms();const s=ie(this)[e].apply(this,n);return Ds(),s}}),t}function Km(t){const e=ie(this);return st(e,"has",t),e.hasOwnProperty(t)}function dl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ug:ih:e?sh:nh).get(s))return s;const o=H(s);if(!t){if(o&&oe(Dc,i))return Reflect.get(Dc,i,r);if(i==="hasOwnProperty")return Km}const a=Reflect.get(s,i,r);return(al(i)?Zd.has(i):Hm(i))||(t||st(s,"get",i),e)?a:ke(a)?o&&ll(i)?a:a.value:be(a)?t?oh(a):Hi(a):a}}const Ym=eh(),Qm=eh(!0);function eh(t=!1){return function(n,s,i,r){let o=n[s];if(ws(o)&&ke(o)&&!ke(i))return!1;if(!t&&(!Tr(i)&&!ws(i)&&(o=ie(o),i=ie(i)),!H(n)&&ke(o)&&!ke(i)))return o.value=i,!0;const a=H(n)&&ll(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?vi(i,o)&&Ht(n,"set",s,i):Ht(n,"add",s,i)),l}}function Jm(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ht(t,"delete",e,void 0),s}function Xm(t,e){const n=Reflect.has(t,e);return(!al(e)||!Zd.has(e))&&st(t,"has",e),n}function Zm(t){return st(t,"iterate",H(t)?"length":zn),Reflect.ownKeys(t)}const th={get:zm,set:Ym,deleteProperty:Jm,has:Xm,ownKeys:Zm},eg={get:qm,set(t,e){return!0},deleteProperty(t,e){return!0}},tg=Pe({},th,{get:jm,set:Qm}),hl=t=>t,lo=t=>Reflect.getPrototypeOf(t);function or(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&st(i,"get",e),st(i,"get",r));const{has:o}=lo(i),a=s?hl:n?ml:wi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ar(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&st(s,"has",t),st(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function lr(t,e=!1){return t=t.__v_raw,!e&&st(ie(t),"iterate",zn),Reflect.get(t,"size",t)}function Lc(t){t=ie(t);const e=ie(this);return lo(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function Fc(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=lo(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vi(e,o)&&Ht(n,"set",t,e):Ht(n,"add",t,e),this}function Uc(t){const e=ie(this),{has:n,get:s}=lo(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ht(e,"delete",t,void 0),r}function $c(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Ht(t,"clear",void 0,void 0),n}function cr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?hl:t?ml:wi;return!t&&st(a,"iterate",zn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ur(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=fs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?hl:e?ml:wi;return!e&&st(r,"iterate",l?pa:zn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function ng(){const t={get(r){return or(this,r)},get size(){return lr(this)},has:ar,add:Lc,set:Fc,delete:Uc,clear:$c,forEach:cr(!1,!1)},e={get(r){return or(this,r,!1,!0)},get size(){return lr(this)},has:ar,add:Lc,set:Fc,delete:Uc,clear:$c,forEach:cr(!1,!0)},n={get(r){return or(this,r,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:cr(!0,!1)},s={get(r){return or(this,r,!0,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ur(r,!1,!1),n[r]=ur(r,!0,!1),e[r]=ur(r,!1,!0),s[r]=ur(r,!0,!0)}),[t,n,e,s]}const[sg,ig,rg,og]=ng();function fl(t,e){const n=e?t?og:rg:t?ig:sg;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const ag={get:fl(!1,!1)},lg={get:fl(!1,!0)},cg={get:fl(!0,!1)},nh=new WeakMap,sh=new WeakMap,ih=new WeakMap,ug=new WeakMap;function dg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hg(t){return t.__v_skip||!Object.isExtensible(t)?0:dg(km(t))}function Hi(t){return ws(t)?t:pl(t,!1,th,ag,nh)}function rh(t){return pl(t,!1,tg,lg,sh)}function oh(t){return pl(t,!0,eg,cg,ih)}function pl(t,e,n,s,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=hg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function fn(t){return ws(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function Tr(t){return!!(t&&t.__v_isShallow)}function ah(t){return fn(t)||ws(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function co(t){return br(t,"__v_skip",!0),t}const wi=t=>be(t)?Hi(t):t,ml=t=>be(t)?oh(t):t;function lh(t){hn&&ft&&(t=ie(t),Xd(t.dep||(t.dep=cl())))}function ch(t,e){t=ie(t);const n=t.dep;n&&ma(n)}function ke(t){return!!(t&&t.__v_isRef===!0)}function He(t){return uh(t,!1)}function fg(t){return uh(t,!0)}function uh(t,e){return ke(t)?t:new pg(t,e)}class pg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:wi(e)}get value(){return lh(this),this._value}set value(e){const n=this.__v_isShallow||Tr(e)||ws(e);e=n?e:ie(e),vi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wi(e),ch(this))}}function je(t){return ke(t)?t.value:t}const mg={get:(t,e,n)=>je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function dh(t){return fn(t)?t:new Proxy(t,mg)}function gg(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=yg(t,n);return e}class _g{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vm(ie(this._object),this._key)}}function yg(t,e,n){const s=t[e];return ke(s)?s:new _g(t,e,n)}class vg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ul(e,()=>{this._dirty||(this._dirty=!0,ch(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return lh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wg(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=yt):(s=t.get,i=t.set),new vg(s,i,r||!i,n)}function pn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){uo(r,e,n)}return i}function ut(t,e,n,s){if(Q(t)){const r=pn(t,e,n,s);return r&&Bd(r)&&r.catch(o=>{uo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function uo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}Cg(t,n,i,s)}function Cg(t,e,n,s=!0){console.error(t)}let Ci=!1,ga=!1;const Ge=[];let St=0;const ps=[];let Ft=null,Dn=0;const hh=Promise.resolve();let gl=null;function _l(t){const e=gl||hh;return t?e.then(this?t.bind(this):t):e}function Eg(t){let e=St+1,n=Ge.length;for(;e<n;){const s=e+n>>>1;Ei(Ge[s])<t?e=s+1:n=s}return e}function yl(t){(!Ge.length||!Ge.includes(t,Ci&&t.allowRecurse?St+1:St))&&(t.id==null?Ge.push(t):Ge.splice(Eg(t.id),0,t),fh())}function fh(){!Ci&&!ga&&(ga=!0,gl=hh.then(mh))}function bg(t){const e=Ge.indexOf(t);e>St&&Ge.splice(e,1)}function Ig(t){H(t)?ps.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?Dn+1:Dn))&&ps.push(t),fh()}function Wc(t,e=Ci?St+1:0){for(;e<Ge.length;e++){const n=Ge[e];n&&n.pre&&(Ge.splice(e,1),e--,n())}}function ph(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>Ei(n)-Ei(s)),Dn=0;Dn<Ft.length;Dn++)Ft[Dn]();Ft=null,Dn=0}}const Ei=t=>t.id==null?1/0:t.id,Tg=(t,e)=>{const n=Ei(t)-Ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mh(t){ga=!1,Ci=!0,Ge.sort(Tg);const e=yt;try{for(St=0;St<Ge.length;St++){const n=Ge[St];n&&n.active!==!1&&pn(n,null,14)}}finally{St=0,Ge.length=0,ph(),Ci=!1,gl=null,(Ge.length||ps.length)&&mh()}}function Sg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Ee;h&&(i=n.map(m=>xe(m)?m.trim():m)),d&&(i=n.map(Am))}let a,l=s[a=Lo(e)]||s[a=Lo(Pt(e))];!l&&r&&(l=s[a=Lo(Ns(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function gh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=gh(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(be(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Pe(o,r),be(t)&&s.set(t,o),o)}function ho(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Ns(e))||oe(t,e))}let $e=null,fo=null;function Sr(t){const e=$e;return $e=t,fo=t&&t.type.__scopeId||null,e}function Ls(t){fo=t}function Fs(){fo=null}function lt(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Xc(-1);const r=Sr(e);let o;try{o=t(...i)}finally{Sr(r),s._d&&Xc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Uo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:_,inheritAttrs:C}=t;let x,A;const P=Sr(t);try{if(n.shapeFlag&4){const M=i||s;x=Tt(u.call(M,M,d,r,m,h,_)),A=l}else{const M=e;x=Tt(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:kg(l)}}catch(M){ci.length=0,uo(M,t,1),x=$(dt)}let z=x;if(A&&C!==!1){const M=Object.keys(A),{shapeFlag:J}=z;M.length&&J&7&&(o&&M.some(rl)&&(A=xg(A,o)),z=bn(z,A))}return n.dirs&&(z=bn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),x=z,Sr(P),x}const kg=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},xg=(t,e)=>{const n={};for(const s in t)(!rl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Bc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!ho(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Bc(s,o,c):!0:!!o;return!1}function Bc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ho(n,r))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pg=t=>t.__isSuspense;function Ng(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ig(t)}function Og(t,e){return vl(t,null,{flush:"post"})}const dr={};function mn(t,e,n){return vl(t,e,n)}function vl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ee){var a;const l=Kd()===((a=Ne)==null?void 0:a.scope)?Ne:null;let c,u=!1,d=!1;if(ke(t)?(c=()=>t.value,u=Tr(t)):fn(t)?(c=()=>t,s=!0):H(t)?(d=!0,u=t.some(M=>fn(M)||Tr(M)),c=()=>t.map(M=>{if(ke(M))return M.value;if(fn(M))return Un(M);if(Q(M))return pn(M,l,2)})):Q(t)?e?c=()=>pn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),ut(t,l,3,[m])}:c=yt,e&&s){const M=c;c=()=>Un(M())}let h,m=M=>{h=P.onStop=()=>{pn(M,l,4)}},_;if(ki)if(m=yt,e?n&&ut(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const M=A_();_=M.__watcherHandles||(M.__watcherHandles=[])}else return yt;let C=d?new Array(t.length).fill(dr):dr;const x=()=>{if(P.active)if(e){const M=P.run();(s||u||(d?M.some((J,_e)=>vi(J,C[_e])):vi(M,C)))&&(h&&h(),ut(e,l,3,[M,C===dr?void 0:d&&C[0]===dr?[]:C,m]),C=M)}else P.run()};x.allowRecurse=!!e;let A;i==="sync"?A=x:i==="post"?A=()=>Ze(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),A=()=>yl(x));const P=new ul(c,A);e?n?x():C=P.run():i==="post"?Ze(P.run.bind(P),l&&l.suspense):P.run();const z=()=>{P.stop(),l&&l.scope&&ol(l.scope.effects,P)};return _&&_.push(z),z}function Mg(t,e,n){const s=this.proxy,i=xe(t)?t.includes(".")?_h(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Ne;Cs(this);const a=vl(i,r.bind(s),n);return o?Cs(o):jn(),a}function _h(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Un(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))Un(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Wd(t)||fs(t))t.forEach(n=>{Un(n,e)});else if(Hd(t))for(const n in t)Un(t[n],e);return t}function _a(t,e){const n=$e;if(n===null)return t;const s=yo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ee]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function xn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ms(),ut(l,n,8,[t.el,a,t,e]),Ds())}}function Dg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{t.isMounted=!0}),bh(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],yh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},Lg={name:"BaseTransition",props:yh,setup(t,{slots:e}){const n=Uh(),s=Dg();let i;return()=>{const r=e.default&&wh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==dt){o=C;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return $o(o);const c=Vc(o);if(!c)return $o(o);const u=ya(c,a,s,n);va(c,u);const d=n.subTree,h=d&&Vc(d);let m=!1;const{getTransitionKey:_}=c.type;if(_){const C=_();i===void 0?i=C:C!==i&&(i=C,m=!0)}if(h&&h.type!==dt&&(!Ln(c,h)||m)){const C=ya(h,a,s,n);if(va(h,C),l==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},$o(o);l==="in-out"&&c.type!==dt&&(C.delayLeave=(x,A,P)=>{const z=vh(s,h);z[String(h.key)]=h,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},Fg=Lg;function vh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ya(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:C,onAppear:x,onAfterAppear:A,onAppearCancelled:P}=e,z=String(t.key),M=vh(n,t),J=(N,F)=>{N&&ut(N,s,9,F)},_e=(N,F)=>{const Y=F[1];J(N,F),H(N)?N.every(fe=>fe.length<=1)&&Y():N.length<=1&&Y()},we={mode:r,persisted:o,beforeEnter(N){let F=a;if(!n.isMounted)if(i)F=C||a;else return;N._leaveCb&&N._leaveCb(!0);const Y=M[z];Y&&Ln(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),J(F,[N])},enter(N){let F=l,Y=c,fe=u;if(!n.isMounted)if(i)F=x||l,Y=A||c,fe=P||u;else return;let D=!1;const le=N._enterCb=Ve=>{D||(D=!0,Ve?J(fe,[N]):J(Y,[N]),we.delayedLeave&&we.delayedLeave(),N._enterCb=void 0)};F?_e(F,[N,le]):le()},leave(N,F){const Y=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return F();J(d,[N]);let fe=!1;const D=N._leaveCb=le=>{fe||(fe=!0,F(),le?J(_,[N]):J(m,[N]),N._leaveCb=void 0,M[Y]===t&&delete M[Y])};M[Y]=t,h?_e(h,[N,D]):D()},clone(N){return ya(N,e,n,s)}};return we}function $o(t){if(po(t))return t=bn(t),t.children=null,t}function Vc(t){return po(t)?t.children?t.children[0]:void 0:t}function va(t,e){t.shapeFlag&6&&t.component?va(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Se?(o.patchFlag&128&&i++,s=s.concat(wh(o.children,e,a))):(e||o.type!==dt)&&s.push(a!=null?bn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ch(t,e){return Q(t)?(()=>Pe({name:t.name},e,{setup:t}))():t}const ai=t=>!!t.type.__asyncLoader,po=t=>t.type.__isKeepAlive;function Ug(t,e){Eh(t,"a",e)}function $g(t,e){Eh(t,"da",e)}function Eh(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)po(i.parent.vnode)&&Wg(s,e,n,i),i=i.parent}}function Wg(t,e,n,s){const i=mo(e,t,s,!0);Ii(()=>{ol(s[e],i)},n)}function mo(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),Cs(n);const a=ut(e,n,t,o);return jn(),Ds(),a});return s?i.unshift(r):i.push(r),r}}const Gt=t=>(e,n=Ne)=>(!ki||t==="sp")&&mo(t,(...s)=>e(...s),n),Bg=Gt("bm"),bi=Gt("m"),Vg=Gt("bu"),Hg=Gt("u"),bh=Gt("bum"),Ii=Gt("um"),zg=Gt("sp"),jg=Gt("rtg"),qg=Gt("rtc");function Gg(t,e=Ne){mo("ec",t,e)}const wl="components";function Kg(t,e){return Th(wl,t,!0,e)||t}const Ih=Symbol.for("v-ndc");function Yg(t){return xe(t)?Th(wl,t,!1)||t:t||Ih}function Th(t,e,n=!0,s=!1){const i=$e||Ne;if(i){const r=i.type;if(t===wl){const a=k_(r,!1);if(a&&(a===e||a===Pt(e)||a===ao(Pt(e))))return r}const o=Hc(i[t]||r[t],e)||Hc(i.appContext[t],e);return!o&&s?r:o}}function Hc(t,e){return t&&(t[e]||t[Pt(e)]||t[ao(Pt(e))])}function En(t,e,n,s){let i;const r=n&&n[s];if(H(t)||xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(be(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Qg(t,e,n={},s,i){if($e.isCE||$e.parent&&ai($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),$("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),j();const o=r&&Sh(r(n)),a=zt(Se,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Sh(t){return t.some(e=>xr(e)?!(e.type===dt||e.type===Se&&!Sh(e.children)):!0)?t:null}const wa=t=>t?$h(t)?yo(t)||t.proxy:wa(t.parent):null,li=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wa(t.parent),$root:t=>wa(t.root),$emit:t=>t.emit,$options:t=>Cl(t),$forceUpdate:t=>t.f||(t.f=()=>yl(t.update)),$nextTick:t=>t.n||(t.n=_l.bind(t.proxy)),$watch:t=>Mg.bind(t)}),Wo=(t,e)=>t!==Ee&&!t.__isScriptSetup&&oe(t,e),Jg={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Wo(s,e))return o[e]=1,s[e];if(i!==Ee&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,r[e];if(n!==Ee&&oe(n,e))return o[e]=4,n[e];Ca&&(o[e]=0)}}const u=li[e];let d,h;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ee&&oe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,oe(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Wo(i,e)?(i[e]=n,!0):s!==Ee&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ee&&oe(t,o)||Wo(e,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(li,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ca=!0;function Xg(t){const e=Cl(t),n=t.proxy,s=t.ctx;Ca=!1,e.beforeCreate&&jc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:_,activated:C,deactivated:x,beforeDestroy:A,beforeUnmount:P,destroyed:z,unmounted:M,render:J,renderTracked:_e,renderTriggered:we,errorCaptured:N,serverPrefetch:F,expose:Y,inheritAttrs:fe,components:D,directives:le,filters:Ve}=e;if(c&&Zg(c,s,null),o)for(const pe in o){const ce=o[pe];Q(ce)&&(s[pe]=ce.bind(n))}if(i){const pe=i.call(n,n);be(pe)&&(t.data=Hi(pe))}if(Ca=!0,r)for(const pe in r){const ce=r[pe],Mt=Q(ce)?ce.bind(n,n):Q(ce.get)?ce.get.bind(n,n):yt,Qt=!Q(ce)&&Q(ce.set)?ce.set.bind(n):yt,Et=Oe({get:Mt,set:Qt});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Xe=>Et.value=Xe})}if(a)for(const pe in a)kh(a[pe],s,n,pe);if(l){const pe=Q(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ce=>{gr(ce,pe[ce])})}u&&jc(u,t,"c");function se(pe,ce){H(ce)?ce.forEach(Mt=>pe(Mt.bind(n))):ce&&pe(ce.bind(n))}if(se(Bg,d),se(bi,h),se(Vg,m),se(Hg,_),se(Ug,C),se($g,x),se(Gg,N),se(qg,_e),se(jg,we),se(bh,P),se(Ii,M),se(zg,F),H(Y))if(Y.length){const pe=t.exposed||(t.exposed={});Y.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:Mt=>n[ce]=Mt})})}else t.exposed||(t.exposed={});J&&t.render===yt&&(t.render=J),fe!=null&&(t.inheritAttrs=fe),D&&(t.components=D),le&&(t.directives=le)}function Zg(t,e,n=yt){H(t)&&(t=Ea(t));for(const s in t){const i=t[s];let r;be(i)?"default"in i?r=xt(i.from||s,i.default,!0):r=xt(i.from||s):r=xt(i),ke(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function jc(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kh(t,e,n,s){const i=s.includes(".")?_h(n,s):()=>n[s];if(xe(t)){const r=e[t];Q(r)&&mn(i,r)}else if(Q(t))mn(i,t.bind(n));else if(be(t))if(H(t))t.forEach(r=>kh(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&mn(i,r,t)}}function Cl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>kr(l,c,o,!0)),kr(l,e,o)),be(e)&&r.set(e,l),l}function kr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&kr(t,r,n,!0),i&&i.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=e_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const e_={data:qc,props:Gc,emits:Gc,methods:ni,computed:ni,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:ni,directives:ni,watch:n_,provide:qc,inject:t_};function qc(t,e){return e?t?function(){return Pe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function t_(t,e){return ni(Ea(t),Ea(e))}function Ea(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Pe(Object.create(null),t,e):e}function Gc(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),zc(t),zc(e??{})):e}function n_(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Qe(t[s],e[s]);return n}function xh(){return{app:null,config:{isNativeTag:Im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s_=0;function i_(t,e){return function(s,i=null){Q(s)||(s=Pe({},s)),i!=null&&!be(i)&&(i=null);const r=xh(),o=new Set;let a=!1;const l=r.app={_uid:s_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:P_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=$(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,yo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ti=l;try{return c()}finally{Ti=null}}};return l}}let Ti=null;function gr(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Ne||$e;if(s||Ti){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ti._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function r_(){return!!(Ne||$e||Ti)}function o_(t,e,n,s=!1){const i={},r={};br(r,_o,1),t.propsDefaults=Object.create(null),Rh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:rh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function a_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ho(t.emitsOptions,h))continue;const m=e[h];if(l)if(oe(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const _=Pt(h);i[_]=ba(l,a,_,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{Rh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!oe(e,d)&&((u=Ns(d))===d||!oe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ba(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!oe(e,d))&&(delete r[d],c=!0)}c&&Ht(t,"set","$attrs")}function Rh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let u;i&&oe(i,u=Pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ho(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||Ee;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ba(i,l,d,c[d],t,!oe(c,d))}}return o}function ba(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Cs(i),s=c[n]=l.call(null,e),jn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ns(n))&&(s=!0))}return s}function Ah(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=d=>{l=!0;const[h,m]=Ah(d,e,!0);Pe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return be(t)&&s.set(t,hs),hs;if(H(r))for(let u=0;u<r.length;u++){const d=Pt(r[u]);Kc(d)&&(o[d]=Ee)}else if(r)for(const u in r){const d=Pt(u);if(Kc(d)){const h=r[u],m=o[d]=H(h)||Q(h)?{type:h}:Pe({},h);if(m){const _=Jc(Boolean,m.type),C=Jc(String,m.type);m[0]=_>-1,m[1]=C<0||_<C,(_>-1||oe(m,"default"))&&a.push(d)}}}const c=[o,a];return be(t)&&s.set(t,c),c}function Kc(t){return t[0]!=="$"}function Yc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Qc(t,e){return Yc(t)===Yc(e)}function Jc(t,e){return H(e)?e.findIndex(n=>Qc(n,t)):Q(e)&&Qc(e,t)?0:-1}const Ph=t=>t[0]==="_"||t==="$stable",El=t=>H(t)?t.map(Tt):[Tt(t)],l_=(t,e,n)=>{if(e._n)return e;const s=lt((...i)=>El(e(...i)),n);return s._c=!1,s},Nh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ph(i))continue;const r=t[i];if(Q(r))e[i]=l_(i,r,s);else if(r!=null){const o=El(r);e[i]=()=>o}}},Oh=(t,e)=>{const n=El(e);t.slots.default=()=>n},c_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),br(e,"_",n)):Nh(e,t.slots={})}else t.slots={},e&&Oh(t,e);br(t.slots,_o,1)},u_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Pe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Nh(e,i)),o=e}else e&&(Oh(t,e),o={default:1});if(r)for(const a in i)!Ph(a)&&!(a in o)&&delete i[a]};function Ia(t,e,n,s,i=!1){if(H(t)){t.forEach((h,m)=>Ia(h,e&&(H(e)?e[m]:e),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?yo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):ke(c)&&(c.value=null)),Q(l))pn(l,a,12,[o,u]);else{const h=xe(l),m=ke(l);if(h||m){const _=()=>{if(t.f){const C=h?oe(d,l)?d[l]:u[l]:l.value;i?H(C)&&ol(C,r):H(C)?C.includes(r)||C.push(r):h?(u[l]=[r],oe(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,oe(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ze(_,n)):_()}}}const Ze=Ng;function d_(t){return h_(t)}function h_(t,e){const n=ha();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=yt,insertStaticContent:_}=t,C=(f,p,g,y=null,w=null,E=null,R=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ln(f,p)&&(y=v(f),Xe(f,w,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:W,shapeFlag:L}=p;switch(b){case go:x(f,p,g,y);break;case dt:A(f,p,g,y);break;case _r:f==null&&P(p,g,y,R);break;case Se:D(f,p,g,y,w,E,R,I,S);break;default:L&1?J(f,p,g,y,w,E,R,I,S):L&6?le(f,p,g,y,w,E,R,I,S):(L&64||L&128)&&b.process(f,p,g,y,w,E,R,I,S,k)}W!=null&&w&&Ia(W,f&&f.ref,E,p||f,!p)},x=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=_(f.children,p,g,y,f.el,f.anchor)},z=({el:f,anchor:p},g,y)=>{let w;for(;f&&f!==p;)w=h(f),s(f,g,y),f=w;s(p,g,y)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},J=(f,p,g,y,w,E,R,I,S)=>{R=R||p.type==="svg",f==null?_e(p,g,y,w,E,R,I,S):F(f,p,w,E,R,I,S)},_e=(f,p,g,y,w,E,R,I)=>{let S,b;const{type:W,props:L,shapeFlag:B,transition:K,dirs:te}=f;if(S=f.el=o(f.type,E,L&&L.is,L),B&8?u(S,f.children):B&16&&N(f.children,S,null,y,w,E&&W!=="foreignObject",R,I),te&&xn(f,null,y,"created"),we(S,f,f.scopeId,R,y),L){for(const de in L)de!=="value"&&!mr(de)&&r(S,de,null,L[de],E,f.children,y,w,ze);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&It(b,y,f)}te&&xn(f,null,y,"beforeMount");const ye=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ye&&K.beforeEnter(S),s(S,p,g),((b=L&&L.onVnodeMounted)||ye||te)&&Ze(()=>{b&&It(b,y,f),ye&&K.enter(S),te&&xn(f,null,y,"mounted")},w)},we=(f,p,g,y,w)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(w){let E=w.subTree;if(p===E){const R=w.vnode;we(f,R,R.scopeId,R.slotScopeIds,w.parent)}}},N=(f,p,g,y,w,E,R,I,S=0)=>{for(let b=S;b<f.length;b++){const W=f[b]=I?sn(f[b]):Tt(f[b]);C(null,W,p,g,y,w,E,R,I)}},F=(f,p,g,y,w,E,R)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:W}=p;S|=f.patchFlag&16;const L=f.props||Ee,B=p.props||Ee;let K;g&&Rn(g,!1),(K=B.onVnodeBeforeUpdate)&&It(K,g,p,f),W&&xn(p,f,g,"beforeUpdate"),g&&Rn(g,!0);const te=w&&p.type!=="foreignObject";if(b?Y(f.dynamicChildren,b,I,g,y,te,E):R||ce(f,p,I,null,g,y,te,E,!1),S>0){if(S&16)fe(I,p,L,B,g,y,w);else if(S&2&&L.class!==B.class&&r(I,"class",null,B.class,w),S&4&&r(I,"style",L.style,B.style,w),S&8){const ye=p.dynamicProps;for(let de=0;de<ye.length;de++){const Re=ye[de],ht=L[Re],rs=B[Re];(rs!==ht||Re==="value")&&r(I,Re,ht,rs,w,f.children,g,y,ze)}}S&1&&f.children!==p.children&&u(I,p.children)}else!R&&b==null&&fe(I,p,L,B,g,y,w);((K=B.onVnodeUpdated)||W)&&Ze(()=>{K&&It(K,g,p,f),W&&xn(p,f,g,"updated")},y)},Y=(f,p,g,y,w,E,R)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],W=S.el&&(S.type===Se||!Ln(S,b)||S.shapeFlag&70)?d(S.el):g;C(S,b,W,null,y,w,E,R,!0)}},fe=(f,p,g,y,w,E,R)=>{if(g!==y){if(g!==Ee)for(const I in g)!mr(I)&&!(I in y)&&r(f,I,g[I],null,R,p.children,w,E,ze);for(const I in y){if(mr(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,R,p.children,w,E,ze)}"value"in y&&r(f,"value",g.value,y.value)}},D=(f,p,g,y,w,E,R,I,S)=>{const b=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),f==null?(s(b,g,y),s(W,g,y),N(p.children,g,W,w,E,R,I,S)):L>0&&L&64&&B&&f.dynamicChildren?(Y(f.dynamicChildren,B,g,w,E,R,I),(p.key!=null||w&&p===w.subTree)&&Mh(f,p,!0)):ce(f,p,g,W,w,E,R,I,S)},le=(f,p,g,y,w,E,R,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?w.ctx.activate(p,g,y,R,S):Ve(p,g,y,w,E,R,S):Ye(f,p,S)},Ve=(f,p,g,y,w,E,R)=>{const I=f.component=E_(f,y,w);if(po(f)&&(I.ctx.renderer=k),b_(I),I.asyncDep){if(w&&w.registerDep(I,se),!f.el){const S=I.subTree=$(dt);A(null,S,p,g)}return}se(I,f,p,g,w,E,R)},Ye=(f,p,g)=>{const y=p.component=f.component;if(Rg(f,p,g))if(y.asyncDep&&!y.asyncResolved){pe(y,p,g);return}else y.next=p,bg(y.update),y.update();else p.el=f.el,y.vnode=p},se=(f,p,g,y,w,E,R)=>{const I=()=>{if(f.isMounted){let{next:W,bu:L,u:B,parent:K,vnode:te}=f,ye=W,de;Rn(f,!1),W?(W.el=te.el,pe(f,W,R)):W=te,L&&Fo(L),(de=W.props&&W.props.onVnodeBeforeUpdate)&&It(de,K,W,te),Rn(f,!0);const Re=Uo(f),ht=f.subTree;f.subTree=Re,C(ht,Re,d(ht.el),v(ht),f,w,E),W.el=Re.el,ye===null&&Ag(f,Re.el),B&&Ze(B,w),(de=W.props&&W.props.onVnodeUpdated)&&Ze(()=>It(de,K,W,te),w)}else{let W;const{el:L,props:B}=p,{bm:K,m:te,parent:ye}=f,de=ai(p);if(Rn(f,!1),K&&Fo(K),!de&&(W=B&&B.onVnodeBeforeMount)&&It(W,ye,p),Rn(f,!0),L&&ue){const Re=()=>{f.subTree=Uo(f),ue(L,f.subTree,f,w,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=Uo(f);C(null,Re,g,y,f,w,E),p.el=Re.el}if(te&&Ze(te,w),!de&&(W=B&&B.onVnodeMounted)){const Re=p;Ze(()=>It(W,ye,Re),w)}(p.shapeFlag&256||ye&&ai(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&Ze(f.a,w),f.isMounted=!0,p=g=y=null}},S=f.effect=new ul(I,()=>yl(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,Rn(f,!0),b()},pe=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,a_(f,p.props,y,g),u_(f,p.children,g),Ms(),Wc(),Ds()},ce=(f,p,g,y,w,E,R,I,S=!1)=>{const b=f&&f.children,W=f?f.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){Qt(b,L,g,y,w,E,R,I,S);return}else if(B&256){Mt(b,L,g,y,w,E,R,I,S);return}}K&8?(W&16&&ze(b,w,E),L!==b&&u(g,L)):W&16?K&16?Qt(b,L,g,y,w,E,R,I,S):ze(b,w,E,!0):(W&8&&u(g,""),K&16&&N(L,g,y,w,E,R,I,S))},Mt=(f,p,g,y,w,E,R,I,S)=>{f=f||hs,p=p||hs;const b=f.length,W=p.length,L=Math.min(b,W);let B;for(B=0;B<L;B++){const K=p[B]=S?sn(p[B]):Tt(p[B]);C(f[B],K,g,null,w,E,R,I,S)}b>W?ze(f,w,E,!0,!1,L):N(p,g,y,w,E,R,I,S,L)},Qt=(f,p,g,y,w,E,R,I,S)=>{let b=0;const W=p.length;let L=f.length-1,B=W-1;for(;b<=L&&b<=B;){const K=f[b],te=p[b]=S?sn(p[b]):Tt(p[b]);if(Ln(K,te))C(K,te,g,null,w,E,R,I,S);else break;b++}for(;b<=L&&b<=B;){const K=f[L],te=p[B]=S?sn(p[B]):Tt(p[B]);if(Ln(K,te))C(K,te,g,null,w,E,R,I,S);else break;L--,B--}if(b>L){if(b<=B){const K=B+1,te=K<W?p[K].el:y;for(;b<=B;)C(null,p[b]=S?sn(p[b]):Tt(p[b]),g,te,w,E,R,I,S),b++}}else if(b>B)for(;b<=L;)Xe(f[b],w,E,!0),b++;else{const K=b,te=b,ye=new Map;for(b=te;b<=B;b++){const ot=p[b]=S?sn(p[b]):Tt(p[b]);ot.key!=null&&ye.set(ot.key,b)}let de,Re=0;const ht=B-te+1;let rs=!1,xc=0;const qs=new Array(ht);for(b=0;b<ht;b++)qs[b]=0;for(b=K;b<=L;b++){const ot=f[b];if(Re>=ht){Xe(ot,w,E,!0);continue}let bt;if(ot.key!=null)bt=ye.get(ot.key);else for(de=te;de<=B;de++)if(qs[de-te]===0&&Ln(ot,p[de])){bt=de;break}bt===void 0?Xe(ot,w,E,!0):(qs[bt-te]=b+1,bt>=xc?xc=bt:rs=!0,C(ot,p[bt],g,null,w,E,R,I,S),Re++)}const Rc=rs?f_(qs):hs;for(de=Rc.length-1,b=ht-1;b>=0;b--){const ot=te+b,bt=p[ot],Ac=ot+1<W?p[ot+1].el:y;qs[b]===0?C(null,bt,g,Ac,w,E,R,I,S):rs&&(de<0||b!==Rc[de]?Et(bt,g,Ac,2):de--)}}},Et=(f,p,g,y,w=null)=>{const{el:E,type:R,transition:I,children:S,shapeFlag:b}=f;if(b&6){Et(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){R.move(f,p,g,k);return}if(R===Se){s(E,p,g);for(let L=0;L<S.length;L++)Et(S[L],p,g,y);s(f.anchor,p,g);return}if(R===_r){z(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),s(E,p,g),Ze(()=>I.enter(E),w);else{const{leave:L,delayLeave:B,afterLeave:K}=I,te=()=>s(E,p,g),ye=()=>{L(E,()=>{te(),K&&K()})};B?B(E,te,ye):ye()}else s(E,p,g)},Xe=(f,p,g,y=!1,w=!1)=>{const{type:E,props:R,ref:I,children:S,dynamicChildren:b,shapeFlag:W,patchFlag:L,dirs:B}=f;if(I!=null&&Ia(I,null,g,f,!0),W&256){p.ctx.deactivate(f);return}const K=W&1&&B,te=!ai(f);let ye;if(te&&(ye=R&&R.onVnodeBeforeUnmount)&&It(ye,p,f),W&6)sr(f.component,g,y);else{if(W&128){f.suspense.unmount(g,y);return}K&&xn(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,g,w,k,y):b&&(E!==Se||L>0&&L&64)?ze(b,p,g,!1,!0):(E===Se&&L&384||!w&&W&16)&&ze(S,p,g),y&&ss(f)}(te&&(ye=R&&R.onVnodeUnmounted)||K)&&Ze(()=>{ye&&It(ye,p,f),K&&xn(f,null,p,"unmounted")},g)},ss=f=>{const{type:p,el:g,anchor:y,transition:w}=f;if(p===Se){is(g,y);return}if(p===_r){M(f);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:I}=w,S=()=>R(g,E);I?I(f.el,E,S):S()}else E()},is=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},sr=(f,p,g)=>{const{bum:y,scope:w,update:E,subTree:R,um:I}=f;y&&Fo(y),w.stop(),E&&(E.active=!1,Xe(R,f,p,g)),I&&Ze(I,p),Ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,g,y=!1,w=!1,E=0)=>{for(let R=E;R<f.length;R++)Xe(f[R],p,g,y,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),Wc(),ph(),p._vnode=f},k={p:C,um:Xe,m:Et,r:ss,mt:Ve,mc:N,pc:ce,pbc:Y,n:v,o:t};let U,ue;return e&&([U,ue]=e(k)),{render:O,hydrate:U,createApp:i_(O,U)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mh(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=sn(i[r]),a.el=o.el),n||Mh(o,a)),a.type===go&&(a.el=o.el)}}function f_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const p_=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),_r=Symbol.for("v-stc"),ci=[];let mt=null;function j(t=!1){ci.push(mt=t?null:[])}function m_(){ci.pop(),mt=ci[ci.length-1]||null}let Si=1;function Xc(t){Si+=t}function Dh(t){return t.dynamicChildren=Si>0?mt||hs:null,m_(),Si>0&&mt&&mt.push(t),t}function X(t,e,n,s,i,r){return Dh(G(t,e,n,s,i,r,!0))}function zt(t,e,n,s,i){return Dh($(t,e,n,s,i,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const _o="__vInternal",Lh=({key:t})=>t??null,yr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||ke(t)||Q(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lh(e),ref:e&&yr(e),scopeId:fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(bl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Si>0&&!o&&mt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mt.push(l),l}const $=g_;function g_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ih)&&(t=dt),xr(t)){const a=bn(t,e,!0);return n&&bl(a,n),Si>0&&!r&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag|=-2,a}if(x_(t)&&(t=t.__vccOpts),e){e=__(e);let{class:a,style:l}=e;a&&!xe(a)&&(e.class=Nt(a)),be(l)&&(ah(l)&&!H(l)&&(l=Pe({},l)),e.style=Os(l))}const o=xe(t)?1:Pg(t)?128:p_(t)?64:be(t)?4:Q(t)?2:0;return G(t,e,n,s,i,o,r,!0)}function __(t){return t?ah(t)||_o in t?Pe({},t):t:null}function bn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?v_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lh(a),ref:e&&e.ref?n&&i?H(i)?i.concat(yr(e)):[i,yr(e)]:yr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fh(t=" ",e=0){return $(go,null,t,e)}function y_(t="",e=!1){return e?(j(),zt(dt,null,t)):$(dt,null,t)}function Tt(t){return t==null||typeof t=="boolean"?$(dt):H(t)?$(Se,null,t.slice()):typeof t=="object"?sn(t):$(go,null,String(t))}function sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function bl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),bl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_o in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Fh(e)]):n=8);t.children=e,t.shapeFlag|=n}function v_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Nt([e.class,s.class]));else if(i==="style")e.style=Os([e.style,s.style]);else if(io(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function It(t,e,n,s=null){ut(t,e,7,[n,s])}const w_=xh();let C_=0;function E_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||w_,r={uid:C_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(s,i),emitsOptions:gh(s,i),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sg.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Uh=()=>Ne||$e;let Il,os,Zc="__VUE_INSTANCE_SETTERS__";(os=ha()[Zc])||(os=ha()[Zc]=[]),os.push(t=>Ne=t),Il=t=>{os.length>1?os.forEach(e=>e(t)):os[0](t)};const Cs=t=>{Il(t),t.scope.on()},jn=()=>{Ne&&Ne.scope.off(),Il(null)};function $h(t){return t.vnode.shapeFlag&4}let ki=!1;function b_(t,e=!1){ki=e;const{props:n,children:s}=t.vnode,i=$h(t);o_(t,n,i,e),c_(t,s);const r=i?I_(t,e):void 0;return ki=!1,r}function I_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=co(new Proxy(t.ctx,Jg));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?S_(t):null;Cs(t),Ms();const r=pn(s,t,0,[t.props,i]);if(Ds(),jn(),Bd(r)){if(r.then(jn,jn),e)return r.then(o=>{eu(t,o,e)}).catch(o=>{uo(o,t,0)});t.asyncDep=r}else eu(t,r,e)}else Wh(t,e)}function eu(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=dh(e)),Wh(t,n)}let tu;function Wh(t,e,n){const s=t.type;if(!t.render){if(!e&&tu&&!s.render){const i=s.template||Cl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:r,delimiters:a},o),l);s.render=tu(i,c)}}t.render=s.render||yt}Cs(t),Ms(),Xg(t),Ds(),jn()}function T_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}}))}function S_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return T_(t)},slots:t.slots,emit:t.emit,expose:e}}function yo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dh(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}}))}function k_(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function x_(t){return Q(t)&&"__vccOpts"in t}const Oe=(t,e)=>wg(t,e,ki);function Tl(t,e,n){const s=arguments.length;return s===2?be(e)&&!H(e)?xr(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xr(n)&&(n=[n]),$(t,e,n))}const R_=Symbol.for("v-scx"),A_=()=>xt(R_),P_="3.3.4",N_="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,nu=Fn&&Fn.createElement("template"),O_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Fn.createElementNS(N_,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{nu.innerHTML=s?`<svg>${t}</svg>`:t;const a=nu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function M_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function D_(t,e,n){const s=t.style,i=xe(n);if(n&&!i){if(e&&!xe(e))for(const r in e)n[r]==null&&Ta(s,r,"");for(const r in n)Ta(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const su=/\s*!important$/;function Ta(t,e,n){if(H(n))n.forEach(s=>Ta(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=L_(t,e);su.test(n)?t.setProperty(Ns(s),n.replace(su,""),"important"):t[s]=n}}const iu=["Webkit","Moz","ms"],Bo={};function L_(t,e){const n=Bo[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return Bo[e]=s;s=ao(s);for(let i=0;i<iu.length;i++){const r=iu[i]+s;if(r in t)return Bo[e]=r}return e}const ru="http://www.w3.org/1999/xlink";function F_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ru,e.slice(6,e.length)):t.setAttributeNS(ru,e,n);else{const r=Fm(e);n==null||r&&!zd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function U_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $_(t,e,n,s){t.addEventListener(e,n,s)}function W_(t,e,n,s){t.removeEventListener(e,n,s)}function B_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=V_(e);if(s){const c=r[e]=j_(s,i);$_(t,a,c,l)}else o&&(W_(t,a,o,l),r[e]=void 0)}}const ou=/(?:Once|Passive|Capture)$/;function V_(t){let e;if(ou.test(t)){e={};let s;for(;s=t.match(ou);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Vo=0;const H_=Promise.resolve(),z_=()=>Vo||(H_.then(()=>Vo=0),Vo=Date.now());function j_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(q_(s,n.value),e,5,[s])};return n.value=t,n.attached=z_(),n}function q_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const au=/^on[a-z]/,G_=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?M_(t,s,i):e==="style"?D_(t,n,s):io(e)?rl(e)||B_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K_(t,e,s,i))?U_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),F_(t,e,s,i))};function K_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&au.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||au.test(e)&&xe(n)?!1:e in t}function vo(t){const e=Uh();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ka(r,i))},s=()=>{const i=t(e.proxy);Sa(e.subTree,i),n(i)};Og(s),bi(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Ii(()=>i.disconnect())})}function Sa(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Sa(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ka(t.el,e);else if(t.type===Se)t.children.forEach(n=>Sa(n,e));else if(t.type===_r){let{el:n,anchor:s}=t;for(;n&&(ka(n,e),n!==s);)n=n.nextSibling}}function ka(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Xt="transition",Ks="animation",Es=(t,{slots:e})=>Tl(Fg,Y_(t),e);Es.displayName="Transition";const Bh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Es.props=Pe({},yh,Bh);const An=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},lu=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Y_(t){const e={};for(const D in t)D in Bh||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Q_(i),C=_&&_[0],x=_&&_[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:z,onLeave:M,onLeaveCancelled:J,onBeforeAppear:_e=A,onAppear:we=P,onAppearCancelled:N=z}=e,F=(D,le,Ve)=>{Pn(D,le?u:a),Pn(D,le?c:o),Ve&&Ve()},Y=(D,le)=>{D._isLeaving=!1,Pn(D,d),Pn(D,m),Pn(D,h),le&&le()},fe=D=>(le,Ve)=>{const Ye=D?we:P,se=()=>F(le,D,Ve);An(Ye,[le,se]),cu(()=>{Pn(le,D?l:r),Zt(le,D?u:a),lu(Ye)||uu(le,s,C,se)})};return Pe(e,{onBeforeEnter(D){An(A,[D]),Zt(D,r),Zt(D,o)},onBeforeAppear(D){An(_e,[D]),Zt(D,l),Zt(D,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(D,le){D._isLeaving=!0;const Ve=()=>Y(D,le);Zt(D,d),Z_(),Zt(D,h),cu(()=>{D._isLeaving&&(Pn(D,d),Zt(D,m),lu(M)||uu(D,s,x,Ve))}),An(M,[D,Ve])},onEnterCancelled(D){F(D,!1),An(z,[D])},onAppearCancelled(D){F(D,!0),An(N,[D])},onLeaveCancelled(D){Y(D),An(J,[D])}})}function Q_(t){if(t==null)return null;if(be(t))return[Ho(t.enter),Ho(t.leave)];{const e=Ho(t);return[e,e]}}function Ho(t){return Pm(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Pn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function cu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let J_=0;function uu(t,e,n,s){const i=t._endId=++J_,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=X_(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function X_(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${Xt}Delay`),r=s(`${Xt}Duration`),o=du(i,r),a=s(`${Ks}Delay`),l=s(`${Ks}Duration`),c=du(a,l);let u=null,d=0,h=0;e===Xt?o>0&&(u=Xt,d=o,h=r.length):e===Ks?c>0&&(u=Ks,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Xt:Ks:null,h=u?u===Xt?r.length:l.length:0);const m=u===Xt&&/\b(transform|all)(,|$)/.test(s(`${Xt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function du(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>hu(n)+hu(t[s])))}function hu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Z_(){return document.body.offsetHeight}const xa={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ys(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ys(t,!0),s.enter(t)):s.leave(t,()=>{Ys(t,!1)}):Ys(t,e))},beforeUnmount(t,{value:e}){Ys(t,e)}};function Ys(t,e){t.style.display=e?t._vod:"none"}const e1=Pe({patchProp:G_},O_);let fu;function t1(){return fu||(fu=d_(e1))}const n1=(...t)=>{const e=t1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=s1(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function s1(t){return xe(t)?document.querySelector(t):t}var i1=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Vh;const zi=t=>Vh=t,Hh=Symbol();function Ra(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ui||(ui={}));function r1(){const t=Gd(!0),e=t.run(()=>He({}));let n=[],s=[];const i=co({install(r){zi(i),i._a=r,r.provide(Hh,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!i1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const zh=()=>{};function pu(t,e,n,s=zh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Kd()&&$m(i),i}function as(t,...e){t.slice().forEach(n=>{n(...e)})}const o1=t=>t();function Aa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ra(i)&&Ra(s)&&t.hasOwnProperty(n)&&!ke(s)&&!fn(s)?t[n]=Aa(i,s):t[n]=s}return t}const a1=Symbol();function l1(t){return!Ra(t)||!t.hasOwnProperty(a1)}const{assign:nn}=Object;function c1(t){return!!(ke(t)&&t.effect)}function u1(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=gg(n.state.value[t]);return nn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=co(Oe(()=>{zi(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=jh(t,c,e,n,s,!0),l}function jh(t,e,n={},s,i,r){let o;const a=nn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),He({});let C;function x(N){let F;c=u=!1,typeof N=="function"?(N(s.state.value[t]),F={type:ui.patchFunction,storeId:t,events:m}):(Aa(s.state.value[t],N),F={type:ui.patchObject,payload:N,storeId:t,events:m});const Y=C=Symbol();_l().then(()=>{C===Y&&(c=!0)}),u=!0,as(d,F,s.state.value[t])}const A=r?function(){const{state:F}=n,Y=F?F():{};this.$patch(fe=>{nn(fe,Y)})}:zh;function P(){o.stop(),d=[],h=[],s._s.delete(t)}function z(N,F){return function(){zi(s);const Y=Array.from(arguments),fe=[],D=[];function le(se){fe.push(se)}function Ve(se){D.push(se)}as(h,{args:Y,name:N,store:J,after:le,onError:Ve});let Ye;try{Ye=F.apply(this&&this.$id===t?this:J,Y)}catch(se){throw as(D,se),se}return Ye instanceof Promise?Ye.then(se=>(as(fe,se),se)).catch(se=>(as(D,se),Promise.reject(se))):(as(fe,Ye),Ye)}}const M={_p:s,$id:t,$onAction:pu.bind(null,h),$patch:x,$reset:A,$subscribe(N,F={}){const Y=pu(d,N,F.detached,()=>fe()),fe=o.run(()=>mn(()=>s.state.value[t],D=>{(F.flush==="sync"?u:c)&&N({storeId:t,type:ui.direct,events:m},D)},nn({},l,F)));return Y},$dispose:P},J=Hi(M);s._s.set(t,J);const _e=s._a&&s._a.runWithContext||o1,we=s._e.run(()=>(o=Gd(),_e(()=>o.run(e))));for(const N in we){const F=we[N];if(ke(F)&&!c1(F)||fn(F))r||(_&&l1(F)&&(ke(F)?F.value=_[N]:Aa(F,_[N])),s.state.value[t][N]=F);else if(typeof F=="function"){const Y=z(N,F);we[N]=Y,a.actions[N]=F}}return nn(J,we),nn(ie(J),we),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:N=>{x(F=>{nn(F,N)})}}),s._p.forEach(N=>{nn(J,o.run(()=>N({store:J,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(J.$state,_),c=!0,u=!0,J}function d1(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=r_();return a=a||(c?xt(Hh,null):null),a&&zi(a),a=Vh,a._s.has(s)||(r?jh(s,e,i,a):u1(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function h1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function zo(t,e){const n={};for(const s in e){const i=e[s];n[s]=wt(i)?i.map(t):t(i)}return n}const di=()=>{},wt=Array.isArray,f1=/\/$/,p1=t=>t.replace(f1,"");function jo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=y1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function m1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&bs(e.matched[s],n.matched[i])&&qh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_1(t[n],e[n]))return!1;return!0}function _1(t,e){return wt(t)?mu(t,e):wt(e)?mu(e,t):t===e}function mu(t,e){return wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function y1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var xi;(function(t){t.pop="pop",t.push="push"})(xi||(xi={}));var Rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rr||(Rr={}));const qo="";function v1(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),p1(t)}const w1=/^[^#]+#/;function C1(t,e){return t.replace(w1,"#")+e}function E1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const b1=()=>({left:window.pageXOffset,top:window.pageYOffset});function I1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=E1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gu(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function T1(t,e){Pa.set(t,e)}function S1(t){const e=Pa.get(t);return Pa.delete(t),e}function k1(t=""){let e=[],n=[qo],s=0;t=v1(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:xi.pop};for(const h of e)h(a,l,d)}const o={location:qo,state:{},base:t,createHref:C1.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[qo],s=0},go(a,l=!0){const c=this.location,u=a<0?Rr.back:Rr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function x1(t){return typeof t=="string"||t&&typeof t=="object"}function Gh(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kh=Symbol("");var _u;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_u||(_u={}));function Is(t,e){return Ie(new Error,{type:t,[Kh]:!0},e)}function Lt(t,e){return t instanceof Error&&Kh in t&&(e==null||!!(t.type&e))}const yu="[^/]+?",R1={sensitive:!1,strict:!1,start:!0,end:!0},A1=/[.+*?^${}()[\]/\\]/g;function P1(t,e){const n=Ie({},R1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(A1,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:C,optional:x,regexp:A}=h;r.push({name:_,repeatable:C,optional:x});const P=A||yu;if(P!==yu){m+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+M.message)}}let z=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(z=x&&c.length<2?`(?:/${z})`:"/"+z),x&&(z+="?"),i+=z,m+=20,x&&(m+=-8),C&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=r[h-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:C,optional:x}=m,A=_ in c?c[_]:"";if(wt(A)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=wt(A)?A.join("/"):A;if(!P)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function N1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function O1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=N1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(vu(s))return 1;if(vu(i))return-1}return i.length-s.length}function vu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const M1={type:0,value:""},D1=/[a-zA-Z0-9_]/;function L1(t){if(!t)return[[]];if(t==="/")return[[M1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:D1.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function F1(t,e,n){const s=P1(L1(t.path),n),i=Ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function U1(t,e){const n=[],s=new Map;e=Eu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const m=!h,_=$1(u);_.aliasOf=h&&h.record;const C=Eu(e,u),x=[_];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of z)x.push(Ie({},_,{components:h?h.record.components:_.components,path:M,aliasOf:h?h.record:_}))}let A,P;for(const z of x){const{path:M}=z;if(d&&M[0]!=="/"){const J=d.record.path,_e=J[J.length-1]==="/"?"":"/";z.path=d.record.path+(M&&_e+M)}if(A=F1(z,d,C),h?h.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),m&&u.name&&!Cu(A)&&o(u.name)),_.children){const J=_.children;for(let _e=0;_e<J.length;_e++)r(J[_e],A,h&&h.children[_e])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:di}function o(u){if(Gh(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&O1(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Yh(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Cu(u)&&s.set(u.record.name,u)}function c(u,d){let h,m={},_,C;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Is(1,{location:u});C=h.record.name,m=Ie(wu(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&wu(u.params,h.keys.map(P=>P.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(P=>P.re.test(_)),h&&(m=h.parse(_),C=h.record.name);else{if(h=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw Is(1,{location:u,currentLocation:d});C=h.record.name,m=Ie({},d.params,u.params),_=h.stringify(m)}const x=[];let A=h;for(;A;)x.unshift(A.record),A=A.parent;return{name:C,path:_,params:m,matched:x,meta:B1(x)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function wu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function $1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:W1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function W1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Cu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B1(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Eu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Yh(t,e){return e.children.some(n=>n===t||Yh(t,n))}const Qh=/#/g,V1=/&/g,H1=/\//g,z1=/=/g,j1=/\?/g,Jh=/\+/g,q1=/%5B/g,G1=/%5D/g,Xh=/%5E/g,K1=/%60/g,Zh=/%7B/g,Y1=/%7C/g,ef=/%7D/g,Q1=/%20/g;function Sl(t){return encodeURI(""+t).replace(Y1,"|").replace(q1,"[").replace(G1,"]")}function J1(t){return Sl(t).replace(Zh,"{").replace(ef,"}").replace(Xh,"^")}function Na(t){return Sl(t).replace(Jh,"%2B").replace(Q1,"+").replace(Qh,"%23").replace(V1,"%26").replace(K1,"`").replace(Zh,"{").replace(ef,"}").replace(Xh,"^")}function X1(t){return Na(t).replace(z1,"%3D")}function Z1(t){return Sl(t).replace(Qh,"%23").replace(j1,"%3F")}function e0(t){return t==null?"":Z1(t).replace(H1,"%2F")}function Ar(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function t0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Jh," "),o=r.indexOf("="),a=Ar(o<0?r:r.slice(0,o)),l=o<0?null:Ar(r.slice(o+1));if(a in e){let c=e[a];wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bu(t){let e="";for(let n in t){const s=t[n];if(n=X1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(wt(s)?s.map(r=>r&&Na(r)):[s&&Na(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function n0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=wt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const s0=Symbol(""),Iu=Symbol(""),kl=Symbol(""),tf=Symbol(""),Oa=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Is(4,{from:n,to:e})):d instanceof Error?a(d):x1(d)?a(Is(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Go(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(i0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(rn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=h1(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&rn(h,n,s,r,o)()}))}}return i}function i0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tu(t){const e=xt(kl),n=xt(tf),s=Oe(()=>e.resolve(je(t.to))),i=Oe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(bs.bind(null,u));if(h>-1)return h;const m=Su(l[c-2]);return c>1&&Su(u)===m&&d[d.length-1].path!==m?d.findIndex(bs.bind(null,l[c-2])):h}),r=Oe(()=>i.value>-1&&l0(n.params,s.value.params)),o=Oe(()=>i.value>-1&&i.value===n.matched.length-1&&qh(n.params,s.value.params));function a(l={}){return a0(l)?e[je(t.replace)?"replace":"push"](je(t.to)).catch(di):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const r0=Ch({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tu,setup(t,{slots:e}){const n=Hi(Tu(t)),{options:s}=xt(kl),i=Oe(()=>({[ku(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ku(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),o0=r0;function a0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function l0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!wt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Su(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ku=(t,e,n)=>t??e??n,c0=Ch({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xt(Oa),i=Oe(()=>t.route||s.value),r=xt(Iu,0),o=Oe(()=>{let c=je(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Oe(()=>i.value.matched[o.value]);gr(Iu,Oe(()=>o.value+1)),gr(s0,a),gr(Oa,i);const l=He();return mn(()=>[l.value,a.value,t.name],([c,u,d],[h,m,_])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!bs(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return xu(n.default,{Component:h,route:c});const m=d.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=Tl(h,Ie({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return xu(n.default,{Component:x,route:c})||x}}});function xu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nf=c0;function u0(t){const e=U1(t.routes,t),n=t.parseQuery||t0,s=t.stringifyQuery||bu,i=t.history,r=Qs(),o=Qs(),a=Qs(),l=fg(en);let c=en;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,v=>""+v),d=zo.bind(null,e0),h=zo.bind(null,Ar);function m(v,O){let k,U;return Gh(v)?(k=e.getRecordMatcher(v),U=O):U=v,e.addRoute(U,k)}function _(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=Ie({},O||l.value),typeof v=="string"){const g=jo(n,v,O.path),y=e.resolve({path:g.path},O),w=i.createHref(g.fullPath);return Ie(g,y,{params:h(y.params),hash:Ar(g.hash),redirectedFrom:void 0,href:w})}let k;if("path"in v)k=Ie({},v,{path:jo(n,v.path,O.path).path});else{const g=Ie({},v.params);for(const y in g)g[y]==null&&delete g[y];k=Ie({},v,{params:d(g)}),O.params=d(O.params)}const U=e.resolve(k,O),ue=v.hash||"";U.params=u(h(U.params));const f=m1(s,Ie({},v,{hash:J1(ue),path:U.path})),p=i.createHref(f);return Ie({fullPath:f,hash:ue,query:s===bu?n0(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?jo(n,v,l.value.path):Ie({},v)}function z(v,O){if(c!==v)return Is(8,{from:O,to:v})}function M(v){return we(v)}function J(v){return M(Ie(P(v),{replace:!0}))}function _e(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),Ie({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function we(v,O){const k=c=A(v),U=l.value,ue=v.state,f=v.force,p=v.replace===!0,g=_e(k);if(g)return we(Ie(P(g),{state:typeof g=="object"?Ie({},ue,g.state):ue,force:f,replace:p}),O||k);const y=k;y.redirectedFrom=O;let w;return!f&&g1(s,U,k)&&(w=Is(16,{to:y,from:U}),Et(U,U,!0,!1)),(w?Promise.resolve(w):Y(y,U)).catch(E=>Lt(E)?Lt(E,2)?E:Qt(E):ce(E,y,U)).then(E=>{if(E){if(Lt(E,2))return we(Ie({replace:p},P(E.to),{state:typeof E.to=="object"?Ie({},ue,E.to.state):ue,force:f}),O||y)}else E=D(y,U,!0,p,ue);return fe(y,U,E),E})}function N(v,O){const k=z(v,O);return k?Promise.reject(k):Promise.resolve()}function F(v){const O=is.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Y(v,O){let k;const[U,ue,f]=d0(v,O);k=Go(U.reverse(),"beforeRouteLeave",v,O);for(const g of U)g.leaveGuards.forEach(y=>{k.push(rn(y,v,O))});const p=N.bind(null,v,O);return k.push(p),ze(k).then(()=>{k=[];for(const g of r.list())k.push(rn(g,v,O));return k.push(p),ze(k)}).then(()=>{k=Go(ue,"beforeRouteUpdate",v,O);for(const g of ue)g.updateGuards.forEach(y=>{k.push(rn(y,v,O))});return k.push(p),ze(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(wt(g.beforeEnter))for(const y of g.beforeEnter)k.push(rn(y,v,O));else k.push(rn(g.beforeEnter,v,O));return k.push(p),ze(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=Go(f,"beforeRouteEnter",v,O),k.push(p),ze(k))).then(()=>{k=[];for(const g of o.list())k.push(rn(g,v,O));return k.push(p),ze(k)}).catch(g=>Lt(g,8)?g:Promise.reject(g))}function fe(v,O,k){a.list().forEach(U=>F(()=>U(v,O,k)))}function D(v,O,k,U,ue){const f=z(v,O);if(f)return f;const p=O===en,g=cs?history.state:{};k&&(U||p?i.replace(v.fullPath,Ie({scroll:p&&g&&g.scroll},ue)):i.push(v.fullPath,ue)),l.value=v,Et(v,O,k,p),Qt()}let le;function Ve(){le||(le=i.listen((v,O,k)=>{if(!sr.listening)return;const U=A(v),ue=_e(U);if(ue){we(Ie(ue,{replace:!0}),U).catch(di);return}c=U;const f=l.value;cs&&T1(gu(f.fullPath,k.delta),b1()),Y(U,f).catch(p=>Lt(p,12)?p:Lt(p,2)?(we(p.to,U).then(g=>{Lt(g,20)&&!k.delta&&k.type===xi.pop&&i.go(-1,!1)}).catch(di),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ce(p,U,f))).then(p=>{p=p||D(U,f,!1),p&&(k.delta&&!Lt(p,8)?i.go(-k.delta,!1):k.type===xi.pop&&Lt(p,20)&&i.go(-1,!1)),fe(U,f,p)}).catch(di)}))}let Ye=Qs(),se=Qs(),pe;function ce(v,O,k){Qt(v);const U=se.list();return U.length?U.forEach(ue=>ue(v,O,k)):console.error(v),Promise.reject(v)}function Mt(){return pe&&l.value!==en?Promise.resolve():new Promise((v,O)=>{Ye.add([v,O])})}function Qt(v){return pe||(pe=!v,Ve(),Ye.list().forEach(([O,k])=>v?k(v):O()),Ye.reset()),v}function Et(v,O,k,U){const{scrollBehavior:ue}=t;if(!cs||!ue)return Promise.resolve();const f=!k&&S1(gu(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return _l().then(()=>ue(v,O,f)).then(p=>p&&I1(p)).catch(p=>ce(p,v,O))}const Xe=v=>i.go(v);let ss;const is=new Set,sr={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:x,getRoutes:C,resolve:A,options:t,push:M,replace:J,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Mt,install(v){const O=this;v.component("RouterLink",o0),v.component("RouterView",nf),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>je(l)}),cs&&!ss&&l.value===en&&(ss=!0,M(i.location).catch(ue=>{}));const k={};for(const ue in en)Object.defineProperty(k,ue,{get:()=>l.value[ue],enumerable:!0});v.provide(kl,O),v.provide(tf,rh(k)),v.provide(Oa,l);const U=v.unmount;is.add(v),v.unmount=function(){is.delete(v),is.size<1&&(c=en,le&&le(),le=null,l.value=en,ss=!1,pe=!1),U()}}};function ze(v){return v.reduce((O,k)=>O.then(()=>F(k)),Promise.resolve())}return sr}function d0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>bs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>bs(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+sf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},h0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new f0;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class f0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const of=function(t){const e=rf(t);return xl.encodeByteArray(e,!0)},Pr=function(t){return of(t).replace(/\./g,"")},Nr=function(t){try{return xl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){return af(void 0,t)}function af(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!m0(n)||(t[n]=af(t[n],e[n]));return t}function m0(t){return t!=="__proto__"}/**
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
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _0=()=>g0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nr(t[1]);return e&&JSON.parse(e)},Rl=()=>{try{return _0()||y0()||v0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lf=t=>{var e,n;return(n=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},w0=t=>{const e=lf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cf=()=>{var t;return(t=Rl())===null||t===void 0?void 0:t.config},uf=t=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function C0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pr(JSON.stringify(n)),Pr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Al(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function E0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b0(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hf(){return sf.NODE_ADMIN===!0}function I0(){try{return typeof indexedDB=="object"}catch{return!1}}function T0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="FirebaseError";class kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=S0,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?k0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,s)}}function k0(t,e){return t.replace(x0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const x0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ri(Nr(r[0])||""),n=Ri(Nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},R0=function(t){const e=ff(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},A0=function(t){const e=ff(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ru(r)&&Ru(o)){if(!Mr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ru(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function N0(t,e){const n=new O0(t,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");M0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ko),i.error===void 0&&(i.error=Ko),i.complete===void 0&&(i.complete=Ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ko(){}function Pl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Co=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class L0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(t){return t===Nn?void 0:t}function U0(t){return t.instantiationMode==="EAGER"}/**
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
 */class $0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const W0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},B0=he.INFO,V0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},H0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=V0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=B0,this._logHandler=H0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const z0=(t,e)=>e.some(n=>t instanceof n);let Au,Pu;function j0(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q0(){return Pu||(Pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,Da=new WeakMap,mf=new WeakMap,Yo=new WeakMap,Ol=new WeakMap;function G0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pf.set(n,t)}).catch(()=>{}),Ol.set(e,t),e}function K0(t){if(Da.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Da.set(t,e)}let La={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Y0(t){La=t(La)}function Q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Qo(this),e,...n);return mf.set(s,e.sort?e.sort():[e]),gn(s)}:q0().includes(t)?function(...e){return t.apply(Qo(this),e),gn(pf.get(this))}:function(...e){return gn(t.apply(Qo(this),e))}}function J0(t){return typeof t=="function"?Q0(t):(t instanceof IDBTransaction&&K0(t),z0(t,j0())?new Proxy(t,La):t)}function gn(t){if(t instanceof IDBRequest)return G0(t);if(Yo.has(t))return Yo.get(t);const e=J0(t);return e!==t&&(Yo.set(t,e),Ol.set(e,t)),e}const Qo=t=>Ol.get(t);function X0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=gn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(gn(o.result),l.oldVersion,l.newVersion,gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Z0=["get","getKey","getAll","getAllKeys","count"],ey=["put","add","delete","clear"],Jo=new Map;function Nu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jo.get(e))return Jo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ey.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Z0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Jo.set(e,r),r}Y0(t=>({...t,get:(e,n,s)=>Nu(e,n)||t.get(e,n,s),has:(e,n)=>!!Nu(e,n)||t.has(e,n)}));/**
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
 */class ty{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ny(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ny(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fa="@firebase/app",Ou="0.9.15";/**
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
 */const Yn=new Nl("@firebase/app"),sy="@firebase/app-compat",iy="@firebase/analytics-compat",ry="@firebase/analytics",oy="@firebase/app-check-compat",ay="@firebase/app-check",ly="@firebase/auth",cy="@firebase/auth-compat",uy="@firebase/database",dy="@firebase/database-compat",hy="@firebase/functions",fy="@firebase/functions-compat",py="@firebase/installations",my="@firebase/installations-compat",gy="@firebase/messaging",_y="@firebase/messaging-compat",yy="@firebase/performance",vy="@firebase/performance-compat",wy="@firebase/remote-config",Cy="@firebase/remote-config-compat",Ey="@firebase/storage",by="@firebase/storage-compat",Iy="@firebase/firestore",Ty="@firebase/firestore-compat",Sy="firebase",ky="10.1.0";/**
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
 */const Ua="[DEFAULT]",xy={[Fa]:"fire-core",[sy]:"fire-core-compat",[ry]:"fire-analytics",[iy]:"fire-analytics-compat",[ay]:"fire-app-check",[oy]:"fire-app-check-compat",[ly]:"fire-auth",[cy]:"fire-auth-compat",[uy]:"fire-rtdb",[dy]:"fire-rtdb-compat",[hy]:"fire-fn",[fy]:"fire-fn-compat",[py]:"fire-iid",[my]:"fire-iid-compat",[gy]:"fire-fcm",[_y]:"fire-fcm-compat",[yy]:"fire-perf",[vy]:"fire-perf-compat",[wy]:"fire-rc",[Cy]:"fire-rc-compat",[Ey]:"fire-gcs",[by]:"fire-gcs-compat",[Iy]:"fire-fst",[Ty]:"fire-fst-compat","fire-js":"fire-js",[Sy]:"fire-js-all"};/**
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
 */const Dr=new Map,$a=new Map;function Ry(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if($a.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Dr.values())Ry(n,t);return!0}function Ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new ji("app","Firebase",Ay);/**
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
 */class Py{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=ky;function gf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=cf()),!n)throw _n.create("no-options");const r=Dr.get(i);if(r){if(Mr(n,r.options)&&Mr(s,r.config))return r;throw _n.create("duplicate-app",{appName:i})}const o=new $0(i);for(const l of $a.values())o.addComponent(l);const a=new Py(n,s,o);return Dr.set(i,a),a}function _f(t=Ua){const e=Dr.get(t);if(!e&&t===Ua&&cf())return gf();if(!e)throw _n.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=xy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}Ss(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ny="firebase-heartbeat-database",Oy=1,Ai="firebase-heartbeat-store";let Xo=null;function yf(){return Xo||(Xo=X0(Ny,Oy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ai)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Xo}async function My(t){try{return await(await yf()).transaction(Ai).objectStore(Ai).get(vf(t))}catch(e){if(e instanceof kn)Yn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function Mu(t,e){try{const s=(await yf()).transaction(Ai,"readwrite");await s.objectStore(Ai).put(e,vf(t)),await s.done}catch(n){if(n instanceof kn)Yn.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(s.message)}}}function vf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dy=1024,Ly=30*24*60*60*1e3;class Fy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $y(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Du();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ly}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Du(),{heartbeatsToSend:n,unsentEntries:s}=Uy(this._heartbeatsCache.heartbeats),i=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Du(){return new Date().toISOString().substring(0,10)}function Uy(t,e=Dy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Lu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I0()?T0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await My(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lu(t){return Pr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wy(t){Ss(new Kn("platform-logger",e=>new ty(e),"PRIVATE")),Ss(new Kn("heartbeat",e=>new Fy(e),"PRIVATE")),yn(Fa,Ou,t),yn(Fa,Ou,"esm2017"),yn("fire-js","")}Wy("");var By="firebase",Vy="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(By,Vy,"app");const Hy={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},wf=gf(Hy);function Dl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zy=Cf,Ef=new ji("auth","Firebase",Cf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Nl("@firebase/auth");function jy(t,...e){Lr.logLevel<=he.WARN&&Lr.warn(`Auth (${Ws}): ${t}`,...e)}function vr(t,...e){Lr.logLevel<=he.ERROR&&Lr.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Ll(t,...e)}function Rt(t,...e){return Ll(t,...e)}function qy(t,e,n){const s=Object.assign(Object.assign({},zy()),{[e]:n});return new ji("auth","Firebase",s).create(e,{appName:t.name})}function Ll(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ef.create(t,...e)}function q(t,e,...n){if(!t)throw Ll(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function jt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gy(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gy()||E0()||"connection"in navigator)?navigator.onLine:!0}function Yy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Al()||df()}get(){return Ky()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new qi(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,s,i={}){return If(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bf.fetch()(Tf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function If(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Qy),e);try{const i=new Xy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qy(t,u,c);Ct(t,u)}}catch(i){if(i instanceof kn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function Eo(t,e,n,s,i={}){const r=await Bs(t,e,n,s,i);return"mfaPendingCredential"in r&&Ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Tf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fl(t.config,i):`${t.config.apiScheme}://${i}`}class Xy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),Jy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function ev(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tv(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=Ul(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:hi(Zo(i.auth_time)),issuedAtTime:hi(Zo(i.iat)),expirationTime:hi(Zo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zo(t){return Number(t)*1e3}function Ul(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nr(n);return i?JSON.parse(i):(vr("Failed to decode base64 JWT payload"),null)}catch(i){return vr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nv(t){const e=Ul(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kn&&sv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Pi(t,ev(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?av(r.providerUserInfo):[],a=ov(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function rv(t){const e=rt(t);await Fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ov(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function av(t){return t.map(e=>{var{providerId:n}=e,s=Dl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e){const n=await If(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Tf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await lv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ni;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tv(this,e)}reload(){return rv(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pi(this,Zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:J,providerData:_e,stsTokenManager:we}=n;q(z&&we,e,"internal-error");const N=Ni.fromJSON(this.name,we);q(typeof z=="string",e,"internal-error"),tn(d,e.name),tn(h,e.name),q(typeof M=="boolean",e,"internal-error"),q(typeof J=="boolean",e,"internal-error"),tn(m,e.name),tn(_,e.name),tn(C,e.name),tn(x,e.name),tn(A,e.name),tn(P,e.name);const F=new qn({uid:z,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:J,photoURL:_,phoneNumber:m,tenantId:C,stsTokenManager:N,createdAt:A,lastLoginAt:P});return _e&&Array.isArray(_e)&&(F.providerData=_e.map(Y=>Object.assign({},Y))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ni;i.updateFromServerResponse(n);const r=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Fr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;function $t(t){jt(t instanceof Function,"Expected a class definition");let e=Uu.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uu.set(t,e),e)}/**
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
 */class kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kf.type="NONE";const $u=kf;/**
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
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=wr(this.userKey,i.apiKey,r),this.fullPersistenceKey=wr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ms($t($u),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||$t($u);const o=wr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=qn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ms(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ms(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nf(e))return"Blackberry";if(Of(e))return"Webos";if($l(e))return"Safari";if((e.includes("chrome/")||Rf(e))&&!e.includes("edge/"))return"Chrome";if(Pf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xf(t=Ke()){return/firefox\//i.test(t)}function $l(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rf(t=Ke()){return/crios\//i.test(t)}function Af(t=Ke()){return/iemobile/i.test(t)}function Pf(t=Ke()){return/android/i.test(t)}function Nf(t=Ke()){return/blackberry/i.test(t)}function Of(t=Ke()){return/webos/i.test(t)}function bo(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cv(t=Ke()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uv(){return b0()&&document.documentMode===10}function Mf(t=Ke()){return bo(t)||Pf(t)||Of(t)||Nf(t)||/windows phone/i.test(t)||Af(t)}function dv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e=[]){let n;switch(t){case"Browser":n=Wu(Ke());break;case"Worker":n=`${Wu(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${s}`}async function Lf(t,e){return Bs(t,"GET","/v2/recaptchaConfig",Gi(t,e))}function Bu(t){return t!==void 0&&t.enterprise!==void 0}class Ff{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Uf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Rt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",hv().appendChild(s)})}function fv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pv="https://www.google.com/recaptcha/enterprise.js?render=",mv="recaptcha-enterprise",gv="NO_RECAPTCHA";class $f{constructor(e){this.type=mv,this.auth=Ki(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Lf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ff(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Bu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(gv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Bu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Uf(pv+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vu(t,e,n,s=!1){const i=new $f(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class _v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hu(this),this.idTokenSubscription=new Hu(this),this.beforeStateQueue=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ef,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}async initializeRecaptchaConfig(){const e=await Lf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ff(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new $f(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ki(t){return rt(t)}class Hu{constructor(e){this.auth=e,this.observer=null,this.addObserver=N0(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t,e){const n=Ml(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Mr(r,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function wv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Cv(t,e,n){const s=Ki(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Wf(e),{host:o,port:a}=Ev(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bv()}function Wf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ev(t){const e=Wf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zu(o)}}}function zu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function Iv(t,e){return Bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t,e){return Eo(t,"POST","/v1/accounts:signInWithPassword",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}async function Sv(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Wl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Oi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Vu(e,s,"signInWithPassword");return ea(e,i)}else return ea(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Vu(e,s,"signInWithPassword");return ea(e,r)}else return Promise.reject(i)});case"emailLink":return Tv(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Iv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sv(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return Eo(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="http://localhost";class Qn extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Dl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rv(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,s=si(ii(t)).deep_link_id;return(s?si(ii(s)).link:null)||s||n||e||t}class Bl{constructor(e){var n,s,i,r,o,a;const l=si(ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=xv((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rv(e);try{return new Bl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bl.parseLink(n);return q(s,"argument-error"),Oi._fromEmailAndCode(e,s.code,s.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Yi{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Yi{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return un.credential(n,s)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await qn._fromIdTokenResponse(e,s,i),o=ju(s);return new ks({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ju(s);return new ks({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ju(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends kn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ur(e,n,s,i)}}function Vf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,r,e,s):r})}async function Av(t,e,n=!1){const s=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",s)}/**
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
 */async function Pv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Pi(t,Vf(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Ul(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),ks._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e,n=!1){const s="signIn",i=await Vf(t,s,e),r=await ks._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Nv(t,e){return Hf(Ki(t),e)}function Ov(t,e,n){return Nv(rt(t),Vs.credential(e,n))}function Mv(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function Dv(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Lv(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}const $r="__sak";/**
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
 */class zf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){const t=Ke();return $l(t)||bo(t)}const Uv=1e3,$v=10;class jf extends zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fv()&&dv(),this.fallbackToPolling=Mf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);uv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$v):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const Wv=jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qf.type="SESSION";const Gf=qf;/**
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
 */function Bv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Io(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Bv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Io.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Vl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function Hv(t){At().location.href=t}/**
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
 */function Kf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function zv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qv(){return Kf()?self:null}/**
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
 */const Yf="firebaseLocalStorageDb",Gv=1,Wr="firebaseLocalStorage",Qf="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function To(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function Kv(){const t=indexedDB.deleteDatabase(Yf);return new Qi(t).toPromise()}function Ba(){const t=indexedDB.open(Yf,Gv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Wr,{keyPath:Qf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Wr)?e(s):(s.close(),await Kv(),e(await Ba()))})})}async function qu(t,e,n){const s=To(t,!0).put({[Qf]:e,value:n});return new Qi(s).toPromise()}async function Yv(t,e){const n=To(t,!1).get(e),s=await new Qi(n).toPromise();return s===void 0?null:s.value}function Gu(t,e){const n=To(t,!0).delete(e);return new Qi(n).toPromise()}const Qv=800,Jv=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Jv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(qv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zv(),!this.activeServiceWorker)return;this.sender=new Vv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await qu(e,$r,"1"),await Gu(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Yv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=To(i,!1).getAll();return new Qi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const Xv=Jf;new qi(3e4,6e4);/**
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
 */function Zv(t,e){return e?$t(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hl extends Wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e2(t){return Hf(t.auth,new Hl(t),t.bypassAuthState)}function t2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Pv(n,new Hl(t),t.bypassAuthState)}async function n2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Av(n,new Hl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e2;case"linkViaPopup":case"linkViaRedirect":return n2;case"reauthViaPopup":case"reauthViaRedirect":return t2;default:Ct(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new qi(2e3,1e4);class us extends Xf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Vl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s2.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="pendingRedirect",Cr=new Map;class r2 extends Xf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const s=await o2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o2(t,e){const n=c2(e),s=l2(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function a2(t,e){Cr.set(t._key(),e)}function l2(t){return $t(t._redirectPersistence)}function c2(t){return wr(i2,t.config.apiKey,t.name)}async function u2(t,e,n=!1){const s=Ki(t),i=Zv(s,e),o=await new r2(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=10*60*1e3;class h2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(e))}saveEventToCache(e){this.cachedEventUids.add(Ku(e)),this.lastProcessedEventTime=Date.now()}}function Ku(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function _2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p2(t);for(const n of e)try{if(y2(n))return}catch{}Ct(t,"unauthorized-domain")}function y2(t){const e=Wa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!g2.test(n))return!1;if(m2.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const v2=new qi(3e4,6e4);function Yu(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w2(t){return new Promise((e,n)=>{var s,i,r;function o(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),n(Rt(t,"network-request-failed"))},timeout:v2.get()})}if(!((i=(s=At().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const a=fv("iframefcb");return At()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Uf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Er=null,e})}let Er=null;function C2(t){return Er=Er||w2(t),Er}/**
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
 */const E2=new qi(5e3,15e3),b2="__/auth/iframe",I2="emulator/auth/iframe",T2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k2(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,I2):`https://${t.config.authDomain}/${b2}`,s={apiKey:e.apiKey,appName:t.name,v:Ws},i=S2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${$s(s).slice(1)}`}async function x2(t){const e=await C2(t),n=At().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:k2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=At().setTimeout(()=>{r(o)},E2.get());function l(){At().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const R2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A2=500,P2=600,N2="_blank",O2="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M2(t,e,n,s=A2,i=P2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},R2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ke().toLowerCase();n&&(a=Rf(c)?N2:n),xf(c)&&(e=e||O2,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(cv(c)&&a!=="_self")return D2(e||"",a),new Qu(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new Qu(d)}function D2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const L2="__/auth/handler",F2="emulator/auth/handler",U2=encodeURIComponent("fac");async function Ju(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ws,eventId:i};if(e instanceof Bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Yi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${U2}=${encodeURIComponent(l)}`:"";return`${$2(t)}?${$s(a).slice(1)}${c}`}function $2({config:t}){return t.emulator?Fl(t,F2):`https://${t.authDomain}/${L2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="webStorageSupport";class W2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=u2,this._overrideRedirectResult=a2}async _openPopup(e,n,s,i){var r;jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ju(e,n,s,Wa(),i);return M2(e,o,Vl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Ju(e,n,s,Wa(),i);return Hv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(jt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await x2(e),s=new h2(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ta,{type:ta},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ta];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mf()||$l()||bo()}}const B2=W2;var Xu="@firebase/auth",Zu="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function z2(t){Ss(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Df(t)},c=new yv(s,i,r,l);return wv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ss(new Kn("auth-internal",e=>{const n=Ki(e.getProvider("auth").getImmediate());return(s=>new V2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Xu,Zu,H2(t)),yn(Xu,Zu,"esm2017")}/**
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
 */const j2=5*60,q2=uf("authIdTokenMaxAge")||j2;let ed=null;const G2=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>q2)return;const i=n==null?void 0:n.token;ed!==i&&(ed=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K2(t=_f()){const e=Ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vv(t,{popupRedirectResolver:B2,persistence:[Xv,Wv,Gf]}),s=uf("authTokenSyncURL");if(s){const r=G2(s);Dv(n,r,()=>r(n.currentUser)),Mv(n,o=>r(o))}const i=lf("auth");return i&&Cv(n,`http://${i}`),n}z2("Browser");const zl=K2(wf),Br=He({}),On=He({});Lv(zl,async t=>{if(t){Br.value=t,On.value=await ab(`users/${t.uid}`);for(const{observable:e,path:n}of vm)On.value["game-data"]&&On.value["game-data"]["tileswap-naenae"]&&On.value["game-data"]["tileswap-naenae"][n]&&(e.value=On.value["game-data"]["tileswap-naenae"][n])}else Br.value={},On.value={}});const jl=Oe(()=>Br.value);Oe(()=>On.value);const ql=Oe(()=>Object.keys(Br.value).length>0),Y2=async(t,e)=>await Ov(zl,t,e),Va=async()=>await zl.signOut(),td="@firebase/database",nd="1.0.1";/**
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
 */let ep="";function Q2(t){ep=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ri(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new J2(e)}}catch{}return new X2},$n=tp("localStorage"),Ha=tp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Nl("@firebase/database"),Z2=function(){let t=1;return function(){return t++}}(),np=function(t){const e=D0(t),n=new P0;n.update(e);const s=n.digest();return xl.encodeByteArray(s)},Ji=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ji.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let Gn=null,sd=!0;const ew=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_s.logLevel=he.VERBOSE,Gn=_s.log.bind(_s),e&&Ha.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,Ha.remove("logging_enabled"))},qe=function(...t){if(sd===!0&&(sd=!1,Gn===null&&Ha.get("logging_enabled")===!0&&ew(!0)),Gn){const e=Ji.apply(null,t);Gn(e)}},Xi=function(t){return function(...e){qe(t,...e)}},za=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ji(...t);_s.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ji(...t)}`;throw _s.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+Ji(...t);_s.warn(e)},tw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xs="[MIN_NAME]",Jn="[MAX_NAME]",Hs=function(t,e){if(t===e)return 0;if(t===xs||e===Jn)return-1;if(e===xs||t===Jn)return 1;{const n=id(t),s=id(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sw=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Gl=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Gl(t[e[s]]);return n+="}",n},ip=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function it(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rp=function(t){T(!sp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},iw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ow(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const aw=new RegExp("^-?(0*)\\d{1,10}$"),lw=-2147483648,cw=2147483647,id=function(t){if(aw.test(t)){const e=Number(t);if(e>=lw&&e<=cw)return e}return null},zs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},uw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class dw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ys.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="5",op="v",ap="s",lp="r",cp="f",up=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dp="ls",hp="p",ja="ac",fp="websocket",pp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===fp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fw(t)&&(n.ns=t.namespace);const i=[];return it(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return p0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={},sa={};function Yl(t){const e=t.toString();return na[e]||(na[e]=new pw),na[e]}function mw(t,e){const n=t.toString();return sa[n]||(sa[n]=e()),sa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&zs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="start",_w="close",yw="pLPCommand",vw="pRTLPCB",_p="id",yp="pw",vp="ser",ww="cb",Cw="seg",Ew="ts",bw="d",Iw="dframe",wp=1870,Cp=30,Tw=wp-Cp,Sw=25e3,kw=3e4;class ds{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xi(e),this.stats_=Yl(n),this.urlFn=l=>(this.appCheckToken&&(l[ja]=this.appCheckToken),gp(n,pp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kw)),nw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ql((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rd)this.id=a,this.password=l;else if(o===_w)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[rd]="t",s[vp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ww]=this.scriptTagHolder.uniqueCallbackIdentifier),s[op]=Kl,this.transportSessionId&&(s[ap]=this.transportSessionId),this.lastSessionId&&(s[dp]=this.lastSessionId),this.applicationId&&(s[hp]=this.applicationId),this.appCheckToken&&(s[ja]=this.appCheckToken),typeof location<"u"&&location.hostname&&up.test(location.hostname)&&(s[lp]=cp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ds.forceAllow_=!0}static forceDisallow(){ds.forceDisallow_=!0}static isAvailable(){return ds.forceAllow_?!0:!ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iw()&&!rw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=of(n),i=ip(s,Tw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Iw]="t",s[_p]=e,s[yp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ql{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z2(),window[yw+this.uniqueCallbackIdentifier]=e,window[vw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ql.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_p]=this.myID,e[yp]=this.myPW,e[vp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cp+s.length<=wp;){const o=this.pendingSegs.shift();s=s+"&"+Cw+i+"="+o.seg+"&"+Ew+i+"="+o.ts+"&"+bw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Sw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=16384,Rw=45e3;let Vr=null;typeof MozWebSocket<"u"?Vr=MozWebSocket:typeof WebSocket<"u"&&(Vr=WebSocket);class pt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xi(this.connId),this.stats_=Yl(n),this.connURL=pt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[op]=Kl,typeof location<"u"&&location.hostname&&up.test(location.hostname)&&(o[lp]=cp),n&&(o[ap]=n),s&&(o[dp]=s),i&&(o[ja]=i),r&&(o[hp]=r),gp(e,fp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let s;hf(),this.mySock=new Vr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vr!==null&&!pt.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ri(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ip(n,xw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ds,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let s=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pt];else{const i=this.transports_=[];for(const r of Mi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=6e4,Pw=5e3,Nw=10*1024,Ow=100*1024,ia="t",od="d",Mw="s",ad="r",Dw="e",ld="o",cd="a",ud="n",dd="p",Lw="h";class Fw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xi("c:"+this.id+":"),this.transportManager_=new Mi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ow?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ia in e){const n=e[ia];n===cd?this.upgradeIfSecondaryHealthy_():n===ad?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ld&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ud,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(ia,e);if(od in e){const s=e[od];if(n===Lw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ud){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Mw?this.onConnectionShutdown_(s):n===ad?this.onReset_(s):n===Dw?za("Server Error: "+s):n===ld?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):za("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kl!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Aw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends bp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Al()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=32,fd=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new ge("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function Ip(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Uw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ge)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ge(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=ne(t),s=ne(e);if(n===null)return e;if(n===s)return Je(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kp(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $w{constructor(e,n){this.errorPrefix_=n,this.parts_=Tp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Co(this.parts_[s]);xp(this)}}function Ww(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Co(e),xp(t)}function Bw(t){const e=t.parts_.pop();t.byteLength_-=Co(e),t.parts_.length>0&&(t.byteLength_-=1)}function xp(t){if(t.byteLength_>fd)throw new Error(t.errorPrefix_+"has a key path longer than "+fd+" bytes ("+t.byteLength_+").");if(t.parts_.length>hd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hd+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends bp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Jl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=1e3,Vw=60*5*1e3,pd=30*1e3,Hw=1.3,zw=3e4,jw="server_kill",md=3;class Bt extends Ep{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=Xi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=Vw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const s=Ts(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||A0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=R0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):za("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zw&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Fw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{nt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(jw)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nt(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ma(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Gl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ge(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=md&&(this.reconnectDelay_=pd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=md&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ep.replace(/\./g,"-")]=1,Al()?e["framework.cordova"]=1:df()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hr.getInstance().currentlyOnline();return Ma(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(xs,e),i=new Z(xs,n);return this.compare(s,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class Rp extends So{static get __EMPTY_NODE(){return fr}static set __EMPTY_NODE(e){fr=e}compare(e,n){return Hs(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Jn,fr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,fr)}toString(){return".key"}}const vs=new Rp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=i??et.EMPTY_NODE,this.right=r??et.EMPTY_NODE}copy(e,n,s,i,r){return new Fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class qw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pr(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new qw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e){return Hs(t.name,e.name)}function Xl(t,e){return Hs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;function Kw(t){qa=t}const Ap=function(t){return typeof t=="number"?"number:"+rp(t):"string:"+t},Pp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else T(t===qa||t.isEmpty(),"priority of unexpected type.");T(t===qa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pp(this.priorityNode_)}static set __childrenNodeConstructor(e){gd=e}static get __childrenNodeConstructor(){return gd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:ne(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ap(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rp(this.value_):e+=this.value_,this.lazyHash_=np(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),r=Le.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Np,Op;function Yw(t){Np=t}function Qw(t){Op=t}class Jw extends So{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Jn,new Le("[PRIORITY-POST]",Op))}makePost(e,n){const s=Np(e);return new Z(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new Jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=Math.log(2);class Zw{constructor(e){const n=r=>parseInt(Math.log(r)/Xw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=i(l,m),C=i(m+1,c);return d=t[m],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,_,C)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,C){const x=d-_,A=d;d-=_;const P=i(x+1,A),z=t[x],M=n?n(z):z;m(new Fe(M,z.node,C,null,P))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));C?h(x,Fe.BLACK):(h(x,Fe.BLACK),h(x,Fe.RED))}return u},o=new Zw(t.length),a=r(o);return new et(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const ls={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ls&&Te,"ChildrenNode.ts has not been loaded"),ra=ra||new Wt({".priority":ls},{".priority":Te}),ra}get(e){const n=Ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zr(s,e.getCompare()):a=ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const s=Or(this.indexes_,(i,r)=>{const o=Ts(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zr(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Or(this.indexes_,i=>{if(i===ls)return i;{const r=n.get(e.name);return r?i.remove(new Z(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Pp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zs||(Zs=new V(new et(Xl),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zs:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zs:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{T(ne(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ap(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":np(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zi?-1:0}withIndex(e){if(e===vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vs?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eC extends V{constructor(){super(new et(Xl),V.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Zi=new eC;Object.defineProperties(Z,{MIN:{value:new Z(xs,V.EMPTY_NODE)},MAX:{value:new Z(Jn,Zi)}});Rp.__EMPTY_NODE=V.EMPTY_NODE;Le.__childrenNodeConstructor=V;Kw(Zi);Qw(Zi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=!0;function Ue(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Ue(e))}if(!(t instanceof Array)&&tC){const n=[];let s=!1;if(it(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=zr(n,Gw,o=>o.name,Xl);if(s){const o=zr(n,Te.getCompare());return new V(r,Ue(e),new Wt({".priority":o},{".priority":Te}))}else return new V(r,Ue(e),Wt.Default)}else{let n=V.EMPTY_NODE;return it(t,(s,i)=>{if(Kt(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}Yw(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC extends So{constructor(e){super(),this.indexPath_=e,T(!ee(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hs(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Zi);return new Z(Jn,e)}toString(){return Tp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC extends So{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=Ue(e);return new Z(n,s)}toString(){return".value"}}const iC=new sC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Di(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Di(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,s)):o.trackChildChange(Li(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(Di(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Li(i,r,o))}else s.trackChildChange(Rs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.indexedFilter_=new Zl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fi.getStartPost_(e),this.endPost_=Fi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Z(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new Z(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Z(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Li(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Di(n,d));const C=a.updateImmediateChild(n,V.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Rs(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Di(c.name,c.node)),r.trackChildChange(Rs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aC(t){return t.loadsAllData()?new Zl(t.getIndex()):t.hasLimit()?new oC(t):new Fi(t)}function _d(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===iC?n="$value":t.index_===vs?n="$key":(T(t.index_ instanceof nC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Ep{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jr.getListenId_(e,s),a={};this.listens_[o]=a;const l=_d(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ts(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=jr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_d(e._queryParams),s=e._path.toString(),i=new wo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ri(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return{value:null,children:new Map}}function Dp(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ne(e);t.children.has(s)||t.children.set(s,qr());const i=t.children.get(s);e=ve(e),Dp(i,e,n)}}function Ga(t,e,n){t.value!==null?n(e,t.value):cC(t,(s,i)=>{const r=new ge(e.toString()+"/"+s);Ga(i,r,n)})}function cC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&it(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=10*1e3,dC=30*1e3,hC=5*60*1e3;class fC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uC(e);const s=vd+(dC-vd)*Math.random();fi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;it(e,(i,r)=>{r>0&&Kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*hC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Lp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=Lp()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new Gr(ae(),n,this.revert)}}else return T(ne(this.path)===e,"operationForChild called for unrelated child."),new Gr(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Ui(this.source,ae()):new Ui(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return ee(this.path)?new Xn(this.source,ae(),this.snap.getImmediateChild(e)):new Xn(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new Xn(this.source,ae(),n.value):new $i(this.source,ae(),n)}else return T(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $i(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rC(o.childName,o.snapshotNode))}),ei(t,i,"child_removed",e,s,n),ei(t,i,"child_added",e,s,n),ei(t,i,"child_moved",r,s,n),ei(t,i,"child_changed",e,s,n),ei(t,i,"value",e,s,n),i}function ei(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>_C(t,a,l)),o.forEach(a=>{const l=gC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _C(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e){return{eventCache:t,serverCache:e}}function pi(t,e,n,s){return ko(new Tn(e,n,s),t.serverCache)}function Fp(t,e,n,s){return ko(t.eventCache,new Tn(e,n,s))}function Kr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const yC=()=>(oa||(oa=new et(sw)),oa);class Ce{constructor(e,n=yC()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return it(e,(s,i)=>{n=n.set(new ge(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(ee(e))return null;{const s=ne(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:De(new ge(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new Ce(null)}}set(e,n){if(ee(e))return new Ce(n,this.children);{const s=ne(e),r=(this.children.get(s)||new Ce(null)).set(ve(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(ee(e))return n;{const s=ne(e),r=(this.children.get(s)||new Ce(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),De(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=ne(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),De(n,i),s):new Ce(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new Ce(null))}}function mi(t,e,n){if(ee(e))return new vt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Je(i,e);return r=r.updateChild(o,n),new vt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new vt(r)}}}function wd(t,e,n){let s=t;return it(n,(i,r)=>{s=mi(s,De(e,i),r)}),s}function Cd(t,e){if(ee(e))return vt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new vt(n)}}function Ka(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function Ed(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new Z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Z(s,i.value))}),e}function vn(t,e){if(ee(e))return t;{const n=ns(t,e);return n!=null?new vt(new Ce(n)):new vt(t.writeTree_.subtree(e))}}function Ya(t){return t.writeTree_.isEmpty()}function As(t,e){return Up(ae(),t.writeTree_,e)}function Up(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Up(De(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){return Vp(e,t)}function vC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=mi(t.visibleWrites,e,n)),t.lastWriteId=s}function wC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function CC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&EC(a,s.path)?i=!1:gt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return bC(t),!0;if(s.snap)t.visibleWrites=Cd(t.visibleWrites,s.path);else{const a=s.children;it(a,l=>{t.visibleWrites=Cd(t.visibleWrites,De(s.path,l))})}return!0}else return!1}function EC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(De(t.path,n),e))return!0;return!1}function bC(t){t.visibleWrites=$p(t.allWrites,IC,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IC(t){return t.visible}function $p(t,e,n){let s=vt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)gt(n,o)?(a=Je(n,o),s=mi(s,a,r.snap)):gt(o,n)&&(a=Je(o,n),s=mi(s,ae(),r.snap.getChild(a)));else if(r.children){if(gt(n,o))a=Je(n,o),s=wd(s,a,r.children);else if(gt(o,n))if(a=Je(o,n),ee(a))s=wd(s,ae(),r.children);else{const l=Ts(r.children,ne(a));if(l){const c=l.getChild(ve(a));s=mi(s,ae(),c)}}}else throw Us("WriteRecord should have .snap or .children")}}return s}function Wp(t,e,n,s,i){if(!s&&!i){const r=ns(t.visibleWrites,e);if(r!=null)return r;{const o=vn(t.visibleWrites,e);if(Ya(o))return n;if(n==null&&!Ka(o,ae()))return null;{const a=n||V.EMPTY_NODE;return As(o,a)}}}else{const r=vn(t.visibleWrites,e);if(!i&&Ya(r))return n;if(!i&&n==null&&!Ka(r,ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=$p(t.allWrites,o,e),l=n||V.EMPTY_NODE;return As(a,l)}}}function TC(t,e,n){let s=V.EMPTY_NODE;const i=ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=vn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=As(vn(r,new ge(o)),a);s=s.updateImmediateChild(o,l)}),Ed(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=vn(t.visibleWrites,e);return Ed(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function SC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,n);if(Ka(t.visibleWrites,r))return null;{const o=vn(t.visibleWrites,r);return Ya(o)?i.getChild(n):As(o,i.getChild(n))}}function kC(t,e,n,s){const i=De(e,n),r=ns(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return As(o,s.getNode().getImmediateChild(n))}else return null}function xC(t,e){return ns(t.visibleWrites,e)}function RC(t,e,n,s,i,r,o){let a;const l=vn(t.visibleWrites,e),c=ns(l,ae());if(c!=null)a=c;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function AC(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Yr(t,e,n,s){return Wp(t.writeTree,t.treePath,e,n,s)}function sc(t,e){return TC(t.writeTree,t.treePath,e)}function bd(t,e,n,s){return SC(t.writeTree,t.treePath,e,n,s)}function Qr(t,e){return xC(t.writeTree,De(t.treePath,e))}function PC(t,e,n,s,i,r){return RC(t.writeTree,t.treePath,e,n,s,i,r)}function ic(t,e,n){return kC(t.writeTree,t.treePath,e,n)}function Bp(t,e){return Vp(De(t.treePath,e),t.writeTree)}function Vp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Li(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Di(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Li(s,e.snapshotNode,i.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hp=new OC;class rc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ic(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),r=PC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){return{filter:t}}function DC(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LC(t,e,n,s,i){const r=new NC;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=Qa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Jr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=UC(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ja(t,e,c.path,c.children,s,i,a,r))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=BC(t,e,c.path,s,i,r):o=$C(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===_t.LISTEN_COMPLETE)o=WC(t,e,n.path,s,r);else throw Us("Unknown operation type: "+n.type);const l=r.getChanges();return FC(e,o,l),{viewCache:o,changes:l}}function FC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Kr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Mp(Kr(e)))}}function zp(t,e,n,s,i,r){const o=e.eventCache;if(Qr(s,n)!=null)return e;{let a,l;if(ee(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zn(e),u=c instanceof V?c:V.EMPTY_NODE,d=sc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Yr(s,Zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ne(n);if(c===".priority"){T(In(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=bd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=bd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ic(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return pi(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Jr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=ne(n);if(!l.isCompleteForPath(n)&&In(n)>1)return e;const _=ve(n),x=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),m,x,_,Hp,null)}const d=Fp(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),h=new rc(i,d,r);return zp(t,d,n,i,h,a)}function Qa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new rc(i,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=pi(e,c,!0,t.filter.filtersNodes());else{const d=ne(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=pi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ve(n),m=a.getNode().getImmediateChild(d);let _;if(ee(h))_=s;else{const C=u.getCompleteChild(d);C!=null?Ip(h)===".priority"&&C.getChild(Sp(h)).isEmpty()?_=C:_=C.updateChild(h,s):_=V.EMPTY_NODE}if(m.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=pi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Id(t,e){return t.eventCache.isCompleteForChild(e)}function UC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=De(n,l);Id(e,ne(u))&&(a=Qa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=De(n,l);Id(e,ne(u))||(a=Qa(t,a,u,c,i,r,o))}),a}function Td(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ja(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Td(t,m,h);l=Jr(t,l,new ge(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),C=Td(t,_,h);l=Jr(t,l,new ge(d),C,i,r,o,a)}}),l}function $C(t,e,n,s,i,r,o){if(Qr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ee(n)){let c=new Ce(null);return l.getNode().forEachChild(vs,(u,d)=>{c=c.set(new ge(u),d)}),Ja(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ce(null);return s.foreach((u,d)=>{const h=De(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ja(t,e,n,c,i,r,a,o)}}function WC(t,e,n,s,i){const r=e.serverCache,o=Fp(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return zp(t,o,n,s,Hp,i)}function BC(t,e,n,s,i,r){let o;if(Qr(s,n)!=null)return e;{const a=new rc(s,e,i),l=e.eventCache.getNode();let c;if(ee(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yr(s,Zn(e));else{const d=e.serverCache.getNode();T(d instanceof V,"serverChildren would be complete if leaf node"),u=sc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ne(n);let d=ic(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yr(s,Zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qr(s,ae())!=null,pi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Zl(s.getIndex()),r=aC(s);this.processor_=MC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Tn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Tn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ko(d,u),this.eventGenerator_=new pC(this.query_)}get query(){return this.query_}}function HC(t){return t.viewCache_.serverCache.getNode()}function zC(t){return Kr(t.viewCache_)}function jC(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Sd(t){return t.eventRegistrations_.length===0}function qC(t,e){t.eventRegistrations_.push(e)}function kd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function xd(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(T(Zn(t.viewCache_),"We should always have a full cache before handling merges"),T(Kr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=LC(t.processor_,i,e,n,s);return DC(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,jp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function GC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(Rs(r,o))}),n.isFullyInitialized()&&s.push(Mp(n.getNode())),jp(t,s,n.getNode(),e)}function jp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return mC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr;class qp{constructor(){this.views=new Map}}function KC(t){T(!Xr,"__referenceConstructor has already been defined"),Xr=t}function YC(){return T(Xr,"Reference.ts has not been loaded"),Xr}function QC(t){return t.views.size===0}function oc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),xd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(xd(o,e,n,s));return r}}function Gp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Yr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=sc(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=ko(new Tn(a,l,!1),new Tn(s,i,!1));return new VC(e,c)}return o}function JC(t,e,n,s,i,r){const o=Gp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qC(o,n),GC(o,n)}function XC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Sn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(kd(c,n,s)),Sd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(kd(l,n,s)),Sd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Sn(t)&&r.push(new(YC())(e._repo,e._path)),{removed:r,events:o}}function Kp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wn(t,e){let n=null;for(const s of t.views.values())n=n||jC(s,e);return n}function Yp(t,e){if(e._queryParams.loadsAllData())return Ro(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Qp(t,e){return Yp(t,e)!=null}function Sn(t){return Ro(t)!=null}function Ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;function ZC(t){T(!Zr,"__referenceConstructor has already been defined"),Zr=t}function eE(){return T(Zr,"Reference.ts has not been loaded"),Zr}let tE=1;class Rd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=AC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jp(t,e,n,s,i){return vC(t.pendingWriteTree_,e,n,s,i),i?tr(t,new Xn(Lp(),e,n)):[]}function Wn(t,e,n=!1){const s=wC(t.pendingWriteTree_,e);if(CC(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(ae(),!0):it(s.children,o=>{r=r.set(new ge(o),!0)}),tr(t,new Gr(s.path,r,n))}else return[]}function er(t,e,n){return tr(t,new Xn(tc(),e,n))}function nE(t,e,n){const s=Ce.fromObject(n);return tr(t,new $i(tc(),e,s))}function sE(t,e){return tr(t,new Ui(tc(),e))}function iE(t,e,n){const s=lc(t,n);if(s){const i=cc(s),r=i.path,o=i.queryId,a=Je(r,e),l=new Ui(nc(o),a);return uc(t,r,l)}else return[]}function Xp(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Qp(o,e))){const l=XC(o,e,n,s);QC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Sn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=lE(h);for(let _=0;_<m.length;++_){const C=m[_],x=C.query,A=nm(t,C);t.listenProvider_.startListening(gi(x),Wi(t,x),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(gi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Ao(h));t.listenProvider_.stopListening(gi(h),m)}))}cE(t,c)}return a}function Zp(t,e,n,s){const i=lc(t,s);if(i!=null){const r=cc(i),o=r.path,a=r.queryId,l=Je(o,e),c=new Xn(nc(a),l,n);return uc(t,o,c)}else return[]}function rE(t,e,n,s){const i=lc(t,s);if(i){const r=cc(i),o=r.path,a=r.queryId,l=Je(o,e),c=Ce.fromObject(n),u=new $i(nc(a),l,c);return uc(t,o,u)}else return[]}function oE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Je(h,i);r=r||wn(m,_),o=o||Sn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Sn(a),r=r||wn(a,ae())):(a=new qp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const C=wn(_,ae());C&&(r=r.updateImmediateChild(m,C))}));const c=Qp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ao(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=uE();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=xo(t.pendingWriteTree_,i);let d=JC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=Yp(a,e);d=d.concat(dE(t,e,h))}return d}function ac(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=wn(a,l);if(c)return c});return Wp(i,e,r,n,!0)}function aE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Je(c,n);s=s||wn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||wn(i,ae()):(i=new qp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Tn(s,!0,!1):null,a=xo(t.pendingWriteTree_,e._path),l=Gp(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return zC(l)}function tr(t,e){return em(e,t.syncPointTree_,null,xo(t.pendingWriteTree_,ae()))}function em(t,e,n,s){if(ee(t.path))return tm(t,e,n,s);{const i=e.get(ae());n==null&&i!=null&&(n=wn(i,ae()));let r=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Bp(s,o);r=r.concat(em(a,l,c,u))}return i&&(r=r.concat(oc(i,t,s,n))),r}}function tm(t,e,n,s){const i=e.get(ae());n==null&&i!=null&&(n=wn(i,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Bp(s,o),u=t.operationForChild(o);u&&(r=r.concat(tm(u,a,l,c)))}),i&&(r=r.concat(oc(i,t,s,n))),r}function nm(t,e){const n=e.query,s=Wi(t,n);return{hashFn:()=>(HC(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?iE(t,n._path,s):sE(t,n._path);{const r=ow(i,n);return Xp(t,n,null,r)}}}}function Wi(t,e){const n=Ao(e);return t.queryToTagMap.get(n)}function Ao(t){return t._path.toString()+"$"+t._queryIdentifier}function lc(t,e){return t.tagToQueryMap.get(e)}function cc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function uc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=xo(t.pendingWriteTree_,e);return oc(s,n,i,null)}function lE(t){return t.fold((e,n,s)=>{if(n&&Sn(n))return[Ro(n)];{let i=[];return n&&(i=Kp(n)),it(s,(r,o)=>{i=i.concat(o)}),i}})}function gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eE())(t._repo,t._path):t}function cE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ao(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function uE(){return tE++}function dE(t,e,n){const s=e._path,i=Wi(t,e),r=nm(t,n),o=t.listenProvider_.startListening(gi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ee(c)&&u&&Sn(u))return[Ro(u).query];{let h=[];return u&&(h=h.concat(Kp(u).map(m=>m.query))),it(d,(m,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(gi(u),Wi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dc(n)}node(){return this.node_}}class hc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new hc(this.syncTree_,n)}node(){return ac(this.syncTree_,this.path_)}}const hE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ad=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},pE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},mE=function(t,e,n,s){return fc(e,new hc(n,t),s)},sm=function(t,e,n){return fc(t,new dc(e),n)};function fc(t,e,n){const s=t.getPriority().val(),i=Ad(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ad(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Le(i))),o.forEachChild(Te,(a,l)=>{const c=fc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mc(t,e){let n=e instanceof ge?e:new ge(e),s=t,i=ne(n);for(;i!==null;){const r=Ts(s.node.children,i)||{children:{},childCount:0};s=new pc(i,s,r),n=ve(n),i=ne(n)}return s}function js(t){return t.node.value}function im(t,e){t.node.value=e,Xa(t)}function rm(t){return t.node.childCount>0}function gE(t){return js(t)===void 0&&!rm(t)}function Po(t,e){it(t.node.children,(n,s)=>{e(new pc(n,t,s))})}function om(t,e,n,s){n&&!s&&e(t),Po(t,i=>{om(i,e,!0,s)}),n&&s&&e(t)}function _E(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function nr(t){return new ge(t.parent===null?t.name:nr(t.parent)+"/"+t.name)}function Xa(t){t.parent!==null&&yE(t.parent,t.name,t)}function yE(t,e,n){const s=gE(n),i=Kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/[\[\].#$\/\u0000-\u001F\u007F]/,wE=/[\[\].#$\u0000-\u001F\u007F]/,aa=10*1024*1024,am=function(t){return typeof t=="string"&&t.length!==0&&!vE.test(t)},lm=function(t){return typeof t=="string"&&t.length!==0&&!wE.test(t)},CE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lm(t)},EE=function(t,e,n,s){s&&e===void 0||gc(Pl(t,"value"),e,n)},gc=function(t,e,n){const s=n instanceof ge?new $w(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(s)+" with contents = "+e.toString());if(sp(e))throw new Error(t+"contains "+e.toString()+" "+Mn(s));if(typeof e=="string"&&e.length>aa/3&&Co(e)>aa)throw new Error(t+"contains a string greater than "+aa+" utf8 bytes "+Mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(it(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!am(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ww(s,o),gc(t,a,s),Bw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Mn(s)+" in addition to actual children.")}},cm=function(t,e,n,s){if(!(s&&n===void 0)&&!lm(n))throw new Error(Pl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cm(t,e,n,s)},IE=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!am(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CE(n))throw new Error(Pl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function um(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!kp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ot(t,e,n){um(t,n),kE(t,s=>gt(s,e)||gt(e,s))}function kE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(xE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gn&&qe("event: "+n.toString()),zs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="repo_interrupt",AE=25;class PE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qr(),this.transactionQueueTree_=new pc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NE(t,e,n){if(t.stats_=Yl(t.repoInfo_),t.forceRestClient_||uw())t.server_=new jr(t.repoInfo_,(s,i,r,o)=>{Pd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(s,i,r,o)=>{Pd(t,s,i,r,o)},s=>{Nd(t,s)},s=>{ME(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=mw(t.repoInfo_,()=>new fC(t.stats_,t.server_)),t.infoData_=new lC,t.infoSyncTree_=new Rd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=er(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yc(t,"connected",!1),t.serverSyncTree_=new Rd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function OE(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _c(t){return hE({timestamp:OE(t)})}function Pd(t,e,n,s,i){t.dataUpdateCount++;const r=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Or(n,c=>Ue(c));o=rE(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=Zp(t.serverSyncTree_,r,l,i)}else if(s){const l=Or(n,c=>Ue(c));o=nE(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=er(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oo(t,r)),Ot(t.eventQueue_,a,o)}function Nd(t,e){yc(t,"connected",e),e===!1&&FE(t)}function ME(t,e){it(e,(n,s)=>{yc(t,n,s)})}function yc(t,e,n){const s=new ge("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=er(t.infoSyncTree_,s,i);Ot(t.eventQueue_,s,r)}function dm(t){return t.nextWriteId_++}function DE(t,e,n){const s=aE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ue(i).withIndex(e._queryParams.getIndex());oE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=er(t.serverSyncTree_,e._path,r);else{const a=Wi(t.serverSyncTree_,e);o=Zp(t.serverSyncTree_,e._path,r,a)}return Ot(t.eventQueue_,e._path,o),Xp(t.serverSyncTree_,e,n,null,!0),r},i=>(No(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function LE(t,e,n,s,i){No(t,"set",{path:e.toString(),value:n,priority:s});const r=_c(t),o=Ue(n,s),a=ac(t.serverSyncTree_,e),l=sm(o,a,r),c=dm(t),u=Jp(t.serverSyncTree_,e,l,c,!0);um(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||nt("set at "+e+" failed: "+h);const C=Wn(t.serverSyncTree_,c,!_);Ot(t.eventQueue_,e,C),$E(t,i,h,m)});const d=gm(t,e);Oo(t,d),Ot(t.eventQueue_,d,[])}function FE(t){No(t,"onDisconnectEvents");const e=_c(t),n=qr();Ga(t.onDisconnect_,ae(),(i,r)=>{const o=mE(i,r,t.serverSyncTree_,e);Dp(n,i,o)});let s=[];Ga(n,ae(),(i,r)=>{s=s.concat(er(t.serverSyncTree_,i,r));const o=gm(t,i);Oo(t,o)}),t.onDisconnect_=qr(),Ot(t.eventQueue_,ae(),s)}function UE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RE)}function No(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function $E(t,e,n,s){e&&zs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function hm(t,e,n){return ac(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function vc(t,e=t.transactionQueueTree_){if(e||Mo(t,e),js(e)){const n=pm(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WE(t,nr(e),n)}else rm(e)&&Po(e,n=>{vc(t,n)})}function WE(t,e,n){const s=n.map(c=>c.currentWriteId),i=hm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{No(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Mo(t,mc(t.transactionQueueTree_,e)),vc(t,t.transactionQueueTree_),Ot(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)zs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Oo(t,e)}},o)}function Oo(t,e){const n=fm(t,e),s=nr(n),i=pm(t,n);return BE(t,i,s),s}function BE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AE)u=!0,d="maxretry",i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=hm(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){gc("transaction failed: Data returned ",m,l.path);let _=Ue(m);typeof m=="object"&&m!=null&&Kt(m,".priority")||(_=_.updatePriority(h.getPriority()));const x=l.currentWriteId,A=_c(t),P=sm(_,h,A);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=dm(t),o.splice(o.indexOf(x),1),i=i.concat(Jp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(Wn(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat(Wn(t.serverSyncTree_,l.currentWriteId,!0))}Ot(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Mo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)zs(s[a]);vc(t,t.transactionQueueTree_)}function fm(t,e){let n,s=t.transactionQueueTree_;for(n=ne(e);n!==null&&js(s)===void 0;)s=mc(s,n),e=ve(e),n=ne(e);return s}function pm(t,e){const n=[];return mm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function mm(t,e,n){const s=js(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Po(e,i=>{mm(t,i,n)})}function Mo(t,e){const n=js(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,im(e,n.length>0?n:void 0)}Po(e,s=>{Mo(t,s)})}function gm(t,e){const n=nr(fm(t,e)),s=mc(t.transactionQueueTree_,e);return _E(s,i=>{la(t,i)}),la(t,s),om(s,i=>{la(t,i)}),n}function la(t,e){const n=js(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?im(e,void 0):n.length=r+1,Ot(t.eventQueue_,nr(e),i);for(let o=0;o<s.length;o++)zs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Od=function(t,e){const n=zE(t),s=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ge(n.pathString)}},zE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=VE(t.substring(u,d)));const h=HE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class qE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:Ip(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=yd(this._queryParams),n=Gl(e);return n==="{}"?"default":n}get _queryObject(){return yd(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof wc))return!1;const n=this._repo===e._repo,s=kp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uw(this._path)}}class Yt extends wc{constructor(e,n){super(e,n,new ec,!1)}get parent(){const e=Sp(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ge(e),s=Za(this.ref,e);return new Bi(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bi(i,Za(this.ref,s),Te)))}hasChild(e){const n=new ge(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _m(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Za(t._root,e):t._root}function Za(t,e){return t=rt(t),ne(t._path)===null?bE("child","path",e,!1):cm("child","path",e,!1),new Yt(t._repo,De(t._path,e))}function KE(t,e){t=rt(t),IE("set",t._path),EE("set",e,t._path,!1);const n=new wo;return LE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function YE(t){t=rt(t);const e=new GE(()=>{}),n=new Cc(e);return DE(t._repo,t,n).then(s=>new Bi(s,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class Cc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new jE("value",this,new Bi(e.snapshotNode,new Yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qE(this,e,n):null}matches(e){return e instanceof Cc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}KC(Yt);ZC(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="FIREBASE_DATABASE_EMULATOR_HOST",el={};let JE=!1;function XE(t,e,n,s){t.repoInfo_=new mp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ZE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Od(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[QE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Od(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ys(ys.OWNER):new hw(t.name,t.options,e);TE("Invalid Firebase Database URL",o),ee(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=tb(a,t,u,new dw(t.name,n));return new nb(d,t)}function eb(t,e){const n=el[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UE(t),delete n[t.key]}function tb(t,e,n,s){let i=el[e.name];i||(i={},el[e.name]=i);let r=i[t.toURLString()];return r&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PE(t,JE,n,s),i[t.toURLString()]=r,r}class nb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function sb(t=_f(),e){const n=Ml(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=w0("database");s&&ib(n,...s)}return n}function ib(t,e,n,s={}){t=rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ys(ys.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:C0(s.mockUserToken,t.app.options.projectId);r=new ys(o)}XE(i,e,n,r)}/**
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
 */function rb(t){Q2(Ws),Ss(new Kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(td,nd,t),yn(td,nd,"esm2017")}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rb();const ym=sb(wf),vm=[],tl=[];function ob(t){return t instanceof Set?Array.from(t):t}const ab=async t=>(await YE(_m(ym,t))).val(),lb=async(t,e)=>{tl.push({path:t,data:e})};setInterval(async()=>{const t=[];for(const{path:e,data:n}of tl)t.push(KE(_m(ym,e),n));await Promise.all(t),tl.length=0},1e4);const ca=async(t,e)=>{mn(t,n=>{ql.value&&lb(`users/${jl.value.uid}/game-data/tileswap-naenae/${e}/`,ob(n))},{deep:!0}),vm.push({observable:t,path:e})},Vi=He([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]);globalThis.window&&!window.hasOwnProperty("tilesToFlip")&&Object.defineProperty(window,"tilesToFlip",{get:()=>Vi.value,set:t=>{Vi.value=t}});const me=He(2);globalThis.window&&!window.hasOwnProperty("modulo")&&Object.defineProperty(window,"modulo",{get:()=>me.value,set:t=>{if(t<2)throw new Error("Modulo must be greater than 1");me.value=t}});const Ec=t=>{if(t<2)throw new Error("Modulo must be greater than 1");me.value=t},bc=Oe(()=>new Array(me.value).fill().map((t,e)=>`rgb(${255*(e/(me.value-1))},${255*(e/(me.value-1))},${255*(e/(me.value-1))})`)),on=class on{constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill(0));for(const r of this.exclude)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n,s=1){let i=0;for(const r of Vi.value){const o=n+r[0],a=e+r[1];o>=0&&o<this.matrix[0].length&&a>=0&&a<this.matrix.length&&this.matrix[a][o]!==-1&&(this.matrix[a][o]=on.modulo(this.matrix[a][o]+s),i++)}return i}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice()),this.exclude=on.getExcludeFromMatrix(this.matrix)}isSolved(){return this.matrix.every(e=>e.every(n=>n===me.value-1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===me.value-1:this.matrix[e][n]===me.value-1}nTiles(){return this.width*this.height-this.exclude.length}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new on({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(me.value-1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r,-1)}return n.matrix.every(s=>s.every(i=>i===1||i===-1))?this.generatePosition(e):n}static getExcludeFromMatrix(e){const n=e[0].length;return e.map((s,i)=>s.map((r,o)=>r===-1?i*n+o:null)).flat().filter(s=>s||s===0)}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new on({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}static modulo(e){return(e%me.value+me.value)%me.value}};ir(on,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34],unlockCategory:17}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new on({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})}).sort((e,n)=>e.unlockCategory-n.unlockCategory));let Vt=on;const no=class no{constructor({base:e,target:n,moves:s,solution:i,id:r,modulo:o}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r,this.modulo=o}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}};ir(no,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:30,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:30,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:75,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].map((e,n)=>{const{base:s,target:i,moves:r,solution:o,modulo:a}=e;s.forEach((m,_)=>m.forEach((C,x)=>{C===2?(s[_][x]=-1,i[_][x]=-1):C===1&&(s[_][x]=(a??2)-1)}));const l=s[0].length,c=s.length,u=Vt.getExcludeFromMatrix(s),d=new Vt({width:l,height:c,exclude:u,unlockCategory:0});d.setMatrix(s);const h=new Vt({width:l,height:c,exclude:u,unlockCategory:0});return h.setMatrix(i.map(m=>m.map(_=>_===1?(a??2)-1:_))),new no({base:d,target:h,moves:r,solution:o,id:n,modulo:a??2})}));let eo=no;const Md=t=>`${t}`,to={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:Md},tilesSwapped:{name:"Tiles Swapped",display:Md},puzzlesCompleted:{name:"Puzzles Completed",display:t=>`${t} / ${eo.PUZZLES.length}`}},cb=Object.fromEntries(Object.keys(to).map(t=>[t,to[t].initialValue??0])),yi=class yi{constructor({timeLimit:e,moveLimit:n,totalClicks:s,patternRange:i,nPatterns:r,bigLayoutAdapt:o,moveLimitPer:a,modulo:l}){this.timeLimit=e,this.moveLimit=n,this.totalClicks=s,this.rangeStart=i[0],this.rangeEnd=i[1],this.nPatterns=r,this.currentPattern=0,this.moveLimitPer=a,this.bigLayoutAdapt=o,this.challengeLayouts=this.generateLayouts(),this.nMoves=0,this.modulo=l??2}generateLayouts(){const e=Vt.LAYOUTS.filter(r=>r.unlockCategory>=this.rangeStart&&r.unlockCategory<=this.rangeEnd),n=[];for(let r=0;r<this.nPatterns;r++)n.push(e[Math.floor(Math.random()*e.length)]);const s=n.reduce((r,o)=>r+(o.nTiles()>=yi.THRESHOLD?1:0),0),i=Math.round(this.totalClicks/(this.nPatterns+(this.bigLayoutAdapt?s:0)));for(let r=0;r<n.length;r++)n[r]=n[r].generatePosition(this.bigLayoutAdapt&&n[r].nTiles()>=yi.THRESHOLD?i*2:i);return n.sort(()=>Math.random()-.5),n}getCurrentLayout(){return this.challengeLayouts[this.currentPattern]}nextLayout(){const e=We();this.currentPattern+=1,e.setLayout(this.getCurrentLayout())}reset(){this.currentPattern=0}};ir(yi,"THRESHOLD",60);let nl=yi;const We=d1("store",()=>{const t=He({}),e=He({}),n=He({}),s=He(2),i=He([]),r=He([new nl({timeLimit:30,moveLimit:-1,totalClicks:60,patternRange:[1,39],nPatterns:30,bigLayoutAdapt:!1,moveLimitPer:2})]),o=He({...cb});setInterval(()=>{o.value.timePlayed++},1e3);function a(d){t.value=d}function l(d){e.value=d}function c(d){n.value=d}function u(d){i.value.includes(d)||(i.value.push(d),o.value.puzzlesCompleted++)}return ca(i,"solved-puzzles"),ca(s,"difficulty"),ca(o,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,solvedPuzzles:i,setLayout:a,setPuzzle:l,setChallenge:c,solvePuzzle:u,stats:o,challenges:r}}),Be=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ub={components:{RouterView:nf},setup(){We()}};function db(t,e,n,s,i,r){const o=Kg("router-view");return j(),zt(o,null,{default:lt(({Component:a})=>[$(Es,{name:"fade",mode:"out-in"},{default:lt(()=>[(j(),zt(Yg(a)))]),_:2},1024)]),_:1})}const hb=Be(ub,[["render",db]]);const fb={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},pb=["src"];function mb(t,e,n,s,i,r){return j(),X("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[G("span",null,Ae(n.name),1),G("img",{src:n.image},null,8,pb)])}const ua=Be(fb,[["render",mb],["__scopeId","data-v-7bbaab8a"]]),gb="/tileswap-naenae/images/freeplay.png",_b="/tileswap-naenae/images/puzzles.png",yb="/tileswap-naenae/images/challenges.png";const Ic={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"black":"white"},color(){return this.black!==void 0?"white":"black"}}},Dd=()=>{vo(t=>({e7a07ef6:t.backgroundColor,"426355da":t.color}))},Ld=Ic.setup;Ic.setup=Ld?(t,e)=>(Dd(),Ld(t,e)):Dd;function vb(t,e,n,s,i,r){return j(),X("button",null,Ae(n.text),1)}const tt=Be(Ic,[["render",vb],["__scopeId","data-v-d91b9173"]]),wb={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},es=Object.assign(wb,{__name:"LinkButton",setup(t){return(e,n)=>(j(),zt(tt,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const Cb={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},Eb={class:"modal"};function bb(t,e,n,s,i,r){return j(),X("div",null,[$(Es,{name:"fade"},{default:lt(()=>[_a(G("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[xa,n.modelValue]])]),_:1}),$(Es,{name:"zoom"},{default:lt(()=>[_a(G("div",Eb,[Qg(t.$slots,"default",{},void 0,!0)],512),[[xa,n.modelValue]])]),_:3})])}const ts=Be(Cb,[["render",bb],["__scopeId","data-v-de2ad822"]]);const Ib={computed:{list(){const{stats:t}=We();return Object.keys(to).map(e=>{const n=to[e];return`${n.name}: ${n.display(t[e])}`})}}};function Tb(t,e,n,s,i,r){return j(),X("ul",null,[(j(!0),X(Se,null,En(r.list,(o,a)=>(j(),X("li",{key:a},Ae(o),1))),128))])}const Sb=Be(Ib,[["render",Tb],["__scopeId","data-v-8a712b4f"]]),Tc=()=>{let t=He(window.innerWidth),e=He(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;bi(()=>window.addEventListener("resize",n)),bi(()=>window.addEventListener("resize",s)),Ii(()=>window.removeEventListener("resize",n)),Ii(()=>window.removeEventListener("resize",s));const i=Oe(()=>t.value),r=Oe(()=>e.value);return{width:i,height:r}};const wm=t=>(Ls("data-v-eb59ee6c"),t=t(),Fs(),t),kb={class:"container"},xb=wm(()=>G("h1",{class:"main-title"},[Fh("Tile"),G("span",null,"Swap")],-1)),Rb=wm(()=>G("h1",null,"Stats",-1)),Ab={data(){const{width:t}=Tc();return{windowWidth:t,user:jl,isSignedIn:ql,showStats:!1}},methods:{signOut:Va,signInForm(){Y2(prompt("Email"),prompt("Password"))},openStats(){this.showStats=!0}}},Pb=Object.assign(Ab,{__name:"HomeView",setup(t){return(e,n)=>(j(),X("div",kb,[xb,G("main",null,[$(ua,{name:"Freeplay",image:je(gb),path:"/freeplaySelection"},null,8,["image"]),$(ua,{name:"Puzzles",image:je(_b),path:"/puzzleSelection"},null,8,["image"]),$(ua,{name:"Challenges",image:je(yb),path:"/challengeSelection"},null,8,["image"])]),G("div",{class:Nt({bottom:e.windowWidth>600,left:e.windowWidth>600,"text-center":e.windowWidth<=600})},[$(tt,{text:"stats",onClick:e.openStats},null,8,["onClick"]),$(es,{text:"tutorial",to:"/tutorial"})],2),G("div",{class:Nt({bottom:e.windowWidth>600,right:e.windowWidth>600,"text-center":e.windowWidth<=600})},[je(ql)?(j(),X("p",{key:0,onClick:n[0]||(n[0]=(...s)=>je(Va)&&je(Va)(...s))}," You are logged in as "+Ae(je(jl).displayName),1)):(j(),X("p",{key:1,onClick:n[1]||(n[1]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in "))],2),$(ts,{modelValue:e.showStats,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showStats=s)},{default:lt(()=>[Rb,$(Sb),$(tt,{black:"",text:"close",onClick:n[2]||(n[2]=s=>e.showStats=!1)})]),_:1},8,["modelValue"])]))}}),Nb=Be(Pb,[["__scopeId","data-v-eb59ee6c"]]);const Ob=["data-level"],Mb={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){We().setLayout(this.layout),this.$router.push("/freeplayGame")}}},Db=Object.assign(Mb,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(j(),X("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(j(!0),X(Se,null,En(e.includedTiles,s=>(j(),X("div",{key:"t"+s,class:"tile",style:Os({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],8,Ob))}}),Lb=Be(Db,[["__scopeId","data-v-e2c2d84b"]]);const Fb=t=>(Ls("data-v-7bec83c9"),t=t(),Fs(),t),Ub=Fb(()=>G("h1",{class:"title"},"Select a layout",-1)),$b={class:"layouts"},Wb={data(){return{layouts:Vt.LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},Bb=Object.assign(Wb,{__name:"FreeplaySelection",setup(t){return(e,n)=>(j(),X("main",null,[Ub,$(es,{class:"top right",text:"back",to:"/"}),G("div",$b,[(j(!0),X(Se,null,En(e.layouts,(s,i)=>(j(),zt(Lb,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),Vb=Be(Bb,[["__scopeId","data-v-7bec83c9"]]);const Hb={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return We().solvedPuzzles.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){const t=We();t.setPuzzle(this.puzzle),t.setLayout(this.layout),Ec(this.puzzle.modulo),this.$router.push("/puzzleGame")}}},zb=Object.assign(Hb,{__name:"PuzzleSelectionButton",setup(t){return vo(e=>({"2afab504":e.solved?"#DAC778":"white"})),(e,n)=>(j(),X("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(j(!0),X(Se,null,En(e.includedTiles,s=>(j(),X("div",{key:"t"+s,class:"tile",style:Os({backgroundColor:e.layout.isWhite(s)?"#b5ab9e":"black",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))}}),jb=Be(zb,[["__scopeId","data-v-a737a162"]]);const qb=t=>(Ls("data-v-de8b964b"),t=t(),Fs(),t),Gb=qb(()=>G("h1",{class:"title"},"Select a puzzle",-1)),Kb={class:"layouts"},Yb={data(){return{puzzles:eo.PUZZLES}}},Qb=Object.assign(Yb,{__name:"PuzzleSelection",setup(t){return(e,n)=>(j(),X("main",null,[Gb,$(es,{class:"top right",text:"back",to:"/"}),G("div",Kb,[(j(!0),X(Se,null,En(e.puzzles,(s,i)=>(j(),zt(jb,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),Jb=Be(Qb,[["__scopeId","data-v-de8b964b"]]);const Sc={props:["challenge"],computed:{formattedChall(){const t=Math.floor(this.challenge.timeLimit/60).toString(),e=(this.challenge.timeLimit%60).toString(),n=this.challenge.moveLimit.toString(),s=this.challenge.nPatterns.toString();return t+":"+e+"<br>"+(n>0?n+" moves<br>":"no move limit<br>")+s+" layouts"}}},Fd=()=>{vo(t=>({"29fe589f":t.color}))},Ud=Sc.setup;Sc.setup=Ud?(t,e)=>(Fd(),Ud(t,e)):Fd;const Xb=["innerHTML"];function Zb(t,e,n,s,i,r){return j(),X("div",{innerHTML:r.formattedChall},null,8,Xb)}const eI=Be(Sc,[["render",Zb],["__scopeId","data-v-99e3cb12"]]),tI={data(){return{challenges:We().challenges}},methods:{selectChallenge(t){const e=We();e.setChallenge(t),e.setLayout(t.getCurrentLayout()),Ec(t.modulo),this.$router.push("/challengeGame")}}},nI=Object.assign(tI,{__name:"ChallengeSelection",setup(t){return(e,n)=>(j(),X("div",null,[$(es,{class:"top right",text:"back",to:"/"}),(j(!0),X(Se,null,En(e.challenges,(s,i)=>(j(),zt(eI,{key:i,onClick:r=>e.selectChallenge(s),challenge:s},null,8,["onClick","challenge"]))),128))]))}});const sI=t=>(Ls("data-v-74d5ebb7"),t=t(),Fs(),t),iI=sI(()=>G("div",{class:"inner-tile"},[G("div",{class:"front"}),G("div",{class:"back"})],-1)),rI=[iI],oI={props:["tile","visible","small"],data(){return{tileSize:"30px",flipped:!1,previousFront:0,previousBack:0,gradient:bc}},watch:{tile(){this.flipped=!this.flipped}},computed:{frontColor(){return this.previousFront=this.gradient.indexOf(this.frontColor),this.flipped?this.gradient[this.previousFront]:this.gradient[this.tile]},backColor(){return this.previousBack=this.gradient.indexOf(this.backColor),this.flipped?this.gradient[this.tile]:this.gradient[this.previousBack]}},methods:{modulo(t){return(t%me.value+me.value)%me.value}},mounted(){const t=We(),e=()=>{const{width:n,height:s}=t.currentLayout;this.tileSize=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1)+"px"};mn(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},aI=Object.assign(oI,{__name:"Tile",setup(t){return vo(e=>({a9f8a3b6:e.tileSize,e2965d14:t.visible?1:0,"526456df":t.visible?"pointer":"default","1d23a390":e.frontColor,"36deef26":e.backColor})),(e,n)=>(j(),X("div",{class:Nt(["tile",{"flipped-tile":e.flipped}])},rI,2))}}),lI=Be(aI,[["__scopeId","data-v-74d5ebb7"]]);class kt{constructor(e){if(typeof e!="number")throw new Error("Order must be a number");if(e<=0)throw new Error("Order must be greater than 0");if(e%1!==0)throw new Error("Order must be an integer");kt.isPrime(e)||console.warn("\x1B[33m%s\x1B[0m",`[Warn] Order ${e} is not prime`);const n=kt.primeFactors(e);if(!n.every(s=>s===n[0]))throw new Error("Order must be a prime power");this.order=e,this.p=n[0],this.q=n.length}el(e){if(e instanceof dn){if(e.field.order!==this.order)throw new Error("Cannot create element in different field");return e}if(typeof e!="number")throw new Error("Value must be a number");return new dn(kt.mod(e,this.order),this)}matrix(e){return Ps.from2DArray(e,this)}identity(e){return Ps.identity(e,this)}static mod(e,n){return(e%n+n)%n}static primeFactors(e){let n=2;for(;e>=n**2;){if(e%n===0)return[n,...kt.primeFactors(e/n)];n++}return[e]}static fromOrder(e){return new kt(e)}static isPrime(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let n=5;n*n<=e;n=n+6)if(e%n===0||e%(n+2)===0)return!1;return!0}}var Bn,ri;const so=class so{constructor(e,n){rr(this,Bn);if(typeof e!="number")throw new Error("Value must be a number");if(!(n instanceof kt))throw new Error("Field must be an instance of FiniteField");this.value=kt.mod(e,n.order),this.field=n}inverse(){if(this.value===0)throw new Error("Cannot divide by zero");return this.pow(this.field.order-2)}opposite(){return this.field.el(-this.value)}add(e){return Dt(this,Bn,ri).call(this,e,(n,s)=>n.value+s.value)}subtract(e){return Dt(this,Bn,ri).call(this,e,(n,s)=>n.value-s.value)}multiply(e){return Dt(this,Bn,ri).call(this,e,(n,s)=>n.value*s.value)}divide(e){return Dt(this,Bn,ri).call(this,e,(n,s)=>n.multiply(s.inverse()).value)}pow(e){if(e===0)return this.field.el(1);if(e===1)return this.copy();if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}sqrt(){if(this.value===0)return this.field.el(0);if(this.value===1)return this.field.el(1);let e=1;for(;e<this.field.order;){if(e*e%this.field.order===this.value)return this.field.el(e);e++}throw new Error("Element has no square root")}equals(e){if(e instanceof so){if(e.field.order!==this.field.order)throw new Error("Cannot compare two numbers in different fields");return this.value===e.value}return this.value===e}toString(){return`${this.value} (mod ${this.field.order})`}[void 0](){return this.toString()}copy(){return this.field.el(this.value)}};Bn=new WeakSet,ri=function(e,n){if(e instanceof so){if(e.field.order!==this.field.order)throw new Error("Cannot add two numbers in different fields");return this.field.el(n(this,e))}return e=this.field.el(e),this.field.el(n(this,e))};let dn=so;var Vn,Hn,oi;const re=class re{constructor(e,n){rr(this,Hn);if(this.field=n,this.width=e[0]?e[0].length:0,this.height=e.length,!e.every(s=>s.length===this.width))throw new Error("All rows must have the same length");this.matrix=e.map(s=>s.map(i=>{if(i instanceof dn){if(i.field.order!==n.order)throw new Error("Cannot create matrix with elements from different fields");return i}return n.el(i)}))}isSquare(){return this.width===this.height}isSymmetric(){if(!this.isSquare())return!1;for(let e=0;e<this.height;e++)for(let n=0;n<e;n++)if(!this.matrix[e][n].equals(this.matrix[n][e]))return!1;return!0}transpose(){const e=[];for(let n=0;n<this.width;n++){const s=[];for(let i=0;i<this.height;i++)s.push(this.matrix[i][n]);e.push(s)}return new re(e,this.field)}multiply(e){if(typeof e=="number"||e instanceof dn)return e=this.field.el(e),re.from2DArray(this.matrix.map(n=>n.map(s=>s.multiply(e))),this.field);if(e instanceof re){if(this.width!==e.height)throw new Error("Cannot multiply matrices with incompatible dimensions");const n=[];for(let s=0;s<this.height;s++){const i=[];for(let r=0;r<e.width;r++){let o=this.field.el(0);for(let a=0;a<this.width;a++)o=o.add(this.matrix[s][a].multiply(e.matrix[a][r]));i.push(o)}n.push(i)}return re.from2DArray(n,this.field)}throw new Error("Cannot multiply matrix by non-scalar")}add(e){if(e instanceof dn||typeof e=="number")return e=this.field.el(e),new re(this.matrix.map(n=>n.map(s=>s.add(e))),this.field);if(e instanceof re){if(this.width!==e.width||this.height!==e.height)throw new Error("Cannot add matrices with incompatible dimensions");return new re(this.matrix.map((n,s)=>n.map((i,r)=>i.add(e.matrix[s][r]))),this.field)}throw new Error("Cannot add matrix to non-scalar")}pow(e){if(!this.isSquare())throw new Error("Cannot raise non-square matrix to a power");if(e===0)return re.identity(this.width,this.field);if(e===1)return this;if(e<0)return this.inverse().pow(-e);let n=this;for(let s=1;s<e;s++)n=n.multiply(this);return n}determinant(){if(!this.isSquare())throw new Error("Cannot calculate determinant of non-square matrix");const e=`${this.width},${this.matrix.map(s=>s.map(i=>i.value).join("")).join("")}`;if(Gs(re,Vn).has(e))return Gs(re,Vn).get(e);if(this.width===1)return this.matrix[0][0];if(this.width===2)return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));if(this.width<=5){let s=this.field.el(0);for(let i=0;i<this.width;i++){const r=Dt(this,Hn,oi).call(this,0,i),o=this.matrix[0][i].multiply(r.determinant());i%2===1?s=s.subtract(o):s=s.add(o)}return Gs(re,Vn).set(e,s),s}const n=this.PLUDeterminant();return Gs(re,Vn).set(e,n),n}inverse(){if(!this.isSquare())throw new Error("Cannot invert non-square matrix");const e=this.determinant();if(e.equals(0))throw new Error("Cannot invert singular matrix");return this.width<=5?this.adjugate().multiply(e.inverse()):this.gaussianInverse()}gaussianInverse(){var r;const e=re.identity(this.width,this.field),s=re.from2DArray(this.matrix.map((o,a)=>o.concat(e.matrix[a])),this.field).reducedRowEchelonForm();return Dt(r=s,Hn,oi).call(r,[],new Array(this.width).fill().map((o,a)=>a))}pseudoInverse(){const{A:e,B:n}=this.rankFactorization();return n.transpose().multiply(n.multiply(n.transpose()).inverse()).multiply(e.transpose().multiply(e).inverse()).multiply(e.transpose())}adjugate(){if(!this.isSquare())throw new Error("Cannot calculate adjugate of non-square matrix");if(this.width===1)return re.identity(1,this.field);const e=[];for(let n=0;n<this.height;n++){const s=[];for(let i=0;i<this.width;i++){const o=Dt(this,Hn,oi).call(this,n,i).determinant();(n+i)%2===1?s.push(o.opposite()):s.push(o)}e.push(s)}return new re(e,this.field).transpose()}reducedRowEchelonForm(){function e(l,c,u){for(let d=0;d<l[c].length;d++)l[c][d]=l[c][d].multiply(u)}function n(l,c,u,d){for(let h=0;h<l[c].length;h++)l[c][h]=l[c][h].add(l[u][h].multiply(d))}function s(l,c,u){for(let d=u;d<l.length;d++)if(!l[d][c].equals(0))return d;return-1}const i=this.matrix.map(l=>l.slice());let r=i.length,o=i[0].length,a=0;for(let l=0;l<r;l++){if(a>=o)return re.from2DArray(i,this.field);let c=s(i,a,l);if(c===-1){a++,l--;continue}let u=i[c];i[c]=i[l],i[l]=u;let d=i[l][a];e(i,l,d.inverse());for(let h=0;h<r;h++)if(h!==l){let m=i[h][a].opposite();n(i,h,l,m)}a++}return re.from2DArray(i,this.field)}rankFactorization(){const e=this.reducedRowEchelonForm(),n=re.from2DArray(e.matrix.filter((o,a)=>!o.every(l=>l.equals(0))||a===0),this.field),s=[];let i=0;for(let o=0;o<e.width;o++){let a=-1;for(let l=e.height-1;l>=0;l--)if(!e.matrix[l][o].equals(0)){a=l;break}a>=i?i=a+1:s.push(o)}return{A:Dt(this,Hn,oi).call(this,[],s),B:n}}PLUFactorization(){const e=this.copy().matrix,n=this.width,s=new Array(n+1).fill().map((i,r)=>r);for(let i=0;i<n;i++){let r=this.field.el(0),o=i;for(let a=i;a<n;a++){const l=e[a][i];l.value>r.value&&(r=l,o=a)}if(o!==i){const a=s[i];s[i]=s[o],s[o]=a,[e[i],e[o]]=[e[o],e[i]],s[n]++}for(let a=i+1;a<n;a++){e[i][i].equals(0)||(e[a][i]=e[a][i].divide(e[i][i]));for(let l=i+1;l<n;l++)e[a][l]=e[a][l].subtract(e[a][i].multiply(e[i][l]))}}return{A:re.from2DArray(e,this.field),P:s}}PLUDeterminant(){const{A:e,P:n}=this.PLUFactorization(),s=e.matrix,i=s.length;let r=s[0][0];for(let o=1;o<i;o++)r=r.multiply(s[o][o]);return(n[i]-i)%2==0?r:r.opposite()}equals(e){return e instanceof re?e.field!==this.field||e.width!==this.width||e.height!==this.height?!1:this.matrix.every((n,s)=>n.every((i,r)=>i.equals(e.matrix[s][r]))):!1}copy(){return re.from2DArray(this.matrix,this.field)}static identity(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<e;o++)r.push(i===o?n.el(1):n.el(0));s.push(r)}return new re(s,n)}static fromValue(e,n,s,i){if(e instanceof dn&&e.field.order!==i.order)throw new Error("Cannot create matrix with elements from different fields");const r=[];for(let o=0;o<s;o++){const a=[];for(let l=0;l<n;l++)a.push(i.el(e));r.push(a)}return new re(r,i)}static zeros(e,n,s){return re.fromValue(0,e,n,s)}static ones(e,n,s){return re.fromValue(1,e,n,s)}static random(e,n,s){const i=[];for(let r=0;r<n;r++){const o=[];for(let a=0;a<e;a++)o.push(s.el(Math.floor(Math.random()*s.order)));i.push(o)}return re.from2DArray(i,s)}static randomSymmetric(e,n){const s=[];for(let i=0;i<e;i++){const r=[];for(let o=0;o<i;o++)r.push(s[o][i]);for(let o=i;o<e;o++)r.push(n.el(Math.floor(Math.random()*n.order)));s.push(r)}return re.from2DArray(s,n)}static from2DArray(e,n){return new re(e,n)}toString(){let e="";for(let n=0;n<this.height;n++)e+="|"+this.matrix[n].reduce((s,i)=>s+" "+i.value.toString().padStart(this.field.order.toString().length," "),"")+" |",Math.floor(this.height/2)===n&&(e+=` mod ${this.field.order}`),e+=`
`;return e}[void 0](){return this.toString()}};Vn=new WeakMap,Hn=new WeakSet,oi=function(e,n){typeof e=="number"&&(e=[e]),typeof n=="number"&&(n=[n]);const s=[];for(let i=0;i<this.height;i++){if(e.includes(i))continue;const r=[];for(let o=0;o<this.width;o++)n.includes(o)||r.push(this.matrix[i][o]);s.push(r)}return new re(s,this.field)},rr(re,Vn,new Map);let Ps=re;const sl=He(!1);globalThis.window&&!window.hasOwnProperty("devMode")&&Object.defineProperty(window,"devMode",{get:()=>sl.value,set:t=>{if(typeof t!="boolean")throw new Error("devMode value must be a boolean");sl.value=t}});const _i=Oe(()=>sl.value),da=new Map,$d=t=>{const e=kt.fromOrder(me.value),n=t.length,s=t[0].length,i=e.matrix(t.flat().filter(c=>c!==-1).map(c=>[(c+1)%me.value])),r=`${s}x${n},${Vt.getExcludeFromMatrix(t)},${Vi.value},${me.value}}`;let o=[];const a=uI(s,n,t),l=a.determinant();if(console.log("Det:",l.toString()),l.equals(0)){const u=Ps.from2DArray(a.matrix.map((h,m)=>h.concat(i.matrix[m])),a.field).reducedRowEchelonForm(),d=Ps.from2DArray(u.matrix.map(h=>[h[h.length-1]]),u.field);o=new Array(a.width).fill().map(h=>0);for(let h=0;h<d.height;h++){const m=d.matrix[h][0];if(!m.equals(0)){for(let _=0;_<u.width-1;_++)if(u.matrix[h][_].equals(1)){o[_]=m.value;break}}}}else{let c;da.has(r)?c=da.get(r):(c=a.inverse(),da.set(r,c)),o=c.multiply(i).matrix.map(u=>u[0].value)}for(let c=0;c<n;c++)for(let u=0;u<s;u++)if(t[c][u]===-1){const d=c*s+u;o.splice(d,0,-1)}return o.map((c,u)=>o.slice(u*s,(u+1)*s)).filter(c=>c.length)},cI=(t,e,n)=>{for(const s of Vi.value){const i=e+s[0],r=t+s[1];i>=0&&i<n[0].length&&r>=0&&r<n.length&&n[r][i]!==-1&&(n[r][i]=me.value-1)}},uI=(t,e,n)=>{const s=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){if(n&&n[o][a]===-1)continue;const l=Array(e).fill().map((c,u)=>Array(t).fill().map((d,h)=>n&&n[u][h]===-1?-1:0));cI(o,a,l),s.push(l)}return kt.fromOrder(me.value).matrix(s.map(o=>o.flat().filter(a=>a!==-1))).transpose()};const dI={props:["modelValue","small","disabled","solution","target"],emits:["update:modelValue","swap"],data(){return{currentChallenge:We().currentChallenge,gradient:bc}},methods:{onTileClick(t,e){if(this.disabled===void 0&&this.modelValue.matrix[t][e]!==-1){const n=We(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap",t*this.modelValue.matrix[0].length+e,t,e)}}}},hI=Object.assign(dI,{__name:"Layout",setup(t){return(e,n)=>(j(),X("div",null,[$(Es,{name:"list",mode:"out-in"},{default:lt(()=>{var s;return[(j(),X("div",{key:(s=e.currentChallenge)==null?void 0:s.currentPattern},[(j(!0),X(Se,null,En(t.modelValue.matrix,(i,r)=>{var o;return j(),X("div",{class:"row",key:"row"+r+((o=e.currentChallenge)==null?void 0:o.currentPattern)},[(j(!0),X(Se,null,En(i,(a,l)=>{var c;return j(),zt(lI,{small:t.small,tile:a,visible:a!==-1,key:r+""+l+((c=e.currentChallenge)==null?void 0:c.currentPattern),class:Nt({solution:je(_i)&&t.solution&&t.solution[r][l]>=1}),style:Os({outline:t.target?`5px solid ${je(bc)[t.target[r][l]]}`:"none"}),"data-moves":t.solution?t.solution[r][l]:"",onClick:u=>e.onTileClick(r,l)},null,8,["small","tile","visible","class","style","data-moves","onClick"])}),128))])}),128))]))]}),_:1})]))}}),Do=Be(hI,[["__scopeId","data-v-c3ed1f2b"]]);const fI={props:["modelValue"],emits:["update:modelValue"],data(){const t=We();return{difficulties:["very easy","easy","normal","hard","very hard"],max:(me.value-1)*(t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length)}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},pI={class:"diff"},mI=["value","max"];function gI(t,e,n,s,i,r){return j(),X("div",pI,[G("h2",null,"difficulty - "+Ae(r.difficultyText),1),G("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",parseInt(o.target.value))),max:i.max},null,40,mI)])}const _I=Be(fI,[["render",gI],["__scopeId","data-v-38400e03"]]);const yI={props:["modelValue"],emits:["update:modelValue"],computed:{moduloText(){return this.modelValue}},methods:{emit(t){this.$emit("update:modelValue",parseInt(t.target.value))}}},vI={class:"diff"},wI=["value"];function CI(t,e,n,s,i,r){return j(),X("div",vI,[G("h2",null,"modulo - "+Ae(r.moduloText),1),G("input",{type:"range",min:"2",value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.emit&&r.emit(...o)),max:"5"},null,40,wI)])}const EI=Be(yI,[["render",CI],["__scopeId","data-v-1360d3ea"]]);const bI={class:"top-menu"},II={class:"top right"},TI={key:0,class:"devmode-info"},SI={data(){const t=We(),e=t.currentLayout,{width:n}=Tc();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,internalModulo:me.value,showModal:!1,solution:e.matrix.map(s=>s.map(i=>0)),moves:0,error:""}},watch:{difficulty(){this.store.difficulty=this.difficulty},internalModulo(t){Ec(t),this.randomize()},showModal(){this.showModal||this.randomize()}},methods:{handleClick(t,e,n){this.moves++,!this.error&&_i.value&&(this.solution[e][n]=((this.solution[e][n]-1)%me.value+me.value)%me.value),this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty),this.$nextTick(()=>{try{_i.value&&(this.solution=$d(this.layout.matrix)),this.error=""}catch(t){console.error(t),this.error="layout could not be solved",this.solution=this.layout.matrix.map(e=>e.map(n=>0))}})}},mounted(){this.randomize(),mn(_i,t=>{t?this.solution=$d(this.layout.matrix):this.solution=this.layout.matrix.map(e=>e.map(n=>0))})}},kI=Object.assign(SI,{__name:"FreeplayGame",setup(t){return(e,n)=>(j(),X("div",null,[G("div",bI,[$(tt,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),$(_I,{modelValue:e.difficulty,"onUpdate:modelValue":n[0]||(n[0]=s=>e.difficulty=s)},null,8,["modelValue"])]),_a(G("p",{class:Nt(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},Ae(e.moves)+" move"+Ae(e.moves>1?"s":""),3),[[xa,e.moves>0]]),G("div",II,[$(es,{text:"back",to:"/freeplaySelection"}),$(EI,{modelValue:e.internalModulo,"onUpdate:modelValue":n[1]||(n[1]=s=>e.internalModulo=s)},null,8,["modelValue"])]),G("main",null,[je(_i)?(j(),X("h2",TI,Ae(e.error),1)):y_("",!0),$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[2]||(n[2]=s=>e.layout=s),solution:e.solution,onSwap:e.handleClick},null,8,["modelValue","solution","onSwap"])]),$(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:lt(()=>[G("h1",null,"you won in "+Ae(e.moves)+" move"+Ae(e.moves>1?"s":"")+"!",1),$(tt,{black:"",text:"yay!",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),xI=Be(kI,[["__scopeId","data-v-28cb426c"]]);const RI=t=>(Ls("data-v-9ca46572"),t=t(),Fs(),t),AI=RI(()=>G("h1",null,"no moves remaining!",-1)),PI={data(){const e=We().currentPuzzle,n=e.base.copy(),{width:s}=Tc();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=We();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},NI=Object.assign(PI,{__name:"PuzzleGame",setup(t){return(e,n)=>(j(),X("div",null,[$(es,{class:"top right",text:"back",to:"/puzzleSelection"}),G("div",{class:Nt(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[G("h1",null,Ae(e.remainingMoves)+" move"+Ae(e.remainingMoves>1?"s":"")+" remaining",1),$(tt,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),G("main",null,[$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),target:e.puzzle.target.matrix,onSwap:e.handleClick},null,8,["modelValue","target","onSwap"])]),$(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[G("h1",null,"you won in "+Ae(e.moves)+" move"+Ae(e.moves>1?"s":"")+"!",1),$(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showLostModal=s)},{default:lt(()=>[AI,$(tt,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),$(es,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),OI=Be(NI,[["__scopeId","data-v-9ca46572"]]);const MI=t=>(Ls("data-v-77de2009"),t=t(),Fs(),t),DI={class:"info"},LI={class:"moves"},FI=MI(()=>G("h1",null,"you won the challenge!",-1)),UI={data(){const{currentChallenge:t}=We();return{currentChallenge:t,time:t.timeLimit,nMoves:t.moveLimit,nMovesPer:t.moveLimitPer,layout:t.getCurrentLayout(),showWinModal:!1,showLostModal:!1,modalText:"",timerId:0}},methods:{handleClick(){const t=We();if(this.nMoves-=1,this.nMovesPer-=1,this.layout.isSolved()){if(t.stats.layoutsSolved++,this.nMovesPer=this.currentChallenge.moveLimitPer,this.currentChallenge.currentPattern===this.currentChallenge.nPatterns-1){this.showWinModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId);return}this.currentChallenge.nextLayout(),this.layout=this.currentChallenge.getCurrentLayout()}(this.nMoves==0||this.nMovesPer==0)&&(this.modalText="no moves left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))}},watch:{showWinModal(){this.showWinModal||this.$router.push("/challengeSelection")},showLostModal(){this.showLostModal||this.$router.push("/challengeSelection")}},computed:{formattedTime(){const t=Math.floor(this.time/60).toString(),e=(this.time%60).toString();return`${t.padStart(2,"0")}:${e.padStart(2,"0")}`},percentageCompleted(){return Math.floor(this.currentChallenge.currentPattern/this.currentChallenge.nPatterns*100)+"%"},moves(){return this.nMoves<=-1?"":"- "+this.nMoves},movesPer(){return this.nMovesPer<=-1?"":this.nMovesPer}},mounted(){this.timerId=window.setInterval(()=>{this.time-=1,this.time<=0&&(this.modalText="no time left!",this.showLostModal=!0,this.currentChallenge.reset(),window.clearInterval(this.timerId))},1e3)}},$I=Object.assign(UI,{__name:"ChallengeGame",setup(t){return(e,n)=>(j(),X("div",null,[G("p",DI,Ae(e.formattedTime)+" "+Ae(e.moves)+" - "+Ae(e.percentageCompleted),1),G("main",null,[$(Do,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"])]),G("p",LI,Ae(e.movesPer),1),$(ts,{modelValue:e.showWinModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showWinModal=s)},{default:lt(()=>[FI,$(tt,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),$(ts,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:lt(()=>[G("h1",null,Ae(e.modalText),1),$(tt,{black:"",text:"adnwkhu!",onClick:n[3]||(n[3]=s=>e.showLostModal=!1)})]),_:1},8,["modelValue"])]))}}),WI=Be($I,[["__scopeId","data-v-77de2009"]]),BI=G("h1",{class:"title"},"how to play",-1),VI={key:0},HI=G("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),zI=G("h1",null,"Try to get all the tiles to be white!",-1),jI={key:1},qI=G("h1",null,"Nice! Now observe what happens at the corners",-1),GI={key:2},KI=G("h1",null,"Well done! Okay one last , a bit harder",-1),YI={key:3},QI=G("h1",null,"Great job! Ready to play?",-1),JI=G("h1",{class:"text-center"},"Try it here!",-1),XI={data(){const t=We(),e=[{matrix:[[0,0,0],[0,0,0],[0,0,0]],solution:[4]},{matrix:[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]],solution:[3]},{matrix:[[1,1,1,-1],[1,1,0,0],[1,0,1,1],[-1,0,1,1]],solution:[11,14]}].map(s=>{const{matrix:i,solution:r}=s,o=new Vt({width:i[0].length,height:i.length});return o.setMatrix(i),{layout:o,solution:r}}),n=e[0].layout.copy();return t.setLayout(n),{layout:n,examples:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage+1>=this.examples.length){this.store.setLayout(this.layout),this.$router.push("/freeplayGame");return}this.layout=this.examples[this.stage+1].layout.copy(),this.store.setLayout(this.layout),setTimeout(()=>{this.stage++},100)}}},methods:{handleClick(t,e,n){if(!this.examples[this.stage].solution.includes(t)){this.layout.swapTiles(e,n),this.shake=!0,setTimeout(()=>{this.shake=!1},900);return}this.layout.isSolved()&&(this.showModal=!0)}}},ZI=Object.assign(XI,{__name:"TutorialView",setup(t){return(e,n)=>(j(),X("div",null,[BI,$(ts,{modelValue:e.showModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showModal=s)},{default:lt(()=>[e.stage===-1?(j(),X("div",VI,[HI,zI,$(tt,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(j(),X("div",jI,[qI,$(tt,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):e.stage===1?(j(),X("div",GI,[KI,$(tt,{black:"",text:"sure!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})])):(j(),X("div",YI,[QI,$(tt,{black:"",text:"go to freeplay",onClick:n[3]||(n[3]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),JI,$(Do,{class:Nt([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[5]||(n[5]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),eT=u0({history:k1("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:Nb},{path:"/tutorial",name:"tutorial",component:ZI},{path:"/freeplaySelection",name:"freeplaySelection",component:Vb},{path:"/puzzleSelection",name:"puzzleSelection",component:Jb},{path:"/challengeSelection",name:"challengeSelection",component:nI},{path:"/freeplayGame",name:"freeplayGame",component:xI},{path:"/puzzleGame",name:"puzzleGame",component:OI},{path:"/challengeGame",name:"challengeGame",component:WI}]}),kc=n1(hb),Cm=r1();zi(Cm);kc.use(eT);kc.use(Cm);kc.mount("#app");
