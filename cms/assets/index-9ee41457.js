(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))h(p);new MutationObserver(p=>{for(const k of p)if(k.type==="childList")for(const m of k.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function c(p){const k={};return p.integrity&&(k.integrity=p.integrity),p.referrerPolicy&&(k.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?k.credentials="include":p.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function h(p){if(p.ep)return;p.ep=!0;const k=c(p);fetch(p.href,k)}})();function ic(s,a){const c=Object.create(null),h=s.split(",");for(let p=0;p<h.length;p++)c[h[p]]=!0;return a?p=>!!c[p.toLowerCase()]:p=>!!c[p]}const cM="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",dM=ic(cM);function ba(s){if(Ot(s)){const a={};for(let c=0;c<s.length;c++){const h=s[c],p=je(h)?gM(h):ba(h);if(p)for(const k in p)a[k]=p[k]}return a}else{if(je(s))return s;if(De(s))return s}}const uM=/;(?![^(]*\))/g,hM=/:([^]+)/,pM=/\/\*.*?\*\//gs;function gM(s){const a={};return s.replace(pM,"").split(uM).forEach(c=>{if(c){const h=c.split(hM);h.length>1&&(a[h[0].trim()]=h[1].trim())}}),a}function _t(s){let a="";if(je(s))a=s;else if(Ot(s))for(let c=0;c<s.length;c++){const h=_t(s[c]);h&&(a+=h+" ")}else if(De(s))for(const c in s)s[c]&&(a+=c+" ");return a.trim()}function fM(s){if(!s)return null;let{class:a,style:c}=s;return a&&!je(a)&&(s.class=_t(a)),c&&(s.style=ba(c)),s}const mM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kM=ic(mM);function nA(s){return!!s||s===""}function bM(s,a){if(s.length!==a.length)return!1;let c=!0;for(let h=0;c&&h<s.length;h++)c=xi(s[h],a[h]);return c}function xi(s,a){if(s===a)return!0;let c=U0(s),h=U0(a);if(c||h)return c&&h?s.getTime()===a.getTime():!1;if(c=la(s),h=la(a),c||h)return s===a;if(c=Ot(s),h=Ot(a),c||h)return c&&h?bM(s,a):!1;if(c=De(s),h=De(a),c||h){if(!c||!h)return!1;const p=Object.keys(s).length,k=Object.keys(a).length;if(p!==k)return!1;for(const m in s){const v=s.hasOwnProperty(m),_=a.hasOwnProperty(m);if(v&&!_||!v&&_||!xi(s[m],a[m]))return!1}}return String(s)===String(a)}function sc(s,a){return s.findIndex(c=>xi(c,a))}const xt=s=>je(s)?s:s==null?"":Ot(s)||De(s)&&(s.toString===iA||!Vt(s.toString))?JSON.stringify(s,oA,2):String(s),oA=(s,a)=>a&&a.__v_isRef?oA(s,a.value):nr(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((c,[h,p])=>(c[`${h} =>`]=p,c),{})}:ks(a)?{[`Set(${a.size})`]:[...a.values()]}:De(a)&&!Ot(a)&&!sA(a)?String(a):a,ye={},er=[],Ao=()=>{},_M=()=>!1,wM=/^on[^a-z]/,_a=s=>wM.test(s),Oh=s=>s.startsWith("onUpdate:"),Ye=Object.assign,Lh=(s,a)=>{const c=s.indexOf(a);c>-1&&s.splice(c,1)},vM=Object.prototype.hasOwnProperty,ue=(s,a)=>vM.call(s,a),Ot=Array.isArray,nr=s=>pr(s)==="[object Map]",ks=s=>pr(s)==="[object Set]",U0=s=>pr(s)==="[object Date]",AM=s=>pr(s)==="[object RegExp]",Vt=s=>typeof s=="function",je=s=>typeof s=="string",la=s=>typeof s=="symbol",De=s=>s!==null&&typeof s=="object",zh=s=>De(s)&&Vt(s.then)&&Vt(s.catch),iA=Object.prototype.toString,pr=s=>iA.call(s),CM=s=>pr(s).slice(8,-1),sA=s=>pr(s)==="[object Object]",Rh=s=>je(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Xr=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rc=s=>{const a=Object.create(null);return c=>a[c]||(a[c]=s(c))},yM=/-(\w)/g,Rn=rc(s=>s.replace(yM,(a,c)=>c?c.toUpperCase():"")),xM=/\B([A-Z])/g,lo=rc(s=>s.replace(xM,"-$1").toLowerCase()),wa=rc(s=>s.charAt(0).toUpperCase()+s.slice(1)),ta=rc(s=>s?`on${wa(s)}`:""),rr=(s,a)=>!Object.is(s,a),or=(s,a)=>{for(let c=0;c<s.length;c++)s[c](a)},Gl=(s,a,c)=>{Object.defineProperty(s,a,{configurable:!0,enumerable:!1,value:c})},Wl=s=>{const a=parseFloat(s);return isNaN(a)?s:a},Kl=s=>{const a=je(s)?Number(s):NaN;return isNaN(a)?s:a};let H0;const EM=()=>H0||(H0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Yn;class jh{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yn,!a&&Yn&&(this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const c=Yn;try{return Yn=this,a()}finally{Yn=c}}}on(){Yn=this}off(){Yn=this.parent}stop(a){if(this._active){let c,h;for(c=0,h=this.effects.length;c<h;c++)this.effects[c].stop();for(c=0,h=this.cleanups.length;c<h;c++)this.cleanups[c]();if(this.scopes)for(c=0,h=this.scopes.length;c<h;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!a){const p=this.parent.scopes.pop();p&&p!==this&&(this.parent.scopes[this.index]=p,p.index=this.index)}this.parent=void 0,this._active=!1}}}function DM(s){return new jh(s)}function rA(s,a=Yn){a&&a.active&&a.effects.push(s)}function aA(){return Yn}function SM(s){Yn&&Yn.cleanups.push(s)}const $h=s=>{const a=new Set(s);return a.w=0,a.n=0,a},lA=s=>(s.w&Ei)>0,cA=s=>(s.n&Ei)>0,IM=({deps:s})=>{if(s.length)for(let a=0;a<s.length;a++)s[a].w|=Ei},MM=s=>{const{deps:a}=s;if(a.length){let c=0;for(let h=0;h<a.length;h++){const p=a[h];lA(p)&&!cA(p)?p.delete(s):a[c++]=p,p.w&=~Ei,p.n&=~Ei}a.length=c}},Yl=new WeakMap;let Zr=0,Ei=1;const ih=30;let wo;const ls=Symbol(""),sh=Symbol("");class va{constructor(a,c=null,h){this.fn=a,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,rA(this,h)}run(){if(!this.active)return this.fn();let a=wo,c=Ci;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=wo,wo=this,Ci=!0,Ei=1<<++Zr,Zr<=ih?IM(this):q0(this),this.fn()}finally{Zr<=ih&&MM(this),Ei=1<<--Zr,wo=this.parent,Ci=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wo===this?this.deferStop=!0:this.active&&(q0(this),this.onStop&&this.onStop(),this.active=!1)}}function q0(s){const{deps:a}=s;if(a.length){for(let c=0;c<a.length;c++)a[c].delete(s);a.length=0}}function TM(s,a){s.effect&&(s=s.effect.fn);const c=new va(s);a&&(Ye(c,a),a.scope&&rA(c,a.scope)),(!a||!a.lazy)&&c.run();const h=c.run.bind(c);return h.effect=c,h}function BM(s){s.effect.stop()}let Ci=!0;const dA=[];function gr(){dA.push(Ci),Ci=!1}function fr(){const s=dA.pop();Ci=s===void 0?!0:s}function $n(s,a,c){if(Ci&&wo){let h=Yl.get(s);h||Yl.set(s,h=new Map);let p=h.get(c);p||h.set(c,p=$h()),uA(p)}}function uA(s,a){let c=!1;Zr<=ih?cA(s)||(s.n|=Ei,c=!lA(s)):c=!s.has(wo),c&&(s.add(wo),wo.deps.push(s))}function ei(s,a,c,h,p,k){const m=Yl.get(s);if(!m)return;let v=[];if(a==="clear")v=[...m.values()];else if(c==="length"&&Ot(s)){const _=Number(h);m.forEach((x,C)=>{(C==="length"||C>=_)&&v.push(x)})}else switch(c!==void 0&&v.push(m.get(c)),a){case"add":Ot(s)?Rh(c)&&v.push(m.get("length")):(v.push(m.get(ls)),nr(s)&&v.push(m.get(sh)));break;case"delete":Ot(s)||(v.push(m.get(ls)),nr(s)&&v.push(m.get(sh)));break;case"set":nr(s)&&v.push(m.get(ls));break}if(v.length===1)v[0]&&rh(v[0]);else{const _=[];for(const x of v)x&&_.push(...x);rh($h(_))}}function rh(s,a){const c=Ot(s)?s:[...s];for(const h of c)h.computed&&G0(h);for(const h of c)h.computed||G0(h)}function G0(s,a){(s!==wo||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}function NM(s,a){var c;return(c=Yl.get(s))===null||c===void 0?void 0:c.get(a)}const PM=ic("__proto__,__v_isRef,__isVue"),hA=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(la)),OM=ac(),LM=ac(!1,!0),zM=ac(!0),RM=ac(!0,!0),W0=jM();function jM(){const s={};return["includes","indexOf","lastIndexOf"].forEach(a=>{s[a]=function(...c){const h=ee(this);for(let k=0,m=this.length;k<m;k++)$n(h,"get",k+"");const p=h[a](...c);return p===-1||p===!1?h[a](...c.map(ee)):p}}),["push","pop","shift","unshift","splice"].forEach(a=>{s[a]=function(...c){gr();const h=ee(this)[a].apply(this,c);return fr(),h}}),s}function $M(s){const a=ee(this);return $n(a,"has",s),a.hasOwnProperty(s)}function ac(s=!1,a=!1){return function(h,p,k){if(p==="__v_isReactive")return!s;if(p==="__v_isReadonly")return s;if(p==="__v_isShallow")return a;if(p==="__v_raw"&&k===(s?a?_A:bA:a?kA:mA).get(h))return h;const m=Ot(h);if(!s){if(m&&ue(W0,p))return Reflect.get(W0,p,k);if(p==="hasOwnProperty")return $M}const v=Reflect.get(h,p,k);return(la(p)?hA.has(p):PM(p))||(s||$n(h,"get",p),a)?v:ie(v)?m&&Rh(p)?v:v.value:De(v)?s?Vh(v):bs(v):v}}const FM=pA(),VM=pA(!0);function pA(s=!1){return function(c,h,p,k){let m=c[h];if(ps(m)&&ie(m)&&!ie(p))return!1;if(!s&&(!ca(p)&&!ps(p)&&(m=ee(m),p=ee(p)),!Ot(c)&&ie(m)&&!ie(p)))return m.value=p,!0;const v=Ot(c)&&Rh(h)?Number(h)<c.length:ue(c,h),_=Reflect.set(c,h,p,k);return c===ee(k)&&(v?rr(p,m)&&ei(c,"set",h,p):ei(c,"add",h,p)),_}}function UM(s,a){const c=ue(s,a);s[a];const h=Reflect.deleteProperty(s,a);return h&&c&&ei(s,"delete",a,void 0),h}function HM(s,a){const c=Reflect.has(s,a);return(!la(a)||!hA.has(a))&&$n(s,"has",a),c}function qM(s){return $n(s,"iterate",Ot(s)?"length":ls),Reflect.ownKeys(s)}const gA={get:OM,set:FM,deleteProperty:UM,has:HM,ownKeys:qM},fA={get:zM,set(s,a){return!0},deleteProperty(s,a){return!0}},GM=Ye({},gA,{get:LM,set:VM}),WM=Ye({},fA,{get:RM}),Fh=s=>s,lc=s=>Reflect.getPrototypeOf(s);function Il(s,a,c=!1,h=!1){s=s.__v_raw;const p=ee(s),k=ee(a);c||(a!==k&&$n(p,"get",a),$n(p,"get",k));const{has:m}=lc(p),v=h?Fh:c?qh:da;if(m.call(p,a))return v(s.get(a));if(m.call(p,k))return v(s.get(k));s!==p&&s.get(a)}function Ml(s,a=!1){const c=this.__v_raw,h=ee(c),p=ee(s);return a||(s!==p&&$n(h,"has",s),$n(h,"has",p)),s===p?c.has(s):c.has(s)||c.has(p)}function Tl(s,a=!1){return s=s.__v_raw,!a&&$n(ee(s),"iterate",ls),Reflect.get(s,"size",s)}function K0(s){s=ee(s);const a=ee(this);return lc(a).has.call(a,s)||(a.add(s),ei(a,"add",s,s)),this}function Y0(s,a){a=ee(a);const c=ee(this),{has:h,get:p}=lc(c);let k=h.call(c,s);k||(s=ee(s),k=h.call(c,s));const m=p.call(c,s);return c.set(s,a),k?rr(a,m)&&ei(c,"set",s,a):ei(c,"add",s,a),this}function Q0(s){const a=ee(this),{has:c,get:h}=lc(a);let p=c.call(a,s);p||(s=ee(s),p=c.call(a,s)),h&&h.call(a,s);const k=a.delete(s);return p&&ei(a,"delete",s,void 0),k}function Z0(){const s=ee(this),a=s.size!==0,c=s.clear();return a&&ei(s,"clear",void 0,void 0),c}function Bl(s,a){return function(h,p){const k=this,m=k.__v_raw,v=ee(m),_=a?Fh:s?qh:da;return!s&&$n(v,"iterate",ls),m.forEach((x,C)=>h.call(p,_(x),_(C),k))}}function Nl(s,a,c){return function(...h){const p=this.__v_raw,k=ee(p),m=nr(k),v=s==="entries"||s===Symbol.iterator&&m,_=s==="keys"&&m,x=p[s](...h),C=c?Fh:a?qh:da;return!a&&$n(k,"iterate",_?sh:ls),{next(){const{value:E,done:A}=x.next();return A?{value:E,done:A}:{value:v?[C(E[0]),C(E[1])]:C(E),done:A}},[Symbol.iterator](){return this}}}}function pi(s){return function(...a){return s==="delete"?!1:this}}function KM(){const s={get(k){return Il(this,k)},get size(){return Tl(this)},has:Ml,add:K0,set:Y0,delete:Q0,clear:Z0,forEach:Bl(!1,!1)},a={get(k){return Il(this,k,!1,!0)},get size(){return Tl(this)},has:Ml,add:K0,set:Y0,delete:Q0,clear:Z0,forEach:Bl(!1,!0)},c={get(k){return Il(this,k,!0)},get size(){return Tl(this,!0)},has(k){return Ml.call(this,k,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Bl(!0,!1)},h={get(k){return Il(this,k,!0,!0)},get size(){return Tl(this,!0)},has(k){return Ml.call(this,k,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Bl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(k=>{s[k]=Nl(k,!1,!1),c[k]=Nl(k,!0,!1),a[k]=Nl(k,!1,!0),h[k]=Nl(k,!0,!0)}),[s,c,a,h]}const[YM,QM,ZM,JM]=KM();function cc(s,a){const c=a?s?JM:ZM:s?QM:YM;return(h,p,k)=>p==="__v_isReactive"?!s:p==="__v_isReadonly"?s:p==="__v_raw"?h:Reflect.get(ue(c,p)&&p in h?c:h,p,k)}const XM={get:cc(!1,!1)},tT={get:cc(!1,!0)},eT={get:cc(!0,!1)},nT={get:cc(!0,!0)},mA=new WeakMap,kA=new WeakMap,bA=new WeakMap,_A=new WeakMap;function oT(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iT(s){return s.__v_skip||!Object.isExtensible(s)?0:oT(CM(s))}function bs(s){return ps(s)?s:dc(s,!1,gA,XM,mA)}function wA(s){return dc(s,!1,GM,tT,kA)}function Vh(s){return dc(s,!0,fA,eT,bA)}function sT(s){return dc(s,!0,WM,nT,_A)}function dc(s,a,c,h,p){if(!De(s)||s.__v_raw&&!(a&&s.__v_isReactive))return s;const k=p.get(s);if(k)return k;const m=iT(s);if(m===0)return s;const v=new Proxy(s,m===2?h:c);return p.set(s,v),v}function cs(s){return ps(s)?cs(s.__v_raw):!!(s&&s.__v_isReactive)}function ps(s){return!!(s&&s.__v_isReadonly)}function ca(s){return!!(s&&s.__v_isShallow)}function Uh(s){return cs(s)||ps(s)}function ee(s){const a=s&&s.__v_raw;return a?ee(a):s}function Hh(s){return Gl(s,"__v_skip",!0),s}const da=s=>De(s)?bs(s):s,qh=s=>De(s)?Vh(s):s;function Gh(s){Ci&&wo&&(s=ee(s),uA(s.dep||(s.dep=$h())))}function uc(s,a){s=ee(s);const c=s.dep;c&&rh(c)}function ie(s){return!!(s&&s.__v_isRef===!0)}function K(s){return AA(s,!1)}function vA(s){return AA(s,!0)}function AA(s,a){return ie(s)?s:new rT(s,a)}class rT{constructor(a,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?a:ee(a),this._value=c?a:da(a)}get value(){return Gh(this),this._value}set value(a){const c=this.__v_isShallow||ca(a)||ps(a);a=c?a:ee(a),rr(a,this._rawValue)&&(this._rawValue=a,this._value=c?a:da(a),uc(this))}}function aT(s){uc(s)}function J(s){return ie(s)?s.value:s}const lT={get:(s,a,c)=>J(Reflect.get(s,a,c)),set:(s,a,c,h)=>{const p=s[a];return ie(p)&&!ie(c)?(p.value=c,!0):Reflect.set(s,a,c,h)}};function Wh(s){return cs(s)?s:new Proxy(s,lT)}class cT{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:c,set:h}=a(()=>Gh(this),()=>uc(this));this._get=c,this._set=h}get value(){return this._get()}set value(a){this._set(a)}}function dT(s){return new cT(s)}function uT(s){const a=Ot(s)?new Array(s.length):{};for(const c in s)a[c]=CA(s,c);return a}class hT{constructor(a,c,h){this._object=a,this._key=c,this._defaultValue=h,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return NM(ee(this._object),this._key)}}function CA(s,a,c){const h=s[a];return ie(h)?h:new hT(s,a,c)}var yA;class pT{constructor(a,c,h,p){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this[yA]=!1,this._dirty=!0,this.effect=new va(a,()=>{this._dirty||(this._dirty=!0,uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!p,this.__v_isReadonly=h}get value(){const a=ee(this);return Gh(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}yA="__v_isReadonly";function gT(s,a,c=!1){let h,p;const k=Vt(s);return k?(h=s,p=Ao):(h=s.get,p=s.set),new pT(h,p,k||!p,c)}function fT(s,...a){}function mT(s,a){}function Xo(s,a,c,h){let p;try{p=h?s(...h):s()}catch(k){_s(k,a,c)}return p}function Jn(s,a,c,h){if(Vt(s)){const k=Xo(s,a,c,h);return k&&zh(k)&&k.catch(m=>{_s(m,a,c)}),k}const p=[];for(let k=0;k<s.length;k++)p.push(Jn(s[k],a,c,h));return p}function _s(s,a,c,h=!0){const p=a?a.vnode:null;if(a){let k=a.parent;const m=a.proxy,v=c;for(;k;){const x=k.ec;if(x){for(let C=0;C<x.length;C++)if(x[C](s,m,v)===!1)return}k=k.parent}const _=a.appContext.config.errorHandler;if(_){Xo(_,null,10,[s,m,v]);return}}kT(s,c,p,h)}function kT(s,a,c,h=!0){console.error(s)}let ua=!1,ah=!1;const Dn=[];let Fo=0;const ir=[];let Zo=null,ss=0;const xA=Promise.resolve();let Kh=null;function Co(s){const a=Kh||xA;return s?a.then(this?s.bind(this):s):a}function bT(s){let a=Fo+1,c=Dn.length;for(;a<c;){const h=a+c>>>1;ha(Dn[h])<s?a=h+1:c=h}return a}function hc(s){(!Dn.length||!Dn.includes(s,ua&&s.allowRecurse?Fo+1:Fo))&&(s.id==null?Dn.push(s):Dn.splice(bT(s.id),0,s),EA())}function EA(){!ua&&!ah&&(ah=!0,Kh=xA.then(DA))}function _T(s){const a=Dn.indexOf(s);a>Fo&&Dn.splice(a,1)}function Yh(s){Ot(s)?ir.push(...s):(!Zo||!Zo.includes(s,s.allowRecurse?ss+1:ss))&&ir.push(s),EA()}function J0(s,a=ua?Fo+1:0){for(;a<Dn.length;a++){const c=Dn[a];c&&c.pre&&(Dn.splice(a,1),a--,c())}}function Ql(s){if(ir.length){const a=[...new Set(ir)];if(ir.length=0,Zo){Zo.push(...a);return}for(Zo=a,Zo.sort((c,h)=>ha(c)-ha(h)),ss=0;ss<Zo.length;ss++)Zo[ss]();Zo=null,ss=0}}const ha=s=>s.id==null?1/0:s.id,wT=(s,a)=>{const c=ha(s)-ha(a);if(c===0){if(s.pre&&!a.pre)return-1;if(a.pre&&!s.pre)return 1}return c};function DA(s){ah=!1,ua=!0,Dn.sort(wT);const a=Ao;try{for(Fo=0;Fo<Dn.length;Fo++){const c=Dn[Fo];c&&c.active!==!1&&Xo(c,null,14)}}finally{Fo=0,Dn.length=0,Ql(),ua=!1,Kh=null,(Dn.length||ir.length)&&DA()}}let Xs,Pl=[];function SA(s,a){var c,h;Xs=s,Xs?(Xs.enabled=!0,Pl.forEach(({event:p,args:k})=>Xs.emit(p,...k)),Pl=[]):typeof window<"u"&&window.HTMLElement&&!(!((h=(c=window.navigator)===null||c===void 0?void 0:c.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(k=>{SA(k,a)}),setTimeout(()=>{Xs||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Pl=[])},3e3)):Pl=[]}function vT(s,a,...c){if(s.isUnmounted)return;const h=s.vnode.props||ye;let p=c;const k=a.startsWith("update:"),m=k&&a.slice(7);if(m&&m in h){const C=`${m==="modelValue"?"model":m}Modifiers`,{number:E,trim:A}=h[C]||ye;A&&(p=c.map(M=>je(M)?M.trim():M)),E&&(p=c.map(Wl))}let v,_=h[v=ta(a)]||h[v=ta(Rn(a))];!_&&k&&(_=h[v=ta(lo(a))]),_&&Jn(_,s,6,p);const x=h[v+"Once"];if(x){if(!s.emitted)s.emitted={};else if(s.emitted[v])return;s.emitted[v]=!0,Jn(x,s,6,p)}}function IA(s,a,c=!1){const h=a.emitsCache,p=h.get(s);if(p!==void 0)return p;const k=s.emits;let m={},v=!1;if(!Vt(s)){const _=x=>{const C=IA(x,a,!0);C&&(v=!0,Ye(m,C))};!c&&a.mixins.length&&a.mixins.forEach(_),s.extends&&_(s.extends),s.mixins&&s.mixins.forEach(_)}return!k&&!v?(De(s)&&h.set(s,null),null):(Ot(k)?k.forEach(_=>m[_]=null):Ye(m,k),De(s)&&h.set(s,m),m)}function pc(s,a){return!s||!_a(a)?!1:(a=a.slice(2).replace(/Once$/,""),ue(s,a[0].toLowerCase()+a.slice(1))||ue(s,lo(a))||ue(s,a))}let Cn=null,gc=null;function pa(s){const a=Cn;return Cn=s,gc=s&&s.type.__scopeId||null,a}function Te(s){gc=s}function Be(){gc=null}const AT=s=>he;function he(s,a=Cn,c){if(!a||s._n)return s;const h=(...p)=>{h._d&&gh(-1);const k=pa(a);let m;try{m=s(...p)}finally{pa(k),h._d&&gh(1)}return m};return h._n=!0,h._c=!0,h._d=!0,h}function $l(s){const{type:a,vnode:c,proxy:h,withProxy:p,props:k,propsOptions:[m],slots:v,attrs:_,emit:x,render:C,renderCache:E,data:A,setupState:M,ctx:j,inheritAttrs:L}=s;let U,T;const D=pa(s);try{if(c.shapeFlag&4){const N=p||h;U=Qn(C.call(N,N,E,k,M,A,j)),T=_}else{const N=a;U=Qn(N.length>1?N(k,{attrs:_,slots:v,emit:x}):N(k,null)),T=a.props?_:yT(_)}}catch(N){oa.length=0,_s(N,s,1),U=Et(Sn)}let H=U;if(T&&L!==!1){const N=Object.keys(T),{shapeFlag:G}=H;N.length&&G&7&&(m&&N.some(Oh)&&(T=xT(T,m)),H=yo(H,T))}return c.dirs&&(H=yo(H),H.dirs=H.dirs?H.dirs.concat(c.dirs):c.dirs),c.transition&&(H.transition=c.transition),U=H,pa(D),U}function CT(s){let a;for(let c=0;c<s.length;c++){const h=s[c];if(Di(h)){if(h.type!==Sn||h.children==="v-if"){if(a)return;a=h}}else return}return a}const yT=s=>{let a;for(const c in s)(c==="class"||c==="style"||_a(c))&&((a||(a={}))[c]=s[c]);return a},xT=(s,a)=>{const c={};for(const h in s)(!Oh(h)||!(h.slice(9)in a))&&(c[h]=s[h]);return c};function ET(s,a,c){const{props:h,children:p,component:k}=s,{props:m,children:v,patchFlag:_}=a,x=k.emitsOptions;if(a.dirs||a.transition)return!0;if(c&&_>=0){if(_&1024)return!0;if(_&16)return h?X0(h,m,x):!!m;if(_&8){const C=a.dynamicProps;for(let E=0;E<C.length;E++){const A=C[E];if(m[A]!==h[A]&&!pc(x,A))return!0}}}else return(p||v)&&(!v||!v.$stable)?!0:h===m?!1:h?m?X0(h,m,x):!0:!!m;return!1}function X0(s,a,c){const h=Object.keys(a);if(h.length!==Object.keys(s).length)return!0;for(let p=0;p<h.length;p++){const k=h[p];if(a[k]!==s[k]&&!pc(c,k))return!0}return!1}function Qh({vnode:s,parent:a},c){for(;a&&a.subTree===s;)(s=a.vnode).el=c,a=a.parent}const MA=s=>s.__isSuspense,DT={name:"Suspense",__isSuspense:!0,process(s,a,c,h,p,k,m,v,_,x){s==null?IT(a,c,h,p,k,m,v,_,x):MT(s,a,c,h,p,m,v,_,x)},hydrate:TT,create:Zh,normalize:BT},ST=DT;function ga(s,a){const c=s.props&&s.props[a];Vt(c)&&c()}function IT(s,a,c,h,p,k,m,v,_){const{p:x,o:{createElement:C}}=_,E=C("div"),A=s.suspense=Zh(s,p,h,a,E,c,k,m,v,_);x(null,A.pendingBranch=s.ssContent,E,null,h,A,k,m),A.deps>0?(ga(s,"onPending"),ga(s,"onFallback"),x(null,s.ssFallback,a,c,h,null,k,m),sr(A,s.ssFallback)):A.resolve()}function MT(s,a,c,h,p,k,m,v,{p:_,um:x,o:{createElement:C}}){const E=a.suspense=s.suspense;E.vnode=a,a.el=s.el;const A=a.ssContent,M=a.ssFallback,{activeBranch:j,pendingBranch:L,isInFallback:U,isHydrating:T}=E;if(L)E.pendingBranch=A,vo(A,L)?(_(L,A,E.hiddenContainer,null,p,E,k,m,v),E.deps<=0?E.resolve():U&&(_(j,M,c,h,p,null,k,m,v),sr(E,M))):(E.pendingId++,T?(E.isHydrating=!1,E.activeBranch=L):x(L,p,E),E.deps=0,E.effects.length=0,E.hiddenContainer=C("div"),U?(_(null,A,E.hiddenContainer,null,p,E,k,m,v),E.deps<=0?E.resolve():(_(j,M,c,h,p,null,k,m,v),sr(E,M))):j&&vo(A,j)?(_(j,A,c,h,p,E,k,m,v),E.resolve(!0)):(_(null,A,E.hiddenContainer,null,p,E,k,m,v),E.deps<=0&&E.resolve()));else if(j&&vo(A,j))_(j,A,c,h,p,E,k,m,v),sr(E,A);else if(ga(a,"onPending"),E.pendingBranch=A,E.pendingId++,_(null,A,E.hiddenContainer,null,p,E,k,m,v),E.deps<=0)E.resolve();else{const{timeout:D,pendingId:H}=E;D>0?setTimeout(()=>{E.pendingId===H&&E.fallback(M)},D):D===0&&E.fallback(M)}}function Zh(s,a,c,h,p,k,m,v,_,x,C=!1){const{p:E,m:A,um:M,n:j,o:{parentNode:L,remove:U}}=x,T=s.props?Kl(s.props.timeout):void 0,D={vnode:s,parent:a,parentComponent:c,isSVG:m,container:h,hiddenContainer:p,anchor:k,deps:0,pendingId:0,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:C,isUnmounted:!1,effects:[],resolve(H=!1){const{vnode:N,activeBranch:G,pendingBranch:V,pendingId:q,effects:z,parentComponent:X,container:pt}=D;if(D.isHydrating)D.isHydrating=!1;else if(!H){const Tt=G&&V.transition&&V.transition.mode==="out-in";Tt&&(G.transition.afterLeave=()=>{q===D.pendingId&&A(V,pt,St,0)});let{anchor:St}=D;G&&(St=j(G),M(G,X,D,!0)),Tt||A(V,pt,St,0)}sr(D,V),D.pendingBranch=null,D.isInFallback=!1;let yt=D.parent,ut=!1;for(;yt;){if(yt.pendingBranch){yt.effects.push(...z),ut=!0;break}yt=yt.parent}ut||Yh(z),D.effects=[],ga(N,"onResolve")},fallback(H){if(!D.pendingBranch)return;const{vnode:N,activeBranch:G,parentComponent:V,container:q,isSVG:z}=D;ga(N,"onFallback");const X=j(G),pt=()=>{D.isInFallback&&(E(null,H,q,X,V,null,z,v,_),sr(D,H))},yt=H.transition&&H.transition.mode==="out-in";yt&&(G.transition.afterLeave=pt),D.isInFallback=!0,M(G,V,null,!0),yt||pt()},move(H,N,G){D.activeBranch&&A(D.activeBranch,H,N,G),D.container=H},next(){return D.activeBranch&&j(D.activeBranch)},registerDep(H,N){const G=!!D.pendingBranch;G&&D.deps++;const V=H.vnode.el;H.asyncDep.catch(q=>{_s(q,H,0)}).then(q=>{if(H.isUnmounted||D.isUnmounted||D.pendingId!==H.suspenseId)return;H.asyncResolved=!0;const{vnode:z}=H;fh(H,q,!1),V&&(z.el=V);const X=!V&&H.subTree.el;N(H,z,L(V||H.subTree.el),V?null:j(H.subTree),D,m,_),X&&U(X),Qh(H,z.el),G&&--D.deps===0&&D.resolve()})},unmount(H,N){D.isUnmounted=!0,D.activeBranch&&M(D.activeBranch,c,H,N),D.pendingBranch&&M(D.pendingBranch,c,H,N)}};return D}function TT(s,a,c,h,p,k,m,v,_){const x=a.suspense=Zh(a,h,c,s.parentNode,document.createElement("div"),null,p,k,m,v,!0),C=_(s,x.pendingBranch=a.ssContent,c,x,k,m);return x.deps===0&&x.resolve(),C}function BT(s){const{shapeFlag:a,children:c}=s,h=a&32;s.ssContent=tv(h?c.default:c),s.ssFallback=h?tv(c.fallback):Et(Sn)}function tv(s){let a;if(Vt(s)){const c=ms&&s._c;c&&(s._d=!1,P()),s=s(),c&&(s._d=!0,a=zn,oC())}return Ot(s)&&(s=CT(s)),s=Qn(s),a&&!s.dynamicChildren&&(s.dynamicChildren=a.filter(c=>c!==s)),s}function TA(s,a){a&&a.pendingBranch?Ot(s)?a.effects.push(...s):a.effects.push(s):Yh(s)}function sr(s,a){s.activeBranch=a;const{vnode:c,parentComponent:h}=s,p=c.el=a.el;h&&h.subTree===c&&(h.vnode.el=p,Qh(h,p))}function ds(s,a){if(Ke){let c=Ke.provides;const h=Ke.parent&&Ke.parent.provides;h===c&&(c=Ke.provides=Object.create(h)),c[s]=a}}function jn(s,a,c=!1){const h=Ke||Cn;if(h){const p=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(p&&s in p)return p[s];if(arguments.length>1)return c&&Vt(a)?a.call(h.proxy):a}}function Aa(s,a){return Ca(s,null,a)}function BA(s,a){return Ca(s,null,{flush:"post"})}function NT(s,a){return Ca(s,null,{flush:"sync"})}const Ol={};function co(s,a,c){return Ca(s,a,c)}function Ca(s,a,{immediate:c,deep:h,flush:p,onTrack:k,onTrigger:m}=ye){const v=aA()===(Ke==null?void 0:Ke.scope)?Ke:null;let _,x=!1,C=!1;if(ie(s)?(_=()=>s.value,x=ca(s)):cs(s)?(_=()=>s,h=!0):Ot(s)?(C=!0,x=s.some(H=>cs(H)||ca(H)),_=()=>s.map(H=>{if(ie(H))return H.value;if(cs(H))return as(H);if(Vt(H))return Xo(H,v,2)})):Vt(s)?a?_=()=>Xo(s,v,2):_=()=>{if(!(v&&v.isUnmounted))return E&&E(),Jn(s,v,3,[A])}:_=Ao,a&&h){const H=_;_=()=>as(H())}let E,A=H=>{E=T.onStop=()=>{Xo(H,v,4)}},M;if(lr)if(A=Ao,a?c&&Jn(a,v,3,[_(),C?[]:void 0,A]):_(),p==="sync"){const H=fC();M=H.__watcherHandles||(H.__watcherHandles=[])}else return Ao;let j=C?new Array(s.length).fill(Ol):Ol;const L=()=>{if(T.active)if(a){const H=T.run();(h||x||(C?H.some((N,G)=>rr(N,j[G])):rr(H,j)))&&(E&&E(),Jn(a,v,3,[H,j===Ol?void 0:C&&j[0]===Ol?[]:j,A]),j=H)}else T.run()};L.allowRecurse=!!a;let U;p==="sync"?U=L:p==="post"?U=()=>vn(L,v&&v.suspense):(L.pre=!0,v&&(L.id=v.uid),U=()=>hc(L));const T=new va(_,U);a?c?L():j=T.run():p==="post"?vn(T.run.bind(T),v&&v.suspense):T.run();const D=()=>{T.stop(),v&&v.scope&&Lh(v.scope.effects,T)};return M&&M.push(D),D}function PT(s,a,c){const h=this.proxy,p=je(s)?s.includes(".")?NA(h,s):()=>h[s]:s.bind(h,h);let k;Vt(a)?k=a:(k=a.handler,c=a);const m=Ke;Si(this);const v=Ca(p,k.bind(h),c);return m?Si(m):yi(),v}function NA(s,a){const c=a.split(".");return()=>{let h=s;for(let p=0;p<c.length&&h;p++)h=h[c[p]];return h}}function as(s,a){if(!De(s)||s.__v_skip||(a=a||new Set,a.has(s)))return s;if(a.add(s),ie(s))as(s.value,a);else if(Ot(s))for(let c=0;c<s.length;c++)as(s[c],a);else if(ks(s)||nr(s))s.forEach(c=>{as(c,a)});else if(sA(s))for(const c in s)as(s[c],a);return s}function Jh(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _e(()=>{s.isMounted=!0}),bc(()=>{s.isUnmounting=!0}),s}const ao=[Function,Array],OT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ao,onEnter:ao,onAfterEnter:ao,onEnterCancelled:ao,onBeforeLeave:ao,onLeave:ao,onAfterLeave:ao,onLeaveCancelled:ao,onBeforeAppear:ao,onAppear:ao,onAfterAppear:ao,onAppearCancelled:ao},setup(s,{slots:a}){const c=Ti(),h=Jh();let p;return()=>{const k=a.default&&fc(a.default(),!0);if(!k||!k.length)return;let m=k[0];if(k.length>1){for(const L of k)if(L.type!==Sn){m=L;break}}const v=ee(s),{mode:_}=v;if(h.isLeaving)return $u(m);const x=ev(m);if(!x)return $u(m);const C=ar(x,v,h,c);gs(x,C);const E=c.subTree,A=E&&ev(E);let M=!1;const{getTransitionKey:j}=x.type;if(j){const L=j();p===void 0?p=L:L!==p&&(p=L,M=!0)}if(A&&A.type!==Sn&&(!vo(x,A)||M)){const L=ar(A,v,h,c);if(gs(A,L),_==="out-in")return h.isLeaving=!0,L.afterLeave=()=>{h.isLeaving=!1,c.update.active!==!1&&c.update()},$u(m);_==="in-out"&&x.type!==Sn&&(L.delayLeave=(U,T,D)=>{const H=PA(h,A);H[String(A.key)]=A,U._leaveCb=()=>{T(),U._leaveCb=void 0,delete C.delayedLeave},C.delayedLeave=D})}return m}}},Xh=OT;function PA(s,a){const{leavingVNodes:c}=s;let h=c.get(a.type);return h||(h=Object.create(null),c.set(a.type,h)),h}function ar(s,a,c,h){const{appear:p,mode:k,persisted:m=!1,onBeforeEnter:v,onEnter:_,onAfterEnter:x,onEnterCancelled:C,onBeforeLeave:E,onLeave:A,onAfterLeave:M,onLeaveCancelled:j,onBeforeAppear:L,onAppear:U,onAfterAppear:T,onAppearCancelled:D}=a,H=String(s.key),N=PA(c,s),G=(z,X)=>{z&&Jn(z,h,9,X)},V=(z,X)=>{const pt=X[1];G(z,X),Ot(z)?z.every(yt=>yt.length<=1)&&pt():z.length<=1&&pt()},q={mode:k,persisted:m,beforeEnter(z){let X=v;if(!c.isMounted)if(p)X=L||v;else return;z._leaveCb&&z._leaveCb(!0);const pt=N[H];pt&&vo(s,pt)&&pt.el._leaveCb&&pt.el._leaveCb(),G(X,[z])},enter(z){let X=_,pt=x,yt=C;if(!c.isMounted)if(p)X=U||_,pt=T||x,yt=D||C;else return;let ut=!1;const Tt=z._enterCb=St=>{ut||(ut=!0,St?G(yt,[z]):G(pt,[z]),q.delayedLeave&&q.delayedLeave(),z._enterCb=void 0)};X?V(X,[z,Tt]):Tt()},leave(z,X){const pt=String(s.key);if(z._enterCb&&z._enterCb(!0),c.isUnmounting)return X();G(E,[z]);let yt=!1;const ut=z._leaveCb=Tt=>{yt||(yt=!0,X(),Tt?G(j,[z]):G(M,[z]),z._leaveCb=void 0,N[pt]===s&&delete N[pt])};N[pt]=s,A?V(A,[z,ut]):ut()},clone(z){return ar(z,a,c,h)}};return q}function $u(s){if(ya(s))return s=yo(s),s.children=null,s}function ev(s){return ya(s)?s.children?s.children[0]:void 0:s}function gs(s,a){s.shapeFlag&6&&s.component?gs(s.component.subTree,a):s.shapeFlag&128?(s.ssContent.transition=a.clone(s.ssContent),s.ssFallback.transition=a.clone(s.ssFallback)):s.transition=a}function fc(s,a=!1,c){let h=[],p=0;for(let k=0;k<s.length;k++){let m=s[k];const v=c==null?m.key:String(c)+String(m.key!=null?m.key:k);m.type===Rt?(m.patchFlag&128&&p++,h=h.concat(fc(m.children,a,v))):(a||m.type!==Sn)&&h.push(v!=null?yo(m,{key:v}):m)}if(p>1)for(let k=0;k<h.length;k++)h[k].patchFlag=-2;return h}function ni(s){return Vt(s)?{setup:s,name:s.name}:s}const us=s=>!!s.type.__asyncLoader;function LT(s){Vt(s)&&(s={loader:s});const{loader:a,loadingComponent:c,errorComponent:h,delay:p=200,timeout:k,suspensible:m=!0,onError:v}=s;let _=null,x,C=0;const E=()=>(C++,_=null,A()),A=()=>{let M;return _||(M=_=a().catch(j=>{if(j=j instanceof Error?j:new Error(String(j)),v)return new Promise((L,U)=>{v(j,()=>L(E()),()=>U(j),C+1)});throw j}).then(j=>M!==_&&_?_:(j&&(j.__esModule||j[Symbol.toStringTag]==="Module")&&(j=j.default),x=j,j)))};return ni({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return x},setup(){const M=Ke;if(x)return()=>Fu(x,M);const j=D=>{_=null,_s(D,M,13,!h)};if(m&&M.suspense||lr)return A().then(D=>()=>Fu(D,M)).catch(D=>(j(D),()=>h?Et(h,{error:D}):null));const L=K(!1),U=K(),T=K(!!p);return p&&setTimeout(()=>{T.value=!1},p),k!=null&&setTimeout(()=>{if(!L.value&&!U.value){const D=new Error(`Async component timed out after ${k}ms.`);j(D),U.value=D}},k),A().then(()=>{L.value=!0,M.parent&&ya(M.parent.vnode)&&hc(M.parent.update)}).catch(D=>{j(D),U.value=D}),()=>{if(L.value&&x)return Fu(x,M);if(U.value&&h)return Et(h,{error:U.value});if(c&&!T.value)return Et(c)}}})}function Fu(s,a){const{ref:c,props:h,children:p,ce:k}=a.vnode,m=Et(s,h,p);return m.ref=c,m.ce=k,delete a.vnode.ce,m}const ya=s=>s.type.__isKeepAlive,zT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:a}){const c=Ti(),h=c.ctx;if(!h.renderer)return()=>{const D=a.default&&a.default();return D&&D.length===1?D[0]:D};const p=new Map,k=new Set;let m=null;const v=c.suspense,{renderer:{p:_,m:x,um:C,o:{createElement:E}}}=h,A=E("div");h.activate=(D,H,N,G,V)=>{const q=D.component;x(D,H,N,0,v),_(q.vnode,D,H,N,q,v,G,D.slotScopeIds,V),vn(()=>{q.isDeactivated=!1,q.a&&or(q.a);const z=D.props&&D.props.onVnodeMounted;z&&Ln(z,q.parent,D)},v)},h.deactivate=D=>{const H=D.component;x(D,A,null,1,v),vn(()=>{H.da&&or(H.da);const N=D.props&&D.props.onVnodeUnmounted;N&&Ln(N,H.parent,D),H.isDeactivated=!0},v)};function M(D){Vu(D),C(D,c,v,!0)}function j(D){p.forEach((H,N)=>{const G=kh(H.type);G&&(!D||!D(G))&&L(N)})}function L(D){const H=p.get(D);!m||!vo(H,m)?M(H):m&&Vu(m),p.delete(D),k.delete(D)}co(()=>[s.include,s.exclude],([D,H])=>{D&&j(N=>Jr(D,N)),H&&j(N=>!Jr(H,N))},{flush:"post",deep:!0});let U=null;const T=()=>{U!=null&&p.set(U,Uu(c.subTree))};return _e(T),kc(T),bc(()=>{p.forEach(D=>{const{subTree:H,suspense:N}=c,G=Uu(H);if(D.type===G.type&&D.key===G.key){Vu(G);const V=G.component.da;V&&vn(V,N);return}M(D)})}),()=>{if(U=null,!a.default)return null;const D=a.default(),H=D[0];if(D.length>1)return m=null,D;if(!Di(H)||!(H.shapeFlag&4)&&!(H.shapeFlag&128))return m=null,H;let N=Uu(H);const G=N.type,V=kh(us(N)?N.type.__asyncResolved||{}:G),{include:q,exclude:z,max:X}=s;if(q&&(!V||!Jr(q,V))||z&&V&&Jr(z,V))return m=N,H;const pt=N.key==null?G:N.key,yt=p.get(pt);return N.el&&(N=yo(N),H.shapeFlag&128&&(H.ssContent=N)),U=pt,yt?(N.el=yt.el,N.component=yt.component,N.transition&&gs(N,N.transition),N.shapeFlag|=512,k.delete(pt),k.add(pt)):(k.add(pt),X&&k.size>parseInt(X,10)&&L(k.values().next().value)),N.shapeFlag|=256,m=N,MA(H.type)?H:N}}},RT=zT;function Jr(s,a){return Ot(s)?s.some(c=>Jr(c,a)):je(s)?s.split(",").includes(a):AM(s)?s.test(a):!1}function OA(s,a){zA(s,"a",a)}function LA(s,a){zA(s,"da",a)}function zA(s,a,c=Ke){const h=s.__wdc||(s.__wdc=()=>{let p=c;for(;p;){if(p.isDeactivated)return;p=p.parent}return s()});if(mc(a,h,c),c){let p=c.parent;for(;p&&p.parent;)ya(p.parent.vnode)&&jT(h,a,c,p),p=p.parent}}function jT(s,a,c,h){const p=mc(a,s,h,!0);xa(()=>{Lh(h[a],p)},c)}function Vu(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function Uu(s){return s.shapeFlag&128?s.ssContent:s}function mc(s,a,c=Ke,h=!1){if(c){const p=c[s]||(c[s]=[]),k=a.__weh||(a.__weh=(...m)=>{if(c.isUnmounted)return;gr(),Si(c);const v=Jn(a,c,s,m);return yi(),fr(),v});return h?p.unshift(k):p.push(k),k}}const oi=s=>(a,c=Ke)=>(!lr||s==="sp")&&mc(s,(...h)=>a(...h),c),RA=oi("bm"),_e=oi("m"),jA=oi("bu"),kc=oi("u"),bc=oi("bum"),xa=oi("um"),$A=oi("sp"),FA=oi("rtg"),VA=oi("rtc");function UA(s,a=Ke){mc("ec",s,a)}function lt(s,a){const c=Cn;if(c===null)return s;const h=wc(c)||c.proxy,p=s.dirs||(s.dirs=[]);for(let k=0;k<a.length;k++){let[m,v,_,x=ye]=a[k];m&&(Vt(m)&&(m={mounted:m,updated:m}),m.deep&&as(v),p.push({dir:m,instance:h,value:v,oldValue:void 0,arg:_,modifiers:x}))}return s}function $o(s,a,c,h){const p=s.dirs,k=a&&a.dirs;for(let m=0;m<p.length;m++){const v=p[m];k&&(v.oldValue=k[m].value);let _=v.dir[h];_&&(gr(),Jn(_,c,8,[s.el,v,s,a]),fr())}}const tp="components",$T="directives";function Tn(s,a){return ep(tp,s,!0,a)||s}const HA=Symbol();function FT(s){return je(s)?ep(tp,s,!1)||s:s||HA}function VT(s){return ep($T,s)}function ep(s,a,c=!0,h=!1){const p=Cn||Ke;if(p){const k=p.type;if(s===tp){const v=kh(k,!1);if(v&&(v===a||v===Rn(a)||v===wa(Rn(a))))return k}const m=nv(p[s]||k[s],a)||nv(p.appContext[s],a);return!m&&h?k:m}}function nv(s,a){return s&&(s[a]||s[Rn(a)]||s[wa(Rn(a))])}function se(s,a,c,h){let p;const k=c&&c[h];if(Ot(s)||je(s)){p=new Array(s.length);for(let m=0,v=s.length;m<v;m++)p[m]=a(s[m],m,void 0,k&&k[m])}else if(typeof s=="number"){p=new Array(s);for(let m=0;m<s;m++)p[m]=a(m+1,m,void 0,k&&k[m])}else if(De(s))if(s[Symbol.iterator])p=Array.from(s,(m,v)=>a(m,v,void 0,k&&k[v]));else{const m=Object.keys(s);p=new Array(m.length);for(let v=0,_=m.length;v<_;v++){const x=m[v];p[v]=a(s[x],x,v,k&&k[v])}}else p=[];return c&&(c[h]=p),p}function UT(s,a){for(let c=0;c<a.length;c++){const h=a[c];if(Ot(h))for(let p=0;p<h.length;p++)s[h[p].name]=h[p].fn;else h&&(s[h.name]=h.key?(...p)=>{const k=h.fn(...p);return k&&(k.key=h.key),k}:h.fn)}return s}function HT(s,a,c={},h,p){if(Cn.isCE||Cn.parent&&us(Cn.parent)&&Cn.parent.isCE)return a!=="default"&&(c.name=a),Et("slot",c,h&&h());let k=s[a];k&&k._c&&(k._d=!1),P();const m=k&&qA(k(c)),v=sp(Rt,{key:c.key||m&&m.key||`_${a}`},m||(h?h():[]),m&&s._===1?64:-2);return!p&&v.scopeId&&(v.slotScopeIds=[v.scopeId+"-s"]),k&&k._c&&(k._d=!0),v}function qA(s){return s.some(a=>Di(a)?!(a.type===Sn||a.type===Rt&&!qA(a.children)):!0)?s:null}function qT(s,a){const c={};for(const h in s)c[a&&/[A-Z]/.test(h)?`on:${h}`:ta(h)]=s[h];return c}const lh=s=>s?cC(s)?wc(s)||s.proxy:lh(s.parent):null,ea=Ye(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>lh(s.parent),$root:s=>lh(s.root),$emit:s=>s.emit,$options:s=>np(s),$forceUpdate:s=>s.f||(s.f=()=>hc(s.update)),$nextTick:s=>s.n||(s.n=Co.bind(s.proxy)),$watch:s=>PT.bind(s)}),Hu=(s,a)=>s!==ye&&!s.__isScriptSetup&&ue(s,a),ch={get({_:s},a){const{ctx:c,setupState:h,data:p,props:k,accessCache:m,type:v,appContext:_}=s;let x;if(a[0]!=="$"){const M=m[a];if(M!==void 0)switch(M){case 1:return h[a];case 2:return p[a];case 4:return c[a];case 3:return k[a]}else{if(Hu(h,a))return m[a]=1,h[a];if(p!==ye&&ue(p,a))return m[a]=2,p[a];if((x=s.propsOptions[0])&&ue(x,a))return m[a]=3,k[a];if(c!==ye&&ue(c,a))return m[a]=4,c[a];dh&&(m[a]=0)}}const C=ea[a];let E,A;if(C)return a==="$attrs"&&$n(s,"get",a),C(s);if((E=v.__cssModules)&&(E=E[a]))return E;if(c!==ye&&ue(c,a))return m[a]=4,c[a];if(A=_.config.globalProperties,ue(A,a))return A[a]},set({_:s},a,c){const{data:h,setupState:p,ctx:k}=s;return Hu(p,a)?(p[a]=c,!0):h!==ye&&ue(h,a)?(h[a]=c,!0):ue(s.props,a)||a[0]==="$"&&a.slice(1)in s?!1:(k[a]=c,!0)},has({_:{data:s,setupState:a,accessCache:c,ctx:h,appContext:p,propsOptions:k}},m){let v;return!!c[m]||s!==ye&&ue(s,m)||Hu(a,m)||(v=k[0])&&ue(v,m)||ue(h,m)||ue(ea,m)||ue(p.config.globalProperties,m)},defineProperty(s,a,c){return c.get!=null?s._.accessCache[a]=0:ue(c,"value")&&this.set(s,a,c.value,null),Reflect.defineProperty(s,a,c)}},GT=Ye({},ch,{get(s,a){if(a!==Symbol.unscopables)return ch.get(s,a,s)},has(s,a){return a[0]!=="_"&&!dM(a)}});let dh=!0;function WT(s){const a=np(s),c=s.proxy,h=s.ctx;dh=!1,a.beforeCreate&&ov(a.beforeCreate,s,"bc");const{data:p,computed:k,methods:m,watch:v,provide:_,inject:x,created:C,beforeMount:E,mounted:A,beforeUpdate:M,updated:j,activated:L,deactivated:U,beforeDestroy:T,beforeUnmount:D,destroyed:H,unmounted:N,render:G,renderTracked:V,renderTriggered:q,errorCaptured:z,serverPrefetch:X,expose:pt,inheritAttrs:yt,components:ut,directives:Tt,filters:St}=a;if(x&&KT(x,h,null,s.appContext.config.unwrapInjectedRef),m)for(const Ht in m){const ce=m[Ht];Vt(ce)&&(h[Ht]=ce.bind(c))}if(p){const Ht=p.call(c,c);De(Ht)&&(s.data=bs(Ht))}if(dh=!0,k)for(const Ht in k){const ce=k[Ht],qt=Vt(ce)?ce.bind(c,c):Vt(ce.get)?ce.get.bind(c,c):Ao,to=!Vt(ce)&&Vt(ce.set)?ce.set.bind(c):Ao,fn=te({get:qt,set:to});Object.defineProperty(h,Ht,{enumerable:!0,configurable:!0,get:()=>fn.value,set:cn=>fn.value=cn})}if(v)for(const Ht in v)GA(v[Ht],h,c,Ht);if(_){const Ht=Vt(_)?_.call(c):_;Reflect.ownKeys(Ht).forEach(ce=>{ds(ce,Ht[ce])})}C&&ov(C,s,"c");function Ut(Ht,ce){Ot(ce)?ce.forEach(qt=>Ht(qt.bind(c))):ce&&Ht(ce.bind(c))}if(Ut(RA,E),Ut(_e,A),Ut(jA,M),Ut(kc,j),Ut(OA,L),Ut(LA,U),Ut(UA,z),Ut(VA,V),Ut(FA,q),Ut(bc,D),Ut(xa,N),Ut($A,X),Ot(pt))if(pt.length){const Ht=s.exposed||(s.exposed={});pt.forEach(ce=>{Object.defineProperty(Ht,ce,{get:()=>c[ce],set:qt=>c[ce]=qt})})}else s.exposed||(s.exposed={});G&&s.render===Ao&&(s.render=G),yt!=null&&(s.inheritAttrs=yt),ut&&(s.components=ut),Tt&&(s.directives=Tt)}function KT(s,a,c=Ao,h=!1){Ot(s)&&(s=uh(s));for(const p in s){const k=s[p];let m;De(k)?"default"in k?m=jn(k.from||p,k.default,!0):m=jn(k.from||p):m=jn(k),ie(m)&&h?Object.defineProperty(a,p,{enumerable:!0,configurable:!0,get:()=>m.value,set:v=>m.value=v}):a[p]=m}}function ov(s,a,c){Jn(Ot(s)?s.map(h=>h.bind(a.proxy)):s.bind(a.proxy),a,c)}function GA(s,a,c,h){const p=h.includes(".")?NA(c,h):()=>c[h];if(je(s)){const k=a[s];Vt(k)&&co(p,k)}else if(Vt(s))co(p,s.bind(c));else if(De(s))if(Ot(s))s.forEach(k=>GA(k,a,c,h));else{const k=Vt(s.handler)?s.handler.bind(c):a[s.handler];Vt(k)&&co(p,k,s)}}function np(s){const a=s.type,{mixins:c,extends:h}=a,{mixins:p,optionsCache:k,config:{optionMergeStrategies:m}}=s.appContext,v=k.get(a);let _;return v?_=v:!p.length&&!c&&!h?_=a:(_={},p.length&&p.forEach(x=>Zl(_,x,m,!0)),Zl(_,a,m)),De(a)&&k.set(a,_),_}function Zl(s,a,c,h=!1){const{mixins:p,extends:k}=a;k&&Zl(s,k,c,!0),p&&p.forEach(m=>Zl(s,m,c,!0));for(const m in a)if(!(h&&m==="expose")){const v=YT[m]||c&&c[m];s[m]=v?v(s[m],a[m]):a[m]}return s}const YT={data:iv,props:is,emits:is,methods:is,computed:is,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:is,directives:is,watch:ZT,provide:iv,inject:QT};function iv(s,a){return a?s?function(){return Ye(Vt(s)?s.call(this,this):s,Vt(a)?a.call(this,this):a)}:a:s}function QT(s,a){return is(uh(s),uh(a))}function uh(s){if(Ot(s)){const a={};for(let c=0;c<s.length;c++)a[s[c]]=s[c];return a}return s}function Mn(s,a){return s?[...new Set([].concat(s,a))]:a}function is(s,a){return s?Ye(Ye(Object.create(null),s),a):a}function ZT(s,a){if(!s)return a;if(!a)return s;const c=Ye(Object.create(null),s);for(const h in a)c[h]=Mn(s[h],a[h]);return c}function JT(s,a,c,h=!1){const p={},k={};Gl(k,_c,1),s.propsDefaults=Object.create(null),WA(s,a,p,k);for(const m in s.propsOptions[0])m in p||(p[m]=void 0);c?s.props=h?p:wA(p):s.type.props?s.props=p:s.props=k,s.attrs=k}function XT(s,a,c,h){const{props:p,attrs:k,vnode:{patchFlag:m}}=s,v=ee(p),[_]=s.propsOptions;let x=!1;if((h||m>0)&&!(m&16)){if(m&8){const C=s.vnode.dynamicProps;for(let E=0;E<C.length;E++){let A=C[E];if(pc(s.emitsOptions,A))continue;const M=a[A];if(_)if(ue(k,A))M!==k[A]&&(k[A]=M,x=!0);else{const j=Rn(A);p[j]=hh(_,v,j,M,s,!1)}else M!==k[A]&&(k[A]=M,x=!0)}}}else{WA(s,a,p,k)&&(x=!0);let C;for(const E in v)(!a||!ue(a,E)&&((C=lo(E))===E||!ue(a,C)))&&(_?c&&(c[E]!==void 0||c[C]!==void 0)&&(p[E]=hh(_,v,E,void 0,s,!0)):delete p[E]);if(k!==v)for(const E in k)(!a||!ue(a,E))&&(delete k[E],x=!0)}x&&ei(s,"set","$attrs")}function WA(s,a,c,h){const[p,k]=s.propsOptions;let m=!1,v;if(a)for(let _ in a){if(Xr(_))continue;const x=a[_];let C;p&&ue(p,C=Rn(_))?!k||!k.includes(C)?c[C]=x:(v||(v={}))[C]=x:pc(s.emitsOptions,_)||(!(_ in h)||x!==h[_])&&(h[_]=x,m=!0)}if(k){const _=ee(c),x=v||ye;for(let C=0;C<k.length;C++){const E=k[C];c[E]=hh(p,_,E,x[E],s,!ue(x,E))}}return m}function hh(s,a,c,h,p,k){const m=s[c];if(m!=null){const v=ue(m,"default");if(v&&h===void 0){const _=m.default;if(m.type!==Function&&Vt(_)){const{propsDefaults:x}=p;c in x?h=x[c]:(Si(p),h=x[c]=_.call(null,a),yi())}else h=_}m[0]&&(k&&!v?h=!1:m[1]&&(h===""||h===lo(c))&&(h=!0))}return h}function KA(s,a,c=!1){const h=a.propsCache,p=h.get(s);if(p)return p;const k=s.props,m={},v=[];let _=!1;if(!Vt(s)){const C=E=>{_=!0;const[A,M]=KA(E,a,!0);Ye(m,A),M&&v.push(...M)};!c&&a.mixins.length&&a.mixins.forEach(C),s.extends&&C(s.extends),s.mixins&&s.mixins.forEach(C)}if(!k&&!_)return De(s)&&h.set(s,er),er;if(Ot(k))for(let C=0;C<k.length;C++){const E=Rn(k[C]);sv(E)&&(m[E]=ye)}else if(k)for(const C in k){const E=Rn(C);if(sv(E)){const A=k[C],M=m[E]=Ot(A)||Vt(A)?{type:A}:Object.assign({},A);if(M){const j=lv(Boolean,M.type),L=lv(String,M.type);M[0]=j>-1,M[1]=L<0||j<L,(j>-1||ue(M,"default"))&&v.push(E)}}}const x=[m,v];return De(s)&&h.set(s,x),x}function sv(s){return s[0]!=="$"}function rv(s){const a=s&&s.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:s===null?"null":""}function av(s,a){return rv(s)===rv(a)}function lv(s,a){return Ot(a)?a.findIndex(c=>av(c,s)):Vt(a)&&av(a,s)?0:-1}const YA=s=>s[0]==="_"||s==="$stable",op=s=>Ot(s)?s.map(Qn):[Qn(s)],t7=(s,a,c)=>{if(a._n)return a;const h=he((...p)=>op(a(...p)),c);return h._c=!1,h},QA=(s,a,c)=>{const h=s._ctx;for(const p in s){if(YA(p))continue;const k=s[p];if(Vt(k))a[p]=t7(p,k,h);else if(k!=null){const m=op(k);a[p]=()=>m}}},ZA=(s,a)=>{const c=op(a);s.slots.default=()=>c},e7=(s,a)=>{if(s.vnode.shapeFlag&32){const c=a._;c?(s.slots=ee(a),Gl(a,"_",c)):QA(a,s.slots={})}else s.slots={},a&&ZA(s,a);Gl(s.slots,_c,1)},n7=(s,a,c)=>{const{vnode:h,slots:p}=s;let k=!0,m=ye;if(h.shapeFlag&32){const v=a._;v?c&&v===1?k=!1:(Ye(p,a),!c&&v===1&&delete p._):(k=!a.$stable,QA(a,p)),m=a}else a&&(ZA(s,a),m={default:1});if(k)for(const v in p)!YA(v)&&!(v in m)&&delete p[v]};function JA(){return{app:null,config:{isNativeTag:_M,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o7=0;function i7(s,a){return function(h,p=null){Vt(h)||(h=Object.assign({},h)),p!=null&&!De(p)&&(p=null);const k=JA(),m=new Set;let v=!1;const _=k.app={_uid:o7++,_component:h,_props:p,_container:null,_context:k,_instance:null,version:kC,get config(){return k.config},set config(x){},use(x,...C){return m.has(x)||(x&&Vt(x.install)?(m.add(x),x.install(_,...C)):Vt(x)&&(m.add(x),x(_,...C))),_},mixin(x){return k.mixins.includes(x)||k.mixins.push(x),_},component(x,C){return C?(k.components[x]=C,_):k.components[x]},directive(x,C){return C?(k.directives[x]=C,_):k.directives[x]},mount(x,C,E){if(!v){const A=Et(h,p);return A.appContext=k,C&&a?a(A,x):s(A,x,E),v=!0,_._container=x,x.__vue_app__=_,wc(A.component)||A.component.proxy}},unmount(){v&&(s(null,_._container),delete _._container.__vue_app__)},provide(x,C){return k.provides[x]=C,_}};return _}}function Jl(s,a,c,h,p=!1){if(Ot(s)){s.forEach((A,M)=>Jl(A,a&&(Ot(a)?a[M]:a),c,h,p));return}if(us(h)&&!p)return;const k=h.shapeFlag&4?wc(h.component)||h.component.proxy:h.el,m=p?null:k,{i:v,r:_}=s,x=a&&a.r,C=v.refs===ye?v.refs={}:v.refs,E=v.setupState;if(x!=null&&x!==_&&(je(x)?(C[x]=null,ue(E,x)&&(E[x]=null)):ie(x)&&(x.value=null)),Vt(_))Xo(_,v,12,[m,C]);else{const A=je(_),M=ie(_);if(A||M){const j=()=>{if(s.f){const L=A?ue(E,_)?E[_]:C[_]:_.value;p?Ot(L)&&Lh(L,k):Ot(L)?L.includes(k)||L.push(k):A?(C[_]=[k],ue(E,_)&&(E[_]=C[_])):(_.value=[k],s.k&&(C[s.k]=_.value))}else A?(C[_]=m,ue(E,_)&&(E[_]=m)):M&&(_.value=m,s.k&&(C[s.k]=m))};m?(j.id=-1,vn(j,c)):j()}}}let gi=!1;const Ll=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",zl=s=>s.nodeType===8;function s7(s){const{mt:a,p:c,o:{patchProp:h,createText:p,nextSibling:k,parentNode:m,remove:v,insert:_,createComment:x}}=s,C=(T,D)=>{if(!D.hasChildNodes()){c(null,T,D),Ql(),D._vnode=T;return}gi=!1,E(D.firstChild,T,null,null,null),Ql(),D._vnode=T,gi&&console.error("Hydration completed but contains mismatches.")},E=(T,D,H,N,G,V=!1)=>{const q=zl(T)&&T.data==="[",z=()=>L(T,D,H,N,G,q),{type:X,ref:pt,shapeFlag:yt,patchFlag:ut}=D;let Tt=T.nodeType;D.el=T,ut===-2&&(V=!1,D.dynamicChildren=null);let St=null;switch(X){case fs:Tt!==3?D.children===""?(_(D.el=p(""),m(T),T),St=T):St=z():(T.data!==D.children&&(gi=!0,T.data=D.children),St=k(T));break;case Sn:Tt!==8||q?St=z():St=k(T);break;case hs:if(q&&(T=k(T),Tt=T.nodeType),Tt===1||Tt===3){St=T;const le=!D.children.length;for(let Ut=0;Ut<D.staticCount;Ut++)le&&(D.children+=St.nodeType===1?St.outerHTML:St.data),Ut===D.staticCount-1&&(D.anchor=St),St=k(St);return q?k(St):St}else z();break;case Rt:q?St=j(T,D,H,N,G,V):St=z();break;default:if(yt&1)Tt!==1||D.type.toLowerCase()!==T.tagName.toLowerCase()?St=z():St=A(T,D,H,N,G,V);else if(yt&6){D.slotScopeIds=G;const le=m(T);if(a(D,le,null,H,N,Ll(le),V),St=q?U(T):k(T),St&&zl(St)&&St.data==="teleport end"&&(St=k(St)),us(D)){let Ut;q?(Ut=Et(Rt),Ut.anchor=St?St.previousSibling:le.lastChild):Ut=T.nodeType===3?_n(""):Et("div"),Ut.el=T,D.component.subTree=Ut}}else yt&64?Tt!==8?St=z():St=D.type.hydrate(T,D,H,N,G,V,s,M):yt&128&&(St=D.type.hydrate(T,D,H,N,Ll(m(T)),G,V,s,E))}return pt!=null&&Jl(pt,null,N,D),St},A=(T,D,H,N,G,V)=>{V=V||!!D.dynamicChildren;const{type:q,props:z,patchFlag:X,shapeFlag:pt,dirs:yt}=D,ut=q==="input"&&yt||q==="option";if(ut||X!==-1){if(yt&&$o(D,null,H,"created"),z)if(ut||!V||X&48)for(const St in z)(ut&&St.endsWith("value")||_a(St)&&!Xr(St))&&h(T,St,null,z[St],!1,void 0,H);else z.onClick&&h(T,"onClick",null,z.onClick,!1,void 0,H);let Tt;if((Tt=z&&z.onVnodeBeforeMount)&&Ln(Tt,H,D),yt&&$o(D,null,H,"beforeMount"),((Tt=z&&z.onVnodeMounted)||yt)&&TA(()=>{Tt&&Ln(Tt,H,D),yt&&$o(D,null,H,"mounted")},N),pt&16&&!(z&&(z.innerHTML||z.textContent))){let St=M(T.firstChild,D,T,H,N,G,V);for(;St;){gi=!0;const le=St;St=St.nextSibling,v(le)}}else pt&8&&T.textContent!==D.children&&(gi=!0,T.textContent=D.children)}return T.nextSibling},M=(T,D,H,N,G,V,q)=>{q=q||!!D.dynamicChildren;const z=D.children,X=z.length;for(let pt=0;pt<X;pt++){const yt=q?z[pt]:z[pt]=Qn(z[pt]);if(T)T=E(T,yt,N,G,V,q);else{if(yt.type===fs&&!yt.children)continue;gi=!0,c(null,yt,H,null,N,G,Ll(H),V)}}return T},j=(T,D,H,N,G,V)=>{const{slotScopeIds:q}=D;q&&(G=G?G.concat(q):q);const z=m(T),X=M(k(T),D,z,H,N,G,V);return X&&zl(X)&&X.data==="]"?k(D.anchor=X):(gi=!0,_(D.anchor=x("]"),z,X),X)},L=(T,D,H,N,G,V)=>{if(gi=!0,D.el=null,V){const X=U(T);for(;;){const pt=k(T);if(pt&&pt!==X)v(pt);else break}}const q=k(T),z=m(T);return v(T),c(null,D,z,q,H,N,Ll(z),G),q},U=T=>{let D=0;for(;T;)if(T=k(T),T&&zl(T)&&(T.data==="["&&D++,T.data==="]")){if(D===0)return k(T);D--}return T};return[C,E]}const vn=TA;function XA(s){return eC(s)}function tC(s){return eC(s,s7)}function eC(s,a){const c=EM();c.__VUE__=!0;const{insert:h,remove:p,patchProp:k,createElement:m,createText:v,createComment:_,setText:x,setElementText:C,parentNode:E,nextSibling:A,setScopeId:M=Ao,insertStaticContent:j}=s,L=(F,W,Z,ot=null,st=null,mt=null,Dt=!1,ht=null,At=!!W.dynamicChildren)=>{if(F===W)return;F&&!vo(F,W)&&(ot=rt(F),cn(F,st,mt,!0),F=null),W.patchFlag===-2&&(At=!1,W.dynamicChildren=null);const{type:ct,ref:kt,shapeFlag:wt}=W;switch(ct){case fs:U(F,W,Z,ot);break;case Sn:T(F,W,Z,ot);break;case hs:F==null&&D(W,Z,ot,Dt);break;case Rt:ut(F,W,Z,ot,st,mt,Dt,ht,At);break;default:wt&1?G(F,W,Z,ot,st,mt,Dt,ht,At):wt&6?Tt(F,W,Z,ot,st,mt,Dt,ht,At):(wt&64||wt&128)&&ct.process(F,W,Z,ot,st,mt,Dt,ht,At,Gt)}kt!=null&&st&&Jl(kt,F&&F.ref,mt,W||F,!W)},U=(F,W,Z,ot)=>{if(F==null)h(W.el=v(W.children),Z,ot);else{const st=W.el=F.el;W.children!==F.children&&x(st,W.children)}},T=(F,W,Z,ot)=>{F==null?h(W.el=_(W.children||""),Z,ot):W.el=F.el},D=(F,W,Z,ot)=>{[F.el,F.anchor]=j(F.children,W,Z,ot,F.el,F.anchor)},H=({el:F,anchor:W},Z,ot)=>{let st;for(;F&&F!==W;)st=A(F),h(F,Z,ot),F=st;h(W,Z,ot)},N=({el:F,anchor:W})=>{let Z;for(;F&&F!==W;)Z=A(F),p(F),F=Z;p(W)},G=(F,W,Z,ot,st,mt,Dt,ht,At)=>{Dt=Dt||W.type==="svg",F==null?V(W,Z,ot,st,mt,Dt,ht,At):X(F,W,st,mt,Dt,ht,At)},V=(F,W,Z,ot,st,mt,Dt,ht)=>{let At,ct;const{type:kt,props:wt,shapeFlag:Nt,transition:Ft,dirs:$t}=F;if(At=F.el=m(F.type,mt,wt&&wt.is,wt),Nt&8?C(At,F.children):Nt&16&&z(F.children,At,null,ot,st,mt&&kt!=="foreignObject",Dt,ht),$t&&$o(F,null,ot,"created"),q(At,F,F.scopeId,Dt,ot),wt){for(const fe in wt)fe!=="value"&&!Xr(fe)&&k(At,fe,null,wt[fe],mt,F.children,ot,st,vt);"value"in wt&&k(At,"value",null,wt.value),(ct=wt.onVnodeBeforeMount)&&Ln(ct,ot,F)}$t&&$o(F,null,ot,"beforeMount");const Qt=(!st||st&&!st.pendingBranch)&&Ft&&!Ft.persisted;Qt&&Ft.beforeEnter(At),h(At,W,Z),((ct=wt&&wt.onVnodeMounted)||Qt||$t)&&vn(()=>{ct&&Ln(ct,ot,F),Qt&&Ft.enter(At),$t&&$o(F,null,ot,"mounted")},st)},q=(F,W,Z,ot,st)=>{if(Z&&M(F,Z),ot)for(let mt=0;mt<ot.length;mt++)M(F,ot[mt]);if(st){let mt=st.subTree;if(W===mt){const Dt=st.vnode;q(F,Dt,Dt.scopeId,Dt.slotScopeIds,st.parent)}}},z=(F,W,Z,ot,st,mt,Dt,ht,At=0)=>{for(let ct=At;ct<F.length;ct++){const kt=F[ct]=ht?wi(F[ct]):Qn(F[ct]);L(null,kt,W,Z,ot,st,mt,Dt,ht)}},X=(F,W,Z,ot,st,mt,Dt)=>{const ht=W.el=F.el;let{patchFlag:At,dynamicChildren:ct,dirs:kt}=W;At|=F.patchFlag&16;const wt=F.props||ye,Nt=W.props||ye;let Ft;Z&&ns(Z,!1),(Ft=Nt.onVnodeBeforeUpdate)&&Ln(Ft,Z,W,F),kt&&$o(W,F,Z,"beforeUpdate"),Z&&ns(Z,!0);const $t=st&&W.type!=="foreignObject";if(ct?pt(F.dynamicChildren,ct,ht,Z,ot,$t,mt):Dt||ce(F,W,ht,null,Z,ot,$t,mt,!1),At>0){if(At&16)yt(ht,W,wt,Nt,Z,ot,st);else if(At&2&&wt.class!==Nt.class&&k(ht,"class",null,Nt.class,st),At&4&&k(ht,"style",wt.style,Nt.style,st),At&8){const Qt=W.dynamicProps;for(let fe=0;fe<Qt.length;fe++){const Ue=Qt[fe],Un=wt[Ue],eo=Nt[Ue];(eo!==Un||Ue==="value")&&k(ht,Ue,Un,eo,st,F.children,Z,ot,vt)}}At&1&&F.children!==W.children&&C(ht,W.children)}else!Dt&&ct==null&&yt(ht,W,wt,Nt,Z,ot,st);((Ft=Nt.onVnodeUpdated)||kt)&&vn(()=>{Ft&&Ln(Ft,Z,W,F),kt&&$o(W,F,Z,"updated")},ot)},pt=(F,W,Z,ot,st,mt,Dt)=>{for(let ht=0;ht<W.length;ht++){const At=F[ht],ct=W[ht],kt=At.el&&(At.type===Rt||!vo(At,ct)||At.shapeFlag&70)?E(At.el):Z;L(At,ct,kt,null,ot,st,mt,Dt,!0)}},yt=(F,W,Z,ot,st,mt,Dt)=>{if(Z!==ot){if(Z!==ye)for(const ht in Z)!Xr(ht)&&!(ht in ot)&&k(F,ht,Z[ht],null,Dt,W.children,st,mt,vt);for(const ht in ot){if(Xr(ht))continue;const At=ot[ht],ct=Z[ht];At!==ct&&ht!=="value"&&k(F,ht,ct,At,Dt,W.children,st,mt,vt)}"value"in ot&&k(F,"value",Z.value,ot.value)}},ut=(F,W,Z,ot,st,mt,Dt,ht,At)=>{const ct=W.el=F?F.el:v(""),kt=W.anchor=F?F.anchor:v("");let{patchFlag:wt,dynamicChildren:Nt,slotScopeIds:Ft}=W;Ft&&(ht=ht?ht.concat(Ft):Ft),F==null?(h(ct,Z,ot),h(kt,Z,ot),z(W.children,Z,kt,st,mt,Dt,ht,At)):wt>0&&wt&64&&Nt&&F.dynamicChildren?(pt(F.dynamicChildren,Nt,Z,st,mt,Dt,ht),(W.key!=null||st&&W===st.subTree)&&ip(F,W,!0)):ce(F,W,Z,kt,st,mt,Dt,ht,At)},Tt=(F,W,Z,ot,st,mt,Dt,ht,At)=>{W.slotScopeIds=ht,F==null?W.shapeFlag&512?st.ctx.activate(W,Z,ot,Dt,At):St(W,Z,ot,st,mt,Dt,At):le(F,W,At)},St=(F,W,Z,ot,st,mt,Dt)=>{const ht=F.component=lC(F,ot,st);if(ya(F)&&(ht.ctx.renderer=Gt),dC(ht),ht.asyncDep){if(st&&st.registerDep(ht,Ut),!F.el){const At=ht.subTree=Et(Sn);T(null,At,W,Z)}return}Ut(ht,F,W,Z,st,mt,Dt)},le=(F,W,Z)=>{const ot=W.component=F.component;if(ET(F,W,Z))if(ot.asyncDep&&!ot.asyncResolved){Ht(ot,W,Z);return}else ot.next=W,_T(ot.update),ot.update();else W.el=F.el,ot.vnode=W},Ut=(F,W,Z,ot,st,mt,Dt)=>{const ht=()=>{if(F.isMounted){let{next:kt,bu:wt,u:Nt,parent:Ft,vnode:$t}=F,Qt=kt,fe;ns(F,!1),kt?(kt.el=$t.el,Ht(F,kt,Dt)):kt=$t,wt&&or(wt),(fe=kt.props&&kt.props.onVnodeBeforeUpdate)&&Ln(fe,Ft,kt,$t),ns(F,!0);const Ue=$l(F),Un=F.subTree;F.subTree=Ue,L(Un,Ue,E(Un.el),rt(Un),F,st,mt),kt.el=Ue.el,Qt===null&&Qh(F,Ue.el),Nt&&vn(Nt,st),(fe=kt.props&&kt.props.onVnodeUpdated)&&vn(()=>Ln(fe,Ft,kt,$t),st)}else{let kt;const{el:wt,props:Nt}=W,{bm:Ft,m:$t,parent:Qt}=F,fe=us(W);if(ns(F,!1),Ft&&or(Ft),!fe&&(kt=Nt&&Nt.onVnodeBeforeMount)&&Ln(kt,Qt,W),ns(F,!0),wt&&Lt){const Ue=()=>{F.subTree=$l(F),Lt(wt,F.subTree,F,st,null)};fe?W.type.__asyncLoader().then(()=>!F.isUnmounted&&Ue()):Ue()}else{const Ue=F.subTree=$l(F);L(null,Ue,Z,ot,F,st,mt),W.el=Ue.el}if($t&&vn($t,st),!fe&&(kt=Nt&&Nt.onVnodeMounted)){const Ue=W;vn(()=>Ln(kt,Qt,Ue),st)}(W.shapeFlag&256||Qt&&us(Qt.vnode)&&Qt.vnode.shapeFlag&256)&&F.a&&vn(F.a,st),F.isMounted=!0,W=Z=ot=null}},At=F.effect=new va(ht,()=>hc(ct),F.scope),ct=F.update=()=>At.run();ct.id=F.uid,ns(F,!0),ct()},Ht=(F,W,Z)=>{W.component=F;const ot=F.vnode.props;F.vnode=W,F.next=null,XT(F,W.props,ot,Z),n7(F,W.children,Z),gr(),J0(),fr()},ce=(F,W,Z,ot,st,mt,Dt,ht,At=!1)=>{const ct=F&&F.children,kt=F?F.shapeFlag:0,wt=W.children,{patchFlag:Nt,shapeFlag:Ft}=W;if(Nt>0){if(Nt&128){to(ct,wt,Z,ot,st,mt,Dt,ht,At);return}else if(Nt&256){qt(ct,wt,Z,ot,st,mt,Dt,ht,At);return}}Ft&8?(kt&16&&vt(ct,st,mt),wt!==ct&&C(Z,wt)):kt&16?Ft&16?to(ct,wt,Z,ot,st,mt,Dt,ht,At):vt(ct,st,mt,!0):(kt&8&&C(Z,""),Ft&16&&z(wt,Z,ot,st,mt,Dt,ht,At))},qt=(F,W,Z,ot,st,mt,Dt,ht,At)=>{F=F||er,W=W||er;const ct=F.length,kt=W.length,wt=Math.min(ct,kt);let Nt;for(Nt=0;Nt<wt;Nt++){const Ft=W[Nt]=At?wi(W[Nt]):Qn(W[Nt]);L(F[Nt],Ft,Z,null,st,mt,Dt,ht,At)}ct>kt?vt(F,st,mt,!0,!1,wt):z(W,Z,ot,st,mt,Dt,ht,At,wt)},to=(F,W,Z,ot,st,mt,Dt,ht,At)=>{let ct=0;const kt=W.length;let wt=F.length-1,Nt=kt-1;for(;ct<=wt&&ct<=Nt;){const Ft=F[ct],$t=W[ct]=At?wi(W[ct]):Qn(W[ct]);if(vo(Ft,$t))L(Ft,$t,Z,null,st,mt,Dt,ht,At);else break;ct++}for(;ct<=wt&&ct<=Nt;){const Ft=F[wt],$t=W[Nt]=At?wi(W[Nt]):Qn(W[Nt]);if(vo(Ft,$t))L(Ft,$t,Z,null,st,mt,Dt,ht,At);else break;wt--,Nt--}if(ct>wt){if(ct<=Nt){const Ft=Nt+1,$t=Ft<kt?W[Ft].el:ot;for(;ct<=Nt;)L(null,W[ct]=At?wi(W[ct]):Qn(W[ct]),Z,$t,st,mt,Dt,ht,At),ct++}}else if(ct>Nt)for(;ct<=wt;)cn(F[ct],st,mt,!0),ct++;else{const Ft=ct,$t=ct,Qt=new Map;for(ct=$t;ct<=Nt;ct++){const yn=W[ct]=At?wi(W[ct]):Qn(W[ct]);yn.key!=null&&Qt.set(yn.key,ct)}let fe,Ue=0;const Un=Nt-$t+1;let eo=!1,Ma=0;const Bi=new Array(Un);for(ct=0;ct<Un;ct++)Bi[ct]=0;for(ct=Ft;ct<=wt;ct++){const yn=F[ct];if(Ue>=Un){cn(yn,st,mt,!0);continue}let dn;if(yn.key!=null)dn=Qt.get(yn.key);else for(fe=$t;fe<=Nt;fe++)if(Bi[fe-$t]===0&&vo(yn,W[fe])){dn=fe;break}dn===void 0?cn(yn,st,mt,!0):(Bi[dn-$t]=ct+1,dn>=Ma?Ma=dn:eo=!0,L(yn,W[dn],Z,null,st,mt,Dt,ht,At),Ue++)}const Ta=eo?r7(Bi):er;for(fe=Ta.length-1,ct=Un-1;ct>=0;ct--){const yn=$t+ct,dn=W[yn],mn=yn+1<kt?W[yn+1].el:ot;Bi[ct]===0?L(null,dn,Z,mn,st,mt,Dt,ht,At):eo&&(fe<0||ct!==Ta[fe]?fn(dn,Z,mn,2):fe--)}}},fn=(F,W,Z,ot,st=null)=>{const{el:mt,type:Dt,transition:ht,children:At,shapeFlag:ct}=F;if(ct&6){fn(F.component.subTree,W,Z,ot);return}if(ct&128){F.suspense.move(W,Z,ot);return}if(ct&64){Dt.move(F,W,Z,Gt);return}if(Dt===Rt){h(mt,W,Z);for(let wt=0;wt<At.length;wt++)fn(At[wt],W,Z,ot);h(F.anchor,W,Z);return}if(Dt===hs){H(F,W,Z);return}if(ot!==2&&ct&1&&ht)if(ot===0)ht.beforeEnter(mt),h(mt,W,Z),vn(()=>ht.enter(mt),st);else{const{leave:wt,delayLeave:Nt,afterLeave:Ft}=ht,$t=()=>h(mt,W,Z),Qt=()=>{wt(mt,()=>{$t(),Ft&&Ft()})};Nt?Nt(mt,$t,Qt):Qt()}else h(mt,W,Z)},cn=(F,W,Z,ot=!1,st=!1)=>{const{type:mt,props:Dt,ref:ht,children:At,dynamicChildren:ct,shapeFlag:kt,patchFlag:wt,dirs:Nt}=F;if(ht!=null&&Jl(ht,null,Z,F,!0),kt&256){W.ctx.deactivate(F);return}const Ft=kt&1&&Nt,$t=!us(F);let Qt;if($t&&(Qt=Dt&&Dt.onVnodeBeforeUnmount)&&Ln(Qt,W,F),kt&6)nt(F.component,Z,ot);else{if(kt&128){F.suspense.unmount(Z,ot);return}Ft&&$o(F,null,W,"beforeUnmount"),kt&64?F.type.remove(F,W,Z,st,Gt,ot):ct&&(mt!==Rt||wt>0&&wt&64)?vt(ct,W,Z,!1,!0):(mt===Rt&&wt&384||!st&&kt&16)&&vt(At,W,Z),ot&&gt(F)}($t&&(Qt=Dt&&Dt.onVnodeUnmounted)||Ft)&&vn(()=>{Qt&&Ln(Qt,W,F),Ft&&$o(F,null,W,"unmounted")},Z)},gt=F=>{const{type:W,el:Z,anchor:ot,transition:st}=F;if(W===Rt){Kt(Z,ot);return}if(W===hs){N(F);return}const mt=()=>{p(Z),st&&!st.persisted&&st.afterLeave&&st.afterLeave()};if(F.shapeFlag&1&&st&&!st.persisted){const{leave:Dt,delayLeave:ht}=st,At=()=>Dt(Z,mt);ht?ht(F.el,mt,At):At()}else mt()},Kt=(F,W)=>{let Z;for(;F!==W;)Z=A(F),p(F),F=Z;p(W)},nt=(F,W,Z)=>{const{bum:ot,scope:st,update:mt,subTree:Dt,um:ht}=F;ot&&or(ot),st.stop(),mt&&(mt.active=!1,cn(Dt,F,W,Z)),ht&&vn(ht,W),vn(()=>{F.isUnmounted=!0},W),W&&W.pendingBranch&&!W.isUnmounted&&F.asyncDep&&!F.asyncResolved&&F.suspenseId===W.pendingId&&(W.deps--,W.deps===0&&W.resolve())},vt=(F,W,Z,ot=!1,st=!1,mt=0)=>{for(let Dt=mt;Dt<F.length;Dt++)cn(F[Dt],W,Z,ot,st)},rt=F=>F.shapeFlag&6?rt(F.component.subTree):F.shapeFlag&128?F.suspense.next():A(F.anchor||F.el),Bt=(F,W,Z)=>{F==null?W._vnode&&cn(W._vnode,null,null,!0):L(W._vnode||null,F,W,null,null,null,Z),J0(),Ql(),W._vnode=F},Gt={p:L,um:cn,m:fn,r:gt,mt:St,mc:z,pc:ce,pbc:pt,n:rt,o:s};let Wt,Lt;return a&&([Wt,Lt]=a(Gt)),{render:Bt,hydrate:Wt,createApp:i7(Bt,Wt)}}function ns({effect:s,update:a},c){s.allowRecurse=a.allowRecurse=c}function ip(s,a,c=!1){const h=s.children,p=a.children;if(Ot(h)&&Ot(p))for(let k=0;k<h.length;k++){const m=h[k];let v=p[k];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=p[k]=wi(p[k]),v.el=m.el),c||ip(m,v)),v.type===fs&&(v.el=m.el)}}function r7(s){const a=s.slice(),c=[0];let h,p,k,m,v;const _=s.length;for(h=0;h<_;h++){const x=s[h];if(x!==0){if(p=c[c.length-1],s[p]<x){a[h]=p,c.push(h);continue}for(k=0,m=c.length-1;k<m;)v=k+m>>1,s[c[v]]<x?k=v+1:m=v;x<s[c[k]]&&(k>0&&(a[h]=c[k-1]),c[k]=h)}}for(k=c.length,m=c[k-1];k-- >0;)c[k]=m,m=a[m];return c}const a7=s=>s.__isTeleport,na=s=>s&&(s.disabled||s.disabled===""),cv=s=>typeof SVGElement<"u"&&s instanceof SVGElement,ph=(s,a)=>{const c=s&&s.to;return je(c)?a?a(c):null:c},l7={__isTeleport:!0,process(s,a,c,h,p,k,m,v,_,x){const{mc:C,pc:E,pbc:A,o:{insert:M,querySelector:j,createText:L,createComment:U}}=x,T=na(a.props);let{shapeFlag:D,children:H,dynamicChildren:N}=a;if(s==null){const G=a.el=L(""),V=a.anchor=L("");M(G,c,h),M(V,c,h);const q=a.target=ph(a.props,j),z=a.targetAnchor=L("");q&&(M(z,q),m=m||cv(q));const X=(pt,yt)=>{D&16&&C(H,pt,yt,p,k,m,v,_)};T?X(c,V):q&&X(q,z)}else{a.el=s.el;const G=a.anchor=s.anchor,V=a.target=s.target,q=a.targetAnchor=s.targetAnchor,z=na(s.props),X=z?c:V,pt=z?G:q;if(m=m||cv(V),N?(A(s.dynamicChildren,N,X,p,k,m,v),ip(s,a,!0)):_||E(s,a,X,pt,p,k,m,v,!1),T)z||Rl(a,c,G,x,1);else if((a.props&&a.props.to)!==(s.props&&s.props.to)){const yt=a.target=ph(a.props,j);yt&&Rl(a,yt,null,x,0)}else z&&Rl(a,V,q,x,1)}nC(a)},remove(s,a,c,h,{um:p,o:{remove:k}},m){const{shapeFlag:v,children:_,anchor:x,targetAnchor:C,target:E,props:A}=s;if(E&&k(C),(m||!na(A))&&(k(x),v&16))for(let M=0;M<_.length;M++){const j=_[M];p(j,a,c,!0,!!j.dynamicChildren)}},move:Rl,hydrate:c7};function Rl(s,a,c,{o:{insert:h},m:p},k=2){k===0&&h(s.targetAnchor,a,c);const{el:m,anchor:v,shapeFlag:_,children:x,props:C}=s,E=k===2;if(E&&h(m,a,c),(!E||na(C))&&_&16)for(let A=0;A<x.length;A++)p(x[A],a,c,2);E&&h(v,a,c)}function c7(s,a,c,h,p,k,{o:{nextSibling:m,parentNode:v,querySelector:_}},x){const C=a.target=ph(a.props,_);if(C){const E=C._lpa||C.firstChild;if(a.shapeFlag&16)if(na(a.props))a.anchor=x(m(s),a,v(s),c,h,p,k),a.targetAnchor=E;else{a.anchor=m(s);let A=E;for(;A;)if(A=m(A),A&&A.nodeType===8&&A.data==="teleport anchor"){a.targetAnchor=A,C._lpa=a.targetAnchor&&m(a.targetAnchor);break}x(E,a,C,c,h,p,k)}nC(a)}return a.anchor&&m(a.anchor)}const d7=l7;function nC(s){const a=s.ctx;if(a&&a.ut){let c=s.children[0].el;for(;c!==s.targetAnchor;)c.nodeType===1&&c.setAttribute("data-v-owner",a.uid),c=c.nextSibling;a.ut()}}const Rt=Symbol(void 0),fs=Symbol(void 0),Sn=Symbol(void 0),hs=Symbol(void 0),oa=[];let zn=null;function P(s=!1){oa.push(zn=s?null:[])}function oC(){oa.pop(),zn=oa[oa.length-1]||null}let ms=1;function gh(s){ms+=s}function iC(s){return s.dynamicChildren=ms>0?zn||er:null,oC(),ms>0&&zn&&zn.push(s),s}function O(s,a,c,h,p,k){return iC(g(s,a,c,h,p,k,!0))}function sp(s,a,c,h,p){return iC(Et(s,a,c,h,p,!0))}function Di(s){return s?s.__v_isVNode===!0:!1}function vo(s,a){return s.type===a.type&&s.key===a.key}function u7(s){}const _c="__vInternal",sC=({key:s})=>s??null,Fl=({ref:s,ref_key:a,ref_for:c})=>s!=null?je(s)||ie(s)||Vt(s)?{i:Cn,r:s,k:a,f:!!c}:s:null;function g(s,a=null,c=null,h=0,p=null,k=s===Rt?0:1,m=!1,v=!1){const _={__v_isVNode:!0,__v_skip:!0,type:s,props:a,key:a&&sC(a),ref:a&&Fl(a),scopeId:gc,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:k,patchFlag:h,dynamicProps:p,dynamicChildren:null,appContext:null,ctx:Cn};return v?(ap(_,c),k&128&&s.normalize(_)):c&&(_.shapeFlag|=je(c)?8:16),ms>0&&!m&&zn&&(_.patchFlag>0||k&6)&&_.patchFlag!==32&&zn.push(_),_}const Et=h7;function h7(s,a=null,c=null,h=0,p=null,k=!1){if((!s||s===HA)&&(s=Sn),Di(s)){const v=yo(s,a,!0);return c&&ap(v,c),ms>0&&!k&&zn&&(v.shapeFlag&6?zn[zn.indexOf(s)]=v:zn.push(v)),v.patchFlag|=-2,v}if(_7(s)&&(s=s.__vccOpts),a){a=rC(a);let{class:v,style:_}=a;v&&!je(v)&&(a.class=_t(v)),De(_)&&(Uh(_)&&!Ot(_)&&(_=Ye({},_)),a.style=ba(_))}const m=je(s)?1:MA(s)?128:a7(s)?64:De(s)?4:Vt(s)?2:0;return g(s,a,c,h,p,m,k,!0)}function rC(s){return s?Uh(s)||_c in s?Ye({},s):s:null}function yo(s,a,c=!1){const{props:h,ref:p,patchFlag:k,children:m}=s,v=a?aC(h||{},a):h;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:v,key:v&&sC(v),ref:a&&a.ref?c&&p?Ot(p)?p.concat(Fl(a)):[p,Fl(a)]:Fl(a):p,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:m,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:a&&s.type!==Rt?k===-1?16:k|16:k,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&yo(s.ssContent),ssFallback:s.ssFallback&&yo(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function _n(s=" ",a=0){return Et(fs,null,s,a)}function rp(s,a){const c=Et(hs,null,s);return c.staticCount=a,c}function Q(s="",a=!1){return a?(P(),sp(Sn,null,s)):Et(Sn,null,s)}function Qn(s){return s==null||typeof s=="boolean"?Et(Sn):Ot(s)?Et(Rt,null,s.slice()):typeof s=="object"?wi(s):Et(fs,null,String(s))}function wi(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:yo(s)}function ap(s,a){let c=0;const{shapeFlag:h}=s;if(a==null)a=null;else if(Ot(a))c=16;else if(typeof a=="object")if(h&65){const p=a.default;p&&(p._c&&(p._d=!1),ap(s,p()),p._c&&(p._d=!0));return}else{c=32;const p=a._;!p&&!(_c in a)?a._ctx=Cn:p===3&&Cn&&(Cn.slots._===1?a._=1:(a._=2,s.patchFlag|=1024))}else Vt(a)?(a={default:a,_ctx:Cn},c=32):(a=String(a),h&64?(c=16,a=[_n(a)]):c=8);s.children=a,s.shapeFlag|=c}function aC(...s){const a={};for(let c=0;c<s.length;c++){const h=s[c];for(const p in h)if(p==="class")a.class!==h.class&&(a.class=_t([a.class,h.class]));else if(p==="style")a.style=ba([a.style,h.style]);else if(_a(p)){const k=a[p],m=h[p];m&&k!==m&&!(Ot(k)&&k.includes(m))&&(a[p]=k?[].concat(k,m):m)}else p!==""&&(a[p]=h[p])}return a}function Ln(s,a,c,h=null){Jn(s,a,7,[c,h])}const p7=JA();let g7=0;function lC(s,a,c){const h=s.type,p=(a?a.appContext:s.appContext)||p7,k={uid:g7++,vnode:s,type:h,parent:a,appContext:p,root:null,next:null,subTree:null,effect:null,update:null,scope:new jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(p.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:KA(h,p),emitsOptions:IA(h,p),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:h.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return k.ctx={_:k},k.root=a?a.root:k,k.emit=vT.bind(null,k),s.ce&&s.ce(k),k}let Ke=null;const Ti=()=>Ke||Cn,Si=s=>{Ke=s,s.scope.on()},yi=()=>{Ke&&Ke.scope.off(),Ke=null};function cC(s){return s.vnode.shapeFlag&4}let lr=!1;function dC(s,a=!1){lr=a;const{props:c,children:h}=s.vnode,p=cC(s);JT(s,c,p,a),e7(s,h);const k=p?f7(s,a):void 0;return lr=!1,k}function f7(s,a){const c=s.type;s.accessCache=Object.create(null),s.proxy=Hh(new Proxy(s.ctx,ch));const{setup:h}=c;if(h){const p=s.setupContext=h.length>1?hC(s):null;Si(s),gr();const k=Xo(h,s,0,[s.props,p]);if(fr(),yi(),zh(k)){if(k.then(yi,yi),a)return k.then(m=>{fh(s,m,a)}).catch(m=>{_s(m,s,0)});s.asyncDep=k}else fh(s,k,a)}else uC(s,a)}function fh(s,a,c){Vt(a)?s.type.__ssrInlineRender?s.ssrRender=a:s.render=a:De(a)&&(s.setupState=Wh(a)),uC(s,c)}let Xl,mh;function m7(s){Xl=s,mh=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,GT))}}const k7=()=>!Xl;function uC(s,a,c){const h=s.type;if(!s.render){if(!a&&Xl&&!h.render){const p=h.template||np(s).template;if(p){const{isCustomElement:k,compilerOptions:m}=s.appContext.config,{delimiters:v,compilerOptions:_}=h,x=Ye(Ye({isCustomElement:k,delimiters:v},m),_);h.render=Xl(p,x)}}s.render=h.render||Ao,mh&&mh(s)}Si(s),gr(),WT(s),fr(),yi()}function b7(s){return new Proxy(s.attrs,{get(a,c){return $n(s,"get","$attrs"),a[c]}})}function hC(s){const a=h=>{s.exposed=h||{}};let c;return{get attrs(){return c||(c=b7(s))},slots:s.slots,emit:s.emit,expose:a}}function wc(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Wh(Hh(s.exposed)),{get(a,c){if(c in a)return a[c];if(c in ea)return ea[c](s)},has(a,c){return c in a||c in ea}}))}function kh(s,a=!0){return Vt(s)?s.displayName||s.name:s.name||a&&s.__name}function _7(s){return Vt(s)&&"__vccOpts"in s}const te=(s,a)=>gT(s,a,lr);function w7(){return null}function v7(){return null}function A7(s){}function C7(s,a){return null}function y7(){return pC().slots}function x7(){return pC().attrs}function pC(){const s=Ti();return s.setupContext||(s.setupContext=hC(s))}function E7(s,a){const c=Ot(s)?s.reduce((h,p)=>(h[p]={},h),{}):s;for(const h in a){const p=c[h];p?Ot(p)||Vt(p)?c[h]={type:p,default:a[h]}:p.default=a[h]:p===null&&(c[h]={default:a[h]})}return c}function D7(s,a){const c={};for(const h in s)a.includes(h)||Object.defineProperty(c,h,{enumerable:!0,get:()=>s[h]});return c}function S7(s){const a=Ti();let c=s();return yi(),zh(c)&&(c=c.catch(h=>{throw Si(a),h})),[c,()=>Si(a)]}function Ea(s,a,c){const h=arguments.length;return h===2?De(a)&&!Ot(a)?Di(a)?Et(s,null,[a]):Et(s,a):Et(s,null,a):(h>3?c=Array.prototype.slice.call(arguments,2):h===3&&Di(c)&&(c=[c]),Et(s,a,c))}const gC=Symbol(""),fC=()=>jn(gC);function I7(){}function M7(s,a,c,h){const p=c[h];if(p&&mC(p,s))return p;const k=a();return k.memo=s.slice(),c[h]=k}function mC(s,a){const c=s.memo;if(c.length!=a.length)return!1;for(let h=0;h<c.length;h++)if(rr(c[h],a[h]))return!1;return ms>0&&zn&&zn.push(s),!0}const kC="3.2.47",T7={createComponentInstance:lC,setupComponent:dC,renderComponentRoot:$l,setCurrentRenderingInstance:pa,isVNode:Di,normalizeVNode:Qn},B7=T7,N7=null,P7=null,O7="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,dv=rs&&rs.createElement("template"),L7={insert:(s,a,c)=>{a.insertBefore(s,c||null)},remove:s=>{const a=s.parentNode;a&&a.removeChild(s)},createElement:(s,a,c,h)=>{const p=a?rs.createElementNS(O7,s):rs.createElement(s,c?{is:c}:void 0);return s==="select"&&h&&h.multiple!=null&&p.setAttribute("multiple",h.multiple),p},createText:s=>rs.createTextNode(s),createComment:s=>rs.createComment(s),setText:(s,a)=>{s.nodeValue=a},setElementText:(s,a)=>{s.textContent=a},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>rs.querySelector(s),setScopeId(s,a){s.setAttribute(a,"")},insertStaticContent(s,a,c,h,p,k){const m=c?c.previousSibling:a.lastChild;if(p&&(p===k||p.nextSibling))for(;a.insertBefore(p.cloneNode(!0),c),!(p===k||!(p=p.nextSibling)););else{dv.innerHTML=h?`<svg>${s}</svg>`:s;const v=dv.content;if(h){const _=v.firstChild;for(;_.firstChild;)v.appendChild(_.firstChild);v.removeChild(_)}a.insertBefore(v,c)}return[m?m.nextSibling:a.firstChild,c?c.previousSibling:a.lastChild]}};function z7(s,a,c){const h=s._vtc;h&&(a=(a?[a,...h]:[...h]).join(" ")),a==null?s.removeAttribute("class"):c?s.setAttribute("class",a):s.className=a}function R7(s,a,c){const h=s.style,p=je(c);if(c&&!p){if(a&&!je(a))for(const k in a)c[k]==null&&bh(h,k,"");for(const k in c)bh(h,k,c[k])}else{const k=h.display;p?a!==c&&(h.cssText=c):a&&s.removeAttribute("style"),"_vod"in s&&(h.display=k)}}const uv=/\s*!important$/;function bh(s,a,c){if(Ot(c))c.forEach(h=>bh(s,a,h));else if(c==null&&(c=""),a.startsWith("--"))s.setProperty(a,c);else{const h=j7(s,a);uv.test(c)?s.setProperty(lo(h),c.replace(uv,""),"important"):s[h]=c}}const hv=["Webkit","Moz","ms"],qu={};function j7(s,a){const c=qu[a];if(c)return c;let h=Rn(a);if(h!=="filter"&&h in s)return qu[a]=h;h=wa(h);for(let p=0;p<hv.length;p++){const k=hv[p]+h;if(k in s)return qu[a]=k}return a}const pv="http://www.w3.org/1999/xlink";function $7(s,a,c,h,p){if(h&&a.startsWith("xlink:"))c==null?s.removeAttributeNS(pv,a.slice(6,a.length)):s.setAttributeNS(pv,a,c);else{const k=kM(a);c==null||k&&!nA(c)?s.removeAttribute(a):s.setAttribute(a,k?"":c)}}function F7(s,a,c,h,p,k,m){if(a==="innerHTML"||a==="textContent"){h&&m(h,p,k),s[a]=c??"";return}if(a==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=c;const _=c??"";(s.value!==_||s.tagName==="OPTION")&&(s.value=_),c==null&&s.removeAttribute(a);return}let v=!1;if(c===""||c==null){const _=typeof s[a];_==="boolean"?c=nA(c):c==null&&_==="string"?(c="",v=!0):_==="number"&&(c=0,v=!0)}try{s[a]=c}catch{}v&&s.removeAttribute(a)}function Jo(s,a,c,h){s.addEventListener(a,c,h)}function V7(s,a,c,h){s.removeEventListener(a,c,h)}function U7(s,a,c,h,p=null){const k=s._vei||(s._vei={}),m=k[a];if(h&&m)m.value=h;else{const[v,_]=H7(a);if(h){const x=k[a]=W7(h,p);Jo(s,v,x,_)}else m&&(V7(s,v,m,_),k[a]=void 0)}}const gv=/(?:Once|Passive|Capture)$/;function H7(s){let a;if(gv.test(s)){a={};let h;for(;h=s.match(gv);)s=s.slice(0,s.length-h[0].length),a[h[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):lo(s.slice(2)),a]}let Gu=0;const q7=Promise.resolve(),G7=()=>Gu||(q7.then(()=>Gu=0),Gu=Date.now());function W7(s,a){const c=h=>{if(!h._vts)h._vts=Date.now();else if(h._vts<=c.attached)return;Jn(K7(h,c.value),a,5,[h])};return c.value=s,c.attached=G7(),c}function K7(s,a){if(Ot(a)){const c=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{c.call(s),s._stopped=!0},a.map(h=>p=>!p._stopped&&h&&h(p))}else return a}const fv=/^on[a-z]/,Y7=(s,a,c,h,p=!1,k,m,v,_)=>{a==="class"?z7(s,h,p):a==="style"?R7(s,c,h):_a(a)?Oh(a)||U7(s,a,c,h,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Q7(s,a,h,p))?F7(s,a,h,k,m,v,_):(a==="true-value"?s._trueValue=h:a==="false-value"&&(s._falseValue=h),$7(s,a,h,p))};function Q7(s,a,c,h){return h?!!(a==="innerHTML"||a==="textContent"||a in s&&fv.test(a)&&Vt(c)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&s.tagName==="INPUT"||a==="type"&&s.tagName==="TEXTAREA"||fv.test(a)&&je(c)?!1:a in s}function bC(s,a){const c=ni(s);class h extends vc{constructor(k){super(c,k,a)}}return h.def=c,h}const Z7=s=>bC(s,BC),J7=typeof HTMLElement<"u"?HTMLElement:class{};class vc extends J7{constructor(a,c={},h){super(),this._def=a,this._props=c,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Co(()=>{this._connected||(vh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const p of h)this._setAttr(p.attributeName)}).observe(this,{attributes:!0});const a=(h,p=!1)=>{const{props:k,styles:m}=h;let v;if(k&&!Ot(k))for(const _ in k){const x=k[_];(x===Number||x&&x.type===Number)&&(_ in this._props&&(this._props[_]=Kl(this._props[_])),(v||(v=Object.create(null)))[Rn(_)]=!0)}this._numberProps=v,p&&this._resolveProps(h),this._applyStyles(m),this._update()},c=this._def.__asyncLoader;c?c().then(h=>a(h,!0)):a(this._def)}_resolveProps(a){const{props:c}=a,h=Ot(c)?c:Object.keys(c||{});for(const p of Object.keys(this))p[0]!=="_"&&h.includes(p)&&this._setProp(p,this[p],!0,!1);for(const p of h.map(Rn))Object.defineProperty(this,p,{get(){return this._getProp(p)},set(k){this._setProp(p,k)}})}_setAttr(a){let c=this.getAttribute(a);const h=Rn(a);this._numberProps&&this._numberProps[h]&&(c=Kl(c)),this._setProp(h,c,!1)}_getProp(a){return this._props[a]}_setProp(a,c,h=!0,p=!0){c!==this._props[a]&&(this._props[a]=c,p&&this._instance&&this._update(),h&&(c===!0?this.setAttribute(lo(a),""):typeof c=="string"||typeof c=="number"?this.setAttribute(lo(a),c+""):c||this.removeAttribute(lo(a))))}_update(){vh(this._createVNode(),this.shadowRoot)}_createVNode(){const a=Et(this._def,Ye({},this._props));return this._instance||(a.ce=c=>{this._instance=c,c.isCE=!0;const h=(k,m)=>{this.dispatchEvent(new CustomEvent(k,{detail:m}))};c.emit=(k,...m)=>{h(k,m),lo(k)!==k&&h(lo(k),m)};let p=this;for(;p=p&&(p.parentNode||p.host);)if(p instanceof vc){c.parent=p._instance,c.provides=p._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(c=>{const h=document.createElement("style");h.textContent=c,this.shadowRoot.appendChild(h)})}}function X7(s="$style"){{const a=Ti();if(!a)return ye;const c=a.type.__cssModules;if(!c)return ye;const h=c[s];return h||ye}}function tB(s){const a=Ti();if(!a)return;const c=a.ut=(p=s(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(k=>wh(k,p))},h=()=>{const p=s(a.proxy);_h(a.subTree,p),c(p)};BA(h),_e(()=>{const p=new MutationObserver(h);p.observe(a.subTree.el.parentNode,{childList:!0}),xa(()=>p.disconnect())})}function _h(s,a){if(s.shapeFlag&128){const c=s.suspense;s=c.activeBranch,c.pendingBranch&&!c.isHydrating&&c.effects.push(()=>{_h(c.activeBranch,a)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)wh(s.el,a);else if(s.type===Rt)s.children.forEach(c=>_h(c,a));else if(s.type===hs){let{el:c,anchor:h}=s;for(;c&&(wh(c,a),c!==h);)c=c.nextSibling}}function wh(s,a){if(s.nodeType===1){const c=s.style;for(const h in a)c.setProperty(`--${h}`,a[h])}}const fi="transition",Wr="animation",Ac=(s,{slots:a})=>Ea(Xh,wC(s),a);Ac.displayName="Transition";const _C={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eB=Ac.props=Ye({},Xh.props,_C),os=(s,a=[])=>{Ot(s)?s.forEach(c=>c(...a)):s&&s(...a)},mv=s=>s?Ot(s)?s.some(a=>a.length>1):s.length>1:!1;function wC(s){const a={};for(const ut in s)ut in _C||(a[ut]=s[ut]);if(s.css===!1)return a;const{name:c="v",type:h,duration:p,enterFromClass:k=`${c}-enter-from`,enterActiveClass:m=`${c}-enter-active`,enterToClass:v=`${c}-enter-to`,appearFromClass:_=k,appearActiveClass:x=m,appearToClass:C=v,leaveFromClass:E=`${c}-leave-from`,leaveActiveClass:A=`${c}-leave-active`,leaveToClass:M=`${c}-leave-to`}=s,j=nB(p),L=j&&j[0],U=j&&j[1],{onBeforeEnter:T,onEnter:D,onEnterCancelled:H,onLeave:N,onLeaveCancelled:G,onBeforeAppear:V=T,onAppear:q=D,onAppearCancelled:z=H}=a,X=(ut,Tt,St)=>{_i(ut,Tt?C:v),_i(ut,Tt?x:m),St&&St()},pt=(ut,Tt)=>{ut._isLeaving=!1,_i(ut,E),_i(ut,M),_i(ut,A),Tt&&Tt()},yt=ut=>(Tt,St)=>{const le=ut?q:D,Ut=()=>X(Tt,ut,St);os(le,[Tt,Ut]),kv(()=>{_i(Tt,ut?_:k),Qo(Tt,ut?C:v),mv(le)||bv(Tt,h,L,Ut)})};return Ye(a,{onBeforeEnter(ut){os(T,[ut]),Qo(ut,k),Qo(ut,m)},onBeforeAppear(ut){os(V,[ut]),Qo(ut,_),Qo(ut,x)},onEnter:yt(!1),onAppear:yt(!0),onLeave(ut,Tt){ut._isLeaving=!0;const St=()=>pt(ut,Tt);Qo(ut,E),AC(),Qo(ut,A),kv(()=>{ut._isLeaving&&(_i(ut,E),Qo(ut,M),mv(N)||bv(ut,h,U,St))}),os(N,[ut,St])},onEnterCancelled(ut){X(ut,!1),os(H,[ut])},onAppearCancelled(ut){X(ut,!0),os(z,[ut])},onLeaveCancelled(ut){pt(ut),os(G,[ut])}})}function nB(s){if(s==null)return null;if(De(s))return[Wu(s.enter),Wu(s.leave)];{const a=Wu(s);return[a,a]}}function Wu(s){return Kl(s)}function Qo(s,a){a.split(/\s+/).forEach(c=>c&&s.classList.add(c)),(s._vtc||(s._vtc=new Set)).add(a)}function _i(s,a){a.split(/\s+/).forEach(h=>h&&s.classList.remove(h));const{_vtc:c}=s;c&&(c.delete(a),c.size||(s._vtc=void 0))}function kv(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let oB=0;function bv(s,a,c,h){const p=s._endId=++oB,k=()=>{p===s._endId&&h()};if(c)return setTimeout(k,c);const{type:m,timeout:v,propCount:_}=vC(s,a);if(!m)return h();const x=m+"end";let C=0;const E=()=>{s.removeEventListener(x,A),k()},A=M=>{M.target===s&&++C>=_&&E()};setTimeout(()=>{C<_&&E()},v+1),s.addEventListener(x,A)}function vC(s,a){const c=window.getComputedStyle(s),h=j=>(c[j]||"").split(", "),p=h(`${fi}Delay`),k=h(`${fi}Duration`),m=_v(p,k),v=h(`${Wr}Delay`),_=h(`${Wr}Duration`),x=_v(v,_);let C=null,E=0,A=0;a===fi?m>0&&(C=fi,E=m,A=k.length):a===Wr?x>0&&(C=Wr,E=x,A=_.length):(E=Math.max(m,x),C=E>0?m>x?fi:Wr:null,A=C?C===fi?k.length:_.length:0);const M=C===fi&&/\b(transform|all)(,|$)/.test(h(`${fi}Property`).toString());return{type:C,timeout:E,propCount:A,hasTransform:M}}function _v(s,a){for(;s.length<a.length;)s=s.concat(s);return Math.max(...a.map((c,h)=>wv(c)+wv(s[h])))}function wv(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function AC(){return document.body.offsetHeight}const CC=new WeakMap,yC=new WeakMap,xC={name:"TransitionGroup",props:Ye({},eB,{tag:String,moveClass:String}),setup(s,{slots:a}){const c=Ti(),h=Jh();let p,k;return kc(()=>{if(!p.length)return;const m=s.moveClass||`${s.name||"v"}-move`;if(!cB(p[0].el,c.vnode.el,m))return;p.forEach(rB),p.forEach(aB);const v=p.filter(lB);AC(),v.forEach(_=>{const x=_.el,C=x.style;Qo(x,m),C.transform=C.webkitTransform=C.transitionDuration="";const E=x._moveCb=A=>{A&&A.target!==x||(!A||/transform$/.test(A.propertyName))&&(x.removeEventListener("transitionend",E),x._moveCb=null,_i(x,m))};x.addEventListener("transitionend",E)})}),()=>{const m=ee(s),v=wC(m);let _=m.tag||Rt;p=k,k=a.default?fc(a.default()):[];for(let x=0;x<k.length;x++){const C=k[x];C.key!=null&&gs(C,ar(C,v,h,c))}if(p)for(let x=0;x<p.length;x++){const C=p[x];gs(C,ar(C,v,h,c)),CC.set(C,C.el.getBoundingClientRect())}return Et(_,null,k)}}},iB=s=>delete s.mode;xC.props;const sB=xC;function rB(s){const a=s.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function aB(s){yC.set(s,s.el.getBoundingClientRect())}function lB(s){const a=CC.get(s),c=yC.get(s),h=a.left-c.left,p=a.top-c.top;if(h||p){const k=s.el.style;return k.transform=k.webkitTransform=`translate(${h}px,${p}px)`,k.transitionDuration="0s",s}}function cB(s,a,c){const h=s.cloneNode();s._vtc&&s._vtc.forEach(m=>{m.split(/\s+/).forEach(v=>v&&h.classList.remove(v))}),c.split(/\s+/).forEach(m=>m&&h.classList.add(m)),h.style.display="none";const p=a.nodeType===1?a:a.parentNode;p.appendChild(h);const{hasTransform:k}=vC(h);return p.removeChild(h),k}const Ii=s=>{const a=s.props["onUpdate:modelValue"]||!1;return Ot(a)?c=>or(a,c):a};function dB(s){s.target.composing=!0}function vv(s){const a=s.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Pt={created(s,{modifiers:{lazy:a,trim:c,number:h}},p){s._assign=Ii(p);const k=h||p.props&&p.props.type==="number";Jo(s,a?"change":"input",m=>{if(m.target.composing)return;let v=s.value;c&&(v=v.trim()),k&&(v=Wl(v)),s._assign(v)}),c&&Jo(s,"change",()=>{s.value=s.value.trim()}),a||(Jo(s,"compositionstart",dB),Jo(s,"compositionend",vv),Jo(s,"change",vv))},mounted(s,{value:a}){s.value=a??""},beforeUpdate(s,{value:a,modifiers:{lazy:c,trim:h,number:p}},k){if(s._assign=Ii(k),s.composing||document.activeElement===s&&s.type!=="range"&&(c||h&&s.value.trim()===a||(p||s.type==="number")&&Wl(s.value)===a))return;const m=a??"";s.value!==m&&(s.value=m)}},re={deep:!0,created(s,a,c){s._assign=Ii(c),Jo(s,"change",()=>{const h=s._modelValue,p=cr(s),k=s.checked,m=s._assign;if(Ot(h)){const v=sc(h,p),_=v!==-1;if(k&&!_)m(h.concat(p));else if(!k&&_){const x=[...h];x.splice(v,1),m(x)}}else if(ks(h)){const v=new Set(h);k?v.add(p):v.delete(p),m(v)}else m(EC(s,k))})},mounted:Av,beforeUpdate(s,a,c){s._assign=Ii(c),Av(s,a,c)}};function Av(s,{value:a,oldValue:c},h){s._modelValue=a,Ot(a)?s.checked=sc(a,h.props.value)>-1:ks(a)?s.checked=a.has(h.props.value):a!==c&&(s.checked=xi(a,EC(s,!0)))}const lp={created(s,{value:a},c){s.checked=xi(a,c.props.value),s._assign=Ii(c),Jo(s,"change",()=>{s._assign(cr(s))})},beforeUpdate(s,{value:a,oldValue:c},h){s._assign=Ii(h),a!==c&&(s.checked=xi(a,h.props.value))}},Fn={deep:!0,created(s,{value:a,modifiers:{number:c}},h){const p=ks(a);Jo(s,"change",()=>{const k=Array.prototype.filter.call(s.options,m=>m.selected).map(m=>c?Wl(cr(m)):cr(m));s._assign(s.multiple?p?new Set(k):k:k[0])}),s._assign=Ii(h)},mounted(s,{value:a}){Cv(s,a)},beforeUpdate(s,a,c){s._assign=Ii(c)},updated(s,{value:a}){Cv(s,a)}};function Cv(s,a){const c=s.multiple;if(!(c&&!Ot(a)&&!ks(a))){for(let h=0,p=s.options.length;h<p;h++){const k=s.options[h],m=cr(k);if(c)Ot(a)?k.selected=sc(a,m)>-1:k.selected=a.has(m);else if(xi(cr(k),a)){s.selectedIndex!==h&&(s.selectedIndex=h);return}}!c&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function cr(s){return"_value"in s?s._value:s.value}function EC(s,a){const c=a?"_trueValue":"_falseValue";return c in s?s[c]:a}const DC={created(s,a,c){jl(s,a,c,null,"created")},mounted(s,a,c){jl(s,a,c,null,"mounted")},beforeUpdate(s,a,c,h){jl(s,a,c,h,"beforeUpdate")},updated(s,a,c,h){jl(s,a,c,h,"updated")}};function SC(s,a){switch(s){case"SELECT":return Fn;case"TEXTAREA":return Pt;default:switch(a){case"checkbox":return re;case"radio":return lp;default:return Pt}}}function jl(s,a,c,h,p){const m=SC(s.tagName,c.props&&c.props.type)[p];m&&m(s,a,c,h)}function uB(){Pt.getSSRProps=({value:s})=>({value:s}),lp.getSSRProps=({value:s},a)=>{if(a.props&&xi(a.props.value,s))return{checked:!0}},re.getSSRProps=({value:s},a)=>{if(Ot(s)){if(a.props&&sc(s,a.props.value)>-1)return{checked:!0}}else if(ks(s)){if(a.props&&s.has(a.props.value))return{checked:!0}}else if(s)return{checked:!0}},DC.getSSRProps=(s,a)=>{if(typeof a.type!="string")return;const c=SC(a.type.toUpperCase(),a.props&&a.props.type);if(c.getSSRProps)return c.getSSRProps(s,a)}}const hB=["ctrl","shift","alt","meta"],pB={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,a)=>hB.some(c=>s[`${c}Key`]&&!a.includes(c))},Qe=(s,a)=>(c,...h)=>{for(let p=0;p<a.length;p++){const k=pB[a[p]];if(k&&k(c,a))return}return s(c,...h)},gB={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fB=(s,a)=>c=>{if(!("key"in c))return;const h=lo(c.key);if(a.some(p=>p===h||gB[p]===h))return s(c)},ia={beforeMount(s,{value:a},{transition:c}){s._vod=s.style.display==="none"?"":s.style.display,c&&a?c.beforeEnter(s):Kr(s,a)},mounted(s,{value:a},{transition:c}){c&&a&&c.enter(s)},updated(s,{value:a,oldValue:c},{transition:h}){!a!=!c&&(h?a?(h.beforeEnter(s),Kr(s,!0),h.enter(s)):h.leave(s,()=>{Kr(s,!1)}):Kr(s,a))},beforeUnmount(s,{value:a}){Kr(s,a)}};function Kr(s,a){s.style.display=a?s._vod:"none"}function mB(){ia.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const IC=Ye({patchProp:Y7},L7);let sa,yv=!1;function MC(){return sa||(sa=XA(IC))}function TC(){return sa=yv?sa:tC(IC),yv=!0,sa}const vh=(...s)=>{MC().render(...s)},BC=(...s)=>{TC().hydrate(...s)},NC=(...s)=>{const a=MC().createApp(...s),{mount:c}=a;return a.mount=h=>{const p=PC(h);if(!p)return;const k=a._component;!Vt(k)&&!k.render&&!k.template&&(k.template=p.innerHTML),p.innerHTML="";const m=c(p,!1,p instanceof SVGElement);return p instanceof Element&&(p.removeAttribute("v-cloak"),p.setAttribute("data-v-app","")),m},a},kB=(...s)=>{const a=TC().createApp(...s),{mount:c}=a;return a.mount=h=>{const p=PC(h);if(p)return c(p,!0,p instanceof SVGElement)},a};function PC(s){return je(s)?document.querySelector(s):s}let xv=!1;const bB=()=>{xv||(xv=!0,uB(),mB())},_B=()=>{},wB=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Xh,Comment:Sn,EffectScope:jh,Fragment:Rt,KeepAlive:RT,ReactiveEffect:va,Static:hs,Suspense:ST,Teleport:d7,Text:fs,Transition:Ac,TransitionGroup:sB,VueElement:vc,assertNumber:mT,callWithAsyncErrorHandling:Jn,callWithErrorHandling:Xo,camelize:Rn,capitalize:wa,cloneVNode:yo,compatUtils:P7,compile:_B,computed:te,createApp:NC,createBlock:sp,createCommentVNode:Q,createElementBlock:O,createElementVNode:g,createHydrationRenderer:tC,createPropsRestProxy:D7,createRenderer:XA,createSSRApp:kB,createSlots:UT,createStaticVNode:rp,createTextVNode:_n,createVNode:Et,customRef:dT,defineAsyncComponent:LT,defineComponent:ni,defineCustomElement:bC,defineEmits:v7,defineExpose:A7,defineProps:w7,defineSSRCustomElement:Z7,get devtools(){return Xs},effect:TM,effectScope:DM,getCurrentInstance:Ti,getCurrentScope:aA,getTransitionRawChildren:fc,guardReactiveProps:rC,h:Ea,handleError:_s,hydrate:BC,initCustomFormatter:I7,initDirectivesForSSR:bB,inject:jn,isMemoSame:mC,isProxy:Uh,isReactive:cs,isReadonly:ps,isRef:ie,isRuntimeOnly:k7,isShallow:ca,isVNode:Di,markRaw:Hh,mergeDefaults:E7,mergeProps:aC,nextTick:Co,normalizeClass:_t,normalizeProps:fM,normalizeStyle:ba,onActivated:OA,onBeforeMount:RA,onBeforeUnmount:bc,onBeforeUpdate:jA,onDeactivated:LA,onErrorCaptured:UA,onMounted:_e,onRenderTracked:VA,onRenderTriggered:FA,onScopeDispose:SM,onServerPrefetch:$A,onUnmounted:xa,onUpdated:kc,openBlock:P,popScopeId:Be,provide:ds,proxyRefs:Wh,pushScopeId:Te,queuePostFlushCb:Yh,reactive:bs,readonly:Vh,ref:K,registerRuntimeCompiler:m7,render:vh,renderList:se,renderSlot:HT,resolveComponent:Tn,resolveDirective:VT,resolveDynamicComponent:FT,resolveFilter:N7,resolveTransitionHooks:ar,setBlockTracking:gh,setDevtoolsHook:SA,setTransitionHooks:gs,shallowReactive:wA,shallowReadonly:sT,shallowRef:vA,ssrContextKey:gC,ssrUtils:B7,stop:BM,toDisplayString:xt,toHandlerKey:ta,toHandlers:qT,toRaw:ee,toRef:CA,toRefs:uT,transformVNodeArgs:u7,triggerRef:aT,unref:J,useAttrs:x7,useCssModule:X7,useCssVars:tB,useSSRContext:fC,useSlots:y7,useTransitionState:Jh,vModelCheckbox:re,vModelDynamic:DC,vModelRadio:lp,vModelSelect:Fn,vModelText:Pt,vShow:ia,version:kC,warn:fT,watch:co,watchEffect:Aa,watchPostEffect:BA,watchSyncEffect:NT,withAsyncContext:S7,withCtx:he,withDefaults:C7,withDirectives:lt,withKeys:fB,withMemo:M7,withModifiers:Qe,withScopeId:AT},Symbol.toStringTag,{value:"Module"}));function vB(){return OC().__VUE_DEVTOOLS_GLOBAL_HOOK__}function OC(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const AB=typeof Proxy=="function",CB="devtools-plugin:setup",yB="plugin:settings:set";let Qs,Ah;function xB(){var s;return Qs!==void 0||(typeof window<"u"&&window.performance?(Qs=!0,Ah=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?(Qs=!0,Ah=global.perf_hooks.performance):Qs=!1),Qs}function EB(){return xB()?Ah.now():Date.now()}class DB{constructor(a,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=a,this.hook=c;const h={};if(a.settings)for(const m in a.settings){const v=a.settings[m];h[m]=v.defaultValue}const p=`__vue-devtools-plugin-settings__${a.id}`;let k=Object.assign({},h);try{const m=localStorage.getItem(p),v=JSON.parse(m);Object.assign(k,v)}catch{}this.fallbacks={getSettings(){return k},setSettings(m){try{localStorage.setItem(p,JSON.stringify(m))}catch{}k=m},now(){return EB()}},c&&c.on(yB,(m,v)=>{m===this.plugin.id&&this.fallbacks.setSettings(v)}),this.proxiedOn=new Proxy({},{get:(m,v)=>this.target?this.target.on[v]:(..._)=>{this.onQueue.push({method:v,args:_})}}),this.proxiedTarget=new Proxy({},{get:(m,v)=>this.target?this.target[v]:v==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(v)?(..._)=>(this.targetQueue.push({method:v,args:_,resolve:()=>{}}),this.fallbacks[v](..._)):(..._)=>new Promise(x=>{this.targetQueue.push({method:v,args:_,resolve:x})})})}async setRealTarget(a){this.target=a;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function SB(s,a){const c=s,h=OC(),p=vB(),k=AB&&c.enableEarlyProxy;if(p&&(h.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!k))p.emit(CB,s,a);else{const m=k?new DB(c,p):null;(h.__VUE_DEVTOOLS_PLUGINS__=h.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:c,setupFn:a,proxy:m}),m&&a(m.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var IB="store";function mr(s,a){Object.keys(s).forEach(function(c){return a(s[c],c)})}function MB(s){return s!==null&&typeof s=="object"}function TB(s){return s&&typeof s.then=="function"}function BB(s,a){return function(){return s(a)}}function LC(s,a,c){return a.indexOf(s)<0&&(c&&c.prepend?a.unshift(s):a.push(s)),function(){var h=a.indexOf(s);h>-1&&a.splice(h,1)}}function zC(s,a){s._actions=Object.create(null),s._mutations=Object.create(null),s._wrappedGetters=Object.create(null),s._modulesNamespaceMap=Object.create(null);var c=s.state;Cc(s,c,[],s._modules.root,!0),cp(s,c,a)}function cp(s,a,c){var h=s._state;s.getters={},s._makeLocalGettersCache=Object.create(null);var p=s._wrappedGetters,k={};mr(p,function(m,v){k[v]=BB(m,s),Object.defineProperty(s.getters,v,{get:function(){return k[v]()},enumerable:!0})}),s._state=bs({data:a}),s.strict&&zB(s),h&&c&&s._withCommit(function(){h.data=null})}function Cc(s,a,c,h,p){var k=!c.length,m=s._modules.getNamespace(c);if(h.namespaced&&(s._modulesNamespaceMap[m],s._modulesNamespaceMap[m]=h),!k&&!p){var v=dp(a,c.slice(0,-1)),_=c[c.length-1];s._withCommit(function(){v[_]=h.state})}var x=h.context=NB(s,m,c);h.forEachMutation(function(C,E){var A=m+E;PB(s,A,C,x)}),h.forEachAction(function(C,E){var A=C.root?E:m+E,M=C.handler||C;OB(s,A,M,x)}),h.forEachGetter(function(C,E){var A=m+E;LB(s,A,C,x)}),h.forEachChild(function(C,E){Cc(s,a,c.concat(E),C,p)})}function NB(s,a,c){var h=a==="",p={dispatch:h?s.dispatch:function(k,m,v){var _=tc(k,m,v),x=_.payload,C=_.options,E=_.type;return(!C||!C.root)&&(E=a+E),s.dispatch(E,x)},commit:h?s.commit:function(k,m,v){var _=tc(k,m,v),x=_.payload,C=_.options,E=_.type;(!C||!C.root)&&(E=a+E),s.commit(E,x,C)}};return Object.defineProperties(p,{getters:{get:h?function(){return s.getters}:function(){return RC(s,a)}},state:{get:function(){return dp(s.state,c)}}}),p}function RC(s,a){if(!s._makeLocalGettersCache[a]){var c={},h=a.length;Object.keys(s.getters).forEach(function(p){if(p.slice(0,h)===a){var k=p.slice(h);Object.defineProperty(c,k,{get:function(){return s.getters[p]},enumerable:!0})}}),s._makeLocalGettersCache[a]=c}return s._makeLocalGettersCache[a]}function PB(s,a,c,h){var p=s._mutations[a]||(s._mutations[a]=[]);p.push(function(m){c.call(s,h.state,m)})}function OB(s,a,c,h){var p=s._actions[a]||(s._actions[a]=[]);p.push(function(m){var v=c.call(s,{dispatch:h.dispatch,commit:h.commit,getters:h.getters,state:h.state,rootGetters:s.getters,rootState:s.state},m);return TB(v)||(v=Promise.resolve(v)),s._devtoolHook?v.catch(function(_){throw s._devtoolHook.emit("vuex:error",_),_}):v})}function LB(s,a,c,h){s._wrappedGetters[a]||(s._wrappedGetters[a]=function(k){return c(h.state,h.getters,k.state,k.getters)})}function zB(s){co(function(){return s._state.data},function(){},{deep:!0,flush:"sync"})}function dp(s,a){return a.reduce(function(c,h){return c[h]},s)}function tc(s,a,c){return MB(s)&&s.type&&(c=a,a=s,s=s.type),{type:s,payload:a,options:c}}var RB="vuex bindings",Ev="vuex:mutations",Ku="vuex:actions",Zs="vuex",jB=0;function $B(s,a){SB({id:"org.vuejs.vuex",app:s,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[RB]},function(c){c.addTimelineLayer({id:Ev,label:"Vuex Mutations",color:Dv}),c.addTimelineLayer({id:Ku,label:"Vuex Actions",color:Dv}),c.addInspector({id:Zs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),c.on.getInspectorTree(function(h){if(h.app===s&&h.inspectorId===Zs)if(h.filter){var p=[];VC(p,a._modules.root,h.filter,""),h.rootNodes=p}else h.rootNodes=[FC(a._modules.root,"")]}),c.on.getInspectorState(function(h){if(h.app===s&&h.inspectorId===Zs){var p=h.nodeId;RC(a,p),h.state=UB(qB(a._modules,p),p==="root"?a.getters:a._makeLocalGettersCache,p)}}),c.on.editInspectorState(function(h){if(h.app===s&&h.inspectorId===Zs){var p=h.nodeId,k=h.path;p!=="root"&&(k=p.split("/").filter(Boolean).concat(k)),a._withCommit(function(){h.set(a._state.data,k,h.state.value)})}}),a.subscribe(function(h,p){var k={};h.payload&&(k.payload=h.payload),k.state=p,c.notifyComponentUpdate(),c.sendInspectorTree(Zs),c.sendInspectorState(Zs),c.addTimelineEvent({layerId:Ev,event:{time:Date.now(),title:h.type,data:k}})}),a.subscribeAction({before:function(h,p){var k={};h.payload&&(k.payload=h.payload),h._id=jB++,h._time=Date.now(),k.state=p,c.addTimelineEvent({layerId:Ku,event:{time:h._time,title:h.type,groupId:h._id,subtitle:"start",data:k}})},after:function(h,p){var k={},m=Date.now()-h._time;k.duration={_custom:{type:"duration",display:m+"ms",tooltip:"Action duration",value:m}},h.payload&&(k.payload=h.payload),k.state=p,c.addTimelineEvent({layerId:Ku,event:{time:Date.now(),title:h.type,groupId:h._id,subtitle:"end",data:k}})}})})}var Dv=8702998,FB=6710886,VB=16777215,jC={label:"namespaced",textColor:VB,backgroundColor:FB};function $C(s){return s&&s!=="root"?s.split("/").slice(-2,-1)[0]:"Root"}function FC(s,a){return{id:a||"root",label:$C(a),tags:s.namespaced?[jC]:[],children:Object.keys(s._children).map(function(c){return FC(s._children[c],a+c+"/")})}}function VC(s,a,c,h){h.includes(c)&&s.push({id:h||"root",label:h.endsWith("/")?h.slice(0,h.length-1):h||"Root",tags:a.namespaced?[jC]:[]}),Object.keys(a._children).forEach(function(p){VC(s,a._children[p],c,h+p+"/")})}function UB(s,a,c){a=c==="root"?a:a[c];var h=Object.keys(a),p={state:Object.keys(s.state).map(function(m){return{key:m,editable:!0,value:s.state[m]}})};if(h.length){var k=HB(a);p.getters=Object.keys(k).map(function(m){return{key:m.endsWith("/")?$C(m):m,editable:!1,value:Ch(function(){return k[m]})}})}return p}function HB(s){var a={};return Object.keys(s).forEach(function(c){var h=c.split("/");if(h.length>1){var p=a,k=h.pop();h.forEach(function(m){p[m]||(p[m]={_custom:{value:{},display:m,tooltip:"Module",abstract:!0}}),p=p[m]._custom.value}),p[k]=Ch(function(){return s[c]})}else a[c]=Ch(function(){return s[c]})}),a}function qB(s,a){var c=a.split("/").filter(function(h){return h});return c.reduce(function(h,p,k){var m=h[p];if(!m)throw new Error('Missing module "'+p+'" for path "'+a+'".');return k===c.length-1?m:m._children},a==="root"?s:s.root._children)}function Ch(s){try{return s()}catch(a){return a}}var xo=function(a,c){this.runtime=c,this._children=Object.create(null),this._rawModule=a;var h=a.state;this.state=(typeof h=="function"?h():h)||{}},UC={namespaced:{configurable:!0}};UC.namespaced.get=function(){return!!this._rawModule.namespaced};xo.prototype.addChild=function(a,c){this._children[a]=c};xo.prototype.removeChild=function(a){delete this._children[a]};xo.prototype.getChild=function(a){return this._children[a]};xo.prototype.hasChild=function(a){return a in this._children};xo.prototype.update=function(a){this._rawModule.namespaced=a.namespaced,a.actions&&(this._rawModule.actions=a.actions),a.mutations&&(this._rawModule.mutations=a.mutations),a.getters&&(this._rawModule.getters=a.getters)};xo.prototype.forEachChild=function(a){mr(this._children,a)};xo.prototype.forEachGetter=function(a){this._rawModule.getters&&mr(this._rawModule.getters,a)};xo.prototype.forEachAction=function(a){this._rawModule.actions&&mr(this._rawModule.actions,a)};xo.prototype.forEachMutation=function(a){this._rawModule.mutations&&mr(this._rawModule.mutations,a)};Object.defineProperties(xo.prototype,UC);var ws=function(a){this.register([],a,!1)};ws.prototype.get=function(a){return a.reduce(function(c,h){return c.getChild(h)},this.root)};ws.prototype.getNamespace=function(a){var c=this.root;return a.reduce(function(h,p){return c=c.getChild(p),h+(c.namespaced?p+"/":"")},"")};ws.prototype.update=function(a){HC([],this.root,a)};ws.prototype.register=function(a,c,h){var p=this;h===void 0&&(h=!0);var k=new xo(c,h);if(a.length===0)this.root=k;else{var m=this.get(a.slice(0,-1));m.addChild(a[a.length-1],k)}c.modules&&mr(c.modules,function(v,_){p.register(a.concat(_),v,h)})};ws.prototype.unregister=function(a){var c=this.get(a.slice(0,-1)),h=a[a.length-1],p=c.getChild(h);p&&p.runtime&&c.removeChild(h)};ws.prototype.isRegistered=function(a){var c=this.get(a.slice(0,-1)),h=a[a.length-1];return c?c.hasChild(h):!1};function HC(s,a,c){if(a.update(c),c.modules)for(var h in c.modules){if(!a.getChild(h))return;HC(s.concat(h),a.getChild(h),c.modules[h])}}function GB(s){return new Vn(s)}var Vn=function(a){var c=this;a===void 0&&(a={});var h=a.plugins;h===void 0&&(h=[]);var p=a.strict;p===void 0&&(p=!1);var k=a.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ws(a),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=k;var m=this,v=this,_=v.dispatch,x=v.commit;this.dispatch=function(A,M){return _.call(m,A,M)},this.commit=function(A,M,j){return x.call(m,A,M,j)},this.strict=p;var C=this._modules.root.state;Cc(this,C,[],this._modules.root),cp(this,C),h.forEach(function(E){return E(c)})},up={state:{configurable:!0}};Vn.prototype.install=function(a,c){a.provide(c||IB,this),a.config.globalProperties.$store=this;var h=this._devtools!==void 0?this._devtools:!1;h&&$B(a,this)};up.state.get=function(){return this._state.data};up.state.set=function(s){};Vn.prototype.commit=function(a,c,h){var p=this,k=tc(a,c,h),m=k.type,v=k.payload,_={type:m,payload:v},x=this._mutations[m];x&&(this._withCommit(function(){x.forEach(function(E){E(v)})}),this._subscribers.slice().forEach(function(C){return C(_,p.state)}))};Vn.prototype.dispatch=function(a,c){var h=this,p=tc(a,c),k=p.type,m=p.payload,v={type:k,payload:m},_=this._actions[k];if(_){try{this._actionSubscribers.slice().filter(function(C){return C.before}).forEach(function(C){return C.before(v,h.state)})}catch{}var x=_.length>1?Promise.all(_.map(function(C){return C(m)})):_[0](m);return new Promise(function(C,E){x.then(function(A){try{h._actionSubscribers.filter(function(M){return M.after}).forEach(function(M){return M.after(v,h.state)})}catch{}C(A)},function(A){try{h._actionSubscribers.filter(function(M){return M.error}).forEach(function(M){return M.error(v,h.state,A)})}catch{}E(A)})})}};Vn.prototype.subscribe=function(a,c){return LC(a,this._subscribers,c)};Vn.prototype.subscribeAction=function(a,c){var h=typeof a=="function"?{before:a}:a;return LC(h,this._actionSubscribers,c)};Vn.prototype.watch=function(a,c,h){var p=this;return co(function(){return a(p.state,p.getters)},c,Object.assign({},h))};Vn.prototype.replaceState=function(a){var c=this;this._withCommit(function(){c._state.data=a})};Vn.prototype.registerModule=function(a,c,h){h===void 0&&(h={}),typeof a=="string"&&(a=[a]),this._modules.register(a,c),Cc(this,this.state,a,this._modules.get(a),h.preserveState),cp(this,this.state)};Vn.prototype.unregisterModule=function(a){var c=this;typeof a=="string"&&(a=[a]),this._modules.unregister(a),this._withCommit(function(){var h=dp(c.state,a.slice(0,-1));delete h[a[a.length-1]]}),zC(this)};Vn.prototype.hasModule=function(a){return typeof a=="string"&&(a=[a]),this._modules.isRegistered(a)};Vn.prototype.hotUpdate=function(a){this._modules.update(a),zC(this,!0)};Vn.prototype._withCommit=function(a){var c=this._committing;this._committing=!0,a(),this._committing=c};Object.defineProperties(Vn.prototype,up);function qC(s,a){return function(){return s.apply(a,arguments)}}const{toString:GC}=Object.prototype,{getPrototypeOf:hp}=Object,pp=(s=>a=>{const c=GC.call(a);return s[c]||(s[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),ii=s=>(s=s.toLowerCase(),a=>pp(a)===s),yc=s=>a=>typeof a===s,{isArray:kr}=Array,fa=yc("undefined");function WB(s){return s!==null&&!fa(s)&&s.constructor!==null&&!fa(s.constructor)&&Mi(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const WC=ii("ArrayBuffer");function KB(s){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(s):a=s&&s.buffer&&WC(s.buffer),a}const YB=yc("string"),Mi=yc("function"),KC=yc("number"),gp=s=>s!==null&&typeof s=="object",QB=s=>s===!0||s===!1,Vl=s=>{if(pp(s)!=="object")return!1;const a=hp(s);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},ZB=ii("Date"),JB=ii("File"),XB=ii("Blob"),tN=ii("FileList"),eN=s=>gp(s)&&Mi(s.pipe),nN=s=>{const a="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||GC.call(s)===a||Mi(s.toString)&&s.toString()===a)},oN=ii("URLSearchParams"),iN=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Da(s,a,{allOwnKeys:c=!1}={}){if(s===null||typeof s>"u")return;let h,p;if(typeof s!="object"&&(s=[s]),kr(s))for(h=0,p=s.length;h<p;h++)a.call(null,s[h],h,s);else{const k=c?Object.getOwnPropertyNames(s):Object.keys(s),m=k.length;let v;for(h=0;h<m;h++)v=k[h],a.call(null,s[v],v,s)}}function YC(s,a){a=a.toLowerCase();const c=Object.keys(s);let h=c.length,p;for(;h-- >0;)if(p=c[h],a===p.toLowerCase())return p;return null}const QC=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ZC=s=>!fa(s)&&s!==QC;function yh(){const{caseless:s}=ZC(this)&&this||{},a={},c=(h,p)=>{const k=s&&YC(a,p)||p;Vl(a[k])&&Vl(h)?a[k]=yh(a[k],h):Vl(h)?a[k]=yh({},h):kr(h)?a[k]=h.slice():a[k]=h};for(let h=0,p=arguments.length;h<p;h++)arguments[h]&&Da(arguments[h],c);return a}const sN=(s,a,c,{allOwnKeys:h}={})=>(Da(a,(p,k)=>{c&&Mi(p)?s[k]=qC(p,c):s[k]=p},{allOwnKeys:h}),s),rN=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),aN=(s,a,c,h)=>{s.prototype=Object.create(a.prototype,h),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:a.prototype}),c&&Object.assign(s.prototype,c)},lN=(s,a,c,h)=>{let p,k,m;const v={};if(a=a||{},s==null)return a;do{for(p=Object.getOwnPropertyNames(s),k=p.length;k-- >0;)m=p[k],(!h||h(m,s,a))&&!v[m]&&(a[m]=s[m],v[m]=!0);s=c!==!1&&hp(s)}while(s&&(!c||c(s,a))&&s!==Object.prototype);return a},cN=(s,a,c)=>{s=String(s),(c===void 0||c>s.length)&&(c=s.length),c-=a.length;const h=s.indexOf(a,c);return h!==-1&&h===c},dN=s=>{if(!s)return null;if(kr(s))return s;let a=s.length;if(!KC(a))return null;const c=new Array(a);for(;a-- >0;)c[a]=s[a];return c},uN=(s=>a=>s&&a instanceof s)(typeof Uint8Array<"u"&&hp(Uint8Array)),hN=(s,a)=>{const h=(s&&s[Symbol.iterator]).call(s);let p;for(;(p=h.next())&&!p.done;){const k=p.value;a.call(s,k[0],k[1])}},pN=(s,a)=>{let c;const h=[];for(;(c=s.exec(a))!==null;)h.push(c);return h},gN=ii("HTMLFormElement"),fN=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,h,p){return h.toUpperCase()+p}),Sv=(({hasOwnProperty:s})=>(a,c)=>s.call(a,c))(Object.prototype),mN=ii("RegExp"),JC=(s,a)=>{const c=Object.getOwnPropertyDescriptors(s),h={};Da(c,(p,k)=>{a(p,k,s)!==!1&&(h[k]=p)}),Object.defineProperties(s,h)},kN=s=>{JC(s,(a,c)=>{if(Mi(s)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const h=s[c];if(Mi(h)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},bN=(s,a)=>{const c={},h=p=>{p.forEach(k=>{c[k]=!0})};return kr(s)?h(s):h(String(s).split(a)),c},_N=()=>{},wN=(s,a)=>(s=+s,Number.isFinite(s)?s:a),Yu="abcdefghijklmnopqrstuvwxyz",Iv="0123456789",XC={DIGIT:Iv,ALPHA:Yu,ALPHA_DIGIT:Yu+Yu.toUpperCase()+Iv},vN=(s=16,a=XC.ALPHA_DIGIT)=>{let c="";const{length:h}=a;for(;s--;)c+=a[Math.random()*h|0];return c};function AN(s){return!!(s&&Mi(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const CN=s=>{const a=new Array(10),c=(h,p)=>{if(gp(h)){if(a.indexOf(h)>=0)return;if(!("toJSON"in h)){a[p]=h;const k=kr(h)?[]:{};return Da(h,(m,v)=>{const _=c(m,p+1);!fa(_)&&(k[v]=_)}),a[p]=void 0,k}}return h};return c(s,0)},it={isArray:kr,isArrayBuffer:WC,isBuffer:WB,isFormData:nN,isArrayBufferView:KB,isString:YB,isNumber:KC,isBoolean:QB,isObject:gp,isPlainObject:Vl,isUndefined:fa,isDate:ZB,isFile:JB,isBlob:XB,isRegExp:mN,isFunction:Mi,isStream:eN,isURLSearchParams:oN,isTypedArray:uN,isFileList:tN,forEach:Da,merge:yh,extend:sN,trim:iN,stripBOM:rN,inherits:aN,toFlatObject:lN,kindOf:pp,kindOfTest:ii,endsWith:cN,toArray:dN,forEachEntry:hN,matchAll:pN,isHTMLForm:gN,hasOwnProperty:Sv,hasOwnProp:Sv,reduceDescriptors:JC,freezeMethods:kN,toObjectSet:bN,toCamelCase:fN,noop:_N,toFiniteNumber:wN,findKey:YC,global:QC,isContextDefined:ZC,ALPHABET:XC,generateString:vN,isSpecCompliantForm:AN,toJSONObject:CN};function pe(s,a,c,h,p){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",a&&(this.code=a),c&&(this.config=c),h&&(this.request=h),p&&(this.response=p)}it.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:it.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const t1=pe.prototype,e1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{e1[s]={value:s}});Object.defineProperties(pe,e1);Object.defineProperty(t1,"isAxiosError",{value:!0});pe.from=(s,a,c,h,p,k)=>{const m=Object.create(t1);return it.toFlatObject(s,m,function(_){return _!==Error.prototype},v=>v!=="isAxiosError"),pe.call(m,s.message,a,c,h,p),m.cause=s,m.name=s.name,k&&Object.assign(m,k),m};const yN=null;function xh(s){return it.isPlainObject(s)||it.isArray(s)}function n1(s){return it.endsWith(s,"[]")?s.slice(0,-2):s}function Mv(s,a,c){return s?s.concat(a).map(function(p,k){return p=n1(p),!c&&k?"["+p+"]":p}).join(c?".":""):a}function xN(s){return it.isArray(s)&&!s.some(xh)}const EN=it.toFlatObject(it,{},null,function(a){return/^is[A-Z]/.test(a)});function xc(s,a,c){if(!it.isObject(s))throw new TypeError("target must be an object");a=a||new FormData,c=it.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,U){return!it.isUndefined(U[L])});const h=c.metaTokens,p=c.visitor||C,k=c.dots,m=c.indexes,_=(c.Blob||typeof Blob<"u"&&Blob)&&it.isSpecCompliantForm(a);if(!it.isFunction(p))throw new TypeError("visitor must be a function");function x(j){if(j===null)return"";if(it.isDate(j))return j.toISOString();if(!_&&it.isBlob(j))throw new pe("Blob is not supported. Use a Buffer instead.");return it.isArrayBuffer(j)||it.isTypedArray(j)?_&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function C(j,L,U){let T=j;if(j&&!U&&typeof j=="object"){if(it.endsWith(L,"{}"))L=h?L:L.slice(0,-2),j=JSON.stringify(j);else if(it.isArray(j)&&xN(j)||(it.isFileList(j)||it.endsWith(L,"[]"))&&(T=it.toArray(j)))return L=n1(L),T.forEach(function(H,N){!(it.isUndefined(H)||H===null)&&a.append(m===!0?Mv([L],N,k):m===null?L:L+"[]",x(H))}),!1}return xh(j)?!0:(a.append(Mv(U,L,k),x(j)),!1)}const E=[],A=Object.assign(EN,{defaultVisitor:C,convertValue:x,isVisitable:xh});function M(j,L){if(!it.isUndefined(j)){if(E.indexOf(j)!==-1)throw Error("Circular reference detected in "+L.join("."));E.push(j),it.forEach(j,function(T,D){(!(it.isUndefined(T)||T===null)&&p.call(a,T,it.isString(D)?D.trim():D,L,A))===!0&&M(T,L?L.concat(D):[D])}),E.pop()}}if(!it.isObject(s))throw new TypeError("data must be an object");return M(s),a}function Tv(s){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(h){return a[h]})}function fp(s,a){this._pairs=[],s&&xc(s,this,a)}const o1=fp.prototype;o1.append=function(a,c){this._pairs.push([a,c])};o1.toString=function(a){const c=a?function(h){return a.call(this,h,Tv)}:Tv;return this._pairs.map(function(p){return c(p[0])+"="+c(p[1])},"").join("&")};function DN(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function i1(s,a,c){if(!a)return s;const h=c&&c.encode||DN,p=c&&c.serialize;let k;if(p?k=p(a,c):k=it.isURLSearchParams(a)?a.toString():new fp(a,c).toString(h),k){const m=s.indexOf("#");m!==-1&&(s=s.slice(0,m)),s+=(s.indexOf("?")===-1?"?":"&")+k}return s}class SN{constructor(){this.handlers=[]}use(a,c,h){return this.handlers.push({fulfilled:a,rejected:c,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){it.forEach(this.handlers,function(h){h!==null&&a(h)})}}const Bv=SN,s1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},IN=typeof URLSearchParams<"u"?URLSearchParams:fp,MN=typeof FormData<"u"?FormData:null,TN=typeof Blob<"u"?Blob:null,BN=(()=>{let s;return typeof navigator<"u"&&((s=navigator.product)==="ReactNative"||s==="NativeScript"||s==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),NN=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vo={isBrowser:!0,classes:{URLSearchParams:IN,FormData:MN,Blob:TN},isStandardBrowserEnv:BN,isStandardBrowserWebWorkerEnv:NN,protocols:["http","https","file","blob","url","data"]};function PN(s,a){return xc(s,new Vo.classes.URLSearchParams,Object.assign({visitor:function(c,h,p,k){return Vo.isNode&&it.isBuffer(c)?(this.append(h,c.toString("base64")),!1):k.defaultVisitor.apply(this,arguments)}},a))}function ON(s){return it.matchAll(/\w+|\[(\w*)]/g,s).map(a=>a[0]==="[]"?"":a[1]||a[0])}function LN(s){const a={},c=Object.keys(s);let h;const p=c.length;let k;for(h=0;h<p;h++)k=c[h],a[k]=s[k];return a}function r1(s){function a(c,h,p,k){let m=c[k++];const v=Number.isFinite(+m),_=k>=c.length;return m=!m&&it.isArray(p)?p.length:m,_?(it.hasOwnProp(p,m)?p[m]=[p[m],h]:p[m]=h,!v):((!p[m]||!it.isObject(p[m]))&&(p[m]=[]),a(c,h,p[m],k)&&it.isArray(p[m])&&(p[m]=LN(p[m])),!v)}if(it.isFormData(s)&&it.isFunction(s.entries)){const c={};return it.forEachEntry(s,(h,p)=>{a(ON(h),p,c,0)}),c}return null}const zN={"Content-Type":void 0};function RN(s,a,c){if(it.isString(s))try{return(a||JSON.parse)(s),it.trim(s)}catch(h){if(h.name!=="SyntaxError")throw h}return(c||JSON.stringify)(s)}const Ec={transitional:s1,adapter:["xhr","http"],transformRequest:[function(a,c){const h=c.getContentType()||"",p=h.indexOf("application/json")>-1,k=it.isObject(a);if(k&&it.isHTMLForm(a)&&(a=new FormData(a)),it.isFormData(a))return p&&p?JSON.stringify(r1(a)):a;if(it.isArrayBuffer(a)||it.isBuffer(a)||it.isStream(a)||it.isFile(a)||it.isBlob(a))return a;if(it.isArrayBufferView(a))return a.buffer;if(it.isURLSearchParams(a))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let v;if(k){if(h.indexOf("application/x-www-form-urlencoded")>-1)return PN(a,this.formSerializer).toString();if((v=it.isFileList(a))||h.indexOf("multipart/form-data")>-1){const _=this.env&&this.env.FormData;return xc(v?{"files[]":a}:a,_&&new _,this.formSerializer)}}return k||p?(c.setContentType("application/json",!1),RN(a)):a}],transformResponse:[function(a){const c=this.transitional||Ec.transitional,h=c&&c.forcedJSONParsing,p=this.responseType==="json";if(a&&it.isString(a)&&(h&&!this.responseType||p)){const m=!(c&&c.silentJSONParsing)&&p;try{return JSON.parse(a)}catch(v){if(m)throw v.name==="SyntaxError"?pe.from(v,pe.ERR_BAD_RESPONSE,this,null,this.response):v}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vo.classes.FormData,Blob:Vo.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};it.forEach(["delete","get","head"],function(a){Ec.headers[a]={}});it.forEach(["post","put","patch"],function(a){Ec.headers[a]=it.merge(zN)});const mp=Ec,jN=it.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$N=s=>{const a={};let c,h,p;return s&&s.split(`
`).forEach(function(m){p=m.indexOf(":"),c=m.substring(0,p).trim().toLowerCase(),h=m.substring(p+1).trim(),!(!c||a[c]&&jN[c])&&(c==="set-cookie"?a[c]?a[c].push(h):a[c]=[h]:a[c]=a[c]?a[c]+", "+h:h)}),a},Nv=Symbol("internals");function Yr(s){return s&&String(s).trim().toLowerCase()}function Ul(s){return s===!1||s==null?s:it.isArray(s)?s.map(Ul):String(s)}function FN(s){const a=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let h;for(;h=c.exec(s);)a[h[1]]=h[2];return a}function VN(s){return/^[-_a-zA-Z]+$/.test(s.trim())}function Qu(s,a,c,h,p){if(it.isFunction(h))return h.call(this,a,c);if(p&&(a=c),!!it.isString(a)){if(it.isString(h))return a.indexOf(h)!==-1;if(it.isRegExp(h))return h.test(a)}}function UN(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,c,h)=>c.toUpperCase()+h)}function HN(s,a){const c=it.toCamelCase(" "+a);["get","set","has"].forEach(h=>{Object.defineProperty(s,h+c,{value:function(p,k,m){return this[h].call(this,a,p,k,m)},configurable:!0})})}class Dc{constructor(a){a&&this.set(a)}set(a,c,h){const p=this;function k(v,_,x){const C=Yr(_);if(!C)throw new Error("header name must be a non-empty string");const E=it.findKey(p,C);(!E||p[E]===void 0||x===!0||x===void 0&&p[E]!==!1)&&(p[E||_]=Ul(v))}const m=(v,_)=>it.forEach(v,(x,C)=>k(x,C,_));return it.isPlainObject(a)||a instanceof this.constructor?m(a,c):it.isString(a)&&(a=a.trim())&&!VN(a)?m($N(a),c):a!=null&&k(c,a,h),this}get(a,c){if(a=Yr(a),a){const h=it.findKey(this,a);if(h){const p=this[h];if(!c)return p;if(c===!0)return FN(p);if(it.isFunction(c))return c.call(this,p,h);if(it.isRegExp(c))return c.exec(p);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,c){if(a=Yr(a),a){const h=it.findKey(this,a);return!!(h&&this[h]!==void 0&&(!c||Qu(this,this[h],h,c)))}return!1}delete(a,c){const h=this;let p=!1;function k(m){if(m=Yr(m),m){const v=it.findKey(h,m);v&&(!c||Qu(h,h[v],v,c))&&(delete h[v],p=!0)}}return it.isArray(a)?a.forEach(k):k(a),p}clear(a){const c=Object.keys(this);let h=c.length,p=!1;for(;h--;){const k=c[h];(!a||Qu(this,this[k],k,a,!0))&&(delete this[k],p=!0)}return p}normalize(a){const c=this,h={};return it.forEach(this,(p,k)=>{const m=it.findKey(h,k);if(m){c[m]=Ul(p),delete c[k];return}const v=a?UN(k):String(k).trim();v!==k&&delete c[k],c[v]=Ul(p),h[v]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const c=Object.create(null);return it.forEach(this,(h,p)=>{h!=null&&h!==!1&&(c[p]=a&&it.isArray(h)?h.join(", "):h)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,c])=>a+": "+c).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...c){const h=new this(a);return c.forEach(p=>h.set(p)),h}static accessor(a){const h=(this[Nv]=this[Nv]={accessors:{}}).accessors,p=this.prototype;function k(m){const v=Yr(m);h[v]||(HN(p,m),h[v]=!0)}return it.isArray(a)?a.forEach(k):k(a),this}}Dc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);it.freezeMethods(Dc.prototype);it.freezeMethods(Dc);const ti=Dc;function Zu(s,a){const c=this||mp,h=a||c,p=ti.from(h.headers);let k=h.data;return it.forEach(s,function(v){k=v.call(c,k,p.normalize(),a?a.status:void 0)}),p.normalize(),k}function a1(s){return!!(s&&s.__CANCEL__)}function Sa(s,a,c){pe.call(this,s??"canceled",pe.ERR_CANCELED,a,c),this.name="CanceledError"}it.inherits(Sa,pe,{__CANCEL__:!0});function qN(s,a,c){const h=c.config.validateStatus;!c.status||!h||h(c.status)?s(c):a(new pe("Request failed with status code "+c.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}const GN=Vo.isStandardBrowserEnv?function(){return{write:function(c,h,p,k,m,v){const _=[];_.push(c+"="+encodeURIComponent(h)),it.isNumber(p)&&_.push("expires="+new Date(p).toGMTString()),it.isString(k)&&_.push("path="+k),it.isString(m)&&_.push("domain="+m),v===!0&&_.push("secure"),document.cookie=_.join("; ")},read:function(c){const h=document.cookie.match(new RegExp("(^|;\\s*)("+c+")=([^;]*)"));return h?decodeURIComponent(h[3]):null},remove:function(c){this.write(c,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function WN(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function KN(s,a){return a?s.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):s}function l1(s,a){return s&&!WN(a)?KN(s,a):a}const YN=Vo.isStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),c=document.createElement("a");let h;function p(k){let m=k;return a&&(c.setAttribute("href",m),m=c.href),c.setAttribute("href",m),{href:c.href,protocol:c.protocol?c.protocol.replace(/:$/,""):"",host:c.host,search:c.search?c.search.replace(/^\?/,""):"",hash:c.hash?c.hash.replace(/^#/,""):"",hostname:c.hostname,port:c.port,pathname:c.pathname.charAt(0)==="/"?c.pathname:"/"+c.pathname}}return h=p(window.location.href),function(m){const v=it.isString(m)?p(m):m;return v.protocol===h.protocol&&v.host===h.host}}():function(){return function(){return!0}}();function QN(s){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return a&&a[1]||""}function ZN(s,a){s=s||10;const c=new Array(s),h=new Array(s);let p=0,k=0,m;return a=a!==void 0?a:1e3,function(_){const x=Date.now(),C=h[k];m||(m=x),c[p]=_,h[p]=x;let E=k,A=0;for(;E!==p;)A+=c[E++],E=E%s;if(p=(p+1)%s,p===k&&(k=(k+1)%s),x-m<a)return;const M=C&&x-C;return M?Math.round(A*1e3/M):void 0}}function Pv(s,a){let c=0;const h=ZN(50,250);return p=>{const k=p.loaded,m=p.lengthComputable?p.total:void 0,v=k-c,_=h(v),x=k<=m;c=k;const C={loaded:k,total:m,progress:m?k/m:void 0,bytes:v,rate:_||void 0,estimated:_&&m&&x?(m-k)/_:void 0,event:p};C[a?"download":"upload"]=!0,s(C)}}const JN=typeof XMLHttpRequest<"u",XN=JN&&function(s){return new Promise(function(c,h){let p=s.data;const k=ti.from(s.headers).normalize(),m=s.responseType;let v;function _(){s.cancelToken&&s.cancelToken.unsubscribe(v),s.signal&&s.signal.removeEventListener("abort",v)}it.isFormData(p)&&(Vo.isStandardBrowserEnv||Vo.isStandardBrowserWebWorkerEnv)&&k.setContentType(!1);let x=new XMLHttpRequest;if(s.auth){const M=s.auth.username||"",j=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";k.set("Authorization","Basic "+btoa(M+":"+j))}const C=l1(s.baseURL,s.url);x.open(s.method.toUpperCase(),i1(C,s.params,s.paramsSerializer),!0),x.timeout=s.timeout;function E(){if(!x)return;const M=ti.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),L={data:!m||m==="text"||m==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:M,config:s,request:x};qN(function(T){c(T),_()},function(T){h(T),_()},L),x=null}if("onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(E)},x.onabort=function(){x&&(h(new pe("Request aborted",pe.ECONNABORTED,s,x)),x=null)},x.onerror=function(){h(new pe("Network Error",pe.ERR_NETWORK,s,x)),x=null},x.ontimeout=function(){let j=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||s1;s.timeoutErrorMessage&&(j=s.timeoutErrorMessage),h(new pe(j,L.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,s,x)),x=null},Vo.isStandardBrowserEnv){const M=(s.withCredentials||YN(C))&&s.xsrfCookieName&&GN.read(s.xsrfCookieName);M&&k.set(s.xsrfHeaderName,M)}p===void 0&&k.setContentType(null),"setRequestHeader"in x&&it.forEach(k.toJSON(),function(j,L){x.setRequestHeader(L,j)}),it.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),m&&m!=="json"&&(x.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&x.addEventListener("progress",Pv(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",Pv(s.onUploadProgress)),(s.cancelToken||s.signal)&&(v=M=>{x&&(h(!M||M.type?new Sa(null,s,x):M),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(v),s.signal&&(s.signal.aborted?v():s.signal.addEventListener("abort",v)));const A=QN(C);if(A&&Vo.protocols.indexOf(A)===-1){h(new pe("Unsupported protocol "+A+":",pe.ERR_BAD_REQUEST,s));return}x.send(p||null)})},Hl={http:yN,xhr:XN};it.forEach(Hl,(s,a)=>{if(s){try{Object.defineProperty(s,"name",{value:a})}catch{}Object.defineProperty(s,"adapterName",{value:a})}});const tP={getAdapter:s=>{s=it.isArray(s)?s:[s];const{length:a}=s;let c,h;for(let p=0;p<a&&(c=s[p],!(h=it.isString(c)?Hl[c.toLowerCase()]:c));p++);if(!h)throw h===!1?new pe(`Adapter ${c} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(it.hasOwnProp(Hl,c)?`Adapter '${c}' is not available in the build`:`Unknown adapter '${c}'`);if(!it.isFunction(h))throw new TypeError("adapter is not a function");return h},adapters:Hl};function Ju(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Sa(null,s)}function Ov(s){return Ju(s),s.headers=ti.from(s.headers),s.data=Zu.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),tP.getAdapter(s.adapter||mp.adapter)(s).then(function(h){return Ju(s),h.data=Zu.call(s,s.transformResponse,h),h.headers=ti.from(h.headers),h},function(h){return a1(h)||(Ju(s),h&&h.response&&(h.response.data=Zu.call(s,s.transformResponse,h.response),h.response.headers=ti.from(h.response.headers))),Promise.reject(h)})}const Lv=s=>s instanceof ti?s.toJSON():s;function dr(s,a){a=a||{};const c={};function h(x,C,E){return it.isPlainObject(x)&&it.isPlainObject(C)?it.merge.call({caseless:E},x,C):it.isPlainObject(C)?it.merge({},C):it.isArray(C)?C.slice():C}function p(x,C,E){if(it.isUndefined(C)){if(!it.isUndefined(x))return h(void 0,x,E)}else return h(x,C,E)}function k(x,C){if(!it.isUndefined(C))return h(void 0,C)}function m(x,C){if(it.isUndefined(C)){if(!it.isUndefined(x))return h(void 0,x)}else return h(void 0,C)}function v(x,C,E){if(E in a)return h(x,C);if(E in s)return h(void 0,x)}const _={url:k,method:k,data:k,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:v,headers:(x,C)=>p(Lv(x),Lv(C),!0)};return it.forEach(Object.keys(s).concat(Object.keys(a)),function(C){const E=_[C]||p,A=E(s[C],a[C],C);it.isUndefined(A)&&E!==v||(c[C]=A)}),c}const c1="1.3.4",kp={};["object","boolean","number","function","string","symbol"].forEach((s,a)=>{kp[s]=function(h){return typeof h===s||"a"+(a<1?"n ":" ")+s}});const zv={};kp.transitional=function(a,c,h){function p(k,m){return"[Axios v"+c1+"] Transitional option '"+k+"'"+m+(h?". "+h:"")}return(k,m,v)=>{if(a===!1)throw new pe(p(m," has been removed"+(c?" in "+c:"")),pe.ERR_DEPRECATED);return c&&!zv[m]&&(zv[m]=!0,console.warn(p(m," has been deprecated since v"+c+" and will be removed in the near future"))),a?a(k,m,v):!0}};function eP(s,a,c){if(typeof s!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const h=Object.keys(s);let p=h.length;for(;p-- >0;){const k=h[p],m=a[k];if(m){const v=s[k],_=v===void 0||m(v,k,s);if(_!==!0)throw new pe("option "+k+" must be "+_,pe.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new pe("Unknown option "+k,pe.ERR_BAD_OPTION)}}const Eh={assertOptions:eP,validators:kp},mi=Eh.validators;class ec{constructor(a){this.defaults=a,this.interceptors={request:new Bv,response:new Bv}}request(a,c){typeof a=="string"?(c=c||{},c.url=a):c=a||{},c=dr(this.defaults,c);const{transitional:h,paramsSerializer:p,headers:k}=c;h!==void 0&&Eh.assertOptions(h,{silentJSONParsing:mi.transitional(mi.boolean),forcedJSONParsing:mi.transitional(mi.boolean),clarifyTimeoutError:mi.transitional(mi.boolean)},!1),p!==void 0&&Eh.assertOptions(p,{encode:mi.function,serialize:mi.function},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let m;m=k&&it.merge(k.common,k[c.method]),m&&it.forEach(["delete","get","head","post","put","patch","common"],j=>{delete k[j]}),c.headers=ti.concat(m,k);const v=[];let _=!0;this.interceptors.request.forEach(function(L){typeof L.runWhen=="function"&&L.runWhen(c)===!1||(_=_&&L.synchronous,v.unshift(L.fulfilled,L.rejected))});const x=[];this.interceptors.response.forEach(function(L){x.push(L.fulfilled,L.rejected)});let C,E=0,A;if(!_){const j=[Ov.bind(this),void 0];for(j.unshift.apply(j,v),j.push.apply(j,x),A=j.length,C=Promise.resolve(c);E<A;)C=C.then(j[E++],j[E++]);return C}A=v.length;let M=c;for(E=0;E<A;){const j=v[E++],L=v[E++];try{M=j(M)}catch(U){L.call(this,U);break}}try{C=Ov.call(this,M)}catch(j){return Promise.reject(j)}for(E=0,A=x.length;E<A;)C=C.then(x[E++],x[E++]);return C}getUri(a){a=dr(this.defaults,a);const c=l1(a.baseURL,a.url);return i1(c,a.params,a.paramsSerializer)}}it.forEach(["delete","get","head","options"],function(a){ec.prototype[a]=function(c,h){return this.request(dr(h||{},{method:a,url:c,data:(h||{}).data}))}});it.forEach(["post","put","patch"],function(a){function c(h){return function(k,m,v){return this.request(dr(v||{},{method:a,headers:h?{"Content-Type":"multipart/form-data"}:{},url:k,data:m}))}}ec.prototype[a]=c(),ec.prototype[a+"Form"]=c(!0)});const ql=ec;class bp{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(k){c=k});const h=this;this.promise.then(p=>{if(!h._listeners)return;let k=h._listeners.length;for(;k-- >0;)h._listeners[k](p);h._listeners=null}),this.promise.then=p=>{let k;const m=new Promise(v=>{h.subscribe(v),k=v}).then(p);return m.cancel=function(){h.unsubscribe(k)},m},a(function(k,m,v){h.reason||(h.reason=new Sa(k,m,v),c(h.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const c=this._listeners.indexOf(a);c!==-1&&this._listeners.splice(c,1)}static source(){let a;return{token:new bp(function(p){a=p}),cancel:a}}}const nP=bp;function oP(s){return function(c){return s.apply(null,c)}}function iP(s){return it.isObject(s)&&s.isAxiosError===!0}const Dh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dh).forEach(([s,a])=>{Dh[a]=s});const sP=Dh;function d1(s){const a=new ql(s),c=qC(ql.prototype.request,a);return it.extend(c,ql.prototype,a,{allOwnKeys:!0}),it.extend(c,a,null,{allOwnKeys:!0}),c.create=function(p){return d1(dr(s,p))},c}const pn=d1(mp);pn.Axios=ql;pn.CanceledError=Sa;pn.CancelToken=nP;pn.isCancel=a1;pn.VERSION=c1;pn.toFormData=xc;pn.AxiosError=pe;pn.Cancel=pn.CanceledError;pn.all=function(a){return Promise.all(a)};pn.spread=oP;pn.isAxiosError=iP;pn.mergeConfig=dr;pn.AxiosHeaders=ti;pn.formToJSON=s=>r1(it.isHTMLForm(s)?new FormData(s):s);pn.HttpStatusCode=sP;pn.default=pn;const rP=pn;/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const u1=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",br=s=>u1?Symbol(s):"_vr_"+s,aP=br("rvlm"),Rv=br("rvd"),Sc=br("r"),_p=br("rl"),Sh=br("rvl"),tr=typeof window<"u";function lP(s){return s.__esModule||u1&&s[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Xu(s,a){const c={};for(const h in a){const p=a[h];c[h]=Array.isArray(p)?p.map(s):s(p)}return c}const ra=()=>{},cP=/\/$/,dP=s=>s.replace(cP,"");function th(s,a,c="/"){let h,p={},k="",m="";const v=a.indexOf("?"),_=a.indexOf("#",v>-1?v:0);return v>-1&&(h=a.slice(0,v),k=a.slice(v+1,_>-1?_:a.length),p=s(k)),_>-1&&(h=h||a.slice(0,_),m=a.slice(_,a.length)),h=gP(h??a,c),{fullPath:h+(k&&"?")+k+m,path:h,query:p,hash:m}}function uP(s,a){const c=a.query?s(a.query):"";return a.path+(c&&"?")+c+(a.hash||"")}function jv(s,a){return!a||!s.toLowerCase().startsWith(a.toLowerCase())?s:s.slice(a.length)||"/"}function hP(s,a,c){const h=a.matched.length-1,p=c.matched.length-1;return h>-1&&h===p&&ur(a.matched[h],c.matched[p])&&h1(a.params,c.params)&&s(a.query)===s(c.query)&&a.hash===c.hash}function ur(s,a){return(s.aliasOf||s)===(a.aliasOf||a)}function h1(s,a){if(Object.keys(s).length!==Object.keys(a).length)return!1;for(const c in s)if(!pP(s[c],a[c]))return!1;return!0}function pP(s,a){return Array.isArray(s)?$v(s,a):Array.isArray(a)?$v(a,s):s===a}function $v(s,a){return Array.isArray(a)?s.length===a.length&&s.every((c,h)=>c===a[h]):s.length===1&&s[0]===a}function gP(s,a){if(s.startsWith("/"))return s;if(!s)return a;const c=a.split("/"),h=s.split("/");let p=c.length-1,k,m;for(k=0;k<h.length;k++)if(m=h[k],!(p===1||m==="."))if(m==="..")p--;else break;return c.slice(0,p).join("/")+"/"+h.slice(k-(k===h.length?1:0)).join("/")}var ma;(function(s){s.pop="pop",s.push="push"})(ma||(ma={}));var aa;(function(s){s.back="back",s.forward="forward",s.unknown=""})(aa||(aa={}));function fP(s){if(!s)if(tr){const a=document.querySelector("base");s=a&&a.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),dP(s)}const mP=/^[^#]+#/;function kP(s,a){return s.replace(mP,"#")+a}function bP(s,a){const c=document.documentElement.getBoundingClientRect(),h=s.getBoundingClientRect();return{behavior:a.behavior,left:h.left-c.left-(a.left||0),top:h.top-c.top-(a.top||0)}}const Ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function _P(s){let a;if("el"in s){const c=s.el,h=typeof c=="string"&&c.startsWith("#"),p=typeof c=="string"?h?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!p)return;a=bP(p,s)}else a=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Fv(s,a){return(history.state?history.state.position-a:-1)+s}const Ih=new Map;function wP(s,a){Ih.set(s,a)}function vP(s){const a=Ih.get(s);return Ih.delete(s),a}let AP=()=>location.protocol+"//"+location.host;function p1(s,a){const{pathname:c,search:h,hash:p}=a,k=s.indexOf("#");if(k>-1){let v=p.includes(s.slice(k))?s.slice(k).length:1,_=p.slice(v);return _[0]!=="/"&&(_="/"+_),jv(_,"")}return jv(c,s)+h+p}function CP(s,a,c,h){let p=[],k=[],m=null;const v=({state:A})=>{const M=p1(s,location),j=c.value,L=a.value;let U=0;if(A){if(c.value=M,a.value=A,m&&m===j){m=null;return}U=L?A.position-L.position:0}else h(M);p.forEach(T=>{T(c.value,j,{delta:U,type:ma.pop,direction:U?U>0?aa.forward:aa.back:aa.unknown})})};function _(){m=c.value}function x(A){p.push(A);const M=()=>{const j=p.indexOf(A);j>-1&&p.splice(j,1)};return k.push(M),M}function C(){const{history:A}=window;A.state&&A.replaceState(Ee({},A.state,{scroll:Ic()}),"")}function E(){for(const A of k)A();k=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",C)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",C),{pauseListeners:_,listen:x,destroy:E}}function Vv(s,a,c,h=!1,p=!1){return{back:s,current:a,forward:c,replaced:h,position:window.history.length,scroll:p?Ic():null}}function yP(s){const{history:a,location:c}=window,h={value:p1(s,c)},p={value:a.state};p.value||k(h.value,{back:null,current:h.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function k(_,x,C){const E=s.indexOf("#"),A=E>-1?(c.host&&document.querySelector("base")?s:s.slice(E))+_:AP()+s+_;try{a[C?"replaceState":"pushState"](x,"",A),p.value=x}catch(M){console.error(M),c[C?"replace":"assign"](A)}}function m(_,x){const C=Ee({},a.state,Vv(p.value.back,_,p.value.forward,!0),x,{position:p.value.position});k(_,C,!0),h.value=_}function v(_,x){const C=Ee({},p.value,a.state,{forward:_,scroll:Ic()});k(C.current,C,!0);const E=Ee({},Vv(h.value,_,null),{position:C.position+1},x);k(_,E,!1),h.value=_}return{location:h,state:p,push:v,replace:m}}function xP(s){s=fP(s);const a=yP(s),c=CP(s,a.state,a.location,a.replace);function h(k,m=!0){m||c.pauseListeners(),history.go(k)}const p=Ee({location:"",base:s,go:h,createHref:kP.bind(null,s)},a,c);return Object.defineProperty(p,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(p,"state",{enumerable:!0,get:()=>a.state.value}),p}function EP(s){return typeof s=="string"||s&&typeof s=="object"}function g1(s){return typeof s=="string"||typeof s=="symbol"}const ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},f1=br("nf");var Uv;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Uv||(Uv={}));function hr(s,a){return Ee(new Error,{type:s,[f1]:!0},a)}function bi(s,a){return s instanceof Error&&f1 in s&&(a==null||!!(s.type&a))}const Hv="[^/]+?",DP={sensitive:!1,strict:!1,start:!0,end:!0},SP=/[.+*?^${}()[\]/\\]/g;function IP(s,a){const c=Ee({},DP,a),h=[];let p=c.start?"^":"";const k=[];for(const x of s){const C=x.length?[]:[90];c.strict&&!x.length&&(p+="/");for(let E=0;E<x.length;E++){const A=x[E];let M=40+(c.sensitive?.25:0);if(A.type===0)E||(p+="/"),p+=A.value.replace(SP,"\\$&"),M+=40;else if(A.type===1){const{value:j,repeatable:L,optional:U,regexp:T}=A;k.push({name:j,repeatable:L,optional:U});const D=T||Hv;if(D!==Hv){M+=10;try{new RegExp(`(${D})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${j}" (${D}): `+N.message)}}let H=L?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;E||(H=U&&x.length<2?`(?:/${H})`:"/"+H),U&&(H+="?"),p+=H,M+=20,U&&(M+=-8),L&&(M+=-20),D===".*"&&(M+=-50)}C.push(M)}h.push(C)}if(c.strict&&c.end){const x=h.length-1;h[x][h[x].length-1]+=.7000000000000001}c.strict||(p+="/?"),c.end?p+="$":c.strict&&(p+="(?:/|$)");const m=new RegExp(p,c.sensitive?"":"i");function v(x){const C=x.match(m),E={};if(!C)return null;for(let A=1;A<C.length;A++){const M=C[A]||"",j=k[A-1];E[j.name]=M&&j.repeatable?M.split("/"):M}return E}function _(x){let C="",E=!1;for(const A of s){(!E||!C.endsWith("/"))&&(C+="/"),E=!1;for(const M of A)if(M.type===0)C+=M.value;else if(M.type===1){const{value:j,repeatable:L,optional:U}=M,T=j in x?x[j]:"";if(Array.isArray(T)&&!L)throw new Error(`Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(T)?T.join("/"):T;if(!D)if(U)A.length<2&&(C.endsWith("/")?C=C.slice(0,-1):E=!0);else throw new Error(`Missing required param "${j}"`);C+=D}}return C}return{re:m,score:h,keys:k,parse:v,stringify:_}}function MP(s,a){let c=0;for(;c<s.length&&c<a.length;){const h=a[c]-s[c];if(h)return h;c++}return s.length<a.length?s.length===1&&s[0]===40+40?-1:1:s.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function TP(s,a){let c=0;const h=s.score,p=a.score;for(;c<h.length&&c<p.length;){const k=MP(h[c],p[c]);if(k)return k;c++}return p.length-h.length}const BP={type:0,value:""},NP=/[a-zA-Z0-9_]/;function PP(s){if(!s)return[[]];if(s==="/")return[[BP]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function a(M){throw new Error(`ERR (${c})/"${x}": ${M}`)}let c=0,h=c;const p=[];let k;function m(){k&&p.push(k),k=[]}let v=0,_,x="",C="";function E(){x&&(c===0?k.push({type:0,value:x}):c===1||c===2||c===3?(k.length>1&&(_==="*"||_==="+")&&a(`A repeatable param (${x}) must be alone in its segment. eg: '/:ids+.`),k.push({type:1,value:x,regexp:C,repeatable:_==="*"||_==="+",optional:_==="*"||_==="?"})):a("Invalid state to consume buffer"),x="")}function A(){x+=_}for(;v<s.length;){if(_=s[v++],_==="\\"&&c!==2){h=c,c=4;continue}switch(c){case 0:_==="/"?(x&&E(),m()):_===":"?(E(),c=1):A();break;case 4:A(),c=h;break;case 1:_==="("?c=2:NP.test(_)?A():(E(),c=0,_!=="*"&&_!=="?"&&_!=="+"&&v--);break;case 2:_===")"?C[C.length-1]=="\\"?C=C.slice(0,-1)+_:c=3:C+=_;break;case 3:E(),c=0,_!=="*"&&_!=="?"&&_!=="+"&&v--,C="";break;default:a("Unknown state");break}}return c===2&&a(`Unfinished custom RegExp for param "${x}"`),E(),m(),p}function OP(s,a,c){const h=IP(PP(s.path),c),p=Ee(h,{record:s,parent:a,children:[],alias:[]});return a&&!p.record.aliasOf==!a.record.aliasOf&&a.children.push(p),p}function LP(s,a){const c=[],h=new Map;a=Gv({strict:!1,end:!0,sensitive:!1},a);function p(C){return h.get(C)}function k(C,E,A){const M=!A,j=RP(C);j.aliasOf=A&&A.record;const L=Gv(a,C),U=[j];if("alias"in C){const H=typeof C.alias=="string"?[C.alias]:C.alias;for(const N of H)U.push(Ee({},j,{components:A?A.record.components:j.components,path:N,aliasOf:A?A.record:j}))}let T,D;for(const H of U){const{path:N}=H;if(E&&N[0]!=="/"){const G=E.record.path,V=G[G.length-1]==="/"?"":"/";H.path=E.record.path+(N&&V+N)}if(T=OP(H,E,L),A?A.alias.push(T):(D=D||T,D!==T&&D.alias.push(T),M&&C.name&&!qv(T)&&m(C.name)),"children"in j){const G=j.children;for(let V=0;V<G.length;V++)k(G[V],T,A&&A.children[V])}A=A||T,_(T)}return D?()=>{m(D)}:ra}function m(C){if(g1(C)){const E=h.get(C);E&&(h.delete(C),c.splice(c.indexOf(E),1),E.children.forEach(m),E.alias.forEach(m))}else{const E=c.indexOf(C);E>-1&&(c.splice(E,1),C.record.name&&h.delete(C.record.name),C.children.forEach(m),C.alias.forEach(m))}}function v(){return c}function _(C){let E=0;for(;E<c.length&&TP(C,c[E])>=0&&(C.record.path!==c[E].record.path||!m1(C,c[E]));)E++;c.splice(E,0,C),C.record.name&&!qv(C)&&h.set(C.record.name,C)}function x(C,E){let A,M={},j,L;if("name"in C&&C.name){if(A=h.get(C.name),!A)throw hr(1,{location:C});L=A.record.name,M=Ee(zP(E.params,A.keys.filter(D=>!D.optional).map(D=>D.name)),C.params),j=A.stringify(M)}else if("path"in C)j=C.path,A=c.find(D=>D.re.test(j)),A&&(M=A.parse(j),L=A.record.name);else{if(A=E.name?h.get(E.name):c.find(D=>D.re.test(E.path)),!A)throw hr(1,{location:C,currentLocation:E});L=A.record.name,M=Ee({},E.params,C.params),j=A.stringify(M)}const U=[];let T=A;for(;T;)U.unshift(T.record),T=T.parent;return{name:L,path:j,params:M,matched:U,meta:$P(U)}}return s.forEach(C=>k(C)),{addRoute:k,resolve:x,removeRoute:m,getRoutes:v,getRecordMatcher:p}}function zP(s,a){const c={};for(const h of a)h in s&&(c[h]=s[h]);return c}function RP(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:jP(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||{}:{default:s.component}}}function jP(s){const a={},c=s.props||!1;if("component"in s)a.default=c;else for(const h in s.components)a[h]=typeof c=="boolean"?c:c[h];return a}function qv(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function $P(s){return s.reduce((a,c)=>Ee(a,c.meta),{})}function Gv(s,a){const c={};for(const h in s)c[h]=h in a?a[h]:s[h];return c}function m1(s,a){return a.children.some(c=>c===s||m1(s,c))}const k1=/#/g,FP=/&/g,VP=/\//g,UP=/=/g,HP=/\?/g,b1=/\+/g,qP=/%5B/g,GP=/%5D/g,_1=/%5E/g,WP=/%60/g,w1=/%7B/g,KP=/%7C/g,v1=/%7D/g,YP=/%20/g;function wp(s){return encodeURI(""+s).replace(KP,"|").replace(qP,"[").replace(GP,"]")}function QP(s){return wp(s).replace(w1,"{").replace(v1,"}").replace(_1,"^")}function Mh(s){return wp(s).replace(b1,"%2B").replace(YP,"+").replace(k1,"%23").replace(FP,"%26").replace(WP,"`").replace(w1,"{").replace(v1,"}").replace(_1,"^")}function ZP(s){return Mh(s).replace(UP,"%3D")}function JP(s){return wp(s).replace(k1,"%23").replace(HP,"%3F")}function XP(s){return s==null?"":JP(s).replace(VP,"%2F")}function nc(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function tO(s){const a={};if(s===""||s==="?")return a;const h=(s[0]==="?"?s.slice(1):s).split("&");for(let p=0;p<h.length;++p){const k=h[p].replace(b1," "),m=k.indexOf("="),v=nc(m<0?k:k.slice(0,m)),_=m<0?null:nc(k.slice(m+1));if(v in a){let x=a[v];Array.isArray(x)||(x=a[v]=[x]),x.push(_)}else a[v]=_}return a}function Wv(s){let a="";for(let c in s){const h=s[c];if(c=ZP(c),h==null){h!==void 0&&(a+=(a.length?"&":"")+c);continue}(Array.isArray(h)?h.map(k=>k&&Mh(k)):[h&&Mh(h)]).forEach(k=>{k!==void 0&&(a+=(a.length?"&":"")+c,k!=null&&(a+="="+k))})}return a}function eO(s){const a={};for(const c in s){const h=s[c];h!==void 0&&(a[c]=Array.isArray(h)?h.map(p=>p==null?null:""+p):h==null?h:""+h)}return a}function Qr(){let s=[];function a(h){return s.push(h),()=>{const p=s.indexOf(h);p>-1&&s.splice(p,1)}}function c(){s=[]}return{add:a,list:()=>s,reset:c}}function vi(s,a,c,h,p){const k=h&&(h.enterCallbacks[p]=h.enterCallbacks[p]||[]);return()=>new Promise((m,v)=>{const _=E=>{E===!1?v(hr(4,{from:c,to:a})):E instanceof Error?v(E):EP(E)?v(hr(2,{from:a,to:E})):(k&&h.enterCallbacks[p]===k&&typeof E=="function"&&k.push(E),m())},x=s.call(h&&h.instances[p],a,c,_);let C=Promise.resolve(x);s.length<3&&(C=C.then(_)),C.catch(E=>v(E))})}function eh(s,a,c,h){const p=[];for(const k of s)for(const m in k.components){let v=k.components[m];if(!(a!=="beforeRouteEnter"&&!k.instances[m]))if(nO(v)){const x=(v.__vccOpts||v)[a];x&&p.push(vi(x,c,h,k,m))}else{let _=v();p.push(()=>_.then(x=>{if(!x)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${k.path}"`));const C=lP(x)?x.default:x;k.components[m]=C;const A=(C.__vccOpts||C)[a];return A&&vi(A,c,h,k,m)()}))}}return p}function nO(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function Kv(s){const a=jn(Sc),c=jn(_p),h=te(()=>a.resolve(J(s.to))),p=te(()=>{const{matched:_}=h.value,{length:x}=_,C=_[x-1],E=c.matched;if(!C||!E.length)return-1;const A=E.findIndex(ur.bind(null,C));if(A>-1)return A;const M=Yv(_[x-2]);return x>1&&Yv(C)===M&&E[E.length-1].path!==M?E.findIndex(ur.bind(null,_[x-2])):A}),k=te(()=>p.value>-1&&rO(c.params,h.value.params)),m=te(()=>p.value>-1&&p.value===c.matched.length-1&&h1(c.params,h.value.params));function v(_={}){return sO(_)?a[J(s.replace)?"replace":"push"](J(s.to)).catch(ra):Promise.resolve()}return{route:h,href:te(()=>h.value.href),isActive:k,isExactActive:m,navigate:v}}const oO=ni({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kv,setup(s,{slots:a}){const c=bs(Kv(s)),{options:h}=jn(Sc),p=te(()=>({[Qv(s.activeClass,h.linkActiveClass,"router-link-active")]:c.isActive,[Qv(s.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const k=a.default&&a.default(c);return s.custom?k:Ea("a",{"aria-current":c.isExactActive?s.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:p.value},k)}}}),iO=oO;function sO(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const a=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return s.preventDefault&&s.preventDefault(),!0}}function rO(s,a){for(const c in a){const h=a[c],p=s[c];if(typeof h=="string"){if(h!==p)return!1}else if(!Array.isArray(p)||p.length!==h.length||h.some((k,m)=>k!==p[m]))return!1}return!0}function Yv(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Qv=(s,a,c)=>s??a??c,aO=ni({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(s,{attrs:a,slots:c}){const h=jn(Sh),p=te(()=>s.route||h.value),k=jn(Rv,0),m=te(()=>p.value.matched[k]);ds(Rv,k+1),ds(aP,m),ds(Sh,p);const v=K();return co(()=>[v.value,m.value,s.name],([_,x,C],[E,A,M])=>{x&&(x.instances[C]=_,A&&A!==x&&_&&_===E&&(x.leaveGuards.size||(x.leaveGuards=A.leaveGuards),x.updateGuards.size||(x.updateGuards=A.updateGuards))),_&&x&&(!A||!ur(x,A)||!E)&&(x.enterCallbacks[C]||[]).forEach(j=>j(_))},{flush:"post"}),()=>{const _=p.value,x=m.value,C=x&&x.components[s.name],E=s.name;if(!C)return Zv(c.default,{Component:C,route:_});const A=x.props[s.name],M=A?A===!0?_.params:typeof A=="function"?A(_):A:null,L=Ea(C,Ee({},M,a,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(x.instances[E]=null)},ref:v}));return Zv(c.default,{Component:L,route:_})||L}}});function Zv(s,a){if(!s)return null;const c=s(a);return c.length===1?c[0]:c}const lO=aO;function cO(s){const a=LP(s.routes,s),c=s.parseQuery||tO,h=s.stringifyQuery||Wv,p=s.history,k=Qr(),m=Qr(),v=Qr(),_=vA(ki);let x=ki;tr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=Xu.bind(null,nt=>""+nt),E=Xu.bind(null,XP),A=Xu.bind(null,nc);function M(nt,vt){let rt,Bt;return g1(nt)?(rt=a.getRecordMatcher(nt),Bt=vt):Bt=nt,a.addRoute(Bt,rt)}function j(nt){const vt=a.getRecordMatcher(nt);vt&&a.removeRoute(vt)}function L(){return a.getRoutes().map(nt=>nt.record)}function U(nt){return!!a.getRecordMatcher(nt)}function T(nt,vt){if(vt=Ee({},vt||_.value),typeof nt=="string"){const F=th(c,nt,vt.path),W=a.resolve({path:F.path},vt),Z=p.createHref(F.fullPath);return Ee(F,W,{params:A(W.params),hash:nc(F.hash),redirectedFrom:void 0,href:Z})}let rt;if("path"in nt)rt=Ee({},nt,{path:th(c,nt.path,vt.path).path});else{const F=Ee({},nt.params);for(const W in F)F[W]==null&&delete F[W];rt=Ee({},nt,{params:E(nt.params)}),vt.params=E(vt.params)}const Bt=a.resolve(rt,vt),Gt=nt.hash||"";Bt.params=C(A(Bt.params));const Wt=uP(h,Ee({},nt,{hash:QP(Gt),path:Bt.path})),Lt=p.createHref(Wt);return Ee({fullPath:Wt,hash:Gt,query:h===Wv?eO(nt.query):nt.query||{}},Bt,{redirectedFrom:void 0,href:Lt})}function D(nt){return typeof nt=="string"?th(c,nt,_.value.path):Ee({},nt)}function H(nt,vt){if(x!==nt)return hr(8,{from:vt,to:nt})}function N(nt){return q(nt)}function G(nt){return N(Ee(D(nt),{replace:!0}))}function V(nt){const vt=nt.matched[nt.matched.length-1];if(vt&&vt.redirect){const{redirect:rt}=vt;let Bt=typeof rt=="function"?rt(nt):rt;return typeof Bt=="string"&&(Bt=Bt.includes("?")||Bt.includes("#")?Bt=D(Bt):{path:Bt},Bt.params={}),Ee({query:nt.query,hash:nt.hash,params:nt.params},Bt)}}function q(nt,vt){const rt=x=T(nt),Bt=_.value,Gt=nt.state,Wt=nt.force,Lt=nt.replace===!0,F=V(rt);if(F)return q(Ee(D(F),{state:Gt,force:Wt,replace:Lt}),vt||rt);const W=rt;W.redirectedFrom=vt;let Z;return!Wt&&hP(h,Bt,rt)&&(Z=hr(16,{to:W,from:Bt}),to(Bt,Bt,!0,!1)),(Z?Promise.resolve(Z):X(W,Bt)).catch(ot=>bi(ot)?bi(ot,2)?ot:qt(ot):Ht(ot,W,Bt)).then(ot=>{if(ot){if(bi(ot,2))return q(Ee(D(ot.to),{state:Gt,force:Wt,replace:Lt}),vt||W)}else ot=yt(W,Bt,!0,Lt,Gt);return pt(W,Bt,ot),ot})}function z(nt,vt){const rt=H(nt,vt);return rt?Promise.reject(rt):Promise.resolve()}function X(nt,vt){let rt;const[Bt,Gt,Wt]=dO(nt,vt);rt=eh(Bt.reverse(),"beforeRouteLeave",nt,vt);for(const F of Bt)F.leaveGuards.forEach(W=>{rt.push(vi(W,nt,vt))});const Lt=z.bind(null,nt,vt);return rt.push(Lt),Js(rt).then(()=>{rt=[];for(const F of k.list())rt.push(vi(F,nt,vt));return rt.push(Lt),Js(rt)}).then(()=>{rt=eh(Gt,"beforeRouteUpdate",nt,vt);for(const F of Gt)F.updateGuards.forEach(W=>{rt.push(vi(W,nt,vt))});return rt.push(Lt),Js(rt)}).then(()=>{rt=[];for(const F of nt.matched)if(F.beforeEnter&&!vt.matched.includes(F))if(Array.isArray(F.beforeEnter))for(const W of F.beforeEnter)rt.push(vi(W,nt,vt));else rt.push(vi(F.beforeEnter,nt,vt));return rt.push(Lt),Js(rt)}).then(()=>(nt.matched.forEach(F=>F.enterCallbacks={}),rt=eh(Wt,"beforeRouteEnter",nt,vt),rt.push(Lt),Js(rt))).then(()=>{rt=[];for(const F of m.list())rt.push(vi(F,nt,vt));return rt.push(Lt),Js(rt)}).catch(F=>bi(F,8)?F:Promise.reject(F))}function pt(nt,vt,rt){for(const Bt of v.list())Bt(nt,vt,rt)}function yt(nt,vt,rt,Bt,Gt){const Wt=H(nt,vt);if(Wt)return Wt;const Lt=vt===ki,F=tr?history.state:{};rt&&(Bt||Lt?p.replace(nt.fullPath,Ee({scroll:Lt&&F&&F.scroll},Gt)):p.push(nt.fullPath,Gt)),_.value=nt,to(nt,vt,rt,Lt),qt()}let ut;function Tt(){ut=p.listen((nt,vt,rt)=>{const Bt=T(nt),Gt=V(Bt);if(Gt){q(Ee(Gt,{replace:!0}),Bt).catch(ra);return}x=Bt;const Wt=_.value;tr&&wP(Fv(Wt.fullPath,rt.delta),Ic()),X(Bt,Wt).catch(Lt=>bi(Lt,12)?Lt:bi(Lt,2)?(q(Lt.to,Bt).then(F=>{bi(F,20)&&!rt.delta&&rt.type===ma.pop&&p.go(-1,!1)}).catch(ra),Promise.reject()):(rt.delta&&p.go(-rt.delta,!1),Ht(Lt,Bt,Wt))).then(Lt=>{Lt=Lt||yt(Bt,Wt,!1),Lt&&(rt.delta?p.go(-rt.delta,!1):rt.type===ma.pop&&bi(Lt,20)&&p.go(-1,!1)),pt(Bt,Wt,Lt)}).catch(ra)})}let St=Qr(),le=Qr(),Ut;function Ht(nt,vt,rt){qt(nt);const Bt=le.list();return Bt.length?Bt.forEach(Gt=>Gt(nt,vt,rt)):console.error(nt),Promise.reject(nt)}function ce(){return Ut&&_.value!==ki?Promise.resolve():new Promise((nt,vt)=>{St.add([nt,vt])})}function qt(nt){return Ut||(Ut=!nt,Tt(),St.list().forEach(([vt,rt])=>nt?rt(nt):vt()),St.reset()),nt}function to(nt,vt,rt,Bt){const{scrollBehavior:Gt}=s;if(!tr||!Gt)return Promise.resolve();const Wt=!rt&&vP(Fv(nt.fullPath,0))||(Bt||!rt)&&history.state&&history.state.scroll||null;return Co().then(()=>Gt(nt,vt,Wt)).then(Lt=>Lt&&_P(Lt)).catch(Lt=>Ht(Lt,nt,vt))}const fn=nt=>p.go(nt);let cn;const gt=new Set;return{currentRoute:_,addRoute:M,removeRoute:j,hasRoute:U,getRoutes:L,resolve:T,options:s,push:N,replace:G,go:fn,back:()=>fn(-1),forward:()=>fn(1),beforeEach:k.add,beforeResolve:m.add,afterEach:v.add,onError:le.add,isReady:ce,install(nt){const vt=this;nt.component("RouterLink",iO),nt.component("RouterView",lO),nt.config.globalProperties.$router=vt,Object.defineProperty(nt.config.globalProperties,"$route",{enumerable:!0,get:()=>J(_)}),tr&&!cn&&_.value===ki&&(cn=!0,N(p.location).catch(Gt=>{}));const rt={};for(const Gt in ki)rt[Gt]=te(()=>_.value[Gt]);nt.provide(Sc,vt),nt.provide(_p,bs(rt)),nt.provide(Sh,_);const Bt=nt.unmount;gt.add(nt),nt.unmount=function(){gt.delete(nt),gt.size<1&&(x=ki,ut&&ut(),_.value=ki,cn=!1,Ut=!1),Bt()}}}}function Js(s){return s.reduce((a,c)=>a.then(()=>c()),Promise.resolve())}function dO(s,a){const c=[],h=[],p=[],k=Math.max(a.matched.length,s.matched.length);for(let m=0;m<k;m++){const v=a.matched[m];v&&(s.matched.find(x=>ur(x,v))?h.push(v):c.push(v));const _=s.matched[m];_&&(a.matched.find(x=>ur(x,_))||p.push(_))}return[c,h,p]}function Ze(){return jn(Sc)}function Uo(){return jn(_p)}const we=(s,a)=>{const c=s.__vccOpts||s;for(const[h,p]of a)c[h]=p;return c},uO={},hO=rp('<svg width="0" height="0" data-v-3e93cd15><filter id="gooey-black-hole" data-v-3e93cd15><feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" data-v-3e93cd15></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" data-v-3e93cd15></feColorMatrix></filter></svg><div class="black-hole" data-v-3e93cd15><ul class="gooey-container" data-v-3e93cd15><li class="bubble" data-v-3e93cd15></li><li class="bubble" data-v-3e93cd15></li><li class="bubble" data-v-3e93cd15></li><li class="bubble" data-v-3e93cd15></li><li class="bubble" data-v-3e93cd15></li><li class="bubble" data-v-3e93cd15></li></ul></div>',2);function pO(s,a){return hO}const gO=we(uO,[["render",pO],["__scopeId","data-v-3e93cd15"]]),fO="/assets/logo-sm-3caf833c.svg";const mO={__name:"CloseText",props:{textName:String,modelValue:Boolean},setup(s){const a=s,c=te(()=>a.modelValue),h=te(()=>a.textName);return(p,k)=>(P(),O("span",{class:_t({close:J(c)})},xt(J(h)),3))}},En=we(mO,[["__scopeId","data-v-9711c98a"]]);const gn=s=>(Te("data-v-6394d598"),s=s(),Be(),s),kO=gn(()=>g("img",{src:fO},null,-1)),bO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})],-1)),_O=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})],-1)),wO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1)),vO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})],-1)),AO=gn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),CO=[AO],yO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),xO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),EO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"})],-1)),DO=gn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),SO=[DO],IO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),MO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),TO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"})],-1)),BO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})],-1)),NO=gn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),PO=[NO],OO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),LO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),zO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),RO=gn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"})],-1)),jO={__name:"SideBar",props:{modelValue:Boolean},emits:["openSideBar"],setup(s,{emit:a}){const c=s,h=K(!1),p=K(!1),k=K(!1),m=te(()=>c.modelValue),v=()=>{h.value=!1,p.value=!1,k.value=!1};co(m,x=>{x&&v()});const _=x=>{if(a("openSideBar"),x==="about")return h.value=!h.value;if(x==="awards")return p.value=!p.value;if(x==="info")return k.value=!k.value};return(x,C)=>{const E=Tn("router-link");return P(),O("div",{class:_t(["sideBar",{close:J(m)}])},[Et(E,{to:"/",class:"logo"},{default:he(()=>[kO,Et(En,{textName:"Carbon",modelValue:J(m),"onUpdate:modelValue":C[0]||(C[0]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1}),g("ul",null,[Et(E,{to:{name:"app.dashboard"}},{default:he(()=>[bO,Et(En,{textName:"首頁",modelValue:J(m),"onUpdate:modelValue":C[1]||(C[1]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.articles"}},{default:he(()=>[_O,Et(En,{textName:"最新消息",modelValue:J(m),"onUpdate:modelValue":C[2]||(C[2]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.banners"}},{default:he(()=>[wO,Et(En,{textName:"首頁輪播圖",modelValue:J(m),"onUpdate:modelValue":C[3]||(C[3]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),g("a",{href:"javascript:;",onClick:C[5]||(C[5]=A=>_("about"))},[vO,Et(En,{textName:"關於學會",modelValue:J(m),"onUpdate:modelValue":C[4]||(C[4]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"]),lt((P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_t(["w-3","h-3","ml-auto",{active:h.value}])},CO,2)),[[ia,!J(m)]])]),g("ol",{class:_t({open:h.value})},[Et(E,{to:{name:"app.chairmans"}},{default:he(()=>[yO,Et(En,{textName:"理事長的話",modelValue:J(m),"onUpdate:modelValue":C[6]||(C[6]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.organization"}},{default:he(()=>[xO,Et(En,{textName:"組織架構",modelValue:J(m),"onUpdate:modelValue":C[7]||(C[7]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),g("a",{href:"javascript:;",onClick:C[9]||(C[9]=A=>_("awards"))},[EO,Et(En,{textName:"學會獎項",modelValue:J(m),"onUpdate:modelValue":C[8]||(C[8]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"]),lt((P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_t(["w-3","h-3","ml-auto",{active:p.value}])},SO,2)),[[ia,!J(m)]])]),g("ol",{class:_t({open:p.value})},[Et(E,{to:{name:"app.award-program"}},{default:he(()=>[IO,Et(En,{textName:"歷年獲獎名單",modelValue:J(m),"onUpdate:modelValue":C[10]||(C[10]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.letters"}},{default:he(()=>[MO,Et(En,{textName:"推薦書下載",modelValue:J(m),"onUpdate:modelValue":C[11]||(C[11]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),Et(E,{to:{name:"app.cst-database"}},{default:he(()=>[TO,Et(En,{textName:"碳才資料庫",modelValue:J(m),"onUpdate:modelValue":C[12]||(C[12]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),g("a",{href:"javascript:;",onClick:C[14]||(C[14]=A=>_("info"))},[BO,Et(En,{textName:"論壇&研討會資訊",modelValue:J(m),"onUpdate:modelValue":C[13]||(C[13]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"]),lt((P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_t(["w-3","h-3","ml-auto",{active:k.value}])},PO,2)),[[ia,!J(m)]])]),g("ol",{class:_t({open:k.value})},[Et(E,{to:{name:"app.cst-seminar"}},{default:he(()=>[OO,Et(En,{textName:"臺灣碳材料學術研討會",modelValue:J(m),"onUpdate:modelValue":C[15]||(C[15]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.overseas"}},{default:he(()=>[LO,Et(En,{textName:"國內外研討會",modelValue:J(m),"onUpdate:modelValue":C[16]||(C[16]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"]),Et(E,{to:{name:"app.forums"}},{default:he(()=>[zO,Et(En,{textName:"碳材料論壇",modelValue:J(m),"onUpdate:modelValue":C[17]||(C[17]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),Et(E,{to:{name:"app.dashboard"}},{default:he(()=>[RO,Et(En,{textName:"Email",modelValue:J(m),"onUpdate:modelValue":C[18]||(C[18]=A=>ie(m)?m.value=A:null)},null,8,["modelValue"])]),_:1},8,["to"])])],2)}}},$O=we(jO,[["__scopeId","data-v-6394d598"]]),FO="/assets/hea-37976f3c.jpg";function Mc(s,a,...c){if(s in a){let p=a[s];return typeof p=="function"?p(...c):p}let h=new Error(`Tried to handle "${s}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(p=>`"${p}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(h,Mc),h}var Th=(s=>(s[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s))(Th||{}),VO=(s=>(s[s.Unmount=0]="Unmount",s[s.Hidden=1]="Hidden",s))(VO||{});function Tc({visible:s=!0,features:a=0,ourProps:c,theirProps:h,...p}){var k;let m=C1(h,c),v=Object.assign(p,{props:m});if(s||a&2&&m.static)return nh(v);if(a&1){let _=(k=m.unmount)==null||k?0:1;return Mc(_,{[0](){return null},[1](){return nh({...p,props:{...m,hidden:!0,style:{display:"none"}}})}})}return nh(v)}function nh({props:s,attrs:a,slots:c,slot:h,name:p}){var k,m;let{as:v,..._}=UO(s,["unmount","static"]),x=(k=c.default)==null?void 0:k.call(c,h),C={};if(h){let E=!1,A=[];for(let[M,j]of Object.entries(h))typeof j=="boolean"&&(E=!0),j===!0&&A.push(M);E&&(C["data-headlessui-state"]=A.join(" "))}if(v==="template"){if(x=A1(x??[]),Object.keys(_).length>0||Object.keys(a).length>0){let[E,...A]=x??[];if(!HO(E)||A.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${p} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(_).concat(Object.keys(a)).map(L=>L.trim()).filter((L,U,T)=>T.indexOf(L)===U).sort((L,U)=>L.localeCompare(U)).map(L=>`  - ${L}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(L=>`  - ${L}`).join(`
`)].join(`
`));let M=C1((m=E.props)!=null?m:{},_),j=yo(E,M);for(let L in M)L.startsWith("on")&&(j.props||(j.props={}),j.props[L]=M[L]);return j}return Array.isArray(x)&&x.length===1?x[0]:x}return Ea(v,Object.assign({},_,C),{default:()=>x})}function A1(s){return s.flatMap(a=>a.type===Rt?A1(a.children):[a])}function C1(...s){if(s.length===0)return{};if(s.length===1)return s[0];let a={},c={};for(let h of s)for(let p in h)p.startsWith("on")&&typeof h[p]=="function"?(c[p]!=null||(c[p]=[]),c[p].push(h[p])):a[p]=h[p];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(c).map(h=>[h,void 0])));for(let h in c)Object.assign(a,{[h](p,...k){let m=c[h];for(let v of m){if(p instanceof Event&&p.defaultPrevented)return;v(p,...k)}}});return a}function UO(s,a=[]){let c=Object.assign({},s);for(let h of a)h in c&&delete c[h];return c}function HO(s){return s==null?!1:typeof s.type=="string"||typeof s.type=="object"||typeof s.type=="function"}let qO=0;function GO(){return++qO}function vp(){return GO()}var An=(s=>(s.Space=" ",s.Enter="Enter",s.Escape="Escape",s.Backspace="Backspace",s.Delete="Delete",s.ArrowLeft="ArrowLeft",s.ArrowUp="ArrowUp",s.ArrowRight="ArrowRight",s.ArrowDown="ArrowDown",s.Home="Home",s.End="End",s.PageUp="PageUp",s.PageDown="PageDown",s.Tab="Tab",s))(An||{});function WO(s){throw new Error("Unexpected object: "+s)}var Zn=(s=>(s[s.First=0]="First",s[s.Previous=1]="Previous",s[s.Next=2]="Next",s[s.Last=3]="Last",s[s.Specific=4]="Specific",s[s.Nothing=5]="Nothing",s))(Zn||{});function KO(s,a){let c=a.resolveItems();if(c.length<=0)return null;let h=a.resolveActiveIndex(),p=h??-1,k=(()=>{switch(s.focus){case 0:return c.findIndex(m=>!a.resolveDisabled(m));case 1:{let m=c.slice().reverse().findIndex((v,_,x)=>p!==-1&&x.length-_-1>=p?!1:!a.resolveDisabled(v));return m===-1?m:c.length-1-m}case 2:return c.findIndex((m,v)=>v<=p?!1:!a.resolveDisabled(m));case 3:{let m=c.slice().reverse().findIndex(v=>!a.resolveDisabled(v));return m===-1?m:c.length-1-m}case 4:return c.findIndex(m=>a.resolveId(m)===s.id);case 5:return null;default:WO(s)}})();return k===-1?h:k}function nn(s){var a;return s==null||s.value==null?null:(a=s.value.$el)!=null?a:s.value}let y1=Symbol("Context");var ka=(s=>(s[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s))(ka||{});function YO(){return jn(y1,null)}function QO(s){ds(y1,s)}function Jv(s,a){if(s)return s;let c=a??"button";if(typeof c=="string"&&c.toLowerCase()==="button")return"button"}function ZO(s,a){let c=K(Jv(s.value.type,s.value.as));return _e(()=>{c.value=Jv(s.value.type,s.value.as)}),Aa(()=>{var h;c.value||nn(a)&&nn(a)instanceof HTMLButtonElement&&!((h=nn(a))!=null&&h.hasAttribute("type"))&&(c.value="button")}),c}var JO=Object.defineProperty,XO=(s,a,c)=>a in s?JO(s,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[a]=c,Xv=(s,a,c)=>(XO(s,typeof a!="symbol"?a+"":a,c),c);class tL{constructor(){Xv(this,"current",this.detect()),Xv(this,"currentId",0)}set(a){this.current!==a&&(this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let x1=new tL;function Ap(s){if(x1.isServer)return null;if(s instanceof Node)return s.ownerDocument;if(s!=null&&s.hasOwnProperty("value")){let a=nn(s);if(a)return a.ownerDocument}return document}function eL({container:s,accept:a,walk:c,enabled:h}){Aa(()=>{let p=s.value;if(!p||h!==void 0&&!h.value)return;let k=Ap(s);if(!k)return;let m=Object.assign(_=>a(_),{acceptNode:a}),v=k.createTreeWalker(p,NodeFilter.SHOW_ELEMENT,m,!1);for(;v.nextNode();)c(v.currentNode)})}let Bh=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(s=>`${s}:not([tabindex='-1'])`).join(",");var Nh=(s=>(s[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s))(Nh||{}),nL=(s=>(s[s.Error=0]="Error",s[s.Overflow=1]="Overflow",s[s.Success=2]="Success",s[s.Underflow=3]="Underflow",s))(nL||{}),oL=(s=>(s[s.Previous=-1]="Previous",s[s.Next=1]="Next",s))(oL||{});function E1(s=document.body){return s==null?[]:Array.from(s.querySelectorAll(Bh)).sort((a,c)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(c.tabIndex||Number.MAX_SAFE_INTEGER)))}var Cp=(s=>(s[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s))(Cp||{});function yp(s,a=0){var c;return s===((c=Ap(s))==null?void 0:c.body)?!1:Mc(a,{[0](){return s.matches(Bh)},[1](){let h=s;for(;h!==null;){if(h.matches(Bh))return!0;h=h.parentElement}return!1}})}function D1(s){let a=Ap(s);Co(()=>{a&&!yp(a.activeElement,0)&&iL(s)})}function iL(s){s==null||s.focus({preventScroll:!0})}let sL=["textarea","input"].join(",");function rL(s){var a,c;return(c=(a=s==null?void 0:s.matches)==null?void 0:a.call(s,sL))!=null?c:!1}function S1(s,a=c=>c){return s.slice().sort((c,h)=>{let p=a(c),k=a(h);if(p===null||k===null)return 0;let m=p.compareDocumentPosition(k);return m&Node.DOCUMENT_POSITION_FOLLOWING?-1:m&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function aL(s,a){return lL(E1(),a,{relativeTo:s})}function lL(s,a,{sorted:c=!0,relativeTo:h=null,skipElements:p=[]}={}){var k;let m=(k=Array.isArray(s)?s.length>0?s[0].ownerDocument:document:s==null?void 0:s.ownerDocument)!=null?k:document,v=Array.isArray(s)?c?S1(s):s:E1(s);p.length>0&&v.length>1&&(v=v.filter(j=>!p.includes(j))),h=h??m.activeElement;let _=(()=>{if(a&5)return 1;if(a&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(a&1)return 0;if(a&2)return Math.max(0,v.indexOf(h))-1;if(a&4)return Math.max(0,v.indexOf(h))+1;if(a&8)return v.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),C=a&32?{preventScroll:!0}:{},E=0,A=v.length,M;do{if(E>=A||E+A<=0)return 0;let j=x+E;if(a&16)j=(j+A)%A;else{if(j<0)return 3;if(j>=A)return 1}M=v[j],M==null||M.focus(C),E+=_}while(M!==m.activeElement);return a&6&&rL(M)&&M.select(),M.hasAttribute("tabindex")||M.setAttribute("tabindex","0"),2}function oh(s,a,c){x1.isServer||Aa(h=>{document.addEventListener(s,a,c),h(()=>document.removeEventListener(s,a,c))})}function cL(s,a,c=te(()=>!0)){function h(k,m){if(!c.value||k.defaultPrevented)return;let v=m(k);if(v===null||!v.getRootNode().contains(v))return;let _=function x(C){return typeof C=="function"?x(C()):Array.isArray(C)||C instanceof Set?C:[C]}(s);for(let x of _){if(x===null)continue;let C=x instanceof HTMLElement?x:nn(x);if(C!=null&&C.contains(v)||k.composed&&k.composedPath().includes(C))return}return!yp(v,Cp.Loose)&&v.tabIndex!==-1&&k.preventDefault(),a(k,v)}let p=K(null);oh("mousedown",k=>{var m,v;c.value&&(p.value=((v=(m=k.composedPath)==null?void 0:m.call(k))==null?void 0:v[0])||k.target)},!0),oh("click",k=>{p.value&&(h(k,()=>p.value),p.value=null)},!0),oh("blur",k=>h(k,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function tA(s){return[s.screenX,s.screenY]}function dL(){let s=K([-1,-1]);return{wasMoved(a){let c=tA(a);return s.value[0]===c[0]&&s.value[1]===c[1]?!1:(s.value=c,!0)},update(a){s.value=tA(a)}}}var uL=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(uL||{}),hL=(s=>(s[s.Pointer=0]="Pointer",s[s.Other=1]="Other",s))(hL||{});function pL(s){requestAnimationFrame(()=>requestAnimationFrame(s))}let I1=Symbol("MenuContext");function Bc(s){let a=jn(I1,null);if(a===null){let c=new Error(`<${s} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,Bc),c}return a}let gL=ni({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(s,{slots:a,attrs:c}){let h=K(1),p=K(null),k=K(null),m=K([]),v=K(""),_=K(null),x=K(1);function C(A=M=>M){let M=_.value!==null?m.value[_.value]:null,j=S1(A(m.value.slice()),U=>nn(U.dataRef.domRef)),L=M?j.indexOf(M):null;return L===-1&&(L=null),{items:j,activeItemIndex:L}}let E={menuState:h,buttonRef:p,itemsRef:k,items:m,searchQuery:v,activeItemIndex:_,activationTrigger:x,closeMenu:()=>{h.value=1,_.value=null},openMenu:()=>h.value=0,goToItem(A,M,j){let L=C(),U=KO(A===Zn.Specific?{focus:Zn.Specific,id:M}:{focus:A},{resolveItems:()=>L.items,resolveActiveIndex:()=>L.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});v.value="",_.value=U,x.value=j??1,m.value=L.items},search(A){let M=v.value!==""?0:1;v.value+=A.toLowerCase();let j=(_.value!==null?m.value.slice(_.value+M).concat(m.value.slice(0,_.value+M)):m.value).find(U=>U.dataRef.textValue.startsWith(v.value)&&!U.dataRef.disabled),L=j?m.value.indexOf(j):-1;L===-1||L===_.value||(_.value=L,x.value=1)},clearSearch(){v.value=""},registerItem(A,M){let j=C(L=>[...L,{id:A,dataRef:M}]);m.value=j.items,_.value=j.activeItemIndex,x.value=1},unregisterItem(A){let M=C(j=>{let L=j.findIndex(U=>U.id===A);return L!==-1&&j.splice(L,1),j});m.value=M.items,_.value=M.activeItemIndex,x.value=1}};return cL([p,k],(A,M)=>{var j;E.closeMenu(),yp(M,Cp.Loose)||(A.preventDefault(),(j=nn(p))==null||j.focus())},te(()=>h.value===0)),ds(I1,E),QO(te(()=>Mc(h.value,{[0]:ka.Open,[1]:ka.Closed}))),()=>{let A={open:h.value===0,close:E.closeMenu};return Tc({ourProps:{},theirProps:s,slot:A,slots:a,attrs:c,name:"Menu"})}}}),fL=ni({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${vp()}`}},setup(s,{attrs:a,slots:c,expose:h}){let p=Bc("MenuButton");h({el:p.buttonRef,$el:p.buttonRef});function k(x){switch(x.key){case An.Space:case An.Enter:case An.ArrowDown:x.preventDefault(),x.stopPropagation(),p.openMenu(),Co(()=>{var C;(C=nn(p.itemsRef))==null||C.focus({preventScroll:!0}),p.goToItem(Zn.First)});break;case An.ArrowUp:x.preventDefault(),x.stopPropagation(),p.openMenu(),Co(()=>{var C;(C=nn(p.itemsRef))==null||C.focus({preventScroll:!0}),p.goToItem(Zn.Last)});break}}function m(x){switch(x.key){case An.Space:x.preventDefault();break}}function v(x){s.disabled||(p.menuState.value===0?(p.closeMenu(),Co(()=>{var C;return(C=nn(p.buttonRef))==null?void 0:C.focus({preventScroll:!0})})):(x.preventDefault(),p.openMenu(),pL(()=>{var C;return(C=nn(p.itemsRef))==null?void 0:C.focus({preventScroll:!0})})))}let _=ZO(te(()=>({as:s.as,type:a.type})),p.buttonRef);return()=>{var x;let C={open:p.menuState.value===0},{id:E,...A}=s,M={ref:p.buttonRef,id:E,type:_.value,"aria-haspopup":"menu","aria-controls":(x=nn(p.itemsRef))==null?void 0:x.id,"aria-expanded":s.disabled?void 0:p.menuState.value===0,onKeydown:k,onKeyup:m,onClick:v};return Tc({ourProps:M,theirProps:A,slot:C,attrs:a,slots:c,name:"MenuButton"})}}}),mL=ni({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${vp()}`}},setup(s,{attrs:a,slots:c,expose:h}){let p=Bc("MenuItems"),k=K(null);h({el:p.itemsRef,$el:p.itemsRef}),eL({container:te(()=>nn(p.itemsRef)),enabled:te(()=>p.menuState.value===0),accept(C){return C.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:C.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(C){C.setAttribute("role","none")}});function m(C){var E;switch(k.value&&clearTimeout(k.value),C.key){case An.Space:if(p.searchQuery.value!=="")return C.preventDefault(),C.stopPropagation(),p.search(C.key);case An.Enter:if(C.preventDefault(),C.stopPropagation(),p.activeItemIndex.value!==null){let A=p.items.value[p.activeItemIndex.value];(E=nn(A.dataRef.domRef))==null||E.click()}p.closeMenu(),D1(nn(p.buttonRef));break;case An.ArrowDown:return C.preventDefault(),C.stopPropagation(),p.goToItem(Zn.Next);case An.ArrowUp:return C.preventDefault(),C.stopPropagation(),p.goToItem(Zn.Previous);case An.Home:case An.PageUp:return C.preventDefault(),C.stopPropagation(),p.goToItem(Zn.First);case An.End:case An.PageDown:return C.preventDefault(),C.stopPropagation(),p.goToItem(Zn.Last);case An.Escape:C.preventDefault(),C.stopPropagation(),p.closeMenu(),Co(()=>{var A;return(A=nn(p.buttonRef))==null?void 0:A.focus({preventScroll:!0})});break;case An.Tab:C.preventDefault(),C.stopPropagation(),p.closeMenu(),Co(()=>aL(nn(p.buttonRef),C.shiftKey?Nh.Previous:Nh.Next));break;default:C.key.length===1&&(p.search(C.key),k.value=setTimeout(()=>p.clearSearch(),350));break}}function v(C){switch(C.key){case An.Space:C.preventDefault();break}}let _=YO(),x=te(()=>_!==null?(_.value&ka.Open)===ka.Open:p.menuState.value===0);return()=>{var C,E;let A={open:p.menuState.value===0},{id:M,...j}=s,L={"aria-activedescendant":p.activeItemIndex.value===null||(C=p.items.value[p.activeItemIndex.value])==null?void 0:C.id,"aria-labelledby":(E=nn(p.buttonRef))==null?void 0:E.id,id:M,onKeydown:m,onKeyup:v,role:"menu",tabIndex:0,ref:p.itemsRef};return Tc({ourProps:L,theirProps:j,slot:A,attrs:a,slots:c,features:Th.RenderStrategy|Th.Static,visible:x.value,name:"MenuItems"})}}}),eA=ni({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${vp()}`}},setup(s,{slots:a,attrs:c,expose:h}){let p=Bc("MenuItem"),k=K(null);h({el:k,$el:k});let m=te(()=>p.activeItemIndex.value!==null?p.items.value[p.activeItemIndex.value].id===s.id:!1),v=te(()=>({disabled:s.disabled,textValue:"",domRef:k}));_e(()=>{var j,L;let U=(L=(j=nn(k))==null?void 0:j.textContent)==null?void 0:L.toLowerCase().trim();U!==void 0&&(v.value.textValue=U)}),_e(()=>p.registerItem(s.id,v)),xa(()=>p.unregisterItem(s.id)),Aa(()=>{p.menuState.value===0&&m.value&&p.activationTrigger.value!==0&&Co(()=>{var j,L;return(L=(j=nn(k))==null?void 0:j.scrollIntoView)==null?void 0:L.call(j,{block:"nearest"})})});function _(j){if(s.disabled)return j.preventDefault();p.closeMenu(),D1(nn(p.buttonRef))}function x(){if(s.disabled)return p.goToItem(Zn.Nothing);p.goToItem(Zn.Specific,s.id)}let C=dL();function E(j){C.update(j)}function A(j){C.wasMoved(j)&&(s.disabled||m.value||p.goToItem(Zn.Specific,s.id,0))}function M(j){C.wasMoved(j)&&(s.disabled||m.value&&p.goToItem(Zn.Nothing))}return()=>{let{disabled:j}=s,L={active:m.value,disabled:j,close:p.closeMenu},{id:U,...T}=s;return Tc({ourProps:{id:U,ref:k,role:"menuitem",tabIndex:j===!0?void 0:-1,"aria-disabled":j===!0?!0:void 0,disabled:void 0,onClick:_,onFocus:x,onPointerenter:E,onMouseenter:E,onPointermove:A,onMousemove:A,onPointerleave:M,onMouseleave:M},theirProps:{...c,...T},slot:L,attrs:c,slots:a,name:"MenuItem"})}}});const Ia=s=>(Te("data-v-62cb9330"),s=s(),Be(),s),kL={class:"left"},bL=Ia(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1)),_L=[bL],wL=Ia(()=>g("img",{src:FO,class:"rounded-full w-10 mr-2"},null,-1)),vL={class:"text-sm"},AL=Ia(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4 ml-6"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),CL={class:"px-1 py-1"},yL=Ia(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"})],-1)),xL=Ia(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1)),EL={__name:"Header",props:{userName:String},emits:["openSideBar"],setup(s,{emit:a}){const c=s,h=te(()=>c.userName),p=Ze(),k=()=>{ft.dispatch("logout").then(()=>{p.push({name:"login"})})};return(m,v)=>(P(),O("header",null,[g("div",kL,[(P(),O("svg",{onClick:v[0]||(v[0]=_=>a("openSideBar")),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},_L))]),Et(J(gL),{as:"div",class:"relative inline-block text-left"},{default:he(()=>[g("div",null,[Et(J(fL),{class:"flex items-center"},{default:he(()=>[wL,g("p",vL,xt(J(h)),1),AL]),_:1})]),Et(Ac,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:he(()=>[Et(J(mL),{class:"absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-sm bg-[#293037] shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"},{default:he(()=>[g("div",CL,[Et(J(eA),null,{default:he(({active:_})=>[g("button",{class:_t([_?"bg-[#293037]-600 text-[#ced4da]":"text-[#ced4da]","group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#aaa] hover:text-[#333]"])},[yL,_n(" Profile ")],2)]),_:1}),Et(J(eA),null,{default:he(({active:_})=>[g("button",{onClick:k,class:_t([_?"bg-[#293037] text-[#ced4da]":"text-[#ced4da]","group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#aaa] hover:text-[#333]"])},[xL,_n(" Logout ")],2)]),_:1})])]),_:1})]),_:1})]),_:1})]))}},DL=we(EL,[["__scopeId","data-v-62cb9330"]]);const SL={__name:"Footer",props:{text:String},setup(s){const a=s,c=te(()=>a.text);return(h,p)=>{const k=Tn("router-link");return P(),O("footer",null,[g("span",null,xt(J(c)),1),g("span",null,[_n("2023 © "),Et(k,{to:{name:"app.dashboard"}},{default:he(()=>[_n(xt(J(c))+".",1)]),_:1},8,["to"])])])}}},IL=we(SL,[["__scopeId","data-v-aaf01730"]]);const ML=s=>(Te("data-v-9307261c"),s=s(),Be(),s),TL={key:0,class:"app"},BL={class:"main"},NL={key:1,class:"loading"},PL=ML(()=>g("span",null,"LOADING...",-1)),OL={__name:"AppLayout",setup(s){const a=K(!1);_e(()=>{ft.dispatch("getUser")});const c=te(()=>ft.state.user.data),h=()=>{a.value=!a.value},p=()=>{a.value=!1};return(k,m)=>{const v=Tn("router-view");return J(c).id?(P(),O("div",TL,[Et($O,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=_=>a.value=_),onOpenSideBar:p},null,8,["modelValue"]),g("div",BL,[Et(DL,{onOpenSideBar:h,userName:J(c).name},null,8,["userName"]),g("main",null,[Et(v)]),Et(IL,{text:"Carbon"})])])):(P(),O("div",NL,[Et(gO),PL]))}}},LL=we(OL,[["__scopeId","data-v-9307261c"]]),zL={};function RL(s,a){return P(),O("h1",null,"Dashboard")}const jL=we(zL,[["render",RL]]),vs="/assets/news-6d7fd9b8.jpg",M1=10,$L=10,FL=10,VL=10,UL=10,HL=10,qL=10,GL=10,WL=10;const Ne=s=>(Te("data-v-95d881b7"),s=s(),Be(),s),KL={class:"articles"},YL=Ne(()=>g("pre",null,null,-1)),QL=Ne(()=>g("h1",null,"最新消息列表",-1)),ZL={class:"card"},JL={class:"card-header"},XL={class:"left"},t6={class:"form-group"},e6=Ne(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),n6={class:"form-group"},o6=Ne(()=>g("option",{value:"10"},"10",-1)),i6=Ne(()=>g("option",{value:"20"},"20",-1)),s6=Ne(()=>g("option",{value:"50"},"50",-1)),r6=Ne(()=>g("option",{value:"100"},"100",-1)),a6=[o6,i6,s6,r6],l6={class:"right"},c6={class:"form-group"},d6={class:"table-responsive"},u6={class:"table table-auto w-full animate-fade-in-down"},h6={class:"w-[20px]"},p6={class:"flex items-center"},g6=Ne(()=>g("div",null,"Id",-1)),f6={key:0,class:"ml-2"},m6={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},k6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),b6=[k6],_6={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},w6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),v6=[w6],A6={class:"flex items-center"},C6=Ne(()=>g("div",null,"圖片",-1)),y6={key:0,class:"ml-2"},x6={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},E6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),D6=[E6],S6={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},I6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),M6=[I6],T6={class:"flex items-center"},B6=Ne(()=>g("div",null,"標題",-1)),N6={key:0,class:"ml-2"},P6={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},O6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),L6=[O6],z6={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},R6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),j6=[R6],$6={class:"flex items-center"},F6=Ne(()=>g("div",null,"最後更新時間",-1)),V6={key:0,class:"ml-2"},U6={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},H6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),q6=[H6],G6={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},W6=Ne(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),K6=[W6],Y6=Ne(()=>g("th",null,"是否顯示",-1)),Q6=Ne(()=>g("th",null,"操作",-1)),Z6={key:0,class:"loadingTable"},J6=Ne(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),X6=[J6],tz={key:1},ez={class:"w-[20px]"},nz=["value"],oz={class:"w-[40px]"},iz=["src"],sz={key:1,src:vs},rz={key:0},az={key:1,class:"active"},lz=["onClick"],cz=Ne(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),dz=[cz],uz=["onClick"],hz=Ne(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),pz=[hz],gz={key:0},fz={colspan:"7"},mz={class:"flex items-center"},kz=Ne(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),bz=["disabled"],_z={key:0,class:"paging"},wz={class:"pageInfo"},vz={class:"pageBtn"},Az=["onClick","disabled","innerHTML"],Cz={__name:"Articles",setup(s){const a=Ze(),c=K(M1),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.articles),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getArticles",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm(`確定要刪除 ${T.title} 嗎？`)&&ft.dispatch("deleteArticle",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteArticleItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",KL,[YL,QL,g("div",ZL,[g("div",JL,[g("div",XL,[g("div",t6,[e6,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",n6,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},a6,544),[[Fn,c.value]])])]),g("div",l6,[g("div",c6,[Et(H,{class:"btn",to:{name:"app.add-article",params:{id:"create"}}},{default:he(()=>[_n("+ 新增文章")]),_:1},8,["to"])])])]),g("div",d6,[g("table",u6,[g("thead",null,[g("tr",null,[g("th",h6,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",p6,[g6,p.value==="id"?(P(),O("div",f6,[k.value==="desc"?(P(),O("svg",m6,b6)):Q("",!0),k.value==="asc"?(P(),O("svg",_6,v6)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",A6,[C6,p.value==="image"?(P(),O("div",y6,[k.value==="desc"?(P(),O("svg",x6,D6)):Q("",!0),k.value==="asc"?(P(),O("svg",S6,M6)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("title")),class:_t(["cursor-pointer",{active:p.value==="title"}])},[g("div",T6,[B6,p.value==="title"?(P(),O("div",N6,[k.value==="desc"?(P(),O("svg",P6,L6)):Q("",!0),k.value==="asc"?(P(),O("svg",z6,j6)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",$6,[F6,p.value==="updated_at"?(P(),O("div",V6,[k.value==="desc"?(P(),O("svg",U6,q6)):Q("",!0),k.value==="asc"?(P(),O("svg",G6,K6)):Q("",!0)])):Q("",!0)])],2),Y6,Q6])]),J(m).loading?(P(),O("tbody",Z6,X6)):(P(),O("tbody",tz,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",ez,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,nz),[[re,v.value]])]),g("td",oz,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,iz)):(P(),O("img",sz))]),g("td",null,xt(N.title),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",rz,"隱藏")):(P(),O("span",az,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-article",params:{id:N.id}})},dz,8,lz),g("button",{class:"delete ml-5",onClick:V=>M(N)},pz,8,uz)])]))),128)),J(m).data.length>0?(P(),O("tr",gz,[g("td",fz,[g("div",mz,[kz,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,bz)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",_z,[g("div",wz,"Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",vz,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,Az))),128))])])])):Q("",!0)])])}}},yz=we(Cz,[["__scopeId","data-v-95d881b7"]]);const Bn=s=>(Te("data-v-6b0385b9"),s=s(),Be(),s),xz={class:"addArticle"},Ez={key:0},Dz={key:1},Sz={class:"card"},Iz=Bn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),Mz={class:"form-group"},Tz=Bn(()=>g("label",{for:""},"文章分類",-1)),Bz=Bn(()=>g("option",{value:"0"},"會務公告",-1)),Nz=Bn(()=>g("option",{value:"1"},"徵才公告",-1)),Pz=[Bz,Nz],Oz={class:"form-group"},Lz=Bn(()=>g("label",{for:""},"文章標題",-1)),zz={class:"form-group"},Rz=Bn(()=>g("label",{for:""},"文章內容",-1)),jz={class:"form-group"},$z=Bn(()=>g("label",{for:""},"文章圖片",-1)),Fz={for:"imagefile",class:"imagefileFor"},Vz={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Uz=Bn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Hz=Bn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),qz=[Uz,Hz],Gz={key:1},Wz=Bn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),Kz=Bn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),Yz=[Wz,Kz],Qz={key:2,class:"isPreview"},Zz={class:"chkbox-group"},Jz={class:"form-group"},Xz=Bn(()=>g("label",{for:""},"隱藏文章",-1)),tR={key:0,class:"successMsg"},eR={class:"form-group btn-group mt-10"},nR={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},oR=Bn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),iR=Bn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),sR=[oR,iR],rR={key:1},aR={key:1,class:"flex items-center justify-center py-10"},lR=Bn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),cR=[lR],dR={key:2,class:"errorMsg"},uR={__name:"AddArticle",setup(s){const a=Uo(),c=Ze(),h={id:"",title:"",image:"",content:"",category:0,hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1),_=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const U=a.params.id;if(U==="create"){k.value=!0,A.value.id=U,M.value=!0;return}ft.dispatch("isExistArticle",U).then(T=>{T.data?ft.dispatch("getArticle",U).then(D=>{A.value=D.data,p.value=D.data.image_url,p.value&&(x.value=!0),k.value=!0,A.value.title=A.value.title=="null"?"":A.value.title,A.value.content=A.value.content=="null"?"":A.value.content}).then(()=>{p.value!=""&&(_.value.src=p.value)}):c.push({path:"/notfound"})}).catch(T=>{console.error(T)})});const j=U=>{if(v.value=!0,U.target.files&&U.target.files[0]){A.value.image=U.target.files[0];const T=new FileReader;T.onload=D=>{_.value.src=D.target.result},T.readAsDataURL(U.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,M.value?ft.dispatch("createArticle",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors}):ft.dispatch("updateArticle",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors})};return co(()=>A.value,U=>{E.value=null},{deep:!0}),(U,T)=>(P(),O("div",xz,[M.value?(P(),O("h1",Ez,"新增文章")):(P(),O("h1",Dz,"編輯文章")),g("div",Sz,[Iz,k.value?(P(),O("form",{key:0,action:"",onSubmit:T[6]||(T[6]=Qe(D=>L(),["prevent"]))},[g("div",Mz,[Tz,lt(g("select",{"onUpdate:modelValue":T[0]||(T[0]=D=>A.value.category=D)},Pz,512),[[Fn,A.value.category]])]),g("div",Oz,[Lz,lt(g("input",{type:"text","onUpdate:modelValue":T[1]||(T[1]=D=>A.value.title=D)},null,512),[[Pt,A.value.title]])]),g("div",zz,[Rz,lt(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":T[2]||(T[2]=D=>A.value.content=D)},null,512),[[Pt,A.value.content]])]),g("div",jz,[$z,g("label",Fz,[v.value?(P(),O("svg",Vz,qz)):Q("",!0),x.value?(P(),O("div",Qz,[g("img",{src:"",ref_key:"previewImg",ref:_,id:"previewImg"},null,512)])):(P(),O("div",Gz,Yz))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:T[3]||(T[3]=D=>j(D))},null,32)]),g("div",Zz,[g("div",Jz,[Xz,lt(g("input",{type:"checkbox","onUpdate:modelValue":T[4]||(T[4]=D=>A.value.hidden=D)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",tR,xt(E.value),1)):Q("",!0),g("div",eR,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",nR,sR)):(P(),O("span",rR,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:T[5]||(T[5]=D=>J(c).push({name:"app.articles"}))}," 回列表 ")])],32)):(P(),O("div",aR,cR)),C.value?(P(),O("div",dR,[(P(!0),O(Rt,null,se(C.value,(D,H)=>(P(),O("span",{key:H},xt(D[0]),1))),128))])):Q("",!0)])]))}},hR=we(uR,[["__scopeId","data-v-6b0385b9"]]);const rn=s=>(Te("data-v-a7c95acc"),s=s(),Be(),s),pR={class:"banners"},gR=rn(()=>g("h1",null,"輪播圖列表",-1)),fR={class:"card"},mR={class:"card-header"},kR={class:"left"},bR={class:"form-group"},_R=rn(()=>g("option",{value:"10"},"10",-1)),wR=rn(()=>g("option",{value:"20"},"20",-1)),vR=rn(()=>g("option",{value:"50"},"50",-1)),AR=rn(()=>g("option",{value:"100"},"100",-1)),CR=[_R,wR,vR,AR],yR={class:"right"},xR={class:"form-group"},ER={class:"table-responsive"},DR={class:"table table-auto w-full animate-fade-in-down"},SR={class:"w-[20px]"},IR={class:"flex items-center"},MR=rn(()=>g("div",null,"Id",-1)),TR={key:0,class:"ml-2"},BR={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},NR=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),PR=[NR],OR={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},LR=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),zR=[LR],RR={class:"flex items-center"},jR=rn(()=>g("div",null,"圖片",-1)),$R={key:0,class:"ml-2"},FR={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},VR=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),UR=[VR],HR={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},qR=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),GR=[qR],WR={class:"flex items-center"},KR=rn(()=>g("div",null,"最後更新時間",-1)),YR={key:0,class:"ml-2"},QR={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},ZR=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),JR=[ZR],XR={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},t8=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),e8=[t8],n8=rn(()=>g("th",null,"是否顯示",-1)),o8=rn(()=>g("th",null,"操作",-1)),i8={key:0,class:"loadingTable"},s8=rn(()=>g("tr",{draggable:"true"},[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),r8=[s8],a8={key:1},l8={class:"w-[20px]"},c8=["value"],d8={class:"w-[40px]"},u8=["src"],h8={key:1,src:vs},p8={key:0},g8={key:1,class:"active"},f8=["onClick"],m8=rn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),k8=[m8],b8=["onClick"],_8=rn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),w8=[_8],v8={key:0},A8={colspan:"7"},C8={class:"flex items-center"},y8=rn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),x8=["disabled"],E8={key:0,class:"paging"},D8={class:"pageInfo"},S8={class:"pageBtn"},I8=["onClick","disabled","innerHTML"],M8={__name:"Banners",setup(s){const a=Ze(),c=K($L),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.banners),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getBanners",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm("確定要刪除此圖片嗎？")&&ft.dispatch("deleteBanner",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteBannerItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",pR,[gR,g("div",fR,[g("div",mR,[g("div",kR,[g("div",bR,[lt(g("select",{"onUpdate:modelValue":D[0]||(D[0]=N=>c.value=N),onChange:D[1]||(D[1]=N=>E())},CR,544),[[Fn,c.value]])])]),g("div",yR,[g("div",xR,[Et(H,{class:"btn",to:{name:"app.add-banner",params:{id:"create"}}},{default:he(()=>[_n("+ 新增輪播圖")]),_:1},8,["to"])])])]),g("div",ER,[g("table",DR,[g("thead",null,[g("tr",null,[g("th",SR,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[2]||(D[2]=N=>_.value=N),onChange:D[3]||(D[3]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[4]||(D[4]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",IR,[MR,p.value==="id"?(P(),O("div",TR,[k.value==="desc"?(P(),O("svg",BR,PR)):Q("",!0),k.value==="asc"?(P(),O("svg",OR,zR)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[5]||(D[5]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",RR,[jR,p.value==="image"?(P(),O("div",$R,[k.value==="desc"?(P(),O("svg",FR,UR)):Q("",!0),k.value==="asc"?(P(),O("svg",HR,GR)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[6]||(D[6]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",WR,[KR,p.value==="updated_at"?(P(),O("div",YR,[k.value==="desc"?(P(),O("svg",QR,JR)):Q("",!0),k.value==="asc"?(P(),O("svg",XR,e8)):Q("",!0)])):Q("",!0)])],2),n8,o8])]),J(m).loading?(P(),O("tbody",i8,r8)):(P(),O("tbody",a8,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",l8,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[7]||(D[7]=V=>v.value=V),onChange:D[8]||(D[8]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,c8),[[re,v.value]])]),g("td",d8,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,u8)):(P(),O("img",h8))]),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",p8,"隱藏")):(P(),O("span",g8,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-banner",params:{id:N.id}})},k8,8,f8),g("button",{class:"delete ml-5",onClick:V=>M(N)},w8,8,b8)])]))),128)),J(m).data.length>0?(P(),O("tr",v8,[g("td",A8,[g("div",C8,[y8,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[9]||(D[9]=N=>U())}," 一鍵刪除 ",10,x8)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",E8,[g("div",D8,"Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",S8,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,I8))),128))])])])):Q("",!0)])])}}},T8=we(M8,[["__scopeId","data-v-a7c95acc"]]);const Eo=s=>(Te("data-v-36c11651"),s=s(),Be(),s),B8={class:"addBanner"},N8={key:0},P8={key:1},O8={class:"card"},L8=Eo(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),z8={class:"form-group"},R8=Eo(()=>g("label",{for:""},"輪播圖連結",-1)),j8={class:"form-group"},$8=Eo(()=>g("label",{for:""},"輪播圖上傳",-1)),F8={for:"imagefile",class:"imagefileFor"},V8={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},U8=Eo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),H8=Eo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),q8=[U8,H8],G8={key:1},W8=Eo(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),K8=Eo(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),Y8=[W8,K8],Q8={key:2,class:"isPreview"},Z8={class:"chkbox-group"},J8={class:"form-group"},X8=Eo(()=>g("label",{for:""},"隱藏圖片",-1)),tj={key:0,class:"successMsg"},ej={class:"form-group btn-group mt-10"},nj={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},oj=Eo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ij=Eo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),sj=[oj,ij],rj={key:1},aj={key:1,class:"flex items-center justify-center py-10"},lj=Eo(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),cj=[lj],dj={key:2,class:"errorMsg"},uj={__name:"AddBanner",setup(s){const a=Uo(),c=Ze(),h={id:"",image:"",url:"",hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1),_=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const U=a.params.id;if(U==="create"){k.value=!0,A.value.id=U,M.value=!0;return}ft.dispatch("isExistBanner",U).then(T=>{T.data?ft.dispatch("getBanner",U).then(D=>{A.value=D.data,p.value=D.data.image_url,x.value=!0,k.value=!0,A.value.url=A.value.url=="null"?"":A.value.url}).then(()=>{p.value!=""&&(_.value.src=p.value)}):c.push({path:"/notfound"})}).catch(T=>{console.error(T)})});const j=U=>{if(v.value=!0,U.target.files&&U.target.files[0]){A.value.image=U.target.files[0];const T=new FileReader;T.onload=D=>{_.value.src=D.target.result},T.readAsDataURL(U.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,M.value?ft.dispatch("createBanner",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors}):ft.dispatch("updateBanner",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors})};return co(()=>A.value,U=>{E.value=null},{deep:!0}),(U,T)=>(P(),O("div",B8,[M.value?(P(),O("h1",N8,"新增輪播圖")):(P(),O("h1",P8,"編輯輪播圖")),g("div",O8,[L8,k.value?(P(),O("form",{key:0,action:"",onSubmit:T[4]||(T[4]=Qe(D=>L(),["prevent"]))},[g("div",z8,[R8,lt(g("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=D=>A.value.url=D)},null,512),[[Pt,A.value.url]])]),g("div",j8,[$8,g("label",F8,[v.value?(P(),O("svg",V8,q8)):Q("",!0),x.value?(P(),O("div",Q8,[g("img",{src:"",ref_key:"previewImg",ref:_,id:"previewImg"},null,512)])):(P(),O("div",G8,Y8))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:T[1]||(T[1]=D=>j(D))},null,32)]),g("div",Z8,[g("div",J8,[X8,lt(g("input",{type:"checkbox","onUpdate:modelValue":T[2]||(T[2]=D=>A.value.hidden=D)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",tj,xt(E.value),1)):Q("",!0),g("div",ej,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",nj,sj)):(P(),O("span",rj,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:T[3]||(T[3]=D=>J(c).push({name:"app.banners"}))}," 回列表 ")])],32)):(P(),O("div",aj,cj)),C.value?(P(),O("div",dj,[(P(!0),O(Rt,null,se(C.value,(D,H)=>(P(),O("span",{key:H},xt(D[0]),1))),128))])):Q("",!0)])]))}},hj=we(uj,[["__scopeId","data-v-36c11651"]]);const Pe=s=>(Te("data-v-5fe48ef4"),s=s(),Be(),s),pj={class:"chairmans"},gj=Pe(()=>g("pre",null,null,-1)),fj=Pe(()=>g("h1",null,"理事長的話",-1)),mj={class:"card"},kj={class:"card-header"},bj={class:"left"},_j={class:"form-group"},wj=Pe(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),vj={class:"form-group"},Aj=Pe(()=>g("option",{value:"10"},"10",-1)),Cj=Pe(()=>g("option",{value:"20"},"20",-1)),yj=Pe(()=>g("option",{value:"50"},"50",-1)),xj=Pe(()=>g("option",{value:"100"},"100",-1)),Ej=[Aj,Cj,yj,xj],Dj={class:"right"},Sj={class:"form-group"},Ij={class:"table-responsive"},Mj={class:"table table-auto w-full animate-fade-in-down"},Tj={class:"w-[20px]"},Bj={class:"flex items-center"},Nj=Pe(()=>g("div",null,"Id",-1)),Pj={key:0,class:"ml-2"},Oj={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Lj=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),zj=[Lj],Rj={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},jj=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),$j=[jj],Fj={class:"flex items-center"},Vj=Pe(()=>g("div",null,"圖片",-1)),Uj={key:0,class:"ml-2"},Hj={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},qj=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Gj=[qj],Wj={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Kj=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Yj=[Kj],Qj={class:"flex items-center"},Zj=Pe(()=>g("div",null,"姓名",-1)),Jj={key:0,class:"ml-2"},Xj={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},t$=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),e$=[t$],n$={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},o$=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),i$=[o$],s$={class:"flex items-center"},r$=Pe(()=>g("div",null,"最後更新時間",-1)),a$={key:0,class:"ml-2"},l$={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},c$=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),d$=[c$],u$={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},h$=Pe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),p$=[h$],g$=Pe(()=>g("th",null,"是否顯示",-1)),f$=Pe(()=>g("th",null,"操作",-1)),m$={key:0,class:"loadingTable"},k$=Pe(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),b$=[k$],_$={key:1},w$={class:"w-[20px]"},v$=["value"],A$={class:"w-[40px]"},C$=["src"],y$={key:1,src:vs},x$={key:0},E$={key:1,class:"active"},D$=["onClick"],S$=Pe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),I$=[S$],M$=["onClick"],T$=Pe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),B$=[T$],N$={key:0},P$={colspan:"7"},O$={class:"flex items-center"},L$=Pe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),z$=["disabled"],R$={key:0,class:"paging"},j$={class:"pageInfo"},$$={class:"pageBtn"},F$=["onClick","disabled","innerHTML"],V$={__name:"Chairman",setup(s){const a=Ze(),c=K(FL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.chairmans),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getChairmans",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm(`確定要刪除 ${T.name} 嗎？`)&&ft.dispatch("deleteChairman",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteChairmanItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",pj,[gj,fj,g("div",mj,[g("div",kj,[g("div",bj,[g("div",_j,[wj,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",vj,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},Ej,544),[[Fn,c.value]])])]),g("div",Dj,[g("div",Sj,[Et(H,{class:"btn",to:{name:"app.add-chairman",params:{id:"create"}}},{default:he(()=>[_n("+ 新增理事長")]),_:1},8,["to"])])])]),g("div",Ij,[g("table",Mj,[g("thead",null,[g("tr",null,[g("th",Tj,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",Bj,[Nj,p.value==="id"?(P(),O("div",Pj,[k.value==="desc"?(P(),O("svg",Oj,zj)):Q("",!0),k.value==="asc"?(P(),O("svg",Rj,$j)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",Fj,[Vj,p.value==="image"?(P(),O("div",Uj,[k.value==="desc"?(P(),O("svg",Hj,Gj)):Q("",!0),k.value==="asc"?(P(),O("svg",Wj,Yj)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("name")),class:_t(["cursor-pointer",{active:p.value==="name"}])},[g("div",Qj,[Zj,p.value==="name"?(P(),O("div",Jj,[k.value==="desc"?(P(),O("svg",Xj,e$)):Q("",!0),k.value==="asc"?(P(),O("svg",n$,i$)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",s$,[r$,p.value==="updated_at"?(P(),O("div",a$,[k.value==="desc"?(P(),O("svg",l$,d$)):Q("",!0),k.value==="asc"?(P(),O("svg",u$,p$)):Q("",!0)])):Q("",!0)])],2),g$,f$])]),J(m).loading?(P(),O("tbody",m$,b$)):(P(),O("tbody",_$,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",w$,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,v$),[[re,v.value]])]),g("td",A$,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,C$)):(P(),O("img",y$))]),g("td",null,xt(N.name),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",x$,"隱藏")):(P(),O("span",E$,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-chairman",params:{id:N.id}})},I$,8,D$),g("button",{class:"delete ml-5",onClick:V=>M(N)},B$,8,M$)])]))),128)),J(m).data.length>0?(P(),O("tr",N$,[g("td",P$,[g("div",O$,[L$,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,z$)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",R$,[g("div",j$," Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",$$,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,F$))),128))])])])):Q("",!0)])])}}},U$=we(V$,[["__scopeId","data-v-5fe48ef4"]]);const Xn=s=>(Te("data-v-0552c8b5"),s=s(),Be(),s),H$={class:"addChairman"},q$={key:0},G$={key:1},W$={class:"card"},K$=Xn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),Y$={class:"form-group"},Q$=Xn(()=>g("label",{for:""},"理事長名稱及抬頭",-1)),Z$={class:"form-group"},J$=Xn(()=>g("label",{for:""},"留言時間",-1)),X$={class:"form-group"},t9=Xn(()=>g("label",{for:""},"內容",-1)),e9={class:"form-group"},n9=Xn(()=>g("label",{for:""},"理事長圖片",-1)),o9={for:"imagefile",class:"imagefileFor"},i9={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},s9=Xn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),r9=Xn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),a9=[s9,r9],l9={key:1},c9=Xn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),d9=Xn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),u9=[c9,d9],h9={key:2,class:"isPreview"},p9={class:"chkbox-group"},g9={class:"form-group"},f9=Xn(()=>g("label",{for:""},"隱藏文章",-1)),m9={key:0,class:"successMsg"},k9={class:"form-group btn-group mt-10"},b9={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},_9=Xn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),w9=Xn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),v9=[_9,w9],A9={key:1},C9={key:1,class:"flex items-center justify-center py-10"},y9=Xn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),x9=[y9],E9={key:2,class:"errorMsg"},D9={__name:"AddChairman",setup(s){const a=Uo(),c=Ze(),h={id:"",name:"",message_date:"",image:"",content:"",hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1),_=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const U=a.params.id;if(U==="create"){k.value=!0,A.value.id=U,M.value=!0;return}ft.dispatch("isExistChairman",U).then(T=>{T.data?ft.dispatch("getChairman",U).then(D=>{A.value=D.data,p.value=D.data.image_url,p.value&&(x.value=!0),k.value=!0,A.value.name=A.value.name=="null"?"":A.value.name,A.value.content=A.value.content=="null"?"":A.value.content}).then(()=>{p.value!=""&&(_.value.src=p.value)}):c.push({path:"/notfound"})}).catch(T=>{console.error(T)})});const j=U=>{if(v.value=!0,U.target.files&&U.target.files[0]){A.value.image=U.target.files[0];const T=new FileReader;T.onload=D=>{_.value.src=D.target.result},T.readAsDataURL(U.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,M.value?ft.dispatch("createChairman",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors}):ft.dispatch("updateChairman",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors})};return(U,T)=>(P(),O("div",H$,[M.value?(P(),O("h1",q$,"新增理事長的話")):(P(),O("h1",G$,"編輯理事長的話")),g("div",W$,[K$,k.value?(P(),O("form",{key:0,action:"",onSubmit:T[6]||(T[6]=Qe(D=>L(),["prevent"]))},[g("div",Y$,[Q$,lt(g("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=D=>A.value.name=D)},null,512),[[Pt,A.value.name]])]),g("div",Z$,[J$,lt(g("input",{type:"text","onUpdate:modelValue":T[1]||(T[1]=D=>A.value.message_date=D)},null,512),[[Pt,A.value.message_date]])]),g("div",X$,[t9,lt(g("textarea",{"onUpdate:modelValue":T[2]||(T[2]=D=>A.value.content=D)},null,512),[[Pt,A.value.content]])]),g("div",e9,[n9,g("label",o9,[v.value?(P(),O("svg",i9,a9)):Q("",!0),x.value?(P(),O("div",h9,[g("img",{src:"",ref_key:"previewImg",ref:_,id:"previewImg"},null,512)])):(P(),O("div",l9,u9))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:T[3]||(T[3]=D=>j(D))},null,32)]),g("div",p9,[g("div",g9,[f9,lt(g("input",{type:"checkbox","onUpdate:modelValue":T[4]||(T[4]=D=>A.value.hidden=D)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",m9,xt(E.value),1)):Q("",!0),g("div",k9,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",b9,v9)):(P(),O("span",A9,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:T[5]||(T[5]=D=>J(c).push({name:"app.chairmans"}))}," 回列表 ")])],32)):(P(),O("div",C9,x9)),C.value?(P(),O("div",E9,[(P(!0),O(Rt,null,se(C.value,(D,H)=>(P(),O("span",{key:H},xt(D[0]),1))),128))])):Q("",!0)])]))}},S9=we(D9,[["__scopeId","data-v-0552c8b5"]]);const Oe=s=>(Te("data-v-5540b41f"),s=s(),Be(),s),I9={class:"organizations"},M9=Oe(()=>g("pre",null,null,-1)),T9=Oe(()=>g("h1",null,"組織架構",-1)),B9={class:"card"},N9={class:"card-header"},P9={class:"left"},O9={class:"form-group"},L9=Oe(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),z9={class:"form-group"},R9=Oe(()=>g("option",{value:"10"},"10",-1)),j9=Oe(()=>g("option",{value:"20"},"20",-1)),$9=Oe(()=>g("option",{value:"50"},"50",-1)),F9=Oe(()=>g("option",{value:"100"},"100",-1)),V9=[R9,j9,$9,F9],U9={class:"right"},H9={class:"form-group"},q9={class:"table-responsive"},G9={class:"table table-auto w-full animate-fade-in-down"},W9={class:"w-[20px]"},K9={class:"flex items-center"},Y9=Oe(()=>g("div",null,"Id",-1)),Q9={key:0,class:"ml-2"},Z9={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},J9=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),X9=[J9],tF={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},eF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),nF=[eF],oF={class:"flex items-center"},iF=Oe(()=>g("div",null,"圖片",-1)),sF={key:0,class:"ml-2"},rF={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},aF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),lF=[aF],cF={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),uF=[dF],hF={class:"flex items-center"},pF=Oe(()=>g("div",null,"標題",-1)),gF={key:0,class:"ml-2"},fF={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},mF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),kF=[mF],bF={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},_F=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),wF=[_F],vF={class:"flex items-center"},AF=Oe(()=>g("div",null,"最後更新時間",-1)),CF={key:0,class:"ml-2"},yF={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},xF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),EF=[xF],DF={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},SF=Oe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),IF=[SF],MF=Oe(()=>g("th",null,"是否顯示",-1)),TF=Oe(()=>g("th",null,"操作",-1)),BF={key:0,class:"loadingTable"},NF=Oe(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),PF=[NF],OF={key:1},LF={class:"w-[20px]"},zF=["value"],RF={class:"w-[40px]"},jF=["src"],$F={key:1,src:vs},FF={key:0},VF={key:1,class:"active"},UF=["onClick"],HF=Oe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),qF=[HF],GF=["onClick"],WF=Oe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),KF=[WF],YF={key:0},QF={colspan:"7"},ZF={class:"flex items-center"},JF=Oe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),XF=["disabled"],tV={key:0,class:"paging"},eV={class:"pageInfo"},nV={class:"pageBtn"},oV=["onClick","disabled","innerHTML"],iV={__name:"Organization",setup(s){const a=Ze(),c=K(WL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.organizations),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getOrganizations",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm("確定要刪除嗎？")&&ft.dispatch("deleteOrganization",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteOrganizationItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",I9,[M9,T9,g("div",B9,[g("div",N9,[g("div",P9,[g("div",O9,[L9,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",z9,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},V9,544),[[Fn,c.value]])])]),g("div",U9,[g("div",H9,[Et(H,{class:"btn",to:{name:"app.add-organization",params:{id:"create"}}},{default:he(()=>[_n("+ 新增組織架構")]),_:1},8,["to"])])])]),g("div",q9,[g("table",G9,[g("thead",null,[g("tr",null,[g("th",W9,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",K9,[Y9,p.value==="id"?(P(),O("div",Q9,[k.value==="desc"?(P(),O("svg",Z9,X9)):Q("",!0),k.value==="asc"?(P(),O("svg",tF,nF)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",oF,[iF,p.value==="image"?(P(),O("div",sF,[k.value==="desc"?(P(),O("svg",rF,lF)):Q("",!0),k.value==="asc"?(P(),O("svg",cF,uF)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("title")),class:_t(["cursor-pointer",{active:p.value==="title"}])},[g("div",hF,[pF,p.value==="title"?(P(),O("div",gF,[k.value==="desc"?(P(),O("svg",fF,kF)):Q("",!0),k.value==="asc"?(P(),O("svg",bF,wF)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",vF,[AF,p.value==="updated_at"?(P(),O("div",CF,[k.value==="desc"?(P(),O("svg",yF,EF)):Q("",!0),k.value==="asc"?(P(),O("svg",DF,IF)):Q("",!0)])):Q("",!0)])],2),MF,TF])]),J(m).loading?(P(),O("tbody",BF,PF)):(P(),O("tbody",OF,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",LF,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,zF),[[re,v.value]])]),g("td",RF,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,jF)):(P(),O("img",$F))]),g("td",null,xt(N.title),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",FF,"隱藏")):(P(),O("span",VF,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-organization",params:{id:N.id}})},qF,8,UF),g("button",{class:"delete ml-5",onClick:V=>M(N)},KF,8,GF)])]))),128)),J(m).data.length>0?(P(),O("tr",YF,[g("td",QF,[g("div",ZF,[JF,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,XF)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",tV,[g("div",eV," Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",nV,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,oV))),128))])])])):Q("",!0)])])}}},sV=we(iV,[["__scopeId","data-v-5540b41f"]]);const uo=s=>(Te("data-v-da85347e"),s=s(),Be(),s),rV={class:"addOrganization"},aV={key:0},lV={key:1},cV={class:"card"},dV=uo(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),uV={class:"form-group"},hV=uo(()=>g("label",{for:""},"標題",-1)),pV={class:"form-group"},gV=uo(()=>g("label",{for:""},"內容",-1)),fV={class:"form-group"},mV=uo(()=>g("label",{for:""},"圖片",-1)),kV={for:"imagefile",class:"imagefileFor"},bV={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},_V=uo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),wV=uo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),vV=[_V,wV],AV={key:1},CV=uo(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),yV=uo(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),xV=[CV,yV],EV={key:2,class:"isPreview"},DV={class:"chkbox-group"},SV={class:"form-group"},IV=uo(()=>g("label",{for:""},"隱藏文章",-1)),MV={key:0,class:"successMsg"},TV={class:"form-group btn-group mt-10"},BV={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},NV=uo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),PV=uo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),OV=[NV,PV],LV={key:1},zV={key:1,class:"flex items-center justify-center py-10"},RV=uo(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),jV=[RV],$V={key:2,class:"errorMsg"},FV={__name:"AddOrganization",setup(s){const a=Uo(),c=Ze(),h={id:"",title:"",image:"",content:"",hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1),_=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const U=a.params.id;if(U==="create"){k.value=!0,A.value.id=U,M.value=!0;return}ft.dispatch("isExistOrganization",U).then(T=>{T.data?ft.dispatch("getOrganization",U).then(D=>{A.value=D.data,p.value=D.data.image_url,p.value&&(x.value=!0),k.value=!0,A.value.title=A.value.title=="null"?"":A.value.title,A.value.content=A.value.content=="null"?"":A.value.content}).then(()=>{p.value!=""&&(_.value.src=p.value)}):c.push({path:"/notfound"})}).catch(T=>{console.error(T)})});const j=U=>{if(v.value=!0,U.target.files&&U.target.files[0]){A.value.image=U.target.files[0];const T=new FileReader;T.onload=D=>{_.value.src=D.target.result},T.readAsDataURL(U.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,M.value?ft.dispatch("createOrganization",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors}):ft.dispatch("updateOrganization",A.value).then(U=>{(U.status===200||U.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(U=>{m.value=!1,C.value=U.response.data.errors})};return(U,T)=>(P(),O("div",rV,[M.value?(P(),O("h1",aV,"新增組織架構")):(P(),O("h1",lV,"編輯組織架構")),g("div",cV,[dV,k.value?(P(),O("form",{key:0,action:"",onSubmit:T[5]||(T[5]=Qe(D=>L(),["prevent"]))},[g("div",uV,[hV,lt(g("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=D=>A.value.title=D)},null,512),[[Pt,A.value.title]])]),g("div",pV,[gV,lt(g("textarea",{"onUpdate:modelValue":T[1]||(T[1]=D=>A.value.content=D)},null,512),[[Pt,A.value.content]])]),g("div",fV,[mV,g("label",kV,[v.value?(P(),O("svg",bV,vV)):Q("",!0),x.value?(P(),O("div",EV,[g("img",{src:"",ref_key:"previewImg",ref:_,id:"previewImg"},null,512)])):(P(),O("div",AV,xV))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:T[2]||(T[2]=D=>j(D))},null,32)]),g("div",DV,[g("div",SV,[IV,lt(g("input",{type:"checkbox","onUpdate:modelValue":T[3]||(T[3]=D=>A.value.hidden=D)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",MV,xt(E.value),1)):Q("",!0),g("div",TV,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",BV,OV)):(P(),O("span",LV,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:T[4]||(T[4]=D=>J(c).push({name:"app.organization"}))}," 回列表 ")])],32)):(P(),O("div",zV,jV)),C.value?(P(),O("div",$V,[(P(!0),O(Rt,null,se(C.value,(D,H)=>(P(),O("span",{key:H},xt(D[0]),1))),128))])):Q("",!0)])]))}},VV=we(FV,[["__scopeId","data-v-da85347e"]]);const xe=s=>(Te("data-v-79dae33b"),s=s(),Be(),s),UV={class:"awardprograms"},HV=xe(()=>g("pre",null,null,-1)),qV=xe(()=>g("h1",null,"歷年獲獎名單",-1)),GV={class:"card"},WV={class:"card-header"},KV={class:"left"},YV={class:"form-group"},QV=xe(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),ZV={class:"form-group"},JV=xe(()=>g("option",{value:"10"},"10",-1)),XV=xe(()=>g("option",{value:"20"},"20",-1)),tU=xe(()=>g("option",{value:"50"},"50",-1)),eU=xe(()=>g("option",{value:"100"},"100",-1)),nU=[JV,XV,tU,eU],oU={class:"right"},iU={class:"form-group"},sU={class:"table-responsive"},rU={class:"table table-auto w-full animate-fade-in-down"},aU={class:"w-[20px]"},lU={class:"flex items-center"},cU=xe(()=>g("div",null,"Id",-1)),dU={key:0,class:"ml-2"},uU={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},hU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),pU=[hU],gU={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},fU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),mU=[fU],kU={class:"flex items-center"},bU=xe(()=>g("div",null,"年度",-1)),_U={key:0,class:"ml-2"},wU={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},vU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),AU=[vU],CU={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},yU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),xU=[yU],EU={class:"flex items-center"},DU=xe(()=>g("div",null,"獎項名稱",-1)),SU={key:0,class:"ml-2"},IU={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},MU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),TU=[MU],BU={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},NU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),PU=[NU],OU={class:"flex items-center"},LU=xe(()=>g("div",null,"獲獎者",-1)),zU={key:0,class:"ml-2"},RU={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},jU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),$U=[jU],FU={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},VU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),UU=[VU],HU={class:"flex items-center"},qU=xe(()=>g("div",null,"最後更新時間",-1)),GU={key:0,class:"ml-2"},WU={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},KU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),YU=[KU],QU={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},ZU=xe(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),JU=[ZU],XU=xe(()=>g("th",null,"是否顯示",-1)),tH=xe(()=>g("th",null,"操作",-1)),eH={key:0,class:"loadingTable"},nH=xe(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),oH=[nH],iH={key:1},sH={class:"w-[20px]"},rH=["value"],aH={class:"w-[40px]"},lH={key:0},cH={key:1,class:"active"},dH=["onClick"],uH=xe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),hH=[uH],pH=["onClick"],gH=xe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),fH=[gH],mH={key:0},kH={colspan:"7"},bH={class:"flex items-center"},_H=xe(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),wH=["disabled"],vH={key:0,class:"paging"},AH={class:"pageInfo"},CH={class:"pageBtn"},yH=["onClick","disabled","innerHTML"],xH={__name:"Awardprogram",setup(s){const a=Ze(),c=K(VL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.awardprograms),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getAwardprograms",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm("確定要刪除該項目嗎？")&&ft.dispatch("deleteAwardprogram",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteAwardprogramItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",UV,[HV,qV,g("div",GV,[g("div",WV,[g("div",KV,[g("div",YV,[QV,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",ZV,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},nU,544),[[Fn,c.value]])])]),g("div",oU,[g("div",iU,[Et(H,{class:"btn",to:{name:"app.add-award-program",params:{id:"create"}}},{default:he(()=>[_n("+ 新增項目")]),_:1},8,["to"])])])]),g("div",sU,[g("table",rU,[g("thead",null,[g("tr",null,[g("th",aU,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",lU,[cU,p.value==="id"?(P(),O("div",dU,[k.value==="desc"?(P(),O("svg",uU,pU)):Q("",!0),k.value==="asc"?(P(),O("svg",gU,mU)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("year")),class:_t(["cursor-pointer",{active:p.value==="year"}])},[g("div",kU,[bU,p.value==="year"?(P(),O("div",_U,[k.value==="desc"?(P(),O("svg",wU,AU)):Q("",!0),k.value==="asc"?(P(),O("svg",CU,xU)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("award_name")),class:_t(["cursor-pointer",{active:p.value==="award_name"}])},[g("div",EU,[DU,p.value==="award_name"?(P(),O("div",SU,[k.value==="desc"?(P(),O("svg",IU,TU)):Q("",!0),k.value==="asc"?(P(),O("svg",BU,PU)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("name")),class:_t(["cursor-pointer",{active:p.value==="name"}])},[g("div",OU,[LU,p.value==="name"?(P(),O("div",zU,[k.value==="desc"?(P(),O("svg",RU,$U)):Q("",!0),k.value==="asc"?(P(),O("svg",FU,UU)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[10]||(D[10]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",HU,[qU,p.value==="updated_at"?(P(),O("div",GU,[k.value==="desc"?(P(),O("svg",WU,YU)):Q("",!0),k.value==="asc"?(P(),O("svg",QU,JU)):Q("",!0)])):Q("",!0)])],2),XU,tH])]),J(m).loading?(P(),O("tbody",eH,oH)):(P(),O("tbody",iH,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",sH,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[11]||(D[11]=V=>v.value=V),onChange:D[12]||(D[12]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,rH),[[re,v.value]])]),g("td",aH,xt(N.id),1),g("td",null,xt(N.year),1),g("td",null,xt(N.award_name),1),g("td",null,xt(N.name),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",lH,"隱藏")):(P(),O("span",cH,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-award-program",params:{id:N.id}})},hH,8,dH),g("button",{class:"delete ml-5",onClick:V=>M(N)},fH,8,pH)])]))),128)),J(m).data.length>0?(P(),O("tr",mH,[g("td",kH,[g("div",bH,[_H,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[13]||(D[13]=N=>U())}," 一鍵刪除 ",10,wH)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",vH,[g("div",AH," Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",CH,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,yH))),128))])])])):Q("",!0)])])}}},EH=we(xH,[["__scopeId","data-v-79dae33b"]]);const In=s=>(Te("data-v-01d1b43d"),s=s(),Be(),s),DH={class:"addAwardprogram"},SH={key:0},IH={key:1},MH={class:"card"},TH=In(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),BH={class:"form-group"},NH=In(()=>g("label",{for:""},"年度",-1)),PH=rp('<option value="2020" data-v-01d1b43d>2020</option><option value="2021" data-v-01d1b43d>2021</option><option value="2022" data-v-01d1b43d>2022</option><option value="2023" data-v-01d1b43d>2023</option><option value="2024" data-v-01d1b43d>2024</option><option value="2025" data-v-01d1b43d>2025</option><option value="2026" data-v-01d1b43d>2026</option><option value="2027" data-v-01d1b43d>2027</option><option value="2028" data-v-01d1b43d>2028</option><option value="2029" data-v-01d1b43d>2029</option><option value="2030" data-v-01d1b43d>2030</option>',11),OH=[PH],LH={class:"form-group"},zH=In(()=>g("label",{for:""},"獎項名稱",-1)),RH={class:"form-group"},jH=In(()=>g("label",{for:""},"獲獎者抬頭",-1)),$H={class:"form-group"},FH=In(()=>g("label",{for:""},"服務單位",-1)),VH={class:"form-group"},UH=In(()=>g("label",{for:""},"服務單位連結",-1)),HH={class:"form-group"},qH=In(()=>g("label",{for:""},"檔案名稱",-1)),GH={class:"form-group"},WH=In(()=>g("label",{for:""},"檔案上傳",-1)),KH={for:"imagefile",class:"imagefileFor"},YH={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},QH=In(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ZH=In(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),JH=[QH,ZH],XH={key:1},tq=In(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),eq=In(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),nq=[tq,eq],oq={key:2,class:"isPreview"},iq={class:"chkbox-group"},sq={class:"form-group"},rq=In(()=>g("label",{for:""},"隱藏",-1)),aq={key:0,class:"successMsg"},lq={class:"form-group btn-group mt-10"},cq={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},dq=In(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),uq=In(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),hq=[dq,uq],pq={key:1},gq={key:1,class:"flex items-center justify-center py-10"},fq=In(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),mq=[fq],kq={key:2,class:"errorMsg"},bq={__name:"AddAwardprogram",setup(s){const a=Uo(),c=Ze(),h={id:"",year:new Date().getFullYear(),award_name:"",name:"",link:"",units:"",file:"",file_name:"",hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1);K(null);const _=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const T=a.params.id;if(T==="create"){k.value=!0,A.value.id=T,M.value=!0;return}ft.dispatch("isExistAwardprogram",T).then(D=>{D.data?ft.dispatch("getAwardprogram",T).then(H=>{A.value=H.data,p.value=H.data.file_url,x.value=!0,k.value=!0,A.value.title=A.value.title=="null"?"":A.value.title,A.value.content=A.value.content=="null"?"":A.value.content}).then(()=>{p.value!=""&&(_.value.innerText=p.value)}):c.push({path:"/notfound"})}).catch(D=>{console.error(D)})});const j=T=>{if(v.value=!0,T.target.files&&T.target.files[0]){A.value.file=T.target.files[0];const D=new FileReader;D.onload=H=>{_.value.innerText=T.target.files[0].name},D.readAsDataURL(T.target.files[0])}v.value=!1,x.value=!0},L=()=>{A.value.file="",_.value.innerText="",x.value=!1},U=()=>{m.value=!0,M.value?ft.dispatch("createAwardprogram",A.value).then(T=>{(T.status===200||T.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(T=>{m.value=!1,C.value=T.response.data.errors}):ft.dispatch("updateAwardprogram",A.value).then(T=>{(T.status===200||T.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(T=>{m.value=!1,C.value=T.response.data.errors})};return(T,D)=>(P(),O("div",DH,[M.value?(P(),O("h1",SH,"新增獎項")):(P(),O("h1",IH,"編輯獎項")),g("div",MH,[TH,k.value?(P(),O("form",{key:0,action:"",onSubmit:D[10]||(D[10]=Qe(H=>U(),["prevent"]))},[g("div",BH,[NH,lt(g("select",{"onUpdate:modelValue":D[0]||(D[0]=H=>A.value.year=H)},OH,512),[[Fn,A.value.year]])]),g("div",LH,[zH,lt(g("input",{type:"text","onUpdate:modelValue":D[1]||(D[1]=H=>A.value.award_name=H)},null,512),[[Pt,A.value.award_name]])]),g("div",RH,[jH,lt(g("input",{type:"text","onUpdate:modelValue":D[2]||(D[2]=H=>A.value.name=H)},null,512),[[Pt,A.value.name]])]),g("div",$H,[FH,lt(g("input",{type:"text","onUpdate:modelValue":D[3]||(D[3]=H=>A.value.units=H)},null,512),[[Pt,A.value.units]])]),g("div",VH,[UH,lt(g("input",{type:"text","onUpdate:modelValue":D[4]||(D[4]=H=>A.value.link=H)},null,512),[[Pt,A.value.link]])]),g("div",HH,[qH,lt(g("input",{type:"text","onUpdate:modelValue":D[5]||(D[5]=H=>A.value.file_name=H)},null,512),[[Pt,A.value.file_name]])]),g("div",GH,[WH,g("label",KH,[v.value?(P(),O("svg",YH,JH)):Q("",!0),!x.value||!A.value.file_url?(P(),O("div",XH,nq)):(P(),O("div",oq,[g("a",{href:"javascript:;",class:"deleteFileBtn",onClick:D[6]||(D[6]=H=>L())},"X"),g("p",{ref_key:"previewFi",ref:_,class:"w-[200px]"},null,512)]))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:D[7]||(D[7]=H=>j(H))},null,32)]),g("div",iq,[g("div",sq,[rq,lt(g("input",{type:"checkbox","onUpdate:modelValue":D[8]||(D[8]=H=>A.value.hidden=H)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",aq,xt(E.value),1)):Q("",!0),g("div",lq,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",cq,hq)):(P(),O("span",pq,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:D[9]||(D[9]=H=>J(c).push({name:"app.award-program"}))}," 回列表 ")])],32)):(P(),O("div",gq,mq)),C.value?(P(),O("div",kq,[(P(!0),O(Rt,null,se(C.value,(H,N)=>(P(),O("span",{key:N},xt(H[0]),1))),128))])):Q("",!0)])]))}},_q=we(bq,[["__scopeId","data-v-01d1b43d"]]);const Je=s=>(Te("data-v-a0932ba0"),s=s(),Be(),s),wq={class:"letters"},vq=Je(()=>g("pre",null,null,-1)),Aq=Je(()=>g("h1",null,"推薦書列表",-1)),Cq={class:"card"},yq={class:"card-header"},xq={class:"left"},Eq={class:"form-group"},Dq=Je(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),Sq={class:"form-group"},Iq=Je(()=>g("option",{value:"10"},"10",-1)),Mq=Je(()=>g("option",{value:"20"},"20",-1)),Tq=Je(()=>g("option",{value:"50"},"50",-1)),Bq=Je(()=>g("option",{value:"100"},"100",-1)),Nq=[Iq,Mq,Tq,Bq],Pq={class:"right"},Oq={class:"form-group"},Lq={class:"table-responsive"},zq={class:"table table-auto w-full animate-fade-in-down"},Rq={class:"w-[20px]"},jq={class:"flex items-center"},$q=Je(()=>g("div",null,"Id",-1)),Fq={key:0,class:"ml-2"},Vq={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Uq=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Hq=[Uq],qq={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Gq=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Wq=[Gq],Kq={class:"flex items-center"},Yq=Je(()=>g("div",null,"推薦書名稱",-1)),Qq={key:0,class:"ml-2"},Zq={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Jq=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Xq=[Jq],tG={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},eG=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),nG=[eG],oG={class:"flex items-center"},iG=Je(()=>g("div",null,"最後更新時間",-1)),sG={key:0,class:"ml-2"},rG={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},aG=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),lG=[aG],cG={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dG=Je(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),uG=[dG],hG=Je(()=>g("th",null,"是否顯示",-1)),pG=Je(()=>g("th",null,"操作",-1)),gG={key:0,class:"loadingTable"},fG=Je(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),mG=[fG],kG={key:1},bG={class:"w-[20px]"},_G=["value"],wG={class:"w-[40px]"},vG={key:0},AG={key:1,class:"active"},CG=["onClick"],yG=Je(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),xG=[yG],EG=["onClick"],DG=Je(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),SG=[DG],IG={key:0},MG={colspan:"7"},TG={class:"flex items-center"},BG=Je(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),NG=["disabled"],PG={key:0,class:"paging"},OG={class:"pageInfo"},LG={class:"pageBtn"},zG=["onClick","disabled","innerHTML"],RG={__name:"Letters",setup(s){const a=Ze(),c=K(M1),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.letters),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getLetters",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm("確定要刪除該項目嗎？")&&ft.dispatch("deleteLetter",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteLetterItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",wq,[vq,Aq,g("div",Cq,[g("div",yq,[g("div",xq,[g("div",Eq,[Dq,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",Sq,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},Nq,544),[[Fn,c.value]])])]),g("div",Pq,[g("div",Oq,[Et(H,{class:"btn",to:{name:"app.add-letter",params:{id:"create"}}},{default:he(()=>[_n("+ 新增推薦書")]),_:1},8,["to"])])])]),g("div",Lq,[g("table",zq,[g("thead",null,[g("tr",null,[g("th",Rq,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",jq,[$q,p.value==="id"?(P(),O("div",Fq,[k.value==="desc"?(P(),O("svg",Vq,Hq)):Q("",!0),k.value==="asc"?(P(),O("svg",qq,Wq)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("name")),class:_t(["cursor-pointer",{active:p.value==="name"}])},[g("div",Kq,[Yq,p.value==="name"?(P(),O("div",Qq,[k.value==="desc"?(P(),O("svg",Zq,Xq)):Q("",!0),k.value==="asc"?(P(),O("svg",tG,nG)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",oG,[iG,p.value==="updated_at"?(P(),O("div",sG,[k.value==="desc"?(P(),O("svg",rG,lG)):Q("",!0),k.value==="asc"?(P(),O("svg",cG,uG)):Q("",!0)])):Q("",!0)])],2),hG,pG])]),J(m).loading?(P(),O("tbody",gG,mG)):(P(),O("tbody",kG,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",bG,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[9]||(D[9]=V=>v.value=V),onChange:D[10]||(D[10]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,_G),[[re,v.value]])]),g("td",wG,xt(N.id),1),g("td",null,xt(N.name),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",vG,"隱藏")):(P(),O("span",AG,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-letter",params:{id:N.id}})},xG,8,CG),g("button",{class:"delete ml-5",onClick:V=>M(N)},SG,8,EG)])]))),128)),J(m).data.length>0?(P(),O("tr",IG,[g("td",MG,[g("div",TG,[BG,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[11]||(D[11]=N=>U())}," 一鍵刪除 ",10,NG)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",PG,[g("div",OG,"Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",LG,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,zG))),128))])])])):Q("",!0)])])}}},jG=we(RG,[["__scopeId","data-v-a0932ba0"]]);const Do=s=>(Te("data-v-89e48938"),s=s(),Be(),s),$G={class:"addLetter"},FG={key:0},VG={key:1},UG={class:"card"},HG=Do(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),qG={class:"form-group"},GG=Do(()=>g("label",{for:""},"推薦書名稱",-1)),WG={class:"form-group"},KG=Do(()=>g("label",{for:""},"推薦書檔案",-1)),YG={for:"imagefile",class:"imagefileFor"},QG={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ZG=Do(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),JG=Do(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),XG=[ZG,JG],tW={key:1},eW=Do(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),nW=Do(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),oW=[eW,nW],iW={key:2,class:"isPreview"},sW={class:"chkbox-group"},rW={class:"form-group"},aW=Do(()=>g("label",{for:""},"隱藏",-1)),lW={key:0,class:"successMsg"},cW={class:"form-group btn-group mt-10"},dW={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},uW=Do(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),hW=Do(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),pW=[uW,hW],gW={key:1},fW={key:1,class:"flex items-center justify-center py-10"},mW=Do(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),kW=[mW],bW={key:2,class:"errorMsg"},_W={__name:"AddLetter",setup(s){const a=Uo(),c=Ze(),h={id:"",name:"",file:"",hidden:!1},p=K(""),k=K(!1),m=K(!1),v=K(!1);K(null);const _=K(null),x=K(!1),C=K(null),E=K(null),A=K({...h}),M=K(!1);_e(()=>{const T=a.params.id;if(T==="create"){k.value=!0,A.value.id=T,M.value=!0;return}ft.dispatch("isExistLetter",T).then(D=>{D.data?ft.dispatch("getLetter",T).then(H=>{A.value=H.data,p.value=H.data.file_url,x.value=!0,k.value=!0,A.value.title=A.value.title=="null"?"":A.value.title,A.value.content=A.value.content=="null"?"":A.value.content}).then(()=>{p.value!=""&&(_.value.innerText=p.value)}):c.push({path:"/notfound"})}).catch(D=>{console.error(D)})});const j=T=>{if(v.value=!0,T.target.files&&T.target.files[0]){A.value.file=T.target.files[0];const D=new FileReader;D.onload=H=>{_.value.innerText=T.target.files[0].name},D.readAsDataURL(T.target.files[0])}v.value=!1,x.value=!0},L=()=>{A.value.file="",_.value.innerText="",x.value=!1},U=()=>{m.value=!0,M.value?ft.dispatch("createLetter",A.value).then(T=>{(T.status===200||T.status===201)&&(E.value="上傳成功！",C.value=null),m.value=!1}).catch(T=>{m.value=!1,C.value=T.response.data.errors}):ft.dispatch("updateLetter",A.value).then(T=>{(T.status===200||T.status===201)&&(E.value="更新成功！",C.value=null),m.value=!1}).catch(T=>{m.value=!1,C.value=T.response.data.errors})};return co(()=>A.value,T=>{E.value=null},{deep:!0}),(T,D)=>(P(),O("div",$G,[M.value?(P(),O("h1",FG,"新增推薦書")):(P(),O("h1",VG,"編輯推薦書")),g("div",UG,[HG,k.value?(P(),O("form",{key:0,action:"",onSubmit:D[5]||(D[5]=Qe(H=>U(),["prevent"]))},[g("div",qG,[GG,lt(g("input",{type:"text","onUpdate:modelValue":D[0]||(D[0]=H=>A.value.name=H)},null,512),[[Pt,A.value.name]])]),g("div",WG,[KG,g("label",YG,[v.value?(P(),O("svg",QG,XG)):Q("",!0),!x.value||!A.value.file_url?(P(),O("div",tW,oW)):(P(),O("div",iW,[g("a",{href:"javascript:;",class:"deleteFileBtn",onClick:D[1]||(D[1]=H=>L())},"X"),g("p",{ref_key:"previewFi",ref:_,class:"w-[200px]"},null,512)]))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:D[2]||(D[2]=H=>j(H))},null,32)]),g("div",sW,[g("div",rW,[aW,lt(g("input",{type:"checkbox","onUpdate:modelValue":D[3]||(D[3]=H=>A.value.hidden=H)},null,512),[[re,A.value.hidden]])])]),E.value?(P(),O("span",lW,xt(E.value),1)):Q("",!0),g("div",cW,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",dW,pW)):(P(),O("span",gW,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:D[4]||(D[4]=H=>J(c).push({name:"app.letters"}))}," 回列表 ")])],32)):(P(),O("div",fW,kW)),C.value?(P(),O("div",bW,[(P(!0),O(Rt,null,se(C.value,(H,N)=>(P(),O("span",{key:N},xt(H[0]),1))),128))])):Q("",!0)])]))}},wW=we(_W,[["__scopeId","data-v-89e48938"]]);const $e=s=>(Te("data-v-6b0c70ec"),s=s(),Be(),s),vW={class:"cstdatabases"},AW=$e(()=>g("h1",null,"碳才資料庫列表",-1)),CW={class:"card"},yW={class:"card-header"},xW={class:"left"},EW={class:"form-group"},DW=$e(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),SW={class:"form-group"},IW=$e(()=>g("option",{value:"10"},"10",-1)),MW=$e(()=>g("option",{value:"20"},"20",-1)),TW=$e(()=>g("option",{value:"50"},"50",-1)),BW=$e(()=>g("option",{value:"100"},"100",-1)),NW=[IW,MW,TW,BW],PW={class:"right"},OW={class:"form-group"},LW={class:"table-responsive"},zW={class:"table table-auto w-full animate-fade-in-down"},RW={class:"w-[20px]"},jW={class:"flex items-center"},$W=$e(()=>g("div",null,"Id",-1)),FW={key:0,class:"ml-2"},VW={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},UW=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),HW=[UW],qW={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},GW=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),WW=[GW],KW={class:"flex items-center"},YW=$e(()=>g("div",null,"姓名",-1)),QW={key:0,class:"ml-2"},ZW={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},JW=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),XW=[JW],tK={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},eK=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),nK=[eK],oK={class:"flex items-center"},iK=$e(()=>g("div",null,"服務單位",-1)),sK={key:0,class:"ml-2"},rK={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},aK=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),lK=[aK],cK={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dK=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),uK=[dK],hK={class:"flex items-center"},pK=$e(()=>g("div",null,"最後更新時間",-1)),gK={key:0,class:"ml-2"},fK={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},mK=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),kK=[mK],bK={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},_K=$e(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),wK=[_K],vK=$e(()=>g("th",null,"是否顯示",-1)),AK=$e(()=>g("th",null,"操作",-1)),CK={key:0,class:"loadingTable"},yK=$e(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),xK=[yK],EK={key:1},DK={class:"w-[20px]"},SK=["value"],IK={class:"w-[40px]"},MK={key:0},TK={key:1,class:"active"},BK=["onClick"],NK=$e(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),PK=[NK],OK=["onClick"],LK=$e(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),zK=[LK],RK={key:0},jK={colspan:"7"},$K={class:"flex items-center"},FK=$e(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),VK=["disabled"],UK={key:0,class:"paging"},HK={class:"pageInfo"},qK={class:"pageBtn"},GK=["onClick","disabled","innerHTML"],WK={__name:"CstDatabase",setup(s){const a=Ze(),c=K(UL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.cstdatabases),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getCstDatabases",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm("確定要刪除該項目嗎？")&&ft.dispatch("deleteCstDatabase",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteCstDatabaseItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",vW,[AW,g("div",CW,[g("div",yW,[g("div",xW,[g("div",EW,[DW,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",SW,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},NW,544),[[Fn,c.value]])])]),g("div",PW,[g("div",OW,[Et(H,{class:"btn",to:{name:"app.add-cst-database",params:{id:"create"}}},{default:he(()=>[_n("+ 新增碳才資料庫")]),_:1},8,["to"])])])]),g("div",LW,[g("table",zW,[g("thead",null,[g("tr",null,[g("th",RW,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",jW,[$W,p.value==="id"?(P(),O("div",FW,[k.value==="desc"?(P(),O("svg",VW,HW)):Q("",!0),k.value==="asc"?(P(),O("svg",qW,WW)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("name")),class:_t(["cursor-pointer",{active:p.value==="name"}])},[g("div",KW,[YW,p.value==="name"?(P(),O("div",QW,[k.value==="desc"?(P(),O("svg",ZW,XW)):Q("",!0),k.value==="asc"?(P(),O("svg",tK,nK)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("units")),class:_t(["cursor-pointer",{active:p.value==="units"}])},[g("div",oK,[iK,p.value==="units"?(P(),O("div",sK,[k.value==="desc"?(P(),O("svg",rK,lK)):Q("",!0),k.value==="asc"?(P(),O("svg",cK,uK)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",hK,[pK,p.value==="updated_at"?(P(),O("div",gK,[k.value==="desc"?(P(),O("svg",fK,kK)):Q("",!0),k.value==="asc"?(P(),O("svg",bK,wK)):Q("",!0)])):Q("",!0)])],2),vK,AK])]),J(m).loading?(P(),O("tbody",CK,xK)):(P(),O("tbody",EK,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",DK,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,SK),[[re,v.value]])]),g("td",IK,xt(N.id),1),g("td",null,xt(N.name),1),g("td",null,xt(N.units),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",MK,"隱藏")):(P(),O("span",TK,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-cst-database",params:{id:N.id}})},PK,8,BK),g("button",{class:"delete ml-5",onClick:V=>M(N)},zK,8,OK)])]))),128)),J(m).data.length>0?(P(),O("tr",RK,[g("td",jK,[g("div",$K,[FK,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,VK)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",UK,[g("div",HK," Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",qK,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,GK))),128))])])])):Q("",!0)])])}}},KK=we(WK,[["__scopeId","data-v-6b0c70ec"]]);const Fe=s=>(Te("data-v-a60ee706"),s=s(),Be(),s),YK={class:"addCstDatabase"},QK={key:0},ZK={key:1},JK={class:"card"},XK=Fe(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),tY={class:"form-group"},eY=Fe(()=>g("label",{for:""},"姓名",-1)),nY={class:"form-group"},oY=Fe(()=>g("label",{for:""},"服務單位",-1)),iY={class:"form-group"},sY=Fe(()=>g("label",{for:""},"職稱",-1)),rY={class:"form-group"},aY=Fe(()=>g("label",{for:""},"研究領域",-1)),lY={class:"form-group"},cY=Fe(()=>g("label",{for:""},"相關連結1(可選)",-1)),dY={class:"flex"},uY={class:"form-group w-[50%] mr-2"},hY=Fe(()=>g("label",{for:""},"按鈕名稱",-1)),pY={class:"form-group w-[50%] ml-2"},gY=Fe(()=>g("label",{for:""},"網址連結",-1)),fY={class:"form-group"},mY=Fe(()=>g("label",{for:""},"相關連結2(可選)",-1)),kY={class:"flex"},bY={class:"form-group w-[50%] mr-2"},_Y=Fe(()=>g("label",{for:""},"按鈕名稱",-1)),wY={class:"form-group w-[50%] ml-2"},vY=Fe(()=>g("label",{for:""},"網址連結",-1)),AY={class:"form-group"},CY=Fe(()=>g("label",{for:""},"相關連結3(可選)",-1)),yY={class:"flex"},xY={class:"form-group w-[50%] mr-2"},EY=Fe(()=>g("label",{for:""},"按鈕名稱",-1)),DY={class:"form-group w-[50%] ml-2"},SY=Fe(()=>g("label",{for:""},"網址連結",-1)),IY={class:"form-group"},MY=Fe(()=>g("label",{for:""},"相關連結4(可選)",-1)),TY={class:"flex"},BY={class:"form-group w-[50%] mr-2"},NY=Fe(()=>g("label",{for:""},"按鈕名稱",-1)),PY={class:"form-group w-[50%] ml-2"},OY=Fe(()=>g("label",{for:""},"網址連結",-1)),LY={class:"form-group"},zY=Fe(()=>g("label",{for:""},"相關連結5(可選)",-1)),RY={class:"flex"},jY={class:"form-group w-[50%] mr-2"},$Y=Fe(()=>g("label",{for:""},"按鈕名稱",-1)),FY={class:"form-group w-[50%] ml-2"},VY=Fe(()=>g("label",{for:""},"網址連結",-1)),UY={class:"chkbox-group"},HY={class:"form-group"},qY=Fe(()=>g("label",{for:""},"隱藏",-1)),GY={key:0,class:"successMsg"},WY={class:"form-group btn-group mt-10"},KY={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},YY=Fe(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),QY=Fe(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),ZY=[YY,QY],JY={key:1},XY={key:1,class:"flex items-center justify-center py-10"},tQ=Fe(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),eQ=[tQ],nQ={key:2,class:"errorMsg"},oQ={__name:"AddCstDatabase",setup(s){const a=Uo(),c=Ze(),h={id:"",name:"",job_title:"",units:"",field:"",button_1:"",link_1:"",button_2:"",link_2:"",button_3:"",link_3:"",button_4:"",link_4:"",button_5:"",link_5:"",hidden:!1},p=K(""),k=K(!1),m=K(!1);K(!1),K(null);const v=K(!1),_=K(null),x=K(null),C=K({...h}),E=K(!1);_e(()=>{const M=a.params.id;if(M==="create"){k.value=!0,C.value.id=M,E.value=!0;return}ft.dispatch("isExistCstDatabase",M).then(j=>{j.data?ft.dispatch("getCstDatabase",M).then(L=>{console.log(L),C.value=L.data,p.value=L.data.image_url,v.value=!0,k.value=!0,C.value.button_1=C.value.button_1=="null"?"":C.value.button_1,C.value.link_1=C.value.link_1=="null"?"":C.value.link_1,C.value.button_2=C.value.button_2=="null"?"":C.value.button_2,C.value.link_2=C.value.link_2=="null"?"":C.value.link_2,C.value.button_3=C.value.button_3=="null"?"":C.value.button_3,C.value.link_3=C.value.link_3=="null"?"":C.value.link_3,C.value.button_4=C.value.button_4=="null"?"":C.value.button_4,C.value.link_4=C.value.link_4=="null"?"":C.value.link_4,C.value.button_5=C.value.button_5=="null"?"":C.value.button_5,C.value.link_5=C.value.link_5=="null"?"":C.value.link_5}):c.push({path:"/notfound"})}).catch(j=>{console.error(j)})});const A=()=>{m.value=!0,E.value?ft.dispatch("createCstDatabase",C.value).then(M=>{(M.status===200||M.status===201)&&(x.value="上傳成功！",_.value=null),m.value=!1}).catch(M=>{m.value=!1,_.value=M.response.data.errors}):ft.dispatch("updateCstDatabase",C.value).then(M=>{(M.status===200||M.status===201)&&(x.value="更新成功！",_.value=null),m.value=!1}).catch(M=>{m.value=!1,_.value=M.response.data.errors})};return(M,j)=>(P(),O("div",YK,[E.value?(P(),O("h1",QK,"新增碳才資料庫")):(P(),O("h1",ZK,"編輯碳才資料庫")),g("div",JK,[XK,k.value?(P(),O("form",{key:0,action:"",onSubmit:j[16]||(j[16]=Qe(L=>A(),["prevent"]))},[g("div",tY,[eY,lt(g("input",{type:"text","onUpdate:modelValue":j[0]||(j[0]=L=>C.value.name=L)},null,512),[[Pt,C.value.name]])]),g("div",nY,[oY,lt(g("input",{type:"text","onUpdate:modelValue":j[1]||(j[1]=L=>C.value.units=L)},null,512),[[Pt,C.value.units]])]),g("div",iY,[sY,lt(g("input",{type:"text","onUpdate:modelValue":j[2]||(j[2]=L=>C.value.job_title=L)},null,512),[[Pt,C.value.job_title]])]),g("div",rY,[aY,lt(g("input",{type:"text","onUpdate:modelValue":j[3]||(j[3]=L=>C.value.field=L)},null,512),[[Pt,C.value.field]])]),g("div",lY,[cY,g("div",dY,[g("div",uY,[hY,lt(g("input",{type:"text","onUpdate:modelValue":j[4]||(j[4]=L=>C.value.button_1=L)},null,512),[[Pt,C.value.button_1]])]),g("div",pY,[gY,lt(g("input",{type:"text","onUpdate:modelValue":j[5]||(j[5]=L=>C.value.link_1=L)},null,512),[[Pt,C.value.link_1]])])])]),g("div",fY,[mY,g("div",kY,[g("div",bY,[_Y,lt(g("input",{type:"text","onUpdate:modelValue":j[6]||(j[6]=L=>C.value.button_2=L)},null,512),[[Pt,C.value.button_2]])]),g("div",wY,[vY,lt(g("input",{type:"text","onUpdate:modelValue":j[7]||(j[7]=L=>C.value.link_2=L)},null,512),[[Pt,C.value.link_2]])])])]),g("div",AY,[CY,g("div",yY,[g("div",xY,[EY,lt(g("input",{type:"text","onUpdate:modelValue":j[8]||(j[8]=L=>C.value.button_3=L)},null,512),[[Pt,C.value.button_3]])]),g("div",DY,[SY,lt(g("input",{type:"text","onUpdate:modelValue":j[9]||(j[9]=L=>C.value.link_3=L)},null,512),[[Pt,C.value.link_3]])])])]),g("div",IY,[MY,g("div",TY,[g("div",BY,[NY,lt(g("input",{type:"text","onUpdate:modelValue":j[10]||(j[10]=L=>C.value.button_4=L)},null,512),[[Pt,C.value.button_4]])]),g("div",PY,[OY,lt(g("input",{type:"text","onUpdate:modelValue":j[11]||(j[11]=L=>C.value.link_4=L)},null,512),[[Pt,C.value.link_4]])])])]),g("div",LY,[zY,g("div",RY,[g("div",jY,[$Y,lt(g("input",{type:"text","onUpdate:modelValue":j[12]||(j[12]=L=>C.value.button_5=L)},null,512),[[Pt,C.value.button_5]])]),g("div",FY,[VY,lt(g("input",{type:"text","onUpdate:modelValue":j[13]||(j[13]=L=>C.value.link_5=L)},null,512),[[Pt,C.value.link_5]])])])]),g("div",UY,[g("div",HY,[qY,lt(g("input",{type:"checkbox","onUpdate:modelValue":j[14]||(j[14]=L=>C.value.hidden=L)},null,512),[[re,C.value.hidden]])])]),x.value?(P(),O("span",GY,xt(x.value),1)):Q("",!0),g("div",WY,[g("button",{type:"submit",class:_t({loading:m.value})},[m.value?(P(),O("svg",KY,ZY)):(P(),O("span",JY,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:j[15]||(j[15]=L=>J(c).push({name:"app.cst-database"}))}," 回列表 ")])],32)):(P(),O("div",XY,eQ)),_.value?(P(),O("div",nQ,[(P(!0),O(Rt,null,se(_.value,(L,U)=>(P(),O("span",{key:U},xt(L[0]),1))),128))])):Q("",!0)])]))}},iQ=we(oQ,[["__scopeId","data-v-a60ee706"]]);const Le=s=>(Te("data-v-dbe226b7"),s=s(),Be(),s),sQ={class:"cstSeminars"},rQ=Le(()=>g("pre",null,null,-1)),aQ=Le(()=>g("h1",null,"最新消息列表",-1)),lQ={class:"card"},cQ={class:"card-header"},dQ={class:"left"},uQ={class:"form-group"},hQ=Le(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),pQ={class:"form-group"},gQ=Le(()=>g("option",{value:"10"},"10",-1)),fQ=Le(()=>g("option",{value:"20"},"20",-1)),mQ=Le(()=>g("option",{value:"50"},"50",-1)),kQ=Le(()=>g("option",{value:"100"},"100",-1)),bQ=[gQ,fQ,mQ,kQ],_Q={class:"right"},wQ={class:"form-group"},vQ={class:"table-responsive"},AQ={class:"table table-auto w-full animate-fade-in-down"},CQ={class:"w-[20px]"},yQ={class:"flex items-center"},xQ=Le(()=>g("div",null,"Id",-1)),EQ={key:0,class:"ml-2"},DQ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},SQ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),IQ=[SQ],MQ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},TQ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),BQ=[TQ],NQ={class:"flex items-center"},PQ=Le(()=>g("div",null,"圖片",-1)),OQ={key:0,class:"ml-2"},LQ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},zQ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),RQ=[zQ],jQ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},$Q=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),FQ=[$Q],VQ={class:"flex items-center"},UQ=Le(()=>g("div",null,"標題",-1)),HQ={key:0,class:"ml-2"},qQ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},GQ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),WQ=[GQ],KQ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},YQ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),QQ=[YQ],ZQ={class:"flex items-center"},JQ=Le(()=>g("div",null,"最後更新時間",-1)),XQ={key:0,class:"ml-2"},tZ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},eZ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),nZ=[eZ],oZ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},iZ=Le(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),sZ=[iZ],rZ=Le(()=>g("th",null,"是否顯示",-1)),aZ=Le(()=>g("th",null,"操作",-1)),lZ={key:0,class:"loadingTable"},cZ=Le(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),dZ=[cZ],uZ={key:1},hZ={class:"w-[20px]"},pZ=["value"],gZ={class:"w-[40px]"},fZ=["src"],mZ={key:1,src:vs},kZ={key:0},bZ={key:1,class:"active"},_Z=["onClick"],wZ=Le(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),vZ=[wZ],AZ=["onClick"],CZ=Le(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),yZ=[CZ],xZ={key:0},EZ={colspan:"7"},DZ={class:"flex items-center"},SZ=Le(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),IZ=["disabled"],MZ={key:0,class:"paging"},TZ={class:"pageInfo"},BZ={class:"pageBtn"},NZ=["onClick","disabled","innerHTML"],PZ={__name:"CstSeminar",setup(s){const a=Ze(),c=K(HL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.cstseminars),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getCstSeminars",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm(`確定要刪除 ${T.title} 嗎？`)&&ft.dispatch("deleteCstSeminar",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteCstSeminarItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",sQ,[rQ,aQ,g("div",lQ,[g("div",cQ,[g("div",dQ,[g("div",uQ,[hQ,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",pQ,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},bQ,544),[[Fn,c.value]])])]),g("div",_Q,[g("div",wQ,[Et(H,{class:"btn",to:{name:"app.add-cst-seminar",params:{id:"create"}}},{default:he(()=>[_n("+ 新增文章")]),_:1},8,["to"])])])]),g("div",vQ,[g("table",AQ,[g("thead",null,[g("tr",null,[g("th",CQ,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",yQ,[xQ,p.value==="id"?(P(),O("div",EQ,[k.value==="desc"?(P(),O("svg",DQ,IQ)):Q("",!0),k.value==="asc"?(P(),O("svg",MQ,BQ)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",NQ,[PQ,p.value==="image"?(P(),O("div",OQ,[k.value==="desc"?(P(),O("svg",LQ,RQ)):Q("",!0),k.value==="asc"?(P(),O("svg",jQ,FQ)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("title")),class:_t(["cursor-pointer",{active:p.value==="title"}])},[g("div",VQ,[UQ,p.value==="title"?(P(),O("div",HQ,[k.value==="desc"?(P(),O("svg",qQ,WQ)):Q("",!0),k.value==="asc"?(P(),O("svg",KQ,QQ)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",ZQ,[JQ,p.value==="updated_at"?(P(),O("div",XQ,[k.value==="desc"?(P(),O("svg",tZ,nZ)):Q("",!0),k.value==="asc"?(P(),O("svg",oZ,sZ)):Q("",!0)])):Q("",!0)])],2),rZ,aZ])]),J(m).loading?(P(),O("tbody",lZ,dZ)):(P(),O("tbody",uZ,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",hZ,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,pZ),[[re,v.value]])]),g("td",gZ,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,fZ)):(P(),O("img",mZ))]),g("td",null,xt(N.title),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",kZ,"隱藏")):(P(),O("span",bZ,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-cst-seminar",params:{id:N.id}})},vZ,8,_Z),g("button",{class:"delete ml-5",onClick:V=>M(N)},yZ,8,AZ)])]))),128)),J(m).data.length>0?(P(),O("tr",xZ,[g("td",EZ,[g("div",DZ,[SZ,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,IZ)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",MZ,[g("div",TZ," Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",BZ,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,NZ))),128))])])])):Q("",!0)])])}}},OZ=we(PZ,[["__scopeId","data-v-dbe226b7"]]);const an=s=>(Te("data-v-59bfe7b6"),s=s(),Be(),s),LZ={class:"addCstSeminar"},zZ={key:0},RZ={key:1},jZ={class:"card"},$Z=an(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),FZ={class:"form-group"},VZ=an(()=>g("label",{for:""},"研討會標題",-1)),UZ={class:"form-group"},HZ=an(()=>g("label",{for:""},"研討會內容",-1)),qZ={class:"form-group"},GZ=an(()=>g("label",{for:""},"大會網站連結",-1)),WZ={class:"form-group"},KZ=an(()=>g("label",{for:""},"研討會封面圖片",-1)),YZ={for:"imagefile",class:"imagefileFor"},QZ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ZZ=an(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),JZ=an(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),XZ=[ZZ,JZ],tJ={key:1},eJ=an(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),nJ=an(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),oJ=[eJ,nJ],iJ={key:2,class:"isPreview"},sJ={class:"form-group"},rJ=an(()=>g("label",{for:""},"研討會其他圖片",-1)),aJ={for:"imagefiles",class:"imagefileFor"},lJ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},cJ=an(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),dJ=an(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),uJ=[cJ,dJ],hJ={key:1},pJ=an(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),gJ=an(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),fJ=[pJ,gJ],mJ={class:"form-group"},kJ=an(()=>g("label",{for:""},"預覽圖片",-1)),bJ={class:"prviews"},_J=["src"],wJ=["onClick"],vJ=an(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),AJ=[vJ],CJ={class:"chkbox-group"},yJ={class:"form-group"},xJ=an(()=>g("label",{for:""},"隱藏文章",-1)),EJ={key:0,class:"successMsg"},DJ={class:"form-group btn-group mt-10"},SJ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},IJ=an(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),MJ=an(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),TJ=[IJ,MJ],BJ={key:1},NJ={key:1,class:"flex items-center justify-center py-10"},PJ=an(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),OJ=[PJ],LJ={key:2,class:"errorMsg"},zJ={__name:"AddCstSeminar",setup(s){const a=Uo(),c=Ze(),h={id:"",title:"",link:"",image:"",images:[],content:"",category:0,hidden:!1},p=K(""),k=K([]),m=K(!1),v=K(!1),_=K(!1),x=K(!1),C=K(null),E=K(null),A=K(!1),M=K(null),j=K(null),L=K({...h}),U=K(!1);_e(()=>{const G=a.params.id;if(G==="create"){m.value=!0,L.value.id=G,U.value=!0;return}ft.dispatch("isExistCstSeminar",G).then(V=>{V.data?ft.dispatch("getCstSeminar",G).then(q=>{L.value=q.data,p.value=q.data.image_url,console.log(q.data.images_url),q.data.images_url==""||q.data.images_url==null?k.value=null:k.value=q.data.images_url.split(","),p.value&&(A.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.link=L.value.link=="null"?"":L.value.link}).then(()=>{p.value!=""&&(C.value.src=p.value)}):c.push({path:"/notfound"})}).catch(V=>{console.error(V)})});const T=G=>{if(_.value=!0,G.target.files&&G.target.files[0]){L.value.image=G.target.files[0];const V=new FileReader;V.onload=q=>{C.value.src=q.target.result},V.readAsDataURL(G.target.files[0])}_.value=!1,A.value=!0},D=G=>{if(x.value=!0,console.log(G.target.files),G.target.files&&G.target.files[0]){Array.from(G.target.files).forEach(V=>{L.value.images.push(V)});for(let V=0;V<G.target.files.length;V++){const q=new FileReader;q.onload=z=>{const X=document.createElement("img");X.src=z.target.result,E.value.appendChild(X)},q.readAsDataURL(G.target.files[V])}}x.value=!1},H=G=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(G,1)},N=()=>{v.value=!0,U.value?ft.dispatch("createCstSeminar",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="上傳成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}):(L.value.ori_images=k.value,ft.dispatch("updateCstSeminar",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="更新成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}))};return(G,V)=>(P(),O("div",LZ,[U.value?(P(),O("h1",zZ,"新增研討會")):(P(),O("h1",RZ,"編輯研討會")),g("div",jZ,[$Z,m.value?(P(),O("form",{key:0,action:"",onSubmit:V[7]||(V[7]=Qe(q=>N(),["prevent"]))},[g("div",FZ,[VZ,lt(g("input",{type:"text","onUpdate:modelValue":V[0]||(V[0]=q=>L.value.title=q)},null,512),[[Pt,L.value.title]])]),g("div",UZ,[HZ,lt(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":V[1]||(V[1]=q=>L.value.content=q)},null,512),[[Pt,L.value.content]])]),g("div",qZ,[GZ,lt(g("input",{type:"text","onUpdate:modelValue":V[2]||(V[2]=q=>L.value.link=q)},null,512),[[Pt,L.value.link]])]),g("div",WZ,[KZ,g("label",YZ,[_.value?(P(),O("svg",QZ,XZ)):Q("",!0),A.value?(P(),O("div",iJ,[g("img",{src:"",ref_key:"previewImg",ref:C,id:"previewImg"},null,512)])):(P(),O("div",tJ,oJ))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:V[3]||(V[3]=q=>T(q))},null,32)]),g("div",sJ,[rJ,g("label",aJ,[x.value?(P(),O("svg",lJ,uJ)):Q("",!0),(P(),O("div",hJ,fJ))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:V[4]||(V[4]=q=>D(q))},null,32)]),g("div",mJ,[kJ,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",bJ,[(P(!0),O(Rt,null,se(k.value,(q,z)=>(P(),O("div",{class:"imgbox",key:q},[g("img",{src:q},null,8,_J),(P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:X=>H(z)},AJ,8,wJ))]))),128))])]),g("div",CJ,[g("div",yJ,[xJ,lt(g("input",{type:"checkbox","onUpdate:modelValue":V[5]||(V[5]=q=>L.value.hidden=q)},null,512),[[re,L.value.hidden]])])]),j.value?(P(),O("span",EJ,xt(j.value),1)):Q("",!0),g("div",DJ,[g("button",{type:"submit",class:_t({loading:v.value})},[v.value?(P(),O("svg",SJ,TJ)):(P(),O("span",BJ,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:V[6]||(V[6]=q=>J(c).push({name:"app.cst-seminar"}))}," 回列表 ")])],32)):(P(),O("div",NJ,OJ)),M.value?(P(),O("div",LJ,[(P(!0),O(Rt,null,se(M.value,(q,z)=>(P(),O("span",{key:z},xt(q[0]),1))),128))])):Q("",!0)])]))}},RJ=we(zJ,[["__scopeId","data-v-59bfe7b6"]]);const ze=s=>(Te("data-v-1bc82586"),s=s(),Be(),s),jJ={class:"overseas"},$J=ze(()=>g("pre",null,null,-1)),FJ=ze(()=>g("h1",null,"國內外研討會",-1)),VJ={class:"card"},UJ={class:"card-header"},HJ={class:"left"},qJ={class:"form-group"},GJ=ze(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),WJ={class:"form-group"},KJ=ze(()=>g("option",{value:"10"},"10",-1)),YJ=ze(()=>g("option",{value:"20"},"20",-1)),QJ=ze(()=>g("option",{value:"50"},"50",-1)),ZJ=ze(()=>g("option",{value:"100"},"100",-1)),JJ=[KJ,YJ,QJ,ZJ],XJ={class:"right"},tX={class:"form-group"},eX={class:"table-responsive"},nX={class:"table table-auto w-full animate-fade-in-down"},oX={class:"w-[20px]"},iX={class:"flex items-center"},sX=ze(()=>g("div",null,"Id",-1)),rX={key:0,class:"ml-2"},aX={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},lX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),cX=[lX],dX={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},uX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),hX=[uX],pX={class:"flex items-center"},gX=ze(()=>g("div",null,"圖片",-1)),fX={key:0,class:"ml-2"},mX={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},kX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),bX=[kX],_X={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},wX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),vX=[wX],AX={class:"flex items-center"},CX=ze(()=>g("div",null,"標題",-1)),yX={key:0,class:"ml-2"},xX={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},EX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),DX=[EX],SX={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},IX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),MX=[IX],TX={class:"flex items-center"},BX=ze(()=>g("div",null,"最後更新時間",-1)),NX={key:0,class:"ml-2"},PX={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},OX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),LX=[OX],zX={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},RX=ze(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),jX=[RX],$X=ze(()=>g("th",null,"是否顯示",-1)),FX=ze(()=>g("th",null,"操作",-1)),VX={key:0,class:"loadingTable"},UX=ze(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),HX=[UX],qX={key:1},GX={class:"w-[20px]"},WX=["value"],KX={class:"w-[40px]"},YX=["src"],QX={key:1,src:vs},ZX={key:0},JX={key:1,class:"active"},XX=["onClick"],ttt=ze(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),ett=[ttt],ntt=["onClick"],ott=ze(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),itt=[ott],stt={key:0},rtt={colspan:"7"},att={class:"flex items-center"},ltt=ze(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),ctt=["disabled"],dtt={key:0,class:"paging"},utt={class:"pageInfo"},htt={class:"pageBtn"},ptt=["onClick","disabled","innerHTML"],gtt={__name:"Oversea",setup(s){const a=Ze(),c=K(qL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.overseas),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getOverseas",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm(`確定要刪除 ${T.title} 嗎？`)&&ft.dispatch("deleteOversea",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteOverseaItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",jJ,[$J,FJ,g("div",VJ,[g("div",UJ,[g("div",HJ,[g("div",qJ,[GJ,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",WJ,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},JJ,544),[[Fn,c.value]])])]),g("div",XJ,[g("div",tX,[Et(H,{class:"btn",to:{name:"app.add-oversea",params:{id:"create"}}},{default:he(()=>[_n("+ 新增研討會")]),_:1},8,["to"])])])]),g("div",eX,[g("table",nX,[g("thead",null,[g("tr",null,[g("th",oX,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",iX,[sX,p.value==="id"?(P(),O("div",rX,[k.value==="desc"?(P(),O("svg",aX,cX)):Q("",!0),k.value==="asc"?(P(),O("svg",dX,hX)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",pX,[gX,p.value==="image"?(P(),O("div",fX,[k.value==="desc"?(P(),O("svg",mX,bX)):Q("",!0),k.value==="asc"?(P(),O("svg",_X,vX)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("title")),class:_t(["cursor-pointer",{active:p.value==="title"}])},[g("div",AX,[CX,p.value==="title"?(P(),O("div",yX,[k.value==="desc"?(P(),O("svg",xX,DX)):Q("",!0),k.value==="asc"?(P(),O("svg",SX,MX)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",TX,[BX,p.value==="updated_at"?(P(),O("div",NX,[k.value==="desc"?(P(),O("svg",PX,LX)):Q("",!0),k.value==="asc"?(P(),O("svg",zX,jX)):Q("",!0)])):Q("",!0)])],2),$X,FX])]),J(m).loading?(P(),O("tbody",VX,HX)):(P(),O("tbody",qX,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",GX,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,WX),[[re,v.value]])]),g("td",KX,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,YX)):(P(),O("img",QX))]),g("td",null,xt(N.title),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",ZX,"隱藏")):(P(),O("span",JX,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-oversea",params:{id:N.id}})},ett,8,XX),g("button",{class:"delete ml-5",onClick:V=>M(N)},itt,8,ntt)])]))),128)),J(m).data.length>0?(P(),O("tr",stt,[g("td",rtt,[g("div",att,[ltt,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,ctt)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",dtt,[g("div",utt,"Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",htt,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,ptt))),128))])])])):Q("",!0)])])}}},ftt=we(gtt,[["__scopeId","data-v-1bc82586"]]);const ln=s=>(Te("data-v-a0546dc7"),s=s(),Be(),s),mtt={class:"addOversea"},ktt={key:0},btt={key:1},_tt={class:"card"},wtt=ln(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),vtt={class:"form-group"},Att=ln(()=>g("label",{for:""},"文章標題",-1)),Ctt={class:"form-group"},ytt=ln(()=>g("label",{for:""},"文章內容",-1)),xtt={class:"form-group"},Ett=ln(()=>g("label",{for:""},"研討會連結",-1)),Dtt={class:"form-group"},Stt=ln(()=>g("label",{for:""},"文章圖片",-1)),Itt={for:"imagefile",class:"imagefileFor"},Mtt={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ttt=ln(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Btt=ln(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Ntt=[Ttt,Btt],Ptt={key:1},Ott=ln(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),Ltt=ln(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),ztt=[Ott,Ltt],Rtt={key:2,class:"isPreview"},jtt={class:"form-group"},$tt=ln(()=>g("label",{for:""},"研討會其他圖片",-1)),Ftt={for:"imagefiles",class:"imagefileFor"},Vtt={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Utt=ln(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Htt=ln(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),qtt=[Utt,Htt],Gtt={key:1},Wtt=ln(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),Ktt=ln(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),Ytt=[Wtt,Ktt],Qtt={class:"form-group"},Ztt=ln(()=>g("label",{for:""},"預覽圖片",-1)),Jtt={class:"prviews"},Xtt=["src"],tet=["onClick"],eet=ln(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),net=[eet],oet={class:"chkbox-group"},iet={class:"form-group"},set=ln(()=>g("label",{for:""},"隱藏文章",-1)),ret={key:0,class:"successMsg"},aet={class:"form-group btn-group mt-10"},cet={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},det=ln(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),uet=ln(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),het=[det,uet],pet={key:1},get={key:1,class:"flex items-center justify-center py-10"},fet=ln(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),met=[fet],ket={key:2,class:"errorMsg"},bet={__name:"AddOversea",setup(s){const a=Uo(),c=Ze(),h={id:"",title:"",link:"",image:"",images:[],content:"",category:0,hidden:!1},p=K(""),k=K([]),m=K(!1),v=K(!1),_=K(!1),x=K(!1),C=K(null),E=K(null),A=K(!1),M=K(null),j=K(null),L=K({...h}),U=K(!1);_e(()=>{const G=a.params.id;if(G==="create"){m.value=!0,L.value.id=G,U.value=!0;return}ft.dispatch("isExistOversea",G).then(V=>{V.data?ft.dispatch("getOversea",G).then(q=>{L.value=q.data,p.value=q.data.image_url,q.data.images_url==""||q.data.images_url==null?k.value=null:k.value=q.data.images_url.split(","),p.value&&(A.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.link=L.value.link=="null"?"":L.value.link}).then(()=>{p.value!=""&&(C.value.src=p.value)}):c.push({path:"/notfound"})}).catch(V=>{console.error(V)})});const T=G=>{if(_.value=!0,G.target.files&&G.target.files[0]){L.value.image=G.target.files[0];const V=new FileReader;V.onload=q=>{C.value.src=q.target.result},V.readAsDataURL(G.target.files[0])}_.value=!1,A.value=!0},D=G=>{if(x.value=!0,G.target.files&&G.target.files[0]){Array.from(G.target.files).forEach(V=>{L.value.images.push(V)});for(let V=0;V<G.target.files.length;V++){const q=new FileReader;q.onload=z=>{const X=document.createElement("img");X.src=z.target.result,E.value.appendChild(X)},q.readAsDataURL(G.target.files[V])}}x.value=!1},H=G=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(G,1)},N=()=>{v.value=!0,U.value?ft.dispatch("createOversea",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="上傳成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}):(L.value.ori_images=k.value,ft.dispatch("updateOversea",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="更新成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}))};return(G,V)=>(P(),O("div",mtt,[U.value?(P(),O("h1",ktt,"新增研討會")):(P(),O("h1",btt,"編輯研討會")),g("div",_tt,[wtt,m.value?(P(),O("form",{key:0,action:"",onSubmit:V[7]||(V[7]=Qe(q=>N(),["prevent"]))},[g("div",vtt,[Att,lt(g("input",{type:"text","onUpdate:modelValue":V[0]||(V[0]=q=>L.value.title=q)},null,512),[[Pt,L.value.title]])]),g("div",Ctt,[ytt,lt(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":V[1]||(V[1]=q=>L.value.content=q)},null,512),[[Pt,L.value.content]])]),g("div",xtt,[Ett,lt(g("input",{type:"text","onUpdate:modelValue":V[2]||(V[2]=q=>L.value.link=q)},null,512),[[Pt,L.value.link]])]),g("div",Dtt,[Stt,g("label",Itt,[_.value?(P(),O("svg",Mtt,Ntt)):Q("",!0),A.value?(P(),O("div",Rtt,[g("img",{src:"",ref_key:"previewImg",ref:C,id:"previewImg"},null,512)])):(P(),O("div",Ptt,ztt))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:V[3]||(V[3]=q=>T(q))},null,32)]),g("div",jtt,[$tt,g("label",Ftt,[x.value?(P(),O("svg",Vtt,qtt)):Q("",!0),(P(),O("div",Gtt,Ytt))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:V[4]||(V[4]=q=>D(q))},null,32)]),g("div",Qtt,[Ztt,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",Jtt,[(P(!0),O(Rt,null,se(k.value,(q,z)=>(P(),O("div",{class:"imgbox",key:q},[g("img",{src:q},null,8,Xtt),(P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:X=>H(z)},net,8,tet))]))),128))])]),g("div",oet,[g("div",iet,[set,lt(g("input",{type:"checkbox","onUpdate:modelValue":V[5]||(V[5]=q=>L.value.hidden=q)},null,512),[[re,L.value.hidden]])])]),j.value?(P(),O("span",ret,xt(j.value),1)):Q("",!0),g("div",aet,[g("button",{type:"submit",class:_t({loading:v.value})},[v.value?(P(),O("svg",cet,het)):(P(),O("span",pet,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:V[6]||(V[6]=q=>J(c).push({name:"app.overseas"}))}," 回列表 ")])],32)):(P(),O("div",get,met)),M.value?(P(),O("div",ket,[(P(!0),O(Rt,null,se(M.value,(q,z)=>(P(),O("span",{key:z},xt(q[0]),1))),128))])):Q("",!0)])]))}},_et=we(bet,[["__scopeId","data-v-a0546dc7"]]);const Re=s=>(Te("data-v-d00c367d"),s=s(),Be(),s),wet={class:"forums"},vet=Re(()=>g("pre",null,null,-1)),Aet=Re(()=>g("h1",null,"碳材料論壇列表",-1)),Cet={class:"card"},yet={class:"card-header"},xet={class:"left"},Eet={class:"form-group"},Det=Re(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),Iet={class:"form-group"},Met=Re(()=>g("option",{value:"10"},"10",-1)),Tet=Re(()=>g("option",{value:"20"},"20",-1)),Bet=Re(()=>g("option",{value:"50"},"50",-1)),Net=Re(()=>g("option",{value:"100"},"100",-1)),Pet=[Met,Tet,Bet,Net],Oet={class:"right"},Let={class:"form-group"},zet={class:"table-responsive"},Ret={class:"table table-auto w-full animate-fade-in-down"},jet={class:"w-[20px]"},$et={class:"flex items-center"},Fet=Re(()=>g("div",null,"Id",-1)),Vet={key:0,class:"ml-2"},Uet={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Het=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),qet=[Het],Get={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Wet=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Ket=[Wet],Yet={class:"flex items-center"},Qet=Re(()=>g("div",null,"圖片",-1)),Zet={key:0,class:"ml-2"},Jet={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Xet=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),tnt=[Xet],ent={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},nnt=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),ont=[nnt],int={class:"flex items-center"},snt=Re(()=>g("div",null,"標題",-1)),rnt={key:0,class:"ml-2"},ant={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},lnt=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),cnt=[lnt],dnt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},unt=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),hnt=[unt],pnt={class:"flex items-center"},gnt=Re(()=>g("div",null,"最後更新時間",-1)),fnt={key:0,class:"ml-2"},mnt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},knt=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),bnt=[knt],_nt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},wnt=Re(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),vnt=[wnt],Ant=Re(()=>g("th",null,"是否顯示",-1)),Cnt=Re(()=>g("th",null,"操作",-1)),ynt={key:0,class:"loadingTable"},xnt=Re(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),Ent=[xnt],Dnt={key:1},Snt={class:"w-[20px]"},Int=["value"],Mnt={class:"w-[40px]"},Tnt=["src"],Bnt={key:1,src:vs},Nnt={key:0},Pnt={key:1,class:"active"},Ont=["onClick"],Lnt=Re(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),znt=[Lnt],Rnt=["onClick"],jnt=Re(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),$nt=[jnt],Fnt={key:0},Vnt={colspan:"7"},Unt={class:"flex items-center"},Hnt=Re(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),qnt=["disabled"],Gnt={key:0,class:"paging"},Wnt={class:"pageInfo"},Knt={class:"pageBtn"},Ynt=["onClick","disabled","innerHTML"],Qnt={__name:"Forum",setup(s){const a=Ze(),c=K(GL),h=K(""),p=K("updated_at"),k=K("desc"),m=te(()=>ft.state.forums),v=K([]),_=K(!1),x=K(null);_e(()=>{E()});const C=(T,D)=>{!D.url||D.active||E(D.url)},E=(T=null)=>{ft.dispatch("getForums",{url:T,sort_field:p.value,sort_direction:k.value,search:h.value,perPage:c.value})},A=T=>{p.value=T,p.value===T?k.value==="asc"?k.value="desc":k.value="asc":(p.value=T,k.value="asc"),E()},M=T=>{confirm(`確定要刪除 ${T.title} 嗎？`)&&ft.dispatch("deleteForum",T.id).then(D=>{alert("刪除成功！"),E()})},j=()=>{v.value.length<m.value.total&&(_.value=!1)},L=()=>{_.value?x.value.forEach(T=>{v.value.push(T.value)}):x.value.forEach(T=>{v.value=[]})},U=()=>{confirm("確定刪除？")&&ft.dispatch("deleteForumItems",v.value).then(T=>{alert("刪除成功！"),E(),v.value=[]})};return(T,D)=>{const H=Tn("router-link");return P(),O("div",wet,[vet,Aet,g("div",Cet,[g("div",yet,[g("div",xet,[g("div",Eet,[Det,lt(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=N=>h.value=N),onChange:D[1]||(D[1]=N=>E())},null,544),[[Pt,h.value]])]),g("div",Iet,[lt(g("select",{"onUpdate:modelValue":D[2]||(D[2]=N=>c.value=N),onChange:D[3]||(D[3]=N=>E())},Pet,544),[[Fn,c.value]])])]),g("div",Oet,[g("div",Let,[Et(H,{class:"btn",to:{name:"app.add-forum",params:{id:"create"}}},{default:he(()=>[_n("+ 新增碳材料論壇")]),_:1},8,["to"])])])]),g("div",zet,[g("table",Ret,[g("thead",null,[g("tr",null,[g("th",jet,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=N=>_.value=N),onChange:D[5]||(D[5]=N=>L())},null,544),[[re,_.value]])]),g("th",{onClick:D[6]||(D[6]=N=>A("id")),class:_t(["w-[40px]","cursor-pointer",{active:p.value==="id"}])},[g("div",$et,[Fet,p.value==="id"?(P(),O("div",Vet,[k.value==="desc"?(P(),O("svg",Uet,qet)):Q("",!0),k.value==="asc"?(P(),O("svg",Get,Ket)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[7]||(D[7]=N=>A("image")),class:_t(["cursor-pointer",{active:p.value==="image"}])},[g("div",Yet,[Qet,p.value==="image"?(P(),O("div",Zet,[k.value==="desc"?(P(),O("svg",Jet,tnt)):Q("",!0),k.value==="asc"?(P(),O("svg",ent,ont)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[8]||(D[8]=N=>A("title")),class:_t(["cursor-pointer",{active:p.value==="title"}])},[g("div",int,[snt,p.value==="title"?(P(),O("div",rnt,[k.value==="desc"?(P(),O("svg",ant,cnt)):Q("",!0),k.value==="asc"?(P(),O("svg",dnt,hnt)):Q("",!0)])):Q("",!0)])],2),g("th",{onClick:D[9]||(D[9]=N=>A("updated_at")),class:_t(["cursor-pointer",{active:p.value==="updated_at"}])},[g("div",pnt,[gnt,p.value==="updated_at"?(P(),O("div",fnt,[k.value==="desc"?(P(),O("svg",mnt,bnt)):Q("",!0),k.value==="asc"?(P(),O("svg",_nt,vnt)):Q("",!0)])):Q("",!0)])],2),Ant,Cnt])]),J(m).loading?(P(),O("tbody",ynt,Ent)):(P(),O("tbody",Dnt,[(P(!0),O(Rt,null,se(J(m).data,(N,G)=>(P(),O("tr",{key:N.id,class:"animate-fade-in-down"},[g("td",Snt,[lt(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=V=>v.value=V),onChange:D[11]||(D[11]=V=>j()),ref_for:!0,ref_key:"checkItem",ref:x,value:N.id},null,40,Int),[[re,v.value]])]),g("td",Mnt,xt(N.id),1),g("td",null,[N.image_url?(P(),O("img",{key:0,src:N.image_url},null,8,Tnt)):(P(),O("img",Bnt))]),g("td",null,xt(N.title),1),g("td",null,xt(N.updated_at),1),g("td",null,[N.hidden?(P(),O("span",Nnt,"隱藏")):(P(),O("span",Pnt,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:V=>J(a).push({name:"app.add-forum",params:{id:N.id}})},znt,8,Ont),g("button",{class:"delete ml-5",onClick:V=>M(N)},$nt,8,Rnt)])]))),128)),J(m).data.length>0?(P(),O("tr",Fnt,[g("td",Vnt,[g("div",Unt,[Hnt,g("button",{class:_t([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=N=>U())}," 一鍵刪除 ",10,qnt)])])])):Q("",!0)]))])]),J(m).total>J(m).limit?(P(),O("div",Gnt,[g("div",Wnt,"Showing from "+xt(J(m).from)+" to "+xt(J(m).to),1),g("div",Knt,[g("nav",null,[(P(!0),O(Rt,null,se(J(m).links,(N,G)=>(P(),O("a",{href:"#",key:G,onClick:Qe(V=>C(V,N),["prevent"]),disabled:!N.url,class:_t([{active:N.active},{disabled:!N.url}]),innerHTML:N.label},null,10,Ynt))),128))])])])):Q("",!0)])])}}},Znt=we(Qnt,[["__scopeId","data-v-d00c367d"]]);const ae=s=>(Te("data-v-1f7eebd2"),s=s(),Be(),s),Jnt={class:"addForum"},Xnt={key:0},tot={key:1},eot={class:"card"},not=ae(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),oot={class:"form-group"},iot=ae(()=>g("label",{for:""},"論壇標題",-1)),sot={class:"form-group"},rot=ae(()=>g("label",{for:""},"論壇內容",-1)),aot={class:"form-group"},lot=ae(()=>g("label",{for:""},"文章圖片",-1)),cot={for:"imagefile",class:"imagefileFor"},dot={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},uot=ae(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),hot=ae(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),pot=[uot,hot],got={key:1},fot=ae(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),mot=ae(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),kot=[fot,mot],bot={key:2,class:"isPreview"},_ot={class:"form-group"},wot=ae(()=>g("label",{for:""},"論壇其他圖片",-1)),vot={for:"imagefiles",class:"imagefileFor"},Aot={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Cot=ae(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),yot=ae(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),xot=[Cot,yot],Eot={key:1},Dot=ae(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),Sot=ae(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),Iot=[Dot,Sot],Mot={class:"form-group"},Tot=ae(()=>g("label",{for:""},"預覽圖片",-1)),Bot={class:"prviews"},Not=["src"],Pot=["onClick"],Oot=ae(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),Lot=[Oot],zot={class:"form-group"},Rot=ae(()=>g("label",{for:""},"相關連結1(可選)",-1)),jot={class:"flex"},$ot={class:"form-group w-[50%] mr-2"},Fot=ae(()=>g("label",{for:""},"按鈕名稱",-1)),Vot={class:"form-group w-[50%] ml-2"},Uot=ae(()=>g("label",{for:""},"網址連結",-1)),Hot={class:"form-group"},qot=ae(()=>g("label",{for:""},"相關連結2(可選)",-1)),Got={class:"flex"},Wot={class:"form-group w-[50%] mr-2"},Kot=ae(()=>g("label",{for:""},"按鈕名稱",-1)),Yot={class:"form-group w-[50%] ml-2"},Qot=ae(()=>g("label",{for:""},"網址連結",-1)),Zot={class:"form-group"},Jot=ae(()=>g("label",{for:""},"相關連結3(可選)",-1)),Xot={class:"flex"},tit={class:"form-group w-[50%] mr-2"},eit=ae(()=>g("label",{for:""},"按鈕名稱",-1)),nit={class:"form-group w-[50%] ml-2"},oit=ae(()=>g("label",{for:""},"網址連結",-1)),iit={class:"form-group"},sit=ae(()=>g("label",{for:""},"相關連結4(可選)",-1)),rit={class:"flex"},ait={class:"form-group w-[50%] mr-2"},lit=ae(()=>g("label",{for:""},"按鈕名稱",-1)),cit={class:"form-group w-[50%] ml-2"},dit=ae(()=>g("label",{for:""},"網址連結",-1)),uit={class:"form-group"},hit=ae(()=>g("label",{for:""},"相關連結5(可選)",-1)),pit={class:"flex"},git={class:"form-group w-[50%] mr-2"},fit=ae(()=>g("label",{for:""},"按鈕名稱",-1)),mit={class:"form-group w-[50%] ml-2"},kit=ae(()=>g("label",{for:""},"網址連結",-1)),bit={class:"chkbox-group"},_it={class:"form-group"},wit=ae(()=>g("label",{for:""},"隱藏",-1)),vit={key:0,class:"successMsg"},Ait={class:"form-group btn-group mt-10"},Cit={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},yit=ae(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),xit=ae(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Eit=[yit,xit],Dit={key:1},Sit={key:1,class:"flex items-center justify-center py-10"},Iit=ae(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),Mit=[Iit],Tit={key:2,class:"errorMsg"},Bit={__name:"AddForum",setup(s){const a=Uo(),c=Ze(),h={id:"",title:"",image:"",images:[],content:"",button_1:"",link_1:"",button_2:"",link_2:"",button_3:"",link_3:"",button_4:"",link_4:"",button_5:"",link_5:"",hidden:!1},p=K(""),k=K([]),m=K(!1),v=K(!1),_=K(!1),x=K(!1),C=K(null),E=K(null),A=K(!1),M=K(null),j=K(null),L=K({...h}),U=K(!1);_e(()=>{const G=a.params.id;if(G==="create"){m.value=!0,L.value.id=G,U.value=!0;return}ft.dispatch("isExistForum",G).then(V=>{V.data?ft.dispatch("getForum",G).then(q=>{L.value=q.data,p.value=q.data.image_url,q.data.images_url==""||q.data.images_url==null?k.value=null:k.value=q.data.images_url.split(","),p.value&&(A.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.button_1=L.value.button_1=="null"?"":L.value.button_1,L.value.link_1=L.value.link_1=="null"?"":L.value.link_1,L.value.button_2=L.value.button_2=="null"?"":L.value.button_2,L.value.link_2=L.value.link_2=="null"?"":L.value.link_2,L.value.button_3=L.value.button_3=="null"?"":L.value.button_3,L.value.link_3=L.value.link_3=="null"?"":L.value.link_3,L.value.button_4=L.value.button_4=="null"?"":L.value.button_4,L.value.link_4=L.value.link_4=="null"?"":L.value.link_4,L.value.button_5=L.value.button_5=="null"?"":L.value.button_5,L.value.link_5=L.value.link_5=="null"?"":L.value.link_5}).then(()=>{p.value!=""&&(C.value.src=p.value)}):c.push({path:"/notfound"})}).catch(V=>{console.error(V)})});const T=G=>{if(_.value=!0,G.target.files&&G.target.files[0]){L.value.image=G.target.files[0];const V=new FileReader;V.onload=q=>{C.value.src=q.target.result},V.readAsDataURL(G.target.files[0])}_.value=!1,A.value=!0},D=G=>{if(x.value=!0,G.target.files&&G.target.files[0]){Array.from(G.target.files).forEach(V=>{L.value.images.push(V)});for(let V=0;V<G.target.files.length;V++){const q=new FileReader;q.onload=z=>{const X=document.createElement("img");X.src=z.target.result,E.value.appendChild(X)},q.readAsDataURL(G.target.files[V])}}x.value=!1},H=G=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(G,1)},N=()=>{v.value=!0,U.value?ft.dispatch("createForum",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="上傳成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}):(L.value.ori_images=k.value,ft.dispatch("updateForum",L.value).then(G=>{(G.status===200||G.status===201)&&(j.value="更新成功！",M.value=null),v.value=!1}).catch(G=>{v.value=!1,M.value=G.response.data.errors}))};return(G,V)=>(P(),O("div",Jnt,[U.value?(P(),O("h1",Xnt,"新增碳材料論壇")):(P(),O("h1",tot,"編輯碳材料論壇")),g("div",eot,[not,m.value?(P(),O("form",{key:0,action:"",onSubmit:V[16]||(V[16]=Qe(q=>N(),["prevent"]))},[g("div",oot,[iot,lt(g("input",{type:"text","onUpdate:modelValue":V[0]||(V[0]=q=>L.value.title=q)},null,512),[[Pt,L.value.title]])]),g("div",sot,[rot,lt(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":V[1]||(V[1]=q=>L.value.content=q)},null,512),[[Pt,L.value.content]])]),g("div",aot,[lot,g("label",cot,[_.value?(P(),O("svg",dot,pot)):Q("",!0),A.value?(P(),O("div",bot,[g("img",{src:"",ref_key:"previewImg",ref:C,id:"previewImg"},null,512)])):(P(),O("div",got,kot))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:V[2]||(V[2]=q=>T(q))},null,32)]),g("div",_ot,[wot,g("label",vot,[x.value?(P(),O("svg",Aot,xot)):Q("",!0),(P(),O("div",Eot,Iot))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:V[3]||(V[3]=q=>D(q))},null,32)]),g("div",Mot,[Tot,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",Bot,[(P(!0),O(Rt,null,se(k.value,(q,z)=>(P(),O("div",{class:"imgbox",key:q},[g("img",{src:q},null,8,Not),(P(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:X=>H(z)},Lot,8,Pot))]))),128))])]),g("div",zot,[Rot,g("div",jot,[g("div",$ot,[Fot,lt(g("input",{type:"text","onUpdate:modelValue":V[4]||(V[4]=q=>L.value.button_1=q)},null,512),[[Pt,L.value.button_1]])]),g("div",Vot,[Uot,lt(g("input",{type:"text","onUpdate:modelValue":V[5]||(V[5]=q=>L.value.link_1=q)},null,512),[[Pt,L.value.link_1]])])])]),g("div",Hot,[qot,g("div",Got,[g("div",Wot,[Kot,lt(g("input",{type:"text","onUpdate:modelValue":V[6]||(V[6]=q=>L.value.button_2=q)},null,512),[[Pt,L.value.button_2]])]),g("div",Yot,[Qot,lt(g("input",{type:"text","onUpdate:modelValue":V[7]||(V[7]=q=>L.value.link_2=q)},null,512),[[Pt,L.value.link_2]])])])]),g("div",Zot,[Jot,g("div",Xot,[g("div",tit,[eit,lt(g("input",{type:"text","onUpdate:modelValue":V[8]||(V[8]=q=>L.value.button_3=q)},null,512),[[Pt,L.value.button_3]])]),g("div",nit,[oit,lt(g("input",{type:"text","onUpdate:modelValue":V[9]||(V[9]=q=>L.value.link_3=q)},null,512),[[Pt,L.value.link_3]])])])]),g("div",iit,[sit,g("div",rit,[g("div",ait,[lit,lt(g("input",{type:"text","onUpdate:modelValue":V[10]||(V[10]=q=>L.value.button_4=q)},null,512),[[Pt,L.value.button_4]])]),g("div",cit,[dit,lt(g("input",{type:"text","onUpdate:modelValue":V[11]||(V[11]=q=>L.value.link_4=q)},null,512),[[Pt,L.value.link_4]])])])]),g("div",uit,[hit,g("div",pit,[g("div",git,[fit,lt(g("input",{type:"text","onUpdate:modelValue":V[12]||(V[12]=q=>L.value.button_5=q)},null,512),[[Pt,L.value.button_5]])]),g("div",mit,[kit,lt(g("input",{type:"text","onUpdate:modelValue":V[13]||(V[13]=q=>L.value.link_5=q)},null,512),[[Pt,L.value.link_5]])])])]),g("div",bit,[g("div",_it,[wit,lt(g("input",{type:"checkbox","onUpdate:modelValue":V[14]||(V[14]=q=>L.value.hidden=q)},null,512),[[re,L.value.hidden]])])]),j.value?(P(),O("span",vit,xt(j.value),1)):Q("",!0),g("div",Ait,[g("button",{type:"submit",class:_t({loading:v.value})},[v.value?(P(),O("svg",Cit,Eit)):(P(),O("span",Dit,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:V[15]||(V[15]=q=>J(c).push({name:"app.forums"}))}," 回列表 ")])],32)):(P(),O("div",Sit,Mit)),M.value?(P(),O("div",Tit,[(P(!0),O(Rt,null,se(M.value,(q,z)=>(P(),O("span",{key:z},xt(q[0]),1))),128))])):Q("",!0)])]))}},Nit=we(Bit,[["__scopeId","data-v-1f7eebd2"]]);const _r=s=>(Te("data-v-5269dac6"),s=s(),Be(),s),Pit={class:"login"},Oit=_r(()=>g("div",{class:"darken"},null,-1)),Lit={class:"main"},zit=_r(()=>g("h1",null,"Carbon 後臺管理系統",-1)),Rit={class:"form-group"},jit=_r(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])],-1)),$it={class:"form-group"},Fit=_r(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])],-1)),Vit={class:"commit-text"},Uit={for:"remember"},Hit={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},qit=_r(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Git=_r(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Wit=[qit,Git],Kit={key:1},Yit={key:0,class:"errorMsg"},Qit={__name:"Login",setup(s){const a=Ze(),c=K(!1),h=K(""),p={email:"",password:"",remember:!1},k=()=>{c.value=!0,ft.dispatch("login",p).then(()=>{c.value=!1,a.push({name:"app.dashboard"})}).catch(({response:m})=>{c.value=!1,console.log(m),h.value=m.data.message})};return(m,v)=>(P(),O("div",Pit,[Oit,g("div",Lit,[zit,g("form",{onSubmit:v[3]||(v[3]=Qe(_=>k(),["prevent"]))},[g("div",Rit,[jit,lt(g("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":v[0]||(v[0]=_=>p.email=_)},null,512),[[Pt,p.email]])]),g("div",$it,[Fit,lt(g("input",{type:"password",name:"password",placeholder:"Password","onUpdate:modelValue":v[1]||(v[1]=_=>p.password=_)},null,512),[[Pt,p.password]])]),g("div",Vit,[g("label",Uit,[lt(g("input",{type:"checkbox",id:"remember","onUpdate:modelValue":v[2]||(v[2]=_=>p.remember=_)},null,512),[[re,p.remember]]),_n(" 記住我 ")])]),g("button",{type:"submit",class:_t({loading:c.value}),disabled:!1},[c.value?(P(),O("svg",Hit,Wit)):(P(),O("span",Kit,"Login"))],2)],32),h.value?(P(),O("div",Yit,[g("p",null,xt(h.value),1)])):Q("",!0)])]))}},Zit=we(Qit,[["__scopeId","data-v-5269dac6"]]),Jit=[{path:"/",name:"app",component:LL,meta:{requiresAuth:!0},children:[{path:"",name:"app.dashboard",component:jL},{path:"articles",name:"app.articles",component:yz},{path:"add-articles/:id",name:"app.add-article",component:hR},{path:"banners",name:"app.banners",component:T8},{path:"add-banner/:id",name:"app.add-banner",component:hj},{path:"chairmans",name:"app.chairmans",component:U$},{path:"add-chairman/:id",name:"app.add-chairman",component:S9},{path:"organization",name:"app.organization",component:sV},{path:"add-organization/:id",name:"app.add-organization",component:VV},{path:"award-program",name:"app.award-program",component:EH},{path:"add-award-program/:id",name:"app.add-award-program",component:_q},{path:"letter",name:"app.letters",component:jG},{path:"add-letter/:id",name:"app.add-letter",component:wW},{path:"cst-database",name:"app.cst-database",component:KK},{path:"add-cst-database/:id",name:"app.add-cst-database",component:iQ},{path:"cst-seminar",name:"app.cst-seminar",component:OZ},{path:"add-cst-seminar/:id",name:"app.add-cst-seminar",component:RJ},{path:"overseas",name:"app.overseas",component:ftt},{path:"add-oversea/:id",name:"app.add-oversea",component:_et},{path:"forums",name:"app.forums",component:Znt},{path:"add-forum/:id",name:"app.add-forum",component:Nit}]},{path:"/login",name:"login",component:Zit,meta:{requiresGuest:!0}}],xp=cO({history:xP(),routes:Jit});xp.beforeEach((s,a,c)=>{s.meta.requiresAuth&&!ft.state.user.token?c({name:"login"}):s.meta.requiresGuest&&ft.state.user.token?c({name:"app.dashboard"}):c()});const It=rP.create({baseURL:"https://carboncst.com/api"});It.interceptors.request.use(s=>(s.headers.Authorization=`Bearer ${ft.state.user.token}`,s),s=>Promise.reject(s));It.interceptors.response.use(s=>s,s=>{throw s.response.status===401&&(ft.commit("setToken",null),sessionStorage.removeItem("TOKEN"),xp.push({name:"login"})),s});function Xit({commit:s},a){return It.post("login",a).then(c=>(s("setUser",c.data.user),s("setToken",c.data.token),a))}function tst({commit:s}){return It.post("logout").then(a=>(s("setToken",null),a))}function est({commit:s}){return It.get("/user").then(a=>(s("setUser",a.data),a))}function nst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setArticles",[!0]),a=a||"/articles",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setArticles",[!1,m.data])}).catch(m=>{s("setArticles",[!1])})}function ost({commit:s},a){return It.get(`/articles/${a}`)}function ist({commit:s},a){const c=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("title",a.title),h.append("image",a.image),h.append("content",a.content),h.append("category",a.category),h.append("hidden",c),a=h}return It.post("/articles",a)}function sst({commit:s},a){return It.post("/isExistArticle",{id:a}).then(c=>c)}function rst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("id",a.id),p.append("title",a.title),p.append("image",a.image),p.append("content",a.content),p.append("category",a.category),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/articles/${c}`,a)}function ast({commit:s},a){return It.delete(`/articles/${a}`)}function lst({commit:s},a){return It.post("/articleItems",{ids:a})}function cst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setBanners",[!0]),a=a||"/banners",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setBanners",[!1,m.data])}).catch(m=>{s("setBanners",[!1])})}function dst({commit:s},a){return It.get(`/banners/${a}`)}function ust({commit:s},a){const c=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("url",a.url),h.append("image",a.image),h.append("hidden",c),a=h}return It.post("/banners",a)}function hst({commit:s},a){return It.post("/isExistBanner",{id:a}).then(c=>c)}function pst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("id",a.id),p.append("url",a.url),p.append("image",a.image),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/banners/${c}`,a)}function gst({commit:s},a){return It.delete(`/banners/${a}`)}function fst({commit:s},a){return It.post("/bannerItems",{ids:a})}function mst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setChairmans",[!0]),a=a||"/chairmans",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setChairmans",[!1,m.data])}).catch(m=>{s("setChairmans",[!1])})}function kst({commit:s},a){return It.get(`/chairmans/${a}`)}function bst({commit:s},a){const c=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("name",a.name),h.append("message_date",a.message_date),h.append("content",a.content),h.append("image",a.image),h.append("hidden",c),a=h}return It.post("/chairmans",a)}function _st({commit:s},a){return It.post("/isExistChairman",{id:a}).then(c=>c)}function wst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("id",a.id),p.append("name",a.name),p.append("message_date",a.message_date),p.append("content",a.content),p.append("image",a.image),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/chairmans/${c}`,a)}function vst({commit:s},a){return It.delete(`/chairmans/${a}`)}function Ast({commit:s},a){return It.post("/chairmanItems",{ids:a})}function Cst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setOrganizations",[!0]),a=a||"/organizations",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setOrganizations",[!1,m.data])}).catch(m=>{s("setOrganizations",[!1])})}function yst({commit:s},a){return It.get(`/organizations/${a}`)}function xst({commit:s},a){console.log(a);const c=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("title",a.title),h.append("content",a.content),h.append("image",a.image),h.append("hidden",c),a=h}return It.post("/organizations",a)}function Est({commit:s},a){return It.post("/isExistOrganization",{id:a}).then(c=>c)}function Dst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("id",a.id),p.append("title",a.title),p.append("content",a.content),p.append("image",a.image),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/organizations/${c}`,a)}function Sst({commit:s},a){return It.delete(`/organizations/${a}`)}function Ist({commit:s},a){return It.post("/organizationItems",{ids:a})}function Mst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setAwardprograms",[!0]),a=a||"/awardprograms",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setAwardprograms",[!1,m.data])}).catch(m=>{s("setAwardprograms",[!1])})}function Tst({commit:s},a){return It.get(`/awardprograms/${a}`)}function Bst({commit:s},a){const c=a.hidden?1:0,h=new FormData;return h.append("name",a.name),h.append("award_name",a.award_name),h.append("year",a.year),h.append("units",a.units),h.append("link",a.link),h.append("file",a.file),h.append("file_name",a.file_name),h.append("hidden",c),a=h,It.post("/awardprograms",a)}function Nst({commit:s},a){return It.post("/isExistAwardprogram",{id:a}).then(c=>c)}function Pst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.file instanceof File){const p=new FormData;p.append("id",a.id),p.append("name",a.name),p.append("award_name",a.award_name),p.append("year",a.year),p.append("link",a.link),p.append("units",a.units),p.append("file",a.file),p.append("file_name",a.file_name),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/awardprograms/${c}`,a)}function Ost({commit:s},a){return It.delete(`/awardprograms/${a}`)}function Lst({commit:s},a){return It.post("/awardprogramItems",{ids:a})}function zst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setLetters",[!0]),a=a||"/letters",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setLetters",[!1,m.data])}).catch(m=>{s("setLetters",[!1])})}function Rst({commit:s},a){return It.get(`/letters/${a}`)}function jst({commit:s},a){const c=a.hidden?1:0;if(a.file instanceof File){const h=new FormData;h.append("name",a.name),h.append("file",a.file),h.append("hidden",c),a=h}return It.post("/letters",a)}function $st({commit:s},a){return It.post("/isExistLetter",{id:a}).then(c=>c)}function Fst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.file instanceof File){const p=new FormData;p.append("id",a.id),p.append("name",a.name),p.append("file",a.file),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/letters/${c}`,a)}function Vst({commit:s},a){return It.delete(`/letters/${a}`)}function Ust({commit:s},a){return It.post("/letterItems",{ids:a})}function Hst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setCstDatabases",[!0]),a=a||"/cstDatabases",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setCstDatabases",[!1,m.data])}).catch(m=>{s("setCstDatabases",[!1])})}function qst({commit:s},a){return It.get(`/cstDatabases/${a}`)}function Gst({commit:s},a){const c=a.hidden?1:0;if(a.file instanceof File){const h=new FormData;h.append("name",a.name),h.append("units",a.units),h.append("job_title",a.job_title),h.append("field",a.field),h.append("button_1",a.button_1),h.append("link_1",a.link_1),h.append("button_2",a.button_2),h.append("link_2",a.link_2),h.append("button_3",a.button_3),h.append("link_3",a.link_3),h.append("button_4",a.button_4),h.append("link_4",a.link_4),h.append("button_5",a.button_5),h.append("link_5",a.link_5),h.append("hidden",c),a=h}return It.post("/cstDatabases",a)}function Wst({commit:s},a){return It.post("/isExistCstDatabase",{id:a}).then(c=>c)}function Kst({commit:s},a){const c=a.id,h=a.hidden?1:0;if(a.file instanceof File){const p=new FormData;p.append("id",a.id),p.append("name",a.name),p.append("units",a.units),p.append("job_title",a.job_title),p.append("field",a.field),p.append("button_1",a.button_1),p.append("link_1",a.link_1),p.append("button_2",a.button_2),p.append("link_2",a.link_2),p.append("button_3",a.button_3),p.append("link_3",a.link_3),p.append("button_4",a.button_4),p.append("link_4",a.link_4),p.append("button_5",a.button_5),p.append("link_5",a.link_5),p.append("hidden",h),p.append("_method","PUT"),a=p}else a._method="PUT";return It.post(`/cstDatabases/${c}`,a)}function Yst({commit:s},a){return It.delete(`/cstDatabases/${a}`)}function Qst({commit:s},a){return It.post("/cstdatabaseItems",{ids:a})}function Zst({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setCstSeminars",[!0]),a=a||"/cstSeminars",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setCstSeminars",[!1,m.data])}).catch(m=>{s("setCstSeminars",[!1])})}function Jst({commit:s},a){return It.get(`/cstSeminars/${a}`)}function Xst({commit:s},a){const c=a.hidden?1:0;let h=-1;const p=new FormData;return p.append("title",a.title),p.append("link",a.link),p.append("image",a.image),a.images.forEach((k,m)=>{p.append(`images${m}`,k),h++}),p.append("imagesNum",h),p.append("content",a.content),p.append("hidden",c),a=p,It.post("/cstSeminars",a)}function trt({commit:s},a){return It.post("/isExistCstSeminar",{id:a}).then(c=>c)}function ert({commit:s},a){const c=a.id,h=a.hidden?1:0;let p=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),k.append("link",a.link),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),p++}),k.append("imagesNum",p),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",h),k.append("_method","PUT"),a=k,It.post(`/cstSeminars/${c}`,a)}function nrt({commit:s},a){return It.delete(`/cstSeminars/${a}`)}function ort({commit:s},a){return It.post("/cstseminarItems",{ids:a})}function irt({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setOverseas",[!0]),a=a||"/overseas",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setOverseas",[!1,m.data])}).catch(m=>{s("setOverseas",[!1])})}function srt({commit:s},a){return It.get(`/overseas/${a}`)}function rrt({commit:s},a){const c=a.hidden?1:0;let h=-1;const p=new FormData;return p.append("title",a.title),p.append("link",a.link),a.image instanceof File&&p.append("image",a.image),a.images.forEach((k,m)=>{p.append(`images${m}`,k),h++}),p.append("imagesNum",h),p.append("content",a.content),p.append("hidden",c),a=p,It.post("/overseas",a)}function art({commit:s},a){return It.post("/isExistOversea",{id:a}).then(c=>c)}function lrt({commit:s},a){const c=a.id,h=a.hidden?1:0;let p=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),k.append("link",a.link),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),p++}),k.append("imagesNum",p),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",h),k.append("_method","PUT"),a=k,It.post(`/overseas/${c}`,a)}function crt({commit:s},a){return It.delete(`/overseas/${a}`)}function drt({commit:s},a){return It.post("/overseaItems",{ids:a})}function urt({commit:s},{url:a=null,search:c="",perPage:h=10,sort_field:p,sort_direction:k}){return s("setForums",[!0]),a=a||"/forums",It.get(a,{params:{search:c,per_page:h,sort_field:p,sort_direction:k}}).then(m=>{s("setForums",[!1,m.data])}).catch(m=>{s("setForums",[!1])})}function hrt({commit:s},a){return It.get(`/forums/${a}`)}function prt({commit:s},a){const c=a.hidden?1:0;let h=-1;const p=new FormData;return p.append("title",a.title),a.image instanceof File&&p.append("image",a.image),a.images.forEach((k,m)=>{p.append(`images${m}`,k),h++}),p.append("imagesNum",h),p.append("content",a.content),p.append("hidden",c),p.append("button_1",a.button_1),p.append("link_1",a.link_1),p.append("button_2",a.button_2),p.append("link_2",a.link_2),p.append("button_3",a.button_3),p.append("link_3",a.link_3),p.append("button_4",a.button_4),p.append("link_4",a.link_4),p.append("button_5",a.button_5),p.append("link_5",a.link_5),a=p,It.post("/forums",a)}function grt({commit:s},a){return It.post("/isExistForum",{id:a}).then(c=>c)}function frt({commit:s},a){const c=a.id,h=a.hidden?1:0;let p=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),p++}),k.append("imagesNum",p),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",h),k.append("button_1",a.button_1),k.append("link_1",a.link_1),k.append("button_2",a.button_2),k.append("link_2",a.link_2),k.append("button_3",a.button_3),k.append("link_3",a.link_3),k.append("button_4",a.button_4),k.append("link_4",a.link_4),k.append("button_5",a.button_5),k.append("link_5",a.link_5),k.append("_method","PUT"),a=k,It.post(`/forums/${c}`,a)}function mrt({commit:s},a){return It.delete(`/forums/${a}`)}function krt({commit:s},a){return It.post("/forumItems",{ids:a})}const brt=Object.freeze(Object.defineProperty({__proto__:null,createArticle:ist,createAwardprogram:Bst,createBanner:ust,createChairman:bst,createCstDatabase:Gst,createCstSeminar:Xst,createForum:prt,createLetter:jst,createOrganization:xst,createOversea:rrt,deleteArticle:ast,deleteArticleItems:lst,deleteAwardprogram:Ost,deleteAwardprogramItems:Lst,deleteBanner:gst,deleteBannerItems:fst,deleteChairman:vst,deleteChairmanItems:Ast,deleteCstDatabase:Yst,deleteCstDatabaseItems:Qst,deleteCstSeminar:nrt,deleteCstSeminarItems:ort,deleteForum:mrt,deleteForumItems:krt,deleteLetter:Vst,deleteLetterItems:Ust,deleteOrganization:Sst,deleteOrganizationItems:Ist,deleteOversea:crt,deleteOverseaItems:drt,getArticle:ost,getArticles:nst,getAwardprogram:Tst,getAwardprograms:Mst,getBanner:dst,getBanners:cst,getChairman:kst,getChairmans:mst,getCstDatabase:qst,getCstDatabases:Hst,getCstSeminar:Jst,getCstSeminars:Zst,getForum:hrt,getForums:urt,getLetter:Rst,getLetters:zst,getOrganization:yst,getOrganizations:Cst,getOversea:srt,getOverseas:irt,getUser:est,isExistArticle:sst,isExistAwardprogram:Nst,isExistBanner:hst,isExistChairman:_st,isExistCstDatabase:Wst,isExistCstSeminar:trt,isExistForum:grt,isExistLetter:$st,isExistOrganization:Est,isExistOversea:art,login:Xit,logout:tst,updateArticle:rst,updateAwardprogram:Pst,updateBanner:pst,updateChairman:wst,updateCstDatabase:Kst,updateCstSeminar:ert,updateForum:frt,updateLetter:Fst,updateOrganization:Dst,updateOversea:lrt},Symbol.toStringTag,{value:"Module"}));function _rt(s,a){s.user.data=a}function wrt(s,a){s.user.token=a,a?sessionStorage.setItem("TOKEN",a):sessionStorage.removeItem("TOKEN")}function vrt(s,[a,c=null]){c&&(s.articles={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.articles.loading=a}function Art(s,[a,c=null]){c&&(s.banners={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.banners.loading=a}function Crt(s,[a,c=null]){c&&(s.chairmans={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.chairmans.loading=a}function yrt(s,[a,c=null]){c&&(s.organizations={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.organizations.loading=a}function xrt(s,[a,c=null]){c&&(s.awardprograms={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.awardprograms.loading=a}function Ert(s,[a,c=null]){c&&(s.letters={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.letters.loading=a}function Drt(s,[a,c=null]){c&&(s.cstdatabases={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.cstdatabases.loading=a}function Srt(s,[a,c=null]){c&&(s.cstseminars={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.cstseminars.loading=a}function Irt(s,[a,c=null]){c&&(s.overseas={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.overseas.loading=a}function Mrt(s,[a,c=null]){c&&(s.forums={data:c.data,links:c.meta.links,total:c.meta.total,limit:c.meta.per_page,from:c.meta.from,to:c.meta.to,page:c.meta.current_page}),s.forums.loading=a}const Trt=Object.freeze(Object.defineProperty({__proto__:null,setArticles:vrt,setAwardprograms:xrt,setBanners:Art,setChairmans:Crt,setCstDatabases:Drt,setCstSeminars:Srt,setForums:Mrt,setLetters:Ert,setOrganizations:yrt,setOverseas:Irt,setToken:wrt,setUser:_rt},Symbol.toStringTag,{value:"Module"})),Brt=GB({state:{user:{token:sessionStorage.getItem("TOKEN"),data:{}},articles:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},banners:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},chairmans:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},organizations:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},awardprograms:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},letters:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},cstdatabases:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},cstseminars:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},overseas:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},forums:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null}},getters:{},actions:brt,mutations:Trt}),ft=Brt;var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nrt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Prt(s){if(s.__esModule)return s;var a=s.default;if(typeof a=="function"){var c=function h(){if(this instanceof h){var p=[null];p.push.apply(p,arguments);var k=Function.bind.apply(a,p);return new k}return a.apply(this,arguments)};c.prototype=a.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(s).forEach(function(h){var p=Object.getOwnPropertyDescriptor(s,h);Object.defineProperty(c,h,p.get?p:{enumerable:!0,get:function(){return s[h]}})}),c}var Ph={},Ort={get exports(){return Ph},set exports(s){Ph=s}};const Lrt=Prt(wB);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,a){(function(c,h){s.exports=h(Lrt)})(self,c=>(()=>{var h={976:v=>{v.exports=c}},p={};function k(v){var _=p[v];if(_!==void 0)return _.exports;var x=p[v]={exports:{}};return h[v](x,x.exports,k),x.exports}k.d=(v,_)=>{for(var x in _)k.o(_,x)&&!k.o(v,x)&&Object.defineProperty(v,x,{enumerable:!0,get:_[x]})},k.o=(v,_)=>Object.prototype.hasOwnProperty.call(v,_);var m={};return(()=>{k.d(m,{default:()=>cn});var v=k(976);const _=function(gt){var Kt=typeof gt;return gt!=null&&(Kt=="object"||Kt=="function")},x=typeof Ai=="object"&&Ai&&Ai.Object===Object&&Ai;var C=typeof self=="object"&&self&&self.Object===Object&&self;const E=x||C||Function("return this")(),A=function(){return E.Date.now()};var M=/\s/;const j=function(gt){for(var Kt=gt.length;Kt--&&M.test(gt.charAt(Kt)););return Kt};var L=/^\s+/;const U=function(gt){return gt&&gt.slice(0,j(gt)+1).replace(L,"")},T=E.Symbol;var D=Object.prototype,H=D.hasOwnProperty,N=D.toString,G=T?T.toStringTag:void 0;const V=function(gt){var Kt=H.call(gt,G),nt=gt[G];try{gt[G]=void 0;var vt=!0}catch{}var rt=N.call(gt);return vt&&(Kt?gt[G]=nt:delete gt[G]),rt};var q=Object.prototype.toString;const z=function(gt){return q.call(gt)};var X=T?T.toStringTag:void 0;const pt=function(gt){return gt==null?gt===void 0?"[object Undefined]":"[object Null]":X&&X in Object(gt)?V(gt):z(gt)},yt=function(gt){return gt!=null&&typeof gt=="object"},ut=function(gt){return typeof gt=="symbol"||yt(gt)&&pt(gt)=="[object Symbol]"};var Tt=/^[-+]0x[0-9a-f]+$/i,St=/^0b[01]+$/i,le=/^0o[0-7]+$/i,Ut=parseInt;const Ht=function(gt){if(typeof gt=="number")return gt;if(ut(gt))return NaN;if(_(gt)){var Kt=typeof gt.valueOf=="function"?gt.valueOf():gt;gt=_(Kt)?Kt+"":Kt}if(typeof gt!="string")return gt===0?gt:+gt;gt=U(gt);var nt=St.test(gt);return nt||le.test(gt)?Ut(gt.slice(2),nt?2:8):Tt.test(gt)?NaN:+gt};var ce=Math.max,qt=Math.min;const to=function(gt,Kt,nt){var vt,rt,Bt,Gt,Wt,Lt,F=0,W=!1,Z=!1,ot=!0;if(typeof gt!="function")throw new TypeError("Expected a function");function st(kt){var wt=vt,Nt=rt;return vt=rt=void 0,F=kt,Gt=gt.apply(Nt,wt)}function mt(kt){return F=kt,Wt=setTimeout(ht,Kt),W?st(kt):Gt}function Dt(kt){var wt=kt-Lt;return Lt===void 0||wt>=Kt||wt<0||Z&&kt-F>=Bt}function ht(){var kt=A();if(Dt(kt))return At(kt);Wt=setTimeout(ht,function(wt){var Nt=Kt-(wt-Lt);return Z?qt(Nt,Bt-(wt-F)):Nt}(kt))}function At(kt){return Wt=void 0,ot&&vt?st(kt):(vt=rt=void 0,Gt)}function ct(){var kt=A(),wt=Dt(kt);if(vt=arguments,rt=this,Lt=kt,wt){if(Wt===void 0)return mt(Lt);if(Z)return clearTimeout(Wt),Wt=setTimeout(ht,Kt),st(Lt)}return Wt===void 0&&(Wt=setTimeout(ht,Kt)),Gt}return Kt=Ht(Kt)||0,_(nt)&&(W=!!nt.leading,Bt=(Z="maxWait"in nt)?ce(Ht(nt.maxWait)||0,Kt):Bt,ot="trailing"in nt?!!nt.trailing:ot),ct.cancel=function(){Wt!==void 0&&clearTimeout(Wt),F=0,vt=Lt=rt=Wt=void 0},ct.flush=function(){return Wt===void 0?Gt:At(A())},ct},fn=(0,v.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(gt){this.instance&&gt!==this.lastEditorData&&this.instance.data.set(gt)},disabled(gt){gt?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:gt}=window;if(gt){const[Kt]=gt.split(".").map(Number);Kt<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const gt=Object.assign({},this.config);this.modelValue&&(gt.initialData=this.modelValue),this.editor.create(this.$el,gt).then(Kt=>{this.instance=(0,v.markRaw)(Kt),this.setUpEditorEvents(),this.modelValue!==gt.initialData&&Kt.data.set(this.modelValue),this.disabled&&Kt.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Kt)}).catch(Kt=>{console.error(Kt)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const gt=this.instance,Kt=to(nt=>{if(this.disableTwoWayDataBinding)return;const vt=this.lastEditorData=gt.data.get();this.$emit("update:modelValue",vt,nt,gt),this.$emit("input",vt,nt,gt)},300,{leading:!0});gt.model.document.on("change:data",Kt),gt.editing.view.document.on("focus",nt=>{this.$emit("focus",nt,gt)}),gt.editing.view.document.on("blur",nt=>{this.$emit("blur",nt,gt)})}},render(){return(0,v.h)(this.tagName)}});if(!v.version||!v.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const cn={install(gt){gt.component("Ckeditor",fn)},component:fn}})(),m=m.default})())})(Ort);const zrt=Ph;var oc={},Rrt={get exports(){return oc},set exports(s){oc=s}};(function(s,a){(function(c){const h=c.en=c.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(c,h){s.exports=h()}(self,()=>(()=>{var c={8603:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const M=A},3062:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const M=A},903:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const M=A},3143:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},4717:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const M=A},9315:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const M=A},8733:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const M=A},3508:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const M=A},2640:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const M=A},3535:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const M=A},1568:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const M=A},6270:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const M=A},5083:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},4036:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const M=A},3773:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const M=A},3689:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const M=A},1905:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},9773:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const M=A},2347:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},7754:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},111:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const M=A},4721:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const M=A},5730:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const M=A},4564:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},6082:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const M=A},2417:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const M=A},1199:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const M=A},4652:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const M=A},7442:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},9292:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},7368:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},4070:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},9247:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const M=A},1613:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const M=A},6306:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const M=A},2128:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const M=A},5087:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},4101:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAEC,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const M=A},3881:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const M=A},6237:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},7341:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},6945:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},4906:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=A},5332:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=A},6781:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const M=A},5485:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},3949:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},7686:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},7339:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const M=A},9688:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},8847:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const M=A},6574:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},4879:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},3662:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const M=A},2577:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},1046:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},8793:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},4650:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const M=A},7676:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},5868:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},6764:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=A},9695:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const M=A},5542:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=A},3332:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const M=A},4793:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const M=A},3488:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=A},8506:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const M=A},4921:(m,v,_)=>{_.d(v,{Z:()=>M});var x=_(1799),C=_.n(x),E=_(2609),A=_.n(E)()(C());A.push([m.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const M=A},2609:m=>{m.exports=function(v){var _=[];return _.toString=function(){return this.map(function(x){var C=v(x);return x[2]?"@media ".concat(x[2]," {").concat(C,"}"):C}).join("")},_.i=function(x,C,E){typeof x=="string"&&(x=[[null,x,""]]);var A={};if(E)for(var M=0;M<this.length;M++){var j=this[M][0];j!=null&&(A[j]=!0)}for(var L=0;L<x.length;L++){var U=[].concat(x[L]);E&&A[U[0]]||(C&&(U[2]?U[2]="".concat(C," and ").concat(U[2]):U[2]=C),_.push(U))}},_}},1799:m=>{function v(x,C){return function(E){if(Array.isArray(E))return E}(x)||function(E,A){var M=E&&(typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"]);if(M!=null){var j,L,U=[],T=!0,D=!1;try{for(M=M.call(E);!(T=(j=M.next()).done)&&(U.push(j.value),!A||U.length!==A);T=!0);}catch(H){D=!0,L=H}finally{try{T||M.return==null||M.return()}finally{if(D)throw L}}return U}}(x,C)||function(E,A){if(E){if(typeof E=="string")return _(E,A);var M=Object.prototype.toString.call(E).slice(8,-1);if(M==="Object"&&E.constructor&&(M=E.constructor.name),M==="Map"||M==="Set")return Array.from(E);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return _(E,A)}}(x,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _(x,C){(C==null||C>x.length)&&(C=x.length);for(var E=0,A=new Array(C);E<C;E++)A[E]=x[E];return A}m.exports=function(x){var C=v(x,4),E=C[1],A=C[3];if(!A)return E;if(typeof btoa=="function"){var M=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),j="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(M),L="/*# ".concat(j," */"),U=A.sources.map(function(T){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(T," */")});return[E].concat(U).concat([L]).join(`
`)}return[E].join(`
`)}},6062:(m,v,_)=>{var x,C=function(){return x===void 0&&(x=!!(window&&document&&document.all&&!window.atob)),x},E=function(){var q={};return function(z){if(q[z]===void 0){var X=document.querySelector(z);if(window.HTMLIFrameElement&&X instanceof window.HTMLIFrameElement)try{X=X.contentDocument.head}catch{X=null}q[z]=X}return q[z]}}(),A=[];function M(q){for(var z=-1,X=0;X<A.length;X++)if(A[X].identifier===q){z=X;break}return z}function j(q,z){for(var X={},pt=[],yt=0;yt<q.length;yt++){var ut=q[yt],Tt=z.base?ut[0]+z.base:ut[0],St=X[Tt]||0,le="".concat(Tt," ").concat(St);X[Tt]=St+1;var Ut=M(le),Ht={css:ut[1],media:ut[2],sourceMap:ut[3]};Ut!==-1?(A[Ut].references++,A[Ut].updater(Ht)):A.push({identifier:le,updater:V(Ht,z),references:1}),pt.push(le)}return pt}function L(q){var z=document.createElement("style"),X=q.attributes||{};if(X.nonce===void 0){var pt=_.nc;pt&&(X.nonce=pt)}if(Object.keys(X).forEach(function(ut){z.setAttribute(ut,X[ut])}),typeof q.insert=="function")q.insert(z);else{var yt=E(q.insert||"head");if(!yt)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");yt.appendChild(z)}return z}var U,T=(U=[],function(q,z){return U[q]=z,U.filter(Boolean).join(`
`)});function D(q,z,X,pt){var yt=X?"":pt.media?"@media ".concat(pt.media," {").concat(pt.css,"}"):pt.css;if(q.styleSheet)q.styleSheet.cssText=T(z,yt);else{var ut=document.createTextNode(yt),Tt=q.childNodes;Tt[z]&&q.removeChild(Tt[z]),Tt.length?q.insertBefore(ut,Tt[z]):q.appendChild(ut)}}function H(q,z,X){var pt=X.css,yt=X.media,ut=X.sourceMap;if(yt?q.setAttribute("media",yt):q.removeAttribute("media"),ut&&typeof btoa<"u"&&(pt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ut))))," */")),q.styleSheet)q.styleSheet.cssText=pt;else{for(;q.firstChild;)q.removeChild(q.firstChild);q.appendChild(document.createTextNode(pt))}}var N=null,G=0;function V(q,z){var X,pt,yt;if(z.singleton){var ut=G++;X=N||(N=L(z)),pt=D.bind(null,X,ut,!1),yt=D.bind(null,X,ut,!0)}else X=L(z),pt=H.bind(null,X,z),yt=function(){(function(Tt){if(Tt.parentNode===null)return!1;Tt.parentNode.removeChild(Tt)})(X)};return pt(q),function(Tt){if(Tt){if(Tt.css===q.css&&Tt.media===q.media&&Tt.sourceMap===q.sourceMap)return;pt(q=Tt)}else yt()}}m.exports=function(q,z){(z=z||{}).singleton||typeof z.singleton=="boolean"||(z.singleton=C());var X=j(q=q||[],z);return function(pt){if(pt=pt||[],Object.prototype.toString.call(pt)==="[object Array]"){for(var yt=0;yt<X.length;yt++){var ut=M(X[yt]);A[ut].references--}for(var Tt=j(pt,z),St=0;St<X.length;St++){var le=M(X[St]);A[le].references===0&&(A[le].updater(),A.splice(le,1))}X=Tt}}}}},h={};function p(m){var v=h[m];if(v!==void 0)return v.exports;var _=h[m]={id:m,exports:{}};return c[m](_,_.exports,p),_.exports}p.n=m=>{var v=m&&m.__esModule?()=>m.default:()=>m;return p.d(v,{a:v}),v},p.d=(m,v)=>{for(var _ in v)p.o(v,_)&&!p.o(m,_)&&Object.defineProperty(m,_,{enumerable:!0,get:v[_]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(m,v)=>Object.prototype.hasOwnProperty.call(m,v),p.nc=void 0;var k={};return(()=>{function m({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const l=typeof r.composedPath=="function"?r.composedPath():[],d=typeof n=="function"?n():n;for(const u of d)if(u.contains(r.target)||l.includes(u))return;e()})}function v(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function _({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}p.d(k,{default:()=>ju});const x=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var C;const E={isMac:A(x),isWindows:(C=x,C.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(x),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(x),isiOS:function(o){return!!o.match(/iphone|ipad/i)||A(o)&&navigator.maxTouchPoints>0}(x),isAndroid:function(o){return o.indexOf("android")>-1}(x),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(x),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function A(o){return o.indexOf("macintosh")>-1}function M(o,t,e,n){e=e||function(u,f){return u===f};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),l=function(u,f,b){const w=j(u,f,b);if(w===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const y=L(u,w),S=L(f,w),I=j(y,S,b),B=u.length-I,R=f.length-I;return{firstIndex:w,lastIndexOld:B,lastIndexNew:R}}(i,r,e);return n?function(u,f){const{firstIndex:b,lastIndexOld:w,lastIndexNew:y}=u;if(b===-1)return Array(f).fill("equal");let S=[];return b>0&&(S=S.concat(Array(b).fill("equal"))),y-b>0&&(S=S.concat(Array(y-b).fill("insert"))),w-b>0&&(S=S.concat(Array(w-b).fill("delete"))),y<f&&(S=S.concat(Array(f-y).fill("equal"))),S}(l,r.length):function(u,f){const b=[],{firstIndex:w,lastIndexOld:y,lastIndexNew:S}=f;return S-w>0&&b.push({index:w,type:"insert",values:u.slice(w,S)}),y-w>0&&b.push({index:w+(S-w),type:"delete",howMany:y-w}),b}(r,l)}function j(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function L(o,t){return o.slice(t).reverse()}function U(o,t,e){e=e||function(B,R){return B===R};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return U.fastDiff(o,t,e,!0);let r,l;if(i<n){const B=o;o=t,t=B,r="delete",l="insert"}else r="insert",l="delete";const d=o.length,u=t.length,f=u-d,b={},w={};function y(B){const R=(w[B-1]!==void 0?w[B-1]:-1)+1,$=w[B+1]!==void 0?w[B+1]:-1,Y=R>$?-1:1;b[B+Y]&&(b[B]=b[B+Y].slice(0)),b[B]||(b[B]=[]),b[B].push(R>$?r:l);let et=Math.max(R,$),Ct=et-B;for(;Ct<d&&et<u&&e(o[Ct],t[et]);)Ct++,et++,b[B].push("equal");return et}let S,I=0;do{for(S=-I;S<f;S++)w[S]=y(S);for(S=f+I;S>f;S--)w[S]=y(S);w[f]=y(f),I++}while(w[f]!==u);return b[f].slice(1)}U.fastDiff=M;const T=function(){return function o(){o.called=!0}};class D{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=T(),this.off=T()}}const H=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function N(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+H[o>>0&255]+H[o>>8&255]+H[o>>16&255]+H[o>>24&255]+H[t>>0&255]+H[t>>8&255]+H[t>>16&255]+H[t>>24&255]+H[e>>0&255]+H[e>>8&255]+H[e>>16&255]+H[e>>24&255]+H[n>>0&255]+H[n>>8&255]+H[n>>16&255]+H[n>>24&255]}const G={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function V(o,t){const e=G.get(t.priority);for(let n=0;n<o.length;n++)if(G.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const q="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class z extends Error{constructor(t,e,n){super(function(i,r){const l=new WeakSet,d=(b,w)=>{if(typeof w=="object"&&w!==null){if(l.has(w))return`[object ${w.constructor.name}]`;l.add(w)}return w},u=r?` ${JSON.stringify(r,d)}`:"",f=yt(i);return i+u+f}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new z(t.message,e);throw n.stack=t.stack,n}}function X(o,t){console.warn(...ut(o,t))}function pt(o,t){console.error(...ut(o,t))}function yt(o){return`
Read more: ${q}#error-${o}`}function ut(o,t){const e=yt(o);return t?[o,t,e]:[o,e]}const Tt="37.1.0",St=typeof window=="object"?window:p.g;if(St.CKEDITOR_VERSION)throw new z("ckeditor-duplicated-modules",null);St.CKEDITOR_VERSION=Tt;const le=Symbol("listeningTo"),Ut=Symbol("emitterId"),Ht=Symbol("delegations"),ce=qt(Object);function qt(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...l)=>{i||(i=!0,r.off(),e.call(this,r,...l))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,l;this[le]||(this[le]={});const d=this[le];fn(t)||to(t);const u=fn(t);(r=d[u])||(r=d[u]={emitter:t,callbacks:{}}),(l=r.callbacks[e])||(l=r.callbacks[e]=[]),l.push(n),function(f,b,w,y,S){b._addEventListener?b._addEventListener(w,y,S):f._addEventListener.call(b,w,y,S)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[le];let r=t&&fn(t);const l=i&&r?i[r]:void 0,d=l&&e?l.callbacks[e]:void 0;if(!(!i||t&&!l||e&&!d))if(n)vt(this,t,e,n),d.indexOf(n)!==-1&&(d.length===1?delete l.callbacks[e]:vt(this,t,e,n));else if(d){for(;n=d.pop();)vt(this,t,e,n);delete l.callbacks[e]}else if(l){for(e in l.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[le]}}fire(t,...e){try{const n=t instanceof D?t:new D(this,t),i=n.name;let r=Kt(this,i);if(n.path.push(this),r){const d=[n,...e];r=Array.from(r);for(let u=0;u<r.length&&(r[u].callback.apply(this,d),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[u].callback)),!n.stop.called);u++);}const l=this[Ht];if(l){const d=l.get(i),u=l.get("*");d&&nt(d,n,e),u&&nt(u,n,e)}return n.return}catch(n){z.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[Ht]||(this[Ht]=new Map),t.forEach(i=>{const r=this[Ht].get(i);r?r.set(e,n):this[Ht].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[Ht])if(t)if(e){const n=this[Ht].get(t);n&&n.delete(e)}else this[Ht].delete(t);else this[Ht].clear()}_addEventListener(t,e,n){(function(l,d){const u=cn(l);if(u[d])return;let f=d,b=null;const w=[];for(;f!==""&&!u[f];)u[f]={callbacks:[],childEvents:[]},w.push(u[f]),b&&u[f].childEvents.push(b),b=f,f=f.substr(0,f.lastIndexOf(":"));if(f!==""){for(const y of w)y.callbacks=u[f].callbacks.slice();u[f].childEvents.push(b)}})(this,t);const i=gt(this,t),r={callback:e,priority:G.get(n.priority)};for(const l of i)V(l,r)}_removeEventListener(t,e){const n=gt(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:ce}function to(o,t){o[Ut]||(o[Ut]=t||N())}function fn(o){return o[Ut]}function cn(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function gt(o,t){const e=cn(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=gt(o,e.childEvents[i]);n=n.concat(r)}return n}function Kt(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Kt(o,t.substr(0,t.lastIndexOf(":"))):null}function nt(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new D(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function vt(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{qt[o]=ce.prototype[o]});const rt=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},Bt=Symbol("observableProperties"),Gt=Symbol("boundObservables"),Wt=Symbol("boundProperties"),Lt=Symbol("decoratedMethods"),F=Symbol("decoratedOriginal"),W=Z(qt());function Z(o){return o?class extends o{set(t,e){if(rt(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);ot(this);const n=this[Bt];if(t in this&&!n.has(t))throw new z("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let l=this.fire(`set:${t}`,t,i,r);l===void 0&&(l=i),r===l&&n.has(t)||(n.set(t,l),this.fire(`change:${t}`,t,l,r))}}),this[t]=e}bind(...t){if(!t.length||!Dt(t))throw new z("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new z("observable-bind-duplicate-properties",this);ot(this);const e=this[Wt];t.forEach(i=>{if(e.has(i))throw new z("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:st,toMany:mt,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[Bt])return;const e=this[Wt],n=this[Gt];if(t.length){if(!Dt(t))throw new z("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([l,d])=>{const u=n.get(l),f=u[d];f.delete(r),f.size||delete u[d],Object.keys(u).length||(n.delete(l),this.stopListening(l,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){ot(this);const e=this[t];if(!e)throw new z("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][F]=e,this[Lt]||(this[Lt]=[]),this[Lt].push(t)}stopListening(t,e,n){if(!t&&this[Lt]){for(const i of this[Lt])this[i]=this[i][F];delete this[Lt]}super.stopListening(t,e,n)}}:W}function ot(o){o[Bt]||(Object.defineProperty(o,Bt,{value:new Map}),Object.defineProperty(o,Gt,{value:new Map}),Object.defineProperty(o,Wt,{value:new Map}))}function st(...o){const t=function(...r){if(!r.length)throw new z("observable-bind-to-parse-error",null);const l={to:[]};let d;return typeof r[r.length-1]=="function"&&(l.callback=r.pop()),r.forEach(u=>{if(typeof u=="string")d.properties.push(u);else{if(typeof u!="object")throw new z("observable-bind-to-parse-error",null);d={observable:u,properties:[]},l.to.push(d)}}),l}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new z("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new z("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new z("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const l=i[Gt];let d;l.get(r.observable)||i.listenTo(r.observable,"change",(u,f)=>{d=l.get(r.observable)[f],d&&d.forEach(b=>{ht(i,b.property)})})}),function(r){let l;r._bindings.forEach((d,u)=>{r._to.forEach(f=>{l=f.properties[d.callback?0:r._bindProperties.indexOf(u)],d.to.push([f.observable,l]),function(b,w,y,S){const I=b[Gt],B=I.get(y),R=B||{};R[S]||(R[S]=new Set),R[S].add(w),B||I.set(y,R)}(r._observable,d,f.observable,l)})})}(this),this._bindProperties.forEach(r=>{ht(this._observable,r)})}function mt(o,t,e){if(this._bindings.size>1)throw new z("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(l=>[l,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function Dt(o){return o.every(t=>typeof t=="string")}function ht(o,t){const e=o[Wt].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Z[o]=W.prototype[o]});class At{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function ct(o){let t=0;for(const e of o)t++;return t}function kt(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function wt(o){return!(!o||!o[Symbol.iterator])}const Nt=typeof Ai=="object"&&Ai&&Ai.Object===Object&&Ai;var Ft=typeof self=="object"&&self&&self.Object===Object&&self;const $t=Nt||Ft||Function("return this")(),Qt=$t.Symbol;var fe=Object.prototype,Ue=fe.hasOwnProperty,Un=fe.toString,eo=Qt?Qt.toStringTag:void 0;const Ma=function(o){var t=Ue.call(o,eo),e=o[eo];try{o[eo]=void 0;var n=!0}catch{}var i=Un.call(o);return n&&(t?o[eo]=e:delete o[eo]),i};var Bi=Object.prototype.toString;const Ta=function(o){return Bi.call(o)};var yn=Qt?Qt.toStringTag:void 0;const dn=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":yn&&yn in Object(o)?Ma(o):Ta(o)},mn=Array.isArray,no=function(o){return o!=null&&typeof o=="object"},Ep=function(o){return typeof o=="string"||!mn(o)&&no(o)&&dn(o)=="[object String]"};function Dp(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const l in e)r.setAttribute(l,e[l]);!Ep(n)&&wt(n)||(n=[n]);for(let l of n)Ep(l)&&(l=o.createTextNode(l)),r.appendChild(l);return r}const Sp=function(o,t){return function(e){return o(t(e))}},Nc=Sp(Object.getPrototypeOf,Object);var B1=Function.prototype,N1=Object.prototype,Ip=B1.toString,P1=N1.hasOwnProperty,O1=Ip.call(Object);const Hn=function(o){if(!no(o)||dn(o)!="[object Object]")return!1;var t=Nc(o);if(t===null)return!0;var e=P1.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Ip.call(e)==O1},L1=function(){this.__data__=[],this.size=0},wr=function(o,t){return o===t||o!=o&&t!=t},Ba=function(o,t){for(var e=o.length;e--;)if(wr(o[e][0],t))return e;return-1};var z1=Array.prototype.splice;const R1=function(o){var t=this.__data__,e=Ba(t,o);return!(e<0)&&(e==t.length-1?t.pop():z1.call(t,e,1),--this.size,!0)},j1=function(o){var t=this.__data__,e=Ba(t,o);return e<0?void 0:t[e][1]},$1=function(o){return Ba(this.__data__,o)>-1},F1=function(o,t){var e=this.__data__,n=Ba(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function As(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}As.prototype.clear=L1,As.prototype.delete=R1,As.prototype.get=j1,As.prototype.has=$1,As.prototype.set=F1;const Na=As,V1=function(){this.__data__=new Na,this.size=0},U1=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},H1=function(o){return this.__data__.get(o)},q1=function(o){return this.__data__.has(o)},Ni=function(o){if(!rt(o))return!1;var t=dn(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Pc=$t["__core-js_shared__"];var Mp=function(){var o=/[^.]+$/.exec(Pc&&Pc.keys&&Pc.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const G1=function(o){return!!Mp&&Mp in o};var W1=Function.prototype.toString;const Pi=function(o){if(o!=null){try{return W1.call(o)}catch{}try{return o+""}catch{}}return""};var K1=/^\[object .+?Constructor\]$/,Y1=Function.prototype,Q1=Object.prototype,Z1=Y1.toString,J1=Q1.hasOwnProperty,X1=RegExp("^"+Z1.call(J1).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ty=function(o){return!(!rt(o)||G1(o))&&(Ni(o)?X1:K1).test(Pi(o))},ey=function(o,t){return o==null?void 0:o[t]},Oi=function(o,t){var e=ey(o,t);return ty(e)?e:void 0},vr=Oi($t,"Map"),Ar=Oi(Object,"create"),ny=function(){this.__data__=Ar?Ar(null):{},this.size=0},oy=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var iy=Object.prototype.hasOwnProperty;const sy=function(o){var t=this.__data__;if(Ar){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return iy.call(t,o)?t[o]:void 0};var ry=Object.prototype.hasOwnProperty;const ay=function(o){var t=this.__data__;return Ar?t[o]!==void 0:ry.call(t,o)},ly=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=Ar&&t===void 0?"__lodash_hash_undefined__":t,this};function Cs(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Cs.prototype.clear=ny,Cs.prototype.delete=oy,Cs.prototype.get=sy,Cs.prototype.has=ay,Cs.prototype.set=ly;const Tp=Cs,cy=function(){this.size=0,this.__data__={hash:new Tp,map:new(vr||Na),string:new Tp}},dy=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Pa=function(o,t){var e=o.__data__;return dy(t)?e[typeof t=="string"?"string":"hash"]:e.map},uy=function(o){var t=Pa(this,o).delete(o);return this.size-=t?1:0,t},hy=function(o){return Pa(this,o).get(o)},py=function(o){return Pa(this,o).has(o)},gy=function(o,t){var e=Pa(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function ys(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}ys.prototype.clear=cy,ys.prototype.delete=uy,ys.prototype.get=hy,ys.prototype.has=py,ys.prototype.set=gy;const Oa=ys,fy=function(o,t){var e=this.__data__;if(e instanceof Na){var n=e.__data__;if(!vr||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new Oa(n)}return e.set(o,t),this.size=e.size,this};function xs(o){var t=this.__data__=new Na(o);this.size=t.size}xs.prototype.clear=V1,xs.prototype.delete=U1,xs.prototype.get=H1,xs.prototype.has=q1,xs.prototype.set=fy;const Cr=xs,my=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},La=function(){try{var o=Oi(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Oc=function(o,t,e){t=="__proto__"&&La?La(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var ky=Object.prototype.hasOwnProperty;const Lc=function(o,t,e){var n=o[t];ky.call(o,t)&&wr(n,e)&&(e!==void 0||t in o)||Oc(o,t,e)},Es=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,l=t.length;++r<l;){var d=t[r],u=n?n(e[d],o[d],d,e,o):void 0;u===void 0&&(u=o[d]),i?Oc(e,d,u):Lc(e,d,u)}return e},by=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},Bp=function(o){return no(o)&&dn(o)=="[object Arguments]"};var Np=Object.prototype,_y=Np.hasOwnProperty,wy=Np.propertyIsEnumerable;const zc=Bp(function(){return arguments}())?Bp:function(o){return no(o)&&_y.call(o,"callee")&&!wy.call(o,"callee")},vy=function(){return!1};var Pp=a&&!a.nodeType&&a,Op=Pp&&!0&&s&&!s.nodeType&&s,Lp=Op&&Op.exports===Pp?$t.Buffer:void 0;const yr=(Lp?Lp.isBuffer:void 0)||vy;var Ay=/^(?:0|[1-9]\d*)$/;const Rc=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&Ay.test(o))&&o>-1&&o%1==0&&o<t},zp=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var Me={};Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Arguments]"]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object Boolean]"]=Me["[object DataView]"]=Me["[object Date]"]=Me["[object Error]"]=Me["[object Function]"]=Me["[object Map]"]=Me["[object Number]"]=Me["[object Object]"]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object WeakMap]"]=!1;const Cy=function(o){return no(o)&&zp(o.length)&&!!Me[dn(o)]},jc=function(o){return function(t){return o(t)}};var Rp=a&&!a.nodeType&&a,xr=Rp&&!0&&s&&!s.nodeType&&s,$c=xr&&xr.exports===Rp&&Nt.process;const Ds=function(){try{var o=xr&&xr.require&&xr.require("util").types;return o||$c&&$c.binding&&$c.binding("util")}catch{}}();var jp=Ds&&Ds.isTypedArray;const Fc=jp?jc(jp):Cy;var yy=Object.prototype.hasOwnProperty;const $p=function(o,t){var e=mn(o),n=!e&&zc(o),i=!e&&!n&&yr(o),r=!e&&!n&&!i&&Fc(o),l=e||n||i||r,d=l?by(o.length,String):[],u=d.length;for(var f in o)!t&&!yy.call(o,f)||l&&(f=="length"||i&&(f=="offset"||f=="parent")||r&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Rc(f,u))||d.push(f);return d};var xy=Object.prototype;const Vc=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||xy)},Ey=Sp(Object.keys,Object);var Dy=Object.prototype.hasOwnProperty;const Sy=function(o){if(!Vc(o))return Ey(o);var t=[];for(var e in Object(o))Dy.call(o,e)&&e!="constructor"&&t.push(e);return t},za=function(o){return o!=null&&zp(o.length)&&!Ni(o)},Uc=function(o){return za(o)?$p(o):Sy(o)},Iy=function(o,t){return o&&Es(t,Uc(t),o)},My=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var Ty=Object.prototype.hasOwnProperty;const By=function(o){if(!rt(o))return My(o);var t=Vc(o),e=[];for(var n in o)(n!="constructor"||!t&&Ty.call(o,n))&&e.push(n);return e},Ss=function(o){return za(o)?$p(o,!0):By(o)},Ny=function(o,t){return o&&Es(t,Ss(t),o)};var Fp=a&&!a.nodeType&&a,Vp=Fp&&!0&&s&&!s.nodeType&&s,Up=Vp&&Vp.exports===Fp?$t.Buffer:void 0,Hp=Up?Up.allocUnsafe:void 0;const qp=function(o,t){if(t)return o.slice();var e=o.length,n=Hp?Hp(e):new o.constructor(e);return o.copy(n),n},Gp=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Py=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var l=o[e];t(l,e,o)&&(r[i++]=l)}return r},Wp=function(){return[]};var Oy=Object.prototype.propertyIsEnumerable,Kp=Object.getOwnPropertySymbols;const Hc=Kp?function(o){return o==null?[]:(o=Object(o),Py(Kp(o),function(t){return Oy.call(o,t)}))}:Wp,Ly=function(o,t){return Es(o,Hc(o),t)},Yp=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},Qp=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Yp(t,Hc(o)),o=Nc(o);return t}:Wp,zy=function(o,t){return Es(o,Qp(o),t)},Zp=function(o,t,e){var n=t(o);return mn(o)?n:Yp(n,e(o))},qc=function(o){return Zp(o,Uc,Hc)},Ry=function(o){return Zp(o,Ss,Qp)},Gc=Oi($t,"DataView"),Wc=Oi($t,"Promise"),Kc=Oi($t,"Set"),Yc=Oi($t,"WeakMap");var Jp="[object Map]",Xp="[object Promise]",tg="[object Set]",eg="[object WeakMap]",ng="[object DataView]",jy=Pi(Gc),$y=Pi(vr),Fy=Pi(Wc),Vy=Pi(Kc),Uy=Pi(Yc),Li=dn;(Gc&&Li(new Gc(new ArrayBuffer(1)))!=ng||vr&&Li(new vr)!=Jp||Wc&&Li(Wc.resolve())!=Xp||Kc&&Li(new Kc)!=tg||Yc&&Li(new Yc)!=eg)&&(Li=function(o){var t=dn(o),e=t=="[object Object]"?o.constructor:void 0,n=e?Pi(e):"";if(n)switch(n){case jy:return ng;case $y:return Jp;case Fy:return Xp;case Vy:return tg;case Uy:return eg}return t});const Er=Li;var Hy=Object.prototype.hasOwnProperty;const qy=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Hy.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Ra=$t.Uint8Array,Qc=function(o){var t=new o.constructor(o.byteLength);return new Ra(t).set(new Ra(o)),t},Gy=function(o,t){var e=t?Qc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var Wy=/\w*$/;const Ky=function(o){var t=new o.constructor(o.source,Wy.exec(o));return t.lastIndex=o.lastIndex,t};var og=Qt?Qt.prototype:void 0,ig=og?og.valueOf:void 0;const Yy=function(o){return ig?Object(ig.call(o)):{}},sg=function(o,t){var e=t?Qc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},Qy=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Qc(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Gy(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return sg(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return Ky(o);case"[object Symbol]":return Yy(o)}};var rg=Object.create;const Zy=function(){function o(){}return function(t){if(!rt(t))return{};if(rg)return rg(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),ag=function(o){return typeof o.constructor!="function"||Vc(o)?{}:Zy(Nc(o))},Jy=function(o){return no(o)&&Er(o)=="[object Map]"};var lg=Ds&&Ds.isMap;const Xy=lg?jc(lg):Jy,t2=function(o){return no(o)&&Er(o)=="[object Set]"};var cg=Ds&&Ds.isSet;const e2=cg?jc(cg):t2;var dg="[object Arguments]",ug="[object Function]",hg="[object Object]",Se={};Se[dg]=Se["[object Array]"]=Se["[object ArrayBuffer]"]=Se["[object DataView]"]=Se["[object Boolean]"]=Se["[object Date]"]=Se["[object Float32Array]"]=Se["[object Float64Array]"]=Se["[object Int8Array]"]=Se["[object Int16Array]"]=Se["[object Int32Array]"]=Se["[object Map]"]=Se["[object Number]"]=Se[hg]=Se["[object RegExp]"]=Se["[object Set]"]=Se["[object String]"]=Se["[object Symbol]"]=Se["[object Uint8Array]"]=Se["[object Uint8ClampedArray]"]=Se["[object Uint16Array]"]=Se["[object Uint32Array]"]=!0,Se["[object Error]"]=Se[ug]=Se["[object WeakMap]"]=!1;const Zc=function o(t,e,n,i,r,l){var d,u=1&e,f=2&e,b=4&e;if(n&&(d=r?n(t,i,r,l):n(t)),d!==void 0)return d;if(!rt(t))return t;var w=mn(t);if(w){if(d=qy(t),!u)return Gp(t,d)}else{var y=Er(t),S=y==ug||y=="[object GeneratorFunction]";if(yr(t))return qp(t,u);if(y==hg||y==dg||S&&!r){if(d=f||S?{}:ag(t),!u)return f?zy(t,Ny(d,t)):Ly(t,Iy(d,t))}else{if(!Se[y])return r?t:{};d=Qy(t,y,u)}}l||(l=new Cr);var I=l.get(t);if(I)return I;l.set(t,d),e2(t)?t.forEach(function(R){d.add(o(R,e,n,R,t,l))}):Xy(t)&&t.forEach(function(R,$){d.set($,o(R,e,n,$,t,l))});var B=w?void 0:(b?f?Ry:qc:f?Ss:Uc)(t);return my(B||t,function(R,$){B&&(R=t[$=R]),Lc(d,$,o(R,e,n,$,t,l))}),d},Jc=function(o,t){return Zc(o,5,t=typeof t=="function"?t:void 0)},Is=function(o){return no(o)&&o.nodeType===1&&!Hn(o)};class pg{constructor(t,e){this._config={},e&&this.define(gg(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(Hn(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const l of r)Hn(t[l])||(t[l]={}),t=t[l];if(Hn(n))return Hn(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!Hn(t[i])){t=null;break}t=t[i]}return t?gg(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function gg(o){return Jc(o,n2)}function n2(o){return Is(o)?o:void 0}function si(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function ja(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const fg=zi(qt());function zi(o){return o?class extends o{listenTo(t,e,n,i={}){if(si(t)||ja(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},l=this._getProxyEmitter(t,r)||new o2(t,r);this.listenTo(l,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(si(t)||ja(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[le];return r&&r[i]?r[i].emitter:null}(this,mg(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:fg}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{zi[o]=fg.prototype[o]});class o2 extends qt(){constructor(t,e){super(),to(this,mg(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),qt().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){qt().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function mg(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=N())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Xc;try{Xc={window,document}}catch{Xc={window:{},document:{}}}const Zt=Xc;function kg(o){const t=[];let e=o;for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function He(o){return Object.prototype.toString.call(o)=="[object Text]"}function $a(o){return Object.prototype.toString.apply(o)=="[object Range]"}function bg(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const _g=["top","right","bottom","left","width","height"];class qe{constructor(t){const e=$a(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),vg(t)||e)if(e){const n=qe.getDomRangeRects(t);Fa(this,qe.getBoundingRect(n))}else Fa(this,t.getBoundingClientRect());else if(ja(t)){const{innerWidth:n,innerHeight:i}=t;Fa(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Fa(this,t)}clone(){return new qe(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new qe(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!wg(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!wg(n);){const i=new qe(n),r=e.getIntersection(i);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(const e of _g)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(ja(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=bg(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new qe(i));else{let i=t.startContainer;He(i)&&(i=i.parentNode);const r=new qe(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new qe(e))}}function Fa(o,t){for(const e of _g)o[e]=t[e]}function wg(o){return!!vg(o)&&o===o.ownerDocument.body}function vg(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}const Xe=class{constructor(o,t){Xe._observerInstance||Xe._createObserver(),this._element=o,this._callback=t,Xe._addElementCallback(o,t),Xe._observerInstance.observe(o)}destroy(){Xe._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){Xe._elementCallbacks||(Xe._elementCallbacks=new Map);let e=Xe._elementCallbacks.get(o);e||(e=new Set,Xe._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=Xe._getElementCallbacks(o);e&&(e.delete(t),e.size||(Xe._elementCallbacks.delete(o),Xe._observerInstance.unobserve(o))),Xe._elementCallbacks&&!Xe._elementCallbacks.size&&(Xe._observerInstance=null,Xe._elementCallbacks=null)}static _getElementCallbacks(o){return Xe._elementCallbacks?Xe._elementCallbacks.get(o):null}static _createObserver(){Xe._observerInstance=new Zt.window.ResizeObserver(o=>{for(const t of o){const e=Xe._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let Va=Xe;function i2(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function td(o){return t=>t+o}function Ua(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function Ag(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function Ms(o){return o&&o.nodeType===Node.COMMENT_NODE}function Ri(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}Va._observerInstance=null,Va._elementCallbacks=null;var Cg=Math.pow;function yg({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Ni(t)&&(t=t()),Ni(n)&&(n=n());const l=function(y){return y&&y.parentNode?y.offsetParent===Zt.document.body?null:y.offsetParent:null}(o),d=new qe(o),u=new qe(t);let f;const b=i&&function(y){y=Object.assign({top:0,bottom:0,left:0,right:0},y);const S=new qe(Zt.window);return S.top+=y.top,S.height-=y.top,S.bottom-=y.bottom,S.height-=y.bottom,S}(r)||null,w={targetRect:u,elementRect:d,positionedElementAncestor:l,viewportRect:b};if(n||i){const y=n&&new qe(n).getVisible();Object.assign(w,{limiterRect:y,viewportRect:b}),f=function(S,I){const{elementRect:B}=I,R=B.getArea(),$=S.map(Ct=>new ed(Ct,I)).filter(Ct=>!!Ct.name);let Y=0,et=null;for(const Ct of $){const{limiterIntersectionArea:zt,viewportIntersectionArea:be}=Ct;if(zt===R)return Ct;const Xt=Cg(be,2)+Cg(zt,2);Xt>Y&&(Y=Xt,et=Ct)}return et}(e,w)||new ed(e[0],w)}else f=new ed(e[0],w);return f}function xg(o){const{scrollX:t,scrollY:e}=Zt.window;return o.clone().moveBy(t,e)}class ed{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;const{left:i,top:r,name:l,config:d}=n;this.name=l,this.config=d,this._positioningFunctionCorrdinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;if(t){const e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{const n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=xg(this._rect),this._options.positionedElementAncestor&&function(t,e){const n=xg(new qe(e)),i=bg(e);let r=0,l=0;r-=n.left,l-=n.top,r+=e.scrollLeft,l+=e.scrollTop,r-=i.left,l-=i.top,t.moveBy(r,l)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Eg(o){const t=o.parentNode;t&&t.removeChild(o)}function s2({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i),l=t.clone().moveBy(0,-i),d=new qe(o).excludeScrollbarsAndBorders(),u=e&&n,f=[l,r].every(I=>d.contains(I));let{scrollX:b,scrollY:w}=o;const y=b,S=w;u?w-=d.top-t.top+i:f||(Sg(l,d)?w-=d.top-t.top+i:Dg(r,d)&&(w+=e?t.top-d.top-i:t.bottom-d.bottom+i)),f||(Ig(t,d)?b-=d.left-t.left+i:Mg(t,d)&&(b+=t.right-d.right+i)),b==y&&w===S||o.scrollTo(b,w)}function r2({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0}){const r=nd(o),l=e&&n;let d,u,f;for(;o!=r.document.body;)u=t(),d=new qe(o).excludeScrollbarsAndBorders(),f=d.contains(u),l?o.scrollTop-=d.top-u.top+i:f||(Sg(u,d)?o.scrollTop-=d.top-u.top+i:Dg(u,d)&&(o.scrollTop+=e?u.top-d.top-i:u.bottom-d.bottom+i)),f||(Ig(u,d)?o.scrollLeft-=d.left-u.left+i:Mg(u,d)&&(o.scrollLeft+=u.right-d.right+i)),o=o.parentNode}function Dg(o,t){return o.bottom>t.bottom}function Sg(o,t){return o.top<t.top}function Ig(o,t){return o.left<t.left}function Mg(o,t){return o.right>t.right}function nd(o){return $a(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function a2(o){if($a(o)){let t=o.commonAncestorContainer;return He(t)&&(t=t.parentNode),t}return o.parentNode}function Tg(o,t){const e=nd(o),n=new qe(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,l=new qe(r).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),i=i.parent}}return n}const l2={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},c2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ne=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;for(const t of"`-=[];',./\\")o[t]=t.charCodeAt(0);return o}(),d2=Object.fromEntries(Object.entries(ne).map(([o,t])=>[t,o.charAt(0).toUpperCase()+o.slice(1)]));function Ts(o){let t;if(typeof o=="string"){if(t=ne[o.toLowerCase()],!t)throw new z("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?ne.alt:0)+(o.ctrlKey?ne.ctrl:0)+(o.shiftKey?ne.shift:0)+(o.metaKey?ne.cmd:0);return t}function Ha(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return Ts(e.slice(0,-1));const n=Ts(e);return E.isMac&&n==ne.ctrl?ne.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Bg(o){let t=Ha(o);return Object.entries(E.isMac?l2:c2).reduce((e,[n,i])=>(t&ne[n]&&(t&=~ne[n],e+=i),e),"")+(t?d2[t]:"")}function od(o,t){const e=t==="ltr";switch(o){case ne.arrowleft:return e?"left":"right";case ne.arrowright:return e?"right":"left";case ne.arrowup:return"up";case ne.arrowdown:return"down"}}function kn(o){return Array.isArray(o)?o:[o]}function u2(o,t,e=1){if(typeof e!="number")throw new z("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(Zt.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(Zt.window.CKEDITOR_TRANSLATIONS)[0]);const i=t.id||t.string;if(n===0||!function(u,f){return!!Zt.window.CKEDITOR_TRANSLATIONS[u]&&!!Zt.window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(o,i))return e!==1?t.plural:t.string;const r=Zt.window.CKEDITOR_TRANSLATIONS[o].dictionary,l=Zt.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(u=>u===1?0:1),d=r[i];return typeof d=="string"?d:d[Number(l(e))]}Zt.window.CKEDITOR_TRANSLATIONS||(Zt.window.CKEDITOR_TRANSLATIONS={});const h2=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ng(o){return h2.includes(o)?"rtl":"ltr"}class p2{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Ng(this.uiLanguage),this.contentLanguageDirection=Ng(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=kn(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(l,d)=>d<r.length?r[d]:l)}(u2(this.uiLanguage,t,n),e)}}class ho extends qt(){constructor(t={},e={}){super();const n=wt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new z("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),l=e+n;this._items.splice(l,0,i),this._itemMap.set(r,i),this.fire("add",i,l),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new z("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new z("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,l)=>{const d=e._bindToCollection==this,u=e._bindToInternalToExternalMap.get(r);if(d&&u)this._bindToExternalToInternalMap.set(r,u),this._bindToInternalToExternalMap.set(u,r);else{const f=t(r);if(!f)return void this._skippedIndexesFromExternal.push(l);let b=l;for(const w of this._skippedIndexesFromExternal)l>w&&b--;for(const w of e._skippedIndexesFromExternal)b>=w&&b++;this._bindToExternalToInternalMap.set(r,f),this._bindToInternalToExternalMap.set(f,r),this.add(f,b);for(let w=0;w<e._skippedIndexesFromExternal.length;w++)b<=e._skippedIndexesFromExternal[w]&&e._skippedIndexesFromExternal[w]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,l)=>{const d=this._bindToExternalToInternalMap.get(r);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(l<f&&u.push(f-1),l>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new z("collection-add-invalid-id",this);if(this.get(n))throw new z("collection-add-item-already-exists",this)}else t[e]=n=N();return n}_remove(t){let e,n,i,r=!1;const l=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[l])):(i=t,n=i[l],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new z("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(d),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function on(o){const t=o.next();return t.done?null:t.value}class oo extends zi(Z()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new z("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class So{constructor(){this._listener=new(zi())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+Ts(n),n)})}set(t,e,n={}){const i=Ha(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(l,d)=>{e(d,()=>{d.preventDefault(),d.stopPropagation(),l.stop()}),l.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+Ts(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function Io(o){return wt(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function id(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function sd(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const g2=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function Pg(o,t){const e=String(o).matchAll(g2);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class ri extends ho{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new z("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}var f2=p(6062),Mt=p.n(f2),Og=p(4793),m2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Og.Z,m2),Og.Z.locals;class Jt extends zi(Z()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new ho,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=po.bind(this,this)}createCollection(t){const e=new ri(t);return this._viewCollections.add(e),e}registerChild(t){wt(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){wt(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new po(t)}extendTemplate(t){po.extend(this.template,t)}render(){if(this.isRendered)throw new z("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class po extends qt(){constructor(t){super(),Object.assign(this,jg(Rg(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new z("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Ga(n)?yield n:rd(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new k2({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new Lg({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new z("template-extend-render",[this,t]);Ug(t,jg(Rg(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new z("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),qa(this.text)?this._bindToObservable({schema:this.text,updater:b2(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),l=this.attributes[i];n&&(n.attributes[i]=r);const d=Hg(l)?l[0].ns:null;if(qa(l)){const u=Hg(l)?l[0].value:l;n&&qg(i)&&u.unshift(r),this._bindToObservable({schema:u,updater:_2(e,i,d),data:t})}else if(i=="style"&&typeof l[0]!="string")this._renderStyleAttribute(l[0],t);else{n&&r&&qg(i)&&l.unshift(r);const u=l.map(f=>f&&f.value||f).reduce((f,b)=>f.concat(b),[]).reduce(Fg,"");Bs(u)||e.setAttributeNS(d,i,u)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];qa(r)?this._bindToObservable({schema:[r],updater:w2(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const l of this.children)if(ad(l)){if(!i){l.setParent(e);for(const d of l)n.appendChild(d.element)}}else if(Ga(l))i||(l.isRendered||l.render(),n.appendChild(l.element));else if(si(l))n.appendChild(l);else if(i){const d={children:[],bindings:[],attributes:{}};t.revertData.children.push(d),l._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:d})}else n.appendChild(l.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,l]=e.split("@");return i.activateDomEventListener(r,l,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;zg(t,e,n);const r=t.filter(l=>!Bs(l)).filter(l=>l.observable).map(l=>l.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class Dr{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>zg(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class k2 extends Dr{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,l)=>{e&&!l.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(l):this.observable.fire(this.eventNameOrFunction,l))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class Lg extends Dr{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!Bs(super.getValue(t))&&(this.valueIfTrue||!0)}}function qa(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(qa):o instanceof Dr)}function zg(o,t,{node:e}){const n=function(r,l){return r.map(d=>d instanceof Dr?d.getValue(l):d)}(o,e);let i;i=o.length==1&&o[0]instanceof Lg?n[0]:n.reduce(Fg,""),Bs(i)?t.remove():t.set(i)}function b2(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function _2(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function w2(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function Rg(o){return Jc(o,t=>{if(t&&(t instanceof Dr||rd(t)||Ga(t)||ad(t)))return t})}function jg(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=kn(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)$g(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=kn(e[n].value)),$g(e,n)}(o.attributes);const t=[];if(o.children)if(ad(o.children))t.push(o.children);else for(const e of o.children)rd(e)||Ga(e)||si(e)?t.push(e):t.push(new po(e));o.children=t}return o}function $g(o,t){o[t]=kn(o[t])}function Fg(o,t){return Bs(t)?o:Bs(o)?t:`${o} ${t}`}function Vg(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function Ug(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),Vg(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),Vg(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new z("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)Ug(o.children[e++],n)}}function Bs(o){return!o&&o!==0}function Ga(o){return o instanceof Jt}function rd(o){return o instanceof po}function ad(o){return o instanceof ri}function Hg(o){return rt(o[0])&&o[0].ns}function qg(o){return o=="class"||o=="style"}class v2 extends ri{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new po({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=Dp(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Gg=p(6574),A2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Gg.Z,A2),Gg.Z.locals;const Wg=class extends Jt{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=o.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:e,value:n}of Array.from(o.attributes))Wg.presentationalAttributeNames.includes(e)&&this.element.setAttribute(e,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let Sr=Wg;Sr.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Kg=p(4906),C2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Kg.Z,C2),Kg.Z.locals;class Ie extends Jt{constructor(t){super(t);const e=this.bindTemplate,n=N();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new Sr,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",r=>!r),e.if("isVisible","ck-hidden",r=>!r),e.to("isOn",r=>r?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",r=>r||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,r=>!r),"aria-pressed":e.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":e.to("_tooltipString"),"data-cke-tooltip-position":e.to("tooltipPosition")},children:this.children,on:{click:e.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};E.isSafari&&(i.on.mousedown=e.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(t){const e=new Jt,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:n.to("label")}]}),e}_createKeystrokeView(){const t=new Jt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Bg(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=Bg(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Yg=p(5332),y2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Yg.Z,y2),Yg.Z.locals;class Wa extends Ie{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Jt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var Qg=p(6781),x2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Qg.Z,x2),Qg.Z.locals;class E2{constructor(t){this._components=new Map,this.editor=t}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(ld(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new z("componentfactory-item-missing",this,{name:t});return this._components.get(ld(t)).callback(this.editor.locale)}has(t){return this._components.has(ld(t))}}function ld(o){return String(o).toLowerCase()}var Zg=p(5485),D2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Zg.Z,D2),Zg.Z.locals;const cd=class extends Jt{constructor(o,t,e){super(o);const n=this.bindTemplate;this.buttonView=t,this.panelView=e,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new So,this.focusTracker=new oo,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",i=>!i)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,e]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,e,n)=>{n&&(this.panelPosition==="auto"?this.panelView.position=cd._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const o=(t,e)=>{this.isOpen&&(this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:t,southEast:e,southWest:n,northEast:i,northWest:r,southMiddleEast:l,southMiddleWest:d,northMiddleEast:u,northMiddleWest:f}=cd.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[e,n,l,d,o,i,r,u,f,t]:[n,e,d,l,o,r,i,f,u,t]}};let dd=cd;dd.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},dd._getOptimalPosition=yg;class S2 extends Jt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const t=this.children.first;typeof t.focus=="function"?t.focus():X("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}const Jg='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class I2 extends Ie{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Sr;return t.content=Jg,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var Xg=p(7686),M2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Xg.Z,M2),Xg.Z.locals;class ud extends Jt{constructor(t){super(t);const e=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new So,this.focusTracker=new oo,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new Ie;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new Ie,e=t.bindTemplate;return t.icon=Jg,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}class Ns{constructor(t){if(this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(r,l)=>{this[e](),l()})}}get first(){return this.focusables.find(hd)||null}get last(){return this.focusables.filter(hd).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let i=(e+n+t)%n;do{const r=this.focusables.get(i);if(hd(r))return r;i=(i+n+t)%n}while(i!==e);return null}}function hd(o){return!(!o.focus||!Ri(o.element))}class tf extends Jt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class T2 extends Jt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function ef(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class dt extends Z(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",nf,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",nf),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function nf(o){o.return=!1,o.stop()}class Yt extends Z(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",of,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",of),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function of(o){o.return=!1,o.stop()}class sf extends Yt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){V(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class rf extends qt(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new z("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function I(B,R=new Set){B.forEach($=>{u($)&&(R.has($)||(R.add($),$.pluginName&&!i._availablePlugins.has($.pluginName)&&i._availablePlugins.set($.pluginName,$),$.requires&&I($.requires,R)))})})(t),y(t);const l=[...function I(B,R=new Set){return B.map($=>u($)?$:i._availablePlugins.get($)).reduce(($,Y)=>R.has(Y)?$:(R.add(Y),Y.requires&&(y(Y.requires,Y),I(Y.requires,R).forEach(et=>$.add(et))),$.add(Y)),new Set)}(t.filter(I=>!b(I,e)))];(function(I,B){for(const R of B){if(typeof R!="function")throw new z("plugincollection-replace-plugin-invalid-type",null,{pluginItem:R});const $=R.pluginName;if(!$)throw new z("plugincollection-replace-plugin-missing-name",null,{pluginItem:R});if(R.requires&&R.requires.length)throw new z("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:$});const Y=i._availablePlugins.get($);if(!Y)throw new z("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:$});const et=I.indexOf(Y);if(et===-1){if(i._contextPlugins.has(Y))return;throw new z("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:$})}if(Y.requires&&Y.requires.length)throw new z("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:$});I.splice(et,1,R),i._availablePlugins.set($,R)}})(l,n);const d=l.map(I=>{let B=i._contextPlugins.get(I);return B=B||new I(r),i._add(I,B),B});return S(d,"init").then(()=>S(d,"afterInit")).then(()=>d);function u(I){return typeof I=="function"}function f(I){return u(I)&&!!I.isContextPlugin}function b(I,B){return B.some(R=>R===I||w(I)===R||w(R)===I)}function w(I){return u(I)?I.pluginName||I.name:I}function y(I,B=null){I.map(R=>u(R)?R:i._availablePlugins.get(R)||R).forEach(R=>{(function($,Y){if(!u($))throw Y?new z("plugincollection-soft-required",r,{missingPlugin:$,requiredBy:w(Y)}):new z("plugincollection-plugin-not-found",r,{plugin:$})})(R,B),function($,Y){if(f(Y)&&!f($))throw new z("plugincollection-context-required",r,{plugin:w($),requiredBy:w(Y)})}(R,B),function($,Y){if(Y&&b($,e))throw new z("plugincollection-required",r,{plugin:w($),requiredBy:w(Y)})}(R,B)})}function S(I,B){return I.reduce((R,$)=>$[B]?i._contextPlugins.has($)?R:R.then($[B].bind($)):R,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new z("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class af{constructor(t){this._contextOwner=null,this.config=new pg(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new rf(this,e);const n=this.config.get("language")||{};this.locale=new p2({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new ho}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new z("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new z("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new z("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class Ka extends Z(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class B2 extends So{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,l)=>{this.editor.execute(i),l()}}super.set(t,e,n)}}var lf=p(4717),N2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(lf.Z,N2),lf.Z.locals;const Ya=new WeakMap;function cf({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;Ya.has(r)||(Ya.set(r,new Map),r.registerPostFixer(l=>pd(r,l)),r.on("change:isComposing",()=>{o.change(l=>pd(r,l))},{priority:"high"})),Ya.get(r).set(t,{text:e,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(l=>pd(r,l))}function P2(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function pd(o,t){const e=Ya.get(o),n=[];let i=!1;for(const[r,l]of e)l.isDirectHost&&(n.push(r),df(t,r,l)&&(i=!0));for(const[r,l]of e){if(l.isDirectHost)continue;const d=O2(r);d&&(n.includes(d)||(l.hostElement=d,df(t,r,l)&&(i=!0)))}return i}function df(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let l=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),l=!0),(i||t.childCount==1)&&function(d,u){if(!d.isAttached()||Array.from(d.getChildren()).some(w=>!w.is("uiElement")))return!1;const f=d.document,b=f.selection.anchor;return!(f.isComposing&&b&&b.parent===d||!u&&f.isFocused&&(!b||b.parent===d))}(r,e.keepOnFocus)?function(d,u){return!u.hasClass("ck-placeholder")&&(d.addClass("ck-placeholder",u),!0)}(o,r)&&(l=!0):P2(o,r)&&(l=!0),l}function O2(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class ji{is(){throw new Error("is() method is abstract")}}const uf=function(o){return Zc(o,4)};class $i extends qt(ji){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new z("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=kt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=uf(this);return delete t.parent,t}}$i.prototype.is=function(o){return o==="node"||o==="view:node"};class ve extends $i{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof ve&&(this===t||this.data===t.data)}_clone(){return new ve(this.document,this.data)}}ve.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Mo extends ji{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new z("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new z("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Mo.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class To{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=hf(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=hf(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function hf(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return Hn(n)?(n.style!==void 0&&X("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&X("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),gd(n,r,l=>i.getAttribute(l))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return gd(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return gd(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function gd(o,t,e){const n=function(l){return Array.isArray(l)?l.map(d=>Hn(d)?(d.key!==void 0&&d.value!==void 0||X("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):Hn(l)?Object.entries(l):[[l,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([l,d])=>{i.forEach(u=>{(function(f,b){return f===!0||f===b||f instanceof RegExp&&b.match(f)})(l,u)&&function(f,b,w){if(f===!0)return!0;const y=w(b);return f===y||f instanceof RegExp&&!!String(y).match(f)}(d,u,e)&&r.push(u)})}),n.length&&!(r.length<n.length))return r}const Qa=function(o){return typeof o=="symbol"||no(o)&&dn(o)=="[object Symbol]"};var L2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z2=/^\w*$/;const R2=function(o,t){if(mn(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!Qa(o))||z2.test(o)||!L2.test(o)||t!=null&&o in Object(t)};function fd(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var l=o.apply(this,n);return e.cache=r.set(i,l)||r,l};return e.cache=new(fd.Cache||Oa),e}fd.Cache=Oa;const j2=fd;var $2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,F2=/\\(\\)?/g,V2=function(o){var t=j2(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace($2,function(e,n,i,r){t.push(i?r.replace(F2,"$1"):n||e)}),t});const U2=V2,H2=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var pf=Qt?Qt.prototype:void 0,gf=pf?pf.toString:void 0;const q2=function o(t){if(typeof t=="string")return t;if(mn(t))return H2(t,o)+"";if(Qa(t))return gf?gf.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},md=function(o){return o==null?"":q2(o)},kd=function(o,t){return mn(o)?o:R2(o,t)?[o]:U2(md(o))},G2=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},bd=function(o){if(typeof o=="string"||Qa(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},ff=function(o,t){for(var e=0,n=(t=kd(t,o)).length;o!=null&&e<n;)o=o[bd(t[e++])];return e&&e==n?o:void 0},mf=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},W2=function(o,t){return t.length<2?o:ff(o,mf(t,0,-1))},K2=function(o,t){return t=kd(t,o),(o=W2(o,t))==null||delete o[bd(G2(t))]},Y2=function(o,t){return o==null||K2(o,t)},Za=function(o,t,e){var n=o==null?void 0:ff(o,t);return n===void 0?e:n},_d=function(o,t,e){(e!==void 0&&!wr(o[t],e)||e===void 0&&!(t in o))&&Oc(o,t,e)},Q2=function(o){return function(t,e,n){for(var i=-1,r=Object(t),l=n(t),d=l.length;d--;){var u=l[o?d:++i];if(e(r[u],u,r)===!1)break}return t}}(),Z2=function(o){return no(o)&&za(o)},wd=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},J2=function(o){return Es(o,Ss(o))},X2=function(o,t,e,n,i,r,l){var d=wd(o,e),u=wd(t,e),f=l.get(u);if(f)_d(o,e,f);else{var b=r?r(d,u,e+"",o,t,l):void 0,w=b===void 0;if(w){var y=mn(u),S=!y&&yr(u),I=!y&&!S&&Fc(u);b=u,y||S||I?mn(d)?b=d:Z2(d)?b=Gp(d):S?(w=!1,b=qp(u,!0)):I?(w=!1,b=sg(u,!0)):b=[]:Hn(u)||zc(u)?(b=d,zc(d)?b=J2(d):rt(d)&&!Ni(d)||(b=ag(u))):w=!1}w&&(l.set(u,b),i(b,u,n,r,l),l.delete(u)),_d(o,e,b)}},t5=function o(t,e,n,i,r){t!==e&&Q2(e,function(l,d){if(r||(r=new Cr),rt(l))X2(t,e,d,n,o,i,r);else{var u=i?i(wd(t,d),l,d+"",t,e,r):void 0;u===void 0&&(u=l),_d(t,d,u)}},Ss)},Fi=function(o){return o},e5=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var kf=Math.max;const n5=function(o,t,e){return t=kf(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=kf(n.length-t,0),l=Array(r);++i<r;)l[i]=n[t+i];i=-1;for(var d=Array(t+1);++i<t;)d[i]=n[i];return d[t]=e(l),e5(o,this,d)}},o5=function(o){return function(){return o}},i5=La?function(o,t){return La(o,"toString",{configurable:!0,enumerable:!1,value:o5(t),writable:!0})}:Fi;var s5=Date.now;const r5=function(o){var t=0,e=0;return function(){var n=s5(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(i5),a5=function(o,t){return r5(n5(o,t,Fi),o+"")},l5=function(o,t,e){if(!rt(e))return!1;var n=typeof t;return!!(n=="number"?za(e)&&Rc(t,e.length):n=="string"&&t in e)&&wr(e[t],o)},bf=function(o){return a5(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,l=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,l&&l5(e[0],e[1],l)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var d=e[n];d&&o(t,d,n,r)}return t})},_f=bf(function(o,t,e){t5(o,t,e)}),c5=function(o,t,e,n){if(!rt(o))return o;for(var i=-1,r=(t=kd(t,o)).length,l=r-1,d=o;d!=null&&++i<r;){var u=bd(t[i]),f=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return o;if(i!=l){var b=d[u];(f=n?n(b,u,d):void 0)===void 0&&(f=rt(b)?b:Rc(t[i+1])?[]:{})}Lc(d,u,f),d=d[u]}return o},d5=function(o,t,e){return o==null?o:c5(o,t,e)};class u5{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let i=null,r=0,l=0,d=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const b=n.charAt(f);if(i===null)switch(b){case":":d||(d=n.substr(r,f-r),l=f+1);break;case'"':case"'":i=b;break;case";":{const w=n.substr(l,f-l);d&&u.set(d.trim(),w.trim()),d=null,r=f+1;break}}else b===i&&(i=null)}return u}(t).entries());for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(rt(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=vd(t);Y2(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!rt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=Za(this._styles,n);i&&!Array.from(Object.keys(i)).length&&this.remove(n)}}class h5{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(rt(e))Ad(n,vd(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:l}=i(e);Ad(n,r,l)}else Ad(n,t,e)}getNormalized(t,e){if(!t)return _f({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return Za(e,n);const i=n(t,e);if(i)return i}return Za(e,vd(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function vd(o){return o.replace("-",".")}function Ad(o,t,e){let n=e;rt(e)&&(n=_f({},Za(o,t),e)),d5(o,t,n)}class qn extends $i{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const l=Io(r);for(const[d,u]of l)u===null?l.delete(d):typeof u!="string"&&l.set(d,String(u));return l}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");wf(this._classes,r),this._attrs.delete("class")}this._styles=new u5(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof qn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new To(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,l){return typeof l=="string"?[new ve(r,l)]:(wt(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new ve(r,d):d instanceof Mo?new ve(r,d.data):d))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?wf(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of kn(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of kn(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of kn(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function wf(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}qn.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ir extends qn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=vf}}function vf(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}Ir.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ja extends Z(Ir){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Ja.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Af=Symbol("rootName");class Cf extends Ja{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Af)}set rootName(t){this._setCustomProperty(Af,t)}set _name(t){this.name=t}}Cf.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Vi{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new z("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new z("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=bt._createAt(t.startPosition):this._position=bt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof ve){if(t.isAtEnd)return this._position=bt._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof qn)return this.shallow?t.offset++:t=new bt(i,0),this._position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof ve){if(this.singleCharacters)return t=new bt(i,0),this._position=t,this._next();{let r,l=i.data.length;return i==this._boundaryEndParent?(l=this.boundaries.end.offset,r=new Mo(i,0,l),t=bt._createAfter(r)):(r=new Mo(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,l)}}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const l=new Mo(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",l,e,t,r)}return t=bt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof ve){if(t.isAtStart)return this._position=bt._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof qn)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new bt(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof ve){if(this.singleCharacters)return t=new bt(i,i.data.length),this._position=t,this._previous();{let r,l=i.data.length;if(i==this._boundaryStartParent){const d=this.boundaries.start.offset;r=new Mo(i,d,i.data.length-d),l=r.data.length,t=bt._createBefore(r)}else r=new Mo(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,l)}}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-d}t.offset-=r;const l=new Mo(n,t.offset,r);return this._position=t,this._formatReturnValue("text",l,e,t,r)}return t=bt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof Mo&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=bt._createAfter(e.textNode):(i=bt._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=bt._createBefore(e.textNode):(i=bt._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class bt extends ji{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Ja);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=bt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Vi(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=kt(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Vi(t)}clone(){return new bt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof bt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new z("view-createpositionat-offset-required",n)}return new bt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new bt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new z("view-position-after-root",t,{root:t});return new bt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new bt(t.textNode,t.offsetInText);if(!t.parent)throw new z("view-position-before-root",t,{root:t});return new bt(t.parent,t.index)}}bt.prototype.is=function(o){return o==="position"||o==="view:position"};class jt extends ji{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Vi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Xa,{direction:"backward"}),e=this.end.getLastMatchingPosition(Xa);return t.parent.is("$text")&&t.isAtStart&&(t=bt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=bt._createAfter(e.parent)),new jt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Xa);if(t.isAfter(this.end)||t.isEqual(this.end))return new jt(t,t);let e=this.end.getLastMatchingPosition(Xa,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new bt(n,0)),i&&i.is("$text")&&(e=new bt(i,i.data.length)),new jt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new jt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new jt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new jt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Vi(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new jt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Vi(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Vi(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new bt(t,e),new bt(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(bt._createBefore(t),e)}}function Xa(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}jt.prototype.is=function(o){return o==="range"||o==="view:range"};class Bo extends qt(ji){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=ct(this.getRanges());if(e!=ct(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof Bo||e instanceof Cd)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof jt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof bt)this._setRanges([new jt(e)]),this._setFakeOptions(i);else if(e instanceof $i){const r=!!i&&!!i.backward;let l;if(n===void 0)throw new z("view-selection-setto-required-second-parameter",this);l=n=="in"?jt._createIn(e):n=="on"?jt._createOn(e):new jt(bt._createAt(e,n)),this._setRanges([l],r),this._setFakeOptions(i)}else{if(!wt(e))throw new z("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new z("view-selection-setfocus-no-ranges",this);const n=bt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new jt(n,i),!0):this._addRange(new jt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof jt))throw new z("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new z("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new jt(t.start,t.end))}}Bo.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Cd extends qt(ji){constructor(...t){super(),this._selection=new Bo,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Cd.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Ps extends D{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const yd=Symbol("bubbling contexts");function xd(o){return class extends o{fire(t,...e){try{const n=t instanceof D?t:new D(this,t),i=Ed(this);if(!i.size)return;if(Mr(n,"capturing",this),Os(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),l=r?r.getContainedElement():null,d=!!l&&!!yf(i,l);let u=l||function(f){if(!f)return null;const b=f.start.parent,w=f.end.parent,y=b.getPath(),S=w.getPath();return y.length>S.length?b:w}(r);if(Mr(n,"atTarget",u),!d){if(Os(i,"$text",n,...e))return n.return;Mr(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(Os(i,"$root",n,...e))return n.return}else if(u.is("element")&&Os(i,u.name,n,...e))return n.return;if(Os(i,u,n,...e))return n.return;u=u.parent,Mr(n,"bubbling",u)}return Mr(n,"bubbling",this),Os(i,"$document",n,...e),n.return}catch(n){z.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=kn(n.context||"$document"),r=Ed(this);for(const l of i){let d=r.get(l);d||(d=new(qt()),r.set(l,d)),this.listenTo(d,t,e,n)}}_removeEventListener(t,e){const n=Ed(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=xd(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{xd[t]=o.prototype[t]})}function Mr(o,t,e){o instanceof Ps&&(o._eventPhase=t,o._currentTarget=e)}function Os(o,t,e,...n){const i=typeof t=="string"?o.get(t):yf(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function yf(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function Ed(o){return o[yd]||(o[yd]=new Map),o[yd]}class tl extends xd(Z()){constructor(t){super(),this._postFixers=new Set,this.selection=new Cd,this.roots=new ho({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class Ui extends qn{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=p5}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new z("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function p5(){if(Dd(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Dd(o)>1)return null;o=o.parent}return!o||Dd(o)>1?null:this.childCount}function Dd(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}Ui.DEFAULT_PRIORITY=10,Ui.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Sd extends qn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=g5}_insertChild(t,e){if(e&&(e instanceof $i||Array.from(e).length>0))throw new z("view-emptyelement-cannot-add",[this,e]);return 0}}function g5(){return null}Sd.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class el extends qn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=m5}_insertChild(t,e){if(e&&(e instanceof $i||Array.from(e).length>0))throw new z("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function f5(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==ne.arrowright){const l=i.domTarget.ownerDocument.defaultView.getSelection(),d=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(d||i.shiftKey){const u=l.focusNode,f=l.focusOffset,b=r.domPositionToView(u,f);if(b===null)return;let w=!1;const y=b.getLastMatchingPosition(S=>(S.item.is("uiElement")&&(w=!0),!(!S.item.is("uiElement")&&!S.item.is("attributeElement"))));if(w){const S=r.viewPositionToDom(y);d?l.collapse(S.parent,S.offset):l.extend(S.parent,S.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function m5(){return null}el.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Id extends qn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=k5}_insertChild(t,e){if(e&&(e instanceof $i||Array.from(e).length>0))throw new z("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function k5(){return null}Id.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Hi extends qt(ji){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,l){return typeof l=="string"?[new ve(r,l)]:(wt(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new ve(r,d):d instanceof Mo?new ve(r,d.data):d))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}Hi.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class xf{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new Hi(this.document,t)}createText(t){return new ve(this.document,t)}createAttributeElement(t,e,n={}){const i=new Ui(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;Hn(n)?i=n:r=n;const l=new Ir(this.document,t,e,r);return i.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),l}createEditableElement(t,e,n={}){const i=new Ja(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new Sd(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new el(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new Id(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Hn(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof bt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new z("view-writer-break-non-container-element",this.document);if(!e.parent)throw new z("view-writer-break-root",this.document);if(t.isAtStart)return bt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(bt._createAfter(e),n);const i=new jt(t,bt._createAt(e,"end")),r=new bt(n,0);this.move(i,r)}return bt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new bt(l,d))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return Df(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const l=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new bt(i,l))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new z("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof ve?bt._createAt(i,"end"):bt._createAt(e,"end");return this.move(jt._createIn(n),bt._createAt(e,"end")),this.remove(jt._createOn(n)),r}insert(t,e){Sf(e=wt(e)?[...e]:[e],this.document);const n=e.reduce((l,d)=>{const u=l[l.length-1],f=!d.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(d):l.push({breakAttributes:f,nodes:[d]}),l},[]);let i=null,r=t;for(const{nodes:l,breakAttributes:d}of n){const u=this._insertNodes(r,l,d);i||(i=u.start),r=u.end}return i?new jt(i,r):new jt(t)}remove(t){const e=t instanceof jt?t:jt._createOn(t);if(Tr(e,this.document),e.isCollapsed)return new Hi(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,l=i.offset-n.offset,d=r._removeChildren(n.offset,l);for(const f of d)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return e.start=u,e.end=u.clone(),new Hi(this.document,d)}clear(t,e){Tr(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let l;if(r.is("element")&&e.isSimilar(r))l=jt._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const d=r.getAncestors().find(u=>u.is("element")&&e.isSimilar(u));d&&(l=jt._createIn(d))}l&&(l.end.isAfter(t.end)&&(l.end=t.end),l.start.isBefore(t.start)&&(l.start=t.start),this.remove(l))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Ui))throw new z("view-writer-wrap-invalid-attribute",this.document);if(Tr(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(i=i.getLastMatchingPosition(l=>l.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new jt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Ui))throw new z("view-writer-unwrap-invalid-attribute",this.document);if(Tr(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,l=this._unwrapChildren(r,n.offset,i.offset,e),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new jt(d,u)}rename(t,e){const n=new Ir(this.document,t,e.getAttributes());return this.insert(bt._createAfter(e),n),this.move(jt._createIn(e),bt._createAt(n,0)),this.remove(jt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return bt._createAt(t,e)}createPositionAfter(t){return bt._createAfter(t)}createPositionBefore(t){return bt._createBefore(t)}createRange(t,e){return new jt(t,e)}createRangeOn(t){return jt._createOn(t)}createRangeIn(t){return jt._createIn(t)}createSelection(...t){return new Bo(...t)}createSlot(t="children"){if(!this._slotFactory)throw new z("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?Md(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new z("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?Td(t):t;const l=i._insertChild(r.offset,e);for(const b of e)this._addToClonedElementsGroup(b);const d=r.getShiftedBy(l),u=this.mergeAttributes(r);u.isEqual(r)||d.offset--;const f=this.mergeAttributes(d);return new jt(u,f)}_wrapChildren(t,e,n,i){let r=e;const l=[];for(;r<n;){const u=t.getChild(r),f=u.is("$text"),b=u.is("attributeElement");if(b&&this._wrapAttributeElement(i,u))l.push(new bt(t,r));else if(f||!b||b5(i,u)){const w=i._clone();u._remove(),w._appendChild(u),t._insertChild(r,w),this._addToClonedElementsGroup(w),l.push(new bt(t,r))}else this._wrapChildren(u,0,u.childCount,i);r++}let d=0;for(const u of l)u.offset-=d,u.offset!=e&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return jt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const l=[];for(;r<n;){const u=t.getChild(r);if(u.is("attributeElement"))if(u.isSimilar(i)){const f=u.getChildren(),b=u.childCount;u._remove(),t._insertChild(r,f),this._removeFromClonedElementsGroup(u),l.push(new bt(t,r),new bt(t,r+b)),r+=b,n+=b-1}else this._unwrapAttributeElement(i,u)?(l.push(new bt(t,r),new bt(t,r+1)),r++):(this._unwrapChildren(u,0,u.childCount,i),r++);else r++}let d=0;for(const u of l)u.offset-=d,!(u.offset==e||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return jt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,l=this._wrapChildren(r,n.offset,i.offset,e),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new jt(d,u)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Ef(t.clone());t.parent.is("$text")&&(t=Td(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new jt(t,t.getShiftedBy(1));this.wrap(i,e);const r=new bt(n.parent,n.index);n._remove();const l=r.nodeBefore,d=r.nodeAfter;return l instanceof ve&&d instanceof ve?Df(l,d):Ef(r)}_wrapAttributeElement(t,e){if(!If(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!If(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Tr(t,this.document),t.isCollapsed){const u=this._breakAttributes(t.start,e);return new jt(u,u)}const r=this._breakAttributes(i,e),l=r.parent.childCount,d=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-l,new jt(d,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new z("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new z("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new z("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&Bd(i.parent)||Bd(i))return t.clone();if(i.is("$text"))return this._breakAttributes(Td(t),e);if(n==i.childCount){const r=new bt(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new bt(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,l=i._clone();i.parent._insertChild(r,l),this._addToClonedElementsGroup(l);const d=i.childCount-n,u=i._removeChildren(n,d);l._appendChild(u);const f=new bt(i.parent,r);return this._breakAttributes(f,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function Md(o){let t=o.parent;for(;!Bd(t);){if(!t)return;t=t.parent}return t}function b5(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Ef(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new bt(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new bt(e,0):o}function Td(o){if(o.offset==o.parent.data.length)return new bt(o.parent.parent,o.parent.index+1);if(o.offset===0)return new bt(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new ve(o.root.document,t)),new bt(o.parent.parent,o.parent.index+1)}function Df(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new bt(o,e)}const _5=[ve,Ui,Ir,Sd,Id,el];function Sf(o,t){for(const e of o){if(!_5.some(n=>e instanceof n))throw new z("view-writer-insert-invalid-node-type",t);e.is("$text")||Sf(e.getChildren(),t)}}function Bd(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Tr(o,t){const e=Md(o.start),n=Md(o.end);if(!e||!n||e!==n)throw new z("view-writer-invalid-range-container",t)}function If(o,t){return o.id===null&&t.id===null}const Mf=o=>o.createTextNode(" "),Tf=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Bf=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},No=7,nl="⁠".repeat(No);function Gn(o){return He(o)&&o.data.substr(0,No)===nl}function Br(o){return o.data.length==No&&Gn(o)}function Nf(o){return Gn(o)?o.data.slice(No):o.data}function w5(o,t){if(t.keyCode==ne.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;Gn(n)&&i<=No&&e.collapse(n,0)}}}var Pf=p(9315),v5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Mt()(Pf.Z,v5),Pf.Z.locals;class A5 extends Z(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),E.isBlink&&!E.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new z("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!E.isAndroid)return;let t=null;const e=!(E.isBlink&&!E.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=bt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;Gn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Of(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){if(!this.domConverter.mapViewToDom(t))return;const e=Array.from(this.domConverter.mapViewToDom(t).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),i=this._diffNodeLists(e,n),r=this._findUpdateActions(i,e,n,C5);if(r.indexOf("update")!==-1){const l={equal:0,insert:0,delete:0};for(const d of r)if(d==="update"){const u=l.equal+l.insert,f=l.equal+l.delete,b=t.getChild(u);!b||b.is("uiElement")||b.is("rawElement")||this._updateElementMappings(b,e[f]),Eg(n[u]),l.equal++}else l[d]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?bt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&He(e.parent)&&Gn(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Gn(t))throw new z("view-renderer-filler-was-lost",this);Br(t)?t.remove():t.data=t.data.substr(No),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const d=l.findAncestor(u=>u.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof ve||r instanceof ve)&&(!E.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=nl+i),Lf(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(E.isAndroid){let w=null;for(const y of Array.from(n.childNodes)){if(w&&He(w)&&He(y)){n.normalize();break}w=y}}const i=e.inlineFillerPosition,r=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&Of(n.ownerDocument,l,i.offset);const d=this._diffNodeLists(r,l),u=this._findUpdateActions(d,r,l,y5);let f=0;const b=new Set;for(const w of u)w==="delete"?(b.add(r[f]),Eg(r[f])):w!=="equal"&&w!=="update"||f++;f=0;for(const w of u)w==="insert"?(Ag(n,f,l[f]),f++):w==="update"?(Lf(r[f],l[f].data),f++):w==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[f])),f++);for(const w of b)w.parentNode||this.domConverter.unbindDomElement(w)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),U(t,e,x5.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],l=[],d=[];const u={equal:0,insert:0,delete:0};for(const f of t)f==="insert"?d.push(n[u.equal+u.insert]):f==="delete"?l.push(e[u.equal+u.delete]):(r=r.concat(U(l,d,i).map(b=>b==="equal"?"update":b)),r.push("equal"),l=[],d=[]),u[f]++;return r.concat(U(l,d,i).map(f=>f==="equal"?"update":f))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(E.isBlink&&!E.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&E.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const d=l.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent=" ",d}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),E.isGecko&&function(r,l){const d=r.parent;if(d.nodeType!=Node.ELEMENT_NODE||r.offset!=d.childNodes.length-1)return;const u=d.childNodes[r.offset];u&&u.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Of(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(He(i))return i.data=nl+i.data,i;{const r=o.createTextNode(nl);return Array.isArray(t)?n.splice(e,0,r):Ag(t,e,r),r}}function C5(o,t){return si(o)&&si(t)&&!He(o)&&!He(t)&&!Ms(o)&&!Ms(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function y5(o,t){return si(o)&&si(t)&&He(o)&&He(t)}function x5(o,t,e){return t===e||(He(t)&&He(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function Lf(o,t){const e=o.data;if(e==t)return;const n=M(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const E5=Bf(Zt.document),D5=Mf(Zt.document),S5=Tf(Zt.document),ol="data-ck-unsafe-attribute-",zf="data-ck-unsafe-element";class il{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new To,this._encounteredRawContentDomNodes=new WeakSet,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Zt.document:Zt.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new Bo(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const l=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),d=[];let u;for(;u=l.nextNode();)d.push(u);for(const f of d){for(const w of f.getAttributeNames())this.setDomElementAttribute(f,w,f.getAttribute(w));const b=f.tagName.toLowerCase();this._shouldRenameElement(b)&&($f(b),f.replaceWith(this._createReplacementDomElement(b,f)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?($f(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(const i of t.getAttributeKeys())this.setDomElementAttribute(n,i,t.getAttribute(i),t)}if(e.withChildren!==!1)for(const i of this.viewChildrenToDom(t,e))n.appendChild(i);return n}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||X("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(ol+e)&&r&&t.removeAttribute(ol+e),t.setAttribute(r?e:ol+e,n)}removeDomElementAttribute(t,e){e!=zf&&(t.removeAttribute(e),t.removeAttribute(ol+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const l=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!on(r.getAttributes());l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(l&&X("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Gn(n)&&(i+=No),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const l=t.nodeBefore;if(i=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(l),!i)return null;n=i.parentNode,r=i.nextSibling}return He(r)&&Gn(r)?{parent:r,offset:No}:{parent:n,offset:i?Ua(i)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;const n=this.getHostViewElement(t);if(n)return n;if(Ms(t)&&e.skipComments)return null;if(He(t)){if(Br(t))return null;{const i=this._processDataFromDomText(t);return i===""?null:new ve(this.document,i)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let i;if(this.isDocumentFragment(t))i=new Hi(this.document),e.bind&&this.bindDocumentFragments(t,i);else{i=this._createViewElement(t,e),e.bind&&this.bindElements(t,i);const r=t.attributes;if(r)for(let l=r.length,d=0;d<l;d++)i._setAttribute(r[d].name,r[d].value);if(this._isViewElementWithRawContent(i,e)||Ms(t)){const l=Ms(t)?t.data:t.innerHTML;return i._setCustomProperty("$rawContent",l),this._encounteredRawContentDomNodes.add(t),i}}if(e.withChildren!==!1)for(const r of this.domChildrenToView(t,e))i._appendChild(r);return i}}*domChildrenToView(t,e){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],r=this.domToView(i,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;He(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),l=this.domRangeToView(r);l&&n.push(l)}return new Bo(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new jt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,Ua(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return bt._createBefore(n);if(He(t)){if(Br(t))return this.domPositionToView(t.parentNode,Ua(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(Gn(t)&&(r-=No,r=r<0?0:r),new bt(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new bt(i,0)}else{const i=t.childNodes[e-1];if(He(i)&&Br(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,Ua(i));const r=He(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new bt(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Br(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof ve?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof ve?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=Zt.window,r=[];Rf(e,l=>{const{scrollLeft:d,scrollTop:u}=l;r.push([d,u])}),e.focus(),Rf(e,l=>{const[d,u]=r.shift();l.scrollLeft=d,l.scrollTop=u}),Zt.window.scrollTo(n,i)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(E5):!(t.tagName!=="BR"||!jf(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(S5)||function(e,n){return e.isEqualNode(D5)&&jf(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=kg(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Mf(this._domDocument);case"markedNbsp":return Tf(this._domDocument);case"br":return Bf(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(He(t)&&Gn(t)&&e<No||this.isElement(t)&&Gn(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(f,b){return kg(f).some(y=>y.tagName&&b.includes(y.tagName.toLowerCase()))}(t,this.preElements))return Nf(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),l=this._checkShouldRightTrimDomText(t,i);r&&(e=e.replace(/^ /,"")),l&&(e=e.replace(/ $/,"")),e=Nf(new Text(e)),e=e.replace(/ \u00A0/g,"  ");const d=i&&this.isElement(i)&&i.tagName!="BR",u=i&&He(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!i||d||u)&&(e=e.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Gn(t)}_getTouchingInlineViewNode(t,e){const n=new Vi({startPosition:e?bt._createAfter(t):bt._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"firstChild":"lastChild",i=e?"nextSibling":"previousSibling";let r=!0,l=t;do if(!r&&l[n]?l=l[n]:l[i]?(l=l[i],r=!1):(l=l.parentNode,r=!0),!l||this._isBlockElement(l))return null;while(!He(l)&&l.tagName!="BR"&&!this._isInlineObjectElement(l));return l}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(Ms(t))return new el(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new qn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(zf,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function Rf(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function jf(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function $f(o){o==="script"&&X("domconverter-unsafe-script-element-detected"),o==="style"&&X("domconverter-unsafe-style-element-detected")}class Po extends zi(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Ff=bf(function(o,t){Es(t,Ss(t),o)});class Ls{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Ff(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ai extends Po{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Ls(this.view,e,n))}}class I5 extends ai{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return Ts(this)}};this.fire(t.type,t,e)}}const Nd=function(){return $t.Date.now()};var M5=/\s/;const T5=function(o){for(var t=o.length;t--&&M5.test(o.charAt(t)););return t};var B5=/^\s+/;const N5=function(o){return o&&o.slice(0,T5(o)+1).replace(B5,"")};var P5=/^[-+]0x[0-9a-f]+$/i,O5=/^0b[01]+$/i,L5=/^0o[0-7]+$/i,z5=parseInt;const Vf=function(o){if(typeof o=="number")return o;if(Qa(o))return NaN;if(rt(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=rt(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=N5(o);var e=O5.test(o);return e||L5.test(o)?z5(o.slice(2),e?2:8):P5.test(o)?NaN:+o};var R5=Math.max,j5=Math.min;const Nr=function(o,t,e){var n,i,r,l,d,u,f=0,b=!1,w=!1,y=!0;if(typeof o!="function")throw new TypeError("Expected a function");function S(Y){var et=n,Ct=i;return n=i=void 0,f=Y,l=o.apply(Ct,et)}function I(Y){var et=Y-u;return u===void 0||et>=t||et<0||w&&Y-f>=r}function B(){var Y=Nd();if(I(Y))return R(Y);d=setTimeout(B,function(et){var Ct=t-(et-u);return w?j5(Ct,r-(et-f)):Ct}(Y))}function R(Y){return d=void 0,y&&n?S(Y):(n=i=void 0,l)}function $(){var Y=Nd(),et=I(Y);if(n=arguments,i=this,u=Y,et){if(d===void 0)return function(Ct){return f=Ct,d=setTimeout(B,t),b?S(Ct):l}(u);if(w)return clearTimeout(d),d=setTimeout(B,t),S(u)}return d===void 0&&(d=setTimeout(B,t)),l}return t=Vf(t)||0,rt(e)&&(b=!!e.leading,r=(w="maxWait"in e)?R5(Vf(e.maxWait)||0,t):r,y="trailing"in e?!!e.trailing:y),$.cancel=function(){d!==void 0&&clearTimeout(d),f=0,n=u=i=d=void 0},$.flush=function(){return d===void 0?l:R(Nd())},$};class $5 extends Po{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Nr(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new Bo(e.getRanges(),{backward:e.isBackward,fake:!1});t!=ne.arrowleft&&t!=ne.arrowup||n.setTo(n.getFirstPosition()),t!=ne.arrowright&&t!=ne.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const F5=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},V5=function(o){return this.__data__.has(o)};function sl(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new Oa;++t<e;)this.add(o[t])}sl.prototype.add=sl.prototype.push=F5,sl.prototype.has=V5;const U5=sl,H5=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},q5=function(o,t){return o.has(t)},Uf=function(o,t,e,n,i,r){var l=1&e,d=o.length,u=t.length;if(d!=u&&!(l&&u>d))return!1;var f=r.get(o),b=r.get(t);if(f&&b)return f==t&&b==o;var w=-1,y=!0,S=2&e?new U5:void 0;for(r.set(o,t),r.set(t,o);++w<d;){var I=o[w],B=t[w];if(n)var R=l?n(B,I,w,t,o,r):n(I,B,w,o,t,r);if(R!==void 0){if(R)continue;y=!1;break}if(S){if(!H5(t,function($,Y){if(!q5(S,Y)&&(I===$||i(I,$,e,n,r)))return S.push(Y)})){y=!1;break}}else if(I!==B&&!i(I,B,e,n,r)){y=!1;break}}return r.delete(o),r.delete(t),y},G5=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},W5=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var Hf=Qt?Qt.prototype:void 0,Pd=Hf?Hf.valueOf:void 0;const K5=function(o,t,e,n,i,r,l){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new Ra(o),new Ra(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wr(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var d=G5;case"[object Set]":var u=1&n;if(d||(d=W5),o.size!=t.size&&!u)return!1;var f=l.get(o);if(f)return f==t;n|=2,l.set(o,t);var b=Uf(d(o),d(t),n,i,r,l);return l.delete(o),b;case"[object Symbol]":if(Pd)return Pd.call(o)==Pd.call(t)}return!1};var Y5=Object.prototype.hasOwnProperty;const Q5=function(o,t,e,n,i,r){var l=1&e,d=qc(o),u=d.length;if(u!=qc(t).length&&!l)return!1;for(var f=u;f--;){var b=d[f];if(!(l?b in t:Y5.call(t,b)))return!1}var w=r.get(o),y=r.get(t);if(w&&y)return w==t&&y==o;var S=!0;r.set(o,t),r.set(t,o);for(var I=l;++f<u;){var B=o[b=d[f]],R=t[b];if(n)var $=l?n(R,B,b,t,o,r):n(B,R,b,o,t,r);if(!($===void 0?B===R||i(B,R,e,n,r):$)){S=!1;break}I||(I=b=="constructor")}if(S&&!I){var Y=o.constructor,et=t.constructor;Y==et||!("constructor"in o)||!("constructor"in t)||typeof Y=="function"&&Y instanceof Y&&typeof et=="function"&&et instanceof et||(S=!1)}return r.delete(o),r.delete(t),S};var qf="[object Arguments]",Gf="[object Array]",rl="[object Object]",Wf=Object.prototype.hasOwnProperty;const Z5=function(o,t,e,n,i,r){var l=mn(o),d=mn(t),u=l?Gf:Er(o),f=d?Gf:Er(t),b=(u=u==qf?rl:u)==rl,w=(f=f==qf?rl:f)==rl,y=u==f;if(y&&yr(o)){if(!yr(t))return!1;l=!0,b=!1}if(y&&!b)return r||(r=new Cr),l||Fc(o)?Uf(o,t,e,n,i,r):K5(o,t,u,e,n,i,r);if(!(1&e)){var S=b&&Wf.call(o,"__wrapped__"),I=w&&Wf.call(t,"__wrapped__");if(S||I){var B=S?o.value():o,R=I?t.value():t;return r||(r=new Cr),i(B,R,e,n,r)}}return!!y&&(r||(r=new Cr),Q5(o,t,e,n,i,r))},Kf=function o(t,e,n,i,r){return t===e||(t==null||e==null||!no(t)&&!no(e)?t!=t&&e!=e:Z5(t,e,n,i,o,r))},J5=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Kf(o,t,void 0,e):!!n};class Yf extends Po{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const l of t){const d=e.mapDomToView(l.target);d&&(d.is("uiElement")||d.is("rawElement")||l.type!=="childList"||this._isBogusBrMutation(l)||i.add(d))}for(const l of t){const d=e.mapDomToView(l.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&l.type==="characterData"){const u=e.findCorrespondingViewText(l.target);u&&!i.has(u.parent)?n.add(u):!u&&Gn(l.target)&&i.add(e.mapDomToView(l.target.parentNode))}}let r=!1;for(const l of n)r=!0,this.renderer.markToSync("text",l);for(const l of i){const d=e.mapViewToDom(l),u=Array.from(l.getChildren()),f=Array.from(e.domChildrenToView(d,{withChildren:!1}));J5(u,f,X5)||(r=!0,this.renderer.markToSync("children",l))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function X5(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class Od extends ai{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class tx extends Po{constructor(t){super(t),this.mutationObserver=t.getObserver(Yf),this.focusObserver=t.getObserver(Od),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Nr(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Nr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!E.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.focusObserver.flush(),this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ex extends ai{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Qf{constructor(t,e={}){this._files=e.cacheFiles?Zf(t):null,this._native=t}get files(){return this._files||(this._files=Zf(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Zf(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class nx extends ai{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,l=null,d=[];if(t.dataTransfer&&(r=new Qf(t.dataTransfer)),t.data!==null?l=t.data:r&&(l=r.getData("text/plain")),i.selection.isFake)d=Array.from(i.selection.getRanges());else if(e.length)d=e.map(u=>n.domConverter.domRangeToView(u));else if(E.isAndroid){const u=t.target.ownerDocument.defaultView.getSelection();d=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(E.isAndroid&&t.inputType=="insertCompositionText"&&l&&l.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(d[0].end)]});else if(t.inputType=="insertText"&&l&&l.includes(`
`;else{let e=null;for(const n of o.getChildren()){const i=Wk(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(Gk.includes(e.name)||Gk.includes(n.name)?t+=`
`:t+=`
