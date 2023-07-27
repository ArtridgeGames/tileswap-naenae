(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Xo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ye={},jn=[],ut=()=>{},Wf=()=>!1,Hf=/^on[^a-z]/,ar=t=>Hf.test(t),Zo=t=>t.startsWith("onUpdate:"),ke=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zf=Object.prototype.hasOwnProperty,ne=(t,e)=>zf.call(t,e),W=Array.isArray,Kn=t=>lr(t)==="[object Map]",pu=t=>lr(t)==="[object Set]",G=t=>typeof t=="function",Te=t=>typeof t=="string",ta=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",_u=t=>Ce(t)&&G(t.then)&&G(t.catch),gu=Object.prototype.toString,lr=t=>gu.call(t),Vf=t=>lr(t).slice(8,-1),mu=t=>lr(t)==="[object Object]",na=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jf=/-(\w)/g,wt=cr(t=>t.replace(jf,(e,n)=>n?n.toUpperCase():"")),Kf=/\B([A-Z])/g,cs=cr(t=>t.replace(Kf,"-$1").toLowerCase()),ur=cr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pr=cr(t=>t?`on${ur(t)}`:""),Bs=(t,e)=>!Object.is(t,e),Or=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Li=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gf=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qf=t=>{const e=Te(t)?Number(t):NaN;return isNaN(e)?t:e};let al;const ro=()=>al||(al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ri(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?Xf(s):ri(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(Ce(t))return t}}const Yf=/;(?![^(]*\))/g,Jf=/:([^]+)/,Qf=/\/\*[^]*?\*\//g;function Xf(t){const e={};return t.replace(Qf,"").split(Yf).forEach(n=>{if(n){const s=n.split(Jf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tn(t){let e="";if(Te(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Tn(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=Xo(Zf);function yu(t){return!!t||t===""}const Ze=t=>Te(t)?t:t==null?"":W(t)||Ce(t)&&(t.toString===gu||!G(t.toString))?JSON.stringify(t,vu,2):String(t),vu=(t,e)=>e&&e.__v_isRef?vu(t,e.value):Kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:pu(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!W(e)&&!mu(e)?String(e):e;let Je;class bu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Cu(t){return new bu(t)}function tp(t,e=Je){e&&e.active&&e.effects.push(t)}function Eu(){return Je}function np(t){Je&&Je.cleanups.push(t)}const sa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wu=t=>(t.w&sn)>0,Iu=t=>(t.n&sn)>0,sp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},ip=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];wu(i)&&!Iu(i)?i.delete(t):e[n++]=i,i.w&=~sn,i.n&=~sn}e.length=n}},Fi=new WeakMap;let Rs=0,sn=1;const oo=30;let rt;const Cn=Symbol(""),ao=Symbol("");class ia{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tp(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=Jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Jt=!0,sn=1<<++Rs,Rs<=oo?sp(this):ll(this),this.fn()}finally{Rs<=oo&&ip(this),sn=1<<--Rs,rt=this.parent,Jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(ll(this),this.onStop&&this.onStop(),this.active=!1)}}function ll(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jt=!0;const Tu=[];function us(){Tu.push(Jt),Jt=!1}function hs(){const t=Tu.pop();Jt=t===void 0?!0:t}function Ge(t,e,n){if(Jt&&rt){let s=Fi.get(t);s||Fi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=sa()),Su(i)}}function Su(t,e){let n=!1;Rs<=oo?Iu(t)||(t.n|=sn,n=!wu(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function Nt(t,e,n,s,i,r){const o=Fi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?na(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),Kn(t)&&a.push(o.get(ao)));break;case"delete":W(t)||(a.push(o.get(Cn)),Kn(t)&&a.push(o.get(ao)));break;case"set":Kn(t)&&a.push(o.get(Cn));break}if(a.length===1)a[0]&&lo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);lo(sa(l))}}function lo(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&cl(s);for(const s of n)s.computed||cl(s)}function cl(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rp(t,e){var n;return(n=Fi.get(t))==null?void 0:n.get(e)}const op=Xo("__proto__,__v_isRef,__isVue"),ku=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ta)),ap=ra(),lp=ra(!1,!0),cp=ra(!0),ul=up();function up(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Ge(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const s=te(this)[e].apply(this,n);return hs(),s}}),t}function hp(t){const e=te(this);return Ge(e,"has",t),e.hasOwnProperty(t)}function ra(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?kp:Pu:e?Nu:Au).get(s))return s;const o=W(s);if(!t){if(o&&ne(ul,i))return Reflect.get(ul,i,r);if(i==="hasOwnProperty")return hp}const a=Reflect.get(s,i,r);return(ta(i)?ku.has(i):op(i))||(t||Ge(s,"get",i),e)?a:Ie(a)?o&&na(i)?a:a.value:Ce(a)?t?Mu(a):ds(a):a}}const dp=Ru(),fp=Ru(!0);function Ru(t=!1){return function(n,s,i,r){let o=n[s];if(Zn(o)&&Ie(o)&&!Ie(i))return!1;if(!t&&(!Ui(i)&&!Zn(i)&&(o=te(o),i=te(i)),!W(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const a=W(n)&&na(s)?Number(s)<n.length:ne(n,s),l=Reflect.set(n,s,i,r);return n===te(r)&&(a?Bs(i,o)&&Nt(n,"set",s,i):Nt(n,"add",s,i)),l}}function pp(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Nt(t,"delete",e,void 0),s}function _p(t,e){const n=Reflect.has(t,e);return(!ta(e)||!ku.has(e))&&Ge(t,"has",e),n}function gp(t){return Ge(t,"iterate",W(t)?"length":Cn),Reflect.ownKeys(t)}const xu={get:ap,set:dp,deleteProperty:pp,has:_p,ownKeys:gp},mp={get:cp,set(t,e){return!0},deleteProperty(t,e){return!0}},yp=ke({},xu,{get:lp,set:fp}),oa=t=>t,hr=t=>Reflect.getPrototypeOf(t);function vi(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(e!==r&&Ge(i,"get",e),Ge(i,"get",r));const{has:o}=hr(i),a=s?oa:n?ca:Ws;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(t!==i&&Ge(s,"has",t),Ge(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ci(t,e=!1){return t=t.__v_raw,!e&&Ge(te(t),"iterate",Cn),Reflect.get(t,"size",t)}function hl(t){t=te(t);const e=te(this);return hr(e).has.call(e,t)||(e.add(t),Nt(e,"add",t,t)),this}function dl(t,e){e=te(e);const n=te(this),{has:s,get:i}=hr(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Bs(e,o)&&Nt(n,"set",t,e):Nt(n,"add",t,e),this}function fl(t){const e=te(this),{has:n,get:s}=hr(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Nt(e,"delete",t,void 0),r}function pl(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Nt(t,"clear",void 0,void 0),n}function Ei(t,e){return function(s,i){const r=this,o=r.__v_raw,a=te(o),l=e?oa:t?ca:Ws;return!t&&Ge(a,"iterate",Cn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function wi(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=Kn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?oa:e?ca:Ws;return!e&&Ge(r,"iterate",l?ao:Cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function vp(){const t={get(r){return vi(this,r)},get size(){return Ci(this)},has:bi,add:hl,set:dl,delete:fl,clear:pl,forEach:Ei(!1,!1)},e={get(r){return vi(this,r,!1,!0)},get size(){return Ci(this)},has:bi,add:hl,set:dl,delete:fl,clear:pl,forEach:Ei(!1,!0)},n={get(r){return vi(this,r,!0)},get size(){return Ci(this,!0)},has(r){return bi.call(this,r,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Ei(!0,!1)},s={get(r){return vi(this,r,!0,!0)},get size(){return Ci(this,!0)},has(r){return bi.call(this,r,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wi(r,!1,!1),n[r]=wi(r,!0,!1),e[r]=wi(r,!1,!0),s[r]=wi(r,!0,!0)}),[t,n,e,s]}const[bp,Cp,Ep,wp]=vp();function aa(t,e){const n=e?t?wp:Ep:t?Cp:bp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const Ip={get:aa(!1,!1)},Tp={get:aa(!1,!0)},Sp={get:aa(!0,!1)},Au=new WeakMap,Nu=new WeakMap,Pu=new WeakMap,kp=new WeakMap;function Rp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xp(t){return t.__v_skip||!Object.isExtensible(t)?0:Rp(Vf(t))}function ds(t){return Zn(t)?t:la(t,!1,xu,Ip,Au)}function Ou(t){return la(t,!1,yp,Tp,Nu)}function Mu(t){return la(t,!0,mp,Sp,Pu)}function la(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=xp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Qt(t){return Zn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function Ui(t){return!!(t&&t.__v_isShallow)}function Du(t){return Qt(t)||Zn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function dr(t){return Li(t,"__v_skip",!0),t}const Ws=t=>Ce(t)?ds(t):t,ca=t=>Ce(t)?Mu(t):t;function Lu(t){Jt&&rt&&(t=te(t),Su(t.dep||(t.dep=sa())))}function Fu(t,e){t=te(t);const n=t.dep;n&&lo(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function Hs(t){return Uu(t,!1)}function Ap(t){return Uu(t,!0)}function Uu(t,e){return Ie(t)?t:new Np(t,e)}class Np{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Ws(e)}get value(){return Lu(this),this._value}set value(e){const n=this.__v_isShallow||Ui(e)||Zn(e);e=n?e:te(e),Bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ws(e),Fu(this))}}function at(t){return Ie(t)?t.value:t}const Pp={get:(t,e,n)=>at(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $u(t){return Qt(t)?t:new Proxy(t,Pp)}function Op(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Dp(t,n);return e}class Mp{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rp(te(this._object),this._key)}}function Dp(t,e,n){const s=t[e];return Ie(s)?s:new Mp(t,e,n)}class Lp{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ia(e,()=>{this._dirty||(this._dirty=!0,Fu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return Lu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Fp(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=ut):(s=t.get,i=t.set),new Lp(s,i,r||!i,n)}function Xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){fr(r,e,n)}return i}function nt(t,e,n,s){if(G(t)){const r=Xt(t,e,n,s);return r&&_u(r)&&r.catch(o=>{fr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}function fr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xt(l,null,10,[t,o,a]);return}}Up(t,n,i,s)}function Up(t,e,n,s=!0){console.error(t)}let zs=!1,co=!1;const Ue=[];let mt=0;const Gn=[];let St=null,gn=0;const Bu=Promise.resolve();let ua=null;function ha(t){const e=ua||Bu;return t?e.then(this?t.bind(this):t):e}function $p(t){let e=mt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1;Vs(Ue[s])<t?e=s+1:n=s}return e}function da(t){(!Ue.length||!Ue.includes(t,zs&&t.allowRecurse?mt+1:mt))&&(t.id==null?Ue.push(t):Ue.splice($p(t.id),0,t),Wu())}function Wu(){!zs&&!co&&(co=!0,ua=Bu.then(zu))}function Bp(t){const e=Ue.indexOf(t);e>mt&&Ue.splice(e,1)}function Wp(t){W(t)?Gn.push(...t):(!St||!St.includes(t,t.allowRecurse?gn+1:gn))&&Gn.push(t),Wu()}function _l(t,e=zs?mt+1:0){for(;e<Ue.length;e++){const n=Ue[e];n&&n.pre&&(Ue.splice(e,1),e--,n())}}function Hu(t){if(Gn.length){const e=[...new Set(Gn)];if(Gn.length=0,St){St.push(...e);return}for(St=e,St.sort((n,s)=>Vs(n)-Vs(s)),gn=0;gn<St.length;gn++)St[gn]();St=null,gn=0}}const Vs=t=>t.id==null?1/0:t.id,Hp=(t,e)=>{const n=Vs(t)-Vs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zu(t){co=!1,zs=!0,Ue.sort(Hp);const e=ut;try{for(mt=0;mt<Ue.length;mt++){const n=Ue[mt];n&&n.active!==!1&&Xt(n,null,14)}}finally{mt=0,Ue.length=0,Hu(),zs=!1,ua=null,(Ue.length||Gn.length)&&zu()}}function zp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d&&(i=n.map(g=>Te(g)?g.trim():g)),h&&(i=n.map(Gf))}let a,l=s[a=Pr(e)]||s[a=Pr(wt(e))];!l&&r&&(l=s[a=Pr(cs(e))]),l&&nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(c,t,6,i)}}function Vu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Vu(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ce(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):ke(o,r),Ce(t)&&s.set(t,o),o)}function pr(t,e){return!t||!ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,cs(e))||ne(t,e))}let Pe=null,_r=null;function $i(t){const e=Pe;return Pe=t,_r=t&&t.type.__scopeId||null,e}function oi(t){_r=t}function ai(){_r=null}function rn(t,e=Pe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&kl(-1);const r=$i(e);let o;try{o=t(...i)}finally{$i(r),s._d&&kl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:w}=t;let O,A;const x=$i(t);try{if(n.shapeFlag&4){const M=i||s;O=gt(u.call(M,M,h,r,g,d,m)),A=l}else{const M=e;O=gt(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:Vp(l)}}catch(M){Os.length=0,fr(M,t,1),O=se(bt)}let H=O;if(A&&w!==!1){const M=Object.keys(A),{shapeFlag:q}=H;M.length&&q&7&&(o&&M.some(Zo)&&(A=jp(A,o)),H=on(H,A))}return n.dirs&&(H=on(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),O=H,$i(x),O}const Vp=t=>{let e;for(const n in t)(n==="class"||n==="style"||ar(n))&&((e||(e={}))[n]=t[n]);return e},jp=(t,e)=>{const n={};for(const s in t)(!Zo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Kp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?gl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!pr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?gl(s,o,c):!0:!!o;return!1}function gl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pr(n,r))return!0}return!1}function Gp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qp=t=>t.__isSuspense;function Yp(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Wp(t)}function Jp(t,e){return fa(t,null,{flush:"post"})}const Ii={};function As(t,e,n){return fa(t,e,n)}function fa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){var a;const l=Eu()===((a=Re)==null?void 0:a.scope)?Re:null;let c,u=!1,h=!1;if(Ie(t)?(c=()=>t.value,u=Ui(t)):Qt(t)?(c=()=>t,s=!0):W(t)?(h=!0,u=t.some(M=>Qt(M)||Ui(M)),c=()=>t.map(M=>{if(Ie(M))return M.value;if(Qt(M))return vn(M);if(G(M))return Xt(M,l,2)})):G(t)?e?c=()=>Xt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),nt(t,l,3,[g])}:c=ut,e&&s){const M=c;c=()=>vn(M())}let d,g=M=>{d=x.onStop=()=>{Xt(M,l,4)}},m;if(Ys)if(g=ut,e?n&&nt(e,l,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const M=K_();m=M.__watcherHandles||(M.__watcherHandles=[])}else return ut;let w=h?new Array(t.length).fill(Ii):Ii;const O=()=>{if(x.active)if(e){const M=x.run();(s||u||(h?M.some((q,pe)=>Bs(q,w[pe])):Bs(M,w)))&&(d&&d(),nt(e,l,3,[M,w===Ii?void 0:h&&w[0]===Ii?[]:w,g]),w=M)}else x.run()};O.allowRecurse=!!e;let A;i==="sync"?A=O:i==="post"?A=()=>Ve(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),A=()=>da(O));const x=new ia(c,A);e?n?O():w=x.run():i==="post"?Ve(x.run.bind(x),l&&l.suspense):x.run();const H=()=>{x.stop(),l&&l.scope&&ea(l.scope.effects,x)};return m&&m.push(H),H}function Qp(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?ju(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Re;es(this);const a=fa(i,r.bind(s),n);return o?es(o):En(),a}function ju(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function vn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))vn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)vn(t[n],e);else if(pu(t)||Kn(t))t.forEach(n=>{vn(n,e)});else if(mu(t))for(const n in t)vn(t[n],e);return t}function uo(t,e){const n=Pe;if(n===null)return t;const s=br(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ye]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&vn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(us(),nt(l,n,8,[t.el,a,t,e]),hs())}}function Xp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return js(()=>{t.isMounted=!0}),Qu(()=>{t.isUnmounting=!0}),t}const Xe=[Function,Array],Ku={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},Zp={name:"BaseTransition",props:Ku,setup(t,{slots:e}){const n=dh(),s=Xp();let i;return()=>{const r=e.default&&qu(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==bt){o=w;break}}const a=te(t),{mode:l}=a;if(s.isLeaving)return Dr(o);const c=ml(o);if(!c)return Dr(o);const u=ho(c,a,s,n);fo(c,u);const h=n.subTree,d=h&&ml(h);let g=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(d&&d.type!==bt&&(!mn(c,d)||g)){const w=ho(d,a,s,n);if(fo(d,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Dr(o);l==="in-out"&&c.type!==bt&&(w.delayLeave=(O,A,x)=>{const H=Gu(s,d);H[String(d.key)]=d,O._leaveCb=()=>{A(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},e_=Zp;function Gu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ho(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:w,onAppear:O,onAfterAppear:A,onAppearCancelled:x}=e,H=String(t.key),M=Gu(n,t),q=(N,F)=>{N&&nt(N,s,9,F)},pe=(N,F)=>{const K=F[1];q(N,F),W(N)?N.every(de=>de.length<=1)&&K():N.length<=1&&K()},ge={mode:r,persisted:o,beforeEnter(N){let F=a;if(!n.isMounted)if(i)F=w||a;else return;N._leaveCb&&N._leaveCb(!0);const K=M[H];K&&mn(t,K)&&K.el._leaveCb&&K.el._leaveCb(),q(F,[N])},enter(N){let F=l,K=c,de=u;if(!n.isMounted)if(i)F=O||l,K=A||c,de=x||u;else return;let D=!1;const ie=N._enterCb=Oe=>{D||(D=!0,Oe?q(de,[N]):q(K,[N]),ge.delayedLeave&&ge.delayedLeave(),N._enterCb=void 0)};F?pe(F,[N,ie]):ie()},leave(N,F){const K=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return F();q(h,[N]);let de=!1;const D=N._leaveCb=ie=>{de||(de=!0,F(),ie?q(m,[N]):q(g,[N]),N._leaveCb=void 0,M[K]===t&&delete M[K])};M[K]=t,d?pe(d,[N,D]):D()},clone(N){return ho(N,e,n,s)}};return ge}function Dr(t){if(gr(t))return t=on(t),t.children=null,t}function ml(t){return gr(t)?t.children?t.children[0]:void 0:t}function fo(t,e){t.shapeFlag&6&&t.component?fo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===be?(o.patchFlag&128&&i++,s=s.concat(qu(o.children,e,a))):(e||o.type!==bt)&&s.push(a!=null?on(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Yu(t,e){return G(t)?(()=>ke({name:t.name},e,{setup:t}))():t}const Ns=t=>!!t.type.__asyncLoader,gr=t=>t.type.__isKeepAlive;function t_(t,e){Ju(t,"a",e)}function n_(t,e){Ju(t,"da",e)}function Ju(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)gr(i.parent.vnode)&&s_(s,e,n,i),i=i.parent}}function s_(t,e,n,s){const i=mr(e,t,s,!0);Ks(()=>{ea(s[e],i)},n)}function mr(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),es(n);const a=nt(e,n,t,o);return En(),hs(),a});return s?i.unshift(r):i.push(r),r}}const Dt=t=>(e,n=Re)=>(!Ys||t==="sp")&&mr(t,(...s)=>e(...s),n),i_=Dt("bm"),js=Dt("m"),r_=Dt("bu"),o_=Dt("u"),Qu=Dt("bum"),Ks=Dt("um"),a_=Dt("sp"),l_=Dt("rtg"),c_=Dt("rtc");function u_(t,e=Re){mr("ec",t,e)}const Xu="components",Zu=Symbol.for("v-ndc");function h_(t){return Te(t)?d_(Xu,t,!1)||t:t||Zu}function d_(t,e,n=!0,s=!1){const i=Pe||Re;if(i){const r=i.type;if(t===Xu){const a=z_(r,!1);if(a&&(a===e||a===wt(e)||a===ur(wt(e))))return r}const o=yl(i[t]||r[t],e)||yl(i.appContext[t],e);return!o&&s?r:o}}function yl(t,e){return t&&(t[e]||t[wt(e)]||t[ur(wt(e))])}function et(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Te(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function f_(t,e,n={},s,i){if(Pe.isCE||Pe.parent&&Ns(Pe.parent)&&Pe.parent.isCE)return e!=="default"&&(n.name=e),se("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),V();const o=r&&eh(r(n)),a=Pt(be,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function eh(t){return t.some(e=>Wi(e)?!(e.type===bt||e.type===be&&!eh(e.children)):!0)?t:null}const po=t=>t?fh(t)?br(t)||t.proxy:po(t.parent):null,Ps=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>po(t.parent),$root:t=>po(t.root),$emit:t=>t.emit,$options:t=>pa(t),$forceUpdate:t=>t.f||(t.f=()=>da(t.update)),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>Qp.bind(t)}),Lr=(t,e)=>t!==ye&&!t.__isScriptSetup&&ne(t,e),p_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Lr(s,e))return o[e]=1,s[e];if(i!==ye&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==ye&&ne(n,e))return o[e]=4,n[e];_o&&(o[e]=0)}}const u=Ps[e];let h,d;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Lr(i,e)?(i[e]=n,!0):s!==ye&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ye&&ne(t,o)||Lr(e,o)||(a=r[0])&&ne(a,o)||ne(s,o)||ne(Ps,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _o=!0;function __(t){const e=pa(t),n=t.proxy,s=t.ctx;_o=!1,e.beforeCreate&&bl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:w,deactivated:O,beforeDestroy:A,beforeUnmount:x,destroyed:H,unmounted:M,render:q,renderTracked:pe,renderTriggered:ge,errorCaptured:N,serverPrefetch:F,expose:K,inheritAttrs:de,components:D,directives:ie,filters:Oe}=e;if(c&&g_(c,s,null),o)for(const fe in o){const re=o[fe];G(re)&&(s[fe]=re.bind(n))}if(i){const fe=i.call(n,n);Ce(fe)&&(t.data=ds(fe))}if(_o=!0,r)for(const fe in r){const re=r[fe],It=G(re)?re.bind(n,n):G(re.get)?re.get.bind(n,n):ut,Ft=!G(re)&&G(re.set)?re.set.bind(n):ut,ft=je({get:It,set:Ft});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>ft.value,set:ze=>ft.value=ze})}if(a)for(const fe in a)th(a[fe],s,n,fe);if(l){const fe=G(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(re=>{xi(re,fe[re])})}u&&bl(u,t,"c");function X(fe,re){W(re)?re.forEach(It=>fe(It.bind(n))):re&&fe(re.bind(n))}if(X(i_,h),X(js,d),X(r_,g),X(o_,m),X(t_,w),X(n_,O),X(u_,N),X(c_,pe),X(l_,ge),X(Qu,x),X(Ks,M),X(a_,F),W(K))if(K.length){const fe=t.exposed||(t.exposed={});K.forEach(re=>{Object.defineProperty(fe,re,{get:()=>n[re],set:It=>n[re]=It})})}else t.exposed||(t.exposed={});q&&t.render===ut&&(t.render=q),de!=null&&(t.inheritAttrs=de),D&&(t.components=D),ie&&(t.directives=ie)}function g_(t,e,n=ut){W(t)&&(t=go(t));for(const s in t){const i=t[s];let r;Ce(i)?"default"in i?r=vt(i.from||s,i.default,!0):r=vt(i.from||s):r=vt(i),Ie(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function bl(t,e,n){nt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function th(t,e,n,s){const i=s.includes(".")?ju(n,s):()=>n[s];if(Te(t)){const r=e[t];G(r)&&As(i,r)}else if(G(t))As(i,t.bind(n));else if(Ce(t))if(W(t))t.forEach(r=>th(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&As(i,r,t)}}function pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Bi(l,c,o,!0)),Bi(l,e,o)),Ce(e)&&r.set(e,l),l}function Bi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Bi(t,r,n,!0),i&&i.forEach(o=>Bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=m_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const m_={data:Cl,props:El,emits:El,methods:xs,computed:xs,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:xs,directives:xs,watch:v_,provide:Cl,inject:y_};function Cl(t,e){return e?t?function(){return ke(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function y_(t,e){return xs(go(t),go(e))}function go(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?ke(Object.create(null),t,e):e}function El(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:ke(Object.create(null),vl(t),vl(e??{})):e}function v_(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function nh(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b_=0;function C_(t,e){return function(s,i=null){G(s)||(s=ke({},s)),i!=null&&!Ce(i)&&(i=null);const r=nh(),o=new Set;let a=!1;const l=r.app={_uid:b_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:G_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=se(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,br(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Gs=l;try{return c()}finally{Gs=null}}};return l}}let Gs=null;function xi(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function vt(t,e,n=!1){const s=Re||Pe;if(s||Gs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Gs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}function E_(){return!!(Re||Pe||Gs)}function w_(t,e,n,s=!1){const i={},r={};Li(r,vr,1),t.propsDefaults=Object.create(null),sh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ou(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function I_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pr(t.emitsOptions,d))continue;const g=e[d];if(l)if(ne(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const m=wt(d);i[m]=mo(l,a,m,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{sh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=cs(h))===h||!ne(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=mo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ne(e,h))&&(delete r[h],c=!0)}c&&Nt(t,"set","$attrs")}function sh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ri(l))continue;const c=e[l];let u;i&&ne(i,u=wt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:pr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=te(n),c=a||ye;for(let u=0;u<r.length;u++){const h=r[u];n[h]=mo(i,l,h,c[h],t,!ne(c,h))}}return o}function mo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(es(i),s=c[n]=l.call(null,e),En())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}function ih(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,g]=ih(h,e,!0);ke(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ce(t)&&s.set(t,jn),jn;if(W(r))for(let u=0;u<r.length;u++){const h=wt(r[u]);wl(h)&&(o[h]=ye)}else if(r)for(const u in r){const h=wt(u);if(wl(h)){const d=r[u],g=o[h]=W(d)||G(d)?{type:d}:ke({},d);if(g){const m=Sl(Boolean,g.type),w=Sl(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||ne(g,"default"))&&a.push(h)}}}const c=[o,a];return Ce(t)&&s.set(t,c),c}function wl(t){return t[0]!=="$"}function Il(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Tl(t,e){return Il(t)===Il(e)}function Sl(t,e){return W(e)?e.findIndex(n=>Tl(n,t)):G(e)&&Tl(e,t)?0:-1}const rh=t=>t[0]==="_"||t==="$stable",_a=t=>W(t)?t.map(gt):[gt(t)],T_=(t,e,n)=>{if(e._n)return e;const s=rn((...i)=>_a(e(...i)),n);return s._c=!1,s},oh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(rh(i))continue;const r=t[i];if(G(r))e[i]=T_(i,r,s);else if(r!=null){const o=_a(r);e[i]=()=>o}}},ah=(t,e)=>{const n=_a(e);t.slots.default=()=>n},S_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Li(e,"_",n)):oh(e,t.slots={})}else t.slots={},e&&ah(t,e);Li(t.slots,vr,1)},k_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ke(i,e),!n&&a===1&&delete i._):(r=!e.$stable,oh(e,i)),o=e}else e&&(ah(t,e),o={default:1});if(r)for(const a in i)!rh(a)&&!(a in o)&&delete i[a]};function yo(t,e,n,s,i=!1){if(W(t)){t.forEach((d,g)=>yo(d,e&&(W(e)?e[g]:e),n,s,i));return}if(Ns(s)&&!i)return;const r=s.shapeFlag&4?br(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,ne(h,c)&&(h[c]=null)):Ie(c)&&(c.value=null)),G(l))Xt(l,a,12,[o,u]);else{const d=Te(l),g=Ie(l);if(d||g){const m=()=>{if(t.f){const w=d?ne(h,l)?h[l]:u[l]:l.value;i?W(w)&&ea(w,r):W(w)?w.includes(r)||w.push(r):d?(u[l]=[r],ne(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ne(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ve(m,n)):m()}}}const Ve=Yp;function R_(t){return x_(t)}function x_(t,e){const n=ro();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ut,insertStaticContent:m}=t,w=(f,p,_,y=null,b=null,C=null,R=!1,I=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!mn(f,p)&&(y=v(f),ze(f,b,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:$,shapeFlag:L}=p;switch(E){case yr:O(f,p,_,y);break;case bt:A(f,p,_,y);break;case Ai:f==null&&x(p,_,y,R);break;case be:D(f,p,_,y,b,C,R,I,T);break;default:L&1?q(f,p,_,y,b,C,R,I,T):L&6?ie(f,p,_,y,b,C,R,I,T):(L&64||L&128)&&E.process(f,p,_,y,b,C,R,I,T,S)}$!=null&&b&&yo($,f&&f.ref,C,p||f,!p)},O=(f,p,_,y)=>{if(f==null)s(p.el=a(p.children),_,y);else{const b=p.el=f.el;p.children!==f.children&&c(b,p.children)}},A=(f,p,_,y)=>{f==null?s(p.el=l(p.children||""),_,y):p.el=f.el},x=(f,p,_,y)=>{[f.el,f.anchor]=m(f.children,p,_,y,f.el,f.anchor)},H=({el:f,anchor:p},_,y)=>{let b;for(;f&&f!==p;)b=d(f),s(f,_,y),f=b;s(p,_,y)},M=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},q=(f,p,_,y,b,C,R,I,T)=>{R=R||p.type==="svg",f==null?pe(p,_,y,b,C,R,I,T):F(f,p,b,C,R,I,T)},pe=(f,p,_,y,b,C,R,I)=>{let T,E;const{type:$,props:L,shapeFlag:B,transition:z,dirs:Y}=f;if(T=f.el=o(f.type,C,L&&L.is,L),B&8?u(T,f.children):B&16&&N(f.children,T,null,y,b,C&&$!=="foreignObject",R,I),Y&&un(f,null,y,"created"),ge(T,f,f.scopeId,R,y),L){for(const le in L)le!=="value"&&!Ri(le)&&r(T,le,null,L[le],C,f.children,y,b,De);"value"in L&&r(T,"value",null,L.value),(E=L.onVnodeBeforeMount)&&_t(E,y,f)}Y&&un(f,null,y,"beforeMount");const _e=(!b||b&&!b.pendingBranch)&&z&&!z.persisted;_e&&z.beforeEnter(T),s(T,p,_),((E=L&&L.onVnodeMounted)||_e||Y)&&Ve(()=>{E&&_t(E,y,f),_e&&z.enter(T),Y&&un(f,null,y,"mounted")},b)},ge=(f,p,_,y,b)=>{if(_&&g(f,_),y)for(let C=0;C<y.length;C++)g(f,y[C]);if(b){let C=b.subTree;if(p===C){const R=b.vnode;ge(f,R,R.scopeId,R.slotScopeIds,b.parent)}}},N=(f,p,_,y,b,C,R,I,T=0)=>{for(let E=T;E<f.length;E++){const $=f[E]=I?Vt(f[E]):gt(f[E]);w(null,$,p,_,y,b,C,R,I)}},F=(f,p,_,y,b,C,R)=>{const I=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:$}=p;T|=f.patchFlag&16;const L=f.props||ye,B=p.props||ye;let z;_&&hn(_,!1),(z=B.onVnodeBeforeUpdate)&&_t(z,_,p,f),$&&un(p,f,_,"beforeUpdate"),_&&hn(_,!0);const Y=b&&p.type!=="foreignObject";if(E?K(f.dynamicChildren,E,I,_,y,Y,C):R||re(f,p,I,null,_,y,Y,C,!1),T>0){if(T&16)de(I,p,L,B,_,y,b);else if(T&2&&L.class!==B.class&&r(I,"class",null,B.class,b),T&4&&r(I,"style",L.style,B.style,b),T&8){const _e=p.dynamicProps;for(let le=0;le<_e.length;le++){const Se=_e[le],it=L[Se],Fn=B[Se];(Fn!==it||Se==="value")&&r(I,Se,it,Fn,b,f.children,_,y,De)}}T&1&&f.children!==p.children&&u(I,p.children)}else!R&&E==null&&de(I,p,L,B,_,y,b);((z=B.onVnodeUpdated)||$)&&Ve(()=>{z&&_t(z,_,p,f),$&&un(p,f,_,"updated")},y)},K=(f,p,_,y,b,C,R)=>{for(let I=0;I<p.length;I++){const T=f[I],E=p[I],$=T.el&&(T.type===be||!mn(T,E)||T.shapeFlag&70)?h(T.el):_;w(T,E,$,null,y,b,C,R,!0)}},de=(f,p,_,y,b,C,R)=>{if(_!==y){if(_!==ye)for(const I in _)!Ri(I)&&!(I in y)&&r(f,I,_[I],null,R,p.children,b,C,De);for(const I in y){if(Ri(I))continue;const T=y[I],E=_[I];T!==E&&I!=="value"&&r(f,I,E,T,R,p.children,b,C,De)}"value"in y&&r(f,"value",_.value,y.value)}},D=(f,p,_,y,b,C,R,I,T)=>{const E=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:z}=p;z&&(I=I?I.concat(z):z),f==null?(s(E,_,y),s($,_,y),N(p.children,_,$,b,C,R,I,T)):L>0&&L&64&&B&&f.dynamicChildren?(K(f.dynamicChildren,B,_,b,C,R,I),(p.key!=null||b&&p===b.subTree)&&lh(f,p,!0)):re(f,p,_,$,b,C,R,I,T)},ie=(f,p,_,y,b,C,R,I,T)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?b.ctx.activate(p,_,y,R,T):Oe(p,_,y,b,C,R,T):We(f,p,T)},Oe=(f,p,_,y,b,C,R)=>{const I=f.component=U_(f,y,b);if(gr(f)&&(I.ctx.renderer=S),$_(I),I.asyncDep){if(b&&b.registerDep(I,X),!f.el){const T=I.subTree=se(bt);A(null,T,p,_)}return}X(I,f,p,_,b,C,R)},We=(f,p,_)=>{const y=p.component=f.component;if(Kp(f,p,_))if(y.asyncDep&&!y.asyncResolved){fe(y,p,_);return}else y.next=p,Bp(y.update),y.update();else p.el=f.el,y.vnode=p},X=(f,p,_,y,b,C,R)=>{const I=()=>{if(f.isMounted){let{next:$,bu:L,u:B,parent:z,vnode:Y}=f,_e=$,le;hn(f,!1),$?($.el=Y.el,fe(f,$,R)):$=Y,L&&Or(L),(le=$.props&&$.props.onVnodeBeforeUpdate)&&_t(le,z,$,Y),hn(f,!0);const Se=Mr(f),it=f.subTree;f.subTree=Se,w(it,Se,h(it.el),v(it),f,b,C),$.el=Se.el,_e===null&&Gp(f,Se.el),B&&Ve(B,b),(le=$.props&&$.props.onVnodeUpdated)&&Ve(()=>_t(le,z,$,Y),b)}else{let $;const{el:L,props:B}=p,{bm:z,m:Y,parent:_e}=f,le=Ns(p);if(hn(f,!1),z&&Or(z),!le&&($=B&&B.onVnodeBeforeMount)&&_t($,_e,p),hn(f,!0),L&&oe){const Se=()=>{f.subTree=Mr(f),oe(L,f.subTree,f,b,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Mr(f);w(null,Se,_,y,f,b,C),p.el=Se.el}if(Y&&Ve(Y,b),!le&&($=B&&B.onVnodeMounted)){const Se=p;Ve(()=>_t($,_e,Se),b)}(p.shapeFlag&256||_e&&Ns(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&Ve(f.a,b),f.isMounted=!0,p=_=y=null}},T=f.effect=new ia(I,()=>da(E),f.scope),E=f.update=()=>T.run();E.id=f.uid,hn(f,!0),E()},fe=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,I_(f,p.props,y,_),k_(f,p.children,_),us(),_l(),hs()},re=(f,p,_,y,b,C,R,I,T=!1)=>{const E=f&&f.children,$=f?f.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){Ft(E,L,_,y,b,C,R,I,T);return}else if(B&256){It(E,L,_,y,b,C,R,I,T);return}}z&8?($&16&&De(E,b,C),L!==E&&u(_,L)):$&16?z&16?Ft(E,L,_,y,b,C,R,I,T):De(E,b,C,!0):($&8&&u(_,""),z&16&&N(L,_,y,b,C,R,I,T))},It=(f,p,_,y,b,C,R,I,T)=>{f=f||jn,p=p||jn;const E=f.length,$=p.length,L=Math.min(E,$);let B;for(B=0;B<L;B++){const z=p[B]=T?Vt(p[B]):gt(p[B]);w(f[B],z,_,null,b,C,R,I,T)}E>$?De(f,b,C,!0,!1,L):N(p,_,y,b,C,R,I,T,L)},Ft=(f,p,_,y,b,C,R,I,T)=>{let E=0;const $=p.length;let L=f.length-1,B=$-1;for(;E<=L&&E<=B;){const z=f[E],Y=p[E]=T?Vt(p[E]):gt(p[E]);if(mn(z,Y))w(z,Y,_,null,b,C,R,I,T);else break;E++}for(;E<=L&&E<=B;){const z=f[L],Y=p[B]=T?Vt(p[B]):gt(p[B]);if(mn(z,Y))w(z,Y,_,null,b,C,R,I,T);else break;L--,B--}if(E>L){if(E<=B){const z=B+1,Y=z<$?p[z].el:y;for(;E<=B;)w(null,p[E]=T?Vt(p[E]):gt(p[E]),_,Y,b,C,R,I,T),E++}}else if(E>B)for(;E<=L;)ze(f[E],b,C,!0),E++;else{const z=E,Y=E,_e=new Map;for(E=Y;E<=B;E++){const Ye=p[E]=T?Vt(p[E]):gt(p[E]);Ye.key!=null&&_e.set(Ye.key,E)}let le,Se=0;const it=B-Y+1;let Fn=!1,il=0;const bs=new Array(it);for(E=0;E<it;E++)bs[E]=0;for(E=z;E<=L;E++){const Ye=f[E];if(Se>=it){ze(Ye,b,C,!0);continue}let pt;if(Ye.key!=null)pt=_e.get(Ye.key);else for(le=Y;le<=B;le++)if(bs[le-Y]===0&&mn(Ye,p[le])){pt=le;break}pt===void 0?ze(Ye,b,C,!0):(bs[pt-Y]=E+1,pt>=il?il=pt:Fn=!0,w(Ye,p[pt],_,null,b,C,R,I,T),Se++)}const rl=Fn?A_(bs):jn;for(le=rl.length-1,E=it-1;E>=0;E--){const Ye=Y+E,pt=p[Ye],ol=Ye+1<$?p[Ye+1].el:y;bs[E]===0?w(null,pt,_,ol,b,C,R,I,T):Fn&&(le<0||E!==rl[le]?ft(pt,_,ol,2):le--)}}},ft=(f,p,_,y,b=null)=>{const{el:C,type:R,transition:I,children:T,shapeFlag:E}=f;if(E&6){ft(f.component.subTree,p,_,y);return}if(E&128){f.suspense.move(p,_,y);return}if(E&64){R.move(f,p,_,S);return}if(R===be){s(C,p,_);for(let L=0;L<T.length;L++)ft(T[L],p,_,y);s(f.anchor,p,_);return}if(R===Ai){H(f,p,_);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(C),s(C,p,_),Ve(()=>I.enter(C),b);else{const{leave:L,delayLeave:B,afterLeave:z}=I,Y=()=>s(C,p,_),_e=()=>{L(C,()=>{Y(),z&&z()})};B?B(C,Y,_e):_e()}else s(C,p,_)},ze=(f,p,_,y=!1,b=!1)=>{const{type:C,props:R,ref:I,children:T,dynamicChildren:E,shapeFlag:$,patchFlag:L,dirs:B}=f;if(I!=null&&yo(I,null,_,f,!0),$&256){p.ctx.deactivate(f);return}const z=$&1&&B,Y=!Ns(f);let _e;if(Y&&(_e=R&&R.onVnodeBeforeUnmount)&&_t(_e,p,f),$&6)yi(f.component,_,y);else{if($&128){f.suspense.unmount(_,y);return}z&&un(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,_,b,S,y):E&&(C!==be||L>0&&L&64)?De(E,p,_,!1,!0):(C===be&&L&384||!b&&$&16)&&De(T,p,_),y&&Dn(f)}(Y&&(_e=R&&R.onVnodeUnmounted)||z)&&Ve(()=>{_e&&_t(_e,p,f),z&&un(f,null,p,"unmounted")},_)},Dn=f=>{const{type:p,el:_,anchor:y,transition:b}=f;if(p===be){Ln(_,y);return}if(p===Ai){M(f);return}const C=()=>{i(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:I}=b,T=()=>R(_,C);I?I(f.el,C,T):T()}else C()},Ln=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},yi=(f,p,_)=>{const{bum:y,scope:b,update:C,subTree:R,um:I}=f;y&&Or(y),b.stop(),C&&(C.active=!1,ze(R,f,p,_)),I&&Ve(I,p),Ve(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},De=(f,p,_,y=!1,b=!1,C=0)=>{for(let R=C;R<f.length;R++)ze(f[R],p,_,y,b)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),P=(f,p,_)=>{f==null?p._vnode&&ze(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,_),_l(),Hu(),p._vnode=f},S={p:w,um:ze,m:ft,r:Dn,mt:Oe,mc:N,pc:re,pbc:K,n:v,o:t};let U,oe;return e&&([U,oe]=e(S)),{render:P,hydrate:U,createApp:C_(P,U)}}function hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lh(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Vt(i[r]),a.el=o.el),n||lh(o,a)),a.type===yr&&(a.el=o.el)}}function A_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const N_=t=>t.__isTeleport,be=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),Ai=Symbol.for("v-stc"),Os=[];let lt=null;function V(t=!1){Os.push(lt=t?null:[])}function P_(){Os.pop(),lt=Os[Os.length-1]||null}let qs=1;function kl(t){qs+=t}function ch(t){return t.dynamicChildren=qs>0?lt||jn:null,P_(),qs>0&&lt&&lt.push(t),t}function Q(t,e,n,s,i,r){return ch(ue(t,e,n,s,i,r,!0))}function Pt(t,e,n,s,i){return ch(se(t,e,n,s,i,!0))}function Wi(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const vr="__vInternal",uh=({key:t})=>t??null,Ni=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||Ie(t)||G(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,s=0,i=null,r=t===be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uh(e),ref:e&&Ni(e),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return a?(ga(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),qs>0&&!o&&lt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&lt.push(l),l}const se=O_;function O_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Zu)&&(t=bt),Wi(t)){const a=on(t,e,!0);return n&&ga(a,n),qs>0&&!r&&lt&&(a.shapeFlag&6?lt[lt.indexOf(t)]=a:lt.push(a)),a.patchFlag|=-2,a}if(V_(t)&&(t=t.__vccOpts),e){e=M_(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Tn(a)),Ce(l)&&(Du(l)&&!W(l)&&(l=ke({},l)),e.style=ri(l))}const o=Te(t)?1:qp(t)?128:N_(t)?64:Ce(t)?4:G(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function M_(t){return t?Du(t)||vr in t?ke({},t):t:null}function on(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?D_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uh(a),ref:e&&e.ref?n&&i?W(i)?i.concat(Ni(e)):[i,Ni(e)]:Ni(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hh(t=" ",e=0){return se(yr,null,t,e)}function gt(t){return t==null||typeof t=="boolean"?se(bt):W(t)?se(be,null,t.slice()):typeof t=="object"?Vt(t):se(yr,null,String(t))}function Vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function ga(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ga(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(vr in e)?e._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[hh(e)]):n=8);t.children=e,t.shapeFlag|=n}function D_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Tn([e.class,s.class]));else if(i==="style")e.style=ri([e.style,s.style]);else if(ar(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function _t(t,e,n,s=null){nt(t,e,7,[n,s])}const L_=nh();let F_=0;function U_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||L_,r={uid:F_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ih(s,i),emitsOptions:Vu(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zp.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const dh=()=>Re||Pe;let ma,Un,Rl="__VUE_INSTANCE_SETTERS__";(Un=ro()[Rl])||(Un=ro()[Rl]=[]),Un.push(t=>Re=t),ma=t=>{Un.length>1?Un.forEach(e=>e(t)):Un[0](t)};const es=t=>{ma(t),t.scope.on()},En=()=>{Re&&Re.scope.off(),ma(null)};function fh(t){return t.vnode.shapeFlag&4}let Ys=!1;function $_(t,e=!1){Ys=e;const{props:n,children:s}=t.vnode,i=fh(t);w_(t,n,i,e),S_(t,s);const r=i?B_(t,e):void 0;return Ys=!1,r}function B_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dr(new Proxy(t.ctx,p_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?H_(t):null;es(t),us();const r=Xt(s,t,0,[t.props,i]);if(hs(),En(),_u(r)){if(r.then(En,En),e)return r.then(o=>{xl(t,o,e)}).catch(o=>{fr(o,t,0)});t.asyncDep=r}else xl(t,r,e)}else ph(t,e)}function xl(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=$u(e)),ph(t,n)}let Al;function ph(t,e,n){const s=t.type;if(!t.render){if(!e&&Al&&!s.render){const i=s.template||pa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ke(ke({isCustomElement:r,delimiters:a},o),l);s.render=Al(i,c)}}t.render=s.render||ut}es(t),us(),__(t),hs(),En()}function W_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}}))}function H_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return W_(t)},slots:t.slots,emit:t.emit,expose:e}}function br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($u(dr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ps)return Ps[n](t)},has(e,n){return n in e||n in Ps}}))}function z_(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function V_(t){return G(t)&&"__vccOpts"in t}const je=(t,e)=>Fp(t,e,Ys);function ya(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!W(e)?Wi(e)?se(t,null,[e]):se(t,e):se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wi(n)&&(n=[n]),se(t,e,n))}const j_=Symbol.for("v-scx"),K_=()=>vt(j_),G_="3.3.4",q_="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,Nl=yn&&yn.createElement("template"),Y_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?yn.createElementNS(q_,t):yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Nl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Nl.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function J_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Q_(t,e,n){const s=t.style,i=Te(n);if(n&&!i){if(e&&!Te(e))for(const r in e)n[r]==null&&vo(s,r,"");for(const r in n)vo(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Pl=/\s*!important$/;function vo(t,e,n){if(W(n))n.forEach(s=>vo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=X_(t,e);Pl.test(n)?t.setProperty(cs(s),n.replace(Pl,""),"important"):t[s]=n}}const Ol=["Webkit","Moz","ms"],Fr={};function X_(t,e){const n=Fr[e];if(n)return n;let s=wt(e);if(s!=="filter"&&s in t)return Fr[e]=s;s=ur(s);for(let i=0;i<Ol.length;i++){const r=Ol[i]+s;if(r in t)return Fr[e]=r}return e}const Ml="http://www.w3.org/1999/xlink";function Z_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ml,e.slice(6,e.length)):t.setAttributeNS(Ml,e,n);else{const r=ep(e);n==null||r&&!yu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function eg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function tg(t,e,n,s){t.addEventListener(e,n,s)}function ng(t,e,n,s){t.removeEventListener(e,n,s)}function sg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=ig(e);if(s){const c=r[e]=ag(s,i);tg(t,a,c,l)}else o&&(ng(t,a,o,l),r[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function ig(t){let e;if(Dl.test(t)){e={};let s;for(;s=t.match(Dl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Ur=0;const rg=Promise.resolve(),og=()=>Ur||(rg.then(()=>Ur=0),Ur=Date.now());function ag(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(lg(s,n.value),e,5,[s])};return n.value=t,n.attached=og(),n}function lg(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ll=/^on[a-z]/,cg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?J_(t,s,i):e==="style"?Q_(t,n,s):ar(e)?Zo(e)||sg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ug(t,e,s,i))?eg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Z_(t,e,s,i))};function ug(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ll.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ll.test(e)&&Te(n)?!1:e in t}function _h(t){const e=dh();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Co(r,i))},s=()=>{const i=t(e.proxy);bo(e.subTree,i),n(i)};Jp(s),js(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Ks(()=>i.disconnect())})}function bo(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{bo(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Co(t.el,e);else if(t.type===be)t.children.forEach(n=>bo(n,e));else if(t.type===Ai){let{el:n,anchor:s}=t;for(;n&&(Co(n,e),n!==s);)n=n.nextSibling}}function Co(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const $t="transition",Cs="animation",Js=(t,{slots:e})=>ya(e_,hg(t),e);Js.displayName="Transition";const gh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Js.props=ke({},Ku,gh);const dn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fl=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function hg(t){const e={};for(const D in t)D in gh||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=dg(i),w=m&&m[0],O=m&&m[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:H,onLeave:M,onLeaveCancelled:q,onBeforeAppear:pe=A,onAppear:ge=x,onAppearCancelled:N=H}=e,F=(D,ie,Oe)=>{fn(D,ie?u:a),fn(D,ie?c:o),Oe&&Oe()},K=(D,ie)=>{D._isLeaving=!1,fn(D,h),fn(D,g),fn(D,d),ie&&ie()},de=D=>(ie,Oe)=>{const We=D?ge:x,X=()=>F(ie,D,Oe);dn(We,[ie,X]),Ul(()=>{fn(ie,D?l:r),Bt(ie,D?u:a),Fl(We)||$l(ie,s,w,X)})};return ke(e,{onBeforeEnter(D){dn(A,[D]),Bt(D,r),Bt(D,o)},onBeforeAppear(D){dn(pe,[D]),Bt(D,l),Bt(D,c)},onEnter:de(!1),onAppear:de(!0),onLeave(D,ie){D._isLeaving=!0;const Oe=()=>K(D,ie);Bt(D,h),_g(),Bt(D,d),Ul(()=>{D._isLeaving&&(fn(D,h),Bt(D,g),Fl(M)||$l(D,s,O,Oe))}),dn(M,[D,Oe])},onEnterCancelled(D){F(D,!1),dn(H,[D])},onAppearCancelled(D){F(D,!0),dn(N,[D])},onLeaveCancelled(D){K(D),dn(q,[D])}})}function dg(t){if(t==null)return null;if(Ce(t))return[$r(t.enter),$r(t.leave)];{const e=$r(t);return[e,e]}}function $r(t){return qf(t)}function Bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ul(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fg=0;function $l(t,e,n,s){const i=t._endId=++fg,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=pg(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=g=>{g.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function pg(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${$t}Delay`),r=s(`${$t}Duration`),o=Bl(i,r),a=s(`${Cs}Delay`),l=s(`${Cs}Duration`),c=Bl(a,l);let u=null,h=0,d=0;e===$t?o>0&&(u=$t,h=o,d=r.length):e===Cs?c>0&&(u=Cs,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?$t:Cs:null,d=u?u===$t?r.length:l.length:0);const g=u===$t&&/\b(transform|all)(,|$)/.test(s(`${$t}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:g}}function Bl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Wl(n)+Wl(t[s])))}function Wl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function _g(){return document.body.offsetHeight}const Eo={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Es(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Es(t,!0),s.enter(t)):s.leave(t,()=>{Es(t,!1)}):Es(t,e))},beforeUnmount(t,{value:e}){Es(t,e)}};function Es(t,e){t.style.display=e?t._vod:"none"}const gg=ke({patchProp:cg},Y_);let Hl;function mg(){return Hl||(Hl=R_(gg))}const yg=(...t)=>{const e=mg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=vg(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function vg(t){return Te(t)?document.querySelector(t):t}var bg=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let mh;const Cr=t=>mh=t,yh=Symbol();function wo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ms;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ms||(Ms={}));function Cg(){const t=Cu(!0),e=t.run(()=>Hs({}));let n=[],s=[];const i=dr({install(r){Cr(i),i._a=r,r.provide(yh,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!bg?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const vh=()=>{};function zl(t,e,n,s=vh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Eu()&&np(i),i}function $n(t,...e){t.slice().forEach(n=>{n(...e)})}const Eg=t=>t();function Io(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];wo(i)&&wo(s)&&t.hasOwnProperty(n)&&!Ie(s)&&!Qt(s)?t[n]=Io(i,s):t[n]=s}return t}const wg=Symbol();function Ig(t){return!wo(t)||!t.hasOwnProperty(wg)}const{assign:zt}=Object;function Tg(t){return!!(Ie(t)&&t.effect)}function Sg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Op(n.state.value[t]);return zt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=dr(je(()=>{Cr(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return l=bh(t,c,e,n,s,!0),l}function bh(t,e,n={},s,i,r){let o;const a=zt({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],g;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Hs({});let w;function O(N){let F;c=u=!1,typeof N=="function"?(N(s.state.value[t]),F={type:Ms.patchFunction,storeId:t,events:g}):(Io(s.state.value[t],N),F={type:Ms.patchObject,payload:N,storeId:t,events:g});const K=w=Symbol();ha().then(()=>{w===K&&(c=!0)}),u=!0,$n(h,F,s.state.value[t])}const A=r?function(){const{state:F}=n,K=F?F():{};this.$patch(de=>{zt(de,K)})}:vh;function x(){o.stop(),h=[],d=[],s._s.delete(t)}function H(N,F){return function(){Cr(s);const K=Array.from(arguments),de=[],D=[];function ie(X){de.push(X)}function Oe(X){D.push(X)}$n(d,{args:K,name:N,store:q,after:ie,onError:Oe});let We;try{We=F.apply(this&&this.$id===t?this:q,K)}catch(X){throw $n(D,X),X}return We instanceof Promise?We.then(X=>($n(de,X),X)).catch(X=>($n(D,X),Promise.reject(X))):($n(de,We),We)}}const M={_p:s,$id:t,$onAction:zl.bind(null,d),$patch:O,$reset:A,$subscribe(N,F={}){const K=zl(h,N,F.detached,()=>de()),de=o.run(()=>As(()=>s.state.value[t],D=>{(F.flush==="sync"?u:c)&&N({storeId:t,type:Ms.direct,events:g},D)},zt({},l,F)));return K},$dispose:x},q=ds(M);s._s.set(t,q);const pe=s._a&&s._a.runWithContext||Eg,ge=s._e.run(()=>(o=Cu(),pe(()=>o.run(e))));for(const N in ge){const F=ge[N];if(Ie(F)&&!Tg(F)||Qt(F))r||(m&&Ig(F)&&(Ie(F)?F.value=m[N]:Io(F,m[N])),s.state.value[t][N]=F);else if(typeof F=="function"){const K=H(N,F);ge[N]=K,a.actions[N]=F}}return zt(q,ge),zt(te(q),ge),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:N=>{O(F=>{zt(F,N)})}}),s._p.forEach(N=>{zt(q,o.run(()=>N({store:q,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(q.$state,m),c=!0,u=!0,q}function kg(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=E_();return a=a||(c?vt(yh,null):null),a&&Cr(a),a=mh,a._s.has(s)||(r?bh(s,e,i,a):Sg(s,i,a)),a._s.get(s)}return o.$id=s,o}function Rg(t){return typeof t=="object"&&t!==null}function Vl(t,e){return t=Rg(t)?t:Object.create(null),new Proxy(t,{get(n,s,i){return s==="key"?Reflect.get(n,s,i):Reflect.get(n,s,i)||Reflect.get(e,s,i)}})}function xg(t,e){return e.reduce((n,s)=>n==null?void 0:n[s],t)}function Ag(t,e,n){return e.slice(0,-1).reduce((s,i)=>/^(__proto__)$/.test(i)?{}:s[i]=s[i]||{},t)[e[e.length-1]]=n,t}function Ng(t,e){return e.reduce((n,s)=>{const i=s.split(".");return Ag(n,i,xg(t,i))},{})}function jl(t,{storage:e,serializer:n,key:s,debug:i}){try{const r=e==null?void 0:e.getItem(s);r&&t.$patch(n==null?void 0:n.deserialize(r))}catch(r){i&&console.error(r)}}function Kl(t,{storage:e,serializer:n,key:s,paths:i,debug:r}){try{const o=Array.isArray(i)?Ng(t,i):t;e.setItem(s,n.serialize(o))}catch(o){r&&console.error(o)}}function Pg(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:i,pinia:r}=e;if(!s)return;if(!(i.$id in r.state.value)){const a=r._s.get(i.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(s)?s.map(a=>Vl(a,t)):[Vl(s,t)]).map(({storage:a=localStorage,beforeRestore:l=null,afterRestore:c=null,serializer:u={serialize:JSON.stringify,deserialize:JSON.parse},key:h=i.$id,paths:d=null,debug:g=!1})=>{var m;return{storage:a,beforeRestore:l,afterRestore:c,serializer:u,key:((m=t.key)!=null?m:w=>w)(typeof h=="string"?h:h(i.$id)),paths:d,debug:g}});i.$persist=()=>{o.forEach(a=>{Kl(i.$state,a)})},i.$hydrate=({runHooks:a=!0}={})=>{o.forEach(l=>{const{beforeRestore:c,afterRestore:u}=l;a&&(c==null||c(e)),jl(i,l),a&&(u==null||u(e))})},o.forEach(a=>{const{beforeRestore:l,afterRestore:c}=a;l==null||l(e),jl(i,a),c==null||c(e),i.$subscribe((u,h)=>{Kl(h,a)},{detached:!0})})}}var Og=Pg();/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window<"u";function Mg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Br(t,e){const n={};for(const s in e){const i=e[s];n[s]=dt(i)?i.map(t):t(i)}return n}const Ds=()=>{},dt=Array.isArray,Dg=/\/$/,Lg=t=>t.replace(Dg,"");function Wr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Bg(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Fg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ug(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ts(e.matched[s],n.matched[i])&&Ch(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ch(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$g(t[n],e[n]))return!1;return!0}function $g(t,e){return dt(t)?Gl(t,e):dt(e)?Gl(e,t):t===e}function Gl(t,e){return dt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Bg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Qs;(function(t){t.pop="pop",t.push="push"})(Qs||(Qs={}));var Hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hi||(Hi={}));const Hr="";function Wg(t){if(!t)if(Wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lg(t)}const Hg=/^[^#]+#/;function zg(t,e){return t.replace(Hg,"#")+e}function Vg(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const jg=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kg(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Vg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ql(t,e){return(history.state?history.state.position-e:-1)+t}const To=new Map;function Gg(t,e){To.set(t,e)}function qg(t){const e=To.get(t);return To.delete(t),e}function Yg(t=""){let e=[],n=[Hr],s=0;t=Wg(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const h={direction:c,delta:u,type:Qs.pop};for(const d of e)d(a,l,h)}const o={location:Hr,state:{},base:t,createHref:zg.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Hr],s=0},go(a,l=!0){const c=this.location,u=a<0?Hi.back:Hi.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function Jg(t){return typeof t=="string"||t&&typeof t=="object"}function Eh(t){return typeof t=="string"||typeof t=="symbol"}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wh=Symbol("");var Yl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yl||(Yl={}));function ns(t,e){return we(new Error,{type:t,[wh]:!0},e)}function Tt(t,e){return t instanceof Error&&wh in t&&(e==null||!!(t.type&e))}const Jl="[^/]+?",Qg={sensitive:!1,strict:!1,start:!0,end:!0},Xg=/[.+*?^${}()[\]/\\]/g;function Zg(t,e){const n=we({},Qg,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Xg,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:w,optional:O,regexp:A}=d;r.push({name:m,repeatable:w,optional:O});const x=A||Jl;if(x!==Jl){g+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${x}): `+M.message)}}let H=w?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(H=O&&c.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),i+=H,g+=20,O&&(g+=-8),w&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:w,optional:O}=g,A=m in c?c[m]:"";if(dt(A)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const x=dt(A)?A.join("/"):A;if(!x)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function em(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=em(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ql(s))return 1;if(Ql(i))return-1}return i.length-s.length}function Ql(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nm={type:0,value:""},sm=/[a-zA-Z0-9_]/;function im(t){if(!t)return[[]];if(t==="/")return[[nm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:sm.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function rm(t,e,n){const s=Zg(im(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function om(t,e){const n=[],s=new Map;e=ec({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const g=!d,m=am(u);m.aliasOf=d&&d.record;const w=ec(e,u),O=[m];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of H)O.push(we({},m,{components:d?d.record.components:m.components,path:M,aliasOf:d?d.record:m}))}let A,x;for(const H of O){const{path:M}=H;if(h&&M[0]!=="/"){const q=h.record.path,pe=q[q.length-1]==="/"?"":"/";H.path=h.record.path+(M&&pe+M)}if(A=rm(H,h,w),d?d.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&u.name&&!Zl(A)&&o(u.name)),m.children){const q=m.children;for(let pe=0;pe<q.length;pe++)r(q[pe],A,d&&d.children[pe])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return x?()=>{o(x)}:Ds}function o(u){if(Eh(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tm(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ih(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zl(u)&&s.set(u.record.name,u)}function c(u,h){let d,g={},m,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ns(1,{location:u});w=d.record.name,g=we(Xl(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Xl(u.params,d.keys.map(x=>x.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(x=>x.re.test(m)),d&&(g=d.parse(m),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ns(1,{location:u,currentLocation:h});w=d.record.name,g=we({},h.params,u.params),m=d.stringify(g)}const O=[];let A=d;for(;A;)O.unshift(A.record),A=A.parent;return{name:w,path:m,params:g,matched:O,meta:cm(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Xl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function am(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Zl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cm(t){return t.reduce((e,n)=>we(e,n.meta),{})}function ec(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ih(t,e){return e.children.some(n=>n===t||Ih(t,n))}const Th=/#/g,um=/&/g,hm=/\//g,dm=/=/g,fm=/\?/g,Sh=/\+/g,pm=/%5B/g,_m=/%5D/g,kh=/%5E/g,gm=/%60/g,Rh=/%7B/g,mm=/%7C/g,xh=/%7D/g,ym=/%20/g;function va(t){return encodeURI(""+t).replace(mm,"|").replace(pm,"[").replace(_m,"]")}function vm(t){return va(t).replace(Rh,"{").replace(xh,"}").replace(kh,"^")}function So(t){return va(t).replace(Sh,"%2B").replace(ym,"+").replace(Th,"%23").replace(um,"%26").replace(gm,"`").replace(Rh,"{").replace(xh,"}").replace(kh,"^")}function bm(t){return So(t).replace(dm,"%3D")}function Cm(t){return va(t).replace(Th,"%23").replace(fm,"%3F")}function Em(t){return t==null?"":Cm(t).replace(hm,"%2F")}function zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Sh," "),o=r.indexOf("="),a=zi(o<0?r:r.slice(0,o)),l=o<0?null:zi(r.slice(o+1));if(a in e){let c=e[a];dt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function tc(t){let e="";for(let n in t){const s=t[n];if(n=bm(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(s)?s.map(r=>r&&So(r)):[s&&So(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Im(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Tm=Symbol(""),nc=Symbol(""),ba=Symbol(""),Ah=Symbol(""),ko=Symbol("");function ws(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ns(4,{from:n,to:e})):h instanceof Error?a(h):Jg(h)?a(ns(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function zr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Sm(a)){const c=(a.__vccOpts||a)[e];c&&i.push(jt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Mg(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&jt(d,n,s,r,o)()}))}}return i}function Sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sc(t){const e=vt(ba),n=vt(Ah),s=je(()=>e.resolve(at(t.to))),i=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ts.bind(null,u));if(d>-1)return d;const g=ic(l[c-2]);return c>1&&ic(u)===g&&h[h.length-1].path!==g?h.findIndex(ts.bind(null,l[c-2])):d}),r=je(()=>i.value>-1&&Am(n.params,s.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&Ch(n.params,s.value.params));function a(l={}){return xm(l)?e[at(t.replace)?"replace":"push"](at(t.to)).catch(Ds):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const km=Yu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sc,setup(t,{slots:e}){const n=ds(sc(t)),{options:s}=vt(ba),i=je(()=>({[rc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[rc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ya("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Rm=km;function xm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Am(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!dt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ic(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rc=(t,e,n)=>t??e??n,Nm=Yu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vt(ko),i=je(()=>t.route||s.value),r=vt(nc,0),o=je(()=>{let c=at(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=je(()=>i.value.matched[o.value]);xi(nc,je(()=>o.value+1)),xi(Tm,a),xi(ko,i);const l=Hs();return As(()=>[l.value,a.value,t.name],([c,u,h],[d,g,m])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!ts(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return oc(n.default,{Component:d,route:c});const g=h.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=ya(d,we({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return oc(n.default,{Component:O,route:c})||O}}});function oc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nh=Nm;function Pm(t){const e=om(t.routes,t),n=t.parseQuery||wm,s=t.stringifyQuery||tc,i=t.history,r=ws(),o=ws(),a=ws(),l=Ap(Wt);let c=Wt;Wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Br.bind(null,v=>""+v),h=Br.bind(null,Em),d=Br.bind(null,zi);function g(v,P){let S,U;return Eh(v)?(S=e.getRecordMatcher(v),U=P):U=v,e.addRoute(U,S)}function m(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function w(){return e.getRoutes().map(v=>v.record)}function O(v){return!!e.getRecordMatcher(v)}function A(v,P){if(P=we({},P||l.value),typeof v=="string"){const _=Wr(n,v,P.path),y=e.resolve({path:_.path},P),b=i.createHref(_.fullPath);return we(_,y,{params:d(y.params),hash:zi(_.hash),redirectedFrom:void 0,href:b})}let S;if("path"in v)S=we({},v,{path:Wr(n,v.path,P.path).path});else{const _=we({},v.params);for(const y in _)_[y]==null&&delete _[y];S=we({},v,{params:h(_)}),P.params=h(P.params)}const U=e.resolve(S,P),oe=v.hash||"";U.params=u(d(U.params));const f=Fg(s,we({},v,{hash:vm(oe),path:U.path})),p=i.createHref(f);return we({fullPath:f,hash:oe,query:s===tc?Im(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function x(v){return typeof v=="string"?Wr(n,v,l.value.path):we({},v)}function H(v,P){if(c!==v)return ns(8,{from:P,to:v})}function M(v){return ge(v)}function q(v){return M(we(x(v),{replace:!0}))}function pe(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let U=typeof S=="function"?S(v):S;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),we({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ge(v,P){const S=c=A(v),U=l.value,oe=v.state,f=v.force,p=v.replace===!0,_=pe(S);if(_)return ge(we(x(_),{state:typeof _=="object"?we({},oe,_.state):oe,force:f,replace:p}),P||S);const y=S;y.redirectedFrom=P;let b;return!f&&Ug(s,U,S)&&(b=ns(16,{to:y,from:U}),ft(U,U,!0,!1)),(b?Promise.resolve(b):K(y,U)).catch(C=>Tt(C)?Tt(C,2)?C:Ft(C):re(C,y,U)).then(C=>{if(C){if(Tt(C,2))return ge(we({replace:p},x(C.to),{state:typeof C.to=="object"?we({},oe,C.to.state):oe,force:f}),P||y)}else C=D(y,U,!0,p,oe);return de(y,U,C),C})}function N(v,P){const S=H(v,P);return S?Promise.reject(S):Promise.resolve()}function F(v){const P=Ln.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function K(v,P){let S;const[U,oe,f]=Om(v,P);S=zr(U.reverse(),"beforeRouteLeave",v,P);for(const _ of U)_.leaveGuards.forEach(y=>{S.push(jt(y,v,P))});const p=N.bind(null,v,P);return S.push(p),De(S).then(()=>{S=[];for(const _ of r.list())S.push(jt(_,v,P));return S.push(p),De(S)}).then(()=>{S=zr(oe,"beforeRouteUpdate",v,P);for(const _ of oe)_.updateGuards.forEach(y=>{S.push(jt(y,v,P))});return S.push(p),De(S)}).then(()=>{S=[];for(const _ of f)if(_.beforeEnter)if(dt(_.beforeEnter))for(const y of _.beforeEnter)S.push(jt(y,v,P));else S.push(jt(_.beforeEnter,v,P));return S.push(p),De(S)}).then(()=>(v.matched.forEach(_=>_.enterCallbacks={}),S=zr(f,"beforeRouteEnter",v,P),S.push(p),De(S))).then(()=>{S=[];for(const _ of o.list())S.push(jt(_,v,P));return S.push(p),De(S)}).catch(_=>Tt(_,8)?_:Promise.reject(_))}function de(v,P,S){a.list().forEach(U=>F(()=>U(v,P,S)))}function D(v,P,S,U,oe){const f=H(v,P);if(f)return f;const p=P===Wt,_=Wn?history.state:{};S&&(U||p?i.replace(v.fullPath,we({scroll:p&&_&&_.scroll},oe)):i.push(v.fullPath,oe)),l.value=v,ft(v,P,S,p),Ft()}let ie;function Oe(){ie||(ie=i.listen((v,P,S)=>{if(!yi.listening)return;const U=A(v),oe=pe(U);if(oe){ge(we(oe,{replace:!0}),U).catch(Ds);return}c=U;const f=l.value;Wn&&Gg(ql(f.fullPath,S.delta),jg()),K(U,f).catch(p=>Tt(p,12)?p:Tt(p,2)?(ge(p.to,U).then(_=>{Tt(_,20)&&!S.delta&&S.type===Qs.pop&&i.go(-1,!1)}).catch(Ds),Promise.reject()):(S.delta&&i.go(-S.delta,!1),re(p,U,f))).then(p=>{p=p||D(U,f,!1),p&&(S.delta&&!Tt(p,8)?i.go(-S.delta,!1):S.type===Qs.pop&&Tt(p,20)&&i.go(-1,!1)),de(U,f,p)}).catch(Ds)}))}let We=ws(),X=ws(),fe;function re(v,P,S){Ft(v);const U=X.list();return U.length?U.forEach(oe=>oe(v,P,S)):console.error(v),Promise.reject(v)}function It(){return fe&&l.value!==Wt?Promise.resolve():new Promise((v,P)=>{We.add([v,P])})}function Ft(v){return fe||(fe=!v,Oe(),We.list().forEach(([P,S])=>v?S(v):P()),We.reset()),v}function ft(v,P,S,U){const{scrollBehavior:oe}=t;if(!Wn||!oe)return Promise.resolve();const f=!S&&qg(ql(v.fullPath,0))||(U||!S)&&history.state&&history.state.scroll||null;return ha().then(()=>oe(v,P,f)).then(p=>p&&Kg(p)).catch(p=>re(p,v,P))}const ze=v=>i.go(v);let Dn;const Ln=new Set,yi={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,hasRoute:O,getRoutes:w,resolve:A,options:t,push:M,replace:q,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:It,install(v){const P=this;v.component("RouterLink",Rm),v.component("RouterView",Nh),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>at(l)}),Wn&&!Dn&&l.value===Wt&&(Dn=!0,M(i.location).catch(oe=>{}));const S={};for(const oe in Wt)Object.defineProperty(S,oe,{get:()=>l.value[oe],enumerable:!0});v.provide(ba,P),v.provide(Ah,Ou(S)),v.provide(ko,l);const U=v.unmount;Ln.add(v),v.unmount=function(){Ln.delete(v),Ln.size<1&&(c=Wt,ie&&ie(),ie=null,l.value=Wt,Dn=!1,fe=!1),U()}}};function De(v){return v.reduce((P,S)=>P.then(()=>F(S)),Promise.resolve())}return yi}function Om(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ts(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ts(c,l))||i.push(l))}return[n,s,i]}const Mm={__name:"App",setup(t){return(e,n)=>(V(),Pt(at(Nh),null,{default:rn(({Component:s})=>[se(Js,{name:"fade",mode:"out-in"},{default:rn(()=>[(V(),Pt(h_(s)))]),_:2},1024)]),_:1}))}};const qe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Dm={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},Lm=["src"];function Fm(t,e,n,s,i,r){return V(),Q("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[ue("span",null,Ze(n.name),1),ue("img",{src:n.image},null,8,Lm)])}const Vr=qe(Dm,[["render",Fm],["__scopeId","data-v-7bbaab8a"]]),Um="/tileswap-naenae/images/freeplay.png",$m="/tileswap-naenae/images/puzzles.png",Bm="/tileswap-naenae/images/challenges.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw fs(e)},fs=function(t){return new Error("Firebase Database ("+Ph.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Hm;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mh=function(t){const e=Oh(t);return Ca.encodeByteArray(e,!0)},Dh=function(t){return Mh(t).replace(/\./g,"")},Vi=function(t){try{return Ca.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){return Lh(void 0,t)}function Lh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vm(n)||(t[n]=Lh(t[n],e[n]));return t}function Vm(t){return t!=="__proto__"}/**
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
 */function jm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Km=()=>jm().__FIREBASE_DEFAULTS__,Gm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return Km()||Gm()||qm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ym=t=>{var e,n;return(n=(e=Ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fh=()=>{var t;return(t=Ea())===null||t===void 0?void 0:t.config},Uh=t=>{var e;return(e=Ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Jm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $h(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qm(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bh(){return Ph.NODE_ADMIN===!0}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Zm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=e1,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?t1(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,s)}}function t1(t,e){return t.replace(n1,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const n1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xs(Vi(r[0])||""),n=Xs(Vi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},s1=function(t){const e=Wh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},i1=function(t){const e=Wh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ro(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ji(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ac(r)&&ac(o)){if(!Ki(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ac(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function o1(t,e){const n=new a1(t,e);return n.subscribe.bind(n)}class a1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");l1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jr),i.error===void 0&&(i.error=jr),i.complete===void 0&&(i.complete=jr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jr(){}function c1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Er=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function cn(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class h1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:d1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d1(t){return t===pn?void 0:t}function f1(t){return t.instantiationMode==="EAGER"}/**
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
 */class p1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new h1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const _1={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},g1=ce.INFO,m1={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},y1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=m1[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=y1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const v1=(t,e)=>e.some(n=>t instanceof n);let lc,cc;function b1(){return lc||(lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C1(){return cc||(cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,xo=new WeakMap,zh=new WeakMap,Kr=new WeakMap,Sa=new WeakMap;function E1(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hh.set(n,t)}).catch(()=>{}),Sa.set(e,t),e}function w1(t){if(xo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xo.set(t,e)}let Ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I1(t){Ao=t(Ao)}function T1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gr(this),e,...n);return zh.set(s,e.sort?e.sort():[e]),Zt(s)}:C1().includes(t)?function(...e){return t.apply(Gr(this),e),Zt(Hh.get(this))}:function(...e){return Zt(t.apply(Gr(this),e))}}function S1(t){return typeof t=="function"?T1(t):(t instanceof IDBTransaction&&w1(t),v1(t,b1())?new Proxy(t,Ao):t)}function Zt(t){if(t instanceof IDBRequest)return E1(t);if(Kr.has(t))return Kr.get(t);const e=S1(t);return e!==t&&(Kr.set(t,e),Sa.set(e,t)),e}const Gr=t=>Sa.get(t);function k1(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const R1=["get","getKey","getAll","getAllKeys","count"],x1=["put","add","delete","clear"],qr=new Map;function uc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=x1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||R1.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qr.set(e,r),r}I1(t=>({...t,get:(e,n,s)=>uc(e,n)||t.get(e,n,s),has:(e,n)=>!!uc(e,n)||t.has(e,n)}));/**
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
 */class A1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function N1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",hc="0.9.15";/**
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
 */const kn=new Ta("@firebase/app"),P1="@firebase/app-compat",O1="@firebase/analytics-compat",M1="@firebase/analytics",D1="@firebase/app-check-compat",L1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",$1="@firebase/database",B1="@firebase/database-compat",W1="@firebase/functions",H1="@firebase/functions-compat",z1="@firebase/installations",V1="@firebase/installations-compat",j1="@firebase/messaging",K1="@firebase/messaging-compat",G1="@firebase/performance",q1="@firebase/performance-compat",Y1="@firebase/remote-config",J1="@firebase/remote-config-compat",Q1="@firebase/storage",X1="@firebase/storage-compat",Z1="@firebase/firestore",e0="@firebase/firestore-compat",t0="firebase",n0="10.1.0";/**
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
 */const Po="[DEFAULT]",s0={[No]:"fire-core",[P1]:"fire-core-compat",[M1]:"fire-analytics",[O1]:"fire-analytics-compat",[L1]:"fire-app-check",[D1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[$1]:"fire-rtdb",[B1]:"fire-rtdb-compat",[W1]:"fire-fn",[H1]:"fire-fn-compat",[z1]:"fire-iid",[V1]:"fire-iid-compat",[j1]:"fire-fcm",[K1]:"fire-fcm-compat",[G1]:"fire-perf",[q1]:"fire-perf-compat",[Y1]:"fire-rc",[J1]:"fire-rc-compat",[Q1]:"fire-gcs",[X1]:"fire-gcs-compat",[Z1]:"fire-fst",[e0]:"fire-fst-compat","fire-js":"fire-js",[t0]:"fire-js-all"};/**
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
 */const Gi=new Map,Oo=new Map;function i0(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Oo.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,t);for(const n of Gi.values())i0(n,t);return!0}function Vh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const r0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new li("app","Firebase",r0);/**
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
 */class o0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=n0;function jh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Po,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(n||(n=Fh()),!n)throw en.create("no-options");const r=Gi.get(i);if(r){if(Ki(n,r.options)&&Ki(s,r.config))return r;throw en.create("duplicate-app",{appName:i})}const o=new p1(i);for(const l of Oo.values())o.addComponent(l);const a=new o0(n,s,o);return Gi.set(i,a),a}function a0(t=Po){const e=Gi.get(t);if(!e&&t===Po&&Fh())return jh();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=s0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}is(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const l0="firebase-heartbeat-database",c0=1,Zs="firebase-heartbeat-store";let Yr=null;function Kh(){return Yr||(Yr=k1(l0,c0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function u0(t){try{return await(await Kh()).transaction(Zs).objectStore(Zs).get(Gh(t))}catch(e){if(e instanceof ln)kn.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function dc(t,e){try{const s=(await Kh()).transaction(Zs,"readwrite");await s.objectStore(Zs).put(e,Gh(t)),await s.done}catch(n){if(n instanceof ln)kn.warn(n.message);else{const s=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function Gh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const h0=1024,d0=30*24*60*60*1e3;class f0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=d0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fc(),{heartbeatsToSend:n,unsentEntries:s}=p0(this._heartbeatsCache.heartbeats),i=Dh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fc(){return new Date().toISOString().substring(0,10)}function p0(t,e=h0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),pc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Zm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await u0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pc(t){return Dh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function g0(t){is(new Sn("platform-logger",e=>new A1(e),"PRIVATE")),is(new Sn("heartbeat",e=>new f0(e),"PRIVATE")),tn(No,hc,t),tn(No,hc,"esm2017"),tn("fire-js","")}g0("");const _c="@firebase/database",gc="1.0.1";/**
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
 */let qh="";function m0(t){qh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new y0(e)}}catch{}return new v0},bn=Yh("localStorage"),Mo=Yh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Ta("@firebase/database"),b0=function(){let t=1;return function(){return t++}}(),Jh=function(t){const e=u1(t),n=new r1;n.update(e);const s=n.digest();return Ca.encodeByteArray(s)},ci=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ci.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let wn=null,mc=!0;const C0=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=ce.VERBOSE,wn=qn.log.bind(qn),e&&Mo.set("logging_enabled",!0)):typeof t=="function"?wn=t:(wn=null,Mo.remove("logging_enabled"))},Le=function(...t){if(mc===!0&&(mc=!1,wn===null&&Mo.get("logging_enabled")===!0&&C0(!0)),wn){const e=ci.apply(null,t);wn(e)}},ui=function(t){return function(...e){Le(t,...e)}},Do=function(...t){const e="FIREBASE INTERNAL ERROR: "+ci(...t);qn.error(e)},Rn=function(...t){const e=`FIREBASE FATAL ERROR: ${ci(...t)}`;throw qn.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+ci(...t);qn.warn(e)},E0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},w0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rs="[MIN_NAME]",xn="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===rs||e===xn)return-1;if(e===rs||t===xn)return 1;{const n=yc(t),s=yc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},I0=function(t,e){return t===e?0:t<e?-1:1},Is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},ka=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=ka(t[e[s]]);return n+="}",n},Xh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zh=function(t){k(!Qh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},T0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},k0=new RegExp("^-?(0*)\\d{1,10}$"),R0=-2147483648,x0=2147483647,yc=function(t){if(k0.test(t)){const e=Number(t);if(e>=R0&&e<=x0)return e}return null},hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},A0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ls=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class N0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class Lo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="5",ed="v",td="s",nd="r",sd="f",id=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rd="ls",od="p",Fo="ac",ad="websocket",ld="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function M0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cd(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===ad)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ld)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M0(t)&&(n.ns=t.namespace);const i=[];return st(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={},Qr={};function xa(t){const e=t.toString();return Jr[e]||(Jr[e]=new D0),Jr[e]}function L0(t,e){const n=t.toString();return Qr[n]||(Qr[n]=e()),Qr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="start",U0="close",$0="pLPCommand",B0="pRTLPCB",ud="id",hd="pw",dd="ser",W0="cb",H0="seg",z0="ts",V0="d",j0="dframe",fd=1870,pd=30,K0=fd-pd,G0=25e3,q0=3e4;class Hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ui(e),this.stats_=xa(n),this.urlFn=l=>(this.appCheckToken&&(l[Fo]=this.appCheckToken),cd(n,ld,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new F0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q0)),w0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Aa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vc)this.id=a,this.password=l;else if(o===U0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vc]="t",s[dd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[W0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ed]=Ra,this.transportSessionId&&(s[td]=this.transportSessionId),this.lastSessionId&&(s[rd]=this.lastSessionId),this.applicationId&&(s[od]=this.applicationId),this.appCheckToken&&(s[Fo]=this.appCheckToken),typeof location<"u"&&location.hostname&&id.test(location.hostname)&&(s[nd]=sd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hn.forceAllow_=!0}static forceDisallow(){Hn.forceDisallow_=!0}static isAvailable(){return Hn.forceAllow_?!0:!Hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!T0()&&!S0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Mh(n),i=Xh(s,K0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[j0]="t",s[ud]=e,s[hd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Aa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=b0(),window[$0+this.uniqueCallbackIdentifier]=e,window[B0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Aa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ud]=this.myID,e[hd]=this.myPW,e[dd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pd+s.length<=fd;){const o=this.pendingSegs.shift();s=s+"&"+H0+i+"="+o.seg+"&"+z0+i+"="+o.ts+"&"+V0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(G0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=16384,J0=45e3;let qi=null;typeof MozWebSocket<"u"?qi=MozWebSocket:typeof WebSocket<"u"&&(qi=WebSocket);class ot{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ui(this.connId),this.stats_=xa(n),this.connURL=ot.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ed]=Ra,typeof location<"u"&&location.hostname&&id.test(location.hostname)&&(o[nd]=sd),n&&(o[td]=n),s&&(o[rd]=s),i&&(o[Fo]=i),r&&(o[od]=r),cd(e,ad,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bn.set("previous_websocket_failure",!0);try{let s;Bh(),this.mySock=new qi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&qi!==null&&!ot.forceDisallow_}static previouslyFailed(){return bn.isInMemoryStorage||bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xh(n,Y0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(J0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hn,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let s=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ot];else{const i=this.transports_=[];for(const r of ei.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ei.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=6e4,X0=5e3,Z0=10*1024,ey=100*1024,Xr="t",bc="d",ty="s",Cc="r",ny="e",Ec="o",wc="a",Ic="n",Tc="p",sy="h";class iy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ui("c:"+this.id+":"),this.transportManager_=new ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ey?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xr in e){const n=e[Xr];n===wc?this.upgradeIfSecondaryHealthy_():n===Cc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ec&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Is("t",e),s=Is("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ic,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Is("t",e),s=Is("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Is(Xr,e);if(bc in e){const s=e[bc];if(n===sy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ic){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ty?this.onConnectionShutdown_(s):n===Cc?this.onReset_(s):n===ny?Do("Server Error: "+s):n===Ec?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Do("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ra!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends gd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ia()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yi}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=32,kc=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new Ee("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function an(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function md(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ry(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Ne(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ee(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return tt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bd(t,e){if(an(t)!==an(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ct(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(an(t)>an(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class oy{constructor(e,n){this.errorPrefix_=n,this.parts_=yd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Er(this.parts_[s]);Cd(this)}}function ay(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Er(e),Cd(t)}function ly(t){const e=t.parts_.pop();t.byteLength_-=Er(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cd(t){if(t.byteLength_>kc)throw new Error(t.errorPrefix_+"has a key path longer than "+kc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sc+") or object contains a cycle "+_n(t))}function _n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends gd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Na}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=1e3,cy=60*5*1e3,Rc=30*1e3,uy=1.3,hy=3e4,dy="server_kill",xc=3;class At extends _d{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=At.nextPersistentConnectionId_++,this.log_=ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ts,this.maxReconnectDelay_=cy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Na.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;At.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=ss(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||i1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=s1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Do("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hy&&(this.reconnectDelay_=Ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new iy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Qe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(dy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Qe(h),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ro(this.interruptReasons_)&&(this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ka(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xc&&(this.reconnectDelay_=Rc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qh.replace(/\./g,"-")]=1,Ia()?e["framework.cordova"]=1:$h()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yi.getInstance().currentlyOnline();return Ro(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(rs,e),i=new ee(rs,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class Ed extends wr{static get __EMPTY_NODE(){return Ti}static set __EMPTY_NODE(e){Ti=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(xn,Ti)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Ti)}toString(){return".key"}}const Yn=new Ed;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ae.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new Ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class fy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Si(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e){return gs(t.name,e.name)}function Pa(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;function _y(t){Uo=t}const wd=function(t){return typeof t=="number"?"number:"+Zh(t):"string:"+t},Id=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else k(t===Uo||t.isEmpty(),"priority of unexpected type.");k(t===Uo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Id(this.priorityNode_)}static set __childrenNodeConstructor(e){Ac=e}static get __childrenNodeConstructor(){return Ac}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Z(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||an(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zh(this.value_):e+=this.value_,this.lazyHash_=Jh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),r=xe.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td,Sd;function gy(t){Td=t}function my(t){Sd=t}class yy extends wr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(xn,new xe("[PRIORITY-POST]",Sd))}makePost(e,n){const s=Td(e);return new ee(n,new xe("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new yy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=Math.log(2);class by{constructor(e){const n=r=>parseInt(Math.log(r)/vy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ji=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ae(d,h.node,Ae.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=i(l,g),w=i(g+1,c);return h=t[g],d=n?n(h):h,new Ae(d,h.node,Ae.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const O=h-m,A=h;h-=m;const x=i(O+1,A),H=t[O],M=n?n(H):H;g(new Ae(M,H.node,w,null,x))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),O=Math.pow(2,l.count-(m+1));w?d(O,Ae.BLACK):(d(O,Ae.BLACK),d(O,Ae.RED))}return u},o=new by(t.length),a=r(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;const Bn={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Bn&&$e,"ChildrenNode.ts has not been loaded"),Zr=Zr||new kt({".priority":Bn},{".priority":$e}),Zr}get(e){const n=ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ji(s,e.getCompare()):a=Bn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new kt(u,c)}addToIndexes(e,n){const s=ji(this.indexes_,(i,r)=>{const o=ss(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Bn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ji(a,o.getCompare())}else return Bn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new kt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ji(this.indexes_,i=>{if(i===Bn)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new kt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class ae{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Id(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ss||(Ss=new ae(new Ke(Pa),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ss:this.priorityNode_;return new ae(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{k(Z(e)!==".priority"||an(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),s++,r&&ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wd(this.getPriority().val())+":"),this.forEachChild($e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Jh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===di?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator($e),i=n.getIterator($e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cy extends ae{constructor(){super(new Ke(Pa),ae.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const di=new Cy;Object.defineProperties(ee,{MIN:{value:new ee(rs,ae.EMPTY_NODE)},MAX:{value:new ee(xn,di)}});Ed.__EMPTY_NODE=ae.EMPTY_NODE;xe.__childrenNodeConstructor=ae;_y(di);my(di);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=!0;function Fe(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Fe(e))}if(!(t instanceof Array)&&Ey){const n=[];let s=!1;if(st(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const r=Ji(n,py,o=>o.name,Pa);if(s){const o=Ji(n,$e.getCompare());return new ae(r,Fe(e),new kt({".priority":o},{".priority":$e}))}else return new ae(r,Fe(e),kt.Default)}else{let n=ae.EMPTY_NODE;return st(t,(s,i)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}gy(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends wr{constructor(e){super(),this.indexPath_=e,k(!J(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,di);return new ee(xn,e)}toString(){return yd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends wr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Fe(e);return new ee(n,s)}toString(){return".value"}}const Ty=new Iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){return{type:"value",snapshotNode:t}}function ky(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ry(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Nc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rs}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Oa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===Ty?n="$value":t.index_===Yn?n="$key":(k(t.index_ instanceof wy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Oc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends _d{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ui("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qi.getListenId_(e,s),a={};this.listens_[o]=a;const l=Pc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ss(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Qi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pc(e._queryParams),s=e._path.toString(),i=new wa;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ps(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xs(a.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){return{value:null,children:new Map}}function kd(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,Xi());const i=t.children.get(s);e=ve(e),kd(i,e,n)}}function $o(t,e,n){t.value!==null?n(e,t.value):Ny(t,(s,i)=>{const r=new Ee(e.toString()+"/"+s);$o(i,r,n)})}function Ny(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=10*1e3,Oy=30*1e3,My=5*60*1e3;class Dy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Py(e);const s=Mc+(Oy-Mc)*Math.random();Ls(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;st(e,(i,r)=>{r>0&&Lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*My))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ad(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=yt.ACK_USER_WRITE,this.source=Rd()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Zi(he(),n,this.revert)}}else return k(Z(this.path)===e,"operationForChild called for unrelated child."),new Zi(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=yt.OVERWRITE}operationForChild(e){return J(this.path)?new An(this.source,he(),this.snap.getImmediateChild(e)):new An(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=yt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new An(this.source,he(),n.value):new ti(this.source,he(),n)}else return k(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ly(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xy(o.childName,o.snapshotNode))}),ks(t,i,"child_removed",e,s,n),ks(t,i,"child_added",e,s,n),ks(t,i,"child_moved",r,s,n),ks(t,i,"child_changed",e,s,n),ks(t,i,"value",e,s,n),i}function ks(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Uy(t,a,l)),o.forEach(a=>{const l=Fy(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Fy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Uy(t,e,n){if(e.childName==null||n.childName==null)throw fs("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){return{eventCache:t,serverCache:e}}function Fs(t,e,n,s){return Nd(new Ma(e,n,s),t.serverCache)}function Pd(t,e,n,s){return Nd(t.eventCache,new Ma(e,n,s))}function Bo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;const $y=()=>(eo||(eo=new Ke(I0)),eo);class me{constructor(e,n=$y()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return st(e,(s,i)=>{n=n.set(new Ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(J(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:Ne(new Ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const s=Z(e),r=(this.children.get(s)||new me(null)).set(ve(e),n),o=this.children.insert(s,r);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new me(null):new me(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(J(e))return n;{const s=Z(e),r=(this.children.get(s)||new me(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new me(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ne(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(J(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),Ne(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),Ne(n,i),s):new me(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new me(null))}}function Us(t,e,n){if(J(e))return new ht(new me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tt(i,e);return r=r.updateChild(o,n),new ht(t.writeTree_.set(i,r))}else{const i=new me(n),r=t.writeTree_.setTree(e,i);return new ht(r)}}}function Dc(t,e,n){let s=t;return st(n,(i,r)=>{s=Us(s,Ne(e,i),r)}),s}function Lc(t,e){if(J(e))return ht.empty();{const n=t.writeTree_.setTree(e,new me(null));return new ht(n)}}function Wo(t,e){return On(t,e)!=null}function On(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function Fc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function nn(t,e){if(J(e))return t;{const n=On(t,e);return n!=null?new ht(new me(n)):new ht(t.writeTree_.subtree(e))}}function Ho(t){return t.writeTree_.isEmpty()}function os(t,e){return Od(he(),t.writeTree_,e)}function Od(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Od(Ne(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ne(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){return $d(e,t)}function By(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Us(t.visibleWrites,e,n)),t.lastWriteId=s}function Wy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zy(a,s.path)?i=!1:ct(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Vy(t),!0;if(s.snap)t.visibleWrites=Lc(t.visibleWrites,s.path);else{const a=s.children;st(a,l=>{t.visibleWrites=Lc(t.visibleWrites,Ne(s.path,l))})}return!0}else return!1}function zy(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(Ne(t.path,n),e))return!0;return!1}function Vy(t){t.visibleWrites=Dd(t.allWrites,jy,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jy(t){return t.visible}function Dd(t,e,n){let s=ht.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ct(n,o)?(a=tt(n,o),s=Us(s,a,r.snap)):ct(o,n)&&(a=tt(o,n),s=Us(s,he(),r.snap.getChild(a)));else if(r.children){if(ct(n,o))a=tt(n,o),s=Dc(s,a,r.children);else if(ct(o,n))if(a=tt(o,n),J(a))s=Dc(s,he(),r.children);else{const l=ss(r.children,Z(a));if(l){const c=l.getChild(ve(a));s=Us(s,he(),c)}}}else throw fs("WriteRecord should have .snap or .children")}}return s}function Ld(t,e,n,s,i){if(!s&&!i){const r=On(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(Ho(o))return n;if(n==null&&!Wo(o,he()))return null;{const a=n||ae.EMPTY_NODE;return os(o,a)}}}else{const r=nn(t.visibleWrites,e);if(!i&&Ho(r))return n;if(!i&&n==null&&!Wo(r,he()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=Dd(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return os(a,l)}}}function Ky(t,e,n){let s=ae.EMPTY_NODE;const i=On(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=os(nn(r,new Ee(o)),a);s=s.updateImmediateChild(o,l)}),Fc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nn(t.visibleWrites,e);return Fc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gy(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ne(e,n);if(Wo(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return Ho(o)?i.getChild(n):os(o,i.getChild(n))}}function qy(t,e,n,s){const i=Ne(e,n),r=On(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=nn(t.visibleWrites,i);return os(o,s.getNode().getImmediateChild(n))}else return null}function Yy(t,e){return On(t.visibleWrites,e)}function Jy(t,e,n,s,i,r,o){let a;const l=nn(t.visibleWrites,e),c=On(l,he());if(c!=null)a=c;else if(n!=null)a=os(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Qy(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function zo(t,e,n,s){return Ld(t.writeTree,t.treePath,e,n,s)}function Fd(t,e){return Ky(t.writeTree,t.treePath,e)}function Uc(t,e,n,s){return Gy(t.writeTree,t.treePath,e,n,s)}function er(t,e){return Yy(t.writeTree,Ne(t.treePath,e))}function Xy(t,e,n,s,i,r){return Jy(t.writeTree,t.treePath,e,n,s,i,r)}function Da(t,e,n){return qy(t.writeTree,t.treePath,e,n)}function Ud(t,e){return $d(Ne(t.treePath,e),t.writeTree)}function $d(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Nc(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ry(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ky(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Nc(s,e.snapshotNode,i.oldSnap));else throw fs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bd=new e2;class La{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ma(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Da(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nn(this.viewCache_),r=Xy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function t2(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n2(t,e,n,s,i){const r=new Zy;let o,a;if(n.type===yt.OVERWRITE){const c=n;c.source.fromUser?o=Vo(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=tr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===yt.MERGE){const c=n;c.source.fromUser?o=i2(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=jo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===yt.ACK_USER_WRITE){const c=n;c.revert?o=a2(t,e,c.path,s,i,r):o=r2(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===yt.LISTEN_COMPLETE)o=o2(t,e,n.path,s,r);else throw fs("Unknown operation type: "+n.type);const l=r.getChanges();return s2(e,o,l),{viewCache:o,changes:l}}function s2(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Bo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Sy(Bo(e)))}}function Wd(t,e,n,s,i,r){const o=e.eventCache;if(er(s,n)!=null)return e;{let a,l;if(J(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nn(e),u=c instanceof ae?c:ae.EMPTY_NODE,h=Fd(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zo(s,Nn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){k(an(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Uc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Uc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Da(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Fs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function tr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Z(n);if(!l.isCompleteForPath(n)&&an(n)>1)return e;const m=ve(n),O=l.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),g,O,m,Bd,null)}const h=Pd(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new La(i,h,r);return Wd(t,h,n,i,d,a)}function Vo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new La(i,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Fs(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Fs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ve(n),g=a.getNode().getImmediateChild(h);let m;if(J(d))m=s;else{const w=u.getCompleteChild(h);w!=null?md(d)===".priority"&&w.getChild(vd(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=ae.EMPTY_NODE}if(g.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Fs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $c(t,e){return t.eventCache.isCompleteForChild(e)}function i2(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ne(n,l);$c(e,Z(u))&&(a=Vo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ne(n,l);$c(e,Z(u))||(a=Vo(t,a,u,c,i,r,o))}),a}function Bc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function jo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=Bc(t,g,d);l=tr(t,l,new Ee(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),w=Bc(t,m,d);l=tr(t,l,new Ee(h),w,i,r,o,a)}}),l}function r2(t,e,n,s,i,r,o){if(er(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(Yn,(u,h)=>{c=c.set(new Ee(u),h)}),jo(t,e,n,c,i,r,a,o)}else return e}else{let c=new me(null);return s.foreach((u,h)=>{const d=Ne(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),jo(t,e,n,c,i,r,a,o)}}function o2(t,e,n,s,i){const r=e.serverCache,o=Pd(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return Wd(t,o,n,s,Bd,i)}function a2(t,e,n,s,i,r){let o;if(er(s,n)!=null)return e;{const a=new La(s,e,i),l=e.eventCache.getNode();let c;if(J(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zo(s,Nn(e));else{const h=e.serverCache.getNode();k(h instanceof ae,"serverChildren would be complete if leaf node"),u=Fd(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=Da(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ae.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zo(s,Nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||er(s,he())!=null,Fs(e,c,o,t.filter.filtersNodes())}}function l2(t,e){const n=Nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Wc(t,e,n,s){e.type===yt.MERGE&&e.source.queryId!==null&&(k(Nn(t.viewCache_),"We should always have a full cache before handling merges"),k(Bo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=n2(t.processor_,i,e,n,s);return t2(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,c2(t,r.changes,r.viewCache.eventCache.getNode(),null)}function c2(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ly(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;function u2(t){k(!Hc,"__referenceConstructor has already been defined"),Hc=t}function Fa(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),Wc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Wc(o,e,n,s));return r}}function Ua(t,e){let n=null;for(const s of t.views.values())n=n||l2(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;function h2(t){k(!zc,"__referenceConstructor has already been defined"),zc=t}class Vc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=Qy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d2(t,e,n,s,i){return By(t.pendingWriteTree_,e,n,s,i),i?Tr(t,new An(Rd(),e,n)):[]}function zn(t,e,n=!1){const s=Wy(t.pendingWriteTree_,e);if(Hy(t.pendingWriteTree_,e)){let r=new me(null);return s.snap!=null?r=r.set(he(),!0):st(s.children,o=>{r=r.set(new Ee(o),!0)}),Tr(t,new Zi(s.path,r,n))}else return[]}function Ir(t,e,n){return Tr(t,new An(xd(),e,n))}function f2(t,e,n){const s=me.fromObject(n);return Tr(t,new ti(xd(),e,s))}function p2(t,e,n,s){const i=jd(t,s);if(i!=null){const r=Kd(i),o=r.path,a=r.queryId,l=tt(o,e),c=new An(Ad(a),l,n);return Gd(t,o,c)}else return[]}function _2(t,e,n,s){const i=jd(t,s);if(i){const r=Kd(i),o=r.path,a=r.queryId,l=tt(o,e),c=me.fromObject(n),u=new ti(Ad(a),l,c);return Gd(t,o,u)}else return[]}function Hd(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),c=Ua(a,l);if(c)return c});return Ld(i,e,r,n,!0)}function Tr(t,e){return zd(e,t.syncPointTree_,null,Md(t.pendingWriteTree_,he()))}function zd(t,e,n,s){if(J(t.path))return Vd(t,e,n,s);{const i=e.get(he());n==null&&i!=null&&(n=Ua(i,he()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ud(s,o);r=r.concat(zd(a,l,c,u))}return i&&(r=r.concat(Fa(i,t,s,n))),r}}function Vd(t,e,n,s){const i=e.get(he());n==null&&i!=null&&(n=Ua(i,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ud(s,o),u=t.operationForChild(o);u&&(r=r.concat(Vd(u,a,l,c)))}),i&&(r=r.concat(Fa(i,t,s,n))),r}function jd(t,e){return t.tagToQueryMap.get(e)}function Kd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function Gd(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=Md(t.pendingWriteTree_,e);return Fa(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $a(n)}node(){return this.node_}}class Ba{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Ba(this.syncTree_,n)}node(){return Hd(this.syncTree_,this.path_)}}const g2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jc=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return m2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return y2(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},m2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},y2=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},v2=function(t,e,n,s){return Wa(e,new Ba(n,t),s)},b2=function(t,e,n){return Wa(t,new $a(e),n)};function Wa(t,e,n){const s=t.getPriority().val(),i=jc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new xe(i))),o.forEachChild($e,(a,l)=>{const c=Wa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function za(t,e){let n=e instanceof Ee?e:new Ee(e),s=t,i=Z(n);for(;i!==null;){const r=ss(s.node.children,i)||{children:{},childCount:0};s=new Ha(i,s,r),n=ve(n),i=Z(n)}return s}function ms(t){return t.node.value}function qd(t,e){t.node.value=e,Ko(t)}function Yd(t){return t.node.childCount>0}function C2(t){return ms(t)===void 0&&!Yd(t)}function Sr(t,e){st(t.node.children,(n,s)=>{e(new Ha(n,t,s))})}function Jd(t,e,n,s){n&&!s&&e(t),Sr(t,i=>{Jd(i,e,!0,s)}),n&&s&&e(t)}function E2(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fi(t){return new Ee(t.parent===null?t.name:fi(t.parent)+"/"+t.name)}function Ko(t){t.parent!==null&&w2(t.parent,t.name,t)}function w2(t,e,n){const s=C2(n),i=Lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ko(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ko(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/[\[\].#$\/\u0000-\u001F\u007F]/,T2=/[\[\].#$\u0000-\u001F\u007F]/,to=10*1024*1024,Qd=function(t){return typeof t=="string"&&t.length!==0&&!I2.test(t)},S2=function(t){return typeof t=="string"&&t.length!==0&&!T2.test(t)},k2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),S2(t)},Xd=function(t,e,n){const s=n instanceof Ee?new oy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_n(s));if(typeof e=="function")throw new Error(t+"contains a function "+_n(s)+" with contents = "+e.toString());if(Qh(e))throw new Error(t+"contains "+e.toString()+" "+_n(s));if(typeof e=="string"&&e.length>to/3&&Er(e)>to)throw new Error(t+"contains a string greater than "+to+" utf8 bytes "+_n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(st(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Qd(o)))throw new Error(t+" contains an invalid key ("+o+") "+_n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ay(s,o),Xd(t,a,s),ly(s)}),i&&r)throw new Error(t+' contains ".value" child '+_n(s)+" in addition to actual children.")}},R2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!k2(n))throw new Error(c1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A2(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!bd(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Mn(t,e,n){A2(t,n),N2(t,s=>ct(s,e)||ct(e,s))}function N2(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(P2(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function P2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();wn&&Le("event: "+n.toString()),hi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="repo_interrupt",M2=25;class D2{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new x2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xi(),this.transactionQueueTree_=new Ha,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L2(t,e,n){if(t.stats_=xa(t.repoInfo_),t.forceRestClient_||A0())t.server_=new Qi(t.repoInfo_,(s,i,r,o)=>{Kc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new At(t.repoInfo_,e,(s,i,r,o)=>{Kc(t,s,i,r,o)},s=>{Gc(t,s)},s=>{U2(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=L0(t.repoInfo_,()=>new Dy(t.stats_,t.server_)),t.infoData_=new Ay,t.infoSyncTree_=new Vc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ir(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Va(t,"connected",!1),t.serverSyncTree_=new Vc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Mn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function F2(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zd(t){return g2({timestamp:F2(t)})}function Kc(t,e,n,s,i){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ji(n,c=>Fe(c));o=_2(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=p2(t.serverSyncTree_,r,l,i)}else if(s){const l=ji(n,c=>Fe(c));o=f2(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=Ir(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ka(t,r)),Mn(t.eventQueue_,a,o)}function Gc(t,e){Va(t,"connected",e),e===!1&&B2(t)}function U2(t,e){st(e,(n,s)=>{Va(t,n,s)})}function Va(t,e,n){const s=new Ee("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=Ir(t.infoSyncTree_,s,i);Mn(t.eventQueue_,s,r)}function $2(t){return t.nextWriteId_++}function B2(t){ef(t,"onDisconnectEvents");const e=Zd(t),n=Xi();$o(t.onDisconnect_,he(),(i,r)=>{const o=v2(i,r,t.serverSyncTree_,e);kd(n,i,o)});let s=[];$o(n,he(),(i,r)=>{s=s.concat(Ir(t.serverSyncTree_,i,r));const o=V2(t,i);Ka(t,o)}),t.onDisconnect_=Xi(),Mn(t.eventQueue_,he(),s)}function W2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(O2)}function ef(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function tf(t,e,n){return Hd(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function ja(t,e=t.transactionQueueTree_){if(e||kr(t,e),ms(e)){const n=sf(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&H2(t,fi(e),n)}else Yd(e)&&Sr(e,n=>{ja(t,n)})}function H2(t,e,n){const s=n.map(c=>c.currentWriteId),i=tf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ef(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();kr(t,za(t.transactionQueueTree_,e)),ja(t,t.transactionQueueTree_),Mn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)hi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Qe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ka(t,e)}},o)}function Ka(t,e){const n=nf(t,e),s=fi(n),i=sf(t,n);return z2(t,i,s),s}function z2(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tt(n,l.path);let u=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=M2)u=!0,h="maxretry",i=i.concat(zn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=tf(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Xd("transaction failed: Data returned ",g,l.path);let m=Fe(g);typeof g=="object"&&g!=null&&Lt(g,".priority")||(m=m.updatePriority(d.getPriority()));const O=l.currentWriteId,A=Zd(t),x=b2(m,d,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=x,l.currentWriteId=$2(t),o.splice(o.indexOf(O),1),i=i.concat(d2(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),i=i.concat(zn(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(zn(t.serverSyncTree_,l.currentWriteId,!0))}Mn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}kr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)hi(s[a]);ja(t,t.transactionQueueTree_)}function nf(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&ms(s)===void 0;)s=za(s,n),e=ve(e),n=Z(e);return s}function sf(t,e){const n=[];return rf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function rf(t,e,n){const s=ms(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Sr(e,i=>{rf(t,i,n)})}function kr(t,e){const n=ms(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,qd(e,n.length>0?n:void 0)}Sr(e,s=>{kr(t,s)})}function V2(t,e){const n=fi(nf(t,e)),s=za(t.transactionQueueTree_,e);return E2(s,i=>{no(t,i)}),no(t,s),Jd(s,i=>{no(t,i)}),n}function no(t,e){const n=ms(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qd(e,void 0):n.length=r+1,Mn(t.eventQueue_,fi(e),i);for(let o=0;o<s.length;o++)hi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function K2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const qc=function(t,e){const n=G2(t),s=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},G2=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=j2(t.substring(u,h)));const d=K2(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return J(this._path)?null:md(this._path)}get ref(){return new ys(this._repo,this._path)}get _queryIdentifier(){const e=Oc(this._queryParams),n=ka(e);return n==="{}"?"default":n}get _queryObject(){return Oc(this._queryParams)}isEqual(e){if(e=cn(e),!(e instanceof Ga))return!1;const n=this._repo===e._repo,s=bd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ry(this._path)}}class ys extends Ga{constructor(e,n){super(e,n,new Oa,!1)}get parent(){const e=vd(this._path);return e===null?null:new ys(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}u2(ys);h2(ys);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="FIREBASE_DATABASE_EMULATOR_HOST",Go={};let Y2=!1;function J2(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[q2]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=qc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Lo(Lo.OWNER):new P0(t.name,t.options,e);R2("Invalid Firebase Database URL",o),J(o.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=X2(a,t,u,new N0(t.name,n));return new Z2(h,t)}function Q2(t,e){const n=Go[e];(!n||n[t.key]!==t)&&Rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),W2(t),delete n[t.key]}function X2(t,e,n,s){let i=Go[e.name];i||(i={},Go[e.name]=i);let r=i[t.toURLString()];return r&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new D2(t,Y2,n,s),i[t.toURLString()]=r,r}class Z2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ys(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ev(t){m0(_s),is(new Sn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return J2(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(_c,gc,t),tn(_c,gc,"esm2017")}At.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};At.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ev();var tv="firebase",nv="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(tv,nv,"app");const sv={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},iv=jh(sv);function qa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rv=of,af=new li("auth","Firebase",of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Ta("@firebase/auth");function ov(t,...e){nr.logLevel<=ce.WARN&&nr.warn(`Auth (${_s}): ${t}`,...e)}function Pi(t,...e){nr.logLevel<=ce.ERROR&&nr.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw Ya(t,...e)}function Ct(t,...e){return Ya(t,...e)}function av(t,e,n){const s=Object.assign(Object.assign({},rv()),{[e]:n});return new li("auth","Firebase",s).create(e,{appName:t.name})}function Ya(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return af.create(t,...e)}function j(t,e,...n){if(!t)throw Ya(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function Mt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lv(){return Yc()==="http:"||Yc()==="https:"}function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lv()||Jm()||"connection"in navigator)?navigator.onLine:!0}function uv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ia()||$h()}get(){return cv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new pi(3e4,6e4);function cf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,s,i={}){return uf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ps(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lf.fetch()(hf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function uf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hv),e);try{const i=new pv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ki(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw av(t,u,c);Ot(t,u)}}catch(i){if(i instanceof ln)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function fv(t,e,n,s,i={}){const r=await _i(t,e,n,s,i);return"mfaPendingCredential"in r&&Ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ja(t.config,i):`${t.config.apiScheme}://${i}`}class pv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ct(this.auth,"network-request-failed")),dv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ct(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function gv(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mv(t,e=!1){const n=cn(t),s=await n.getIdToken(e),i=Qa(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:$s(so(i.auth_time)),issuedAtTime:$s(so(i.iat)),expirationTime:$s(so(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function so(t){return Number(t)*1e3}function Qa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vi(n);return i?JSON.parse(i):(Pi("Failed to decode base64 JWT payload"),null)}catch(i){return Pi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yv(t){const e=Qa(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&vv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ni(t,gv(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wv(r.providerUserInfo):[],a=Ev(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new df(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Cv(t){const e=cn(t);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ev(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function wv(t){return t.map(e=>{var{providerId:n}=e,s=qa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e){const n=await uf(t,{},async()=>{const s=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=hf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Iv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new si;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new df(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mv(this,e)}reload(){return Cv(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ni(this,_v(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:M,isAnonymous:q,providerData:pe,stsTokenManager:ge}=n;j(H&&ge,e,"internal-error");const N=si.fromJSON(this.name,ge);j(typeof H=="string",e,"internal-error"),Ht(h,e.name),Ht(d,e.name),j(typeof M=="boolean",e,"internal-error"),j(typeof q=="boolean",e,"internal-error"),Ht(g,e.name),Ht(m,e.name),Ht(w,e.name),Ht(O,e.name),Ht(A,e.name),Ht(x,e.name);const F=new In({uid:H,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:N,createdAt:A,lastLoginAt:x});return pe&&Array.isArray(pe)&&(F.providerData=pe.map(K=>Object.assign({},K))),O&&(F._redirectEventId=O),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new si;i.updateFromServerResponse(n);const r=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await sr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Map;function xt(t){Mt(t instanceof Function,"Expected a class definition");let e=Jc.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jc.set(t,e),e)}/**
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
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ff.type="NONE";const Qc=ff;/**
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
 */function Oi(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Oi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Oi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Jn(xt(Qc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||xt(Qc);const o=Oi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=In._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Jn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Jn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yf(e))return"Blackberry";if(vf(e))return"Webos";if(Xa(e))return"Safari";if((e.includes("chrome/")||_f(e))&&!e.includes("edge/"))return"Chrome";if(mf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pf(t=Be()){return/firefox\//i.test(t)}function Xa(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _f(t=Be()){return/crios\//i.test(t)}function gf(t=Be()){return/iemobile/i.test(t)}function mf(t=Be()){return/android/i.test(t)}function yf(t=Be()){return/blackberry/i.test(t)}function vf(t=Be()){return/webos/i.test(t)}function Rr(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tv(t=Be()){var e;return Rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sv(){return Qm()&&document.documentMode===10}function bf(t=Be()){return Rr(t)||mf(t)||vf(t)||yf(t)||/windows phone/i.test(t)||gf(t)}function kv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e=[]){let n;switch(t){case"Browser":n=Xc(Be());break;case"Worker":n=`${Xc(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${s}`}async function Ef(t,e){return _i(t,"GET","/v2/recaptchaConfig",cf(t,e))}function Zc(t){return t!==void 0&&t.enterprise!==void 0}class wf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function If(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ct("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Rv().appendChild(s)})}function xv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Av="https://www.google.com/recaptcha/enterprise.js?render=",Nv="recaptcha-enterprise",Pv="NO_RECAPTCHA";class Ov{constructor(e){this.type=Nv,this.auth=xr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ef(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new wf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Zc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Pv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Zc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}If(Av+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Mv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new Mv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?cn(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}async initializeRecaptchaConfig(){const e=await Ef(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new wf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ov(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ov(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return cn(t)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=o1(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){const n=Vh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ki(r,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function Fv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Uv(t,e,n){const s=xr(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Tf(e),{host:o,port:a}=$v(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bv()}function Tf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $v(t){const e=Tf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:tu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:tu(o)}}}function tu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e){return fv(t,"POST","/v1/accounts:signInWithIdp",cf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="http://localhost";class Pn extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=qa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:Wv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gi extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends gi{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends gi{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends gi{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await In._fromIdTokenResponse(e,s,i),o=nu(s);return new as({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=nu(s);return new as({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function nu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ln{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ir(e,n,s,i)}}function Rf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ir._fromErrorAndOperation(t,r,e,s):r})}async function Hv(t,e,n=!1){const s=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",s)}/**
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
 */async function zv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ni(t,Rf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=Qa(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),as._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(t,e,n=!1){const s="signIn",i=await Rf(t,s,e),r=await as._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function jv(t,e,n,s){return cn(t).onIdTokenChanged(e,n,s)}function Kv(t,e,n){return cn(t).beforeAuthStateChanged(e,n)}function Gv(t,e,n,s){return cn(t).onAuthStateChanged(e,n,s)}const rr="__sak";/**
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
 */class xf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){const t=Be();return Xa(t)||Rr(t)}const Yv=1e3,Jv=10;class Af extends xf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qv()&&kv(),this.fallbackToPolling=bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Sv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Af.type="LOCAL";const Qv=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends xf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nf.type="SESSION";const Pf=Nf;/**
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
 */function Xv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ar(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Xv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Za("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function eb(t){Et().location.href=t}/**
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
 */function Of(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sb(){return Of()?self:null}/**
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
 */const Mf="firebaseLocalStorageDb",ib=1,or="firebaseLocalStorage",Df="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nr(t,e){return t.transaction([or],e?"readwrite":"readonly").objectStore(or)}function rb(){const t=indexedDB.deleteDatabase(Mf);return new mi(t).toPromise()}function Yo(){const t=indexedDB.open(Mf,ib);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(or,{keyPath:Df})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(or)?e(s):(s.close(),await rb(),e(await Yo()))})})}async function su(t,e,n){const s=Nr(t,!0).put({[Df]:e,value:n});return new mi(s).toPromise()}async function ob(t,e){const n=Nr(t,!1).get(e),s=await new mi(n).toPromise();return s===void 0?null:s.value}function iu(t,e){const n=Nr(t,!0).delete(e);return new mi(n).toPromise()}const ab=800,lb=3;class Lf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(sb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tb(),!this.activeServiceWorker)return;this.sender=new Zv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yo();return await su(e,rr,"1"),await iu(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>su(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ob(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Nr(i,!1).getAll();return new mi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lf.type="LOCAL";const cb=Lf;new pi(3e4,6e4);/**
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
 */function ub(t,e){return e?xt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class el extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hb(t){return Vv(t.auth,new el(t),t.bypassAuthState)}function db(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),zv(n,new el(t),t.bypassAuthState)}async function fb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Hv(n,new el(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return fb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:Ot(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new pi(2e3,1e4);class Vn extends Ff{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}Vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="pendingRedirect",Mi=new Map;class gb extends Ff{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await mb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mb(t,e){const n=bb(e),s=vb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function yb(t,e){Mi.set(t._key(),e)}function vb(t){return xt(t._redirectPersistence)}function bb(t){return Oi(_b,t.config.apiKey,t.name)}async function Cb(t,e,n=!1){const s=xr(t),i=ub(s,e),o=await new gb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=10*60*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ib(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(ru(e))}saveEventToCache(e){this.cachedEventUids.add(ru(e)),this.lastProcessedEventTime=Date.now()}}function ru(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ib(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kb=/^https?/;async function Rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tb(t);for(const n of e)try{if(xb(n))return}catch{}Ot(t,"unauthorized-domain")}function xb(t){const e=qo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kb.test(n))return!1;if(Sb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Ab=new pi(3e4,6e4);function ou(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nb(t){return new Promise((e,n)=>{var s,i,r;function o(){ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ou(),n(Ct(t,"network-request-failed"))},timeout:Ab.get()})}if(!((i=(s=Et().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Et().gapi)===null||r===void 0)&&r.load)o();else{const a=xv("iframefcb");return Et()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},If(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Di=null,e})}let Di=null;function Pb(t){return Di=Di||Nb(t),Di}/**
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
 */const Ob=new pi(5e3,15e3),Mb="__/auth/iframe",Db="emulator/auth/iframe",Lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ub(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ja(e,Db):`https://${t.config.authDomain}/${Mb}`,s={apiKey:e.apiKey,appName:t.name,v:_s},i=Fb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ps(s).slice(1)}`}async function $b(t){const e=await Pb(t),n=Et().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Ub(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=Et().setTimeout(()=>{r(o)},Ob.get());function l(){Et().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wb=500,Hb=600,zb="_blank",Vb="http://localhost";class au{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jb(t,e,n,s=Wb,i=Hb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bb),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Be().toLowerCase();n&&(a=_f(c)?zb:n),pf(c)&&(e=e||Vb,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Tv(c)&&a!=="_self")return Kb(e||"",a),new au(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new au(h)}function Kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Gb="__/auth/handler",qb="emulator/auth/handler",Yb=encodeURIComponent("fac");async function lu(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:_s,eventId:i};if(e instanceof kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ro(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof gi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Yb}=${encodeURIComponent(l)}`:"";return`${Jb(t)}?${ps(a).slice(1)}${c}`}function Jb({config:t}){return t.emulator?Ja(t,qb):`https://${t.authDomain}/${Gb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pf,this._completeRedirectFn=Cb,this._overrideRedirectResult=yb}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await lu(e,n,s,qo(),i);return jb(e,o,Za())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await lu(e,n,s,qo(),i);return eb(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $b(e),s=new wb(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(io,{type:io},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[io];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bf()||Xa()||Rr()}}const Xb=Qb;var cu="@firebase/auth",uu="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tC(t){is(new Sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cf(t)},c=new Dv(s,i,r,l);return Fv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),is(new Sn("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(s=>new Zb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(cu,uu,eC(t)),tn(cu,uu,"esm2017")}/**
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
 */const nC=5*60,sC=Uh("authIdTokenMaxAge")||nC;let hu=null;const iC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>sC)return;const i=n==null?void 0:n.token;hu!==i&&(hu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rC(t=a0()){const e=Vh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lv(t,{popupRedirectResolver:Xb,persistence:[cb,Qv,Pf]}),s=Uh("authTokenSyncURL");if(s){const r=iC(s);Kv(n,r,()=>r(n.currentUser)),jv(n,o=>r(o))}const i=Ym("auth");return i&&Uv(n,`http://${i}`),n}tC("Browser");const oC=rC(iv);let tl=ds({});Gv(oC,t=>{tl=t});const aC=()=>tl,lC=()=>Object.keys(tl).length>0;const cC=t=>(oi("data-v-ec73272a"),t=t(),ai(),t),uC={class:"container"},hC=cC(()=>ue("h1",null,[hh("Tile"),ue("span",null,"Swap")],-1)),dC={key:0,class:"bottom right"},fC={key:1,class:"bottom right"},pC={data(){return{user:aC()}}},_C=Object.assign(pC,{__name:"HomeView",setup(t){return(e,n)=>(V(),Q("div",uC,[hC,ue("main",null,[se(Vr,{name:"Freeplay",image:at(Um),path:"/freeplaySelection"},null,8,["image"]),se(Vr,{name:"Puzzles",image:at($m),path:"/puzzleSelection"},null,8,["image"]),se(Vr,{name:"Challenges",image:at(Bm),path:"/challengeSelection"},null,8,["image"])]),at(lC)()?(V(),Q("p",dC," You are logged in as "+Ze(e.user.displayName),1)):(V(),Q("p",fC," You are not logged in "))]))}}),gC=qe(_C,[["__scopeId","data-v-ec73272a"]]),vs=kg("store",{state:()=>({currentLayout:{},currentPuzzle:{},difficulty:2}),actions:{setLayout(t){this.currentLayout=t},setPuzzle(t){this.currentPuzzle=t}}});const mC=["data-level"],yC={props:["layout","completion"],data(){return{store:vs(),tileSizePreview:1/Math.sqrt(this.$props.layout.height*this.$props.layout.width)*50}},methods:{openGame(){this.store.setLayout(this.$props.layout),this.$router.push("/freeplayGame")}}},vC=Object.assign(yC,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(V(),Q("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(V(!0),Q(be,null,et(t.layout.height,s=>(V(),Q("div",{key:"row"+s,class:"row"},[(V(!0),Q(be,null,et(t.layout.width,i=>(V(),Q("div",{key:"t"+i,class:"tile",style:ri({visibility:t.layout.isTile(s-1,i-1)?"visible":"hidden",transform:`translate(${e.tileSizePreview*(i-1-t.layout.width/2)+50}px, ${e.tileSizePreview*(s-1-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))),128))],8,mC))}}),bC=qe(vC,[["__scopeId","data-v-26f698c9"]]);const nl={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"black":"white"},color(){return this.black!==void 0?"white":"black"}}},du=()=>{_h(t=>({e7a07ef6:t.backgroundColor,"426355da":t.color}))},fu=nl.setup;nl.setup=fu?(t,e)=>(du(),fu(t,e)):du;function CC(t,e,n,s,i,r){return V(),Q("button",null,Ze(n.text),1)}const Xn=qe(nl,[["render",CC],["__scopeId","data-v-d91b9173"]]),EC={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},ii=Object.assign(EC,{__name:"LinkButton",setup(t){return(e,n)=>(V(),Pt(Xn,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});class ls{constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s,this.unlockCategory=i,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill(0));for(const r of s)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n){const s=[-1,-1,-1,0,0,0,1,1,1],i=[-1,0,1,-1,0,1,-1,0,1];for(const r of s)for(const o of i)e+o>=0&&e+o<this.matrix.length&&n+r>=0&&n+r<this.matrix[0].length&&this.matrix[e+o][n+r]!==-1&&(this.matrix[e+o][n+r]=this.matrix[e+o][n+r]?0:1)}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice())}isSolved(){return this.matrix.every(e=>e.every(n=>n===1||n===-1))}isTile(e,n){return this.matrix[e][n]!==-1}isWhite(e,n){return this.matrix[e][n]===1}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new ls({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r)}return n.matrix.every(s=>s.every(i=>i===1||i===-1))?this.generatePosition(e):n}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new ls({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}}const wC=t=>(oi("data-v-662b7418"),t=t(),ai(),t),IC=wC(()=>ue("h1",null,"Select a layout",-1)),TC={class:"layouts"},SC={data(){return{layouts:[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34]}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new ls({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})})}},methods:{goHome(){this.$router.push("/")}}},kC=Object.assign(SC,{__name:"FreeplaySelection",setup(t){return(e,n)=>(V(),Q("main",null,[IC,se(ii,{class:"top right",text:"back",to:"/"}),ue("div",TC,[(V(!0),Q(be,null,et(e.layouts,(s,i)=>(V(),Pt(bC,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),RC=qe(kC,[["__scopeId","data-v-662b7418"]]);const xC={props:["puzzle"],data(){const{width:t,height:e}=this.$props.puzzle.target;return{store:vs(),tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.$props.puzzle.target}},methods:{openGame(){this.store.setPuzzle(this.$props.puzzle),this.store.setLayout(this.$props.puzzle.target),this.$router.push("/puzzleGame")}}},AC=Object.assign(xC,{__name:"PuzzleSelectionButton",setup(t){return(e,n)=>(V(),Q("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(V(!0),Q(be,null,et(e.layout.height,s=>(V(),Q("div",{key:"row"+s,class:"row"},[(V(!0),Q(be,null,et(e.layout.width,i=>(V(),Q("div",{key:"t"+i,class:"tile",style:ri({backgroundColor:e.layout.isWhite(s-1,i-1)?"#b5ab9e":"black",visibility:e.layout.isTile(s-1,i-1)?"visible":"hidden",transform:`translate(${e.tileSizePreview*(i-1-e.layout.width/2)+50}px, ${e.tileSizePreview*(s-1-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))),128))]))}}),NC=qe(AC,[["__scopeId","data-v-c5fdebb3"]]);class PC{constructor({base:e,target:n,moves:s,solution:i}){this.base=e,this.target=n,this.moves=s,this.solution=i}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}}const OC=t=>(oi("data-v-7e4a9962"),t=t(),ai(),t),MC=OC(()=>ue("h1",null,"Select a puzzle",-1)),DC={class:"layouts"},LC={data(){return{puzzles:[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:30,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:30,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:75,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].map(e=>{const{base:n,target:s,moves:i,solution:r}=e;n.forEach((h,d)=>h.forEach((g,m)=>{g===2&&(n[d][m]=-1,s[d][m]=-1)}));const o=n[0].length,a=n.length,l=n.map((h,d)=>h.map((g,m)=>g===-1?d*o+m:null)).flat().filter(h=>h||h===0),c=new ls({width:o,height:a,exclude:l,unlockCategory:0});c.setMatrix(n);const u=new ls({width:o,height:a,exclude:l,unlockCategory:0});return u.setMatrix(s),new PC({base:c,target:u,moves:i,solution:r})})}}},FC=Object.assign(LC,{__name:"PuzzleSelection",setup(t){return(e,n)=>(V(),Q("main",null,[MC,se(ii,{class:"top right",text:"back",to:"/"}),ue("div",DC,[(V(!0),Q(be,null,et(e.puzzles,(s,i)=>(V(),Pt(NC,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),UC=qe(FC,[["__scopeId","data-v-7e4a9962"]]),$C={};function BC(t,e){return V(),Q("div")}const WC=qe($C,[["render",BC]]);const HC=t=>(oi("data-v-3d035364"),t=t(),ai(),t),zC=HC(()=>ue("div",{class:"inner-tile"},[ue("div",{class:"front"}),ue("div",{class:"back"})],-1)),VC=[zC],jC={props:["color","visibility","small"],data(){return{tileSize:""}},mounted(){const t=vs(),e=()=>{const{width:n,height:s}=t.currentLayout;this.tileSize=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1)+"px"};e(),window.addEventListener("resize",e)}},KC=Object.assign(jC,{__name:"Tile",setup(t){return _h(e=>({"81d6e016":e.tileSize,"0dd23c90":t.visibility})),(e,n)=>(V(),Q("div",{class:Tn(["tile",{"flipped-tile":t.color==="black"}])},VC,2))}}),Jo=qe(KC,[["__scopeId","data-v-3d035364"]]);const GC={class:"diff"},qC=["value","max"],YC={props:["modelValue"],emits:["update:modelValue"],data(){const t=vs();return{difficulties:["very easy","easy","normal","hard","very hard"],max:t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},JC=Object.assign(YC,{__name:"Slider",setup(t){return(e,n)=>(V(),Q("div",GC,[ue("h2",null,"difficulty - "+Ze(e.difficultyText),1),ue("input",{type:"range",min:"2",value:t.modelValue,onInput:n[0]||(n[0]=s=>e.$emit("update:modelValue",parseInt(s.target.value))),max:e.max},null,40,qC)]))}}),QC=qe(JC,[["__scopeId","data-v-2c2f28e6"]]);const XC={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},ZC={class:"modal"};function eE(t,e,n,s,i,r){return V(),Q("div",null,[se(Js,{name:"fade"},{default:rn(()=>[uo(ue("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[Eo,n.modelValue]])]),_:1}),se(Js,{name:"zoom"},{default:rn(()=>[uo(ue("div",ZC,[f_(t.$slots,"default",{},void 0,!0)],512),[[Eo,n.modelValue]])]),_:3})])}const Qo=qe(XC,[["render",eE],["__scopeId","data-v-c20a30b6"]]),$f=()=>{let t=Hs(window.innerWidth),e=Hs(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;js(()=>window.addEventListener("resize",n)),js(()=>window.addEventListener("resize",s)),Ks(()=>window.removeEventListener("resize",n)),Ks(()=>window.removeEventListener("resize",s));const i=je(()=>t.value),r=je(()=>e.value);return{width:i,height:r}};const tE={class:"top-menu"},nE={data(){const t=vs(),e=t.currentLayout,{width:n}=$f();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty??2,showModal:!1,moves:0}},watch:{difficulty(){this.store.difficulty=this.difficulty},showModal(){this.showModal||this.randomize()}},methods:{onTileClick(t,e){this.layout.swapTiles(t,e),this.moves++,this.layout.isSolved()&&(this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty)}},mounted(){this.randomize()}},sE=Object.assign(nE,{__name:"FreeplayGame",setup(t){return(e,n)=>(V(),Q("div",null,[ue("div",tE,[se(Xn,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),se(QC,{modelValue:e.difficulty,"onUpdate:modelValue":n[0]||(n[0]=s=>e.difficulty=s)},null,8,["modelValue"])]),uo(ue("p",{class:Tn(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},Ze(e.moves)+" move"+Ze(e.moves>1?"s":""),3),[[Eo,e.moves>0]]),se(ii,{class:"top right",text:"back",to:"/freeplaySelection"}),ue("main",null,[(V(!0),Q(be,null,et(e.layout.matrix,(s,i)=>(V(),Q("div",{class:"row",key:"row"+i},[(V(!0),Q(be,null,et(s,(r,o)=>(V(),Pt(Jo,{class:"tile",color:r===1?"white":"black",visibility:r===-1?"hidden":"visible",key:i+""+o,onClick:a=>e.onTileClick(i,o)},null,8,["color","visibility","onClick"]))),128))]))),128))]),se(Qo,{modelValue:e.showModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showModal=s)},{default:rn(()=>[ue("h1",null,"you won in "+Ze(e.moves)+" move"+Ze(e.moves>1?"s":"")+"!",1),se(Xn,{black:"",text:"yay!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),iE=qe(sE,[["__scopeId","data-v-d8194ab1"]]);const rE=t=>(oi("data-v-2b73e156"),t=t(),ai(),t),oE=rE(()=>ue("h1",null,"no moves remaining!",-1)),aE={data(){const e=vs().currentPuzzle,n=e.base.copy(),{width:s}=$f();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},onTileClick(t,e){this.remainingMoves>0&&(this.layout.swapTiles(t,e),this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?this.showWinModal=!0:this.remainingMoves===0&&(this.showLostModal=!0))}}},lE=Object.assign(aE,{__name:"PuzzleGame",setup(t){return(e,n)=>(V(),Q("div",null,[se(ii,{class:"top right",text:"back",to:"/puzzleSelection"}),ue("div",{class:Tn(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[ue("h1",null,Ze(e.remainingMoves)+" move"+Ze(e.remainingMoves>1?"s":"")+" remaining",1),se(Xn,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),ue("main",null,[(V(!0),Q(be,null,et(e.layout.matrix,(s,i)=>(V(),Q("div",{class:"row",key:"row"+i},[(V(!0),Q(be,null,et(s,(r,o)=>(V(),Pt(Jo,{class:"tile",color:r===1?"white":"black",visibility:r===-1?"hidden":"visible",key:i+""+o,onClick:a=>e.onTileClick(i,o)},null,8,["color","visibility","onClick"]))),128))]))),128))]),ue("div",{class:Tn(["target",{left:e.windowWidth>600,middle:e.windowWidth>600,top:e.windowWidth<=600,center:e.windowWidth<=600}])},[(V(!0),Q(be,null,et(e.puzzle.target.matrix,(s,i)=>(V(),Q("div",{class:"row",key:"row"+i},[(V(!0),Q(be,null,et(s,(r,o)=>(V(),Pt(Jo,{class:"tile",small:"",color:r===1?"white":"black",visibility:r===-1?"hidden":"visible",key:i+""+o},null,8,["color","visibility"]))),128))]))),128))],2),se(Qo,{modelValue:e.showWinModal,"onUpdate:modelValue":n[1]||(n[1]=s=>e.showWinModal=s)},{default:rn(()=>[ue("h1",null,"you won in "+Ze(e.moves)+" move"+Ze(e.moves>1?"s":"")+"!",1),se(Xn,{black:"",text:"yay!",onClick:n[0]||(n[0]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),se(Qo,{modelValue:e.showLostModal,"onUpdate:modelValue":n[2]||(n[2]=s=>e.showLostModal=s)},{default:rn(()=>[oE,se(Xn,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),se(ii,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),cE=qe(lE,[["__scopeId","data-v-2b73e156"]]),uE={};function hE(t,e){return V(),Q("div")}const dE=qe(uE,[["render",hE]]),fE=Pm({history:Yg("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:gC},{path:"/freeplaySelection",name:"freeplaySelection",component:RC},{path:"/puzzleSelection",name:"puzzleSelection",component:UC},{path:"/challengeSelection",name:"challengeSelection",component:WC},{path:"/freeplayGame",name:"freeplayGame",component:iE},{path:"/puzzleGame",name:"puzzleGame",component:cE},{path:"/challengeGame",name:"challengeGame",component:dE}]}),sl=yg(Mm),Bf=Cg();Bf.use(Og);sl.use(fE);sl.use(Bf);sl.mount("#app");
