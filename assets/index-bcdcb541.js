var Yp=Object.defineProperty;var Qp=(t,e,n)=>e in t?Yp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var mo=(t,e,n)=>(Qp(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Fa(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ce={},ns=[],ft=()=>{},Jp=()=>!1,Xp=/^on[^a-z]/,Br=t=>Xp.test(t),Ua=t=>t.startsWith("onUpdate:"),xe=Object.assign,$a=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zp=Object.prototype.hasOwnProperty,ie=(t,e)=>Zp.call(t,e),H=Array.isArray,ss=t=>Hr(t)==="[object Map]",hd=t=>Hr(t)==="[object Set]",G=t=>typeof t=="function",Te=t=>typeof t=="string",Wa=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",fd=t=>Ee(t)&&G(t.then)&&G(t.catch),pd=Object.prototype.toString,Hr=t=>pd.call(t),e_=t=>Hr(t).slice(8,-1),_d=t=>Hr(t)==="[object Object]",Ba=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},t_=/-(\w)/g,kt=zr(t=>t.replace(t_,(e,n)=>n?n.toUpperCase():"")),n_=/\B([A-Z])/g,Es=zr(t=>t.replace(n_,"-$1").toLowerCase()),Vr=zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),yo=zr(t=>t?`on${Vr(t)}`:""),ei=(t,e)=>!Object.is(t,e),vo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},s_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},i_=t=>{const e=Te(t)?Number(t):NaN;return isNaN(e)?t:e};let ac;const Ko=()=>ac||(ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ti(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?l_(s):Ti(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(Ee(t))return t}}const r_=/;(?![^(]*\))/g,o_=/:([^]+)/,a_=/\/\*[^]*?\*\//g;function l_(t){const e={};return t.replace(a_,"").split(r_).forEach(n=>{if(n){const s=n.split(o_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function dn(t){let e="";if(Te(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=dn(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u_=Fa(c_);function gd(t){return!!t||t===""}const st=t=>Te(t)?t:t==null?"":H(t)||Ee(t)&&(t.toString===pd||!G(t.toString))?JSON.stringify(t,md,2):String(t),md=(t,e)=>e&&e.__v_isRef?md(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:hd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!H(e)&&!_d(e)?String(e):e;let et;class yd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function vd(t){return new yd(t)}function d_(t,e=et){e&&e.active&&e.effects.push(t)}function Cd(){return et}function h_(t){et&&et.cleanups.push(t)}const Ha=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ed=t=>(t.w&hn)>0,wd=t=>(t.n&hn)>0,f_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hn},p_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ed(i)&&!wd(i)?i.delete(t):e[n++]=i,i.w&=~hn,i.n&=~hn}e.length=n}},ar=new WeakMap;let Ws=0,hn=1;const Go=30;let lt;const Pn=Symbol(""),Yo=Symbol("");class za{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,d_(this,s)}run(){if(!this.active)return this.fn();let e=lt,n=nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=lt,lt=this,nn=!0,hn=1<<++Ws,Ws<=Go?f_(this):lc(this),this.fn()}finally{Ws<=Go&&p_(this),hn=1<<--Ws,lt=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(lc(this),this.onStop&&this.onStop(),this.active=!1)}}function lc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nn=!0;const bd=[];function ws(){bd.push(nn),nn=!1}function bs(){const t=bd.pop();nn=t===void 0?!0:t}function Qe(t,e,n){if(nn&&lt){let s=ar.get(t);s||ar.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ha()),Id(i)}}function Id(t,e){let n=!1;Ws<=Go?wd(t)||(t.n|=hn,n=!Ed(t)):n=!t.has(lt),n&&(t.add(lt),lt.deps.push(t))}function Ft(t,e,n,s,i,r){const o=ar.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ba(n)&&a.push(o.get("length")):(a.push(o.get(Pn)),ss(t)&&a.push(o.get(Yo)));break;case"delete":H(t)||(a.push(o.get(Pn)),ss(t)&&a.push(o.get(Yo)));break;case"set":ss(t)&&a.push(o.get(Pn));break}if(a.length===1)a[0]&&Qo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Qo(Ha(l))}}function Qo(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&cc(s);for(const s of n)s.computed||cc(s)}function cc(t,e){(t!==lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function __(t,e){var n;return(n=ar.get(t))==null?void 0:n.get(e)}const g_=Fa("__proto__,__v_isRef,__isVue"),Td=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wa)),m_=Va(),y_=Va(!1,!0),v_=Va(!0),uc=C_();function C_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ws();const s=se(this)[e].apply(this,n);return bs(),s}}),t}function E_(t){const e=se(this);return Qe(e,"has",t),e.hasOwnProperty(t)}function Va(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?F_:Ad:e?Rd:xd).get(s))return s;const o=H(s);if(!t){if(o&&ie(uc,i))return Reflect.get(uc,i,r);if(i==="hasOwnProperty")return E_}const a=Reflect.get(s,i,r);return(Wa(i)?Td.has(i):g_(i))||(t||Qe(s,"get",i),e)?a:Ie(a)?o&&Ba(i)?a:a.value:Ee(a)?t?Nd(a):Si(a):a}}const w_=Sd(),b_=Sd(!0);function Sd(t=!1){return function(n,s,i,r){let o=n[s];if(us(o)&&Ie(o)&&!Ie(i))return!1;if(!t&&(!lr(i)&&!us(i)&&(o=se(o),i=se(i)),!H(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const a=H(n)&&Ba(s)?Number(s)<n.length:ie(n,s),l=Reflect.set(n,s,i,r);return n===se(r)&&(a?ei(i,o)&&Ft(n,"set",s,i):Ft(n,"add",s,i)),l}}function I_(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ft(t,"delete",e,void 0),s}function T_(t,e){const n=Reflect.has(t,e);return(!Wa(e)||!Td.has(e))&&Qe(t,"has",e),n}function S_(t){return Qe(t,"iterate",H(t)?"length":Pn),Reflect.ownKeys(t)}const kd={get:m_,set:w_,deleteProperty:I_,has:T_,ownKeys:S_},k_={get:v_,set(t,e){return!0},deleteProperty(t,e){return!0}},x_=xe({},kd,{get:y_,set:b_}),ja=t=>t,jr=t=>Reflect.getPrototypeOf(t);function zi(t,e,n=!1,s=!1){t=t.__v_raw;const i=se(t),r=se(e);n||(e!==r&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=jr(i),a=s?ja:n?Ga:ti;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Vi(t,e=!1){const n=this.__v_raw,s=se(n),i=se(t);return e||(t!==i&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ji(t,e=!1){return t=t.__v_raw,!e&&Qe(se(t),"iterate",Pn),Reflect.get(t,"size",t)}function dc(t){t=se(t);const e=se(this);return jr(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function hc(t,e){e=se(e);const n=se(this),{has:s,get:i}=jr(n);let r=s.call(n,t);r||(t=se(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ei(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function fc(t){const e=se(this),{has:n,get:s}=jr(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ft(e,"delete",t,void 0),r}function pc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function qi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=se(o),l=e?ja:t?Ga:ti;return!t&&Qe(a,"iterate",Pn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ki(t,e,n){return function(...s){const i=this.__v_raw,r=se(i),o=ss(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ja:e?Ga:ti;return!e&&Qe(r,"iterate",l?Yo:Pn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:this}}function R_(){const t={get(r){return zi(this,r)},get size(){return ji(this)},has:Vi,add:dc,set:hc,delete:fc,clear:pc,forEach:qi(!1,!1)},e={get(r){return zi(this,r,!1,!0)},get size(){return ji(this)},has:Vi,add:dc,set:hc,delete:fc,clear:pc,forEach:qi(!1,!0)},n={get(r){return zi(this,r,!0)},get size(){return ji(this,!0)},has(r){return Vi.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:qi(!0,!1)},s={get(r){return zi(this,r,!0,!0)},get size(){return ji(this,!0)},has(r){return Vi.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ki(r,!1,!1),n[r]=Ki(r,!0,!1),e[r]=Ki(r,!1,!0),s[r]=Ki(r,!0,!0)}),[t,n,e,s]}const[A_,P_,N_,O_]=R_();function qa(t,e){const n=e?t?O_:N_:t?P_:A_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ie(n,i)&&i in s?n:s,i,r)}const M_={get:qa(!1,!1)},D_={get:qa(!1,!0)},L_={get:qa(!0,!1)},xd=new WeakMap,Rd=new WeakMap,Ad=new WeakMap,F_=new WeakMap;function U_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $_(t){return t.__v_skip||!Object.isExtensible(t)?0:U_(e_(t))}function Si(t){return us(t)?t:Ka(t,!1,kd,M_,xd)}function Pd(t){return Ka(t,!1,x_,D_,Rd)}function Nd(t){return Ka(t,!0,k_,L_,Ad)}function Ka(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=$_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function sn(t){return us(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function lr(t){return!!(t&&t.__v_isShallow)}function Od(t){return sn(t)||us(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function qr(t){return or(t,"__v_skip",!0),t}const ti=t=>Ee(t)?Si(t):t,Ga=t=>Ee(t)?Nd(t):t;function Md(t){nn&&lt&&(t=se(t),Id(t.dep||(t.dep=Ha())))}function Dd(t,e){t=se(t);const n=t.dep;n&&Qo(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return Ld(t,!1)}function W_(t){return Ld(t,!0)}function Ld(t,e){return Ie(t)?t:new B_(t,e)}class B_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:ti(e)}get value(){return Md(this),this._value}set value(e){const n=this.__v_isShallow||lr(e)||us(e);e=n?e:se(e),ei(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ti(e),Dd(this))}}function tt(t){return Ie(t)?t.value:t}const H_={get:(t,e,n)=>tt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Fd(t){return sn(t)?t:new Proxy(t,H_)}function z_(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=j_(t,n);return e}class V_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return __(se(this._object),this._key)}}function j_(t,e,n){const s=t[e];return Ie(s)?s:new V_(t,e,n)}class q_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new za(e,()=>{this._dirty||(this._dirty=!0,Dd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=se(this);return Md(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function K_(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=ft):(s=t.get,i=t.set),new q_(s,i,r||!i,n)}function rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Kr(r,e,n)}return i}function rt(t,e,n,s){if(G(t)){const r=rn(t,e,n,s);return r&&fd(r)&&r.catch(o=>{Kr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}function Kr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){rn(l,null,10,[t,o,a]);return}}G_(t,n,i,s)}function G_(t,e,n,s=!0){console.error(t)}let ni=!1,Jo=!1;const We=[];let wt=0;const is=[];let Nt=null,Tn=0;const Ud=Promise.resolve();let Ya=null;function Qa(t){const e=Ya||Ud;return t?e.then(this?t.bind(this):t):e}function Y_(t){let e=wt+1,n=We.length;for(;e<n;){const s=e+n>>>1;si(We[s])<t?e=s+1:n=s}return e}function Ja(t){(!We.length||!We.includes(t,ni&&t.allowRecurse?wt+1:wt))&&(t.id==null?We.push(t):We.splice(Y_(t.id),0,t),$d())}function $d(){!ni&&!Jo&&(Jo=!0,Ya=Ud.then(Bd))}function Q_(t){const e=We.indexOf(t);e>wt&&We.splice(e,1)}function J_(t){H(t)?is.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?Tn+1:Tn))&&is.push(t),$d()}function _c(t,e=ni?wt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function Wd(t){if(is.length){const e=[...new Set(is)];if(is.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,s)=>si(n)-si(s)),Tn=0;Tn<Nt.length;Tn++)Nt[Tn]();Nt=null,Tn=0}}const si=t=>t.id==null?1/0:t.id,X_=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bd(t){Jo=!1,ni=!0,We.sort(X_);const e=ft;try{for(wt=0;wt<We.length;wt++){const n=We[wt];n&&n.active!==!1&&rn(n,null,14)}}finally{wt=0,We.length=0,Wd(),ni=!1,Ya=null,(We.length||is.length)&&Bd()}}function Z_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Ce;h&&(i=n.map(_=>Te(_)?_.trim():_)),d&&(i=n.map(s_))}let a,l=s[a=yo(e)]||s[a=yo(kt(e))];!l&&r&&(l=s[a=yo(Es(e))]),l&&rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(c,t,6,i)}}function Hd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Hd(c,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):xe(o,r),Ee(t)&&s.set(t,o),o)}function Gr(t,e){return!t||!Br(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Es(e))||ie(t,e))}let De=null,Yr=null;function cr(t){const e=De;return De=t,Yr=t&&t.type.__scopeId||null,e}function ki(t){Yr=t}function xi(){Yr=null}function xt(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&kc(-1);const r=cr(e);let o;try{o=t(...i)}finally{cr(r),s._d&&kc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Co(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:m,inheritAttrs:E}=t;let R,A;const P=cr(t);try{if(n.shapeFlag&4){const M=i||s;R=Et(u.call(M,M,d,r,_,h,m)),A=l}else{const M=e;R=Et(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:eg(l)}}catch(M){qs.length=0,Kr(M,t,1),R=V(It)}let z=R;if(A&&E!==!1){const M=Object.keys(A),{shapeFlag:Y}=z;M.length&&Y&7&&(o&&M.some(Ua)&&(A=tg(A,o)),z=fn(z,A))}return n.dirs&&(z=fn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),R=z,cr(P),R}const eg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Br(n))&&((e||(e={}))[n]=t[n]);return e},tg=(t,e)=>{const n={};for(const s in t)(!Ua(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ng(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?gc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Gr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?gc(s,o,c):!0:!!o;return!1}function gc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Gr(n,r))return!0}return!1}function sg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ig=t=>t.__isSuspense;function rg(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):J_(t)}function og(t,e){return Xa(t,null,{flush:"post"})}const Gi={};function Nn(t,e,n){return Xa(t,e,n)}function Xa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){var a;const l=Cd()===((a=Re)==null?void 0:a.scope)?Re:null;let c,u=!1,d=!1;if(Ie(t)?(c=()=>t.value,u=lr(t)):sn(t)?(c=()=>t,s=!0):H(t)?(d=!0,u=t.some(M=>sn(M)||lr(M)),c=()=>t.map(M=>{if(Ie(M))return M.value;if(sn(M))return xn(M);if(G(M))return rn(M,l,2)})):G(t)?e?c=()=>rn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),rt(t,l,3,[_])}:c=ft,e&&s){const M=c;c=()=>xn(M())}let h,_=M=>{h=P.onStop=()=>{rn(M,l,4)}},m;if(li)if(_=ft,e?n&&rt(e,l,3,[c(),d?[]:void 0,_]):c(),i==="sync"){const M=nm();m=M.__watcherHandles||(M.__watcherHandles=[])}else return ft;let E=d?new Array(t.length).fill(Gi):Gi;const R=()=>{if(P.active)if(e){const M=P.run();(s||u||(d?M.some((Y,_e)=>ei(Y,E[_e])):ei(M,E)))&&(h&&h(),rt(e,l,3,[M,E===Gi?void 0:d&&E[0]===Gi?[]:E,_]),E=M)}else P.run()};R.allowRecurse=!!e;let A;i==="sync"?A=R:i==="post"?A=()=>Ke(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),A=()=>Ja(R));const P=new za(c,A);e?n?R():E=P.run():i==="post"?Ke(P.run.bind(P),l&&l.suspense):P.run();const z=()=>{P.stop(),l&&l.scope&&$a(l.scope.effects,P)};return m&&m.push(z),z}function ag(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?zd(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Re;ds(this);const a=Xa(i,r.bind(s),n);return o?ds(o):On(),a}function zd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function xn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))xn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(hd(t)||ss(t))t.forEach(n=>{xn(n,e)});else if(_d(t))for(const n in t)xn(t[n],e);return t}function Xo(t,e){const n=De;if(n===null)return t;const s=eo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function yn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ws(),rt(l,n,8,[t.el,a,t,e]),bs())}}function lg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ii(()=>{t.isMounted=!0}),Yd(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],Vd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},cg={name:"BaseTransition",props:Vd,setup(t,{slots:e}){const n=uh(),s=lg();let i;return()=>{const r=e.default&&qd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==It){o=E;break}}const a=se(t),{mode:l}=a;if(s.isLeaving)return Eo(o);const c=mc(o);if(!c)return Eo(o);const u=Zo(c,a,s,n);ea(c,u);const d=n.subTree,h=d&&mc(d);let _=!1;const{getTransitionKey:m}=c.type;if(m){const E=m();i===void 0?i=E:E!==i&&(i=E,_=!0)}if(h&&h.type!==It&&(!Sn(c,h)||_)){const E=Zo(h,a,s,n);if(ea(h,E),l==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Eo(o);l==="in-out"&&c.type!==It&&(E.delayLeave=(R,A,P)=>{const z=jd(s,h);z[String(h.key)]=h,R._leaveCb=()=>{A(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},ug=cg;function jd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Zo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:E,onAppear:R,onAfterAppear:A,onAppearCancelled:P}=e,z=String(t.key),M=jd(n,t),Y=(N,F)=>{N&&rt(N,s,9,F)},_e=(N,F)=>{const K=F[1];Y(N,F),H(N)?N.every(he=>he.length<=1)&&K():N.length<=1&&K()},ye={mode:r,persisted:o,beforeEnter(N){let F=a;if(!n.isMounted)if(i)F=E||a;else return;N._leaveCb&&N._leaveCb(!0);const K=M[z];K&&Sn(t,K)&&K.el._leaveCb&&K.el._leaveCb(),Y(F,[N])},enter(N){let F=l,K=c,he=u;if(!n.isMounted)if(i)F=R||l,K=A||c,he=P||u;else return;let D=!1;const ae=N._enterCb=Le=>{D||(D=!0,Le?Y(he,[N]):Y(K,[N]),ye.delayedLeave&&ye.delayedLeave(),N._enterCb=void 0)};F?_e(F,[N,ae]):ae()},leave(N,F){const K=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return F();Y(d,[N]);let he=!1;const D=N._leaveCb=ae=>{he||(he=!0,F(),ae?Y(m,[N]):Y(_,[N]),N._leaveCb=void 0,M[K]===t&&delete M[K])};M[K]=t,h?_e(h,[N,D]):D()},clone(N){return Zo(N,e,n,s)}};return ye}function Eo(t){if(Qr(t))return t=fn(t),t.children=null,t}function mc(t){return Qr(t)?t.children?t.children[0]:void 0:t}function ea(t,e){t.shapeFlag&6&&t.component?ea(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ke?(o.patchFlag&128&&i++,s=s.concat(qd(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?fn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Kd(t,e){return G(t)?(()=>xe({name:t.name},e,{setup:t}))():t}const Vs=t=>!!t.type.__asyncLoader,Qr=t=>t.type.__isKeepAlive;function dg(t,e){Gd(t,"a",e)}function hg(t,e){Gd(t,"da",e)}function Gd(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Qr(i.parent.vnode)&&fg(s,e,n,i),i=i.parent}}function fg(t,e,n,s){const i=Jr(e,t,s,!0);ri(()=>{$a(s[e],i)},n)}function Jr(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ws(),ds(n);const a=rt(e,n,t,o);return On(),bs(),a});return s?i.unshift(r):i.push(r),r}}const Wt=t=>(e,n=Re)=>(!li||t==="sp")&&Jr(t,(...s)=>e(...s),n),pg=Wt("bm"),ii=Wt("m"),_g=Wt("bu"),gg=Wt("u"),Yd=Wt("bum"),ri=Wt("um"),mg=Wt("sp"),yg=Wt("rtg"),vg=Wt("rtc");function Cg(t,e=Re){Jr("ec",t,e)}const Za="components";function Eg(t,e){return Jd(Za,t,!0,e)||t}const Qd=Symbol.for("v-ndc");function wg(t){return Te(t)?Jd(Za,t,!1)||t:t||Qd}function Jd(t,e,n=!0,s=!1){const i=De||Re;if(i){const r=i.type;if(t===Za){const a=Zg(r,!1);if(a&&(a===e||a===kt(e)||a===Vr(kt(e))))return r}const o=yc(i[t]||r[t],e)||yc(i.appContext[t],e);return!o&&s?r:o}}function yc(t,e){return t&&(t[e]||t[kt(e)]||t[Vr(kt(e))])}function Ln(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Te(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function bg(t,e,n={},s,i){if(De.isCE||De.parent&&Vs(De.parent)&&De.parent.isCE)return e!=="default"&&(n.name=e),V("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Q();const o=r&&Xd(r(n)),a=Fn(ke,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Xd(t){return t.some(e=>dr(e)?!(e.type===It||e.type===ke&&!Xd(e.children)):!0)?t:null}const ta=t=>t?dh(t)?eo(t)||t.proxy:ta(t.parent):null,js=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ta(t.parent),$root:t=>ta(t.root),$emit:t=>t.emit,$options:t=>el(t),$forceUpdate:t=>t.f||(t.f=()=>Ja(t.update)),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>ag.bind(t)}),wo=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ie(t,e),Ig={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(wo(s,e))return o[e]=1,s[e];if(i!==Ce&&ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,r[e];if(n!==Ce&&ie(n,e))return o[e]=4,n[e];na&&(o[e]=0)}}const u=js[e];let d,h;if(u)return e==="$attrs"&&Qe(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ce&&ie(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ie(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return wo(i,e)?(i[e]=n,!0):s!==Ce&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&ie(t,o)||wo(e,o)||(a=r[0])&&ie(a,o)||ie(s,o)||ie(js,o)||ie(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let na=!0;function Tg(t){const e=el(t),n=t.proxy,s=t.ctx;na=!1,e.beforeCreate&&Cc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:m,activated:E,deactivated:R,beforeDestroy:A,beforeUnmount:P,destroyed:z,unmounted:M,render:Y,renderTracked:_e,renderTriggered:ye,errorCaptured:N,serverPrefetch:F,expose:K,inheritAttrs:he,components:D,directives:ae,filters:Le}=e;if(c&&Sg(c,s,null),o)for(const fe in o){const le=o[fe];G(le)&&(s[fe]=le.bind(n))}if(i){const fe=i.call(n,n);Ee(fe)&&(t.data=Si(fe))}if(na=!0,r)for(const fe in r){const le=r[fe],At=G(le)?le.bind(n,n):G(le.get)?le.get.bind(n,n):ft,zt=!G(le)&&G(le.set)?le.set.bind(n):ft,yt=Fe({get:At,set:zt});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>yt.value,set:qe=>yt.value=qe})}if(a)for(const fe in a)Zd(a[fe],s,n,fe);if(l){const fe=G(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(le=>{Zi(le,fe[le])})}u&&Cc(u,t,"c");function ne(fe,le){H(le)?le.forEach(At=>fe(At.bind(n))):le&&fe(le.bind(n))}if(ne(pg,d),ne(ii,h),ne(_g,_),ne(gg,m),ne(dg,E),ne(hg,R),ne(Cg,N),ne(vg,_e),ne(yg,ye),ne(Yd,P),ne(ri,M),ne(mg,F),H(K))if(K.length){const fe=t.exposed||(t.exposed={});K.forEach(le=>{Object.defineProperty(fe,le,{get:()=>n[le],set:At=>n[le]=At})})}else t.exposed||(t.exposed={});Y&&t.render===ft&&(t.render=Y),he!=null&&(t.inheritAttrs=he),D&&(t.components=D),ae&&(t.directives=ae)}function Sg(t,e,n=ft){H(t)&&(t=sa(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=bt(i.from||s,i.default,!0):r=bt(i.from||s):r=bt(i),Ie(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Cc(t,e,n){rt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zd(t,e,n,s){const i=s.includes(".")?zd(n,s):()=>n[s];if(Te(t)){const r=e[t];G(r)&&Nn(i,r)}else if(G(t))Nn(i,t.bind(n));else if(Ee(t))if(H(t))t.forEach(r=>Zd(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Nn(i,r,t)}}function el(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ur(l,c,o,!0)),ur(l,e,o)),Ee(e)&&r.set(e,l),l}function ur(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ur(t,r,n,!0),i&&i.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=kg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kg={data:Ec,props:wc,emits:wc,methods:Bs,computed:Bs,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Bs,directives:Bs,watch:Rg,provide:Ec,inject:xg};function Ec(t,e){return e?t?function(){return xe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function xg(t,e){return Bs(sa(t),sa(e))}function sa(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?xe(Object.create(null),t,e):e}function wc(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:xe(Object.create(null),vc(t),vc(e??{})):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function eh(){return{app:null,config:{isNativeTag:Jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function Pg(t,e){return function(s,i=null){G(s)||(s=xe({},s)),i!=null&&!Ee(i)&&(i=null);const r=eh(),o=new Set;let a=!1;const l=r.app={_uid:Ag++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=V(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,eo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){oi=l;try{return c()}finally{oi=null}}};return l}}let oi=null;function Zi(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function bt(t,e,n=!1){const s=Re||De;if(s||oi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:oi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}function Ng(){return!!(Re||De||oi)}function Og(t,e,n,s=!1){const i={},r={};or(r,Zr,1),t.propsDefaults=Object.create(null),th(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Pd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Mg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Gr(t.emitsOptions,h))continue;const _=e[h];if(l)if(ie(r,h))_!==r[h]&&(r[h]=_,c=!0);else{const m=kt(h);i[m]=ia(l,a,m,_,t,!1)}else _!==r[h]&&(r[h]=_,c=!0)}}}else{th(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ie(e,d)&&((u=Es(d))===d||!ie(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ia(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ie(e,d))&&(delete r[d],c=!0)}c&&Ft(t,"set","$attrs")}function th(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xi(l))continue;const c=e[l];let u;i&&ie(i,u=kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=se(n),c=a||Ce;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ia(i,l,d,c[d],t,!ie(c,d))}}return o}function ia(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ds(i),s=c[n]=l.call(null,e),On())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Es(n))&&(s=!0))}return s}function nh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=d=>{l=!0;const[h,_]=nh(d,e,!0);xe(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,ns),ns;if(H(r))for(let u=0;u<r.length;u++){const d=kt(r[u]);bc(d)&&(o[d]=Ce)}else if(r)for(const u in r){const d=kt(u);if(bc(d)){const h=r[u],_=o[d]=H(h)||G(h)?{type:h}:xe({},h);if(_){const m=Sc(Boolean,_.type),E=Sc(String,_.type);_[0]=m>-1,_[1]=E<0||m<E,(m>-1||ie(_,"default"))&&a.push(d)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function bc(t){return t[0]!=="$"}function Ic(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Tc(t,e){return Ic(t)===Ic(e)}function Sc(t,e){return H(e)?e.findIndex(n=>Tc(n,t)):G(e)&&Tc(e,t)?0:-1}const sh=t=>t[0]==="_"||t==="$stable",tl=t=>H(t)?t.map(Et):[Et(t)],Dg=(t,e,n)=>{if(e._n)return e;const s=xt((...i)=>tl(e(...i)),n);return s._c=!1,s},ih=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sh(i))continue;const r=t[i];if(G(r))e[i]=Dg(i,r,s);else if(r!=null){const o=tl(r);e[i]=()=>o}}},rh=(t,e)=>{const n=tl(e);t.slots.default=()=>n},Lg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),or(e,"_",n)):ih(e,t.slots={})}else t.slots={},e&&rh(t,e);or(t.slots,Zr,1)},Fg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(xe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ih(e,i)),o=e}else e&&(rh(t,e),o={default:1});if(r)for(const a in i)!sh(a)&&!(a in o)&&delete i[a]};function ra(t,e,n,s,i=!1){if(H(t)){t.forEach((h,_)=>ra(h,e&&(H(e)?e[_]:e),n,s,i));return}if(Vs(s)&&!i)return;const r=s.shapeFlag&4?eo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,ie(d,c)&&(d[c]=null)):Ie(c)&&(c.value=null)),G(l))rn(l,a,12,[o,u]);else{const h=Te(l),_=Ie(l);if(h||_){const m=()=>{if(t.f){const E=h?ie(d,l)?d[l]:u[l]:l.value;i?H(E)&&$a(E,r):H(E)?E.includes(r)||E.push(r):h?(u[l]=[r],ie(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ie(d,l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ke(m,n)):m()}}}const Ke=rg;function Ug(t){return $g(t)}function $g(t,e){const n=Ko();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=ft,insertStaticContent:m}=t,E=(f,p,g,y=null,C=null,w=null,x=!1,I=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Sn(f,p)&&(y=v(f),qe(f,C,w,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:L}=p;switch(b){case Xr:R(f,p,g,y);break;case It:A(f,p,g,y);break;case er:f==null&&P(p,g,y,x);break;case ke:D(f,p,g,y,C,w,x,I,S);break;default:L&1?Y(f,p,g,y,C,w,x,I,S):L&6?ae(f,p,g,y,C,w,x,I,S):(L&64||L&128)&&b.process(f,p,g,y,C,w,x,I,S,k)}$!=null&&C&&ra($,f&&f.ref,w,p||f,!p)},R=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},A=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},P=(f,p,g,y)=>{[f.el,f.anchor]=m(f.children,p,g,y,f.el,f.anchor)},z=({el:f,anchor:p},g,y)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,y),f=C;s(p,g,y)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},Y=(f,p,g,y,C,w,x,I,S)=>{x=x||p.type==="svg",f==null?_e(p,g,y,C,w,x,I,S):F(f,p,C,w,x,I,S)},_e=(f,p,g,y,C,w,x,I)=>{let S,b;const{type:$,props:L,shapeFlag:W,transition:q,dirs:Z}=f;if(S=f.el=o(f.type,w,L&&L.is,L),W&8?u(S,f.children):W&16&&N(f.children,S,null,y,C,w&&$!=="foreignObject",x,I),Z&&yn(f,null,y,"created"),ye(S,f,f.scopeId,x,y),L){for(const ue in L)ue!=="value"&&!Xi(ue)&&r(S,ue,null,L[ue],w,f.children,y,C,Ue);"value"in L&&r(S,"value",null,L.value),(b=L.onVnodeBeforeMount)&&Ct(b,y,f)}Z&&yn(f,null,y,"beforeMount");const ge=(!C||C&&!C.pendingBranch)&&q&&!q.persisted;ge&&q.beforeEnter(S),s(S,p,g),((b=L&&L.onVnodeMounted)||ge||Z)&&Ke(()=>{b&&Ct(b,y,f),ge&&q.enter(S),Z&&yn(f,null,y,"mounted")},C)},ye=(f,p,g,y,C)=>{if(g&&_(f,g),y)for(let w=0;w<y.length;w++)_(f,y[w]);if(C){let w=C.subTree;if(p===w){const x=C.vnode;ye(f,x,x.scopeId,x.slotScopeIds,C.parent)}}},N=(f,p,g,y,C,w,x,I,S=0)=>{for(let b=S;b<f.length;b++){const $=f[b]=I?Qt(f[b]):Et(f[b]);E(null,$,p,g,y,C,w,x,I)}},F=(f,p,g,y,C,w,x)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:$}=p;S|=f.patchFlag&16;const L=f.props||Ce,W=p.props||Ce;let q;g&&vn(g,!1),(q=W.onVnodeBeforeUpdate)&&Ct(q,g,p,f),$&&yn(p,f,g,"beforeUpdate"),g&&vn(g,!0);const Z=C&&p.type!=="foreignObject";if(b?K(f.dynamicChildren,b,I,g,y,Z,w):x||le(f,p,I,null,g,y,Z,w,!1),S>0){if(S&16)he(I,p,L,W,g,y,C);else if(S&2&&L.class!==W.class&&r(I,"class",null,W.class,C),S&4&&r(I,"style",L.style,W.style,C),S&8){const ge=p.dynamicProps;for(let ue=0;ue<ge.length;ue++){const Se=ge[ue],at=L[Se],Gn=W[Se];(Gn!==at||Se==="value")&&r(I,Se,at,Gn,C,f.children,g,y,Ue)}}S&1&&f.children!==p.children&&u(I,p.children)}else!x&&b==null&&he(I,p,L,W,g,y,C);((q=W.onVnodeUpdated)||$)&&Ke(()=>{q&&Ct(q,g,p,f),$&&yn(p,f,g,"updated")},y)},K=(f,p,g,y,C,w,x)=>{for(let I=0;I<p.length;I++){const S=f[I],b=p[I],$=S.el&&(S.type===ke||!Sn(S,b)||S.shapeFlag&70)?d(S.el):g;E(S,b,$,null,y,C,w,x,!0)}},he=(f,p,g,y,C,w,x)=>{if(g!==y){if(g!==Ce)for(const I in g)!Xi(I)&&!(I in y)&&r(f,I,g[I],null,x,p.children,C,w,Ue);for(const I in y){if(Xi(I))continue;const S=y[I],b=g[I];S!==b&&I!=="value"&&r(f,I,b,S,x,p.children,C,w,Ue)}"value"in y&&r(f,"value",g.value,y.value)}},D=(f,p,g,y,C,w,x,I,S)=>{const b=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:W,slotScopeIds:q}=p;q&&(I=I?I.concat(q):q),f==null?(s(b,g,y),s($,g,y),N(p.children,g,$,C,w,x,I,S)):L>0&&L&64&&W&&f.dynamicChildren?(K(f.dynamicChildren,W,g,C,w,x,I),(p.key!=null||C&&p===C.subTree)&&oh(f,p,!0)):le(f,p,g,$,C,w,x,I,S)},ae=(f,p,g,y,C,w,x,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?C.ctx.activate(p,g,y,x,S):Le(p,g,y,C,w,x,S):ze(f,p,S)},Le=(f,p,g,y,C,w,x)=>{const I=f.component=Gg(f,y,C);if(Qr(f)&&(I.ctx.renderer=k),Yg(I),I.asyncDep){if(C&&C.registerDep(I,ne),!f.el){const S=I.subTree=V(It);A(null,S,p,g)}return}ne(I,f,p,g,C,w,x)},ze=(f,p,g)=>{const y=p.component=f.component;if(ng(f,p,g))if(y.asyncDep&&!y.asyncResolved){fe(y,p,g);return}else y.next=p,Q_(y.update),y.update();else p.el=f.el,y.vnode=p},ne=(f,p,g,y,C,w,x)=>{const I=()=>{if(f.isMounted){let{next:$,bu:L,u:W,parent:q,vnode:Z}=f,ge=$,ue;vn(f,!1),$?($.el=Z.el,fe(f,$,x)):$=Z,L&&vo(L),(ue=$.props&&$.props.onVnodeBeforeUpdate)&&Ct(ue,q,$,Z),vn(f,!0);const Se=Co(f),at=f.subTree;f.subTree=Se,E(at,Se,d(at.el),v(at),f,C,w),$.el=Se.el,ge===null&&sg(f,Se.el),W&&Ke(W,C),(ue=$.props&&$.props.onVnodeUpdated)&&Ke(()=>Ct(ue,q,$,Z),C)}else{let $;const{el:L,props:W}=p,{bm:q,m:Z,parent:ge}=f,ue=Vs(p);if(vn(f,!1),q&&vo(q),!ue&&($=W&&W.onVnodeBeforeMount)&&Ct($,ge,p),vn(f,!0),L&&ce){const Se=()=>{f.subTree=Co(f),ce(L,f.subTree,f,C,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Co(f);E(null,Se,g,y,f,C,w),p.el=Se.el}if(Z&&Ke(Z,C),!ue&&($=W&&W.onVnodeMounted)){const Se=p;Ke(()=>Ct($,ge,Se),C)}(p.shapeFlag&256||ge&&Vs(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&Ke(f.a,C),f.isMounted=!0,p=g=y=null}},S=f.effect=new za(I,()=>Ja(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,vn(f,!0),b()},fe=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Mg(f,p.props,y,g),Fg(f,p.children,g),ws(),_c(),bs()},le=(f,p,g,y,C,w,x,I,S=!1)=>{const b=f&&f.children,$=f?f.shapeFlag:0,L=p.children,{patchFlag:W,shapeFlag:q}=p;if(W>0){if(W&128){zt(b,L,g,y,C,w,x,I,S);return}else if(W&256){At(b,L,g,y,C,w,x,I,S);return}}q&8?($&16&&Ue(b,C,w),L!==b&&u(g,L)):$&16?q&16?zt(b,L,g,y,C,w,x,I,S):Ue(b,C,w,!0):($&8&&u(g,""),q&16&&N(L,g,y,C,w,x,I,S))},At=(f,p,g,y,C,w,x,I,S)=>{f=f||ns,p=p||ns;const b=f.length,$=p.length,L=Math.min(b,$);let W;for(W=0;W<L;W++){const q=p[W]=S?Qt(p[W]):Et(p[W]);E(f[W],q,g,null,C,w,x,I,S)}b>$?Ue(f,C,w,!0,!1,L):N(p,g,y,C,w,x,I,S,L)},zt=(f,p,g,y,C,w,x,I,S)=>{let b=0;const $=p.length;let L=f.length-1,W=$-1;for(;b<=L&&b<=W;){const q=f[b],Z=p[b]=S?Qt(p[b]):Et(p[b]);if(Sn(q,Z))E(q,Z,g,null,C,w,x,I,S);else break;b++}for(;b<=L&&b<=W;){const q=f[L],Z=p[W]=S?Qt(p[W]):Et(p[W]);if(Sn(q,Z))E(q,Z,g,null,C,w,x,I,S);else break;L--,W--}if(b>L){if(b<=W){const q=W+1,Z=q<$?p[q].el:y;for(;b<=W;)E(null,p[b]=S?Qt(p[b]):Et(p[b]),g,Z,C,w,x,I,S),b++}}else if(b>W)for(;b<=L;)qe(f[b],C,w,!0),b++;else{const q=b,Z=b,ge=new Map;for(b=Z;b<=W;b++){const Ze=p[b]=S?Qt(p[b]):Et(p[b]);Ze.key!=null&&ge.set(Ze.key,b)}let ue,Se=0;const at=W-Z+1;let Gn=!1,ic=0;const Ns=new Array(at);for(b=0;b<at;b++)Ns[b]=0;for(b=q;b<=L;b++){const Ze=f[b];if(Se>=at){qe(Ze,C,w,!0);continue}let vt;if(Ze.key!=null)vt=ge.get(Ze.key);else for(ue=Z;ue<=W;ue++)if(Ns[ue-Z]===0&&Sn(Ze,p[ue])){vt=ue;break}vt===void 0?qe(Ze,C,w,!0):(Ns[vt-Z]=b+1,vt>=ic?ic=vt:Gn=!0,E(Ze,p[vt],g,null,C,w,x,I,S),Se++)}const rc=Gn?Wg(Ns):ns;for(ue=rc.length-1,b=at-1;b>=0;b--){const Ze=Z+b,vt=p[Ze],oc=Ze+1<$?p[Ze+1].el:y;Ns[b]===0?E(null,vt,g,oc,C,w,x,I,S):Gn&&(ue<0||b!==rc[ue]?yt(vt,g,oc,2):ue--)}}},yt=(f,p,g,y,C=null)=>{const{el:w,type:x,transition:I,children:S,shapeFlag:b}=f;if(b&6){yt(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){x.move(f,p,g,k);return}if(x===ke){s(w,p,g);for(let L=0;L<S.length;L++)yt(S[L],p,g,y);s(f.anchor,p,g);return}if(x===er){z(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(w),s(w,p,g),Ke(()=>I.enter(w),C);else{const{leave:L,delayLeave:W,afterLeave:q}=I,Z=()=>s(w,p,g),ge=()=>{L(w,()=>{Z(),q&&q()})};W?W(w,Z,ge):ge()}else s(w,p,g)},qe=(f,p,g,y=!1,C=!1)=>{const{type:w,props:x,ref:I,children:S,dynamicChildren:b,shapeFlag:$,patchFlag:L,dirs:W}=f;if(I!=null&&ra(I,null,g,f,!0),$&256){p.ctx.deactivate(f);return}const q=$&1&&W,Z=!Vs(f);let ge;if(Z&&(ge=x&&x.onVnodeBeforeUnmount)&&Ct(ge,p,f),$&6)Hi(f.component,g,y);else{if($&128){f.suspense.unmount(g,y);return}q&&yn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,g,C,k,y):b&&(w!==ke||L>0&&L&64)?Ue(b,p,g,!1,!0):(w===ke&&L&384||!C&&$&16)&&Ue(S,p,g),y&&qn(f)}(Z&&(ge=x&&x.onVnodeUnmounted)||q)&&Ke(()=>{ge&&Ct(ge,p,f),q&&yn(f,null,p,"unmounted")},g)},qn=f=>{const{type:p,el:g,anchor:y,transition:C}=f;if(p===ke){Kn(g,y);return}if(p===er){M(f);return}const w=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:x,delayLeave:I}=C,S=()=>x(g,w);I?I(f.el,w,S):S()}else w()},Kn=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Hi=(f,p,g)=>{const{bum:y,scope:C,update:w,subTree:x,um:I}=f;y&&vo(y),C.stop(),w&&(w.active=!1,qe(x,f,p,g)),I&&Ke(I,p),Ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(f,p,g,y=!1,C=!1,w=0)=>{for(let x=w;x<f.length;x++)qe(f[x],p,g,y,C)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&qe(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,g),_c(),Wd(),p._vnode=f},k={p:E,um:qe,m:yt,r:qn,mt:Le,mc:N,pc:le,pbc:K,n:v,o:t};let U,ce;return e&&([U,ce]=e(k)),{render:O,hydrate:U,createApp:Pg(O,U)}}function vn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function oh(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Qt(i[r]),a.el=o.el),n||oh(o,a)),a.type===Xr&&(a.el=o.el)}}function Wg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Bg=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Xr=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),er=Symbol.for("v-stc"),qs=[];let ut=null;function Q(t=!1){qs.push(ut=t?null:[])}function Hg(){qs.pop(),ut=qs[qs.length-1]||null}let ai=1;function kc(t){ai+=t}function ah(t){return t.dynamicChildren=ai>0?ut||ns:null,Hg(),ai>0&&ut&&ut.push(t),t}function re(t,e,n,s,i,r){return ah(te(t,e,n,s,i,r,!0))}function Fn(t,e,n,s,i){return ah(V(t,e,n,s,i,!0))}function dr(t){return t?t.__v_isVNode===!0:!1}function Sn(t,e){return t.type===e.type&&t.key===e.key}const Zr="__vInternal",lh=({key:t})=>t??null,tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||Ie(t)||G(t)?{i:De,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,s=0,i=null,r=t===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lh(e),ref:e&&tr(e),scopeId:Yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return a?(nl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),ai>0&&!o&&ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ut.push(l),l}const V=zg;function zg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Qd)&&(t=It),dr(t)){const a=fn(t,e,!0);return n&&nl(a,n),ai>0&&!r&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag|=-2,a}if(em(t)&&(t=t.__vccOpts),e){e=Vg(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=dn(a)),Ee(l)&&(Od(l)&&!H(l)&&(l=xe({},l)),e.style=Ti(l))}const o=Te(t)?1:ig(t)?128:Bg(t)?64:Ee(t)?4:G(t)?2:0;return te(t,e,n,s,i,o,r,!0)}function Vg(t){return t?Od(t)||Zr in t?xe({},t):t:null}function fn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?jg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lh(a),ref:e&&e.ref?n&&i?H(i)?i.concat(tr(e)):[i,tr(e)]:tr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ch(t=" ",e=0){return V(Xr,null,t,e)}function Et(t){return t==null||typeof t=="boolean"?V(It):H(t)?V(ke,null,t.slice()):typeof t=="object"?Qt(t):V(Xr,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function nl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),nl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zr in e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[ch(e)]):n=8);t.children=e,t.shapeFlag|=n}function jg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=dn([e.class,s.class]));else if(i==="style")e.style=Ti([e.style,s.style]);else if(Br(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ct(t,e,n,s=null){rt(t,e,7,[n,s])}const qg=eh();let Kg=0;function Gg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qg,r={uid:Kg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(s,i),emitsOptions:Hd(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Z_.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const uh=()=>Re||De;let sl,Yn,xc="__VUE_INSTANCE_SETTERS__";(Yn=Ko()[xc])||(Yn=Ko()[xc]=[]),Yn.push(t=>Re=t),sl=t=>{Yn.length>1?Yn.forEach(e=>e(t)):Yn[0](t)};const ds=t=>{sl(t),t.scope.on()},On=()=>{Re&&Re.scope.off(),sl(null)};function dh(t){return t.vnode.shapeFlag&4}let li=!1;function Yg(t,e=!1){li=e;const{props:n,children:s}=t.vnode,i=dh(t);Og(t,n,i,e),Lg(t,s);const r=i?Qg(t,e):void 0;return li=!1,r}function Qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qr(new Proxy(t.ctx,Ig));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Xg(t):null;ds(t),ws();const r=rn(s,t,0,[t.props,i]);if(bs(),On(),fd(r)){if(r.then(On,On),e)return r.then(o=>{Rc(t,o,e)}).catch(o=>{Kr(o,t,0)});t.asyncDep=r}else Rc(t,r,e)}else hh(t,e)}function Rc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Fd(e)),hh(t,n)}let Ac;function hh(t,e,n){const s=t.type;if(!t.render){if(!e&&Ac&&!s.render){const i=s.template||el(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=xe(xe({isCustomElement:r,delimiters:a},o),l);s.render=Ac(i,c)}}t.render=s.render||ft}ds(t),ws(),Tg(t),bs(),On()}function Jg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}}))}function Xg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Jg(t)},slots:t.slots,emit:t.emit,expose:e}}function eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fd(qr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function Zg(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function em(t){return G(t)&&"__vccOpts"in t}const Fe=(t,e)=>K_(t,e,li);function il(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!H(e)?dr(e)?V(t,null,[e]):V(t,e):V(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dr(n)&&(n=[n]),V(t,e,n))}const tm=Symbol.for("v-scx"),nm=()=>bt(tm),sm="3.3.4",im="http://www.w3.org/2000/svg",kn=typeof document<"u"?document:null,Pc=kn&&kn.createElement("template"),rm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?kn.createElementNS(im,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Pc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Pc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function om(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function am(t,e,n){const s=t.style,i=Te(n);if(n&&!i){if(e&&!Te(e))for(const r in e)n[r]==null&&oa(s,r,"");for(const r in n)oa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Nc=/\s*!important$/;function oa(t,e,n){if(H(n))n.forEach(s=>oa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lm(t,e);Nc.test(n)?t.setProperty(Es(s),n.replace(Nc,""),"important"):t[s]=n}}const Oc=["Webkit","Moz","ms"],bo={};function lm(t,e){const n=bo[e];if(n)return n;let s=kt(e);if(s!=="filter"&&s in t)return bo[e]=s;s=Vr(s);for(let i=0;i<Oc.length;i++){const r=Oc[i]+s;if(r in t)return bo[e]=r}return e}const Mc="http://www.w3.org/1999/xlink";function cm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mc,e.slice(6,e.length)):t.setAttributeNS(Mc,e,n);else{const r=u_(e);n==null||r&&!gd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function um(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function dm(t,e,n,s){t.addEventListener(e,n,s)}function hm(t,e,n,s){t.removeEventListener(e,n,s)}function fm(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=pm(e);if(s){const c=r[e]=mm(s,i);dm(t,a,c,l)}else o&&(hm(t,a,o,l),r[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function pm(t){let e;if(Dc.test(t)){e={};let s;for(;s=t.match(Dc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Es(t.slice(2)),e]}let Io=0;const _m=Promise.resolve(),gm=()=>Io||(_m.then(()=>Io=0),Io=Date.now());function mm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt(ym(s,n.value),e,5,[s])};return n.value=t,n.attached=gm(),n}function ym(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Lc=/^on[a-z]/,vm=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?om(t,s,i):e==="style"?am(t,n,s):Br(e)?Ua(e)||fm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cm(t,e,s,i))?um(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cm(t,e,s,i))};function Cm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Lc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lc.test(e)&&Te(n)?!1:e in t}function rl(t){const e=uh();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>la(r,i))},s=()=>{const i=t(e.proxy);aa(e.subTree,i),n(i)};og(s),ii(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),ri(()=>i.disconnect())})}function aa(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{aa(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)la(t.el,e);else if(t.type===ke)t.children.forEach(n=>aa(n,e));else if(t.type===er){let{el:n,anchor:s}=t;for(;n&&(la(n,e),n!==s);)n=n.nextSibling}}function la(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const jt="transition",Os="animation",ci=(t,{slots:e})=>il(ug,Em(t),e);ci.displayName="Transition";const fh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ci.props=xe({},Vd,fh);const Cn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fc=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Em(t){const e={};for(const D in t)D in fh||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=wm(i),E=m&&m[0],R=m&&m[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:z,onLeave:M,onLeaveCancelled:Y,onBeforeAppear:_e=A,onAppear:ye=P,onAppearCancelled:N=z}=e,F=(D,ae,Le)=>{En(D,ae?u:a),En(D,ae?c:o),Le&&Le()},K=(D,ae)=>{D._isLeaving=!1,En(D,d),En(D,_),En(D,h),ae&&ae()},he=D=>(ae,Le)=>{const ze=D?ye:P,ne=()=>F(ae,D,Le);Cn(ze,[ae,ne]),Uc(()=>{En(ae,D?l:r),qt(ae,D?u:a),Fc(ze)||$c(ae,s,E,ne)})};return xe(e,{onBeforeEnter(D){Cn(A,[D]),qt(D,r),qt(D,o)},onBeforeAppear(D){Cn(_e,[D]),qt(D,l),qt(D,c)},onEnter:he(!1),onAppear:he(!0),onLeave(D,ae){D._isLeaving=!0;const Le=()=>K(D,ae);qt(D,d),Tm(),qt(D,h),Uc(()=>{D._isLeaving&&(En(D,d),qt(D,_),Fc(M)||$c(D,s,R,Le))}),Cn(M,[D,Le])},onEnterCancelled(D){F(D,!1),Cn(z,[D])},onAppearCancelled(D){F(D,!0),Cn(N,[D])},onLeaveCancelled(D){K(D),Cn(Y,[D])}})}function wm(t){if(t==null)return null;if(Ee(t))return[To(t.enter),To(t.leave)];{const e=To(t);return[e,e]}}function To(t){return i_(t)}function qt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function En(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Uc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bm=0;function $c(t,e,n,s){const i=t._endId=++bm,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Im(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=_=>{_.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Im(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${jt}Delay`),r=s(`${jt}Duration`),o=Wc(i,r),a=s(`${Os}Delay`),l=s(`${Os}Duration`),c=Wc(a,l);let u=null,d=0,h=0;e===jt?o>0&&(u=jt,d=o,h=r.length):e===Os?c>0&&(u=Os,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?jt:Os:null,h=u?u===jt?r.length:l.length:0);const _=u===jt&&/\b(transform|all)(,|$)/.test(s(`${jt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:_}}function Wc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Bc(n)+Bc(t[s])))}function Bc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Tm(){return document.body.offsetHeight}const ca={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ms(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ms(t,!0),s.enter(t)):s.leave(t,()=>{Ms(t,!1)}):Ms(t,e))},beforeUnmount(t,{value:e}){Ms(t,e)}};function Ms(t,e){t.style.display=e?t._vod:"none"}const Sm=xe({patchProp:vm},rm);let Hc;function km(){return Hc||(Hc=Ug(Sm))}const xm=(...t)=>{const e=km().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Rm(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Rm(t){return Te(t)?document.querySelector(t):t}var Am=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ph;const Ri=t=>ph=t,_h=Symbol();function ua(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ks||(Ks={}));function Pm(){const t=vd(!0),e=t.run(()=>nt({}));let n=[],s=[];const i=qr({install(r){Ri(i),i._a=r,r.provide(_h,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Am?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const gh=()=>{};function zc(t,e,n,s=gh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Cd()&&h_(i),i}function Qn(t,...e){t.slice().forEach(n=>{n(...e)})}const Nm=t=>t();function da(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ua(i)&&ua(s)&&t.hasOwnProperty(n)&&!Ie(s)&&!sn(s)?t[n]=da(i,s):t[n]=s}return t}const Om=Symbol();function Mm(t){return!ua(t)||!t.hasOwnProperty(Om)}const{assign:Yt}=Object;function Dm(t){return!!(Ie(t)&&t.effect)}function Lm(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=z_(n.state.value[t]);return Yt(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=qr(Fe(()=>{Ri(n);const _=n._s.get(t);return o[h].call(_,_)})),d),{}))}return l=mh(t,c,e,n,s,!0),l}function mh(t,e,n={},s,i,r){let o;const a=Yt({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),nt({});let E;function R(N){let F;c=u=!1,typeof N=="function"?(N(s.state.value[t]),F={type:Ks.patchFunction,storeId:t,events:_}):(da(s.state.value[t],N),F={type:Ks.patchObject,payload:N,storeId:t,events:_});const K=E=Symbol();Qa().then(()=>{E===K&&(c=!0)}),u=!0,Qn(d,F,s.state.value[t])}const A=r?function(){const{state:F}=n,K=F?F():{};this.$patch(he=>{Yt(he,K)})}:gh;function P(){o.stop(),d=[],h=[],s._s.delete(t)}function z(N,F){return function(){Ri(s);const K=Array.from(arguments),he=[],D=[];function ae(ne){he.push(ne)}function Le(ne){D.push(ne)}Qn(h,{args:K,name:N,store:Y,after:ae,onError:Le});let ze;try{ze=F.apply(this&&this.$id===t?this:Y,K)}catch(ne){throw Qn(D,ne),ne}return ze instanceof Promise?ze.then(ne=>(Qn(he,ne),ne)).catch(ne=>(Qn(D,ne),Promise.reject(ne))):(Qn(he,ze),ze)}}const M={_p:s,$id:t,$onAction:zc.bind(null,h),$patch:R,$reset:A,$subscribe(N,F={}){const K=zc(d,N,F.detached,()=>he()),he=o.run(()=>Nn(()=>s.state.value[t],D=>{(F.flush==="sync"?u:c)&&N({storeId:t,type:Ks.direct,events:_},D)},Yt({},l,F)));return K},$dispose:P},Y=Si(M);s._s.set(t,Y);const _e=s._a&&s._a.runWithContext||Nm,ye=s._e.run(()=>(o=vd(),_e(()=>o.run(e))));for(const N in ye){const F=ye[N];if(Ie(F)&&!Dm(F)||sn(F))r||(m&&Mm(F)&&(Ie(F)?F.value=m[N]:da(F,m[N])),s.state.value[t][N]=F);else if(typeof F=="function"){const K=z(N,F);ye[N]=K,a.actions[N]=F}}return Yt(Y,ye),Yt(se(Y),ye),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:N=>{R(F=>{Yt(F,N)})}}),s._p.forEach(N=>{Yt(Y,o.run(()=>N({store:Y,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(Y.$state,m),c=!0,u=!0,Y}function Fm(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Ng();return a=a||(c?bt(_h,null):null),a&&Ri(a),a=ph,a._s.has(s)||(r?mh(s,e,i,a):Lm(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xn=typeof window<"u";function Um(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function So(t,e){const n={};for(const s in e){const i=e[s];n[s]=gt(i)?i.map(t):t(i)}return n}const Gs=()=>{},gt=Array.isArray,$m=/\/$/,Wm=t=>t.replace($m,"");function ko(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Vm(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Bm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hm(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hs(e.matched[s],n.matched[i])&&yh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zm(t[n],e[n]))return!1;return!0}function zm(t,e){return gt(t)?Vc(t,e):gt(e)?Vc(e,t):t===e}function Vc(t,e){return gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Vm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hr||(hr={}));const xo="";function jm(t){if(!t)if(Xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wm(t)}const qm=/^[^#]+#/;function Km(t,e){return t.replace(qm,"#")+e}function Gm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ym=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Gm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jc(t,e){return(history.state?history.state.position-e:-1)+t}const ha=new Map;function Jm(t,e){ha.set(t,e)}function Xm(t){const e=ha.get(t);return ha.delete(t),e}function Zm(t=""){let e=[],n=[xo],s=0;t=jm(t);function i(a){s++,s===n.length||n.splice(s),n.push(a)}function r(a,l,{direction:c,delta:u}){const d={direction:c,delta:u,type:ui.pop};for(const h of e)h(a,l,d)}const o={location:xo,state:{},base:t,createHref:Km.bind(null,t),replace(a){n.splice(s--,1),i(a)},push(a,l){i(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[xo],s=0},go(a,l=!0){const c=this.location,u=a<0?hr.back:hr.forward;s=Math.max(0,Math.min(s+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[s]}),o}function e1(t){return typeof t=="string"||t&&typeof t=="object"}function vh(t){return typeof t=="string"||typeof t=="symbol"}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ch=Symbol("");var qc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qc||(qc={}));function fs(t,e){return we(new Error,{type:t,[Ch]:!0},e)}function Pt(t,e){return t instanceof Error&&Ch in t&&(e==null||!!(t.type&e))}const Kc="[^/]+?",t1={sensitive:!1,strict:!1,start:!0,end:!0},n1=/[.+*?^${}()[\]/\\]/g;function s1(t,e){const n=we({},t1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let _=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(n1,"\\$&"),_+=40;else if(h.type===1){const{value:m,repeatable:E,optional:R,regexp:A}=h;r.push({name:m,repeatable:E,optional:R});const P=A||Kc;if(P!==Kc){_+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+M.message)}}let z=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(z=R&&c.length<2?`(?:/${z})`:"/"+z),R&&(z+="?"),i+=z,_+=20,R&&(_+=-8),E&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const _=u[h]||"",m=r[h-1];d[m.name]=_&&m.repeatable?_.split("/"):_}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const _ of h)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:E,optional:R}=_,A=m in c?c[m]:"";if(gt(A)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=gt(A)?A.join("/"):A;if(!P)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function i1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function r1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=i1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Gc(s))return 1;if(Gc(i))return-1}return i.length-s.length}function Gc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const o1={type:0,value:""},a1=/[a-zA-Z0-9_]/;function l1(t){if(!t)return[[]];if(t==="/")return[[o1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:a1.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function c1(t,e,n){const s=s1(l1(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function u1(t,e){const n=[],s=new Map;e=Jc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const _=!h,m=d1(u);m.aliasOf=h&&h.record;const E=Jc(e,u),R=[m];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of z)R.push(we({},m,{components:h?h.record.components:m.components,path:M,aliasOf:h?h.record:m}))}let A,P;for(const z of R){const{path:M}=z;if(d&&M[0]!=="/"){const Y=d.record.path,_e=Y[Y.length-1]==="/"?"":"/";z.path=d.record.path+(M&&_e+M)}if(A=c1(z,d,E),h?h.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),_&&u.name&&!Qc(A)&&o(u.name)),m.children){const Y=m.children;for(let _e=0;_e<Y.length;_e++)r(Y[_e],A,h&&h.children[_e])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:Gs}function o(u){if(vh(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&r1(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Eh(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Qc(u)&&s.set(u.record.name,u)}function c(u,d){let h,_={},m,E;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw fs(1,{location:u});E=h.record.name,_=we(Yc(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Yc(u.params,h.keys.map(P=>P.name))),m=h.stringify(_)}else if("path"in u)m=u.path,h=n.find(P=>P.re.test(m)),h&&(_=h.parse(m),E=h.record.name);else{if(h=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw fs(1,{location:u,currentLocation:d});E=h.record.name,_=we({},d.params,u.params),m=h.stringify(_)}const R=[];let A=h;for(;A;)R.unshift(A.record),A=A.parent;return{name:E,path:m,params:_,matched:R,meta:f1(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Yc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function d1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:h1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function h1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function f1(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Jc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Eh(t,e){return e.children.some(n=>n===t||Eh(t,n))}const wh=/#/g,p1=/&/g,_1=/\//g,g1=/=/g,m1=/\?/g,bh=/\+/g,y1=/%5B/g,v1=/%5D/g,Ih=/%5E/g,C1=/%60/g,Th=/%7B/g,E1=/%7C/g,Sh=/%7D/g,w1=/%20/g;function ol(t){return encodeURI(""+t).replace(E1,"|").replace(y1,"[").replace(v1,"]")}function b1(t){return ol(t).replace(Th,"{").replace(Sh,"}").replace(Ih,"^")}function fa(t){return ol(t).replace(bh,"%2B").replace(w1,"+").replace(wh,"%23").replace(p1,"%26").replace(C1,"`").replace(Th,"{").replace(Sh,"}").replace(Ih,"^")}function I1(t){return fa(t).replace(g1,"%3D")}function T1(t){return ol(t).replace(wh,"%23").replace(m1,"%3F")}function S1(t){return t==null?"":T1(t).replace(_1,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function k1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(bh," "),o=r.indexOf("="),a=fr(o<0?r:r.slice(0,o)),l=o<0?null:fr(r.slice(o+1));if(a in e){let c=e[a];gt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Xc(t){let e="";for(let n in t){const s=t[n];if(n=I1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(s)?s.map(r=>r&&fa(r)):[s&&fa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function x1(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const R1=Symbol(""),Zc=Symbol(""),al=Symbol(""),kh=Symbol(""),pa=Symbol("");function Ds(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(fs(4,{from:n,to:e})):d instanceof Error?a(d):e1(d)?a(fs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ro(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(A1(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Jt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Um(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Jt(h,n,s,r,o)()}))}}return i}function A1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eu(t){const e=bt(al),n=bt(kh),s=Fe(()=>e.resolve(tt(t.to))),i=Fe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(hs.bind(null,u));if(h>-1)return h;const _=tu(l[c-2]);return c>1&&tu(u)===_&&d[d.length-1].path!==_?d.findIndex(hs.bind(null,l[c-2])):h}),r=Fe(()=>i.value>-1&&M1(n.params,s.value.params)),o=Fe(()=>i.value>-1&&i.value===n.matched.length-1&&yh(n.params,s.value.params));function a(l={}){return O1(l)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(Gs):Promise.resolve()}return{route:s,href:Fe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const P1=Kd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eu,setup(t,{slots:e}){const n=Si(eu(t)),{options:s}=bt(al),i=Fe(()=>({[nu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[nu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:il("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),N1=P1;function O1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function M1(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function tu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nu=(t,e,n)=>t??e??n,D1=Kd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=bt(pa),i=Fe(()=>t.route||s.value),r=bt(Zc,0),o=Fe(()=>{let c=tt(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Fe(()=>i.value.matched[o.value]);Zi(Zc,Fe(()=>o.value+1)),Zi(R1,a),Zi(pa,i);const l=nt();return Nn(()=>[l.value,a.value,t.name],([c,u,d],[h,_,m])=>{u&&(u.instances[d]=c,_&&_!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!hs(u,_)||!h)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return su(n.default,{Component:h,route:c});const _=d.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,R=il(h,we({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return su(n.default,{Component:R,route:c})||R}}});function su(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xh=D1;function L1(t){const e=u1(t.routes,t),n=t.parseQuery||k1,s=t.stringifyQuery||Xc,i=t.history,r=Ds(),o=Ds(),a=Ds(),l=W_(Kt);let c=Kt;Xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=So.bind(null,v=>""+v),d=So.bind(null,S1),h=So.bind(null,fr);function _(v,O){let k,U;return vh(v)?(k=e.getRecordMatcher(v),U=O):U=v,e.addRoute(U,k)}function m(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(v=>v.record)}function R(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=we({},O||l.value),typeof v=="string"){const g=ko(n,v,O.path),y=e.resolve({path:g.path},O),C=i.createHref(g.fullPath);return we(g,y,{params:h(y.params),hash:fr(g.hash),redirectedFrom:void 0,href:C})}let k;if("path"in v)k=we({},v,{path:ko(n,v.path,O.path).path});else{const g=we({},v.params);for(const y in g)g[y]==null&&delete g[y];k=we({},v,{params:d(g)}),O.params=d(O.params)}const U=e.resolve(k,O),ce=v.hash||"";U.params=u(h(U.params));const f=Bm(s,we({},v,{hash:b1(ce),path:U.path})),p=i.createHref(f);return we({fullPath:f,hash:ce,query:s===Xc?x1(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function P(v){return typeof v=="string"?ko(n,v,l.value.path):we({},v)}function z(v,O){if(c!==v)return fs(8,{from:O,to:v})}function M(v){return ye(v)}function Y(v){return M(we(P(v),{replace:!0}))}function _e(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:k}=O;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),we({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ye(v,O){const k=c=A(v),U=l.value,ce=v.state,f=v.force,p=v.replace===!0,g=_e(k);if(g)return ye(we(P(g),{state:typeof g=="object"?we({},ce,g.state):ce,force:f,replace:p}),O||k);const y=k;y.redirectedFrom=O;let C;return!f&&Hm(s,U,k)&&(C=fs(16,{to:y,from:U}),yt(U,U,!0,!1)),(C?Promise.resolve(C):K(y,U)).catch(w=>Pt(w)?Pt(w,2)?w:zt(w):le(w,y,U)).then(w=>{if(w){if(Pt(w,2))return ye(we({replace:p},P(w.to),{state:typeof w.to=="object"?we({},ce,w.to.state):ce,force:f}),O||y)}else w=D(y,U,!0,p,ce);return he(y,U,w),w})}function N(v,O){const k=z(v,O);return k?Promise.reject(k):Promise.resolve()}function F(v){const O=Kn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function K(v,O){let k;const[U,ce,f]=F1(v,O);k=Ro(U.reverse(),"beforeRouteLeave",v,O);for(const g of U)g.leaveGuards.forEach(y=>{k.push(Jt(y,v,O))});const p=N.bind(null,v,O);return k.push(p),Ue(k).then(()=>{k=[];for(const g of r.list())k.push(Jt(g,v,O));return k.push(p),Ue(k)}).then(()=>{k=Ro(ce,"beforeRouteUpdate",v,O);for(const g of ce)g.updateGuards.forEach(y=>{k.push(Jt(y,v,O))});return k.push(p),Ue(k)}).then(()=>{k=[];for(const g of f)if(g.beforeEnter)if(gt(g.beforeEnter))for(const y of g.beforeEnter)k.push(Jt(y,v,O));else k.push(Jt(g.beforeEnter,v,O));return k.push(p),Ue(k)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),k=Ro(f,"beforeRouteEnter",v,O),k.push(p),Ue(k))).then(()=>{k=[];for(const g of o.list())k.push(Jt(g,v,O));return k.push(p),Ue(k)}).catch(g=>Pt(g,8)?g:Promise.reject(g))}function he(v,O,k){a.list().forEach(U=>F(()=>U(v,O,k)))}function D(v,O,k,U,ce){const f=z(v,O);if(f)return f;const p=O===Kt,g=Xn?history.state:{};k&&(U||p?i.replace(v.fullPath,we({scroll:p&&g&&g.scroll},ce)):i.push(v.fullPath,ce)),l.value=v,yt(v,O,k,p),zt()}let ae;function Le(){ae||(ae=i.listen((v,O,k)=>{if(!Hi.listening)return;const U=A(v),ce=_e(U);if(ce){ye(we(ce,{replace:!0}),U).catch(Gs);return}c=U;const f=l.value;Xn&&Jm(jc(f.fullPath,k.delta),Ym()),K(U,f).catch(p=>Pt(p,12)?p:Pt(p,2)?(ye(p.to,U).then(g=>{Pt(g,20)&&!k.delta&&k.type===ui.pop&&i.go(-1,!1)}).catch(Gs),Promise.reject()):(k.delta&&i.go(-k.delta,!1),le(p,U,f))).then(p=>{p=p||D(U,f,!1),p&&(k.delta&&!Pt(p,8)?i.go(-k.delta,!1):k.type===ui.pop&&Pt(p,20)&&i.go(-1,!1)),he(U,f,p)}).catch(Gs)}))}let ze=Ds(),ne=Ds(),fe;function le(v,O,k){zt(v);const U=ne.list();return U.length?U.forEach(ce=>ce(v,O,k)):console.error(v),Promise.reject(v)}function At(){return fe&&l.value!==Kt?Promise.resolve():new Promise((v,O)=>{ze.add([v,O])})}function zt(v){return fe||(fe=!v,Le(),ze.list().forEach(([O,k])=>v?k(v):O()),ze.reset()),v}function yt(v,O,k,U){const{scrollBehavior:ce}=t;if(!Xn||!ce)return Promise.resolve();const f=!k&&Xm(jc(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return Qa().then(()=>ce(v,O,f)).then(p=>p&&Qm(p)).catch(p=>le(p,v,O))}const qe=v=>i.go(v);let qn;const Kn=new Set,Hi={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:E,resolve:A,options:t,push:M,replace:Y,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:At,install(v){const O=this;v.component("RouterLink",N1),v.component("RouterView",xh),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),Xn&&!qn&&l.value===Kt&&(qn=!0,M(i.location).catch(ce=>{}));const k={};for(const ce in Kt)Object.defineProperty(k,ce,{get:()=>l.value[ce],enumerable:!0});v.provide(al,O),v.provide(kh,Pd(k)),v.provide(pa,l);const U=v.unmount;Kn.add(v),v.unmount=function(){Kn.delete(v),Kn.size<1&&(c=Kt,ae&&ae(),ae=null,l.value=Kt,qn=!1,fe=!1),U()}}};function Ue(v){return v.reduce((O,k)=>O.then(()=>F(k)),Promise.resolve())}return Hi}function F1(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||i.push(l))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Is(e)},Is=function(t){return new Error("Firebase Database ("+Rh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U1=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),s.push(n[u],n[d],n[h],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ah(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new $1;const h=r<<2|a>>4;if(s.push(h),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ph=function(t){const e=Ah(t);return ll.encodeByteArray(e,!0)},pr=function(t){return Ph(t).replace(/\./g,"")},_r=function(t){try{return ll.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){return Nh(void 0,t)}function Nh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!B1(n)||(t[n]=Nh(t[n],e[n]));return t}function B1(t){return t!=="__proto__"}/**
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
 */function H1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z1=()=>H1().__FIREBASE_DEFAULTS__,V1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},j1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},cl=()=>{try{return z1()||V1()||j1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oh=t=>{var e,n;return(n=(e=cl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q1=t=>{const e=Oh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mh=()=>{var t;return(t=cl())===null||t===void 0?void 0:t.config},Dh=t=>{var e;return(e=cl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function K1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pr(JSON.stringify(n)),pr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ul(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function G1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y1(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fh(){return Rh.NODE_ADMIN===!0}function Q1(){try{return typeof indexedDB=="object"}catch{return!1}}function J1(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="FirebaseError";class mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=X1,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Z1(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,s)}}function Z1(t,e){return t.replace(e0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=di(_r(r[0])||""),n=di(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},t0=function(t){const e=Uh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},n0=function(t){const e=Uh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _a(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(iu(r)&&iu(o)){if(!mr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function iu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function i0(t,e){const n=new r0(t,e);return n.subscribe.bind(n)}class r0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ao),i.error===void 0&&(i.error=Ao),i.complete===void 0&&(i.complete=Ao);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ao(){}function dl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},no=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class l0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new to;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(u0(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:c0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function c0(t){return t===wn?void 0:t}function u0(t){return t.instantiationMode==="EAGER"}/**
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
 */class d0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const h0={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},f0=de.INFO,p0={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},_0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=p0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=f0,this._logHandler=_0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const g0=(t,e)=>e.some(n=>t instanceof n);let ru,ou;function m0(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y0(){return ou||(ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,ga=new WeakMap,Wh=new WeakMap,Po=new WeakMap,fl=new WeakMap;function v0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(on(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$h.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function C0(t){if(ga.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ga.set(t,e)}let ma={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E0(t){ma=t(ma)}function w0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return Wh.set(s,e.sort?e.sort():[e]),on(s)}:y0().includes(t)?function(...e){return t.apply(No(this),e),on($h.get(this))}:function(...e){return on(t.apply(No(this),e))}}function b0(t){return typeof t=="function"?w0(t):(t instanceof IDBTransaction&&C0(t),g0(t,m0())?new Proxy(t,ma):t)}function on(t){if(t instanceof IDBRequest)return v0(t);if(Po.has(t))return Po.get(t);const e=b0(t);return e!==t&&(Po.set(t,e),fl.set(e,t)),e}const No=t=>fl.get(t);function I0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=on(o);return s&&o.addEventListener("upgradeneeded",l=>{s(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const T0=["get","getKey","getAll","getAllKeys","count"],S0=["put","add","delete","clear"],Oo=new Map;function au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=S0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||T0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Oo.set(e,r),r}E0(t=>({...t,get:(e,n,s)=>au(e,n)||t.get(e,n,s),has:(e,n)=>!!au(e,n)||t.has(e,n)}));/**
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
 */class k0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function x0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",lu="0.9.15";/**
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
 */const $n=new hl("@firebase/app"),R0="@firebase/app-compat",A0="@firebase/analytics-compat",P0="@firebase/analytics",N0="@firebase/app-check-compat",O0="@firebase/app-check",M0="@firebase/auth",D0="@firebase/auth-compat",L0="@firebase/database",F0="@firebase/database-compat",U0="@firebase/functions",$0="@firebase/functions-compat",W0="@firebase/installations",B0="@firebase/installations-compat",H0="@firebase/messaging",z0="@firebase/messaging-compat",V0="@firebase/performance",j0="@firebase/performance-compat",q0="@firebase/remote-config",K0="@firebase/remote-config-compat",G0="@firebase/storage",Y0="@firebase/storage-compat",Q0="@firebase/firestore",J0="@firebase/firestore-compat",X0="firebase",Z0="10.1.0";/**
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
 */const va="[DEFAULT]",ey={[ya]:"fire-core",[R0]:"fire-core-compat",[P0]:"fire-analytics",[A0]:"fire-analytics-compat",[O0]:"fire-app-check",[N0]:"fire-app-check-compat",[M0]:"fire-auth",[D0]:"fire-auth-compat",[L0]:"fire-rtdb",[F0]:"fire-rtdb-compat",[U0]:"fire-fn",[$0]:"fire-fn-compat",[W0]:"fire-iid",[B0]:"fire-iid-compat",[H0]:"fire-fcm",[z0]:"fire-fcm-compat",[V0]:"fire-perf",[j0]:"fire-perf-compat",[q0]:"fire-rc",[K0]:"fire-rc-compat",[G0]:"fire-gcs",[Y0]:"fire-gcs-compat",[Q0]:"fire-fst",[J0]:"fire-fst-compat","fire-js":"fire-js",[X0]:"fire-js-all"};/**
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
 */const yr=new Map,Ca=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Ca.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Ca.set(e,t);for(const n of yr.values())ty(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ny={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new Ai("app","Firebase",ny);/**
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
 */class sy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=Z0;function Bh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:va,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Mh()),!n)throw an.create("no-options");const r=yr.get(i);if(r){if(mr(n,r.options)&&mr(s,r.config))return r;throw an.create("duplicate-app",{appName:i})}const o=new d0(i);for(const l of Ca.values())o.addComponent(l);const a=new sy(n,s,o);return yr.set(i,a),a}function Hh(t=va){const e=yr.get(t);if(!e&&t===va&&Mh())return Bh();if(!e)throw an.create("no-app",{appName:t});return e}function ln(t,e,n){var s;let i=(s=ey[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}_s(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iy="firebase-heartbeat-database",ry=1,hi="firebase-heartbeat-store";let Mo=null;function zh(){return Mo||(Mo=I0(iy,ry,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Mo}async function oy(t){try{return await(await zh()).transaction(hi).objectStore(hi).get(Vh(t))}catch(e){if(e instanceof mn)$n.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function cu(t,e){try{const s=(await zh()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,Vh(t)),await s.done}catch(n){if(n instanceof mn)$n.warn(n.message);else{const s=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(s.message)}}}function Vh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ay=1024,ly=30*24*60*60*1e3;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ly}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uu(),{heartbeatsToSend:n,unsentEntries:s}=uy(this._heartbeatsCache.heartbeats),i=pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uu(){return new Date().toISOString().substring(0,10)}function uy(t,e=ay){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q1()?J1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function du(t){return pr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hy(t){_s(new Un("platform-logger",e=>new k0(e),"PRIVATE")),_s(new Un("heartbeat",e=>new cy(e),"PRIVATE")),ln(ya,lu,t),ln(ya,lu,"esm2017"),ln("fire-js","")}hy("");var fy="firebase",py="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(fy,py,"app");const _y={apiKey:"AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",authDomain:"artridge-website.firebaseapp.com",databaseURL:"https://artridge-website.firebaseio.com",projectId:"artridge-website",storageBucket:"artridge-website.appspot.com",messagingSenderId:"554359864126",appId:"1:554359864126:web:56901925bba81278fb0a6f",measurementId:"G-0KJBNGLJL4"},jh=Bh(_y);function _l(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gy=qh,Kh=new Ai("auth","Firebase",qh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new hl("@firebase/auth");function my(t,...e){vr.logLevel<=de.WARN&&vr.warn(`Auth (${Ss}): ${t}`,...e)}function nr(t,...e){vr.logLevel<=de.ERROR&&vr.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw gl(t,...e)}function Tt(t,...e){return gl(t,...e)}function yy(t,e,n){const s=Object.assign(Object.assign({},gy()),{[e]:n});return new Ai("auth","Firebase",s).create(e,{appName:t.name})}function gl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Kh.create(t,...e)}function j(t,e,...n){if(!t)throw gl(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function Ut(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vy(){return hu()==="http:"||hu()==="https:"}function hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vy()||G1()||"connection"in navigator)?navigator.onLine:!0}function Ey(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=ul()||Lh()}get(){return Cy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Pi(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,s,i={}){return Yh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ts(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Gh.fetch()(Qh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Yh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wy),e);try{const i=new Iy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yy(t,u,c);mt(t,u)}}catch(i){if(i instanceof mn)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function so(t,e,n,s,i={}){const r=await ks(t,e,n,s,i);return"mfaPendingCredential"in r&&mt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Qh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ml(t.config,i):`${t.config.apiScheme}://${i}`}class Iy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Tt(this.auth,"network-request-failed")),by.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Tt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function Sy(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ky(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),i=yl(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ys(Do(i.auth_time)),issuedAtTime:Ys(Do(i.iat)),expirationTime:Ys(Do(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Do(t){return Number(t)*1e3}function yl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(n);return i?JSON.parse(i):(nr("Failed to decode base64 JWT payload"),null)}catch(i){return nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xy(t){const e=yl(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof mn&&Ry(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ry({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await fi(t,Sy(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Oy(r.providerUserInfo):[],a=Ny(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Jh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Py(t){const e=Xe(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ny(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Oy(t){return t.map(e=>{var{providerId:n}=e,s=_l(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(t,e){const n=await Yh(t,{},async()=>{const s=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Qh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await My(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pi;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=_l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Jh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ky(this,e)}reload(){return Py(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fi(this,Ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:Y,providerData:_e,stsTokenManager:ye}=n;j(z&&ye,e,"internal-error");const N=pi.fromJSON(this.name,ye);j(typeof z=="string",e,"internal-error"),Gt(d,e.name),Gt(h,e.name),j(typeof M=="boolean",e,"internal-error"),j(typeof Y=="boolean",e,"internal-error"),Gt(_,e.name),Gt(m,e.name),Gt(E,e.name),Gt(R,e.name),Gt(A,e.name),Gt(P,e.name);const F=new Mn({uid:z,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:Y,photoURL:m,phoneNumber:_,tenantId:E,stsTokenManager:N,createdAt:A,lastLoginAt:P});return _e&&Array.isArray(_e)&&(F.providerData=_e.map(K=>Object.assign({},K))),R&&(F._redirectEventId=R),F}static async _fromIdTokenResponse(e,n,s=!1){const i=new pi;i.updateFromServerResponse(n);const r=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Cr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map;function Mt(t){Ut(t instanceof Function,"Expected a class definition");let e=fu.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fu.set(t,e),e)}/**
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
 */class Xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xh.type="NONE";const pu=Xh;/**
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
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=sr(this.userKey,i.apiKey,r),this.fullPersistenceKey=sr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new rs(Mt(pu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Mt(pu);const o=sr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Mn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new rs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new rs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(rf(e))return"Webos";if(vl(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(nf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zh(t=Be()){return/firefox\//i.test(t)}function vl(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(t=Be()){return/crios\//i.test(t)}function tf(t=Be()){return/iemobile/i.test(t)}function nf(t=Be()){return/android/i.test(t)}function sf(t=Be()){return/blackberry/i.test(t)}function rf(t=Be()){return/webos/i.test(t)}function io(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dy(t=Be()){var e;return io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ly(){return Y1()&&document.documentMode===10}function of(t=Be()){return io(t)||nf(t)||rf(t)||sf(t)||/windows phone/i.test(t)||tf(t)}function Fy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e=[]){let n;switch(t){case"Browser":n=_u(Be());break;case"Worker":n=`${_u(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${s}`}async function lf(t,e){return ks(t,"GET","/v2/recaptchaConfig",Ni(t,e))}function gu(t){return t!==void 0&&t.enterprise!==void 0}class cf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Tt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Uy().appendChild(s)})}function $y(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Wy="https://www.google.com/recaptcha/enterprise.js?render=",By="recaptcha-enterprise",Hy="NO_RECAPTCHA";class df{constructor(e){this.type=By,this.auth=Oi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{lf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new cf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;gu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Hy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&gu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uf(Wy+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function mu(t,e,n,s=!1){const i=new df(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class zy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yu(this),this.idTokenSubscription=new yu(this),this.beforeStateQueue=new zy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}async initializeRecaptchaConfig(){const e=await lf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new cf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new df(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&my(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Xe(t)}class yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=i0(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t,e){const n=pl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(mr(r,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function qy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ky(t,e,n){const s=Oi(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=hf(e),{host:o,port:a}=Gy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Yy()}function hf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gy(t){const e=hf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:vu(o)}}}function vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function Qy(t,e){return ks(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}async function Xy(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Cl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new _i(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await mu(e,s,"signInWithPassword");return Lo(e,i)}else return Lo(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await mu(e,s,"signInWithPassword");return Lo(e,r)}else return Promise.reject(i)});case"emailLink":return Jy(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xy(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="http://localhost";class Wn extends Cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=_l(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,os(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:Zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ts(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tv(t){const e=Hs(zs(t)).link,n=e?Hs(zs(e)).deep_link_id:null,s=Hs(zs(t)).deep_link_id;return(s?Hs(zs(s)).link:null)||s||n||e||t}class El{constructor(e){var n,s,i,r,o,a;const l=Hs(zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=ev((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tv(e);try{return new El(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=El.parseLink(n);return j(s,"argument-error"),_i._fromEmailAndCode(e,s.code,s.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Mi{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Mi{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Mn._fromIdTokenResponse(e,s,i),o=Cu(s);return new gs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Cu(s);return new gs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Cu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends mn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Er(e,n,s,i)}}function pf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,r,e,s):r})}async function nv(t,e,n=!1){const s=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",s)}/**
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
 */async function sv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await fi(t,pf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=yl(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),gs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(t,e,n=!1){const s="signIn",i=await pf(t,s,e),r=await gs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function iv(t,e){return _f(Oi(t),e)}function rv(t,e,n){return iv(Xe(t),xs.credential(e,n))}function ov(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function av(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function lv(t,e,n,s){return Xe(t).onAuthStateChanged(e,n,s)}const wr="__sak";/**
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
 */class gf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(){const t=Be();return vl(t)||io(t)}const uv=1e3,dv=10;class mf extends gf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cv()&&Fy(),this.fallbackToPolling=of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ly()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mf.type="LOCAL";const hv=mf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends gf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yf.type="SESSION";const vf=yf;/**
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
 */function fv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await fv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=wl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function _v(t){St().location.href=t}/**
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
 */function Cf(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function gv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yv(){return Cf()?self:null}/**
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
 */const Ef="firebaseLocalStorageDb",vv=1,br="firebaseLocalStorage",wf="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oo(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function Cv(){const t=indexedDB.deleteDatabase(Ef);return new Di(t).toPromise()}function wa(){const t=indexedDB.open(Ef,vv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(br,{keyPath:wf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(br)?e(s):(s.close(),await Cv(),e(await wa()))})})}async function Eu(t,e,n){const s=oo(t,!0).put({[wf]:e,value:n});return new Di(s).toPromise()}async function Ev(t,e){const n=oo(t,!1).get(e),s=await new Di(n).toPromise();return s===void 0?null:s.value}function wu(t,e){const n=oo(t,!0).delete(e);return new Di(n).toPromise()}const wv=800,bv=3;class bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(yv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gv(),!this.activeServiceWorker)return;this.sender=new pv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await Eu(e,wr,"1"),await wu(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ev(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=oo(i,!1).getAll();return new Di(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bf.type="LOCAL";const Iv=bf;new Pi(3e4,6e4);/**
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
 */function Tv(t,e){return e?Mt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bl extends Cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sv(t){return _f(t.auth,new bl(t),t.bypassAuthState)}function kv(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),sv(n,new bl(t),t.bypassAuthState)}async function xv(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),nv(n,new bl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sv;case"linkViaPopup":case"linkViaRedirect":return xv;case"reauthViaPopup":case"reauthViaRedirect":return kv;default:mt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Pi(2e3,1e4);class Zn extends If{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=wl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rv.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="pendingRedirect",ir=new Map;class Pv extends If{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const s=await Nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nv(t,e){const n=Dv(e),s=Mv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Ov(t,e){ir.set(t._key(),e)}function Mv(t){return Mt(t._redirectPersistence)}function Dv(t){return sr(Av,t.config.apiKey,t.name)}async function Lv(t,e,n=!1){const s=Oi(t),i=Tv(s,e),o=await new Pv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=10*60*1e3;class Uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$v(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fv&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(e))}saveEventToCache(e){this.cachedEventUids.add(bu(e)),this.lastProcessedEventTime=Date.now()}}function bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $v(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hv=/^https?/;async function zv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wv(t);for(const n of e)try{if(Vv(n))return}catch{}mt(t,"unauthorized-domain")}function Vv(t){const e=Ea(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hv.test(n))return!1;if(Bv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const jv=new Pi(3e4,6e4);function Iu(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qv(t){return new Promise((e,n)=>{var s,i,r;function o(){Iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iu(),n(Tt(t,"network-request-failed"))},timeout:jv.get()})}if(!((i=(s=St().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=St().gapi)===null||r===void 0)&&r.load)o();else{const a=$y("iframefcb");return St()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},uf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw rr=null,e})}let rr=null;function Kv(t){return rr=rr||qv(t),rr}/**
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
 */const Gv=new Pi(5e3,15e3),Yv="__/auth/iframe",Qv="emulator/auth/iframe",Jv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zv(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ml(e,Qv):`https://${t.config.authDomain}/${Yv}`,s={apiKey:e.apiKey,appName:t.name,v:Ss},i=Xv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ts(s).slice(1)}`}async function e2(t){const e=await Kv(t),n=St().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Zv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=St().setTimeout(()=>{r(o)},Gv.get());function l(){St().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const t2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n2=500,s2=600,i2="_blank",r2="http://localhost";class Tu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o2(t,e,n,s=n2,i=s2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},t2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Be().toLowerCase();n&&(a=ef(c)?i2:n),Zh(c)&&(e=e||r2,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,m])=>`${h}${_}=${m},`,"");if(Dy(c)&&a!=="_self")return a2(e||"",a),new Tu(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Tu(d)}function a2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const l2="__/auth/handler",c2="emulator/auth/handler",u2=encodeURIComponent("fac");async function Su(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ss,eventId:i};if(e instanceof ff){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_a(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Mi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${u2}=${encodeURIComponent(l)}`:"";return`${d2(t)}?${Ts(a).slice(1)}${c}`}function d2({config:t}){return t.emulator?ml(t,c2):`https://${t.authDomain}/${l2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="webStorageSupport";class h2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=Lv,this._overrideRedirectResult=Ov}async _openPopup(e,n,s,i){var r;Ut((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Su(e,n,s,Ea(),i);return o2(e,o,wl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Su(e,n,s,Ea(),i);return _v(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await e2(e),s=new Uv(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fo,{type:Fo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Fo];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return of()||vl()||io()}}const f2=h2;var ku="@firebase/auth",xu="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function g2(t){_s(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(t)},c=new Vy(s,i,r,l);return qy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Un("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(s=>new p2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(ku,xu,_2(t)),ln(ku,xu,"esm2017")}/**
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
 */const m2=5*60,y2=Dh("authIdTokenMaxAge")||m2;let Ru=null;const v2=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>y2)return;const i=n==null?void 0:n.token;Ru!==i&&(Ru=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C2(t=Hh()){const e=pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jy(t,{popupRedirectResolver:f2,persistence:[Iv,hv,vf]}),s=Dh("authTokenSyncURL");if(s){const r=v2(s);av(n,r,()=>r(n.currentUser)),ov(n,o=>r(o))}const i=Oh("auth");return i&&Ky(n,`http://${i}`),n}g2("Browser");const Il=C2(jh),Ir=nt({}),bn=nt({});lv(Il,async t=>{if(t){Ir.value=t,bn.value=await Ow(`users/${t.uid}`);for(const{observable:e,path:n}of jp)bn.value["game-data"]&&bn.value["game-data"]["tileswap-naenae"]&&bn.value["game-data"]["tileswap-naenae"][n]&&(e.value=bn.value["game-data"]["tileswap-naenae"][n])}else Ir.value={},bn.value={}});const Tl=Fe(()=>Ir.value);Fe(()=>bn.value);const Sl=Fe(()=>Object.keys(Ir.value).length>0),E2=async(t,e)=>await rv(Il,t,e),ba=async()=>await Il.signOut(),Au="@firebase/database",Pu="1.0.1";/**
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
 */let Sf="";function w2(t){Sf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:di(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b2(e)}}catch{}return new I2},Rn=kf("localStorage"),Ia=kf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new hl("@firebase/database"),T2=function(){let t=1;return function(){return t++}}(),xf=function(t){const e=a0(t),n=new s0;n.update(e);const s=n.digest();return ll.encodeByteArray(s)},Li=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Li.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let Dn=null,Nu=!0;const S2=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(as.logLevel=de.VERBOSE,Dn=as.log.bind(as),e&&Ia.set("logging_enabled",!0)):typeof t=="function"?Dn=t:(Dn=null,Ia.remove("logging_enabled"))},$e=function(...t){if(Nu===!0&&(Nu=!1,Dn===null&&Ia.get("logging_enabled")===!0&&S2(!0)),Dn){const e=Li.apply(null,t);Dn(e)}},Fi=function(t){return function(...e){$e(t,...e)}},Ta=function(...t){const e="FIREBASE INTERNAL ERROR: "+Li(...t);as.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${Li(...t)}`;throw as.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+Li(...t);as.warn(e)},k2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},x2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ms="[MIN_NAME]",Bn="[MAX_NAME]",Rs=function(t,e){if(t===e)return 0;if(t===ms||e===Bn)return-1;if(e===ms||t===Bn)return 1;{const n=Ou(t),s=Ou(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},R2=function(t,e){return t===e?0:t<e?-1:1},Ls=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},kl=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=kl(t[e[s]]);return n+="}",n},Af=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pf=function(t){T(!Rf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},A2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function N2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const O2=new RegExp("^-?(0*)\\d{1,10}$"),M2=-2147483648,D2=2147483647,Ou=function(t){if(O2.test(t)){const e=Number(t);if(e>=M2&&e<=D2)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},L2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class F2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="5",Nf="v",Of="s",Mf="r",Df="f",Lf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ff="ls",Uf="p",Sa="ac",$f="websocket",Wf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Hf(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===$f)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$2(t)&&(n.ns=t.namespace);const i=[];return Je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.counters_={}}incrementCounter(e,n=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return W1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={},$o={};function Rl(t){const e=t.toString();return Uo[e]||(Uo[e]=new W2),Uo[e]}function B2(t,e){const n=t.toString();return $o[n]||($o[n]=e()),$o[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&As(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="start",z2="close",V2="pLPCommand",j2="pRTLPCB",zf="id",Vf="pw",jf="ser",q2="cb",K2="seg",G2="ts",Y2="d",Q2="dframe",qf=1870,Kf=30,J2=qf-Kf,X2=25e3,Z2=3e4;class es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fi(e),this.stats_=Rl(n),this.urlFn=l=>(this.appCheckToken&&(l[Sa]=this.appCheckToken),Hf(n,Wf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new H2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z2)),x2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Al((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mu)this.id=a,this.password=l;else if(o===z2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Mu]="t",s[jf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[q2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nf]=xl,this.transportSessionId&&(s[Of]=this.transportSessionId),this.lastSessionId&&(s[Ff]=this.lastSessionId),this.applicationId&&(s[Uf]=this.applicationId),this.appCheckToken&&(s[Sa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lf.test(location.hostname)&&(s[Mf]=Df);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!A2()&&!P2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ph(n),i=Af(s,J2);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q2]="t",s[zf]=e,s[Vf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Al{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T2(),window[V2+this.uniqueCallbackIdentifier]=e,window[j2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Al.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zf]=this.myID,e[Vf]=this.myPW,e[jf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kf+s.length<=qf;){const o=this.pendingSegs.shift();s=s+"&"+K2+i+"="+o.seg+"&"+G2+i+"="+o.ts+"&"+Y2+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(X2)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=16384,tC=45e3;let Tr=null;typeof MozWebSocket<"u"?Tr=MozWebSocket:typeof WebSocket<"u"&&(Tr=WebSocket);class ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fi(this.connId),this.stats_=Rl(n),this.connURL=ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Nf]=xl,typeof location<"u"&&location.hostname&&Lf.test(location.hostname)&&(o[Mf]=Df),n&&(o[Of]=n),s&&(o[Ff]=s),i&&(o[Sa]=i),r&&(o[Uf]=r),Hf(e,$f,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rn.set("previous_websocket_failure",!0);try{let s;Fh(),this.mySock=new Tr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tr!==null&&!ct.forceDisallow_}static previouslyFailed(){return Rn.isInMemoryStorage||Rn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=di(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Af(n,eC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let s=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ct];else{const i=this.transports_=[];for(const r of gi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=6e4,sC=5e3,iC=10*1024,rC=100*1024,Wo="t",Du="d",oC="s",Lu="r",aC="e",Fu="o",Uu="a",$u="n",Wu="p",lC="h";class cC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fi("c:"+this.id+":"),this.transportManager_=new gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wo in e){const n=e[Wo];n===Uu?this.upgradeIfSecondaryHealthy_():n===Lu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$u,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ls(Wo,e);if(Du in e){const s=e[Du];if(n===lC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$u){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oC?this.onConnectionShutdown_(s):n===Lu?this.onReset_(s):n===aC?Ta("Server Error: "+s):n===Fu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ta("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xl!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Yf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ul()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=32,Hu=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new pe("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Qf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new pe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=ee(t),s=ee(e);if(n===null)return e;if(n===s)return je(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zf(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dC{constructor(e,n){this.errorPrefix_=n,this.parts_=Jf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=no(this.parts_[s]);ep(this)}}function hC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=no(e),ep(t)}function fC(t){const e=t.parts_.pop();t.byteLength_-=no(e),t.parts_.length>0&&(t.byteLength_-=1)}function ep(t){if(t.byteLength_>Hu)throw new Error(t.errorPrefix_+"has a key path longer than "+Hu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bu+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Yf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Pl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=1e3,pC=60*5*1e3,zu=30*1e3,_C=1.3,gC=3e4,mC="server_kill",Vu=3;class Lt extends Gf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=Fi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=pC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new to,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Lt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bt(e,"w")){const s=ps(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||n0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=t0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ta("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gC&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new cC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ye(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),l())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_a(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>kl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vu&&(this.reconnectDelay_=zu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sf.replace(/\./g,"-")]=1,ul()?e["framework.cordova"]=1:Lh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return _a(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(ms,e),i=new J(ms,n);return this.compare(s,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class tp extends ao{static get __EMPTY_NODE(){return Qi}static set __EMPTY_NODE(e){Qi=e}compare(e,n){return Rs(e.name,n.name)}isDefinedOn(e){throw Is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(Bn,Qi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Qi)}toString(){return".key"}}const cs=new tp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Oe.RED,this.left=i??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,n,s,i,r){return new Oe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class yC{copy(e,n,s,i,r){return this}insert(e,n,s){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ji(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ji(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ji(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ji(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e){return Rs(t.name,e.name)}function Nl(t,e){return Rs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;function CC(t){ka=t}const np=function(t){return typeof t=="number"?"number:"+Pf(t):"string:"+t},sp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else T(t===ka||t.isEmpty(),"priority of unexpected type.");T(t===ka||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sp(this.priorityNode_)}static set __childrenNodeConstructor(e){ju=e}static get __childrenNodeConstructor(){return ju}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:ee(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+np(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pf(this.value_):e+=this.value_,this.lazyHash_=xf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip,rp;function EC(t){ip=t}function wC(t){rp=t}class bC extends ao{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Rs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(Bn,new Ne("[PRIORITY-POST]",rp))}makePost(e,n){const s=ip(e);return new J(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=Math.log(2);class TC{constructor(e){const n=r=>parseInt(Math.log(r)/IC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Oe(h,d.node,Oe.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),E=i(_+1,c);return d=t[_],h=n?n(d):d,new Oe(h,d.node,Oe.BLACK,m,E)}},r=function(l){let c=null,u=null,d=t.length;const h=function(m,E){const R=d-m,A=d;d-=m;const P=i(R+1,A),z=t[R],M=n?n(z):z;_(new Oe(M,z.node,E,null,P))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),R=Math.pow(2,l.count-(m+1));E?h(R,Oe.BLACK):(h(R,Oe.BLACK),h(R,Oe.RED))}return u},o=new TC(t.length),a=r(o);return new Ge(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;const Jn={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Jn&&be,"ChildrenNode.ts has not been loaded"),Bo=Bo||new Dt({".priority":Jn},{".priority":be}),Bo}get(e){const n=ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(J.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=kr(s,e.getCompare()):a=Jn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Dt(u,c)}addToIndexes(e,n){const s=gr(this.indexes_,(i,r)=>{const o=ps(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Jn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kr(a,o.getCompare())}else return Jn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=gr(this.indexes_,i=>{if(i===Jn)return i;{const r=n.get(e.name);return r?i.remove(new J(e.name,r)):i}});return new Dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new B(new Ge(Nl),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Us:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{T(ee(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(me(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(be,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+np(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new J(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ui?-1:0}withIndex(e){if(e===cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),i=n.getIterator(be);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cs?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SC extends B{constructor(){super(new Ge(Nl),B.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ui=new SC;Object.defineProperties(J,{MIN:{value:new J(ms,B.EMPTY_NODE)},MAX:{value:new J(Bn,Ui)}});tp.__EMPTY_NODE=B.EMPTY_NODE;Ne.__childrenNodeConstructor=B;CC(Ui);wC(Ui);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=!0;function Me(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Me(e))}if(!(t instanceof Array)&&kC){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=kr(n,vC,o=>o.name,Nl);if(s){const o=kr(n,be.getCompare());return new B(r,Me(e),new Dt({".priority":o},{".priority":be}))}else return new B(r,Me(e),Dt.Default)}else{let n=B.EMPTY_NODE;return Je(t,(s,i)=>{if(Bt(t,s)&&s.substring(0,1)!=="."){const r=Me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Me(e))}}EC(Me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends ao{constructor(e){super(),this.indexPath_=e,T(!X(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Rs(e.name,n.name):r}makePost(e,n){const s=Me(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ui);return new J(Bn,e)}toString(){return Jf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends ao{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=Me(e);return new J(n,s)}toString(){return".value"}}const AC=new RC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){return{type:"value",snapshotNode:t}}function ys(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(mi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ys(n,s)):o.trackChildChange(yi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(i,r)=>{n.hasChild(i)||s.trackChildChange(mi(i,r))}),n.isLeafNode()||n.forEachChild(be,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(yi(i,r,o))}else s.trackChildChange(ys(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.indexedFilter_=new Ol(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vi.getStartPost_(e),this.endPost_=vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new J(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(be,(o,a)=>{r.matches(new J(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new J(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new J(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(yi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(mi(n,d));const E=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ys(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mi(c.name,c.node)),r.trackChildChange(ys(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ms}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Ml;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(t){return t.loadsAllData()?new Ol(t.getIndex()):t.hasLimit()?new NC(t):new vi(t)}function qu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===be?n="$priority":t.index_===AC?n="$value":t.index_===cs?n="$key":(T(t.index_ instanceof xC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ku(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Gf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xr.getListenId_(e,s),a={};this.listens_[o]=a;const l=qu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),ps(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=xr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=qu(e._queryParams),s=e._path.toString(),i=new to;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ts(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=di(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return{value:null,children:new Map}}function ap(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ee(e);t.children.has(s)||t.children.set(s,Rr());const i=t.children.get(s);e=me(e),ap(i,e,n)}}function xa(t,e,n){t.value!==null?n(e,t.value):DC(t,(s,i)=>{const r=new pe(e.toString()+"/"+s);xa(i,r,n)})}function DC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=10*1e3,FC=30*1e3,UC=5*60*1e3;class $C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LC(e);const s=Gu+(FC-Gu)*Math.random();Qs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(i,r)=>{r>0&&Bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*UC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function lp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ll(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ht.ACK_USER_WRITE,this.source=lp()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Ar(oe(),n,this.revert)}}else return T(ee(this.path)===e,"operationForChild called for unrelated child."),new Ar(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Ci(this.source,oe()):new Ci(this.source,me(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ht.OVERWRITE}operationForChild(e){return X(this.path)?new Hn(this.source,oe(),this.snap.getImmediateChild(e)):new Hn(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ht.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new Hn(this.source,oe(),n.value):new Ei(this.source,oe(),n)}else return T(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ei(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function BC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(PC(o.childName,o.snapshotNode))}),$s(t,i,"child_removed",e,s,n),$s(t,i,"child_added",e,s,n),$s(t,i,"child_moved",r,s,n),$s(t,i,"child_changed",e,s,n),$s(t,i,"value",e,s,n),i}function $s(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>zC(t,a,l)),o.forEach(a=>{const l=HC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function HC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zC(t,e,n){if(e.childName==null||n.childName==null)throw Is("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){return{eventCache:t,serverCache:e}}function Js(t,e,n,s){return lo(new _n(e,n,s),t.serverCache)}function cp(t,e,n,s){return lo(t.eventCache,new _n(e,n,s))}function Pr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;const VC=()=>(Ho||(Ho=new Ge(R2)),Ho);class ve{constructor(e,n=VC()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Je(e,(s,i)=>{n=n.set(new pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(X(e))return null;{const s=ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(me(e),n);return r!=null?{path:Pe(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(me(e)):new ve(null)}}set(e,n){if(X(e))return new ve(n,this.children);{const s=ee(e),r=(this.children.get(s)||new ve(null)).set(me(e),n),o=this.children.insert(s,r);return new ve(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const i=s.remove(me(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ve(null):new ve(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(me(e)):null}}setTree(e,n){if(X(e))return n;{const s=ee(e),r=(this.children.get(s)||new ve(null)).setTree(me(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ve(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=ee(e),o=this.children.get(r);return o?o.findOnPath_(me(e),Pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=ee(e),r=this.children.get(i);return r?r.foreachOnPath_(me(e),Pe(n,i),s):new ve(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new ve(null))}}function Xs(t,e,n){if(X(e))return new pt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new ve(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function Yu(t,e,n){let s=t;return Je(n,(i,r)=>{s=Xs(s,Pe(e,i),r)}),s}function Qu(t,e){if(X(e))return pt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new pt(n)}}function Ra(t,e){return jn(t,e)!=null}function jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Ju(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,i)=>{e.push(new J(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new J(s,i.value))}),e}function cn(t,e){if(X(e))return t;{const n=jn(t,e);return n!=null?new pt(new ve(n)):new pt(t.writeTree_.subtree(e))}}function Aa(t){return t.writeTree_.isEmpty()}function vs(t,e){return up(oe(),t.writeTree_,e)}function up(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=up(Pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return pp(e,t)}function jC(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xs(t.visibleWrites,e,n)),t.lastWriteId=s}function qC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function KC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GC(a,s.path)?i=!1:dt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return YC(t),!0;if(s.snap)t.visibleWrites=Qu(t.visibleWrites,s.path);else{const a=s.children;Je(a,l=>{t.visibleWrites=Qu(t.visibleWrites,Pe(s.path,l))})}return!0}else return!1}function GC(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(Pe(t.path,n),e))return!0;return!1}function YC(t){t.visibleWrites=dp(t.allWrites,QC,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QC(t){return t.visible}function dp(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dt(n,o)?(a=je(n,o),s=Xs(s,a,r.snap)):dt(o,n)&&(a=je(o,n),s=Xs(s,oe(),r.snap.getChild(a)));else if(r.children){if(dt(n,o))a=je(n,o),s=Yu(s,a,r.children);else if(dt(o,n))if(a=je(o,n),X(a))s=Yu(s,oe(),r.children);else{const l=ps(r.children,ee(a));if(l){const c=l.getChild(me(a));s=Xs(s,oe(),c)}}}else throw Is("WriteRecord should have .snap or .children")}}return s}function hp(t,e,n,s,i){if(!s&&!i){const r=jn(t.visibleWrites,e);if(r!=null)return r;{const o=cn(t.visibleWrites,e);if(Aa(o))return n;if(n==null&&!Ra(o,oe()))return null;{const a=n||B.EMPTY_NODE;return vs(o,a)}}}else{const r=cn(t.visibleWrites,e);if(!i&&Aa(r))return n;if(!i&&n==null&&!Ra(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=dp(t.allWrites,o,e),l=n||B.EMPTY_NODE;return vs(a,l)}}}function JC(t,e,n){let s=B.EMPTY_NODE;const i=jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(be,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cn(t.visibleWrites,e);return n.forEachChild(be,(o,a)=>{const l=vs(cn(r,new pe(o)),a);s=s.updateImmediateChild(o,l)}),Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cn(t.visibleWrites,e);return Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function XC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Pe(e,n);if(Ra(t.visibleWrites,r))return null;{const o=cn(t.visibleWrites,r);return Aa(o)?i.getChild(n):vs(o,i.getChild(n))}}function ZC(t,e,n,s){const i=Pe(e,n),r=jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return vs(o,s.getNode().getImmediateChild(n))}else return null}function eE(t,e){return jn(t.visibleWrites,e)}function tE(t,e,n,s,i,r,o){let a;const l=cn(t.visibleWrites,e),c=jn(l,oe());if(c!=null)a=c;else if(n!=null)a=vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=h.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=h.getNext();return u}else return[]}function nE(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Nr(t,e,n,s){return hp(t.writeTree,t.treePath,e,n,s)}function Fl(t,e){return JC(t.writeTree,t.treePath,e)}function Xu(t,e,n,s){return XC(t.writeTree,t.treePath,e,n,s)}function Or(t,e){return eE(t.writeTree,Pe(t.treePath,e))}function sE(t,e,n,s,i,r){return tE(t.writeTree,t.treePath,e,n,s,i,r)}function Ul(t,e,n){return ZC(t.writeTree,t.treePath,e,n)}function fp(t,e){return pp(Pe(t.treePath,e),t.writeTree)}function pp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,yi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,mi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ys(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,yi(s,e.snapshotNode,i.oldSnap));else throw Is("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const _p=new rE;class $l{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ul(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=sE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){return{filter:t}}function aE(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lE(t,e,n,s,i){const r=new iE;let o,a;if(n.type===ht.OVERWRITE){const c=n;c.source.fromUser?o=Pa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Mr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ht.MERGE){const c=n;c.source.fromUser?o=uE(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Na(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ht.ACK_USER_WRITE){const c=n;c.revert?o=fE(t,e,c.path,s,i,r):o=dE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ht.LISTEN_COMPLETE)o=hE(t,e,n.path,s,r);else throw Is("Unknown operation type: "+n.type);const l=r.getChanges();return cE(e,o,l),{viewCache:o,changes:l}}function cE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Pr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(op(Pr(e)))}}function gp(t,e,n,s,i,r){const o=e.eventCache;if(Or(s,n)!=null)return e;{let a,l;if(X(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof B?c:B.EMPTY_NODE,d=Fl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Nr(s,zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ee(n);if(c===".priority"){T(pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Xu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=me(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Xu(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ul(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Js(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Mr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=ee(n);if(!l.isCompleteForPath(n)&&pn(n)>1)return e;const m=me(n),R=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),_,R,m,_p,null)}const d=cp(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),h=new $l(i,d,r);return gp(t,d,n,i,h,a)}function Pa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new $l(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Js(e,c,!0,t.filter.filtersNodes());else{const d=ee(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Js(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=me(n),_=a.getNode().getImmediateChild(d);let m;if(X(h))m=s;else{const E=u.getCompleteChild(d);E!=null?Qf(h)===".priority"&&E.getChild(Xf(h)).isEmpty()?m=E:m=E.updateChild(h,s):m=B.EMPTY_NODE}if(_.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=Js(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Zu(t,e){return t.eventCache.isCompleteForChild(e)}function uE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Pe(n,l);Zu(e,ee(u))&&(a=Pa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Pe(n,l);Zu(e,ee(u))||(a=Pa(t,a,u,c,i,r,o))}),a}function ed(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Na(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),m=ed(t,_,h);l=Mr(t,l,new pe(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!_){const m=e.serverCache.getNode().getImmediateChild(d),E=ed(t,m,h);l=Mr(t,l,new pe(d),E,i,r,o,a)}}),l}function dE(t,e,n,s,i,r,o){if(Or(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new ve(null);return l.getNode().forEachChild(cs,(u,d)=>{c=c.set(new pe(u),d)}),Na(t,e,n,c,i,r,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,d)=>{const h=Pe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Na(t,e,n,c,i,r,a,o)}}function hE(t,e,n,s,i){const r=e.serverCache,o=cp(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return gp(t,o,n,s,_p,i)}function fE(t,e,n,s,i,r){let o;if(Or(s,n)!=null)return e;{const a=new $l(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Nr(s,zn(e));else{const d=e.serverCache.getNode();T(d instanceof B,"serverChildren would be complete if leaf node"),u=Fl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ee(n);let d=Ul(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,me(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,me(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nr(s,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Or(s,oe())!=null,Js(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ol(s.getIndex()),r=OC(s);this.processor_=oE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new _n(l,o.isFullyInitialized(),i.filtersNodes()),d=new _n(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=lo(d,u),this.eventGenerator_=new WC(this.query_)}get query(){return this.query_}}function _E(t){return t.viewCache_.serverCache.getNode()}function gE(t){return Pr(t.viewCache_)}function mE(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function td(t){return t.eventRegistrations_.length===0}function yE(t,e){t.eventRegistrations_.push(e)}function nd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function sd(t,e,n,s){e.type===ht.MERGE&&e.source.queryId!==null&&(T(zn(t.viewCache_),"We should always have a full cache before handling merges"),T(Pr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lE(t.processor_,i,e,n,s);return aE(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,mp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(r,o)=>{s.push(ys(r,o))}),n.isFullyInitialized()&&s.push(op(n.getNode())),mp(t,s,n.getNode(),e)}function mp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return BC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;class yp{constructor(){this.views=new Map}}function CE(t){T(!Dr,"__referenceConstructor has already been defined"),Dr=t}function EE(){return T(Dr,"Reference.ts has not been loaded"),Dr}function wE(t){return t.views.size===0}function Wl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),sd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sd(o,e,n,s));return r}}function vp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Nr(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=Fl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=lo(new _n(a,l,!1),new _n(s,i,!1));return new pE(e,c)}return o}function bE(t,e,n,s,i,r){const o=vp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yE(o,n),vE(o,n)}function IE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=gn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(nd(c,n,s)),td(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(nd(l,n,s)),td(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!gn(t)&&r.push(new(EE())(e._repo,e._path)),{removed:r,events:o}}function Cp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const s of t.views.values())n=n||mE(s,e);return n}function Ep(t,e){if(e._queryParams.loadsAllData())return uo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function wp(t,e){return Ep(t,e)!=null}function gn(t){return uo(t)!=null}function uo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;function TE(t){T(!Lr,"__referenceConstructor has already been defined"),Lr=t}function SE(){return T(Lr,"Reference.ts has not been loaded"),Lr}let kE=1;class id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=nE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bp(t,e,n,s,i){return jC(t.pendingWriteTree_,e,n,s,i),i?Wi(t,new Hn(lp(),e,n)):[]}function An(t,e,n=!1){const s=qC(t.pendingWriteTree_,e);if(KC(t.pendingWriteTree_,e)){let r=new ve(null);return s.snap!=null?r=r.set(oe(),!0):Je(s.children,o=>{r=r.set(new pe(o),!0)}),Wi(t,new Ar(s.path,r,n))}else return[]}function $i(t,e,n){return Wi(t,new Hn(Dl(),e,n))}function xE(t,e,n){const s=ve.fromObject(n);return Wi(t,new Ei(Dl(),e,s))}function RE(t,e){return Wi(t,new Ci(Dl(),e))}function AE(t,e,n){const s=Hl(t,n);if(s){const i=zl(s),r=i.path,o=i.queryId,a=je(r,e),l=new Ci(Ll(o),a);return Vl(t,r,l)}else return[]}function Ip(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||wp(o,e))){const l=IE(o,e,n,s);wE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,_)=>gn(_));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const _=ME(h);for(let m=0;m<_.length;++m){const E=_[m],R=E.query,A=xp(t,E);t.listenProvider_.startListening(Zs(R),wi(t,R),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Zs(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(ho(h));t.listenProvider_.stopListening(Zs(h),_)}))}DE(t,c)}return a}function Tp(t,e,n,s){const i=Hl(t,s);if(i!=null){const r=zl(i),o=r.path,a=r.queryId,l=je(o,e),c=new Hn(Ll(a),l,n);return Vl(t,o,c)}else return[]}function PE(t,e,n,s){const i=Hl(t,s);if(i){const r=zl(i),o=r.path,a=r.queryId,l=je(o,e),c=ve.fromObject(n),u=new Ei(Ll(a),l,c);return Vl(t,o,u)}else return[]}function NE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const m=je(h,i);r=r||un(_,m),o=o||gn(_)});let a=t.syncPointTree_.get(i);a?(o=o||gn(a),r=r||un(a,oe())):(a=new yp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const E=un(m,oe());E&&(r=r.updateImmediateChild(_,E))}));const c=wp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ho(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=LE();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const u=co(t.pendingWriteTree_,i);let d=bE(a,e,n,u,r,l);if(!c&&!o&&!s){const h=Ep(a,e);d=d.concat(FE(t,e,h))}return d}function Bl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=un(a,l);if(c)return c});return hp(i,e,r,n,!0)}function OE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=je(c,n);s=s||un(u,d)});let i=t.syncPointTree_.get(n);i?s=s||un(i,oe()):(i=new yp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new _n(s,!0,!1):null,a=co(t.pendingWriteTree_,e._path),l=vp(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return gE(l)}function Wi(t,e){return Sp(e,t.syncPointTree_,null,co(t.pendingWriteTree_,oe()))}function Sp(t,e,n,s){if(X(t.path))return kp(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=un(i,oe()));let r=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fp(s,o);r=r.concat(Sp(a,l,c,u))}return i&&(r=r.concat(Wl(i,t,s,n))),r}}function kp(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=un(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fp(s,o),u=t.operationForChild(o);u&&(r=r.concat(kp(u,a,l,c)))}),i&&(r=r.concat(Wl(i,t,s,n))),r}function xp(t,e){const n=e.query,s=wi(t,n);return{hashFn:()=>(_E(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?AE(t,n._path,s):RE(t,n._path);{const r=N2(i,n);return Ip(t,n,null,r)}}}}function wi(t,e){const n=ho(e);return t.queryToTagMap.get(n)}function ho(t){return t._path.toString()+"$"+t._queryIdentifier}function Hl(t,e){return t.tagToQueryMap.get(e)}function zl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function Vl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=co(t.pendingWriteTree_,e);return Wl(s,n,i,null)}function ME(t){return t.fold((e,n,s)=>{if(n&&gn(n))return[uo(n)];{let i=[];return n&&(i=Cp(n)),Je(s,(r,o)=>{i=i.concat(o)}),i}})}function Zs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SE())(t._repo,t._path):t}function DE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ho(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function LE(){return kE++}function FE(t,e,n){const s=e._path,i=wi(t,e),r=xp(t,n),o=t.listenProvider_.startListening(Zs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&gn(u))return[uo(u).query];{let h=[];return u&&(h=h.concat(Cp(u).map(_=>_.query))),Je(d,(_,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Zs(u),wi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jl(n)}node(){return this.node_}}class ql{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new ql(this.syncTree_,n)}node(){return Bl(this.syncTree_,this.path_)}}const UE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $E(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$E=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},WE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},BE=function(t,e,n,s){return Kl(e,new ql(n,t),s)},Rp=function(t,e,n){return Kl(t,new jl(e),n)};function Kl(t,e,n){const s=t.getPriority().val(),i=rd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=rd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(be,(a,l)=>{const c=Kl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yl(t,e){let n=e instanceof pe?e:new pe(e),s=t,i=ee(n);for(;i!==null;){const r=ps(s.node.children,i)||{children:{},childCount:0};s=new Gl(i,s,r),n=me(n),i=ee(n)}return s}function Ps(t){return t.node.value}function Ap(t,e){t.node.value=e,Oa(t)}function Pp(t){return t.node.childCount>0}function HE(t){return Ps(t)===void 0&&!Pp(t)}function fo(t,e){Je(t.node.children,(n,s)=>{e(new Gl(n,t,s))})}function Np(t,e,n,s){n&&!s&&e(t),fo(t,i=>{Np(i,e,!0,s)}),n&&s&&e(t)}function zE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bi(t){return new pe(t.parent===null?t.name:Bi(t.parent)+"/"+t.name)}function Oa(t){t.parent!==null&&VE(t.parent,t.name,t)}function VE(t,e,n){const s=HE(n),i=Bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Oa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Oa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/[\[\].#$\/\u0000-\u001F\u007F]/,qE=/[\[\].#$\u0000-\u001F\u007F]/,zo=10*1024*1024,Op=function(t){return typeof t=="string"&&t.length!==0&&!jE.test(t)},Mp=function(t){return typeof t=="string"&&t.length!==0&&!qE.test(t)},KE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mp(t)},GE=function(t,e,n,s){s&&e===void 0||Ql(dl(t,"value"),e,n)},Ql=function(t,e,n){const s=n instanceof pe?new dC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(s));if(typeof e=="function")throw new Error(t+"contains a function "+In(s)+" with contents = "+e.toString());if(Rf(e))throw new Error(t+"contains "+e.toString()+" "+In(s));if(typeof e=="string"&&e.length>zo/3&&no(e)>zo)throw new Error(t+"contains a string greater than "+zo+" utf8 bytes "+In(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Op(o)))throw new Error(t+" contains an invalid key ("+o+") "+In(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hC(s,o),Ql(t,a,s),fC(s)}),i&&r)throw new Error(t+' contains ".value" child '+In(s)+" in addition to actual children.")}},Dp=function(t,e,n,s){if(!(s&&n===void 0)&&!Mp(n))throw new Error(dl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Dp(t,e,n,s)},QE=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},JE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Op(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KE(n))throw new Error(dl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lp(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Zf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Rt(t,e,n){Lp(t,n),ZE(t,s=>dt(s,e)||dt(e,s))}function ZE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ew(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ew(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Dn&&$e("event: "+n.toString()),As(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="repo_interrupt",nw=25;class sw{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rr(),this.transactionQueueTree_=new Gl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iw(t,e,n){if(t.stats_=Rl(t.repoInfo_),t.forceRestClient_||L2())t.server_=new xr(t.repoInfo_,(s,i,r,o)=>{od(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ad(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(s,i,r,o)=>{od(t,s,i,r,o)},s=>{ad(t,s)},s=>{ow(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=B2(t.repoInfo_,()=>new $C(t.stats_,t.server_)),t.infoData_=new MC,t.infoSyncTree_=new id({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=$i(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xl(t,"connected",!1),t.serverSyncTree_=new id({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rw(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jl(t){return UE({timestamp:rw(t)})}function od(t,e,n,s,i){t.dataUpdateCount++;const r=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=gr(n,c=>Me(c));o=PE(t.serverSyncTree_,r,l,i)}else{const l=Me(n);o=Tp(t.serverSyncTree_,r,l,i)}else if(s){const l=gr(n,c=>Me(c));o=xE(t.serverSyncTree_,r,l)}else{const l=Me(n);o=$i(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=_o(t,r)),Rt(t.eventQueue_,a,o)}function ad(t,e){Xl(t,"connected",e),e===!1&&cw(t)}function ow(t,e){Je(e,(n,s)=>{Xl(t,n,s)})}function Xl(t,e,n){const s=new pe("/.info/"+e),i=Me(n);t.infoData_.updateSnapshot(s,i);const r=$i(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function Fp(t){return t.nextWriteId_++}function aw(t,e,n){const s=OE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Me(i).withIndex(e._queryParams.getIndex());NE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=$i(t.serverSyncTree_,e._path,r);else{const a=wi(t.serverSyncTree_,e);o=Tp(t.serverSyncTree_,e._path,r,a)}return Rt(t.eventQueue_,e._path,o),Ip(t.serverSyncTree_,e,n,null,!0),r},i=>(po(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function lw(t,e,n,s,i){po(t,"set",{path:e.toString(),value:n,priority:s});const r=Jl(t),o=Me(n,s),a=Bl(t.serverSyncTree_,e),l=Rp(o,a,r),c=Fp(t),u=bp(t.serverSyncTree_,e,l,c,!0);Lp(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const m=h==="ok";m||Ye("set at "+e+" failed: "+h);const E=An(t.serverSyncTree_,c,!m);Rt(t.eventQueue_,e,E),dw(t,i,h,_)});const d=Hp(t,e);_o(t,d),Rt(t.eventQueue_,d,[])}function cw(t){po(t,"onDisconnectEvents");const e=Jl(t),n=Rr();xa(t.onDisconnect_,oe(),(i,r)=>{const o=BE(i,r,t.serverSyncTree_,e);ap(n,i,o)});let s=[];xa(n,oe(),(i,r)=>{s=s.concat($i(t.serverSyncTree_,i,r));const o=Hp(t,i);_o(t,o)}),t.onDisconnect_=Rr(),Rt(t.eventQueue_,oe(),s)}function uw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tw)}function po(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function dw(t,e,n,s){e&&As(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Up(t,e,n){return Bl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Zl(t,e=t.transactionQueueTree_){if(e||go(t,e),Ps(e)){const n=Wp(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hw(t,Bi(e),n)}else Pp(e)&&fo(e,n=>{Zl(t,n)})}function hw(t,e,n){const s=n.map(c=>c.currentWriteId),i=Up(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{po(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(An(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();go(t,Yl(t.transactionQueueTree_,e)),Zl(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)As(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}_o(t,e)}},o)}function _o(t,e){const n=$p(t,e),s=Bi(n),i=Wp(t,n);return fw(t,i,s),s}function fw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nw)u=!0,d="maxretry",i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Up(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){Ql("transaction failed: Data returned ",_,l.path);let m=Me(_);typeof _=="object"&&_!=null&&Bt(_,".priority")||(m=m.updatePriority(h.getPriority()));const R=l.currentWriteId,A=Jl(t),P=Rp(m,h,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=Fp(t),o.splice(o.indexOf(R),1),i=i.concat(bp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(An(t.serverSyncTree_,R,!0))}else u=!0,d="nodata",i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}go(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)As(s[a]);Zl(t,t.transactionQueueTree_)}function $p(t,e){let n,s=t.transactionQueueTree_;for(n=ee(e);n!==null&&Ps(s)===void 0;)s=Yl(s,n),e=me(e),n=ee(e);return s}function Wp(t,e){const n=[];return Bp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Bp(t,e,n){const s=Ps(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);fo(e,i=>{Bp(t,i,n)})}function go(t,e){const n=Ps(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ap(e,n.length>0?n:void 0)}fo(e,s=>{go(t,s)})}function Hp(t,e){const n=Bi($p(t,e)),s=Yl(t.transactionQueueTree_,e);return zE(s,i=>{Vo(t,i)}),Vo(t,s),Np(s,i=>{Vo(t,i)}),n}function Vo(t,e){const n=Ps(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(An(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ap(e,void 0):n.length=r+1,Rt(t.eventQueue_,Bi(e),i);for(let o=0;o<s.length;o++)As(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _w(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const ld=function(t,e){const n=gw(t),s=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||k2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new pe(n.pathString)}},gw=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=pw(t.substring(u,d)));const h=_w(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class yw{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:Qf(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=Ku(this._queryParams),n=kl(e);return n==="{}"?"default":n}get _queryObject(){return Ku(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof ec))return!1;const n=this._repo===e._repo,s=Zf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uC(this._path)}}class Ht extends ec{constructor(e,n){super(e,n,new Ml,!1)}get parent(){const e=Xf(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=Ma(this.ref,e);return new bi(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bi(i,Ma(this.ref,s),be)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zp(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?Ma(t._root,e):t._root}function Ma(t,e){return t=Xe(t),ee(t._path)===null?YE("child","path",e,!1):Dp("child","path",e,!1),new Ht(t._repo,Pe(t._path,e))}function Cw(t,e){t=Xe(t),QE("set",t._path),GE("set",e,t._path,!1);const n=new to;return lw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ew(t){t=Xe(t);const e=new vw(()=>{}),n=new tc(e);return aw(t._repo,t,n).then(s=>new bi(s,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class tc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mw("value",this,new bi(e.snapshotNode,new Ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yw(this,e,n):null}matches(e){return e instanceof tc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}CE(Ht);TE(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="FIREBASE_DATABASE_EMULATOR_HOST",Da={};let bw=!1;function Iw(t,e,n,s){t.repoInfo_=new Bf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Tw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ld(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ww]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ld(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ls(ls.OWNER):new U2(t.name,t.options,e);JE("Invalid Firebase Database URL",o),X(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kw(a,t,u,new F2(t.name,n));return new xw(d,t)}function Sw(t,e){const n=Da[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uw(t),delete n[t.key]}function kw(t,e,n,s){let i=Da[e.name];i||(i={},Da[e.name]=i);let r=i[t.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sw(t,bw,n,s),i[t.toURLString()]=r,r}class xw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Sw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function Rw(t=Hh(),e){const n=pl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=q1("database");s&&Aw(n,...s)}return n}function Aw(t,e,n,s={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ls(ls.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:K1(s.mockUserToken,t.app.options.projectId);r=new ls(o)}Iw(i,e,n,r)}/**
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
 */function Pw(t){w2(Ss),_s(new Un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Tw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ln(Au,Pu,t),ln(Au,Pu,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pw();const Vp=Rw(jh),jp=[],La=[];function Nw(t){return t instanceof Set?Array.from(t):t}const Ow=async t=>(await Ew(zp(Vp,t))).val(),Mw=async(t,e)=>{La.push({path:t,data:e})};setInterval(async()=>{const t=[];for(const{path:e,data:n}of La)t.push(Cw(zp(Vp,e),n));await Promise.all(t),La.length=0},1e4);const jo=async(t,e)=>{Nn(t,n=>{Sl.value&&Mw(`users/${Tl.value.uid}/game-data/tileswap-naenae/${e}/`,Nw(n))},{deep:!0}),jp.push({observable:t,path:e})},ts=class ts{constructor({width:e,height:n,exclude:s,unlockCategory:i}){this.width=e,this.height=n,this.exclude=s??[],this.unlockCategory=i??0,this.matrix=new Array(n).fill(0).map(()=>new Array(e).fill(0));for(const r of this.exclude)this.matrix[Math.floor(r/e)][r%e]=-1}swapTiles(e,n){const s=[-1,0,1],i=[-1,0,1];let r=0;for(const o of s)for(const a of i)e+a>=0&&e+a<this.matrix.length&&n+o>=0&&n+o<this.matrix[0].length&&this.matrix[e+a][n+o]!==-1&&(this.matrix[e+a][n+o]=this.matrix[e+a][n+o]?0:1,r++);return r}setAllTiles(e){for(let n=0;n<this.matrix.length;n++)for(let s=0;s<this.matrix[0].length;s++)this.matrix[n][s]!==-1&&(this.matrix[n][s]=e)}setMatrix(e){this.matrix=e.map(n=>n.slice())}isSolved(){return this.matrix.every(e=>e.every(n=>n===1||n===-1))}isTile(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]!==-1:this.matrix[e][n]!==-1}isWhite(e,n){return n===void 0?this.matrix[Math.floor(e/this.width)][e%this.width]===1:this.matrix[e][n]===1}copy(){const{width:e,height:n,exclude:s,unlockCategory:i}=this,r=new ts({width:e,height:n,exclude:s,unlockCategory:i});return r.matrix=this.matrix.map(o=>o.slice()),r}generatePosition(e){const n=this.copy();n.setAllTiles(1);for(let s=0;s<e;s++){let i,r;do i=Math.floor(Math.random()*n.height),r=Math.floor(Math.random()*n.width);while(!n.isTile(i,r));n.swapTiles(i,r)}return n.matrix.every(s=>s.every(i=>i===1||i===-1))?this.generatePosition(e):n}static hydrate(e){const{width:n,height:s,exclude:i,unlockCategory:r}=typeof e=="string"?JSON.parse(string):e;return new ts({width:n,height:s,exclude:i,unlockCategory:r})}static serialize(e){return JSON.stringify(e)}};mo(ts,"LAYOUTS",[{dimensions:"3x3",unlockCategory:1},{dimensions:"4x4",unlockCategory:5},{dimensions:"5x5",unlockCategory:11},{dimensions:"6x6",unlockCategory:19},{dimensions:"7x7",unlockCategory:24},{dimensions:"8x8",unlockCategory:31},{dimensions:"9x9",unlockCategory:32},{dimensions:"10x10",unlockCategory:35},{dimensions:"11x11",unlockCategory:36},{dimensions:"12x12",unlockCategory:38},{dimensions:"3x4",unlockCategory:8},{dimensions:"3x5",unlockCategory:3},{dimensions:"3x6",unlockCategory:20},{dimensions:"3x7",unlockCategory:20},{dimensions:"3x3",exclude:[0,2,6,8],unlockCategory:2},{dimensions:"5x5",exclude:[0,1,3,4,5,9,15,19,20,21,23,24],unlockCategory:12},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:27},{dimensions:"6x6",exclude:[0,1,4,5,6,11,24,29,30,31,34,35],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,13,35,41,42,43,47,48],unlockCategory:29},{dimensions:"8x8",exclude:[0,1,6,7,8,15,48,55,56,57,62,63],unlockCategory:34},{dimensions:"3x3",exclude:[3,5,6,8],unlockCategory:2},{dimensions:"3x3",exclude:[4],unlockCategory:2},{dimensions:"3x3",exclude:[1,3,5,7],unlockCategory:2},{dimensions:"3x3",exclude:[4,7],unlockCategory:2},{dimensions:"4x4",exclude:[5,10],unlockCategory:9},{dimensions:"4x4",exclude:[3,12],unlockCategory:9},{dimensions:"4x4",exclude:[3,6,9,12],unlockCategory:8},{dimensions:"4x4",exclude:[0,3,12,15],unlockCategory:9},{dimensions:"4x4",exclude:[2,3,7,8,12,13],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,6,8,12,13,15],unlockCategory:7},{dimensions:"4x4",exclude:[0,3,5,6,9,10,12,15],unlockCategory:6},{dimensions:"4x4",exclude:[0,1,4,5,10,11,14,15],unlockCategory:6},{dimensions:"4x4",exclude:[1,2,3,4,6,7,8,9,11,12,13,14],unlockCategory:6},{dimensions:"3x5",exclude:[0,2,12,14],unlockCategory:8},{dimensions:"5x2",exclude:[2,5,9],unlockCategory:6},{dimensions:"3x4",exclude:[4,6,8],unlockCategory:7},{dimensions:"5x5",exclude:[0,2,4,10,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,10,12,14,20,22,24],unlockCategory:14},{dimensions:"5x5",exclude:[6,8,16,18],unlockCategory:13},{dimensions:"5x5",exclude:[6,8,11,13,16,18],unlockCategory:14},{dimensions:"5x5",exclude:[5,7,9,10,12,14,15,17,19],unlockCategory:14},{dimensions:"5x5",exclude:[0,2,4,7,10,11,13,14,17,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,2,4,5,7,9,15,17,19,20,22,24],unlockCategory:12},{dimensions:"5x5",exclude:[0,4,5,6,8,9,15,16,18,19,20,24],unlockCategory:12},{dimensions:"5x5",exclude:[2,4,6,8,10,12,16,19,20,23,24],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,5,6,7,9,10,14,15,17,18,19,23,24],unlockCategory:8},{dimensions:"3x3",exclude:[2,4,6],unlockCategory:2},{dimensions:"5x5",exclude:[0,4,20,24],unlockCategory:13},{dimensions:"5x5",exclude:[0,4,20,24,7,11,12,13,17],unlockCategory:14},{dimensions:"5x5",exclude:[2,10,14,22],unlockCategory:13},{dimensions:"5x5",exclude:[12],unlockCategory:13},{dimensions:"5x5",exclude:[0,1,3,4,5,7,9,11,13,15,17,19,20,21,23,24],unlockCategory:10},{dimensions:"4x7",exclude:[1,2,3,6,7,9,11,13,14,17,19,22,23,25,26,27],unlockCategory:17},{dimensions:"5x5",exclude:[1,3,5,7,9,11,13,15,17,19,21,23],unlockCategory:10},{dimensions:"5x5",exclude:[0,2,4,6,8,10,12,14,16,18,20,22,24],unlockCategory:10},{dimensions:"5x5",exclude:[7,12,17],unlockCategory:13},{dimensions:"5x5",exclude:[7,11,13,17],unlockCategory:13},{dimensions:"5x5",exclude:[1,3,5,9,11,13,15,19,21,23],unlockCategory:14},{dimensions:"5x5",exclude:[1,2,3,7,17,21,22,23],unlockCategory:12},{dimensions:"5x5",exclude:[0,1,3,4,5,6,8,9,15,16,18,19,20,21,23,24],unlockCategory:7},{dimensions:"4x7",exclude:[0,1,2,4,5,8,16,20,21,24,25,26],unlockCategory:18},{dimensions:"5x5",exclude:[5,6,7,8,13,16,17,18],unlockCategory:18},{dimensions:"3x5",exclude:[0,2,4,10,12,14],unlockCategory:7},{dimensions:"7x7",exclude:[8,9,11,12,15,19,29,33,36,37,39,40],unlockCategory:29},{dimensions:"5x4",exclude:[0,1,3,4,11,12,13,17],unlockCategory:15},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,12,13,15,17,18,20,27,29,30,32,33,34,35],unlockCategory:17},{dimensions:"7x7",exclude:[0,1,2,3,4,5,12,15,16,17,19,22,26,29,31,32,33,36,43,44,45,46,47,48],unlockCategory:27},{dimensions:"5x5",exclude:[1,3,6,8,10,12,14,16,18,21,23],unlockCategory:10},{dimensions:"7x7",exclude:[0,1,2,3,6,7,8,9,13,14,15,21,34,40,41,42,43,46,47,48],unlockCategory:28},{dimensions:"6x6",exclude:[0,1,2,3,4,9,10,13,14,19,21,22,23,24,25,27,28,29,33,34,35],unlockCategory:16},{dimensions:"5x4",exclude:[6,7,8,10,14],unlockCategory:18},{dimensions:"6x6",exclude:[0,1,3,4,5,6,10,11,15,17,18,20,24,25,29,30,31,32,34,35],unlockCategory:18},{dimensions:"5x7",exclude:[0,1,3,4,5,9,15,16,18,19,25,29,30,31,33,34],unlockCategory:22},{dimensions:"3x8",exclude:[4,6,8,10,13,15,17,19],unlockCategory:18},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,17,22,23,24,25,26,31,35,36,38,40,41,42,43,47,48],unlockCategory:22},{dimensions:"7x7",exclude:[0,1,5,6,7,8,10,12,13,22,24,26,35,36,38,40,41,42,43,47,48],unlockCategory:28},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,12,13,21,27,28,29,33,34,35,38,41,44,45,46],unlockCategory:25},{dimensions:"7x7",exclude:[2,4,10,14,16,17,18,20,22,23,24,25,26,28,30,31,32,34,38,44,46],unlockCategory:28},{dimensions:"5x6",exclude:[2,6,8,11,12,13,16,17,18,21,23,27],unlockCategory:21},{dimensions:"7x9",exclude:[0,1,5,6,7,8,10,12,13,14,15,17,19,20,21,22,23,25,26,27,29,33,34,35,37,39,41,42,43,44,46,47,49,50,52,54,55,56,57,59,61,62],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,36,37,38,39,40,41,45,46,47,48,49,56,57,62,63,71,72,73,74,78,79,80],unlockCategory:25},{dimensions:"11x8",exclude:[0,1,3,4,5,6,7,9,10,11,12,13,15,16,17,19,20,21,22,23,31,32,33,36,40,43,56,64,67,69,70,71,72,73,75,77,78,79,82,85,86,87],unlockCategory:30},{dimensions:"9x9",exclude:[0,1,2,9,10,11,18,19,20,6,7,8,15,16,17,24,25,26,54,55,56,63,64,65,72,73,74,60,61,62,69,70,71,78,79,80,3,5,21,23,27,29,45,47,33,35,51,53,57,59,75,77],unlockCategory:29},{dimensions:"4x6",exclude:[0,1,4,6,8,10,13,14,15,18,19,22,23],unlockCategory:8},{dimensions:"6x4",exclude:[2,3,6,7,10,11,18,20,21,23],unlockCategory:17},{dimensions:"5x5",exclude:[0,1,3,4,5,7,11,12,13,15,17,20,21,23,24],unlockCategory:7},{dimensions:"5x3",exclude:[0,1,2,5,8,11,13],unlockCategory:6},{dimensions:"7x3",exclude:[1,5,15,19],unlockCategory:18},{dimensions:"9x6",exclude:[0,1,2,4,6,7,8,10,16,21,23,27,35,36,38,40,42,44,47,48,49,50,51],unlockCategory:26},{dimensions:"9x8",exclude:[0,1,7,8,9,17,20,21,23,24,29,32,64,66,68,70],unlockCategory:30},{dimensions:"8x8",exclude:[0,1,2,5,6,7,8,9,14,15,16,23,26,29,40,41,43,44,46,47,48,50,53,55,57,59,60,62],unlockCategory:26},{dimensions:"11x7",exclude:[0,1,7,8,9,10,11,21,22,30,31,32,43,55,65,66,67,74,75,76],unlockCategory:33},{dimensions:"11x10",exclude:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,19,20,21,22,23,31,32,33,43,88,98,99,100,108,109],unlockCategory:33},{dimensions:"8x6",exclude:[0,1,2,3,4,6,7,12,15,17,18,19,22,24,25,28,29,30,32,33,36,38,39,40,41,42,43,45,46,47],unlockCategory:21},{dimensions:"4x7",exclude:[0,3,5,7,8,10,11,12,15,16,19,20,21,22,24,27],unlockCategory:16},{dimensions:"7x5",exclude:[2,3,4,7,9,11,13,14,17,20,21,23,25,27,30,31,32],unlockCategory:21},{dimensions:"6x6",exclude:[0,1,3,4,5,6,7,9,10,11,16,17,18,19,24,25,26,28,29,30,31,32,34,35],unlockCategory:16},{dimensions:"6x6",exclude:[3,4,5,7,9,10,11,12,15,16,17,18,19,20,23,24,25,26,28,30,31,32,33],unlockCategory:17},{dimensions:"7x5",exclude:[0,1,5,6,7,10,13,14,17,20,21,27,30,31,32],unlockCategory:22},{dimensions:"6x6",exclude:[0,4,5,7,9,11,14,19,21,22,24,27,28,29,30,31,34,35],unlockCategory:21},{dimensions:"5x4",exclude:[1,2,3,6,8],unlockCategory:14},{dimensions:"7x7",exclude:[0,3,4,5,6,8,9,11,12,13,14,16,18,19,20,21,22,24,27,28,29,30,32,33,35,36,37,38,40,42,43,44,45,46,48],unlockCategory:16},{dimensions:"5x6",exclude:[0,1,4,5,7,8,10,12,17,19,21,22,24,25,28,29],unlockCategory:17},{dimensions:"10x5",exclude:[0,1,2,3,4,5,10,11,12,13,14,16,17,18,19,20,21,22,24,26,27,28,29,33,35,36,37,38,39,40,41,42,43,45,46,47,48,49],unlockCategory:16},{dimensions:"10x6",exclude:[0,1,3,5,6,7,8,9,10,11,13,14,16,17,18,19,22,25,26,29,30,31,32,35,40,41,42,43,50,51,52,53,54,57,58,59],unlockCategory:22},{dimensions:"7x7",exclude:[2,3,4,10,14,20,21,22,26,27,28,34,38,44,45,46],unlockCategory:29},{dimensions:"6x3",exclude:[0,5,12,17],unlockCategory:15},{dimensions:"7x7",exclude:[1,5,15,19],unlockCategory:34},{dimensions:"5x7",exclude:[6,8,11,13,21,22,23,27],unlockCategory:28},{dimensions:"3x5",exclude:[2,4,8,10,14],unlockCategory:3},{dimensions:"3x5",exclude:[0,4,5,7,8,10,11,12],unlockCategory:3},{dimensions:"3x5",exclude:[2,4,7,10,14],unlockCategory:3},{dimensions:"5x5",exclude:[0,4,15,19,20,21,23,24],unlockCategory:23},{dimensions:"7x8",exclude:[0,1,2,4,5,6,7,8,12,13,14,20,28,34,35,38,41,42,45,48,49,52,55],unlockCategory:25},{dimensions:"6x5",exclude:[0,1,3,4,6,9],unlockCategory:27},{dimensions:"7x7",exclude:[0,3,6,28,34,35,36,40,41,42,43,44,46,47,48],unlockCategory:25},{dimensions:"8x4",exclude:[0,1,6,7,8,9,14,15,16,17,22,23],unlockCategory:23},{dimensions:"7x5",exclude:[1,2,3,4,5,6,7,10,11,12,13,14,21,22,23,25,27,28,29,30,32,34],unlockCategory:17},{dimensions:"5x8",exclude:[0,4,6,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,28,29,30,31,32,33,34,35,36,38,39],unlockCategory:15},{dimensions:"3x5",exclude:[0,2,4,10,13],unlockCategory:3},{dimensions:"7x9",exclude:[0,1,5,6,7,13,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48,49,50,51,53,55,56,57,58,59,61,62],unlockCategory:25},{dimensions:"7x5",exclude:[0,1,3,4,5,10,11,12,15,17,18,19,24,25,26,28,29],unlockCategory:23},{dimensions:"8x3",exclude:[1,2,3,4,5,6,8,10,11,12,13,15,16,17,22,23],unlockCategory:6},{dimensions:"3x4",exclude:[0,2,4,7,9,11],unlockCategory:6},{dimensions:"3x4",exclude:[4,7],unlockCategory:4},{dimensions:"7x7",exclude:[0,1,2,4,5,6,7,8,10,12,13,14,16,18,20,22,24,26,28,30,32,34,35,36,38,40,41,42,43,44,46,47,48],unlockCategory:18},{dimensions:"9x9",exclude:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,21,23,25,26,27,29,31,33,35,37,39,41,43,45,47,49,51,53,54,55,57,59,61,62,63,64,65,67,69,70,71,72,73,74,75,77,78,79,80],unlockCategory:27},{dimensions:"7x7",exclude:[0,1,5,6,7,13,15,18,35,38,41,42,43,47,48],unlockCategory:29},{dimensions:"3x5",exclude:[0,2,4],unlockCategory:15},{dimensions:"4x7",exclude:[5,6,8,9,10,12,13,15,16,18,19],unlockCategory:23},{dimensions:"3x5",exclude:[1,2,4,5,7,8,10,11],unlockCategory:4},{dimensions:"3x5",exclude:[3,5,6,8,9,11],unlockCategory:4},{dimensions:"5x5",exclude:[1,2,3,7,11,13,16,17,18,21,22,23],unlockCategory:15},{dimensions:"5x5",exclude:[1,2,3,7,8,13,16,21,22],unlockCategory:15},{dimensions:"7x7",exclude:[0,1,3,5,6,7,10,13,17,21,22,23,25,26,27,31,35,38,41,42,43,45,47,48],unlockCategory:27},{dimensions:"9x9",exclude:[0,1,2,4,6,7,8,9,10,13,16,17,18,22,26,31,36,37,38,39,41,42,43,44,49,54,58,62,63,64,67,70,71,72,73,74,76,78,79,80],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"11x11",exclude:[0,1,2,3,7,8,9,10,11,12,20,21,22,32,32,33,43,51,52,53,54,59,60,61,62,63,64,65,73,74,75,76,77,87,88,98,99,100,108,109,110,111,112,113,117,118,119,120],unlockCategory:33},{dimensions:"5x5",exclude:[2,11,12,13,17],unlockCategory:13},{dimensions:"9x5",exclude:[0,3,4,5,8,10,12,13,14,16,19,20,21,23,24,25,27,31,35,36,37,38,40,42,43,44],unlockCategory:22},{dimensions:"8x6",exclude:[0,18,20,21,22,23,27,28,29,30,31,34,35,36,37,38,39,42,43,44,45,46,47],unlockCategory:25},{dimensions:"11x11",exclude:[0,1,2,3,4,5,6,7,8,10,11,12,13,18,22,23,30,32,33,42,43,54,65,76,87,88,97,98,100,107,108,109,110,112,117,118,119,120],unlockCategory:33},{dimensions:"3x5",exclude:[4,5,8,10,11],unlockCategory:3},{dimensions:"3x5",exclude:[4,5,8,10,11,13,14],unlockCategory:4},{dimensions:"3x5",exclude:[0,4,5,7,8,10,12],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,10,13],unlockCategory:4},{dimensions:"3x5",exclude:[1,4,8,10,13],unlockCategory:4},{dimensions:"11x8",exclude:[0,1,2,4,5,6,7,8,9,10,11,14,17,19,20,21,23,24,25,26,27,29,31,32,34,35,36,37,38,39,40,41,43,45,46,47,48,49,50,51,52,54,55,58,59,61,62,64,65,66,67,68,71,74,76,77,78,79,80,81,82,83,84,85,86],unlockCategory:23},{dimensions:"9x9",exclude:[0,1,3,5,7,8,9,10,16,17,20,24,27,30,32,35,40,45,48,50,53,56,60,63,64,70,71,72,73,75,77,79,80],unlockCategory:34},{dimensions:"9x8",exclude:[0,1,2,6,7,8,9,17,29,30,32,33,45,46,49,52,53,54,56,57,59,60,62,63,64,66,67,68,70,71],unlockCategory:30},{dimensions:"9x7",exclude:[0,1,3,4,5,7,8,9,17,20,21,23,24,46,48,50,52,54,56,58,60,62],unlockCategory:26},{dimensions:"12x10",exclude:[0,2,5,8,9,11,12,13,15,19,23,24,25,28,32,34,36,38,42,46,53,54,59,60,63,67,69,70,72,76,78,80,81,83,84,87,91,92,95,97,101,105,107,109,110,113,114,116,118],unlockCategory:37},{dimensions:"10x10",exclude:[0,1,2,3,4,5,8,10,11,12,13,14,15,17,20,21,22,23,24,25,27,28,29,37,41,42,44,45,46,48,50,52,53,54,57,58,59,60,61,65,66,69,71,73,74,77,78,82,83,84,86,87,89,90,91,92,93,94,95,98,99],unlockCategory:34},{dimensions:"11x11",exclude:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,36,38,40,41,42,43,44,48,49,50,54,56,57,58,59,60,61,62,63,64,66,70,71,72,76,77,78,79,80,82,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,104,106,107,108,109,110,111,112,113,114,116,117,118,119,120],unlockCategory:28},{dimensions:"13x13",unlockCategory:39},{dimensions:"6x6",exclude:[0,1,9,10,11,15,16,17,24,25,30,31,33,34]}].map(e=>{const n=parseInt(e.dimensions.split("x")[0]),s=parseInt(e.dimensions.split("x")[1]),{unlockCategory:i}=e;return new ts({width:n,height:s,unlockCategory:i,exclude:e.exclude??[]})}));let Cs=ts;const Wr=class Wr{constructor({base:e,target:n,moves:s,solution:i,id:r}){this.base=e,this.target=n,this.moves=s,this.solution=i,this.id=r}isSolvedWith(e){return this.target.matrix.every((n,s)=>n.every((i,r)=>i===e.matrix[s][r]))}};mo(Wr,"PUZZLES",[{moves:20,base:[[0,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,0]],target:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]],solution:[0,1,2,3,7,11,15,14,13,12,8,4]},{moves:12,base:[[2,1,1,2],[0,2,2,0],[0,2,2,0],[2,1,1,2]],target:[[2,0,0,2],[1,2,2,1],[1,2,2,1],[2,0,0,2]],solution:[1,2,7,11,14,13,8,4]},{moves:4,base:[[1,2,2,2],[2,0,2,2],[2,2,1,2],[2,2,2,1]],target:[[1,2,2,2],[2,1,2,2],[2,2,0,2],[2,2,2,1]],solution:[0,5,10,15]},{moves:10,base:[[2,1,2],[0,0,0],[0,1,0],[0,0,0],[2,1,2]],target:[[2,1,2],[0,0,0],[0,0,0],[0,0,0],[2,1,2]],solution:[3,6,9,10,13,11,8,5]},{moves:6,base:[[0,1,0],[0,2,0],[2,1,2],[0,1,0]],target:[[1,1,1],[0,2,0],[2,0,2],[0,1,0]],solution:[0,5,7,10]},{moves:4,base:[[1,2,1],[2,0,2],[1,2,1]],target:[[0,2,0],[2,0,2],[0,2,0]],solution:[0,3,7,9]},{moves:6,base:[[2,0,2,1,2],[2,1,2,0,2],[1,1,1,1,1],[2,0,2,1,2],[2,1,2,0,2]],target:[[2,1,2,1,2],[2,1,2,1,2],[0,0,0,0,0],[2,1,2,1,2],[2,1,2,1,2]],solution:[1,11,14,23]},{moves:3,base:[[0,1,2],[1,2,0],[2,0,0]],target:[[1,1,2],[1,2,0],[2,0,0]],solution:[0,5,7]},{moves:5,base:[[0,2,1,2,1],[1,2,0,2,1],[2,1,2,0,2],[0,2,1,2,0],[0,2,1,2,1]],target:[[1,2,1,2,1],[1,2,1,2,1],[2,0,2,0,2],[0,2,0,2,0],[1,2,1,2,1]],solution:[0,11,20]},{moves:5,base:[[2,1,2],[0,1,0],[2,1,2]],target:[[2,1,2],[1,0,1],[2,1,2]],solution:[1,4,7]},{moves:8,base:[[2,2,0,2,2],[2,1,0,1,2],[0,0,0,0,0],[2,1,0,1,2],[2,2,0,2,2]],target:[[2,2,0,2,2],[2,0,0,0,2],[0,0,0,1,1],[2,0,1,1,2],[2,2,1,2,2]],solution:[2,7,10,11,12,18]},{moves:9,base:[[1,1,1],[1,0,1],[1,1,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,3,4,5,6,7,8]},{moves:10,base:[[1,0,1],[0,0,0],[1,0,1],[1,0,1]],target:[[1,0,1],[0,1,0],[0,1,0],[1,0,1]],solution:[1,4,6,7,8,9,10,11]},{moves:15,base:[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]],target:[[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]],solution:[1,2,4,6,7,8,9,10,11,16,19]},{moves:50,base:[[2,2,2,2,0,0,0,2,2,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,2,2,0,0,0,2,2,2,2]],target:[[2,2,2,2,0,0,1,2,2,2,2],[2,2,0,0,0,0,1,1,1,2,2],[2,0,0,0,0,0,0,1,1,1,2],[2,0,0,0,0,0,0,0,1,1,2],[0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,1,1],[2,1,1,0,0,0,0,1,1,1,2],[2,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,1,1,1,1,2,2],[2,2,2,2,1,1,1,2,2,2,2]],solution:[4,5,13,14,16,17,23,25,27,28,30,34,35,44,55,56,57,64,67,68,90,96,104]},{moves:6,base:[[1,1,1,1,1],[1,1,2,1,1],[1,2,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],target:[[1,1,1,1,1],[1,1,2,1,1],[1,2,0,2,1],[1,1,2,1,1],[1,1,1,1,1]],solution:[0,1,5,6]},{moves:8,base:[[1,1,1,2],[1,0,0,1],[1,0,0,1],[2,1,1,1]],target:[[1,1,1,2],[1,1,0,1],[1,0,1,1],[2,1,1,1]],solution:[0,1,4,5,10,11,14,15]},{moves:5,base:[[0,0,0],[2,1,2],[2,0,2]],target:[[1,0,0],[2,0,2],[2,0,2]],solution:[2,4,7]},{moves:10,base:[[1,1,1,2],[0,1,2,0],[0,2,1,0],[2,0,0,0]],target:[[1,1,1,2],[0,0,2,0],[1,2,1,0],[2,0,1,0]],solution:[0,1,4,5,10,11,13]},{moves:2,base:[[0,1,2,1,0],[2,1,0,1,2]],target:[[1,0,2,0,1],[2,0,0,0,2]],solution:[0,4]},{moves:5,base:[[0,0,0],[0,0,0],[0,0,0]],target:[[1,0,1],[0,1,0],[1,0,1]],solution:[1,3,4,5,7]},{moves:5,base:[[2,0,2],[1,2,0],[1,1,0],[0,2,1],[2,0,2]],target:[[2,0,2],[1,2,1],[0,0,1],[1,2,0],[2,1,2]],solution:[6,7,9]},{moves:6,base:[[2,2,0,2,2],[1,1,0,0,0],[0,2,2,2,0],[1,1,2,1,1]],target:[[2,2,1,2,2],[0,0,1,0,0],[1,2,2,2,1],[1,1,2,1,1]],solution:[6,9,14,19]},{moves:13,base:[[2,2,0,2,2,2],[2,0,0,0,2,2],[0,0,0,2,1,2],[2,0,2,1,1,1],[2,2,1,1,1,2],[2,2,2,1,2,2]],target:[[2,2,1,2,2,2],[2,1,1,1,2,2],[1,1,1,2,0,2],[2,1,2,0,0,0],[2,2,0,0,0,2],[2,2,2,0,2,2]],solution:[2,7,9,12,16,19,23,26,28,33]},{moves:2,base:[[2,1,2,0,2],[1,0,2,1,0],[2,2,1,2,2],[1,0,2,0,1],[2,1,2,1,2]],target:[[2,1,2,1,2],[1,1,2,1,1],[2,2,0,2,2],[1,1,2,1,1],[2,1,2,1,2]],solution:[3,12]},{moves:6,base:[[2,2,2,1,2,2,2],[2,2,1,1,1,2,2],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,1,1,2,1,1,2],[1,1,2,2,2,1,1]],target:[[2,2,2,0,2,2,2],[2,2,0,0,0,2,2],[0,0,0,0,0,0,0],[2,0,0,0,0,0,2],[2,2,0,0,0,2,2],[2,0,0,2,0,0,2],[0,0,2,2,2,0,0]],solution:[10,14,20,31,42,48]},{moves:30,base:[[2,0,0,0,2],[1,0,2,0,1],[1,2,2,2,1],[1,0,2,0,1],[2,0,1,0,2]],target:[[2,0,1,1,2],[1,0,2,1,0],[0,2,2,2,1],[0,1,2,0,1],[2,1,0,0,2]],solution:[3,16]},{moves:30,base:[[1,0,2,2,0,0],[2,2,0,0,2,2],[1,1,0,1,1,1],[2,0,2,2,1,2]],target:[[1,1,2,2,0,1],[2,2,1,0,2,2],[1,1,0,1,0,1],[2,1,2,2,1,2]],solution:[4,8,9,12,14,17,19,22]},{moves:30,base:[[0,2,2,2,0],[0,1,2,1,0],[1,0,1,0,1],[0,1,2,1,0],[0,2,2,2,0]],target:[[1,2,2,2,1],[0,1,2,1,0],[1,0,0,0,1],[0,1,2,1,0],[1,2,2,2,1]],solution:[0,9,10,14,15,18,19,24]},{moves:2,base:[[1,1,1],[1,1,1],[1,1,1]],target:[[1,0,0],[0,1,0],[0,0,1]],solution:[2,6]},{moves:6,base:[[1,0,1],[1,1,1],[1,0,1]],target:[[1,1,1],[1,1,1],[1,1,1]],solution:[0,1,2,6,7,8]},{moves:10,base:[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],target:[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]],solution:[1,2,4,7,8,11,13,14]},{moves:8,base:[[0,0,1,0,0],[1,2,1,2,1],[0,2,1,2,1],[1,2,0,2,0],[0,1,0,0,1]],target:[[0,1,0,1,0],[0,2,0,2,0],[0,2,0,2,0],[0,2,1,2,0],[0,1,1,1,0]],solution:[7,10,14,15,21,24]},{moves:6,base:[[1,0,1],[0,1,0],[1,1,1]],target:[[1,0,1],[0,1,0],[0,1,0]],solution:[0,2,3,5]},{moves:10,base:[[2,1,1,2],[1,1,2,1],[2,1,1,1],[2,2,1,2]],target:[[2,0,0,2],[0,0,2,0],[2,0,0,0],[2,2,0,2]],solution:[2,4,5,7,9,10,14]},{moves:25,base:[[0,1,0,0,1,0,1],[1,2,2,1,2,2,1],[1,2,0,0,1,2,1],[0,0,1,1,0,1,0],[0,2,1,1,1,2,1],[0,2,2,0,2,2,0],[1,0,1,0,0,0,1]],target:[[1,1,1,1,1,1,1],[1,2,2,0,2,2,1],[1,2,0,0,0,2,1],[1,0,0,0,0,0,1],[1,2,0,0,0,2,1],[1,2,2,0,2,2,1],[1,1,1,1,1,1,1]],solution:[1,2,3,4,14,16,17,21,28,31,34,35,41,42,44,45,46,47]},{moves:30,base:[[0,1,2,1,0],[1,1,0,1,1],[2,1,0,0,2],[1,0,0,0,1],[0,0,2,0,0]],target:[[0,0,2,0,0],[1,0,0,0,1],[2,0,0,1,2],[1,1,0,0,0],[0,1,2,0,1]],solution:[1,3,4,6,7,17,18]},{moves:30,base:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],target:[[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],solution:[6,9,21,24]},{moves:30,base:[[2,2,2,2,2,0],[1,1,0,2,2,1],[0,2,2,1,0,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,0,0,2,2,2]],target:[[2,2,2,2,2,1],[1,1,1,2,2,1],[1,2,2,1,1,1],[1,2,0,2,2,2],[2,2,1,2,2,2],[1,1,1,2,2,2]],solution:[6,11,12,15,17,18,20,32]},{moves:30,base:[[2,0,0,0,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,2]],target:[[2,1,1,1,2],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[2,1,1,1,2]],solution:[2,10,12,13,17]},{moves:30,base:[[0,1,0,0,1],[2,0,2,1,2],[2,1,2,0,2],[2,1,2,0,2],[0,0,1,1,1]],target:[[1,1,1,0,0],[2,1,2,1,2],[2,1,2,0,2],[2,1,2,1,2],[1,1,1,0,0]],solution:[2,3,6,11,20,24]},{moves:30,base:[[0,0,0,1,0,0],[0,1,1,1,1,1],[0,1,0,0,1,0],[1,1,0,1,1,1],[1,1,1,0,0,1],[1,0,0,1,1,0]],target:[[0,1,0,0,0,1],[0,0,1,1,0,1],[1,0,0,0,1,0],[0,1,1,1,1,0],[1,0,1,0,0,0],[0,0,0,1,0,0]],solution:[2,3,5,10,11,16,18,23,24,25,26,27,28,31,34]},{moves:30,base:[[2,2,0,2,2,2],[2,0,1,0,2,2],[2,2,0,2,0,2],[2,0,2,0,1,0],[0,1,0,2,0,2],[2,0,2,2,2,2]],target:[[2,2,0,2,2,2],[2,0,0,0,2,2],[2,2,0,2,0,2],[2,0,2,0,0,0],[0,0,0,2,0,2],[2,0,2,2,2,2]],solution:[2,9,14,16,19,21,23,25,26]},{moves:50,base:[[2,2,1,1,1,1,1,2,2,2,2],[2,1,1,1,1,1,1,1,0,1,2],[2,0,0,0,0,0,0,0,2,2,2],[1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,2],[2,2,0,0,0,0,0,0,2,2,2]],target:[[2,2,0,0,0,0,0,2,2,2,2],[2,0,0,0,0,0,0,0,0,0,2],[2,0,0,0,1,1,0,1,2,2,2],[0,1,0,1,1,1,0,1,1,1,2],[0,1,0,0,1,1,1,0,1,1,1],[2,0,1,1,1,1,0,0,0,0,2],[2,2,1,1,1,1,1,1,2,2,2]],solution:[3,4,5,6,12,13,18,20,24,25,27,28,34,36,39,42,46,47,49,50,51,52,54,57,58,59,61,63,64,69,70,71,72]},{moves:25,base:[[2,2,2,2,2,2,0,2,2],[2,2,2,2,2,2,0,0,2],[2,2,2,2,2,2,2,0,2],[2,2,2,2,2,2,2,0,0],[2,2,2,2,2,2,0,0,0],[2,2,2,2,2,0,0,0,0],[0,0,2,2,0,0,1,0,2],[2,0,0,0,0,0,0,1,2],[2,2,2,0,0,0,2,2,2]],target:[[2,2,2,2,2,2,1,2,2],[2,2,2,2,2,2,1,1,2],[2,2,2,2,2,2,2,1,2],[2,2,2,2,2,2,2,1,0],[2,2,2,2,2,2,1,0,0],[2,2,2,2,2,1,0,0,0],[1,1,2,2,1,0,0,0,2],[2,1,1,1,0,0,0,0,2],[2,2,2,0,0,0,2,2,2]],solution:[16,42,43,44,50,51,52,53,55,58,59,70]},{moves:60,base:[[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0]],target:[[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,1,0,1,0],[0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0]],solution:[0,1,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,28,29,30,32,33,34,35,36,37,39,40,41,42,43,44,46,47,48]},{moves:60,base:[[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1]],target:[[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[0,0,0,0,1,1,1],[1,1,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0],[1,1,1,0,0,0,0]],solution:[0,1,3,5,6,7,10,13,21,22,24,26,27,35,38,41,42,43,45,47,48]},{moves:50,base:[[2,1,0,2,1,1,2],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,1,0,1,1,1],[2,1,1,0,1,1,2],[2,2,1,1,0,2,2],[2,2,2,1,2,2,2]],target:[[2,1,1,2,1,1,2],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[2,1,1,1,1,1,2],[2,2,1,1,1,2,2],[2,2,2,1,2,2,2]],solution:[5,7,8,12,21,22,24,27,33]},{moves:50,base:[[1,2,1,2,1],[2,1,2,1,2],[1,2,0,2,1],[2,1,2,1,2],[1,2,1,2,1]],target:[[1,2,0,2,1],[2,0,2,0,2],[0,2,1,2,0],[2,0,2,0,2],[1,2,0,2,1]],solution:[2,10,12,14,22]},{moves:75,base:[[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1]],target:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,1,1,0,0,1,1,0,0,1,1,0],[1,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,1,1,0,0,1,1,0,0,1],[1,0,0,0,1,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1,1,0],[0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],solution:[1,2,3,5,6,8,9,10,12,13,14,19,21,23,24,25,28,31,34,35,36,47,50,52,53,54,57,58,60,64,65,66,67,71,72,76,77,78,79,83,85,86,89,90,91,93,96,107,108,109,112,115,118,119,120,122,124,129,130,131,133,134,135,137,138,140,141,142]},{moves:12,base:[[2,2,2,1,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[1,2,1,2,1,2,1],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,1,2,2,2]],target:[[2,2,2,0,2,2,2],[2,2,0,2,0,2,2],[2,0,2,1,2,0,2],[0,2,1,2,1,2,0],[2,0,2,1,2,0,2],[2,2,0,2,0,2,2],[2,2,2,0,2,2,2]],solution:[11,15,17,23,25,31,33,37]},{moves:36,base:[[2,2,1,1,1,1,1,2,2],[2,1,1,1,1,1,1,1,2],[1,1,2,2,1,2,2,1,1],[1,1,2,0,1,2,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1]],target:[[2,2,0,0,0,0,0,2,2],[2,0,0,0,0,0,0,0,2],[0,0,2,2,0,2,2,0,0],[0,0,2,1,0,2,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0],[0,0,1,0,0,1,0,0,1],[0,2,0,2,0,2,0,2,0]],solution:[2,4,5,13,26,27,30,31,36,37,40,43,44,48,49,53,54,57,60,71]}].map((e,n)=>{const{base:s,target:i,moves:r,solution:o}=e;s.forEach((h,_)=>h.forEach((m,E)=>{m===2&&(s[_][E]=-1,i[_][E]=-1)}));const a=s[0].length,l=s.length,c=s.map((h,_)=>h.map((m,E)=>m===-1?_*a+E:null)).flat().filter(h=>h||h===0),u=new Cs({width:a,height:l,exclude:c,unlockCategory:0});u.setMatrix(s);const d=new Cs({width:a,height:l,exclude:c,unlockCategory:0});return d.setMatrix(i),new Wr({base:u,target:d,moves:r,solution:o,id:n})}));let Fr=Wr;const cd=t=>`${t}`,Ur={timePlayed:{name:"Time Played",display:t=>{const e=Math.floor(t/86400),n=Math.floor(t/3600)%24,s=Math.floor(t/60)%60,i=t%60;return`${e}d ${n}h ${s}m ${i}s`}},layoutsSolved:{name:"Layouts Solved",display:cd},tilesSwapped:{name:"Tiles Swapped",display:cd},puzzlesCompleted:{name:"Puzzles Completed",display:t=>`${t} / ${Fr.PUZZLES.length}`}},Dw=Object.fromEntries(Object.keys(Ur).map(t=>[t,Ur[t].initialValue??0])),ot=Fm("store",()=>{const t=nt({}),e=nt({}),n=nt({}),s=nt(2),i=nt([]),r=nt({...Dw});setInterval(()=>{r.value.timePlayed++},1e3);function o(u){t.value=u}function a(u){e.value=u}function l(u){n.value=u}function c(u){i.value.includes(u)||(i.value.push(u),r.value.puzzlesCompleted++)}return jo(i,"solved-puzzles"),jo(s,"difficulty"),jo(r,"stats"),{currentLayout:t,currentPuzzle:e,currentChallenge:n,difficulty:s,solvedPuzzles:i,setLayout:o,setPuzzle:a,setChallenge:l,solvePuzzle:c,stats:r}}),He=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Lw={components:{RouterView:xh},setup(){ot()}};function Fw(t,e,n,s,i,r){const o=Eg("router-view");return Q(),Fn(o,null,{default:xt(({Component:a})=>[V(ci,{name:"fade",mode:"out-in"},{default:xt(()=>[(Q(),Fn(wg(a)))]),_:2},1024)]),_:1})}const Uw=He(Lw,[["render",Fw]]);const $w={props:["name","image","path"],methods:{openMode(){this.$router.push(this.$props.path)}}},Ww=["src"];function Bw(t,e,n,s,i,r){return Q(),re("div",{onClick:e[0]||(e[0]=(...o)=>r.openMode&&r.openMode(...o))},[te("span",null,st(n.name),1),te("img",{src:n.image},null,8,Ww)])}const qo=He($w,[["render",Bw],["__scopeId","data-v-7bbaab8a"]]),Hw="/tileswap-naenae/images/freeplay.png",zw="/tileswap-naenae/images/puzzles.png",Vw="/tileswap-naenae/images/challenges.png";const nc={props:["text","black"],computed:{backgroundColor(){return this.black!==void 0?"black":"white"},color(){return this.black!==void 0?"white":"black"}}},ud=()=>{rl(t=>({e7a07ef6:t.backgroundColor,"426355da":t.color}))},dd=nc.setup;nc.setup=dd?(t,e)=>(ud(),dd(t,e)):ud;function jw(t,e,n,s,i,r){return Q(),re("button",null,st(n.text),1)}const _t=He(nc,[["render",jw],["__scopeId","data-v-d91b9173"]]),qw={props:["text","to","black"],methods:{onClick(){this.$router.push(this.to)}}},Vn=Object.assign(qw,{__name:"LinkButton",setup(t){return(e,n)=>(Q(),Fn(_t,{black:t.black,text:t.text,onClick:e.onClick},null,8,["black","text","onClick"]))}});const Kw={props:["modelValue"],emits:["update:modelValue"],methods:{close(){this.$emit("update:modelValue",!1)}}},Gw={class:"modal"};function Yw(t,e,n,s,i,r){return Q(),re("div",null,[V(ci,{name:"fade"},{default:xt(()=>[Xo(te("div",{class:"background",onClick:e[0]||(e[0]=(...o)=>r.close&&r.close(...o))},null,512),[[ca,n.modelValue]])]),_:1}),V(ci,{name:"zoom"},{default:xt(()=>[Xo(te("div",Gw,[bg(t.$slots,"default",{},void 0,!0)],512),[[ca,n.modelValue]])]),_:3})])}const Ii=He(Kw,[["render",Yw],["__scopeId","data-v-8c01fd0a"]]),Qw={computed:{list(){const{stats:t}=ot();return Object.keys(Ur).map(e=>{const n=Ur[e];return`${n.name}: ${n.display(t[e])}`})}}};function Jw(t,e,n,s,i,r){return Q(),re("ul",null,[(Q(!0),re(ke,null,Ln(r.list,(o,a)=>(Q(),re("li",{key:a},st(o),1))),128))])}const Xw=He(Qw,[["render",Jw]]);const qp=t=>(ki("data-v-5f63588e"),t=t(),xi(),t),Zw={class:"container"},eb=qp(()=>te("h1",{class:"main-title"},[ch("Tile"),te("span",null,"Swap")],-1)),tb={class:"bottom left"},nb=qp(()=>te("h1",null,"Stats",-1)),sb={data(){return{user:Tl,isSignedIn:Sl,showStats:!1}},methods:{signOut:ba,signInForm(){E2(prompt("Email"),prompt("Password"))},openStats(){this.showStats=!0}}},ib=Object.assign(sb,{__name:"HomeView",setup(t){return(e,n)=>(Q(),re("div",Zw,[eb,te("main",null,[V(qo,{name:"Freeplay",image:tt(Hw),path:"/freeplaySelection"},null,8,["image"]),V(qo,{name:"Puzzles",image:tt(zw),path:"/puzzleSelection"},null,8,["image"]),V(qo,{name:"Challenges",image:tt(Vw),path:"/challengeSelection"},null,8,["image"])]),tt(Sl)?(Q(),re("p",{key:0,class:"top left",onClick:n[0]||(n[0]=(...s)=>tt(ba)&&tt(ba)(...s))}," You are logged in as "+st(tt(Tl).displayName),1)):(Q(),re("p",{key:1,class:"top left",onClick:n[1]||(n[1]=(...s)=>e.signInForm&&e.signInForm(...s))}," You are not logged in ")),te("div",tb,[V(_t,{text:"stats",onClick:e.openStats},null,8,["onClick"]),V(Vn,{text:"tutorial",to:"/tutorial"})]),V(Ii,{modelValue:e.showStats,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showStats=s)},{default:xt(()=>[nb,V(Xw),V(_t,{black:"",text:"close",onClick:n[2]||(n[2]=s=>e.showStats=!1)})]),_:1},8,["modelValue"])]))}}),rb=He(ib,[["__scopeId","data-v-5f63588e"]]);const ob=["data-level"],ab={props:["layout","completion"],data(){return{tileSizePreview:1/Math.sqrt(this.layout.height*this.layout.width)*50}},computed:{includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){ot().setLayout(this.layout),this.$router.push("/freeplayGame")}}},lb=Object.assign(ab,{__name:"LayoutSelectionButton",setup(t){return(e,n)=>(Q(),re("div",{"data-level":t.completion,class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(Q(!0),re(ke,null,Ln(e.includedTiles,s=>(Q(),re("div",{key:"t"+s,class:"tile",style:Ti({transform:`translate(${e.tileSizePreview*(s%t.layout.width-t.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/t.layout.width)-t.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))],8,ob))}}),cb=He(lb,[["__scopeId","data-v-e2c2d84b"]]);const ub=t=>(ki("data-v-7bec83c9"),t=t(),xi(),t),db=ub(()=>te("h1",{class:"title"},"Select a layout",-1)),hb={class:"layouts"},fb={data(){return{layouts:Cs.LAYOUTS}},methods:{goHome(){this.$router.push("/")}}},pb=Object.assign(fb,{__name:"FreeplaySelection",setup(t){return(e,n)=>(Q(),re("main",null,[db,V(Vn,{class:"top right",text:"back",to:"/"}),te("div",hb,[(Q(!0),re(ke,null,Ln(e.layouts,(s,i)=>(Q(),Fn(cb,{layout:s,completion:1,key:i},null,8,["layout"]))),128))])]))}}),_b=He(pb,[["__scopeId","data-v-7bec83c9"]]);const gb={props:["puzzle"],data(){const{width:t,height:e}=this.puzzle.target;return{tileSizePreview:1/Math.sqrt(t*e)*50}},computed:{layout(){return this.puzzle.target},solved(){return ot().solvedPuzzles.includes(this.puzzle.id)},includedTiles(){return new Array(this.layout.width*this.layout.height).fill(0).map((t,e)=>e).filter(t=>!this.layout.exclude.includes(t))}},methods:{openGame(){const t=ot();t.setPuzzle(this.puzzle),t.setLayout(this.layout),this.$router.push("/puzzleGame")}}},mb=Object.assign(gb,{__name:"PuzzleSelectionButton",setup(t){return rl(e=>({e8a562da:e.solved?"#DAC778":"white"})),(e,n)=>(Q(),re("div",{class:"container",onClick:n[0]||(n[0]=(...s)=>e.openGame&&e.openGame(...s))},[(Q(!0),re(ke,null,Ln(e.includedTiles,s=>(Q(),re("div",{key:"t"+s,class:"tile",style:Ti({backgroundColor:e.layout.isWhite(s)?"#b5ab9e":"black",transform:`translate(${e.tileSizePreview*(s%e.layout.width-e.layout.width/2)+50}px, ${e.tileSizePreview*(Math.floor(s/e.layout.width)-e.layout.height/2)+50}px)`,width:`${e.tileSizePreview-1}px`,height:`${e.tileSizePreview-1}px`})},null,4))),128))]))}}),yb=He(mb,[["__scopeId","data-v-12aecac5"]]);const vb=t=>(ki("data-v-de8b964b"),t=t(),xi(),t),Cb=vb(()=>te("h1",{class:"title"},"Select a puzzle",-1)),Eb={class:"layouts"},wb={data(){return{puzzles:Fr.PUZZLES}}},bb=Object.assign(wb,{__name:"PuzzleSelection",setup(t){return(e,n)=>(Q(),re("main",null,[Cb,V(Vn,{class:"top right",text:"back",to:"/"}),te("div",Eb,[(Q(!0),re(ke,null,Ln(e.puzzles,(s,i)=>(Q(),Fn(yb,{puzzle:s,key:i},null,8,["puzzle"]))),128))])]))}}),Ib=He(bb,[["__scopeId","data-v-de8b964b"]]),Tb={__name:"ChallengeSelection",setup(t){return(e,n)=>(Q(),re("div",null,[V(Vn,{class:"top right",text:"back",to:"/"})]))}};const Sb=t=>(ki("data-v-7bae2cef"),t=t(),xi(),t),kb=Sb(()=>te("div",{class:"inner-tile"},[te("div",{class:"front"}),te("div",{class:"back"})],-1)),xb=[kb],Rb={props:["color","visibility","small"],data(){return{tileSize:"30px"}},mounted(){const t=ot(),e=()=>{const{width:n,height:s}=t.currentLayout;this.tileSize=1/(Math.sqrt(n**2+s**2)*(window.innerWidth>600?.5:.8))*300*(this.$props.small!==void 0?.5:1)+"px"};Nn(()=>t.currentLayout,e,{deep:!0,immediate:!1}),e(),window.addEventListener("resize",e)}},Ab=Object.assign(Rb,{__name:"Tile",setup(t){return rl(e=>({"05561686":e.tileSize,"95ddefee":t.visibility})),(e,n)=>(Q(),re("div",{class:dn(["tile",{"flipped-tile":t.color==="black"}])},xb,2))}}),Pb=He(Ab,[["__scopeId","data-v-7bae2cef"]]);const Nb={props:["modelValue","small","disabled"],emits:["update:modelValue","swap"],methods:{onTileClick(t,e){if(this.disabled===void 0){const n=ot(),s=this.modelValue.copy(),i=s.swapTiles(t,e);n.stats.tilesSwapped+=i,this.$emit("update:modelValue",s),this.$emit("swap")}}}},Ob=Object.assign(Nb,{__name:"Layout",setup(t){return(e,n)=>(Q(),re("div",null,[(Q(!0),re(ke,null,Ln(t.modelValue.matrix,(s,i)=>(Q(),re("div",{class:"row",key:"row"+i},[(Q(!0),re(ke,null,Ln(s,(r,o)=>(Q(),Fn(Pb,{class:"tile",small:t.small,color:r===1?"white":"black",visibility:r===-1?"hidden":"visible",key:i+""+o,onClick:a=>e.onTileClick(i,o)},null,8,["small","color","visibility","onClick"]))),128))]))),128))]))}}),$r=He(Ob,[["__scopeId","data-v-90639c12"]]);const Mb={class:"diff"},Db=["value","max"],Lb={props:["modelValue"],emits:["update:modelValue"],data(){const t=ot();return{difficulties:["very easy","easy","normal","hard","very hard"],max:t.currentLayout.width*t.currentLayout.height-t.currentLayout.exclude.length}},computed:{difficultyText(){return this.difficulties[Math.floor((this.modelValue-1)/(this.max/this.difficulties.length))]}},mounted(){this.modelValue>this.max&&this.$emit("update:modelValue",this.max)}},Fb=Object.assign(Lb,{__name:"Slider",setup(t){return(e,n)=>(Q(),re("div",Mb,[te("h2",null,"difficulty - "+st(e.difficultyText),1),te("input",{type:"range",min:"2",value:t.modelValue,onInput:n[0]||(n[0]=s=>e.$emit("update:modelValue",parseInt(s.target.value))),max:e.max},null,40,Db)]))}}),Ub=He(Fb,[["__scopeId","data-v-2c2f28e6"]]),Kp=()=>{let t=nt(window.innerWidth),e=nt(window.innerHeight);const n=()=>t.value=window.innerWidth,s=()=>e.value=window.innerHeight;ii(()=>window.addEventListener("resize",n)),ii(()=>window.addEventListener("resize",s)),ri(()=>window.removeEventListener("resize",n)),ri(()=>window.removeEventListener("resize",s));const i=Fe(()=>t.value),r=Fe(()=>e.value);return{width:i,height:r}};const $b={class:"top-menu"},Wb={data(){const t=ot(),e=t.currentLayout,{width:n}=Kp();return{windowWidth:n,store:t,layout:e,difficulty:t.difficulty,showModal:!1,moves:0}},watch:{difficulty(){this.store.difficulty=this.difficulty},showModal(){this.showModal||this.randomize()}},methods:{handleClick(){this.moves++,this.layout.isSolved()&&(this.store.stats.layoutsSolved++,this.showModal=!0)},randomize(){this.moves=0,this.layout=this.layout.generatePosition(this.difficulty)}},mounted(){this.randomize()}},Bb=Object.assign(Wb,{__name:"FreeplayGame",setup(t){return(e,n)=>(Q(),re("div",null,[te("div",$b,[V(_t,{text:"randomize",onClick:e.randomize},null,8,["onClick"]),V(Ub,{modelValue:e.difficulty,"onUpdate:modelValue":n[0]||(n[0]=s=>e.difficulty=s)},null,8,["modelValue"])]),Xo(te("p",{class:dn(["move-counter top",{left:e.windowWidth<600,center:e.windowWidth>=600}])},st(e.moves)+" move"+st(e.moves>1?"s":""),3),[[ca,e.moves>0]]),V(Vn,{class:"top right",text:"back",to:"/freeplaySelection"}),te("main",null,[V($r,{modelValue:e.layout,"onUpdate:modelValue":n[1]||(n[1]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"])]),V(Ii,{modelValue:e.showModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showModal=s)},{default:xt(()=>[te("h1",null,"you won in "+st(e.moves)+" move"+st(e.moves>1?"s":"")+"!",1),V(_t,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showModal=!1)})]),_:1},8,["modelValue"])]))}}),Hb=He(Bb,[["__scopeId","data-v-c52d43da"]]);const zb=t=>(ki("data-v-6600cda9"),t=t(),xi(),t),Vb=zb(()=>te("h1",null,"no moves remaining!",-1)),jb={data(){const e=ot().currentPuzzle,n=e.base.copy(),{width:s}=Kp();return{windowWidth:s,layout:n,puzzle:e,remainingMoves:e.moves,maxMoves:e.moves,showWinModal:!1,showLostModal:!1}},computed:{moves(){return this.maxMoves-this.remainingMoves}},watch:{showWinModal(){this.showWinModal||this.$router.push("/puzzleSelection")},showLostModal(){this.showLostModal||this.reset()}},methods:{reset(){this.showLostModal=!1,this.remainingMoves=this.maxMoves,this.layout.setMatrix(this.puzzle.base.matrix)},handleClick(){if(this.remainingMoves>0){const t=ot();this.remainingMoves--,this.puzzle.isSolvedWith(this.layout)?(this.showWinModal=!0,t.solvePuzzle(this.puzzle.id)):this.remainingMoves===0&&(this.showLostModal=!0)}}}},qb=Object.assign(jb,{__name:"PuzzleGame",setup(t){return(e,n)=>(Q(),re("div",null,[V(Vn,{class:"top right",text:"back",to:"/puzzleSelection"}),te("div",{class:dn(["info center",{top:e.windowWidth>600,bottom:e.windowWidth<=600}])},[te("h1",null,st(e.remainingMoves)+" move"+st(e.remainingMoves>1?"s":"")+" remaining",1),V(_t,{text:"retry",onClick:e.reset},null,8,["onClick"])],2),te("main",null,[V($r,{modelValue:e.layout,"onUpdate:modelValue":n[0]||(n[0]=s=>e.layout=s),onSwap:e.handleClick},null,8,["modelValue","onSwap"])]),te("div",{class:dn(["target",{left:e.windowWidth>600,middle:e.windowWidth>600,top:e.windowWidth<=600,center:e.windowWidth<=600}])},[V($r,{modelValue:e.puzzle.target,"onUpdate:modelValue":n[1]||(n[1]=s=>e.puzzle.target=s),disabled:"",small:""},null,8,["modelValue"])],2),V(Ii,{modelValue:e.showWinModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showWinModal=s)},{default:xt(()=>[te("h1",null,"you won in "+st(e.moves)+" move"+st(e.moves>1?"s":"")+"!",1),V(_t,{black:"",text:"yay!",onClick:n[2]||(n[2]=s=>e.showWinModal=!1)})]),_:1},8,["modelValue"]),V(Ii,{modelValue:e.showLostModal,"onUpdate:modelValue":n[4]||(n[4]=s=>e.showLostModal=s)},{default:xt(()=>[Vb,V(_t,{black:"",text:"retry",onClick:e.reset},null,8,["onClick"]),V(Vn,{black:"",text:"back",to:"/puzzleSelection"})]),_:1},8,["modelValue"])]))}}),Kb=He(qb,[["__scopeId","data-v-6600cda9"]]),Gb={};function Yb(t,e){return Q(),re("div")}const Qb=He(Gb,[["render",Yb]]),Jb=te("h1",{class:"title"},"how to play",-1),Xb={key:0},Zb=te("h1",null,"When you click on a tile , that tile and all its neighbours toggle color .",-1),eI=te("h1",null,"Try to get all the tiles to be white!",-1),tI={key:1},nI=te("h1",null,"Nice! Here's another one",-1),sI={key:2},iI=te("h1",null,"Well done! You're ready to go",-1),rI=te("h1",{class:"text-center"},"Try it here!",-1),oI={data(){const t=ot(),e=[[[0,0,0],[0,0,0],[0,0,0]],[[1,1,0,0],[1,1,0,0],[1,1,1,1],[1,1,1,1]]].map(s=>{const i=new Cs({width:s[0].length,height:s.length});return i.setMatrix(s),i}),n=e[0].copy();return t.setLayout(n),{layout:n,layouts:e,store:t,showModal:!0,shake:!1,stage:-1}},watch:{showModal(t){if(!t){if(this.stage++,this.stage>=this.layouts.length){this.$router.push("/freeplaySelection");return}this.layout=this.layouts[this.stage].copy(),this.store.setLayout(this.layout)}}},methods:{handleClick(){if(!this.layout.isSolved()){this.layout.setMatrix(this.layouts[this.stage].matrix),this.shake=!0,setTimeout(()=>{this.shake=!1},1500);return}this.showModal=!0}}},aI=Object.assign(oI,{__name:"TutorialView",setup(t){return(e,n)=>(Q(),re("div",null,[Jb,V(Ii,{modelValue:e.showModal,"onUpdate:modelValue":n[3]||(n[3]=s=>e.showModal=s)},{default:xt(()=>[e.stage===-1?(Q(),re("div",Xb,[Zb,eI,V(_t,{black:"",text:"ok!",onClick:n[0]||(n[0]=s=>e.showModal=!1)})])):e.stage===0?(Q(),re("div",tI,[nI,V(_t,{black:"",text:"let's go!",onClick:n[1]||(n[1]=s=>e.showModal=!1)})])):(Q(),re("div",sI,[iI,V(_t,{black:"",text:"start playing",onClick:n[2]||(n[2]=s=>e.showModal=!1)})]))]),_:1},8,["modelValue"]),rI,V($r,{class:dn([{shake:e.shake},"center middle"]),modelValue:e.layout,"onUpdate:modelValue":n[4]||(n[4]=s=>e.layout=s),onSwap:e.handleClick},null,8,["class","modelValue","onSwap"])]))}}),lI=L1({history:Zm("/tileswap-naenae/"),routes:[{path:"/",name:"home",component:rb},{path:"/tutorial",name:"tutorial",component:aI},{path:"/freeplaySelection",name:"freeplaySelection",component:_b},{path:"/puzzleSelection",name:"puzzleSelection",component:Ib},{path:"/challengeSelection",name:"challengeSelection",component:Tb},{path:"/freeplayGame",name:"freeplayGame",component:Hb},{path:"/puzzleGame",name:"puzzleGame",component:Kb},{path:"/challengeGame",name:"challengeGame",component:Qb}]}),sc=xm(Uw),Gp=Pm();Ri(Gp);sc.use(lI);sc.use(Gp);sc.mount("#app");
